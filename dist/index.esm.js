import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMediaQuery, Box as Box$1, Container, Typography, Button } from '@mui/material';
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getAnalytics } from '@firebase/analytics';
import { initializeApp } from 'firebase/app';
import { initializeAuth, browserSessionPersistence, browserPopupRedirectResolver, signInAnonymously } from 'firebase/auth';
import '@fontsource/manrope';
import '@fontsource/manrope/700.css';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var breakPoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xlg: 1400,
        xl: 1536,
        xxl: 1920,
        xxxl: 2560,
    },
};
var PRIMARY = {
    // light: "#B8B8B8",
    main: "#141414",
    dark: "#0E0A0A",
};
var SECONDARY = {
    light: "#808080",
    main: "#E50914",
    dark: "#C11119",
};
var GREY = {
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#B0B0B080",
    900: "#161C24",
    1000: "#484c4f80",
    1100: "#b3b3b3",
    1200: "#d8d8d8",
    1300: "#bcbcbc",
    1400: "#e5e5e5",
    1500: "#a0b3b0",
    1600: "#dcdcdc",
    1700: "#0000007F",
    1800: "#dadde9",
    1900: "#3D3D3D",
    2000: "#202020",
};
var COMMON = {
    common: {
        black: "#000",
        //  white: "#fff"
    },
    primary: __assign(__assign({}, PRIMARY), { contrastText: "#fff" }),
    secondary: __assign(__assign({}, SECONDARY), { contrastText: "#fff" }),
    // white:{...WHITE, contrastText:"#DE2537"},
    grey: GREY,
    action: {
        active: GREY[500],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};
var palette = __assign(__assign({}, COMMON), { text: { primary: "#fff", secondary: "#d8d8d8", disabled: GREY[600] }, background: { default: PRIMARY.main, paper: PRIMARY.main }, mode: "dark", breakpoints: breakPoints, typography: {
        fontFamily: [
            'Manrope !important',
            'sans-serif',
        ].join(','),
    } });

function Image(_a) {
    var path = _a.path, sx = _a.sx;
    var onMediaFallback = function (event) {
        var target = event.target;
        target.src = "/assets/images/landscape.png";
    };
    return (jsx(Box, { sx: __assign({}, sx), component: "img", 
        // src={baseUrl+ '/' + path}
        src: "".concat(LOCAL_BASE_URL, "/").concat(path), onError: onMediaFallback }));
}

var secretPass = "XkhZG4fW2t2W";
function GetCookiesValue(key, isEncrypted) {
    if (isEncrypted === void 0) { isEncrypted = false; }
    try {
        if (!isEncrypted) {
            return Cookies.get(key) ? Cookies.get(key) : undefined;
        }
        var cookieValue = Cookies.get(key);
        if (cookieValue === undefined) {
            return undefined;
        }
        var bytes = CryptoJS.AES.decrypt(cookieValue, secretPass);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    catch (e) {
        Cookies.remove(key);
    }
}
function SetCookiesValue(key, value, expires, isEncrypted) {
    if (expires === void 0) { expires = 1; }
    if (isEncrypted === void 0) { isEncrypted = false; }
    try {
        if (value === undefined || null) {
            return;
        }
        if (!isEncrypted) {
            return Cookies.set(key, value, { expires: expires });
        }
        var encryptedValue = CryptoJS.AES.encrypt(typeof value === "object" ? JSON.stringify(value) : value, secretPass).toString();
        return Cookies.set(key, encryptedValue, { expires: expires });
    }
    catch (e) {
        // eslint-disable-next-line no-console
        // console.log(e);
    }
}

function checkLiveOrStage() {
    var env = window.location.hostname === "pre.binge.buzz" ||
        window.location.hostname.includes("localhost")
        ? "staging"
        : "production";
    return env;
}
function drmCall(bingeToken) {
    //@ts-ignore
    videojs.Vhs.xhr.beforeRequest = function (options) {
        var modifiedOptions = __assign({}, options);
        if (modifiedOptions.uri.startsWith("https://ss.binge.buzz/binge-drm")) {
            var search = new URL(options.uri);
            var searchParam = search.searchParams.get("r");
            if (checkLiveOrStage() === "staging") {
                modifiedOptions.uri = "https://ss-staging.binge.buzz/binge-drm/secured?r=".concat(searchParam, "&drmtoken=").concat(bingeToken);
            }
            modifiedOptions.headers = modifiedOptions.headers || {};
            modifiedOptions.headers.Authorization = "Bearer ".concat(bingeToken);
            videojs.xhr({
                uri: modifiedOptions.uri,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(bingeToken),
                },
            }, function (err, resp) {
                if (resp.statusCode === 429) ;
                else if (resp.statusCode === 401) ;
                else if (resp.statusCode !== 200) ;
            });
        }
        return modifiedOptions;
    };
}
var VideoJSPlayer = function (_a) {
    var _hlsStreamUrl = _a._hlsStreamUrl, isActive = _a.isActive;
    var videoJsOptions = {
        autoplay: isActive,
        muted: isActive,
        controls: true,
        responsive: true,
        fluid: true,
        experimentalSvgIcons: true,
        playbackRates: [0.5, 1, 1.5, 2],
        controlBar: {
            skipButtons: {
                forward: 10,
                backward: 10,
            },
        },
        sources: [
            {
                src: _hlsStreamUrl,
                type: (_hlsStreamUrl === null || _hlsStreamUrl === void 0 ? void 0 : _hlsStreamUrl.endsWith(".mpd"))
                    ? "application/dash+xml"
                    : "application/x-mpegURL",
            },
        ],
    };
    var VideoPlayer = function (props) {
        var videoRef = useRef(null);
        var playerRef = useRef(null);
        var _a = useState(1), playbackRate = _a[0]; _a[1];
        var options = props.options, onReady = props.onReady;
        var bingeToken = GetCookiesValue("jwtToken", false);
        useEffect(function () {
            if (!playerRef.current) {
                var videoElement = document.createElement("video-js");
                videoElement.classList.add("vjs-big-play-centered");
                videoRef.current.appendChild(videoElement);
                var player_1 = (playerRef.current = videojs(videoElement, options, function () {
                    videojs.log("player is ready");
                    onReady && onReady(player_1);
                }));
                player_1.on("loadstart", function (_e) {
                    drmCall(bingeToken);
                });
            }
            else {
                var player = playerRef.current;
                playerRef.current.autoplay(options.autoplay);
                player.src(options.sources);
            }
        }, [options, videoRef]);
        useEffect(function () {
            var _a;
            if (playerRef.current) {
                (_a = playerRef === null || playerRef === void 0 ? void 0 : playerRef.current) === null || _a === void 0 ? void 0 : _a.playbackRate(playbackRate);
            }
        }, [playbackRate]);
        useEffect(function () {
            var player = playerRef.current;
            return function () {
                if (player && !player.isDisposed()) {
                    player.dispose();
                    playerRef.current = null;
                }
            };
        }, [playerRef]);
        return (jsxs(Fragment, { children: [jsx("div", __assign({ "data-vjs-player": true, style: { width: "100%", height: "100%", borderRadius: "16px" } }, { children: jsx("div", { style: { borderRadius: "16px" }, ref: videoRef }) })), jsx("style", { children: "\n          .vjs-loading-spinner {\n            margin-top: 0 !important;\n            margin-left: 0 !important;\n            border-radius: \"16px\"\n          }\n        " })] }));
    };
    return (jsx("div", { children: jsx(VideoPlayer, { options: videoJsOptions, onReady: function () { return console.log("The video is ready to play"); } }) }));
};

var LOCAL_BASE_URL = "https://web-api.binge.buzz";
function SlickSlider(_a) {
    var data = _a.data, categories = _a.categories; _a.totalProduct; _a.handleNext; _a.type; _a.visibleOverflow;
    console.log(data);
    var sliderRef = useRef(null);
    var _b = useState(0), activeSlideIndex = _b[0], setActiveSlideIndex = _b[1];
    var _c = useState(false); _c[0]; _c[1];
    var _d = useState(false); _d[0]; _d[1];
    var _e = useState(true); _e[0]; var setNextShow = _e[1];
    useTheme();
    var _f = useState(LOCAL_BASE_URL); _f[0]; _f[1];
    var matchesSm = useMediaQuery("(max-width:800px)");
    var matchesXs = useMediaQuery("(max-width:700px)");
    var matchesXxs = useMediaQuery("(max-width:450px)");
    var matches1200 = useMediaQuery("(max-width:1200px)");
    var _g = useState(true); _g[0]; _g[1];
    useEffect(function () {
        if (sliderRef.current && sliderRef.current.props.slidesToShow) {
            setNextShow(sliderRef.current.props.slidesToShow < data.length ||
                (matchesXxs && data.length >= 3) ||
                (matchesXs && data.length >= 4) ||
                (matchesSm && data.length >= 5) ||
                (matches1200 && data.length >= 6));
        }
    }, [sliderRef.current, matches1200]);
    function SampleNextArrow(props) {
        var className = props.className, style = props.style, onClick = props.onClick;
        return (jsx(Box$1, __assign({ className: className, onClick: onClick, sx: __assign(__assign({}, style), { top: "50%", right: 0, transform: "translateY(-50%)", zIndex: 10, display: "block !important", cursor: "pointer", position: "absolute" }) }, { children: jsx(ArrowForwardIosIcon, { sx: { fontSize: 20, color: "black" } }) })));
    }
    function SamplePrevArrow(props) {
        var className = props.className, style = props.style, onClick = props.onClick;
        return (jsx(Box$1, __assign({ className: className, onClick: onClick, sx: __assign(__assign({}, style), { top: "50%", left: 0, transform: "translateY(-50%)", zIndex: 10, display: "block !important", cursor: "pointer", position: "absolute" }) }, { children: jsx(ArrowBackIosIcon, { sx: { fontSize: 20, color: "black" } }) })));
    }
    var settings = {
        speed: 500,
        infinite: false,
        arrows: false,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        beforeChange: function (oldIndex, newIndex) { return setActiveSlideIndex(newIndex); },
        nextArrow: jsx(SampleNextArrow, {}),
        prevArrow: jsx(SamplePrevArrow, {}),
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 3.5,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.75,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1.75,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (jsx(Box$1, __assign({ sx: { overflowX: "hidden", position: "relative" } }, { children: data.length > 0 &&
            categories.category_type &&
            categories.category_type !== "ad_category" && (jsxs(Fragment, { children: [jsx(SamplePrevArrow, { onClick: function () { var _a; return (_a = sliderRef === null || sliderRef === void 0 ? void 0 : sliderRef.current) === null || _a === void 0 ? void 0 : _a.slickPrev(); } }), jsx(Slider, __assign({ ref: sliderRef }, settings, { children: data.map(function (item, index) {
                        return (jsx(Box$1, __assign({ sx: { borderRadius: "16px" } }, { children: index !== activeSlideIndex ? (jsx(Image, { path: item.image_landscape ||
                                    item.image_portrait ||
                                    item.image_square ||
                                    item.thumb_path, sx: {
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "16px",
                                } })) : (jsx(VideoJSPlayer
                            //@ts-ignore
                            , { 
                                //@ts-ignore
                                _hlsStreamUrl: item.trailer_link, isActive: index === activeSlideIndex })) }), index));
                    }) })), jsx(SampleNextArrow, { onClick: function () { var _a; return (_a = sliderRef === null || sliderRef === void 0 ? void 0 : sliderRef.current) === null || _a === void 0 ? void 0 : _a.slickNext(); } })] })) })));
}

var RowSkeleton = function () {
    return (jsx(Fragment, { children: jsxs("div", __assign({ className: "lolomoRow lolomoRow_title_card lolomoPreview" }, { children: [jsx("div", __assign({ className: "rowHeader" }, { children: jsx("span", __assign({ className: "rowTitle" }, { children: "\u00A0" })) })), jsx("div", __assign({ className: "rowContent" }, { children: jsxs("div", __assign({ className: "slider" }, { children: [jsx("div", __assign({ className: "smallTitleCard loadingTitle" }, { children: jsx("div", { className: "ratio-16x9 pulsate", style: { animationDelay: "0s" } }) })), jsx("div", __assign({ className: "smallTitleCard loadingTitle" }, { children: jsx("div", { className: "ratio-16x9 pulsate", style: { animationDelay: ".2s" } }) })), jsx("div", __assign({ className: "smallTitleCard loadingTitle" }, { children: jsx("div", { className: "ratio-16x9 pulsate", style: { animationDelay: "0.4s" } }) })), jsx("div", __assign({ className: "smallTitleCard loadingTitle" }, { children: jsx("div", { className: "ratio-16x9 pulsate", style: { animationDelay: "0.6s" } }) })), jsx("div", __assign({ className: "smallTitleCard loadingTitle" }, { children: jsx("div", { className: "ratio-16x9 pulsate", style: { animationDelay: "0.8s" } }) })), jsx("div", __assign({ className: "smallTitleCard loadingTitle" }, { children: jsx("div", { className: "ratio-16x9 pulsate", style: { animationDelay: "1s" } }) }))] })) }))] })) }));
};

function withPagination(Component, props) {
    return function WithPagination() {
        var _this = this;
        var category = props.category, type = props.type, token = props.token, tile = props.tile;
        var _a = useState(0), page = _a[0], setPage = _a[1];
        var _b = useState([]), productList = _b[0], setProductList = _b[1];
        var _c = useState(0), totalProduct = _c[0], setTotalProduct = _c[1];
        useEffect(function () {
            var fetchProducts = function () { return __awaiter(_this, void 0, void 0, function () {
                var ProductRequestbody, ProductRes;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(!((category === null || category === void 0 ? void 0 : category.category_type) === "ad_category" && (category === null || category === void 0 ? void 0 : category.ad_type) == 1) &&
                                (category === null || category === void 0 ? void 0 : category.category_type) !== "tvod")) return [3 /*break*/, 2];
                            ProductRequestbody = {
                                category_id: category === null || category === void 0 ? void 0 : category.category_id,
                                category_type: category === null || category === void 0 ? void 0 : category.category_type,
                                page: page + 1,
                                page_size: (category === null || category === void 0 ? void 0 : category.page_size) ? category === null || category === void 0 ? void 0 : category.page_size : -1,
                            };
                            return [4 /*yield*/, fetch("https://web-api.binge.buzz/api/v3/page/category/products", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Authorization: "Bearer ".concat(token),
                                        "Device-Type": "web",
                                    },
                                    body: JSON.stringify(ProductRequestbody),
                                }).then(function (response) { return response.json(); })];
                        case 1:
                            ProductRes = _a.sent();
                            if (ProductRes.data &&
                                ProductRes.data.products &&
                                ProductRes.data.products.length) {
                                setProductList(ProductRes.data.products);
                                setTotalProduct(ProductRes.data.total);
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); };
            fetchProducts();
        }, [page, category, token]);
        if (productList && productList.length > 0) {
            return (jsx(Component, { categories: category, data: productList, totalProduct: totalProduct, handleNext: function () { return setPage(function (prev) { return prev + 1; }); }, type: type, visibleOverflow: props.visibleOverflow, tile: tile }));
        }
        else {
            return jsx(RowSkeleton, {});
        }
    };
}

var MEDIA_TYPE;
(function (MEDIA_TYPE) {
    MEDIA_TYPE["Movie"] = "movie";
    MEDIA_TYPE["Tv"] = "tv";
})(MEDIA_TYPE || (MEDIA_TYPE = {}));
function SliderRowForGenre(props) {
    var Component = withPagination(SlickSlider, props);
    return jsx(Component, {});
}

var appConfig = {
    apiKey: "AIzaSyDKtOJpkYEDnQVKNnyCeyoN1DjajMW7o9g",
    authDomain: "binge-mobile.firebaseapp.com",
    databaseURL: "https://binge-mobile.firebaseio.com",
    projectId: "binge-mobile",
    storageBucket: "binge-mobile.appspot.com",
    messagingSenderId: "84147851202",
    appId: "1:84147851202:web:839afbf7d74575a729505b",
    measurementId: "G-CNNSYHBDMN",
};
// Initialize Firebase
var firebaseConfig = appConfig;
var app = initializeApp(firebaseConfig);
getAnalytics(app);
var auth = initializeAuth(app, {
    persistence: browserSessionPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
});
var firebaseAnonymousSignIn = function () { return __awaiter(void 0, void 0, void 0, function () {
    var signInResult, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, auth.currentUser];
            case 1:
                _a.sent();
                return [4 /*yield*/, signInAnonymously(auth)];
            case 2:
                signInResult = _a.sent();
                return [2 /*return*/, signInResult.user];
            case 3:
                error_1 = _a.sent();
                // Handle errors and return the error object
                return [2 /*return*/, error_1];
            case 4: return [2 /*return*/];
        }
    });
}); };

var handleAnonLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
    var timeoutPromise, apiPromise, res, response, responseData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                timeoutPromise = new Promise(function (_, reject) {
                    return setTimeout(function () { return reject("Timeout"); }, 5000);
                });
                apiPromise = firebaseAnonymousSignIn();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, Promise.race([
                        apiPromise,
                        timeoutPromise,
                    ])];
            case 2:
                res = _a.sent();
                if (res === "Timeout") {
                    console.error("API call timed out");
                    window.location.href = "/login";
                    return [2 /*return*/, null];
                }
                return [4 /*yield*/, fetch("https://web-api.binge.buzz/api/v3/oauth/verify/login/anon", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Device-Type": "web",
                        },
                        body: JSON.stringify({
                            access_token: res.accessToken,
                            uid: res.uid,
                        }),
                    })];
            case 3:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 4:
                responseData = _a.sent();
                if (responseData === null || responseData === void 0 ? void 0 : responseData.token) {
                    SetCookiesValue("jwtToken", responseData.token, 1, false);
                    sessionStorage.setItem("jwtToken", responseData.token);
                    return [2 /*return*/, responseData.token];
                }
                else {
                    return [2 /*return*/, null];
                }
            case 5:
                err_1 = _a.sent();
                console.error("Error during anonymous login:", err_1);
                return [2 /*return*/, null];
            case 6: return [2 /*return*/];
        }
    });
}); };

function useAnonToken() {
    var _this = this;
    var _a = useState(null), token = _a[0], setToken = _a[1];
    useEffect(function () {
        var fetchToken = function () { return __awaiter(_this, void 0, void 0, function () {
            var temp;
            return __generator(this, function (_a) {
                handleAnonLogin();
                temp = GetCookiesValue("jwtToken", false);
                setToken(temp);
                return [2 /*return*/];
            });
        }); };
        fetchToken();
    }, []);
    return token;
}

var fetchCategories = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var responseAllCategories, resAllCatData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://web-api.binge.buzz/api/v3/page/allCategories", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(token),
                        "Device-Type": "web",
                    },
                    body: JSON.stringify({
                        page: "web-home-vod",
                    }),
                })];
            case 1:
                responseAllCategories = _a.sent();
                return [4 /*yield*/, responseAllCategories.json()];
            case 2:
                resAllCatData = _a.sent();
                return [2 /*return*/, resAllCatData.categories.slice(1, 2)];
        }
    });
}); };

var SliderContainerStyle = {
    mt: "100px !important"
};

var BingeSlider = function () {
    var token = useAnonToken();
    var _a = useState([]), categoryList = _a[0], setCategoryList = _a[1];
    useEffect(function () {
        if (token) {
            fetchCategories(token).then(function (category) {
                setCategoryList(category);
            });
        }
    }, [token]);
    return (jsx(Box$1, __assign({ sx: SliderContainerStyle }, { children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function (item, index) { return (jsx(Box$1, { children: jsx(SliderRowForGenre, { category: item, type: "cardWithHover", visibleOverflow: true, token: token !== null && token !== void 0 ? token : "" }, item.category_id) }, item.category_id)); }) })));
};

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SvgWatch = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 20,
  height: 20,
  fill: "none"
}, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
  stroke: "#fff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.667,
  d: "M4.167 4.158c0-.81 0-1.214.168-1.437a.83.83 0 0 1 .615-.33c.28-.016.616.208 1.29.657l8.763 5.842c.556.371.834.557.931.79a.83.83 0 0 1 0 .639c-.097.234-.375.419-.931.79L6.24 16.951c-.674.449-1.01.673-1.29.657a.83.83 0 0 1-.615-.33c-.168-.223-.168-.627-.168-1.436z"
})));

var TopContainer = function () {
    var isXs = useMediaQuery("(max-width:600px)");
    var isLg = useMediaQuery("(min-width:1200px)");
    var is1400px = useMediaQuery("(min-width:1400px)");
    var imageSrc = "/assets/images/HeroImage.png";
    if (isXs) {
        imageSrc = "/assets/images/Hero Portrait.jpg";
    }
    else if (isLg) {
        imageSrc = "/assets/images/HeroImage.png";
    }
    return (jsxs(Box$1, __assign({ sx: { position: "relative" } }, { children: [jsx(Box$1, __assign({ sx: {
                    position: "relative",
                    display: "flex",
                    justifyContent: "end",
                    width: "100%",
                } }, { children: jsx("img", { src: imageSrc, alt: "hero", style: { width: "70%", maxWidth: "1003px", height: "auto" } }) })), jsx(Box$1, __assign({ sx: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: { xs: "100%", md: "80%" },
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    background: {
                        xs: "linear-gradient(to right, #464A54 0%, #464A54 35%, rgba(255, 255, 255, 0.00))",
                        md: "linear-gradient(to right, #464A54 0%, #464A54 47%, rgba(255, 255, 255, 0.00))",
                    },
                } }, { children: jsxs(Container, __assign({ sx: {
                        zIndex: 1,
                        paddingX: "0px !important",
                        marginLeft: is1400px
                            ? "150px"
                            : isLg
                                ? "80px"
                                : { xs: "20px", sm: "50px", md: "100px" },
                    } }, { children: [jsxs(Typography, __assign({ variant: "h3", sx: {
                                fontWeight: { xs: "400", md: "700" },
                                fontSize: is1400px
                                    ? "48px"
                                    : isLg
                                        ? "38px"
                                        : { xs: "20px", sm: "25px", md: "30px" },
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            } }, { children: [jsx(Box$1, { component: "img", src: "/assets/images/binge-logo.svg", alt: "binge", sx: {
                                        width: is1400px
                                            ? 165
                                            : isLg
                                                ? 150
                                                : { xs: 80, sm: 100, md: 135 },
                                    } }), jsx("span", __assign({ className: "banner-text" }, { children: "is an online video" }))] })), jsx(Typography, __assign({ variant: "h3", sx: {
                                fontWeight: 700,
                                fontSize: is1400px
                                    ? "48px"
                                    : isLg
                                        ? "38px"
                                        : { xs: "20px", sm: "25px", md: "30px" },
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            } }, { children: jsx("span", __assign({ className: "banner-text", style: {
                                    color: "#EEEFFC",
                                    marginTop: "0px",
                                    marginBottom: "0px",
                                } }, { children: "streaming platform" })) })), jsxs(Button, __assign({ className: "banner-text", sx: {
                                background: "#FF4A50",
                                borderRadius: "32px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "6px",
                                padding: { xs: "8px 14px", lg: "12px 18px" },
                                color: "#fff",
                                textTransform: "none",
                                fontSize: { xs: "15px", sm: "14px", lg: "16px" },
                                fontWeight: { xs: "400", lg: "600" },
                                marginTop: { xs: "15px", md: "30px" },
                            } }, { children: ["Watch Now", jsx(SvgWatch, { style: { width: "16px", height: "16px" } })] }))] })) }))] })));
};

var TextContainer = function () {
    return (jsxs(Box$1, __assign({ sx: {
            width: {
                xs: "95%",
                sm: "80%",
                md: "65%",
                lg: "50%",
            },
            mx: "auto !important",
            display: "flex",
            flexDirection: "column",
            gap: "21px",
            mt: "43px !important",
        } }, { children: [jsx(Typography, __assign({ className: "banner-text", sx: {
                    color: "#202939",
                    fontSize: {
                        xs: "30px",
                        sm: "36px",
                    },
                    fontWeight: "700",
                    textAlign: "center",
                } }, { children: "About Binge" })), jsx(Typography, __assign({ className: "binge-text", sx: {
                    color: "#697586",
                    fontSize: {
                        xs: "14px",
                        sm: "16px",
                    },
                    fontWeight: "400",
                    textAlign: "center",
                } }, { children: "Binge\u00A0is an online video streaming platform that offers endless entertainment of Web Series, Bangla Dubbed Foreign Drama, Classic Hollywood Movies." }))] })));
};

var BingeLandingComponent = function () {
    return (jsx(ThemeProvider, __assign({ theme: createTheme({ palette: palette }) }, { children: jsxs(Box$1, { children: [jsx(TopContainer, {}), jsx(TextContainer, {}), jsx(BingeSlider, {})] }) })));
};

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import PortalProvider from "./components/PortalProvider";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import palette from "./theme/palette";
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <ThemeProvider theme={createTheme({ palette })}>
//     <PortalProvider>
//       <App />
//     </PortalProvider>
//   </ThemeProvider>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

export { BingeLandingComponent as default };
