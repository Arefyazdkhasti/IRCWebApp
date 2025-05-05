window.addEventListener('load', function (ev) {
    const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('CriOS') == -1 &&
        navigator.userAgent.indexOf('FxiOS') == -1;

    const isIos = (
        ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(
            navigator.platform,
        ) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );

    const isAndroid = /android/i.test(navigator.userAgent);


    const isPwaInstalled = window.navigator.standalone == true || // iOS PWA Standalone
        document.referrer.includes('android-app://') || // Android Trusted Web App
        ["fullscreen", "standalone", "minimal-ui"].some(
            (displayMode) => window.matchMedia('(display-mode: ' + displayMode + ')').matches
        ) // Chrome PWA (supporting fullscreen, standalone, minimal-ui)


    showPlatformSpecificMessages(true, true, true, true);
});


function showPlatformSpecificMessages(isIos, isSafari, isAndroid, isPwaInstalled) {
    //add loading screen
    document.getElementById('splash-screen').style.display = 'block';

    if (isIos && isSafari) {
        if (isPwaInstalled) {
            // Download main.dart.js
            _flutter.loader.loadEntrypoint({
                serviceWorker: {
                    serviceWorkerVersion: serviceWorkerVersion,
                },
                onEntrypointLoaded: function (engineInitializer) {
                    engineInitializer.initializeEngine().then(function (appRunner) {
                        // Remove splash
                        setTimeout(() => document.getElementById('splash-screen').style.display = 'none', 400);
                        appRunner.runApp();
                    });
                    if ('serviceWorker' in navigator) {
                        // Listen for messages from the service worker
                        navigator.serviceWorker.addEventListener('message', (event) => {
                            console.log('Message received from service worker:', event.data);

                            // Ensure the message has a valid type
                            if (!event.data.messageType) {
                                return;
                            }

                            // Handle different types of messages
                            switch (event.data.messageType) {
                                case 'notification-clicked':
                                    const notification = event.data.notification;
                                    const title = notification.title || 'No Title';
                                    const body = notification.body || 'No Body';
                                    const data = notification.data || 'No Data';

                                    window.postMessage({
                                        type: 'NOTIFICATION_CLICKED',
                                        title: title,
                                        body: body,
                                        data: data,
                                    });
                                    break;
                                default:
                                    console.warn('Unknown message type received:', event.data.messageType);
                                    break;
                            }
                        });
                    }
                }
            });
        } else {
            // Remove splash
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('supported-safari-message').style.display = 'flex';
        }
    } else if (isIos && !isSafari) {
        // Remove splash
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('unsupported-non-safari-message').style.display = 'block';
    } else if (isAndroid) {
        // Remove splash
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('unsupported-android-message').style.display = 'block';
    } else {
        // Remove splash
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('unsupported-desktop-message').style.display = 'block';
    }
}