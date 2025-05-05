'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "890f457b879b103bea56dc3002cc629b",
"main.dart.js_24.part.js": "35760b8203d33584903087a4ca486991",
"main.dart.js_34.part.js": "749363964abd7d68a95679695625bef0",
"version.json": "3fa0cd84a07304912cd9c358bdd0c30a",
"main.dart.js_7.part.js": "146a16fdcb8bcfcc321c6c81e8a28e5d",
"main.dart.js_12.part.js": "41a5bdc3ea838b00992ee890ca387273",
"main.dart.js_6.part.js": "c07e2a42f1810887e9b72641aa46b7e9",
"index.html": "f9c5fe03a85a68aa717645289d5df260",
"/": "f9c5fe03a85a68aa717645289d5df260",
"main.dart.js_13.part.js": "ee98542c33608017a0d4170969b2ce9c",
"main.dart.js_35.part.js": "58bcf23558982da7831a31d96902e2d3",
"main.dart.js_25.part.js": "0f87d3bb2f8ff548ae37bcbab6fdd024",
"firebase-messaging-sw.js": "d031e67ed4f1dd1debb7fc5cec463194",
"main.dart.js_11.part.js": "62dd2fd1d9205efec620dea2a4ecb00b",
"main.dart.js_4.part.js": "28c63530143b7213a87f691bda414ff0",
"main.dart.js": "13a40339930da50046d3737d823c2bc4",
"main.dart.js_18.part.js": "3be403b760219791c562064ce492e1af",
"main.dart.js_27.part.js": "dba11bbc57063a385120df51f9e11e19",
"main.dart.js_37.part.js": "639bd8b5cf1fca23151596992567fb67",
"main.dart.js_19.part.js": "c59977cf87b573661c823b249a90a48f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_36.part.js": "c89983d0c93c6a70157368fdf5605c13",
"main.dart.js_26.part.js": "bfa20f9aaf7bc5f1435bd78ef35b7da5",
"main.dart.js_10.part.js": "0b65d9514c2658131b07738128b284c3",
"main.dart.js_5.part.js": "7f0dd7697d95fd0061fb002495763c1c",
"script/main-screen.js": "5782a82571789514754f0182b5ae1118",
"script/firebase/firebase-app-compat.js": "467d3d0962cc899d6a5fae5aa5772e12",
"script/firebase/firebase-messaging-compat.js": "4d70c7d8c0d7124238774ab7fb422f6f",
"script/load_app_translation.js": "f3bf758665683e98c610f6ddec661c30",
"script/app-translation.js": "77b3461538cb82aae23339a46a4315c4",
"script/status-bar-color.js": "b32b9779cd6f0b22f1d1515075d0116a",
"script/web_engage.js": "2d9f3c7a1e1501a246889bb38f72995c",
"main.dart.js_15.part.js": "3bdea34ae64ec8b4483192ee8da6bc14",
"favicon.png": "1a25d97f54f92d7b09943ad18b425163",
"main.dart.js_23.part.js": "c14ac20053b0bceffdbbe7b4829965fd",
"main.dart.js_33.part.js": "d89b233ddff51d55f3a57fc656796c5e",
"main.dart.js_9.part.js": "d508ad3283ae20010ece464c1d18eafe",
"main.dart.js_40.part.js": "1952c1d7dd0a71ace92a2c5d2c711d82",
"main.dart.js_32.part.js": "a4f847bec9866b64e60dd61584ea39bd",
"main.dart.js_22.part.js": "e9f1453c91f10bebd51dce69ffd94767",
"main.dart.js_8.part.js": "f390a68adc931da0010747e319eb81b4",
"icons/icsearchlogo.svg": "36f35a5085eca998645c46a15374a609",
"icons/irc_logo.svg": "6114e559e4063e98a76b8653a6da5dc4",
"icons/qrcode.png": "bd029fd3617d36c0ac34aaa83d3e9e44",
"icons/Icon-192.png": "a6be17a814215d094788718b440ed822",
"icons/Icon-maskable-192.png": "a6be17a814215d094788718b440ed822",
"icons/bazaar.svg": "43fbfde52a4be5337d03b76a48bd186e",
"icons/myket.svg": "e8a262ee05935988bcbbb568d385c50f",
"icons/google_play.svg": "7c0da843b1fc5c18d7dfff458181789c",
"icons/Icon-maskable-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"icons/Icon-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"style.css": "5ff66bff6a739e66c06b7b0414669e27",
"manifest.json": "3111d79515bb8fe8a491c8107602ddd6",
"main.dart.js_14.part.js": "392be4bbd8a56d17407309951b27814e",
"main.dart.js_1.part.js": "bbc98a03e99cbe7f6153a2df6613823d",
"main.dart.js_20.part.js": "937dc2efc749f293744598cd022e00fc",
"main.dart.js_30.part.js": "d6f974c8ecbc8431f6d7deb68fd27e18",
"main.dart.js_39.part.js": "71bfb973e047408a74bbab1e9c35a8d7",
"main.dart.js_29.part.js": "df665a523d6b8789f2c469e3ca857f91",
"main.dart.js_3.part.js": "164961b7c954709d1c570c01f9a2cb47",
"fonts/Estedad-Medium.svg": "9bf8092db7ad56745c36877fe5057c26",
"fonts/Estedad-Medium.woff": "770254b595a0041c27bcc7ccd258ab49",
"fonts/Estedad-Medium.eot": "512be8ffa330e50352c27289fee7c772",
"fonts/Estedad-Medium.woff2": "93ce551680f95aaabe97a034bad7f14b",
"fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"main.dart.js_16.part.js": "c3df886fb091ff76fdad046097f5e796",
"assets/AssetManifest.json": "c6e02524f4a66dcb38d2cdb732a31967",
"assets/NOTICES": "9edefdd62899388f2e6818687c85e23c",
"assets/pubspec.yaml": "05c89c1871d7bd10b1df6cac0e80ec6b",
"assets/FontManifest.json": "339056cb1448d968b8435214994ab3eb",
"assets/AssetManifest.bin.json": "b3a09caee3661d700b45198360a546cb",
"assets/android/app/build.gradle": "57d269081eddabaadacab3ee2eb66fb0",
"assets/packages/pateh/pateh_assets/images/svgs/info_icon.svg": "c8de1bdb95d29383cc38a2391112c8a2",
"assets/packages/pateh/pateh_assets/images/svgs/pateh_name.svg": "d3319d5fe9989cae99da7e93e2c4f4c4",
"assets/packages/pateh/pateh_assets/images/svgs/ai_star.svg": "728548306d44c84ac32d02915bd883e0",
"assets/packages/pateh/pateh_assets/images/svgs/empty_list_passenger.svg": "db69ab86a52eec6ff81177126a20bef2",
"assets/packages/pateh/pateh_assets/images/svgs/ai_character.svg": "427bb0ee9a37ca231005c4062464fd60",
"assets/packages/pateh/pateh_assets/images/svgs/credit_card.svg": "0c4bf88b3ccd297a065bdd30ce3e6939",
"assets/packages/pateh/pateh_assets/images/svgs/light_bus_ticket_success.svg": "fb761104ccf7ec2c269f1843dac3cb80",
"assets/packages/pateh/pateh_assets/images/svgs/dark_flight_ticket_success.svg": "02f2245401d67c9ba5477fed6545659a",
"assets/packages/pateh/pateh_assets/images/svgs/profile_avatar.svg": "d655bb5d467294a52c49566958f54ee9",
"assets/packages/pateh/pateh_assets/images/svgs/light_ticket_fail.svg": "484df8aff954e5bceca0507beeb06c62",
"assets/packages/pateh/pateh_assets/images/svgs/dark_ticket_fail.svg": "8f89c076a9c6f5e317cdc9daf6393aac",
"assets/packages/pateh/pateh_assets/images/svgs/avatar_ring.svg": "7484c4fa410f19d527cb79a0d2c2effa",
"assets/packages/pateh/pateh_assets/images/svgs/dark_bus_ticket_success.svg": "31ff4c4f72033219b57b2fffd8d000c8",
"assets/packages/pateh/pateh_assets/images/svgs/iranicard.svg": "26fee8b26f80c519dc2d9da989ff8326",
"assets/packages/pateh/pateh_assets/images/svgs/light_flight_ticket_success.svg": "57055d019ad29775a05e3fa0e229fd61",
"assets/packages/pateh/pateh_assets/images/svgs/pateh.svg": "f7a2df9a34d793a5f72dc69f6e41b43d",
"assets/packages/pateh/pateh_assets/images/weather/sleet.png": "5d8c6b2541de541e06a29ebaf755a116",
"assets/packages/pateh/pateh_assets/images/weather/fog.png": "8e9a34b77b1981704b7134cabf86b1fe",
"assets/packages/pateh/pateh_assets/images/weather/rain-snow-showers-night.png": "946cbf528d4a6a24b1459398def8c75d",
"assets/packages/pateh/pateh_assets/images/weather/showers-night.png": "c8be175a538c31f44c547a83c3777221",
"assets/packages/pateh/pateh_assets/images/weather/partly-cloudy-night.png": "ba5a87c369b4bb53f5f27eca521461ab",
"assets/packages/pateh/pateh_assets/images/weather/thunder.png": "e7ab8abd6d11fa25360f1dce5ada5e70",
"assets/packages/pateh/pateh_assets/images/weather/thunder-showers-night.png": "c6d0f49366b1d17553d52f5a43adae74",
"assets/packages/pateh/pateh_assets/images/weather/snow.png": "a1416d7d2dc3f748a596295a9d10c1b2",
"assets/packages/pateh/pateh_assets/images/weather/rain-snow-showers-day.png": "190379c73737bbb06bc4041d62628908",
"assets/packages/pateh/pateh_assets/images/weather/wind.png": "a01fa76412f2c917fca5da61327adc2c",
"assets/packages/pateh/pateh_assets/images/weather/clear-night.png": "3810d1191230f994f0a290b63dcd86f6",
"assets/packages/pateh/pateh_assets/images/weather/snow-showers-day.png": "6574e3ac9ecc96b32c97db44c58c6efa",
"assets/packages/pateh/pateh_assets/images/weather/showers-day.png": "a0f681956aca495c0076bae080d0029e",
"assets/packages/pateh/pateh_assets/images/weather/cloudy.png": "8ea16a0c352cbd7ee2e955c6876516a1",
"assets/packages/pateh/pateh_assets/images/weather/thunder-showers-day.png": "524eb0e59e01e641b43413da38ec71c7",
"assets/packages/pateh/pateh_assets/images/weather/rain-snow.png": "bd0328efdc861c6153e004e8c751a4f9",
"assets/packages/pateh/pateh_assets/images/weather/partly-cloudy-day.png": "e7d2f4d5b9c1676e352f162cccdf7ad3",
"assets/packages/pateh/pateh_assets/images/weather/hail.png": "2cde678a2c491952d9e3f3ee6bbec352",
"assets/packages/pateh/pateh_assets/images/weather/thunder-rain.png": "7c8c803f176b0d09ce6453194b3922f2",
"assets/packages/pateh/pateh_assets/images/weather/snow-showers-night.png": "cd8f126cf6f4db11308b6c267a750565",
"assets/packages/pateh/pateh_assets/images/weather/rain.png": "9e06de898b60daaec69e8a6aaef67aba",
"assets/packages/pateh/pateh_assets/images/weather/clear-day.png": "f8c51965dda5de4b42bf4390e9ff64eb",
"assets/packages/pateh/pateh_assets/images/default.png": "9ae1ed52feef50c9f933f1c9a3fbf9c5",
"assets/packages/pateh/pateh_assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/packages/pateh/pateh_assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/packages/pateh/pateh_assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/packages/pateh/pateh_assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/packages/pateh/pateh_assets/fonts/icons/Pateh.ttf": "969056b581c1ca692c1d1e2648c7546f",
"assets/packages/pateh/pateh_assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/packages/pateh/pateh_assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/packages/pateh/pateh_assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/packages/pateh/pubspec.yaml": "b9b1f2a31bfc68eb262b8435ec7ac7b3",
"assets/packages/pateh/android/app/build.gradle": "aea12eac19843c147207acb7c12dacc9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/dual_custom_date_picker/screenshots/single_date_picker.jpg": "666e6cf9371a70948b5ede76a7e88635",
"assets/packages/dual_custom_date_picker/screenshots/range_date_picker.jpg": "87326a21281ded78393d4b43d1683eb3",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/iranexchange/pubspec.yaml": "7600d0edf3d0976335fb887d9eb60434",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/should_have_vpn.svg": "17bf80adf3cc6920b18408c8c7932c1d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_transactions_no_item.svg": "b01bdaff142699fa9383e2c45f70e437",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/play_circle.svg": "a72bf513ba48c877fcde790768270454",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/emptytickets.svg": "e2f56c2ced12d7315f5a354bb3cacd66",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/no_custodial_wallet_found.svg": "cb26adc686f176b60065e11b53102dc4",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_header_up.svg": "29d3bfd9eba7dabcd72c4b4d360d2543",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/irc_logo.svg": "3f97cf6386a9983c4740e14d1197a7aa",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/failed_video_authorization_status.svg": "cdf0d3db74d18b2dc42f3aa2d91f961f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/customerclublogo.svg": "7f81bebd7761a99e3d01e402c870f210",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro/intro_2.svg": "5125da0dca3cfbfdf1a6fc203251fe95",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro/intro_3.svg": "ca8c454213ea9b30c24a06c9e34c13c5",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro/intro_1.svg": "b8dbbd3d36d7640e1611f08f0de832b1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/shield-tick.svg": "f9239da9f3b47e2607679fdafeb9f3a1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/release_note.svg": "115e96e9e7808d243fd2f0c97ead0577",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/deposit_bitcoin_convert.svg": "d79f45939c1bf0af8841c5b23fb64171",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/bitcoin_convert.svg": "8cf30a546a63146d37f861e741326db2",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/undraw_mobile_pay.svg": "e151927c9df86b95ee524bc0b5cf3e9f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/empty_crypto_wallet.svg": "5b22980380b28cd326af78dc19b15ab9",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_login.svg": "a7f75c2aa5942405bb6b86ac514298fe",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/empty_wallet_tick.svg": "f0b2f49366090282a08a49ddd0d04abc",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_profile_icon.svg": "3c03e6f6eeb35a720507f2409533bf5d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/video_authorization_status.svg": "08b843df244f3da7484b0ebf9265701a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet.svg": "dba74014d77565f4aa40d23f3ca3efee",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_charge_success.svg": "f6daeb3f37a3ba9cfd2918cab770f435",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/update.svg": "09d48ee48e7c4cd0efe808a7b8018e4c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/launch_day_not_found.svg": "3e6681040e56ededbe823bc2d0da110f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_charge_waiting.svg": "2daef954704d0b7bde440af6663e1663",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/up_by_gateway_limit.svg": "853c6a6ba53d1c6dc9c294f26d68ca83",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/not_found.svg": "94fb008f692e1b0509b99ab71403bd6f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_charge_fail.svg": "032db3533b37e0a1e955532cd2ba6145",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/create_referral_code.svg": "920a3571a2f526964aa7a000d2331c90",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/striped_background.svg": "9eb845b94c9ffe39a113b40cf9344b2f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/emptyorders.svg": "7dedbb8d6fcfef68ecf6ee308dc24023",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/star.svg": "ccf2b2603251b40ffe312dbd870cf094",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/danger.svg": "5ac5ea61302be958ff767b323347549e",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/deposit_money.svg": "34a053cd994444f4291810a67fa639ac",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/gift_box.svg": "982052b1aab2f6a1e5cb3d39ebf73231",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/gift.svg": "e687103fd463d2646db6a2783a7390fc",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/profile.svg": "27416b2facaa25600730cfed1bd5808c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/user_tick.svg": "680d75f4aefca617cfc07dc3b6a56f1d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/security-safe.svg": "40d088a1ed5720e8f47f5708532294ca",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/irx_main_logo.svg": "dfd6c04e827724ca2cad0af893ef61c1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/logo.svg": "c89f9c60174ce67ada7efc82e1611539",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tosee%2520Saderat.svg": "26a3901f863e25bab04b00f595897045",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Khavar%2520Mianeh.svg": "f465d2a1f613a5f0152768a03c2eba85",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Melli.svg": "5394613066e593aad6c1061f46e0dec6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Pasargad.svg": "e5783d441bc104704ef12463493be22d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sanat%2520Madan.svg": "1e1f8bc4f05adf75ce61c16f6e890620",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Shahr.svg": "919b153f3f4b007228bea0acdfeea178",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Keshavarzi.svg": "afb559dc0e4eeff88eaf6cd352df2be2",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sepah.svg": "a045657670fb0b21ae4ed8514e501706",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Iran%2520Europe.svg": "7e85f63c67264f2794b206b0cf3085c6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Futurebank.svg": "35e37b42866ddcd4b77e652a770764a0",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Iran%2520Zamin.svg": "de9a881806444829e1aaf1cc96f1ff0a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Saman.svg": "d425d65150e2123a5b5a082c71ac8705",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Post.svg": "3ea0f7fbafc01ee9f0080ac53bf7251c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Maskan.svg": "c2df9814941c5bdb8a840cc776ac56a4",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sina.svg": "49e37ff59ca8b740e3311a049d34a7a5",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Bankino.svg": "d797cc31be7dbb532fe7643d0bab43c8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sepah%2520Merged.svg": "ba661639a4575c091f3908cc162951f8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Mehr%2520Iran.svg": "49d2409977c6f70c299b999550a47eee",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Resalat.svg": "a495ecf5f44e1f20ebc4f8ffa2904a42",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tosee%2520Taavon.svg": "deb2eb565389ba8823b830bc2ca76a93",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Ayandeh.svg": "92c8b0bc1192e2932de98ad6a5d7670d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Bank%2520Markazi.svg": "f181fa3895a629907bd3475845c1a804",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Caspian.svg": "c68f473c777f5fc13377a7b6d7f58135",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Noor.svg": "8083e7e1a3f22c9230948fb75a0c439f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Blu%2520Bank.svg": "9a7ed630219ee6a24bc307a366561629",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Eghtesad%2520Novin.svg": "1e33ccb3e743a89558d1c33ae15e94a8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Standard%2520Chartered.svg": "37206a527ba4998cf895e16e09e4fc58",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Saderat.svg": "83bcf79cf7f66067526c65cb4b854402",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Refah.svg": "46f7db2d6e855106c2268f3e3ac6a3f4",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Iran%2520Venezuela.svg": "aebbec34e96d4475d41b186fe7494af8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Melall.svg": "ae847ccd46fcc1a64e9eb2cd03eb6f4c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Taavon%2520Eslami.svg": "5e6b8289919117a23d3a2bb19f950c6e",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Parsian.svg": "728b4f98771ab4df9697ba94575534b2",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tosee.svg": "c18dd0a1fc1613dd25eed26ad776cd5f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tejarat.svg": "0e8a6ef1ccceed0f67905d9a8a2ce92b",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sarmayeh.svg": "60fb3e923ba1043bbab65ac67d6f447a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Mellat.svg": "2927c51db5179868def85da420b8d587",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Karafarin.svg": "280c0051134c51ebe51dd1954b011fd3",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Dey.svg": "3de9b6a7d5e23bf6e5458e9a407e53c5",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Gardeshgari.svg": "179250ca80cac8ee2d7c2d35c652ce9b",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/video_authorization.svg": "c6112bcd6a1abd3bc3f51a637c8ed085",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/receive_gift.svg": "95d6507007ad5d68d0a6f8ed88689313",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_header_down.svg": "35f8a941a76963f280a390c30180ba17",
"assets/packages/iranexchange/iran_exchange_assets/images/default.png": "83677c318ac2fb0b2d51b7f345b39f20",
"assets/packages/iranexchange/iran_exchange_assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/packages/iranexchange/iran_exchange_assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/packages/iranexchange/iran_exchange_assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/packages/iranexchange/iran_exchange_assets/animations/irx_splash.json": "e5de14fe8858f08429dc2e60eda0d57c",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "18f221d1798976d19a3420a7e35fcece",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/svgs/should_have_vpn.svg": "17bf80adf3cc6920b18408c8c7932c1d",
"assets/assets/images/svgs/wallet_transactions_no_item.svg": "4bd74a41632ddff58ea30d9e44ff5dd9",
"assets/assets/images/svgs/emptyaddress.svg": "cf697910934a6e34091ddddefe2206f2",
"assets/assets/images/svgs/bag_fill.svg": "5d4eb6143d09fe84fcaed2310eddd75e",
"assets/assets/images/svgs/emptytickets.svg": "e2f56c2ced12d7315f5a354bb3cacd66",
"assets/assets/images/svgs/icsearchlogo.svg": "6114e559e4063e98a76b8653a6da5dc4",
"assets/assets/images/svgs/amazon-dark.svg": "ce057e7d425a3a3003ee0895f1864b83",
"assets/assets/images/svgs/emptycryptowallet.svg": "5b22980380b28cd326af78dc19b15ab9",
"assets/assets/images/svgs/circle.svg": "1e9c7d6b0f68b86dae9b11398c3d894b",
"assets/assets/images/svgs/iran_exchange_solid_logo.svg": "b9c8319dbf7ef21857bfecbe557154bf",
"assets/assets/images/svgs/briefcase.svg": "01c9aee855e6c89e30518bf2274c99f7",
"assets/assets/images/svgs/customerclublogo.svg": "7f81bebd7761a99e3d01e402c870f210",
"assets/assets/images/svgs/messages_square.svg": "4e8a1f27cfa284e691a325bc7f476e7e",
"assets/assets/images/svgs/stock.svg": "be420e1f790970e35b5a0bd08e930a07",
"assets/assets/images/svgs/prefetchimage.svg": "e04d851a3ee3a4843f4ca5323a730223",
"assets/assets/images/svgs/release_note.svg": "115e96e9e7808d243fd2f0c97ead0577",
"assets/assets/images/svgs/undraw_mobile_pay.svg": "e151927c9df86b95ee524bc0b5cf3e9f",
"assets/assets/images/svgs/dashboardsites.svg": "10c88a3a621c33cd0ab07acebdc46bce",
"assets/assets/images/svgs/trash_square.svg": "7829493caa0136930db0129def648b5c",
"assets/assets/images/svgs/shopping-bag.svg": "c819124c275b099e27c4bd37d7ed44e4",
"assets/assets/images/svgs/ircmainlogo.svg": "3f00b1fa830aae39921952dce76bb5f9",
"assets/assets/images/svgs/operator_avatar.svg": "0698d95c8b044e9d4cd246bda658ec38",
"assets/assets/images/svgs/app_icon.svg": "ec327c57ef23791871e4c9bcd65f0ac7",
"assets/assets/images/svgs/foreground_banner.svg": "e4eff339921644a1b9d763e19928316d",
"assets/assets/images/svgs/empty_wallet_tick.svg": "f0b2f49366090282a08a49ddd0d04abc",
"assets/assets/images/svgs/game.svg": "94816832644db1a3858aceae8f4381c9",
"assets/assets/images/svgs/card-pos.svg": "67cb477e79fe36933ab01677b5392b38",
"assets/assets/images/svgs/crypto_out_of_stock.svg": "62ccb3212579badb8662e396e632ebf2",
"assets/assets/images/svgs/fb_desc_background.svg": "9eb845b94c9ffe39a113b40cf9344b2f",
"assets/assets/images/svgs/wallet.svg": "657b343409a7e76399dfa3fe3fc468fb",
"assets/assets/images/svgs/wallet_charge_success.svg": "f6daeb3f37a3ba9cfd2918cab770f435",
"assets/assets/images/svgs/update.svg": "09d48ee48e7c4cd0efe808a7b8018e4c",
"assets/assets/images/svgs/wallet_charge_waiting.svg": "2daef954704d0b7bde440af6663e1663",
"assets/assets/images/svgs/dashboardcrypto.svg": "26e9d6c3d93f5074eaf82bb054e4be8f",
"assets/assets/images/svgs/buy-crypto.svg": "f416c308cc0f968ebebf933376698653",
"assets/assets/images/svgs/searchprofile.svg": "60b5285ba1d8d911cfecc47c4996f2b6",
"assets/assets/images/svgs/irctitlelogo.svg": "fd1959faaa58081ca2655323669ee04d",
"assets/assets/images/svgs/calling.svg": "1949a652ed373539888890955b85e95d",
"assets/assets/images/svgs/scrollable_background_banner.svg": "e9b6185eeb4dc281ed5cf0af093dcfc7",
"assets/assets/images/svgs/irclogodark.svg": "31bbf0f6991e0423672bd8500353ff12",
"assets/assets/images/svgs/paliz_logo.svg": "6926c3b338d5f4115773a247ae4d0ff7",
"assets/assets/images/svgs/wallet-profile-icon.svg": "3c03e6f6eeb35a720507f2409533bf5d",
"assets/assets/images/svgs/up_by_gateway_limit.svg": "853c6a6ba53d1c6dc9c294f26d68ca83",
"assets/assets/images/svgs/not_found.svg": "94fb008f692e1b0509b99ab71403bd6f",
"assets/assets/images/svgs/bookmarks.svg": "f762dd9bb585aec8111074a35b928fe6",
"assets/assets/images/svgs/wallet_charge_fail.svg": "032db3533b37e0a1e955532cd2ba6145",
"assets/assets/images/svgs/create_referral_code.svg": "920a3571a2f526964aa7a000d2331c90",
"assets/assets/images/svgs/messages_bubble.svg": "263391cca13542a02ab837b20df387de",
"assets/assets/images/svgs/paypal.svg": "9d837bb4b78e8cbd9a15d427a4e8bd82",
"assets/assets/images/svgs/send.svg": "3ec7b7b9b63d9700c3461e79972a222c",
"assets/assets/images/svgs/crypto_stock_default.svg": "62ccb3212579badb8662e396e632ebf2",
"assets/assets/images/svgs/virtual_card.svg": "f9c34306dd21490db1f62845e889e97a",
"assets/assets/images/svgs/emptyorders.svg": "7dedbb8d6fcfef68ecf6ee308dc24023",
"assets/assets/images/svgs/dashboardincome.svg": "c45757ead30b35a2900c812fac84cc8a",
"assets/assets/images/svgs/irclogo.svg": "0d616d1a7441689f7116e5f7bdd6028d",
"assets/assets/images/svgs/bitcoin-card.svg": "492cc13ac97be882062d0ebf1c8dbc09",
"assets/assets/images/svgs/selected-crypto.svg": "31357a38e6e2cbea7faa21e80961a6c7",
"assets/assets/images/svgs/stock_unavailable.svg": "09697e346ac754c5786153e799fe2462",
"assets/assets/images/svgs/iran_exchange_logo.svg": "3261455fd65a797e5f6bdffcac2bb1cd",
"assets/assets/images/svgs/gift_box.svg": "982052b1aab2f6a1e5cb3d39ebf73231",
"assets/assets/images/svgs/headphone.svg": "64534581b092b1be6f3baf6c2f79e481",
"assets/assets/images/svgs/gift.svg": "e687103fd463d2646db6a2783a7390fc",
"assets/assets/images/svgs/profile.svg": "7ad3c3f6766f9320d47b4b9584979d2a",
"assets/assets/images/svgs/user_tick.svg": "680d75f4aefca617cfc07dc3b6a56f1d",
"assets/assets/images/svgs/one_time_virtual_number.svg": "05248a9f039c1eee41a34cfd22c9d43a",
"assets/assets/images/svgs/buliding.svg": "7af70d856469d47c1500ae137ab0b701",
"assets/assets/images/svgs/banks/Tosee%2520Saderat.svg": "26a3901f863e25bab04b00f595897045",
"assets/assets/images/svgs/banks/Khavar%2520Mianeh.svg": "f465d2a1f613a5f0152768a03c2eba85",
"assets/assets/images/svgs/banks/Melli.svg": "5394613066e593aad6c1061f46e0dec6",
"assets/assets/images/svgs/banks/Pasargad.svg": "e5783d441bc104704ef12463493be22d",
"assets/assets/images/svgs/banks/Sanat%2520Madan.svg": "1e1f8bc4f05adf75ce61c16f6e890620",
"assets/assets/images/svgs/banks/Shahr.svg": "919b153f3f4b007228bea0acdfeea178",
"assets/assets/images/svgs/banks/Keshavarzi.svg": "afb559dc0e4eeff88eaf6cd352df2be2",
"assets/assets/images/svgs/banks/Sepah.svg": "a045657670fb0b21ae4ed8514e501706",
"assets/assets/images/svgs/banks/Iran%2520Europe.svg": "7e85f63c67264f2794b206b0cf3085c6",
"assets/assets/images/svgs/banks/Futurebank.svg": "35e37b42866ddcd4b77e652a770764a0",
"assets/assets/images/svgs/banks/Iran%2520Zamin.svg": "de9a881806444829e1aaf1cc96f1ff0a",
"assets/assets/images/svgs/banks/Saman.svg": "d425d65150e2123a5b5a082c71ac8705",
"assets/assets/images/svgs/banks/Post.svg": "3ea0f7fbafc01ee9f0080ac53bf7251c",
"assets/assets/images/svgs/banks/Maskan.svg": "c2df9814941c5bdb8a840cc776ac56a4",
"assets/assets/images/svgs/banks/Sina.svg": "49e37ff59ca8b740e3311a049d34a7a5",
"assets/assets/images/svgs/banks/Bankino.svg": "d797cc31be7dbb532fe7643d0bab43c8",
"assets/assets/images/svgs/banks/Sepah%2520Merged.svg": "ba661639a4575c091f3908cc162951f8",
"assets/assets/images/svgs/banks/Mehr%2520Iran.svg": "49d2409977c6f70c299b999550a47eee",
"assets/assets/images/svgs/banks/Resalat.svg": "a495ecf5f44e1f20ebc4f8ffa2904a42",
"assets/assets/images/svgs/banks/Tosee%2520Taavon.svg": "deb2eb565389ba8823b830bc2ca76a93",
"assets/assets/images/svgs/banks/Ayandeh.svg": "92c8b0bc1192e2932de98ad6a5d7670d",
"assets/assets/images/svgs/banks/Bank%2520Markazi.svg": "f181fa3895a629907bd3475845c1a804",
"assets/assets/images/svgs/banks/Caspian.svg": "c68f473c777f5fc13377a7b6d7f58135",
"assets/assets/images/svgs/banks/Noor.svg": "8083e7e1a3f22c9230948fb75a0c439f",
"assets/assets/images/svgs/banks/Blu%2520Bank.svg": "9a7ed630219ee6a24bc307a366561629",
"assets/assets/images/svgs/banks/Eghtesad%2520Novin.svg": "1e33ccb3e743a89558d1c33ae15e94a8",
"assets/assets/images/svgs/banks/Standard%2520Chartered.svg": "37206a527ba4998cf895e16e09e4fc58",
"assets/assets/images/svgs/banks/Saderat.svg": "83bcf79cf7f66067526c65cb4b854402",
"assets/assets/images/svgs/banks/Refah.svg": "46f7db2d6e855106c2268f3e3ac6a3f4",
"assets/assets/images/svgs/banks/Iran%2520Venezuela.svg": "aebbec34e96d4475d41b186fe7494af8",
"assets/assets/images/svgs/banks/Melall.svg": "ae847ccd46fcc1a64e9eb2cd03eb6f4c",
"assets/assets/images/svgs/banks/Taavon%2520Eslami.svg": "5e6b8289919117a23d3a2bb19f950c6e",
"assets/assets/images/svgs/banks/Parsian.svg": "728b4f98771ab4df9697ba94575534b2",
"assets/assets/images/svgs/banks/Tosee.svg": "c18dd0a1fc1613dd25eed26ad776cd5f",
"assets/assets/images/svgs/banks/Tejarat.svg": "0e8a6ef1ccceed0f67905d9a8a2ce92b",
"assets/assets/images/svgs/banks/Sarmayeh.svg": "60fb3e923ba1043bbab65ac67d6f447a",
"assets/assets/images/svgs/banks/Mellat.svg": "2927c51db5179868def85da420b8d587",
"assets/assets/images/svgs/banks/Karafarin.svg": "280c0051134c51ebe51dd1954b011fd3",
"assets/assets/images/svgs/banks/Dey.svg": "3de9b6a7d5e23bf6e5458e9a407e53c5",
"assets/assets/images/svgs/banks/Gardeshgari.svg": "179250ca80cac8ee2d7c2d35c652ce9b",
"assets/assets/images/svgs/bank_card_overlay.svg": "9e51fb565d0ad15980a80ac1348643ce",
"assets/assets/images/svgs/no_crypto_found.svg": "cb26adc686f176b60065e11b53102dc4",
"assets/assets/images/svgs/dashboardshopping.svg": "2f53ef165a3ad2c6d641d3ce75acd4dd",
"assets/assets/images/svgs/star_search.svg": "62c6582527f3e7d5a198be9993e5d63a",
"assets/assets/images/svgs/receive_gift.svg": "95d6507007ad5d68d0a6f8ed88689313",
"assets/assets/images/chat_bot_avatar.jpg": "7ff169986b1aa448148bc11c75076501",
"assets/assets/images/default.png": "83677c318ac2fb0b2d51b7f345b39f20",
"assets/assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/assets/animations/intro_4.json": "6051b119b69d9ed8a6f48246f7e29c20",
"assets/assets/animations/loading.json": "8204daf7b3cccadccfd00eedddefb56e",
"assets/assets/animations/intro_3.json": "17b1c2cea381d954564408d7178500a9",
"assets/assets/animations/intro_2.json": "65e3bc9a2e5e9c3b1bf3d0b057135673",
"assets/assets/animations/intro_1.json": "513d787513cffeb0638aaae3e0a3a2f0",
"assets/assets/animations/text.json": "bf0d2b3bc8afe9c5eff21e5f28c60803",
"assets/assets/super_app/svgs/afrak_main_logo.svg": "1c362838199a8987be12a23deb97f4a2",
"assets/assets/super_app/svgs/paliz_company_main_logo.svg": "0df4195c9c2e3147c2813c64daf3296e",
"assets/assets/super_app/svgs/pateh_main_logo.svg": "a0a5a150aeb7918165cc810a0511d7e0",
"assets/assets/super_app/svgs/wallet_container_image.svg": "620b2f1daffeba9d3f2e507ef037f10d",
"assets/assets/super_app/svgs/shepa_main_logo.svg": "02ff9a078f00afdf368fd16c5899fc29",
"assets/assets/super_app/svgs/iranicard_main_logo.svg": "3f00b1fa830aae39921952dce76bb5f9",
"assets/assets/super_app/svgs/axha_main_logo.svg": "a6435a19cca866d86d0ee7c4000fed73",
"assets/assets/super_app/svgs/iranexchange_main_logo.svg": "c89f9c60174ce67ada7efc82e1611539",
"assets/assets/super_app/svgs/wallet_container.svg": "dd229c16dff415950de6ce141563c858",
"assets/assets/super_app/wallet_container.png": "7962122f3e596a81222bf626212f439d",
"assets/assets/super_app/main_slider_test.png": "4af1ec2e1be21188e90b15885fac3e0e",
"assets/assets/super_app/customer_club_banner.png": "e8e1753079d747d5c2bef021b1df3fe8",
"main.dart.js_28.part.js": "ec36ada99b4c839fcf10d6295fda042e",
"main.dart.js_38.part.js": "f036af87ece75d70093cf91c98da343a",
"main.dart.js_2.part.js": "49d4722077c4a20a98a729b8ba45601e",
"main.dart.js_17.part.js": "f08e570deba0d15f08e9cb966d82f797",
"main.dart.js_31.part.js": "0fe4304a891726d136f787f66060e953",
"main.dart.js_21.part.js": "0206a979f6f7ba97df27e73a3427a23e",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
