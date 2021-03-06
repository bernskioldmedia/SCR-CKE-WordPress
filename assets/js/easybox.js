/*
Easybox v1.4 - Lightweight easy to use lightbox clone for jQuery
Based on Slimbox2 by Christophe Beyls <http://www.digitalia.be>
*/
/android|iphone|ipod|series60|symbian|windows ce|blackberry|msie 6/i.test(navigator.userAgent) || jQuery(function (a) {
    a("a.lightbox").easybox({/* custom options here */ }, null, function (a) { return this == a || -1 != this.className.indexOf("lightbox") && this.hasAttribute("data-group") && this.getAttribute("data-group") == a.getAttribute("data-group") }, function (b) {
        var c = {}; if (a("#easyOptions").length) {
            var f = a.parseJSON(a("#easyOptions").html()), d = b.getAttribute("data-group"); a.each(f, function (e, b) {
                if ("global" == e || "string" == typeof d && e == d) c =
                a.extend(c, b)
            })
        } return c
    })
});
(function (b) {
    function A(a) { if (s || 0 > a || a >= d.length) return !1; B(); f = a; k = (f || (c.loop ? d.length : 0)) - 1; e = (f + 1) % d.length || (c.loop ? 0 : -1); c.preloadNext && (0 <= k && C(d[k]), 0 <= e && C(d[e])); d[f].loaded || b(w).show(); C(d[f]); return !1 } function W() {
        var a = d[f]; b(w).hide(); a.error ? b(j).addClass("error").width(c.errorSize[0]).height(c.errorSize[1]) : (!c.hideCaption && a.caption.length && b(m).html(a.caption).css({ display: "" }), b(j).width(a.width).height(a.height)); !c.hideCaption && 1 < d.length && c.counterText.length && b(n).html(c.counterText.replace(/{x}/,
        f + 1).replace(/{y}/, d.length)).css({ display: "" }); s = !0; b(j).css({ visibility: "hidden", display: "" }); P([j.offsetWidth, j.offsetHeight], -1, c.resizeDuration); b(g).queue(function (h) { b(j).css({ visibility: "", display: "none" }); a.error || (b(a.obj).appendTo(j), a.handler.show(a), D = !0); Q(); b(j).fadeIn(c.fadeDuration, X); s = !1; h() })
    } function P(a, h, o) { i = a.slice(); var d = {}; if (g.offsetHeight != a[1] || g.offsetWidth != a[0]) d = { height: a[1], marginTop: -a[1] / 2, width: a[0], marginLeft: -a[0] / 2 }; if (-1 < h) d.opacity = h; b(g).animate(d, o, c.resizeEasing) }
    function X() { if (!c.hideBottom) { if ((0 <= k || 0 <= e) && !c.noNavigation && !c.hideButtons) b(E).css({ display: "" }), b([m, n]).addClass("nav"), 0 > k && b(F).addClass("disabled"), 0 > e && b(G).addClass("disabled"); b(x).fadeIn(c.captionFadeDuration); b(g).animate({ height: i[1] + x.offsetHeight }, c.captionFadeDuration, c.resizeEasing) } } function B() {
        null != l && (clearTimeout(l), l = null); null != t && (clearTimeout(t), t = null); if (0 <= f) { var a = d[f]; !a.error && D && a.handler.hide(a) } b([j, m, n]).html(""); b(w).hide(); b([x, j]).stop(!0, !0).hide(); b(g).stop(!0).css({
            width: i[0],
            height: i[1], marginLeft: -i[0] / 2, marginTop: -i[1] / 2, opacity: ""
        }); b([E, m, n]).hide(); b([j, m, n, F, G]).removeClass(); D = s = !1
    } function H() { if (!p) return !1; B(); f = k = e = -1; I(); R(0); for (var a = 0; a < d.length; ++a) { var h = d[a]; !h.loaded && h.loading && h.handler.abort(h) } b(J).stop().fadeOut(c.fadeDuration); P([i[0] / 2, i[1] / 2], 0, c.fadeDuration); b(g).queue(function (a) { b(g).css({ left: "", top: "" }).hide(); p = !1; a() }); return !1 } function u() { q = !0; return A(k) } function v() { q = !1; return A(e) } function K() { return s || c.noClose ? !1 : H() } function Y() {
        r =
        !r; q = !1; b(L).toggleClass("disabled", r); r ? null != l && (clearTimeout(l), l = null) : Q(); return !1
    } function Q() { if (c.slideshow && !r && null == l) { if (q && 0 <= k) return l = setTimeout(u, c.slideshow), !1; if (!q && 0 <= e) return l = setTimeout(v, c.slideshow), !1 } c.autoClose && null == t && (t = setTimeout(H, c.autoClose)); return !1 } function C(a) { a.loaded && M(a); if (!a.loading) { a.loading = !0; for (var b = y.length - 1; 0 <= b; --b) if (y[b].identify(a)) { a.handler = y[b]; a.handler.preLoad(a, function () { M(a) }); return } a.error = !0; M(a) } } function M(a) {
        if (!a.loaded &&
        (a.loaded = !0, !a.error)) { if (!a.width || !a.height) a.width = c.defaultContentSize[0], a.height = c.defaultContentSize[1]; if (a.height > c.maximumContentSize[1]) a.width = Math.round(c.maximumContentSize[1] * a.width / a.height), a.height = c.maximumContentSize[1]; if (a.width > c.maximumContentSize[0]) a.height = Math.round(c.maximumContentSize[0] / a.width * a.height), a.width = c.maximumContentSize[0]; a.handler.postLoad(a) } d[f] == a && W()
    } function R(a) {
        a ? b("object:visible").add("embed").each(function (a, b) {
            N[a] = [b, b.style.visibility];
            b.style.visibility = "hidden"
        }) : (b.each(N, function (a, b) { b[0].style.visibility = b[1] }), N = []); a = a ? "bind" : "unbind"; b(document)[a]("keydown", Z); if (b.fn.mousewheel) b(window)[a]("mousewheel", $); b(g)[a]("mousedown", aa)[a]("mousemove", S)[a]("mouseup", I); b(window)[a]("mousemove", S)[a]("mouseup", I)
    } function Z(a) { var a = a.keyCode, h = b.inArray; return 0 <= h(a, c.closeKeys) ? K() : 0 <= h(a, c.nextKeys) && !c.noNavigation ? v() : 0 <= h(a, c.previousKeys) && !c.noNavigation ? u() : !c.preventOtherKeys } function $(a, b) {
        return 0 < b && !c.noNavigation ?
        u() : 0 > b && !c.noNavigation ? v() : !1
    } function aa(a) { return c.dragDrop ? (z = !0, b(g).css({ cursor: "pointer" }), T = a.pageX - b(this).position().left, U = a.pageY - b(this).position().top, !1) : !0 } function S(a) { if (c.dragDrop && z) { var h = a.pageX - b(window).scrollLeft() - T, a = a.pageY - b(window).scrollTop() - U; b(g).css({ left: h + "px", top: a + "px" }); return !1 } return !0 } function I() { z && (z = !1, b(g).css({ cursor: "" })); return !0 } var O = {
        loop: !1, preloadNext: !0, dragDrop: !0, hideBottom: !1, hideCaption: !1, hideButtons: !1, noNavigation: !1, noClose: !1, overlayOpacity: 0.8,
        resizeDuration: 400, resizeEasing: "easybox", fadeDuration: 400, initCenterSize: [250, 250], errorSize: [320, 180], defaultContentSize: [960, 720], maximumContentSize: [1280, 720], captionFadeDuration: 200, slideshow: 0, autoClose: 0, counterText: "{x} of {y}", closeKeys: [27], previousKeys: [37], nextKeys: [39], preventOtherKeys: !0
    }, y = [], c, d, f = -1, k, e, i, N = [], q, r, z = !1, T = 0, U = 0, p = !1, s, D, l = null, t = null, J, g, j, E, F, G, L, V, x, m, n, w; b(function () {
        b("body").append(b([J = b('<div id="easyOverlay" />')[0], g = b('<div id="easyCenter" />').append([j =
        b('<div id="easyContainer" />')[0], w = b('<div id="easyLoadingIndicator" />')[0], x = b('<div id="easyBottom" />').append([E = b('<div id="easyNavigation" />').append([F = b('<a id="easyPrevLink" href="#" />').click(u)[0], G = b('<a id="easyNextLink" href="#" />').click(v)[0]])[0], V = b('<a id="easyCloseLink" href="#" />').click(K)[0], L = b('<a id="easySlideLink" href="#" />').click(Y)[0], m = b('<div id="easyCaption" />')[0], n = b('<div id="easyNumber" />')[0]])[0]])[0]]).css("display", "none")); b.easybox.resourceHandler({
            identify: function (a) {
                return a.url ?
                !0 : !1
            }, postLoad: function (a) { a.obj = b('<iframe width="' + a.width + '" height="' + a.height + '" src="' + a.url + '" frameborder="0"></iframe>')[0] }
        }); b.easybox.resourceHandler({ identify: function (a) { return a.html ? !0 : !1 }, postLoad: function (a) { a.obj = b('<div style="width:' + a.width + "px;height:" + a.height + 'px">' + a.html + "</div>")[0] } }); b.easybox.resourceHandler({
            identify: function (a) { if (!a.url) return !1; var c = /^(.*)\#([A-Za-z0-9\-_]*)$/i.exec(a.url); return null != c && b("#" + c[2]).length ? (a.id = c[2], !0) : !1 }, preLoad: function (a,
            c) { var o = b("#" + a.id)[0]; o ? (a.width = a.width || b(o).width(), a.height = a.height || b(o).height(), a.obj = o) : a.error = !0; c() }, postLoad: function (a) { a.parent = b(a.obj).parent()[0]; a.display = b(a.obj).css("display") }, show: function (a) { b(a.obj).css("display", "block") }, hide: function (a) { b(a.parent).append(b(a.obj).css("display", a.display)) }
        }); b.easybox.resourceHandler({
            identify: function (a) { return !a.url ? !1 : /(\.jpg|\.jpeg|\.png|\.gif)$/i.test(a.url) }, preLoad: function (a, b) {
                var c = new Image; c.onload = function () {
                    a.width = a.width ||
                    this.width; a.height = a.height || this.height; b()
                }; c.onerror = function () { a.error = !0; b() }; c.src = a.url
            }, postLoad: function (a) { a.obj = b('<img src="' + a.url + '" style="display:block;width:' + a.width + "px;height:" + a.height + 'px" alt="' + a.caption + '" />')[0] }
        }); b.easybox.resourceHandler({
            identify: function (a) { return !a.url ? !1 : /(\.mpg|\.mpeg|\.mp4|\.ogv|\.webm|\.flv)$/i.test(a.url) }, postLoad: function (a) { a.obj = b('<div style="overflow:hidden;width:' + a.width + "px;height:" + a.height + 'px" />')[0] }, show: function (a) {
                var c = !!b.fn.flowplayer;
                b(a.obj).append(b('<video src="' + a.url + '" width="' + a.width + '" height="' + a.height + '"' + (!c ? ' controls="controls"' : "") + " />")); c && b(a.obj).flowplayer()
            }
        }); b.easybox.resourceHandler({
            identify: function (a) { if (!a.url) return !1; var b = /^http\:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9\-_]*)(&(.*))?$/i.exec(a.url); return null != b ? (a.id = b[1], !0) : !1 }, preLoad: function (a, c) {
                b.ajax("http://gdata.youtube.com/feeds/api/videos/" + a.id + "?v=2&alt=jsonc", {
                    type: "GET", dataType: "jsonp", timeout: 2E3, error: function (b, d) {
                        if ("abort" !=
                        d) a.error = !0, c()
                    }, success: function (b) { !b.error && b.data && "allowed" == b.data.accessControl.embed ? (b = "widescreen" == b.data.aspectRatio, a.height = a.height || 720, a.width = Math.round(a.height * (b ? 16 / 9 : 4 / 3))) : a.error = !0; c() }
                })
            }, postLoad: function (a) { a.obj = b('<iframe src="http://www.youtube.com/embed/' + a.id + '?version=3&autohide=1&autoplay=1&rel=0" width="' + a.width + '" height="' + a.height + '" frameborder="0"></iframe>')[0] }
        }); b.easybox.resourceHandler({
            identify: function (a) {
                if (!a.url) return !1; var b = /^http\:\/\/vimeo\.com\/([0-9]*)(.*)?$/i.exec(a.url);
                return null != b ? (a.id = b[1], !0) : !1
            }, preLoad: function (a, c) { b.ajax("http://vimeo.com/api/v2/video/" + a.id + ".json", { type: "GET", dataType: "jsonp", timeout: 2E3, error: function (b, d) { if ("abort" != d) a.error = !0, c() }, success: function (b) { if (b.length) if ("anywhere" == b[0].embed_privacy || "approved" == b[0].embed_privacy) { if (b[0].width && b[0].height) a.width = b[0].width, a.height = b[0].height } else a.error = !0; c() } }) }, postLoad: function (a) {
                a.obj = b('<iframe src="http://player.vimeo.com/video/' + a.id + '?title=0&byline=0&portrait=0&autoplay=true" width="' +
                a.width + '" height="' + a.height + '" frameborder="0"></iframe>')[0]
            }
        }); b.easybox.resourceHandler({
            identify: function (a) { if (!a.url) return !1; var b = /^http\:\/\/www\.dailymotion\.com\/video\/([A-Za-z0-9]*)(.*)?$/i.exec(a.url); return null != b ? (a.id = b[1], !0) : !1 }, preLoad: function (a, c) {
                b.ajax("https://api.dailymotion.com/video/" + a.id + "?fields=allow_embed,aspect_ratio", {
                    type: "GET", dataType: "jsonp", timeout: 2E3, error: function (b, d) { if ("abort" != d) a.error = !0, c() }, success: function (b) {
                        b.allow_embed ? (b = b.aspect_ratio, a.height =
                        a.height || 720, a.width = Math.round(a.height * b)) : a.error = !0; c()
                    }
                })
            }, postLoad: function (a) { a.obj = b('<iframe src="http://www.dailymotion.com/embed/video/' + a.id + '?autoplay=1" width="' + a.width + '" height="' + a.height + '" frameborder="0"></iframe>')[0] }
        })
    }); b.fn.easybox = function (a, c, d, g) {
        var c = c || function (a) { var b = { url: a.href, caption: a.title }; if (a.hasAttribute("data-width")) b.width = a.getAttribute("data-width"); if (a.hasAttribute("data-height")) b.height = a.getAttribute("data-height"); return b }, d = d || function (a) {
            return this ==
            a
        }, g = g || function () { return {} }, j = this; return j.unbind("click").click(function () { var f = this, k = 0, e, i = 0, l; e = b.grep(j, function (a, b) { return d.call(f, a, b) }); for (l = e.length; i < l; ++i) e[i] == f && (k = i), e[i] = c(e[i], i); return b.easybox(e, k, b.extend({}, a, g(f))) })
    }; b.easybox = function (a, h, e) {
        if (p) return !1; c = b.extend({}, O, e); var e = 0, f; d = []; for (f = a.length; e < f; ++e) d.push(b.extend({ caption: "", width: 0, height: 0 }, a[e], { handler: null, loaded: !1, loading: !1, error: !1, obj: null })); if (d.length) return p = !0, c.loop = c.loop && 1 < d.length,
        c.slideshow = c.slideshow && 1 < d.length ? c.slideshow : 0, b(L).removeClass("disabled").css({ display: c.slideshow && 1 < d.length && !c.hideButtons ? "" : "none" }), q = r = !1, b(V).css({ display: !c.hideButtons ? "" : "none" }), i = c.initCenterSize.slice(), B(), R(1), b(g).show(), b(J).css({ opacity: c.overlayOpacity }).fadeIn(c.fadeDuration, function () { A(Math.min(d.length - 1, h || 0)) }), !1
    }; b.easybox.previous = function () { return 0 <= k ? !u() : !1 }; b.easybox.next = function () { return 0 <= e ? !v() : !1 }; b.easybox.close = function () { return p ? !H() : !1 }; b.easybox.isOpen =
    function () { return p }; b.easybox.defaults = function (a) { O = b.extend(O, a) }; b.easybox.resourceHandler = function (a) { y.push(b.extend({ identify: function () { return !1 }, preLoad: function (a, b) { b() }, postLoad: function () { }, abort: function () { }, show: function () { }, hide: function () { } }, a)) }; b.easing.easybox = function (a) { return 0.7 > a ? 1.2 * Math.pow(a / 0.7, 2) : 1.2 - 0.2 * Math.sqrt((a - 0.7) / (1 - 0.7)) }
})(jQuery);