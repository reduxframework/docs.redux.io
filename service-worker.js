/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3eb40fca702584ae6b7d2a23347d30bf"
  },
  {
    "url": "assets/css/0.styles.4a2ecdca.css",
    "revision": "3e26ac0421014a0d2a69be5cc558d3c4"
  },
  {
    "url": "assets/img/accordion.c53c2160.png",
    "revision": "c53c2160beaff1bf09e2d7c68b9c428a"
  },
  {
    "url": "assets/img/active_plugins.f753cef9.png",
    "revision": "f753cef93c12b2ac64a11839ad158459"
  },
  {
    "url": "assets/img/background.be51f66e.png",
    "revision": "be51f66ead40f19762c1499a260dfddc"
  },
  {
    "url": "assets/img/button_set.e1c5f873.png",
    "revision": "e1c5f87341d8616302a9e875c98e5009"
  },
  {
    "url": "assets/img/checkbox.8ff588d8.png",
    "revision": "8ff588d87c0766105a694c700e80868d"
  },
  {
    "url": "assets/img/codemirror.c0516047.png",
    "revision": "c05160471955a0426f8da4a5d0b46087"
  },
  {
    "url": "assets/img/color_gradient.3bcd0cb8.png",
    "revision": "3bcd0cb817006399542865e811551825"
  },
  {
    "url": "assets/img/color_rgba.a7a2975a.png",
    "revision": "a7a2975aac49bf53bc9a1621a49afc18"
  },
  {
    "url": "assets/img/color_schemes_picker_color.4506076b.png",
    "revision": "4506076b88c5cc5df3ee4708df433466"
  },
  {
    "url": "assets/img/color_schemes_picker.5ca88a95.png",
    "revision": "5ca88a9593b59d6ce795f3cf5119536f"
  },
  {
    "url": "assets/img/color_schemes.2b73ff48.png",
    "revision": "2b73ff48d1ac4ff299eba52827647beb"
  },
  {
    "url": "assets/img/color.f1100a7f.png",
    "revision": "f1100a7f0b926c3e03a562283b0b12e3"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/editor.0e39ed42.png",
    "revision": "0e39ed428e8debd9d069bd7fdc0f2249"
  },
  {
    "url": "assets/img/gallery.db07115f.png",
    "revision": "db07115fa418bb7e697ebad58dfec802"
  },
  {
    "url": "assets/img/google_maps.60a06a00.png",
    "revision": "60a06a000a4013727f40f8b4055f4b0a"
  },
  {
    "url": "assets/img/hints_alignment.63b7effc.jpg",
    "revision": "63b7effc1a8575d280f8f6b730f74378"
  },
  {
    "url": "assets/img/hints.f21699b3.png",
    "revision": "f21699b328a9bd6965a2e5ad998564b4"
  },
  {
    "url": "assets/img/icon_select.fcf0619c.png",
    "revision": "fcf0619c47a2ab496846458980a2a734"
  },
  {
    "url": "assets/img/image_select.4e71f892.png",
    "revision": "4e71f89281b32d8817ccfc329e7917c7"
  },
  {
    "url": "assets/img/imex.ffc40e5c.png",
    "revision": "ffc40e5c7617e49405e8159e1dc91a39"
  },
  {
    "url": "assets/img/media.157e2614.png",
    "revision": "157e26141bcec2553dfa08a2d284139b"
  },
  {
    "url": "assets/img/multi_text.29cbde62.png",
    "revision": "29cbde62bdeb76a9e52b82521db8ae6d"
  },
  {
    "url": "assets/img/palette_color.eeac131a.png",
    "revision": "eeac131a92b1ed2408981db8791c35a7"
  },
  {
    "url": "assets/img/radio.209501f2.png",
    "revision": "209501f2fa4cb72bd6febaabbfcc144a"
  },
  {
    "url": "assets/img/raw_full_width.52d22ecf.png",
    "revision": "52d22ecf53886f0d9d8a4f20c18c559f"
  },
  {
    "url": "assets/img/raw_sectioned.cdd956b1.png",
    "revision": "cdd956b1f2fd197b6e87508b3a585730"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/section.309ec967.png",
    "revision": "309ec967c4769899b632e64e7c7caad9"
  },
  {
    "url": "assets/img/slider.82e0bf9a.png",
    "revision": "82e0bf9a2183def90b87728b42f4c789"
  },
  {
    "url": "assets/img/slides.8b60ff5a.png",
    "revision": "8b60ff5a17111c97f8cdb058739a903c"
  },
  {
    "url": "assets/img/support_hash.e4e84d3d.png",
    "revision": "e4e84d3d9b5219b4a91e657de563b8c5"
  },
  {
    "url": "assets/img/text-multidimensional.9034ca24.png",
    "revision": "9034ca24d0bda48c0533b362fdfc85b2"
  },
  {
    "url": "assets/img/text-simple.08f2a147.png",
    "revision": "08f2a14727cb26b3bd4778dc7c17b1ec"
  },
  {
    "url": "assets/img/textarea.8550ef5d.png",
    "revision": "8550ef5da1606f4da02ef25d1a5aec70"
  },
  {
    "url": "assets/img/typography.9680d7a0.png",
    "revision": "9680d7a0bc5f1b5cf2a4ee160c660637"
  },
  {
    "url": "assets/js/10.7283ae1b.js",
    "revision": "54da1a2feece68fd3f39b3c1c9ab72ce"
  },
  {
    "url": "assets/js/100.370507ca.js",
    "revision": "5d238cb1063cf2beb941c72817c0e04a"
  },
  {
    "url": "assets/js/101.ede5f5f3.js",
    "revision": "5297cdd5bd4113e2d8217a9e182d8cd9"
  },
  {
    "url": "assets/js/102.1e39811b.js",
    "revision": "2a4bc018c1e929df794cf17ebd30889e"
  },
  {
    "url": "assets/js/103.faabba7e.js",
    "revision": "fe878e06ce9395fba85bed024f41c53a"
  },
  {
    "url": "assets/js/104.2a885ac6.js",
    "revision": "7012246582080f650b2abedaa7caadaf"
  },
  {
    "url": "assets/js/105.a776f661.js",
    "revision": "e6b76b80227486176985ec5733a9a111"
  },
  {
    "url": "assets/js/106.eb72b9f9.js",
    "revision": "9a0712da8b640c083fdda668b54e551f"
  },
  {
    "url": "assets/js/107.d055e0e7.js",
    "revision": "98cf8335d9416b0d00565c48bfe26132"
  },
  {
    "url": "assets/js/108.9d284479.js",
    "revision": "5dc7ce2b1fee9af5103c77817c1cca9f"
  },
  {
    "url": "assets/js/109.fcc8af57.js",
    "revision": "ac3da137c3f68d6f74124b90ec2e8635"
  },
  {
    "url": "assets/js/11.b78fc1cc.js",
    "revision": "d90c8b9401931ec05106619b9cb35f89"
  },
  {
    "url": "assets/js/12.30d87ae2.js",
    "revision": "fff9f9a29c6544adec4f89321c3e2a02"
  },
  {
    "url": "assets/js/13.470a69d2.js",
    "revision": "48438cca6fba8ebf3601553d20e99fcb"
  },
  {
    "url": "assets/js/14.e009de07.js",
    "revision": "df03524222548ffe1cbb0e219deebc3b"
  },
  {
    "url": "assets/js/15.0f67f6c3.js",
    "revision": "b920e86799dc4c0b8e142261ad9a398f"
  },
  {
    "url": "assets/js/16.01eac621.js",
    "revision": "fc2e986f2c7fb6bd162a805071f37464"
  },
  {
    "url": "assets/js/17.d87b2ffd.js",
    "revision": "8f6fae4959bda5d2186b901c0a38fa80"
  },
  {
    "url": "assets/js/18.ada5efb3.js",
    "revision": "c0e9b49e282707a8f14ba6bda68205d9"
  },
  {
    "url": "assets/js/19.deda2661.js",
    "revision": "45238271532adaf666e95b76392770ee"
  },
  {
    "url": "assets/js/20.e412bef8.js",
    "revision": "5bfd95eb58aef03fcacb92f31be63708"
  },
  {
    "url": "assets/js/21.7c00c3f9.js",
    "revision": "112dd32d94879ca7941e3355740091fa"
  },
  {
    "url": "assets/js/22.8c19cb71.js",
    "revision": "b4d7d5832c02ec1ae338d31f03bbb035"
  },
  {
    "url": "assets/js/23.897d4995.js",
    "revision": "29bb190bb1190e122be8f172ae3c4af2"
  },
  {
    "url": "assets/js/24.9e7830e0.js",
    "revision": "f44e7774e2ce7d81bfb2c8ede024aff6"
  },
  {
    "url": "assets/js/25.6d795698.js",
    "revision": "bb2b3fd26bafa01e348b77bc808eaacc"
  },
  {
    "url": "assets/js/26.c840191f.js",
    "revision": "dad442eeb2cd0f7300942e5b61369434"
  },
  {
    "url": "assets/js/27.26835ece.js",
    "revision": "3ce3df862548ec81ae762830ca56269d"
  },
  {
    "url": "assets/js/28.34f6a7d0.js",
    "revision": "08774865be42d54c57e75ddfdd2df395"
  },
  {
    "url": "assets/js/29.5b872fc8.js",
    "revision": "fbf78c723d3d7cfd24c5433f61510371"
  },
  {
    "url": "assets/js/3.8d263acb.js",
    "revision": "8f59fe1e95e0bb43c02999b34ed1b4ff"
  },
  {
    "url": "assets/js/30.751b657a.js",
    "revision": "1ade0bf71364ab46104afd64df10354c"
  },
  {
    "url": "assets/js/31.ffc929d3.js",
    "revision": "379c2b9417d0e01490c2056b01dbb38b"
  },
  {
    "url": "assets/js/32.8e87d429.js",
    "revision": "a56b2cf14b388a18bbd908bb86172748"
  },
  {
    "url": "assets/js/33.35ae2943.js",
    "revision": "67c806a2949bdd2e4a65e3af0694a364"
  },
  {
    "url": "assets/js/34.e276479b.js",
    "revision": "41165ee6f1648e3f14cc306ce53232d3"
  },
  {
    "url": "assets/js/35.3d4a81a8.js",
    "revision": "50f508237c4445805ed30a8a304055d7"
  },
  {
    "url": "assets/js/36.7695c03a.js",
    "revision": "fc2e65732848a0e5bc7818d0975580ec"
  },
  {
    "url": "assets/js/37.a118d9f4.js",
    "revision": "4391cb4f9475ef4abd711b8798790315"
  },
  {
    "url": "assets/js/38.83e51506.js",
    "revision": "1f274c80c435596dafb34b255ebb60c1"
  },
  {
    "url": "assets/js/39.d4062cf8.js",
    "revision": "f91f315615c419509c609006d7a04e47"
  },
  {
    "url": "assets/js/4.3a2c4979.js",
    "revision": "e8fb01739f5caaa23eb4049bf6dc786d"
  },
  {
    "url": "assets/js/40.7c36f18a.js",
    "revision": "90f362eb7fe8c3abcf378226e29d6053"
  },
  {
    "url": "assets/js/41.d2690278.js",
    "revision": "f0e6c785d735d99713b6455477945c74"
  },
  {
    "url": "assets/js/42.8864bb71.js",
    "revision": "d66ec4a5526d87095fc6814f601b7ac0"
  },
  {
    "url": "assets/js/43.0670bda5.js",
    "revision": "fb7bfc7a004884bca2233895fefee70b"
  },
  {
    "url": "assets/js/44.50f10264.js",
    "revision": "e2a50513db544f12134294e5e8046dfd"
  },
  {
    "url": "assets/js/45.4aa53dc8.js",
    "revision": "c9542899aa5f41ce649cdac10daacf4d"
  },
  {
    "url": "assets/js/46.7ed84ae5.js",
    "revision": "488501d656686b30df13645ba2b1658b"
  },
  {
    "url": "assets/js/47.f91cc814.js",
    "revision": "d466e2b16129139daaee0e2d47ff56fa"
  },
  {
    "url": "assets/js/48.0ef68c9c.js",
    "revision": "5bdea119bbebcdcc48f1c0c26a4ed260"
  },
  {
    "url": "assets/js/49.377260f9.js",
    "revision": "7effb4fc89d58bf801bb3e2c90eeecaa"
  },
  {
    "url": "assets/js/5.264001b8.js",
    "revision": "376ed69ab80a17968d7fb0bb090dff74"
  },
  {
    "url": "assets/js/50.152f767c.js",
    "revision": "ccbe1db46496eca34b820c42b13f0a5e"
  },
  {
    "url": "assets/js/51.246f4549.js",
    "revision": "075949a53b55cd097b10b65e84cd5db0"
  },
  {
    "url": "assets/js/52.94f2d5a3.js",
    "revision": "3e21907b46e08b45a69139112cfca939"
  },
  {
    "url": "assets/js/53.78bdefed.js",
    "revision": "3a5b3583bb3eb14d6d30442e4792e977"
  },
  {
    "url": "assets/js/54.84f97649.js",
    "revision": "255c08c45b252ee72c4ae486752dd3e5"
  },
  {
    "url": "assets/js/55.858592ac.js",
    "revision": "e46e06238b7f444fa2835acf7a58f942"
  },
  {
    "url": "assets/js/56.91ddb217.js",
    "revision": "8f5ba2e2d8e8e36ee024069887b4b561"
  },
  {
    "url": "assets/js/57.69a8c6d4.js",
    "revision": "ec1aa584258dc8e6956f179591477095"
  },
  {
    "url": "assets/js/58.967da04d.js",
    "revision": "3ae42906fcbc6ac4339a46ae25852e93"
  },
  {
    "url": "assets/js/59.a2719114.js",
    "revision": "da0122a8b70911fdae765f097aa51134"
  },
  {
    "url": "assets/js/6.be42fb21.js",
    "revision": "49156d3e5064bada2191ce8c536b84b6"
  },
  {
    "url": "assets/js/60.f2a8ae97.js",
    "revision": "dfc4ae629298857013658aaeffaba39b"
  },
  {
    "url": "assets/js/61.2ed7c820.js",
    "revision": "5f835637552b905f836dab1ba21cf326"
  },
  {
    "url": "assets/js/62.b26b0dfe.js",
    "revision": "48c0a016981a7d41f9d9cf84d5894ef9"
  },
  {
    "url": "assets/js/63.07136381.js",
    "revision": "eeb4ddf5ea8a079c8d0844203b775376"
  },
  {
    "url": "assets/js/64.d62592ef.js",
    "revision": "1e6979acc44c162c4893886272ba8dc9"
  },
  {
    "url": "assets/js/65.9d8dbfa3.js",
    "revision": "05223018cdba5a5c86ac66611fef669f"
  },
  {
    "url": "assets/js/66.3774ec5e.js",
    "revision": "f145421989a97712a97d866813f06f58"
  },
  {
    "url": "assets/js/67.a0e5cd0d.js",
    "revision": "b90b3e635657e93ed521264403a5bd9e"
  },
  {
    "url": "assets/js/68.85af733c.js",
    "revision": "0453cc496a1daacff0c86ff5fb703250"
  },
  {
    "url": "assets/js/69.3c896b8e.js",
    "revision": "27457e75af98170ad7c3b81cc14f3a03"
  },
  {
    "url": "assets/js/7.112f7fbe.js",
    "revision": "989f080db8993fcaf88dba21418a6312"
  },
  {
    "url": "assets/js/70.b86c6fa5.js",
    "revision": "ca4f320e3d4e1d6e33c8353c4a256c7c"
  },
  {
    "url": "assets/js/71.feed5aba.js",
    "revision": "7e0ece226545fa79ec76eab4b9f624c4"
  },
  {
    "url": "assets/js/72.6f23eb91.js",
    "revision": "7ebdd09a5238d1e552fe49f78ff9aff7"
  },
  {
    "url": "assets/js/73.b35eee5c.js",
    "revision": "cb5c6762b77bd1ab0a57aa5509003bf8"
  },
  {
    "url": "assets/js/74.67ae7c2e.js",
    "revision": "e2015b01a227d67e1e3124d298b0ad49"
  },
  {
    "url": "assets/js/75.03499eda.js",
    "revision": "5a911437de444bd2260c1529ad8781a7"
  },
  {
    "url": "assets/js/76.7edd28e1.js",
    "revision": "afa756e7438678585e40e6be439856de"
  },
  {
    "url": "assets/js/77.17983720.js",
    "revision": "d43304b2998cddd94546c8f2df5d4826"
  },
  {
    "url": "assets/js/78.c5e921e6.js",
    "revision": "3fc724417b8b4c158b15de09b66f13a6"
  },
  {
    "url": "assets/js/79.901948d2.js",
    "revision": "7f0f373ab34dac05d44e28cead5ce91f"
  },
  {
    "url": "assets/js/8.6f2dd33e.js",
    "revision": "5c77899683dd8e24251b9bde11716d8d"
  },
  {
    "url": "assets/js/80.4a1f9a00.js",
    "revision": "1f5df1a23e51f9ef84436f4559cbd396"
  },
  {
    "url": "assets/js/81.43a8839f.js",
    "revision": "a196f15345d32a3306edc45ccf3c00fe"
  },
  {
    "url": "assets/js/82.685ca0b0.js",
    "revision": "f92e28733a6aa57f11461947415a0468"
  },
  {
    "url": "assets/js/83.0bf26431.js",
    "revision": "0fca11774cbf7b72f8737848826c1aa9"
  },
  {
    "url": "assets/js/84.ef1f7978.js",
    "revision": "e15b8959a3b0d798d7aa625ffe4bd7ae"
  },
  {
    "url": "assets/js/85.7f74f25e.js",
    "revision": "9b824d8352165097d2f772c5c58d4060"
  },
  {
    "url": "assets/js/86.6c246e17.js",
    "revision": "74c6acacce0bb75fb1a5029b9be9a0ce"
  },
  {
    "url": "assets/js/87.79276fd4.js",
    "revision": "d2227c0cd123c1d6156af6d7b5099c71"
  },
  {
    "url": "assets/js/88.293cc780.js",
    "revision": "75b9037f24d7e3c836d117ba190ead47"
  },
  {
    "url": "assets/js/89.a410473a.js",
    "revision": "2d1e51b52bc52b8e60c9e25d04e6a282"
  },
  {
    "url": "assets/js/9.52cb1cac.js",
    "revision": "9b79475fff41bd3058ac6e15a459d795"
  },
  {
    "url": "assets/js/90.29ae89b3.js",
    "revision": "218704f9b8e8546d04102c375ea5fb52"
  },
  {
    "url": "assets/js/91.90d5088f.js",
    "revision": "0d1c6169d715404d5007ab277811dd42"
  },
  {
    "url": "assets/js/92.80bbfd08.js",
    "revision": "e9773ad9fcf50f12d39dfb0d9f8d46a0"
  },
  {
    "url": "assets/js/93.95be2913.js",
    "revision": "ceebc21f8d9b3cfc211fbc1b822279dd"
  },
  {
    "url": "assets/js/94.c265ca84.js",
    "revision": "323d98d134e3a42ba61cc60c151409dd"
  },
  {
    "url": "assets/js/95.7f55ac27.js",
    "revision": "2374e989b47f908b1d0e4efd3d2ae767"
  },
  {
    "url": "assets/js/96.f690b9d0.js",
    "revision": "ee49b828dc9962efdbdcccafe86cdd4e"
  },
  {
    "url": "assets/js/97.a8ecaf28.js",
    "revision": "51d230299697220846e322b9da0d127d"
  },
  {
    "url": "assets/js/98.309e7f72.js",
    "revision": "6cc5f0e384633dfa9125e5cc0ce6a498"
  },
  {
    "url": "assets/js/99.919f8863.js",
    "revision": "e2afd24f8db0cbc2d2e2f10d78b19f80"
  },
  {
    "url": "assets/js/app.e3641c16.js",
    "revision": "a12ecb448a933722ad31fb85b5c9e4f0"
  },
  {
    "url": "assets/js/vendors~docsearch.7d05ff02.js",
    "revision": "ab921f60886a3eb3a6e2c19bc138ed42"
  },
  {
    "url": "configuration/api.html",
    "revision": "13bac9ee099f39cef6f5eca8111d93f4"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "f68947ad537ce9e5a0fce24b973b4438"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "b4698877026ef15a0a50fa82e3c762d5"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "e982dada1998a0901984edf7a533b83b"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "24a598fa8f65c06cad979cb93501cd90"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "e758da792588559a9f98bf12f231a44a"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "5c9469b22f08460ad13124204fcc121b"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "536e525b9339e1b47650c6938184e23d"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "4495d7954b801e503acd2508f4d0661a"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "9c0868b521f00df59dd764de68f9bed3"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "1c43c2dce3c9eecd5f1c4fbea57ea3fe"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "3cfd6d5f62f035aded4a04831e7257f6"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "ab241fa7cb30a3aabf7e5a87e27a08a6"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "956c840652de3e79404cefac25c8749f"
  },
  {
    "url": "configuration/index.html",
    "revision": "a2bdf2825ec0c53760520560f92f5910"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "07238a5761ed3791b1d84761e6797cdd"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "fc37dfffe780b61eed27fd8ecdf16a1f"
  },
  {
    "url": "contributing.html",
    "revision": "8e36419f7a29d5bcb2f543073d609ffa"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "d4c3ee8d5d6842b9d8b6c54c0c8af8ab"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "7e5b88b7e233a890eafb7e4d8af20ef1"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "3c2bb585045a4b9aa14af69d587520e5"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "ecbb64b7b4ee9c508324c314ed3de2d4"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "0e6253cc5102b91f0ff4eb10edae7bc6"
  },
  {
    "url": "core-fields/background.html",
    "revision": "1a14d0002457f5223656f67ae5d3df6b"
  },
  {
    "url": "core-fields/border.html",
    "revision": "57ec1b437c31bdd9b9ac3457d614d935"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "228ed019bfbb734f46b40299892382f5"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "3b5000b8769b594314ecee97c0b5a0b7"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "1ea669c7a9cab50f8b4bc99e19951ef7"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "2e0819ff5c2c78dc48742aeccff50e2a"
  },
  {
    "url": "core-fields/color.html",
    "revision": "34b6a60fa7056019fcfec9db4ff25f7f"
  },
  {
    "url": "core-fields/date.html",
    "revision": "0e97547649e15a1d9fd22c6c1923970c"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "135d4a37b8fc99890fa6863444fcd768"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "6f0cb762994381921010a171a2dbfbc6"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "e2826423fa8d5f48af9f269bed855a9c"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "b030c12090535e359bfe3dff7a3806f0"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "a569e69a205cb6f4e89ac04d75b595bc"
  },
  {
    "url": "core-fields/index.html",
    "revision": "1129d22b6141b7c17c6f54489c6357e6"
  },
  {
    "url": "core-fields/info.html",
    "revision": "22b11dd2c8448c27f220c7584b96446f"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "ba921aa1a829b8a3a04dd5f99665df1f"
  },
  {
    "url": "core-fields/media.html",
    "revision": "d9a7a76598805c3ba991bb49fcdcbd50"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "4aaada1f0db83303089d7994c953ec85"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "93af362584ba9f13e0ed89808d15adb1"
  },
  {
    "url": "core-fields/password.html",
    "revision": "f5cd5d86bf9a0a24fbcbb81d1ac87f85"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "bbaeb377d146f19c01947c3bd0d984ba"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "b1c88ce63cdfe721149726a14db901d0"
  },
  {
    "url": "core-fields/section.html",
    "revision": "5bf1ab0a61745a05f68c03157d8f09da"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "917b360dd500eaf8119145033972a1e3"
  },
  {
    "url": "core-fields/select.html",
    "revision": "ce0663d511a8edaff51ac80d388e0ab5"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "30973b9ece294ff549ceeadfb6a43371"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "b244ab6adf7a432982114e52f2f80cf4"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "f93d1932c267706066b2504d368cbeb4"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "5dca787da6ff45756a4dac122abab495"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "61fd785dba87723a721379b7d0dde227"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "d3d58a2db831aa794c8f8cf95d2914a4"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "6d3c0ec0334401a35b923941d0506edd"
  },
  {
    "url": "core-fields/text.html",
    "revision": "3b8c6df8253cb3987c32efabee091b56"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "e05f88016ddc02cc6d43ad46b15ab58b"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "a196b194d1bea58e698aab97fd10dd7d"
  },
  {
    "url": "core/index.html",
    "revision": "8f727e5a53128f8de72bb60309674921"
  },
  {
    "url": "faq/index.html",
    "revision": "af9dc014cbd84588685c933b497b145b"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "c87db11efbc8001e07d779382d112426"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "d2360bd755acfed0118723427532f53a"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "a33598a1b52a0a725814c29317176132"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "9579836b79131832b24919b231a48909"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "633d94d026a89a037655c11b3a857d61"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "9dfeb377ecd6b782307af17dd569e624"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "1b425614aa8cc5e1693b9bbe87e77424"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "8a3e8c6d9ea03ad0b5b0ec12cfcb2cda"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "dc7c6a8315e1de6f4d78a912323052b8"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "76d837b4cda864b39c855e4c1bd06b53"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "3f148efd9c928e03b4be35d2e11cbe72"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "8513164f26672a10c16cf20ad824c777"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "e2b03de3e7af93184e985dc3c6aa5197"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "e1539793ffb422920ffae5fcc50051f3"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "42e5f3e8fad6268956481228c9131753"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "811b66e2612c32cc1b52ac10b396bb73"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "1eacf22e97e979ff05198cc512a16a4b"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "d08728f778959faca072d13bb6765b31"
  },
  {
    "url": "guides/index.html",
    "revision": "a7822762142f000d7ed6cfd2755e3a1f"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "31882695052e079c6670d8e7ed637e48"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "2a83da15c36fc16e4ee9b865024d27bf"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "414f05a3cd84411e7833846aa79821f3"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "aaef8531c30937d5eb4f7f1597bd478a"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "b2e9ec3244727bfd843c87c369784e96"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "78ef91baa70c8fd050f68ed425865974"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "231747a56f1c6576583d5574420b2de7"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "af8113a7bbcc0ab1bb34e86a186242b8"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "c59b9bd3191835f42e38be2d64235101"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "2f0ef63abd38f1437e9221e279e48733"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "8cebbc2dae31303dfc975f310f7842f9"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "4a261309d77ed340af7f0c4de7df2739"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "73d32698f8602829fb24ac1c26ffb093"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "534debd98b8b6f0b97fa116064e7ee95"
  },
  {
    "url": "premium/index.html",
    "revision": "c6864644aaa313f25a7e6f0596459b2c"
  },
  {
    "url": "premium/js-button.html",
    "revision": "e2ccdc0fb966e06052a756e56b738440"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "7af55c9da4636953fb8b9e3da54e15eb"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "a0970fc0fb46efd298c10e3edc6e2364"
  },
  {
    "url": "premium/repeater.html",
    "revision": "f383e30ea622c413db6b79fb156a763a"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "036c2ff49b0f5d534f8e53ec2658a88c"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "6c24e9f402e142bd0102bda3cd891ca3"
  },
  {
    "url": "redux-2x.png",
    "revision": "a3c7a8b9bdaf7c90d53cb80df4ddf319"
  },
  {
    "url": "redux.png",
    "revision": "73ee94cef04626971d17266e344ba958"
  },
  {
    "url": "top_logo-2x.png",
    "revision": "5fa8e8952709be452e415f738b0f4c15"
  },
  {
    "url": "top_logo.png",
    "revision": "12b361357b610542d3baeb79947cba6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
