function setStatusBarColor(color) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', color);
    } else {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        metaThemeColor.content = color;
        document.head.appendChild(metaThemeColor);
    }
}

setStatusBarColor('#0F53D9');