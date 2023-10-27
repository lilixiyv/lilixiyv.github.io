/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/29/hello-world/index.html","e70ebd02ae72373794ed8086473994e9"],["/2023/09/30/hexo/index.html","836ec90ede99251ae3ecd56d8753748e"],["/2023/10/01/Linux/index.html","7b7b1c08bcae87caa76988a8cb783468"],["/2023/10/01/Virtual-Machine/index.html","ab9871cb27bf088fbe3fea6118feb445"],["/2023/10/01/tools-in-Linux/index.html","0dadb49a32f1cc3c17b73f224c6bdf4a"],["/2023/10/05/Cryptography/index.html","423ed55c791d859a8cab7053abe7bf04"],["/2023/10/06/DatabasePrinciplesandSecurity-Introduction/index.html","fd5ead5e1e7d24cd678c673dfc9e88bb"],["/2023/10/08/DBS-2-RelationalDB/index.html","c846b25dc0784138f1ef8a7badfb1419"],["/2023/10/09/WebContentSecurity-1/index.html","e53fdcb8a7d82b986f0f54ab87333efe"],["/2023/10/12/GO-Fyne/index.html","16924d6c2490b8361bb18f8b49851851"],["/2023/10/12/SecurityProtocol_BitCommitment/index.html","cc6d039fdabc8514f9a6fbedca54a7fa"],["/2023/10/17/SP-MPC/index.html","0942f80d5f31da3d5bc7081b070d1e1d"],["/2023/10/18/BAT/index.html","89e5c6e6956afe3943a7dbe125c70d24"],["/2023/10/19/HTML/index.html","37083fcb90a7f14fc8f722c069ab6887"],["/2023/10/19/SP-BAN/index.html","73f05d45baf87fdbce72c5659dc18196"],["/2023/10/19/SP-HE/index.html","bcadd3218a3ab47c88dc165cb0e6d6f4"],["/2023/10/19/The-Sublime-Object-of-Ideology/index.html","73cd1beb5b0ca93e4414d4ee700a3625"],["/2023/10/22/Adnenturesofthe-Dialectic/index.html","aa067bb88ab460b65eddb59dbc914a5e"],["/2023/10/27/DBS-3-SQL/index.html","71521e0247ee1e6fdfb3a5c65096ea3e"],["/about/index.html","969510b694a71c7d3d3693db7a7cd571"],["/archives/2023/09/index.html","7dae1fbed25e74053de56c20ec229d55"],["/archives/2023/10/index.html","003b384054abd851eed7123efbf57a0c"],["/archives/2023/10/page/2/index.html","b05a59a1fe46b4f2ecfbf2f450a0c6fc"],["/archives/2023/index.html","d5b2e0c7d48fbe399c843e8dc621e855"],["/archives/2023/page/2/index.html","3cc6059ed9bddb689ec64e1a36c57e9e"],["/archives/index.html","7d7cf3e844aa1465c09d344fda8b8ed3"],["/archives/page/2/index.html","d263d6fd7dc7fb95e1c6c66fbe0a4070"],["/categories/Go/index.html","bd8e95d32e5dcfb78dd4635bd2049389"],["/categories/Linux/index.html","7ce7fec500dc00e509f00f137f3c2931"],["/categories/index.html","2b87a154bcdba330201124b14cff4700"],["/categories/web开发/index.html","59ffcaea37544de56e029787ef197962"],["/categories/安全协议/index.html","8ec5e70c1e7a07eb9ee7eae023845053"],["/categories/密码学/index.html","a77d8ef8236db96f6fbb8d5cd958fa78"],["/categories/批处理/index.html","841582ac0298cec291e7e9dd2abab4c0"],["/categories/教程/index.html","ccb313cc80bb723f09998956b31ff72d"],["/categories/数据库/index.html","4281ea0566c2e517ec9f7f4ba2c152a7"],["/categories/未明子/index.html","b8606b4a0f0094ad994d974e77705924"],["/categories/网络内容安全/index.html","e26810f38954903c6a65c30b24df4118"],["/categories/虚拟机/index.html","89b33705e990d724afe5110dab331bfe"],["/categories/齐泽克/index.html","49ce6070dd7e9232ffdd910c882a290e"],["/css/main.css","c800d794f9c64fc9054f04946fe24fef"],["/images/DB/componentofDBS.png","473254a70d7dc1db9df3207b52825292"],["/images/SecurityProtocol/BAN-规则-信仰-1.png","4037b4a9db35a0efad91a37bbb1f7a9a"],["/images/SecurityProtocol/BAN-规则-信仰-2.png","7a019b027f3b5b2a6f7db549cd284331"],["/images/SecurityProtocol/BAN-规则-信仰-3.png","990635a852f3ec316d0911bce0f48dc3"],["/images/SecurityProtocol/BAN-规则-信仰-4.png","0c2a9404b19efded050231d041a5695f"],["/images/SecurityProtocol/BAN-规则-共享秘密.png","2413800d61929090b00dd01418ccc31a"],["/images/SecurityProtocol/BAN-规则-接收-1.png","c691c75685d9c7833340436f3de39370"],["/images/SecurityProtocol/BAN-规则-接收-2.png","66ed35db98b4f22913f1ae2ea62cbe8c"],["/images/SecurityProtocol/BAN-规则-接收-3.png","64494c15d32c691b2769f9f6dc66ab94"],["/images/SecurityProtocol/BAN-规则-接收-4.png","dfdec4a0baf880d6d3aa76c02647b7c3"],["/images/SecurityProtocol/BAN-规则-接收-5.png","7465ef3c85752855009d85d7a8e4d533"],["/images/SecurityProtocol/BAN-规则-新鲜性.png","67e9cefae06d6907d3d5587a7b46605d"],["/images/SecurityProtocol/BAN-规则-消息含义-公钥.png","90237c16446d441fb583806db2e5f94e"],["/images/SecurityProtocol/BAN-规则-消息含义-共享秘密.png","2c2a9c00c5146680ede6141dd4e895bd"],["/images/SecurityProtocol/BAN-规则-管辖.png","f9545116c0f10090a494deca2a148bca"],["/images/SecurityProtocol/BAN-规则-随机数验证.png","efc73c349737a0e3f8f1ef95cc206d4a"],["/images/WebContentSecurity-1/网上采集算法工作原理.png","634889cde1b244cce5eb03bf997e8758"],["/images/WebContentSecurity-1/网络信息内容获取模型.png","1774b428766f86251f7e459b739f4966"],["/images/WebContentSecurity-1/通用搜索引擎相关概念.png","31ab1cff26e4b263890181c81e79a3d3"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.jpg","7cba4a031581906280fdf00877408067"],["/images/background.png","7b298de7ee364aee35d9c47a8a98625d"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/linux/Linux文件架构.png","d3e47773bd9e54469138458d966a3781"],["/images/linux/password信息.png","88423dd553fb750ac9f80f8da5266b64"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/toolsinlinux/opensslconf.png","01197ae1316f7d063221ed2715227d0e"],["/index.html","0b86cefce4ea24f5e6de6232c96bced2"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a89dfaa78fe1230f250a4852d6c144a1"],["/resources/index.html","ee2e8487fd03c14ddcc9fa8f66343433"],["/sw-register.js","c824ee70a733bb1376bd1096b0051b2c"],["/tags/Go/index.html","a0b18671b67ed3ff0fabd680dc10720f"],["/tags/index.html","cb4c3f110db73bb7e291897de263ba74"],["/tags/前端/index.html","fb0349fb3db2b210d824ec600f72adfe"],["/tags/历史/index.html","f3343958f3c52b101ed5fbfe2c7f2f70"],["/tags/句读/index.html","fb13f5f58520ccc3bf0b53036956bc92"],["/tags/哲学/index.html","87e3c84c8a9165c6afb33460abce9196"],["/tags/基础/index.html","9886e087e31c39555026a0605fdaac7e"],["/tags/密码学/index.html","79d95bda7327babc4db90af508bcc0f4"],["/tags/工具/index.html","5aa1fd1a5f43f86ecce005ec91f19e86"],["/tags/应用/index.html","7ed8e549e61c628c82c44e01fa6ae6bd"],["/tags/应用程序开发/index.html","a8db410a417cab15f6aebdb2c8fe6739"],["/tags/教程/index.html","4843564e5aff67cbc719a1ae728e1086"],["/tags/精神分析/index.html","45bc01f11890e48b7333636f0deae343"],["/tags/语言/index.html","1422501bf2f08590dbf76502af0e752e"],["/tags/课业/index.html","c093265da811f2ec7b4161d5f59e564f"],["/tags/阅读/index.html","197d4f43e9a104249ceb4ba353fa4e83"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
