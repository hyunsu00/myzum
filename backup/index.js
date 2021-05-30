"use strict";

/*! For license information please see start-305142826284da5440c8.js.LICENSE.txt */
!(function (e) {
  function t(t) {
    for (var i, a, s = t[0], o = t[1], r = t[2], l = 0, c = []; l < s.length; l++) (a = s[l]), Object.prototype.hasOwnProperty.call(P, a) && P[a] && c.push(P[a][0]), (P[a] = 0);
    for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    for (O && O(t); c.length; ) c.shift()();
    return E.push.apply(E, r || []), n();
  }
  function n() {
    for (var e, t = 0; t < E.length; t++) {
      for (var n = E[t], i = !0, a = 1; a < n.length; a++) {
        var s = n[a];
        0 !== P[s] && (i = !1);
      }
      i && (E.splice(t--, 1), (e = $(($.s = n[0]))));
    }
    return e;
  }
  var i = window.webpackHotUpdate;
  window.webpackHotUpdate = function (e, t) {
    !(function (e, t) {
      if (!y[e] || !b[e]) return;
      for (var n in ((b[e] = !1), t)) Object.prototype.hasOwnProperty.call(t, n) && (f[n] = t[n]);
      0 == --g && 0 === w && C();
    })(e, t),
      i && i(e, t);
  };
  var a,
    s = !0,
    o = "305142826284da5440c8",
    r = {},
    l = [],
    c = [];
  function u(e) {
    var t = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: a !== e,
      active: !0,
      accept: function (e, n) {
        if (void 0 === e) t._selfAccepted = !0;
        else if ("function" == typeof e) t._selfAccepted = e;
        else if ("object" == typeof e) for (var i = 0; i < e.length; i++) t._acceptedDependencies[e[i]] = n || function () {};
        else t._acceptedDependencies[e] = n || function () {};
      },
      decline: function (e) {
        if (void 0 === e) t._selfDeclined = !0;
        else if ("object" == typeof e) for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
        else t._declinedDependencies[e] = !0;
      },
      dispose: function (e) {
        t._disposeHandlers.push(e);
      },
      addDisposeHandler: function (e) {
        t._disposeHandlers.push(e);
      },
      removeDisposeHandler: function (e) {
        var n = t._disposeHandlers.indexOf(e);
        n >= 0 && t._disposeHandlers.splice(n, 1);
      },
      check: x,
      apply: T,
      status: function (e) {
        if (!e) return d;
        h.push(e);
      },
      addStatusHandler: function (e) {
        h.push(e);
      },
      removeStatusHandler: function (e) {
        var t = h.indexOf(e);
        t >= 0 && h.splice(t, 1);
      },
      data: r[e],
    };
    return (a = void 0), t;
  }
  var h = [],
    d = "idle";
  function p(e) {
    d = e;
    for (var t = 0; t < h.length; t++) h[t].call(null, e);
  }
  var m,
    f,
    _,
    g = 0,
    w = 0,
    v = {},
    b = {},
    y = {};
  function k(e) {
    return +e + "" === e ? +e : e;
  }
  function x(e) {
    if ("idle" !== d) throw new Error("check() is only allowed in idle status");
    return (
      (s = e),
      p("check"),
      ((t = 1e4),
      (t = t || 1e4),
      new Promise(function (e, n) {
        if ("undefined" == typeof XMLHttpRequest) return n(new Error("No browser support"));
        try {
          var i = new XMLHttpRequest(),
            a = $.p + "" + o + ".hot-update.json";
          i.open("GET", a, !0), (i.timeout = t), i.send(null);
        } catch (e) {
          return n(e);
        }
        i.onreadystatechange = function () {
          if (4 === i.readyState)
            if (0 === i.status) n(new Error("Manifest request to " + a + " timed out."));
            else if (404 === i.status) e();
            else if (200 !== i.status && 304 !== i.status) n(new Error("Manifest request to " + a + " failed."));
            else {
              try {
                var t = JSON.parse(i.responseText);
              } catch (e) {
                return void n(e);
              }
              e(t);
            }
        };
      })).then(function (e) {
        if (!e) return p("idle"), null;
        (b = {}), (v = {}), (y = e.c), (_ = e.h), p("prepare");
        var t = new Promise(function (e, t) {
          m = { resolve: e, reject: t };
        });
        for (var n in ((f = {}), P)) S(n);
        return "prepare" === d && 0 === w && 0 === g && C(), t;
      })
    );
    var t;
  }
  function S(e) {
    y[e]
      ? ((b[e] = !0),
        g++,
        (function (e) {
          var t = document.createElement("script");
          (t.charset = "utf-8"), (t.src = $.p + "" + e + "." + o + ".hot-update.js"), document.head.appendChild(t);
        })(e))
      : (v[e] = !0);
  }
  function C() {
    p("ready");
    var e = m;
    if (((m = null), e))
      if (s)
        Promise.resolve()
          .then(function () {
            return T(s);
          })
          .then(
            function (t) {
              e.resolve(t);
            },
            function (t) {
              e.reject(t);
            }
          );
      else {
        var t = [];
        for (var n in f) Object.prototype.hasOwnProperty.call(f, n) && t.push(k(n));
        e.resolve(t);
      }
  }
  function T(t) {
    if ("ready" !== d) throw new Error("apply() is only allowed in ready status");
    var n, i, a, s, c;
    function u(e) {
      for (
        var t = [e],
          n = {},
          i = t.map(function (e) {
            return { chain: [e], id: e };
          });
        i.length > 0;

      ) {
        var a = i.pop(),
          o = a.id,
          r = a.chain;
        if ((s = I[o]) && !s.hot._selfAccepted) {
          if (s.hot._selfDeclined) return { type: "self-declined", chain: r, moduleId: o };
          if (s.hot._main) return { type: "unaccepted", chain: r, moduleId: o };
          for (var l = 0; l < s.parents.length; l++) {
            var c = s.parents[l],
              u = I[c];
            if (u) {
              if (u.hot._declinedDependencies[o]) return { type: "declined", chain: r.concat([c]), moduleId: o, parentId: c };
              -1 === t.indexOf(c) && (u.hot._acceptedDependencies[o] ? (n[c] || (n[c] = []), h(n[c], [o])) : (delete n[c], t.push(c), i.push({ chain: r.concat([c]), id: c })));
            }
          }
        }
      }
      return { type: "accepted", moduleId: e, outdatedModules: t, outdatedDependencies: n };
    }
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        -1 === e.indexOf(i) && e.push(i);
      }
    }
    t = t || {};
    var m = {},
      g = [],
      w = {},
      v = function () {
        console.warn("[HMR] unexpected require(" + x.moduleId + ") to disposed module");
      };
    for (var b in f)
      if (Object.prototype.hasOwnProperty.call(f, b)) {
        var x;
        c = k(b);
        var S = !1,
          C = !1,
          T = !1,
          E = "";
        switch (((x = f[b] ? u(c) : { type: "disposed", moduleId: b }).chain && (E = "\nUpdate propagation: " + x.chain.join(" -> ")), x.type)) {
          case "self-declined":
            t.onDeclined && t.onDeclined(x), t.ignoreDeclined || (S = new Error("Aborted because of self decline: " + x.moduleId + E));
            break;
          case "declined":
            t.onDeclined && t.onDeclined(x), t.ignoreDeclined || (S = new Error("Aborted because of declined dependency: " + x.moduleId + " in " + x.parentId + E));
            break;
          case "unaccepted":
            t.onUnaccepted && t.onUnaccepted(x), t.ignoreUnaccepted || (S = new Error("Aborted because " + c + " is not accepted" + E));
            break;
          case "accepted":
            t.onAccepted && t.onAccepted(x), (C = !0);
            break;
          case "disposed":
            t.onDisposed && t.onDisposed(x), (T = !0);
            break;
          default:
            throw new Error("Unexception type " + x.type);
        }
        if (S) return p("abort"), Promise.reject(S);
        if (C)
          for (c in ((w[c] = f[c]), h(g, x.outdatedModules), x.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(x.outdatedDependencies, c) && (m[c] || (m[c] = []), h(m[c], x.outdatedDependencies[c]));
        T && (h(g, [x.moduleId]), (w[c] = v));
      }
    var z,
      D = [];
    for (i = 0; i < g.length; i++) (c = g[i]), I[c] && I[c].hot._selfAccepted && w[c] !== v && D.push({ module: c, errorHandler: I[c].hot._selfAccepted });
    p("dispose"),
      Object.keys(y).forEach(function (e) {
        !1 === y[e] &&
          (function (e) {
            delete P[e];
          })(e);
      });
    for (var L, O, M = g.slice(); M.length > 0; )
      if (((c = M.pop()), (s = I[c]))) {
        var A = {},
          R = s.hot._disposeHandlers;
        for (a = 0; a < R.length; a++) (n = R[a])(A);
        for (r[c] = A, s.hot.active = !1, delete I[c], delete m[c], a = 0; a < s.children.length; a++) {
          var N = I[s.children[a]];
          N && (z = N.parents.indexOf(c)) >= 0 && N.parents.splice(z, 1);
        }
      }
    for (c in m) if (Object.prototype.hasOwnProperty.call(m, c) && (s = I[c])) for (O = m[c], a = 0; a < O.length; a++) (L = O[a]), (z = s.children.indexOf(L)) >= 0 && s.children.splice(z, 1);
    for (c in (p("apply"), (o = _), w)) Object.prototype.hasOwnProperty.call(w, c) && (e[c] = w[c]);
    var B = null;
    for (c in m)
      if (Object.prototype.hasOwnProperty.call(m, c) && (s = I[c])) {
        O = m[c];
        var U = [];
        for (i = 0; i < O.length; i++)
          if (((L = O[i]), (n = s.hot._acceptedDependencies[L]))) {
            if (-1 !== U.indexOf(n)) continue;
            U.push(n);
          }
        for (i = 0; i < U.length; i++) {
          n = U[i];
          try {
            n(O);
          } catch (e) {
            t.onErrored && t.onErrored({ type: "accept-errored", moduleId: c, dependencyId: O[i], error: e }), t.ignoreErrored || B || (B = e);
          }
        }
      }
    for (i = 0; i < D.length; i++) {
      var V = D[i];
      (c = V.module), (l = [c]);
      try {
        $(c);
      } catch (e) {
        if ("function" == typeof V.errorHandler)
          try {
            V.errorHandler(e);
          } catch (n) {
            t.onErrored && t.onErrored({ type: "self-accept-error-handler-errored", moduleId: c, error: n, originalError: e }), t.ignoreErrored || B || (B = n), B || (B = e);
          }
        else t.onErrored && t.onErrored({ type: "self-accept-errored", moduleId: c, error: e }), t.ignoreErrored || B || (B = e);
      }
    }
    return B
      ? (p("fail"), Promise.reject(B))
      : (p("idle"),
        new Promise(function (e) {
          e(g);
        }));
  }
  var I = {},
    P = { 1: 0 },
    E = [];
  function $(t) {
    if (I[t]) return I[t].exports;
    var n = (I[t] = { i: t, l: !1, exports: {}, hot: u(t), parents: ((c = l), (l = []), c), children: [] });
    return (
      e[t].call(
        n.exports,
        n,
        n.exports,
        (function (e) {
          var t = I[e];
          if (!t) return $;
          var n = function (n) {
              return (
                t.hot.active
                  ? (I[n] ? -1 === I[n].parents.indexOf(e) && I[n].parents.push(e) : ((l = [e]), (a = n)), -1 === t.children.indexOf(n) && t.children.push(n))
                  : (console.warn("[HMR] unexpected require(" + n + ") from disposed module " + e), (l = [])),
                $(n)
              );
            },
            i = function (e) {
              return {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return $[e];
                },
                set: function (t) {
                  $[e] = t;
                },
              };
            };
          for (var s in $) Object.prototype.hasOwnProperty.call($, s) && "e" !== s && "t" !== s && Object.defineProperty(n, s, i(s));
          return (
            (n.e = function (e) {
              return (
                "ready" === d && p("prepare"),
                w++,
                $.e(e).then(t, function (e) {
                  throw (t(), e);
                })
              );
              function t() {
                w--, "prepare" === d && (v[e] || S(e), 0 === w && 0 === g && C());
              }
            }),
            (n.t = function (e, t) {
              return 1 & t && (e = n(e)), $.t(e, -2 & t);
            }),
            n
          );
        })(t)
      ),
      (n.l = !0),
      n.exports
    );
  }
  ($.m = e),
    ($.c = I),
    ($.d = function (e, t, n) {
      $.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    ($.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    ($.t = function (e, t) {
      if ((1 & t && (e = $(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (($.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var i in e)
          $.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    ($.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return $.d(t, "a", t), t;
    }),
    ($.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    ($.p = ""),
    ($.h = function () {
      return o;
    });
  var z = (window.zumPortalJsonp = window.zumPortalJsonp || []),
    D = z.push.bind(z);
  (z.push = t), (z = z.slice());
  for (var L = 0; L < z.length; L++) t(z[L]);
  var O = D;
  E.push([233, 0]), n();
})([
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(63), n(9), n(11), n(62), n(10), n(36), n(13);
      var a = n(5),
        s = n(1),
        o = n(12),
        r = {
          eventName: { bounce: "@Bounce" },
          getStat: function () {
            var e = {};
            return (e.tuid = o.a.get(s.a.Names.userTuid) || ""), e;
          },
        },
        l = {
          eventName: { view: "@PageView", click: "@Click" },
          appendStat: function (t) {
            return e.extend(!0, {}, t, this.getStat());
          },
          getStat: function () {
            var t = {};
            (t.isAuth = s.a.isAuth()), (t.authType = s.a.getAuthType());
            var n = a.a.getLayoutType(zum.page);
            return (
              zum.layout[zum.page].useShopping || ("type_3a" !== n && "type_3b" !== n) || (n += "n"),
              (t.layout = n),
              (t.setbynsis = e.cookie("setbynsis")),
              0 === zum.page ? (t.se = "zum") : (t.se = e("#searchEngineBox .d_choice").prop("title")),
              (t.isKen = "0" !== s.a.getData(s.a.Names.keepEngine)),
              (t.page = zum.page),
              (t.isZumpage = !!zum.zumpageId),
              zum.zumpageId ? (t.isZumpagePublic = !s.a.getData(s.a.Names.zumpagePrivateUrl)) : (t.isZumpagePublic = ""),
              (t.zumpageID = zum.zumpageId ? zum.zumpageId : "0"),
              (t.rbTab = e(".d_issue_tab").find(".on a").data("tab") || ""),
              (t.cbHub = e(".d_hub_cb_contents").data("name")),
              t.cbHub && t.cbHub.indexOf("2") > 0 && (t.cbHub = t.cbHub.substring(0, t.cbHub.length - 1)),
              e(".d_box_hub").hasClass("box_full") || ((t.tbHub = e(".d_hub_tb_contents").data("name")), t.tbHub && t.tbHub.indexOf("2") > 0 && (t.tbHub = t.tbHub.substring(0, t.tbHub.length - 1))),
              (t.isRefresh = !!o.a.get(s.a.Names.pageReload)),
              t.isRefresh && ((window.isRefresh = !0), o.a.remove(s.a.Names.pageReload)),
              (t.tuid = o.a.get(s.a.Names.userTuid) || ""),
              t
            );
          },
        },
        c = {
          eventName: { create: "@ZumpageCreate", click: "@Click" },
          getStat: function () {
            var e = {};
            return (e.zumpageID = zum.zumpageId ? zum.zumpageId : "0"), (e.isZumpageMigration = s.a.getData(s.a.Names.localMigration)), e;
          },
        },
        u = {
          appendStat: function (t) {
            return e.extend(!0, {}, t, this.getStat());
          },
          getStat: function () {
            var e = {};
            return (e.layout = a.a.getLayoutType(zum.page || 0)), (e.hbv = s.a.getData(s.a.Names.homeBoxesVersion)), e;
          },
        },
        h = {
          eventName: { click: "@HubClick", view: "@HubPageView" },
          DATA: { SEARCH: { QM: "g_hub.top" }, HUB_LOWER: { LEFT: 17, RIGHT: 18 } },
          appendStat: function (t) {
            return e.extend(!0, {}, t, this.getStat());
          },
          getStat: function () {
            var e = { hubname: "", hubtype: "", huborder: "" };
            return e;
          },
          appendInnerServiceQueryAtHubItem: function (e, t, n) {
            var i = e.outurl;
            if (this.isInnerServiceInHubModule(i) || this.isSbsNews(i)) {
              var a = e.pos;
              this.has(i, "cm=") || (i = -1 === i.indexOf("?") ? (i = i.concat("?")).concat("cm=", a) : i.concat("&cm=", a)),
                this.has(i, "r=") ? i.replace("r=" + this.getUrlParameter(i, "r"), "r=" + t) : (i = i.concat("&r=", t)),
                this.has(i, "thumb=") ? i.replace("thumb=" + this.getUrlParameter(i, "thumb"), "thumb=" + n) : (i = i.concat("&thumb=", n)),
                (e.outurl = i);
            }
          },
          appendInnerServiceQueryAtHubLowerItem: function (e, t) {
            var n = e.outurl,
              i = e.bannerName;
            if (this.isInnerServiceInHubModule(n)) {
              var a = e.pos,
                s = "",
                o = t.target && "img" == t.target.tagName.toLowerCase() ? 1 : 0;
              this.has(n, "cm=") || (n = -1 === n.indexOf("?") ? (n = n.concat("?")).concat("cm=", a) : n.concat("&cm=", a)),
                "pagebox 1x1" === i ? (s = this.DATA.HUB_LOWER.LEFT) : "pagebox 1x2" === i && (s = this.DATA.HUB_LOWER.RIGHT),
                this.has(n, "r=") ? n.replace("r=" + this.getUrlParameter(n, "r"), "r=" + s) : (n = n.concat("&r=", s)),
                this.has(n, "thumb=") ? n.replace("thumb=" + this.getUrlParameter(n, "thumb"), "thumb=" + o) : (n = n.concat("&thumb=", o)),
                this.has(n, "qm=") || (this.isSearchZum(n) && (n = n.concat("&qm=", this.DATA.SEARCH.QM))),
                (e.outurl = n);
            }
          },
          isInnerServiceInHubModule: function (e) {
            return (
              this.isZumNewsPaper(e) ||
              this.isHubZum(e) ||
              this.isSpoonfeed(e) ||
              this.isCarZum(e) ||
              this.isTvZum(e) ||
              this.isEgloos(e) ||
              this.isSearchZum(e) ||
              this.isCoinZum(e) ||
              this.isIssue(e)
            );
          },
          isHubZum: function (e) {
            return e.indexOf("hub.zum.com") > -1;
          },
          isZumNewsPaper: function (e) {
            return e.indexOf("zum.com/#!/v=2") > -1;
          },
          isIssue: function (e) {
            return e.indexOf("issue.zum.com") > -1;
          },
          isTvZum: function (e) {
            return e.indexOf("tv.zum.com") > -1;
          },
          isCarZum: function (e) {
            return e.indexOf("auto.zum.com") > -1;
          },
          isSearchZum: function (e) {
            return e.indexOf("search.zum.com") > -1;
          },
          isSpoonfeed: function (e) {
            return e.indexOf("spoonfeed.hub.zum.com") > -1;
          },
          isCoinZum: function (e) {
            return e.indexOf("coin.zum.com") > -1;
          },
          isEgloos: function (e) {
            return e.indexOf("egloos.com") > -1;
          },
          isSbsNews: function (e) {
            return e.indexOf("news.sbs.co.kr") > -1;
          },
          has: function (e, t) {
            return e.indexOf("?" + t) > -1 || e.indexOf("&" + t) > -1;
          },
          getUrlParameter: function (e, t) {
            return new RegExp("[?&]" + t + "=([^&#]*)").exec(e)[1] || 0;
          },
        },
        d = {
          eventName: { click: "@Click" },
          pos: "front_today",
          cm: {
            issue: { keyword: "issue_keyword", tab: "issue_tab", paging: "issue_paging" },
            weather: { keyword: "weather_keyword", tab: "weather_tab", paging: "weather_paging" },
            fortune: { keyword: "fortune_keyword", tab: "fortune_tab", paging: "fortune_paging", info: "fortune_info", infoMore: "fortune_info_more", all: "fortune_all" },
            stock: { keyword: "stock_keyword", tab: "stock_tab", paging: "stock_paging" },
            shopping: { keyword: "shopping_keyword", tab: "shopping_tab", paging: "shopping_paging" },
            keyword: { alertClose: "alert_close", fetchPrivate: "fortune_private", private: "private_switch", animal: "animal_switch", star: "star_switch" },
            more_info: { weather_switch: "weather_switch", stock_switch: "stock_switch" },
            more_btn: { weather_open: "weather_open", weather_close: "weather_close", stock_open: "stock_open", stock_close: "stock_close" },
          },
          appendStat: function (t) {
            return e.extend(!0, {}, this.getStat(), t);
          },
          getStat: function () {
            var e = { pos: "front_today" };
            return e;
          },
        },
        p = {
          eventName: { scroll: "@ScrollToBottom" },
          getStat: function () {
            var t = {};
            if (
              ((t.cbHub = e(".d_hub_cb_contents").data("name")),
              t.cbHub && t.cbHub.indexOf("2") > 0 && (t.cbHub = t.cbHub.substring(0, t.cbHub.length - 1)),
              (t.tuid = o.a.get(s.a.Names.userTuid) || ""),
              (t.rbTab = e(".d_issue_tab").find(".on a").data("tab") || ""),
              "dev" !== zum.profile)
            )
              try {
                t.sbTab = i("#iframe_shopping").contents().find(".d_shopping_box_wrap ul .on a").data("pos") || "";
              } catch (e) {
                t.sbTab = "";
              }
            return t;
          },
        };
      t.a = {
        send: function (t, n, i) {
          t.indexOf("@") < 0 && (t = "@" + t);
          var a = zum.codeVersion || "lego_0_0_0_T",
            s = e.extend(!0, {}, { codeVersion: a, puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] }, n);
          if (
            (t.indexOf("PageView") > 0 && (s.isActiveTab = document.hasFocus() ? "True" : "False"),
            (t.indexOf("Click") > 0 || t.indexOf("BannerMoveUrl") > 0 || t.indexOf("ShoppingZumTodayClick") > 0) && i)
          ) {
            var o = i.clientX,
              r = i.clientY,
              l = i.pageX,
              c = i.pageY;
            null != o && null != r && null != l && null != c && (s = e.extend(!0, s, { sx: o, sy: r, px: l, py: c }));
          }
          null == s.page && (s.page = zum.page || 0),
            void 0 !== s.outurl && 0 === s.outurl.indexOf("//") && (s.outurl = window.location.protocol + s.outurl),
            void 0 !== ESTatTracker && null !== ESTatTracker && ESTatTracker.push([t, s]);
        },
        ZumStat: l,
        ZumPageStat: c,
        HubStat: h,
        AdStat: { eventName: { click: "@BannerMoveUrl", pageView: "@BannerPageView" } },
        ShoppingStat: u,
        WidgetStat: { eventName: { appDelete: "@AppDelete", appInsert: "@AppInsert" } },
        StatMaker: {
          buttonStat: function (e) {
            return { pos: e.data("pos") || "", cm: e.data("cm") || "", order: e.data("order") || "", outurl: e.attr("href") || e.data("url") || "" };
          },
          logoStat: function (e) {
            return { pos: "zum_logo", cm: "", outurl: e.attr("href") };
          },
          miniLogoStat: function (e) {
            return { pos: "front_miniheader", cm: "zum_logo", outurl: e.attr("href") };
          },
        },
        RankingBoxStat: d,
        FavoriteStat: { eventName: { click: "@FavoriteClick", view: "@FavoritePageView" }, pos: { shopping: "front_shopping", site: "front_site" } },
        ScrollToBottomStat: p,
        ShoppingBannerStat: {
          eventName: { view: "@BannerPageView", click: "@BannerMoveUrl", clickBtn: "@Click" },
          adGroup: "",
          adMode: "basic",
          adType: "img",
          pos: "bn_shoppingbox_bottom",
          posBtn: "pn_shoppingbox_bottom",
          cm: "banner",
        },
        ShoppingFillerBannerStat: {
          eventName: { view: "@BannerPageView", click: "@BannerMoveUrl", clickBtn: "@Click" },
          adGroup: "",
          adMode: "basic",
          adType: "img",
          pos: "bn_shoppingbox_bottom",
          posBtn: "pn_shoppingbox_bottom",
          cm: "filler",
        },
        BigbannerStat: { eventName: { view: "@BannerPageView", click: "@BannerMoveUrl" }, outurl: "https://news.zum.com", pos: "bn_lefttop_big", cm: "filler" },
        BrandingWidgetStat: { eventName: { view: "@BannerPageView", click: "@BannerMoveUrl" }, outurl: "https://news.zum.com", pos: "bn_brwidget_big", cm: "filler" },
        Bounce: r,
        ArticleStat: { eventName: { scroll: "@DocumentScroll", module: "@ModuleView" } },
        Suggest: { eventName: { view: "@SuggestPageView", click: "@SuggestMove" } },
        DoodleStat: {
          eventName: { click: "@BannerMoveUrl", show: "@BannerPageView" },
          data: { doodle_left: { cm: "banner", pos: "zum_main_doodle_default_left" }, doodle_right: { cm: "banner", pos: "zum_main_doodle_default_right" } },
        },
        HubScrollViewStat: { eventName: { view: "@HubScrollView" } },
        NativeADStat: { eventName: { view: "@NativeAdView" }, bannerName: { hub: "native_hub", hottopic: "native_hottopic" } },
      };
    }.call(this, n(3), n(3)));
  },
  function (e, t, n) {
    "use strict";
    var i = null;
    function a() {
      this.initialize();
    }
    (a.prototype = {
      initialize: function () {
        var e = zum.userData;
        delete zum.userData,
          (this.Names = {
            userTuid: "_TUID",
            userZuid: "_ZUID",
            useUserZuid: "bakeryStamp",
            isDefaultSetting: "dfset3",
            setbynsis: "setbynsis",
            zumpageVisitedUser: "pvu",
            zumpagePrivateUrl: "pri",
            viewTutorialHome: "vthome2",
            viewTutorialMyzum: "vtmy2",
            viewTutorialMyzumLayer: "vtmy3",
            linkTarget: "lt",
            searchTarget: "st",
            homeBoxesVersion: "hbv",
            homeBoxes: "hbx",
            homePrefs: "hpfs",
            engines: "eng",
            selEngine: "se",
            keepEngine: "ken",
            theme: "thm",
            page: "p",
            homePage: "hp",
            layout: "lo",
            boxes: "bx",
            prefs: "pfs",
            useShopping: "lus",
            autoLogin: "rmmData",
            homeLayout: "hlo",
            homeUseShopping: "hlus",
            fullBoxes: "mbx",
            maxPageCount: "mxp",
            appstoreThemeUsed: "atu",
            useNewsRemocon: "unr",
            useNewsRemoconPopup: "unrp",
            pageReload: "pr",
            zumpageUpdateDate: "zpud",
            zumpageOwner: "onr",
            shoppingRecentProducts: "srp",
            hubStockView: "hsv",
            homeMigrationDate: "hmd",
            localMigration: "lzm",
            myFavoriteSite: "mfs",
            isFavoriteSiteChanged: "ifsc",
          }),
          (this.isAuth = function () {
            return e.isAuth;
          }),
          (this.getAuthType = function () {
            return e.authType;
          }),
          (this.isHomeFirstUser = function () {
            return !this.isAuth() && e.isHomeFirstUser;
          }),
          (this.isHomeFirstAllUser = function () {
            return e.isHomeFirstUser;
          }),
          (this.isZumpageVisitedUser = function () {
            return e.isZumpageVisitedUser;
          }),
          (this.getData = function (t) {
            var n = e[t];
            return (null !== e[t] && void 0 !== e[t] && 0 != e[t].length) || (n = null), n;
          }),
          (this.setData = function (t, n) {
            e[t] = n;
          });
      },
    }),
      (t.a = (i || (i = new a()), i));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var n = e.View.extend({ initialize: function () {} });
      t.a = new n({});
    }.call(this, n(4)));
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(27), n(28), n(29), n(24), n(46), n(21), n(10), n(30), n(23), n(26), n(17);
      var s = n(12),
        o = n(1),
        r = n(2),
        l = n(158);
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      var u = {},
        h = {},
        d = [],
        p = !1,
        m = !1,
        f = null,
        _ = parseInt(zum.settings.base[o.a.Names.maxPageCount]) || 10,
        g = 1,
        w = function (e) {
          (u[e] = u[e] || {}), (u[e].type = zum.layout[e].type), (u[e].useShopping = zum.layout[e].useShopping), (u[e].useNews = zum.layout[e].useNews);
        },
        v = function () {
          u[0] = u[0] || {};
          var e = I(o.a.Names.homeBoxes),
            t = I(o.a.Names.homePrefs) || "null";
          (u[0].type = "type_" + zum.settings.base[o.a.Names.homeLayout]), (u[0].useShopping = parseInt(zum.settings.base[o.a.Names.homeUseShopping]));
          var n = parseInt(u[0].type.substr(5, 1), 10);
          (u[0].useNews = 3 === n ? 1 : 0), (u[0].boxes = y(e, 0, n));
          try {
            u[0].prefs = JSON.parse(t);
          } catch (e) {
            u[0].prefs = null;
          }
          var i = I(o.a.Names.boxes) || "",
            a = I(o.a.Names.prefs),
            s = I(o.a.Names.layout) || "",
            r = I(o.a.Names.useShopping) || "",
            l = i.split("$"),
            c = [];
          try {
            c = JSON.parse(a);
          } catch (e) {}
          var h = s.split("$"),
            d = r.split("$");
          (g = l.length), "" === i && (g = 0), g > _ && (g = _);
          for (var p = 0; p < Math.min(g + 1, _ + 1); ++p) {
            (u[p + 1] = u[p + 1] || {}),
              (u[p + 1].type = h[p] || zum.settings.base[o.a.Names.layout]),
              "3a" !== u[p + 1].type && "3b" !== u[p + 1].type && "4" !== u[p + 1].type && "5" !== u[p + 1].type && (u[p + 1].type = zum.settings.base[o.a.Names.layout]),
              (u[p + 1].type = "type_" + u[p + 1].type);
            var m = null;
            try {
              m = parseInt(u[p + 1].type.substr(5, 1), 10);
            } catch (e) {
              m = 3;
            }
            var f = null;
            try {
              f = parseInt(d[p] || zum.settings.base[o.a.Names.useShopping]);
            } catch (e) {
              f = 1;
            }
            (u[p + 1].useShopping = 0 === f ? 0 : 1),
              (u[p + 1].useNews = 3 === m ? 1 : 0),
              l[p] ? (u[p + 1].boxes = y(l[p], p + 1, m)) : (u[p + 1].boxes = y(zum.settings.base[o.a.Names.fullBoxes].split("$")[0], p + 1, m)),
              (u[p + 1].prefs = null == c ? null : c[p] || null);
          }
        },
        b = function (e, t) {
          for (var n = [], i = 0; i < e * (3 === e ? (0 === t ? 2 : 5) : 0 === t ? 2 : 4); ++i) n.push("0");
          return n.join("|");
        },
        y = function (e, t, n) {
          var i = [];
          if (e) {
            if ("_" === e) {
              if (0 === t) return zum.settings.base[o.a.Names.homeBoxes];
              var a = zum.settings.base[o.a.Names.fullBoxes].split("$");
              return a[t] ? a[t] : b(n, t);
            }
            var s = e.split("|");
            if (0 === s.length) return b(n, t);
            for (var r = 0, l = k(t, n), c = Math.max(s.length, l), u = 0; u < c; ++u) {
              var h = 1;
              if (s.length <= u) {
                if (l >= r || r % n == 0) break;
                i.push("0"), (r += h);
              } else {
                var d = s[u],
                  p = "0";
                if ((d && d.length > 0 ? (p = d.substr(0, 1)) : (d = "0"), "A" === p && (r % n == n - 1 ? ((d = "0"), (p = "0"), u--) : (h = 2)), l < (r += h))) break;
                i.push(d);
              }
            }
            if (0 === t && r < l) for (u = r; u < l; ++u) i.push("0"), r++;
            if (t >= 1) {
              if (r < l) for (u = r; u < l && u % n != 0; ++u) i.push("0"), r++;
              var m = Math.min(i.length, r),
                f = 5 * n;
              if ((3 === n ? (f = 18) : 4 === n ? (f = 16) : 5 === n && (f = 20), r >= f)) {
                var _ = 0;
                for (u = m - 1; u >= 0 && !(f >= r - _); u--) {
                  if ("0" !== (p = i[u].substring(0, 1))) break;
                  _++;
                }
                if ((_ -= _ % n) > 0) for (u = m - 1; u >= m - _; u--) i.pop();
              }
            }
            return i.join("|");
          }
          return b(n, t);
        },
        k = function (e, t) {
          if (0 === e) {
            switch (t) {
              case 3:
                return 6;
              case 4:
                return 8;
              case 5:
                return 10;
            }
            return 6;
          }
          switch (t) {
            case 3:
            case 4:
              return 24;
            case 5:
              return 25;
          }
          return 0;
        },
        x = function (e) {
          if (!e || "string" != typeof e) return !0;
          var t = e.split("|");
          if (0 === t.length) return !0;
          for (var n = !0, i = 0; i < t.length; ++i) if (!(n = n && ("0" === t[i] || "" === t[i]))) return n;
          return n;
        },
        S = function () {
          return g;
        },
        C = function (t, n) {
          var i = o.a.Names.page;
          s.a.set(i, t), (zum.page = t), e.isFunction(n) && n.apply(window);
        },
        T = function (e) {
          var t = e || zum.page,
            n = o.a.Names.homeBoxesVersion;
          0 == t &&
            (h[n] = (function (e) {
              var t = o.a.getData(e);
              try {
                isNaN(t) || (t = parseInt(t, 10) + "|change");
              } catch (e) {}
              return t;
            })(n));
        },
        I = function (e) {
          var t = o.a.getData(e);
          return (null !== o.a.getData(e) && void 0 !== o.a.getData(e) && 0 !== o.a.getData(e).length) || (t = null), t;
        },
        P = null,
        E = function (t, n, a, r) {
          if (zum.readonly) e.isFunction(r) && r.apply(window, [!1]);
          else {
            var l = e.keys(h).length;
            if (t === o.a.Names.boxes || t === o.a.Names.prefs || t === o.a.Names.homeBoxes || t === o.a.Names.homePrefs) {
              var c = !1;
              if (t === o.a.Names.boxes) (n || "").split("$")[0] === zum.settings.base[o.a.Names.fullBoxes] && (c = !0);
              if (t === o.a.Names.prefs) {
                var u = [];
                try {
                  u = JSON.parse(n);
                } catch (e) {}
                if ((u = null == u ? null : u[0] || null)) {
                  var m = !0;
                  for (var f in u)
                    if (u.hasOwnProperty(f) && null !== u[f] && void 0 !== u[f]) {
                      m = !1;
                      break;
                    }
                  c = m;
                } else c = !0;
              }
              c || t === o.a.Names.boxes || t === o.a.Names.prefs || T(0);
            }
            if (!o.a.isAuth())
              try {
                "session" === (a = void 0 === a ? 3650 : a) && s.a.set(t, n, { path: "/" });
              } catch (e) {}
            e.isFunction(r) && d.push(r), (h[t] = n), p || 0 !== l || ((P = i.Deferred()), setTimeout($, 500));
          }
        },
        $ = function () {
          var e = a.param(h);
          if (0 !== e.length && !m)
            for (var t in ((m = !0),
            (p = !0),
            s.a.set(o.a.Names.isDefaultSetting, "0"),
            a.ajax({
              type: "POST",
              url: "/user/settings?lm=" + new Date().getTime() + "&from=" + zum.zumpageId,
              timeout: zum.settings.svto || 8e3,
              data: e,
              dataType: "json",
              success: z,
              error: D,
              context: this,
            }),
            (f = d),
            (d = []),
            h))
              h.hasOwnProperty(t) && delete h[t];
        },
        z = function (e, t, n) {
          if (((m = !1), null != P && (P.resolve(), (P = null)), e.success)) {
            var i = e.result;
            for (var r in i) i.hasOwnProperty(r) && o.a.setData(r, i[r]);
            var l = e.cookie;
            if (l) for (var c = 0; c < l.length; c++) l[c] && l[c][0] !== o.a.Names.useUserZuid && s.a.set(a, l[c]);
            var u = e.result[o.a.Names.useUserZuid];
            u && (zum.bakeryStamp = u);
            e.result[o.a.Names.isDefaultSetting];
          }
          p = !1;
          for (var d = f.shift(); d; ) d.apply(window, [!0, arguments]), (d = f.shift());
          for (var r in h) if (h.hasOwnProperty(r)) return (p = !0), void setTimeout($, 300);
        },
        D = function (e, t, n) {
          (m = !1), null != P && (P.resolve(), (P = null));
          for (var i = f.shift(); i; ) i.apply(window, [!1, arguments]), (i = f.shift());
          alert("데이터 저장에 실패하였습니다. 새로고침(F5) 후 다시 시도 해 주세요"), (p = !1);
          for (var a in h) if (h.hasOwnProperty(a)) return (p = !0), void setTimeout($, 300);
        },
        L = function () {
          return Math.min(S(), _);
        },
        O = function (e) {
          if (void 0 === e) e = zum.page;
          else if (isNaN(e)) e = zum.page;
          else
            try {
              ((e = parseInt(e)) < 0 || e > L()) && (e = zum.page);
            } catch (t) {
              e = zum.page;
            }
          return e;
        },
        M = function (e) {
          return (e = O(e)), u[e].type;
        },
        A = function (e, t, n) {
          t = O(t);
          var i = R(t, e);
          if (0 === t) E(o.a.Names.homeBoxes, e, void 0, i);
          else {
            for (var a = [], s = 1; s <= g; ++s) {
              var r = "";
              (r = s === t ? e : u[s].boxes), a.push("object" === c(r) ? JSON.stringify(r) : r);
            }
            E(o.a.Names.boxes, a.join("$"), void 0, i);
          }
        },
        R = function (e, t) {
          return function (n, i) {
            if (n && i[0].success) return (u[e].boxes = t), void r.a.trigger("reset:container", e);
          };
        },
        N = function (e, t, n) {
          if (((t = O(t)), n || !x(u[t].boxes))) {
            t > g && V(!0);
            var i = B(t, e);
            if (0 === t) E(o.a.Names.homePrefs, JSON.stringify(e), void 0, i);
            else {
              for (var a = [], s = 1; s <= g; ++s) s === t ? a.push(e) : a.push(u[s].prefs);
              E(o.a.Names.prefs, JSON.stringify(a), void 0, i);
            }
          }
        },
        B = function (e, t) {
          return function (n, i) {
            if (n && i[0].success) return (u[e].prefs = t), void r.a.trigger("reset:container", e);
          };
        },
        U = function (e) {
          return function (t, n) {
            if (t && n[0].success)
              return (
                (function (e) {
                  for (var t = e; t <= g + 1; ++t) u[t + 1] ? (u[t] = u[t + 1]) : (u[t] = void 0);
                  delete u[g + 1], g--;
                })(e.page),
                void r.a.trigger("hide:container", e.page)
              );
          };
        },
        V = function (e) {
          if (g !== _) {
            if (++g !== _ + 1) {
              (u[(a = g) + 1] = {}), (u[a + 1].type = "type_" + zum.settings.base[o.a.Names.layout]);
              var t = parseInt(u[a + 1].type.substr(5, 1), 10),
                n = parseInt(zum.settings.base[o.a.Names.useShopping]);
              (u[a + 1].useShopping = 0 === n ? 0 : 1), (u[a + 1].useNews = 3 === t ? 1 : 0), (u[a + 1].boxes = zum.settings.base[o.a.Names.boxes]), (u[a + 1].prefs = null);
            }
            for (var i = [], a = 1; a <= g; ++a) i.push(u[a].type.substr(5));
            E(o.a.Names.layout, i.join("$")), e || (A(zum.settings.base[o.a.Names.boxes], g), N("", g));
          }
        };
      w(zum.page),
        v(),
        (t.a = {
          getMyzumPageCount: S,
          getPromise: function () {
            return P;
          },
          getMaxPage: function () {
            return _;
          },
          setPage: C,
          setBoxes: A,
          setPrefs: N,
          getData: I,
          setData: E,
          resetData: function (t, n, i) {
            zum.readonly
              ? e.isFunction(i) && i.apply(t)
              : a.ajax({
                  type: "POST",
                  url: "/user/reset",
                  timeout: 5e3,
                  data: { from: zum.zumpageId },
                  dataType: "json",
                  success: function (i) {
                    if (i.success) {
                      var a = i.result;
                      if (!o.a.isAuth()) {
                        for (var s in a) a.hasOwnProperty(s) && o.a.setData(s, a[s]);
                        C(0);
                        i.result[o.a.Names.isDefaultSetting];
                      }
                      var r = a[o.a.Names.useUserZuid];
                      "0" !== r && (zum.bakeryStamp = r);
                    }
                    e.isFunction(n) && n.apply(t, arguments);
                  },
                  error: function (n, a, s) {
                    e.isFunction(i) && i.apply(t, arguments);
                  },
                  context: t,
                });
          },
          getColType: function (e) {
            return (e = O(e)), parseInt(M(e).substr(5, 1), 10);
          },
          _newMyzumPage: V,
          getLayoutType: M,
          getUseShopping: function (e) {
            return (e = O(e)), u[e].useShopping;
          },
          setHomepage: function (e) {
            return (
              (document.body.style.behavior = "url(#default#homepage)"),
              document.body.setHomePage(location.protocol + "//" + location.host + (zum.zumpageId ? "/" + zum.zumpageId : "")),
              zum.browser.msie && !e && l.a.open(),
              !1
            );
          },
          removeShrinkPage: function (e) {
            if (!(0 === (e = O(e)) || e > g)) {
              C(e);
              for (var t = U({ page: e }), n = [], i = [], a = [], s = [], r = 1; r <= g; ++r)
                e !== r && (n.push(u[r].type.substr(5)), i.push(u[r].useShopping), a.push(u[r].boxes), s.push(u[r].prefs));
              E(o.a.Names.layout, n.join("$")),
                E(o.a.Names.boxes, a.join("$")),
                E(o.a.Names.prefs, JSON.stringify(s)),
                E(o.a.Names.useShopping, i.join("$"), void 0, t),
                I(o.a.Names.homePage) == e
                  ? zum.zumpageId
                    ? E(o.a.Names.homePage, 1)
                    : E(o.a.Names.homePage, 0)
                  : I(o.a.Names.homePage) == g
                  ? E(o.a.Names.homePage, g - 1)
                  : e < I(o.a.Names.homePage) && E(o.a.Names.homePage, I(o.a.Names.homePage) - 1);
            }
          },
          safePage: O,
          setLayoutType: function (e, t, n) {
            for (var i = [], a = 1; a <= g; ++a) a === e ? i.push(t) : i.push(u[a].type.substr(5));
            E(o.a.Names.layout, i.join("$"), void 0, n);
          },
          setUseShopping: function (e, t, n) {
            for (var i = [], a = 1; a <= g; ++a) a === e ? i.push(t) : i.push(u[a].useShopping);
            E(o.a.Names.useShopping, i.join("$"), void 0, n);
          },
          initializePageData: w,
        });
    }.call(this, n(8), n(3), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, n) {
      t.a = {
        movePage: function (t, n) {
          if ((this._inWaitingMovePage && (this._inWaitingMovePage = !1), n || (n = "_top"), "Gecko" === navigator.product)) return window.open(t, n);
          var i = document.createElement("a");
          i.setAttribute("href", t), i.setAttribute("target", n), (i.style.display = "none"), document.getElementsByTagName("body")[0].appendChild(i);
          try {
            i.click();
          } catch (t) {
            e(i).click();
          }
          return !0;
        },
        getAjaxCommonRequestParam: function () {
          var t = {};
          return (
            n.isUndefined(zum.previewKey) ||
              n.isUndefined(zum.previewTimestamp) ||
              n.isUndefined(zum.previewModuleKey) ||
              ((t.preview_key = zum.previewKey), (t.timestamp = zum.previewTimestamp), (t.module_key = zum.previewModuleKey)),
            n.isUndefined(zum.devModuleContentsParam) || (t.dmc = zum.devModuleContentsParam),
            n.isUndefined(window.puid) || (t.puid = window.puid),
            n.isUndefined(window.variantsParam) || (t.variants = window.variantsParam),
            n.isUndefined(window.targets) || (t.targetValues = window.targets),
            e.extend({}, t, { from: zum.zumpageId || "", p: zum.page || 0 })
          );
        },
      };
    }.call(this, n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    n(9), n(11), n(62), n(10), n(36), n(13), n(87);
    var i = function (e) {
      e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
      return null == t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
    };
    t.a = {
      searchTarget: "1",
      engines: "",
      selEngine: "",
      keepEngine: "0",
      engineMap: { 0: "zum", 1: "naver", 2: "daum", 3: "google" },
      getParam: i,
      addExtraParams: function (e) {
        var t = i("af");
        if (e && "string" == typeof e) 0 === e.indexOf("https://search.zum.com/search.zum") && t && (e += "&sm=" + t);
        else {
          var n = e.find(".d_sm");
          t ? (n.length > 0 ? n.remove() : e.append('<input type="hidden" class="d_sm" name="sm" value="' + t + '">')) : n.remove();
        }
        return e;
      },
      enableSearchboxKeydown: function () {
        zum.documentKeyDownHookForSearchBox = !0;
      },
      disableSearchboxKeydown: function () {
        zum.documentKeyDownHookForSearchBox = !1;
      },
    };
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      t.a = {
        get: function (t) {
          return e.cookie(t);
        },
        remove: function (t) {
          return e.cookie(t, "", { expires: -1, path: "/" });
        },
        set: function (t, n, i) {
          var a = { expires: (i && i.expires) || 3650, path: (i && i.path) || "/" };
          i && i.domain && (a.domain = i.domain), e.cookie(t, n, a);
        },
      };
    }.call(this, n(3)));
  },
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(7),
        s = new (e.View.extend({
          layers: {},
          initialize: function () {
            var e = this;
            (this.$layerMask = i("#layer_mask")),
              (this.$layerMaskUnder = i("#layer_mask_under")),
              this.$layerMask.on("dblclick", function (t) {
                e.hideAll();
              });
          },
          addLayer: function (e, t) {
            (this.layers[e] = t), this.$el.append(t.$el);
          },
          isShown: function () {
            var e = this,
              t = !1;
            return (
              i.each(this.layers, function (n, i) {
                if (e.isShownByKey(n)) return (t = !0), !1;
              }),
              t
            );
          },
          isShownByKey: function (e) {
            return this.layers[e] && this.layers[e].$el.is(":visible");
          },
          get: function (e) {
            return this.layers[e];
          },
          showCommon: function (e) {
            var t = this.isShownByKey(e);
            this.$el.show(), this.layers[e] && (this.layers[e].$el.show(), t || this.trigger("layershow:" + e, this.layers[e])), a.a.disableSearchboxKeydown();
          },
          show: function (e) {
            this.$layerMask.show(), this.showCommon(e);
          },
          showFavorite: function (e) {
            this.$layerMaskUnder.show(), this.showCommon(e);
          },
          hide: function (e) {
            var t = this.isShownByKey(e);
            a.a.enableSearchboxKeydown(), this.layers[e] && (t && this.trigger("layerhide:" + e, this.layers[e]), this.layers[e].$el.hide()), this.$el.hide(), this.$layerMask.hide();
          },
          hideAll: function () {
            var e = !0;
            for (var t in this.layers)
              this.layers.hasOwnProperty(t) &&
                this.layers[t] &&
                this.isShownByKey(t) &&
                (this.layers[t].preventClose ? (e = !1) : (this.trigger("layerhide:" + t, this.layers[t]), this.layers[t].$el.hide()));
            e && (a.a.enableSearchboxKeydown(), this.$el.hide(), this.$layerMask.hide());
          },
        }))({ el: i("#wrap > #layer") });
      t.a = s;
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(9);
      var a = n(0),
        s = (function () {
          function t() {
            window.articleInfo = {
              articleOnLoad: !1,
              articleTopReady: !1,
              commentOnLoad: !1,
              sendScrollView: !1,
              sendModuleView: !1,
              currentScroll: 0,
              percentLevel: 0,
              percentMeasure: 0,
              distance: 0,
              articleEnd: 0,
              commentEnd: 0,
              articleHeight: 0,
              commentHeight: 0,
              newsBoxViewTop: 0,
              stat: {},
              mdList: [],
            };
          }
          function n() {
            return window.articleInfo.articleOnLoad && window.articleInfo.articleTopReady;
          }
          function s() {
            return window.articleInfo.sendScrollView;
          }
          function o(t) {
            window.articleInfo.commentOnLoad &&
              !window.articleInfo.sendModuleView &&
              window.articleInfo.commentEnd <= t &&
              (a.a.send(a.a.ArticleStat.eventName.module, e.extend({}, window.articleInfo.stat, { mdList: window.articleInfo.mdList })), (window.articleInfo.sendModuleView = !0));
          }
          function r(t, n) {
            a.a.send(
              a.a.ArticleStat.eventName.scroll,
              e.extend({}, window.articleInfo.stat, { scrollHeight: t - window.articleInfo.distance, documentHeight: window.articleInfo.articleHeight, ad_close: n })
            );
          }
          t(),
            (window.articleOnLoad = e.bind(function (t) {
              t.stat &&
                t.articleHeight &&
                (e.extend(window.articleInfo, { stat: t.stat }),
                (window.articleInfo.articleHeight = t.articleHeight),
                (window.articleInfo.articleEnd += t.articleHeight),
                (window.articleInfo.commentEnd += t.articleHeight),
                (window.articleInfo.percentMeasure = window.articleInfo.articleHeight / 4),
                (window.articleInfo.articleOnLoad = !0),
                l(i(window).height() + i(window).scrollTop()));
            }, this)),
            (window.commentOnLoad = e.bind(function (e) {
              window.articleInfo.commentHeight != e &&
                ((window.articleInfo.commentEnd = window.articleInfo.commentEnd - window.articleInfo.commentHeight + e),
                (window.articleInfo.commentHeight = e),
                (window.articleInfo.commentOnLoad = !0),
                l(i(window).height() + i(window).scrollTop()));
            }, this)),
            (window.articleTopReady = e.bind(function (e) {
              window.articleInfo.newsBoxViewTop <= 0 && (window.articleInfo.newsBoxViewTop = i(document).find("#box_news_view").offset().top),
                (window.articleInfo.currentScroll = window.articleInfo.distance = window.articleInfo.newsBoxViewTop + e),
                (window.articleInfo.articleEnd += window.articleInfo.distance),
                (window.articleInfo.commentEnd += window.articleInfo.distance),
                (window.articleInfo.articleTopReady = !0),
                l(i(window).height() + i(window).scrollTop());
            }, this)),
            (window.addMdList = e.bind(function (e) {
              window.articleInfo.mdList.push(e);
            }, this)),
            (window.changeFontSize = e.bind(function (e) {
              (window.articleInfo.articleEnd -= window.articleInfo.articleHeight + e),
                (window.articleInfo.commentEnd -= window.articleInfo.articleHeight + e),
                (window.articleInfo.articleHeight = e),
                (window.articleInfo.percentMeasure = window.articleInfo.articleHeight / 4),
                l(i(window).height() + i(window).scrollTop());
            }, this));
          var l = function (e) {
            if (n())
              if (s()) o(e);
              else if (window.articleInfo.articleEnd < e) r(window.articleInfo.articleEnd, !1), (window.articleInfo.sendScrollView = !0), o(e);
              else if (window.articleInfo.currentScroll < e) {
                window.articleInfo.currentScroll = 100 * (parseInt((e - window.articleInfo.distance) / 100, 10) + 1) + window.articleInfo.distance;
                var t = window.articleInfo.currentScroll - window.articleInfo.distance;
                window.articleInfo.percentLevel < 3 &&
                  (window.articleInfo.percentLevel + 1) * window.articleInfo.percentMeasure <= t &&
                  ((window.articleInfo.percentLevel = parseInt(t / window.articleInfo.percentMeasure, 10)),
                  r(window.articleInfo.percentLevel * window.articleInfo.percentMeasure + window.articleInfo.distance, !1),
                  window.articleInfo.percentLevel > 3 && ((window.articleInfo.sendScrollView = !0), o(e)));
              }
          };
          return {
            checkAndSendScrollStat: e.bind(l, this),
            sendAndCloseScrollStat: e.bind(function () {
              n() && !s() && r(window.articleInfo.currentScroll, !0), t();
            }, this),
          };
        })();
      t.a = { Article: s };
    }.call(this, n(8), n(3)));
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(11);
      var a = n(0),
        s = function (e, t, n) {
          a.a.send(e, t, n);
        };
      t.a = {
        push: function (e, t, n) {
          s(e, t, n);
        },
        click: function (t, n) {
          var a = {};
          if (n && n.target && n.type && "click" == n.type) {
            var o,
              r,
              l = e(n.target).closest("a");
            if (l && (l.attr("href").indexOf("/issues/") >= 0 ? (a.outurl = l.attr("href") + "/?cm=nb_article_view") : (a.outurl = l.attr("href")), 0 === a.outurl.indexOf("#"))) {
              var c = window.location.href;
              a.outurl = c.substring(0, c.indexOf("#")) + a.outurl;
            }
            a.bucketId = (null === (o = window.units) || void 0 === o || null === (r = o.bucketId) || void 0 === r ? void 0 : r.value) || "default";
          }
          s("@Click", i.extend(a, t), n);
        },
      };
    }.call(this, n(3), n(8)));
  },
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(11), n(10), n(13), n(23);
      t.a = {
        changeNewsLink: function (t, n) {
          var a = "",
            s = null;
          if (t.target) {
            if ((s = e(t.target).closest("a")[0]).__newsLinkChanged) return s.href;
            (s.__newsLinkChanged = !0), (a = s.href);
          } else "string" == typeof t && (a = t);
          var o = a.indexOf("?");
          if (a.indexOf("//news.zum.com/photo") <= -1 && -1 !== a.indexOf("//news.zum.com") && o > -1) {
            var r = a.substr(o + 1).split("&"),
              l = {};
            if (r && r.length > 0)
              for (var c = 0; c < r.length; c++)
                if (r[c]) {
                  var u = r[c].split("=");
                  u && 2 == u.length && (l[u[0]] = u[1]);
                }
            ((l = i.extend(l, n)).news = l.id), "front_rb_popular" == l.cm && (l.fm = "mny"), delete l.id, (a = location.href.replace(location.hash, "") + "#!/" + e.param(l));
          }
          return s && (s.href = a), a;
        },
      };
    }.call(this, n(3), n(8)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(9), n(10), n(13), n(59), n(17);
      var a = n(5),
        s = n(1),
        o = n(60),
        r = n(42),
        l = e.View.extend({
          initialize: function () {
            this.events = { "click .close": "onClickClose" };
          },
          onHash: function (e) {
            if (e && e.hasOwnProperty("appstore") && "0" != zum.settings.eaa) {
              var t = e.appstore;
              switch (
                ((this.outfrom = e.ref),
                "detail" != t &&
                  (this.once("installError:appstore:removed", this.errorRemoved),
                  this.once("installError:appstore:notPublic", this.errorNotPulic),
                  this.once("installError:appstore:loadFail", this.errorLoadFail),
                  this.once("installError:appstore:onlyhome", this.errorOnlyHome),
                  this.once("installError:appstore:lackdouble", this.errorLackDouble),
                  this.once("installError:appstore:notExists", this.errorRemoved),
                  this.once("installComplete:appManager", this.completeR)),
                t)
              ) {
                case "detail":
                  var n = e.id;
                  this._ZUMAPP_PATTERN.test(n) ? r.a.openAppDetail(n) : this.error(this.ENUM_NOTICE.REQUEST_FAIL);
                  break;
                case "install":
                  this.loading();
                  n = e.id;
                  var i = e.title,
                    a = e.href,
                    s = { referrer: document.referrer, outfrom: e.ref, fromapi: !0 };
                  if (this._ZUMAPP_PATTERN.test(n)) s.id = n;
                  else {
                    if (!(a && this._URL_PATTERN.test(a) && a.length < 1024)) return this.error(this.ENUM_NOTICE.REQUEST_FAIL), !1;
                    i || (i = o.a.removeProtocol(a)) || (i = "zum.com app"), (s.title = (i || "").substring(0, 30)), (s.link = a || "");
                  }
                  if (zum.appManager.isBoxFull()) return this.error(this.ENUM_NOTICE.LACK, s), !1;
                  if (zum.appManager.isExistBox(s)) return this.error(this.ENUM_NOTICE.EXIST, s), !1;
                  r.a.install(s);
                  break;
                case "open":
                  var l = 1;
                  try {
                    (!(l = parseInt(e.category, 10)) || l < 1 || l > 11) && (l = 1);
                  } catch (e) {}
                  1 !== l ? r.a.openCategory(l) : r.a.openWidgetStore();
                  break;
                case "theme":
                  r.a.openTheme();
                  break;
                default:
                  this.error(this.ENUM_NOTICE.REQUEST_FAIL);
              }
            }
          },
          onClickClose: function () {
            if ((this.close(), this.notice)) {
              var e = { pos: this.notice.popup + "_close", page: zum.page, puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] };
              ESTatTracker.push(["@Click", e]);
            }
          },
          ALERT_TYPE: {
            LOADING: { msg: "위젯이 설치 중입니다.", className: "ing" },
            ALERT: { msg: "위젯 설치를 실패하였습니다.<br/><span>%s</span>", className: "alert" },
            COMPLETE: { msg: "<strong>%s</strong><br/>위젯이 설치 되었습니다.", className: "check" },
          },
          ENUM_NOTICE: {
            INSERT: { popup: "appapi_insert" },
            EXIST: { msg: "해당 위젯이 이미 설치되어 있습니다.", popup: "appapi_exist" },
            LACK: { msg: "위젯 설치 공간이 부족합니다.", popup: "appapi_lack" },
            REMOVED: { msg: "위젯이 삭제된 상태입니다.", popup: "appapi_removed" },
            ENABLED: { msg: "일시적인 문제로 설치할 수 없습니다.", popup: "appapi_enabled" },
            LOAD_FAIL: { msg: "일시적인 장애가 발생하였습니다.", popup: "appapi_fail" },
            REQUEST_FAIL: { msg: "해당 위젯의 설치정보가 잘못되었습니다.", popup: "appapi_request_fail" },
            LACK_DOUBLE: { msg: "2칸 위젯 설치 공간이 부족합니다.", popup: "appapi_lack2" },
            ONLY_HOME: { msg: "해당 위젯은 홈 화면에만 추가 가능합니다.", popup: "appapi_onlyhome" },
          },
          _ALERT_FADE_TIME: 300,
          _isie678: zum.browser.ie67 || zum.browser.ie8,
          _showMiddle: function (e, t) {
            this.$el.show().find("p").attr("class", e).html(t);
            var n = i(document).scrollTop(),
              a = 0,
              s = i(document).height(),
              o = i(window).height(),
              r = this.$el.find(".box_layer").height();
            if (o >= r) a = n + (o - r) / 2;
            else {
              var l = (r - o) / 2,
                c = s - (n + o);
              (a = n - l - (c < l ? l - c : 0)) < 180 && s > r && ((a = 180), i(document).scrollTop(180));
            }
            this.$el.find(".box_layer").offset({ top: a }), this._isie678 ? this.$el.show() : this.$el.is(":visible") || this.$el.fadeIn(this._ALERT_FADE_TIME);
          },
          loading: function () {
            this._show("ing", "위젯이 설치 중입니다.");
          },
          complete: function (e, t) {
            var n = this;
            (e.msg = t.title),
              this._show("check", "<strong>%s</strong><br/>위젯이 설치 되었습니다.", e, t),
              (this.timeout = setTimeout(function () {
                n.close();
              }, 5e3));
          },
          error: function (e, t) {
            var n = this;
            this._show("alert", "위젯 설치를 실패하였습니다.<br/><span>%s</span>", e, t),
              (this.timeout = setTimeout(function () {
                n.close();
              }, 5e3));
          },
          _show: function (e, t, n, o) {
            if (n) {
              (t = t.replace("%s", i("<div />").text(n.msg).html())), (this.notice = n);
              var r = {
                appInfo: o && o.id ? [o.id] : void 0,
                popup: n.popup,
                layout: a.a.getLayoutType(),
                hbv: a.a.getData(s.a.Names.homeBoxesVersion),
                page: zum.page,
                referrer: document.referrer,
                outfrom: this.outfrom || void 0,
                puid: window.puid || "",
                variants: window.variantsStat || [],
                targets: window.targetsStat || [],
              };
              ESTatTracker.push(["@AppApiPageView", r]);
            }
            this._showMiddle(e, t);
          },
          close: function () {
            this._isie678 ? this.$el.hide() : this.$el.is(":visible") && this.$el.fadeOut(this._ALERT_FADE_TIME);
          },
          _ZUMAPP_PATTERN: /^[LGA][0-9]{1,10}$/,
          _URL_PATTERN: /^http(s?)\:\/\/([\-\.\w])+(:(0-9)*)*(\/?)([a-zA-Z0-9\[\]\-\.\?\,\:\'\/\\\+=&amp;%\$#_]*)?$/,
          errorRemoved: function (e, t) {
            this.error(this.ENUM_NOTICE.REMOVED, t), this.unbindEvents();
          },
          errorNotPulic: function (e, t) {
            this.error(this.ENUM_NOTICE.ENABLED, t), this.unbindEvents();
          },
          errorLoadFail: function (e, t) {
            this.error(this.ENUM_NOTICE.LOAD_FAIL, t), this.unbindEvents();
          },
          errorOnlyHome: function (e, t) {
            this.error(this.ENUM_NOTICE.ONLY_HOME, t), this.unbindEvents();
          },
          errorLackDouble: function (e, t) {
            this.error(this.ENUM_NOTICE.LACK_DOUBLE, t), this.unbindEvents();
          },
          completeR: function (e, t) {
            this.complete(this.ENUM_NOTICE.INSERT, t), this.unbindEvents();
          },
          unbindEvents: function () {
            this.unbind("installError:appstore:removed", this.errorRemoved),
              this.unbind("installError:appstore:notPublic", this.errorNotPulic),
              this.unbind("installError:appstore:loadFail", this.errorLoadFail),
              this.unbind("installComplete:appManager", this.completeR);
          },
        });
      t.a = new l({ el: i("#layer_api") });
    }.call(this, n(4), n(3)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(9), n(5);
      var a = n(15),
        s = e(window),
        o = e("html,body"),
        r = e("#header"),
        l = e("body"),
        c = e("#container"),
        u = e(".d_box_favorite_sites"),
        h = e(".d_box_shopping_slot"),
        d = !1,
        p = e("#footer"),
        m = e("#zum_paging"),
        f = e(".wrap_fixed"),
        _ = !(zum.browser.ie6 || zum.browser.mobile),
        g = h && h.length > 0,
        w = !1,
        v = s.height(),
        b = v < 959,
        y = 0,
        k = {
          isHide: !1,
          hide: function () {
            this.isHide || (m.hide(), (this.isHide = !0));
          },
          show: function () {
            this.isHide && (m.show(), (this.isHide = !1));
          },
        },
        x = {
          top: function (e, t) {
            o.stop().animate({ scrollTop: e || 0 }, void 0 === t ? 100 : t);
          },
          up: function () {
            o.scrollTop(s.scrollTop() - 50);
          },
          down: function () {
            o.scrollTop(s.scrollTop() + 50);
          },
          goFixedTop: function () {
            s.scrollTop() <= 113 ? this.top(113, 200) : this.top(113, 0);
          },
          bindResizeEvent: function () {
            s.width() < 1400 && k.hide(),
              this.unbindResizeEvent(),
              s.on(
                "resize.main",
                i.bind(function () {
                  this.checkSize();
                }, this)
              );
          },
          unbindResizeEvent: function () {
            s.off("resize.main");
          },
          checkSize: function () {
            s.width() < 1150 ? (l.addClass("body_min_width"), k.hide()) : (l.removeClass("body_min_width"), k.show()), s.width() < 1400 ? k.hide() : k.show();
          },
        },
        S = new (function (e) {
          (this.onscroll = function (t) {
            var n = e[t];
            n && n.isFixed && n.onscroll && n.onscroll.call(n);
          }),
            (this.onresize = function (t) {
              var n = e[t];
              n && n.isFixed && n.onresize && n.onresize.call(n);
            }),
            (this.bindEvents = function (e) {
              this.unbindEvents(e),
                s.on(
                  "scroll." + e,
                  i.bind(function () {
                    this.onscroll(e);
                  }, this)
                ),
                s.on(
                  "resize." + e,
                  i.bind(function () {
                    this.onresize(e);
                  }, this)
                );
            }),
            (this.unbindEvents = function (e) {
              s.off("." + e);
            }),
            (this.fix = function (t) {
              _ && (e[t].fix(), this.afterFix(t));
            }),
            (this.unfix = function (t) {
              e[t].unfix(), this.afterUnfix(t);
            }),
            (this.afterFix = function (e) {
              this.bindEvents(e);
            }),
            (this.afterUnfix = function (e) {
              this.unbindEvents(e);
            });
        })({
          news: {
            isFixed: !1,
            fix: function () {
              p.hide(), (this.isFixed = !0), (d = c.hasClass("menu_fixed")), (y = 9999), (f = e(".wrap_fixed"));
            },
            unfix: function () {
              p.show(),
                (this.isFixed = !1),
                f.removeAttr("style"),
                c.removeClass("menu_fixed"),
                (d = c.hasClass("menu_fixed")),
                u.removeClass("box_fixed"),
                r.removeClass("mini-header"),
                g && h.removeClass("box_fixed");
            },
            getScrollPoint: function () {
              try {
                var t = e("#iframe_article_box").contents().find(".article_comment");
                return 0 === t.length ? 9999 : t.offset().top - 745;
              } catch (e) {
                return 9999;
              }
            },
            onscroll: function () {
              if (!1 !== this.isFixed) {
                if (d) {
                  var e = s.scrollTop(),
                    t = v - f.height() - 60;
                  if ((9999 === y && (y = this.getScrollPoint()), b))
                    if (e >= y) {
                      var n = y - e;
                      n <= t && (n = t), f.css("margin-top", n);
                    } else f.css("margin-top", 0);
                  113 > s.scrollTop() && (c.removeClass("menu_fixed"), u.removeClass("box_fixed"), g && h.removeClass("box_fixed"), f.removeAttr("style"), (d = !1));
                } else 113 <= s.scrollTop() && (c.addClass("menu_fixed"), u.addClass("box_fixed"), g && h.addClass("box_fixed"), f.css("margin-top", 0), (d = !0));
                if (l.hasClass("body_min_width") && d) {
                  var i = 10;
                  l.hasClass("type_3b") && (i = 700), s.scrollLeft() > 0 ? (w || (w = !0), f.css({ left: i - s.scrollLeft() + "px" })) : w && ((w = !1), f.css({ left: "auto" }));
                }
              }
            },
            onresize: function () {
              (v = s.height()), (b = v < 959), (y = this.getScrollPoint()), this.onscroll(), a.a.Article.checkAndSendScrollStat(s.scrollTop() + s.height());
            },
          },
        });
      t.a = {
        fixNews: function () {
          S.fix("news");
        },
        fixNewsRemocon: function () {},
        unfixNews: function () {
          S.unfix("news");
        },
        scrollToTop: function (e, t) {
          x.top(e, t);
        },
        scrollToFixedTop: function () {
          x.goFixedTop();
        },
        bindResizeWindow: function () {
          x.bindResizeEvent(), x.checkSize();
        },
        unbindResizeWindow: function () {
          x.unbindResizeEvent();
        },
        checkSize: function () {
          x.checkSize();
        },
      };
    }.call(this, n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a, s) {
      n(9), n(115), n(74), n(10), n(31), n(13), n(87), n(40), n(17);
      var o = n(5),
        r = n(14),
        l = n(1),
        c = n(60),
        u = n(33),
        h = n(2);
      n(155);
      (window.callbackThumbnailUploadFromAppStore = function (e) {}), (window.callbackLoadReadyMadeThumbnail = function (e) {});
      var d = {
          $layer: void 0,
          $backEl: void 0,
          initialize: function () {
            (this.$layer = e("#layer_state_alert")),
              (this.$backEl = e("#layer")),
              this.$layer.find("a").bind("click", function () {
                $backEl.hide(), $layer.hide();
              });
          },
          hidePopup: function () {
            this.$layer.hide(), this.$backEl.hide();
          },
        },
        p = {
          initialized: !1,
          initialize: function () {
            i.templates &&
              !this.initialized &&
              ((this.tmplAppList = i.templates.decorate_app_list),
              (this.tmplAppDetailTop = i.templates.decorate_app_detail_top),
              (this.tmplAppDetail = i.templates.decorate_app_detail),
              (this.tmplAppCategoryList = i.templates.decorate_app_category_list),
              (this.initialized = void 0 !== this.tmplAppCategoryList));
          },
        };
      i.registerHelper("breaklines", function (e) {
        return new i.SafeString(e.replace(/\r\n/g, "<br>"));
      }),
        i.registerHelper("category", function (e, t) {
          for (var n = 0; n < e.length; ++n) if (1 != e[n].id) return new i.SafeString(e[n][t]);
        }),
        i.registerHelper("br", function (e) {
          return new i.SafeString((e || "").replace(/\r?\n/g, "<br/>"));
        }),
        i.registerHelper("ifEquals", function (e, t, n) {
          return e == t ? n.fn(this) : n.inverse(this);
        }),
        i.registerHelper("ifMods", function (e, t, n, i) {
          return e % t === n ? i.fn(this) : i.inverse(this);
        }),
        i.registerHelper("ifLast", function (e, t, n) {
          return e === t.length - 1 ? n.fn(this) : n.inverse(this);
        }),
        d.initialize(),
        p.initialize();
      var m = a.View.extend(
        {
          id: "layer_appstore",
          className: "layer_decorate box_layer",
          DEFAULT_SEARCH_VALUE: "검색어 또는 URL을 입력해주세요.",
          DEFAULT_INPUT_SITE_NAME: "",
          DEFAULT_TEXT_SITE_NAME: "사이트 이름",
          DEFAULT_INPUT_SITE_URL: "http://www.",
          REGEX_SITE_URL: /^(https?:\/\/)?([a-zA-Z가-힣\d\.-]+)\.[a-zA-Z가-힣]{2,6}/,
          REGEX_SITE_IP: /^(https?:\/\/)?(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})(:\d{1,5})?[^|$]{0,}$/,
          REGEX_SITE_NAME: /^[a-zA-Z가-힣\s\d-_~!?\/()\^\[\]☆★♡♥]*$/,
          REGEX_PREVENT_XSS: /[\|\{\}\'\"\<\>]/g,
          lm: 0,
          parent: void 0,
          renderCategoryCompleted: !1,
          callback: void 0,
          objectType: "unit",
          currentIndex: void 0,
          categoryAjaxCache: {},
          appInfoAjaxCache: {},
          defaultCategoryIdx: 0,
          categories: null,
          appDetailCache: {},
          backMode: void 0,
          query: "",
          preventEvent: function (e) {
            return e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1), !1;
          },
          bindWithContext: function (e, t) {
            return function () {
              try {
                return e.apply(t, arguments);
              } catch (e) {
                return !1;
              }
            };
          },
          initialize: function () {
            (this.lm = this.$el.data("lm") || new Date().getTime()),
              (window.callbackThumbnailUploadFromAppStore = this.bindWithContext(this.callbackThumbnailUpload, this)),
              (window.callbackLoadReadyMadeThumbnail = this.bindWithContext(this.callbackLoadReadyMadeThumbnail, this)),
              (this.events = {
                dblclick: this.preventEvent,
                "click .d_tab": function (e) {
                  this.storeTab(e);
                },
                "click .d_category_bar, .d_store_path_btn_category": this.clickCategory,
                "click .d_app_detail": this.clickAppDetail,
                "click #decorate_bottom_guide_appselect .btn_type_02": function () {
                  this.openCategory(m.DEFAULT_CATEGORY);
                },
                "click .d_store_path_btn_home": function () {
                  this.openCategory(m.DEFAULT_CATEGORY);
                },
                "click .d_app_btn_cancel": function () {
                  null !== this.back && this.back();
                },
                "click #za_store_path_btn_category": function (e) {
                  null !== this.back ? this.back() : this.clickCategory(e);
                },
                "click .d_app_install": this.clickInstall,
                "click .d_close_state_alert": function (e) {
                  this.installPopupClose(), this.realClose(), "none" !== this.$("#decorate_app_favorite_box").css("display") && this.openInputFavoriteSitePage();
                },
                "click #decorate_app_detail #decorate_app_detail_text_more": function (e) {
                  this.$("#decorate_app_detail #decorate_app_detail_text").addClass("txt_full"), this.$("#decorate_app_detail #decorate_app_detail_text_more").hide();
                },
                "click #decorate_app_detail .btn_facebook": this.shareFacebook,
                "click #decorate_app_detail .btn_twitter": this.shareTwitter,
                "click #za_store_search_btn": this.search,
                "focus #za_store_search_input": function (t) {
                  var n = e(t.currentTarget).addClass("on");
                  this.$("#za_store_search_input").css("color", "#000"), n.val() === this.DEFAULT_SEARCH_VALUE && n.val(""), this.setSearchInterval();
                },
                "blur #za_store_search_input": function (t) {
                  var n = e(t.currentTarget).removeClass("on");
                  this.$("#za_store_search_input").css("color", "#ccc"), "" === e.trim(n.val()) && n.val(this.DEFAULT_SEARCH_VALUE), this.clearSearchInterval();
                },
                "keydown #za_store_search_input": function (e) {
                  13 === e.keyCode ? this.search() : this.setSearchInterval();
                },
                "click .d_favorite_site_register_btn, #decorate_app_list_box .btn_reg": this.click2FavoriteSiteInputPage,
                "click .d_favorite_site_register_by_query_keyword_btn": function (e) {
                  this.click2FavoriteSiteInputPage(e);
                  var t = this.$("#decorate_app_favorite_box"),
                    n = t.find("#input_site_name"),
                    i = t.find("#text_site_name"),
                    a = this.$("#decorate_store #za_store_search_input");
                  n.val(a.val()).data("removed_default_text", !0), i.text(a.val());
                },
                "click .d_favorite_site_register_by_query_url_btn": function (e) {
                  this.click2FavoriteSiteInputPage(e);
                  var t = this.$("#decorate_app_favorite_box").find("#input_site_url"),
                    n = this.$("#decorate_store #za_store_search_input");
                  t.val(c.a.getValidUrl(n.val(), !0) || n.val());
                },
                "click #decorate_app_favorite_box #btn_register": this.click2FavoriteSiteInstall,
                "focus #decorate_app_favorite_box #input_site_url": function (e) {
                  e.currentTarget.value = e.currentTarget.value;
                },
                "focusout #decorate_app_favorite_box #input_site_url": this.isValidSiteUrl,
                "focus #decorate_app_favorite_box #input_site_name": function (t) {
                  var n = e(t.currentTarget);
                  0 == n.data("removed_default_text") && (n.val(""), n.data("removed_default_text", !0));
                },
                "focusout #decorate_app_favorite_box #input_site_name": function (t) {
                  var n = this.$("#decorate_app_favorite_box"),
                    i = e(t.currentTarget),
                    a = n.find("#text_site_name"),
                    s = n.find("#alert_input_proper_name");
                  if (0 === i.val().length) return i.val(this.DEFAULT_INPUT_SITE_NAME), i.data("removed_default_text", !1), a.text(this.DEFAULT_TEXT_SITE_NAME), void s.hide();
                  i.val().match(this.REGEX_SITE_NAME) ? (s.hide(), a.text(i.val())) : s.show();
                },
                "keydown #decorate_app_favorite_box #input_site_name": function (t) {
                  if (e(t.currentTarget).val().length > 50 && 8 !== t.keyCode) return !1;
                },
                "change #decorate_app_favorite_box input:file": function (t) {
                  var n = this.$("#decorate_app_favorite_box"),
                    i = e(t.currentTarget).val(),
                    a = n.find("input:file"),
                    s = n.find("#thumbnail_upload_form"),
                    o = n.find("#decorate_app_favorite_box_loading"),
                    r = n.find("#text_custom_thumbnail_file_name");
                  return (
                    0 !== i.length &&
                    (i.match(/\.exe$/)
                      ? (alert("jpg, png, gif 형식만 등록할 수 있습니다."), a.replaceWith((a = a.clone(!0))), !1)
                      : r.val() != a.val().substring(a.val().lastIndexOf("\\") + 1) &&
                        (s.data("uploading", !0),
                        o.show(),
                        (this.timerUploading = setTimeout(function () {
                          var e = n.find("#thumbnail_upload_form"),
                            t = n.find("#decorate_app_favorite_box_loading"),
                            i = n.find("#up_frame"),
                            a = n.find("input:file");
                          (i[0].contentWindow.location.href = "/document-domain?variants=" + window.variantsParam),
                            t.hide(),
                            a.replaceWith((a = a.clone(!0))),
                            e.data("uploading", !1),
                            alert("이미지 용량이 너무 크거나, 시간이 초과되어 이미지를 업로드 할 수 없습니다.");
                        }, 15e3)),
                        void s.submit()))
                  );
                },
                "click #decorate_app_favorite_box #div_after_upload .btn_del": function (e) {
                  var t = this.$("#decorate_app_favorite_box"),
                    n = t.find("#text_custom_thumbnail_url"),
                    i = t.find("#text_custom_thumbnail_file_name"),
                    a = t.find("#img_thumbnail"),
                    s = t.find("input:file"),
                    o = t.find(".d_upload_wrap");
                  n.val(""), i.val(""), a.attr("src", "").hide().parent().removeClass("app_img"), o.removeClass("uploaded"), s.replaceWith((s = s.clone(!0))), this.loadReadyMadeThumbnail();
                },
                "click #set_news_yes,#set_news_no": this.selectLayoutRadio,
                "click #set_where_left,#set_where_right": this.selectLayoutRadio,
                "click #set_shopping_yes,#set_shopping_no": this.selectLayoutRadio,
                "click #set_wide_yes,#set_wide_no": this.selectLayoutRadio,
                "click #decorate_layout_apply_btn, #decorate_layout .btn_reg": this.applyLayout,
                "click #decorate_layout .btn_cancel": this.openLayout,
                "click #state_alert_apply .d_open_appstore": function () {
                  this.openCategory(m.DEFAULT_CATEGORY);
                },
                "click #decorate_bottom_guide_backgroundselect .btn_type_01, .d_layer_close": function () {
                  this.realClose();
                },
              });
          },
          isValidSiteUrl: function (t) {
            var n = e(t.currentTarget),
              i = this.$("#decorate_app_favorite_box"),
              a = i.find("#alert_input_proper_url"),
              s = i.find("#img_thumbnail"),
              o = i.find("#text_custom_thumbnail_url");
            0 === n.val().length
              ? (a.text("사이트 주소를 입력해 주세요."), a.show(), 0 === o.val().length && s.hide().parent().removeClass("app_img"))
              : n.val().match(this.REGEX_SITE_URL) || n.val().match(this.REGEX_SITE_IP)
              ? (a.hide(), 0 === o.val().length && this.loadReadyMadeThumbnail())
              : (a.text("사이트 주소가 올바르지 않습니다."), a.show(), 0 === o.val().length && s.hide().parent().removeClass("app_img"));
          },
          cacheAppInfo: function (e) {
            if (e) for (var t = 0; t < e.length; ++t) this.appInfoAjaxCache[e[t].id] = e[t];
          },
          back: null,
          openLayout: function () {
            this.showLayer(),
              this.display(function () {
                var e = o.a.getLayoutType(zum.page),
                  t = o.a.getUseShopping(zum.page);
                "type_3a" === e
                  ? (this.$("#set_news_yes").prop("checked", !0), this.$("#set_where_left").prop("checked", !0))
                  : "type_3b" === e
                  ? (this.$("#set_news_yes").prop("checked", !0), this.$("#set_where_right").prop("checked", !0))
                  : "type_4" === e
                  ? (this.$("#set_news_no").prop("checked", !0), this.$("#set_wide_no").prop("checked", !0))
                  : "type_5" === e && (this.$("#set_news_no").prop("checked", !0), this.$("#set_wide_yes").prop("checked", !0)),
                  0 === t ? this.$("#set_shopping_no").prop("checked", !0) : this.$("#set_shopping_yes").prop("checked", !0),
                  this.$("#decorate_layout .layout_setting_btn").show(),
                  this.setLayoutPreview(),
                  this.$("#decorate_layout").addClass("on"),
                  this.$("#decorate_store").removeClass("on"),
                  this.$("#decorate_backdrop").removeClass("on"),
                  this.$("#decorate_app_list_box").hide(),
                  this.$("#decorate_app_detail_box").hide(),
                  this.$("#decorate_app_favorite_box").hide(),
                  this.$("#decorate_app_favorite_search_box").hide(),
                  (this.backMode = "layout");
              });
          },
          showLayer: function () {
            r.a.addLayer("widgetstore", this), r.a.show("widgetstore");
          },
          openWidgetStore: function (t) {
            this.showLayer(),
              (this.tracker.from = e.isNumeric(t) ? "zumAppEmpty" : "etc"),
              (this.currentIndex = e.isNumeric(t) ? t : null),
              "category" != this.backMode || null === this.back ? this.openCategory(m.DEFAULT_CATEGORY) : this.back();
          },
          clickCategory: function (t) {
            var n = e(t.currentTarget).data("cid");
            return n && this.openCategory(n), !1;
          },
          openCategory: function (t) {
            s.isUndefined(t) && (t = m.DEFAULT_CATEGORY),
              this.categoryAjaxCache[t]
                ? ((t = 0 === t ? this.defaultCategoryIdx : t), this.openCategoryComplete(t, this.categoryAjaxCache[t]))
                : e.ajax({
                    type: "GET",
                    url: "//" + location.host + "/view/widget/category-widget.json?category_id=" + t,
                    success: function (e) {
                      e &&
                        e.widgets.length > 0 &&
                        (t === m.DEFAULT_CATEGORY && ((this.categoryAjaxCache[t] = e.widgets), (this.defaultCategoryIdx = e.id)),
                        (this.categoryAjaxCache[e.id] = e.widgets),
                        this.openCategoryComplete(e.id, e.widgets));
                    },
                    context: this,
                    timeout: 3e3,
                    error: function () {},
                  });
          },
          openCategoryComplete: function (e, t) {
            var n = this;
            this.display(function () {
              this.$("#decorate_layout").removeClass("on"),
                this.$("#decorate_store").addClass("on"),
                this.$("#decorate_backdrop").removeClass("on"),
                this.$("#decorate_app_list_box").show(),
                this.$("#decorate_app_detail_box").hide(),
                this.$("#decorate_app_favorite_box").hide(),
                this.$("#decorate_app_favorite_search_box").hide(),
                this.$("#decorate_app_list").html(p.tmplAppList(t)),
                this.$("#decorate_app_list img.d_thumb").one("error", n.onErrorIcon),
                this.$("#decorate_app_list_box .add_app").hide(),
                this.$("#decorate_app_category_list").find("li.on").removeClass("on"),
                this.$("#decorate_app_category_list #decorate_category_bar_" + e)
                  .parent()
                  .addClass("on");
              var i = this.$("#decorate_app_category_list #decorate_category_bar_" + e);
              this.tracker.appstorePageView(i.data("category")),
                (this.backMode = "category"),
                (this.back = function () {
                  this.openCategoryComplete(e, t);
                });
            });
          },
          clickAppDetail: function (t) {
            var n = e(t.currentTarget).data("aid");
            return n && this.openAppDetail(n), !1;
          },
          openAppDetail: function (t) {
            this.appInfoAjaxCache[t]
              ? ((this.appDetailCache = this.appInfoAjaxCache[t]), this.openAppDetailComplete(this.appInfoAjaxCache[t]))
              : e.ajax({
                  type: "GET",
                  url: "//" + location.host + "/view/widget.json?widget_id=" + t,
                  success: function (e) {
                    e ? (this.cacheAppInfo([e]), (this.appDetailCache = e), this.openAppDetailComplete(e)) : u.a.trigger("installError:appstore:notExists");
                  },
                  context: this,
                  timeout: 3e3,
                  error: function () {
                    u.a.trigger("installError:appstore:loadFail", { widgetId: t });
                  },
                }),
              this.tracker.appstorePageView("detail", t);
          },
          openAppDetailComplete: function (e) {
            var t = this;
            this.display(function () {
              this.$("#decorate_layout").removeClass("on"),
                this.$("#decorate_store").addClass("on"),
                this.$("#decorate_backdrop").removeClass("on"),
                this.$("#decorate_app_list_box").hide(),
                this.$("#decorate_app_detail_box").show(),
                this.$("#decorate_app_favorite_box").hide(),
                this.$("#decorate_app_favorite_search_box").hide(),
                this.$("#decorate_app_detail").html(p.tmplAppDetail(e)),
                this.$("#decorate_app_detail img.d_thumb").one("error", t.onErrorIcon),
                this.$("#decorate_app_detail img.d_preview").one("error", t.onErrorPreview),
                this.$("#decorate_app_detail_top").html(p.tmplAppDetailTop(e));
              var n = this.$("#decorate_app_detail #decorate_app_detail_text"),
                i = this.$("#decorate_app_detail #decorate_app_detail_text_more");
              n.height() > 60 ? (n.removeClass("txt_full"), i.show()) : i.hide(), (this.backMode = "appdetail");
            });
          },
          setSearchInterval: function () {
            var t = this;
            t.interval ||
              (t.interval = setInterval(function () {
                var n = e.trim(e("#za_store_search_input").val());
                n = n === t.DEFAULT_SEARCH_VALUE ? "" : n;
              }, 100));
          },
          clearSearchInterval: function () {
            this.interval && (clearInterval(this.interval), (this.interval = null));
          },
          requestCategory: function (t) {
            e.ajax({
              type: "GET",
              url: "//" + location.host + "/view/widget/categories.json",
              dataType: "json",
              success: function (e) {
                var n = [];
                e = e || [];
                for (var i = 0; i < e.length; ++i) "웹사이트" != e[i].title && "꾸미기" != e[i].title && n.push(e[i]);
                (this.categories = n), t && t();
              },
              context: this,
              timeout: 5e3,
              error: function () {},
            });
          },
          display: function (t) {
            this.requestCompleted
              ? this.tryOpen(t)
              : e.ajax({
                  url: "//" + location.host + "/view/widget/store.html",
                  cache: !0,
                  context: this,
                  success: function (e) {
                    var n = this;
                    this.$el.html(e),
                      (this.requestCompleted = !0),
                      null === this.categories
                        ? this.requestCategory(function () {
                            n.tryOpen(t);
                          })
                        : this.tryOpen(t);
                  },
                });
          },
          tryOpen: function (t) {
            if (null !== this.categories && p.initialized) {
              if (!this.validateUploadingImageNow()) return !1;
              !this.renderCategoryCompleted &&
                null !== this.categories &&
                this.categories.length > 0 &&
                (this.$("#decorate_app_category_list").html(p.tmplAppCategoryList(this.categories)), (this.renderCategoryCompleted = !0)),
                this.trigger("activate"),
                "function" == typeof t && t.call(this),
                this.$(".d_bottom_guide").hide(),
                this.$(".d_tab a").css("cursor", ""),
                this.$(".d_scroll_bottom_padding").hide(),
                this.$("#decorate_store .l_cont").removeClass("cate_none"),
                0 !== zum.page || this.isGuidebar ? e("#layer #layer_appstore").removeClass("only_store") : e("#layer #layer_appstore").addClass("only_store"),
                this.installPopupClose();
            }
          },
          clickInstall: function (t) {
            var n = e(t.currentTarget).data("aid"),
              i = e(t.currentTarget).data("ref-type");
            return this.install({ widgetId: n, refType: i }), !1;
          },
          install: function (t) {
            if ("string" == typeof t.widgetId) {
              var n = t.widgetId;
              this.appInfoAjaxCache[n]
                ? this.installLoadingComplete(this.appInfoAjaxCache[n])
                : e.ajax({
                    type: "GET",
                    url: "//" + location.host + "/view/widget.json?widget_id=" + n,
                    success: function (e) {
                      e ? (this.cacheAppInfo([e]), this.installLoadingComplete(e, t.refType, t.fromapi)) : u.a.trigger("installError:appstore:notExists", t);
                    },
                    context: this,
                    timeout: 3e3,
                    error: function () {
                      u.a.trigger("installError:appstore:loadFail", t);
                    },
                  });
            } else this.installLoadingComplete(t, t.refType);
          },
          installLoadingComplete: function (e, t, n) {
            var i = this,
              a = e.gadgetInfo,
              s = a && a.removeNoticeEndDate ? a.removeNoticeEndDate : Number.POSITIVE_INFINITY,
              o = +new Date() > s;
            return !0 === e.isRemoved && o
              ? (u.a.trigger("installError:appstore:removed", e), !1)
              : !1 === e.isPublic
              ? (u.a.trigger("installError:appstore:notPublic", e), !1)
              : (delete e.referrer,
                void this.trigger("install", e, this.currentIndex, t, n, function (e) {
                  !1 !== e && ((i.currentIndex = void 0), i.realClose());
                }));
          },
          checkRefineFunc: function (e, t) {
            var n = Math.max(e.length, 1),
              i = zum.appManager._getMaxLength(t);
            if (n > i && "0" !== e[n - 1] && "" !== e[n - 1]) return !1;
            for (var a = 0, s = 0; s < i; s++) {
              var o = 1;
              if (n <= s)
                if (a > i) {
                  if ("0" !== e[s] && "" !== e[s]) return !1;
                } else {
                  if (a == i || a % t == 0) break;
                  a += o;
                }
              else if (("A" == e[s].substring(0, 1) && (a % t == t - 1 ? s-- : (o = 2)), (a += o) > i && "0" !== e[s] && "" !== e[s])) return !1;
            }
            return !0;
          },
          addEmptyPage: function () {
            var e = o.a.getMyMaxPage() + 1;
            return e <= o.a.getMaxPage() && ((zum.page = e), o.a._newMyzumPage()), !1;
          },
          click2FavoriteSiteInputPage: function (e) {
            return !!this.validateUploadingImageNow() && (this.tracker.appstorePageView("custom"), this.openInputFavoriteSitePage(), !1);
          },
          openInputFavoriteSitePage: function () {
            this.display(function () {
              var e = this.$("#decorate_app_favorite_box");
              e.find("#input_site_url").val(this.DEFAULT_INPUT_SITE_URL),
                e.find("#alert_input_proper_url").hide(),
                e.find("#alert_input_proper_name").hide(),
                e.find("#input_site_name").val(this.DEFAULT_INPUT_SITE_NAME).data("removed_default_text", !1),
                e.find("#text_site_name").text(this.DEFAULT_TEXT_SITE_NAME),
                e.find("#text_custom_thumbnail_url").val(""),
                e.find("#text_custom_thumbnail_file_name").val(""),
                e.find(".d_upload_wrap").removeClass("uploaded"),
                e.find("#img_thumbnail").attr("src", "").hide().parent().removeClass("app_img"),
                e.find("input:file").val(""),
                e.find("#decorate_app_favorite_box_loading").hide(),
                e.find("#thumbnail_upload_form").data("uploading", !1);
              var t = e.find("input:file");
              t.replaceWith((t = t.clone(!0))),
                this.$("#decorate_layout").removeClass("on"),
                this.$("#decorate_store").addClass("on"),
                this.$("#decorate_backdrop").removeClass("on"),
                this.$("#decorate_app_list_box").hide(),
                this.$("#decorate_app_detail_box").hide(),
                this.$("#decorate_app_favorite_box").show(),
                this.$("#decorate_app_favorite_search_box").hide(),
                this.$("#decorate_app_category_list").find("li.on").removeClass("on"),
                this.$("#input_site_url")[0].focus(),
                (this.backMode = "custom");
            });
          },
          click2FavoriteSiteInstall: function (e) {
            if (!this.validateUploadingImageNow()) return !1;
            var t = this.$("#decorate_app_favorite_box"),
              n = t.find("#input_site_url");
            if (0 === n.val().length) return alert("사이트 주소를 입력해 주세요."), n.focus(), !1;
            if (!n.val().match(this.REGEX_SITE_URL) && !n.val().match(this.REGEX_SITE_IP)) return alert("사이트 주소가 올바르지 않습니다. 다시 입력해 주세요."), n.focus(), !1;
            var i = c.a.getValidUrl(n.val(), !0) || n.val(),
              a = t.find("#input_site_name"),
              s = t.find("#text_site_name");
            if (!a.val().match(this.REGEX_SITE_NAME)) {
              a = t.find("#input_site_name");
              return alert("사이트 이름에 사용할 수 없는 문자가 포함되어 있습니다."), a.focus(), !1;
            }
            var o = s.text().replace(/[\|\{\}\'\"\<\>\&]/g, "");
            o == this.DEFAULT_TEXT_SITE_NAME && (o = i.replace("http://", "").replace("https://", "")), o.length > 50 && (o = o.substr(0, 50));
            var r = t.find("#text_custom_thumbnail_url"),
              l = c.a.getValidUrl(r.val(), !0) || r.val(),
              u = t
                .find("#text_custom_thumbnail_file_name")
                .val()
                .replace(/[\|\{\}\'\"\<\>\&]/g, "");
            if (i) {
              var h = { title: o, link: i, img: l.replace("http://", "//"), imgFileName: u, appVer: "2" };
              this.install(h);
            }
            return !1;
          },
          timerUploading: null,
          callbackThumbnailUpload: function (t) {
            var n = e.parseJSON(t),
              i = this.$("#decorate_app_favorite_box"),
              a = i.find("#text_custom_thumbnail_url"),
              s = i.find("#thumbnail_upload_form"),
              o = i.find("#img_thumbnail"),
              r = i.find(".d_upload_wrap"),
              l = i.find("#text_custom_thumbnail_file_name"),
              c = i.find("input:file"),
              u = i.find("#decorate_app_favorite_box_loading");
            if (!s.data("uploading")) return !1;
            if ("success" === n.status) {
              var h = n.thumb[0];
              a.val(h.url),
                l.val(decodeURIComponent(c.val().substring(c.val().lastIndexOf("\\") + 1))),
                o.prop("src", h.url.replace("http://", "//")).show().parent().addClass("app_img"),
                r.addClass("uploaded");
            } else
              "File size is too big" === n.status
                ? alert("용량이 너무 큽니다. 최대 1MB까지 등록 할 수 있습니다.")
                : "Wrong File extention" === n.status
                ? alert("jpg, png, gif 형식만 등록할 수 있습니다.")
                : alert("이미지를 업로드 할 수 없습니다.\n정상적인 파일인지 먼저 확인하고 다시 시도해 주세요."),
                c.replaceWith((c = c.clone(!0)));
            clearTimeout(this.timerUploading), s.data("uploading", !1), u.hide();
          },
          loadReadyMadeThumbnail: function () {
            var t = this.$("#decorate_app_favorite_box"),
              n = t.find("#text_custom_thumbnail_url");
            if (!(n.length > 0 && n.val().length > 0)) {
              var i = t.find("#img_thumbnail"),
                a = t.find("#input_site_url");
              try {
                var s = (c.a.getValidUrl(a.val(), !0) || a.val()).replace(this.REGEX_PREVENT_XSS, ""),
                  o = hex_md5(s),
                  r = "http://post3.zumst.com/thumbnail/" + o.substr(0, 2) + "/" + o.substr(2, 2) + "/" + o + ".jpg";
                e.ajax({
                  url: "//postimage3.zum.com/check?service=thumbnail&url=" + r + "&info=true&callback=callbackLoadReadyMadeThumbnail",
                  dataType: "jsonp",
                  jsonp: "window['callbackLoadReadyMadeThumbnail']",
                }),
                  i.data("src", r).data("siteUrl", s).hide().parent().removeClass("app_img");
              } catch (e) {}
            }
          },
          callbackLoadReadyMadeThumbnail: function (e) {
            var t = this.$("#decorate_app_favorite_box #img_thumbnail");
            "yes" == e.status && (t.prop("src", t.data("src").replace("http://", "//")), (this.currentThumnailRequest = t.data("siteUrl")), t.show().parent().addClass("app_img"));
          },
          realClose: function () {
            if (!this.validateUploadingImageNow()) return !1;
            r.a.hide("widgetstore"), d.hidePopup(), this.$("#za_store_search_input").val(this.DEFAULT_SEARCH_VALUE), (this.currentIndex = null);
          },
          close: function () {
            return this.realClose(), !1;
          },
          storeTab: function (t) {
            var n = e(t.currentTarget);
            return n.hasClass("tab_1") ? this.openLayout() : n.hasClass("tab_2") && this.openCategory(m.DEFAULT_CATEGORY), !1;
          },
          selectLayoutRadio: function (e) {
            this.setLayoutPreview();
          },
          setLayoutPreview: function () {
            var e = this.$("#decorate_layout input:radio[name=set_news]:checked").val(),
              t = this.$("#decorate_layout input:radio[name=set_where]:checked").val(),
              n = this.$("#decorate_layout input:radio[name=set_shopping]:checked").val(),
              i = this.$("#decorate_layout input:radio[name=set_wide]:checked").val();
            "1" === e
              ? (this.$("#d_set_where").show(), this.$("#d_set_shopping").show(), this.$("#d_set_wide").hide())
              : (this.$("#d_set_where").hide(), this.$("#d_set_shopping").hide(), this.$("#d_set_wide").show()),
              this.$("#decorate_layout_preview").removeClass(),
              "1" === e && "0" === t && "0" === n
                ? this.$("#decorate_layout_preview").addClass("type_01")
                : "1" === e && "1" === t && "0" === n
                ? this.$("#decorate_layout_preview").addClass("type_02")
                : "1" === e && "0" === t && "1" === n
                ? this.$("#decorate_layout_preview").addClass("type_03")
                : "1" === e && "1" === t && "1" === n
                ? this.$("#decorate_layout_preview").addClass("type_04")
                : "0" === e && "0" === i
                ? this.$("#decorate_layout_preview").addClass("type_05")
                : "0" === e && "1" === i
                ? this.$("#decorate_layout_preview").addClass("type_06")
                : this.$("#decorate_layout_preview").addClass("type_01");
          },
          applyLayout: function () {
            var e = this,
              t = o.a.getLayoutType(zum.page),
              n = o.a.getUseShopping(),
              i = zum.settings.base[l.a.Names.layout],
              a = n;
            return (
              "5" === i && (i = "4"),
              (i = this.$("#set_news_yes").prop("checked") ? (this.$("#set_where_left").prop("checked") ? "3a" : "3b") : this.$("#set_wide_yes").prop("checked") ? "5" : "4"),
              this.$("#set_shopping_yes").prop("disabled") || (a = this.$("#set_shopping_yes").prop("checked") ? 1 : 0),
              (i = "type_" + i),
              this.trigger("checkRefineBox", i.substring(5, 6), function (s) {
                return (
                  !(i !== t && !s) &&
                  (n !== a || t !== i
                    ? (h.a.trigger("change:containerLayout", { useShopping: a, type: void 0 === i ? void 0 : i.substr(5), idx: zum.page }, function () {
                        e.installPopupAccept();
                      }),
                      e.installPopupLoading())
                    : e.installPopupAccept(),
                  !0)
                );
              }),
              !0
            );
          },
          search: function () {
            var t = this.$("#za_store_search_input").val();
            return "" === e.trim(t) || e.trim(t) === this.DEFAULT_SEARCH_VALUE
              ? (this.searchError(t), !1)
              : (this.$("#decorate_app_category_list").find("li.on").removeClass("on"),
                e.ajax({
                  type: "GET",
                  url: "//" + location.host + "/view/widget/search.json",
                  success: function (e) {
                    this.searchComplete(t, e);
                  },
                  data: { query: t },
                  context: this,
                  timeout: 3e3,
                  error: function () {},
                }),
                !1);
          },
          searchComplete: function (e, t) {
            var n = this;
            this.display(function () {
              t && t.length > 0
                ? (this.$("#decorate_layout").removeClass("on"),
                  this.$("#decorate_store").addClass("on"),
                  this.$("#decorate_backdrop").removeClass("on"),
                  this.$("#decorate_app_list_box").show(),
                  this.$("#decorate_app_detail_box").hide(),
                  this.$("#decorate_app_favorite_box").hide(),
                  this.$("#decorate_app_favorite_search_box").hide(),
                  this.$("#decorate_app_list").html(p.tmplAppList(t)),
                  this.$("#decorate_app_list img.d_thumb").one("error", n.onErrorIcon),
                  this.$("#decorate_app_list_box .add_app").show(),
                  this.$("#decorate_app_favorite_search_box").hide(),
                  (this.backMode = "search"),
                  (this.back = function () {
                    this.searchComplete(e, t);
                  }),
                  this.tracker.appstorePageView("search", e))
                : this.searchError(e);
            });
          },
          searchError: function (t) {
            this.$("#decorate_layout").removeClass("on"),
              this.$("#decorate_store").addClass("on"),
              this.$("#decorate_backdrop").removeClass("on"),
              this.$("#decorate_app_list_box").hide(),
              this.$("#decorate_app_detail_box").hide(),
              this.$("#decorate_app_favorite_box").hide(),
              this.$("#decorate_app_favorite_search_box .d_decorate_app_favorite_search").hide(),
              "" === e.trim(t) || e.trim(t) === this.DEFAULT_SEARCH_VALUE
                ? this.$("#decorate_app_favorite_search_noresult_warn").show()
                : t.length > 0 &&
                  (t.length > 8 && t.match(this.REGEX_SITE_URL)
                    ? (this.$("#decorate_app_favorite_search_noresult_url .txt_03").html("<span>검색한 키워드 :</span><strong>" + t + "</strong>"),
                      this.$("#decorate_app_favorite_search_noresult_url").show())
                    : (this.$("#decorate_app_favorite_search_noresult_common .txt_01").html('아쉽게도 <strong>"' + t + '"</strong>와 일치하는 위젯이 없습니다.'),
                      this.$("#decorate_app_favorite_search_noresult_common").show())),
              this.$("#decorate_app_favorite_search_box").show(),
              this.tracker.appstorePageView("error", t);
          },
          installPopupLoading: function () {
            this.$(".d_state_alert").hide(), this.$("#state_alert_loading").show();
          },
          installPopupAccept: function () {
            this.$(".d_state_alert").hide(), this.$("#state_alert_apply").show(), this.$("#state_alert_apply .d_open_appstore").focus();
          },
          installPopupClose: function () {
            this.$(".d_state_alert").hide();
          },
          shareFacebook: function () {
            return (
              window.open(
                "http://www.facebook.com/sharer.php?s=100&p[title]=" +
                  encodeURIComponent(this.appDetailCache.title + " 위젯을 추천합니다!") +
                  "&p[url]=" +
                  encodeURIComponent("http://zum.com/#!/appstore=detail&id=" + this.appDetailCache.widgetId + "&ref=facebook") +
                  "&p[images][0]=" +
                  encodeURIComponent(this.appDetailCache.thumbnail) +
                  "&p[summary]=" +
                  encodeURIComponent("줌닷컴에서 " + this.appDetailCache.title + " 위젯을 사용해보세요. 다양한 위젯들로 나에게 꼭 맞는 시작페이지를 만들어 볼 수 있습니다."),
                "facebook",
                "height=600,width=900,scrollbars=1"
              ),
              !1
            );
          },
          shareTwitter: function () {
            return (
              window.open(
                "http://twitter.com/intent/tweet?text=" +
                  encodeURIComponent("줌닷컴에서 " + this.appDetailCache.title + " 위젯을 사용해보세요. 다양한 위젯들로 나에게 꼭 맞는 시작페이지를 만들어 볼 수 있습니다.") +
                  "&url=" +
                  encodeURIComponent("http://zum.com/#!/appstore=detail&id=" + this.appDetailCache.widgetId + "&ref=twitter"),
                "twitter",
                "height=400,width=700,scrollbars=1"
              ),
              !1
            );
          },
          validateUploadingImageNow: function () {
            return !this.$("#decorate_app_favorite_box #thumbnail_upload_form").data("uploading");
          },
          tracker: {
            from: null,
            appstorePageView: function (e, t) {
              var n = { from: this.from || "etc", appPage: e, page: zum.page, puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] };
              if ("widget_category" === e.substring(0, 15)) {
                if (n.from === n.appPage) return;
              } else if ("detail" === e) n.appInfo = t;
              else if ("search" === e || "error" === e) n.q = t;
              else if ("custom" === e) {
                if ("custom" === n.from) return;
              } else n.appPage = "etc";
              (n.codeVersion = zum.codeVersion), ESTatTracker.push(["@AppStorePageView", n]), (this.from = e);
            },
          },
          onErrorIcon: function (t) {
            var n = e(t.currentTarget);
            n.attr("src", zum.staticBaseUrl + "/images/setting/zumwidget_default_154x154.png"), n.attr("alt", "아이콘 준비중");
          },
          onErrorPreview: function (t) {
            var n = e(t.currentTarget);
            n.attr("src", zum.staticBaseUrl + "/images/setting/zumwidget_default_preview_482x280.jpg"), n.attr("alt", "미리보기 준비중");
          },
        },
        { DEFAULT_CATEGORY: 0 }
      );
      t.a = new m();
    }.call(this, n(3), n(37), n(4), n(8)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(10), n(31), n(13), n(23);
      var s = {},
        o = new e.Router(),
        r = function () {
          var e = location.href.match(/#(.*)$/);
          return e ? e[1].replace(/!?\/*/, "") : "";
        },
        l = function () {
          var e = r();
          if (!e) return {};
          var t = {},
            n = e.split("&");
          for (var i in n)
            if (n.hasOwnProperty(i)) {
              var a = n[i].split("=", 2);
              t[decodeURIComponent(a[0])] = null == a[1] ? a[1] : decodeURIComponent(a[1]);
            }
          return t;
        };
      t.a = {
        add: function (e, t, n) {
          (s[e] = s[e] || {}),
            (s[e][t] = n),
            o.route(e, t, function () {
              var t = l();
              for (var n in s[e]) s[e][n](t);
            });
        },
        remove: function (e, t) {
          delete s[e][t];
        },
        start: function () {
          i(window)
            .off("hashchange")
            .on("hashchange", function (t) {
              var n = r(),
                i = l();
              a.each(e.history.handlers, function (e) {
                e.route && "function" == typeof e.callback && n.match(e.route) && e.callback(i);
              });
            }),
            i(window).trigger("hashchange");
        },
      };
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(63), n(10), n(23), n(17);
      var i = {},
        a = {},
        s = {},
        o = {},
        r = {},
        l = {},
        c = {},
        u = {},
        h = {},
        d = {},
        p = {},
        m = {},
        f = {},
        _ = {},
        g = {},
        w = {},
        v = {},
        b = {},
        y = 1,
        k = function (e) {
          return (o = "restest_callback_" + (e || y++)), this;
        },
        x = function (e, t) {
          return "function" == typeof e ? e.apply(this, t) : this;
        },
        S = function (e) {
          if (x(c, e)) {
            var t = e[0];
            for (var n in (x(u, e), t))
              if (t.hasOwnProperty(n)) {
                var i = (e[0] = t[n]),
                  a = i.category ? i.category.split(" ") : [],
                  o = !1;
                for (var l in a)
                  if (x(s[a[l]], e) !== this) {
                    o = !0;
                    break;
                  }
                if (o) continue;
                for (var d in i.entry) {
                  var p = (e[0] = i.entry[d]),
                    m = (p.category ? p.category.split(" ") : []).concat(a);
                  for (var l in m) if (x(r[m[l]], e) !== this) break;
                }
              }
            (e[0] = t), x(h, e);
          }
        };
      t.a = {
        create: function (e, t) {
          return (
            (r = {}),
            (s = {}),
            (l = {}),
            (d = {}),
            k(t),
            (window[o] = e[o] =
              function () {
                return (
                  (p = arguments),
                  function () {
                    var e = p;
                    i > 0 && (d[e] = new Date().getTime()), S((l[e] = arguments));
                  }
                );
              }),
            this
          );
        },
        query: function (t) {
          if (a && t) {
            var n = new Date().getTime();
            if (l[t] && (0 == i || (i > 0 && n - d[t] < 1e3 * i))) {
              setTimeout(function () {
                (p = [t]), S(l[t]);
              }, 0);
            } else {
              var s = o + "(" + JSON.stringify(t) + ")";
              e.ajax({
                url: a,
                data: { method: f, "ac-hl": _, "zumout-hourly-hl": w, "ac-size": v, "zumout-hourly-size": b, "ac-pre-tag": g, "ac-post-tag": g, option: m, query: t, _t: n },
                dataType: "jsonp",
                cache: !0,
                jsonpCallback: encodeURIComponent(s),
              });
            }
          }
          return this;
        },
        setBaseWindow: function (e) {
          return e, this;
        },
        setCallbackName: k,
        getQuery: function () {
          return p ? p[0] : void 0;
        },
        setExpireSecond: function (e) {
          return (i = e), this;
        },
        setUrl: function (e) {
          return (a = e), this;
        },
        setMethod: function (e) {
          return (f = e), this;
        },
        setAcHl: function (e) {
          return (_ = e), (g = "true" === e ? "strong" : {}), this;
        },
        setAcSize: function (e) {
          return (v = e), this;
        },
        setZumoutHl: function (e) {
          return (w = e), (g = "true" === e ? "strong" : {}), this;
        },
        setZumoutSize: function (e) {
          return (b = e), this;
        },
        setOption: function (e) {
          return (m = e), this;
        },
        setFilterHandler: function (e) {
          return (c = e), this;
        },
        setBeforeHandler: function (e) {
          return (u = e), this;
        },
        setFeedHandler: function (e, t) {
          return (s[e] = t), this;
        },
        setEntryHandler: function (e, t) {
          return (r[e] = t), this;
        },
        setAfterHandler: function (e) {
          return (h = e), this;
        },
      };
    }.call(this, n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(27), n(28), n(29), n(24), n(21), n(30), n(26);
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      var s = window.$zumapp;
      t.a = e.Model.extend(
        {
          initialize: function () {},
          defaults: { enabled: !0 },
          isGadget: function () {
            return "gadget" == this.get("type");
          },
          isLink: function () {
            return "link" == this.get("type");
          },
          isEmpty: function () {
            return "empty" == this.get("type");
          },
          isInstallable: function () {
            return this.isEmpty() || !1 === this.get("enabled");
          },
        },
        {
          makeDataByElement: function (e) {
            var t = e.data();
            return (t.prefs = s.json.parse(decodeURIComponent(t.prefs))), (t.boxinfo = this.parseBoxInfo(t.boxinfo)), (t.enabled = !e.hasClass("disabled")), t;
          },
          parseBoxInfo: function (e) {
            return "object" === a((e = e ? ('"' == (e = decodeURIComponent(e)).charAt(0) ? i.parseJSON(e) : e) : "0")) && (e = JSON.stringify(e)), e;
          },
          EMPTY_PREFS: { boxwidth: 1, type: "empty", boxinfo: "0", aid: "0", prefs: null, refresh: 0, enabled: !1 },
        }
      );
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, a, s, o) {
      n(9), n(11), n(115), n(44), n(10), n(13), n(23), n(156);
      var r = n(175),
        l = n(14),
        c = n(2),
        u = n(5),
        h = n(1),
        d = n(121),
        p = n(0),
        m = e.View.extend({
          module: null,
          selectRecommendTarget: null,
          id: "layer_favorite_site_setup",
          className: "layer_favorite_site_setup",
          isClickPreview: !0,
          isShowed: !1,
          preventClose: !0,
          recommendSites: {},
          defaultSites: {},
          myFavoriteSites: [],
          myFavoriteSiteModified: [],
          favoriteListTemp: [],
          favoriteListDefault: [],
          favoriteHistory: [],
          previewHistoryObject: [],
          isOpen: !1,
          isAlert: !1,
          isTitleBlank: !0,
          isUrlBlank: !0,
          isVaildTitle: !1,
          isVaildUrl: !1,
          alertType: "",
          LEFT_ARROW_KEY_CODE: 37,
          RIGHT_ARROW_KEY_CODE: 39,
          MAX_INPUT_TITLE_BYTE_LENGTH: 8,
          INPUT_URL_CLASS: "input_url",
          INPUT_MODE: "d_input_mode",
          INPUT_ON: "input_on",
          INPUT_URL_INIT_STRING: "",
          INPUT_TITLE_INIT_STRING: "",
          INPUT_TITLE_LENGTH_STRING_BOTTOM: "이름 입력은 15자까지만 가능합니다.",
          INPUT_TITLE_INIT_STRING_BOTTOM: "사이트 이름과 주소를 한 번 더 확인해주세요.",
          INPUT_TITLE_SAVE_STRING_BOTTOM: "설정이 변경되었습니다.",
          INPUT_TITLE_PREV_STRING_BOTTOM: "이전 설정으로 바뀌었습니다.",
          INPUT_TITLE_PREV_LAST_STRING_BOTTOM: "현재 설정이 마지막 설정입니다.",
          INPUT_TITLE_INIT_ERROR_STRING_BOTTOM: "사이트명에 입력 가능한 특수문자는<br>- _ ~ ! ? / ( ) ^ [ ] ☆ ★ ♡ ♥ 입니다.",
          MAX_INPUT_URL_LENGTH: 200,
          INPUT_IMAGE_SRC: zum.staticBaseUrl + "/images/favorite_sites/f_s_default_favicon3.png?_=" + new Date(),
          _URL_PREFIX: "http://",
          selectedTab: 1,
          $d_pop_preview_notice: "",
          MIGRATE_2_TO_3: {
            69477: "107952",
            69478: "107950",
            69483: "107947",
            69485: "108012",
            69486: "108014",
            69488: "108016",
            69490: "108018",
            69492: "108015",
            69495: "108008",
            69496: "108009",
            69497: "108010",
            69501: "107958",
            69502: "107961",
            69503: "107967",
            69504: "107964",
            69505: "107959",
            69506: "107962",
            69521: "107994",
            69523: "107995",
            69527: "108003",
            69528: "108004",
            69530: "107982",
            69535: "107986",
            69536: "107988",
            69537: "107987",
            69539: "107946",
            69540: "107983",
            72095: "107946",
            72096: "107983",
            72102: "107952",
            72103: "107950",
            75041: "108022",
            75042: "108019",
            75043: "108020",
            75053: "108023",
            95430: "107974",
          },
          initialize: function () {
            (this.events = {
              "click .d_recommend_site_label": this.clickRecommendSite,
              "click .d_item_block": this.clickPreviewSite,
              "click .d_btn_reset": this.showResetAlert,
              "click .d_btn_before": this.getHistory,
              "click .d_btn_reset_confirm": this.reset,
              "click .d_btn_alert_confirm": this.closeAlertPopup,
              "click .d_btn_close": this.checkChangedItem,
              "click .d_btn_close_confirm": this.close,
              "click .d_btn_cancel": this.cancel,
              "click .d_btn_apply": this.clickSave,
              "click .d_btn_add": this.addInput,
              "focus .d_input_title": this.setTitleFocusMode,
              "blur .d_input_title": this.setTitleBlurMode,
              "focus .d_input_url": this.setUrlFocusMode,
              "blur .d_input_url": this.setUrlBlurMode,
              "click .d_category_tab li": this.clickCategoryTab,
              "focus #favoriteSiteSearchText": this.focusSuggestSearch,
              "keyup #favoriteSiteSearchText": this.keyUpSuggestSearch,
              "click .d_layer_suggest_mask": this.closeSuggestLayer,
              "click .d_input_button": this.clickSuggestSearch,
              "click .d_btn_setup": this.close,
              "keyup .d_input_url": this.keyUpInputUrl,
              "click .d_pop_preview_notice": this.hidePreviewNoticeTip,
            }),
              this.$el.hide(),
              l.a.addLayer("layer_favorite_site_setup", this),
              this.listenTo(
                c.a,
                "close:favoriteSiteConfigLayer",
                a.bind(function () {
                  this.checkChangedItem();
                }, this)
              );
          },
          render: function () {
            this.module &&
              (this.$el.html(this.module.getHtml()),
              this.$el.show(),
              l.a.showFavorite(),
              this.updateRecommendSites(),
              this.updateDefaultSites(),
              (this.$recommendSites = this.$(".d_site_item_list")),
              (this.$itemSelectable = this.$recommendSites.find(".d_selectable_item_li")),
              (this.$boxPreview = this.$(".d_box_preview")),
              (this.$boxPreviewItem = this.$boxPreview.find("li.d_pos")),
              (this.$popBG = this.$(".d_pop_bg")),
              (this.$popSelectConfirmReset = this.$(".d_pop_select_confirm_reset")),
              (this.$inputTitle = this.$el.find(".d_input_title")),
              (this.$inputUrl = this.$el.find(".d_input_url")),
              (this.$inputUrlLength = this.$el.find(".d_input_url_length")),
              (this.$inputParent = this.$el.find(".site_item_list")),
              (this.$warningTitle = this.$el.find(".d_p_warning_title")),
              (this.$warningUrl = this.$el.find(".d_p_warning_url")),
              (this.$favoriteSiteSearchText = this.$el.find("#favoriteSiteSearchText")),
              (this.$searchBox = this.$el.find(".d_search_box")),
              (this.$layerSuggestMask = this.$el.find(".d_layer_suggest_mask")),
              (this.$textBottomNotice = this.$el.find(".d_text_bottom p.notice")),
              (this.$textBottomResult = this.$el.find(".d_text_bottom p.result")),
              (this.$directLinkBox = this.$el.find("#directLinkBox")),
              (this.$categoryTab = this.$el.find(".d_category_tab")),
              (this.$categoryBox = this.$el.find(".d_category_box")),
              (this.$d_pop_preview_notice = this.$el.find(".d_pop_preview_notice")),
              (this.$d_btn_prev_set = this.$el.find(".d_btn_prev_set")),
              this.initPreviewRecommendSite(),
              c.a.trigger("on:closeFavoriteSiteConfigLayer"),
              c.a.trigger("close:HeaderLayers")),
              d.a.init();
          },
          open: function (e) {
            (this.myFavoriteSites = e), (this.module = new r.a()), this.listenToOnce(this.module, "change", this.render), this.module.fetch();
          },
          showPreviewNoticeTip: function () {
            var e = this;
            e.$d_pop_preview_notice.show(),
              s.setTimeout(function () {
                e.$d_pop_preview_notice.fadeOut(300);
              }, 3e3),
              (this.isShowed = !0);
          },
          hidePreviewNoticeTip: function () {
            this.$d_pop_preview_notice.hide();
          },
          isShowingPreviewNoticeTip: function () {
            return "none" !== this.$(".d_pop_preview_notice").css("display");
          },
          cancel: function (e) {
            return s(e.currentTarget).closest(".pop").hide(), this.$popBG.hide(), (this.isOpen = !1), !1;
          },
          isChanged: function () {
            return this.$boxPreview.find(".d_changed").length > 0;
          },
          checkChangedItem: function (e) {
            return (this.$popSelectConfirmReset && "block" === this.$popSelectConfirmReset.css("display")) || this.close(e), !1;
          },
          close: function (e) {
            (this.favoriteHistory = []), this.$d_btn_prev_set.addClass("btn_disable"), (this.isOpen = !1), this.$el.hide(), l.a.hide(), c.a.trigger("off:closeFavoriteSiteConfigLayer");
            var t = { pos: "front_site", page: "0", cm: "close", is_changed: this.isChanged() };
            return p.a.send("@Click", t, e), !1;
          },
          clickSave: function (e) {
            var t = !0;
            return (this.isTitleBlank && this.isUrlBlank) || (t = this.addInput(e)), !!t && (this.save(!1), !1);
          },
          save: function (e) {
            if (this.$boxPreview.find("li.d_changed").length > 0) {
              c.a.trigger("off:closeFavoriteSiteConfigLayer");
              var t = [],
                n = [],
                i = window.favoriteSiteDefaultJson;
              a.each(this.$boxPreview.find("li.d_pos"), function (i) {
                var a = s(i);
                !e &&
                  a.hasClass("d_changed") &&
                  t.push({
                    id: a.data("idx"),
                    target: encodeURIComponent(a.data("target")),
                    title: encodeURIComponent(a.data("title")),
                    image2: encodeURIComponent(a.data("img")),
                    url: encodeURIComponent(a.data("url")),
                    defaultRank: a.index() + 1,
                    fixed: a.data("disabled"),
                  }),
                  n.push({
                    id: a.data("idx"),
                    target: a.data("target"),
                    title: a.data("title").length > 5 ? a.data("title").substr(0, 5) : a.data("title"),
                    image2: a.data("img"),
                    url: a.data("url"),
                    defaultRank: a.index() + 1,
                    fixed: a.data("disabled"),
                  });
              }),
                e ? u.a.setData(h.a.Names.isFavoriteSiteChanged, !1) : u.a.setData(h.a.Names.isFavoriteSiteChanged, !0),
                u.a.setData(h.a.Names.myFavoriteSite, JSON.stringify(this.mergeModifiedSites(t)), void 0, function () {
                  e ? c.a.trigger("update:favoritesite", i) : c.a.trigger("update:favoritesite", n);
                }),
                this.alertBottomText(this.INPUT_TITLE_SAVE_STRING_BOTTOM);
            }
          },
          alertBottomText: function (e) {
            var t = this;
            s.clearTimeout(this.textBottomTimer),
              this.$textBottomNotice.hide(),
              this.$textBottomResult.html('<span class="icon"></span>' + e),
              this.$textBottomResult.show(),
              (this.textBottomTimer = s.setTimeout(function () {
                t.$textBottomResult.hide(), t.$textBottomNotice.show();
              }, 3e3));
          },
          mergeModifiedSites: function (e) {
            var t = window.myFavoriteSiteModifiedJson;
            return (
              0 === (e = e || []).length ||
                (a.each(t, function (t) {
                  var n = t.defaultRank;
                  0 === a.where(e, { defaultRank: n }).length && e.push(t);
                }),
                a.sortBy(e, "defaultRank")),
              e
            );
          },
          showResetAlert: function () {
            return (this.isOpen = !0), this.$popBG.show(), this.$popSelectConfirmReset.show(), !1;
          },
          reset: function (e) {
            this.isOpen = !1;
            var t = window.favoriteSiteDefaultJson;
            a.each(this.$boxPreview.find("li.d_pos").not(".disable"), function (e) {
              var n = s(e),
                i = n.index();
              s(e).addClass("d_changed"),
                n.find("img").attr({ src: n.data("img"), alt: n.data("title") }),
                n.data("idx", t[i].id),
                n.data("url", decodeURIComponent(t[i].url)),
                n.data("img", decodeURIComponent(t[i].image2)),
                n.data("title", decodeURIComponent(t[i].title)),
                n.data("disable", t[i].fixed),
                n.data("target", t[i].target);
            });
            this.save(!0), this.$popSelectConfirmReset.hide(), this.$popBG.hide();
            return p.a.send("@Click", { pos: "front_site", page: "0", cm: "reset" }, e), this.close(e), !1;
          },
          updateRecommendSites: function () {
            var e = this;
            a.each(this.$(".d_selectable_item_li"), function (t) {
              var n = s(t),
                i = n.data("idx");
              e.recommendSites[i] = { url: n.data("url"), disabled: n.data("disabled"), idx: i, img: n.data("img"), title: n.data("title"), target: n.data("target") };
            });
          },
          updateDefaultSites: function () {
            var e = this,
              t = window.favoriteSiteDefaultJson || [];
            a.each(t, function (t) {
              var n = t.id || 0;
              n > 0 &&
                !e.recommendSites[n] &&
                (e.defaultSites[n] = { url: decodeURIComponent(t.url), disabled: t.fixed, idx: n, img: decodeURIComponent(t.image2), title: decodeURIComponent(t.title), target: t.target });
            });
          },
          clickRecommendSite: function (e) {
            this.setUrlBlurMode(!0), this.setTitleBlurMode(!0);
            var t = s(e.currentTarget).closest(".d_selectable_item_li");
            (this.selectRecommendTarget = t),
              this.isShowingPreviewNoticeTip() && this.$(".d_pop_preview_notice").hide(),
              this.selectRecommendSite(t.data("idx")),
              this.updatePreviewSite(this.$boxPreview.find(".selected"), this.$(".d_selectable_item_li.selected").data("idx"), !1),
              this.save(!1);
            var n = { pos: "front_site", page: "0", cm: "icon", tab: this.selectedTab, order: t.data("order") };
            return p.a.send("@Click", n, e), !1;
          },
          setTargetData: function (e, t, n, i, a) {
            e.find("span").prop("innerText", t), e.data("idx", n).data("url", i).data("img", a).data("title", t).data("disabled", !1);
          },
          updatePreviewSite: function (e, t, n) {
            var i = e.data("idx");
            if (0 != t && i === t) return !1;
            if ((n || this.setHistory(e), this.$boxPreviewItem.removeClass("selected changed chaning"), e.addClass("d_changed selected changed"), 0 == t)) {
              var a = this.$inputTitle.val() || this.selectRecommendTarget.data("title"),
                s = a.substr(0, 5),
                o = this.getUrlForSave(this.$inputUrl.val() || this.selectRecommendTarget.data("url"));
              e.find(".d_item").prop({ src: this.INPUT_IMAGE_SRC, alt: s }),
                e.find(".d_item").hasClass("custom_item") || e.find(".d_item").addClass("custom_item"),
                0 == e.data("idx") ? e.find(".d_custom_title").html(s) : e.find(".d_item_block").append('<span class="custom_title d_custom_title">' + s + "</span>"),
                n || this.setTargetData(e, a, t, o, this.INPUT_IMAGE_SRC),
                this.$inputTitle.val(a),
                this.$inputUrl.val(o);
            } else {
              var r = this.recommendSites[t] || this.defaultSites[t];
              e.find(".d_item").prop({ src: r.img, alt: r.title }),
                e.find(".d_item").hasClass("custom_item") && e.find(".d_item").removeClass("custom_item"),
                0 == e.data("idx") && (e.find(".d_item").removeClass("custom_item"), e.find(".d_custom_title").remove()),
                n || this.setTargetData(e, r.title, r.idx, r.url, r.img);
            }
            n && this.setTargetData(e, this.previewHistoryObject.title, this.previewHistoryObject.idx, this.previewHistoryObject.url, this.previewHistoryObject.img);
          },
          autoSelectCategory: function (e, t, n) {
            var i = this.$el.find('[data-id="' + e + '"]').data("order");
            this.showCategoryTab(i, !1, t, n);
          },
          getCategoryId: function (e) {
            return window.categoryMapJson[e] ? window.categoryMapJson[e] : 0;
          },
          getMigrateSite: function (e) {
            if (this.getCategoryId(e)) return e;
            var t = this.MIGRATE_2_TO_3[e];
            return t || 0;
          },
          initPreviewRecommendSite: function () {
            var e = s(this.$boxPreviewItem[0]),
              t = e.data("idx"),
              n = e.data("disabled");
            0 === t || n || this.selectRecommendSite(t);
          },
          selectRecommendSite: function (e) {
            this.$itemSelectable.removeClass("selected"),
              this.$itemSelectable
                .find("#item_" + e)
                .closest("li")
                .addClass("selected");
          },
          clickPreviewSite: function (e) {
            var t = s(e.currentTarget).closest("li"),
              n = this.getMigrateSite(t.data("idx")),
              i = this.getCategoryId(n);
            return (
              this.isShowingPreviewNoticeTip() && this.$(".d_pop_preview_notice").hide(),
              t.hasClass("selected") ||
                t.hasClass("changed") ||
                (this.$boxPreviewItem.removeClass("selected changed chaning"),
                t.addClass("selected"),
                this.autoSelectCategory(i, e, t.data("pos")),
                0 == i ? this.setFocusMode(t) : (this.setBlurMode(), this.selectRecommendSite(n))),
              !1
            );
          },
          setFocusMode: function (e) {
            this.setTitleFocusMode(e.data("title")), this.setUrlFocusMode(e.data("url"));
          },
          setBlurMode: function () {
            this.setUrlBlurMode(!0), this.setTitleBlurMode(!0);
          },
          getUrlForSave: function (e) {
            var t, n;
            return e.indexOf("://") > -1 ? ((n = e.split("/")), (e = e.replace(n[0], n[0].toLowerCase())), (t = n[2])) : (t = (e = "http://" + e).split("/")[0]), e.replace(t, t.toLowerCase());
          },
          addInput: function (e) {
            var t = this.$inputTitle.val(),
              n = this.getUrlForSave(this.$inputUrl.val()),
              i = this.getRecommendSiteItemIdx(n);
            if (i > 0) {
              var a = window.categoryMapJson[i],
                s = this.$categoryTab.find('li[data-id="' + a + '"]');
              this.$categoryTab.find("li").removeClass("on"),
                s.addClass("on"),
                this.$categoryBox.find(".d_item_box").removeClass("on"),
                this.$categoryBox.find(".d_item_box_" + s.data("order")).addClass("on"),
                this.selectRecommendSite(i),
                this.updatePreviewSite(this.$boxPreview.find(".selected"), i, !1);
            } else {
              if (((this.isTitleBlank = t === this.INPUT_TITLE_INIT_STRING), (this.isUrlBlank = n === this.INPUT_URL_INIT_STRING), this.isTitleBlank || this.isUrlBlank))
                return (this.alertType = "BLANK_WARNING"), this.alertBottomText(this.INPUT_TITLE_INIT_STRING_BOTTOM), !1;
              if (t.length > 15) return this.alertBottomText(this.INPUT_TITLE_LENGTH_STRING_BOTTOM), !1;
              if (!/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s\d-_~!?\/()\^\[\]☆★♡♥]*$/.test(t)) return (this.alertType = "TITLE_VALID_WARNING"), this.alertBottomText(this.INPUT_TITLE_INIT_STRING_BOTTOM), !1;
              for (var o = ["&amp", "&nbsp", "&lt", "&gt", "&quot"], r = !0, l = 0, c = o.length; l < c; l++)
                if (-1 != n.indexOf(o[l])) {
                  r = !1;
                  break;
                }
              if (!r || /[$|<>\"\']/gi.test(n) || !/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(n))
                return (this.alertType = "URL_VALID_WARNING"), this.alertBottomText(this.INPUT_TITLE_INIT_STRING_BOTTOM), !1;
              this.updatePreviewSite(this.$boxPreview.find(".selected"), 0, !1);
            }
            this.save(!1);
            var u = { pos: "front_site", page: "0", cm: "direct_input", userInputUrl: n, userInputName: t };
            return p.a.send("@Click", u, e), !0;
          },
          setUrlFocusMode: function (e) {
            var t = this.$inputUrl.val();
            (this.isUrlBlank = !1),
              this.switchInputAlertState([this.$warningUrl, this.$warningTitle], !0),
              (t.length < 1 || t === this.INPUT_URL_INIT_STRING) && (this.$inputUrl.val(this._URL_PREFIX), this.$inputUrlLength.text(this._URL_PREFIX.length)),
              "string" === o.type(e) && (this.$inputUrl.val(e), this.$inputUrlLength.text(e.length)),
              this.setInputFocusMode(this.$inputUrl);
          },
          setTitleFocusMode: function (e) {
            var t = this.$inputTitle.val();
            (this.isTitleBlank = !1),
              this.switchInputAlertState([this.$warningTitle, this.$warningUrl], !0),
              (t.length < 1 || t === this.INPUT_TITLE_INIT_STRING) && this.$inputTitle.val(""),
              ("string" !== o.type(e) && "number" !== o.type(e)) || this.$inputTitle.val(e),
              this.setInputFocusMode(this.$inputTitle);
          },
          setInputFocusMode: function (e) {
            e.parent().hasClass(this.INPUT_ON) || (this.switchInputMode("CLASS_ON"), e.parent().addClass(this.INPUT_ON));
          },
          setUrlBlurMode: function (e) {
            ("" !== this.$inputUrl.val() && this.$inputUrl.val() !== this._URL_PREFIX && "boolean" !== o.type(e)) ||
              (this.$inputUrl.val(this.INPUT_URL_INIT_STRING), this.$inputUrlLength.text(0), (this.isUrlBlank = !0), this.setInputBlurMode(this.$inputUrl));
          },
          setTitleBlurMode: function (e) {
            ("" !== this.$inputTitle.val() && "boolean" !== o.type(e)) || (this.$inputTitle.val(this.INPUT_TITLE_INIT_STRING), (this.isTitleBlank = !0), this.setInputBlurMode(this.$inputTitle));
          },
          setInputBlurMode: function (e) {
            this.switchInputMode("CLASS_OFF"), this.switchInputAlertState([this.$warningTitle, this.$warningUrl], !1), e.parent().removeClass(this.INPUT_ON);
          },
          switchInputAlertState: function (e, t) {
            if (t) e[1].hasClass("on") && (e[1].removeClass("on"), e[1].hide()), e[0].show(), e[0].addClass("on");
            else for (var n in e) e[n].removeClass("on"), e[n].hide();
          },
          switchInputMode: function (e) {
            "CLASS_ON" === e ? this.$inputParent.addClass(this.INPUT_MODE) : "CLASS_OFF" === e && this.$inputParent.removeClass(this.INPUT_MODE);
          },
          getStringByteLength: function (e) {
            for (var t = 0, n = 0; n < e.length; n++) {
              var i = escape(e.charAt(n));
              1 == i.length ? t++ : -1 != i.indexOf("%u") ? (t += 2) : -1 != i.indexOf("%") && (t += i.length / 3);
            }
            return t;
          },
          cutStringByte: function (e) {
            for (var t = e, n = 0, a = 0; a < t.length; a++)
              if ((escape(t.charAt(a)).length >= 4 ? (n += 2) : "%0D" != escape(t.charAt(a)) && n++, n > 8)) {
                "%0A" == escape(t.charAt(a)) && i--;
                break;
              }
            return t.slice(0, a);
          },
          clickCategoryTab: function (e) {
            var t = s(e.currentTarget).data("order");
            this.showCategoryTab(t, !1, e);
          },
          showCategoryTab: function (e, t, n, i) {
            (this.selectedTab = e),
              t || 7 !== e || (this.$inputTitle.val(""), this.$inputUrl.val(""), this.$inputTitle.focus()),
              this.$categoryTab.find("li").removeClass("on"),
              this.$categoryTab.find(".d_tab_" + e).addClass("on"),
              this.$categoryBox.find(".d_item_box").removeClass("on"),
              this.$categoryBox.find(".d_item_box_" + e).addClass("on");
            var s = { pos: "front_site", page: "0", cm: "tab", order: a.isUndefined(i) ? e : i };
            p.a.send("@Click", s, n);
          },
          focusSuggestSearch: function (e) {
            this.$searchBox.addClass("search_box_on");
          },
          keyUpSuggestSearch: function (e) {
            this.$searchBox.addClass("search_box_on"),
              13 === e.which
                ? this.clickSuggestSearch(e)
                : 40 === e.which
                ? this.$directLinkBox.find("li").addClass("on")
                : "" === this.$favoriteSiteSearchText.val()
                ? this.$directLinkBox.hide()
                : d.a.query();
          },
          closeSuggestLayer: function (e) {
            this.$favoriteSiteSearchText.val(""), this.$directLinkBox.hide(), this.$directLinkBox.html(""), this.$layerSuggestMask.hide(), this.$searchBox.removeClass("search_box_on");
          },
          clickSuggestSearch: function (e) {
            var t;
            if (this.$directLinkBox.find("li").length > 0) {
              var n = this.$directLinkBox.find(".site_list li .name").text();
              t = this.$directLinkBox.find(".site_list li .url").text();
              var i = this.getRecommendSiteItemIdx(t);
              if (i > 0) {
                var a = window.categoryMapJson[i],
                  s = this.$categoryTab.find('li[data-id="' + a + '"]');
                this.$categoryTab.find("li").removeClass("on"),
                  s.addClass("on"),
                  this.$categoryBox.find(".d_item_box").removeClass("on"),
                  this.$categoryBox.find(".d_item_box_" + s.data("order")).addClass("on"),
                  this.selectRecommendSite(i),
                  this.updatePreviewSite(this.$boxPreview.find(".selected"), i, !1);
              } else this.$inputTitle.val(n), this.$inputUrl.val(t), this.updatePreviewSite(this.$boxPreview.find(".selected"), 0, !1);
              this.save(!1), this.closeSuggestLayer();
              var o = { pos: "front_site", page: "0", cm: "search", userInputUrl: t, userInputName: n };
              return p.a.send("@Click", o, e), !0;
            }
            if ("" === (t = this.$favoriteSiteSearchText.val())) return !0;
            for (var r = ["&amp", "&nbsp", "&lt", "&gt", "&quot"], l = !0, c = 0, u = r.length; c < u; c++)
              if (-1 != t.indexOf(r[c])) {
                l = !1;
                break;
              }
            this.showCategoryTab(7, !0, e),
              l && !/[$|<>\"\']/gi.test(t) && /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(t)
                ? (this.$inputUrl.val(this.$favoriteSiteSearchText.val().indexOf("http") > -1 ? this.$favoriteSiteSearchText.val() : "http://" + this.$favoriteSiteSearchText.val()),
                  this.$inputTitle.val(""),
                  this.$inputTitle.focus())
                : (this.$inputTitle.val(this.$favoriteSiteSearchText.val()), this.$inputUrl.val(""), this.$inputUrl.focus()),
              this.closeSuggestLayer();
          },
          keyUpInputUrl: function (e) {
            13 === e.which && this.addInput(e);
          },
          setHistory: function (e) {
            this.favoriteHistory.push({ pos: e.data("pos"), idx: e.data("idx"), title: e.data("title"), url: e.data("url"), img: e.data("img") }), this.$d_btn_prev_set.removeClass("btn_disable");
          },
          getHistory: function () {
            if (this.favoriteHistory.length > 0) {
              var e = this.favoriteHistory.pop();
              (this.previewHistoryObject = e),
                0 === e.idx && (this.$inputTitle.val(e.title), this.$inputUrl.val(e.url)),
                this.$itemSelectable.removeClass("selected"),
                this.updatePreviewSite(this.$boxPreview.find(".pos_" + e.pos), e.idx, !0),
                this.save(!1),
                this.alertBottomText(this.INPUT_TITLE_PREV_STRING_BOTTOM),
                this.$inputTitle.val(""),
                this.$inputUrl.val(""),
                0 === this.favoriteHistory.length && this.$d_btn_prev_set.addClass("btn_disable");
            } else this.alertBottomText(this.INPUT_TITLE_PREV_LAST_STRING_BOTTOM);
          },
          getRecommendSiteItemIdx: function (e) {
            var t = e;
            return (
              t.lastIndexOf("/") !== t.length - 1 && (t += "/"),
              window.siteUrlMapJson && window.categoryMapJson && window.siteUrlMapJson[t] && window.categoryMapJson[window.siteUrlMapJson[t]] ? window.siteUrlMapJson[t] : 0
            );
          },
        });
      t.a = new m();
    }.call(this, n(4), n(8), n(3), n(3)));
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(27), n(28), n(29), n(24), n(21), n(30), n(26);
      function t(e) {
        return (t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      ((e = e || {}).templates = e.templates || {}),
        (e.templates.favoritesite_suggest_direct_link = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_box">\n    <ul class="site_list">\n        <li>\n            <a href="javascript:;" class="add_site">\n                <span class="icon"></span><strong class="name">' +
              c(
                "function" === t((o = null != (o = u(i, "title") || (null != n ? u(n, "title") : n)) ? o : l))
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 5, column: 63 }, end: { line: 5, column: 72 } } })
                  : o
              ) +
              '</strong> <span class="text">사이트 추가</span>\n                <span class="url">' +
              c(
                "function" === t((o = null != (o = u(i, "shortLink") || (null != n ? u(n, "shortLink") : n)) ? o : l))
                  ? o.call(r, { name: "shortLink", hash: {}, data: s, loc: { start: { line: 6, column: 34 }, end: { line: 6, column: 47 } } })
                  : o
              ) +
              "</span>\n            </a>\n        </li>\n    </ul>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.search_engines = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<li><a href="#none" data-index="' +
              c(
                "function" === t((o = null != (o = u(i, "index") || (null != n ? u(n, "index") : n)) ? o : l))
                  ? o.call(r, { name: "index", hash: {}, data: s, loc: { start: { line: 7, column: 32 }, end: { line: 7, column: 41 } } })
                  : o
              ) +
              '" class="d_sel_engine" title="' +
              c(
                "function" === t((o = null != (o = u(i, "engineClass") || (null != n ? u(n, "engineClass") : n)) ? o : l))
                  ? o.call(r, { name: "engineClass", hash: {}, data: s, loc: { start: { line: 7, column: 71 }, end: { line: 7, column: 86 } } })
                  : o
              ) +
              '"><span class="' +
              c(
                "function" === t((o = null != (o = u(i, "engineClass") || (null != n ? u(n, "engineClass") : n)) ? o : l))
                  ? o.call(r, { name: "engineClass", hash: {}, data: s, loc: { start: { line: 7, column: 101 }, end: { line: 7, column: 116 } } })
                  : o
              ) +
              '"><span class="blind">' +
              c(
                "function" === t((o = null != (o = u(i, "engineClass") || (null != n ? u(n, "engineClass") : n)) ? o : l))
                  ? o.call(r, { name: "engineClass", hash: {}, data: s, loc: { start: { line: 7, column: 138 }, end: { line: 7, column: 153 } } })
                  : o
              ) +
              "</span></span></a></li>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<a href="#n" class="choice d_choice" title="' +
              u(
                "function" === t((r = null != (r = h(i, "selEngineClass") || (null != n ? h(n, "selEngineClass") : n)) ? r : c))
                  ? r.call(l, { name: "selEngineClass", hash: {}, data: s, loc: { start: { line: 1, column: 44 }, end: { line: 1, column: 62 } } })
                  : r
              ) +
              '">\n\t<span class="' +
              u(
                "function" === t((r = null != (r = h(i, "selEngineClass") || (null != n ? h(n, "selEngineClass") : n)) ? r : c))
                  ? r.call(l, { name: "selEngineClass", hash: {}, data: s, loc: { start: { line: 2, column: 14 }, end: { line: 2, column: 32 } } })
                  : r
              ) +
              '">' +
              u(
                "function" === t((r = null != (r = h(i, "selEngineClass") || (null != n ? h(n, "selEngineClass") : n)) ? r : c))
                  ? r.call(l, { name: "selEngineClass", hash: {}, data: s, loc: { start: { line: 2, column: 34 }, end: { line: 2, column: 52 } } })
                  : r
              ) +
              '</span>\n\t<span class="bg_arrow"></span>\n</a>\n<ul class="dN">\n' +
              (null !=
              (o = h(i, "each").call(l, null != n ? h(n, "engines") : n, {
                name: "each",
                hash: {},
                fn: e.program(1, s, 0),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 6, column: 0 }, end: { line: 8, column: 9 } },
              }))
                ? o
                : "") +
              '<li class="plus"><a href="#n" class="d_engine_set" title="관리"><span><span class="blind">검색엔진 관리하기</span></span></a></li></ul>'
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_dictionary = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o = null != t ? t : e.nullContext || {},
              r = e.hooks.helperMissing,
              l = e.escapeExpression,
              c =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="dictionary">\n\t    <div class="item">\n\t\t    <dl>\n                <dt>' +
              l(
                (c(n, "outWord") || (t && c(t, "outWord")) || r).call(o, null != t ? c(t, "title") : t, {
                  name: "outWord",
                  hash: {},
                  data: a,
                  loc: { start: { line: 5, column: 20 }, end: { line: 5, column: 37 } },
                })
              ) +
              "</dt>\n                <dd>" +
              l(
                "function" == typeof (s = null != (s = c(n, "summary") || (null != t ? c(t, "summary") : t)) ? s : r)
                  ? s.call(o, { name: "summary", hash: {}, data: a, loc: { start: { line: 6, column: 20 }, end: { line: 6, column: 31 } } })
                  : s
              ) +
              "</dd>\n\t\t\t</dl>\n\t\t</div>\n\t</div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_direct_link = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_link">\n    <div class="item">\n        <div class="content">\n            <p class="tit">' +
              c(
                "function" === t((o = null != (o = u(i, "title") || (null != n ? u(n, "title") : n)) ? o : l))
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 4, column: 27 }, end: { line: 4, column: 36 } } })
                  : o
              ) +
              '</p>\n            <p class="link">' +
              c(
                "function" === t((o = null != (o = u(i, "shortLink") || (null != n ? u(n, "shortLink") : n)) ? o : l))
                  ? o.call(r, { name: "shortLink", hash: {}, data: s, loc: { start: { line: 5, column: 28 }, end: { line: 5, column: 41 } } })
                  : o
              ) +
              '</p>\n        </div>\n        <span class="direct">사이트로 이동</span>\n    </div>\n</div>'
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_keyword_list = e.template({
          1: function (e, t, n, i, a, s, o) {
            var r =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
            return (
              '<li><a href="#" onclick="return false;" class="tit">' +
              e.escapeExpression(
                (r(n, "getStrongKeywordHtml") || (t && r(t, "getStrongKeywordHtml")) || e.hooks.helperMissing).call(
                  null != t ? t : e.nullContext || {},
                  null != t ? r(t, "highlight") : t,
                  null != o[1] ? r(o[1], "category") : o[1],
                  null != o[1] ? r(o[1], "highlight") : o[1],
                  { name: "getStrongKeywordHtml", hash: {}, data: a, loc: { start: { line: 2, column: 52 }, end: { line: 2, column: 111 } } }
                )
              ) +
              "</a></li>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a, s, o) {
            var r,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (r = l(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? l(t, "entry") : t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0, s, o),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 9 } },
              }))
              ? r
              : "";
          },
          useData: !0,
          useDepths: !0,
        })),
        (e.templates.suggest_keyword_zumout_list = e.template({
          1: function (e, t, n, i, a) {
            var s =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
            return (
              '<li><a href="#" onclick="return false;" class="tit">' +
              e.escapeExpression(
                (s(n, "getStrongKeywordHtml") || (t && s(t, "getStrongKeywordHtml")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? s(t, "highlight") : t, {
                  name: "getStrongKeywordHtml",
                  hash: {},
                  data: a,
                  loc: { start: { line: 2, column: 52 }, end: { line: 2, column: 86 } },
                })
              ) +
              "</a></li>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = o(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? o(t, "entry") : t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 9 } },
              }))
              ? s
              : "";
          },
          useData: !0,
        })),
        (e.templates.suggest_kospi = e.template({
          1: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point">\n                        <span class="price">' +
              e.escapeExpression(e.lambda(null != (s = null != t ? o(t, "kospi") : t) ? o(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">0</span>\n                        <span class="rate">0%</span>\n                    </p>\n'
            );
          },
          3: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = (o(n, "ifPositive") || (t && o(t, "ifPositive")) || e.hooks.helperMissing).call(
                null != t ? t : e.nullContext || {},
                null != (s = null != t ? o(t, "kospi") : t) ? o(s, "point") : s,
                { name: "ifPositive", hash: {}, fn: e.program(4, a, 0), inverse: e.program(6, a, 0), data: a, loc: { start: { line: 13, column: 20 }, end: { line: 25, column: 35 } } }
              ))
              ? s
              : "";
          },
          4: function (e, t, n, i, a) {
            var s,
              o = e.lambda,
              r = e.escapeExpression,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point up">\n                        <span class="price">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "gap") : s, t)) +
              '</span>\n                        <span class="rate">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "pointabs") : s, t)) +
              "%</span>\n                    </p>\n"
            );
          },
          6: function (e, t, n, i, a) {
            var s,
              o = e.lambda,
              r = e.escapeExpression,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point down">\n                        <span class="price">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "gap") : s, t)) +
              '</span>\n                        <span class="rate">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "pointabs") : s, t)) +
              "%</span>\n                    </p>\n"
            );
          },
          8: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point">\n                        <span class="price">' +
              e.escapeExpression(e.lambda(null != (s = null != t ? o(t, "kosdaq") : t) ? o(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">0</span>\n                        <span class="rate">0%</span>\n                    </p>\n'
            );
          },
          10: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = (o(n, "ifPositive") || (t && o(t, "ifPositive")) || e.hooks.helperMissing).call(
                null != t ? t : e.nullContext || {},
                null != (s = null != t ? o(t, "kosdaq") : t) ? o(s, "point") : s,
                { name: "ifPositive", hash: {}, fn: e.program(11, a, 0), inverse: e.program(13, a, 0), data: a, loc: { start: { line: 37, column: 20 }, end: { line: 49, column: 35 } } }
              ))
              ? s
              : "";
          },
          11: function (e, t, n, i, a) {
            var s,
              o = e.lambda,
              r = e.escapeExpression,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point up">\n                        <span class="price">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "gap") : s, t)) +
              '</span>\n                        <span class="rate">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "pointabs") : s, t)) +
              "%</span>\n                    </p>\n"
            );
          },
          13: function (e, t, n, i, a) {
            var s,
              o = e.lambda,
              r = e.escapeExpression,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point down">\n                        <span class="price">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "gap") : s, t)) +
              '</span>\n                        <span class="rate">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "pointabs") : s, t)) +
              "%</span>\n                    </p>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o = null != t ? t : e.nullContext || {},
              r = e.hooks.helperMissing,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="stock_index">\n\t    <a>\n            <div class="box">\n                <p class="name">코스피</p>\n' +
              (null !=
              (s = (l(n, "ifZero") || (t && l(t, "ifZero")) || r).call(o, null != (s = null != t ? l(t, "kospi") : t) ? l(s, "point") : s, {
                name: "ifZero",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.program(3, a, 0),
                data: a,
                loc: { start: { line: 6, column: 16 }, end: { line: 26, column: 27 } },
              }))
                ? s
                : "") +
              '            </div>\n            <div class="box">\n                <p class="name">코스닥</p>\n' +
              (null !=
              (s = (l(n, "ifZero") || (t && l(t, "ifZero")) || r).call(o, null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "point") : s, {
                name: "ifZero",
                hash: {},
                fn: e.program(8, a, 0),
                inverse: e.program(10, a, 0),
                data: a,
                loc: { start: { line: 30, column: 16 }, end: { line: 50, column: 27 } },
              }))
                ? s
                : "") +
              "            </div>\n\t\t</a>\n\t</div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_lotto = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o,
              r = null != t ? t : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u = e.lambda,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="lotto">\n\t\t<div class="item">\n\t\t\t<p class="tit">' +
              c(
                "function" == typeof (o = null != (o = h(n, "title") || (null != t ? h(t, "title") : t)) ? o : l)
                  ? o.call(r, { name: "title", hash: {}, data: a, loc: { start: { line: 4, column: 18 }, end: { line: 4, column: 27 } } })
                  : o
              ) +
              '</p>\n\t\t\t<p class="date">' +
              c(
                (h(n, "lottoViewDate") || (t && h(t, "lottoViewDate")) || l).call(r, null != t ? h(t, "date") : t, {
                  name: "lottoViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 5, column: 19 }, end: { line: 5, column: 41 } },
                })
              ) +
              '</p>\n            <div class="wrap_number">\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "0") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 7, column: 35 }, end: { line: 7, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "0") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "1") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 8, column: 35 }, end: { line: 8, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "1") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "2") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 9, column: 35 }, end: { line: 9, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "2") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "3") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 10, column: 35 }, end: { line: 10, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "3") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "4") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 11, column: 35 }, end: { line: 11, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "4") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "5") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 12, column: 35 }, end: { line: 12, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "5") : s, t)) +
              '</span>\n                <span class="bonus">\n                    <span class="blind">보너스 번호</span>\n                </span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "6") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 16, column: 35 }, end: { line: 16, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "6") : s, t)) +
              "</span>\n            </div>\n\t\t</div>\n\t</div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_pension520 = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o,
              r = null != t ? t : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u = e.lambda,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="pension_lotto">\n\t\t<div class="item">\n\t        <p class="tit">연금복권 ' +
              c(
                "function" == typeof (o = null != (o = h(n, "round") || (null != t ? h(t, "round") : t)) ? o : l)
                  ? o.call(r, { name: "round", hash: {}, data: a, loc: { start: { line: 4, column: 29 }, end: { line: 4, column: 38 } } })
                  : o
              ) +
              '회</p>\n\t        <p class="date">' +
              c(
                (h(n, "pensionViewDate") || (t && h(t, "pensionViewDate")) || l).call(r, null != t ? h(t, "date") : t, {
                  name: "pensionViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 5, column: 25 }, end: { line: 5, column: 49 } },
                })
              ) +
              '</p>\n\t        <table>\n\t            <tbody>\n\t                <tr>\n                        <td class="rank">1등</td>\n                        <td class="group">' +
              c(u(null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "group") : s, t)) +
              '조</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "0") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "1") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "2") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "3") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "4") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "5") : s, t)) +
              "</td>\n\t                </tr>\n\t            </tbody>\n\t        </table>\n\t    </div>\n\t</div>\n</div>\n"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_ranking_keyword_list = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '        <li>\n            <a href="javascript:;" class="item">\n                <span class="rank_' +
              u(
                "function" === t((r = null != (r = h(i, "rank") || (null != n ? h(n, "rank") : n)) ? r : c))
                  ? r.call(l, { name: "rank", hash: {}, data: s, loc: { start: { line: 7, column: 34 }, end: { line: 7, column: 42 } } })
                  : r
              ) +
              '"></span>\n                <span class="keyword">' +
              u(
                "function" === t((r = null != (r = h(i, "keyword") || (null != n ? h(n, "keyword") : n)) ? r : c))
                  ? r.call(l, { name: "keyword", hash: {}, data: s, loc: { start: { line: 8, column: 38 }, end: { line: 8, column: 49 } } })
                  : r
              ) +
              "</span>\n" +
              (null !=
              (o = (h(i, "ifZero") || (n && h(n, "ifZero")) || c).call(l, null != n ? h(n, "delta") : n, {
                name: "ifZero",
                hash: {},
                fn: e.program(2, s, 0),
                inverse: e.program(4, s, 0),
                data: s,
                loc: { start: { line: 9, column: 16 }, end: { line: 17, column: 27 } },
              }))
                ? o
                : "") +
              "            </a>\n        </li>\n"
            );
          },
          2: function (e, t, n, i, a) {
            return '                    <span class="state_same">동일</span>\n';
          },
          4: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = (o(n, "ifGtZero") || (t && o(t, "ifGtZero")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? o(t, "delta") : t, {
                name: "ifGtZero",
                hash: {},
                fn: e.program(5, a, 0),
                inverse: e.program(7, a, 0),
                data: a,
                loc: { start: { line: 12, column: 20 }, end: { line: 16, column: 33 } },
              }))
              ? s
              : "";
          },
          5: function (e, t, n, i, a) {
            return '                        <span class="state_up">상승</span>\n';
          },
          7: function (e, t, n, i, a) {
            return '                        <span class="state_down">하락</span>\n';
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<h3 class="blind">이슈검색어</h3>\n<div class="keyword_list">\n    <ol>\n' +
              (null !=
              (s = o(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? o(t, "entry") : t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 4, column: 8 }, end: { line: 20, column: 17 } },
              }))
                ? s
                : "") +
              "    </ol>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_stock = e.template({
          1: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\t\t\t<p class="info">\n                <span class="price">' +
              e.escapeExpression(
                "function" == typeof (s = null != (s = o(n, "outPrice") || (null != t ? o(t, "outPrice") : t)) ? s : e.hooks.helperMissing)
                  ? s.call(null != t ? t : e.nullContext || {}, { name: "outPrice", hash: {}, data: a, loc: { start: { line: 7, column: 36 }, end: { line: 7, column: 48 } } })
                  : s
              ) +
              '</span>\n                <span class="num">0</span>\n                <span class="rate">0%</span>\n\t\t\t</p>\n'
            );
          },
          3: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = (o(n, "ifPositive") || (t && o(t, "ifPositive")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? o(t, "point") : t, {
                name: "ifPositive",
                hash: {},
                fn: e.program(4, a, 0),
                inverse: e.program(6, a, 0),
                data: a,
                loc: { start: { line: 12, column: 4 }, end: { line: 24, column: 19 } },
              }))
              ? s
              : "";
          },
          4: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                <p class="info up">\n                    <span class="price">' +
              c(
                "function" === t((o = null != (o = u(i, "outPrice") || (null != n ? u(n, "outPrice") : n)) ? o : l))
                  ? o.call(r, { name: "outPrice", hash: {}, data: s, loc: { start: { line: 14, column: 40 }, end: { line: 14, column: 52 } } })
                  : o
              ) +
              '</span>\n                    <span class="num">' +
              c(
                "function" === t((o = null != (o = u(i, "gap") || (null != n ? u(n, "gap") : n)) ? o : l))
                  ? o.call(r, { name: "gap", hash: {}, data: s, loc: { start: { line: 15, column: 38 }, end: { line: 15, column: 45 } } })
                  : o
              ) +
              '</span>\n                    <span class="rate">' +
              c(
                "function" === t((o = null != (o = u(i, "pointabs") || (null != n ? u(n, "pointabs") : n)) ? o : l))
                  ? o.call(r, { name: "pointabs", hash: {}, data: s, loc: { start: { line: 16, column: 39 }, end: { line: 16, column: 51 } } })
                  : o
              ) +
              "%</span>\n                </p>\n"
            );
          },
          6: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                <p class="info down">\n                    <span class="price">' +
              c(
                "function" === t((o = null != (o = u(i, "outPrice") || (null != n ? u(n, "outPrice") : n)) ? o : l))
                  ? o.call(r, { name: "outPrice", hash: {}, data: s, loc: { start: { line: 20, column: 40 }, end: { line: 20, column: 52 } } })
                  : o
              ) +
              '</span>\n                    <span class="num">' +
              c(
                "function" === t((o = null != (o = u(i, "gap") || (null != n ? u(n, "gap") : n)) ? o : l))
                  ? o.call(r, { name: "gap", hash: {}, data: s, loc: { start: { line: 21, column: 38 }, end: { line: 21, column: 45 } } })
                  : o
              ) +
              '</span>\n                    <span class="rate">' +
              c(
                "function" === t((o = null != (o = u(i, "pointabs") || (null != n ? u(n, "pointabs") : n)) ? o : l))
                  ? o.call(r, { name: "pointabs", hash: {}, data: s, loc: { start: { line: 22, column: 39 }, end: { line: 22, column: 51 } } })
                  : o
              ) +
              "%</span>\n                </p>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="stock_company"">\n\t\t<div class="item">\n\t\t\t<p class="name">' +
              u(
                "function" === t((r = null != (r = h(i, "name") || (null != n ? h(n, "name") : n)) ? r : c))
                  ? r.call(l, { name: "name", hash: {}, data: s, loc: { start: { line: 4, column: 19 }, end: { line: 4, column: 27 } } })
                  : r
              ) +
              ' <span class="num">(' +
              u(
                "function" === t((r = null != (r = h(i, "code") || (null != n ? h(n, "code") : n)) ? r : c))
                  ? r.call(l, { name: "code", hash: {}, data: s, loc: { start: { line: 4, column: 47 }, end: { line: 4, column: 55 } } })
                  : r
              ) +
              ")</span></p>\n" +
              (null !=
              (o = (h(i, "ifZero") || (n && h(n, "ifZero")) || c).call(l, null != n ? h(n, "point") : n, {
                name: "ifZero",
                hash: {},
                fn: e.program(1, s, 0),
                inverse: e.program(3, s, 0),
                data: s,
                loc: { start: { line: 5, column: 3 }, end: { line: 25, column: 14 } },
              }))
                ? o
                : "") +
              '\t\t\t<span class="time">20분 지연</span>\n\t\t</div>\n\t</div>\n</div>'
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_tvtrend = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = "function",
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n    <div class="interest">\n\t\t<div class="item">\n            <dl>\n                <dt>' +
              u(
                t((o = null != (o = h(i, "titleMin") || (null != n ? h(n, "titleMin") : n)) ? o : l)) === c
                  ? o.call(r, { name: "titleMin", hash: {}, data: s, loc: { start: { line: 5, column: 20 }, end: { line: 5, column: 32 } } })
                  : o
              ) +
              ' <span class="origin">' +
              u(
                t((o = null != (o = h(i, "channelMin") || (null != n ? h(n, "channelMin") : n)) ? o : l)) === c
                  ? o.call(r, { name: "channelMin", hash: {}, data: s, loc: { start: { line: 5, column: 54 }, end: { line: 5, column: 68 } } })
                  : o
              ) +
              "</span></dt>\n                <dd>인터넷관심도 <em>" +
              u(
                t((o = null != (o = h(i, "rank") || (null != n ? h(n, "rank") : n)) ? o : l)) === c
                  ? o.call(r, { name: "rank", hash: {}, data: s, loc: { start: { line: 6, column: 31 }, end: { line: 6, column: 39 } } })
                  : o
              ) +
              '위</em> <span class="count">(' +
              u(
                t((o = null != (o = h(i, "interest") || (null != n ? h(n, "interest") : n)) ? o : l)) === c
                  ? o.call(r, { name: "interest", hash: {}, data: s, loc: { start: { line: 6, column: 67 }, end: { line: 6, column: 79 } } })
                  : o
              ) +
              ')</span></dd>\n            </dl>\n            <span class="sort">' +
              u(
                t((o = null != (o = h(i, "broad_category") || (null != n ? h(n, "broad_category") : n)) ? o : l)) === c
                  ? o.call(r, { name: "broad_category", hash: {}, data: s, loc: { start: { line: 8, column: 31 }, end: { line: 8, column: 49 } } })
                  : o
              ) +
              "</span>\n        </div>\n    </div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_weather = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o,
              r = e.lambda,
              l = e.escapeExpression,
              c = null != t ? t : e.nullContext || {},
              u = e.hooks.helperMissing,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="weahter">\n\t\t<div class="item">\n\t\t\t<div class="today">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != t ? h(t, "now") : t) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">맑음</p>\n\t\t\t    <p class="row_01">\n\t\t\t        ' +
              l(
                "function" == typeof (o = null != (o = h(n, "title") || (null != t ? h(t, "title") : t)) ? o : u)
                  ? o.call(c, { name: "title", hash: {}, data: a, loc: { start: { line: 10, column: 11 }, end: { line: 10, column: 20 } } })
                  : o
              ) +
              ' 현재\n\t\t\t        <span class="temp">' +
              l(r(null != (s = null != t ? h(t, "now") : t) ? h(s, "temp") : s, t)) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        오늘\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != t ? h(t, "now") : t) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != t ? h(t, "now") : t) ? h(s, "maxTemp") : s, t)) +
              '°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t\t<div class="week">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "text") : s, t)) +
              '</p>\n\t\t\t    <p class="row_01">\n\t\t\t        <span class="weekday">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "dayOfWeek") : s, t)) +
              "</span>\n\t\t\t        <span>" +
              l(
                (h(n, "weatherViewDate") || (t && h(t, "weatherViewDate")) || u).call(c, null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "date") : s, {
                  name: "weatherViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 27, column: 17 }, end: { line: 27, column: 49 } },
                })
              ) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "maxTemp") : s, t)) +
              '°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t\t<div class="week">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "text") : s, t)) +
              '</p>\n\t\t\t    <p class="row_01">\n\t\t\t        <span class="weekday">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "dayOfWeek") : s, t)) +
              "</span>\n\t\t\t        <span>" +
              l(
                (h(n, "weatherViewDate") || (t && h(t, "weatherViewDate")) || u).call(c, null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "date") : s, {
                  name: "weatherViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 42, column: 17 }, end: { line: 42, column: 49 } },
                })
              ) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "maxTemp") : s, t)) +
              '°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t\t<div class="week">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "text") : s, t)) +
              '</p>\n\t\t\t    <p class="row_01">\n\t\t\t        <span class="weekday">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "dayOfWeek") : s, t)) +
              "</span>\n\t\t\t        <span>" +
              l(
                (h(n, "weatherViewDate") || (t && h(t, "weatherViewDate")) || u).call(c, null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "date") : s, {
                  name: "weatherViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 57, column: 17 }, end: { line: 57, column: 49 } },
                })
              ) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "maxTemp") : s, t)) +
              '°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t\t<div class="week">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "text") : s, t)) +
              '</p>\n\t\t\t    <p class="row_01">\n\t\t\t        <span class="weekday">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "dayOfWeek") : s, t)) +
              "</span>\n\t\t\t        <span>" +
              l(
                (h(n, "weatherViewDate") || (t && h(t, "weatherViewDate")) || u).call(c, null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "date") : s, {
                  name: "weatherViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 72, column: 17 }, end: { line: 72, column: 49 } },
                })
              ) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "maxTemp") : s, t)) +
              "°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_weather_location = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\t<li><a href="javascript:;" class="d_btn_location_list" data-reg="' +
              c(
                "function" === t((o = null != (o = u(i, "reg") || (null != n ? u(n, "reg") : n)) ? o : l))
                  ? o.call(r, { name: "reg", hash: {}, data: s, loc: { start: { line: 2, column: 66 }, end: { line: 2, column: 73 } } })
                  : o
              ) +
              '">' +
              c(
                "function" === t((o = null != (o = u(i, "name") || (null != n ? u(n, "name") : n)) ? o : l))
                  ? o.call(r, { name: "name", hash: {}, data: s, loc: { start: { line: 2, column: 75 }, end: { line: 2, column: 83 } } })
                  : o
              ) +
              "</a></li>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = o(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? o(t, "items") : t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 9 } },
              }))
              ? s
              : "";
          },
          useData: !0,
        })),
        (e.partials = e.templates);
    }.call(this, n(37)));
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(10), n(31), n(13), n(40);
      t.a = {
        whiteProtocol: ["http://", "https://", "ftp://"],
        removeProtocol: function (e) {
          if (!e) return "";
          var t = this._extractProtocol(e);
          return this._isWhiteProtocol(t) ? e.replace(t, "") : e;
        },
        _removeEndingSlashes: function (e) {
          return (e || "").replace(/\/+$/, "");
        },
        checkValidUrl: function (e) {
          var t = this._extractProtocol(e);
          return !!this._isWhiteProtocol(t);
        },
        getValidUrl: function (t, n) {
          t = n ? e.trim(t) : this._removeEndingSlashes(e.trim(t));
          var i = this._extractProtocol(t);
          return "" != t && i != t && (null === i ? "http://" + t : !!this._isWhiteProtocol(i) && t);
        },
        _isWhiteProtocol: function (e) {
          if (!e) return !1;
          for (var t in this.whiteProtocol) if (e == this.whiteProtocol[t]) return !0;
          return !1;
        },
        _extractProtocol: function (e) {
          return e.match(/^[^.:]+:[\/]*/);
        },
      };
    }.call(this, n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(27), n(28), n(29), n(11), n(24), n(21), n(30), n(26);
      var a = n(5),
        s = n(1);
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      var r = window.$zumapp;
      t.a = {
        pageView: function (t, n) {
          var i = {
            appInfo: t,
            isPrefsChange: e.isUndefined(n) ? [] : n,
            layout: a.a.getLayoutType(zum.page),
            hbv: a.a.getData(s.a.Names.homeBoxesVersion),
            page: zum.page,
            codeVersion: zum.codeVersion,
            puid: window.puid || "",
            variants: window.variantsStat || [],
            targets: window.targetsStat || [],
          };
          ESTatTracker.push(["@AppPageView", i]);
        },
        linkappClick: function (e, t) {
          var n = {
            appInfo: e,
            layout: a.a.getLayoutType(zum.page),
            hbv: a.a.getData(s.a.Names.homeBoxesVersion),
            page: zum.page,
            codeVersion: zum.codeVersion,
            puid: window.puid || "",
            variants: window.variantsStat || [],
            targets: window.targetsStat || [],
          };
          i.extend(n, t), ESTatTracker.push(["@AppMoveUrl", n]);
        },
        moveUrl: function (e, t) {
          if ("object" === o(window.ESTatTracker))
            try {
              var n = e.collection.indexOf(e),
                i = {
                  appInfo: [e.get("aid")],
                  landingPage: t,
                  index: n,
                  puid: window.puid || "",
                  variants: window.variantsStat || [],
                  targets: window.targetsStat || [],
                  codeVersion: zum.codeVersion,
                };
              (i.isPrefsChange = e.get("prefs") ? i.appInfo : []),
                (i.hbv = a.a.getData(s.a.Names.homeBoxesVersion)),
                (i.page = zum.page),
                (i.layout = zum.layout[zum.page].type),
                void 0 !== i.appInfo && window.ESTatTracker.push(["@AppMoveUrl", i]);
            } catch (e) {
              r.debug.msg("Exception on click stats:" + e);
            }
        },
      };
    }.call(this, n(8), n(3)));
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(10), n(13);
      var i = /%[0-9A-F]{2}/g,
        a = /[a-zA-Z0-9._\-\(\)'!~*]/g;
      t.a = {
        isFullURLEncodedValue: function (t) {
          return !t || ((t = (t = t.replace(i, "")).replace(a, "")), e.isEmpty(t));
        },
        safeDecodeURIComponent: function (e) {
          if (this.isFullURLEncodedValue(e))
            try {
              return decodeURIComponent(e);
            } catch (e) {}
          return e;
        },
      };
    }.call(this, n(8)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(9), n(17);
      var a = n(89),
        s = n(0);
      n(6);
      t.a = e.View.extend({
        currentIdx: 0,
        currentRank: 0,
        currentListIdx: 0,
        currentListRank: 0,
        maxRankCount: [],
        totalCount: 1,
        pageBlockSize: 10,
        maxRankListBlockSize: 10,
        rollingInterval: 1500,
        isRolling: !1,
        isListRolling: !1,
        rollingID: null,
        listRollingID: null,
        startRollingID: null,
        keywords: null,
        rankingDateTime: null,
        updownAnimationPixel: "22px",
        initialize: function (e) {
          var t = this;
          (this.module = e.module || new a.a()),
            this.listenTo(this.module, "change", this.moduleUpdated),
            (this.isMiniHeader = this.$el.hasClass("mini_header_issue_keyword_wrap")),
            (this.startRollingID = i.setTimeout(
              function () {
                t.startRolling();
              },
              1e3,
              this.startRollingID
            ));
          for (var n = this.$el.find("ul"), s = 1; s < n.length; s++) {
            var o = i(n[s]).find("li").length;
            0 !== o && this.maxRankCount.push(o);
          }
          this.events = {
            "mouseenter .issue_keyword": this.mouseEnterIssueKeyword,
            "mouseenter .issue_keyword_total": this.mouseEnterIssueKeyword,
            "mouseleave .issue_keyword": this.mouseLeaveIssueKeyword,
            "mouseleave .issue_keyword_total": this.mouseLeaveIssueKeyword,
            "click .d_btn_close": this.closeRollingPopup,
          };
        },
        moduleUpdated: function () {
          var e = this.module.getJSON();
          (this.keywords = e.items), (this.rankingDateTime = e.rankingDateTime);
        },
        prev: function (e) {
          s.a.send(s.a.RankingBoxStat.eventName.click, s.a.RankingBoxStat.appendStat({ cm: s.a.RankingBoxStat.cm.issue.paging }), e),
            this.render((this.currentIdx + this.totalCount - 1) % this.totalCount);
        },
        next: function (e, t) {
          e || s.a.send(s.a.RankingBoxStat.eventName.click, s.a.RankingBoxStat.appendStat({ cm: s.a.RankingBoxStat.cm.issue.paging }), t), this.render((this.currentIdx + 1) % this.totalCount);
        },
        clickIssueKeywordTab: function (e, t) {
          if (e.hasClass("selected")) return !1;
          if ((this.$el.find(".d_issue_keyword_tab").removeClass("selected"), !0 === t)) {
            var n = { pos: !0 === this.isMiniHeader ? "front_miniheader" : "pn_issuetab", cm: "issue_paging" };
            s.a.send("@Click", n);
          }
          e.hasClass("issue_keyword_tab_0")
            ? (this.$el.find(".issue_keyword_tab_0").addClass("selected"), this.stopRolling(), (this.currentIdx = 0), (this.currentRank = 0), (this.currentListRank = 0), this.startRolling())
            : (this.$el.find(".issue_keyword_tab_1").addClass("selected"), this.stopRolling(), (this.currentIdx = 1), (this.currentRank = 0), (this.currentListRank = 10), this.startRolling());
        },
        mouseEnterIssueKeyword: function (e) {
          this.$el.addClass("view-total");
        },
        mouseLeaveIssueKeyword: function (e) {
          this.$el.removeClass("view-total");
        },
        createQueryURL: function (e, t, n) {
          var i = this.isMiniHeader ? "g_real1_mini.top" : "g_real1.top";
          return "https://search.zum.com/search.zum?query=" + encodeURIComponent(e) + "&qm=" + i + "&real1_id=" + t + "&real1_type=" + n + "&method=uni&option=accu";
        },
        getArrow: function (e) {
          return 0 === e ? { style: "same", korean: "동일" } : 99 === e ? { style: "up", korean: "상승" } : e < 0 ? { style: "down", korean: "하락" } : { style: "up", korean: "상승" };
        },
        updateKeyword: function () {
          var e = this,
            t = this.$(".d_rank_list");
          if (e.keywords)
            for (var n = 0; n < t.length; n++) {
              var a = t.eq(n);
              0 == n
                ? i.each(a.find(".d_rank"), function (t, n) {
                    var a = t;
                    if (e.keywords[a] && e.keywords[a].length > 1) {
                      var s = e.keywords[a][0],
                        o = i(n).find(".d_btn_keyword");
                      o.prop("href", e.createQueryURL(s, a + 1, i(n).data("type"))), o.find(".d_keyword").text(s);
                    }
                  })
                : i.each(a.find(".d_rank"), function (t, a) {
                    var s = (n - 1) * e.pageBlockSize + t;
                    if (e.keywords[s] && e.keywords[s].length > 1) {
                      var o = e.keywords[s][0],
                        r = i(a).find(".d_ready");
                      r.prop("href", e.createQueryURL(o, s + 1, i(a).data("type"))), r.find(".d_keyword").text(o);
                      var l = e.getArrow(e.keywords[s][1]);
                      r.find(".d_rank_stat").removeClass("up down same new").addClass(l.style).text(l.korean);
                    }
                  });
            }
          e.rankingDateTime && this.$(".d_update_time").text(this.rankingDateTime + " 기준");
        },
        startRolling: function () {
          this.isRolling = !0;
          var e = this;
          0 === this.currentIdx && 0 === this.currentRank && this.updateKeyword(), this.removeAllRankOn();
          var t = this.$el
              .find(".list_body .d_rank_keyword_" + this.currentIdx)
              .find(".d_rank")
              .eq(this.currentRank),
            n = this.$el.find(".issue_keyword .d_rank_keyword").find(".d_rank");
          t.addClass("on"), n.removeClass("on"), n.eq(this.currentListRank).removeClass("on_ready").addClass("on"), n.eq(this.nextListRankIndex()).addClass("on_ready");
          var a = t.find("a.d_ready"),
            s = t.find("a").not(".d_ready");
          a.css("top", this.updownAnimationPixel).animate({ top: 0 }, 400, function () {
            i(this).removeClass("d_ready"), s.addClass("d_ready"), s.find(".d_keyword").text(i(this).find(".d_keyword").text()), s.prop("href", i(this).prop("href"));
            var e = i(this).find(".d_rank_info span");
            s.find(".d_rank_info span").prop("class", e.prop("class")).text(e.text());
          }),
            s.css("top", 0).animate({ top: "-" + this.updownAnimationPixel }, 400, function () {
              i(this).css("top", e.updownAnimationPixel),
                e.isLastRank(e.currentIdx, e.currentRank + 1)
                  ? (clearTimeout(e.rollingID),
                    (e.rollingID = setTimeout(
                      function () {
                        e.next.call(e, !0);
                      },
                      e.rollingInterval,
                      e.rollingID
                    )))
                  : e.isRolling &&
                    ((e.currentRank = (e.currentRank + 1) % e.maxRankCount[e.currentIdx]),
                    (e.currentListRank = e.nextListRankIndex()),
                    clearTimeout(e.rollingID),
                    (e.rollingID = setTimeout(
                      function () {
                        e.startRolling.call(e);
                      },
                      e.rollingInterval,
                      e.rollingID
                    )));
            });
        },
        removeAllRankOn: function () {
          var e = this.$el.find(".d_rank");
          e.find("a").stop().removeAttr("style"), e.find(".d_ready").css("top", "22px"), e.removeClass("on");
        },
        nextListRankIndex: function () {
          var e = this.currentListRank + 1;
          return e >= this.maxRankListBlockSize && (e = 0), e;
        },
        stopRolling: function () {
          (this.isRolling = !1), (this.isListRolling = !1), this.removeAllRankOn(), clearTimeout(this.rollingID), i.clearTimeout(this.startRollingID);
        },
        render: function (e) {
          this.stopRolling(),
            (this.currentRank = 0),
            (this.currentListRank = 0 === e ? 0 : 10),
            this.$el.find(".d_issue_keyword_tab").removeClass("selected"),
            this.$el.find(".issue_keyword_tab_" + e).addClass("selected"),
            (this.currentIdx = e);
          var t = this;
          this.rollingID = i.setTimeout(
            function () {
              t.startRolling.call(t);
            },
            0,
            this.rollingID
          );
        },
        isLastRank: function (e, t) {
          return t === this.maxRankCount[e];
        },
        closeRollingPopup: function () {
          this.$el.removeClass("view-total");
        },
        unload: function () {
          this.stopRolling();
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/news/newsbox",
        fetch: function (t) {
          e.Model.prototype.fetch.call(this, { dataType: "html", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { mp: t || "0" }) });
        },
        parse: function (e) {
          return { html: e };
        },
      });
    }.call(this, n(4), n(3)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(27), n(28), n(29), n(9), n(11), n(24), n(46), n(21), n(10), n(36), n(30), n(23), n(40), n(26);
      var s = n(5),
        o = n(1),
        r = n(166),
        l = n(14),
        c = n(7),
        u = n(120),
        h = n(2);
      function d(e) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      var p = e.View.extend({
        module: null,
        id: "layer_config",
        className: "box_layer layer_config",
        shareFacebook: null,
        shareTwitter: null,
        initialize: function () {
          this.events = {
            "click .d_layer_close": this.close,
            "mouseenter .d_tab": this.hoverStartTab,
            "mouseleave .d_tab": this.hoverEndTab,
            "click .d_cancel_btn": this.close,
            "click .d_search_engine a": this.selectEngine,
            "change .d_search_engine input": this.changeEngine,
            dblclick: this.preventEvent,
            "click #search_target_blank,#search_target_self": this.selectSearchTarget,
            "click #keep_search_engine,#keep_search_engine_no": this.selectKeepEngine,
            "click .d_main_paging .d_main_page_setting": this.mainPageSetting,
            "click .d_help_btn": this.mainPageSettingHelp,
            "click .d_help_btn_close": this.mainPageSettingHelpClose,
            "click .d_url_change": this.changeZumpageUrl,
            "click #url_private_0,#url_private_1": this.selectPrivateConfig,
            "click .d_btn_tab": this.storeTab,
            "click .d_apply_btn": this.applyConfig,
            "click .d_copy_url": this.copyMyZumUrl,
            "click .d_setting_reset": this.resetConfig,
            "click .d_share_facebook": this.openShareFacebook,
            "click .d_share_twitter": this.openShareTwitter,
          };
        },
        setup: function () {
          (this.module = new r.a()),
            (this.shareFacebook = new u.a({
              type: "facebook",
              title: "함께 쓰는 시작페이지, 줌페이지",
              url: zum.baseUrl + "/" + zum.zumpageId,
              imgUrl: zum.staticBaseUrl + "/images/zumpageicon.png",
              summary: "우리가족, 우리반, 우리회사 줌페이지를 만들어서,\r\n주변 친구들과 함께 써봐요!",
            })),
            (this.shareTwitter = new u.a({ type: "twitter", url: zum.baseUrl + "/" + zum.zumpageId, summary: "더 넓은 검색―줌닷컴의 함께 쓰는 시작페이지, 이곳은 줌페이지입니다." })),
            (this.shareUrl = zum.baseUrl + "/" + zum.zumpageId),
            this.listenToOnce(this.module, "change", this.render),
            this.module.fetch();
        },
        openShareFacebook: function () {
          return this.shareFacebook.open(), !1;
        },
        openShareTwitter: function () {
          return this.shareTwitter.open(), !1;
        },
        copyMyZumUrl: function (e) {
          return window.clipboardData && window.clipboardData.setData("Text", this.shareUrl) && alert("주소복사가 완료되었습니다.\n붙여넣고자 하는 곳에 Ctrl + V 하세요"), !1;
        },
        isValidUrl: function (e) {
          return i.isEmpty(e) ? (alert(this.alertMsg.empty), !0) : !1 === /^[a-zA-Z0-9]{1,50}$/.test(e) && (alert(this.alertMsg.invalid), !0);
        },
        changeZumpageUrl: function (e) {
          if (!confirm("입력하신 주소로 변경하시겠습니까?\n주소는 단 1회 변경할 수 있으니 신중히 선택해 주세요.")) return !1;
          var t = a.trim(this.$("#url").val()),
            n = this;
          return (
            this.isValidUrl(t) ||
              a.ajax({
                type: "POST",
                url: "/user/change/url",
                data: { newUrl: t, from: zum.zumpageId },
                success: function (e) {
                  if (e.success)
                    n.$(".d_tp1").hide(),
                      n.$(".d_txt_url").text(zum.baseUrl + "/" + t),
                      n.$(".d_url_help2 p").text(n.zpudFormat(parseInt(e.result.urlDate)) + "에 주소가 변경되었습니다."),
                      n.$(".d_tp2").show(),
                      (n.shareUrl = zum.baseUrl + "/" + t),
                      o.a.setData(o.a.Names.zumpageUpdateDate, parseInt(e.result.urlDate)),
                      (zum.zumpageId = t);
                  else
                    switch (e.result.status) {
                      case "already":
                        alert(n.alertMsg.already);
                        break;
                      case "overlap":
                        alert(n.alertMsg.overlap);
                        break;
                      case "forbiden":
                        alert(n.alertMsg.forbiden);
                        break;
                      case "notAuth":
                        alert(n.alertMsg.notAuth);
                        break;
                      case "empty":
                        alert(n.alertMsg.empty);
                        break;
                      case "invalid":
                        alert(n.alertMsg.invalid);
                        break;
                      case "reserved":
                        alert(n.alertMsg.reserved);
                        break;
                      default:
                        alert(n.alertMsg.notfound);
                    }
                },
                error: function () {},
              }),
            !1
          );
        },
        zpudFormat: function (e) {
          var t = new Date(e);
          return (
            this.leadingZeros(t.getFullYear(), 4) +
            "." +
            this.leadingZeros(t.getMonth() + 1, 2) +
            "." +
            this.leadingZeros(t.getDate(), 2) +
            " " +
            this.leadingZeros(t.getHours(), 2) +
            ":" +
            this.leadingZeros(t.getMinutes(), 2)
          );
        },
        leadingZeros: function (e, t) {
          var n = "";
          if ((e = e.toString()).length < t) for (var i = 0; i < t - e.length; i++) n += "0";
          return n + e;
        },
        alertMsg: {
          already: "이미 변경되었습니다.",
          overlap: "해당 주소는 이미 사용중입니다.",
          forbiden: "권한이 없어 변경할 수 없습니다.",
          notfound: "일시적인 장애입니다.",
          notAuth: "로그인 후 다시 시도해 주세요.",
          empty: "주소를 입력해 주세요.",
          invalid: "올바른 형식의 주소가 아닙니다.",
          reserved: "사용할 수 없는 주소입니다.",
        },
        selectPrivateConfig: function (e) {
          "url_private_0" === a(e.currentTarget).attr("id") ? (this.tmpPrivateConfig = "0") : (this.tmpPrivateConfig = "1");
        },
        resetConfig: function () {
          return (
            !!confirm("설정을 초기화하면 다시 복구할 수 없습니다.\n\n진행하시겠습니까?") &&
            (this.resetProcessing || (this.$(".d_setting_reset a").addClass("ing"), (this.resetProcessing = !0), s.a.resetData(this, this.resetSuccess, this.resetError)), !1)
          );
        },
        resetSuccess: function (e) {
          if (((this.resetProcessing = !1), e.success))
            return o.a.isAuth() ? alert("초기화 완료 후 내 줌페이지로 이동합니다.") : alert("초기화 완료 후 메인 페이지로 이동합니다."), void (location.href = "/" + zum.zumpageId);
          alert("초기화에 실패하였습니다. 잠시 후 다시 시도해주세요."), this.$(".d_setting_reset a").removeClass("ing");
        },
        resetError: function (e, t, n) {
          (this.resetProcessing = !1), alert("초기화에 실패하였습니다. 잠시 후 다시 시도해주세요."), this.$(".d_setting_reset a").removeClass("ing");
        },
        selectSearchTarget: function (e) {
          "search_target_blank" === a(e.currentTarget).attr("id") ? (this.tmpSearchTarget = "0") : (this.tmpSearchTarget = "1");
        },
        selectKeepEngine: function (e) {
          "keep_search_engine" === a(e.currentTarget).attr("id") ? (this.tmpKeepEngine = "1") : (this.tmpKeepEngine = "0");
        },
        applyConfig: function () {
          var e;
          o.a.getData(o.a.Names.linkTarget) !== (e = this.$("#link_target_item_1").prop("checked") ? "1" : "0") && s.a.setData(o.a.Names.linkTarget, e),
            (this.tmpEngines = i.without(this.tmpEngines, "0"));
          var t = this.$el.find(".d_main_paging .on").index();
          t != o.a.getData(o.a.Names.homePage) && s.a.setData(o.a.Names.homePage, t);
          var n = i
            .sortBy(i.uniq(this.tmpEngines), function (e) {
              return parseInt(e);
            })
            .join("|");
          (c.a.engines = "0|" + (n || "")),
            (c.a.searchTarget = this.tmpSearchTarget || "1"),
            (c.a.keepEngine = this.tmpKeepEngine || "0"),
            s.a.setData(o.a.Names.engines, c.a.engines),
            s.a.setData(o.a.Names.searchTarget, c.a.searchTarget),
            s.a.setData(o.a.Names.keepEngine, c.a.keepEngine),
            i.indexOf(this.tmpEngines, c.a.selEngine) < 0 && (c.a.selEngine = "0");
          var a = this,
            r = function () {
              h.a.trigger("render:searchEngineBox"), a.close();
            };
          return (
            "1" === c.a.keepEngine ? s.a.setData(o.a.Names.selEngine, c.a.selEngine, void 0, r) : s.a.setData(o.a.Names.selEngine, "0", void 0, r),
            s.a.setData(o.a.Names.zumpagePrivateUrl, this.tmpPrivateConfig),
            !1
          );
        },
        mainPageSetting: function (e) {
          var t = a(e.currentTarget),
            n = t.closest(".d_lc_home"),
            i = n.find(".d_main_paging ul li");
          i.removeClass("on").removeClass("on_next").removeClass("on_prev");
          var s = t.parent().index();
          return (
            s - 1 >= 0 && i.eq(s - 1).addClass("on_prev"),
            i.eq(s).addClass("on"),
            i.eq(s + 1).addClass("on_next"),
            n.find(".d_home_setting").html("'<strong>" + (0 == s ? "메인" : s) + " 페이지</strong>'가 홈으로 선택되었습니다."),
            !1
          );
        },
        mainPageSettingHelpOn: function () {
          return this.$el.find(".d_home_help").addClass("home_help_on"), !1;
        },
        mainPageSettingHelpClose: function () {
          return this.$el.find(".d_home_help").removeClass("home_help_on"), !1;
        },
        mainPageSettingHelp: function () {
          this.$el.find(".d_home_help").hasClass("home_help_on") ? this.mainPageSettingHelpClose() : this.mainPageSettingHelpOn();
        },
        selectEngine: function (e) {
          var t = a(e.currentTarget);
          return t.next().prop("checked", !t.next().prop("checked")), this.changeEngine(e, t.next()), !1;
        },
        changeEngine: function (e, t) {
          var n = "object" === d(t) ? t : a(e.currentTarget),
            s = n.prop("checked") ? n.val() : void 0;
          return s ? (n.parent().addClass("on"), (this.tmpEngines = i.union(this.tmpEngines, [s]))) : (n.parent().removeClass("on"), (this.tmpEngines = i.without(this.tmpEngines, n.val()))), !1;
        },
        preventEvent: function (e) {
          return e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1), !1;
        },
        render: function () {
          if (
            (this.$el.html(this.module.getHtml()),
            (this.$configBasic = this.$el.find("#config_basic")),
            (this.$configPage = this.$el.find("#config_page")),
            this.$configBasic.addClass(this.$configBasic.data("class")),
            !zum.browser.msie)
          ) {
            this.$el.find(".d_copy_url").hide();
            var e = this.$el.find("#my_url");
            e.width(e.width() + 70);
          }
          l.a.addLayer("layer_config", this), this.open(this.forceConfig);
        },
        forceConfig: void 0,
        open: function (e) {
          (this.forceConfig = e),
            this.module ? (this.initValue(), o.a.isAuth() && zum.isOwner && !e ? this.openZumpage() : this.openConfig(), l.a.show("layer_config"), c.a.disableSearchboxKeydown()) : this.setup();
        },
        initValue: function (e) {
          var t = o.a.getData(o.a.Names.zumpagePrivateUrl);
          o.a.isAuth()
            ? (a("#url_private_0,#url_private_1").prop("disabled", !1),
              "1" == t ? (this.$("#url_private_1").prop("checked", !0), (this.tmpPrivateConfig = 1)) : (this.$("#url_private_0").prop("checked", !0), (this.tmpPrivateConfig = 0)),
              a("#url").val(zum.zumpageId))
            : a("#url_private_0,#url_private_1").prop("disabled", !0);
          var n = o.a.getData(o.a.Names.zumpageUpdateDate);
          "number" == typeof n &&
            n > 0 &&
            (this.$(".d_tp1").hide(),
            this.$(".d_txt_url").text(zum.baseUrl + "/" + zum.zumpageId),
            this.$(".d_tp2").show(),
            this.$(".d_url_help2 p").text(this.zpudFormat(n) + "에 주소가 변경되었습니다."));
          var r = o.a.getData(o.a.Names.linkTarget),
            u = "0|" + (o.a.getData(o.a.Names.engines) || zum.settings.base[o.a.Names.engines]),
            h = i.uniq(u.split("|"));
          (this.tmpSearchTarget = "" + (o.a.getData(o.a.Names.searchTarget) || zum.settings.base[o.a.Names.searchTarget] || "1")),
            (this.tmpKeepEngine = "" + (o.a.getData(o.a.Names.keepEngine) || zum.settings.base[o.a.Names.keepEngine] || "0")),
            (this.tmpEngines = []),
            (this.tmpPage = o.a.getData(o.a.Names.homePage)),
            "1" === r ? this.$el.find("#link_target_item_1").prop("checked", !0) : this.$el.find("#link_target_item_0").prop("checked", !0),
            "0" === this.tmpSearchTarget ? this.$el.find("#search_target_blank").prop("checked", !0) : this.$el.find("#search_target_self").prop("checked", !0),
            this.$el.find(".sel_search li").removeClass("on"),
            this.$el.find(".sel_search li input").prop("checked", !1);
          for (var d = 0, p = h.length; d < p; d++)
            c.a.engineMap.hasOwnProperty(h[d]) &&
              (this.$el.find(".sel_search .li_" + h[d]).addClass("on"), this.$el.find(".sel_search .li_" + h[d] + " input").prop("checked", !0), this.tmpEngines.push(h[d]));
          "1" === this.tmpKeepEngine ? this.$el.find("#keep_search_engine").prop("checked", !0) : this.$el.find("#keep_search_engine_no").prop("checked", !0);
          var m = s.a.getMyzumPageCount(),
            f = "<li" + (0 == this.tmpPage ? ' class="on"' : "") + '><a href="#n" class="zum d_main_page_setting" title="메인 페이지"><span class="blind">메인 페이지</span></a></li>';
          for (d = 1; d <= m; d++) {
            f += "<li";
            var _ = "";
            d == this.tmpPage && (_ = "on"),
              d - 1 == this.tmpPage && (_ += " on_next"),
              _.length > 0 && (f += " class=" + _),
              (f += '><a href="#n" class="d_main_page_setting" title="' + d + ' 페이지">' + d + "</a></li>");
          }
          this.$el.find(".d_main_paging ul").html(f),
            this.$el.find(".d_home_setting").html("'<strong>" + (0 == this.tmpPage ? "메인" : this.tmpPage) + " 페이지</strong>'가 홈으로 선택되었습니다."),
            l.a.show("layer_config");
        },
        openConfig: function () {
          this.$configBasic.addClass("on"), this.$configPage.removeClass("on");
        },
        openZumpage: function () {
          this.$configPage.addClass("on"), this.$configBasic.removeClass("on");
        },
        close: function () {
          return this.$el.hide(), l.a.hide("layer_config"), c.a.enableSearchboxKeydown(), !1;
        },
        storeTab: function (e) {
          switch (a(e.currentTarget).parents(".d_layer:first").index()) {
            case 0:
              this.openConfig();
              break;
            case 1:
              o.a.isAuth() && this.openZumpage();
          }
          return !1;
        },
        hoverStartTab: function (e) {
          if (!o.a.isAuth())
            switch (a(e.currentTarget).parents(".d_layer:first").index()) {
              case 1:
                this.$el.find(".d_page_help").show();
            }
          return !1;
        },
        hoverEndTab: function (e) {
          if (!o.a.isAuth())
            switch (a(e.currentTarget).parents(".d_layer:first").index()) {
              case 1:
                this.$el.find(".d_page_help").hide();
            }
          return !1;
        },
      });
      t.a = new p();
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/rankingBox",
        fetch: function () {
          e.Model.prototype.fetch.call(this, { dataType: "json", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { rankingBoxData: "issueKeyword" }) });
        },
        parse: function (e) {
          return { json: e };
        },
        getJSON: function () {
          return this.attributes.json;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/hub/contentsbox",
        defaults: { html: "", fetchTime: 0 },
        fetch: function (t) {
          e.Model.prototype.fetch.call(this, { type: "GET", dataType: "html", url: this.url, data: i.extend({}, a.a.getAjaxCommonRequestParam(), { tab: t }) });
        },
        parse: function (e) {
          return { html: e, fetchTime: +new Date() };
        },
        getHtml: function () {
          return this.attributes.html;
        },
        isValid: function () {
          return this.attributes.fetchTime > +new Date() - 200;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      var s = n(6);
      t.a = e.Model.extend({
        url: "/view/news/popular",
        defaults: { html: "", fetchTime: 0 },
        fetch: function (t) {
          e.Model.prototype.fetch.call(this, i.extend({ dataType: "html", data: a.extend({}, s.a.getAjaxCommonRequestParam(), { mp: this.id || "0" }) }, t));
        },
        parse: function (e) {
          return { html: e, fetchTime: +new Date() };
        },
        getHtml: function () {
          return this.attributes.html;
        },
        isValid: function () {
          return this.attributes.fetchTime > +new Date() - 6e4;
        },
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {},
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(94), n(55);
  },
  function (e, t, n) {
    "use strict";
    (function (e, t) {
      n(27), n(28), n(29), n(9), n(11), n(24), n(44), n(73), n(74), n(21), n(62), n(10), n(36), n(30), n(13), n(23), n(40), n(59), n(26), n(17);
      var i = n(50);
      n(55);
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function o() {
        parent.searchObjects && parent.searchObjects.getObjects() && this.initialize();
      }
      o.prototype = {
        initialize: function () {
          var n,
            o = {},
            r = {};
          (Number.prototype.currency = function () {
            for (var e = this.toString().split("."), t = "", n = e[0].length - 3; n >= 0; n -= 3) t = "," + e[0].substr(n, 3) + t;
            return (t = 0 == (n += 3) ? t.substr(1) : e[0].substr(0, n) + t), e[1] && (t += "." + e[1]), t;
          }),
            (Number.prototype.roundFloat = function (e) {
              return Math.round(this * Math.pow(10, e)) / Math.pow(10, e);
            }),
            (Array.prototype.dedup = function () {
              for (var e = [], t = 0, n = this.length; t < n; ++t) void 0 === e[this[t]] && (e[this[t]] = 1);
              for (var t in ((this.length = 0), e)) Array.hasOwnProperty.call(e, t) && (this[this.length] = t);
              return this;
            });
          var l,
            c,
            u = e.browser,
            h = { nowDirectLinkList: [], nowSuggestInfoList: [], nowAdditionalKeywordList: [], nowRankingKeywordList: [] };
          try {
            navigator.userAgent.indexOf("Firefox") >= 0 &&
              (function () {
                for (var e = ["mousedown", "mouseover", "mouseout", "mousemove", "mousedrag", "click", "dblclick"], t = 0; t < e.length; t++)
                  window.addEventListener(
                    e[t],
                    function (e) {
                      window.event = e;
                    },
                    !0
                  );
              })();
          } catch (e) {}
          (c = parent.searchObjects.getObjects()),
            s(
              (l = {
                getDocumentKeydownHook: function () {
                  return !1;
                },
                getPage: function () {
                  return null;
                },
              }),
              "getDocumentKeydownHook",
              c.getDocumentKeydownHook
            ),
            s(l, "getPage", c.getPage),
            s(l, "$textbox", c.$textbox),
            s(l, "$frameWrapper", c.$frameWrapper),
            s(l, "$frame", c.$frame),
            s(l, "$submit", c.$submit),
            s(l, "$form", c.$form),
            s(l, "$searchQueryMethod", c.$searchQueryMethod),
            s(l, "$searchParams", c.$searchParams),
            s(l, "directLinkTarget", c.dlt ? c.dlt : "_blank"),
            s(l, "suggQm", c.suggQm),
            s(l, "suggPv", c.suggPv),
            s(
              l,
              "addExtraParams",
              void 0 === parent.searchObjects.addExtraParams
                ? function (e) {
                    return e;
                  }
                : parent.searchObjects.addExtraParams
            ),
            s(l, "rankingKeywordView", c.rankingKeywordView),
            s(l, "rankingKeywordSuggestView", c.rankingKeywordSuggestView),
            s(l, "$keys", c.$keys),
            (o = l),
            parent.zum && parent.zum.browser && (u = parent.zum.browser);
          var d = e(parent.document),
            p = parent.searchObjects.engineSettings,
            m = {
              naver: { key: "naver", name: "네이버", qLink: "http://search.naver.com/search.naver?ie=utf8&query=", dLink: "http://www.naver.com" },
              daum: { key: "daum", name: "다음", qLink: "http://search.daum.net/search?w=tot&q=", dLink: "http://www.daum.net" },
              google: { key: "google", name: "구글", qLink: "http://www.google.co.kr/search?q=", dLink: "http://www.google.co.kr" },
              zum: { key: "zum", name: "줌", qLink: "https://search.zum.com/search.zum?method=uni&query=", dLink: "https://search.zum.com/search.zum?method=uni&option=accu&qm=f_typing&query=" },
            },
            f = !1,
            _ = !1,
            g = o.$textbox,
            w = e("#guide_search", document),
            v = !0,
            b = 0,
            y = null,
            k = "",
            x = function () {
              null != y && (clearTimeout(y), (y = null)), (b = new Date().getTime()), (y = setTimeout(S, 550));
            },
            S = function (t) {
              if (1 == t) {
                var n = new Date().getTime();
                if ((null != y && clearTimeout(y), n - b > 500)) return;
              }
              if ("" != g.val() && e.trim(k) != e.trim(O) && R) {
                k = O;
                var i = h.nowDirectLinkList.length > 0 ? h.nowDirectLinkList[0].data().link : null,
                  a = h.nowSuggestInfoList.length > 0 ? h.nowSuggestInfoList[0].data().link : null,
                  s = h.nowAdditionalKeywordList.length;
                (null != i || null != a || s > 0) &&
                  parent.ESTatTracker &&
                  parent.ESTatTracker.push([
                    "@SuggestPageView" + T,
                    {
                      keyword: O,
                      dl: i,
                      is: a,
                      ac: s,
                      page: o.getPage(),
                      puid: parent.window.puid || "",
                      variants: parent.window.variantsStat || [],
                      targets: parent.window.targetsStat || [],
                      codeVersion: zum.codeVersion,
                    },
                  ]);
              }
            },
            C = "",
            T = "",
            I = function (t, n) {
              if (((t = o.addExtraParams(t)), n || (n = "_top"), "Gecko" === navigator.product)) return window.open(t, n);
              var i = document.createElement("a");
              i.setAttribute("href", t), i.setAttribute("target", n), (i.style.display = "none"), document.getElementsByTagName("body")[0].appendChild(i);
              try {
                i.click();
              } catch (t) {
                e(i).click();
              }
              return !0;
            },
            P = (null === (n = parent) || void 0 === n ? void 0 : n.$("#header")) || e("#header"),
            E = function () {
              return r.getQuery() == g.val();
            },
            $ = function (e) {
              try {
                var t = g[0],
                  n = e.length;
                if (t.setSelectionRange) t.focus(), t.setSelectionRange(n, n);
                else if (t.createTextRange) {
                  var i = t.createTextRange();
                  i.collapse(!0), i.moveEnd("character", n), i.moveStart("character", n), i.select();
                }
              } catch (e) {}
            },
            z = function (t) {
              if (o.getDocumentKeydownHook()) {
                var n = void 0 === t ? -1 : t.keyCode || t.which;
                if ("d_location_search_input" === e(t.target).attr("id")) return;
                if (n >= 112 && n <= 123) return;
                if (t.altKey || t.ctrlKey) return;
                switch (n) {
                  case 8:
                  case 9:
                  case 13:
                  case 16:
                  case 17:
                  case 18:
                  case 25:
                  case 27:
                  case 32:
                  case 33:
                  case 34:
                  case 35:
                  case 36:
                  case 37:
                  case 38:
                  case 39:
                  case 40:
                  case 91:
                  case 92:
                  case 93:
                  case 144:
                  case 145:
                    return;
                }
                g.is(":focus") || (o.rankingKeywordView && o.rankingKeywordView.isLoaded() && o.rankingKeywordView.unload(), d.scrollTop(0), g.val("").focus());
              }
            },
            D = function (t, n, i, a) {
              if (encodeURIComponent(t).length > 900) return alert("너무 긴 검색어를 입력하셨습니다.\n적절한 길이의 검색어를 다시 입력해주세요."), !1;
              var s = p(),
                r = s.engines,
                l = s.selEngine,
                c = "DirectLink" == a ? "1" : s.searchTargetType,
                u = [];
              if (r && "null" !== r) for (var d = ("zum|" + r).split("|").dedup(), f = 0, _ = d.length; f < _; f++) m.hasOwnProperty(d[f]) && "multi" !== d[f] && u.push(d[f]);
              else u.push("zum");
              var w = [];
              if ("multi" === l) for (f = 0; f < u.length; f++) w.push(u[f]);
              else m.hasOwnProperty(l) || (l = "zum"), w.push(l);
              S(!0),
                parent.ESTatTracker &&
                  parent.ESTatTracker.push([
                    "@SearchQuery",
                    {
                      eng: w,
                      newWin: "0" === c,
                      isZumHomepage: parent.isHomepage,
                      query: encodeURIComponent(t),
                      page: o.getPage(),
                      puid: parent.window.puid || "",
                      variants: parent.window.variantsStat || [],
                      targets: parent.window.targetsStat || [],
                      codeVersion: zum.codeVersion,
                    },
                  ]);
              var v = "";
              if ("AdditionalKeyword" == a) {
                var b = e(i).data(),
                  y = 1,
                  k = 1;
                b.id > 15 ? ((y = 2), (k = b.id - 15)) : (k = b.id);
                var x = "";
                (x = "zumout" == b.fix ? "&g_associate_type=0" : "&sug_fix=" + b.fix),
                  (v = "&rd=1&qm=f_suggest" + C + "&sug_q=" + encodeURIComponent(O) + "&sug_id=" + b.id + "&sug_tot=" + h.nowAdditionalKeywordList.length + "&sug_col=" + y + "&sug_row=" + k + x);
              } else "DirectLink" == a ? (v = "&rd=1&qm=f_dl" + C) : "" == a && (v = "&qm=f_typing" + C);
              if ((ee(), "multi" === l))
                for (f = 0; f < u.length; f++)
                  try {
                    I(m[u[f]].qLink + encodeURIComponent(t) + ("zum" === m[u[f]].key ? v : ""), m[u[f]].key) || !1;
                  } catch (e) {}
              else {
                if ("zum" === m[l].key && "AdditionalKeyword" !== a && "DirectLink" !== a)
                  return (
                    P.hasClass("mini-header") ? o.$searchQueryMethod.val("f_typing_mini" + C) : o.$searchQueryMethod.val("f_typing" + C),
                    o.addExtraParams(o.$form.children().eq(0)),
                    g.val(t),
                    "0" === c ? o.$form.attr("target", "_blank") : o.$form.attr("target", "_top"),
                    !0
                  );
                if ("0" === c)
                  try {
                    I("" == t ? m[l].dLink : m[l].qLink + encodeURIComponent(t) + ("zum" === m[l].key ? v : ""), "_blank");
                  } catch (e) {}
                else
                  setTimeout(function () {
                    try {
                      I("" == t ? m[l].dLink : m[l].qLink + encodeURIComponent(t) + ("zum" === m[l].key ? v : ""), "_top");
                    } catch (e) {}
                  }, 10);
              }
              return !1;
            },
            L = null,
            O = "",
            M = o.$frameWrapper,
            A = o.$frame,
            R = !1,
            N = e("#RankingKeywordBox", document),
            B = e("#DirectLinkBox", document),
            U = e("#SuggestInfoBox", document),
            V = e("#SuggestKeywordBox", document);
          if (t.templates)
            var H = t.templates.suggest_direct_link,
              j = t.templates.suggest_keyword_list,
              K = t.templates.suggest_keyword_zumout_list,
              F = t.templates.suggest_kospi,
              q = t.templates.suggest_stock,
              W = t.templates.suggest_dictionary,
              G = t.templates.suggest_lotto,
              Z = t.templates.suggest_weather,
              J = t.templates.suggest_pension520,
              X = t.templates.suggest_tvtrend,
              Q = t.templates.suggest_ranking_keyword_list;
          var Y = function () {
              _ && null == L ? (L = window.setInterval(Ce, 100)) : _ ? "" != g.val() && Te() : Ce();
            },
            ee = function (e) {
              _ && null != L && (window.clearInterval(L), (L = null)), e || Ie();
            },
            te = function (e, t) {
              B.empty(), U.empty(), N.empty();
            },
            ne = function (e) {
              var t;
              e &&
                e.link &&
                ((e.shortTitle = e.title.substring(0, 18) + (0 == e.title.substring(18).length ? "" : "...")),
                (e.shortLink = e.link),
                B.html(H(e)),
                (t = B.children("div"))
                  .click(ie)
                  .hover(ae, se)
                  .data({ link: "null" !== e.urla && e.urla ? e.urla : e.link, keyword: e.title, type: "div" }),
                h.nowDirectLinkList.push(t)),
                B.show();
            },
            ie = function (e) {
              S(!0), (Pe = "DirectLink"), Ae(this, e);
            },
            ae = function () {
              "DirectLink" != Ee && e(this).addClass("over");
            },
            se = function () {
              "DirectLink" != Ee && e(this).removeClass("over");
            },
            oe = function (t) {
              if (o.rankingKeywordView && o.rankingKeywordSuggestView) {
                N.html(Q(t));
                var n = N.find("li"),
                  i = o.rankingKeywordView.getCurrentRank();
                n.each(function (n, a) {
                  var s = e(a),
                    r = t.entry[n].keyword,
                    l = t.entry[n].rank;
                  i == l && s.addClass("on"), s.click(re).hover(le, ce).data({ keyword: r, rank: l }), h.nowRankingKeywordList.push(s), o.rankingKeywordSuggestView.push(r, l);
                }),
                  o.rankingKeywordSuggestView.loadComplete();
              }
            },
            re = function (e) {
              o.rankingKeywordSuggestView && o.rankingKeywordSuggestView.searchOnClick(this, e);
            },
            le = function () {
              "RankingKeyword" != Ee && e(this).addClass("over");
            },
            ce = function () {
              "RankingKeyword" != Ee && e(this).removeClass("over");
            },
            ue = function (e) {
              ge(W(e), { link: "http://endic.naver.com/search.nhn?isOnlyViewEE=N&query=" + e.title, keyword: e.title });
            },
            he = function (e) {
              ge(G(e), { link: "https://search.zum.com/search.zum?method=uni&query=" + encodeURIComponent(e.title) + "&qm=f_instant" + C, keyword: e.title });
            },
            de = function (e) {
              ge(Z(e), { link: "https://search.zum.com/search.zum?method=uni&query=" + encodeURIComponent(e.title + " 날씨") + "&qm=f_instant" + C, keyword: e.title + " 날씨" });
            },
            pe = function (e) {
              var t = (e.kospi.index - e.kospi.prevIndex).roundFloat(2);
              (e.kospi.point = ((t / e.kospi.prevIndex) * 100).roundFloat(2)),
                (e.kospi.pointabs = Math.abs(e.kospi.point)),
                (t = t < 0 ? -t : t),
                (e.kospi.gap = t.currency()),
                (e.kospi.outPrice = Number(e.kospi.index).currency()),
                (t = (e.kosdaq.index - e.kosdaq.prevIndex).roundFloat(2)),
                (e.kosdaq.point = ((t / e.kosdaq.prevIndex) * 100).roundFloat(2)),
                (e.kosdaq.pointabs = Math.abs(e.kosdaq.point)),
                (t = t < 0 ? -t : t),
                (e.kosdaq.gap = t.currency()),
                (e.kosdaq.outPrice = Number(e.kosdaq.index).currency()),
                ge(F(e), { link: "https://search.zum.com/search.zum?method=uni&query=" + encodeURIComponent("주가지수") + "&qm=f_instant" + C, keyword: "주가지수" });
            },
            me = function (e) {
              var t = (e.price - e.prevPrice).roundFloat(2);
              (e.point = ((t / e.prevPrice) * 100).roundFloat(2)),
                (e.pointabs = Math.abs(e.point)),
                (t = t < 0 ? -t : t),
                (e.gap = t.currency()),
                (e.outPrice = Number(e.price).currency()),
                (e.interest = e.interest.roundFloat(1));
              try {
                ge(q(e), { link: "https://search.zum.com/search.zum?method=uni&query=" + encodeURIComponent(e.name) + "&qm=f_instant" + C, keyword: e.name });
              } catch (e) {}
            },
            fe = function (e) {
              ge(J(e), { link: "https://search.zum.com/search.zum?method=uni&query=" + encodeURIComponent("연금복권 " + e.round + "회") + "&qm=f_instant" + C, keyword: "연금복권 " + e.round + "회" });
            },
            _e = function (e) {
              (e.score = Number(e.score).currency()),
                (e.titleMin = e.title.length > 12 ? e.title.substring(0, 10) + "..." : e.title),
                (e.channelMin = e.channel.length > 8 ? e.channel.substring(0, 6) + "..." : e.channel),
                ge(X(e), { link: "https://search.zum.com/search.zum?method=uni&query=" + encodeURIComponent(e.title) + "&qm=f_instant" + C, keyword: e.title });
            },
            ge = function (e, t) {
              U.html(e);
              var n = U.children(".suggest_content");
              n.click(we).hover(ve, be).data(t), h.nowSuggestInfoList.push(n);
            },
            we = function (e) {
              S(!0), (Pe = "SuggestInfo"), Ae(this, e);
            },
            ve = function () {
              "SuggestInfo" != Ee && e(this).addClass("over");
            },
            be = function () {
              "SuggestInfo" != Ee && e(this).removeClass("over");
            },
            ye = function (t, n) {
              if ((V.empty(), t && "object" === a(t) && t.length > 1)) {
                for (var i = [], s = 0; s < t.length; s++) "autocomplete" === t[s].category && i.push(t[s]);
                for (s = 0; s < t.length; s++) "zumout:hourly" === t[s].category && i.push(t[s]);
                t = i;
              }
              0 === t.length && t.push({ category: "autocomplete", entry: [] }), 1 === t.length && t.push({ category: "zumout:hourly", entry: [] });
              var o = [];
              if (
                (e.each(t[1].entry, function (n, i) {
                  var a = !1;
                  e.each(t[0].entry, function (e, t) {
                    t.title == i.content && (a = !0);
                  }),
                    a || o.push(i);
                }),
                (t[1].entry = o),
                t && "object" === a(t) && t.length > 1)
              ) {
                t[0].entry.length > 30
                  ? ((t[0].entry = t[0].entry.slice(0, 30)), (t[1].entry = []))
                  : t[0].entry.length + t[1].entry.length > 30 && (t[1].entry = t[1].entry.slice(0, 30 - t[0].entry.length)),
                  (t[0].entry.length > 0 || t[1].entry.length > 0) && (v || (w.show(), (v = !0)));
                var r,
                  l = 0,
                  c = 0,
                  d = !1;
                (r = e.extend({}, t[0])).entry = [];
                var p = '<ul class="list_keyword">';
                for (s = 0; s < t.length; s++) {
                  var m,
                    f = t[s];
                  if ("autocomplete" == f.category) l = f.entry.length;
                  else {
                    if ("zumout:hourly" != f.category) {
                      if ("profiling" == f.category) continue;
                      continue;
                    }
                    c = f.entry.length;
                  }
                  if (0 == s) ((m = e.extend({}, f)).entry = f.entry.slice(0, 15)), (p += j(m)), l > 15 && ((r.entry = f.entry.slice(-(l - 15))), (p += '</ul><ul class="list_keyword">'), (d = !0));
                  else
                    ((m = e.extend({}, f)).entry = f.entry.slice(0, 5)),
                      r.entry.length > 0 && ((p += j(r)), (r.entry = [])),
                      1 == s &&
                        (!d && l + c > 15
                          ? (((r = e.extend({}, t[1])).entry = []),
                            (r.entry = f.entry.slice(-(l + c - 15))),
                            (m.entry = f.entry.slice(0, 15 - l)),
                            (p += K(m)),
                            (p += '</ul><ul class="list_keyword">'),
                            r.entry.length > 0 && ((p += j(r)), (r.entry = [])),
                            (d = !0))
                          : (p += K(m)));
                }
                p += "</ul>";
                try {
                  V.html(p);
                  var _ = V.children("ul").children("li"),
                    g = 0;
                  _.each(function (n, i) {
                    if (1 === i.nodeType) {
                      var a,
                        s,
                        o = "title",
                        r = "pre";
                      g < l ? ((a = 0), (s = g), (o = "title"), (r = "pre")) : ((a = 1), (s = g - l), (o = "content"), (r = "zumout")),
                        e(i)
                          .click(ke)
                          .hover(xe, Se)
                          .data({ keyword: t[a].entry[s][o], id: g + 1, fix: r }),
                        g++;
                    }
                  });
                } catch (e) {}
                V.removeClass("c_2"), d && V.addClass("c_2");
              }
              0 === V.children("ul").children().size() ? V.css("display", "none") : V.css("display", "block"),
                (h.nowAdditionalKeywordList = V.children("ul").children()),
                (function () {
                  if (
                    ((u.ie67 || (u.msie && parseInt(u.version) < 8)) &&
                      (h.nowDirectLinkList.length ? B.show() : B.hide(),
                      h.nowSuggestInfoList.length ? U.show() : U.hide(),
                      h.nowAdditionalKeywordList.length ? V.show() : V.hide(),
                      h.nowRankingKeywordList.length ? N.show() : N.hide()),
                    x(),
                    h.nowDirectLinkList.length + h.nowSuggestInfoList.length + h.nowAdditionalKeywordList.length + h.nowRankingKeywordList.length < 1)
                  )
                    M.hide(), (R = !1), v && (w.hide(), (v = !1));
                  else {
                    v && h.nowRankingKeywordList.length > 0 && w.hide(), M.show();
                    var t = Math.min(e(document.body).height(), e("#SuggestBox", document).height());
                    A.height(t), (R = !0);
                  }
                })();
            },
            ke = function (e) {
              S(!0), (Pe = "AdditionalKeyword"), Ae(this, e) && ee();
            },
            xe = function () {
              e(this).addClass("on");
            },
            Se = function () {
              e(this).removeClass("on");
            },
            Ce = function () {
              var t = g.val(),
                n = t;
              if ((O == n && "" != e.trim(n)) || ("" === e.trim(n) && h.nowRankingKeywordList.length)) Te();
              else {
                if (((O = t), "" == e.trim(t) || encodeURIComponent(t).length > 900)) return B.empty(), U.empty(), V.empty(), Ie(), void (v && (w.hide(), (v = !1)));
                Oe(),
                  v && (w.hide(), (v = !1)),
                  o.rankingKeywordSuggestView && o.rankingKeywordSuggestView.isLoaded() && ((h.nowRankingKeywordList = []), o.rankingKeywordSuggestView.closeComplete()),
                  r.query(t);
              }
            },
            Te = function () {
              if (!((t = h.nowDirectLinkList.length + h.nowSuggestInfoList.length + h.nowAdditionalKeywordList.length + h.nowRankingKeywordList.length) < 1)) {
                R || (M.show(), (R = !0));
                var t = e(document.body).height();
                A.height(t);
              }
            },
            Ie = function () {
              "" != Ee && h["now" + Ee + "List"][$e - 1] && e(h["now" + Ee + "List"][$e - 1]).removeClass("over"), (Ee = ""), (Pe = ""), ($e = 1), R && (M.hide(), A.height(0), (R = !1), (k = ""));
            },
            Pe = "",
            Ee = "",
            $e = 1,
            ze = function t() {
              if (0 != h.nowDirectLinkList.length || 0 != h.nowSuggestInfoList.length || 0 != h.nowAdditionalKeywordList.length || 0 != h.nowRankingKeywordList.length) {
                if (("" != Ee && e(h["now" + Ee + "List"][$e - 1]).removeClass("over"), "" == g.val() && 0 != h.nowRankingKeywordList.length)) (Ee = "RankingKeyword"), ($e = 1);
                else if ("" == Ee) (Ee = "DirectLink"), ($e = 1);
                else if ("DirectLink" == Ee && $e == h.nowDirectLinkList.length) (Ee = "SuggestInfo"), ($e = 1);
                else if ("SuggestInfo" == Ee && $e == h.nowSuggestInfoList.length) (Ee = "AdditionalKeyword"), ($e = 1);
                else {
                  if ("AdditionalKeyword" == Ee && $e == h.nowAdditionalKeywordList.length) return e(h["now" + Ee + "List"][$e - 1]).removeClass("over"), (Ee = ""), (Pe = ""), ($e = 1), void g.val(O);
                  if ("RankingKeyword" == Ee && $e == h.nowRankingKeywordList.length) return e(h["now" + Ee + "List"][$e - 1]).removeClass("over"), (Ee = ""), (Pe = ""), ($e = 1), void g.val("");
                  $e++;
                }
                Pe = Ee;
                var n = h["now" + Ee + "List"];
                if (n.length > 0) {
                  var i = e(n[$e - 1]),
                    a = i.data("keyword");
                  a && g.val(a), i.addClass("over");
                } else ($e = 0), t();
              }
            },
            De = function t() {
              if (0 != h.nowDirectLinkList.length || 0 != h.nowSuggestInfoList.length || 0 != h.nowAdditionalKeywordList.length || 0 != h.nowRankingKeywordList.length) {
                if (("" != Ee && e(h["now" + Ee + "List"][$e - 1]).removeClass("over"), "" == g.val() && 0 != h.nowRankingKeywordList.length && 1 == $e))
                  (Ee = "RankingKeyword"), ($e = h.nowRankingKeywordList.length);
                else if ("" == Ee) (Ee = "AdditionalKeyword"), ($e = h.nowAdditionalKeywordList.length);
                else if ("AdditionalKeyword" == Ee && 1 == $e) (Ee = "SuggestInfo"), ($e = h.nowSuggestInfoList.length);
                else if ("SuggestInfo" == Ee && 1 == $e) (Ee = "DirectLink"), ($e = h.nowDirectLinkList.length);
                else {
                  if ("DirectLink" == Ee && 1 == $e) return e(h["now" + Ee + "List"][$e - 1]).removeClass("over"), (Ee = ""), (Pe = ""), ($e = 1), void g.val(O);
                  if ("RankingKeyword" == Ee && 1 == $e) return e(h["now" + Ee + "List"][$e - 1]).removeClass("over"), (Ee = ""), (Pe = ""), ($e = 1), void g.val("");
                  $e--;
                }
                Pe = Ee;
                var n = h["now" + Ee + "List"];
                if (n.length > 0) {
                  var i = e(n[$e - 1]),
                    a = i.data("keyword");
                  a && g.val(a), i.addClass("over");
                } else ($e = 1), t();
              }
            },
            Le = function () {
              var t = h.nowAdditionalKeywordList.length;
              if (t < 16);
              else if ($e <= t - 15 || (15 < $e && $e <= t)) {
                e(h["now" + Ee + "List"][$e - 1]).removeClass("over"), $e < 16 ? ($e += 15) : ($e -= 15), (Pe = Ee);
                var n = h["now" + Ee + "List"];
                if (n.length > 0) {
                  var i = e(n[$e - 1]),
                    a = i.data("keyword");
                  a && g.val(a), i.addClass("over");
                }
              }
            },
            Oe = function () {
              (Ee = ""), (Pe = ""), ($e = 1), (h.nowDirectLinkList = []), (h.nowSuggestInfoList = []), (h.nowAdditionalKeywordList = []);
            },
            Me = !1,
            Ae = function (t, n) {
              if (Me) return !1;
              var i = e(t),
                a = i.data("keyword"),
                s = i.data("link"),
                r = i.data("type"),
                l = o.directLinkTarget,
                c = Pe;
              ee(), g.val(a);
              var u = event || window.event || n || { type: "unknown" };
              return (
                parent.ESTatTracker &&
                  parent.ESTatTracker.push([
                    "@SuggestMove" + T,
                    {
                      keyword: O,
                      em: u.type,
                      qm: c,
                      outurl: s,
                      selkey: a,
                      page: o.getPage(),
                      puid: parent.window.puid || "",
                      variants: parent.window.variantsStat || [],
                      targets: parent.window.targetsStat || [],
                      codeVersion: zum.codeVersion,
                    },
                  ]),
                s
                  ? ("div" === r && "_top" !== l
                      ? (I(s, l), D(a, n, t, c))
                      : ((Me = !0),
                        setTimeout(function () {
                          parent.location.href = o.addExtraParams(s);
                        }, 20)),
                    !1)
                  : D(a, n, t, c)
              );
            };
          t.registerHelper("ifZero", function (e, t) {
            return 0 === e ? t.fn(this) : t.inverse(this);
          }),
            t.registerHelper("ifGtZero", function (e, t) {
              return e > 0 ? t.fn(this) : t.inverse(this);
            }),
            t.registerHelper("ifPositive", function (e, t) {
              return e > 0 ? t.fn(this) : t.inverse(this);
            }),
            t.registerHelper("outWord", function (e) {
              return e.length > 28 ? e.substr(0, 28) + "..." : e;
            }),
            t.registerHelper("ballColor", function (e) {
              return Math.floor((e - 1) / 10) + 1;
            }),
            t.registerHelper("lottoViewDate", function (e) {
              return e.replace(/-/g, ".");
            }),
            t.registerHelper("weatherViewDate", function (e) {
              return e.replace(/\//g, ".").substring(5);
            }),
            t.registerHelper("stockViewDate", function (e) {
              var t = e.date.split("-"),
                n = parseInt(e.time.replace(/:/g, ""), 10),
                i = new Date(parseInt(t[0], 10), parseInt(t[1], 10) - 1, parseInt(t[2], 10));
              if (0 == i.getDay() || 6 == i.getDay()) return "장마감";
              try {
                var a = parseInt(e.marketStart.replace(/:/g, ""), 10),
                  s = parseInt(e.marketEnd.replace(/:/g, ""), 10);
                return n < a ? "개장전" : n >= s ? "장마감" : "20분 지연";
              } catch (t) {
                try {
                  if ("opened" === e.marketStatus) return "20분 지연";
                  if ("closed" === e.marketStatus) return (r = (o = e.time) && o.length > 0 ? parseInt(o.split(":")[0], 10) : new Date().getHours()) >= 13 ? "장마감" : "개장전";
                } catch (t) {
                  var o, r;
                  return (r = (o = e.time) && o.length > 0 ? parseInt(o.split(":")[0], 10) : new Date().getHours()) < 9 ? "개장전" : r >= 15 ? "장마감" : "20분 지연";
                }
              }
            }),
            t.registerHelper("pensionViewDate", function (e) {
              return e.replace(/-/g, ".");
            }),
            t.registerHelper("getStrongKeywordHtml", function (e) {
              return new t.SafeString(e);
            }),
            (zum.regexMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;" }),
            (zum.htmlescapeRegex = new RegExp("[&<>\"'/]", "g")),
            (zum.htmlescape = function (e) {
              return ("" + e).replace(zum.htmlescapeRegex, function (e) {
                return zum.regexMap[e];
              });
            }),
            (function () {
              o.suggQm && "string" == typeof o.suggQm && o.suggQm.length > 0 && (C = "." + o.suggQm),
                o.suggPv && "string" == typeof o.suggPv && o.suggPv.length > 0 && (T = o.suggPv),
                (m.zum.dLink = "https://search.zum.com/search.zum?method=uni&option=accu&qm=f_typing" + C + "&query="),
                (_ = u.mozilla);
              var t = !1;
              o.$keys.bind("mousedown", function () {
                Y();
              }),
                g
                  .bind("keydown", function (t) {
                    var n = e(this).val(),
                      i = P.hasClass("mini-header");
                    if ((38 === t.keyCode || 40 === t.keyCode) && i) return t.preventDefault && (t.preventDefault(), t.stopPropagation()), !1;
                    40 === t.keyCode
                      ? ("" !== n || ("" === n && h.nowRankingKeywordList.length)) && (ee(!0), ze())
                      : 38 === t.keyCode
                      ? ("" !== n || ("" === n && h.nowRankingKeywordList.length)) &&
                        (ee(!0), De(), $(e(this).val()), t.preventDefault ? (t.preventDefault(), t.stopPropagation()) : (t.returnValue = !1))
                      : 33 == t.keyCode || 34 == t.keyCode
                      ? ("" != n || ("" === n && h.nowRankingKeywordList.length)) && ee()
                      : (37 != t.keyCode && 39 != t.keyCode) || i
                      ? 116 == t.keyCode || (o.rankingKeywordView && o.rankingKeywordView.isLoaded() && 13 != t.keyCode ? o.rankingKeywordView.unload() : _ && Y())
                      : ("" !== n || ("" === n && h.nowRankingKeywordList.length)) && "AdditionalKeyword" == Ee && (ee(!0), Le());
                  })
                  .bind("keypress", function (n) {
                    return (
                      !t &&
                      (13 == n.keyCode
                        ? ((t = !0),
                          o.rankingKeywordView && o.rankingKeywordSuggestView && (o.rankingKeywordView.isLoaded() || o.rankingKeywordSuggestView.isLoaded())
                            ? o.$form.submit()
                            : "" === Ee
                            ? D(e(this).val()) && o.$form.submit()
                            : Ae(h["now" + Ee + "List"][$e - 1], n) && o.$form.submit(),
                          !1)
                        : void 0)
                    );
                  })
                  .bind("keyup", function (e) {
                    if (
                      (13 == e.keyCode && (t = !1),
                      37 === e.keyCode || 39 === e.keyCode || 116 === e.keyCode || 13 === e.keyCode || 40 === e.keyCode || 38 === e.keyCode || 33 === e.keyCode || 34 === e.keyCode || _ || Y(),
                      13 == e.keyCode)
                    )
                      return !1;
                  })
                  .focus(function () {
                    R || x(), Y(), d.unbind("keydown", z);
                  })
                  .blur(function () {
                    (t = !1),
                      f ||
                        (o.rankingKeywordView && o.$submit.hasClass("btn_search_over")) ||
                        ("" === g.val() && o.rankingKeywordView && o.rankingKeywordView.load(),
                        o.rankingKeywordSuggestView && o.rankingKeywordSuggestView.isLoaded() && ((h.nowRankingKeywordList = []), o.rankingKeywordSuggestView.closeComplete()),
                        ee(),
                        d.bind("keydown", z));
                  }),
                o.$submit.click(function () {
                  return (
                    o.rankingKeywordView && o.rankingKeywordView.isLoaded()
                      ? o.$form.submit()
                      : "AdditionalKeyword" !== Ee
                      ? D(g.val()) && o.$form.submit()
                      : Ae(h["now" + Ee + "List"][$e - 1], { type: "submit" }) && o.$form.submit(),
                    !1
                  );
                }),
                A.hover(
                  function () {
                    f = !0;
                  },
                  function () {
                    f = !1;
                  }
                ),
                d.bind("keydown", z),
                (r =
                  "true" === window.onlyAc
                    ? i.a
                        .create(window.useParent ? parent : window, "ac")
                        .setUrl("//ssug.api.search.zum.com/json.zum")
                        .setMethod("ssug.ac")
                        .setFilterHandler(E)
                        .setAfterHandler(ye)
                    : i.a
                        .create(window.useParent ? parent : window, "ssug")
                        .setUrl("//ssug.api.search.zum.com/json.zum")
                        .setMethod("web.front")
                        .setAcHl("true")
                        .setZumoutHl("true")
                        .setAcSize(30)
                        .setZumoutSize(15)
                        .setExpireSecond(30)
                        .setFilterHandler(E)
                        .setBeforeHandler(te)
                        .setEntryHandler("directlink", ne)
                        .setEntryHandler("dictionary", ue)
                        .setEntryHandler("lotto", he)
                        .setEntryHandler("weather", de)
                        .setEntryHandler("index", pe)
                        .setEntryHandler("kospi", me)
                        .setEntryHandler("kosdaq", me)
                        .setEntryHandler("pension520", fe)
                        .setEntryHandler("tvtrend", _e)
                        .setEntryHandler("rankingkeyword", oe)
                        .setAfterHandler(ye));
            })(),
            (window.searchGuidePop = function () {
              window.open("/page/directlink", "searchGuide", "scrollbars=yes,resizable=yes,width=497,height=500");
            });
        },
      };
      new o();
    }.call(this, n(3), n(37)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i, a, s) {
      n(9), n(11), n(73), n(40);
      var o = n(185),
        r = n(186),
        l = n(2),
        c = n(0),
        u = (n(6), n(12));
      n(55);
      t.a = e.View.extend({
        rankingBoxInformationGroupView: null,
        $searchInputBox: i("#d_location_search_input"),
        $listNone: i(".list_none"),
        $d_result: i(".d_result"),
        locationModule: null,
        weatherModule: null,
        cache: [],
        initialize: function () {
          (this.events = {
            "click #btn_location_close": this.closeSearchLocation,
            "click .d_btn_location": this.closeSearchLocation,
            "click .d_btn_location_list": this.clickLocation,
            "focusout #d_location_search_input": this.leaveSearchLocation,
            "keyup #d_location_search_input": this.filterLocation,
          }),
            this.listenTo(
              l.a,
              "on:searchLocation",
              a.bind(function () {
                this.openSearchLocation();
              }, this)
            ),
            (this.locationModule = new o.a()),
            this.listenTo(this.locationModule, "change", this.locationModuleUpdated),
            (this.weatherModule = new r.a()),
            this.listenTo(this.weatherModule, "change", this.weatherModuleUpdated);
        },
        locationModuleUpdated: function () {
          this.cache = this.locationModule.getJSON();
        },
        weatherModuleUpdated: function () {
          l.a.trigger("change:weatherData", this.weatherModule.getJSON());
        },
        openSearchLocation: function () {
          this.$el || (this.$el = i(".d_layer_weather_location")),
            (this.$searchInputBox = i("#d_location_search_input")),
            this.$el.show(),
            this.$searchInputBox.focus(),
            0 === this.cache.length && this.locationModule.fetch();
        },
        closeSearchLocation: function (e) {
          this.closeLayer(), c.a.send(c.a.RankingBoxStat.eventName.click, c.a.RankingBoxStat.appendStat({ cm: "info_loc_close" }), e);
        },
        closeLayer: function () {
          l.a.trigger("on:initRolling"), this.$el.hide(), this.$searchInputBox.val("").removeClass("on"), this.initList();
        },
        initList: function () {
          this.$el.find("ul").html(""), this.$listNone.show(), this.$d_result.hide();
        },
        leaveSearchLocation: function (e) {
          e.preventDefault();
          var t = i(e.currentTarget);
          "" === t.val() && t.removeClass("on");
        },
        filterLocation: function (e) {
          var t = i(e.currentTarget),
            n = t.val();
          if (0 === i.trim(n).length) return t.removeClass("on"), void this.initList();
          t.addClass("on"),
            i.setTimeout(
              a.bind(function () {
                this.renderLocations(n);
              }, this),
              500
            );
        },
        renderLocations: function (e) {
          for (var t = [], n = {}, i = s.templates.suggest_weather_location, a = 0, o = this.cache.length; a < o; a++) this.cache[a].name.indexOf(e) > -1 && t.push(this.cache[a]);
          t.length > 0 ? (this.$listNone.hide(), this.$d_result.show()) : this.initList(), (n.items = t), this.$el.find("ul").html(i(n));
        },
        clickLocation: function (e) {
          var t = i(e.currentTarget).data("reg");
          u.a.set("_RC", t, { expires: 365, domain: ".zum.com" }),
            this.weatherModule.fetch(t),
            this.closeLayer(),
            c.a.send(c.a.RankingBoxStat.eventName.click, c.a.RankingBoxStat.appendStat({ cm: "info_loc_select" }), e);
        },
      });
    }.call(this, n(4), n(3), n(8), n(37)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(11), n(75), n(10), n(31), n(13), n(40), n(17), n(91);
      var s = n(207),
        o = n(20),
        r = n(18),
        l = n(15),
        c = { "00": "home", "02": "society", "03": "economy", "04": "world", "05": "sports", "06": "entertain", "01": "politics", "07": "culture" };
      t.a = e.View.extend({
        currentIdx: -1,
        tabGroup: 1,
        tabStartIdx: [],
        codeToIdx: null,
        doorData: [],
        initialize: function (e) {
          (this.events = {
            "mousedown .d_newslink": this.changeNewsLink,
            "click .d_newslink": this.clickNewsLink,
            "click .news_list > h4": this.tabClick,
            "click .nav_next": this.next,
            "click .nav_prev": this.prev,
            "click .sec_more": this.clickMore,
          }),
            (this.modules = new s.a()),
            this.listenTo(this.modules, "change", this.moduleUpdated),
            (this.newsFrameDelay = parseInt(e.showDelay) || 0),
            (this.issuePhotoView = e.issuePhotoView),
            this.initEstat(),
            (this.visible = this.$el.is(":visible")),
            this.parseRenderedView();
        },
        initEstat: function () {
          var e = this;
          this.estat = {
            pageViewHistory: [],
            pageViewOnce: function () {
              i.contains(this.pageViewHistory, e.currentIdx) || this.pageView();
            },
            pageView: function () {
              this.pageViewHistory.push(e.currentIdx);
            },
            click: function (e, t) {
              ("left" != e && "right" != e) || (t = null), r.a.click({ pos: "front_rb", cm: e }, t);
            },
            clickNews: function (e) {
              var t = a(e.target).closest("a"),
                n = t.attr("href").match(/news=(\d+)/),
                i = n && n[1] ? n[1] : "";
              r.a.click({ pos: "front_rb_popular", cm: "item", articleId: i.substr(11), tier: "0" + (t.closest(".item").prevAll(".item").length + 1), isBold: !1 }, e);
            },
          };
        },
        parseRenderedView: function () {
          this.$el.find(".rank_news")[0] && (this.updateDoorData(), this.updateCodeToIdx(), (this.currentIdx = 0), this.estat.pageViewOnce());
        },
        moduleUpdated: function (e) {
          this.render(e.get("id"), e.get("callback")), e.set("callback", null), (this.tabSize = this.$el.find(".news_list h4").length);
        },
        changeNewsLink: function (e) {
          o.a.changeNewsLink(e);
        },
        clickNewsLink: function (e) {
          e.preventDefault();
          var t = o.a.changeNewsLink(e);
          if (location.href == t) return !1;
          if ((e && this.estat.clickNews(e), "_blank" === a(e.target).closest("a").attr("target")))
            if (-1 == navigator.appVersion.indexOf("Chrome")) {
              window.open("", "photoSlide").location.href = t;
            } else window.open(t, "");
          else location.href = t;
        },
        clickMore: function (e) {
          this.estat.click("more", e), l.a.Article.sendAndCloseScrollStat();
        },
        getCurrentCode: function () {
          return this.$("h4.on").data("code") || "00";
        },
        render: function (e, t) {
          if (this.modules.exists(e) && this.modules.isValid(e)) {
            var n = e !== this.currentIdx;
            n && ((this.currentIdx = parseInt(e)), this.$el.html(this.modules.get(e).getHtml()), this.tabGroupUpdate(e), this.updateCodeToIdx(), this.updateDoorData(), this.checkRetry()),
              "function" == typeof t && t(n);
            var i = this;
            setTimeout(function () {
              i.estat.pageViewOnce();
            }, 300);
          } else this.modules.fetch(e, t);
        },
        cancelShow: function () {
          a.clearTimeout(this.showTimerID);
        },
        tabGroupUpdate: function (e) {
          !i.isUndefined(e) && parseInt(e) >= 6 ? (this.tabGroup = 2) : !i.isUndefined(e) && parseInt(e) <= 2 && (this.tabGroup = 1),
            this.$(".list")
              .removeClass("list_1")
              .removeClass("list_2")
              .addClass("list_" + this.tabGroup);
        },
        updateCodeToIdx: function () {
          this.codeToIdx = {};
          for (var e = this.$(".news_list > h4"), t = 0; t < e.length; t++) this.codeToIdx[e.eq(t).data("code")] = t;
        },
        updateDoorData: function () {
          var e = this;
          this.$el.find(".door_data > span").each(function () {
            var t = a(this),
              n = t.data("page"),
              i = t.data("url"),
              s = t.data("type"),
              o = t.data("section") || "00",
              r = t.data("category"),
              l = c[o],
              u = t.text();
            (e.doorData[n] = e.doorData[n] || {}), (e.doorData[n][s] = { url: i, title: u, page: n, code: o, tabname: l, category: r });
          });
        },
        checkRetry: function () {
          if (this.retryShowCode) {
            var e = this.codeToIdx[this.retryShowCode] || 0;
            e !== this.currentIdx && this.render(e, this.retryCallback), (this.retryCallback = null), (this.retryShowCode = null);
          }
        },
        hoverTimerID: 0,
        tabClick: function (e) {
          if (
            (this.$el.find(".news_list h4").each(function () {
              a(this).removeClass("over");
            }),
            !a(e.currentTarget).hasClass("on"))
          ) {
            var t = a(e.currentTarget).index();
            e.currentTarget.tagName && (t = a.inArray(e.currentTarget, a(e.currentTarget).parent().children(e.currentTarget.tagName)));
            var n = this;
            this.render(t, function () {
              n.estat.pageView();
            });
          }
        },
        prev: function (e, t) {
          var n = t;
          if (e) {
            this.estat.click("left", e);
            var i = this;
            n = function () {
              i.estat.pageView();
            };
          }
          var a = this.currentIdx - 1;
          (this.currentIdx = null), a < 0 && (a = this.tabSize - 1), this.render(a, n);
        },
        next: function (e, t) {
          var n = t;
          if (e) {
            this.estat.click("right", e);
            var i = this;
            n = function () {
              i.estat.pageView();
            };
          }
          var a = this.currentIdx + 1;
          (this.currentIdx = null), a >= this.tabSize && (a = 0), this.render(a, n);
        },
        visible: !1,
        show: function (e, t) {
          this.render(e || 0, t),
            (this.visible = !0),
            this.newsFrameDelay > 0
              ? (this.showTimerID = a.setTimeout(
                  i.bind(function () {
                    this.$el.show(), this.getWrapper().show();
                  }, this),
                  this.newsFrameDelay,
                  this.showTimerID
                ))
              : (this.$el.show(), this.getWrapper().show());
        },
        showByCode: function (e, t) {
          this.codeToIdx ? this.show(this.codeToIdx[e], t) : (this.show(0), (this.retryShowCode = e), (this.retryCallback = t));
        },
        hide: function () {
          (this.visible = !1), this.cancelShow(), this.$el.hide(), this.getWrapper().hide(), (this.estat.pageViewHistory = []);
        },
        isVisible: function () {
          return this.visible;
        },
        getWrapper: function () {
          return this.$el.closest(".new_box_bottom").show();
        },
        getNewsAnchors: function () {
          return this.$el.find("a.d_newslink");
        },
        getNewsAnchorIndex: function (e) {
          if (e)
            return this.getNewsAnchors().map(function (t, n) {
              return n.href && n.href.match(e) && t;
            })[0];
        },
        isFirstArticle: function (e) {
          return 0 == this.currentIdx && 0 == this.getNewsAnchorIndex(e);
        },
        isLastArticle: function (e) {
          var t = this.getNewsAnchorIndex(e);
          return this.currentIdx == this.doorData.length - 1 && this.getNewsAnchors().length - 1 == t;
        },
        getNextArticle: function (e) {
          var t = this.getNewsAnchorIndex(e);
          if (((t = void 0 === t ? 0 : t + 1), this.getNewsAnchors().length <= t)) {
            var n = this.currentIdx + 1;
            n >= this.doorData.length && (n = 0);
            var s = this.doorData[n].first;
            return i.extend(s, {
              param: { v: 4, cm: "front_rb_popular", tab: s.tabname, p: s.page },
              el: function () {
                return a(".best_news .d_newslink").first();
              },
            });
          }
          var o = this.getNewsAnchors().eq(t);
          if (o) return { url: o.attr("href"), title: a.trim(o.html().replace(/<[^>]*>/g, " ")), category: o.data("category"), el: o };
        },
        getPrevArticle: function (e) {
          var t = this.getNewsAnchorIndex(e);
          if ((t = void 0 === t ? -1 : t - 1) < 0) {
            var n = this.currentIdx - 1;
            n < 0 && (n = this.doorData.length - 1);
            var s = this.doorData[n].last;
            return i.extend(s, {
              param: { v: 4, cm: "front_rb_popular", tab: s.tabname, p: s.page },
              el: function () {
                return a(".best_news .d_newslink").last();
              },
            });
          }
          var o = this.getNewsAnchors().eq(t);
          if (o) return { url: o.attr("href"), title: a.trim(o.html().replace(/<[^>]*>/g, " ")), category: o.data("category"), el: o };
        },
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/guidequery",
        fetch: function () {
          e.Model.prototype.fetch.call(this, { dataType: "html", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { mp: this.id }) });
        },
        parse: function (e) {
          return { html: e };
        },
        getHtml: function () {
          return this.attributes.html;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(167),
        a = n(168);
      t.a = e.View.extend({
        shareSns: null,
        initialize: function (e) {
          "facebook" === e.type ? (this.shareSns = new i.a(e)) : (this.shareSns = new a.a(e));
        },
        open: function () {
          return this.shareSns.open(), !1;
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(9), n(59);
      var a,
        s,
        o = n(50),
        r = (n(55), {}),
        l = e.templates.favoritesite_suggest_direct_link,
        c = function () {
          return r.getQuery() == a.val();
        },
        u = function (e, t) {
          s.empty();
        },
        h = function (e) {
          e &&
            e.link &&
            ((e.shortTitle = e.title.substring(0, 18) + (0 == e.title.substring(18).length ? "" : "...")),
            (e.shortLink = e.link),
            s.html(l(e)),
            s.find(".suggest_box").click(function () {
              i(".d_input_button").click();
            })),
            s.show(),
            i(".d_layer_suggest_mask").show();
        },
        d = function () {
          r = o.a
            .create(window.useParent ? parent : window, "ssug_favorite")
            .setUrl("//ssug.api.search.zum.com/json.zum")
            .setMethod("ssug")
            .setExpireSecond(30)
            .setFilterHandler(c)
            .setBeforeHandler(u)
            .setEntryHandler("directlink", h);
        };
      t.a = {
        init: function () {
          (a = i("#favoriteSiteSearchText")), (s = i("#directLinkBox", document)), d();
        },
        query: function () {
          r.query(a.val());
        },
      };
    }.call(this, n(37), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/container",
        fetch: function () {
          return e.Model.prototype.fetch.call(this, { dataType: "html", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { p: this.id || "0" }) });
        },
        parse: function (e) {
          return { html: e };
        },
        getHtml: function () {
          return this.attributes.html;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(11), n(44), n(21), n(10), n(36), n(13), n(23), n(17);
      var s = n(187),
        o = n(0),
        r = n(12);
      t.a = e.View.extend({
        cache: {},
        initialize: function () {
          (this.module = new s.a()),
            this.listenTo(this.module, "change", this.moduleUpdated),
            (this.alertTimeout = 0),
            (this.events = {
              "click #d_fortune_type_1_btn": this.clickZodiacTab,
              "click #d_fortune_type_2_btn": this.clickHoroscopeTab,
              "click #d_fortune_type_3_btn": this.clickPersonalTab,
              "click .d_fortune_item": this.itemView,
              "click .input_information button.btn_view": this.queryPersonalFortune,
            }),
            i(".input_information input").on("change keydown keyup click", function (e) {
              e.stopPropagation();
            }),
            i(".input_information .input_alert a").click(function (e) {
              i(".input_information .input_alert").hide(), o.a.send(o.a.RankingBoxStat.eventName.click, { cm: o.a.RankingBoxStat.cm.keyword.alertClose, pos: o.a.RankingBoxStat.pos });
            });
          var e = r.a.get("fortune") || "",
            t = i(".input_information input.birthday");
          if (
            (t.keyup(function () {
              this.value = this.value.replace(/[^0-9\.]/g, "");
            }),
            -1 !== e.indexOf("Personal") && "true" === r.a.get("saveBirth"))
          ) {
            var n = e.split("|");
            if (n.length > 3) {
              var a = i(".input_information input:radio[value=" + n[2] + "]"),
                l = i(".input_information input:radio[value=" + n[3] + "]");
              t.val(n[1]), a.attr("checked", "true"), l.attr("checked", "true");
            }
            i(".d_fortune_type_3").hide(), this.queryPersonalFortune();
          }
        },
        clickPersonalTab: function (e) {
          i(".d_fortune_type_1").hide(),
            i(".d_fortune_type_2").hide(),
            i(".fortune_type_3").show(),
            i(".d_fortune_type_3").show(),
            i(".d_fortune_type_3 .input_information").show(),
            i(".d_fortune_type_3 .fortune_view").hide(),
            i(e.currentTarget).addClass("on").siblings().removeClass("on"),
            o.a.send(o.a.RankingBoxStat.eventName.click, { cm: o.a.RankingBoxStat.cm.keyword.private, pos: o.a.RankingBoxStat.pos });
        },
        clickZodiacTab: function (e) {
          i(".d_fortune_type_3").hide(),
            i(".d_fortune_type_2").hide(),
            i(".d_fortune_type_1_view").hide(),
            i(".d_fortune_type_1").show(),
            i(e.currentTarget).addClass("on").siblings().removeClass("on"),
            o.a.send(o.a.RankingBoxStat.eventName.click, { cm: o.a.RankingBoxStat.cm.keyword.animal, pos: o.a.RankingBoxStat.pos }, e);
        },
        clickHoroscopeTab: function (e) {
          i(".d_fortune_type_3").hide(),
            i(".d_fortune_type_1").hide(),
            i(".d_fortune_type_2_view").hide(),
            i(".d_fortune_type_2").show(),
            i(e.currentTarget).addClass("on").siblings().removeClass("on"),
            o.a.send(o.a.RankingBoxStat.eventName.click, { cm: o.a.RankingBoxStat.cm.keyword.star, pos: o.a.RankingBoxStat.pos }, e);
        },
        moduleUpdated: function () {
          this.renderItem(this.module.getJSON());
        },
        renderItem: function (e) {
          var t = e.zodiac,
            n = e.zodiac.type,
            a = "",
            s = "",
            o = "";
          (o = i("Band" === n ? ".d_fortune_type_1_view" : ".d_fortune_type_2_view")).find(".d_text").text(t.value),
            o
              .find(".icon")
              .removeClass()
              .addClass("icon")
              .addClass("icon_" + t.order),
            o.find(".text_inner").text(e.fortune),
            "Band" === n
              ? ((a = e.jisu ? "(금전지수:" + e.jisu + ")" : ""),
                (s = "https://search.zum.com/search.zum?query=" + encodeURIComponent(t.value + "띠 운세") + "&qm=g_today.top&type=fortune&rc=fortune&method=uni&option=accu"))
              : "Star" === n &&
                ((a = e.jisu ? "(데이트지수:" + e.jisu + ")" : ""),
                (s = "https://search.zum.com/search.zum?query=" + encodeURIComponent(t.value + "자리 운세") + "&qm=g_today.top&type=fortune&rc=fortune&method=uni&option=accu")),
            o.find(".sub_text").text(a),
            o.find("a").attr("href", s),
            o.show();
        },
        itemView: function (e) {
          var t = i(e.currentTarget),
            n = t.data("fortune"),
            s = "fortune" + n,
            l = t.data("index");
          !a.isUndefined(this.cache[n]) && !a.isUndefined(this.cache[n][l]) ? this.renderItem(this.cache[n][l]) : (this.module.fetch(s, l), this.setCache(l, n)),
            r.a.set("fortune", n + "|" + l, { expires: 365, domain: ".zum.com" }),
            o.a.send(o.a.RankingBoxStat.eventName.click, o.a.RankingBoxStat.appendStat({ cm: "Star" === n ? "fortune_star" : "fortune_animal", order: l }), e);
        },
        setCache: function (e, t) {
          var n = {};
          (n[e] = this.module.getJSON()), (this.cache[t] = a.isUndefined(this.cache[t]) ? n : a.extend(this.cache[t], n));
        },
        unload: function () {
          this.cache = {};
        },
        queryPersonalFortune: function () {
          var e,
            t,
            n,
            a = this,
            s = new Date(),
            l = i(".input_information input.birthday"),
            c = i(".input_information input:radio[name=birth]:checked"),
            u = i(".input_information input:radio[name=gender]:checked"),
            h = 1,
            d = 1,
            p = 1,
            m = l.val() || "";
          return (
            (e = m.slice(0, 4)),
            (t = m.slice(4, 6)),
            (n = m.slice(6, 8)),
            "c3" === c.val() ? ((h = "2"), (d = "2")) : (h = "c2" === c.val() ? "2" : "1"),
            (p = "c5" === u.val() ? "2" : "1"),
            2020 < parseInt(e) || parseInt(e) < 1930
              ? (i(".input_alert.fortune_year").show(),
                clearTimeout(this.alertTimeout),
                void (this.alertTimeout = setTimeout(function () {
                  i(".input_alert.fortune_year").hide();
                }, 3e3)))
              : !m || isNaN(Date.parse(e + "/" + t + "/" + n))
              ? (i(".input_alert.birthday").show(),
                clearTimeout(this.alertTimeout),
                void (this.alertTimeout = setTimeout(function () {
                  i(".input_alert.birthday").hide();
                }, 3e3)))
              : (i.ajax({
                  url: "https://contentsgt.cafe24.com/run/zum/new/saju/merge_saju_json.php",
                  dataType: "jsonp",
                  data: { my: e, mm: t, md: n, mh: "00", mn: "00", ml: h, ms: d, mg: p, q: "운세", newyear: s.getFullYear().toString(), mct: "1" },
                  success: function (e) {
                    if (e.message && -1 !== e.message.indexOf("오류:")) return a.failedFetchingPersonalFortune();
                    i(".d_fortune_type_3 .main_text .text_inner").text((e.fortune || "").slice(0, 75)),
                      r.a.set("fortune", "Personal|" + l.val() + "|" + c.val() + "|" + u.val(), { expires: 7, domain: ".zum.com" }),
                      r.a.set("birthday", l.val(), { expires: 7, domain: ".zum.com" }),
                      r.a.set("monthBox", c.val(), { expires: 7, domain: ".zum.com" }),
                      r.a.set("sexBox", u.val(), { expires: 7, domain: ".zum.com" }),
                      r.a.set("saveBirth", "true", { expires: 7, domain: ".zum.com" }),
                      i(".d_fortune_type_3 .input_information").hide(),
                      i(".d_fortune_type_3 .fortune_view").show(),
                      i(".d_fortune_type_3").show();
                  },
                  error: function (e) {
                    return a.failedFetchingPersonalFortune();
                  },
                }),
                void o.a.send(o.a.RankingBoxStat.eventName.click, { cm: o.a.RankingBoxStat.cm.keyword.fetchPrivate, pos: o.a.RankingBoxStat.pos }))
          );
        },
        failedFetchingPersonalFortune: function () {
          i(".d_fortune_type_3 .input_information").show(), i(".d_fortune_type_3 .fortune_view").hide(), i(".d_fortune_type_3").show(), console.error("운세 데이터 획득에 실패했습니다.");
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a, s) {
      n(9), n(46), n(10), n(31), n(13), n(40), n(59), n(17);
      var o = n(61),
        r = n(1),
        l = n(64),
        c = n(193),
        u = n(51),
        h = n(33),
        d = n(42),
        p = n(0),
        m = window.$zumapp;
      t.a = e.View.extend({
        initialize: function () {
          var e = this;
          (this.events = {
            "click .setting .fire": "onClickSettingBtn",
            "click .close .fire": "onClickCloseBtn",
            mouseenter: "onMouseenter",
            mouseleave: "onMouseleave",
            "mouseenter div.btn_app span": "onMouseenterAppBtn",
            "mouseleave div.btn_app span": "onMouseleaveAppBtn",
            "mouseenter .d_removed": "showRemoveNoti",
            "mouseleave .d_removed": "hideRemoveNoti",
          }),
            this.$el.data("model", this.model),
            this.listenTo(this.model, "remove", function () {
              e.zumapp && e.zumapp.status.inactive(), e.remove();
            }),
            this.initWidget();
        },
        initWidget: function () {
          "empty" == this.model.get("type") || this.$el.find(".thumb .d_delete").length > 0
            ? (this.$el.on("click", i.bind(this.onClickInstallWidgetBtn, this)), this.listenTo(this.model, "install", this.install))
            : !1 === this.model.get("enabled")
            ? this.$el.css("cursor", "auto")
            : "gadget" == this.model.get("type")
            ? this.initGadget()
            : "link" == this.model.get("type") && (this.$el.find(".d_link").on("click", i.bind(this.onClickLinkWidget, this)), this.$el.hasClass("d_custom_link") && this.initCustomLink()),
            this.checkBtnAppVisibility();
        },
        showRemoveNoti: function () {
          this.$el.find(".d_pop_notice_end").show();
        },
        hideRemoveNoti: function () {
          this.$el.find(".d_pop_notice_end").hide();
        },
        checkBtnAppVisibility: function () {
          var e = this;
          this.$el.find("div.btn_app").hide(),
            zum.readonly ||
              this.model.isEmpty() ||
              (this.$el.find("div.btn_app .close").show(),
              this.$el.children("h3:first,div.btn_app").hover(
                function () {
                  e.$el.find("div.btn_app").show();
                },
                function () {
                  e.$el.find("div.btn_app").hide();
                }
              ));
        },
        destroy: function () {
          this.model.unbind(), this.undelegateEvents(), this.remove();
        },
        onClickLinkWidget: function (e) {
          var t = this.model.get("boxinfo"),
            n = a(e.currentTarget);
          n.attr("target", this.getLinkTarget());
          var i = {},
            s = [];
          return (
            s.push(t),
            (i.landingPage = n.attr("href")),
            (i.index = n.parent().parent().index() + 1),
            o.a.linkappClick(s, i),
            "_blank" === n.attr("target") ||
              (setTimeout(function () {
                m.movePageHandler(n.attr("href"), n.attr("target"));
              }, 50),
              !1)
          );
        },
        initGadget: function () {
          var e = this,
            t = this.$el.find("iframe.d_iframe_gadget");
          if (t.length > 0)
            t.each(function () {
              var t = a(this);
              t.load(function () {
                m.setPrefs({ model: e.model, view: e });
                var n = this.contentWindow.document.createElement("script");
                (n.type = "text/javascript"), (n.text = e.unlockDeferscript(t.contents())), this.contentWindow.document.body.appendChild(n), e.setZumapp(e.$el.data("zumapp"));
              }),
                t.attr("src", t.data("src"));
            });
          else {
            m.setPrefs({ model: this.model, view: this });
            var n = '<script type="text/javascript">' + this.unlockDeferscript(this.$el) + "</script>";
            a("head").append(n), this.setZumapp(this.$el.data("zumapp"));
          }
        },
        unlockDeferscript: function (e) {
          var t = e.find('script[type="text/deferscript"]'),
            n = [];
          return (
            t.each(function () {
              var e = a(this);
              n.push(e.html()), e.remove();
            }),
            n.join(" ")
          );
        },
        setZumapp: function (e) {
          var t = this;
          (this.zumapp = e),
            this.zumapp &&
              (zum.readonly || "function" != typeof this.zumapp.setter || (this.$el.find("div.btn_app .setting").show(), (this.settingHandler = this.zumapp.setter)),
              a(this.zumapp).bind("set:zumapp:prefs", function (e, n) {
                t.model.set("prefs", n), t.model.collection.sync();
              }));
        },
        decodeURIComponentCustomLinkBoxInfo: function (e) {
          return e
            ? a.extend({}, e, {
                title: l.a.safeDecodeURIComponent(e.title),
                link: l.a.safeDecodeURIComponent(e.link),
                img: l.a.safeDecodeURIComponent(e.img),
                imgFileName: l.a.safeDecodeURIComponent(e.imgFileName),
              })
            : e;
        },
        initCustomLink: function () {
          var e = {};
          if (
            ((e = i.isString(this.model.get("boxinfo")) ? JSON.parse(this.model.get("boxinfo")) : this.model.get("boxinfo")),
            this.model.set("boxinfo", this.decodeURIComponentCustomLinkBoxInfo(e)),
            null != e && (void 0 === e.img || 0 === e.img.length))
          ) {
            var t = zum.readonly ? this.DEFAULT_THUMBNAIL_READONLY_URL : this.DEFAULT_THUMBNAIL_URL;
            this.$el
              .find(".d_main")
              .css("background", "url('" + t + "') no-repeat")
              .css("background-position", "center")
              .css("background-color", "#f5f5f5");
          }
          if (!zum.readonly) {
            this.$el.find("div.btn_app .setting").show(), (this.settingHandler = this.onOpenSetting4CustomLinkApp);
            var n = a(s.templates.app_box_linkapp_setting({ boxIdx: this.$el.index(), staticBaseUrl: zum.staticBaseUrl ? zum.staticBaseUrl : "", variantsParam: window.variantsParam }));
            this.$el.find(".d_setting").append(n),
              this.$el.find("#d_name_input").val(e.title),
              this.$el.find(".app_wrap_image_change .setting #d_name_input").keydown(i.bind(this.onNameChangeFocus, this)),
              this.$el.find(".app_wrap_image_change .setting .file").change(i.bind(this.onChangeUploadImage4CustomLinkApp, this)),
              this.$el.find(".app_wrap_image_change .setting #btn_next").click(i.bind(this.nextToSelectChange, this)),
              this.$el.find(".app_wrap_image_change .setting #btn_confirm").click(i.bind(this.onSaveSetting4CustomLinkApp, this)),
              this.$el.find(".app_wrap_image_change .setting #btn_name_confirm").click(i.bind(this.onSaveSetting4CustomLinkApp, this)),
              this.$el.find(".app_wrap_image_change .setting #btn_cancel").click(i.bind(this.onCancelSetting4CustomLinkApp, this)),
              this.$el.find(".app_wrap_image_change #btn_register_image").click(i.bind(this.onOpenSetting4CustomLinkApp, this));
          }
        },
        getLinkTarget: function () {
          return "1" == r.a.getData(r.a.Names.linkTarget) ? "_top" : "_blank";
        },
        moveUrlStat: function (e) {
          o.a.moveUrl(this.model, e);
        },
        onNameChangeFocus: function (e) {
          e.stopImmediatePropagation();
        },
        nextToSelectChange: function (e) {
          var t = a(e.currentTarget).closest(".d_setting");
          t.find("#d_link_setting_select").hide();
          var n = t.find("input[type='radio']:checked").data("type") || "name";
          t.find("#d_link_" + n + "_setting").show();
        },
        onOpenSetting4CustomLinkApp: function (e) {
          if (zum.readonly) return alert("읽기 전용 상태에서 이미지를 등록할 수 없습니다."), !1;
          var t = this.model.get("boxinfo");
          this.$el.find("#d_name_input").val(t.title),
            this.$el.find("#text_custom_thumbnail_url").val(""),
            t.imgFileName && this.$el.find(".d_setting #text_custom_thumbnail_file_name").val(t.imgFileName),
            this.$el.find(".app_wrap_image_change .d_main").hide(),
            this.$el.find(".app_wrap_image_change .d_setting #d_link_setting_select").show(),
            this.$el.find(".app_wrap_image_change .d_setting #d_link_name_setting").hide(),
            this.$el.find(".app_wrap_image_change .d_setting #d_link_image_setting").hide(),
            this.$el.find(".app_wrap_image_change .d_setting").show(),
            this.$el.find("#btn_register_image").hide();
        },
        onChangeUploadImage4CustomLinkApp: function (e) {
          new c.a({ el: this.$el }).startUploading();
        },
        onSaveSetting4CustomLinkApp: function (e) {
          var t = a.trim(this.$el.find("#d_name_input").val()),
            n = this.$el
              .find("#text_custom_thumbnail_url")
              .val()
              .replace(/[\|\{\}\'\"]/, ""),
            i = this.$el
              .find("#text_custom_thumbnail_file_name")
              .val()
              .replace(/[\|\{\}\'\"]/, ""),
            s = this.model.get("boxinfo"),
            o = !1,
            r = !1;
          if (!t) return alert("이름을 입력해 주세요."), this.$el.find("#d_name_input").focus(), !1;
          if (!t.match(/^[a-zA-Z가-힣\s\d-_~!?\/()\^\[\]☆★♡♥.&=]*$/)) return alert("사용할 수 없는 문자가 포함되어있습니다."), !1;
          (s.title = t),
            (o = !0),
            n.length > 0
              ? ((r = !0), this.$el.find("#btn_register_image").hide(), (s.img = n), (s.imgFileName = i), this.$el.find("#btn_register_image").remove())
              : this.$el.find("#btn_register_image").show(),
            (o || r) &&
              (this.model.set("boxinfo", s),
              this.model.collection.sync(),
              o && this.$el.find(".d_title").text(s.title),
              r &&
                this.$el
                  .find(".d_main")
                  .css("background", "url('" + n + "') no-repeat")
                  .css("background-position", "center")
                  .css("background-color", "#f5f5f5")),
            this.$el.find("#text_custom_thumbnail_url").val(""),
            this.$el.find("#text_custom_thumbnail_file_name").val(""),
            this.$el.find(".app_wrap_image_change .d_setting").hide(),
            this.$el.find(".app_wrap_image_change .d_main").show();
        },
        onCancelSetting4CustomLinkApp: function (e) {
          this.$el.find("#text_custom_thumbnail_url").val(""),
            this.$el.find("#text_custom_thumbnail_file_name").val(""),
            this.$el.find(".app_wrap_image_change .d_setting").hide(),
            this.$el.find(".app_wrap_image_change .d_main").show(),
            this.$el.find("#btn_register_image").show();
        },
        show: function () {
          this.$el.show();
        },
        hide: function () {
          this.$el.hide();
        },
        onClickSettingBtn: function (e) {
          return (
            e.stopPropagation(),
            this.zumpageAuthorizationInterceptor(function () {
              zum.readonly || this.settingHandler();
            })
          );
        },
        onClickCloseBtn: function (e) {
          var t = this;
          return (
            e.stopPropagation(),
            this.zumpageAuthorizationInterceptor(function () {
              if (!zum.readonly && confirm("삭제한 위젯은 위젯스토어에서\n다시 설치할 수 있습니다.\n\n삭제하시겠습니까?")) {
                t.model.collection.remove(t.model, { emptyFill: !0, sync: !0 });
                var e = { appInfo: [i.isString(t.model.attributes.boxinfo) ? t.model.attributes.boxinfo : JSON.stringify(t.model.attributes.boxinfo)], index: [t.model.attributes.boxposition] };
                p.a.send(p.a.WidgetStat.eventName.appDelete, e);
              }
            })
          );
        },
        onClickInstallWidgetBtn: function (e) {
          e.stopPropagation();
          var t = this;
          return this.zumpageAuthorizationInterceptor(function () {
            ESTatTracker.push(["@Click", { pos: "zumAppEmpty", puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] }]), d.a.openWidgetStore(t.$el.index());
          });
        },
        onMouseenter: function (e) {
          zum.readonly || $zum.trigger("load:fedit"), this.$el.addClass("app_over"), this.$el.find(".wrap_absolute_app").addClass("app_over");
        },
        onMouseleave: function (e) {
          this.$el.removeClass("app_over"), this.$el.find(".wrap_absolute_app").removeClass("app_over");
        },
        onMouseenterAppBtn: function (e) {
          a(e.target).addClass("over");
        },
        onMouseleaveAppBtn: function (e) {
          a(e.target).removeClass("over");
        },
        zumpageAuthorizationInterceptor: function (e) {
          if (zum.readonly)
            return (
              r.a.isAuth()
                ? confirm("다른 사람의 줌페이지에서는 위젯추가, 꾸미기등의 변경은 할 수 없으며 내 줌페이지에서만 사용할 수 있습니다.\n\n'확인'을 누르면 내 줌페이지로 이동합니다.") &&
                  (location.href = zum.baseUrl)
                : confirm("현재 줌페이지에서 위젯추가, 꾸미기등의 변경은 줌페이지 소유자의 아이디로 로그인 후 사용할 수 있습니다.\n\n'확인'을 누르면 로그인 페이지로 이동합니다.") &&
                  (location.href = "http://user.zum.com/login/general?targetUrl=" + encodeURIComponent(location.href)),
              !1
            );
          e && "function" == typeof e && e.apply(this);
        },
        DEFAULT_THUMBNAIL_URL: zum.staticBaseUrl + "/images/widget/bg_no_image_130626.png",
        DEFAULT_THUMBNAIL_READONLY_URL: zum.staticBaseUrl + "/images/widget/bg_no_image_readonly.gif",
        install: function (e, t) {
          var n = this;
          if (this.model.isInstallable()) {
            var l = this.$el,
              c = a(s.templates.app_box_loading({ staticBaseUrl: zum.staticBaseUrl, boxData: e }));
            this.setElement(c), l.replaceWith(c), this.$el.data("model", this.model), void 0 !== e.title && this.$el.find(".d_title").text(e.title);
            var d = zum.page;
            if (e.widgetId) {
              var m = "";
              i.isUndefined(zum.previewKey) ||
                i.isUndefined(zum.previewTimestamp) ||
                i.isUndefined(zum.previewModuleKey) ||
                (m = (m = (m = m + "&preview_key=" + zum.previewKey) + "&timestamp=" + zum.previewTimestamp) + "&module_key=" + zum.previewModuleKey),
                a
                  .get("/view/widget/info?widget_id=" + e.widgetId + m, function (i) {
                    var s = a(i);
                    if (c) {
                      var r = n.$el;
                      n.setElement(s), r.replaceWith(s), n.model.set(u.a.makeDataByElement(s)), n.$el.data("model", n.model);
                      i = n.getAppInsertData([e.widgetId], n.model.attributes.boxposition, t);
                      p.a.send(p.a.WidgetStat.eventName.appInsert, i), o.a.pageView([e.widgetId]), n.initWidget(), n.model.collection.syncInstall(d), h.a.trigger("installComplete:appManager", e);
                    }
                  })
                  .always(function () {
                    n.inProcessing = !1;
                  });
            } else {
              e.type = "link";
              var f = c;
              f.addClass("d_custom_link")
                .find(".d_link")
                .attr("href", e.link)
                .attr("target", "1" == r.a.getData(r.a.Names.linkTarget) ? "_top" : "_blank");
              var _ = function (i) {
                  (e.imgFileName && 0 !== e.imgFileName.length) || (e.imgFileName = "이미지를 등록해 주세요.");
                  var a = JSON.stringify(e);
                  n.model.set({ boxinfo: e, type: "link" }), n.initWidget(), n.model.collection.syncInstall(d), h.a.trigger("installComplete:appManager", e);
                  var s = n.getAppInsertData([a], n.model.attributes.boxposition, t);
                  p.a.send(p.a.WidgetStat.eventName.appInsert, s);
                  var r = e.link;
                  o.a.pageView([r]);
                },
                g = function () {
                  var t = n.DEFAULT_THUMBNAIL_URL;
                  f
                    .find(".d_main")
                    .css("background", "url('" + t + "') no-repeat")
                    .css("background-position", "center")
                    .css("background-color", "#f5f5f5"),
                    (e.img = ""),
                    a('<a href="javascript:;" class="regist" id="btn_register_image"><span class="blind">이미지 등록</span></a>').insertAfter(f.find(".d_main").parent());
                };
              e.img && e.img.length > 0
                ? (f
                    .find(".d_main")
                    .css("background", "url('" + e.img + "') no-repeat")
                    .css("background-position", "center")
                    .css("background-color", "#f5f5f5"),
                  _(),
                  (n.inProcessing = !1))
                : a
                    .get(
                      "//thumbnail-api.zum.com/thumbnail",
                      { url: e.link, priority: 0 },
                      function (t) {
                        var i = "http://post3.zumst.com/thumbnail/";
                        i += t.value.substr(0, 2) + "/" + t.value.substr(2, 2) + "/" + t.value + ".jpg";
                        var s = {
                          url: "//postimage3.zum.com/check?service=thumbnail&url=",
                          imgUrl: "",
                          countOver: 12,
                          countCurrent: 0,
                          requestDelay: 5e3,
                          callback: function (t) {
                            "yes" === t.status
                              ? ((e.img = s.imgUrl.replace("http://", "//")),
                                f
                                  .find(".d_main")
                                  .css("background", "url('" + e.img + "') no-repeat")
                                  .css("background-position", "center")
                                  .css("background-color", "#f5f5f5"),
                                _(),
                                (n.inProcessing = !1))
                              : s.countCurrent > s.countOver
                              ? (g(), _(), (n.inProcessing = !1))
                              : (s.countCurrent++, setTimeout(s.check, s.requestDelay));
                          },
                          init: function (e) {
                            (s.imgUrl = e), (s.url += s.imgUrl + "&callback=?&info=true"), s.check();
                          },
                          check: function () {
                            a.getJSON(s.url, s.callback);
                          },
                        };
                        s.init(i);
                      },
                      "jsonp"
                    )
                    .error(function () {
                      g(), _(), (n.inProcessing = !1);
                    });
            }
          } else alert("이미 설치된 위젯을 제거 후 설치할 수 있습니다");
        },
        getAppInsertData: function (e, t, n) {
          return { appInfo: e, index: t, refType: void 0 === n ? "zumappstore" : n };
        },
      });
    }.call(this, n(4), n(8), n(3), n(37)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(194),
        a = e.Collection.extend({
          model: i.a,
          url: "/view/widget/layout.json",
          fetch: function () {
            return this.length > 0
              ? {
                  success: function (e) {
                    e();
                  },
                }
              : e.Model.prototype.fetch.call(this);
          },
        });
      t.a = new a();
    }.call(this, n(4)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(27), n(28), n(29), n(24), n(21), n(30), n(26);
      function t(e) {
        return (t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      ((e = e || {}).templates = e.templates || {}),
        (e.templates.app_box_empty = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            return '<li class="box_app empty">\n\t<h3></h3>\n\t<div class="btn_app">\n\t\t<span class="setting" style="display:none"><a href="javascript:;" class="fire" title="설정"><span class="blind">설정</span></a></span>\n\t\t<span class="close" style="display:none"><a href="javascript:;" class="fire" title="삭제"><span class="blind">삭제</span></a></span>\n\t</div>\n</li>';
          },
          useData: !0,
        })),
        (e.templates.app_box_linkapp_setting = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = "function",
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<form>\n<div id="d_link_setting_select">\n\t<ul class="radio">\n\t    <li><input type="radio" id="radio' +
              u(
                t((o = null != (o = h(i, "boxIdx") || (null != n ? h(n, "boxIdx") : n)) ? o : l)) === c
                  ? o.call(r, { name: "boxIdx", hash: {}, data: s, loc: { start: { line: 4, column: 38 }, end: { line: 4, column: 48 } } })
                  : o
              ) +
              '_1" name="' +
              u(
                t((o = null != (o = h(i, "boxIdx") || (null != n ? h(n, "boxIdx") : n)) ? o : l)) === c
                  ? o.call(r, { name: "boxIdx", hash: {}, data: s, loc: { start: { line: 4, column: 58 }, end: { line: 4, column: 68 } } })
                  : o
              ) +
              '" data-type="name" checked="checked"><label for="radio' +
              u(
                t((o = null != (o = h(i, "boxIdx") || (null != n ? h(n, "boxIdx") : n)) ? o : l)) === c
                  ? o.call(r, { name: "boxIdx", hash: {}, data: s, loc: { start: { line: 4, column: 122 }, end: { line: 4, column: 132 } } })
                  : o
              ) +
              '_1">이름 변경</label></li>\n\t    <li><input type="radio" id="radio' +
              u(
                t((o = null != (o = h(i, "boxIdx") || (null != n ? h(n, "boxIdx") : n)) ? o : l)) === c
                  ? o.call(r, { name: "boxIdx", hash: {}, data: s, loc: { start: { line: 5, column: 38 }, end: { line: 5, column: 48 } } })
                  : o
              ) +
              '_2" name="' +
              u(
                t((o = null != (o = h(i, "boxIdx") || (null != n ? h(n, "boxIdx") : n)) ? o : l)) === c
                  ? o.call(r, { name: "boxIdx", hash: {}, data: s, loc: { start: { line: 5, column: 58 }, end: { line: 5, column: 68 } } })
                  : o
              ) +
              '" data-type="image"><label for="radio' +
              u(
                t((o = null != (o = h(i, "boxIdx") || (null != n ? h(n, "boxIdx") : n)) ? o : l)) === c
                  ? o.call(r, { name: "boxIdx", hash: {}, data: s, loc: { start: { line: 5, column: 105 }, end: { line: 5, column: 115 } } })
                  : o
              ) +
              '_2">이미지 변경</label></li>\n\t</ul>\n\t<div class="btn">\n\t    <a href="javascript:;" id="btn_next"><img src="' +
              u(
                t((o = null != (o = h(i, "staticBaseUrl") || (null != n ? h(n, "staticBaseUrl") : n)) ? o : l)) === c
                  ? o.call(r, { name: "staticBaseUrl", hash: {}, data: s, loc: { start: { line: 8, column: 52 }, end: { line: 8, column: 69 } } })
                  : o
              ) +
              '/images/widget/common/image_change/btn_next.gif" alt="다음"></a>\n\t    <a href="javascript:;" id="btn_cancel"><img src="' +
              u(
                t((o = null != (o = h(i, "staticBaseUrl") || (null != n ? h(n, "staticBaseUrl") : n)) ? o : l)) === c
                  ? o.call(r, { name: "staticBaseUrl", hash: {}, data: s, loc: { start: { line: 9, column: 54 }, end: { line: 9, column: 71 } } })
                  : o
              ) +
              '/images/widget/common/image_change/btn_cancel.gif" alt="취소"></a>\n\t</div>\n</div>\n</form>\n<div id="d_link_name_setting" style="display:none">\n\t<h2>이름 변경</h2>\n\t<div class="upload">\n\t    <input type="text" id="d_name_input" class="fk_input" maxlength="50" value="">\n\t    <span class="help"><strong>사용할 수 있는 특수문자</strong><br>\n\t    -,_,~,!,?,/,(,),^,[,],☆,★,♡,♥</span>\n\t</div>\n\t<div class="btn">\n\t\t<a href="javascript:;" id="btn_name_confirm"><img src="' +
              u(
                t((o = null != (o = h(i, "staticBaseUrl") || (null != n ? h(n, "staticBaseUrl") : n)) ? o : l)) === c
                  ? o.call(r, { name: "staticBaseUrl", hash: {}, data: s, loc: { start: { line: 21, column: 57 }, end: { line: 21, column: 74 } } })
                  : o
              ) +
              '/images/widget/common/image_change/btn_ok.gif" alt="완료"></a>\n\t\t<a href="javascript:;" id="btn_cancel"><img src="' +
              u(
                t((o = null != (o = h(i, "staticBaseUrl") || (null != n ? h(n, "staticBaseUrl") : n)) ? o : l)) === c
                  ? o.call(r, { name: "staticBaseUrl", hash: {}, data: s, loc: { start: { line: 22, column: 51 }, end: { line: 22, column: 68 } } })
                  : o
              ) +
              '/images/widget/common/image_change/btn_cancel.gif" alt="취소"></a>\n\t</div>\n</div>\n\n<div id="d_link_image_setting" style="display:none">\n\t<h2>이미지 변경 <em>(크기 : 180 x 112)</em></h2>\n\t<form id="thumbnail_upload_form" action="//postimage3.zum.com/form/upload/user_thumbnail" target="up_frame" method="post" enctype="multipart/form-data" data-uploading="false">\n\t\t<div class="upload">\n\t\t\t<input type="hidden" id="text_custom_thumbnail_url" title="업로드된 이미지 URL">\n\t\t\t<input type="hidden" id="callback" name="callback" value="window[\'callbackThumbnailUploadFromAppSetting\']">\n\t\t\t<input type="hidden" id="thumbnailQuality" name="thumbnailQuality" value="100">\n\t\t\t<input type="hidden" id="thumbnailSize" name="thumbnailSize" value="180*112">\n\t\t    <input type="text" id="text_custom_thumbnail_file_name" class="fk_input" title="업로드 이미지 주소" value="이미지를 추가해주세요." onfocus="this.blur()" readonly="">\n\t\t    <a href="#" class="fk_btn">이미지 찾기</a>\n\t\t    <div class="wrap_input"><input type="file" class="file" name="file" title="이미지 찾기"></div>\n\t\t</div>\n\t</form>\n\t<iframe id="up_frame" name="up_frame" src="/document-domain?variants=' +
              u(
                t((o = null != (o = h(i, "variantsParam") || (null != n ? h(n, "variantsParam") : n)) ? o : l)) === c
                  ? o.call(r, { name: "variantsParam", hash: {}, data: s, loc: { start: { line: 39, column: 70 }, end: { line: 39, column: 87 } } })
                  : o
              ) +
              '" style="width: 0px; height: 0px; border: 0px solid #fff;position:absolute;"></iframe>\n\t<div class="btn">\n\t    <a href="javascript:;" id="btn_confirm"><img src="' +
              u(
                t((o = null != (o = h(i, "staticBaseUrl") || (null != n ? h(n, "staticBaseUrl") : n)) ? o : l)) === c
                  ? o.call(r, { name: "staticBaseUrl", hash: {}, data: s, loc: { start: { line: 41, column: 55 }, end: { line: 41, column: 72 } } })
                  : o
              ) +
              '/images/widget/common/image_change/btn_ok.gif" alt="완료"></a>\n\t    <a href="javascript:;" id="btn_cancel"><img src="' +
              u(
                t((o = null != (o = h(i, "staticBaseUrl") || (null != n ? h(n, "staticBaseUrl") : n)) ? o : l)) === c
                  ? o.call(r, { name: "staticBaseUrl", hash: {}, data: s, loc: { start: { line: 42, column: 54 }, end: { line: 42, column: 71 } } })
                  : o
              ) +
              '/images/widget/common/image_change/btn_cancel.gif" alt="취소"></a>\n\t</div>\n</div>\n'
            );
          },
          useData: !0,
        })),
        (e.templates.app_box_loading = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = "function",
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<li class="box_' +
              u(
                t((o = null != (o = h(i, "islong") || (null != n ? h(n, "islong") : n)) ? o : l)) === c
                  ? o.call(r, { name: "islong", hash: {}, data: s, loc: { start: { line: 1, column: 15 }, end: { line: 1, column: 25 } } })
                  : o
              ) +
              'app link">\n\t<h3><span class="title d_title">' +
              u(
                t((o = null != (o = h(i, "title") || (null != n ? h(n, "title") : n)) ? o : l)) === c
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 2, column: 33 }, end: { line: 2, column: 42 } } })
                  : o
              ) +
              '</span></h3>\n\t<div class="btn_app">\n\t\t<span class="setting" style="display:none"><a href="javascript:;" class="fire" title="설정"><span class="blind">설정</span></a></span>\n\t\t<span class="close"><a href="javascript:;" class="fire" title="삭제"><span class="blind">삭제</span></a></span>\n\t</div>\n\t<div class="app_wrap_image_change app_' +
              u(
                t((o = null != (o = h(i, "islong") || (null != n ? h(n, "islong") : n)) ? o : l)) === c
                  ? o.call(r, { name: "islong", hash: {}, data: s, loc: { start: { line: 7, column: 39 }, end: { line: 7, column: 49 } } })
                  : o
              ) +
              'start">\n    \t<a href="javascript:;" class="d_link" target="_top">\n            <div class="' +
              u(
                t((o = null != (o = h(i, "islong") || (null != n ? h(n, "islong") : n)) ? o : l)) === c
                  ? o.call(r, { name: "islong", hash: {}, data: s, loc: { start: { line: 9, column: 24 }, end: { line: 9, column: 34 } } })
                  : o
              ) +
              'main d_main" style="background:url(\'' +
              u(
                t((o = null != (o = h(i, "staticBaseUrl") || (null != n ? h(n, "staticBaseUrl") : n)) ? o : l)) === c
                  ? o.call(r, { name: "staticBaseUrl", hash: {}, data: s, loc: { start: { line: 9, column: 70 }, end: { line: 9, column: 87 } } })
                  : o
              ) +
              "/images/widget/app_" +
              u(
                t((o = null != (o = h(i, "islong") || (null != n ? h(n, "islong") : n)) ? o : l)) === c
                  ? o.call(r, { name: "islong", hash: {}, data: s, loc: { start: { line: 9, column: 106 }, end: { line: 9, column: 116 } } })
                  : o
              ) +
              'loading.gif\') no-repeat;">\n                <h2 class="blind">해당 웹사이트의 이미지가 없습니다.<br />해당 웹사이트로 이동</h2>\n            </div>\n        </a>\n\t\t<div class="setting d_setting" style="display:none;cursor:default;">\t</div>\n\t</div>\n</li>\n'
            );
          },
          useData: !0,
        })),
        (e.templates.background_list = e.template({
          1: function (e, t, n, i, a, s, o) {
            var r,
              l = null != t ? t : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.lambda,
              h = e.escapeExpression,
              d =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              "\t<li" +
              (null !=
              (r = (d(n, "ifCond") || (t && d(t, "ifCond")) || c).call(
                l,
                null != (r = null != t ? d(t, "contents") : t) ? d(r, "image") : r,
                "==",
                null != o[1] ? d(o[1], "selectedBackground") : o[1],
                { name: "ifCond", hash: {}, fn: e.program(2, a, 0, s, o), inverse: e.noop, data: a, loc: { start: { line: 3, column: 4 }, end: { line: 3, column: 85 } } }
              ))
                ? r
                : "") +
              '>\n\t\t<a href="javascript:;" data-background="' +
              h(u(null != (r = null != t ? d(t, "contents") : t) ? d(r, "image") : r, t)) +
              '" data-order="' +
              h((d(n, "plus") || (t && d(t, "plus")) || c).call(l, a && d(a, "index"), 1, { name: "plus", hash: {}, data: a, loc: { start: { line: 4, column: 74 }, end: { line: 4, column: 91 } } })) +
              '" data-title="' +
              h(u(null != (r = null != t ? d(t, "contents") : t) ? d(r, "title") : r, t)) +
              '">\n\t\t\t<img src="' +
              h(u(null != (r = null != t ? d(t, "contents") : t) ? d(r, "thumbnail") : r, t)) +
              '" alt="" width="55" height="55">\n\t\t\t<span class="check_mask"></span>\n\t\t</a>\n\t</li>\n'
            );
          },
          2: function (e, t, n, i, a) {
            return ' class="selected"';
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a, s, o) {
            var r,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              "<ul>\n" +
              (null !=
              (r = l(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? l(t, "items") : t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0, s, o),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 2, column: 1 }, end: { line: 9, column: 10 } },
              }))
                ? r
                : "") +
              "</ul>"
            );
          },
          useData: !0,
          useDepths: !0,
        })),
        (e.templates.background_paging = e.template({
          1: function (e, t, n, i, a) {
            var s,
              o,
              r = null != t ? t : e.nullContext || {},
              l = e.hooks.helperMissing,
              c =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              "\t<li" +
              (null !=
              (s = (c(n, "ifCond") || (t && c(t, "ifCond")) || l).call(r, null != t ? c(t, "index") : t, "==", null != t ? c(t, "selectedIdx") : t, {
                name: "ifCond",
                hash: {},
                fn: e.program(2, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 3, column: 4 }, end: { line: 3, column: 60 } },
              }))
                ? s
                : "") +
              '><a href="#page">' +
              e.escapeExpression(
                "function" == typeof (o = null != (o = c(n, "index") || (null != t ? c(t, "index") : t)) ? o : l)
                  ? o.call(r, { name: "index", hash: {}, data: a, loc: { start: { line: 3, column: 77 }, end: { line: 3, column: 86 } } })
                  : o
              ) +
              "</a></li>\n"
            );
          },
          2: function (e, t, n, i, a) {
            return ' class="on"';
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              "<ul>\n" +
              (null !=
              (s = (o(n, "loop") || (t && o(t, "loop")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, t, null != t ? o(t, "totalPage") : t, {
                name: "loop",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 2, column: 1 }, end: { line: 4, column: 10 } },
              }))
                ? s
                : "") +
              "</ul>"
            );
          },
          useData: !0,
        })),
        (e.templates.decorate_app_category_list = e.template({
          1: function (e, n, i, a, s, o, r) {
            var l,
              c,
              u = null != n ? n : e.nullContext || {},
              h = e.hooks.helperMissing,
              d = e.escapeExpression,
              p =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              "<li " +
              (null !=
              (l = (p(i, "ifLast") || (n && p(n, "ifLast")) || h).call(u, s && p(s, "index"), r[1], {
                name: "ifLast",
                hash: {},
                fn: e.program(2, s, 0, o, r),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 1, column: 15 }, end: { line: 1, column: 59 } },
              }))
                ? l
                : "") +
              ' ><a href="javascript:;" onclick="return false;" id="decorate_category_bar_' +
              d(
                "function" === t((c = null != (c = p(i, "categoryId") || (null != n ? p(n, "categoryId") : n)) ? c : h))
                  ? c.call(u, { name: "categoryId", hash: {}, data: s, loc: { start: { line: 1, column: 134 }, end: { line: 1, column: 148 } } })
                  : c
              ) +
              '" data-category="' +
              d(
                "function" === t((c = null != (c = p(i, "slotKey") || (null != n ? p(n, "slotKey") : n)) ? c : h))
                  ? c.call(u, { name: "slotKey", hash: {}, data: s, loc: { start: { line: 1, column: 165 }, end: { line: 1, column: 176 } } })
                  : c
              ) +
              '" class="d_category_bar" data-cid="' +
              d(
                "function" === t((c = null != (c = p(i, "categoryId") || (null != n ? p(n, "categoryId") : n)) ? c : h))
                  ? c.call(u, { name: "categoryId", hash: {}, data: s, loc: { start: { line: 1, column: 211 }, end: { line: 1, column: 225 } } })
                  : c
              ) +
              '"><span>' +
              d(
                "function" === t((c = null != (c = p(i, "title") || (null != n ? p(n, "title") : n)) ? c : h))
                  ? c.call(u, { name: "title", hash: {}, data: s, loc: { start: { line: 1, column: 233 }, end: { line: 1, column: 242 } } })
                  : c
              ) +
              "</span></a></li>"
            );
          },
          2: function (e, t, n, i, a) {
            return 'class="last"';
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a, s, o) {
            var r;
            return null !=
              (r = (
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                }
              )(n, "each").call(null != t ? t : e.nullContext || {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0, s, o),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 267 } },
              }))
              ? r
              : "";
          },
          useData: !0,
          useDepths: !0,
        })),
        (e.templates.decorate_app_detail = e.template({
          1: function (e, t, n, i, a) {
            return '<li><img src="' + e.escapeExpression(e.lambda(t, t)) + '" alt="" class="d_preview"></li>';
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="cont_detail">\n\t<p class="thumb">\n\t\t<img src="' +
              u(
                "function" === t((r = null != (r = h(i, "thumbnailUrl") || (null != n ? h(n, "thumbnailUrl") : n)) ? r : c))
                  ? r.call(l, { name: "thumbnailUrl", hash: {}, data: s, loc: { start: { line: 3, column: 12 }, end: { line: 3, column: 28 } } })
                  : r
              ) +
              '" class="d_thumb" alt="" width="128" height="128" />\n\t\t<span class="app_mask"></span>\n\t</p>\n\t<dl>\n\t\t<dt>' +
              u(
                "function" === t((r = null != (r = h(i, "title") || (null != n ? h(n, "title") : n)) ? r : c))
                  ? r.call(l, { name: "title", hash: {}, data: s, loc: { start: { line: 7, column: 6 }, end: { line: 7, column: 15 } } })
                  : r
              ) +
              '</dt>\n\t\t<dd class="auth">' +
              u(e.lambda(null != (o = null != n ? h(n, "gadgetInfo") : n) ? h(o, "developer") : o, n)) +
              '</dd>\n\t\t<dd id="decorate_app_detail_text" class="txt txt_full">\n\t\t\t<p>' +
              u(
                (h(i, "breaklines") || (n && h(n, "breaklines")) || c).call(l, null != n ? h(n, "description") : n, {
                  name: "breaklines",
                  hash: {},
                  data: s,
                  loc: { start: { line: 10, column: 6 }, end: { line: 10, column: 32 } },
                })
              ) +
              '</p>\n\t\t<a href="#" onclick="return false;" id="decorate_app_detail_text_more" >더보기</a>\n\t\t</dd>\n\t\t<dd class="btn">\n\t\t\t<a href="javascript:;" data-aid="' +
              u(
                "function" === t((r = null != (r = h(i, "widgetId") || (null != n ? h(n, "widgetId") : n)) ? r : c))
                  ? r.call(l, { name: "widgetId", hash: {}, data: s, loc: { start: { line: 14, column: 36 }, end: { line: 14, column: 48 } } })
                  : r
              ) +
              '" data-ref-type="app_detail" class="d_app_install btn_install"><span>추가</span></a>\n\t\t</dd>\n\t</dl>\n</div>\n<ul class="preview">\n\t' +
              (null !=
              (o = h(i, "each").call(l, null != n ? h(n, "previewImages") : n, {
                name: "each",
                hash: {},
                fn: e.program(1, s, 0),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 21, column: 1 }, end: { line: 21, column: 84 } },
              }))
                ? o
                : "") +
              '\n</ul>\n<p class="copyright">* 줌인터넷은 본 게시물에 포함된 상표권 및 저작권 정보에 관련하여 명시하고 있습니다. <a href="http://policy.zum.com/disclaimer" target="_blank" >자세히 보기</a></p>'
            );
          },
          useData: !0,
        })),
        (e.templates.decorate_app_detail_top = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<a href="javascript:;" onclick="return false;" data-cid="' +
              c(
                "function" === t((o = null != (o = u(i, "categoryId") || (null != n ? u(n, "categoryId") : n)) ? o : l))
                  ? o.call(r, { name: "categoryId", hash: {}, data: s, loc: { start: { line: 1, column: 57 }, end: { line: 1, column: 71 } } })
                  : o
              ) +
              '" id="za_store_path_btn_category" class="btn_list">목록으로 돌아가기</a>\n<div class="navi"><a href="#" onclick="return false;" class="d_store_path_btn_home">위젯스토어</a> &gt; <a href="#" onclick="return false;" class="d_category_bar" data-cid=' +
              c(
                "function" === t((o = null != (o = u(i, "categoryId") || (null != n ? u(n, "categoryId") : n)) ? o : l))
                  ? o.call(r, { name: "categoryId", hash: {}, data: s, loc: { start: { line: 2, column: 167 }, end: { line: 2, column: 181 } } })
                  : o
              ) +
              ">" +
              c(
                "function" === t((o = null != (o = u(i, "firstCategory") || (null != n ? u(n, "firstCategory") : n)) ? o : l))
                  ? o.call(r, { name: "firstCategory", hash: {}, data: s, loc: { start: { line: 2, column: 182 }, end: { line: 2, column: 199 } } })
                  : o
              ) +
              "</a> &gt; <strong>" +
              c(
                "function" === t((o = null != (o = u(i, "title") || (null != n ? u(n, "title") : n)) ? o : l))
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 2, column: 217 }, end: { line: 2, column: 226 } } })
                  : o
              ) +
              "</strong></div>"
            );
          },
          useData: !0,
        })),
        (e.templates.decorate_app_list = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = "function",
              h = e.escapeExpression,
              d =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\t<li>\n        <div class="app_item">\n            <a href="javascript:;" data-aid="' +
              h(
                t((r = null != (r = d(i, "widgetId") || (null != n ? d(n, "widgetId") : n)) ? r : c)) === u
                  ? r.call(l, { name: "widgetId", hash: {}, data: s, loc: { start: { line: 4, column: 45 }, end: { line: 4, column: 57 } } })
                  : r
              ) +
              '" class="d_app_detail app_img">\n                <img src="' +
              h(
                t((r = null != (r = d(i, "thumbnailUrl") || (null != n ? d(n, "thumbnailUrl") : n)) ? r : c)) === u
                  ? r.call(l, { name: "thumbnailUrl", hash: {}, data: s, loc: { start: { line: 5, column: 26 }, end: { line: 5, column: 42 } } })
                  : r
              ) +
              '" alt="" class="img_app d_thumb" width="64" height="64">\n                <span class="app_mask"></span>\x3c!-- 이미지 위를 덮어주는 마스크 역할 : 둥근테두리 생성 --\x3e\n            </a>\n            <p class="app_info">\n                <strong class="a_title"><a href="javascript:;" data-aid="' +
              h(
                t((r = null != (r = d(i, "widgetId") || (null != n ? d(n, "widgetId") : n)) ? r : c)) === u
                  ? r.call(l, { name: "widgetId", hash: {}, data: s, loc: { start: { line: 9, column: 73 }, end: { line: 9, column: 85 } } })
                  : r
              ) +
              '" class="d_app_detail" >' +
              h(
                t((r = null != (r = d(i, "title") || (null != n ? d(n, "title") : n)) ? r : c)) === u
                  ? r.call(l, { name: "title", hash: {}, data: s, loc: { start: { line: 9, column: 109 }, end: { line: 9, column: 118 } } })
                  : r
              ) +
              '</a></strong>\n                <span class="a_cate">' +
              h(
                t((r = null != (r = d(i, "firstCategory") || (null != n ? d(n, "firstCategory") : n)) ? r : c)) === u
                  ? r.call(l, { name: "firstCategory", hash: {}, data: s, loc: { start: { line: 10, column: 37 }, end: { line: 10, column: 54 } } })
                  : r
              ) +
              '</span>\n                \n\t\t\t\t<a href="javascript:;" data-aid="' +
              h(
                t((r = null != (r = d(i, "widgetId") || (null != n ? d(n, "widgetId") : n)) ? r : c)) === u
                  ? r.call(l, { name: "widgetId", hash: {}, data: s, loc: { start: { line: 12, column: 37 }, end: { line: 12, column: 49 } } })
                  : r
              ) +
              '" data-ref-type="app_list" class="d_app_install app_add"><span>추가</span></a>\n' +
              (null !=
              (o = (d(i, "ifEquals") || (n && d(n, "ifEquals")) || c).call(l, null != (o = null != n ? d(n, "size") : n) ? d(o, "width") : o, 2, {
                name: "ifEquals",
                hash: {},
                fn: e.program(2, s, 0),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 13, column: 4 }, end: { line: 15, column: 17 } },
              }))
                ? o
                : "") +
              "            </p>\n        </div>\n    </li>\n"
            );
          },
          2: function (e, t, n, i, a) {
            return '\t\t\t\t\t<em href="#" class="app_two"><span>2칸</span></em>\n';
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s;
            return null !=
              (s = (
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                }
              )(n, "each").call(null != t ? t : e.nullContext || {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 19, column: 9 } },
              }))
              ? s
              : "";
          },
          useData: !0,
        })),
        (e.templates.decorate_app_suggest_list = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<li><a href="javascript:;"><span class="sname">' +
              c(
                "function" === t((o = null != (o = u(i, "title") || (null != n ? u(n, "title") : n)) ? o : l))
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 1, column: 58 }, end: { line: 1, column: 67 } } })
                  : o
              ) +
              '</span> <span class="url">' +
              c(
                "function" === t((o = null != (o = u(i, "link") || (null != n ? u(n, "link") : n)) ? o : l))
                  ? o.call(r, { name: "link", hash: {}, data: s, loc: { start: { line: 1, column: 93 }, end: { line: 1, column: 101 } } })
                  : o
              ) +
              "</span></a></li>"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s;
            return null !=
              (s = (
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                }
              )(n, "each").call(null != t ? t : e.nullContext || {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 126 } },
              }))
              ? s
              : "";
          },
          useData: !0,
        })),
        (e.templates.decorate_app_theme_app_list = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = "function",
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\t<li>\n\t    <div class="app_item">\n\t        <a href="javascript:;" data-aid="' +
              u(
                t((o = null != (o = h(i, "widgetId") || (null != n ? h(n, "widgetId") : n)) ? o : l)) === c
                  ? o.call(r, { name: "widgetId", hash: {}, data: s, loc: { start: { line: 4, column: 42 }, end: { line: 4, column: 54 } } })
                  : o
              ) +
              '" class="d_theme_app_detail_or_block app_img">\n\t            <img src="' +
              u(
                t((o = null != (o = h(i, "thumbnail") || (null != n ? h(n, "thumbnail") : n)) ? o : l)) === c
                  ? o.call(r, { name: "thumbnail", hash: {}, data: s, loc: { start: { line: 5, column: 23 }, end: { line: 5, column: 36 } } })
                  : o
              ) +
              '" alt="위젯_샘플" class="img_app d_thumb" width="64" height="64">\n\t            <span class="app_mask"></span>\x3c!-- 이미지 위를 덮어주는 마스크 역할 : 둥근테두리 생성 --\x3e\n\t        </a>\n\t        <p class="app_info">\n\t            <strong class="d_app_title a_title"><a href="javascript:;" data-aid="' +
              u(
                t((o = null != (o = h(i, "widgetId") || (null != n ? h(n, "widgetId") : n)) ? o : l)) === c
                  ? o.call(r, { name: "widgetId", hash: {}, data: s, loc: { start: { line: 9, column: 82 }, end: { line: 9, column: 94 } } })
                  : o
              ) +
              '" class="d_theme_app_detail_or_block" >' +
              u(
                t((o = null != (o = h(i, "title") || (null != n ? h(n, "title") : n)) ? o : l)) === c
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 9, column: 133 }, end: { line: 9, column: 142 } } })
                  : o
              ) +
              '</a></strong>\n\t            <span class="a_cate">' +
              u(
                t((o = null != (o = h(i, "firstCategory") || (null != n ? h(n, "firstCategory") : n)) ? o : l)) === c
                  ? o.call(r, { name: "firstCategory", hash: {}, data: s, loc: { start: { line: 10, column: 34 }, end: { line: 10, column: 51 } } })
                  : o
              ) +
              '</span>\n\t            <a href="javascript:;" data-aid="' +
              u(
                t((o = null != (o = h(i, "widgetId") || (null != n ? h(n, "widgetId") : n)) ? o : l)) === c
                  ? o.call(r, { name: "widgetId", hash: {}, data: s, loc: { start: { line: 11, column: 46 }, end: { line: 11, column: 58 } } })
                  : o
              ) +
              '" class="d_app_detail app_view">자세히 보기</a>\n\t        </p>\n\t        <input type="checkbox" name="" value="" class="blind">\n\t        <a href="javascript:;" data-idx="' +
              u(
                t((o = null != (o = h(i, "index") || (s && h(s, "index"))) ? o : l)) === c
                  ? o.call(r, { name: "index", hash: {}, data: s, loc: { start: { line: 14, column: 42 }, end: { line: 14, column: 52 } } })
                  : o
              ) +
              '" class="d_theme_app_check" >\n\t        \t<span id="d_theme_app_checkbox_' +
              u(
                t((o = null != (o = h(i, "index") || (s && h(s, "index"))) ? o : l)) === c
                  ? o.call(r, { name: "index", hash: {}, data: s, loc: { start: { line: 15, column: 41 }, end: { line: 15, column: 51 } } })
                  : o
              ) +
              '" class="d_theme_app_checkbox ckd ckd_on">선택됨</span>\n\t\t\t</a>\n\t        \n\t    </div>\n\t</li>\n'
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s;
            return null !=
              (s = (
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                }
              )(n, "each").call(null != t ? t : e.nullContext || {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 20, column: 9 } },
              }))
              ? s
              : "";
          },
          useData: !0,
        })),
        (e.templates.decorate_app_theme_detail = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div id="decorate_app_theme_detail" class="thema_view"> \n\t<div class="thema_view_img">\n\t    <img src="' +
              c(
                "function" === t((o = null != (o = u(i, "thumbnail") || (null != n ? u(n, "thumbnail") : n)) ? o : l))
                  ? o.call(r, { name: "thumbnail", hash: {}, data: s, loc: { start: { line: 3, column: 15 }, end: { line: 3, column: 28 } } })
                  : o
              ) +
              '" width="388" height="100" alt="">\n\t    <span class="b_border"></span>\n\t</div>\n\t<div class="thema_view_text">\n\t    <strong>' +
              c(
                "function" === t((o = null != (o = u(i, "title") || (null != n ? u(n, "title") : n)) ? o : l))
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 7, column: 13 }, end: { line: 7, column: 22 } } })
                  : o
              ) +
              "</strong>\n\t    <em>" +
              c(
                (u(i, "breaklines") || (n && u(n, "breaklines")) || l).call(r, null != n ? u(n, "description") : n, {
                  name: "breaklines",
                  hash: {},
                  data: s,
                  loc: { start: { line: 8, column: 9 }, end: { line: 8, column: 35 } },
                })
              ) +
              '</em>\n\t</div>\n</div>\n<div class="thema_app_list">\n\t<h4>위젯 목록</h4>\n\t<div class="list_selector">\n\t\t<div id="decorate_app_theme_detail_all_check" class="check">\n\t\t\t<input type="checkbox" name="" value="" class="blind"><span class="ckd ckd_on">선택됨</span>전체선택\n\t\t</div>\n\t\t<a href="javascript:;" data-tid="' +
              c(
                "function" === t((o = null != (o = u(i, "id") || (null != n ? u(n, "id") : n)) ? o : l))
                  ? o.call(r, { name: "id", hash: {}, data: s, loc: { start: { line: 17, column: 35 }, end: { line: 17, column: 41 } } })
                  : o
              ) +
              '" class="d_theme_install btn_install" style="display:none"><span>테마 추가</span></a>\n\t</div>\n</div>'
            );
          },
          useData: !0,
        })),
        (e.templates.decorate_app_theme_detail_top = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<a href="#" onclick="return false;" class="d_store_path_btn_home btn_list">목록으로 돌아가기</a>\n<div class="navi"><a href="#" onclick="return false;" class="d_store_path_btn_home">위젯스토어</a> &gt; <a href="#" onclick="return false;" class="d_store_path_btn_home">테마</a> &gt; <strong>' +
              e.escapeExpression(
                "function" == typeof (s = null != (s = o(n, "title") || (null != t ? o(t, "title") : t)) ? s : e.hooks.helperMissing)
                  ? s.call(null != t ? t : e.nullContext || {}, { name: "title", hash: {}, data: a, loc: { start: { line: 2, column: 185 }, end: { line: 2, column: 194 } } })
                  : s
              ) +
              "</strong></div>"
            );
          },
          useData: !0,
        })),
        (e.templates.decorate_app_theme_list = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\t<li>\n\t    <a href="javascript:;" class="d_theme_detail" data-tid="' +
              c(
                "function" === t((o = null != (o = u(i, "id") || (null != n ? u(n, "id") : n)) ? o : l))
                  ? o.call(r, { name: "id", hash: {}, data: s, loc: { start: { line: 3, column: 61 }, end: { line: 3, column: 67 } } })
                  : o
              ) +
              '">\n\t        <img src="' +
              c(
                "function" === t((o = null != (o = u(i, "thumbnail") || (null != n ? u(n, "thumbnail") : n)) ? o : l))
                  ? o.call(r, { name: "thumbnail", hash: {}, data: s, loc: { start: { line: 4, column: 19 }, end: { line: 4, column: 32 } } })
                  : o
              ) +
              '" width="388" height="100" alt="" />\n\t        <strong>' +
              c(
                "function" === t((o = null != (o = u(i, "title") || (null != n ? u(n, "title") : n)) ? o : l))
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 5, column: 17 }, end: { line: 5, column: 26 } } })
                  : o
              ) +
              "</strong>\n\t        <em>" +
              c(
                "function" === t((o = null != (o = u(i, "summary") || (null != n ? u(n, "summary") : n)) ? o : l))
                  ? o.call(r, { name: "summary", hash: {}, data: s, loc: { start: { line: 6, column: 13 }, end: { line: 6, column: 24 } } })
                  : o
              ) +
              '</em>\n\t        <span class="b_border"></span>\n\t    </a>\n\t</li>\n'
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s;
            return null !=
              (s = (
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                }
              )(n, "each").call(null != t ? t : e.nullContext || {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 10, column: 9 } },
              }))
              ? s
              : "";
          },
          useData: !0,
        })),
        (e.templates.decorate_background_list = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\t<h4><span class="menu' +
              u(
                "function" === t((r = null != (r = h(i, "id") || (null != n ? h(n, "id") : n)) ? r : c))
                  ? r.call(l, { name: "id", hash: {}, data: s, loc: { start: { line: 2, column: 22 }, end: { line: 2, column: 28 } } })
                  : r
              ) +
              '">' +
              u(
                "function" === t((r = null != (r = h(i, "name") || (null != n ? h(n, "name") : n)) ? r : c))
                  ? r.call(l, { name: "name", hash: {}, data: s, loc: { start: { line: 2, column: 30 }, end: { line: 2, column: 38 } } })
                  : r
              ) +
              '</span></h4>\n\t<ul class="backdrop_list">\n' +
              (null !=
              (o = h(i, "each").call(l, null != n ? h(n, "backgroundList") : n, {
                name: "each",
                hash: {},
                fn: e.program(2, s, 0),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 4, column: 2 }, end: { line: 12, column: 14 } },
              }))
                ? o
                : "") +
              "\t</ul>\n"
            );
          },
          2: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              "\t    <li " +
              (null !=
              (o = (h(i, "ifMods") || (n && h(n, "ifMods")) || c).call(l, s && h(s, "index"), 5, 4, {
                name: "ifMods",
                hash: {},
                fn: e.program(3, s, 0),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 5, column: 9 }, end: { line: 5, column: 54 } },
              }))
                ? o
                : "") +
              '>\n\t        <a href="' +
              u(
                "function" === t((r = null != (r = h(i, "image") || (null != n ? h(n, "image") : n)) ? r : c))
                  ? r.call(l, { name: "image", hash: {}, data: s, loc: { start: { line: 6, column: 18 }, end: { line: 6, column: 27 } } })
                  : r
              ) +
              '" class="d_background_item">\n\t            <img src="' +
              u(
                "function" === t((r = null != (r = h(i, "thumbnail") || (null != n ? h(n, "thumbnail") : n)) ? r : c))
                  ? r.call(l, { name: "thumbnail", hash: {}, data: s, loc: { start: { line: 7, column: 23 }, end: { line: 7, column: 36 } } })
                  : r
              ) +
              '" width="126" height="76" alt="' +
              u(
                "function" === t((r = null != (r = h(i, "name") || (null != n ? h(n, "name") : n)) ? r : c))
                  ? r.call(l, { name: "name", hash: {}, data: s, loc: { start: { line: 7, column: 67 }, end: { line: 7, column: 75 } } })
                  : r
              ) +
              '">\n\t            <strong>' +
              u(
                "function" === t((r = null != (r = h(i, "name") || (null != n ? h(n, "name") : n)) ? r : c))
                  ? r.call(l, { name: "name", hash: {}, data: s, loc: { start: { line: 8, column: 21 }, end: { line: 8, column: 29 } } })
                  : r
              ) +
              '</strong>\n\t            <span class="b_border"></span>\n\t        </a>\n\t    </li>\n'
            );
          },
          3: function (e, t, n, i, a) {
            return 'class="last"';
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s;
            return (
              (null !=
              (s = (
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                }
              )(n, "each").call(null != t ? t : e.nullContext || {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 14, column: 9 } },
              }))
                ? s
                : "") + '<div class="d_scroll_bottom_padding" style="height:50px; width:90%; display:none;"></div>'
            );
          },
          useData: !0,
        })),
        (e.templates.filler_banner = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<a class="d_filler" target="_blank" href="' +
              c(
                "function" === t((o = null != (o = u(i, "url") || (null != n ? u(n, "url") : n)) ? o : l))
                  ? o.call(r, { name: "url", hash: {}, data: s, loc: { start: { line: 1, column: 42 }, end: { line: 1, column: 49 } } })
                  : o
              ) +
              '">\n\t<img src="' +
              c(
                "function" === t((o = null != (o = u(i, "image") || (null != n ? u(n, "image") : n)) ? o : l))
                  ? o.call(r, { name: "image", hash: {}, data: s, loc: { start: { line: 2, column: 11 }, end: { line: 2, column: 20 } } })
                  : o
              ) +
              '" alt="">\n    <span class="bd"></span>\n</a>'
            );
          },
          useData: !0,
        })),
        (e.templates.lefttop_banner_default = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<a href="' +
              c(
                "function" === t((o = null != (o = u(i, "url") || (null != n ? u(n, "url") : n)) ? o : l))
                  ? o.call(r, { name: "url", hash: {}, data: s, loc: { start: { line: 1, column: 9 }, end: { line: 1, column: 16 } } })
                  : o
              ) +
              '"  target="_blank" id="d_lefttop_banner_default">\n    <img src="' +
              c(
                "function" === t((o = null != (o = u(i, "image") || (null != n ? u(n, "image") : n)) ? o : l))
                  ? o.call(r, { name: "image", hash: {}, data: s, loc: { start: { line: 2, column: 14 }, end: { line: 2, column: 23 } } })
                  : o
              ) +
              '" alt="">\n    <span class="bd"></span>\n</a>'
            );
          },
          useData: !0,
        })),
        (e.templates.favoritesite_suggest_direct_link = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_box">\n    <ul class="site_list">\n        <li>\n            <a href="javascript:;" class="add_site">\n                <span class="icon"></span><strong class="name">' +
              c(
                "function" === t((o = null != (o = u(i, "title") || (null != n ? u(n, "title") : n)) ? o : l))
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 5, column: 63 }, end: { line: 5, column: 72 } } })
                  : o
              ) +
              '</strong> <span class="text">사이트 추가</span>\n                <span class="url">' +
              c(
                "function" === t((o = null != (o = u(i, "shortLink") || (null != n ? u(n, "shortLink") : n)) ? o : l))
                  ? o.call(r, { name: "shortLink", hash: {}, data: s, loc: { start: { line: 6, column: 34 }, end: { line: 6, column: 47 } } })
                  : o
              ) +
              "</span>\n            </a>\n        </li>\n    </ul>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.search_engines = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<li><a href="#none" data-index="' +
              c(
                "function" === t((o = null != (o = u(i, "index") || (null != n ? u(n, "index") : n)) ? o : l))
                  ? o.call(r, { name: "index", hash: {}, data: s, loc: { start: { line: 7, column: 32 }, end: { line: 7, column: 41 } } })
                  : o
              ) +
              '" class="d_sel_engine" title="' +
              c(
                "function" === t((o = null != (o = u(i, "engineClass") || (null != n ? u(n, "engineClass") : n)) ? o : l))
                  ? o.call(r, { name: "engineClass", hash: {}, data: s, loc: { start: { line: 7, column: 71 }, end: { line: 7, column: 86 } } })
                  : o
              ) +
              '"><span class="' +
              c(
                "function" === t((o = null != (o = u(i, "engineClass") || (null != n ? u(n, "engineClass") : n)) ? o : l))
                  ? o.call(r, { name: "engineClass", hash: {}, data: s, loc: { start: { line: 7, column: 101 }, end: { line: 7, column: 116 } } })
                  : o
              ) +
              '"><span class="blind">' +
              c(
                "function" === t((o = null != (o = u(i, "engineClass") || (null != n ? u(n, "engineClass") : n)) ? o : l))
                  ? o.call(r, { name: "engineClass", hash: {}, data: s, loc: { start: { line: 7, column: 138 }, end: { line: 7, column: 153 } } })
                  : o
              ) +
              "</span></span></a></li>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<a href="#n" class="choice d_choice" title="' +
              u(
                "function" === t((r = null != (r = h(i, "selEngineClass") || (null != n ? h(n, "selEngineClass") : n)) ? r : c))
                  ? r.call(l, { name: "selEngineClass", hash: {}, data: s, loc: { start: { line: 1, column: 44 }, end: { line: 1, column: 62 } } })
                  : r
              ) +
              '">\n\t<span class="' +
              u(
                "function" === t((r = null != (r = h(i, "selEngineClass") || (null != n ? h(n, "selEngineClass") : n)) ? r : c))
                  ? r.call(l, { name: "selEngineClass", hash: {}, data: s, loc: { start: { line: 2, column: 14 }, end: { line: 2, column: 32 } } })
                  : r
              ) +
              '">' +
              u(
                "function" === t((r = null != (r = h(i, "selEngineClass") || (null != n ? h(n, "selEngineClass") : n)) ? r : c))
                  ? r.call(l, { name: "selEngineClass", hash: {}, data: s, loc: { start: { line: 2, column: 34 }, end: { line: 2, column: 52 } } })
                  : r
              ) +
              '</span>\n\t<span class="bg_arrow"></span>\n</a>\n<ul class="dN">\n' +
              (null !=
              (o = h(i, "each").call(l, null != n ? h(n, "engines") : n, {
                name: "each",
                hash: {},
                fn: e.program(1, s, 0),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 6, column: 0 }, end: { line: 8, column: 9 } },
              }))
                ? o
                : "") +
              '<li class="plus"><a href="#n" class="d_engine_set" title="관리"><span><span class="blind">검색엔진 관리하기</span></span></a></li></ul>'
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_dictionary = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o = null != t ? t : e.nullContext || {},
              r = e.hooks.helperMissing,
              l = e.escapeExpression,
              c =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="dictionary">\n\t    <div class="item">\n\t\t    <dl>\n                <dt>' +
              l(
                (c(n, "outWord") || (t && c(t, "outWord")) || r).call(o, null != t ? c(t, "title") : t, {
                  name: "outWord",
                  hash: {},
                  data: a,
                  loc: { start: { line: 5, column: 20 }, end: { line: 5, column: 37 } },
                })
              ) +
              "</dt>\n                <dd>" +
              l(
                "function" == typeof (s = null != (s = c(n, "summary") || (null != t ? c(t, "summary") : t)) ? s : r)
                  ? s.call(o, { name: "summary", hash: {}, data: a, loc: { start: { line: 6, column: 20 }, end: { line: 6, column: 31 } } })
                  : s
              ) +
              "</dd>\n\t\t\t</dl>\n\t\t</div>\n\t</div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_direct_link = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_link">\n    <div class="item">\n        <div class="content">\n            <p class="tit">' +
              c(
                "function" === t((o = null != (o = u(i, "title") || (null != n ? u(n, "title") : n)) ? o : l))
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 4, column: 27 }, end: { line: 4, column: 36 } } })
                  : o
              ) +
              '</p>\n            <p class="link">' +
              c(
                "function" === t((o = null != (o = u(i, "shortLink") || (null != n ? u(n, "shortLink") : n)) ? o : l))
                  ? o.call(r, { name: "shortLink", hash: {}, data: s, loc: { start: { line: 5, column: 28 }, end: { line: 5, column: 41 } } })
                  : o
              ) +
              '</p>\n        </div>\n        <span class="direct">사이트로 이동</span>\n    </div>\n</div>'
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_keyword_list = e.template({
          1: function (e, t, n, i, a, s, o) {
            var r =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
            return (
              '<li><a href="#" onclick="return false;" class="tit">' +
              e.escapeExpression(
                (r(n, "getStrongKeywordHtml") || (t && r(t, "getStrongKeywordHtml")) || e.hooks.helperMissing).call(
                  null != t ? t : e.nullContext || {},
                  null != t ? r(t, "highlight") : t,
                  null != o[1] ? r(o[1], "category") : o[1],
                  null != o[1] ? r(o[1], "highlight") : o[1],
                  { name: "getStrongKeywordHtml", hash: {}, data: a, loc: { start: { line: 2, column: 52 }, end: { line: 2, column: 111 } } }
                )
              ) +
              "</a></li>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a, s, o) {
            var r,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (r = l(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? l(t, "entry") : t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0, s, o),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 9 } },
              }))
              ? r
              : "";
          },
          useData: !0,
          useDepths: !0,
        })),
        (e.templates.suggest_keyword_zumout_list = e.template({
          1: function (e, t, n, i, a) {
            var s =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
            return (
              '<li><a href="#" onclick="return false;" class="tit">' +
              e.escapeExpression(
                (s(n, "getStrongKeywordHtml") || (t && s(t, "getStrongKeywordHtml")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? s(t, "highlight") : t, {
                  name: "getStrongKeywordHtml",
                  hash: {},
                  data: a,
                  loc: { start: { line: 2, column: 52 }, end: { line: 2, column: 86 } },
                })
              ) +
              "</a></li>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = o(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? o(t, "entry") : t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 9 } },
              }))
              ? s
              : "";
          },
          useData: !0,
        })),
        (e.templates.suggest_kospi = e.template({
          1: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point">\n                        <span class="price">' +
              e.escapeExpression(e.lambda(null != (s = null != t ? o(t, "kospi") : t) ? o(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">0</span>\n                        <span class="rate">0%</span>\n                    </p>\n'
            );
          },
          3: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = (o(n, "ifPositive") || (t && o(t, "ifPositive")) || e.hooks.helperMissing).call(
                null != t ? t : e.nullContext || {},
                null != (s = null != t ? o(t, "kospi") : t) ? o(s, "point") : s,
                { name: "ifPositive", hash: {}, fn: e.program(4, a, 0), inverse: e.program(6, a, 0), data: a, loc: { start: { line: 13, column: 20 }, end: { line: 25, column: 35 } } }
              ))
              ? s
              : "";
          },
          4: function (e, t, n, i, a) {
            var s,
              o = e.lambda,
              r = e.escapeExpression,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point up">\n                        <span class="price">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "gap") : s, t)) +
              '</span>\n                        <span class="rate">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "pointabs") : s, t)) +
              "%</span>\n                    </p>\n"
            );
          },
          6: function (e, t, n, i, a) {
            var s,
              o = e.lambda,
              r = e.escapeExpression,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point down">\n                        <span class="price">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "gap") : s, t)) +
              '</span>\n                        <span class="rate">' +
              r(o(null != (s = null != t ? l(t, "kospi") : t) ? l(s, "pointabs") : s, t)) +
              "%</span>\n                    </p>\n"
            );
          },
          8: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point">\n                        <span class="price">' +
              e.escapeExpression(e.lambda(null != (s = null != t ? o(t, "kosdaq") : t) ? o(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">0</span>\n                        <span class="rate">0%</span>\n                    </p>\n'
            );
          },
          10: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = (o(n, "ifPositive") || (t && o(t, "ifPositive")) || e.hooks.helperMissing).call(
                null != t ? t : e.nullContext || {},
                null != (s = null != t ? o(t, "kosdaq") : t) ? o(s, "point") : s,
                { name: "ifPositive", hash: {}, fn: e.program(11, a, 0), inverse: e.program(13, a, 0), data: a, loc: { start: { line: 37, column: 20 }, end: { line: 49, column: 35 } } }
              ))
              ? s
              : "";
          },
          11: function (e, t, n, i, a) {
            var s,
              o = e.lambda,
              r = e.escapeExpression,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point up">\n                        <span class="price">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "gap") : s, t)) +
              '</span>\n                        <span class="rate">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "pointabs") : s, t)) +
              "%</span>\n                    </p>\n"
            );
          },
          13: function (e, t, n, i, a) {
            var s,
              o = e.lambda,
              r = e.escapeExpression,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                    <p class="point down">\n                        <span class="price">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "outPrice") : s, t)) +
              '</span>\n                        <span class="num">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "gap") : s, t)) +
              '</span>\n                        <span class="rate">' +
              r(o(null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "pointabs") : s, t)) +
              "%</span>\n                    </p>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o = null != t ? t : e.nullContext || {},
              r = e.hooks.helperMissing,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="stock_index">\n\t    <a>\n            <div class="box">\n                <p class="name">코스피</p>\n' +
              (null !=
              (s = (l(n, "ifZero") || (t && l(t, "ifZero")) || r).call(o, null != (s = null != t ? l(t, "kospi") : t) ? l(s, "point") : s, {
                name: "ifZero",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.program(3, a, 0),
                data: a,
                loc: { start: { line: 6, column: 16 }, end: { line: 26, column: 27 } },
              }))
                ? s
                : "") +
              '            </div>\n            <div class="box">\n                <p class="name">코스닥</p>\n' +
              (null !=
              (s = (l(n, "ifZero") || (t && l(t, "ifZero")) || r).call(o, null != (s = null != t ? l(t, "kosdaq") : t) ? l(s, "point") : s, {
                name: "ifZero",
                hash: {},
                fn: e.program(8, a, 0),
                inverse: e.program(10, a, 0),
                data: a,
                loc: { start: { line: 30, column: 16 }, end: { line: 50, column: 27 } },
              }))
                ? s
                : "") +
              "            </div>\n\t\t</a>\n\t</div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_lotto = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o,
              r = null != t ? t : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u = e.lambda,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="lotto">\n\t\t<div class="item">\n\t\t\t<p class="tit">' +
              c(
                "function" == typeof (o = null != (o = h(n, "title") || (null != t ? h(t, "title") : t)) ? o : l)
                  ? o.call(r, { name: "title", hash: {}, data: a, loc: { start: { line: 4, column: 18 }, end: { line: 4, column: 27 } } })
                  : o
              ) +
              '</p>\n\t\t\t<p class="date">' +
              c(
                (h(n, "lottoViewDate") || (t && h(t, "lottoViewDate")) || l).call(r, null != t ? h(t, "date") : t, {
                  name: "lottoViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 5, column: 19 }, end: { line: 5, column: 41 } },
                })
              ) +
              '</p>\n            <div class="wrap_number">\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "0") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 7, column: 35 }, end: { line: 7, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "0") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "1") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 8, column: 35 }, end: { line: 8, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "1") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "2") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 9, column: 35 }, end: { line: 9, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "2") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "3") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 10, column: 35 }, end: { line: 10, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "3") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "4") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 11, column: 35 }, end: { line: 11, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "4") : s, t)) +
              '</span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "5") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 12, column: 35 }, end: { line: 12, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "5") : s, t)) +
              '</span>\n                <span class="bonus">\n                    <span class="blind">보너스 번호</span>\n                </span>\n                <span class="lotto_' +
              c(
                (h(n, "ballColor") || (t && h(t, "ballColor")) || l).call(r, null != (s = null != t ? h(t, "number") : t) ? h(s, "6") : s, {
                  name: "ballColor",
                  hash: {},
                  data: a,
                  loc: { start: { line: 16, column: 35 }, end: { line: 16, column: 59 } },
                })
              ) +
              '">' +
              c(u(null != (s = null != t ? h(t, "number") : t) ? h(s, "6") : s, t)) +
              "</span>\n            </div>\n\t\t</div>\n\t</div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_pension520 = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o,
              r = null != t ? t : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u = e.lambda,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="pension_lotto">\n\t\t<div class="item">\n\t        <p class="tit">연금복권 ' +
              c(
                "function" == typeof (o = null != (o = h(n, "round") || (null != t ? h(t, "round") : t)) ? o : l)
                  ? o.call(r, { name: "round", hash: {}, data: a, loc: { start: { line: 4, column: 29 }, end: { line: 4, column: 38 } } })
                  : o
              ) +
              '회</p>\n\t        <p class="date">' +
              c(
                (h(n, "pensionViewDate") || (t && h(t, "pensionViewDate")) || l).call(r, null != t ? h(t, "date") : t, {
                  name: "pensionViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 5, column: 25 }, end: { line: 5, column: 49 } },
                })
              ) +
              '</p>\n\t        <table>\n\t            <tbody>\n\t                <tr>\n                        <td class="rank">1등</td>\n                        <td class="group">' +
              c(u(null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "group") : s, t)) +
              '조</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "0") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "1") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "2") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "3") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "4") : s, t)) +
              '</td>\n                        <td class="num">' +
              c(u(null != (s = null != (s = null != (s = null != t ? h(t, "result") : t) ? h(s, "0") : s) ? h(s, "number") : s) ? h(s, "5") : s, t)) +
              "</td>\n\t                </tr>\n\t            </tbody>\n\t        </table>\n\t    </div>\n\t</div>\n</div>\n"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_ranking_keyword_list = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '        <li>\n            <a href="javascript:;" class="item">\n                <span class="rank_' +
              u(
                "function" === t((r = null != (r = h(i, "rank") || (null != n ? h(n, "rank") : n)) ? r : c))
                  ? r.call(l, { name: "rank", hash: {}, data: s, loc: { start: { line: 7, column: 34 }, end: { line: 7, column: 42 } } })
                  : r
              ) +
              '"></span>\n                <span class="keyword">' +
              u(
                "function" === t((r = null != (r = h(i, "keyword") || (null != n ? h(n, "keyword") : n)) ? r : c))
                  ? r.call(l, { name: "keyword", hash: {}, data: s, loc: { start: { line: 8, column: 38 }, end: { line: 8, column: 49 } } })
                  : r
              ) +
              "</span>\n" +
              (null !=
              (o = (h(i, "ifZero") || (n && h(n, "ifZero")) || c).call(l, null != n ? h(n, "delta") : n, {
                name: "ifZero",
                hash: {},
                fn: e.program(2, s, 0),
                inverse: e.program(4, s, 0),
                data: s,
                loc: { start: { line: 9, column: 16 }, end: { line: 17, column: 27 } },
              }))
                ? o
                : "") +
              "            </a>\n        </li>\n"
            );
          },
          2: function (e, t, n, i, a) {
            return '                    <span class="state_same">동일</span>\n';
          },
          4: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = (o(n, "ifGtZero") || (t && o(t, "ifGtZero")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? o(t, "delta") : t, {
                name: "ifGtZero",
                hash: {},
                fn: e.program(5, a, 0),
                inverse: e.program(7, a, 0),
                data: a,
                loc: { start: { line: 12, column: 20 }, end: { line: 16, column: 33 } },
              }))
              ? s
              : "";
          },
          5: function (e, t, n, i, a) {
            return '                        <span class="state_up">상승</span>\n';
          },
          7: function (e, t, n, i, a) {
            return '                        <span class="state_down">하락</span>\n';
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<h3 class="blind">이슈검색어</h3>\n<div class="keyword_list">\n    <ol>\n' +
              (null !=
              (s = o(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? o(t, "entry") : t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 4, column: 8 }, end: { line: 20, column: 17 } },
              }))
                ? s
                : "") +
              "    </ol>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_stock = e.template({
          1: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\t\t\t<p class="info">\n                <span class="price">' +
              e.escapeExpression(
                "function" == typeof (s = null != (s = o(n, "outPrice") || (null != t ? o(t, "outPrice") : t)) ? s : e.hooks.helperMissing)
                  ? s.call(null != t ? t : e.nullContext || {}, { name: "outPrice", hash: {}, data: a, loc: { start: { line: 7, column: 36 }, end: { line: 7, column: 48 } } })
                  : s
              ) +
              '</span>\n                <span class="num">0</span>\n                <span class="rate">0%</span>\n\t\t\t</p>\n'
            );
          },
          3: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = (o(n, "ifPositive") || (t && o(t, "ifPositive")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? o(t, "point") : t, {
                name: "ifPositive",
                hash: {},
                fn: e.program(4, a, 0),
                inverse: e.program(6, a, 0),
                data: a,
                loc: { start: { line: 12, column: 4 }, end: { line: 24, column: 19 } },
              }))
              ? s
              : "";
          },
          4: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                <p class="info up">\n                    <span class="price">' +
              c(
                "function" === t((o = null != (o = u(i, "outPrice") || (null != n ? u(n, "outPrice") : n)) ? o : l))
                  ? o.call(r, { name: "outPrice", hash: {}, data: s, loc: { start: { line: 14, column: 40 }, end: { line: 14, column: 52 } } })
                  : o
              ) +
              '</span>\n                    <span class="num">' +
              c(
                "function" === t((o = null != (o = u(i, "gap") || (null != n ? u(n, "gap") : n)) ? o : l))
                  ? o.call(r, { name: "gap", hash: {}, data: s, loc: { start: { line: 15, column: 38 }, end: { line: 15, column: 45 } } })
                  : o
              ) +
              '</span>\n                    <span class="rate">' +
              c(
                "function" === t((o = null != (o = u(i, "pointabs") || (null != n ? u(n, "pointabs") : n)) ? o : l))
                  ? o.call(r, { name: "pointabs", hash: {}, data: s, loc: { start: { line: 16, column: 39 }, end: { line: 16, column: 51 } } })
                  : o
              ) +
              "%</span>\n                </p>\n"
            );
          },
          6: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '                <p class="info down">\n                    <span class="price">' +
              c(
                "function" === t((o = null != (o = u(i, "outPrice") || (null != n ? u(n, "outPrice") : n)) ? o : l))
                  ? o.call(r, { name: "outPrice", hash: {}, data: s, loc: { start: { line: 20, column: 40 }, end: { line: 20, column: 52 } } })
                  : o
              ) +
              '</span>\n                    <span class="num">' +
              c(
                "function" === t((o = null != (o = u(i, "gap") || (null != n ? u(n, "gap") : n)) ? o : l))
                  ? o.call(r, { name: "gap", hash: {}, data: s, loc: { start: { line: 21, column: 38 }, end: { line: 21, column: 45 } } })
                  : o
              ) +
              '</span>\n                    <span class="rate">' +
              c(
                "function" === t((o = null != (o = u(i, "pointabs") || (null != n ? u(n, "pointabs") : n)) ? o : l))
                  ? o.call(r, { name: "pointabs", hash: {}, data: s, loc: { start: { line: 22, column: 39 }, end: { line: 22, column: 51 } } })
                  : o
              ) +
              "%</span>\n                </p>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="stock_company"">\n\t\t<div class="item">\n\t\t\t<p class="name">' +
              u(
                "function" === t((r = null != (r = h(i, "name") || (null != n ? h(n, "name") : n)) ? r : c))
                  ? r.call(l, { name: "name", hash: {}, data: s, loc: { start: { line: 4, column: 19 }, end: { line: 4, column: 27 } } })
                  : r
              ) +
              ' <span class="num">(' +
              u(
                "function" === t((r = null != (r = h(i, "code") || (null != n ? h(n, "code") : n)) ? r : c))
                  ? r.call(l, { name: "code", hash: {}, data: s, loc: { start: { line: 4, column: 47 }, end: { line: 4, column: 55 } } })
                  : r
              ) +
              ")</span></p>\n" +
              (null !=
              (o = (h(i, "ifZero") || (n && h(n, "ifZero")) || c).call(l, null != n ? h(n, "point") : n, {
                name: "ifZero",
                hash: {},
                fn: e.program(1, s, 0),
                inverse: e.program(3, s, 0),
                data: s,
                loc: { start: { line: 5, column: 3 }, end: { line: 25, column: 14 } },
              }))
                ? o
                : "") +
              '\t\t\t<span class="time">20분 지연</span>\n\t\t</div>\n\t</div>\n</div>'
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_tvtrend = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = "function",
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n    <div class="interest">\n\t\t<div class="item">\n            <dl>\n                <dt>' +
              u(
                t((o = null != (o = h(i, "titleMin") || (null != n ? h(n, "titleMin") : n)) ? o : l)) === c
                  ? o.call(r, { name: "titleMin", hash: {}, data: s, loc: { start: { line: 5, column: 20 }, end: { line: 5, column: 32 } } })
                  : o
              ) +
              ' <span class="origin">' +
              u(
                t((o = null != (o = h(i, "channelMin") || (null != n ? h(n, "channelMin") : n)) ? o : l)) === c
                  ? o.call(r, { name: "channelMin", hash: {}, data: s, loc: { start: { line: 5, column: 54 }, end: { line: 5, column: 68 } } })
                  : o
              ) +
              "</span></dt>\n                <dd>인터넷관심도 <em>" +
              u(
                t((o = null != (o = h(i, "rank") || (null != n ? h(n, "rank") : n)) ? o : l)) === c
                  ? o.call(r, { name: "rank", hash: {}, data: s, loc: { start: { line: 6, column: 31 }, end: { line: 6, column: 39 } } })
                  : o
              ) +
              '위</em> <span class="count">(' +
              u(
                t((o = null != (o = h(i, "interest") || (null != n ? h(n, "interest") : n)) ? o : l)) === c
                  ? o.call(r, { name: "interest", hash: {}, data: s, loc: { start: { line: 6, column: 67 }, end: { line: 6, column: 79 } } })
                  : o
              ) +
              ')</span></dd>\n            </dl>\n            <span class="sort">' +
              u(
                t((o = null != (o = h(i, "broad_category") || (null != n ? h(n, "broad_category") : n)) ? o : l)) === c
                  ? o.call(r, { name: "broad_category", hash: {}, data: s, loc: { start: { line: 8, column: 31 }, end: { line: 8, column: 49 } } })
                  : o
              ) +
              "</span>\n        </div>\n    </div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_weather = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o,
              r = e.lambda,
              l = e.escapeExpression,
              c = null != t ? t : e.nullContext || {},
              u = e.hooks.helperMissing,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="suggest_content">\n\t<div class="weahter">\n\t\t<div class="item">\n\t\t\t<div class="today">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != t ? h(t, "now") : t) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">맑음</p>\n\t\t\t    <p class="row_01">\n\t\t\t        ' +
              l(
                "function" == typeof (o = null != (o = h(n, "title") || (null != t ? h(t, "title") : t)) ? o : u)
                  ? o.call(c, { name: "title", hash: {}, data: a, loc: { start: { line: 10, column: 11 }, end: { line: 10, column: 20 } } })
                  : o
              ) +
              ' 현재\n\t\t\t        <span class="temp">' +
              l(r(null != (s = null != t ? h(t, "now") : t) ? h(s, "temp") : s, t)) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        오늘\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != t ? h(t, "now") : t) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != t ? h(t, "now") : t) ? h(s, "maxTemp") : s, t)) +
              '°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t\t<div class="week">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "text") : s, t)) +
              '</p>\n\t\t\t    <p class="row_01">\n\t\t\t        <span class="weekday">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "dayOfWeek") : s, t)) +
              "</span>\n\t\t\t        <span>" +
              l(
                (h(n, "weatherViewDate") || (t && h(t, "weatherViewDate")) || u).call(c, null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "date") : s, {
                  name: "weatherViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 27, column: 17 }, end: { line: 27, column: 49 } },
                })
              ) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "0") : s) ? h(s, "maxTemp") : s, t)) +
              '°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t\t<div class="week">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "text") : s, t)) +
              '</p>\n\t\t\t    <p class="row_01">\n\t\t\t        <span class="weekday">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "dayOfWeek") : s, t)) +
              "</span>\n\t\t\t        <span>" +
              l(
                (h(n, "weatherViewDate") || (t && h(t, "weatherViewDate")) || u).call(c, null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "date") : s, {
                  name: "weatherViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 42, column: 17 }, end: { line: 42, column: 49 } },
                })
              ) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "1") : s) ? h(s, "maxTemp") : s, t)) +
              '°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t\t<div class="week">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "text") : s, t)) +
              '</p>\n\t\t\t    <p class="row_01">\n\t\t\t        <span class="weekday">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "dayOfWeek") : s, t)) +
              "</span>\n\t\t\t        <span>" +
              l(
                (h(n, "weatherViewDate") || (t && h(t, "weatherViewDate")) || u).call(c, null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "date") : s, {
                  name: "weatherViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 57, column: 17 }, end: { line: 57, column: 49 } },
                })
              ) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "2") : s) ? h(s, "maxTemp") : s, t)) +
              '°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t\t<div class="week">\n\t\t\t    <p class="wrap_icon">\n\t\t\t        <i class="icon wt_' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "icon") : s, t)) +
              '"></i>\n\t\t\t    </p>\n\t\t\t    <p class="blind">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "text") : s, t)) +
              '</p>\n\t\t\t    <p class="row_01">\n\t\t\t        <span class="weekday">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "dayOfWeek") : s, t)) +
              "</span>\n\t\t\t        <span>" +
              l(
                (h(n, "weatherViewDate") || (t && h(t, "weatherViewDate")) || u).call(c, null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "date") : s, {
                  name: "weatherViewDate",
                  hash: {},
                  data: a,
                  loc: { start: { line: 72, column: 17 }, end: { line: 72, column: 49 } },
                })
              ) +
              '</span>\n\t\t\t    </p>\n\t\t\t    <p class="row_02">\n\t\t\t        <span class="min_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "minTemp") : s, t)) +
              '°</span>\n\t\t\t        <span class="bar">/</span>\n\t\t\t        <span class="max_temp">' +
              l(r(null != (s = null != (s = null != t ? h(t, "daily") : t) ? h(s, "3") : s) ? h(s, "maxTemp") : s, t)) +
              "°</span>\n\t\t\t    </p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.suggest_weather_location = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\t<li><a href="javascript:;" class="d_btn_location_list" data-reg="' +
              c(
                "function" === t((o = null != (o = u(i, "reg") || (null != n ? u(n, "reg") : n)) ? o : l))
                  ? o.call(r, { name: "reg", hash: {}, data: s, loc: { start: { line: 2, column: 66 }, end: { line: 2, column: 73 } } })
                  : o
              ) +
              '">' +
              c(
                "function" === t((o = null != (o = u(i, "name") || (null != n ? u(n, "name") : n)) ? o : l))
                  ? o.call(r, { name: "name", hash: {}, data: s, loc: { start: { line: 2, column: 75 }, end: { line: 2, column: 83 } } })
                  : o
              ) +
              "</a></li>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return null !=
              (s = o(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? o(t, "items") : t, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 9 } },
              }))
              ? s
              : "";
          },
          useData: !0,
        })),
        (e.templates.shopping_banner = e.template({
          1: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '        <li class="d_shopping_banner ' +
              (null !=
              (o = h(i, "if").call(l, null != n ? h(n, "isStartPage") : n, {
                name: "if",
                hash: {},
                fn: e.program(2, s, 0),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 4, column: 37 }, end: { line: 4, column: 65 } },
              }))
                ? o
                : "") +
              '"  data-order="' +
              u(
                "function" === t((r = null != (r = h(i, "index") || (s && h(s, "index"))) ? r : c))
                  ? r.call(l, { name: "index", hash: {}, data: s, loc: { start: { line: 4, column: 80 }, end: { line: 4, column: 90 } } })
                  : r
              ) +
              '">\n            <a class="d_shopping_banner_btn" href="javascript:;" data-url="' +
              u(
                "function" === t((r = null != (r = h(i, "CLICK") || (null != n ? h(n, "CLICK") : n)) ? r : c))
                  ? r.call(l, { name: "CLICK", hash: {}, data: s, loc: { start: { line: 5, column: 75 }, end: { line: 5, column: 84 } } })
                  : r
              ) +
              '" data-adid="' +
              u(
                "function" === t((r = null != (r = h(i, "ADSID") || (null != n ? h(n, "ADSID") : n)) ? r : c))
                  ? r.call(l, { name: "ADSID", hash: {}, data: s, loc: { start: { line: 5, column: 97 }, end: { line: 5, column: 106 } } })
                  : r
              ) +
              '" data-imp="' +
              u(
                "function" === t((r = null != (r = h(i, "IMP") || (null != n ? h(n, "IMP") : n)) ? r : c))
                  ? r.call(l, { name: "IMP", hash: {}, data: s, loc: { start: { line: 5, column: 118 }, end: { line: 5, column: 125 } } })
                  : r
              ) +
              '">\n                <img width="250" height="278" border="0" alt="" ' +
              (null !=
              (o = h(i, "if").call(l, null != n ? h(n, "isStartPage") : n, {
                name: "if",
                hash: {},
                fn: e.program(4, s, 0),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 6, column: 64 }, end: { line: 6, column: 104 } },
              }))
                ? o
                : "") +
              ">\n            </a>\n        </li>\n"
            );
          },
          2: function (e, t, n, i, a) {
            return "on";
          },
          4: function (e, t, n, i, a) {
            var s,
              o =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              ' src="' +
              e.escapeExpression(
                "function" == typeof (s = null != (s = o(n, "IMG") || (null != t ? o(t, "IMG") : t)) ? s : e.hooks.helperMissing)
                  ? s.call(null != t ? t : e.nullContext || {}, { name: "IMG", hash: {}, data: a, loc: { start: { line: 6, column: 89 }, end: { line: 6, column: 96 } } })
                  : s
              ) +
              '"'
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r,
              l = null != n ? n : e.nullContext || {},
              c = e.hooks.helperMissing,
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\x3c!-- 하단 배너 --\x3e\n<ul id="shoppingBannerUl">\n' +
              (null !=
              (o = h(i, "each").call(l, null != n ? h(n, "banners") : n, {
                name: "each",
                hash: {},
                fn: e.program(1, s, 0),
                inverse: e.noop,
                data: s,
                loc: { start: { line: 3, column: 4 }, end: { line: 9, column: 13 } },
              }))
                ? o
                : "") +
              '</ul>\n<div class="banner_paging" id="bannerPaging">\n    <a id="btnShoppingPrev" href="javascript:;" class="btn_prev" title="이전">이전</a>\n    <a id="btnShoppingNext" href="javascript:;" class="btn_next" title="다음">다음</a>\n    <div class="page_cnt">\n        <strong id="pageCount">' +
              u(
                "function" === t((r = null != (r = h(i, "currentPage") || (null != n ? h(n, "currentPage") : n)) ? r : c))
                  ? r.call(l, { name: "currentPage", hash: {}, data: s, loc: { start: { line: 15, column: 31 }, end: { line: 15, column: 46 } } })
                  : r
              ) +
              "</strong>/" +
              u(
                "function" === t((r = null != (r = h(i, "totalPage") || (null != n ? h(n, "totalPage") : n)) ? r : c))
                  ? r.call(l, { name: "totalPage", hash: {}, data: s, loc: { start: { line: 15, column: 56 }, end: { line: 15, column: 69 } } })
                  : r
              ) +
              "\n    </div>\n</div>"
            );
          },
          useData: !0,
        })),
        (e.templates.shopping_banner_default = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '\x3c!-- 하단 배너 --\x3e\n<ul id="shoppingBannerUl">\n    <li class="d_shopping_banner on">\n        <a class="d_shopping_banner_btn" href="javascript:;" data-url="' +
              c(
                "function" === t((o = null != (o = u(i, "defaultUrl") || (null != n ? u(n, "defaultUrl") : n)) ? o : l))
                  ? o.call(r, { name: "defaultUrl", hash: {}, data: s, loc: { start: { line: 4, column: 71 }, end: { line: 4, column: 85 } } })
                  : o
              ) +
              '" data-filler="true">\n            <img width="250" height="278" border="0" alt="" src="' +
              c(
                "function" === t((o = null != (o = u(i, "defaultImage") || (null != n ? u(n, "defaultImage") : n)) ? o : l))
                  ? o.call(r, { name: "defaultImage", hash: {}, data: s, loc: { start: { line: 5, column: 65 }, end: { line: 5, column: 81 } } })
                  : o
              ) +
              '">\n        </a>\n    </li>\n</ul>\n'
            );
          },
          useData: !0,
        })),
        (e.templates.shopping_recent_product = e.template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, n, i, a, s) {
            var o,
              r = null != n ? n : e.nullContext || {},
              l = e.hooks.helperMissing,
              c = "function",
              u = e.escapeExpression,
              h =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<li>\n\t<a href="' +
              u(
                t((o = null != (o = h(i, "url") || (null != n ? h(n, "url") : n)) ? o : l)) === c
                  ? o.call(r, { name: "url", hash: {}, data: s, loc: { start: { line: 2, column: 10 }, end: { line: 2, column: 17 } } })
                  : o
              ) +
              '" class="d_item" data-pos="recent" data-id="' +
              u(
                t((o = null != (o = h(i, "id") || (null != n ? h(n, "id") : n)) ? o : l)) === c
                  ? o.call(r, { name: "id", hash: {}, data: s, loc: { start: { line: 2, column: 61 }, end: { line: 2, column: 67 } } })
                  : o
              ) +
              '" target="_blank">\n\t\t<span class="bd"></span>\n\t\t<img src="' +
              u(
                t((o = null != (o = h(i, "image") || (null != n ? h(n, "image") : n)) ? o : l)) === c
                  ? o.call(r, { name: "image", hash: {}, data: s, loc: { start: { line: 4, column: 12 }, end: { line: 4, column: 21 } } })
                  : o
              ) +
              '" alt="' +
              u(
                t((o = null != (o = h(i, "title") || (null != n ? h(n, "title") : n)) ? o : l)) === c
                  ? o.call(r, { name: "title", hash: {}, data: s, loc: { start: { line: 4, column: 28 }, end: { line: 4, column: 37 } } })
                  : o
              ) +
              '" width="70" height="70">\n\t</a>\n\t<a href="javascript:;" class="btn_delete d_btn_delete" data-pos="recentDelete" title="상품 삭제" data-id="' +
              u(
                t((o = null != (o = h(i, "id") || (null != n ? h(n, "id") : n)) ? o : l)) === c
                  ? o.call(r, { name: "id", hash: {}, data: s, loc: { start: { line: 6, column: 103 }, end: { line: 6, column: 109 } } })
                  : o
              ) +
              '">삭제</a>\n</li>'
            );
          },
          useData: !0,
        })),
        (e.partials = e.templates);
    }.call(this, n(37)));
  },
  ,
  function (e, t, n) {
    "use strict";
    (function (e, i, a, s) {
      n(9), n(10), n(31), n(17);
      var o = n(5),
        r = n(1),
        l = n(12),
        c = n(160),
        u = n(173),
        h = n(174),
        d = n(52),
        p = n(176),
        m = n(14),
        f = n(2),
        _ = n(15),
        g = n(0),
        w = n(177),
        v = n(6),
        b = n(179),
        y = n(41);
      n(116), n(93);
      t.a = e.View.extend({
        header: null,
        loginLayer: null,
        container: null,
        footer: null,
        isFirstScollView: { banner: !0, hub: !0 },
        myzumNoticeClosed: !1,
        refreshTime: zum.settings.refreshTime || 6e5,
        refreshSkipCount: 0,
        maxRefreshSkipCount: zum.settings.maxRefreshSkipCount || 18,
        bigbannerDefaultImage: zum.staticBaseUrl + "/images/banner/filler/newszum_banner_1.png",
        brandingWidgetDefaultImage: zum.staticBaseUrl + "/images/banner/filler/newszum_widget_1.png",
        isBottomScrollView: !1,
        isSampleTester: !1,
        hubScrollViewStep: -1,
        initialize: function (e) {
          (this.events = {
            "click #zum_paging .d_prev a": this.prev,
            "click #zum_paging .d_next a": this.next,
            "click .d_pc_mobile": this.viewMobileMode,
            "click #d_lefttop_banner_default": this.sendStatBigbannerClick,
            "click .d_filler": this.sendStatBrandingWidgetClick,
            "click #btn_close_update_notice": this.closeUpdateNotice,
            "click .chrome_extension_notice_bar .btn_close": this.closeChromeExtensionNotice,
          }),
            this.listenTo(
              f.a,
              "check:bigbannerDefault",
              i.bind(function () {
                this.checkBigbannerDefault();
              }, this)
            ),
            this.listenTo(
              f.a,
              "check:brandingWidgetDefault",
              i.bind(function () {
                this.checkBrandingWidgetDefault();
              }, this)
            ),
            this.listenTo(
              f.a,
              "send:sendFavoriteSitePageViewStat",
              i.bind(function () {
                this.sendFavoriteSitePageViewStat();
              }, this)
            ),
            this.initializeDefinedModules(),
            this.createModules(),
            this.listenHeaderLayerCloseEvent(),
            this.listenContainerEvent(),
            this.listenCloseLayerEvent(),
            this.listenFooterEvent(),
            this.listenLayer(),
            this.openHomeMigrationLayer(),
            this.$el.find("#zum_paging .d_prev").show(),
            this.$el.find("#zum_paging .d_next").show(),
            (this.layersView = m.a),
            this.fixedManager.bindResizeWindow();
          var t = r.a.isZumpageVisitedUser();
          if (zum.zumpageId && !zum.readonly && !t) {
            (t = !0), o.a.setData(r.a.Names.zumpageVisitedUser, t);
            var n = g.a.ZumPageStat;
            g.a.send(n.eventName.create, n.getStat());
          }
          g.a.send(g.a.ZumStat.eventName.view, g.a.ZumStat.getStat()),
            a(window).scroll(i.bind(i.throttle(this.detectScroll, 500), this)),
            Math.random() < 0.1 && ((this.isSampleTester = !0), this.checkMainPageForHubScroll(), a(window).resize(i.bind(i.throttle(this.checkMainPageForHubScroll, 500), this))),
            0 === zum.page && (this.checkBigbannerDefault(), this.checkBrandingWidgetDefault()),
            f.a.trigger("focus:searchbox:searchText");
          var s = this;
          (window.onload = function () {
            0 === zum.page && f.a.trigger("send:sendFavoriteSitePageViewStat"), Math.random() < 0.01 && s.sendTiming(), s.fixedManager.checkSize();
          }),
            this.autoRefresh();
          var l = this,
            c = document.createElement("img");
          (c.onload = function () {
            l.closeChromeExtensionNotice(!1);
          }),
            (c.onerror = function () {
              g.a.send("@BannerPageView", { pos: "zum_alertbar_chrome", landingPage: a(".chrome_extension_notice_bar a").attr("href") });
            }),
            (c.src = "chrome-extension://bghgeookcfdmkoocalbclnhofnenmhlf/icon.png"),
            a(".chrome_extension_notice_bar .btn_add").click(function () {
              g.a.send("@BannerMoveUrl", { pos: "zum_alertbar_chrome", cm: "yes", outurl: a(".chrome_extension_notice_bar a").attr("href") });
            });
        },
        showUpdateNotice: function () {
          a("#update_notice_bar").show();
        },
        closeUpdateNotice: function () {
          a("#update_notice_bar").remove();
        },
        closeChromeExtensionNotice: function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          a.cookie("chromeExtensionHide", "1", { expires: 7 }),
            a(".chrome_extension_notice_bar").remove(),
            e && g.a.send("@BannerMoveUrl", { pos: "zum_alertbar_chrome", cm: "no", outurl: a(".chrome_extension_notice_bar a").attr("href") });
        },
        sendStatBigbanner: function (e, t) {
          g.a.send(e, { page: g.a.BigbannerStat.page, cm: g.a.BigbannerStat.cm, pos: g.a.BigbannerStat.pos, outurl: g.a.BigbannerStat.outurl }, t);
        },
        sendStatBigbannerClick: function (e) {
          this.sendStatBigbanner(g.a.BigbannerStat.eventName.click, e);
        },
        sendStatBigbannerView: function () {
          this.sendStatBigbanner(g.a.BigbannerStat.eventName.view);
        },
        checkBigbannerDefault: function () {
          var e = this;
          setTimeout(function () {
            if (0 === zum.page) {
              var t = a("#banner_lefttop");
              t.html().length < 2 && (t.html(a(s.templates.lefttop_banner_default({ url: g.a.BigbannerStat.outurl, image: e.bigbannerDefaultImage }))), e.sendStatBigbannerView());
            }
          }, 3e3);
        },
        sendStatBrandingWidgetView: function () {
          this.sendStatBrandingWidget(g.a.BrandingWidgetStat.eventName.view);
        },
        sendStatBrandingWidgetClick: function (e) {
          this.sendStatBrandingWidget(g.a.BrandingWidgetStat.eventName.click, e);
        },
        sendStatBrandingWidget: function (e, t) {
          g.a.send(e, { page: g.a.BrandingWidgetStat.page, cm: g.a.BrandingWidgetStat.cm, pos: g.a.BrandingWidgetStat.pos, outurl: g.a.BrandingWidgetStat.outurl }, t);
        },
        checkBrandingWidgetDefault: function () {
          var e = this;
          setTimeout(function () {
            if (0 === zum.page) {
              var t = a("#wrap_ad_main");
              t.html().length < 2 && (t.html(a(s.templates.filler_banner({ url: g.a.BrandingWidgetStat.outurl, image: e.brandingWidgetDefaultImage }))), e.sendStatBrandingWidgetView());
            }
          }, 3e3);
        },
        checkMainPageForHubScroll: function () {
          0 === zum.page && this.checkHubScrollViewStat();
        },
        checkHubScrollViewStat: function () {
          var e = a(window),
            t = e.scrollTop() + e.height();
          t >= 414 && t < 643 && this.hubScrollViewStep < 1
            ? this.sendHubScrollViewStat(1)
            : t >= 643 && t < 685 && this.hubScrollViewStep < 2
            ? this.sendHubScrollViewStat(2)
            : t >= 685 && t < 847 && this.hubScrollViewStep < 3
            ? this.sendHubScrollViewStat(3)
            : t >= 847 && t < 1009 && this.hubScrollViewStep < 4
            ? this.sendHubScrollViewStat(4)
            : t >= 1009 && t < 1171 && this.hubScrollViewStep < 5
            ? this.sendHubScrollViewStat(5)
            : t >= 1171 && t < 1325 && this.hubScrollViewStep < 6
            ? this.sendHubScrollViewStat(6)
            : t >= 1325 && t < 1473 && this.hubScrollViewStep < 7
            ? this.sendHubScrollViewStat(7)
            : t >= 1473 && t < 1642 && this.hubScrollViewStep < 8
            ? this.sendHubScrollViewStat(8)
            : t >= 1642 && this.hubScrollViewStep < 9
            ? this.sendHubScrollViewStat(9)
            : this.hubScrollViewStep < 0 && this.sendHubScrollViewStat(0);
        },
        detectScroll: function () {
          var e = a(window).scrollTop() + a(window).height();
          if (0 === zum.page) {
            if (e == a(document).height() && !a("#box_news_view").is(":visible") && !this.isBottomScrollView) {
              var t = g.a.ScrollToBottomStat;
              g.a.send(t.eventName.scroll, t.getStat()), (this.isBottomScrollView = !0);
            }
            this.isSampleTester && this.checkMainPageForHubScroll();
          }
          _.a.Article.checkAndSendScrollStat(e);
        },
        sendHubScrollViewStat: function (e) {
          (this.hubScrollViewStep = e), g.a.send(g.a.HubScrollViewStat.eventName.view, { scrollPos: "row" + e });
        },
        sendFavoriteSitePageViewStat: function () {
          g.a.send(g.a.FavoriteStat.eventName.view, {
            pos: g.a.FavoriteStat.pos.site,
            isChanged: o.a.getData(r.a.Names.isFavoriteSiteChanged),
            item: this.convertMyfavoriteSiteForPV(),
            page: zum.page,
          });
        },
        convertMyfavoriteSiteForPV: function () {
          var e = window.myFavoriteSiteJson,
            t = a(".d_shopping_item"),
            n = a(".site_list"),
            s = [],
            o = 1;
          if (
            (i.each(e, function (e) {
              s.push({ order: o++, outurl: e.url });
            }),
            n.hasClass("hide_banner_slot") || (t && s.push({ id: t.data("id"), order: o++, outurl: t.attr("href") })),
            a(".d_shopping_favorite_logo"))
          ) {
            var r = a(".d_shopping_favorite_logo");
            i.each(r, function (e) {
              if (
                a(e)
                  .attr("href")
                  .match(/&key=(.*?)&/)
              ) {
                var t = a(e)
                  .attr("href")
                  .match(/&key=(.*?)&/)[1];
                t && s.push({ id: t, order: o++, outurl: a(e).attr("href") });
              }
            });
          }
          return s;
        },
        initializeDefinedModules: function () {
          this.fixedManager = y.a;
        },
        isShownLayerInHeader: function () {
          return !this.header || this.header.isShownGnbLayers();
        },
        isShownAdMinisite: function () {
          return this.$el.find("#wrap_ad_effect").length > 0;
        },
        canRefreshable: function () {
          var e = location.hash;
          return !(("" !== e && "#!/home" !== e && "#!/shopping" !== e) || m.a.isShown() || this.isShownLayerInHeader() || this.isShownAdMinisite() || this.container.isBusy());
        },
        isValidRefreshSkipCount: function () {
          return ++this.refreshSkipCount < this.maxRefreshSkipCount;
        },
        autoRefresh: function () {
          var e = this;
          a.setInterval(function () {
            if (!e.isValidRefreshSkipCount() || e.canRefreshable()) {
              var t = new Date(new Date().getTime() + 5e3);
              l.a.set(r.a.Names.pageReload, t.getTime()), location.reload();
            }
          }, this.refreshTime);
        },
        createModules: function () {
          var e = a(".d_box_shopping_slot"),
            t = a(".d_box_favorite_sites"),
            n = e && e.length > 0;
          (this.favoriteSite = new h.a({ el: t, page: zum.page, shoppingSlot: e, hasShoppingLayer: n })),
            (this.shoppingSlot = new p.a({ el: e, page: zum.page, favoriteSite: t, hasShoppingLayer: n })),
            (this.container = new b.a({ el: a("#container") })),
            (this.header = new c.a({ el: a("#header") })),
            (this.footer = new u.a({ el: a("#footer") }));
        },
        openHomeMigrationLayer: function () {
          zum.homeMigration && zum.isOwner && w.a.open();
        },
        closeAll: function (e) {
          this.layersView && this.layersView.hideAll(),
            this.container && this.container.closeLayer(),
            (location.hash = "!/home"),
            (document.title = "ZUM - 생각을 읽다, ZUM"),
            this.checkBigbannerDefault(),
            this.checkBrandingWidgetDefault(),
            e && "function" == typeof e && e();
        },
        isInFavoriteSiteLayer: function (e) {
          return e.closest("#layer_favorite_site_setup").length > 0;
        },
        isShowFavoriteSiteLayer: function () {
          return "none" !== a("#layer_favorite_site_setup").css("display");
        },
        listenCloseLayerEvent: function () {
          var e = this;
          this.listenTo(
            f.a,
            "close:all",
            i.bind(function (e) {
              this.closeAll(e);
            }, this)
          ),
            a("html")
              .on("dblclick", function (t) {
                var n = a(t.target || t.srcElement);
                return (
                  !e.isInFavoriteSiteLayer(n) &&
                  (e.isShowFavoriteSiteLayer()
                    ? (f.a.trigger("close:favoriteSiteConfigLayer"), !1)
                    : e.header && e.header.isShowHeaderLayer() && (zum.browser.ie8 || !n.closest("div").hasClass("nav_more"))
                    ? (e.header.closeHeaderLayers(), !1)
                    : ((0 == n.parents("#wrap").length || n.closest("#header")[0] || n.closest("#footer")[0] || "wrap_container" == n.parent().attr("id") || n.closest(".header_mask_under")[0]) &&
                        e.closeAll(),
                      void (zum.browser.msie || (window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty()))))
                );
              })
              .on("keydown", function (t) {
                if (27 == t.keyCode) {
                  if ("none" !== a("#layer_favorite_site_setup").css("display")) return f.a.trigger("close:favoriteSiteConfigLayer"), !1;
                  if (a("#box_news_view").is(":visible")) {
                    var n = { pos: "front_ab", cm: "ESC", puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] },
                      i = t.clientX,
                      s = t.clientX,
                      o = t.pageX,
                      r = t.pageY;
                    null != i && null != s && null != o && null != r && (n = a.extend(!0, n, { sx: i, sy: s, px: o, py: r })), ESTatTracker.push(["@Click", n]);
                  }
                  t.preventDefault(), e.closeAll();
                }
              });
        },
        listenFavoriteSiteConfigLayerCloseEvent: function () {
          var e = this,
            t = function (e) {
              if (27 == e.keyCode) {
                if (d.a.isAlert) return !1;
                if (d.a.isOpen || d.a.isChanged()) return d.a.checkChangedItem(), !1;
                f.a.trigger("close:favoriteSiteConfigLayer");
              }
            },
            n = function (e) {
              return 0 === a(e.target).closest("#layer_favorite_site_setup").length && f.a.trigger("close:favoriteSiteConfigLayer"), e.preventDefault(), !1;
            };
          this.listenTo(f.a, "on:closeFavoriteSiteConfigLayer", function () {
            e.$el.off("dblclick", n).off("keydown", t), e.$el.on("dblclick", n).on("keydown", t);
          });
        },
        listenHeaderLayerCloseEvent: function () {
          var e = this;
          this.listenTo(f.a, "one:closeGnbLayersForServiceMoreLayer", function () {
            e.$el.on("click", function (t) {
              0 === a(t.target).closest(".state_total_layer").length && (e.header.closeHeaderLayers(), e.$el.off(t));
            });
          }),
            this.listenTo(f.a, "one:closeGnbLayers", function () {
              e.$el.one("click", function () {
                e.header.closeHeaderLayers();
              });
            });
        },
        listenFooterEvent: function () {
          this.listenTo(
            f.a,
            "show:footer",
            i.bind(function () {
              this.footer.show();
            }, this)
          ),
            this.listenTo(
              f.a,
              "hide:footer",
              i.bind(function () {
                this.footer.hide();
              }, this)
            );
        },
        listenContainerEvent: function () {
          this.listenTo(
            f.a,
            "move:container",
            i.bind(function (e) {
              this.move(e);
            }, this)
          ),
            this.listenTo(
              f.a,
              "moveComplete:container",
              i.bind(function (e) {
                this.$el.css("cursor", "auto"), this.$el.css({ "overflow-x": "auto" }), this.footer.render(e), this.footer.show();
                var t = this.getPrevIdx(e),
                  n = this.getNextIdx(e),
                  i = this.$el.find("#zum_paging");
                i
                  .find(".d_prev .d_num")
                  .text(t)
                  .prop("class", "d_num num_" + t),
                  i
                    .find(".d_next .d_num")
                    .text(n)
                    .prop("class", "d_num num_" + n),
                  this.container.offBusy();
                var a = this.$el.find(".d_gnb_right_site"),
                  s = this.$el.find(".d_footer_mainpage_only");
                0 === e ? (a.show(), s.show(), this.shoppingSlot.show(), this.sendFavoriteSitePageViewStat(), this.scrollViewSwitch(!0)) : (a.hide(), s.hide()),
                  o.a.setPage(e),
                  g.a.send(g.a.ZumStat.eventName.view, g.a.ZumStat.getStat());
              }, this)
            ),
            this.listenTo(
              f.a,
              "remove:container",
              i.bind(function (e) {
                this.container.isBusy() || (this.container.onBusy(), this.container.removeContainer(e));
              }, this)
            ),
            this.listenTo(
              f.a,
              "hide:container",
              i.bind(function (e) {
                this.container.hideContainer(e);
              }, this)
            ),
            this.listenTo(
              f.a,
              "change:containerLayout",
              i.bind(function (e, t) {
                this.container.changeContainerLayout(e, t);
              }, this)
            ),
            this.listenTo(
              f.a,
              "reset:container",
              i.bind(function (e) {
                this.container.reset(e);
              }, this)
            );
        },
        listenLayer: function () {
          var e = this,
            t = a(".layer_notice_myzum_close");
          t.find(".btn_close").click(function () {
            a(".layer_notice_myzum_close").hide(), a("#layer").hide(), (e.myzumNoticeClosed = !0);
          }),
            t.find(".check_hide").click(function () {
              l.a.set("hide_myzum_popup", "1", { expires: 1, domain: ".zum.com" }), a(".layer_notice_myzum_close").hide(), a("#layer").hide(), (e.myzumNoticeClosed = !0);
            }),
            t.find("myzum_backup_close").click(function (e) {
              g.a.send(g.a.ZumPageStat.eventName.click, { cm: "close", pos: "myzum_end_layer" }, e);
            }),
            t.find("myzum_backup_link").click(function (e) {
              g.a.send(g.a.ZumPageStat.eventName.click, { cm: "more", pos: "myzum_end_layer", outurl: "https://zum.com/myzum_service_end" }, e);
            });
        },
        stopPrizmVideo: function () {
          var e = a("#prizmVideoTag");
          e.length && (_PrismADP && _PrismADP.onCloseHandler ? _PrismADP.onCloseHandler() : (e.get(0).pause(), (e.get(0).src = "")));
        },
        move: function (e, t) {
          if (
            (0 == e && (this.checkBigbannerDefault(), this.checkBrandingWidgetDefault(), this.checkHubScrollViewStat()),
            0 === e || this.myzumNoticeClosed || "1" == l.a.get("hide_myzum_popup") || (a("#layer").show(), a(".layer_notice_myzum_close").show()),
            !this.container.isBusy() && zum.page != e)
          ) {
            this.header.closeHeaderLayers(), this.scrollViewSwitch(!1);
            var n = this;
            (location.hash = "!/home"),
              a.setTimeout(function () {
                0 === zum.page && (n.container.modules.remove(0), n.shoppingSlot.hide(), n.stopPrizmVideo()),
                  (0 === zum.page || (1 === zum.page && !window.searchTargeting)) && f.a.trigger("focus:searchbox:searchText"),
                  n.footer.hide(),
                  n.container.onBusy(),
                  n.container.clearInitializeModulesTimeout(),
                  n.container.initBrandingStation(),
                  n.$el.css("cursor", "wait"),
                  n.$el.css({ "overflow-x": "hidden" }),
                  n.header.render(e),
                  n.container.render(e, t);
              }, 0);
          }
        },
        scrollViewSwitch: function (e) {
          (this.isFirstScollView.banner = e), (this.isFirstScollView.hub = e);
        },
        getPrevIdx: function (e) {
          var t = o.a.getMyzumPageCount() + 1;
          return (e + t - 1) % t;
        },
        getNextIdx: function (e) {
          return (e + 1) % (o.a.getMyzumPageCount() + 1);
        },
        prev: function (e) {
          return g.a.send(g.a.ZumPageStat.eventName.click, g.a.StatMaker.buttonStat(a(e.currentTarget)), e), this.move(this.getPrevIdx(zum.page), !1), !1;
        },
        next: function (e) {
          return g.a.send(g.a.ZumPageStat.eventName.click, g.a.StatMaker.buttonStat(a(e.currentTarget)), e), this.move(this.getNextIdx(zum.page), !0), !1;
        },
        viewMobileMode: function (e) {
          var t = a(e.current),
            n = t.data("url") || "http://m.zum.com";
          t.data("pos");
          return (
            l.a.set("viewMode", "mobile", { expires: 1, domain: ".zum.com" }),
            l.a.set("rd_ref", document.referrer, { expires: 1, domain: ".zum.com" }),
            a.setTimeout(function () {
              v.a.movePage(n, "_self");
            }, 20),
            !1
          );
        },
        sendTiming: function () {
          window.performance &&
            window.performance.timing &&
            setTimeout(function () {
              var e = window.performance.timing,
                t = {
                  serverN: window.serverNumber || 0,
                  navS: e.navigationStart || 0,
                  fetS: e.fetchStart || 0,
                  dluS: e.domainLookupStart || 0,
                  dluE: e.domainLookupEnd || 0,
                  conS: e.connectStart || 0,
                  conE: e.connectEnd || 0,
                  reqS: e.requestStart || 0,
                  resS: e.responseStart || 0,
                  resE: e.responseEnd || 0,
                  domL: e.domLoading || 0,
                  domI: e.domInteractive || 0,
                  domS: e.domContentLoadedEventStart || 0,
                  domE: e.domContentLoadedEventEnd || 0,
                  domC: e.domComplete || 0,
                  lodS: e.loadEventStart || 0,
                  lodE: e.loadEventEnd || 0,
                },
                n = zum.codeVersion || "lego_0_0_0_T",
                i = a.extend(!0, {}, { codeVersion: n, puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] }, t);
              null == i.page && (i.page = zum.page || 0);
              ESTatTracker && ESTatTracker.push(["@Timing", i]);
            }, 0);
        },
        getUnitsTargetValue: function (e) {
          var t,
            n = window.units || {};
          return e && n[e] && "javascript" === n[e].type.toLowerCase() && (t = n[e].value), t;
        },
      });
    }.call(this, n(4), n(8), n(3), n(37)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(159),
        a = n(14),
        s = e.View.extend({
          module: null,
          id: "d_layer_set_start",
          className: "layer_set_start",
          initialize: function () {
            this.events = { "click .d_btn_close": this.close, "click .d_btn_view_set": this.moveHomeConfigPage, dblclick: this.preventEvent };
          },
          setup: function () {
            (this.module = new i.a()), this.listenToOnce(this.module, "change", this.render), this.module.fetch();
          },
          preventEvent: function (e) {
            return e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1), !1;
          },
          moveHomeConfigPage: function () {
            return !0;
          },
          render: function () {
            this.$el.html(this.module.getHtml()), a.a.addLayer("layer_set_start", this), this.open();
          },
          open: function () {
            this.module ? (a.a.show(), this.$el.show()) : this.setup();
          },
          close: function () {
            return this.$el.hide(), a.a.hide(), !1;
          },
        });
      t.a = new s();
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/layer",
        fetch: function () {
          e.Model.prototype.fetch.call(this, { dataType: "html", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { name: "homeconfig" }) });
        },
        parse: function (e) {
          return { html: e };
        },
        getHtml: function () {
          return this.attributes.html;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9);
      var s = n(161),
        o = n(162),
        r = n(172),
        l = (n(76), n(0)),
        c = n(2);
      t.a = e.View.extend({
        searchbox: null,
        doodle: null,
        navOnKey: "nav_box_on",
        $header: i("#header"),
        headerHeight: 173,
        headerBasePosition: -60,
        isMiniHeader: !1,
        initialize: function () {
          (this.events = { "mousedown .nav_more a": this.toggleNavMoreLayer, "mousedown .d_header_stat": this.sendClickStatistics }),
            (this.$headerNavZum = i(".header_nav_bar .nav_zum")),
            (this.$headerMaskUnder = i(".header_mask_under")),
            this.createModules(),
            this.createDoodle("doodle_left"),
            this.createDoodle("doodle_right"),
            this.listenTo(
              c.a,
              "close:HeaderLayers",
              a.bind(function () {
                this.closeHeaderLayers();
              }, this)
            ),
            a.bindAll(this, "detect_scroll"),
            i(window).scroll(this.detect_scroll);
        },
        isShowHeaderLayer: function () {
          return this.$headerNavZum.hasClass(this.navOnKey);
        },
        closeHeaderLayers: function () {
          this.isShowHeaderLayer() && (this.$headerMaskUnder.hide(), this.$headerNavZum.toggleClass(this.navOnKey));
        },
        isShownGnbLayers: function () {
          return this.gnb.isShownLayers();
        },
        createModules: function () {
          (this.gnb = new s.a({ el: this.$(".gnb_wrap"), page: zum.page })), (this.searchbox = new o.a({ el: this.$(".box_search"), page: zum.page }));
        },
        createDoodle: function (e) {
          0 == zum.page && (this.doodle = new r.a({ el: this.$el.find("." + e), className: e }));
        },
        toggleNavMoreLayer: function (e) {
          e.preventDefault(),
            e.which &&
              3 !== e.which &&
              (i(e.currentTarget).hasClass("btn_unfold") ? this.$headerMaskUnder.show() : this.$headerMaskUnder.hide(), this.$headerNavZum.toggleClass(this.navOnKey), this.sendClickStatistics(e));
        },
        sendClickStatistics: function (e) {
          if (e.which && 3 !== e.which) {
            var t = i(e.currentTarget),
              n = t.attr("href") || "";
            l.a.send(l.a.ZumStat.eventName.click, { pos: "front_gnb", cm: t.data("cm"), outurl: "javascript:;" !== n && n ? n : "" }, e);
          }
        },
        render: function (e) {
          this.searchbox.render(e);
        },
        detect_scroll: function () {
          var e = i(document).scrollTop(),
            t = e - this.headerHeight + this.headerBasePosition,
            n = i("#wrap").hasClass("wrap-news-view");
          t > 0 ? (t = 0) : n && (this.headerHeight = 113),
            e >= this.headerHeight
              ? (this.isMiniHeader || ((this.isMiniHeader = !0), this.$header.addClass("mini-header")), n ? this.$header.css({ top: 0 }) : this.$header.css({ top: t + "px" }))
              : ((this.isMiniHeader = !1), this.$header.removeClass("mini-header").removeAttr("style"));
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(10), n(13), n(2);
      var s = n(0);
      t.a = e.View.extend({
        userInfoMoreClass: "info_more",
        initialize: function () {
          (this.events = {
            "mousedown .d_gnb_stat": this.sendClickStatistics,
            dblclick: this.preventEvent,
            "mousedown #id": this.toggleUserDetails,
            "mousedown #login": this.gnbLogin,
            "mousedown #logout": this.gnbLogout,
          }),
            (this.$userInfoLayer = this.$(".d_user_info")),
            (window.gnbSendStats = i.bind(function (e, t) {
              if (t.keyCode ? 13 === t.keyCode : 3 != t.which) {
                var n = e.attr("href");
                s.a.send(s.a.ZumStat.eventName.click, { pos: "front_gnb", cm: e.data("cm"), outurl: "javascript:;" !== n && n ? n : "" }, t);
              }
            }, this));
        },
        toggleUserDetails: function (e) {
          e.preventDefault(), e.which && 3 !== e.which && this.$userInfoLayer.toggleClass(this.userInfoMoreClass);
        },
        gnbLogin: function (e) {
          3 !== (e.keyCode ? e.keyCode : e.which) && (location.href = "https://user.zum.com/login/general?targetUrl=" + encodeURIComponent(location.href));
        },
        gnbLogout: function (e) {
          3 !== (e.keyCode ? e.keyCode : e.which) && location.replace("https://sign.zum.com/auth/logout?targetUrl=" + encodeURIComponent(location.href.replace(/zum.com\/.*#!/, "zum.com/#!")));
        },
        preventEvent: function (e) {
          return e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1), !1;
        },
        isShownLayers: function () {
          return this.$userInfoLayer.hasClass(this.userInfoMoreClass);
        },
        sendClickStatistics: function (e) {
          if (e.which && 3 !== e.which) {
            var t = a(e.currentTarget),
              n = t.attr("href") || "";
            s.a.send(s.a.ZumStat.eventName.click, { pos: "front_gnb", cm: t.data("cm"), outurl: "javascript:;" !== n && n ? n : "" }, e);
          }
        },
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(11), n(10), n(13), n(87), n(40), n(17), n(5), n(1);
      var s = n(7),
        o = n(163),
        r = n(165),
        l = n(169),
        c = n(171),
        u = n(116),
        h = n(6),
        d = n(0),
        p = n(2),
        m = n(15);
      t.a = e.View.extend({
        guidequeryView: null,
        guidequeryBoxView: null,
        rankingKeywordView: null,
        rankingKeywordSuggestView: null,
        keyboardView: null,
        isLoadFrame: !1,
        $boxSearch: i(".box_search"),
        $suggestWrap: i(".box_search").find(".layer_suggest"),
        $guideQuery: i(".box_search").find(".search_q"),
        $searchText: i("#searchText"),
        initialize: function (e) {
          (this.events = {
            "keydown #searchText": this.rotateSearchEngine,
            "mousewheel #searchText": this.wheelRotate,
            "mouseenter #searchSubmit": this.searchBtnHoverStart,
            "mouseleave #searchSubmit": this.searchBtnHoverEnd,
            "mouseDown #searchSubmit": this.searchBtnClick,
            "mouseUp #searchSubmit": this.searchBtnHoverStart,
            "submit #searchForm": this.onSubmit,
            "click #d_logo": this.logoClick,
            "click #d_mini_logo": this.miniLogoClick,
            "click .keyword_list": this.showSuggest,
            "mouseenter .keyword_list": function () {
              p.a.trigger("off:rolling:rankingkeyword");
            },
            "mouseleave .keyword_list": function () {
              p.a.trigger("on:rolling:rankingkeyword");
            },
            "focus #searchText": this.searchboxInputFocus,
            "blur #searchText": this.searchboxInputBlur,
            "keyup #searchText": this.searchboxInputKeyup,
          }),
            (this.guidequeryView = new o.a({ el: i("#guide_query") })),
            (this.keyboardView = new u.a({ el: this.$el, $boxSearch: this.$boxSearch }));
          var t = i("#searchText");
          window.searchTargeting &&
            ((this.rankingKeywordView = new l.a({ el: i("#rankingKeyword") })),
            (this.rankingKeywordSuggestView = new c.a()),
            "" !== t.val() && this.rankingKeywordView && this.rankingKeywordView.isLoaded() && this.rankingKeywordView.unload());
          var n = i("#searchSuggest"),
            h = i('<iframe frameborder="0" src="about:blank" allowtransparency="true" scrolling="no" height="1" title="서제스트"></iframe>');
          n.html(h),
            (this.searchObjects = {
              $textbox: t,
              $frameWrapper: n,
              $frame: h,
              $submit: i("#searchSubmit,#key_search"),
              $form: i("#searchForm"),
              $searchQueryMethod: i("#searchQueryMethod"),
              $searchParams: i("#searchParams"),
              $keys: i("#d_group_keyboard button.key"),
            }),
            (this.searchEngineBoxView = new r.a({ el: i("#searchEngineBox"), page: e.page, searchObjects: this.searchObjects })),
            this.listenTo(
              p.a,
              "focus:searchbox:searchText",
              a.bind(function () {
                (this.rankingKeywordView && this.rankingKeywordView.isLoaded()) || this.searchObjects.$textbox.focus();
              }, this)
            );
          var d = this;
          (window.searchObjects = {
            getObjects: function () {
              return {
                getDocumentKeydownHook: function () {
                  return zum.documentKeyDownHookForSearchBox;
                },
                getPage: function () {
                  return zum.page;
                },
                $textbox: d.searchObjects.$textbox,
                $frameWrapper: d.searchObjects.$frameWrapper,
                $frame: d.searchObjects.$frame,
                $submit: d.searchObjects.$submit,
                $form: d.searchObjects.$form,
                $searchQueryMethod: d.searchObjects.$searchQueryMethod,
                $searchParams: d.searchObjects.$searchParams,
                rankingKeywordView: d.rankingKeywordView,
                rankingKeywordSuggestView: d.rankingKeywordSuggestView,
                dlt: zum.settings.dlt,
                suggPv: "",
                suggQm: "top",
                $keys: d.searchObjects.$keys,
              };
            },
            addExtraParams: s.a.addExtraParams,
            engineSettings: function () {
              return d.searchEngineBoxView.getSearchEngineSetting();
            },
          }),
            this.$el
              .find("#searchText")
              .one(
                "keydown",
                a.bind(function (e) {
                  var t = void 0 === e ? -1 : e.keyCode || e.which;
                  if (!((t >= 112 && t <= 123 && e.altKey) || e.ctrlKey))
                    switch (t) {
                      case 8:
                      case 9:
                      case 13:
                      case 16:
                      case 17:
                      case 18:
                      case 25:
                      case 27:
                      case 32:
                      case 33:
                      case 34:
                      case 35:
                      case 36:
                      case 37:
                      case 38:
                      case 39:
                      case 40:
                      case 91:
                      case 92:
                      case 93:
                      case 144:
                      case 145:
                        break;
                      default:
                        "" === this.searchObjects.$textbox.val() && this.rankingKeywordView && this.rankingKeywordView.isLoaded() && this.rankingKeywordView.unload();
                    }
                  this.loadFrame();
                }, this)
              )
              .one("click", a.bind(this.loadFrame, this)),
            this.$el.find(".d_group_keyboard button.key").one(
              "click",
              a.bind(function (e) {
                "" === this.searchObjects.$textbox.val() && this.rankingKeywordView && this.rankingKeywordView.isLoaded() && this.rankingKeywordView.unload(), this.loadFrame();
              }, this)
            ),
            i.setTimeout(a.bind(this.loadFrame, this), 2e3, "searchBox");
        },
        showSuggest: function () {
          if (window.searchTargeting && window.searchKeywordTen)
            if ((this.searchObjects.$textbox.focus(), this.rankingKeywordView.unload(), window.restest_callback_ssug))
              this.rankingKeywordView && this.rankingKeywordSuggestView && "" == this.searchObjects.$textbox.val() && this.rankingKeywordSuggestView.load();
            else
              var e = this,
                t = 0,
                n = setInterval(function () {
                  t++,
                    window.restest_callback_ssug
                      ? (e.rankingKeywordView && e.rankingKeywordSuggestView && "" == e.searchObjects.$textbox.val() && e.rankingKeywordSuggestView.load(), clearInterval(n))
                      : t > 20 && clearInterval(n);
                }, 100);
        },
        onSubmit: function () {
          if (this.rankingKeywordView && this.rankingKeywordSuggestView) {
            if (this.rankingKeywordView.isLoaded()) return this.rankingKeywordView.search(), !1;
            if (this.rankingKeywordSuggestView.isLoaded()) {
              var e = this.searchObjects.$textbox.val();
              if ("" !== e) return this.rankingKeywordSuggestView.searchOnKeydown(e), !1;
            }
          }
          return this.$el.find("#searchForm").attr("action", "https://search.zum.com/search.zum"), !0;
        },
        logoClick: function (e) {
          var t = i(e.currentTarget),
            n = d.a.StatMaker.logoStat(t);
          d.a.send(d.a.ZumStat.eventName.click, n, e),
            m.a.Article.sendAndCloseScrollStat(),
            i.setTimeout(function () {
              h.a.movePage(t.attr("href"));
            }, 100);
        },
        miniLogoClick: function (e) {
          var t = i(e.currentTarget),
            n = d.a.StatMaker.miniLogoStat(t);
          d.a.send(d.a.ZumStat.eventName.click, n, e),
            m.a.Article.sendAndCloseScrollStat(),
            i.setTimeout(function () {
              h.a.movePage(t.attr("href"));
            }, 100);
        },
        searchBtnClick: function (e) {
          i(e.currentTarget).addClass("btn_search_down").addClass("d_down");
        },
        searchBtnHoverStart: function (e) {
          p.a.trigger("off:rolling:rankingkeyword"), i(e.currentTarget).addClass("btn_search_over").removeClass("btn_search_down");
        },
        searchBtnHoverEnd: function (e) {
          p.a.trigger("on:rolling:rankingkeyword"), i(e.currentTarget).removeClass("btn_search_down").removeClass("btn_search_over");
        },
        loadFrame: function () {
          if (!this.isLoadFrame) {
            this.isLoadFrame = !0;
            var e = "/suggest?_=js";
            window.variantsParam && (e += "&variants=" + window.variantsParam);
            var t = !1;
            try {
              t = this.searchObjects.$frame.prop("contentWindow").location.href.indexOf(e) >= 0;
            } catch (e) {
              t = !1;
            }
            t ? this.searchObjects.$frame.prop("contentWindow").initTick() : this.searchObjects.$frame.prop("contentWindow").location.replace(e);
          }
        },
        rotateSearchEngine: function (e) {
          var t = i(e.currentTarget).val();
          40 === e.keyCode ? "" == t && this.searchEngineBoxView.rotateSearchEngine(-1) : 38 === e.keyCode && "" == t && this.searchEngineBoxView.rotateSearchEngine(1);
        },
        wheelRotate: function (e) {
          return this.searchEngineBoxView.rotateSearchEngine(e), !1;
        },
        render: function (e) {
          0 == e
            ? (this.$el.find(".d_choice").hide(),
              this.rankingKeywordView && ("" === this.searchObjects.$textbox.val() ? this.rankingKeywordView.on(!0) : (this.rankingKeywordView.on(!1), this.searchObjects.$textbox.focus())))
            : (this.rankingKeywordView && this.rankingKeywordView.off(), this.searchEngineBoxView.render(), this.$el.find(".d_choice").show());
        },
        searchboxInputFocus: function () {
          this.$searchText.closest("fieldset").addClass("input_focus");
        },
        searchboxInputBlur: function () {
          "" === this.$searchText.val() && this.$searchText.closest("fieldset").removeClass("input_focus");
        },
        searchboxInputKeyup: function (e) {
          e.preventDefault(), "" === i.trim(this.$searchText.val()) && this.$suggestWrap.hide();
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(164),
        s = n(6),
        o = n(0),
        r = n(15);
      t.a = e.View.extend({
        initialize: function () {
          (this.guidequeryCollection = new a.a()),
            this.listenTo(this.guidequeryCollection, "change", this.collectionUpdated),
            (this.events = { "click .d_guide_query_click": this.sendGuidequeryClickStat, "click .d_prev, .d_next": this.pagingGuidequery, dblclick: this.preventEvent });
        },
        preventEvent: function (e) {
          return e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1), !1;
        },
        collectionUpdated: function (e) {
          this.render(e.attributes.id);
        },
        pagingGuidequery: function (e) {
          var t = i(e.currentTarget),
            n = { pos: "paging", cm: t.data("cm") || "" };
          return o.a.send("@Click", n, e), this.render(t.data("page")), !1;
        },
        sendGuidequeryClickStat: function (e) {
          var t = i(e.currentTarget).attr("href");
          return (
            r.a.Article.sendAndCloseScrollStat(),
            i.setTimeout(function () {
              s.a.movePage(t);
            }, 100),
            !1
          );
        },
        render: function (e) {
          this.guidequeryCollection.exists(e) ? this.$el.html(this.guidequeryCollection.get(e).getHtml()) : this.guidequeryCollection.fetch(e);
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(119);
      t.a = e.Collection.extend({
        model: i.a,
        exists: function (e) {
          return !!this.get(e);
        },
        fetch: function (e) {
          var t = new i.a({ id: e });
          t.fetch(), this.add(t);
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a, s) {
      n(11), n(46), n(75), n(10), n(23);
      var o = n(5),
        r = n(1),
        l = n(7),
        c = n(2),
        u = n(88);
      n(55);
      t.a = e.View.extend({
        template: null,
        initialize: function (e) {
          if (
            ((this.events = {
              mouseenter: this.hoverStart,
              mouseleave: this.hoverEnd,
              "click .d_engine_set": this.engineSetting,
              "click .d_sel_engine": this.engineSelect,
              mousewheel: this.wheelRotate,
              "click .d_choice": this.preventEvent,
              focusin: this.hoverStart,
              focusout: this.hoverEnd,
            }),
            (this.searchObjects = e.searchObjects),
            (l.a.searchTarget = "" + r.a.getData(r.a.Names.searchTarget)),
            (this.template = i.templates.search_engines),
            (l.a.keepEngine = r.a.getData(r.a.Names.keepEngine)),
            "1" !== l.a.keepEngine)
          ) {
            var t = r.a.getData(r.a.Names.selEngine);
            "" !== t && "0" !== t && null !== t && o.a.setData(r.a.Names.selEngine, ""), (l.a.selEngine = "0");
          } else (l.a.selEngine = r.a.getData(r.a.Names.selEngine)), l.a.engineMap[l.a.selEngine] || (l.a.selEngine = "0");
          for (var n = "0|" + r.a.getData(r.a.Names.engines), s = a.uniq(n.split("|")), u = [], h = 0, d = s.length; h < d; h++) l.a.engineMap.hasOwnProperty(s[h]) && u.push(s[h]);
          (l.a.engines = a
            .sortBy(u, function (e) {
              return parseInt(e);
            })
            .join("|")),
            zum.page > 0 && this.render(),
            this.listenTo(c.a, "render:searchEngineBox", a.bind(this.render, this));
        },
        preventEvent: function (e) {
          return e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1), !1;
        },
        render: function () {
          var e = {};
          (e.selEngineClass = l.a.engineMap[l.a.selEngine]), (e.engines = []);
          for (
            var t = a.sortBy(a.uniq(l.a.engines.split("|")), function (e) {
                return parseInt(e);
              }),
              n = a.indexOf(t, l.a.selEngine),
              i = 0,
              s = t.length;
            i < s;
            i++
          ) {
            var o = (i + parseInt(n)) % t.length;
            l.a.engineMap.hasOwnProperty(t[o]) && t[o] !== l.a.selEngine && e.engines.push({ index: t[o], engineClass: l.a.engineMap[t[o]] });
          }
          this.$el.html(this.template(e)), zum.zumpageId && zum.zumpageId != zum.myZumpageId && this.$el.children("ul").children().length < 2 && this.$el.addClass("default");
        },
        hoverStart: function () {
          if (zum.readonly) return !1;
          l.a.engines || this.render(), 0 !== this._hoverTimeout && s.clearTimeout(this._hoverTimeout), s.clearTimeout(this._hoverEndTimeout);
          var e = this;
          this._hoverTimeout = s.setTimeout(function () {
            e.$el.addClass("on"), e.$el.children("ul").removeClass("dN");
          }, this._hoverDelay);
        },
        hoverEnd: function () {
          if (zum.readonly) return !1;
          0 !== this._hoverTimeout && s.clearTimeout(this._hoverTimeout);
          var e = this;
          this._hoverEndTimeout = s.setTimeout(function () {
            e.$el.removeClass("on"), e.$el.children("ul").addClass("dN");
          }, this._hoverDelay);
        },
        wheelRotate: function (e, t) {
          return this.rotateSearchEngine(t), !1;
        },
        engineSetting: function () {
          return u.a.open(!0), this.hoverEnd(), !1;
        },
        engineSelect: function (e) {
          return this.changeSelEngine(s(e.currentTarget).data("index")), this.hoverEnd(), this.render(), this.searchObjects.$textbox.focus(), !1;
        },
        changeSelEngine: function (e) {
          l.a.engineMap.hasOwnProperty(e) &&
            ((l.a.selEngine = "" + e),
            "1" === l.a.keepEngine && ("" === l.a.selEngine || "0" === l.a.selEngine ? o.a.setData(r.a.Names.selEngine, "0") : o.a.setData(r.a.Names.selEngine, l.a.selEngine)));
        },
        getSearchEngineSetting: function () {
          if (0 === zum.page) return { engines: "", selEngine: "zum", searchTargetType: l.a.searchTarget };
          var e = l.a.engineMap[l.a.selEngine];
          return {
            engines: a
              .map(l.a.engines ? l.a.engines.split("|") : [], function (e) {
                return l.a.engineMap["" + e];
              })
              .join("|"),
            selEngine: e || "zum",
            searchTargetType: l.a.searchTarget,
          };
        },
        rotateSearchEngine: function (e) {
          if (0 != zum.page) {
            for (var t, n = a.uniq(l.a.engines.split("|")), i = 0, s = 0, o = n.length; s < o; s++) n[s] === l.a.selEngine && (i = s);
            (t = e < 0 ? n[(n.length + i + 1) % n.length] : n[(n.length + i - 1) % n.length]), this.changeSelEngine(t), this.render();
          }
        },
      });
    }.call(this, n(4), n(37), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/layer",
        fetch: function () {
          e.Model.prototype.fetch.call(this, { dataType: "html", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { name: "config" }) });
        },
        parse: function (e) {
          return { html: e };
        },
        getHtml: function () {
          return this.attributes.html;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      t.a = e.View.extend({
        initialize: function (e) {
          (this.title = e.title), (this.url = e.url), (this.imgUrl = e.imgUrl), (this.summary = e.summary);
        },
        open: function () {
          return (
            window.open(
              "http://www.facebook.com/sharer.php?s=100&p[title]=" +
                encodeURIComponent(this.title) +
                "&p[url]=" +
                encodeURIComponent(this.url) +
                "&p[images][0]=" +
                encodeURIComponent(this.imgUrl) +
                "&p[summary]=" +
                encodeURIComponent(this.summary),
              "facebook",
              "height=600,width=900,scrollbars=1"
            ),
            !1
          );
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      t.a = e.View.extend({
        initialize: function (e) {
          (this.url = e.url), (this.summary = e.summary);
        },
        open: function () {
          return window.open("http://twitter.com/intent/tweet?text=" + encodeURIComponent(this.summary) + "&url=" + encodeURIComponent(this.url), "twitter", "height=400,width=700,scrollbars=1"), !1;
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9);
      var s = n(170),
        o = (n(0), n(2));
      t.a = e.View.extend({
        rollingInterval: 2500,
        refreshInterval: 6e4,
        animationSpeed: 500,
        rollingID: null,
        rollingStatus: !0,
        status: !0,
        loaded: !0,
        keywordData: {},
        nextKeywordList: null,
        initialize: function () {
          var e = this;
          (this.module = new s.a()),
            this.listenTo(this.module, "change", this.catchUpdated),
            this.listenTo(o.a, "off:rolling:rankingkeyword", i.bind(this.offRolling, this)),
            this.listenTo(o.a, "on:rolling:rankingkeyword", i.bind(this.onRolling, this)),
            this.initKeywordData(),
            0 === zum.page &&
              (this.rollingID = a.setTimeout(
                function () {
                  e.startRolling.call(e);
                },
                this.rollingInterval,
                this.rollingID
              )),
            a.setInterval(function () {
              e.updateModule();
            }, this.refreshInterval);
        },
        on: function (e) {
          if (!this.status) {
            if (((this.status = !0), this.nextKeywordList)) {
              var t = this.$el.find("ol"),
                n = this.nextKeywordList;
              n.css("top", "0px"), this.$el.append(n), t.remove(), (this.nextKeywordList = null);
            }
            e && this.load();
          }
        },
        off: function () {
          this.status && (this.unload(), this.initKeywordData(), this.$el.find("ol").css("top", 0), (this.status = !1));
        },
        updateModule: function () {
          this.module.fetch();
        },
        catchUpdated: function () {
          this.nextKeywordList = a(this.module.getHtml());
        },
        onRolling: function () {
          if (this.status && !this.rollingStatus && ((this.rollingStatus = !0), this.loaded)) {
            var e = this;
            this.rollingID = a.setTimeout(
              function () {
                e.startRolling.call(e);
              },
              this.rollingInterval,
              this.rollingID
            );
          }
        },
        offRolling: function () {
          this.rollingStatus && ((this.rollingStatus = !1), this.stopRolling());
        },
        load: function () {
          if (this.status && !this.loaded) {
            (this.loaded = !0), this.$el.closest("div .issue_keyword_box").show();
            var e = this;
            this.rollingStatus &&
              (this.rollingID = a.setTimeout(
                function () {
                  e.startRolling.call(e);
                },
                this.rollingInterval,
                this.rollingID
              ));
          }
        },
        unload: function () {
          this.loaded && ((this.loaded = !1), this.$el.closest("div .issue_keyword_box").hide(), this.stopRolling());
        },
        startRolling: function () {
          var e = this,
            t = this.$el.find("ol");
          if (this.keywordData.rank >= 10) {
            var n = this.nextKeywordList || t.clone();
            n.css("top", "27px"),
              this.$el.append(n),
              n.animate({ top: 0 }, this.animationSpeed, function () {
                (e.keywordData.rank = 1), (e.keywordData.keyword = e.$el.find(".d_rank_keyword_" + e.keywordData.rank).data("keyword"));
              }),
              t.animate({ top: -27 * this.keywordData.rank + "px" }, this.animationSpeed, function () {
                t.remove();
              }),
              this.nextKeywordList && (this.nextKeywordList = null);
          } else
            t.animate({ top: -27 * this.keywordData.rank + "px" }, 500, function () {
              e.keywordData.rank++, (e.keywordData.keyword = e.$el.find(".d_rank_keyword_" + e.keywordData.rank).data("keyword"));
            });
          this.rollingID = a.setTimeout(
            function () {
              e.startRolling.call(e);
            },
            this.rollingInterval,
            this.rollingID
          );
        },
        stopRolling: function () {
          a.clearTimeout(this.rollingID);
        },
        render: function () {
          this.$el.html(this.module.getHtml());
        },
        initKeywordData: function () {
          this.keywordData = { rank: 1, keyword: this.$el.find(".d_rank_keyword_1").data("keyword") };
        },
        isLoaded: function () {
          return this.loaded;
        },
        getCurrentRank: function () {
          return this.keywordData.rank;
        },
        search: function () {
          window.location =
            "https://search.zum.com/search.zum?qm=g_real1.searchbartop&real1_id=" + this.keywordData.rank + "&method=uni&option=accu&rd=1&query=" + encodeURIComponent(this.keywordData.keyword);
        },
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      t.a = e.Model.extend({
        url: "/view/searchBoxRankingKeyword",
        fetch: function () {
          e.Model.prototype.fetch.call(this, { dataType: "html" });
        },
        parse: function (e) {
          return { html: e };
        },
        getHtml: function () {
          return this.attributes.html;
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(10), n(87);
      var a = n(0);
      t.a = e.View.extend({
        initialize: function () {
          (this.loaded = !1), (this.suggestData = {});
        },
        load: function () {
          (this.suggestData = {}), window.restest_callback_ssug("")(window.searchKeywordTen), a.a.send(a.a.Suggest.eventName.view, { keyword: "", dl: null, is: null });
        },
        push: function (e, t) {
          this.suggestData[e] = t;
        },
        loadComplete: function () {
          this.loaded = !0;
        },
        closeComplete: function () {
          this.loaded = !1;
        },
        isLoaded: function () {
          return this.loaded;
        },
        searchOnKeydown: function (e) {
          this.search("keypress", e, this.suggestData[e]);
        },
        searchOnClick: function (e, t) {
          this.search("click", i(e).data("keyword"), i(e).data("rank"));
        },
        search: function (e, t, n) {
          a.a.send(a.a.Suggest.eventName.click, { em: e, keyword: t, qm: "IssueKeyword", selkey: "" }),
            i.setTimeout(function () {
              window.location = "https://search.zum.com/search.zum?qm=g_real1.suggesttop&real1_id=" + n + "&method=uni&option=accu&&rd=1&query=" + encodeURIComponent(t);
            }, 100);
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(0);
      t.a = e.View.extend({
        initialize: function () {
          i.isUndefined(this.$el[0]) ||
            ((this.$link = this.$el.children("a")),
            (this.$imgLink = this.$link.children("img")),
            (this.stat = {}),
            (this.stat.view = i.extend({}, a.a.DoodleStat.data[this.className], { bannerId: this.$link.data("itemId"), outurl: this.$link.attr("href"), title: this.$imgLink.attr("alt") })),
            (this.stat.click = i.extend({}, this.stat.view, { landingPage: this.$link.attr("href") })),
            this.send(a.a.DoodleStat.eventName.show, this.stat.view));
        },
        events: { "click .d_background": "clickDoodle" },
        send: function (e, t, n) {
          a.a.send(e, t, n);
        },
        clickDoodle: function (e) {
          this.send(a.a.DoodleStat.eventName.click, this.stat.click, e);
        },
      });
    }.call(this, n(4), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(9), n(262);
      var a = n(5),
        s = n(2),
        o = n(88),
        r = n(42),
        l = n(0),
        c = n(6);
      t.a = e.View.extend({
        busyStatus: !1,
        initialize: function () {
          (this.events = {
            "click .d_main_paging .d_view_page": this.moveContainer,
            "click .d_main_paging .d_page_add": this.addContainer,
            "click .d_btn_store": this.onClickAppstoreBtn,
            "click .d_btn_change_bg": this.onClickChangeBgBtn,
            "click .d_btn_setting": this.openConfig,
            "click .d_btn_delete": this.removeContainer,
            "click .d_btn_line_add": this.addWidgetLine,
            "click .d_btn_line_remove": this.removeWidgetLine,
            "click .d_link_list a": this.sendClickStatistics,
            "click .d_notice a": this.sendClickStatistics,
            "mouseenter .d_main_paging .d_page_add": this.zIndexUp,
            "mouseleave .d_main_paging .d_page_add": this.zIndexDown,
            "mouseenter .edit_line, .delete_page": this.zIndexUp,
            "mouseleave .edit_line, .delete_page": this.zIndexDown,
            dblclick: this.preventEvent,
          }),
            this.showSmartzumLink();
        },
        onBusy: function () {
          this.busyStatus = !0;
        },
        offBusy: function () {
          this.busyStatus = !1;
        },
        isBusy: function () {
          return this.busyStatus;
        },
        preventEvent: function (e) {
          return e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1), !1;
        },
        zIndexUp: function () {
          this.$el.css("z-index", 100);
        },
        zIndexDown: function () {
          this.$el.css("z-index", 10);
        },
        showSmartzumLink: function () {
          var e = this.$el.find("#smartzumLink"),
            t = function (e, t) {
              if (!t) return !1;
              for (var n = 0; n < e.length; n++) if (e[n] === t) return !0;
              return !1;
            };
          if (
            ((t(["#smartzum", "#!/smartzum", "#atb", "#!/f=smarthome", "#f=smarthome", "#!/f=smartzum", "#f=smartzum", "#!/f=atb", "#f=atb", "#!/f=tab", "#f=tab"], location.hash) ||
              "/tab" === location.pathname ||
              t(["http://zum.com/atb", "http://zum.com/tab", "http://zum.com/h?f=smarthome", "http://zum.com/h?f=smartzum", "http://zum.com/h?f=tab", "http://zum.com/h?f=atb"], document.referrer)) &&
              e.show(),
            zum.browser.msie)
          )
            try {
              location.href.toLowerCase().startsWith("about:") && ((location.href = "#!/smartzum"), e.show(), (window.fromAboutSmartzum = !0));
            } catch (e) {}
        },
        addWidgetLine: function (e) {
          if (zum.readonly || zum.page < 1) return !1;
          var t = i(e.currentTarget);
          if (!t.parent().hasClass("disable")) {
            var n = l.a.StatMaker.buttonStat(t);
            l.a.send(l.a.ZumPageStat.eventName.click, n, e), s.a.trigger("add:widgetLine");
          }
          return !1;
        },
        removeWidgetLine: function (e) {
          if (zum.readonly || zum.page < 1) return !1;
          var t = i(e.currentTarget);
          if (!t.parent().hasClass("disable")) {
            var n = l.a.StatMaker.buttonStat(t);
            l.a.send(l.a.ZumPageStat.eventName.click, n, e), s.a.trigger("remove:widgetLine");
          }
          return !1;
        },
        removeContainer: function (e) {
          return s.a.trigger("remove:container", zum.page), !1;
        },
        moveContainer: function (e) {
          var t = i(e.currentTarget);
          s.a.trigger("move:container", t.closest("li").data("page"));
          var n = l.a.StatMaker.buttonStat(t);
          return l.a.send(l.a.ZumPageStat.eventName.click, n, e), !1;
        },
        addContainer: function (e) {
          if (!this.isBusy()) {
            this.onBusy();
            var t = this;
            a.a._newMyzumPage(!1);
            var n = i(e.currentTarget),
              o = l.a.StatMaker.buttonStat(n);
            return (
              l.a.send(l.a.ZumPageStat.eventName.click, o, e),
              s.a.trigger("move:container", a.a.getMyzumPageCount()),
              s.a.once("moveComplete:container", function () {
                r.a.openLayout(), t.offBusy();
              }),
              !1
            );
          }
        },
        render: function (e) {
          var t = a.a.getMyzumPageCount();
          zum.readonly && (t = t > 0 ? t : 1);
          for (
            var n =
                "<ul><li " +
                (0 === e ? 'class="on"' : "") +
                'data-page="0"><a href="javascript:;" title="메인페이지" class="zum d_view_page" data-pos="front_indicatorhome"><span>메인페이지</span></a></li>',
              i = 1;
            i <= t;
            ++i
          ) {
            var s = "";
            e === i && (s = "on"),
              (n +=
                '<li class="' +
                s +
                '" title="' +
                i +
                ' 페이지" data-page="' +
                i +
                '"><a href="javascript:;" class="d_view_page" data-pos="front_indicator' +
                i +
                '">' +
                i +
                "<span>추가 페이지</span></a></li>");
          }
          t < a.a.getMaxPage() &&
            !zum.readonly &&
            ((n += '<li class="page_add d_footer_tip"><a href="javascript:;" class="d_page_add plus" data-pos="front_indicatorNew"><span>추가 페이지</span></a>'),
            (n += '<span class="tip">페이지 추가<span class="tip_arrow"></span></span></li>')),
            (n += "</ul>"),
            this.$el.find(".d_main_paging").html(n),
            0 == e ? this.$el.find(".d_page_buttons").hide() : 0 == e || zum.readonly || this.$el.find(".d_page_buttons").show();
        },
        onClickAppstoreBtn: function () {
          r.a.openWidgetStore();
        },
        onClickChangeBgBtn: function () {
          r.a.openBackground();
        },
        openConfig: function () {
          return o.a.open(), !1;
        },
        show: function () {
          this.$el.show();
        },
        hide: function () {
          this.$el.hide();
        },
        sendClickStatistics: function (e) {
          var t = i(e.currentTarget),
            n = l.a.StatMaker.buttonStat(t);
          return (
            l.a.send(l.a.ZumStat.eventName.click, n, e),
            "_blank" === t.attr("target") ||
              (i.setTimeout(function () {
                c.a.movePage(t.attr("href"));
              }, 100),
              !1)
          );
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(156), n(5), n(1);
      var s = n(52),
        o = n(2),
        r = n(0);
      t.a = e.View.extend({
        myFavoriteSites: [],
        initialize: function (e) {
          (this.events = { "click #d_btn_open_favorite_site": this.showFavoriteLayer, "click .d_item": this.click, mouseenter: this.mouseEnter, mouseleave: this.mouseLeave }),
            this.initMyFavoriteSites(),
            this.listenTo(
              o.a,
              "update:favoritesite",
              i.bind(function (e) {
                this.updateMyFavoriteSites(e);
              }, this)
            ),
            this.listenTo(
              o.a,
              "show:favoritesite",
              i.bind(function () {
                this.show();
              }, this)
            ),
            this.listenTo(
              o.a,
              "hide:favoritesite",
              i.bind(function () {
                this.hide();
              }, this)
            ),
            this.listenTo(
              o.a,
              "show:favoritesiteLayer",
              i.bind(function () {
                this.showFavoriteLayer();
              }, this)
            ),
            0 === e.page && this.show(),
            (this.shoppingSlot = e.shoppingSlot),
            (this.hasShoppingLayer = e.hasShoppingLayer),
            zum.isOwner && this.$("#d_btn_open_favorite_site").show();
        },
        initMyFavoriteSites: function () {
          var e = this;
          i.each(this.$el.find(".d_site_list li"), function (t) {
            var n = a(t),
              i = n.find("a"),
              s = n.find("img");
            e.myFavoriteSites.push({ url: i.prop("href"), disabled: i.data("disabled"), idx: i.data("idx"), img: s.prop("src"), title: s.prop("alt") });
          }),
            e.myFavoriteSites[6] && i.has(e.myFavoriteSites[6], "idx") && 0 == e.myFavoriteSites[6].idx && ((s.a.isTitleBlank = !1), (s.a.isUrlBlank = !1));
        },
        updateMyFavoriteSites: function (e) {
          (this.myFavoriteSites = e),
            i.each(this.$el.find(".d_site_list li.d_pos"), function (t, n) {
              var i = a(t),
                s = e[n],
                o = i.find("a");
              o.prop("href", s.url), o.prop("target", s.target), o.data("disabled", s.fixed), o.data("idx", s.id);
              var r = o.find("img");
              r.prop("src", s.image2),
                r.prop("alt", s.title),
                0 == s.id ? r.hasClass("custom_item") || r.addClass("custom_item") : r.hasClass("custom_item") && r.removeClass("custom_item"),
                o.find("span").html(s.title);
            });
        },
        show: function () {
          this.$el.show();
        },
        hide: function () {
          this.$el.hide();
        },
        showFavoriteLayer: function (e) {
          return s.a.open(), r.a.send("@Click", { pos: r.a.FavoriteStat.pos.site, order: 0, cm: "setting" }, e), !1;
        },
        click: function (e) {
          var t = a(e.currentTarget).closest("a");
          r.a.send(r.a.FavoriteStat.eventName.click, { pos: r.a.FavoriteStat.pos.site, order: t.data("order"), outurl: t.prop("href"), page: 0 }, e);
        },
        mouseEnter: function () {
          this.$el.addClass("over"), this.hasShoppingLayer && this.shoppingSlot.addClass("over");
        },
        mouseLeave: function () {
          this.$el.removeClass("over"), this.hasShoppingLayer && this.shoppingSlot.removeClass("over");
        },
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/favoriteSiteConfigLayer",
        fetch: function () {
          e.Model.prototype.fetch.call(this, { dataType: "html", data: i.extend({}, a.a.getAjaxCommonRequestParam(), {}) });
        },
        parse: function (e) {
          return { html: e };
        },
        getHtml: function () {
          return this.attributes.html;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(5), n(1);
      var a = n(0);
      t.a = e.View.extend({
        initialize: function (e) {
          (this.events = { "click .d_shopping_item": this.click, mouseenter: this.mouseEnter, mouseleave: this.mouseLeave }),
            (this.favoriteSite = e.favoriteSite),
            (this.hasShoppingLayer = e.hasShoppingLayer),
            0 === e.page && this.show();
        },
        show: function () {
          this.hasShoppingLayer && this.$el.show();
        },
        hide: function () {
          this.hasShoppingLayer && this.$el.hide();
        },
        click: function (e) {
          var t = i(e.currentTarget).closest("a");
          a.a.send(a.a.FavoriteStat.eventName.click, { pos: a.a.FavoriteStat.pos.site, order: t.data("order") + 1, outurl: t.prop("href"), page: 0 }, event);
        },
        mouseEnter: function () {
          this.favoriteSite.addClass("over"), this.$el.addClass("over");
        },
        mouseLeave: function () {
          this.favoriteSite.removeClass("over"), this.$el.removeClass("over");
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(178),
        a = n(14),
        s = n(1),
        o = n(5),
        r = (n(12), n(2)),
        l = e.View.extend({
          module: null,
          id: "d_layer_widget_migration",
          className: "layer_widget_migration",
          initialize: function () {
            this.events = { "click .d_btn_close": this.close, "click .d_btn_view_widget": this.moveContainer, dblclick: this.preventEvent };
          },
          setup: function () {
            (this.module = new i.a()), this.listenToOnce(this.module, "change", this.render), this.module.fetch();
          },
          preventEvent: function (e) {
            return e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1), !1;
          },
          moveContainer: function () {
            return this.close(), r.a.trigger("move:container", o.a.getMyzumPageCount()), !1;
          },
          render: function () {
            this.$el.html(this.module.getHtml()), a.a.addLayer("layer_widget_migration", this), this.open();
          },
          open: function () {
            this.module ? (a.a.show(), this.$el.show(), o.a.setData(s.a.Names.homeMigrationDate, new Date().getTime())) : this.setup();
          },
          close: function () {
            return this.$el.hide(), a.a.hide(), !1;
          },
        });
      t.a = new l();
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/layer",
        fetch: function () {
          e.Model.prototype.fetch.call(this, { dataType: "html", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { name: "homemigration" }) });
        },
        parse: function (e) {
          return { html: e };
        },
        getHtml: function () {
          return this.attributes.html;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(11), n(10), n(31), n(13);
      var s = n(49),
        o = n(5),
        r = n(180),
        l = n(181),
        c = n(188),
        u = n(190),
        h = n(191),
        d = n(196),
        p = n(197),
        m = n(198),
        f = n(204),
        _ = n(213),
        g = n(214),
        w = n(215),
        v = n(33),
        b = n(2),
        y = n(0),
        k = n(41);
      t.a = e.View.extend({
        news: null,
        photonews: null,
        $placeHolder: null,
        shopping: null,
        leftWingBanner: null,
        hub: null,
        tvzum: null,
        photoSlide: null,
        photoList: null,
        moveLeftToRight: null,
        moduleLength: 0,
        busyStatus: !1,
        initialize: function () {
          var e,
            t = this,
            n = zum.page;
          for (
            this.initializeDefinedModules(),
              this.$body = i("body"),
              s.a.add(/.*/, "container", a.bind(this.changeHash, this)),
              this.modules = new r.a(),
              this.listenTo(this.modules, "change", this.moduleUpdated),
              this.$placeHolder = this.$el.find("#container_placeholder"),
              this.initializeModules(n),
              this.events = i.extend(this.events, { dblclick: this.preventEvent }),
              this.isHomeHash() && (location.hash = "!/home"),
              this.currentHash = location.hash,
              this.fillerTracker = window.FillerTracker || [];
            this.fillerTracker.length;

          )
            (e = this.fillerTracker.pop()), this.fillers.view[e] && this.fillers.view[e].render(n);
          (this.fillerTracker.push = function () {
            var e = arguments[0],
              i = t.fillers.view[e];
            i && i.render(n);
          }),
            navigator.userAgent.match(/Mac|PPC/) && this.$body.addClass("mac-os");
        },
        initializeDefinedModules: function () {
          this.fixedManager = k.a;
        },
        refreshBrandingStation: function (e) {
          if (0 === e) {
            var t = "" | zum.userTarget.nc;
            this.initBrandingStation(),
              zum.isQa
                ? i.getScript("//adxv.zum.com/view/targets?slots=zeus_zum_main_initbanner_740,zeus_zum_main_br_widget_332&nc=" + t)
                : i.getScript("//adxv.zum.com/view/targets?slots=zum_main_initbanner_740,zum_main_br_widget_332&nc=" + t),
              b.a.trigger("check:bigbannerDefault"),
              b.a.trigger("check:brandingWidgetDefault"),
              i.getScript("//adxv.zum.com/view?slot=zum_main_leftwing"),
              i.getScript("//adxv.zum.com/view?slot=zum_main_rightbottom_300_100");
          }
        },
        initBrandingStation: function () {
          this.$el.find("#wrap_ad_main").html(""), this.initBrandingStationMiniSite(), this.$el.find("#banner_lefttop").html(""), this.$el.find("#adx_zum_main_leftwing").html("");
        },
        initBrandingStationMiniSite: function () {
          this.$el.find("#wrap_ad_minisite").html("");
        },
        preventEvent: function (e) {
          return e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1), !1;
        },
        showBoxContentsAndBanner: function () {
          this.shoppingFavoriteSite && this.shoppingFavoriteSite.show(),
            this.shopping && this.shopping.show(),
            this.showBoxContents(),
            this.showNewsboxTopBanner(),
            this.showLeftWingBanner(),
            this.showLeftBottomBanner();
        },
        hideBoxContentsAndBanner: function () {
          this.shoppingFavoriteSite && this.shoppingFavoriteSite.hide(),
            this.shopping && this.shopping.hide(),
            this.hideBoxContents(),
            this.hideNewsboxTopBanner(),
            this.hideLeftWingBanner(),
            this.hideLeftBottomBanner();
        },
        showBoxContents: function () {
          this.$el.find("#d_box_contents").show(), this.$el.find("#d_box_content_bottom").show();
        },
        hideBoxContents: function () {
          this.$el.find("#d_box_contents").hide(), this.$el.find("#d_box_content_bottom").hide();
        },
        showNewsboxTopBanner: function () {
          this.$el.find("#banner_lefttop").show();
        },
        hideNewsboxTopBanner: function () {
          this.$el.find("#banner_lefttop").hide();
        },
        showLeftWingBanner: function () {
          this.$el.find("#adx_zum_main_leftwing").show();
        },
        hideLeftWingBanner: function () {
          this.$el.find("#adx_zum_main_leftwing").hide();
        },
        showLeftBottomBanner: function () {
          this.$("#adx_zum_main_shoppingboxbottom2").show();
        },
        hideLeftBottomBanner: function () {
          this.$("#adx_zum_main_shoppingboxbottom2").hide();
        },
        onBusy: function () {
          this.busyStatus = !0;
        },
        offBusy: function () {
          this.busyStatus = !1;
        },
        isBusy: function () {
          return this.busyStatus;
        },
        closeLayer: function () {
          this.news && this.news.closeArticle();
        },
        createRankingBox: function () {
          0 == zum.page && (this.rankingBox = new l.a({ el: this.$el.find(".d_box_today_issue") }));
        },
        createNews: function () {
          var e = this;
          0 == zum.page && (this.photonews = new c.a({ el: this.$el.find(".d_box_photo_news") })),
            zum.layout[zum.page].useNews &&
              ((this.news = new f.a({ fixPopular: !zum.layout[zum.page].useShopping, photonews: this.photonews })),
              s.a.add(/.*/, "news", function (t) {
                t.news ? e.news.viewArticle(t.news, t) : e.news.closeArticle();
              }),
              s.a.start());
        },
        createLeftWingBanner: function () {
          0 == zum.page && (this.leftWingBanner = new p.a({ el: this.$el.find(".d_wing_banner") }));
        },
        createShopping: function () {
          var e = 0 == zum.page ? ".d_shopping_content_home" : ".d_shopping_content_myzum";
          zum.layout[zum.page].useNews && zum.layout[zum.page].useShopping && (this.shopping = new d.a({ el: this.$el.find(e) }));
        },
        createHub: function () {
          0 == zum.page && (this.hub = new m.a({ el: this.$el.find(".d_box_hub") }));
        },
        createShoppingFavoriteSite: function () {
          0 == zum.page && (this.shoppingFavoriteSite = new u.a({ el: this.$(".d_box_shopping_favorite") }));
        },
        createTvzum: function () {
          0 == zum.page && (this.tvzum = new _.a({ el: this.$(".tv_clips_wrap") }));
        },
        createPhotoSlide: function () {
          if (0 != this.$(".photo_slide").length && 0 === zum.page) {
            (this.photoSlide = new g.a({ $el: this.$(".photo_slide") })), (this.photoList = new w.a({ $el: this.$(".photo_list") }));
            var e = this,
              t = 0;
            i(window).scroll(
              a.throttle(function (n) {
                var a,
                  s = i(this).scrollTop() + i(this).height(),
                  o = i(".photo_slide"),
                  r = i(".photo_list");
                !e.news ||
                  !e.news.articleView ||
                  s < 1e3 ||
                  e.news.articleView.isArticleOn() ||
                  t >= 2 ||
                  !o.offset() ||
                  !r.offset() ||
                  ((a = o.offset().top),
                  s >= r.offset().top && t < 2
                    ? (y.a.send("@ABScrollView", { scrollPos: "front_photo_row2" }), (t = 2))
                    : s >= a && t < 1 && (y.a.send("@ABScrollView", { scrollPos: "front_photo_row1" }), (t = 1)));
              }, 300)
            );
          }
        },
        moduleUpdated: function (e) {
          e.attributes.reload
            ? ((e.attributes.reload = void 0), this.reload(e.attributes.id))
            : (this.modules.length >= this.moduleLength && this.render(e.attributes.id), (this.moduleLength = this.modules.length));
        },
        isHomeHash: function () {
          var e = location.hash;
          return !e || (-1 === e.indexOf("news") && -1 === e.indexOf("shopping") && -1 === e.indexOf("appstore"));
        },
        isHomeChangeHash: function () {
          return this.currentHash != location.hash && (!this.currentHash || -1 === this.currentHash.indexOf("news") || -1 === this.currentHash.indexOf("appstore"));
        },
        changeHash: function (e) {
          var t = this;
          t.currentHash &&
            (e.hasOwnProperty("news")
              ? (this.initBrandingStationMiniSite(),
                this.news &&
                  (this.news.viewArticle(e.news, e),
                  this.news.newsboxShow(),
                  i.setTimeout(function () {
                    t.hideBoxContentsAndBanner(), b.a.trigger("hide:footer");
                  }, zum.settings.nfd)))
              : e.hasOwnProperty("appstore")
              ? v.a.onHash(e)
              : this.isHomeChangeHash() &&
                (this.news && (this.news.newsboxShow(), this.news.closeArticle()),
                b.a.trigger("show:footer"),
                0 === zum.page && (this.refreshBrandingStation(0), b.a.trigger("show:favoritesite")),
                this.showBoxContentsAndBanner(),
                (document.title = "ZUM - 생각을 읽다, ZUM")),
            this.fixedManager.bindResizeWindow(),
            (this.currentHash = location.hash));
        },
        unloadModules: function (e) {
          this.news && this.news.unload(),
            this.photonews && this.photonews.stopRolling(),
            this.hub && this.hub.unload(),
            this.rankingBox && this.rankingBox.unload(),
            this.widget && (this.widget.destroy(), (this.widget = null)),
            this.localElectionView && this.localElectionView.unload();
        },
        initializeModules: function (e) {
          this.createNews(),
            this.createShopping(),
            this.createLeftWingBanner(),
            this.createShoppingFavoriteSite(),
            this.createHub(),
            this.createRankingBox(),
            this.createTvzum(),
            this.createPhotoSlide(),
            (this.widget = new h.a());
        },
        setBodyClass: function (e) {
          var t = o.a.getLayoutType(e),
            n = this.$el.find(".d_box_photo_news");
          this.$body.removeClass("myzum type_3a type_3b type_4 type_5 type_news_box"),
            e > 0 && (this.$body.addClass("myzum"), void 0 !== n && n.hide(), this.$body.addClass(t)),
            void 0 !== n && n.show();
        },
        render: function (e, t, n) {
          if ((void 0 !== t && (this.moveLeftToRight = t), this.modules.exists(e))) {
            i(document).scrollTop(0);
            var a = zum.page,
              s = e,
              r = null == this.moveLeftToRight ? a < s : this.moveLeftToRight,
              l = this.$el.find("#wrap_container"),
              c = l.css("opacity"),
              u = l.prop("class");
            this.$placeHolder.html(l.html().replace(/(<iframe.*?>.*?<\/iframe>)/g, "")),
              this.$placeHolder.prop("class", u).show(),
              l.hide().remove(),
              this.$el.append(this.modules.get(e).getHtml()),
              (l = this.$el.find("#wrap_container")),
              o.a.initializePageData(e),
              this.setBodyClass(e);
            var h = this,
              d = i(window).width(),
              p = function () {
                l.removeClass("ing_wrap_paging"),
                  h.$placeHolder.hide().html(""),
                  (h.moveLeftToRight = null),
                  h.unloadModules(e),
                  (h.initializeModulesTimeout = i.setTimeout(
                    function () {
                      h.initializeModules(e);
                    },
                    100,
                    h.initializeModulesTimeout
                  )),
                  h.refreshBrandingStation(e),
                  b.a.trigger("moveComplete:container", e);
              };
            zum.browser.ie67 || zum.browser.ie6
              ? p()
              : (this.$el.find("#d_box_contents").height(i(document.body).height()),
                l
                  .css({ opacity: 1, "margin-left": (r ? "" : "-") + d + "px" })
                  .show()
                  .addClass("ing_wrap_paging"),
                this.$placeHolder.css({ opacity: c, "margin-left": "0px" }),
                this.$placeHolder
                  .stop()
                  .animate({ "margin-left": (r ? "-" : "") + d + "px" }, 400)
                  .delay(300),
                l
                  .stop()
                  .show()
                  .animate({ "margin-left": "0px" }, 400)
                  .delay(300)
                  .queue(function () {
                    p();
                  }));
          } else this.modules.fetch(e);
        },
        removeContainer: function (e) {
          return zum.readonly || e < 1
            ? (this.offBusy(), !1)
            : o.a.getMyzumPageCount() <= 1
            ? (alert("마지막 1페이지는 삭제할 수 없습니다."), this.offBusy(), !1)
            : o.a.getMyzumPageCount() < e
            ? (this.offBusy(), !1)
            : (confirm("현재 페이지에 추가한 위젯, 뉴스가 전부 삭제됩니다.\n\n삭제 하시겠습니까?") && (b.a.trigger("remove:widgetPage"), o.a.removeShrinkPage(e)), void this.offBusy());
        },
        hideContainer: function (e) {
          if (!(e !== zum.page || "number" != typeof e || e < 0 || e > o.a.getMaxPage())) {
            for (var t = o.a.getMyzumPageCount() + 1, n = e; n <= t; n++) this.reset(n);
            var i = this.$el.find("#wrap_container");
            i.css({ opacity: 1 }),
              i
                .stop()
                .animate({ opacity: 0 }, 200)
                .queue(function () {
                  b.a.trigger("move:container", e - 1);
                });
          }
        },
        changeContainerLayout: function (e, t) {
          var n = this;
          (void 0 !== e.useShopping && 0 !== e.useShopping && 1 !== e.useShopping) ||
            (void 0 !== e.type && "3a" !== e.type && "3b" !== e.type && "4" !== e.type && "5" !== e.type) ||
            (void 0 === e.type && void 0 === e.useShopping) ||
            ((e.idx = o.a.safePage(e.idx)),
            0 !== e.idx &&
              (void 0 !== e.useShopping && o.a.setUseShopping(e.idx, e.useShopping),
              void 0 !== e.type &&
                o.a.setLayoutType(e.idx, e.type, function () {
                  n.reset(e.idx), n.modules.fetch(e.idx, !0).done(t);
                })));
        },
        reload: function (e) {
          var t = this;
          i(document).scrollTop(0);
          var n = this.$el.find("#wrap_container"),
            a = n.prop("class");
          this.$placeHolder.html("").prop("class", a).show(),
            n.hide().remove(),
            this.$el.append(this.modules.get(e).getHtml()),
            (n = this.$el.find("#wrap_container")),
            o.a.initializePageData(e),
            this.setBodyClass(e),
            this.$placeHolder
              .stop()
              .css({ opacity: 1 })
              .animate({ opacity: 0 }, 200)
              .queue(function () {
                t.$placeHolder.css({ opacity: 1 });
              }),
            n
              .stop()
              .css({ opacity: 0 })
              .show()
              .animate({ opacity: 1 }, 200)
              .queue(function () {
                n.removeClass("ing_wrap_paging"), t.$placeHolder.html(""), t.$placeHolder.hide(), t.unloadModules(e), t.initializeModules(e), b.a.trigger("moveComplete:container", e);
              });
        },
        reset: function (e) {
          this.modules.exists(e) && (this.modules.remove(this.modules.get(e)), this.moduleLength--);
        },
        clearInitializeModulesTimeout: function () {
          i.clearTimeout(this.initializeModulesTimeout);
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(122);
      t.a = e.Collection.extend({
        model: i.a,
        exists: function (e) {
          return !!this.get(e);
        },
        fetch: function (e, t) {
          var n = new i.a({ id: e, reload: t });
          return this.add(n), n.fetch();
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(9), n(11);
      var a = n(182),
        s = n(183),
        o = n(117),
        r = n(123),
        l = n(0);
      t.a = e.View.extend({
        rankingBoxIssueView: null,
        rankingBoxFortuneView: null,
        rankingBoxSearchLocationView: null,
        moveTab: "",
        initialize: function () {
          (this.module = new a.a()),
            this.listenTo(this.module, "change", this.render),
            (this.events = { "click .d_tab": this.tab, "click .d_date_tab": this.clickDateTab }),
            this.unload(),
            (this.rankingBoxIssueView = new s.a({ el: this.$(".d_box_today_issue") })),
            this.createView();
        },
        createView: function () {
          if ("issue" === this.moveTab) this.unload();
          else if ("weather" !== this.moveTab || this.rankingBoxIssueView)
            if ("fortune" !== this.moveTab || this.rankingBoxFortuneView)
              if ("stock" !== this.moveTab || this.rankingBoxIssueView)
                if ("shopping" !== this.moveTab || this.rankingBoxIssueView) {
                  this.unload();
                  var e = i(".d_ranking_info_tab .on").find("a").data("tab");
                  "weather" === e
                    ? ((this.rankingBoxSearchLocationView = new o.a({ el: i(".d_layer_weather_location") })), this.rankingBoxIssueView.rankingBoxInformationGroupView.startWeatherRolling())
                    : "fortune" === e
                    ? (this.unload(), (this.rankingBoxFortuneView = new r.a({ el: this.$(".d_rank_fortune") })))
                    : "stock" === e
                    ? this.unload()
                    : "shopping" === e && (this.unload(), this.rankingBoxIssueView.rankingBoxInformationGroupView.startShoppingRolling(!0));
                } else this.unload(), this.rankingBoxIssueView.rankingBoxInformationGroupView.startShoppingRolling(!0);
              else this.unload();
            else this.unload(), (this.rankingBoxFortuneView = new r.a({ el: this.$(".d_rank_fortune") }));
          else this.unload(), this.rankingBoxIssueView.rankingBoxInformationGroupView.startWeatherRolling();
        },
        move: function (e, t) {
          this.module.fetch(e), this.sendStat(e, t);
        },
        render: function () {
          "issue" === this.moveTab
            ? (this.$el.html(this.module.getHTML()),
              i(".issue_wrap  a", this.$el).each(function (e, t) {
                var n = i(t),
                  a = n.attr("href"),
                  s = -1 !== a.indexOf("?") ? "&" : "?";
                -1 === a.indexOf("cm=front_today_issue") &&
                  (-1 !== a.indexOf("search.zum")
                    ? n.attr("href", a + s + "cm=front_today_issue")
                    : -1 !== a.indexOf("zum.com") && n.attr("href", a + s + "cm=front_today_issue&r=" + (e + 1) + "&thumb=1"));
              }))
            : ("weather" === this.moveTab || "fortune" === this.moveTab || "stock" === this.moveTab || "shopping" === this.moveTab) && this.$el.html(this.module.getHTML()),
            this.createView(),
            this.toggleTab(this.moveTab);
        },
        tab: function (e) {
          var t = i(e.currentTarget),
            n = this.$(".d_issue_tab li.on .d_tab").data("tab");
          return (this.moveTab = t.data("tab")), n !== this.moveTab && this.move(this.moveTab, e), !1;
        },
        toggleTab: function (e) {
          "weather" === e
            ? (this.$el.find(".today_tab_weather").addClass("on").siblings().removeClass("on"), this.$el.find(".d_today_box").hide(), this.$el.find(".d_rank_weather").show())
            : "fortune" === e
            ? (this.$el.find(".today_tab_fortune").addClass("on").siblings().removeClass("on"), this.$el.find(".d_today_box").hide(), this.$el.find(".d_rank_fortune").show())
            : "stock" === e
            ? (this.$el.find(".today_tab_stock").addClass("on").siblings().removeClass("on"), this.$el.find(".d_today_box").hide(), this.$el.find(".d_rank_stock").show())
            : "shopping" === e && (this.$el.find(".today_tab_shopping").addClass("on").siblings().removeClass("on"), this.$el.find(".d_today_box").hide(), this.$el.find(".d_rank_shopping").show());
        },
        sendStat: function (e, t) {
          l.a.send(l.a.RankingBoxStat.eventName.click, l.a.RankingBoxStat.appendStat({ cm: l.a.RankingBoxStat.cm[e].tab }), t);
        },
        unload: function () {
          this.rankingBoxIssueView &&
            (this.rankingBoxIssueView.rankingBoxInformationGroupView.stopWeatherRolling(),
            this.rankingBoxIssueView.rankingBoxInformationGroupView.stopShoppingRolling(),
            this.rankingBoxIssueView.unload());
        },
        clickDateTab: function (e) {
          l.a.send(l.a.RankingBoxStat.eventName.click, l.a.RankingBoxStat.appendStat({ cm: "calendar" }), e);
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/rankingBox",
        fetch: function (t) {
          e.Model.prototype.fetch.call(this, { dataType: "html", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { rankingBoxTab: t }) });
        },
        parse: function (e) {
          return { html: e };
        },
        getHTML: function () {
          return this.attributes.html;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(76);
      var a = n(184);
      n(117);
      t.a = e.View.extend({
        rankingBoxIssueKeywordView: null,
        rankingBoxInformationGroupView: null,
        rankingBoxSearchLocationView: null,
        initialize: function () {
          (this.events = { "click .d_prev": this.prev, "click .d_next": this.next }), (this.rankingBoxInformationGroupView = new a.a({ el: i(".d_box_today_issue") }));
        },
        prev: function (e) {
          return this.rankingBoxIssueKeywordView.prev(e), !1;
        },
        next: function (e) {
          return this.rankingBoxIssueKeywordView.next(!1, e), !1;
        },
        unload: function () {
          this.rankingBoxIssueKeywordView && this.rankingBoxIssueKeywordView.unload(), this.rankingBoxInformationGroupView && this.rankingBoxInformationGroupView.unload();
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(17);
      var s = n(2),
        o = n(0);
      n(6);
      t.a = e.View.extend({
        rollingID: null,
        $layerWeatherLocation: i(".d_layer_weather_location"),
        $locationResult: i(".d_layer_weather_location .location_result .location"),
        rollingCount: 0,
        rollingInterval: 4e3,
        weatherRollingID: null,
        weatherRollingInterval: 3e3,
        shoppingRollingID: null,
        shoppingRollingCount: 0,
        shoppingRollingInterval: 7e3,
        shoppingRollingMaxCount: 0,
        shoppingPopUpSeq: 0,
        initialize: function () {
          (this.events = {
            "click #btn_information_group": this.clickInformationGroup,
            "click .d_btn_location": this.clickSearchLocation,
            "click .d_ranking_info_tab li": this.clickRankingInfoTab,
            "click .d_shopping_prev": this.clickShoppingPrev,
            "click .d_shopping_next": this.clickShoppingNext,
            "click .click_delay": this.clickShoppingItem,
            "mouseenter .d_shopping_box": this.mouseEnterShoppingBox,
            "mouseleave .d_shopping_box": this.mouseLeaveShoppingBox,
          }),
            this.listenTo(
              s.a,
              "on:initRolling",
              a.bind(function () {
                this.rollingInit();
              }, this)
            ),
            this.listenTo(
              s.a,
              "change:weatherData",
              a.bind(function (e) {
                this.mappingWeatherData(e);
              }, this)
            ),
            this.startRolling();
        },
        clickRankingInfoTab: function (e) {
          var t = i(e.currentTarget);
          t.addClass("on").siblings().removeClass("on");
          var n = "";
          t.hasClass("today_tab_weather")
            ? (this.$el.find(".d_info_cont_weather").show(),
              this.$el.find(".d_info_cont_stock").hide(),
              this.$el.find(".d_info_list_weather_type").first().addClass("on").siblings().removeClass("on"),
              (this.rollingCount = 0),
              (n = o.a.RankingBoxStat.cm.more_info.weather_switch))
            : (this.$el.find(".d_info_cont_weather").hide(),
              this.$el.find(".d_info_cont_stock").show(),
              this.$el.find(".d_info_list_stock_type").first().addClass("on").siblings().removeClass("on"),
              (this.rollingCount = 2),
              (n = o.a.RankingBoxStat.cm.more_info.stock_switch)),
            o.a.send(o.a.RankingBoxStat.eventName.click, { cm: n, pos: o.a.RankingBoxStat.pos }, e);
        },
        startRolling: function () {
          a.isNull(this.rollingID) &&
            (this.rollingID = i.setInterval(
              a.bind(function () {
                this.rollingProcess();
              }, this),
              this.rollingInterval,
              this.rollingID
            ));
        },
        rollingInit: function () {
          this.stopRolling(), (this.rollingCount = -1), this.rollingProcess(), this.startRolling();
        },
        rollingProcess: function () {
          var e = i(".d_info_list").find("li");
          e.removeClass("on"), this.rollingCount++, this.rollingCount >= e.length && (this.rollingCount = 0), e.eq(this.rollingCount).addClass("on");
        },
        stopRolling: function () {
          i.clearInterval(this.rollingID), (this.rollingID = null);
        },
        clickInformationGroup: function (e) {
          e.preventDefault();
          var t = i(".d_info_list").find("li.on"),
            n = i(".d_info_main"),
            a = i(".d_ranking_info_tab"),
            s = t.hasClass("d_info_list_weather_type"),
            r = i(".d_rank_information"),
            l = r.hasClass("info_more");
          if (
            (s
              ? (a.find("li.d_info_tab_weather_type").addClass("on").siblings().removeClass("on"), n.find(".d_info_cont_weather").show(), n.find(".d_info_cont_stock").hide())
              : (a.find("li.d_info_tab_stock_type").addClass("on").siblings().removeClass("on"), n.find(".d_info_cont_weather").hide(), n.find(".d_info_cont_stock").show()),
            i(".d_tab_li.on").removeClass("on"),
            l)
          ) {
            r.removeClass("info_more");
            var c = i(".d_box_today_issue");
            c.find(".today_tab_issue").addClass("on").siblings().removeClass("on"), c.find(".d_rank_search_keyword").show(), c.find(".d_rank_fortune").hide(), this.startRolling();
          } else r.addClass("info_more"), this.stopRolling();
          var u = this.choiceCM(s, l);
          return o.a.send(o.a.RankingBoxStat.eventName.click, o.a.RankingBoxStat.appendStat({ cm: u }), e), !1;
        },
        choiceCM: function (e, t) {
          return t
            ? e
              ? o.a.RankingBoxStat.cm.more_btn.weather_close
              : o.a.RankingBoxStat.cm.more_btn.stock_close
            : e
            ? o.a.RankingBoxStat.cm.more_btn.weather_open
            : o.a.RankingBoxStat.cm.more_btn.stock_open;
        },
        clickSearchLocation: function (e) {
          return e.preventDefault(), s.a.trigger("on:searchLocation"), o.a.send(o.a.RankingBoxStat.eventName.click, o.a.RankingBoxStat.appendStat({ cm: "info_loc_open" }), e), !1;
        },
        mappingWeatherData: function (e) {
          var t = e.weather,
            n = e.atmosphere;
          this.$el
            .find(".d_btn_weather")
            .attr("href", "https://search.zum.com/search.zum?query=" + encodeURIComponent(t.rollingAreaName + " 날씨") + "&qm=g_today.top&type=weather&rc=weather&method=uni&option=accu"),
            this.$el.find(".d_weather_local").text(t.rollingAreaName),
            this.$el
              .find(".location_text")
              .attr("href", "https://search.zum.com/search.zum?query=" + encodeURIComponent(t.totalName + " 날씨") + "&qm=g_today.top&type=location&rc=weather&method=uni&option=accu"),
            this.$el
              .find(".weather_more")
              .attr("href", "https://search.zum.com/search.zum?query=" + encodeURIComponent(t.totalName + " 날씨") + "&qm=g_today.top&type=location&rc=weather&method=uni&option=accu"),
            this.$el.find(".location_text").text(t.totalName),
            this.$el
              .find(".icon_weather")
              .removeClass()
              .addClass("icon_weather w_" + t.nowIcon),
            this.$el.find(".temperature strong").text(t.nowTemp),
            this.$el.find(".temperature_now strong").text(t.nowTemp),
            this.$el.find(".d_weather_text").text(t.nowText),
            this.$el.find(".d_weather_message").text(t.randomWeatherMessage),
            this.$el.find(".d_temperature_day_lowest").html("<span>" + t.minTemp + "</span>°"),
            this.$el.find(".d_temperature_day_highest").html("<span>" + t.maxTemp + "</span>°"),
            this.$el
              .find(".state")
              .removeClass()
              .addClass("state state_" + n.weatherLevel.lowerName),
            this.$el.find(".state .d_atmosphere_text").text(n.weatherLevel.value),
            this.$locationResult.text(t.rollingAreaName);
        },
        unload: function () {
          this.stopRolling(), this.stopShoppingRolling();
        },
        clickShoppingPrev: function (e) {
          if (e) {
            o.a.send("@ShoppingZumTodayClick", { pos: "paging" }, e);
          }
          this.shoppingRollingCount--,
            (this.shoppingRollingMaxCount = i(".today_shopping_list").size() - 1),
            this.shoppingRollingCount < 0 && (this.shoppingRollingCount = this.shoppingRollingMaxCount),
            this.pageRender(e);
        },
        clickShoppingNext: function (e) {
          if (e) {
            o.a.send("@ShoppingZumTodayClick", { pos: "paging" }, e);
          }
          this.shoppingRollingCount++,
            (this.shoppingRollingMaxCount = i(".today_shopping_list").size() - 1),
            this.shoppingRollingCount > this.shoppingRollingMaxCount && (this.shoppingRollingCount = 0),
            this.pageRender(e);
        },
        pageRender: function (e) {
          if ((this.$el.find(".today_shopping_list").hide(), this.$el.find(".shopping_list_" + this.shoppingRollingCount).show(), e)) {
            var t = i(".today_shopping_list:visible").find("li a"),
              n = {
                items: [
                  { row: i(t[0]).data("row"), col: i(t[0]).data("col"), id: i(t[0]).data("id") },
                  { row: i(t[1]).data("row"), col: i(t[1]).data("col"), id: i(t[1]).data("id") },
                  { row: i(t[2]).data("row"), col: i(t[2]).data("col"), id: i(t[2]).data("id") },
                ],
                shoppingPage: i(".today_shopping_list:visible").data("page") + 1,
              };
            o.a.send("@ShoppingZumTodayPageView", n);
          }
        },
        clickShoppingItem: function (e) {
          e.preventDefault();
          var t = i(e.currentTarget),
            n = { shoppingPage: t.data("page") + 1, pos: t.data("pos"), id: t.data("id"), row: t.data("row"), col: t.data("col"), outurl: t.attr("href") };
          o.a.send(t.data("statEvent"), n, e), this.shoppingPopUpSeq++, window.open(t.attr("href"), "shoppingPop" + this.shoppingPopUpSeq);
        },
        startShoppingRolling: function (e) {
          var t = this;
          if (e) {
            var n = i(".today_shopping_list:visible").find("li a"),
              a = {
                items: [
                  { row: i(n[0]).data("row"), col: i(n[0]).data("col"), id: i(n[0]).data("id") },
                  { row: i(n[1]).data("row"), col: i(n[1]).data("col"), id: i(n[1]).data("id") },
                  { row: i(n[2]).data("row"), col: i(n[2]).data("col"), id: i(n[2]).data("id") },
                ],
                shoppingPage: i(".today_shopping_list:visible").data("page") + 1,
              };
            o.a.send("@ShoppingZumTodayPageView", a);
          }
          t.shoppingRollingID = setInterval(function () {
            t.clickShoppingNext();
          }, t.shoppingRollingInterval);
        },
        stopShoppingRolling: function () {
          clearInterval(this.shoppingRollingID);
        },
        mouseEnterShoppingBox: function () {
          this.stopShoppingRolling();
        },
        mouseLeaveShoppingBox: function () {
          this.startShoppingRolling();
        },
        startWeatherRolling: function () {
          this.weatherRollingID = setInterval(function () {
            i(".weather_wrap .air_pollution:visible").size() > 0 ? i(".weather_wrap .air_pollution").hide() : i(".weather_wrap .air_pollution").show();
          }, this.weatherRollingInterval);
        },
        stopWeatherRolling: function () {
          clearInterval(this.weatherRollingID);
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/rankingBox",
        fetch: function () {
          e.Model.prototype.fetch.call(this, { dataType: "json", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { rankingBoxData: "weatherLocation" }) });
        },
        parse: function (e) {
          return { json: e };
        },
        getJSON: function () {
          return this.attributes.json;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/rankingBox",
        fetch: function (t) {
          e.Model.prototype.fetch.call(this, { dataType: "json", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { rankingBoxData: "customWeather", reg: t }) });
        },
        parse: function (e) {
          return { json: e };
        },
        getJSON: function () {
          return this.attributes.json;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/rankingBox",
        fetch: function (t, n) {
          e.Model.prototype.fetch.call(this, { dataType: "json", async: !1, data: i.extend({}, a.a.getAjaxCommonRequestParam(), { rankingBoxData: t, fortuneIndex: n }) });
        },
        parse: function (e) {
          return { json: e };
        },
        getJSON: function () {
          return this.attributes.json;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(11), n(21), n(10), n(36), n(13), n(23), n(17);
      var s = n(189),
        o = (n(20), n(0));
      t.a = e.View.extend({
        currentPage: 0,
        viewPage: 1,
        totalPage: 2,
        direction: "",
        newTabSeq: 0,
        isNewsLink: !1,
        $photolist: null,
        $issueKeyword: null,
        rollingInterval: 14e3,
        rollingIntervalFirst: 14e3,
        initialize: function () {
          (this.module = new s.a({ id: 0 })),
            (this.events = {
              "mousedown .d_photonewslink": this.changeNewsLink,
              "click .d_photonewslink": this.clickNewsLink,
              "click .prev": this.prev,
              "click .next": this.next,
              "click .d_side_prev": this.prev,
              "click .d_side_next": this.next,
              "mouseenter .dot_paging a": this.dotMouseEnter,
              "mousedown .d_link_news_home": this.clickNewsHomeLinkStat,
              "mousedown .news_ad_slot a": this.clickNewsAdSlot,
            }),
            (this.$photolist = this.$el.find(".d_photolist")),
            (this.$issueKeyword = i(".issue_keyword_wrap")),
            (this.totalPage = this.$photolist.data("total")),
            (this.currentPage = 0),
            this.$el.closest(".hot_topic_box").on("mouseenter", a.bind(this.pauseRolling, this)),
            this.$el.closest(".hot_topic_box").on("mouseleave", a.bind(this.resetRolling, this)),
            this.$el.closest(".wrap_fixed").children(".issue_keyword_wrap").on("mouseenter", a.bind(this.pauseRolling, this)),
            this.$el.closest(".wrap_fixed").children(".issue_keyword_wrap").on("mouseleave", a.bind(this.resetRolling, this)),
            this.$el.closest(".hot_topic_box").on("mouseenter", function (e) {
              void 0 === e.isTrigger && i("#zum-newsBox").find(".news_list").trigger("mouseenter");
            }),
            this.$el.closest(".hot_topic_box").on("mouseleave", function (e) {
              void 0 === e.isTrigger && i("#zum-newsBox").find(".news_list").trigger("mouseleave");
            }),
            this.$el
              .closest(".wrap_fixed")
              .children(".issue_keyword_wrap")
              .on("mouseenter", function (e) {
                void 0 === e.isTrigger && i("#zum-newsBox").find(".news_list").trigger("mouseenter");
              }),
            this.$el
              .closest(".wrap_fixed")
              .children(".issue_keyword_wrap")
              .on("mouseleave", function (e) {
                void 0 === e.isTrigger && i("#zum-newsBox").find(".news_list").trigger("mouseleave");
              }),
            this.startRolling();
        },
        prev: function (e) {
          return (
            this.currentPage--,
            this.currentPage < 0 && (this.currentPage = this.totalPage - 1),
            i(".page_num > strong").html(this.currentPage + 1),
            0 == this.currentPage ? this.$issueKeyword.addClass("issue-default") : this.$issueKeyword.removeClass("issue-default"),
            this.viewPage--,
            this.viewPage < 1 && (this.viewPage = this.totalPage),
            this.$photolist.hide(),
            i(this.$photolist[this.currentPage]).show(),
            this.$el.find(".dot").removeClass("on"),
            i("#topic_dot_" + this.viewPage).addClass("on"),
            o.a.send("@Click", { pos: i(e.currentTarget).data("pos"), cm: "paging" }, e),
            (this.direction = "prev"),
            !1
          );
        },
        next: function (e) {
          return (
            this.currentPage++,
            this.currentPage >= this.totalPage && (this.currentPage = 0),
            i(".page_num > strong").html(this.currentPage + 1),
            0 == this.currentPage ? this.$issueKeyword.addClass("issue-default") : this.$issueKeyword.removeClass("issue-default"),
            this.viewPage++,
            this.viewPage > this.totalPage && (this.viewPage = 1),
            this.$photolist.hide(),
            i(this.$photolist[this.currentPage]).show(),
            this.$el.find(".dot").removeClass("on"),
            i("#topic_dot_" + this.viewPage).addClass("on"),
            e && o.a.send("@Click", { pos: i(e.currentTarget).data("pos"), cm: "paging" }, e),
            (this.direction = "next"),
            !1
          );
        },
        dotMouseEnter: function (e) {
          var t = i(e.currentTarget).text();
          return (
            (this.currentPage = t - 1),
            (this.viewPage = t),
            this.$photolist.hide(),
            i(this.$photolist[this.currentPage]).show(),
            this.$el.find(".dot").removeClass("on"),
            i("#topic_dot_" + this.viewPage).addClass("on"),
            (this.direction = "next"),
            !1
          );
        },
        rollingNext: function () {
          return (
            this.currentPage++,
            this.currentPage >= this.totalPage && (this.currentPage = 0),
            i(".page_num > strong").html(this.currentPage + 1),
            0 == this.currentPage ? this.$issueKeyword.addClass("issue-default") : this.$issueKeyword.removeClass("issue-default"),
            this.viewPage++,
            this.viewPage > this.totalPage && (this.viewPage = 1),
            this.$photolist.hide(),
            i(this.$photolist[this.currentPage]).show(),
            this.$el.find(".dot").removeClass("on"),
            i("#topic_dot_" + this.viewPage).addClass("on"),
            this.$el.find(".d_page").text(this.viewPage),
            (this.direction = "next"),
            !1
          );
        },
        changeNewsLink: function (e) {
          var t = "";
          e.target ? (t = i(e.target).closest("a")[0].href) : "string" == typeof e && (t = e),
            (this.isNewsLink = t.indexOf("//news.zum.com/photo") <= -1 && -1 !== t.indexOf("//news.zum.com")),
            this.changeHotIssueUrl(e);
        },
        clickNewsLink: function (e) {
          e.preventDefault();
          var t = this.changeHotIssueUrl(e);
          if (location.href == t) return !1;
          if (e) {
            var n = i(e.target).closest("a"),
              a = n.data("kn"),
              s = n.data("ol"),
              r = n.data("id"),
              l = n.data("index"),
              c = (this.viewPage < 10 ? "0" : "") + this.viewPage;
            "false" === n.data("advertise").toString() &&
              o.a.send(
                "@Click",
                {
                  articleId: r,
                  pos: i(e.currentTarget).data("pos"),
                  cm: "item",
                  title: i(e.currentTarget).find(".text").text(),
                  r: l,
                  pnpage: c,
                  isSlide: "2" == a,
                  isOutlink: t.indexOf("//news.zum.com/photo") <= -1 && ("O" == s || "I" == s),
                  outurl: t,
                },
                e
              );
          }
          if (this.isNewsLink) location.href = t;
          else {
            if ("_self" === i(e.target).closest("a").attr("target")) return (location.href = t);
            if (-1 == navigator.appVersion.indexOf("Chrome")) {
              var u = "hottopic" + this.newTabSeq;
              this.newTabSeq++, (window.open("", u).location.href = t);
            } else window.open(t, "");
          }
        },
        clickNewsHomeLinkStat: function (e) {
          if (1 !== e.which) return !0;
          var t = i(e.target).closest("a").attr("href");
          o.a.send("@Click", { pos: "pn_home_main", outurl: t }, e);
        },
        clickNewsAdSlot: function (e) {
          if ((e.preventDefault(), 1 !== e.which)) return !0;
          var t = i(e.target).closest("a").attr("href");
          if ((o.a.send("@Click", { cm: "ad_native", pos: "pn_article_view", outurl: t }, e), -1 == navigator.appVersion.indexOf("Chrome"))) {
            var n = "hottopicAd" + this.newTabSeq,
              a = window.open("", n);
            this.newTabSeq++, (a.location.href = t);
          } else window.open(t, "");
        },
        render: function (e) {
          var t = this;
          this.module.fetch(e, this.viewPage, this.direction),
            setTimeout(
              a.bind(function () {
                "" != t.module.getHtml()
                  ? ((t.currentPage = e),
                    t.$el.html(t.module.getHtml()),
                    (t.$photolist = t.$el.find(".d_photolist")),
                    (t.totalPage = t.$el.find(".d_photolist").data("total")),
                    (t.viewPage = 1),
                    t.$el.find(".d_page").text(t.viewPage),
                    t.$issueKeyword.addClass("issue-default"))
                  : this.rollingNext(),
                  t.startRolling();
              }, t),
              500
            );
        },
        show: function () {
          this.$el.show();
        },
        hide: function () {
          this.$el.hide();
        },
        unload: function () {},
        _preventRolling: !1,
        rollingIntervalId: 0,
        resetRolling: function () {
          this.rolling();
        },
        rolling: function () {
          var e = this.rollingInterval;
          0 == this.currentPage ? (e = this.rollingIntervalFirst) : this.viewPage == this.totalPage && (e -= 500),
            i.clearTimeout(this.rollingIntervalId),
            (this.rollingIntervalId = i.setTimeout(
              a.bind(function () {
                this.isRollableState() && (this.viewPage == this.totalPage ? this.render(0) : (this.rollingNext(), this.startRolling()));
              }, this),
              e,
              0,
              this.rollingIntervalId
            ));
        },
        pauseRolling: function () {
          i.clearTimeout(this.rollingIntervalId);
        },
        startRolling: function () {
          (this._preventRolling = !1), this.rolling();
        },
        stopRolling: function () {
          (this._preventRolling = !0), i.clearTimeout(this.rollingIntervalId);
        },
        isVisible: function () {
          return this.$el.parent().is(":visible");
        },
        isRollableState: function () {
          return !1 === this._preventRolling && this.isVisible();
        },
        changeHotIssueUrl: function (e, t) {
          var n = "",
            s = null;
          if (e.target) {
            if ((s = i(e.target).closest("a")[0]).__newsLinkChanged) return s.href;
            n = s.href;
          } else "string" == typeof e && (n = e);
          var o = n.indexOf("?"),
            r = n.indexOf("//news.zum.com/photo") <= -1 && -1 !== n.indexOf("//news.zum.com");
          if (r && o > -1) {
            var l = n.substr(o + 1).split("&"),
              c = {};
            if (l && l.length > 0)
              for (var u = 0; u < l.length; u++)
                if (l[u]) {
                  var h = l[u].split("=");
                  h && 2 == h.length && (c[h[0]] = h[1]);
                }
            var d = n.indexOf("/articles/");
            r && -1 !== d && (c.id = n.substr(d + "/articles/".length).split("?")[0]),
              ((c = a.extend(c, t)).news = c.id),
              "front_rb_popular" == c.cm && (c.fm = "mny"),
              delete c.id,
              c.news && (n = location.href.replace(location.hash, "") + "#!/" + i.param(c));
          }
          return s && (s.href = n), n;
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/hotissue",
        defaults: { html: "", fetchTime: 0 },
        fetch: function (t, n, s) {
          e.Model.prototype.fetch.call(this, { dataType: "json", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { mp: t || "0", direction: s || "" }) });
        },
        parse: function (e) {
          return { html: e, fetchTime: +new Date() };
        },
        getHtml: function () {
          return this.attributes.html;
        },
        isValid: function () {
          return this.attributes.fetchTime > +new Date() - 200;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(0),
        s = n(6);
      t.a = e.View.extend({
        initialize: function () {
          this.events = { "click .d_shopping_favorite_logo": this.clickFavoriteSite };
        },
        clickFavoriteSite: function (e) {
          var t = i(e.currentTarget),
            n = t.prop("href");
          return s.a.movePage(n, "_blank"), a.a.send(a.a.FavoriteStat.eventName.click, { pos: a.a.FavoriteStat.pos.shopping, order: t.data("order"), outurl: n }, e), !1;
        },
        show: function () {
          this.$el.show();
        },
        hide: function () {
          this.$el.hide();
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(192),
        s = n(195);
      n(5), n(155);
      t.a = e.View.extend({
        initialize: function () {
          (this.collection = new s.a()), (this.widgetListView = new a.a({ el: i("#box_list"), collection: this.collection }));
        },
        show: function () {
          this.widgetListView.show();
        },
        hide: function () {
          this.widgetListView.hide();
        },
        destroy: function () {
          this.widgetListView.destroy(), this.collection.unbind(), this.undelegateEvents(), this.remove();
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a, s) {
      n(86), n(9), n(11), n(59);
      var o,
        r = n(124),
        l = n(51),
        c = n(14),
        u = n(61),
        h = n(5),
        d = n(1),
        p = n(33),
        m = n(125),
        f = n(2),
        _ = n(0),
        g = e.View.extend(
          {
            widgets: [],
            initialize: function () {
              var e = this;
              if (
                ((this.widgets = []),
                this.initTimer(),
                window.$zumapp.options.reset(),
                window.$zumapp.setTickInterval(g.GADGET_TICK),
                (this.width = parseInt(this.$el.data("width"))),
                (this.height = parseInt(this.$el.data("height"))),
                (this.maxHeight = parseInt(this.$el.data("maxheight"))),
                (this.maxLength = this.width * this.maxHeight),
                !(this.$el.length < 1))
              ) {
                this.$el.children("li").each(function (t) {
                  var n = i(this),
                    a = new l.a(l.a.makeDataByElement(n));
                  e.collection.add(a), e.widgets.push(new r.a({ model: a, el: i(this) }));
                }),
                  this.listenTo(this.collection, "add", this.onAddWidget),
                  this.listenTo(f.a, "add:widgetLine", this.addLine),
                  this.listenTo(f.a, "remove:widgetLine", this.delLine),
                  this.listenTo(f.a, "remove:widgetPage", this.delPage),
                  c.a.isShownByKey("widgetstore")
                    ? (this.collection.sync(), this.listenTo(c.a.get("widgetstore"), "install", this.install), this.listenTo(c.a.get("widgetstore"), "checkRefineBox", this.checkRefineBox))
                    : (this.listenTo(c.a, "layershow:widgetstore", function (t) {
                        e.listenTo(t, "install", e.install), e.listenTo(t, "checkRefineBox", e.checkRefineBox);
                      }),
                      this.listenTo(c.a, "layerhide:widgetstore", function (t) {
                        e.stopListening(t);
                      })),
                  zum.readonly || this.sortableInitialize(),
                  this.displayLineBtn();
                var t = [],
                  n = [];
                this.collection.each(function (e) {
                  var i = e.get("boxinfo");
                  a.isObject(i) && (i = a.isUndefined(i.link) ? JSON.stringify(i) : i.link), e.get("prefs") && n.push(i), t.push(i);
                }),
                  u.a.pageView(t, n);
              }
            },
            initTimer: function () {
              var e = this;
              this.timer = i.setInterval(
                function () {
                  e.collection.each(function (e) {
                    if (e.isGadget()) {
                      var t = e.get("zumapp");
                      t && t.refresh.tick();
                    }
                  });
                },
                1e3 * g.GADGET_TICK,
                0,
                g.TICK_TIMER_ID
              );
            },
            destroy: function () {
              a.each(this.widgets, function (e) {
                e.destroy();
              }),
                this.undelegateEvents(),
                this.remove(),
                this.timer && i.clearTimeout(g.TICK_TIMER_ID);
            },
            onAddWidget: function (e, t, n) {
              var o;
              "empty" == e.get("type") && (o = i(s.templates.app_box_empty()));
              var l = new r.a({ model: e, el: o });
              this.widgets.push(l), a.isNumber(n.at) || (n.at = this.collection.indexOf(e));
              var c = this.$el.children("li").eq(n.at);
              c.length < 1
                ? this.$el
                    .children("li")
                    .eq(n.at - 1)
                    .after(l.$el)
                : c.before(l.$el);
            },
            show: function () {
              this.$el.show();
            },
            hide: function () {
              this.$el.hide();
            },
            addLine: function () {
              if (this.height >= this.maxHeight) return !1;
              for (var e = 0; e < this.width; e++) this.collection.insertEmptyBox();
              this.height++, this.displayLineBtn(), this.collection.sync();
            },
            delLine: function () {
              if (this.collection.getBoxesLength() <= this.width) return !1;
              for (var e = [], t = 1, n = 0; n < this.width; t++) {
                var s = this.collection.at(this.collection.length - t);
                e.push(s), (n += s.get("boxwidth"));
              }
              var o = !1,
                r = { appInfo: [], index: [] };
              if (
                (i.each(e, function (e, t) {
                  if (!t.isEmpty()) {
                    o = !0;
                    var n = t.attributes.boxinfo,
                      i = t.attributes.boxposition;
                    r.appInfo.push(a.isString(n) ? n : JSON.stringify(n)), r.index.push(i);
                  }
                }),
                o && !confirm("삭제하려는 행에 위젯이 있습니다. 삭제하시겠습니까?"))
              )
                return !1;
              this.collection.remove(e), this.height--, this.collection.sync(), this.displayLineBtn(), _.a.send(_.a.WidgetStat.eventName.appDelete, r);
            },
            delPage: function () {
              var e = { appInfo: [], index: [] };
              a.each(this.collection.models, function (t) {
                if (!t.isEmpty()) {
                  var n = t.attributes.boxinfo,
                    i = t.attributes.boxposition;
                  e.appInfo.push(a.isString(n) ? n : JSON.stringify(n)), e.index.push(i);
                }
              }),
                _.a.send(_.a.WidgetStat.eventName.appDelete, e);
            },
            getFirstEmptyByWidth: function (e) {
              if (e > this.width) throw "위젯의 폭은 리스트의 폭보다 클 수 없습니다";
              for (var t = 0; t < this.collection.length; t++) {
                var n = this.collection.at(t);
                if (n.isEmpty()) {
                  if (1 == e) return n;
                  if (!(e > this.width - (n.get("boxposition") % this.width))) {
                    for (var i = !0, s = 1; s < e; s++) {
                      var o = this.collection.at(t + s);
                      if (a.isUndefined(o) || !o.isEmpty()) {
                        i = !1;
                        break;
                      }
                    }
                    if (i) return n;
                  }
                }
              }
              return null;
            },
            getInstallableModel: function (e, t) {
              if (!e) return null;
              if (t > this.width) return null;
              if (!e.isInstallable()) return null;
              if (1 == t) return e;
              var n = this.collection.indexOf(e);
              if ((e.get("boxposition") % this.width) + t > this.width) return this.getInstallableModel(this.collection.at(n - 1), t);
              for (var i = !0, a = 1; a < t; a++) {
                if (!this.collection.at(n + a).isEmpty()) {
                  i = !1;
                  break;
                }
              }
              return 0 != e.get("boxposition") % this.width && !1 === i ? this.getInstallableModel(this.collection.at(n - 1), t) : i ? e : null;
            },
            sortableInitialize: function () {
              var e = this;
              try {
                this.$el.sortable("destroy");
              } catch (e) {}
              this.$el.sortable({
                containment: zum.browser.ie6 ? "parent" : "body",
                appendTo: zum.browser.ie6 ? "parent" : "body",
                distance: 0,
                helper: function (e, t) {
                  if (zum.browser.msie && 7 === parseInt(zum.browser.version, 10)) {
                    n = i("<div></div>");
                    n.attr("class", t.attr("class")), n.html(t.html()), n.find("iframe,script").remove();
                  } else {
                    var n = t.clone();
                    n.find("iframe,script").remove(), n.css({ "list-style": "none" });
                  }
                  return i(zum).trigger("startEdit:appManager"), n;
                },
                opacity: 0.2,
                revert: 100,
                scroll: !0,
                handle: "h3",
                tolerance: "intersect",
                zIndex: 3e3,
                change: function (t, n) {
                  e.sortAfterChangingLongApp(n.item);
                },
                start: function (e, t) {
                  t.item.find("script").remove(), (o = t.item.index());
                },
                stop: function (t, n) {
                  var a = n.item.index();
                  if (
                    ((e.inMove = !1),
                    o !== a &&
                      (e.$el.children("li").each(function (e) {
                        i(this).data("model").set("index", e);
                      }),
                      e.collection.sort(),
                      e.collection.sync()),
                    o !== n.item.index())
                  ) {
                    var s = {
                      appInfo: n.item.data("boxinfo"),
                      from: o,
                      to: n.item.index(),
                      hbv: h.a.getData(d.a.Names.homeBoxesVersion),
                      page: zum.page,
                      layout: h.a.getLayoutType(),
                      puid: window.puid || "",
                      variants: window.variantsStat || [],
                      targets: window.targetsStat || [],
                    };
                    ESTatTracker.push(["@AppMove", s]);
                  }
                },
              });
            },
            CLASSNAME_APP: "box_app",
            CLASSNAME_LONGAPP: "box_long_app",
            sortAfterChangingLongApp: function (e) {
              for (var t = this.width, n = !1; !n; ) {
                for (
                  var a = e.siblings().filter(function () {
                      return "none" != i(this).css("display");
                    }),
                    s = null,
                    o = t,
                    r = 0;
                  r < a.length;
                  r++
                ) {
                  var l = a.eq(r);
                  if ((l.hasClass(this.CLASSNAME_APP) ? (o -= 1) : l.hasClass(this.CLASSNAME_LONGAPP) && (o -= 2), 0 === o)) o = t;
                  else if (o < 0) {
                    s = l;
                    break;
                  }
                  if (0 === o) o = t;
                  else if (o < 0) {
                    s = l;
                    break;
                  }
                }
                if (o < 0)
                  for (var c = s, u = !1; !u; )
                    try {
                      if ((c = c.next()).hasClass("ui-sortable-helper") || "none" == c.css("display")) continue;
                      if (c.hasClass(this.CLASSNAME_APP)) c.insertBefore(s), (u = !0);
                      else if (0 === c.length)
                        for (c = s; !u; ) (s = s.prev()), c.hasClass("ui-sortable-helper") || "none" == c.css("display") || (s.hasClass(this.CLASSNAME_APP) && (c.insertBefore(s), (u = !0)));
                    } catch (e) {
                      (u = !0), (n = !0);
                    }
                else n = !0;
              }
            },
            _$line_add: i(".d_btn_line_add"),
            _$line_remove: i(".d_btn_line_remove"),
            inProcessing: !1,
            inMove: !1,
            currentInstallTheme: null,
            getCurrentInstallTheme: function () {
              return this.currentInstallTheme;
            },
            setCurrentInstallTheme: function (e) {
              this.currentInstallTheme = e;
            },
            isBusy: function () {
              return this.inProcessing || this.inMove;
            },
            displayLineBtn: function () {
              this.height >= this.maxHeight ? this._$line_add.parent().addClass("disable") : this._$line_add.parent().removeClass("disable"),
                this.height <= 1 ? this._$line_remove.parent().addClass("disable") : this._$line_remove.parent().removeClass("disable");
            },
            INSTALL_MESSAGE_PAGE_LIMIT: "위젯을 추가할 공간이 부족합니다.\n새 페이지를 추가하거나, 위젯을 삭제한 뒤 다시 시도해주세요.",
            INSTALL_MESSAGE_NO_DBLSPACE: "2칸 위젯을 추가할 공간이 부족합니다.\n새 페이지를 추가하거나, 위젯을 삭제한 뒤 다시 시도해주세요.",
            showInstallFailMessage: function (e, t, n) {
              return e > 1 ? (t ? p.a.trigger("installError:appstore:lackdouble", n) : alert(this.INSTALL_MESSAGE_NO_DBLSPACE)) : alert(this.INSTALL_MESSAGE_PAGE_LIMIT), !1;
            },
            install: function (e, t, n, s, o) {
              this.collection.getBoxesLength();
              var r,
                l = a.isUndefined(e.size) ? 1 : e.size.width;
              if (i.isNumeric(t)) {
                if (null == (r = this.getInstallableModel(this.collection.at(t), l))) return void o(this.showInstallFailMessage(l, s, e));
              } else if (null == (r = this.getFirstEmptyByWidth(l))) {
                if (this.height >= this.maxHeight) return void o(this.showInstallFailMessage(l, s, e));
                this.addLine(), (r = this.getFirstEmptyByWidth(l));
              }
              r.trigger("install", e, n), o(!0);
            },
            checkRefineBox: function (e, t) {
              (e = parseInt(e)),
                m.a.fetch().success(
                  a.bind(function () {
                    t(
                      function (e) {
                        var t = this.collection.getBoxesLength(),
                          n = m.a.get(e).getMaxLength();
                        if (t > n && !this.collection.last().isEmpty()) return !1;
                        for (var i = 0, a = 0; a < n; a++) {
                          var s = 1;
                          if (t <= a)
                            if (i > n) {
                              if (this.collection.at(a) && !this.collection.at(a).isEmpty()) return !1;
                            } else {
                              if (i == n || i % e == 0) break;
                              i += s;
                            }
                          else {
                            var o = this.collection.at(a);
                            if ((o && 2 == o.get("boxwidth") && (i % e == e - 1 ? a-- : (s = 2)), (i += s) > n && o && !o.isEmpty())) return !1;
                          }
                        }
                        return !0;
                      }.call(this, e) || confirm("레이아웃 변경시 마지막에 등록한 위젯이 최대 4개까지 삭제될 수 있습니다. 그래도 변경하시겠습니까?")
                    );
                  }, this)
                );
            },
          },
          { GADGET_TICK: 60, TICK_TIMER_ID: "gadgetTick" }
        );
      t.a = g;
    }.call(this, n(4), n(3), n(8), n(37)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(115), n(10), n(31), n(13), n(17);
      t.a = e.View.extend({
        initialize: function () {
          (window.callbackThumbnailUploadFromAppSetting = i.bind(this.callbackUploadCustomThumbnail, this)), (window.uploaderCallback = i.bind(this.callbackUploadCommon, this));
        },
        timerUploading: null,
        startUploading: function () {
          var e = this,
            t = this.$el.find("input:file"),
            n = t.val();
          if (0 === n.length) return !1;
          if (n.match(/\.exe$/)) return alert("jpg, png, gif 형식만 등록할 수 있습니다."), t.replaceWith((t = t.clone(!0))), !1;
          var i = this.$el.find(".d_setting #thumbnail_upload_form");
          (this.timerUploading = setTimeout(function () {
            var t = e.$el.find("#up_frame"),
              n = e.$el.find("input:file");
            (t[0].contentWindow.location.href = "/document-domain?variants=" + window.variantsParam),
              n.replaceWith((n = n.clone(!0))),
              alert("이미지 용량이 너무 크거나, 시간이 초과되어 이미지를 업로드 할 수 없습니다.");
          }, 15e3)),
            i.submit();
        },
        callbackUploadCustomThumbnail: function (e) {
          var t = a.parseJSON(e),
            n = this.$el.find(".d_setting #text_custom_thumbnail_url"),
            i = this.$el.find(".d_setting #text_custom_thumbnail_file_name"),
            s = this.$el.find(".d_setting input:file");
          if ("success" === t.status) {
            var o = t.thumb[0];
            n.val(o.url.replace("http://", "//")), i.val(s.val().substring(s.val().lastIndexOf("\\") + 1));
          } else
            "File size is too big" === t.status
              ? alert("용량이 너무 큽니다. 최대 1MB까지 등록 할 수 있습니다.")
              : "Wrong File extention" === t.status
              ? alert("jpg, png, gif 형식만 등록할 수 있습니다.")
              : alert("이미지를 업로드 할 수 없습니다.\n정상적인 파일인지 먼저 확인하고 다시 시도해 주세요."),
              s.replaceWith((s = s.clone(!0)));
          clearTimeout(this.timerUploading);
        },
        callbackUploadCommon: function (e) {},
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      t.a = e.Model.extend({
        idAttribute: "width",
        getMaxLength: function () {
          return this.get("width") * this.get("maxHeight");
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(11), n(46), n(59);
      var s = n(51),
        o = n(5);
      n(1), n(64);
      t.a = e.Collection.extend({
        model: s.a,
        comparator: "index",
        initialize: function () {
          var e = this;
          (this.boxesLength = 0),
            this.on("add", function (t, n, i) {
              (e.boxesLength += t.get("boxwidth")), e.invalidateBoxPosition();
            }),
            this.on("remove", function (t, n, i) {
              if (((e.boxesLength -= t.get("boxwidth")), !0 === i.emptyFill)) for (var a = 0; a < t.get("boxwidth"); a++) this.insertEmptyBox(i.index);
              e.invalidateBoxPosition(), !0 === i.sync && e.sync();
            }),
            this.on("change:boxwidth", function (t, n) {
              if (n > 1)
                for (var i = e.indexOf(t), a = 1; a < n; a++) {
                  var s = e.at(i + a);
                  s.isEmpty() && e.remove(s);
                }
              e.invalidateBoxPosition();
            }),
            this.on("sort", function (t, n) {
              e.invalidateBoxPosition();
            });
        },
        sync: function () {
          this.saveSetting(zum.page);
        },
        syncInstall: function (e) {
          this.saveSetting(e);
        },
        getBoxesLength: function () {
          return this.boxesLength;
        },
        insertEmptyBox: function (e) {
          i.isNumber(e) ? this.add(s.a.EMPTY_PREFS, { at: e }) : this.add(s.a.EMPTY_PREFS);
        },
        invalidateBoxPosition: function () {
          var e = 0;
          this.each(function (t) {
            t.set("boxposition", e), (e += t.get("boxwidth"));
          });
        },
        encodeURIComponentCustomLinkBoxInfo: function (e) {
          return e ? a.extend({}, e, { title: encodeURIComponent(e.title), link: encodeURIComponent(e.link), img: encodeURIComponent(e.img), imgFileName: encodeURIComponent(e.imgFileName) }) : e;
        },
        saveSetting: function (e) {
          if (!(zum.readonly || this.length < 1)) {
            var t = [],
              n = [],
              a = this;
            this.each(function (e) {
              var s = e.get("boxinfo");
              i.isString(s) ? t.push(s) : t.push(JSON.stringify(a.encodeURIComponentCustomLinkBoxInfo(s))), e.isGadget() && n.push(e.get("prefs"));
            }),
              o.a.setBoxes(t.join("|"), e),
              n.length > 0 && o.a.setPrefs(n, e);
          }
        },
        afterSync: function (e) {
          var t = o.a.getPromise();
          t ? t.done(e) : e();
        },
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      t.a = e.View.extend({
        initialize: function () {},
        hide: function () {
          this.$el.hide();
        },
        show: function () {
          this.$el.show();
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      var s = n(0);
      n(2), n(6);
      t.a = e.View.extend({
        initialize: function () {
          i.isUndefined(this.$el[0]) || ((this.$link = this.$el.children("a")), (this.$imgLink = this.$link.children("img")), this.sendStatView());
        },
        events: { "click a": "click" },
        sendStatView: function () {
          s.a.send(s.a.ShoppingBannerStat.eventName.view, {
            pos: "bn_left_wing",
            cm: s.a.ShoppingBannerStat.cm,
            banner: { bannerName: "ZumMainLeftWing", id: this.$link.data("stat"), outurl: this.$link.attr("href") },
          });
        },
        click: function (e) {
          var t = a(e.currentTarget);
          s.a.send(s.a.ShoppingBannerStat.eventName.click, { landingPage: t.data("url"), outurl: t.attr("href"), id: t.data("stat"), pos: "bn_left_wing", cm: s.a.ShoppingBannerStat.cm }, e);
        },
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9);
      var s = n(199),
        o = n(0),
        r = n(6),
        l = n(2);
      t.a = e.View.extend({
        contentsboxView: null,
        keyHubItemKey: "zapHubItem",
        keyHubTabKey: "zapHubTab",
        hasHubCookie: !1,
        maintainTime: 6e5,
        initialize: function (e) {
          (this.contentsboxView = new s.a({ el: this.$(".d_hub_contentsbox"), contentsbox: this.$(".d_hub_cb_tab.on").data("name"), parent: this })),
            (this.events = i.extend(this.events, {
              "mousedown .d_h_contents": this.setAndSendHubItem,
              "click .d_h_home_contents": this.sendHubHomeClickStat,
              "click .d_link_more": this.sendHubMoreClickStat,
              "click .d_link_suggest": this.setAndSendHubSuggest,
            }));
          var t = this;
          (zum.hub.saveShoppingHubItemCookie = function () {
            t.setHubCookie(t, t.keyHubItemKey, "shopping2");
          }),
            this.listenTo(
              l.a,
              "update:setHubTabCookie",
              a.bind(function (e) {
                t.setHubTabCookie(t, e);
              })
            ),
            (this.hasHubCookie = !a.isNull(i.cookie(this.keyHubItemKey)) || !a.isNull(i.cookie(this.keyHubTabKey)));
        },
        sendHubHomeClickStat: function (e) {
          var t = i(e.currentTarget),
            n = t.attr("href");
          return (
            o.a.send(
              o.a.HubStat.eventName.click,
              o.a.HubStat.appendStat({
                cm: t.data("cm"),
                pos: t.data("pos"),
                outurl: n,
                preferenceTarget: window.targetValues.hub_preference_target,
                preferenceTab: window.targetValues.hub_preference_tab && "undefined" !== window.targetValues.hub_preference_tab ? "{" + window.targetValues.hub_preference_tab + "}" : "NULL",
              }),
              e
            ),
            i.setTimeout(function () {
              r.a.movePage(n);
            }, 100),
            !1
          );
        },
        setAndSendHubItem: function (e) {
          this.setHubCookie(this, this.keyHubItemKey), this.sendHubClickStat(e);
        },
        setAndSendHubSuggest: function (e) {
          this.setHubCookie(this, this.keyHubItemKey), this.sendHubSuggestClickStat(e);
        },
        setHubTabCookie: function (e, t) {
          e.setHubCookie(e, e.keyHubTabKey, t);
        },
        setHubCookie: function (e, t, n) {
          var a = new Date();
          a.setTime(a.getTime() + e.maintainTime), (n = n || i(".d_hub_cb_tab.on").data("name")), i.cookie(t, n, { expires: a });
        },
        sendHubClickStat: function (e) {
          if (1 !== e.which) return !0;
          var t = i(e.currentTarget),
            n = t.closest(".d_hub_content"),
            s = t.closest(".d_hub_slot"),
            r = t.attr("href"),
            l = t.data("title") || "",
            c = !a.isUndefined(t.data("more")) && t.data("more") ? "" : (s.data("name") || "") + (t.data("order") || 0),
            u = {
              hubname: n.data("name"),
              huborder: n.data("order"),
              hubtemplet: parseInt(t.data("templet")),
              bannerName: c,
              title: l,
              pos: "front_hub_" + n.data("name"),
              cm: "item",
              contentsIDX: t.data("itemId"),
              pvAction: window.isClickHubTab ? "hubtab" : this.hasHubCookie ? "fixed" : "front",
              preferenceTarget: window.targetValues.hub_preference_target || "false",
              preferenceTab: window.targetValues.hub_preference_tab && "undefined" !== window.targetValues.hub_preference_tab ? "{" + window.targetValues.hub_preference_tab + "}" : "NULL",
            },
            h = t.data("contents");
          a.isUndefined(h) || "" === h || (u.contentsID = h);
          var d = this.$el.find(".d_calendar_date");
          return (
            d.length > 0 && (u.hubdate = d.data("date") || "none"),
            (u.outurl = r),
            o.a.HubStat.appendInnerServiceQueryAtHubItem(u, t.data("order"), t.parent().hasClass("item_thumb") ? 1 : 0),
            o.a.send(o.a.HubStat.eventName.click, u, e),
            t.attr("href", u.outurl),
            !0
          );
        },
        unload: function () {
          this.contentsboxView.destroy();
        },
        hide: function () {
          this.$el.hide();
        },
        show: function () {
          this.$el.show();
        },
        sendHubMoreClickStat: function (e) {
          var t = i(e.currentTarget),
            n = {
              hubname: t.data("name"),
              hubtype: "contents",
              huborder: parseInt(t.data("order")),
              title: "",
              pos: "more",
              preferenceTarget: window.targetValues.hub_preference_target || "false",
              preferenceTab: window.targetValues.hub_preference_tab && "undefined" !== window.targetValues.hub_preference_tab ? "{" + window.targetValues.hub_preference_tab + "}" : "NULL",
            };
          o.a.send(o.a.HubStat.eventName.click, n, e);
        },
        sendHubSuggestClickStat: function (e) {
          var t = i(e.currentTarget),
            n = t.data("title") || "",
            a = t.attr("href"),
            s = {
              hubname: t.data("name"),
              hubtype: "contents",
              huborder: parseInt(t.data("order")),
              hubtemplet: parseInt(t.data("templet")),
              bannerName: "contents2x1",
              title: n,
              pos: "item",
              cm: "tit",
              outurl: a,
              contentsIDX: t.data("itemId"),
              preferenceTarget: window.targetValues.hub_preference_target || "false",
              preferenceTab: window.targetValues.hub_preference_tab && "undefined" !== window.targetValues.hub_preference_tab ? "{" + window.targetValues.hub_preference_tab + "}" : "NULL",
            };
          o.a.send(o.a.HubStat.eventName.click, s, e);
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(11), n(24), n(21), n(26);
      var s = n(200),
        o = n(201),
        r = (n(266), n(2)),
        l = n(0);
      n(6);
      t.a = e.View.extend({
        currentModuleKey: "",
        idxCurrentModuleKey: 1,
        views: {},
        $document: i(document),
        initialize: function (e) {
          (this.parent = e.parent),
            (this.views = {}),
            (this.views[e.contentsbox] = this.createContentsBoxHub(e.contentsbox)),
            (this.currentModuleKey = this.$el.find(".d_hub_cb_contents").data("name"));
          i(".d_hub_tabs_ul li");
          (this.idxCurrentModuleKey = parseInt(this.getContentsBoxOrder(this.currentModuleKey))),
            this.listenTo(r.a, "open:contentsbox", a.bind(this.render, this)),
            (window.showContentsBox = a.bind(this.showSelectedHub, this)),
            (window.contentsBoxOrder = a.bind(this.getContentsBoxOrder, this)),
            this.bindEvents();
          var t = i(".d_hub_cb_tab.on").data("name") || "",
            n = this.getHottopicAdData(),
            s = this.getHubTabAdData(t);
          if (n || s) {
            var o = [];
            n && o.push(n), s && o.push(s), this.sendAdViewStat(o);
          }
        },
        getHubTabAdData: function (e) {
          var t = i("#d_hub_native_ad");
          return t.length < 1 || !e || !a.contains(zum.hub.adHubTabs, e) ? "" : { bannerName: l.a.NativeADStat.bannerName.hub, id: t.data("statid"), outurl: t.data("outurl") };
        },
        getHottopicAdData: function () {
          var e = i('.item.d_photonewslink[data-advertise="true"]');
          return e.length < 1 ? "" : { bannerName: l.a.NativeADStat.bannerName.hottopic, id: e.data("statid"), outurl: e.data("outurl") };
        },
        sendAdViewStat: function (e) {
          l.a.send(l.a.NativeADStat.eventName.view, { banner: e });
        },
        createContentsBoxHub: function (e, t) {
          var n = this;
          if (this.isShopping(e)) return new o.a({ moduleKey: e, el: this.$el, extraParams: t });
          var i = new s.a({ moduleKey: e, el: this.$el });
          return (
            i.module.on(
              "sync",
              function () {
                var t = n.getHubTabAdData(e);
                if (t) {
                  var i = [];
                  i.push(t), n.sendAdViewStat(i);
                }
              },
              i.module
            ),
            i
          );
        },
        getContentsBoxOrder: function (e) {
          return this.$(".d_hub_cb_tab a[data-name=" + e + "]").data("order");
        },
        showHub: function (e) {
          return this.showSelectedHub(i(e.currentTarget).data("name")), !1;
        },
        showSelectedHub: function (e, t) {
          if (!a.isEmpty(e)) {
            a.isEmpty(t) && this.isShopping(e) && (t = { stab: "keyword" }), "shopping1" == e && (e = "shopping2"), (this.idxCurrentModuleKey = parseInt(this.getContentsBoxOrder(e)));
            var n = this.$(".d_hub_cb_tab[data-name=" + e + "]");
            if (!n.hasClass("on")) {
              this.$el.find(".d_hub_cb_tab").removeClass("on"), this.destroy();
              var i = n.data("name");
              this.views[i] || (this.views[i] = this.createContentsBoxHub(i, t)), this.views[i].construct(t), (this.currentModuleKey = i);
            }
            this.isShoppingMouseOver(t) && r.a.trigger("update:setHubTabCookie", e);
          }
        },
        bindEvents: function () {
          this.events = { "click .d_hub_cb_tab": this.showHub, "click .d_h_function": this.sendHubTabClickStat, "click .d_hub_lower_module": this.clickHubLowerItem };
        },
        destroy: function () {
          a.each(a.values(this.views), function (e) {
            e.destroy && e.destroy();
          });
        },
        isShoppingMouseOver: function (e) {
          return "adTab" != (a.isObject(e) ? e.stab : "");
        },
        isBeforeShopping: function (e, t) {
          return this.isShopping(e) && !this.isShopping(t);
        },
        isShopping: function (e) {
          return "shopping2" === e;
        },
        clickHubLowerItem: function (e) {
          this.sendHubLowerClickStat(e), this.setHubTabCookie(e);
        },
        sendHubLowerClickStat: function (e) {
          var t = i(e.currentTarget),
            n = i(".d_hub_cb_tab.on a"),
            a = {
              hubname: n.data("name"),
              huborder: parseInt(n.data("order")),
              bannerName: t.data("bannername"),
              title: t.data("title"),
              subtitle: t.data("subtitle"),
              outurl: t.attr("href"),
              hubtemplet: t.data("hubtemplet"),
              pos: "front_hub_",
              cm: "pagebox",
              pvAction: window.isClickHubTab ? "hubtab" : this.parent.hasHubCookie ? "fixed" : "front",
              preferenceTarget: window.targetValues.hub_preference_target,
              preferenceTab: window.targetValues.hub_preference_tab && "undefined" !== window.targetValues.hub_preference_tab ? "{" + window.targetValues.hub_preference_tab + "}" : "NULL",
            };
          return (
            a.hubname && (a.hubname.indexOf("2") > 0 || a.hubname.indexOf("3") > 0) && (a.hubname = a.hubname.substring(0, a.hubname.length - 1)),
            (a.pos += a.hubname),
            l.a.HubStat.appendInnerServiceQueryAtHubLowerItem(a, e),
            l.a.send(l.a.HubStat.eventName.click, a, e),
            t.attr("href", a.outurl),
            !0
          );
        },
        setHubTabCookie: function (e) {
          this.parent.setHubTabCookie(this.parent, this.parent.$(".d_hub_cb_tab.on").data("name"));
        },
        sendHubTabClickStat: function (e) {
          var t = i(e.currentTarget);
          if (!t.parent().hasClass("on")) {
            var n = {
              hubname: t.data("name"),
              huborder: parseInt(t.data("order")),
              bannerName: "",
              title: t.data("title"),
              pos: "front_hub_",
              cm: "tab",
              preferenceTarget: window.targetValues.hub_preference_target,
              preferenceTab: window.targetValues.hub_preference_tab && "undefined" !== window.targetValues.hub_preference_tab ? "{" + window.targetValues.hub_preference_tab + "}" : "NULL",
            };
            "shopping2" === n.hubname
              ? (n.hubname = "shopping1")
              : n.hubname && (n.hubname.indexOf("2") > 0 || n.hubname.indexOf("3") > 0) && (n.hubname = n.hubname.substring(0, n.hubname.length - 1)),
              (n.pos += n.hubname),
              l.a.send(l.a.HubStat.eventName.click, n, e);
          }
          window.isClickHubTab = !0;
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(90);
      n(2);
      t.a = e.View.extend({
        moduleKey: "",
        module: null,
        initialize: function (e) {
          (this.moduleKey = e.moduleKey), (this.module = new i.a()), this.listenTo(this.module, "change", this.moduleUpdated);
        },
        moduleUpdated: function (e) {
          this.render(this.moduleKey, e.get("callback"));
        },
        construct: function () {
          this.render(this.moduleKey);
        },
        render: function (e, t) {
          this.module.isValid() ? this.$el.html(this.module.getHtml()) : this.module.fetch(e);
        },
        destroy: function () {},
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      var s = n(202);
      n(2);
      t.a = e.View.extend({
        initialize: function (e) {
          (this.moduleKey = e.moduleKey),
            (this.extraParams = e.extraParams),
            (this.module = new s.a({ id: this.moduleKey, extraParams: this.extraParams })),
            this.listenTo(this.module, "change", this.moduleUpdated),
            this.postConstruct();
        },
        moduleUpdated: function () {
          this.render(this.extraParams);
        },
        construct: function (e) {
          this.render(e);
        },
        destroy: function () {
          window.ShoppingHub && window.ShoppingHub.destroy && i.isFunction(window.ShoppingHub.destroy) && window.ShoppingHub.destroy();
        },
        postConstruct: function () {
          var e = window.ShoppingHub || {};
          e &&
            e.initScripts &&
            i.isArray(e.initScripts) &&
            i.each(e.initScripts, function (e) {
              e && i.isString(e) && a.ajax({ url: e, dataType: "script", cache: !0, timeout: 3e3 });
            });
        },
        render: function (e) {
          if (this.module.isValid()) {
            this.$el.html(this.module.getHtml()), this.postConstruct();
          } else this.module.fetch(e);
        },
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/hub/contentsbox",
        defaults: { html: "", fetchTime: 0 },
        fetch: function (t) {
          e.Model.prototype.fetch.call(this, { type: "GET", dataType: "html", url: this.url, data: i.extend({}, a.a.getAjaxCommonRequestParam(), { tab: this.id }, t || {}) });
        },
        parse: function (e) {
          return { html: e, fetchTime: +new Date() };
        },
        getHtml: function () {
          return this.attributes.html;
        },
        isValid: function () {
          return this.attributes.fetchTime > +new Date() - 200;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a = n(6);
      t.a = e.Model.extend({
        url: "/view/hub/stock",
        defaults: { html: "", view: "", fetchTime: 0 },
        fetch: function (t, n) {
          t = t || "graph";
          (this.attributes.view = t), e.Model.prototype.fetch.call(this, { dataType: "html", data: i.extend({}, a.a.getAjaxCommonRequestParam(), { view: t, mp: n || "" }) });
        },
        parse: function (e) {
          return { html: e, fetchTime: +new Date() };
        },
        getHtml: function () {
          return this.attributes.html;
        },
        isValid: function () {
          return this.attributes.fetchTime > +new Date() - 6e4;
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(11), n(10), n(31), n(13), n(17), n(49), n(5);
      var s,
        o = n(205),
        r = n(118),
        l = n(208),
        c = (n(267), n(268), n(209)),
        u = n(210),
        h = n(212),
        d = n(18),
        p = n(20),
        m = n(15),
        f = n(41),
        _ = { photo: "06", entertain: "06", sports: "05", society: "02", economy: "03", world: "04", politics: "01" },
        g = zum.settings.nfd,
        w = e(window);
      t.a = i.View.extend({
        newsboxView: null,
        popularView: null,
        articleView: null,
        initialize: function (t) {
          (s = this), (this.option = t);
          this.option.page;
          this.initializeDefinedModules(),
            (this.newsboxView = new o.a({ el: e(".d_news_list") })),
            (this.issuePhotoView = new u.a({ el: e(".issue_photo"), showDelay: g })),
            (this.popularView = new r.a({ el: e(".best_news"), showDelay: this.option.fixPopular ? 0 : g, issuePhotoView: this.issuePhotoView })),
            new h.a(),
            (this.articleView = new l.a({ el: e("#box_news_view") })),
            (this.remoconView = new c.a({ el: e("#box_news_view").find(".aside_news_view"), showDelay: g, next: a.bind(this.nextArticle, this), prev: a.bind(this.prevArticle, this) })),
            this.newsboxView.on(
              "change:tab",
              a.bind(function (e) {
                this.syncPopularNews(e.tabName, this.newsboxView.lastActionIsIntended);
              }, this)
            ),
            (zum.news = zum.news || {}),
            (zum.news.nextArticle = function (e) {
              s.nextArticle.call(s, e);
            }),
            (zum.news.prevArticle = function (e) {
              s.prevArticle.call(s, e);
            }),
            this.initEstat();
        },
        initializeDefinedModules: function () {
          this.fixedManager = f.a;
        },
        initEstat: function () {
          this.estat = {
            clickNextArticle: function (e, t, n) {
              var i;
              if (t && t.url) {
                var a = t.url.match(/id=(\d+)/);
                i = a && a[1] ? a[1] : "";
              }
              d.a.click({ articleId: i ? i.substr(11) : "", pos: n || "front_ab", cm: "item", tier: "02", outurl: t ? t.url : "" }, e);
            },
            clickPrevArticle: function (e, t, n) {
              var i;
              if (t && t.url) {
                var a = t.url.match(/id=(\d+)/);
                i = a && a[1] ? a[1] : "";
              }
              d.a.click({ articleId: i ? i.substr(11) : "", pos: n || "front_ab", cm: "item", tier: "01", outurl: t ? t.url : "" }, e);
            },
          };
        },
        isRefreshOnBox: !1,
        delayId: 0,
        updateNextPrevArticle: function (t, n) {
          if (this.isRefreshOnBox) {
            var i = this;
            return (
              clearTimeout(this.delayId),
              void (this.delayId = setTimeout(function () {
                (i.isRefreshOnBox = !1), i.updateNextPrevArticle.call(i, t, n);
              }, 1e3))
            );
          }
          try {
            "front_ab_scroll" == n &&
              (e(".best_news")
                .find(".d_newslink")
                .each(function () {
                  this.href && this.href.indexOf(t) >= 0 && (n = "front_rb_popular");
                }),
              e(".issue_photo")
                .find(".d_newslink")
                .each(function () {
                  this.href && this.href.indexOf(t) >= 0 && (n = "front_rb_issuephoto");
                })),
              "front_rb_popular" == n && this.popularView.isVisible()
                ? (this.popularView.isFirstArticle(t) && this.issuePhotoView.isVisible()
                    ? this.articleView.setPrevArticle(t, this.issuePhotoView.getPrevArticle())
                    : this.articleView.setPrevArticle(t, this.newsboxView.getPrevArticle(t)),
                  this.popularView.isLastArticle(t) && this.issuePhotoView.isVisible()
                    ? this.articleView.setNextArticle(t, this.issuePhotoView.getNextArticle())
                    : this.articleView.setNextArticle(t, this.popularView.getNextArticle(t)))
                : "front_rb_issuephoto" == n && this.issuePhotoView.isVisible()
                ? (this.issuePhotoView.isFirstArticle(t)
                    ? this.articleView.setPrevArticle(t, this.popularView.getPrevArticle())
                    : this.articleView.setPrevArticle(t, this.issuePhotoView.getPrevArticle(t)),
                  this.issuePhotoView.isLastArticle(t)
                    ? this.articleView.setNextArticle(t, this.popularView.getNextArticle())
                    : this.articleView.setNextArticle(t, this.issuePhotoView.getNextArticle(t)))
                : (this.articleView.setPrevArticle(t, this.newsboxView.getPrevArticle(t)), this.articleView.setNextArticle(t, this.newsboxView.getNextArticle(t)));
          } catch (e) {
            this.articleView.setPrevArticle(t, this.newsboxView.getPrevArticle(t)), this.articleView.setNextArticle(t, this.newsboxView.getNextArticle(t));
          }
        },
        showAndHideRelatedBoxes: function (t) {
          if (t && (!this.popularView.isVisible() || ("front_rb_popular" != t.cm && "front_rb_issuephoto" != t.cm && "front_ab_scroll" != t.cm))) {
            var n = (t.cm || "").replace("front_nb_", ""),
              i = _[n];
            this.popularView.showByCode(i);
          } else this.popularView.isVisible() || this.popularView.show();
          this.issuePhotoView.show();
          var a = this;
          e.setTimeout(function () {
            a.fixedManager.fixNews();
          }, parseInt(g));
        },
        onResizeEvent: function () {
          w.off(".newsbox").on(
            "resize.newsbox",
            a.bind(function () {
              e.setTimeout(a.bind(this.showAndHideRelatedBoxes, this), 100, "newsboxCheckResize");
            }, this)
          );
        },
        offResizeEvent: function () {
          w.off(".newsbox");
        },
        viewArticle: a.debounce(function (t, n) {
          e("#wrap").addClass("wrap-news-view"), this.articleHighlight(t, n.cm);
          var i = this;
          this.onResizeEvent(),
            (this.isRefreshOnBox = !1),
            this.articleView.isArticleOn() || ("front_rb_popular" != n.cm && "front_rb_issuephoto" != n.cm) || (this.isRefreshOnBox = !0),
            this.articleView.show(t, n),
            this.showAndHideRelatedBoxes(n),
            this.newsboxView.stopRolling(),
            this.option.photonews && this.option.photonews.stopRolling(),
            ("front_rb_popular" == n.cm && this.popularView.isVisible()) || ("front_rb_issuephoto" == n.cm && this.issuePhotoView.isVisible())
              ? i.updateNextPrevArticle(t, n.cm)
              : n.p
              ? this.newsboxView.renderForPage(n.p, function () {
                  i.updateNextPrevArticle(t, n.cm);
                })
              : i.updateNextPrevArticle(t, n.cm),
            e("#zum_paging .d_prev").hide(),
            e("#zum_paging .d_next").hide();
        }, 200),
        closeArticle: function () {
          e("#wrap").removeClass("wrap-news-view"),
            this.articleView.isArticleOn() &&
              (m.a.Article.sendAndCloseScrollStat(),
              this.offResizeEvent(),
              this.newsboxView.startRolling(),
              this.option.photonews && this.option.photonews.startRolling(),
              this.articleView.hide(),
              this.articleView.clearHighlight(),
              this.option.fixPopular ? (this.popularView.show(), this.issuePhotoView.show()) : (this.popularView.hide(), this.issuePhotoView.hide()),
              this.fixedManager.unfixNews(),
              w.scrollTop(0),
              e("#zum_paging .d_prev").show(),
              e("#zum_paging .d_next").show());
        },
        articleHighlight: function (t, n) {
          var i;
          (i = e("front_rb_popular" == n ? ".best_news" : "front_rb_issuephoto" == n ? ".issue_photo" : "front_ab_scroll" == n ? ".wrap_box" : ".news_box")),
            e(".d_newslink.item_selected").removeClass("item_selected"),
            e.setInterval(
              function () {
                i.find(".d_newslink").each(function () {
                  if (this.href && this.href.indexOf(t) >= 0) return e(this).addClass("item_selected"), void e.clearInterval("articleHighlightRepeat");
                });
              },
              100,
              10,
              "articleHighlightRepeat"
            );
        },
        nextArticle: function (e) {
          if (this.articleView.isArticleOn()) {
            var t = this.articleView.nextArticle,
              n = "front_ab";
            if ("mousewheel" === e.type || ("keydown" === e.type && 40 === e.keyCode)) {
              n += "_scroll";
              var i = t.param || {};
              (i.cm = n), (t.url = p.a.changeNewsLink(t.url, i));
            }
            this.estat.clickNextArticle(e, t, n), this.articleView.next(), w.focus();
          }
        },
        prevArticle: function (e) {
          this.articleView.isArticleOn() && (this.estat.clickPrevArticle(e, this.articleView.prevArticle), this.articleView.prev(), w.focus());
        },
        syncPopularNews: function (e, t) {
          if (this.popularView.isVisible()) {
            var n,
              i = _[e];
            if (t) {
              var a = this;
              n = function (e) {
                e && a.popularView.estat.pageView();
              };
            }
            this.popularView.showByCode(i, n);
          }
        },
        unload: function () {
          this.newsboxView.stopRolling();
        },
        newsboxHide: function () {
          this.newsboxView.hide();
        },
        newsboxShow: function () {
          this.newsboxView.show();
        },
        popularViewHide: function () {
          this.popularView.hide();
        },
        popularViewShow: function () {
          this.popularView.show();
        },
      });
    }.call(this, n(3), n(4), n(8)));
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    (function (Backbone, _, $) {
      var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86),
        core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__),
        core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9),
        core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__),
        core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11),
        core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__),
        core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75),
        core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__),
        core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44),
        core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__),
        core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10),
        core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__),
        core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31),
        core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6__),
        core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23),
        core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__),
        core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40),
        core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_8__),
        core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17),
        core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__),
        js_news_newsbox_NewsboxModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77),
        js_news_newsbox_NewsboxModules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(206),
        js_news_popular_PopularView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(118),
        js_news_NewsboxUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20),
        js_base_Router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49),
        js_news_NewsEstat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18),
        js_base_ScrollStatManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15),
        sectionTotabName = { 302: "total", 303: "society", 304: "economy", 306: "world", 307: "sports", 308: "entertain", 305: "it", 99: "rank", 309: "photo", 310: "headline", 311: "politics" },
        rollingInterval = 14e3;
      __webpack_exports__.a = Backbone.View.extend({
        currentIdx: 0,
        currentSectionCode: "302",
        newTabSeq: 1,
        totalCount: 0,
        tabStartIdx: [],
        tabName: [],
        sectioncode: [],
        isFirstRolling: !0,
        rollingInterval: rollingInterval,
        hasTabCode: document.cookie.match("(^|;) ?zapNewsTab=([^;]*)(;|$)"),
        lastActionIsIntended: !1,
        doorData: [],
        initialize: function () {
          (this.events = {
            "mousedown .d_newslink": this.changeNewsLink,
            "click .d_newslink": this.clickNewsLink,
            "click .d_issuelink": this.clickIssueLink,
            "click .d_newsOutlink": this.clickOutLink,
            "click .d_menu > h3": this.tabClick,
            "click .d_section_home": this.homeClick,
            "click .d_next": this.nextTop,
            "click .d_prev": this.prevTop,
            "click .d_next_bottom": this.nextBottom,
            "click .d_prev_bottom": this.prevBottom,
          }),
            (this.modules = new js_news_newsbox_NewsboxModules__WEBPACK_IMPORTED_MODULE_11__.a()),
            this.listenTo(this.modules, "change", this.moduleUpdated),
            this.$el.closest(".news_box").on("mouseenter", _.bind(this.pauseRolling, this)),
            this.$el.closest(".news_box").on("mouseleave", _.bind(this.resetRolling, this)),
            this.$el.closest(".wrap_fixed").find(".new_box_bottom").on("mouseenter", _.bind(this.pauseRolling, this)),
            this.$el.closest(".wrap_fixed").find(".new_box_bottom").on("mouseleave", _.bind(this.resetRolling, this)),
            this.$el.closest(".news_box").on("mouseenter", function (e) {
              void 0 === e.isTrigger && $(".hot_topic_box").trigger("mouseenter");
            }),
            this.$el.closest(".news_box").on("mouseleave", function (e) {
              void 0 === e.isTrigger && $(".hot_topic_box").trigger("mouseleave");
            }),
            this.parseRenderedView(),
            this.startRolling(),
            this.initEstat();
        },
        initEstat: function () {
          var e = this;
          this.estat = {
            clickTab: function (t, n) {
              js_news_NewsEstat__WEBPACK_IMPORTED_MODULE_15__.a.push(
                "@Click",
                {
                  outurl: n,
                  pos: "front_nb",
                  cm: "tab",
                  selectTab:
                    "302" == e.currentSectionCode ? sectionTotabName[e.currentSectionCode] + $(t.currentTarget).attr("class").split(" ")[0].split("_")[1] : sectionTotabName[e.currentSectionCode],
                },
                t
              ),
                js_base_ScrollStatManager__WEBPACK_IMPORTED_MODULE_16__.a.Article.sendAndCloseScrollStat();
            },
            mouseEnterTab: function (e, t) {
              js_news_NewsEstat__WEBPACK_IMPORTED_MODULE_15__.a.push("@Click", { pos: "front_nb", outurl: t }, e),
                js_base_ScrollStatManager__WEBPACK_IMPORTED_MODULE_16__.a.Article.sendAndCloseScrollStat();
            },
            clickPaging: function (e, t, n) {
              js_news_NewsEstat__WEBPACK_IMPORTED_MODULE_15__.a.click({ pos: "front_nb", cm: "paging_" + n }, t);
            },
            clickHome: function (e) {
              js_news_NewsEstat__WEBPACK_IMPORTED_MODULE_15__.a.click({ pos: "front_nb", cm: "more" }, e), js_base_ScrollStatManager__WEBPACK_IMPORTED_MODULE_16__.a.Article.sendAndCloseScrollStat();
            },
            getNewsPos: function (e) {
              return $(e.currentTarget).data("pos");
            },
            clickIssueLink: function (e) {
              var t = this.getNewsPos(e);
              js_news_NewsEstat__WEBPACK_IMPORTED_MODULE_15__.a.click({ pos: t, cm: "issue_label" }, e);
            },
            clickNews: function (t) {
              var n = $(t.target).closest("a"),
                i = "",
                a = !1;
              "99" == e.currentSectionCode
                ? ((i = ((i = n.closest("li.item").prevAll("li.item").length + 1) < 10 ? "0" : "") + i), (a = parseInt(i) <= 3))
                : (a = !!n.find('strong:not(".icon_news")')[0]);
              var s = n.attr("href").match(/news=(\d+)/),
                o = s && s[1] ? s[1] : "",
                r = this.getNewsPos(t);
              js_news_NewsEstat__WEBPACK_IMPORTED_MODULE_15__.a.click(
                {
                  pos: r,
                  cm: "item",
                  articleId: o.substr(11),
                  selectTab: "302" == e.currentSectionCode ? sectionTotabName[e.currentSectionCode] + (e.modules.getCurrentPage() + 1) : sectionTotabName[e.currentSectionCode],
                  isBold: a,
                  label:
                    "urgent" == n.find(".icon_news").data("label") ||
                    "top" == n.find(".icon_news").data("label") ||
                    "hot" == n.find(".icon_news").data("label") ||
                    "vs" == n.find(".icon_news").data("label") ||
                    "live" == n.find(".icon_news").data("label") ||
                    "realtime" == n.find(".icon_news").data("label") ||
                    "video" == n.find(".icon_news").data("label")
                      ? n.find(".icon_news").data("label")
                      : "",
                  isIssue: !!n.closest("li").find(".label_issue")[0],
                  isSlide: !!n.find(".icon_photo")[0],
                  isRelation: n.parent().hasClass("item_related"),
                  isDivision: n.closest("li").hasClass("news_divide"),
                  isOutlink: n.hasClass("d_newsOutlink"),
                },
                t
              );
            },
          };
        },
        parseRenderedView: function parseRenderedView() {
          var self = this,
            seq = eval(this.$el.find(".d_menu").data("seq"));
          this.modules.setSeq(seq),
            this.$el.find(".d_menu div.list").each(function () {
              $(this).show().siblings(".list").hide(),
                $(".d_menu h3").hasClass("on") || $(".total_1").addClass("on"),
                self.$("h3").each(function (e) {
                  $(this).hasClass("on") && (self.currentIdx = e);
                });
              var e = new js_news_newsbox_NewsboxModule__WEBPACK_IMPORTED_MODULE_10__.a();
              e.set({ id: self.currentIdx, html: self.$el.html() }), self.modules.add(e), self.modules.setCurrentIndex(self.currentIdx);
            }),
            this.updateDoorData();
        },
        moduleUpdated: function (e) {
          this.render(e.get("id"), e.get("callback")), e.set("callback", null);
        },
        updatePage: function () {
          var e = this.getCurrentTabPage(),
            t = (_.isUndefined(e) ? 0 : e) + 1,
            n = this.$(".btn_paging .cnt strong");
          n && n.text(t);
        },
        render: function (e, t) {
          (this.isFirstRolling = !1),
            this.modules.exists(e)
              ? (this.currentIdx !== e &&
                  ((this.currentIdx = e),
                  this.modules.setCurrentIndex(e),
                  this.$el.html(this.modules.get(e).get("html")),
                  0 === e ? $(".total_1").addClass("on") : 1 === e ? $(".total_2").addClass("on") : 2 === e && $(".total_3").addClass("on"),
                  this.updatePage(),
                  this.updateCurrentSectionCode(),
                  this.updateDoorData()),
                "function" == typeof t && t())
              : this.modules.fetch(e, t);
        },
        renderForRolling: function (e, t) {
          this.isTargetting() && (e = 0), this.render(e, t);
        },
        renderForTab: function (e, t) {
          this.render(this.tabStartIdx[e], t);
        },
        renderForPage: function (e, t) {
          var n = _.indexOf(this.modules.getSeq(), parseInt(e));
          this.render(n, t);
        },
        renderForSectionCode: function (e, t) {
          for (var n = 0; n < this.sectioncode.length; n++) if (this.sectioncode[n] === e) return void this.renderForTab(n, t);
        },
        updateCurrentSectionCode: function () {
          this.totalCount = this.$("h3").length;
          var e = this.$("h3.on").data("sectioncode");
          if (this.currentSectionCode !== e) {
            var t = this.$("h3.on").data("tabname");
            (this.currentSectionCode = e), this.trigger("change:tab", { sectionCode: this.currentSectionCode, tabName: t });
          }
        },
        updateDoorData: function () {
          for (var e = this.$el.find(".d_menu > [data-sectioncode]"), t = 0, n = 0; n < e.length; n++)
            (this.tabStartIdx[n] = t),
              (this.tabName[n] = e.eq(n).data("tabname")),
              (this.sectioncode[n] = e.eq(n).data("sectioncode")),
              e.eq(n).data("page") ? (t += parseInt(e.eq(n).data("page"))) : t++,
              (this.totalCount = t);
          if (this.modules.getSeq() && this.modules.getSeq().length !== this.totalCount)
            if (this.modules.getSeq().length > this.totalCount) this.modules.setSeq(this.modules.getSeq().slice(0, this.totalCount));
            else for (n = this.modules.getSeq().length; n < this.totalCount; n++) this.modules.getSeq().push(n);
          var i = this;
          this.$el.find(".door_data > span").each(function () {
            var e = $(this),
              t = e.data("page"),
              n = e.data("url"),
              a = e.data("type"),
              s = e.data("section"),
              o = e.data("category"),
              r = sectionTotabName[e.data("section")],
              l = e.text();
            (i.doorData[t] = i.doorData[t] || {}), (i.doorData[t][a] = { url: n, title: l, page: t, tabname: r, sectionCode: s, category: o });
          });
        },
        getNextSectionCode: function () {
          var e = _.indexOf(this.sectioncode, this.currentSectionCode) + 1;
          return e >= this.sectioncode.length && (e = 0), this.sectioncode[e];
        },
        getPrevSectionCode: function () {
          var e = _.indexOf(this.sectioncode, this.currentSectionCode) - 1;
          return e < 0 && (e = this.sectioncode.length - 1), this.sectioncode[e];
        },
        getNewsAnchors: function () {
          return this.$el.find("a.d_newslink");
        },
        getNewsAnchorIndex: function (e) {
          if (e)
            return this.getNewsAnchors().map(function (t, n) {
              return n.href && n.href.match(e) && t;
            })[0];
        },
        getCurrentTabPage: function () {
          for (var e, t = 0; t < this.tabStartIdx.length; t++) {
            if (this.currentIdx - this.tabStartIdx[t] < 0) return e;
            e = this.currentIdx - this.tabStartIdx[t];
          }
        },
        getNextArticle: function (e) {
          var t = this.getNewsAnchorIndex(e);
          if (((t = void 0 === t ? 0 : t + 1), this.getNewsAnchors().length <= t)) {
            var n = this.modules.getNextPage(),
              i = this.doorData[n].first;
            return _.extend(i, {
              param: { v: 4, cm: "newsbox", tab: i.tabname, p: i.page },
              el: function () {
                return $(".d_news_list .d_newslink").first();
              },
            });
          }
          var a = this.getNewsAnchors().eq(t);
          if (a)
            return {
              url: a.attr("href"),
              title: $.trim(
                a.attr("title") ||
                  a
                    .contents()
                    .filter(function () {
                      return !$(this).hasClass("icon_news") && !$(this).hasClass("thumb");
                    })
                    .text()
              ),
              category: a.data("category"),
              el: a,
            };
        },
        getPrevArticle: function (e) {
          var t = this.getNewsAnchorIndex(e);
          if ((t = void 0 === t ? -1 : t - 1) < 0) {
            var n = this.modules.getPrevPage(),
              i = this.doorData[n].last;
            return _.extend(i, {
              param: { v: 4, cm: "newsbox", tab: i.tabname, p: i.page },
              el: function () {
                return $(".d_news_list .d_newslink").last();
              },
            });
          }
          var a = this.getNewsAnchors().eq(t);
          if (a)
            return {
              url: a.attr("href"),
              title: $.trim(
                a.attr("title") ||
                  a
                    .contents()
                    .filter(function () {
                      return !$(this).hasClass("icon_news") && !$(this).hasClass("thumb");
                    })
                    .text()
              ),
              category: a.data("category"),
              el: a,
            };
        },
        changeNewsLink: function (e) {
          js_news_NewsboxUtils__WEBPACK_IMPORTED_MODULE_13__.a.changeNewsLink(e);
        },
        clickNewsLink: function (e) {
          e.preventDefault();
          var t = js_news_NewsboxUtils__WEBPACK_IMPORTED_MODULE_13__.a.changeNewsLink(e);
          if (location.href === t) return !1;
          if ((e && this.estat.clickNews(e), "_blank" === $(e.target).closest("a").attr("target")))
            if (-1 == navigator.appVersion.indexOf("Chrome")) {
              var n = "photoSlide" + this.newTabSeq,
                i = window.open("", n);
              this.newTabSeq++, (i.location.href = t);
            } else window.open(t, "");
          else location.href = t;
        },
        clickIssueLink: function (e) {
          e.preventDefault();
          var t = $(e.target).closest("a").attr("href");
          if ((this.estat.clickIssueLink(e), "_blank" === $(e.target).closest("a").attr("target")))
            if (-1 == navigator.appVersion.indexOf("Chrome")) {
              window.open("", "photoSlide").location.href = t;
            } else window.open(t, "");
          else location.href = t;
        },
        clickOutLink: function (e) {
          e && this.estat.clickNews(e);
        },
        tabClick: function (e) {
          var t = this;
          if (!$(e.currentTarget).hasClass("on")) {
            var n = $(e.currentTarget).index();
            return (
              e.currentTarget.tagName && (n = $.inArray(e.currentTarget, $(e.currentTarget).parent().children(e.currentTarget.tagName))),
              this.renderForTab(n, function () {
                t.estat.clickTab(e, i);
              }),
              !1
            );
          }
          var i = $(e.currentTarget).data("url");
          i.indexOf("/front?") < 0 ? (i += "?cm=front_nb") : (i += "&cm=front_nb"), this.estat.clickTab(e, i), (location.href = i), (this.lastActionIsIntended = !0);
        },
        homeClick: function (e) {
          e && this.estat.clickHome(e);
        },
        prevTop: function (e, t) {
          this.prev(e, t, "top");
        },
        prevBottom: function (e, t) {
          this.prev(e, t, "bottom");
        },
        nextTop: function (e, t) {
          this.next(e, t, "top");
        },
        nextBottom: function (e, t) {
          this.next(e, t, "bottom");
        },
        prev: function (e, t, n) {
          this.trigger("prev");
          var i = t;
          return (
            e
              ? (this.estat.clickPaging("left", e, n),
                (i = _.bind(function () {
                  "function" == typeof t && t();
                }, this)),
                (this.lastActionIsIntended = !0))
              : (this.lastActionIsIntended = !1),
            this.renderForRolling((this.currentIdx + this.totalCount - 1) % this.totalCount, i),
            !1
          );
        },
        next: function (e, t, n) {
          this.trigger("next");
          var i = t;
          return (
            e
              ? (this.estat.clickPaging("right", e, n),
                (i = _.bind(function () {
                  "function" == typeof t && t();
                }, this)),
                (this.lastActionIsIntended = !0))
              : (this.lastActionIsIntended = !1),
            this.isLast() && this.modules.reset(),
            this.renderForRolling((this.currentIdx + 1) % this.totalCount, i),
            !1
          );
        },
        isTargetting: function () {
          return this.isFirstRolling && 0 !== this.currentIdx && !this.hasTabCode;
        },
        isLast: function () {
          return this.currentIdx + 1 === this.totalCount;
        },
        _preventRolling: !1,
        startRolling: function () {
          (this._preventRolling = !1), this.rolling();
        },
        resetRolling: function () {
          this.rolling();
        },
        rollingTimerID: 0,
        rolling: function () {
          clearInterval(this.rollingTimerID),
            (this.rollingTimerID = setInterval(
              _.bind(function () {
                this.isRollableState() && this.next();
              }, this),
              this.rollingInterval,
              0,
              this.rollingTimerID
            ));
        },
        pauseRolling: function () {
          clearInterval(this.rollingTimerID);
        },
        stopRolling: function () {
          (this._preventRolling = !0), clearInterval(this.rollingTimerID);
        },
        isVisible: function () {
          return this.$el.parent().is(":visible");
        },
        isRollableState: function () {
          return !1 === this._preventRolling && this.isVisible();
        },
        getSectionCode: function () {
          return this.currentSectionCode;
        },
        show: function () {
          this.$el.parent().show();
        },
        hide: function () {
          this.$el.parent().hide();
        },
      });
    }.call(this, __webpack_require__(4), __webpack_require__(8), __webpack_require__(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(11);
      var a = n(77);
      t.a = e.Collection.extend({
        seq: null,
        model: a.a,
        exists: function (e) {
          return !!this.get(e);
        },
        fetch: function (e, t) {
          var n = this.seq ? this.seq[e] : e,
            i = new a.a({ id: e });
          (this.currentPage = n), i.fetch(n), i.set({ callback: t }), this.add(i);
        },
        setCurrentIndex: function (e) {
          this.currentPage = this.seq ? this.seq[e] : 0;
        },
        getSeq: function () {
          return this.seq;
        },
        setSeq: function (e) {
          this.seq = e;
        },
        getCurrentPage: function () {
          return this.currentPage;
        },
        getNextPage: function () {
          if (this.seq) {
            var e = i.indexOf(this.seq, this.currentPage) + 1;
            return this.seq.length <= e ? this.seq[0] : this.seq[e];
          }
        },
        getPrevPage: function () {
          if (this.seq) {
            var e = i.indexOf(this.seq, this.currentPage) - 1;
            return e < 0 ? i.last(this.seq) : this.seq[e];
          }
        },
      });
    }.call(this, n(4), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(91);
      t.a = e.Collection.extend({
        model: i.a,
        exists: function (e) {
          return !!this.get(e);
        },
        fetch: function (e, t) {
          var n = this.get(e);
          n || ((n = new i.a({ id: e })), this.add(n)),
            n.fetch({
              success: function () {
                n.set({ callback: t });
              },
            });
        },
        isValid: function (e) {
          return this.get(e) && this.get(e).isValid();
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(11), n(10), n(13);
      var s = n(2),
        o = n(20),
        r = n(15),
        l = n(41);
      t.a = e.View.extend({
        articleId: null,
        articleBaseUrl: "//news.zum.com/zum/view?v=4&id=",
        initialize: function () {
          this.initializeDefinedModules(),
            (this.$iframe = this.$el.find("iframe")),
            (this.$iframeLoading = this.$el.find(".article_loading_box")),
            (this.$iframeWindow = this.$iframe.prop("contentWindow")),
            (this.isArticleBoxLoaded = !1),
            (this.newsFrameFixedDelay = 500);
          var e = this;
          (zum.news = zum.news || {}),
            (zum.news.resizeArticleView = function () {
              e.resizeFrame.call(e);
            }),
            (window.hideNewsLoading = function () {
              e.$iframeLoading.hide();
            });
        },
        initializeDefinedModules: function () {
          this.fixedManager = l.a;
        },
        articleShowTimerID: 0,
        show: function (e, t) {
          var n = this;
          if ((this.$iframeLoading.show(), "none" !== i("#layer_favorite_site_setup").css("display") && s.a.trigger("close:favoriteSiteConfigLayer"), e && this.$iframeWindow)) {
            r.a.Article.sendAndCloseScrollStat();
            var a = this.generateArticleURL(e, t);
            this.loadArticleFrame({
              url: a,
              before: function () {},
              after: function () {
                var e = this.$iframeWindow.document;
                e && e.title && (document.title = e.title);
              },
            }),
              this.$el.show(),
              (this.newsFrameFixedTimerID = i.setTimeout(
                function () {
                  n.fixedManager.scrollToFixedTop();
                },
                this.newsFrameFixedDelay,
                this.newsFrameFixedTimerID
              )),
              (this.articleId = e);
          } else location.replace("#!/home"), (this.articleId = null);
        },
        cancelShow: function () {
          i.clearTimeout(this.articleShowTimerID);
        },
        loadArticleFrame: function (e) {
          var t = this;
          this.$iframe.attr("url", e.url),
            "function" == typeof e.before && e.before.call(this),
            "function" == typeof e.after &&
              (this.$iframe.one("load", function () {
                try {
                  t.$iframeWindow.location.href.replace(/^http(s)?:/, "") === e.url.replace(/^http(s)?:/, "") || t.isArticleBoxLoaded || t.$iframeWindow.location.replace(e.url),
                    (t.isArticleBoxLoaded = !0),
                    e.after.apply(t);
                } catch (e) {
                  t.$iframeLoading.hide(), t.$iframe.height(920);
                }
              }),
              this.onAutoResizeFrame()),
            this.$iframeWindow.location.replace(e.url);
        },
        autoResizeTimerID: "articleViewFrameResizeTimerID",
        onAutoResizeFrame: function () {
          i.setInterval(a.bind(this.resizeFrame, this), 300, 0, this.autoResizeTimerID);
        },
        offAutoResizeFrame: function () {
          this.autoResizeTimerID && i.clearInterval(this.autoResizeTimerID);
        },
        prevDocHeight: 0,
        resizeFrame: function () {
          try {
            var e = i(this.$iframeWindow.document.body).height();
            e > 0 && this.prevDocHeight !== e && ((this.prevDocHeight = e), this.$iframe.height(Math.max(zum.$window.height(), e)), this.$el.height(Math.max(zum.$window.height(), e)));
          } catch (e) {}
        },
        hide: function () {
          this.cancelShow(), this.$el.hide(), this.$iframeWindow.location.replace("/document-domain?variants=" + window.variantsParam), this.offAutoResizeFrame(), (this.articleId = null);
        },
        generateArticleURL: function (e, t) {
          var n = a.omit(t, "news", "v", "id", "oid");
          return this.isArticleOn() && (n.oid = this.articleId), this.articleBaseUrl + e + "&" + i.param(n);
        },
        isArticleOn: function () {
          return !!this.articleId;
        },
        nextArticle: null,
        prevArticle: null,
        setNextArticle: function (e, t) {
          (this.articleId && e != this.articleId) || ((this.nextArticle = t), this.$iframe.attr({ nextTitle: t.title, articleId: e, nextCategoryName: t.category }));
        },
        setPrevArticle: function (e, t) {
          (this.articleId && e != this.articleId) || ((this.prevArticle = t), this.$iframe.attr({ prevTitle: t.title, articleId: e, prevCategoryName: t.category }));
        },
        highlight: function (e) {
          var t = e.el;
          if ("function" == typeof t) {
            var n = this;
            i.setInterval(
              function () {
                var a = t();
                a.attr("href").indexOf(e.url) >= 0 && (n.highlight({ el: a }), i.clearInterval("d_newslink_highlight"));
              },
              50,
              100,
              "d_newslink_highlight"
            );
          } else if (t) {
            i.clearInterval("d_newslink_highlight");
            var a = t.closest(".wrap_fixed");
            a.find(".news_box .item_selected").removeClass("item_selected"), a.find(".news_box_bottom .item_selected").removeClass("item_selected"), t.addClass("item_selected");
          }
        },
        clearHighlight: function (e) {
          e
            ? i(".d_newslink.item_selected").each(function () {
                -1 == i(this).attr("href").indexOf(e) && i(this).removeClass("item_selected");
              })
            : i(".d_newslink.item_selected").removeClass("item_selected");
        },
        next: function () {
          this.nextArticle && ((location.href = o.a.changeNewsLink(this.nextArticle.url, this.nextArticle.param)), (this.nextArticle = null));
        },
        prev: function () {
          this.prevArticle && ((location.href = o.a.changeNewsLink(this.prevArticle.url, this.prevArticle.param)), (this.prevArticle = null));
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9);
      var s = n(18);
      t.a = e.View.extend({
        $topBtn: null,
        $scroller: i("html, body"),
        $window: i(window),
        $document: i(document),
        initialize: function (e) {
          (this.events = {
            "click .btn_top": this.moveToTop,
            "click .btn_close": this.close,
            "click .font_size_button": this.changeFontSize,
            "click .cont_video_news a": this.clickVideoNews,
            "click .floating_article a": this.clickFloatingArticle,
            "mouseenter .preview_size": this.mouseEnterFontSize,
          }),
            (this.option = e),
            (this.showDelay = parseInt(e.showDelay) || 0),
            (this.keydown = a.bind(this.keydown, this)),
            this.bindEvents(),
            this.initEstat();
        },
        initEstat: function () {
          this.estat = {
            close: function (e) {
              var t = { pos: "front_ab", cm: "close_floating", puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] },
                n = e.clientX,
                a = e.clientX,
                o = e.pageX,
                r = e.pageY;
              null != n && null != a && null != o && null != r && (t = i.extend(!0, t, { sx: n, sy: a, px: o, py: r })), s.a.push("@Click", t, e);
            },
            moveToTop: function (e) {
              var t = { pos: "front_ab", cm: "up", puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] },
                n = e.clientX,
                a = e.clientX,
                o = e.pageX,
                r = e.pageY;
              null != n && null != a && null != o && null != r && (t = i.extend(!0, t, { sx: n, sy: a, px: o, py: r })), s.a.push("@Click", t, e);
            },
            changeFontSize: function (e) {
              var t = { pos: "front_ab", cm: i(".selected button").data("cm"), puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] };
              s.a.push("@Click", t, e);
            },
            clickFloatingArticle: function (e) {
              var t = { pos: "front_ab_late", cm: "item", puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] },
                n = "a" == e.currentTarget.tagName.toLowerCase() ? i(e.currentTarget) : i(e.currentTarget).find("a"),
                a = i(e.target).hasClass("bd") ? 1 : 0,
                o = n.closest("li").index() + 1,
                r = n.attr("href") + "&cm=" + t.pos + "&thumb=" + a + "&r=" + o;
              n.attr("href", r), s.a.click(t, e);
            },
            clickVideoNews: function (e) {
              var t = { pos: "front_ab_newsaround", cm: "item", puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] };
              s.a.click(t, e);
            },
            mouseEnterFontSize: function (e) {
              var t = { pos: "front_ab", cm: "font_setup", puid: window.puid || "", variants: window.variantsStat || [], targets: window.targetsStat || [] };
              s.a.push("@Click", t, e);
            },
          };
        },
        bindEvents: function () {
          this.unbindEvents(), this.$document.on("keydown", this.keydown), this.$document.on("keyup", this.keyup);
        },
        unbindEvents: function () {
          this.$document.off("keydown", this.keydown), this.$document.off("keyup", this.keyup);
        },
        keydown: function (e) {
          if (null == document.activeElement) return !0;
          if ("text" === document.activeElement.type) return !0;
          var t = e.keyCode || e.which;
          if (37 == t || 39 == t)
            switch ((e.preventDefault(), t)) {
              case 37:
                this.prev(e);
                break;
              case 39:
                this.next(e);
            }
          return !0;
        },
        moveToTop: function (e) {
          e.preventDefault(), this.$scroller.scrollTop(0), this.estat.moveToTop(e);
        },
        changeFontSize: function (e) {
          e.preventDefault();
          var t = i(e.currentTarget).data("font-size"),
            n = i(e.currentTarget).contents().clone();
          i(".select_size li").removeClass("selected"),
            i(e.currentTarget).closest("li").addClass("selected"),
            i(".preview_size").html(n),
            i("#iframe_article_box")[0].contentWindow.changeNewsFont(t),
            this.estat.changeFontSize(e);
        },
        clickFloatingArticle: function (e) {
          this.estat.clickFloatingArticle(e);
        },
        clickVideoNews: function (e) {
          this.estat.clickVideoNews(e);
        },
        mouseEnterFontSize: function (e) {
          e.preventDefault(), this.estat.mouseEnterFontSize(e);
        },
        close: function (e) {
          (location.href = "#!/home"), this.$scroller.scrollTop(0), this.estat.close(e);
        },
        next: function (e) {
          this.option.next(e);
        },
        prev: function (e) {
          this.option.prev(e);
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i, a) {
      n(9), n(11), n(75), n(10), n(31), n(13);
      var s = n(211),
        o = n(20),
        r = n(18);
      t.a = e.View.extend({
        initialize: function (e) {
          (this.events = { "mousedown .d_newslink": this.changeNewsLink, "click .d_newslink": this.clickNewsLink }),
            this,
            (this.module = new s.a()),
            this.listenTo(this.module, "change", this.moduleUpdated),
            (this.newsFrameDelay = parseInt(e.showDelay) || 0),
            this.initEstat(),
            (this.visible = this.$el.is(":visible")),
            (this.$videoNews = i("#d_today_issue_video li"));
        },
        initEstat: function () {
          this.estat = {
            clickNews: function (e) {
              var t = i(e.target).closest("a"),
                n = t.attr("href").match(/news=(\d+)/),
                a = n && n[1] ? n[1] : "";
              r.a.click(
                {
                  pos: "front_rb_issuephoto",
                  cm: "item",
                  articleId: a.substr(11),
                  pressCode: (function (e) {
                    var t = e.match(/news=(\d+)/);
                    return t && t[1] ? t[1].substr(0, 3) : "";
                  })(t.attr("href")),
                  tier: "0" + (t.closest("li.item").prevAll("li").length + 1),
                },
                e
              );
            },
          };
        },
        moduleUpdated: function (e) {
          this.render(e.get("callback")), e.set("callback", null);
        },
        changeNewsLink: function (e) {
          o.a.changeNewsLink(e);
        },
        clickNewsLink: function (e) {
          e.preventDefault();
          var t = o.a.changeNewsLink(e);
          if (location.href == t) return !1;
          if ((e && this.estat.clickNews(e), "_blank" === i(e.target).closest("a").attr("target")))
            if (-1 == navigator.appVersion.indexOf("Chrome")) {
              window.open("", "photoSlide").location.href = t;
            } else window.open(t, "");
          else location.href = t;
        },
        autoEllipsis: function () {
          i.setTimeout(
            a.bind(function () {
              this.$el.find(".item > a").each(function () {
                for (var e = 0; e < 20 && this.scrollHeight > 100 && this.innerHTML; e++) this.innerHTML = this.innerHTML.substr(0, this.innerHTML.length - 3) + "…";
              }),
                this.module.set({ html: this.$el.html() });
            }, this),
            100,
            "todayIssuePhotoTitleAutoEllipsis"
          );
        },
        render: function (e) {
          if (this.module.isValid()) {
            if (!this.rendered) {
              for (var t = i(this.module.getHtml()), n = t.find("li"), a = 0; a < this.$videoNews.length; a++) i(n[a]).remove();
              t.find("li:first").before(this.$videoNews), this.$el.html(t), this.autoEllipsis(), (this.rendered = !0);
            }
            "function" == typeof e && e();
          } else this.module.fetch(e);
        },
        visible: !1,
        show: function (e) {
          this.render(e),
            (this.visible = !0),
            this.newsFrameDelay > 0
              ? (this.showTimerID = i.setTimeout(
                  a.bind(function () {
                    this.$el.show(), this.autoEllipsis();
                  }, this),
                  this.newsFrameDelay,
                  this.showTimerID
                ))
              : (this.$el.show(), this.autoEllipsis());
        },
        hide: function () {
          i.clearTimeout(this.showTimerID), this.$el.hide(), (this.visible = !1);
        },
        isVisible: function () {
          return this.visible;
        },
        getNewsAnchors: function () {
          return this.$el.find("li:visible a.d_newslink");
        },
        getNewsAnchorIndex: function (e) {
          if (e)
            return this.getNewsAnchors().map(function (t, n) {
              return n.href && n.href.match(e) && t;
            })[0];
        },
        isFirstArticle: function (e) {
          return 0 == this.getNewsAnchorIndex(e);
        },
        isLastArticle: function (e) {
          var t = this.getNewsAnchorIndex(e);
          return this.getNewsAnchors().length - 1 == t;
        },
        getNextArticle: function (e) {
          var t = this.getNewsAnchorIndex(e);
          (t = void 0 === t ? 0 : t + 1), this.getNewsAnchors().length <= t && (t = 0);
          var n = this.getNewsAnchors().eq(t);
          if (n) return { url: n.attr("href"), title: n.attr("title").replace(/<br[^>]*>/g, ""), category: n.data("category"), el: n };
        },
        getPrevArticle: function (e) {
          var t = this.getNewsAnchorIndex(e);
          (t = void 0 === t ? -1 : t - 1) < 0 && (t = this.getNewsAnchors().length - 1);
          var n = this.getNewsAnchors().eq(t);
          if (n) return { url: n.attr("href"), title: n.attr("title").replace(/<br[^>]*>/g, ""), category: n.data("category"), el: n };
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(6);
      t.a = e.Model.extend({
        url: "/view/news/issue",
        defaults: { html: "", fetchTime: 0 },
        fetch: function (t) {
          var n = this;
          e.Model.prototype.fetch.call(this, {
            dataType: "html",
            data: i.a.getAjaxCommonRequestParam(),
            success: function () {
              n.set({ callback: t });
            },
          });
        },
        parse: function (e) {
          return { html: e, fetchTime: +new Date() };
        },
        getHtml: function () {
          return this.attributes.html;
        },
        isValid: function () {
          return this.attributes.fetchTime > +new Date() - 6e4;
        },
      });
    }.call(this, n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(9);
      var a,
        s = n(76),
        o = n(89),
        r = zum.settings.nfd;
      t.a = e.View.extend({
        refreshInterval: 6e4,
        refreshID: null,
        hotissueView: null,
        miniheaderView: null,
        module: null,
        initialize: function () {
          this.unload(), this.load(), a.startRefresh();
        },
        startRefresh: function () {
          var e = this;
          this.refreshID = i.setInterval(
            function () {
              e.module.fetch();
            },
            this.refreshInterval,
            this.refreshID
          );
        },
        stopRefresh: function () {
          i.clearInterval(this.refreshID);
        },
        load: function () {
          (a = this),
            (this.module = new o.a()),
            (this.hotissueView = new s.a({ el: i(".issue_keyword_wrap"), showDelay: r, module: this.module })),
            (this.miniheaderView = new s.a({ el: i(".mini_header_issue_keyword_wrap"), showDelay: r, module: this.module })),
            this.hotissueView.$el.find(".d_issue_keyword_tab").on("click", function (e) {
              var t = i(e.currentTarget),
                n = t.hasClass("issue_keyword_tab_0") ? "issue_keyword_tab_0" : "issue_keyword_tab_1",
                s = a.miniheaderView.$el.find("." + n);
              a.hotissueView.clickIssueKeywordTab(t, !0), a.miniheaderView.clickIssueKeywordTab(s, !1);
            }),
            this.miniheaderView.$el.find(".d_issue_keyword_tab").on("click", function (e) {
              var t = i(e.currentTarget),
                n = t.hasClass("issue_keyword_tab_0") ? "issue_keyword_tab_0" : "issue_keyword_tab_1",
                s = a.hotissueView.$el.find("." + n);
              a.miniheaderView.clickIssueKeywordTab(t, !0), a.hotissueView.clickIssueKeywordTab(s, !1);
            });
        },
        unload: function () {
          this.hotissueView && this.hotissueView.unload(), this.miniheaderView && this.miniheaderView.unload(), this.stopRefresh();
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(11);
      var a = n(0);
      t.a = e.View.extend({
        initialize: function (e) {
          this.events = { "click .item .clip_content:not(.channel)": this.clickOlapContent, "click .item .clip_content": this.clickClipContent, "click .view_more": this.clickTvzumHome };
        },
        sendClickStat: function (e, t) {
          a.a.send(
            "@Click",
            i.extend(
              { pos: "front_tvclip", outurl: -1 == i(t.target).closest("a").attr("href").indexOf("http") ? "http:" + i(t.target).closest("a").attr("href") : i(t.target).closest("a").attr("href") },
              e
            ),
            t
          );
        },
        sendOlapStat: function (e, t) {
          i.get(e).always(t);
        },
        clickOlapContent: function (e) {},
        clickClipContent: function (e) {
          var t = i(e.target).closest("a");
          this.sendClickStat({ cm: t.data("cm"), bannerName: t.data("order") > 4 ? "contents 2x" + (t.data("order") % 4) : "contents 1x" + t.data("order") }, e);
        },
        clickTvzumHome: function (e) {
          this.sendClickStat({ cm: "more" }, e);
        },
      });
    }.call(this, n(4), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      var a,
        s = n(0),
        o = (e(window), 0);
      t.a = i.View.extend({
        initialize: function (t) {
          (a = this),
            (this.$el = t.$el),
            e(".t_photo_slide_title", this.$el).append("<strong>1</strong>/" + this.$el.data("item-count")),
            (this.$photoSlideIndex = e(".t_photo_slide_title strong", this.$el)),
            (this.$photoSlide = e(".slide_main .slide_wrap", this.$el)),
            (this.$photoSlidePreview = e(".slide_preview .slide_wrap", this.$el)),
            this.$photoSlidePreview.on("init", function (t, n) {
              e(".slide_item a", a.$photoSlidePreview).click(function (e) {
                e.preventDefault();
              }),
                a.setPhotoPreviewEstat(),
                a.showSlick();
            }),
            this.$photoSlide.on("init", function (e, t) {
              a.setPhotoMainEstat(), a.showSlick();
            }),
            this.createSlickInstance();
        },
        showSlick: function () {
          o >= 1 ? e(".photo_slide_wrapper").css({ visibility: "visible" }) : o++;
        },
        createSlickInstance: function () {
          this.$photoSlide.slick({
            lazyLoad: "ondemand",
            asNavFor: ".slide_preview .slide_wrap",
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: !0,
            speed: 300,
            centerMode: !0,
            variableWidth: !0,
            draggable: !1,
          }),
            this.$photoSlidePreview
              .slick({
                asNavFor: ".slide_main .slide_wrap",
                infinite: !0,
                slidesToShow: 7,
                slidesToScroll: 1,
                centerPadding: "0px",
                centerMode: !0,
                arrows: !0,
                speed: 300,
                variableWidth: !0,
                focusOnSelect: !0,
                draggable: !1,
              })
              .on("beforeChange", function (e, t, n, i) {
                a.$photoSlideIndex.html(i + 1);
              });
        },
        setPhotoMainEstat: function () {
          e(".slide_item", this.$photoSlide).each(function (t, n) {
            var i = e(n),
              a = e("a", this).attr("href") + "?cm=front_photo_main";
            e("a", this).attr("href", a),
              i.click(function (e) {
                s.a.send("@Click", { pos: "front_photo_main", cm: "item", outurl: a });
              });
          }),
            e(".slick-arrow", this.$photoSlide).each(function (t, n) {
              e(n).click(function (t) {
                s.a.send("@Click", { pos: "front_photo_main", cm: "paging", outurl: e("a", this).attr("href") });
              });
            });
        },
        setPhotoPreviewEstat: function () {
          e(".slide_item", this.$photoSlidePreview).each(function (t, n) {
            e(n).click(function (t) {
              s.a.send("@Click", { pos: "front_photo_preview", cm: "preview_item", outurl: e("a", this).attr("href") });
            });
          }),
            e(".slick-arrow", this.$photoSlidePreview).each(function (t, n) {
              e(n).click(function (t) {
                s.a.send("@Click", { pos: "front_photo_preview", cm: "paging", outurl: e("a", this).attr("href") });
              });
            });
        },
      });
    }.call(this, n(3), n(4)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, i) {
      n(49);
      var a = n(0);
      e(window);
      t.a = i.View.extend({
        initialize: function (e) {
          this, (this.$el = e.$el), this.setRecentPhotoEstat();
        },
        setRecentPhotoEstat: function () {
          e("a", this.$el).each(function (t, n) {
            var i = e(n),
              s = i.attr("href") + "?cm=front_photo_new&r=" + (t + 1) + "&thumb=1";
            i.attr("href", s),
              i.click(function (e) {
                a.a.send("@Click", { pos: "front_photo_new", cm: "item", bannerName: "contents 1x2", outurl: s });
              });
          });
        },
      });
    }.call(this, n(3), n(4)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    n(234), n(235), n(92), n(236), (e.exports = n(237));
  },
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(3),
      a = n.n(i),
      s = n(8),
      o = n.n(s),
      r = (n(238), n(239), n(243), n(244), n(245), n(246), n(248), n(251), n(252), n(253), n(254), n(157)),
      l = n(49);
    (window.$ = window.jQuery = a.a), (window._ = o.a), new r.a({ el: a()("body") }), l.a.start(), (zum.initialized = !0);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(11);
      var t = !0;
      try {
        (window.location.href.indexOf("news=") > 0 || window.location.href.indexOf("newspaper=") > 0) && (t = !1);
      } catch (e) {}
      e(document).ready(function () {
        t && e("html,body").scrollTop(0);
      }),
        e(window).load(function () {
          (zum.windowLoaded = !0), t && e("html,body").scrollTop(0);
        }),
        (window.$zum = e(zum)),
        (zum.$window = e(window)),
        (zum.$body = e("body")),
        (zum.userTarget = zum.userTarget || {}),
        (zum.userTarget.nc = ""),
        null !== tmpNc && (zum.userTarget.nc = tmpNc);
    }.call(this, n(3)));
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    (function ($) {
      var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
        core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__),
        core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
        core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__),
        core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
        core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__),
        core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9),
        core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__),
        core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11),
        core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__),
        core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24),
        core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__),
        core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46),
        core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__),
        core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44),
        core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__),
        core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74),
        core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8__),
        core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21),
        core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__),
        core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10),
        core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__),
        core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36),
        core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__),
        core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30),
        core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__),
        core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31),
        core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_13__),
        core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13),
        core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_14__),
        core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23),
        core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_15__),
        core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26),
        core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__),
        core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17),
        core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_17__),
        core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(154),
        core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_18__);
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      var $zumapp = {},
        parameters,
        cache,
        queue,
        pointer,
        isdebug;
      (window.$zumapp = window.$zumapp || $zumapp),
        ($zumapp.version = "2.1.3"),
        ($zumapp.util =
          ((parameters = null),
          (cache = {}),
          {
            urlParams: function (e) {
              var t = void 0 === e;
              if (null !== parameters && t) return parameters;
              for (
                var n,
                  i,
                  a,
                  s = {},
                  o =
                    ((n = e || document.location.href), (i = n.indexOf("?")), (-1 === (a = n.indexOf("#")) ? n.substr(i + 1) : [n.substr(i + 1, a - i - 1), "&", n.substr(a + 1)].join("")).split("&")),
                  r = window.decodeURIComponent ? decodeURIComponent : unescape,
                  l = 0,
                  c = o.length;
                l < c;
                ++l
              ) {
                var u = o[l].indexOf("=");
                if (-1 !== u) {
                  var h = o[l].substring(0, u),
                    d = o[l].substring(u + 1);
                  (d = d.replace(/\+/g, " ")), (s[h] = r(d));
                }
              }
              return t && (parameters = s), s;
            },
            encodeValues: function (e, t) {
              var n = !t,
                i = [],
                a = !1;
              for (var s in e) e.hasOwnProperty(s) && !/___$/.test(s) && (a ? i.push("&") : (a = !0), i.push(n ? encodeURIComponent(s) : s), i.push("="), i.push(n ? encodeURIComponent(e[s]) : e[s]));
              return i.join("");
            },
            clone: function (e) {
              var t = [];
              if ("object" == _typeof(e) && "[object Array]" == Object.prototype.toString.call(e)) t = [];
              else {
                if ("object" != _typeof(e)) return t;
                t = {};
              }
              for (p in e)
                "object" == _typeof(e[p]) && "[object Array]" == Object.prototype.toString.call(e[p])
                  ? (t[p] = this.cloneArray(e[p]))
                  : "object" == _typeof(e[p])
                  ? (t[p] = this.clone(e[p]))
                  : (t[p] = e[p]);
              return t;
            },
            cloneArray: function (e) {
              for (var t = [], n = 0; n <= e.length; n++) "object" == _typeof(e[n]) ? t.push($zumapp.util.clone(e[n])) : t.push(e[n]);
              return t;
            },
            makeClosure: function (e, t, n) {
              for (var i = [], a = 2, s = arguments.length; a < s; ++a) i.push(arguments[a]);
              return function () {
                for (var n = i.slice(), a = 0, s = arguments.length; a < s; ++a) n.push(arguments[a]);
                return t.apply(e, n);
              };
            },
            makeEnum: function (e) {
              var t,
                n,
                i = {};
              for (t = 0; (n = e[t]); ++t) i[n] = n;
              return i;
            },
            shuffle: function (e) {
              for (var t, n, i = e.length; 1 <= --i; ) (t = Math.floor(Math.random() * (i + 1))), (n = e[i]), (e[i] = e[t]), (e[t] = n);
              return e;
            },
            preload: function (e) {
              var t = cache[e];
              return e && !t && (((t = document.createElement("img")).src = e), (cache[e] = t)), t;
            },
            safeIndex: function (e, t) {
              var n = "number" == typeof t ? t : t.length;
              if (e < 0) for (; e < 0; ) e += n;
              else e >= n && (e %= n);
              return "number" == typeof t ? e : t[e];
            },
          })),
        ($zumapp.json = (function () {
          if (window.JSON && window.JSON.parse && window.JSON.stringify) {
            var endsWith___ = /___$/;
            return {
              parse: function (e) {
                try {
                  return window.JSON.parse(e);
                } catch (e) {
                  return !1;
                }
              },
              stringify: function (e) {
                try {
                  return window.JSON.stringify(e, function (e, t) {
                    return endsWith___.test(e) ? null : t;
                  });
                } catch (e) {
                  return null;
                }
              },
            };
          }
          var f = function (e) {
              return e < 10 ? "0" + e : e;
            },
            stringify = function e(t) {
              var n,
                i,
                a,
                s,
                o,
                r = /["\\\x00-\x1f\x7f-\x9f]/g;
              switch (_typeof(t)) {
                case "string":
                  return r.test(t)
                    ? '"' +
                        t.replace(r, function (e) {
                          var t = m[e];
                          return t || ((t = e.charCodeAt()), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16));
                        }) +
                        '"'
                    : '"' + t + '"';
                case "number":
                  return isFinite(t) ? String(t) : "null";
                case "boolean":
                case "null":
                  return String(t);
                case "object":
                  if (!t) return "null";
                  if (((n = []), "number" == typeof t.length && !t.propertyIsEnumerable("length"))) {
                    for (s = t.length, i = 0; i < s; i += 1) n.push(e(t[i]) || "null");
                    return "[" + n.join(",") + "]";
                  }
                  for (a in t) a.match("___$") || (t.hasOwnProperty(a) && "string" == typeof a && (o = e(t[a])) && n.push(e(a) + ":" + o));
                  return "{" + n.join(",") + "}";
              }
              return "";
            };
          Date.prototype.toJSON = function () {
            return [this.getUTCFullYear(), "-", f(this.getUTCMonth() + 1), "-", f(this.getUTCDate()), "T", f(this.getUTCHours()), ":", f(this.getUTCMinutes()), ":", f(this.getUTCSeconds()), "Z"].join(
              ""
            );
          };
          var m = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };
          return {
            stringify: stringify,
            parse: function parse(text) {
              return (
                !!/^[\],:{}\s]*$/.test(
                  text
                    .replace(/\\["\\\/b-u]/g, "@")
                    .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
                    .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
                ) && eval("(" + text + ")")
              );
            },
          };
        })()),
        ($zumapp.async = function (e) {
          if (
            ((e.data = e.data || {}),
            (e.method = (e.method || "GET").toUpperCase()),
            (e.dataType = (e.dataType || "JSON").toUpperCase()),
            (e.success = e.success || function () {}),
            (e.error = e.error || function () {}),
            (e.cache = void 0 !== e.cache && e.cache >= 0 ? e.cache : 3600),
            (e.numEntries = e.numEntries && e.numEntries > 0 ? e.numEntries : 3),
            (e.headers = e.headers || {}),
            void 0 !== e.url && "" != e.url)
          )
            if ("JSON" == e.dataType || "TEXT" == e.dataType || "DOM" == e.dataType || "FEED" == e.dataType) {
              var t = {};
              switch (
                ((t[$zumapp.io.RequestParameters.METHOD] = e.method), (t[$zumapp.io.RequestParameters.REFRESH_INTERVAL] = e.cache), (t[$zumapp.io.RequestParameters.HEADERS] = e.headers), e.dataType)
              ) {
                case "JSON":
                  t[$zumapp.io.RequestParameters.CONTENT_TYPE] = $zumapp.io.ContentType.JSON;
                  break;
                case "DOM":
                  t[$zumapp.io.RequestParameters.CONTENT_TYPE] = $zumapp.io.ContentType.DOM;
                  break;
                case "TEXT":
                  t[$zumapp.io.RequestParameters.CONTENT_TYPE] = $zumapp.io.ContentType.TEXT;
                  break;
                case "FEED":
                  (t[$zumapp.io.RequestParameters.NUM_ENTRIES] = e.numEntries), (t[$zumapp.io.RequestParameters.CONTENT_TYPE] = $zumapp.io.ContentType.FEED);
              }
              if ("POST" == e.method) t[$zumapp.io.RequestParameters.POST_DATA] = $zumapp.util.encodeValues(e.data);
              else if ("GET" == e.method) {
                var n = $zumapp.util.encodeValues(e.data);
                "" != n && (e.url.indexOf("?") > -1 ? (e.url += "&" + n) : (e.url += "?" + n));
              }
              $zumapp.io.makeRequest(e.url, e.success, e.error, t, e.callback);
            } else "JSONP" == e.dataType ? $zumapp.io.makeJsonp(e.url, e.data, e.success, e.error, e.callback) : e.error(400, ["unknown dataType"]);
          else e.error(400, ["url is missing."]);
        }),
        ($zumapp.io = (function () {
          var e = 0;
          function t(t, n, i, a, s) {
            var o = document.createElement("script"),
              r = null;
            t
              ? (s ? s.length > 100 && ((s = s.substring(0, 100)), (s += "_" + e++)) : ((s = t.replace(/[^a-zA-Z0-9_]/g, "")), (s += "_" + e++)),
                (s = "ZUM_" + s),
                ((n = n || {}).callback = s),
                (window[s] = function (e) {
                  r = e;
                }),
                window.ActiveXObject
                  ? (o.onreadystatechange = function (e) {
                      ("complete" !== this.readyState && "loaded" !== this.readyState) ||
                        (null !== r ? i(r) : a(600, ["data is null or JSONP http status error"], r), (this.onreadystatechange = null));
                    })
                  : ((o.onload = function () {
                      null !== r ? i(r) : a(602, ["data is null"], r), (this.onload = this.onerror = null);
                    }),
                    (o.onerror = function () {
                      a(601, ["JSONP http status error"], r), (this.onload = this.onerror = null);
                    })),
                o.setAttribute("type", "text/javascript"),
                o.setAttribute("src", t + (t.indexOf("?") > -1 ? "&" : "?") + $zumapp.util.encodeValues(n)),
                (o.async = !0),
                document.getElementsByTagName("head")[0].appendChild(o),
                (o = null))
              : a();
          }
          return {
            makeRequest: function (e, n, i, a, s) {
              var o = a || {},
                r = o.HEADERS || {},
                l = o.METHOD || "GET",
                c = o.REFRESH_INTERVAL;
              "GET" === l && void 0 === c && (c = 3600),
                "POST" !== l || r["Content-Type"] || (r["Content-Type"] = "application/x-www-form-urlencoded"),
                s || ((s = e.replace(/[^a-zA-Z0-9_]/g, "")).length > 100 && (s = s.substring(0, 100)));
              $zumapp.util.urlParams();
              t(
                "//proxy.zum.com/remoteRequest",
                { url: e, httpMethod: l, headers: $zumapp.util.encodeValues(r, !1), postData: o.POST_DATA || "", refresh: c },
                function (e) {
                  var t = (function (e, t) {
                    var n = { text: t.body, rc: t.rc || 200, errors: [] };
                    if (n.rc < 200 || n.rc >= 400) n.errors = [n.rc + " Error"];
                    else if (n.text)
                      switch ((n.rc >= 300 && n.rc < 400 && (e.CONTENT_TYPE = "TEXT"), e.CONTENT_TYPE)) {
                        case "JSON":
                        case "FEED":
                          (n.data = $zumapp.json.parse(n.text)), n.data || (n.errors.push("500 Failed to parse JSON"), (n.rc = 500), (n.data = n.text));
                          break;
                        case "DOM":
                          var i;
                          if ("undefined" != typeof ActiveXObject)
                            ((i = new ActiveXObject("Microsoft.XMLDOM")).async = !1),
                              (i.validateOnParse = !1),
                              (i.resolveExternals = !1),
                              i.loadXML(n.text) ? (n.data = i) : (n.errors.push("500 Failed to parse XML"), (n.rc = 500));
                          else
                            "parsererror" === (i = new DOMParser().parseFromString(n.text, "text/xml")).documentElement.nodeName
                              ? (n.errors.push("500 Failed to parse XML"), (n.rc = 500))
                              : (n.data = i);
                          break;
                        default:
                          n.data = n.text;
                      }
                    return n;
                  })(o, e);
                  t.data ? "function" == typeof n && n(t.data) : "function" == typeof i && i(t.rc, t.errors, t.data);
                },
                i,
                s
              );
            },
            makeJsonp: t,
            RequestParameters: $zumapp.util.makeEnum([
              "METHOD",
              "CONTENT_TYPE",
              "POST_DATA",
              "HEADERS",
              "AUTHORIZATION",
              "NUM_ENTRIES",
              "GET_SUMMARIES",
              "GET_FULL_HEADERS",
              "REFRESH_INTERVAL",
              "OAUTH_SERVICE_NAME",
              "OAUTH_USE_TOKEN",
              "OAUTH_TOKEN_NAME",
              "OAUTH_REQUEST_TOKEN",
              "OAUTH_REQUEST_TOKEN_SECRET",
              "OAUTH_RECEIVED_CALLBACK",
            ]),
            MethodType: $zumapp.util.makeEnum(["GET", "POST"]),
            ContentType: $zumapp.util.makeEnum(["TEXT", "DOM", "JSON", "FEED"]),
          };
        })()),
        ($zumapp.setPrefs = function (e) {
          $zumapp.options.set(e);
        }),
        ($zumapp.setTickInterval = function (e) {
          $zumapp.tickInterval = e;
        }),
        ($zumapp.tickInterval = 60),
        ($zumapp.options =
          ((queue = []),
          (pointer = 0),
          {
            reset: function () {
              (queue = []), (pointer = 0);
            },
            set: function (e) {
              queue.push(e);
            },
            get: function () {
              return queue[pointer++] || {};
            },
          })),
        ($zumapp.init = function (e, t, n) {
          try {
            var i, a, s, o, r;
            if (n) {
              var l = $(n);
              (a = (i = $zumapp.options.get()).model), (s = i.view), (r = (o = l.parents("li")).data("zumapp"));
            } else (a = (i = $zumapp.options.get()).model), (s = i.view), (o = $("#box_list").children("li").eq(a.collection.indexOf(a)));
            if (o && o.length > 0)
              if (r) r.bindFunc(e, t), r.init(o);
              else {
                var c = a.get("aid"),
                  u = a.get("refresh");
                if (0 == arguments.length || "function" != typeof e) return void $zumapp.debug.msg("There is not init function.");
                var h = arguments.length > 1 && "function" == typeof t;
                if (h && "function" != typeof t) return void $zumapp.debug.msg("Setting function is not defined correctly.");
                ((r = new window.zumapp(e, t)).model = a),
                  (r.view = s),
                  a.set("zumapp", r),
                  o.data("zumapp", r),
                  r.prefs.init(c, a.get("prefs")),
                  r.init(o),
                  void 0 !== u && Number(u) > 0 && r.refresh.init(u);
              }
            return r;
          } catch (e) {
            return $zumapp.debug.msg("Exception on init : " + e), null;
          }
        }),
        ($zumapp.debug =
          ((isdebug = !1),
          {
            enable: function (e) {
              isdebug = "boolean" == typeof e && e;
            },
            msg: function (e) {
              !0 === isdebug && ("undefined" != typeof console && void 0 !== console.log ? console.log(e) : alert(e));
            },
          })),
        ($zumapp.movePageHandler = function (e, t) {
          if ("Gecko" === navigator.product) window.open(e, t);
          else {
            var n = document.createElement("a");
            n.setAttribute("href", e), n.setAttribute("target", t), (n.style.display = "none"), document.getElementsByTagName("body")[0].appendChild(n), n.click();
          }
        }),
        ($zumapp.uniqueKey = 0);
      var zumapp = {};
      (window.zumapp = zumapp =
        function (e, t) {
          var n = $(this);
          this.bindFunc(e, t),
            (this.prefs = (function () {
              var e = null,
                t = null;
              function i(n, i) {
                if (void 0 === n) return !1;
                if (((e = n), "object" == _typeof(i))) {
                  var a = 0;
                  for (var s in i) a++;
                  0 == a && (i = null);
                } else i = null;
                return (t = i), !0;
              }
              return {
                get: function (e) {
                  try {
                    return null == t ? null : t[e] && void 0 !== t[e] ? t[e] : null;
                  } catch (e) {
                    return $zumapp.debug.msg("Exception on prefs.get : " + e), null;
                  }
                },
                set: function (e, i) {
                  try {
                    return null == t && (t = {}), (t[e] = i), n.trigger("set:zumapp:prefs", t), !0;
                  } catch (e) {
                    return $zumapp.debug.msg("Exception on prefs.set : " + e), !1;
                  }
                },
                remove: function (e) {
                  try {
                    return null == t ? (t = {}) : delete t[e], n.trigger("set:zumapp:prefs", t), !0;
                  } catch (e) {
                    return $zumapp.debug.msg("Exception on prefs.remove : " + e), !1;
                  }
                },
                readonly: function () {
                  return "undefined" != typeof zum && void 0 !== zum.readonly && zum.readonly;
                },
                clear: function () {
                  try {
                    return (t = {}), n.trigger("set:zumapp:prefs", null), !0;
                  } catch (e) {
                    return $zumapp.debug.msg("Exception on prefs.clear : " + e), !1;
                  }
                },
                allprefs: function () {
                  return null == t ? {} : t;
                },
                init: function (e, t) {
                  i(e, t);
                },
                getAid: function () {
                  return e;
                },
                getPrefs: function () {
                  return t;
                },
              };
            })());
          var i,
            a,
            s,
            o,
            r,
            l = this;
          (this.refresh =
            ((i = !1),
            (a = 0),
            (s = 0),
            {
              init: function (e) {
                e >= 300
                  ? ((a = e),
                    l.$el.mouseover(function () {
                      i = !0;
                    }),
                    l.$el.mouseout(function () {
                      i = !1;
                    }))
                  : (a = 0);
              },
              tick: function () {
                a > 0 && ++s * $zumapp.tickInterval == a && ((s = 0), !1 === i && "function" == typeof l.refreshHandler && l.refreshHandler.call());
              },
            })),
            (this.status =
              ((o = !0),
              {
                execute: (r = function () {
                  o && "function" == typeof l.activeHandler ? l.activeHandler.call() : o || "function" != typeof l.inactiveHandler || l.inactiveHandler.call();
                }),
                active: function () {
                  (o = !0), r();
                },
                inactive: function () {
                  (o = !1), r();
                },
              })),
            (this._uniqueKey = $zumapp.uniqueKey++);
        }),
        (zumapp.prototype.init = function (e) {
          this.$el = e;
          try {
            this.initializer(e, this), e.trigger("init:zumapp", this);
          } catch (e) {
            $zumapp.debug.msg("Exception on init in instance : " + e);
          }
        }),
        (zumapp.prototype.bindFunc = function (e, t) {
          (this.initializer = e), (this.setter = t || null);
        }),
        (zumapp.prototype.pageHandler = function (e, t) {
          var n = null;
          (n = "string" == typeof e && this.$el ? this.$el.find(e) : $(e)) && "function" == typeof t && 0 != n.length
            ? (n.click(function () {
                return t.call(), !1;
              }),
              navigator.userAgent.indexOf("MSIE") > -1 &&
                n.dblclick(function () {
                  return !1;
                }))
            : $zumapp.debug.msg("Invalid parameters or cannot find element as you defined.");
        }),
        (zumapp.prototype.index = function () {
          return this.$el.index();
        }),
        (zumapp.prototype.uniqueKey = function () {
          return this._uniqueKey;
        }),
        (zumapp.prototype.customMovePageTarget = null),
        (zumapp.prototype.setCustomMovePageTarget = function (e) {
          this.customMovePageTarget = e;
        }),
        (zumapp.prototype.getMovePageTarget = function () {
          return this.customMovePageTarget || this.view.getLinkTarget();
        }),
        (zumapp.prototype.movePage = function (e) {
          var t = this.getMovePageTarget(),
            n = !1,
            i = null,
            a = this;
          void 0 !== this.prefs.getAid() && (n = !0),
            "_top" == t && !0 === n
              ? this.model.collection.afterSync(function () {
                  a.view.moveUrlStat(e),
                    (i = setTimeout(function () {
                      window.clearTimeout(i), $zumapp.movePageHandler(e, t);
                    }, 100));
                })
              : ($zumapp.movePageHandler(e, t), this.view.moveUrlStat(e));
        }),
        (zumapp.prototype.refreshHandler = null),
        (zumapp.prototype.registerRefreshHandler = function (e) {
          "function" == typeof e && (this.refreshHandler = e);
        }),
        (zumapp.prototype.activeHandler = null),
        (zumapp.prototype.inactiveHandler = null),
        (zumapp.prototype.registerStatusHandler = function (e, t) {
          "function" == typeof e && (this.activeHandler = e), "function" == typeof t && (this.inactiveHandler = t);
        }),
        (zumapp.prototype.getZuid = function () {
          if (document.cookie && "" != document.cookie)
            for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
              var n = e[t].replace(/^\s+|\s+$/g, "");
              if ("_ZUID=" == n.substring(0, "_ZUID".length + 1)) return decodeURIComponent(n.substring("_ZUID".length + 1));
            }
          return null;
        }),
        (zumapp.prototype.getPermanentContext = function () {
          zum.zumpageId;
          return "undefined" == typeof zum || void 0 === zum.zumpageId || null === zum.zumpageId || void 0 === zum.zumpageId.length || 0 === zum.zumpageId.length ? null : zum.zumpageId;
        }),
        (Number.prototype.currency = function () {
          for (var e = this.toString().split("."), t = "", n = e[0].length - 3; n >= 0; n -= 3) t = "," + e[0].substr(n, 3) + t;
          return (t = 0 == (n += 3) ? t.substr(1) : e[0].substr(0, n) + t), e[1] && (t += "." + e[1]), t;
        }),
        (Number.prototype.roundFloat = function (e) {
          return Math.round(this * Math.pow(10, e)) / Math.pow(10, e);
        });
    }.call(this, __webpack_require__(3)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e, t, i) {
      n(9), n(11), n(10), n(13);
      var a = n(203),
        s = n(90),
        o = n(0),
        r = (n(2), n(6)),
        l = n(12),
        c = n(1);
      e.View.extend({
        moduleKey: "",
        drawGraphTimeout: null,
        graphScript: null,
        params: null,
        initialize: function (e) {
          (this.moduleKey = e.moduleKey),
            (this.module = new s.a({ id: this.moduleKey })),
            this.listenTo(this.module, "change", this.moduleUpdated),
            (this.stockModule = new a.a({ view: l.a.get(c.a.Names.hubStockView) || "graph" })),
            this.listenTo(this.stockModule, "change", this.stockModuleUpdated),
            this.bindEvents(),
            this.drawGraph(),
            (zum.externalStockClickStat = t.bind(this.sendGraphClickStatistics, this)),
            (zum.externalStockHideGraph = t.bind(this.hideGraph, this));
        },
        construct: function () {
          this.render(this.moduleKey);
        },
        moduleUpdated: function (e) {
          this.render(this.moduleKey);
        },
        stockModuleUpdated: function (e) {
          this.stockModuleRender(e.get("view"), e.get("mp"), e.get("callback"));
        },
        render: function (e, t) {
          this.module.isValid() ? (this.$el.html(this.module.getHtml()), this.drawGraph(), this.updateTimeInfo()) : this.module.fetch(e);
        },
        stockModuleRender: function (e, t, n) {
          var i = this.$el.find(".d_stock_interest_body");
          i.html(this.stockModule.getHtml()),
            i
              .removeClass("graph_view")
              .removeClass("list_view")
              .addClass(this.stockModule.attributes.view + "_view"),
            this.drawGraph(),
            this.updateTimeInfo();
        },
        bindEvents: function () {
          this.events = {
            "click .d_nav": this.clickViewChange,
            "click .d_view_change": this.clickViewChange,
            "click .d_btn_help": this.toggleHelp,
            "click .d_btn_close": this.hideHelp,
            "click .d_btn_stock_more": this.sendClickStatistics,
            "click .d_stock_title": this.sendClickStatistics,
            "click .d_graph_delayed_refresh": this.drawGraph,
          };
        },
        destroy: function () {},
        clickViewChange: function (e) {
          this.abortGraph(), this.sendClickStatistics(e);
          var t = i(e.currentTarget),
            n = t.data("view") || "graph",
            a = t.data("mp");
          l.a.set(c.a.Names.hubStockView, n), this.stockModule.fetch(n, a);
        },
        clickItems: function (e) {
          this.sendClickStatistics(e);
        },
        sendGraphClickStatistics: function (e) {
          var t = e.CodeName || "",
            n = e.startdate || "19700101",
            a = new Date(),
            s = e.enddate || "" + a.getFullYear() + (a.getMonth() + 1) + a.getDate(),
            l = "https://search.zum.com/search.zum?method=news&option=date&query=" + encodeURIComponent(t) + "&startdate=" + n + "&enddate=" + s + "&datetype=input&scp=0&qm=g_stockhub.top",
            c = i(".d_hub_content"),
            u = {
              hubname: c.data("name"),
              hubtype: c.data("type"),
              huborder: c.data("order"),
              hubdate: "",
              viewmode: "graph",
              bannerName: "contents1x2",
              title: t,
              pos: "item",
              cm: "graph",
              titurl: l,
              outurl: "",
              page: 0,
            };
          return (
            o.a.send(o.a.HubStat.eventName.click, u),
            i.setTimeout(function () {
              r.a.movePage(l);
            }, 100),
            !1
          );
        },
        sendClickStatistics: function (e) {
          var t = i(e.currentTarget),
            n = t.closest(".d_hub_content"),
            a = t.closest(".d_hub_slot"),
            s = t.attr("href"),
            l = t.data("title") || "",
            c = (a.data("name") || "") + (t.data("order") || ""),
            u = {
              hubname: n.data("name"),
              hubtype: n.data("type"),
              huborder: n.data("order"),
              hubdate: "",
              viewmode: this.stockModule.attributes.view,
              bannerName: "contents1x0" === c || "contents1x" === c ? "" : c,
              title: l.replace(/'/g, ""),
              pos: t.data("pos") || "item",
              cm: i(e.target).data("cm") || "",
            };
          return (
            s.indexOf("search.zum.com") > -1 ? (u.titurl = s) : (u.outurl = "javascript:;" === s ? "" : s),
            o.a.send(o.a.HubStat.eventName.click, u),
            "_blank" === t.attr("target") ||
              (i.setTimeout(function () {
                r.a.movePage(s);
              }, 100),
              !1)
          );
        },
        toggleHelp: function () {
          var e = this.$el.find(".d_stock_pop_help");
          "none" == e.css("display") ? e.show() : e.hide();
        },
        hideHelp: function () {
          i(".d_stock_pop_help").hide();
        },
        drawGraph: function () {
          if ("graph" === this.stockModule.attributes.view && this.$el.find("#stock_graph").length > 0) {
            this.$el.find("#graph_error_handle").hide(), this.$el.find("#graph_loading").show();
            var e = this;
            if (StockChart && StockChart.setParameters && "function" == typeof StockChart.setParameters && StockChart.drawChart && "function" == typeof StockChart.drawChart) e.showGraph();
            else {
              var t = !1;
              (this.graphScript = i.getScript("http://data.search.zum.com/stock/chart/script/draw", function (n, i, a) {
                (t = !0), e.showGraph(), (e.graphScript = null);
              })),
                (this.drawGraphTimeout = i.setTimeout(
                  function () {
                    t || e.hideGraph();
                  },
                  3e3,
                  this.drawGraphTimeout
                ));
            }
          }
        },
        showGraph: function () {
          0 !== this.drawGraphTimeout && i.clearTimeout(this.drawGraphTimeout),
            (this.params = i.extend(zum.stock)),
            (this.params.design = { w: 568, h1: 99, h2: 42 }),
            (this.params.callback = { onError: zum.externalStockHideGraph, onStat: zum.externalStockClickStat }),
            StockChart.setParameters(this.params),
            StockChart.drawChart(),
            this.$el.find("#graph_error_handle").hide(),
            this.$el.find("#graph_loading").hide(),
            this.$el.find("#stock_graph").parent().show();
        },
        abortGraph: function () {
          null !== this.graphScript && (this.graphScript.abort(), (this.graphScript = null));
        },
        hideGraph: function () {
          this.abortGraph(), this.$el.find("#graph_error_handle").show(), this.$el.find("#graph_loading").hide(), this.$el.find("#stock_graph").parent().hide();
        },
        updateTimeInfo: function () {
          var e = this.$el.find(".d_time_info"),
            t = this.$el.find("#d_time_info_new");
          t.length > 0 && (e.html(t.html()), t.remove());
        },
      });
    }.call(this, n(4), n(8), n(3)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, t, i) {
      n(9), n(11), n(10), n(13);
      var a = n(2),
        s = n(20),
        o = n(15),
        r = n(41);
      e.View.extend({
        articleId: null,
        articleBaseUrl: "//news.zum.com/zum/view?v=4&rc=popin&id=",
        initialize: function () {
          this.initializeDefinedModules(),
            (this.$iframe = this.$el.find("iframe")),
            (this.$iframeLoading = this.$el.find(".article_loading_box")),
            (this.$iframeWindow = this.$iframe.prop("contentWindow")),
            (this.isArticleBoxLoaded = !1),
            (this.newsFrameFixedDelay = 500);
          var e = this;
          (zum.news = zum.news || {}),
            (zum.news.resizeArticleView = function () {
              e.resizeFrame.call(e);
            }),
            (window.hideNewsLoading = function () {
              e.$iframeLoadin4g.hide();
            });
        },
        initializeDefinedModules: function () {
          this.fixedManager = r.a;
        },
        articleShowTimerID: 0,
        show: function (e, n) {
          var i = this;
          if ((this.$iframeLoading.show(), "none" !== t("#layer_favorite_site_setup").css("display") && a.a.trigger("close:favoriteSiteConfigLayer"), e && this.$iframeWindow)) {
            o.a.Article.sendAndCloseScrollStat();
            var s = this.generateArticleURL(e, n);
            this.loadArticleFrame({
              url: s,
              before: function () {},
              after: function () {
                var e = this.$iframeWindow.document;
                e && e.title && (document.title = e.title);
              },
            }),
              this.$el.show(),
              (this.newsFrameFixedTimerID = t.setTimeout(
                function () {
                  i.fixedManager.scrollToFixedTop();
                },
                this.newsFrameFixedDelay,
                this.newsFrameFixedTimerID
              )),
              (this.articleId = e);
          } else location.replace("#!/home"), (this.articleId = null);
        },
        cancelShow: function () {
          t.clearTimeout(this.articleShowTimerID);
        },
        loadArticleFrame: function (e) {
          var t = this;
          this.$iframe.attr("url", e.url),
            "function" == typeof e.before && e.before.call(this),
            "function" == typeof e.after &&
              (this.$iframe.one("load", function () {
                t.$iframeWindow.location.href === e.url || t.isArticleBoxLoaded || t.$iframeWindow.location.replace(e.url), (t.isArticleBoxLoaded = !0), e.after.apply(t);
              }),
              this.onAutoResizeFrame()),
            this.$iframeWindow.location.replace(e.url);
        },
        autoResizeTimerID: "articleViewFrameResizeTimerID",
        onAutoResizeFrame: function () {
          t.setInterval(i.bind(this.resizeFrame, this), 300, 0, this.autoResizeTimerID);
        },
        offAutoResizeFrame: function () {
          this.autoResizeTimerID && t.clearInterval(this.autoResizeTimerID);
        },
        prevDocHeight: 0,
        resizeFrame: function () {
          try {
            var e = t(this.$iframeWindow.document.body).height();
            e > 0 && this.prevDocHeight !== e && ((this.prevDocHeight = e), this.$iframe.height(Math.max(zum.$window.height(), e)));
          } catch (e) {}
        },
        hide: function () {
          this.cancelShow(), this.$el.hide(), this.$iframeWindow.location.replace("/document-domain?variants=" + window.variantsParam), this.offAutoResizeFrame(), (this.articleId = null);
        },
        generateArticleURL: function (e, n) {
          var a = i.omit(n, "news", "v", "id", "oid");
          return this.isArticleOn() && (a.oid = this.articleId), this.articleBaseUrl + e + "&" + t.param(a);
        },
        isArticleOn: function () {
          return !!this.articleId;
        },
        nextArticle: null,
        prevArticle: null,
        setNextArticle: function (e, t) {
          (this.articleId && e != this.articleId) || ((this.nextArticle = t), this.$iframe.attr({ nextTitle: t.title, articleId: e, nextCategoryName: t.category }));
        },
        setPrevArticle: function (e, t) {
          (this.articleId && e != this.articleId) || ((this.prevArticle = t), this.$iframe.attr({ prevTitle: t.title, articleId: e, prevCategoryName: t.category }));
        },
        highlight: function (e) {
          var n = e.el;
          if ("function" == typeof n) {
            var i = this;
            t.setInterval(
              function () {
                var a = n();
                a.attr("href").indexOf(e.url) >= 0 && (i.highlight({ el: a }), t.clearInterval("d_newslink_highlight"));
              },
              50,
              100,
              "d_newslink_highlight"
            );
          } else if (n) {
            t.clearInterval("d_newslink_highlight");
            var a = n.closest(".wrap_fixed");
            a.find(".news_box .item_selected").removeClass("item_selected"), a.find(".news_box_bottom .item_selected").removeClass("item_selected"), n.addClass("item_selected");
          }
        },
        clearHighlight: function (e) {
          e
            ? t(".d_newslink.item_selected").each(function () {
                -1 == t(this).attr("href").indexOf(e) && t(this).removeClass("item_selected");
              })
            : t(".d_newslink.item_selected").removeClass("item_selected");
        },
        next: function () {
          this.nextArticle && ((location.href = s.a.changeNewsLink(this.nextArticle.url, this.nextArticle.param)), (this.nextArticle = null));
        },
        prev: function () {
          this.prevArticle && ((location.href = s.a.changeNewsLink(this.prevArticle.url, this.prevArticle.param)), (this.prevArticle = null));
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, t, i) {
      n(9), n(11), n(10), n(13);
      var a = n(2),
        s = n(20),
        o = n(15),
        r = n(41);
      e.View.extend({
        articleId: null,
        articleBaseUrl: "//news.zum.com/zum/view?v=4&rc=dable&id=",
        initialize: function () {
          this.initializeDefinedModules(),
            (this.$iframe = this.$el.find("iframe")),
            (this.$iframeLoading = this.$el.find(".article_loading_box")),
            (this.$iframeWindow = this.$iframe.prop("contentWindow")),
            (this.isArticleBoxLoaded = !1),
            (this.newsFrameFixedDelay = 500);
          var e = this;
          (zum.news = zum.news || {}),
            (zum.news.resizeArticleView = function () {
              e.resizeFrame.call(e);
            }),
            (window.hideNewsLoading = function () {
              e.$iframeLoading.hide();
            });
        },
        initializeDefinedModules: function () {
          this.fixedManager = r.a;
        },
        articleShowTimerID: 0,
        show: function (e, n) {
          var i = this;
          if ((this.$iframeLoading.show(), "none" !== t("#layer_favorite_site_setup").css("display") && a.a.trigger("close:favoriteSiteConfigLayer"), e && this.$iframeWindow)) {
            o.a.Article.sendAndCloseScrollStat();
            var s = this.generateArticleURL(e, n);
            this.loadArticleFrame({
              url: s,
              before: function () {},
              after: function () {
                var e = this.$iframeWindow.document;
                e && e.title && (document.title = e.title);
              },
            }),
              this.$el.show(),
              (this.newsFrameFixedTimerID = t.setTimeout(
                function () {
                  i.fixedManager.scrollToFixedTop();
                },
                this.newsFrameFixedDelay,
                this.newsFrameFixedTimerID
              )),
              (this.articleId = e);
          } else location.replace("#!/home"), (this.articleId = null);
        },
        cancelShow: function () {
          t.clearTimeout(this.articleShowTimerID);
        },
        loadArticleFrame: function (e) {
          var t = this;
          this.$iframe.attr("url", e.url),
            "function" == typeof e.before && e.before.call(this),
            "function" == typeof e.after &&
              (this.$iframe.one("load", function () {
                t.$iframeWindow.location.href === e.url || t.isArticleBoxLoaded || t.$iframeWindow.location.replace(e.url), (t.isArticleBoxLoaded = !0), e.after.apply(t);
              }),
              this.onAutoResizeFrame()),
            this.$iframeWindow.location.replace(e.url);
        },
        autoResizeTimerID: "articleViewFrameResizeTimerID",
        onAutoResizeFrame: function () {
          t.setInterval(i.bind(this.resizeFrame, this), 300, 0, this.autoResizeTimerID);
        },
        offAutoResizeFrame: function () {
          this.autoResizeTimerID && t.clearInterval(this.autoResizeTimerID);
        },
        prevDocHeight: 0,
        resizeFrame: function () {
          try {
            var e = t(this.$iframeWindow.document.body).height();
            e > 0 && this.prevDocHeight !== e && ((this.prevDocHeight = e), this.$iframe.height(Math.max(zum.$window.height(), e)));
          } catch (e) {}
        },
        hide: function () {
          this.cancelShow(), this.$el.hide(), this.$iframeWindow.location.replace("/document-domain?variants=" + window.variantsParam), this.offAutoResizeFrame(), (this.articleId = null);
        },
        generateArticleURL: function (e, n) {
          var a = i.omit(n, "news", "v", "id", "oid");
          return this.isArticleOn() && (a.oid = this.articleId), this.articleBaseUrl + e + "&" + t.param(a);
        },
        isArticleOn: function () {
          return !!this.articleId;
        },
        nextArticle: null,
        prevArticle: null,
        setNextArticle: function (e, t) {
          (this.articleId && e != this.articleId) || ((this.nextArticle = t), this.$iframe.attr({ nextTitle: t.title, articleId: e, nextCategoryName: t.category }));
        },
        setPrevArticle: function (e, t) {
          (this.articleId && e != this.articleId) || ((this.prevArticle = t), this.$iframe.attr({ prevTitle: t.title, articleId: e, prevCategoryName: t.category }));
        },
        highlight: function (e) {
          var n = e.el;
          if ("function" == typeof n) {
            var i = this;
            t.setInterval(
              function () {
                var a = n();
                a.attr("href").indexOf(e.url) >= 0 && (i.highlight({ el: a }), t.clearInterval("d_newslink_highlight"));
              },
              50,
              100,
              "d_newslink_highlight"
            );
          } else if (n) {
            t.clearInterval("d_newslink_highlight");
            var a = n.closest(".wrap_fixed");
            a.find(".news_box .item_selected").removeClass("item_selected"), a.find(".news_box_bottom .item_selected").removeClass("item_selected"), n.addClass("item_selected");
          }
        },
        clearHighlight: function (e) {
          e
            ? t(".d_newslink.item_selected").each(function () {
                -1 == t(this).attr("href").indexOf(e) && t(this).removeClass("item_selected");
              })
            : t(".d_newslink.item_selected").removeClass("item_selected");
        },
        next: function () {
          this.nextArticle && ((location.href = s.a.changeNewsLink(this.nextArticle.url, this.nextArticle.param)), (this.nextArticle = null));
        },
        prev: function () {
          this.prevArticle && ((location.href = s.a.changeNewsLink(this.prevArticle.url, this.prevArticle.param)), (this.prevArticle = null));
        },
      });
    }.call(this, n(4), n(3), n(8)));
  },
]);
