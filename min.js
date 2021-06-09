! function(o) {
  "use strict";
  o.fn.fitVids = function(t) {
    var e, i, n = {
      customSelector: null,
      ignore: null
    };
    return document.getElementById("fit-vids-style") || (e = document.head || document.getElementsByTagName("head")[0], (i = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', e.appendChild(i.childNodes[1])), t && o.extend(n, t), this.each(function() {
      var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
      n.customSelector && t.push(n.customSelector);
      var s = ".fitvidsignore";
      n.ignore && (s = s + ", " + n.ignore);
      t = o(this).find(t.join(","));
      (t = (t = t.not("object object")).not(s)).each(function() {
        var t, e, i = o(this);
        0 < i.parents(s).length || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length || (i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16)), t = ("object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height()) / (isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10)), i.attr("id") || (e = "fitvid" + Math.floor(999999 * Math.random()), i.attr("id", e)), i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"), i.removeAttr("height").removeAttr("width"))
      })
    })
  }
}(window.jQuery || window.Zepto),
function(c) {
  function t() {}

  function d(t, e) {
    f.ev.on(i + t + b, e)
  }

  function h(t, e, i, s) {
    var n = document.createElement("div");
    return n.className = "mfp-" + t, i && (n.innerHTML = i), s ? e && e.appendChild(n) : (n = c(n), e && n.appendTo(e)), n
  }

  function u(t, e) {
    f.ev.triggerHandler(i + t, e), f.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), f.st.callbacks[t] && f.st.callbacks[t].apply(f, c.isArray(e) ? e : [e]))
  }

  function p(t) {
    return t === e && f.currTemplate.closeBtn || (f.currTemplate.closeBtn = c(f.st.closeMarkup.replace("%title%", f.st.tClose)), e = t), f.currTemplate.closeBtn
  }

  function o() {
    c.magnificPopup.instance || ((f = new t).init(), c.magnificPopup.instance = f)
  }
  var f, s, g, m, n, v, e, l = "Close",
    y = "BeforeClose",
    w = "MarkupParse",
    _ = "Open",
    a = "Change",
    i = "mfp",
    b = "." + i,
    C = "mfp-ready",
    r = "mfp-removing",
    x = "mfp-prevent-close",
    k = !!window.jQuery,
    T = c(window);
  t.prototype = {
    constructor: t,
    init: function() {
      var t = navigator.appVersion;
      f.isIE7 = -1 !== t.indexOf("MSIE 7."), f.isIE8 = -1 !== t.indexOf("MSIE 8."), f.isLowIE = f.isIE7 || f.isIE8, f.isAndroid = /android/gi.test(t), f.isIOS = /iphone|ipad|ipod/gi.test(t), f.supportsTransition = function() {
        var t = document.createElement("p").style,
          e = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== t.transition) return !0;
        for (; e.length;)
          if (e.pop() + "Transition" in t) return !0;
        return !1
      }(), f.probablyMobile = f.isAndroid || f.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), m = c(document), f.popupsCache = {}
    },
    open: function(t) {
      if (g = g || c(document.body), !1 === t.isObj) {
        f.items = t.items.toArray(), f.index = 0;
        for (var e, i = t.items, s = 0; i.length > s; s++)
          if ((e = (e = i[s]).parsed ? e.el[0] : e) === t.el[0]) {
            f.index = s;
            break
          }
      } else f.items = c.isArray(t.items) ? t.items : [t.items], f.index = t.index || 0;
      if (!f.isOpen) {
        f.types = [], v = "", f.ev = t.mainEl && t.mainEl.length ? t.mainEl.eq(0) : m, t.key ? (f.popupsCache[t.key] || (f.popupsCache[t.key] = {}), f.currTemplate = f.popupsCache[t.key]) : f.currTemplate = {}, f.st = c.extend(!0, {}, c.magnificPopup.defaults, t), f.fixedContentPos = "auto" === f.st.fixedContentPos ? !f.probablyMobile : f.st.fixedContentPos, f.st.modal && (f.st.closeOnContentClick = !1, f.st.closeOnBgClick = !1, f.st.showCloseBtn = !1, f.st.enableEscapeKey = !1), f.bgOverlay || (f.bgOverlay = h("bg").on("click" + b, function() {
          f.close()
        }), f.wrap = h("wrap").attr("tabindex", -1).on("click" + b, function(t) {
          f._checkIfClose(t.target) && f.close()
        }), f.container = h("container", f.wrap)), f.contentContainer = h("content"), f.st.preloader && (f.preloader = h("preloader", f.container, f.st.tLoading));
        var n = c.magnificPopup.modules;
        for (s = 0; n.length > s; s++) {
          var o = (o = n[s]).charAt(0).toUpperCase() + o.slice(1);
          f["init" + o].call(f)
        }
        u("BeforeOpen"), f.st.showCloseBtn && (f.st.closeBtnInside ? (d(w, function(t, e, i, s) {
          i.close_replaceWith = p(s.type)
        }), v += " mfp-close-btn-in") : f.wrap.append(p())), f.st.alignTop && (v += " mfp-align-top"), f.fixedContentPos ? f.wrap.css({
          overflow: f.st.overflowY,
          overflowX: "hidden",
          overflowY: f.st.overflowY
        }) : f.wrap.css({
          top: T.scrollTop(),
          position: "absolute"
        }), !1 !== f.st.fixedBgPos && ("auto" !== f.st.fixedBgPos || f.fixedContentPos) || f.bgOverlay.css({
          height: m.height(),
          position: "absolute"
        }), f.st.enableEscapeKey && m.on("keyup" + b, function(t) {
          27 === t.keyCode && f.close()
        }), T.on("resize" + b, function() {
          f.updateSize()
        }), f.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && f.wrap.addClass(v);
        var a = f.wH = T.height(),
          r = {};
        f.fixedContentPos && f._hasScrollBar(a) && ((l = f._getScrollbarSize()) && (r.marginRight = l)), f.fixedContentPos && (f.isIE7 ? c("body, html").css("overflow", "hidden") : r.overflow = "hidden");
        var l = f.st.mainClass;
        return f.isIE7 && (l += " mfp-ie7"), l && f._addClassToMFP(l), f.updateItemHTML(), u("BuildControls"), c("html").css(r), f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo || g), f._lastFocusedEl = document.activeElement, setTimeout(function() {
          f.content ? (f._addClassToMFP(C), f._setFocus()) : f.bgOverlay.addClass(C), m.on("focusin" + b, f._onFocusIn)
        }, 16), f.isOpen = !0, f.updateSize(a), u(_), t
      }
      f.updateItemHTML()
    },
    close: function() {
      f.isOpen && (u(y), f.isOpen = !1, f.st.removalDelay && !f.isLowIE && f.supportsTransition ? (f._addClassToMFP(r), setTimeout(function() {
        f._close()
      }, f.st.removalDelay)) : f._close())
    },
    _close: function() {
      u(l);
      var t = r + " " + C + " ";
      f.bgOverlay.detach(), f.wrap.detach(), f.container.empty(), f.st.mainClass && (t += f.st.mainClass + " "), f._removeClassFromMFP(t), f.fixedContentPos && (t = {
        marginRight: ""
      }, f.isIE7 ? c("body, html").css("overflow", "") : t.overflow = "", c("html").css(t)), m.off("keyup.mfp focusin" + b), f.ev.off(b), f.wrap.attr("class", "mfp-wrap").removeAttr("style"), f.bgOverlay.attr("class", "mfp-bg"), f.container.attr("class", "mfp-container"), !f.st.showCloseBtn || f.st.closeBtnInside && !0 !== f.currTemplate[f.currItem.type] || f.currTemplate.closeBtn && f.currTemplate.closeBtn.detach(), f._lastFocusedEl && c(f._lastFocusedEl).focus(), f.currItem = null, f.content = null, f.currTemplate = null, f.prevHeight = 0, u("AfterClose")
    },
    updateSize: function(t) {
      var e;
      f.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, e = window.innerHeight * e, f.wrap.css("height", e), f.wH = e) : f.wH = t || T.height(), f.fixedContentPos || f.wrap.css("height", f.wH), u("Resize")
    },
    updateItemHTML: function() {
      var t = f.items[f.index];
      f.contentContainer.detach(), f.content && f.content.detach();
      var e = (t = !t.parsed ? f.parseEl(f.index) : t).type;
      u("BeforeChange", [f.currItem ? f.currItem.type : "", e]), f.currItem = t, f.currTemplate[e] || (i = !!f.st[e] && f.st[e].markup, u("FirstMarkupParse", i), f.currTemplate[e] = !i || c(i)), n && n !== t.type && f.container.removeClass("mfp-" + n + "-holder");
      var i = f["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, f.currTemplate[e]);
      f.appendContent(i, e), t.preloaded = !0, u(a, t), n = t.type, f.container.prepend(f.contentContainer), u("AfterChange")
    },
    appendContent: function(t, e) {
      (f.content = t) ? f.st.showCloseBtn && f.st.closeBtnInside && !0 === f.currTemplate[e] ? f.content.find(".mfp-close").length || f.content.append(p()) : f.content = t: f.content = "", u("BeforeAppend"), f.container.addClass("mfp-" + e + "-holder"), f.contentContainer.append(f.content)
    },
    parseEl: function(t) {
      var e, i = f.items[t];
      if ((i = i.tagName ? {
          el: c(i)
        } : (e = i.type, {
          data: i,
          src: i.src
        })).el) {
        for (var s = f.types, n = 0; s.length > n; n++)
          if (i.el.hasClass("mfp-" + s[n])) {
            e = s[n];
            break
          } i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
      }
      return i.type = e || f.st.type || "inline", i.index = t, i.parsed = !0, f.items[t] = i, u("ElementParse", i), f.items[t]
    },
    addGroup: function(e, i) {
      function t(t) {
        t.mfpEl = this, f._openClick(t, e, i)
      }
      var s = "click.magnificPopup";
      (i = i || {}).mainEl = e, i.items ? (i.isObj = !0, e.off(s).on(s, t)) : (i.isObj = !1, i.delegate ? e.off(s).on(s, i.delegate, t) : (i.items = e).off(s).on(s, t))
    },
    _openClick: function(t, e, i) {
      if ((void 0 !== i.midClick ? i : c.magnificPopup.defaults).midClick || 2 !== t.which && !t.ctrlKey && !t.metaKey) {
        var s = (void 0 !== i.disableOn ? i : c.magnificPopup.defaults).disableOn;
        if (s)
          if (c.isFunction(s)) {
            if (!s.call(f)) return !0
          } else if (s > T.width()) return !0;
        t.type && (t.preventDefault(), f.isOpen && t.stopPropagation()), i.el = c(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), f.open(i)
      }
    },
    updateStatus: function(t, e) {
      var i;
      f.preloader && (s !== t && f.container.removeClass("mfp-s-" + s), i = {
        status: t,
        text: e = !e && "loading" === t ? f.st.tLoading : e
      }, u("UpdateStatus", i), t = i.status, e = i.text, f.preloader.html(e), f.preloader.find("a").on("click", function(t) {
        t.stopImmediatePropagation()
      }), f.container.addClass("mfp-s-" + t), s = t)
    },
    _checkIfClose: function(t) {
      if (!c(t).hasClass(x)) {
        var e = f.st.closeOnContentClick,
          i = f.st.closeOnBgClick;
        if (e && i) return !0;
        if (!f.content || c(t).hasClass("mfp-close") || f.preloader && t === f.preloader[0]) return !0;
        if (t === f.content[0] || c.contains(f.content[0], t)) {
          if (e) return !0
        } else if (i && c.contains(document, t)) return !0;
        return !1
      }
    },
    _addClassToMFP: function(t) {
      f.bgOverlay.addClass(t), f.wrap.addClass(t)
    },
    _removeClassFromMFP: function(t) {
      this.bgOverlay.removeClass(t), f.wrap.removeClass(t)
    },
    _hasScrollBar: function(t) {
      return (f.isIE7 ? m.height() : document.body.scrollHeight) > (t || T.height())
    },
    _setFocus: function() {
      (f.st.focus ? f.content.find(f.st.focus).eq(0) : f.wrap).focus()
    },
    _onFocusIn: function(t) {
      return t.target === f.wrap[0] || c.contains(f.wrap[0], t.target) ? void 0 : (f._setFocus(), !1)
    },
    _parseMarkup: function(n, t, e) {
      var o;
      e.data && (t = c.extend(e.data, t)), u(w, [n, t, e]), c.each(t, function(t, e) {
        return void 0 === e || !1 === e || void(1 < (o = t.split("_")).length ? 0 < (i = n.find(b + "-" + o[0])).length && ("replaceWith" === (s = o[1]) ? i[0] !== e[0] && i.replaceWith(e) : "img" === s ? i.is("img") ? i.attr("src", e) : i.replaceWith('<img src="' + e + '" class="' + i.attr("class") + '" />') : i.attr(o[1], e)) : n.find(b + "-" + t).html(e));
        var i, s
      })
    },
    _getScrollbarSize: function() {
      var t;
      return void 0 === f.scrollbarSize && ((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), f.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)), f.scrollbarSize
    }
  }, c.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function(t, e) {
      return o(), (t = t ? c.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t)
    },
    close: function() {
      return c.magnificPopup.instance && c.magnificPopup.instance.close()
    },
    registerModule: function(t, e) {
      e.options && (c.magnificPopup.defaults[t] = e.options), c.extend(this.proto, e.proto), this.modules.push(t)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading..."
    }
  }, c.fn.magnificPopup = function(t) {
    o();
    var e, i, s, n = c(this);
    return "string" == typeof t ? "open" === t ? (e = k ? n.data("magnificPopup") : n[0].magnificPopup, i = parseInt(arguments[1], 10) || 0, s = e.items ? e.items[i] : (s = n, (s = e.delegate ? s.find(e.delegate) : s).eq(i)), f._openClick({
      mfpEl: s
    }, n, e)) : f.isOpen && f[t].apply(f, Array.prototype.slice.call(arguments, 1)) : (t = c.extend(!0, {}, t), k ? n.data("magnificPopup", t) : n[0].magnificPopup = t, f.addGroup(n, t)), n
  };

  function A() {
    z && (S.after(z.addClass(E)).detach(), z = null)
  }
  var E, S, z, I = "inline";
  c.magnificPopup.registerModule(I, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        f.types.push(I), d(l + "." + I, function() {
          A()
        })
      },
      getInline: function(t, e) {
        if (A(), t.src) {
          var i, s = f.st.inline,
            n = c(t.src);
          return n.length ? ((i = n[0].parentNode) && i.tagName && (S || (E = s.hiddenClass, S = h(E), E = "mfp-" + E), z = n.after(S).detach().removeClass(E)), f.updateStatus("ready")) : (f.updateStatus("error", s.tNotFound), n = c("<div>")), t.inlineElement = n
        }
        return f.updateStatus("ready"), f._parseMarkup(e, {}, t), e
      }
    }
  });

  function P() {
    M && g.removeClass(M)
  }

  function $() {
    P(), f.req && f.req.abort()
  }
  var M, j = "ajax";
  c.magnificPopup.registerModule(j, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        f.types.push(j), M = f.st.ajax.cursor, d(l + "." + j, $), d("BeforeChange." + j, $)
      },
      getAjax: function(s) {
        M && g.addClass(M), f.updateStatus("loading");
        var t = c.extend({
          url: s.src,
          success: function(t, e, i) {
            i = {
              data: t,
              xhr: i
            };
            u("ParseAjax", i), f.appendContent(c(i.data), j), s.finished = !0, P(), f._setFocus(), setTimeout(function() {
              f.wrap.addClass(C)
            }, 16), f.updateStatus("ready"), u("AjaxContentAdded")
          },
          error: function() {
            P(), s.finished = s.loadError = !0, f.updateStatus("error", f.st.ajax.tError.replace("%url%", s.src))
          }
        }, f.st.ajax.settings);
        return f.req = c.ajax(t), ""
      }
    }
  });
  var D;
  c.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function() {
        var t = f.st.image,
          e = ".image";
        f.types.push("image"), d(_ + e, function() {
          "image" === f.currItem.type && t.cursor && g.addClass(t.cursor)
        }), d(l + e, function() {
          t.cursor && g.removeClass(t.cursor), T.off("resize" + b)
        }), d("Resize" + e, f.resizeImage), f.isLowIE && d("AfterChange", f.resizeImage)
      },
      resizeImage: function() {
        var t, e = f.currItem;
        e && e.img && f.st.image.verticalFit && (t = 0, f.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", f.wH - t))
      },
      _onImageHasSize: function(t) {
        t.img && (t.hasSize = !0, D && clearInterval(D), t.isCheckingImgSize = !1, u("ImageHasSize", t), t.imgHidden && (f.content && f.content.removeClass("mfp-loading"), t.imgHidden = !1))
      },
      findImageSize: function(e) {
        var i = 0,
          s = e.img[0],
          n = function(t) {
            D && clearInterval(D), D = setInterval(function() {
              return 0 < s.naturalWidth ? void f._onImageHasSize(e) : (200 < i && clearInterval(D), void(3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500)))
            }, t)
          };
        n(1)
      },
      getImage: function(t, e) {
        var i, s = 0,
          n = function() {
            t && (t.img[0].complete ? (t.img.off(".mfploader"), t === f.currItem && (f._onImageHasSize(t), f.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, u("ImageLoadComplete")) : ++s < 200 ? setTimeout(n, 100) : o())
          },
          o = function() {
            t && (t.img.off(".mfploader"), t === f.currItem && (f._onImageHasSize(t), f.updateStatus("error", a.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
          },
          a = f.st.image,
          r = e.find(".mfp-img");
        return r.length && ((i = document.createElement("img")).className = "mfp-img", t.img = c(i).on("load.mfploader", n).on("error.mfploader", o), i.src = t.src, r.is("img") && (t.img = t.img.clone()), 0 < (i = t.img[0]).naturalWidth ? t.hasSize = !0 : i.width || (t.hasSize = !1)), f._parseMarkup(e, {
          title: function(t) {
            if (t.data && void 0 !== t.data.title) return t.data.title;
            var e = f.st.image.titleSrc;
            if (e) {
              if (c.isFunction(e)) return e.call(f, t);
              if (t.el) return t.el.attr(e) || ""
            }
            return ""
          }(t),
          img_replaceWith: t.img
        }, t), f.resizeImage(), t.hasSize ? (D && clearInterval(D), t.loadError ? (e.addClass("mfp-loading"), f.updateStatus("error", a.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), f.updateStatus("ready"))) : (f.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), f.findImageSize(t))), e
      }
    }
  });
  var H;
  c.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function(t) {
        return t.is("img") ? t : t.find("img")
      }
    },
    proto: {
      initZoom: function() {
        var t, e, i, s, n, o, a = f.st.zoom,
          r = ".zoom";
        a.enabled && f.supportsTransition && (s = a.duration, n = function(t) {
          var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
            i = "all " + a.duration / 1e3 + "s " + a.easing,
            s = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            },
            t = "transition";
          return s["-webkit-" + t] = s["-moz-" + t] = s["-o-" + t] = s[t] = i, e.css(s), e
        }, o = function() {
          f.content.css("visibility", "visible")
        }, d("BuildControls" + r, function() {
          f._allowZoom() && (clearTimeout(e), f.content.css("visibility", "hidden"), (t = f._getItemToZoom()) ? ((i = n(t)).css(f._getOffset()), f.wrap.append(i), e = setTimeout(function() {
            i.css(f._getOffset(!0)), e = setTimeout(function() {
              o(), setTimeout(function() {
                i.remove(), t = i = null, u("ZoomAnimationEnded")
              }, 16)
            }, s)
          }, 16)) : o())
        }), d(y + r, function() {
          if (f._allowZoom()) {
            if (clearTimeout(e), f.st.removalDelay = s, !t) {
              if (!(t = f._getItemToZoom())) return;
              i = n(t)
            }
            i.css(f._getOffset(!0)), f.wrap.append(i), f.content.css("visibility", "hidden"), setTimeout(function() {
              i.css(f._getOffset())
            }, 16)
          }
        }), d(l + r, function() {
          f._allowZoom() && (o(), i && i.remove(), t = null)
        }))
      },
      _allowZoom: function() {
        return "image" === f.currItem.type
      },
      _getItemToZoom: function() {
        return !!f.currItem.hasSize && f.currItem.img
      },
      _getOffset: function(t) {
        var e = t ? f.currItem.img : f.st.zoom.opener(f.currItem.el || f.currItem),
          i = e.offset(),
          s = parseInt(e.css("padding-top"), 10),
          t = parseInt(e.css("padding-bottom"), 10);
        i.top -= c(window).scrollTop() - s;
        s = {
          width: e.width(),
          height: (k ? e.innerHeight() : e[0].offsetHeight) - t - s
        };
        return (H = void 0 === H ? void 0 !== document.createElement("p").style.MozTransform : H) ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
      }
    }
  });

  function W(t) {
    var e;
    !f.currTemplate[O] || (e = f.currTemplate[O].find("iframe")).length && (t || (e[0].src = "//about:blank"), f.isIE8 && e.css("display", t ? "block" : "none"))
  }
  var O = "iframe";
  c.magnificPopup.registerModule(O, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function() {
        f.types.push(O), d("BeforeChange", function(t, e, i) {
          e !== i && (e === O ? W() : i === O && W(!0))
        }), d(l + "." + O, function() {
          W()
        })
      },
      getIframe: function(t, e) {
        var i = t.src,
          s = f.st.iframe;
        c.each(s.patterns, function() {
          return -1 < i.indexOf(this.index) ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
        });
        var n = {};
        return s.srcAction && (n[s.srcAction] = i), f._parseMarkup(e, n, t), f.updateStatus("ready"), e
      }
    }
  });

  function L(t) {
    var e = f.items.length;
    return e - 1 < t ? t - e : t < 0 ? e + t : t
  }

  function B(t, e, i) {
    return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
  }
  c.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function() {
        var o = f.st.gallery,
          t = ".mfp-gallery",
          s = Boolean(c.fn.mfpFastClick);
        return f.direction = !0, !(!o || !o.enabled) && (v += " mfp-gallery", d(_ + t, function() {
          o.navigateByImgClick && f.wrap.on("click" + t, ".mfp-img", function() {
            return 1 < f.items.length ? (f.next(), !1) : void 0
          }), m.on("keydown" + t, function(t) {
            37 === t.keyCode ? f.prev() : 39 === t.keyCode && f.next()
          })
        }), d("UpdateStatus" + t, function(t, e) {
          e.text && (e.text = B(e.text, f.currItem.index, f.items.length))
        }), d(w + t, function(t, e, i, s) {
          var n = f.items.length;
          i.counter = 1 < n ? B(o.tCounter, s.index, n) : ""
        }), d("BuildControls" + t, function() {
          var t, e, i;
          1 < f.items.length && o.arrows && !f.arrowLeft && (i = o.arrowMarkup, t = f.arrowLeft = c(i.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(x), e = f.arrowRight = c(i.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(x), t[i = s ? "mfpFastClick" : "click"](function() {
            f.prev()
          }), e[i](function() {
            f.next()
          }), f.isIE7 && (h("b", t[0], !1, !0), h("a", t[0], !1, !0), h("b", e[0], !1, !0), h("a", e[0], !1, !0)), f.container.append(t.add(e)))
        }), d(a + t, function() {
          f._preloadTimeout && clearTimeout(f._preloadTimeout), f._preloadTimeout = setTimeout(function() {
            f.preloadNearbyImages(), f._preloadTimeout = null
          }, 16)
        }), void d(l + t, function() {
          m.off(t), f.wrap.off("click" + t), f.arrowLeft && s && f.arrowLeft.add(f.arrowRight).destroyMfpFastClick(), f.arrowRight = f.arrowLeft = null
        }))
      },
      next: function() {
        f.direction = !0, f.index = L(f.index + 1), f.updateItemHTML()
      },
      prev: function() {
        f.direction = !1, f.index = L(f.index - 1), f.updateItemHTML()
      },
      goTo: function(t) {
        f.direction = t >= f.index, f.index = t, f.updateItemHTML()
      },
      preloadNearbyImages: function() {
        for (var t = f.st.gallery.preload, e = Math.min(t[0], f.items.length), i = Math.min(t[1], f.items.length), s = 1;
          (f.direction ? i : e) >= s; s++) f._preloadItem(f.index + s);
        for (s = 1;
          (f.direction ? e : i) >= s; s++) f._preloadItem(f.index - s)
      },
      _preloadItem: function(t) {
        var e;
        t = L(t), f.items[t].preloaded || ((e = f.items[t]).parsed || (e = f.parseEl(t)), u("LazyLoad", e), "image" === e.type && (e.img = c('<img class="mfp-img" />').on("load.mfploader", function() {
          e.hasSize = !0
        }).on("error.mfploader", function() {
          e.hasSize = !0, e.loadError = !0, u("LazyLoadError", e)
        }).attr("src", e.src)), e.preloaded = !0)
      }
    }
  });
  var F, R, N = "retina";

  function X() {
    T.off("touchmove" + R + " touchend" + R)
  }
  c.magnificPopup.registerModule(N, {
    options: {
      replaceSrc: function(t) {
        return t.src.replace(/\.\w+$/, function(t) {
          return "@2x" + t
        })
      },
      ratio: 1
    },
    proto: {
      initRetina: function() {
        var i, s;
        1 < window.devicePixelRatio && (i = f.st.retina, s = i.ratio, 1 < (s = isNaN(s) ? s() : s) && (d("ImageHasSize." + N, function(t, e) {
          e.img.css({
            "max-width": e.img[0].naturalWidth / s,
            width: "100%"
          })
        }), d("ElementParse." + N, function(t, e) {
          e.src = i.replaceSrc(e, s)
        })))
      }
    }
  }), F = "ontouchstart" in window, R = ".mfpFastClick", c.fn.mfpFastClick = function(l) {
    return c(this).each(function() {
      var e, i, s, n, o, a, r, t = c(this);
      F && t.on("touchstart" + R, function(t) {
        o = !1, r = 1, a = (t.originalEvent || t).touches[0], s = a.clientX, n = a.clientY, T.on("touchmove" + R, function(t) {
          a = (t.originalEvent || t).touches, r = a.length, a = a[0], (10 < Math.abs(a.clientX - s) || 10 < Math.abs(a.clientY - n)) && (o = !0, X())
        }).on("touchend" + R, function(t) {
          X(), o || 1 < r || (e = !0, t.preventDefault(), clearTimeout(i), i = setTimeout(function() {
            e = !1
          }, 1e3), l())
        })
      }), t.on("click" + R, function() {
        e || l()
      })
    })
  }, c.fn.destroyMfpFastClick = function() {
    c(this).off("touchstart" + R + " click" + R), F && T.off("touchmove" + R + " touchend" + R)
  }, o()
}(window.jQuery || window.Zepto),
function(o) {
  o.fn.matchHeight = function(t) {
    if ("remove" !== t) return this.length <= 1 || (t = void 0 === t || t, o.fn.matchHeight._groups.push({
      elements: this,
      byRow: t
    }), o.fn.matchHeight._apply(this, t)), this;
    var i = this;
    return this.css("height", ""), o.each(o.fn.matchHeight._groups, function(t, e) {
      e.elements = e.elements.not(i)
    }), this
  }, o.fn.matchHeight._apply = function(t, e) {
    var i = o(t),
      t = [i];
    return e && (i.css({
      display: "block",
      "padding-top": "0",
      "padding-bottom": "0",
      "border-top": "0",
      "border-bottom": "0",
      height: "100px"
    }), t = s(i), i.css({
      display: "",
      "padding-top": "",
      "padding-bottom": "",
      "border-top": "",
      "border-bottom": "",
      height: ""
    })), o.each(t, function(t, e) {
      var e = o(e),
        i = 0;
      e.each(function() {
        var t = o(this);
        t.css({
          display: "block",
          height: ""
        }), t.outerHeight(!1) > i && (i = t.outerHeight(!1)), t.css({
          display: ""
        })
      }), e.each(function() {
        var t = o(this),
          e = 0;
        "border-box" !== t.css("box-sizing") && (e += a(t.css("border-top-width")) + a(t.css("border-bottom-width")), e += a(t.css("padding-top")) + a(t.css("padding-bottom"))), t.css("height", i - e)
      })
    }), this
  }, o.fn.matchHeight._applyDataApi = function() {
    var i = {};
    o("[data-match-height], [data-mh]").each(function() {
      var t = o(this),
        e = t.attr("data-match-height");
      i[e] = e in i ? i[e].add(t) : t
    }), o.each(i, function() {
      this.matchHeight(!0)
    })
  }, o.fn.matchHeight._groups = [];
  var e = -1;
  o.fn.matchHeight._update = function(t) {
    if (t && "resize" === t.type) {
      if ((t = o(window).width()) === e) return;
      e = t
    }
    o.each(o.fn.matchHeight._groups, function() {
      o.fn.matchHeight._apply(this.elements, this.byRow)
    })
  }, o(o.fn.matchHeight._applyDataApi), o(window).bind("load resize orientationchange", o.fn.matchHeight._update);
  var s = function(t) {
      var s = null,
        n = [];
      return o(t).each(function() {
        var t = o(this),
          e = t.offset().top - a(t.css("margin-top")),
          i = 0 < n.length ? n[n.length - 1] : null;
        null !== i && Math.floor(Math.abs(s - e)) <= 1 ? n[n.length - 1] = i.add(t) : n.push(t), s = e
      }), n
    },
    a = function(t) {
      return parseFloat(t) || 0
    }
}(jQuery),
function(m) {
  var v = !1,
    y = !1,
    o = function(t) {
      return !!RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(t)
    },
    a = function(t, e) {
      t.html(e)
    },
    r = function(t) {
      var e = t.attr("id"),
        i = t.attr("class");
      "string" == typeof e && "" !== e && t.attr("id", e.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof i && "" !== i && "sidr-inner" !== i && t.attr("class", i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), t.removeAttr("style")
    },
    i = function(t, e, i) {
      e = "function" == typeof e ? (i = e, "sidr") : e || "sidr";
      var s, n, o, a = m("#" + e),
        r = m(a.data("body")),
        l = m("html"),
        c = a.outerWidth(!0),
        d = a.data("speed"),
        h = a.data("side"),
        u = a.data("displace"),
        p = a.data("onOpen"),
        f = a.data("onClose"),
        g = "sidr" === e ? "sidr-open" : "sidr-open " + e + "-open";
      "open" === t || "toggle" === t && !a.is(":visible") ? a.is(":visible") || v || (!1 === y ? (v = !0, n = "left" === h ? (s = {
        left: c + "px"
      }, {
        left: "0px"
      }) : (s = {
        right: c + "px"
      }, {
        right: "0px"
      }), r.is("body") && (o = l.scrollTop(), l.css("overflow-x", "hidden").scrollTop(o)), u ? r.addClass("sidr-animating").css({
        width: r.width(),
        position: "absolute"
      }).animate(s, d, function() {
        m(this).addClass(g)
      }) : setTimeout(function() {
        m(this).addClass(g)
      }, d), a.css("display", "block").animate(n, d, function() {
        v = !1, y = e, "function" == typeof i && i(e), r.removeClass("sidr-animating")
      }), p()) : w.close(y, function() {
        w.open(e)
      })) : a.is(":visible") && !v && (v = !0, n = "left" === h ? (s = {
        left: 0
      }, {
        left: "-" + c + "px"
      }) : (s = {
        right: 0
      }, {
        right: "-" + c + "px"
      }), r.is("body") && (o = l.scrollTop(), l.removeAttr("style").scrollTop(o)), r.addClass("sidr-animating").animate(s, d).removeClass(g), a.animate(n, d, function() {
        a.removeAttr("style").hide(), r.removeAttr("style"), m("html").removeAttr("style"), y = v = !1, "function" == typeof i && i(e), r.removeClass("sidr-animating")
      }), f())
    },
    w = {
      open: function(t, e) {
        i("open", t, e)
      },
      close: function(t, e) {
        i("close", t, e)
      },
      toggle: function(t, e) {
        i("toggle", t, e)
      },
      toogle: function(t, e) {
        i("toggle", t, e)
      }
    };
  m.sidr = function(t) {
    return w[t] ? w[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof t && "string" != typeof t && t ? void m.error("Method " + t + " does not exist on jQuery.sidr") : w.toggle.apply(this, arguments)
  }, m.fn.sidr = function(t) {
    var i, e, t = m.extend({
        name: "sidr",
        speed: 200,
        side: "left",
        source: null,
        renaming: !0,
        body: "body",
        displace: !0,
        onOpen: function() {},
        onClose: function() {}
      }, t),
      s = t.name,
      n = m("#" + s);
    return (n = 0 === n.length ? m("<div />").attr("id", s).appendTo(m("body")) : n).addClass("sidr").addClass(t.side).data({
      speed: t.speed,
      side: t.side,
      body: t.body,
      displace: t.displace,
      onOpen: t.onOpen,
      onClose: t.onClose
    }), "function" == typeof t.source ? (e = t.source(s), a(n, e)) : "string" == typeof t.source && o(t.source) ? m.get(t.source, function(t) {
      a(n, t)
    }) : "string" == typeof t.source ? (i = "", e = t.source.split(","), m.each(e, function(t, e) {
      i += '<div class="sidr-inner">' + m(e).html() + "</div>"
    }), t.renaming && ((e = m("<div />").html(i)).find("*").each(function(t, e) {
      e = m(e);
      r(e)
    }), i = e.html()), a(n, i)) : null !== t.source && m.error("Invalid Sidr Source"), this.each(function() {
      var t = m(this);
      t.data("sidr") || (t.data("sidr", s), "ontouchstart" in document.documentElement ? (t.bind("touchstart", function(t) {
        t.originalEvent.touches[0], this.touched = t.timeStamp
      }), t.bind("touchend", function(t) {
        Math.abs(t.timeStamp - this.touched) < 200 && (t.preventDefault(), w.toggle(s))
      })) : t.click(function(t) {
        t.preventDefault(), w.toggle(s)
      }))
    })
  }
}(jQuery),
function() {
  var P = this.jQuery || window.jQuery,
    $ = P(window);
  P.fn.stick_in_parent = function(t) {
    var C, e, i, s, n, x, k = (t = null == t ? {} : t).sticky_class,
      T = t.inner_scrolling,
      A = t.recalc_every,
      E = t.parent,
      S = t.offset_top,
      z = t.spacer,
      I = t.bottoming;
    for (null == S && (S = 0), null == E && (E = void 0), null == T && (T = !0), null == k && (k = "is_stuck"), C = P(document), null == I && (I = !0), x = function(t) {
        var e, i;
        return window.getComputedStyle ? (t[0], e = window.getComputedStyle(t[0]), i = parseFloat(e.getPropertyValue("width")) + parseFloat(e.getPropertyValue("margin-left")) + parseFloat(e.getPropertyValue("margin-right")), "border-box" !== e.getPropertyValue("box-sizing") && (i += parseFloat(e.getPropertyValue("border-left-width")) + parseFloat(e.getPropertyValue("border-right-width")) + parseFloat(e.getPropertyValue("padding-left")) + parseFloat(e.getPropertyValue("padding-right"))), i) : t.outerWidth(!0)
      }, i = function(o, a, r, l, c, d, h, u) {
        var p, t, f, g, m, v, y, w, e, _, b, s;
        if (!o.data("sticky_kit")) {
          if (o.data("sticky_kit", !0), m = C.height(), y = o.parent(), !(y = null != E ? y.closest(E) : y).length) throw "failed to find stick parent";
          if (p = f = !1, (b = null != z ? z && o.closest(z) : P("<div />")) && b.css("position", o.css("position")), (w = function() {
              var t, e, i;
              if (!u) return m = C.height(), t = parseInt(y.css("border-top-width"), 10), e = parseInt(y.css("padding-top"), 10), a = parseInt(y.css("padding-bottom"), 10), r = y.offset().top + t + e, l = y.height(), f && (p = f = !1, null == z && (o.insertAfter(b), b.detach()), o.css({
                position: "",
                width: "",
                bottom: ""
              }).removeClass(k), i = !0), c = o.offset().top - (parseInt(o.css("margin-top"), 10) || 0) - S, d = o.outerHeight(!0), h = o.css("float"), b && b.css({
                width: x(o),
                height: d,
                display: o.css("display"),
                "vertical-align": o.css("vertical-align"),
                float: h
              }), i ? s() : void 0
            })(), d !== l) return g = void 0, v = S, _ = A, s = function() {
            var t, e, i, s, n;
            if (!u) return i = !1, null != _ && --_ <= 0 && (_ = A, w(), i = !0), i || C.height() === m || (w(), i = !0), i = $.scrollTop(), null != g && (e = i - g), g = i, f ? (I && (s = l + r < i + d + v, p && !s && (p = !1, o.css({
              position: "fixed",
              bottom: "",
              top: ""
            }).trigger("sticky_kit:unbottom"))), i < c && (f = !1, v = S, null == z && ("left" !== h && "right" !== h || o.insertAfter(b), b.detach()), t = {
              position: "",
              width: ""
            }, o.css(t).removeClass(k).trigger("sticky_kit:unstick")), T && (n = $.height()) < d + S && (p || (v -= e, v = Math.max(n - d, v), v = Math.min(S, v)))) : c < i && (f = !0, (t = {
              position: "fixed"
            }).width = "border-box" === o.css("box-sizing") ? o.outerWidth() + "px" : o.width() + "px", o.css(t).addClass(k), null == z && (o.after(b), "left" !== h && "right" !== h || b.append(o)), o.trigger("sticky_kit:stick")), f && I && (null == s && (s = l + r < i + d + v), !p && s) ? (p = !0, "static" === y.css("position") && y.css({
              position: "relative"
            }), o.css({
              position: "absolute",
              bottom: a,
              top: "auto"
            }).trigger("sticky_kit:bottom")) : void 0
          }, e = function() {
            if (!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)) return w(), s()
          }, t = function() {
            if (u = !0, $.off("touchmove", s), $.off("scroll", s), $.off("resize", e), P(document.body).off("sticky_kit:recalc", e), o.off("sticky_kit:detach", t), o.removeData("sticky_kit"), o.css({
                position: "",
                bottom: "",
                width: ""
              }), y.position("position", ""), f) return null == z && ("left" !== h && "right" !== h || o.insertAfter(b), b.remove()), o.removeClass(k)
          }, $.on("touchmove", s), $.on("scroll", s), $.on("resize", e), P(document.body).on("sticky_kit:recalc", e), o.on("sticky_kit:detach", t), setTimeout(s, 0)
        }
      }, s = 0, n = this.length; s < n; s++) e = this[s], i(P(e));
    return this
  }
}.call(this),
  function(l, c, o, a) {
    function i(t, e) {
      this.settings = null, this.options = l.extend({}, i.Defaults, e), this.$element = l(t), this.drag = l.extend({}, s), this.state = l.extend({}, r), this.e = l.extend({}, d), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], l.each(i.Plugins, l.proxy(function(t, e) {
        this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
      }, this)), l.each(i.Pipe, l.proxy(function(t, e) {
        this._pipe.push({
          filter: e.filter,
          run: l.proxy(e.run, this)
        })
      }, this)), this.setup(), this.initialize()
    }

    function n(t) {
      return t.touches !== a ? {
        x: t.touches[0].pageX,
        y: t.touches[0].pageY
      } : t.touches === a ? t.pageX !== a ? {
        x: t.pageX,
        y: t.pageY
      } : t.pageX === a ? {
        x: t.clientX,
        y: t.clientY
      } : void 0 : void 0
    }

    function t(t) {
      var e, i, s = o.createElement("div"),
        n = t;
      for (e in n)
        if (i = n[e], void 0 !== s.style[i]) return s = null, [i, e];
      return [!1]
    }
    var s = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
      },
      r = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
      },
      d = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
      };
    i.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: c,
      responsiveClass: !1,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      themeClass: "owl-theme",
      baseClass: "owl-carousel",
      itemClass: "owl-item",
      centerClass: "center",
      activeClass: "active"
    }, i.Width = {
      Default: "default",
      Inner: "inner",
      Outer: "outer"
    }, i.Plugins = {}, i.Pipe = [{
      filter: ["width", "items", "settings"],
      run: function(t) {
        t.current = this._items && this._items[this.relative(this._current)]
      }
    }, {
      filter: ["items", "settings"],
      run: function() {
        var t = this._clones;
        (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && 0 < t.length) && (this.$stage.children(".cloned").remove(), this._clones = [])
      }
    }, {
      filter: ["items", "settings"],
      run: function() {
        for (var t = this._clones, e = this._items, i = this.settings.loop ? t.length - Math.max(2 * this.settings.items, 4) : 0, s = 0, n = Math.abs(i / 2); s < n; s++) 0 < i ? (this.$stage.children().eq(e.length + t.length - 1).remove(), t.pop(), this.$stage.children().eq(0).remove(), t.pop()) : (t.push(t.length / 2), this.$stage.append(e[t[t.length - 1]].clone().addClass("cloned")), t.push(e.length - 1 - (t.length - 1) / 2), this.$stage.prepend(e[t[t.length - 1]].clone().addClass("cloned")))
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function() {
        var t, e, i, s = this.settings.rtl ? 1 : -1,
          n = (this.width() / this.settings.items).toFixed(3),
          o = 0;
        for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; e < i; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function() {
        var t, e, i = (this.width() / this.settings.items).toFixed(3),
          s = {
            width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
            "padding-left": this.settings.stagePadding || "",
            "padding-right": this.settings.stagePadding || ""
          };
        if (this.$stage.css(s), (s = {
            width: this.settings.autoWidth ? "auto" : i - this.settings.margin
          })[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && 0 < l.grep(this._mergers, function(t) {
            return 1 < t
          }).length)
          for (t = 0, e = this._coordinates.length; t < e; t++) s.width = Math.abs(this._coordinates[t]) - Math.abs(this._coordinates[t - 1] || 0) - this.settings.margin, this.$stage.children().eq(t).css(s);
        else this.$stage.children().css(s)
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function(t) {
        t.current && this.reset(this.$stage.children().index(t.current))
      }
    }, {
      filter: ["position"],
      run: function() {
        this.animate(this.coordinates(this._current))
      }
    }, {
      filter: ["width", "position", "items", "settings"],
      run: function() {
        for (var t, e, i = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding, n = this.coordinates(this.current()) + s, o = n + this.width() * i, a = [], r = 0, l = this._coordinates.length; r < l; r++) t = this._coordinates[r - 1] || 0, e = Math.abs(this._coordinates[r]) + s * i, (this.op(t, "<=", n) && this.op(t, ">", o) || this.op(e, "<", n) && this.op(e, ">", o)) && a.push(r);
        this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + a.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
      }
    }], i.prototype.initialize = function() {
      if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) {
        var t = this.$element.find("img"),
          e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a,
          e = this.$element.children(e).width();
        if (t.length && e <= 0) return this.preloadAutoWidthImages(t), !1
      }
      this.$element.addClass("owl-loading"), this.$stage = l("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, i.prototype.setup = function() {
      var e = this.viewport(),
        t = this.options.responsive,
        i = -1,
        s = null;
      t ? (l.each(t, function(t) {
        t <= e && i < t && (i = Number(t))
      }), delete(s = l.extend({}, this.options, t[i])).responsive, s.responsiveClass && this.$element.attr("class", function(t, e) {
        return e.replace(/\b owl-responsive-\S+/g, "")
      }).addClass("owl-responsive-" + i)) : s = l.extend({}, this.options), null !== this.settings && this._breakpoint === i || (this.trigger("change", {
        property: {
          name: "settings",
          value: s
        }
      }), this._breakpoint = i, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
        property: {
          name: "settings",
          value: this.settings
        }
      }))
    }, i.prototype.optionsLogic = function() {
      this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, i.prototype.prepare = function(t) {
      var e = this.trigger("prepare", {
        content: t
      });
      return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(t)), this.trigger("prepared", {
        content: e.data
      }), e.data
    }, i.prototype.update = function() {
      for (var t = 0, e = this._pipe.length, i = l.proxy(function(t) {
          return this[t]
        }, this._invalidated), s = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s), t++;
      this._invalidated = {}
    }, i.prototype.width = function(t) {
      switch (t = t || i.Width.Default) {
        case i.Width.Inner:
        case i.Width.Outer:
          return this._width;
        default:
          return this._width - 2 * this.settings.stagePadding + this.settings.margin
      }
    }, i.prototype.refresh = function() {
      if (0 === this._items.length) return !1;
      (new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = c.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, i.prototype.eventsCall = function() {
      this.e._onDragStart = l.proxy(function(t) {
        this.onDragStart(t)
      }, this), this.e._onDragMove = l.proxy(function(t) {
        this.onDragMove(t)
      }, this), this.e._onDragEnd = l.proxy(function(t) {
        this.onDragEnd(t)
      }, this), this.e._onResize = l.proxy(function(t) {
        this.onResize(t)
      }, this), this.e._transitionEnd = l.proxy(function(t) {
        this.transitionEnd(t)
      }, this), this.e._preventClick = l.proxy(function(t) {
        this.preventClick(t)
      }, this)
    }, i.prototype.onThrottledResize = function() {
      c.clearTimeout(this.resizeTimer), this.resizeTimer = c.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, i.prototype.onResize = function() {
      return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
    }, i.prototype.eventsRouter = function(t) {
      var e = t.type;
      "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" !== e && "touchend" !== e && "touchcancel" !== e || this.onDragEnd(t)
    }, i.prototype.internalEvents = function() {
      var t = ("ontouchstart" in c || navigator.msMaxTouchPoints, c.navigator.msPointerEnabled);
      this.settings.mouseDrag ? (this.$stage.on("mousedown", l.proxy(function(t) {
        this.eventsRouter(t)
      }, this)), this.$stage.on("dragstart", function() {
        return !1
      }), this.$stage.get(0).onselectstart = function() {
        return !1
      }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !t && this.$stage.on("touchstart touchcancel", l.proxy(function(t) {
        this.eventsRouter(t)
      }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(c, "resize", l.proxy(this.onThrottledResize, this))
    }, i.prototype.onDragStart = function(t) {
      var e, i, s = t.originalEvent || t || c.event;
      if (3 === s.which || this.state.isTouch) return !1;
      if ("mousedown" === s.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, e = n(s).x, i = n(s).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) t = this.getTransformProperty(), this.drag.offsetX = t, this.animate(t), this.state.inMotion = !0;
      else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1;
      this.drag.startX = e - this.drag.offsetX, this.drag.startY = i - this.drag.offsetY, this.drag.start = e - this.drag.startX, this.drag.targetEl = s.target || s.srcElement, this.drag.updatedX = this.drag.start, "IMG" !== this.drag.targetEl.tagName && "A" !== this.drag.targetEl.tagName || (this.drag.targetEl.draggable = !1), l(o).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", l.proxy(function(t) {
        this.eventsRouter(t)
      }, this))
    }, i.prototype.onDragMove = function(t) {
      var e, i, s;
      this.state.isTouch && (this.state.isScrolling || (i = n(e = t.originalEvent || t || c.event).x, s = n(e).y, this.drag.currentX = i - this.drag.startX, this.drag.currentY = s - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : 0 < this.drag.distance && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (t = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), s = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, t + s), i + s)), (8 < this.drag.distance || this.drag.distance < -8) && (e.preventDefault !== a ? e.preventDefault() : e.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (16 < this.drag.currentY || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, i.prototype.onDragEnd = function(t) {
      if (this.state.isTouch) {
        if ("mouseup" === t.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1;
        this.drag.endTime = (new Date).getTime(), t = this.drag.endTime - this.drag.startTime, (3 < Math.abs(this.drag.distance) || 300 < t) && this.removeClick(this.drag.targetEl), t = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(t), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(t) || this.transitionEnd(), this.drag.distance = 0, l(o).off(".owl.dragEvents")
      }
    }, i.prototype.removeClick = function(t) {
      this.drag.targetEl = t, l(t).on("click.preventClick", this.e._preventClick), c.setTimeout(function() {
        l(t).off("click.preventClick")
      }, 300)
    }, i.prototype.preventClick = function(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), l(t.target).off("click.preventClick")
    }, i.prototype.getTransformProperty = function() {
      var t = c.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform");
      return !0 != (16 === (t = t.replace(/matrix(3d)?\(|\)/g, "").split(",")).length) ? t[4] : t[12]
    }, i.prototype.closest = function(i) {
      var s = -1,
        n = this.width(),
        o = this.coordinates();
      return this.settings.freeDrag || l.each(o, l.proxy(function(t, e) {
        return e - 30 < i && i < e + 30 ? s = t : this.op(i, "<", e) && this.op(i, ">", o[t + 1] || e - n) && (s = "left" === this.state.direction ? t + 1 : t), -1 === s
      }, this)), this.settings.loop || (this.op(i, ">", o[this.minimum()]) ? s = i = this.minimum() : this.op(i, "<", o[this.maximum()]) && (s = i = this.maximum())), s
    }, i.prototype.animate = function(t) {
      this.trigger("translate"), this.state.inMotion = 0 < this.speed(), this.support3d ? this.$stage.css({
        transform: "translate3d(" + Math.round(t) + "px,0px, 0px)",
        transition: this.speed() / 1e3 + "s"
      }) : this.state.isTouch ? this.$stage.css({
        left: t + "px"
      }) : this.$stage.animate({
        left: t
      }, this.speed() / 1e3, this.settings.fallbackEasing, l.proxy(function() {
        this.state.inMotion && this.transitionEnd()
      }, this))
    }, i.prototype.current = function(t) {
      return t === a ? this._current : 0 === this._items.length ? a : (t = this.normalize(t), this._current !== t && ((e = this.trigger("change", {
        property: {
          name: "position",
          value: t
        }
      })).data !== a && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })), this._current);
      var e
    }, i.prototype.invalidate = function(t) {
      this._invalidated[t] = !0
    }, i.prototype.reset = function(t) {
      (t = this.normalize(t)) !== a && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, i.prototype.normalize = function(t, e) {
      var i = e ? this._items.length : this._items.length + this._clones.length;
      return !l.isNumeric(t) || i < 1 ? a : this._clones.length ? (t % i + i) % i : Math.max(this.minimum(e), Math.min(this.maximum(e), t))
    }, i.prototype.relative = function(t) {
      return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, i.prototype.maximum = function(t) {
      var e, i, s, n = 0,
        o = this.settings;
      if (t) return this._items.length - 1;
      if (!o.loop && o.center) e = this._items.length - 1;
      else if (o.loop || o.center)
        if (o.loop || o.center) e = this._items.length + o.items;
        else {
          if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
          for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
            (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
        }
      else e = this._items.length - o.items;
      return e
    }, i.prototype.minimum = function(t) {
      return t ? 0 : this._clones.length / 2
    }, i.prototype.items = function(t) {
      return t === a ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, i.prototype.mergers = function(t) {
      return t === a ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, i.prototype.clones = function(i) {
      function s(t) {
        return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
      }
      var e = this._clones.length / 2,
        n = e + this._items.length;
      return i === a ? l.map(this._clones, function(t, e) {
        return s(e)
      }) : l.map(this._clones, function(t, e) {
        return t === i ? s(e) : null
      })
    }, i.prototype.speed = function(t) {
      return t !== a && (this._speed = t), this._speed
    }, i.prototype.coordinates = function(t) {
      var e = null;
      return t === a ? l.map(this._coordinates, l.proxy(function(t, e) {
        return this.coordinates(e)
      }, this)) : (this.settings.center ? (e = this._coordinates[t], e += (this.width() - e + (this._coordinates[t - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : e = this._coordinates[t - 1] || 0, e)
    }, i.prototype.duration = function(t, e, i) {
      return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, i.prototype.to = function(t, e) {
      var i, s, n, o, a, r;
      this.settings.loop ? (i = t - this.relative(this.current()), s = this.current(), a = (n = this.current()) - (o = this.current() + i) < 0, r = this._clones.length + this._items.length, o < this.settings.items && !1 == a ? (s = n + this._items.length, this.reset(s)) : o >= r - this.settings.items && !0 == a && (s = n - this._items.length, this.reset(s)), c.clearTimeout(this.e._goToLoop), this.e._goToLoop = c.setTimeout(l.proxy(function() {
        this.speed(this.duration(this.current(), s + i, e)), this.current(s + i), this.update()
      }, this), 30)) : (this.speed(this.duration(this.current(), t, e)), this.current(t), this.update())
    }, i.prototype.next = function(t) {
      t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, i.prototype.prev = function(t) {
      t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, i.prototype.transitionEnd = function(t) {
      return (t === a || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
    }, i.prototype.viewport = function() {
      var t;
      if (this.options.responsiveBaseElement !== c) t = l(this.options.responsiveBaseElement).width();
      else if (c.innerWidth) t = c.innerWidth;
      else {
        if (!o.documentElement || !o.documentElement.clientWidth) throw "Can not detect viewport width.";
        t = o.documentElement.clientWidth
      }
      return t
    }, i.prototype.replace = function(t) {
      this.$stage.empty(), this._items = [], t = t && (t instanceof jQuery ? t : l(t)), (t = this.settings.nestedItemSelector ? t.find("." + this.settings.nestedItemSelector) : t).filter(function() {
        return 1 === this.nodeType
      }).each(l.proxy(function(t, e) {
        e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
      }, this)), this.reset(l.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, i.prototype.add = function(t, e) {
      e = e === a ? this._items.length : this.normalize(e, !0), this.trigger("add", {
        content: t,
        position: e
      }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
        content: t,
        position: e
      })
    }, i.prototype.remove = function(t) {
      (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
        content: this._items[t],
        position: t
      }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
        content: null,
        position: t
      }))
    }, i.prototype.addTriggerableEvents = function() {
      var i = l.proxy(function(e, i) {
        return l.proxy(function(t) {
          t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
        }, this)
      }, this);
      l.each({
        next: this.next,
        prev: this.prev,
        to: this.to,
        destroy: this.destroy,
        refresh: this.refresh,
        replace: this.replace,
        add: this.add,
        remove: this.remove
      }, l.proxy(function(t, e) {
        this.$element.on(t + ".owl.carousel", i(e, t + ".owl.carousel"))
      }, this))
    }, i.prototype.watchVisibility = function() {
      function t(t) {
        return 0 < t.offsetWidth && 0 < t.offsetHeight
      }
      t(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), c.clearInterval(this.e._checkVisibile), this.e._checkVisibile = c.setInterval(l.proxy(function() {
        t(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), c.clearInterval(this.e._checkVisibile))
      }, this), 500))
    }, i.prototype.preloadAutoWidthImages = function(i) {
      var s, n, o = 0,
        a = this;
      i.each(function(t, e) {
        s = l(e), (n = new Image).onload = function() {
          o++, s.attr("src", n.src), s.css("opacity", 1), o >= i.length && (a.state.imagesLoaded = !0, a.initialize())
        }, n.src = s.attr("src") || s.attr("data-src") || s.attr("data-src-retina")
      })
    }, i.prototype.destroy = function() {
      for (var t in this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && l(c).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd), this._plugins) this._plugins[t].destroy();
      (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), l(o).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
        return !1
      })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, i.prototype.op = function(t, e, i) {
      var s = this.settings.rtl;
      switch (e) {
        case "<":
          return s ? i < t : t < i;
        case ">":
          return s ? t < i : i < t;
        case ">=":
          return s ? t <= i : i <= t;
        case "<=":
          return s ? i <= t : t <= i
      }
    }, i.prototype.on = function(t, e, i, s) {
      t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, i.prototype.off = function(t, e, i, s) {
      t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, i.prototype.trigger = function(t, e, i) {
      var s = {
          item: {
            count: this._items.length,
            index: this.current()
          }
        },
        n = l.camelCase(l.grep(["on", t, i], function(t) {
          return t
        }).join("-").toLowerCase()),
        o = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
          relatedTarget: this
        }, s, e));
      return this._supress[t] || (l.each(this._plugins, function(t, e) {
        e.onTrigger && e.onTrigger(o)
      }), this.$element.trigger(o), this.settings && "function" == typeof this.settings[n] && this.settings[n].apply(this, o)), o
    }, i.prototype.suppress = function(t) {
      l.each(t, l.proxy(function(t, e) {
        this._supress[e] = !0
      }, this))
    }, i.prototype.release = function(t) {
      l.each(t, l.proxy(function(t, e) {
        delete this._supress[e]
      }, this))
    }, i.prototype.browserSupport = function() {
      this.support3d = t(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0], this.support3d && (this.transformVendor = t(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0], this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][t(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""), this.state.orientation = c.orientation
    }, l.fn.owlCarousel = function(t) {
      return this.each(function() {
        l(this).data("owlCarousel") || l(this).data("owlCarousel", new i(this, t))
      })
    }, l.fn.owlCarousel.Constructor = i
  }(window.Zepto || window.jQuery, window, document),
  function(r, n) {
    var e = function(t) {
      this._core = t, this._loaded = [], this._handlers = {
        "initialized.owl.carousel change.owl.carousel": r.proxy(function(t) {
          if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
            for (var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items, s = e.center && -1 * i || 0, n = (t.property && t.property.value || this._core.current()) + s, o = this._core.clones().length, a = r.proxy(function(t, e) {
                this.load(e)
              }, this); s++ < i;) this.load(o / 2 + this._core.relative(n)), o && r.each(this._core.clones(this._core.relative(n++)), a)
        }, this)
      }, this._core.options = r.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
      lazyLoad: !1
    }, e.prototype.load = function(t) {
      var e = this._core.$stage.children().eq(t),
        t = e && e.find(".owl-lazy");
      !t || -1 < r.inArray(e.get(0), this._loaded) || (t.each(r.proxy(function(t, e) {
        var i = r(e),
          s = 1 < n.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src");
        this._core.trigger("load", {
          element: i,
          url: s
        }, "lazy"), i.is("img") ? i.one("load.owl.lazy", r.proxy(function() {
          i.css("opacity", 1), this._core.trigger("loaded", {
            element: i,
            url: s
          }, "lazy")
        }, this)).attr("src", s) : ((e = new Image).onload = r.proxy(function() {
          i.css({
            "background-image": "url(" + s + ")",
            opacity: "1"
          }), this._core.trigger("loaded", {
            element: i,
            url: s
          }, "lazy")
        }, this), e.src = s)
      }, this)), this._loaded.push(e.get(0)))
    }, e.prototype.destroy = function() {
      var t, e;
      for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, r.fn.owlCarousel.Constructor.Plugins.Lazy = e
  }(window.Zepto || window.jQuery, window, document),
  function(e) {
    var i = function(t) {
      this._core = t, this._handlers = {
        "initialized.owl.carousel": e.proxy(function() {
          this._core.settings.autoHeight && this.update()
        }, this),
        "changed.owl.carousel": e.proxy(function(t) {
          this._core.settings.autoHeight && "position" == t.property.name && this.update()
        }, this),
        "loaded.owl.lazy": e.proxy(function(t) {
          this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
        }, this)
      }, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height"
    }, i.prototype.update = function() {
      this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, i.prototype.destroy = function() {
      var t, e;
      for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
  }(window.Zepto || window.jQuery, (window, document)),
  function(d, e, i) {
    var s = function(t) {
      this._core = t, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
        "resize.owl.carousel": d.proxy(function(t) {
          this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
        }, this),
        "refresh.owl.carousel changed.owl.carousel": d.proxy(function() {
          this._playing && this.stop()
        }, this),
        "prepared.owl.carousel": d.proxy(function(t) {
          var e = d(t.content).find(".owl-video");
          e.length && (e.css("display", "none"), this.fetch(e, d(t.content)))
        }, this)
      }, this._core.options = d.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", d.proxy(function(t) {
        this.play(t)
      }, this))
    };
    s.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1
    }, s.prototype.fetch = function(t, e) {
      var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
        s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
        n = t.attr("data-width") || this._core.settings.videoWidth,
        o = t.attr("data-height") || this._core.settings.videoHeight,
        a = t.attr("href");
      if (!a) throw new Error("Missing video URL.");
      if (-1 < (s = a.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
      else {
        if (!(-1 < s[3].indexOf("vimeo"))) throw new Error("Video URL not supported.");
        i = "vimeo"
      }
      s = s[6], this._videos[a] = {
        type: i,
        id: s,
        width: n,
        height: o
      }, e.attr("data-video", a), this.thumbnail(t, this._videos[a])
    }, s.prototype.thumbnail = function(e, t) {
      function i(t) {
        s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + r + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after('<div class="owl-video-play-icon"></div>')
      }
      var s, n, o = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
        a = e.find("img"),
        r = "src",
        l = "",
        c = this._core.settings;
      return e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (r = "data-src", l = "owl-lazy"), a.length ? (i(a.attr(r)), a.remove(), !1) : void("youtube" === t.type ? (n = "http://img.youtube.com/vi/" + t.id + "/hqdefault.jpg", i(n)) : "vimeo" === t.type && d.ajax({
        type: "GET",
        url: "http://vimeo.com/api/v2/video/" + t.id + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function(t) {
          n = t[0].thumbnail_large, i(n)
        }
      }))
    }, s.prototype.stop = function() {
      this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, s.prototype.play = function(t) {
      this._core.trigger("play", null, "video"), this._playing && this.stop();
      var e, i = d(t.target || t.srcElement),
        s = i.closest("." + this._core.settings.itemClass),
        n = this._videos[s.attr("data-video")],
        o = n.width || "100%",
        t = n.height || this._core.$stage.height();
      "youtube" === n.type ? e = '<iframe width="' + o + '" height="' + t + '" src="http://www.youtube.com/embed/' + n.id + "?autoplay=1&v=" + n.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === n.type && (e = '<iframe src="http://player.vimeo.com/video/' + n.id + '?autoplay=1" width="' + o + '" height="' + t + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, e = d('<div style="height:' + t + "px; width:" + o + 'px" class="owl-video-frame">' + e + "</div>"), i.after(e)
    }, s.prototype.isInFullScreen = function() {
      var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
      return t && d(t).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(t && this._fullscreen && this._playing) && (this._fullscreen ? this._fullscreen = !1 : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
    }, s.prototype.destroy = function() {
      var t, e;
      for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, d.fn.owlCarousel.Constructor.Plugins.Video = s
  }(window.Zepto || window.jQuery, window, document),
  function(a) {
    var e = function(t) {
      this.core = t, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
        "change.owl.carousel": a.proxy(function(t) {
          "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
        }, this),
        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(t) {
          this.swapping = "translated" == t.type
        }, this),
        "translate.owl.carousel": a.proxy(function() {
          this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
        }, this)
      }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
      animateOut: !1,
      animateIn: !1
    }, e.prototype.swap = function() {
      var t, e, i, s, n, o;
      1 === this.core.settings.items && this.core.support3d && (this.core.speed(0), e = a.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), s = this.core.$stage.children().eq(this.next), n = this.core.settings.animateIn, o = this.core.settings.animateOut, this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.css({
        left: t + "px"
      }).addClass("animated owl-animated-out").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", e)), n && s.addClass("animated owl-animated-in").addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", e)))
    }, e.prototype.clear = function(t) {
      a(t.target).css({
        left: ""
      }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
      var t, e;
      for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
  }(window.Zepto || window.jQuery, (window, document)),
  function(e, i, t) {
    var s = function(t) {
      this.core = t, this.core.options = e.extend({}, s.Defaults, this.core.options), this.handlers = {
        "translated.owl.carousel refreshed.owl.carousel": e.proxy(function() {
          this.autoplay()
        }, this),
        "play.owl.autoplay": e.proxy(function(t, e, i) {
          this.play(e, i)
        }, this),
        "stop.owl.autoplay": e.proxy(function() {
          this.stop()
        }, this),
        "mouseover.owl.autoplay": e.proxy(function() {
          this.core.settings.autoplayHoverPause && this.pause()
        }, this),
        "mouseleave.owl.autoplay": e.proxy(function() {
          this.core.settings.autoplayHoverPause && this.autoplay()
        }, this)
      }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }, s.prototype.autoplay = function() {
      this.core.settings.autoplay && !this.core.state.videoPlay ? (i.clearInterval(this.interval), this.interval = i.setInterval(e.proxy(function() {
        this.play()
      }, this), this.core.settings.autoplayTimeout)) : i.clearInterval(this.interval)
    }, s.prototype.play = function() {
      return !0 === t.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void i.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, s.prototype.stop = function() {
      i.clearInterval(this.interval)
    }, s.prototype.pause = function() {
      i.clearInterval(this.interval)
    }, s.prototype.destroy = function() {
      var t, e;
      for (t in i.clearInterval(this.interval), this.handlers) this.core.$element.off(t, this.handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = s
  }(window.Zepto || window.jQuery, window, document),
  function(n) {
    "use strict";
    var e = function(t) {
      this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
        next: this._core.next,
        prev: this._core.prev,
        to: this._core.to
      }, this._handlers = {
        "prepared.owl.carousel": n.proxy(function(t) {
          this._core.settings.dotsData && this._templates.push(n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
        }, this),
        "add.owl.carousel": n.proxy(function(t) {
          this._core.settings.dotsData && this._templates.splice(t.position, 0, n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
        }, this),
        "remove.owl.carousel prepared.owl.carousel": n.proxy(function(t) {
          this._core.settings.dotsData && this._templates.splice(t.position, 1)
        }, this),
        "change.owl.carousel": n.proxy(function(t) {
          var e, i, s;
          "position" != t.property.name || this._core.state.revert || this._core.settings.loop || !this._core.settings.navRewind || (e = this._core.current(), i = this._core.maximum(), s = this._core.minimum(), t.data = t.property.value > i ? i <= e ? s : i : t.property.value < s ? i : t.property.value)
        }, this),
        "changed.owl.carousel": n.proxy(function(t) {
          "position" == t.property.name && this.draw()
        }, this),
        "refreshed.owl.carousel": n.proxy(function() {
          this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
        }, this)
      }, this._core.options = n.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
      nav: !1,
      navRewind: !0,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
      controlsClass: "owl-controls"
    }, e.prototype.initialize = function() {
      var t, e, i = this._core.settings;
      for (e in i.dotsData || (this._templates = [n("<div>").addClass(i.dotClass).append(n("<span>")).prop("outerHTML")]), i.navContainer && i.dotsContainer || (this._controls.$container = n("<div>").addClass(i.controlsClass).appendTo(this.$element)), this._controls.$indicators = i.dotsContainer ? n(i.dotsContainer) : n("<div>").hide().addClass(i.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", n.proxy(function(t) {
          var e = (n(t.target).parent().is(this._controls.$indicators) ? n(t.target) : n(t.target).parent()).index();
          t.preventDefault(), this.to(e, i.dotsSpeed)
        }, this)), t = i.navContainer ? n(i.navContainer) : n("<div>").addClass(i.navContainerClass).prependTo(this._controls.$container), this._controls.$next = n("<" + i.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(i.navClass[0]).html(i.navText[0]).hide().prependTo(t).on("click", n.proxy(function() {
          this.prev(i.navSpeed)
        }, this)), this._controls.$next.addClass(i.navClass[1]).html(i.navText[1]).hide().appendTo(t).on("click", n.proxy(function() {
          this.next(i.navSpeed)
        }, this)), this._overrides) this._core[e] = n.proxy(this[e], this)
    }, e.prototype.destroy = function() {
      var t, e, i, s;
      for (t in this._handlers) this.$element.off(t, this._handlers[t]);
      for (e in this._controls) this._controls[e].remove();
      for (s in this.overides) this._core[s] = this._overrides[s];
      for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function() {
      var t, e, i = this._core.settings,
        s = this._core.clones().length / 2,
        n = s + this._core.items().length,
        o = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
      if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy)
        for (this._pages = [], t = s, e = 0; t < n; t++)(o <= e || 0 === e) && (this._pages.push({
          start: t - s,
          end: t - s + o - 1
        }), e = 0, 0), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function() {
      var t, e = "",
        i = this._core.settings,
        s = (this._core.$stage.children(), this._core.relative(this._core.current()));
      if (!i.nav || i.loop || i.navRewind || (this._controls.$previous.toggleClass("disabled", s <= 0), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(i.nav), this._controls.$next.toggle(i.nav), i.dots) {
        if (s = this._pages.length - this._controls.$indicators.children().length, i.dotData && 0 != s) {
          for (t = 0; t < this._controls.$indicators.children().length; t++) e += this._templates[this._core.relative(t)];
          this._controls.$indicators.html(e)
        } else 0 < s ? (e = new Array(1 + s).join(this._templates[0]), this._controls.$indicators.append(e)) : s < 0 && this._controls.$indicators.children().slice(s).remove();
        this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(n.inArray(this.current(), this._pages)).addClass("active")
      }
      this._controls.$indicators.toggle(i.dots)
    }, e.prototype.onTrigger = function(t) {
      var e = this._core.settings;
      t.page = {
        index: n.inArray(this.current(), this._pages),
        count: this._pages.length,
        size: e && (e.center || e.autoWidth || e.dotData ? 1 : e.dotsEach || e.items)
      }
    }, e.prototype.current = function() {
      var e = this._core.relative(this._core.current());
      return n.grep(this._pages, function(t) {
        return t.start <= e && t.end >= e
      }).pop()
    }, e.prototype.getPosition = function(t) {
      var e, i, s = this._core.settings;
      return "page" == s.slideBy ? (e = n.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += s.slideBy : e -= s.slideBy), e
    }, e.prototype.next = function(t) {
      n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, e.prototype.prev = function(t) {
      n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, e.prototype.to = function(t, e, i) {
      i ? n.proxy(this._overrides.to, this._core)(t, e) : (i = this._pages.length, n.proxy(this._overrides.to, this._core)(this._pages[(t % i + i) % i].start, e))
    }, n.fn.owlCarousel.Constructor.Plugins.Navigation = e
  }(window.Zepto || window.jQuery, (window, document)),
  function(i, s) {
    "use strict";
    var e = function(t) {
      this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
        "initialized.owl.carousel": i.proxy(function() {
          "URLHash" == this._core.settings.startPosition && i(s).trigger("hashchange.owl.navigation")
        }, this),
        "prepared.owl.carousel": i.proxy(function(t) {
          var e = i(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          this._hashes[e] = t.content
        }, this)
      }, this._core.options = i.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), i(s).on("hashchange.owl.navigation", i.proxy(function() {
        var t = s.location.hash.substring(1),
          e = this._core.$stage.children(),
          e = this._hashes[t] && e.index(this._hashes[t]) || 0;
        return !!t && void this._core.to(e, !1, !0)
      }, this))
    };
    e.Defaults = {
      URLhashListener: !1
    }, e.prototype.destroy = function() {
      var t, e;
      for (t in i(s).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, i.fn.owlCarousel.Constructor.Plugins.Hash = e
  }(window.Zepto || window.jQuery, window, document),
  function(t) {
    var e, n, i, s = navigator.userAgent;

    function o() {
      for (var t = document.querySelectorAll("picture > img, img[srcset][sizes]"), e = 0; e < t.length; e++) ! function(t) {
        var e, i, s = t.parentNode;
        "PICTURE" === s.nodeName.toUpperCase() ? (e = n.cloneNode(), s.insertBefore(e, s.firstElementChild), setTimeout(function() {
          s.removeChild(e)
        })) : (!t._pfLastSize || t.offsetWidth > t._pfLastSize) && (t._pfLastSize = t.offsetWidth, i = t.sizes, t.sizes += ",100vw", setTimeout(function() {
          t.sizes = i
        }))
      }(t[e])
    }

    function a() {
      clearTimeout(e), e = setTimeout(o, 99)
    }

    function r() {
      a(), i && i.addListener && i.addListener(a)
    }
    t.HTMLPictureElement && /ecko/.test(s) && s.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (n = document.createElement("source"), i = t.matchMedia && matchMedia("(orientation: landscape)"), n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? r() : document.addEventListener("DOMContentLoaded", r), a))
  }(window),
  function(t, o, c) {
    "use strict";
    var n, d, a;
    o.createElement("picture");

    function e() {}

    function i(t, e, i, s) {
      t.addEventListener ? t.addEventListener(e, i, s || !1) : t.attachEvent && t.attachEvent("on" + e, i)
    }
    var _ = {},
      r = !1,
      s = o.createElement("img"),
      h = s.getAttribute,
      u = s.setAttribute,
      p = s.removeAttribute,
      l = o.documentElement,
      f = {},
      b = {
        algorithm: ""
      },
      g = "data-pfsrc",
      m = g + "set",
      v = navigator.userAgent,
      C = /rident/.test(v) || /ecko/.test(v) && v.match(/rv\:(\d+)/) && 35 < RegExp.$1,
      x = "currentSrc",
      y = /\s+\+?\d+(e\d+)?w/,
      w = /(\([^)]+\))?\s*(.+)/,
      k = t.picturefillCFG,
      T = "font-size:100%!important;",
      A = !0,
      E = {},
      S = {},
      z = t.devicePixelRatio,
      I = {
        px: 1,
        in: 96
      },
      P = o.createElement("a"),
      $ = !1,
      M = /^[ \t\n\r\u000c]+/,
      j = /^[, \t\n\r\u000c]+/,
      D = /^[^ \t\n\r\u000c]+/,
      H = /[,]+$/,
      W = /^\d+$/,
      O = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      v = function(e) {
        var i = {};
        return function(t) {
          return t in i || (i[t] = e(t)), i[t]
        }
      };

    function L(t) {
      return " " === t || "\t" === t || "\n" === t || "\f" === t || "\r" === t
    }

    function B(t, e) {
      return t.w ? (t.cWidth = _.calcListLength(e || "100vw"), t.res = t.w / t.cWidth) : t.res = t.d, t
    }
    var F, R, N, X, V, Q, q, U, Z, Y, G, K, J, tt, et, it, st, nt = (F = /^([\d\.]+)(em|vw|px)$/, R = v(function(t) {
        return "return " + function() {
          for (var t = arguments, e = 0, i = t[0]; ++e in t;) i = i.replace(t[e], t[++e]);
          return i
        }((t || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
      }), function(t, e) {
        var i;
        if (!(t in E))
          if (E[t] = !1, e && (i = t.match(F))) E[t] = i[1] * I[i[2]];
          else try {
            E[t] = new Function("e", R(t))(I)
          } catch (t) {}
        return E[t]
      }),
      ot = function(t) {
        if (r) {
          var e, i, s, n = t || {};
          if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), s = (e = n.elements || _.qsa(n.context || o, n.reevaluate || n.reselect ? _.sel : _.selShort)).length) {
            for (_.setupRun(n), $ = !0, i = 0; i < s; i++) _.fillImg(e[i], n);
            _.teardownRun(n)
          }
        }
      };

    function at(t, e) {
      return t.res - e.res
    }

    function rt(t, e) {
      var i, s, n;
      if (t && e)
        for (n = _.parseSet(e), t = _.makeUrl(t), i = 0; i < n.length; i++)
          if (t === _.makeUrl(n[i].url)) {
            s = n[i];
            break
          } return s
    }

    function lt(t) {
      var e, i, s, n, o, a, r = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
        l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
      for (s = (i = function(t) {
          var e, i = "",
            s = [],
            n = [],
            o = 0,
            a = 0,
            r = !1;

          function l() {
            i && (s.push(i), i = "")
          }

          function c() {
            s[0] && (n.push(s), s = [])
          }
          for (;;) {
            if ("" === (e = t.charAt(a))) return l(), c(), n;
            if (r) "*" !== e || "/" !== t[a + 1] ? a += 1 : (r = !1, a += 2, l());
            else {
              if (L(e)) {
                if (t.charAt(a - 1) && L(t.charAt(a - 1)) || !i) {
                  a += 1;
                  continue
                }
                if (0 === o) {
                  l(), a += 1;
                  continue
                }
                e = " "
              } else if ("(" === e) o += 1;
              else if (")" === e) --o;
              else {
                if ("," === e) {
                  l(), c(), a += 1;
                  continue
                }
                if ("/" === e && "*" === t.charAt(a + 1)) {
                  r = !0, a += 2;
                  continue
                }
              }
              i += e, a += 1
            }
          }
        }(t)).length, e = 0; e < s; e++)
        if (o = (n = i[e])[n.length - 1], a = o, r.test(a) && 0 <= parseFloat(a) || (l.test(a) || ("0" === a || "-0" === a || "+0" === a))) {
          if (o = o, n.pop(), 0 === n.length) return o;
          if (n = n.join(" "), _.matchesMedia(n)) return o
        } return "100vw"
    }

    function ct() {
      2 === X.width && (_.supSizes = !0), d = _.supSrcset && !_.supSizes, r = !0, setTimeout(ot)
    }
    t.console && console.warn, x in s || (x = "src"), f["image/jpeg"] = !0, f["image/gif"] = !0, f["image/png"] = !0, f["image/svg+xml"] = o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), _.ns = ("pf" + (new Date).getTime()).substr(0, 9), _.supSrcset = "srcset" in s, _.supSizes = "sizes" in s, _.supPicture = !!t.HTMLPictureElement, _.supSrcset && _.supPicture && !_.supSizes && (N = o.createElement("img"), s.srcset = "data:,a", N.src = "data:,a", _.supSrcset = s.complete === N.complete, _.supPicture = _.supSrcset && _.supPicture), _.supSrcset && !_.supSizes ? (N = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", (X = o.createElement("img")).onload = ct, X.onerror = ct, X.setAttribute("sizes", "9px"), X.srcset = N + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", X.src = N) : r = !0, _.selShort = "picture>img,img[srcset]", _.sel = _.selShort, _.cfg = b, _.DPR = z || 1, _.u = I, _.types = f, _.setSize = e, _.makeUrl = v(function(t) {
      return P.href = t, P.href
    }), _.qsa = function(t, e) {
      return "querySelector" in t ? t.querySelectorAll(e) : []
    }, _.matchesMedia = function() {
      return t.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? _.matchesMedia = function(t) {
        return !t || matchMedia(t).matches
      } : _.matchesMedia = _.mMQ, _.matchesMedia.apply(this, arguments)
    }, _.mMQ = function(t) {
      return !t || nt(t)
    }, _.calcLength = function(t) {
      t = nt(t, !0) || !1;
      return t = t < 0 ? !1 : t
    }, _.supportsType = function(t) {
      return !t || f[t]
    }, _.parseSize = v(function(t) {
      t = (t || "").match(w);
      return {
        media: t && t[1],
        length: t && t[2]
      }
    }), _.parseSet = function(t) {
      return t.cands || (t.cands = function(e, d) {
        function t(t) {
          var t = t.exec(e.substring(a));
          if (t) return t = t[0], a += t.length, t
        }
        var h, u, i, s, n, o = e.length,
          a = 0,
          p = [];

        function r() {
          for (var t, e, i, s, n, o, a, r = !1, l = {}, c = 0; c < u.length; c++) s = (a = u[c])[a.length - 1], n = a.substring(0, a.length - 1), o = parseInt(n, 10), a = parseFloat(n), W.test(n) && "w" === s ? ((t || e) && (r = !0), 0 === o ? r = !0 : t = o) : O.test(n) && "x" === s ? ((t || e || i) && (r = !0), a < 0 ? r = !0 : e = a) : W.test(n) && "h" === s ? ((i || e) && (r = !0), 0 === o ? r = !0 : i = o) : r = !0;
          r || (l.url = h, t && (l.w = t), e && (l.d = e), i && (l.h = i), i || e || t || (l.d = 1), 1 === l.d && (d.has1x = !0), l.set = d, p.push(l))
        }
        for (;;) {
          if (t(j), o <= a) return p;
          h = t(D), u = [], "," === h.slice(-1) ? (h = h.replace(H, ""), r()) : function() {
            for (t(M), i = "", s = "in descriptor";;) {
              if (n = e.charAt(a), "in descriptor" === s)
                if (L(n)) i && (u.push(i), i = "", s = "after descriptor");
                else {
                  if ("," === n) return a += 1, i && u.push(i), r();
                  if ("(" === n) i += n, s = "in parens";
                  else {
                    if ("" === n) return i && u.push(i), r();
                    i += n
                  }
                }
              else if ("in parens" === s)
                if (")" === n) i += n, s = "in descriptor";
                else {
                  if ("" === n) return u.push(i), r();
                  i += n
                }
              else if ("after descriptor" === s && !L(n)) {
                if ("" === n) return r();
                s = "in descriptor", --a
              }
              a += 1
            }
          }()
        }
      }(t.srcset, t)), t.cands
    }, _.getEmValue = function() {
      var t, e, i, s;
      return !n && (t = o.body) && (e = o.createElement("div"), i = l.style.cssText, s = t.style.cssText, e.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", l.style.cssText = T, t.style.cssText = T, t.appendChild(e), n = e.offsetWidth, t.removeChild(e), n = parseFloat(n, 10), l.style.cssText = i, t.style.cssText = s), n || 16
    }, _.calcListLength = function(t) {
      var e;
      return t in S && !b.uT || (e = _.calcLength(lt(t)), S[t] = e || I.width), S[t]
    }, _.setRes = function(t) {
      if (t)
        for (var e, i = 0, s = (e = _.parseSet(t)).length; i < s; i++) B(e[i], t.sizes);
      return e
    }, _.setRes.res = B, _.applySetCandidate = function(t, e) {
      if (t.length) {
        var i, s, n, o, a, r, l, c, d, h, u, p, f, g, m = e[_.ns],
          v = _.DPR,
          y = m.curSrc || e[x],
          w = m.curCan || (l = e, c = y, w = t[0].set, (w = rt(c, w = !w && c ? (w = l[_.ns].sets) && w[w.length - 1] : w)) && (c = _.makeUrl(c), l[_.ns].curSrc = c, (l[_.ns].curCan = w).res || B(w, w.set.sizes)), w);
        if (w && w.set === t[0].set && ((r = C && !e.complete && w.res - .1 > v) || (w.cached = !0, w.res >= v && (a = w))), !a)
          for (t.sort(at), a = t[(o = t.length) - 1], s = 0; s < o; s++)
            if ((i = t[s]).res >= v) {
              a = t[n = s - 1] && (r || y !== _.makeUrl(i.url)) && (d = t[n].res, h = i.res, u = v, p = t[n].cached, g = f = void 0, d = "saveData" === b.algorithm ? 2.7 < d ? u + 1 : (g = (h - u) * (f = Math.pow(d - .6, 1.5)), p && (g += .1 * f), d + g) : 1 < u ? Math.sqrt(d * h) : d, u < d) ? t[n] : i;
              break
            } a && (w = _.makeUrl(a.url), m.curSrc = w, m.curCan = a, w !== y && _.setSrc(e, a), _.setSize(e))
      }
    }, _.setSrc = function(t, e) {
      t.src = e.url, "image/svg+xml" === e.set.type && (e = t.style.width, t.style.width = t.offsetWidth + 1 + "px", t.offsetWidth + 1 && (t.style.width = e))
    }, _.getSet = function(t) {
      for (var e, i, s = !1, n = t[_.ns].sets, o = 0; o < n.length && !s; o++)
        if ((e = n[o]).srcset && _.matchesMedia(e.media) && (i = _.supportsType(e.type))) {
          s = e = "pending" === i ? i : e;
          break
        } return s
    }, _.parseSets = function(t, e, i) {
      var s, n, o, a, r = e && "PICTURE" === e.nodeName.toUpperCase(),
        l = t[_.ns];
      l.src !== c && !i.src || (l.src = h.call(t, "src"), l.src ? u.call(t, g, l.src) : p.call(t, g)), l.srcset !== c && !i.srcset && _.supSrcset && !t.srcset || (s = h.call(t, "srcset"), l.srcset = s, a = !0), l.sets = [], r && (l.pic = !0, function(t, e) {
        for (var i, s, n = t.getElementsByTagName("source"), o = 0, a = n.length; o < a; o++)(i = n[o])[_.ns] = !0, (s = i.getAttribute("srcset")) && e.push({
          srcset: s,
          media: i.getAttribute("media"),
          type: i.getAttribute("type"),
          sizes: i.getAttribute("sizes")
        })
      }(e, l.sets)), l.srcset ? (n = {
        srcset: l.srcset,
        sizes: h.call(t, "sizes")
      }, l.sets.push(n), (o = (d || l.src) && y.test(l.srcset || "")) || !l.src || rt(l.src, n) || n.has1x || (n.srcset += ", " + l.src, n.cands.push({
        url: l.src,
        d: 1,
        set: n
      }))) : l.src && l.sets.push({
        srcset: l.src,
        sizes: null
      }), l.curCan = null, l.curSrc = c, l.supported = !(r || n && !_.supSrcset || o && !_.supSizes), a && _.supSrcset && !l.supported && (s ? (u.call(t, m, s), t.srcset = "") : p.call(t, m)), l.supported && !l.srcset && (!l.src && t.src || t.src !== _.makeUrl(l.src)) && (null === l.src ? t.removeAttribute("src") : t.src = l.src), l.parsed = !0
    }, _.fillImg = function(t, e) {
      var i, s = e.reselect || e.reevaluate;
      t[_.ns] || (t[_.ns] = {}), i = t[_.ns], !s && i.evaled === a || (i.parsed && !e.reevaluate || _.parseSets(t, t.parentNode, e), i.supported ? i.evaled = a : (e = t, i = _.getSet(e), t = !1, "pending" !== i && (t = a, i && (i = _.setRes(i), _.applySetCandidate(i, e))), e[_.ns].evaled = t))
    }, _.setupRun = function() {
      $ && !A && z === t.devicePixelRatio || (A = !1, z = t.devicePixelRatio, E = {}, S = {}, _.DPR = z || 1, I.width = Math.max(t.innerWidth || 0, l.clientWidth), I.height = Math.max(t.innerHeight || 0, l.clientHeight), I.vw = I.width / 100, I.vh = I.height / 100, a = [I.height, I.width, z].join("-"), I.em = _.getEmValue(), I.rem = I.em)
    }, _.supPicture ? (ot = e, _.fillImg = e) : (G = t.attachEvent ? /d$|^c/ : /d$|^c|^i/, K = function() {
      var t = o.readyState || "";
      J = setTimeout(K, "loading" === t ? 200 : 999), o.body && (_.fillImgs(), (V = V || G.test(t)) && clearTimeout(J))
    }, J = setTimeout(K, o.body ? 9 : 99), tt = l.clientHeight, i(t, "resize", (Q = function() {
      A = Math.max(t.innerWidth || 0, l.clientWidth) !== I.width || l.clientHeight !== tt, tt = l.clientHeight, A && _.fillImgs()
    }, q = 99, Y = function() {
      var t = new Date - Z;
      t < q ? U = setTimeout(Y, q - t) : (U = null, Q())
    }, function() {
      Z = new Date, U = U || setTimeout(Y, q)
    })), i(o, "readystatechange", K)), _.picturefill = ot, _.fillImgs = ot, _.teardownRun = e, ot._ = _, t.picturefillCFG = {
      pf: _,
      push: function(t) {
        var e = t.shift();
        "function" == typeof _[e] ? _[e].apply(_, t) : (b[e] = t[0], $ && _.fillImgs({
          reselect: !0
        }))
      }
    };
    for (; k && k.length;) t.picturefillCFG.push(k.shift());
    t.picturefill = ot, "object" == typeof module && "object" == typeof module.exports ? module.exports = ot : "function" == typeof define && define.amd && define("picturefill", function() {
      return ot
    }), _.supPicture || (f["image/webp"] = (et = "image/webp", it = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", (st = new t.Image).onerror = function() {
      f[et] = !1, ot()
    }, st.onload = function() {
      f[et] = 1 === st.width, ot()
    }, st.src = it, "pending"))
  }(window, document),
  function(k) {
    "use strict";

    function T(t) {
      var e = t.parent().attr("data-numposts");
      t.owlCarousel({
        loop: !0,
        rtl: vce_js_settings.rtl_mode,
        nav: !0,
        center: !1,
        fluidSpeed: 100,
        items: e,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: !0,
            autoWidth: !0
          },
          600: {
            items: 2,
            autoWidth: !0
          },
          768: {
            items: 3,
            autoWidth: !1
          },
          1024: {
            items: e,
            autoWidth: !1
          }
        }
      })
    }
    k(document).ready(function() {
      1 == parseInt(vce_js_settings.rtl_mode) ? vce_js_settings.rtl_mode = !0 : vce_js_settings.rtl_mode = !1;
      var s, t = {
          0: {
            items: 1,
            nav: !0,
            autoWidth: !0
          },
          600: {
            items: 2,
            autoWidth: !0
          },
          768: {
            items: 3,
            autoWidth: !0
          },
          1024: {
            items: 3,
            autoWidth: !0
          },
          1920: {
            items: 5,
            autoWidth: !0
          }
        },
        e = vce_js_settings.grid_slider_autoplay;

      function d(t) {
        t.find(".vce-post-slider").each(function() {
          var t = 1e3 * parseInt(k(this).attr("data-autoplay")),
            e = !!t;
          k(this).owlCarousel({
            loop: !0,
            nav: !0,
            rtl: vce_js_settings.rtl_mode,
            autoplay: e,
            autoplayTimeout: t,
            autoplayHoverPause: !0,
            center: !0,
            fluidSpeed: 100,
            items: 1,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
          })
        })
      }

      function h(t) {
        t = t.find(".vce-image-format");
        t.length && t.magnificPopup({
          type: "image",
          zoom: {
            enabled: !0,
            duration: 300,
            opener: function(t) {
              return t.find("img")
            }
          }
        })
      }

      function u(t) {
        t = t.find(".vce-gallery-big, .wp-block-gallery");
        t.length && t.magnificPopup({
          type: "image",
          delegate: "a",
          gallery: {
            enabled: !0
          },
          zoom: {
            enabled: !0,
            duration: 300,
            opener: function(t) {
              return t.find("img")
            }
          },
          image: {
            titleSrc: function(t) {
              t = t.el.closest(".big-gallery-item, .blocks-gallery-item").find(".gallery-caption, figcaption");
              return "undefined" != t ? t.text() : ""
            }
          }
        })
      }

      function p(t) {
        k("body").imagesLoaded(function() {
          t.find(".gallery .vce-gallery-slider, .wp-block-gallery.columns-1").each(function() {
            var t = k(this);
            t.owlCarousel({
              margin: 1,
              loop: !0,
              rtl: vce_js_settings.rtl_mode,
              nav: !0,
              mouseDrag: !1,
              center: !1,
              autoHeight: !0,
              fluidSpeed: 100,
              navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
              items: t.attr("data-columns") ? t.attr("data-columns") : 1,
              autoWidth: !1
            })
          })
        })
      }

      function f(t) {
        var e, i, s;
        1024 <= k(window).width() ? 0 < k(".vce-sticky").length && (e = k("#main-wrapper").find(".site-content").last().height(), i = k("#main-wrapper").find(".sidebar").last().height(), s = k(".header-sticky").length ? 80 : 30, i < e ? (k("#main-wrapper").find(".sidebar").last().css("min-height", e - 30), k(".vce-sticky").stick_in_parent({
          parent: ".sidebar",
          inner_scrolling: !1,
          offset_top: s
        }), !0 === t && "absolute" == k(".vce-sticky").last().css("position") && k(".vce-sticky").last().css("position", "fixed").css("top", s)) : k(".sidebar").css("min-height", i)) : (k(".sidebar").each(function() {
          k(this).css("height", "auto"), k(this).css("min-height", "1px")
        }), k(".vce-sticky").trigger("sticky_kit:detach"))
      }
      k("#vce-featured-grid").hasClass("vce-featured-grid-big") && (t = {
        0: {
          items: 1,
          nav: !0,
          autoWidth: !0
        },
        600: {
          items: 1,
          autoWidth: !0
        },
        768: {
          items: 1,
          autoWidth: !0
        },
        1024: {
          items: 1,
          autoWidth: !0
        }
      }, e = vce_js_settings.grid_big_slider_autoplay), k("#vce-featured-grid").owlCarousel({
        margin: 1,
        loop: !0,
        rtl: vce_js_settings.rtl_mode,
        autoplay: e,
        autoplaySpeed: 500,
        autoplayTimeout: e,
        autoplayHoverPause: !0,
        nav: !0,
        center: !0,
        fluidSpeed: 100,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: t
      }), k(".vce-featured-full-slider").owlCarousel({
        loop: !0,
        nav: !0,
        rtl: vce_js_settings.rtl_mode,
        autoplay: vce_js_settings.full_slider_autoplay,
        autoplaySpeed: 500,
        autoplayTimeout: vce_js_settings.full_slider_autoplay,
        autoplayHoverPause: !0,
        center: !0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
      }), d(k(".site-content")), h(k(".site-content")), u(k(".site-content")), k("body").on("click", ".vce-gallery-slider a", function(t) {
        t.preventDefault();
        var e = k(this).closest(".gallery-item").attr("data-item"),
          t = k(this).closest(".gallery").find(".vce-gallery-big");
        t.find(".big-gallery-item").fadeOut(400), t.find(".item-" + e).fadeIn(400)
      }), p(k(".site-content")), s = k("body").hasClass("vce-sid-none") ? {
        b: 2,
        cdf: 3,
        e: 7,
        h: 3
      } : {
        b: 1,
        cdf: 2,
        e: 5,
        h: 2
      }, k(".vce-slider-pagination.vce-slider-a, .vce-slider-pagination.vce-slider-g").each(function() {
        var t = k(this).attr("data-autoplay");
        k(this).owlCarousel({
          loop: !0,
          autoHeight: !1,
          rtl: vce_js_settings.rtl_mode,
          autoWidth: !0,
          nav: !0,
          autoplay: t,
          autoplaySpeed: 500,
          autoplayTimeout: t,
          autoplayHoverPause: !0,
          fluidSpeed: 100,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 1,
              nav: !0,
              autoWidth: !1,
              margin: 10
            },
            600: {
              items: 1,
              autoWidth: !1
            },
            768: {
              items: 1,
              margin: 20,
              autoWidth: !1
            },
            1023: {
              items: 1,
              autoWidth: !1,
              margin: 20
            }
          }
        })
      }), k(".vce-slider-pagination.vce-slider-b").each(function() {
        var t = k(this).attr("data-autoplay");
        k(this).owlCarousel({
          loop: !0,
          autoHeight: !1,
          autoWidth: !0,
          rtl: vce_js_settings.rtl_mode,
          nav: !0,
          fluidSpeed: 100,
          autoplay: t,
          autoplaySpeed: 500,
          autoplayTimeout: t,
          autoplayHoverPause: !0,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 1,
              nav: !0,
              autoWidth: !1,
              margin: 10
            },
            600: {
              items: 1,
              autoWidth: !1
            },
            768: {
              items: 1,
              margin: 20,
              autoWidth: !1
            },
            1023: {
              items: s.b,
              autoWidth: !1,
              margin: 20
            }
          }
        })
      }), k(".vce-slider-pagination.vce-slider-c, .vce-slider-pagination.vce-slider-d, .vce-slider-pagination.vce-slider-f").each(function() {
        var t, e = k(this).parent().parent().hasClass("main-box-half") ? t = 1 : (t = s.cdf, 2),
          i = k(this).attr("data-autoplay");
        k(this).owlCarousel({
          loop: !0,
          autoHeight: !1,
          rtl: vce_js_settings.rtl_mode,
          autoWidth: !0,
          nav: !0,
          fluidSpeed: 100,
          autoplay: i,
          autoplaySpeed: 500,
          autoplayTimeout: i,
          autoplayHoverPause: !0,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 1,
              nav: !0,
              autoWidth: !1,
              margin: 10
            },
            670: {
              items: e,
              margin: 18,
              autoWidth: !1
            },
            768: {
              items: e,
              margin: 15,
              autoWidth: !1
            },
            1023: {
              items: t,
              autoWidth: !1,
              margin: 19
            }
          }
        })
      }), k(this).attr("data-autoplay"), k(".vce-slider-pagination.vce-slider-e").each(function() {
        var t = k(this).attr("data-autoplay");
        k(this).owlCarousel({
          loop: !0,
          autoHeight: !1,
          autoWidth: !0,
          rtl: vce_js_settings.rtl_mode,
          nav: !0,
          fluidSpeed: 100,
          autoplay: t,
          autoplaySpeed: 500,
          autoplayTimeout: t,
          autoplayHoverPause: !0,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 2,
              nav: !0,
              autoWidth: !1,
              margin: 5
            },
            600: {
              items: 3,
              margin: 18,
              autoWidth: !1
            },
            768: {
              items: 5,
              margin: 15,
              autoWidth: !1
            },
            1023: {
              items: s.e,
              autoWidth: !1,
              margin: 19
            }
          }
        })
      }), k(".vce-slider-pagination.vce-slider-h").each(function() {
        var t = k(this).attr("data-autoplay");
        k(this).owlCarousel({
          loop: !0,
          autoHeight: !1,
          autoWidth: !0,
          rtl: vce_js_settings.rtl_mode,
          nav: !0,
          fluidSpeed: 100,
          autoplay: t,
          autoplaySpeed: 500,
          autoplayTimeout: t,
          autoplayHoverPause: !0,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 1,
              nav: !0,
              autoWidth: !1,
              margin: 10
            },
            600: {
              items: 1,
              autoWidth: !1
            },
            768: {
              items: 2,
              margin: 20,
              autoWidth: !1
            },
            1023: {
              items: s.h,
              autoWidth: !1,
              margin: 20
            }
          }
        })
      });
      var i, g, m, v, n, o, a, r = k(window).width();

      function l() {
        var t = ".alignfull, .vce-sid-left .alignwide, .vce-sid-right .alignwide { max-width: " + k(".main-box").width() + "px; position: relative; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); width: 100vw; left: 50%; }";
        k("#voice-full-fix").length ? k("#voice-full-fix").html(t) : k("head").append('<style id="voice-full-fix" type="text/css">' + t + "</style>")
      }
      k(window).on("resize", function() {
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (r !== k(window).width() && (k(window).width() < 1024 ? k("#content .sidebar.left").is(":last-child") || k(".sidebar.left").insertAfter(".vce-main-content") : (k("#content .sidebar.left").is(":first-child") || k(".sidebar.left").insertBefore(".vce-main-content"), k("body").hasClass("sidr-main-open") && (k.sidr("close", "sidr-main"), k(this).removeClass("nav-open"))), r = k(window).width()), f(), k(".vce-featured .vce-featured-info, .vce-lay-h .entry-header").each(function() {
          k(this).vceCenter()
        }), vce_js_settings.lay_fa_grid_center && k("#vce-featured-grid .vce-featured-info").each(function() {
          k(this).vceCenter()
        }))
      }), k(window).width() < 1024 && k(".sidebar.left").length ? k("#content .sidebar.left").is(":last-child") || k(".sidebar.left").insertAfter(".vce-main-content") : k("#content .sidebar.left").is(":first-child") || k(".sidebar.left").insertBefore(".vce-main-content"), k("body").imagesLoaded(function() {
        k(".vce-lay-c, .vce-sid-none .vce-lay-b, .vce-lay-d, .vce-lay-e, .vce-lay-h").matchHeight(), k(".vce-lay-f").matchHeight(!1), k(".main-box-half .main-box-inside .vce-loop-wrap").matchHeight(), k(".main-box-half").matchHeight(), k(".vce-mega-menu-posts-wrap .mega-menu-link").matchHeight(), f()
      }), l(), k(".entry-content, .meta-media").fitVids({
        customSelector: ["iframe[src*='youtube.com/embed']", "iframe[src*='player.vimeo.com/video']", "iframe[src*='kickstarter.com/projects']", "iframe[src*='players.brightcove.net']", "iframe[src*='hulu.com/embed']", "iframe[src*='vine.co/v']", "iframe[src*='videopress.com/embed']", "iframe[src*='dailymotion.com/embed']", "iframe[src*='vid.me/e']", "iframe[src*='player.twitch.tv']", "iframe[src*='facebook.com/plugins/video.php']", "iframe[src*='gfycat.com/ifr/']", "iframe[src*='liveleak.com/ll_embed']", "iframe[src*='media.myspace.com']", "iframe[src*='archive.org/embed']", "iframe[src*='channel9.msdn.com']", "iframe[src*='content.jwplatform.com']", "iframe[src*='wistia.com']", "iframe[src*='vooplayer.com']", "iframe[src*='content.zetatv.com.uy']", "iframe[src*='embed.wirewax.com']", "iframe[src*='eventopedia.navstream.com']", "iframe[src*='cdn.playwire.com']", "iframe[src*='drive.google.com']", "iframe[src*='videos.sproutvideo.com']", "iframe[src*='ipcamlive.com']"].join(","),
        ignore: '[class^="wp-block"]'
      }), k("body").on("mouseenter", ".vce-featured-header .vce-hover-effect", function() {
        k(".vce-featured-header .vce-featured-header-background").animate({
          opacity: vce_js_settings.fa_big_opacity[2]
        }, 100)
      }), k("body").on("mouseleave", ".vce-featured-header .vce-hover-effect", function() {
        k(".vce-featured-header .vce-featured-header-background").animate({
          opacity: vce_js_settings.fa_big_opacity[1]
        }, 100)
      }), k(".nav-menu li").on("mouseenter mouseleave", function(t) {
        k(this).find("ul").length && (k(window).width() - (k(this).find("ul").offset().left + k(this).find("ul").outerWidth()) < 0 ? k(this).find("ul").addClass("vce-rev") : k(this).find("ul").removeClass("vce-rev"))
      }), k("#vce-responsive-nav").sidr({
        name: "sidr-main",
        source: "#site-navigation",
        speed: 100
      }), 0 != vce_js_settings.top_bar_mobile && (i = k("#sidr-id-vce_main_navigation_menu"), k("#vce_top_navigation_menu").length && (e = k("#vce_top_navigation_menu").children().clone(), t = k('<li class="sidr-class-menu-item-has-children"></li>').append('<a href="#">' + vce_js_settings.top_bar_more_link + "</a>"), k(".sidr-class-search-header-wrap").length ? (0 != vce_js_settings.top_bar_mobile_group ? t.append(k('<ul class="sidr-class-sub-menu">').append(e)) : e).insertBefore(i.find(".sidr-class-search-header-wrap")) : 0 != vce_js_settings.top_bar_mobile_group ? i.append(e) : t.append(k('<ul class="sidr-class-sub-menu">').append(e))), k("#vce_social_menu").length && (n = k("#vce_social_menu").clone().addClass("clear"), i.append(k("<li/>").append(n)))), k(".sidr-class-vce-mega-menu-wrapper li").length && k(".sidr-class-vce-mega-menu-wrapper").css("display", "none").closest("li").addClass("sidr-class-menu-item-has-children"), k("body").on("touchend click", ".vce-responsive-nav", function(t) {
        t.stopPropagation(), t.preventDefault(), k(this).hasClass("nav-open") ? (k.sidr("close", "sidr-main"), k(this).removeClass("nav-open")) : (k.sidr("open", "sidr-main"), k(this).addClass("nav-open"))
      }), k("#vce-main").on("click", function(t) {
        k("body").hasClass("sidr-open") && (k.sidr("close", "sidr-main"), k(".vce-responsive-nav").removeClass("nav-open"))
      }), k(".sidr ul li").each(function() {
        k(this).hasClass("sidr-class-menu-item-has-children") && k(this).append('<span class="vce-menu-parent fa fa-angle-down"></span>')
      }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (k(".vce-menu-parent").on("touchstart", function(t) {
        k(this).prev().slideToggle(), k(this).parent().toggleClass("sidr-class-current_page_item")
      }), k(".soc_sharing").on("click", function() {
        k(this).toggleClass("soc_active")
      })) : k(".vce-menu-parent").on("click", function(t) {
        k(this).prev().slideToggle(), k(this).parent().toggleClass("sidr-class-current_page_item")
      }), k("body").on("click", ".vce-single .entry-meta .comments a, body.single .vce-featured .entry-meta .comments a", function(t) {
        t.preventDefault();
        var t = k(this).closest(".site-content"),
          e = this.hash,
          t = t.find(e);
        k("html, body").stop().animate({
          scrollTop: t.offset().top
        }, 900, "swing", function() {
          window.location.hash = e
        })
      }), (k(".vce-infinite-scroll").length || k(".vce-load-more").length || k(".vce-infinite-scroll-single").length) && (g = [], v = m = 0, n = {
        prev: window.location.href,
        next: "",
        offset: k(window).scrollTop(),
        prev_title: window.document.title,
        next_title: window.document.title
      }, g.push(n), window.history.pushState(n, "", window.location.href), a = 0, k(window).scroll(function() {
        g[m].offset != o && k(window).scrollTop() < g[m].offset && (o = g[m].offset, a = 0, window.document.title = g[m].prev_title, window.history.replaceState(g, "", g[m].prev), 0 != (v = m) && m--), g[v].offset != a && k(window).scrollTop() > g[v].offset && (a = g[v].offset, o = 0, window.document.title = g[v].next_title, window.history.replaceState(g, "", g[v].next), (m = v) < g.length - 1 && v++)
      }));
      var y = 0;
      k("body").on("click", ".vce-load-more a", function(t) {
        t.preventDefault();
        var a = k(this),
          r = window.location.href,
          l = window.document.title,
          c = a.attr("href");
        a.addClass("vce-loader"), k("<div>").load(c, function() {
          var i = y.toString(),
            s = a.closest(".main-box-inside").find(".vce-loop-wrap"),
            n = k(this).find(".vce-loop-wrap .vce-post").addClass("vce-new-" + i),
            o = k(this);
          n.imagesLoaded(function() {
            var t, e;
            return n.hide().appendTo(s).fadeIn(400), n.eq(0).is(".vce-lay-c, .vce-lay-b, .vce-lay-d, .vce-lay-e, .vce-lay-f, .vce-lay-h") && (k.fn.matchHeight._apply(".vce-loop-wrap .vce-new-" + i, !0), n.eq(0).is(".vce-lay-h") && n.each(function() {
              k(this).find(".entry-header").vceCenter()
            })), o.find(".vce-load-more").length ? a.closest(".main-box-inside").find(".vce-load-more").html(o.find(".vce-load-more").html()) : a.closest(".main-box-inside").find(".vce-load-more").fadeOut("fast").remove(), c != window.location && (m++, v++, t = o.find("title").text(), e = {
              prev: r,
              next: c,
              offset: k(window).scrollTop(),
              prev_title: l,
              next_title: t
            }, g.push(e), window.document.title = t, window.history.pushState(e, "", c)), y++, f(!0), !1
          })
        })
      });
      var w = !0;
      k(".vce-infinite-scroll").length && k(window).scroll(function() {
        var a, r, l, c;
        w && k(".vce-infinite-scroll").length && k(this).scrollTop() > k(".vce-infinite-scroll").offset().top - k(this).height() - 200 && (a = k(".vce-infinite-scroll a"), r = a.attr("href"), l = window.location.href, c = window.document.title, void 0 !== r && (a.parent().animate({
          opacity: 1,
          height: 32
        }, 300).css("padding", "20px"), w = !1, k("<div>").load(r, function() {
          var i = y.toString(),
            s = a.closest(".main-box-inside").find(".vce-loop-wrap"),
            n = k(this).find(".vce-loop-wrap .vce-post").addClass("vce-new-" + i),
            o = k(this);
          n.imagesLoaded(function() {
            var t, e;
            return n.hide().appendTo(s).fadeIn(400), n.eq(0).is(".vce-lay-c, .vce-lay-b, .vce-lay-d, .vce-lay-e, .vce-lay-f, .vce-lay-h") && (setTimeout(function() {
              k.fn.matchHeight._apply(".vce-loop-wrap .vce-new-" + i, !0)
            }, 1e3), n.eq(0).is(".vce-lay-h") && n.each(function() {
              k(this).find(".entry-header").vceCenter()
            })), o.find(".vce-infinite-scroll").length ? (a.closest(".main-box-inside").find(".vce-infinite-scroll").html(o.find(".vce-infinite-scroll").html()).animate({
              opacity: 0,
              height: 0
            }, 300).css("padding", "0"), w = !0) : a.closest(".main-box-inside").find(".vce-infinite-scroll").fadeOut("fast").remove(), r != window.location && (m++, v++, t = o.find("title").text(), e = {
              prev: l,
              next: r,
              offset: k(window).scrollTop(),
              prev_title: c,
              next_title: t
            }, g.push(e), window.document.title = t, window.history.pushState(e, "", r)), y++, f(!0), !1
          })
        })))
      });
      var c, _ = !0,
        b = 0;
      k(".vce-infinite-scroll-single").length && k(window).scroll(function() {
        var a, r, l, c;
        _ && k(".vce-infinite-scroll-single").length && k(this).scrollTop() > k(".vce-infinite-scroll-single").offset().top - k(this).height() - 100 && (a = k(".vce-infinite-scroll-single a"), r = a.attr("href"), l = window.location.href, c = window.document.title, void 0 !== r && (a.parent().animate({
          opacity: 1,
          height: 32
        }, 300).css("padding", "0 0 20px"), _ = !1, k("<div>").load(r, function() {
          var t = b.toString(),
            i = a.closest("#main-wrapper").find(".site-content").last(),
            s = k(this).find(".site-content").last().addClass("vce-new-" + t),
            n = k(this).find(".vce-featured").last().addClass("vce-featured-opacity vce-featured-" + t);
          n.find(".vce-featured-info").addClass("vce-info-opacity");
          var o = k(this);
          s.imagesLoaded(function() {
            var t, e;
            return n.hasClass("vce-featured-opacity") ? (n.hide().insertAfter(i).fadeIn(400), s.hide().insertAfter(n).fadeIn(400)) : s.hide().insertAfter(i).fadeIn(400), k("body").removeClass("vce-sid-none", "vce-sid-left", "vce-sid-right"), h(s), u(s), p(s), d(s), x(s), o.find(".vce-infinite-scroll-single").length ? (a.closest("#main-wrapper").find(".vce-infinite-scroll-single").html(o.find(".vce-infinite-scroll-single").html()).animate({
              opacity: 0,
              height: 0
            }, 300).css("padding", "0"), _ = !0) : a.closest("#main-wrapper").find(".vce-infinite-scroll-single").fadeOut("fast").remove(), r != window.location && (m++, v++, t = o.find("title").text(), e = {
              prev: l,
              next: r,
              offset: k(window).scrollTop(),
              prev_title: c,
              next_title: t
            }, g.push(e), window.document.title = t, window.history.pushState(e, "", r)), b++, f(), !1
          })
        })))
      }), k("body").on("click", ".widget_nav_menu .menu-item-has-children, .widget_pages .page_item_has_children", function() {
        k(this).find("ul.sub-menu:first, ul.children:first").slideToggle("fast")
      }), k("body").on("click", ".search_header", function() {
        k(this).find("i").toggleClass("fa-times", "fa-search"), k(this).toggleClass("vce-item-selected"), k(this).parent().toggleClass("vce-zoomed"), k(this).next().find(".search-input").focus()
      }), k(window).scroll(function() {
        400 < k(this).scrollTop() ? k("#back-top").fadeIn() : k("#back-top").fadeOut()
      }), k("body").on("click", "#back-top", function() {
        return k("body,html").animate({
          scrollTop: 0
        }, 800), !1
      }), !vce_js_settings.sticky_header || k("#header").length && (c = k("#header").offset().top + parseInt(vce_js_settings.sticky_header_offset), k(window).scroll(function() {
        var i, s;
        480 < k(window).width() ? k(window).scrollTop() > c ? (k("body").addClass("sticky-active"), k("#sticky_header").addClass("header-is-sticky")) : (k("body").removeClass("sticky-active"), k("#sticky_header").removeClass("header-is-sticky")) : (k("body").addClass("sticky-active"), i = k(window).scrollTop(), s = k("#header").outerHeight(), k(window).scroll(function(t) {
          var e = k(this).scrollTop();
          i < e || e < s ? k("#sticky_header").removeClass("header-is-sticky") : k("#sticky_header").addClass("header-is-sticky"), i = e
        }))
      }));
      var C = null !== vce_js_settings.ajax_wpml_current_lang ? "?wpml_lang=" + vce_js_settings.ajax_wpml_current_lang : "";

      function x(t) {
        t.find(".vce-post-slider, .vce-post-big").imagesLoaded().always(function(t) {
          k(".vce-post-slider .vce-posts-wrap, .vce-post-big .vce-posts-wrap").each(function() {
            k(this).vceCenter().animate({
              opacity: 1
            }, 400)
          })
        })
      }
      vce_js_settings.ajax_mega_menu ? k("body").on("mouseover touchend", "#vce_main_navigation_menu li.vce-mega-cat a", function() {
        var t, e = k(this).parent().find(".vce-mega-menu-wrapper");
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && k(this).attr("href", "#"), e.is(":empty") && (e.addClass("vce-loader"), t = {
          action: "vce_mega_menu",
          cat: k(this).attr("data-mega_cat_id")
        }, k.post(vce_js_settings.ajax_url + C, t, function(t) {
          e.is(":empty") && (t = k(k.parseHTML(t)), e.removeClass("vce-loader"), setTimeout(function() {
            k.fn.matchHeight._apply(".vce-mega-menu-posts-wrap .mega-menu-link", !0)
          }, 300), t.hide().appendTo(e).fadeIn(400), vce_js_settings.mega_menu_slider && T(e.find(".vce-mega-menu-posts-wrap > ul")))
        }))
      }) : vce_js_settings.mega_menu_slider && k("#header .vce-mega-menu-posts-wrap > ul").each(function() {
        T(k(this))
      }), k.fn.vceCenter = function() {
        return this.css("position", "absolute"), this.css("top", (k(this).parent().height() - this.height()) / 2 + "px"), this
      }, k(".vce-featured").imagesLoaded().always(function(t) {
        k(".vce-featured .vce-featured-info").each(function() {
          k(this).vceCenter().animate({
            opacity: 1
          }, 400)
        }), k(".vce-featured").animate({
          opacity: 1
        }, 400)
      }), k(".vce-lay-h").imagesLoaded().always(function(t) {
        k(".vce-lay-h .entry-header").each(function() {
          k(this).vceCenter().animate({
            opacity: 1
          }, 400)
        })
      }), k("#vce-featured-grid").imagesLoaded().always(function(t) {
        vce_js_settings.lay_fa_grid_center && k("#vce-featured-grid .vce-featured-info").each(function() {
          k(this).vceCenter()
        }), k("#vce-featured-grid .vce-grid-item").animate({
          opacity: 1
        }, 400)
      }), x(k(".site-content")), k(".vce-featured-info").clearBlur(), k(window).resize(function() {
        k(".vce-featured-info").clearBlur(), l()
      })
    }), k.fn.clearBlur = function() {
      k(this).each(function(t, e) {
        var i = k(e);
        i.css("height", "auto");
        e = (e = i.height()) % 2 ? e - 1 : e;
        i.css("height", e)
      })
    }
  }(jQuery);
