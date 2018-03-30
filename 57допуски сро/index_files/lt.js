var util = {};
util.VERSION = "0.0.1";
util.__BASE64_KEYS_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
util.dom = {};
util.__ExtendLink = function () {
};
util.inherits = function (Class, Parent) {
  util.__ExtendLink.prototype = Parent.prototype;
  Class.prototype = new util.__ExtendLink;
  Class.prototype.constructor = Class
};
util.bind = function (func, context) {
  return function () {
    return func.apply(context, arguments)
  }
};
util.async = function (callback) {
  setTimeout(callback, 0)
};
util.nop = function () {
};
util.clone = function (object) {
  try {
    return JSON.parse(JSON.stringify(object))
  } catch (error) {
    util.nop(error)
  }
  return null
};
"object" !== typeof JSON && (JSON = {});
(function () {
  function m(a) {
    return 10 > a ? "0" + a : a
  }

  function r(a) {
    s.lastIndex = 0;
    return s.test(a) ? '"' + a.replace(s, function (a) {
      var c = u[a];
      return"string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }) + '"' : '"' + a + '"'
  }

  function p(a, l) {
    var c, d, h, q, g = e, f, b = l[a];
    b && ("object" === typeof b && "function" === typeof b.toJSON) && (b = b.toJSON(a));
    "function" === typeof k && (b = k.call(l, a, b));
    switch (typeof b) {
      case "string":
        return r(b);
      case "number":
        return isFinite(b) ? String(b) : "null";
      case "boolean":
      case "null":
        return String(b);
      case "object":
        if (!b)return"null";
        e += n;
        f = [];
        if ("[object Array]" === Object.prototype.toString.apply(b)) {
          q = b.length;
          for (c = 0; c < q; c += 1)f[c] = p(c, b) || "null";
          h = 0 === f.length ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]" : "[" + f.join(",") + "]";
          e = g;
          return h
        }
        if (k && "object" === typeof k)for (q = k.length, c = 0; c < q; c += 1)"string" === typeof k[c] && (d = k[c], (h = p(d, b)) && f.push(r(d) + (e ? ": " : ":") + h)); else for (d in b)Object.prototype.hasOwnProperty.call(b, d) && (h = p(d, b)) && f.push(r(d) + (e ? ": " : ":") + h);
        h = 0 === f.length ? "{}" : e ? "{\n" + e + f.join(",\n" +
            e) + "\n" + g + "}" : "{" + f.join(",") + "}";
        e = g;
        return h
    }
  }

  "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + m(this.getUTCMonth() + 1) + "-" + m(this.getUTCDate()) + "T" + m(this.getUTCHours()) + ":" + m(this.getUTCMinutes()) + ":" + m(this.getUTCSeconds()) + "Z" : null
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
    return this.valueOf()
  });
  var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      s = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, n, u = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, k;
  "function" !== typeof JSON.stringify && (JSON.stringify = function (a, l, c) {
    var d;
    n = e = "";
    if ("number" === typeof c)for (d = 0; d < c; d += 1)n += " "; else"string" === typeof c && (n = c);
    if ((k = l) && "function" !== typeof l && ("object" !== typeof l || "number" !== typeof l.length))throw Error("JSON.stringify");
    return p("", {"": a})
  });
  "function" !== typeof JSON.parse && (JSON.parse = function (a, e) {
    function c(a, d) {
      var g, f, b = a[d];
      if (b && "object" === typeof b)for (g in b)Object.prototype.hasOwnProperty.call(b, g) && (f = c(b, g), void 0 !== f ? b[g] = f : delete b[g]);
      return e.call(a, d, b)
    }

    var d;
    a = String(a);
    t.lastIndex = 0;
    t.test(a) && (a = a.replace(t, function (a) {
      return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }));
    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return d = eval("(" + a + ")"), "function" === typeof e ? c({"": d}, "") : d;
    throw new SyntaxError("JSON.parse");
  })
})();
(function (Q) {
  function n(a, b, c, d) {
    var e, f, g, m, k;
    (b ? b.ownerDocument || b : D) !== v && I(b);
    b = b || v;
    c = c || [];
    if (!a || "string" !== typeof a)return c;
    if (1 !== (m = b.nodeType) && 9 !== m)return[];
    if (z && !d) {
      if (e = ua.exec(a))if (g = e[1])if (9 === m)if ((f = b.getElementById(g)) && f.parentNode) {
        if (f.id === g)return c.push(f), c
      } else return c; else {
        if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && P(b, f) && f.id === g)return c.push(f), c
      } else {
        if (e[2])return E.apply(c, b.getElementsByTagName(a)), c;
        if ((g = e[3]) && l.getElementsByClassName &&
            b.getElementsByClassName)return E.apply(c, b.getElementsByClassName(g)), c
      }
      if (l.qsa && (!t || !t.test(a))) {
        f = e = r;
        g = b;
        k = 9 === m && a;
        if (1 === m && "object" !== b.nodeName.toLowerCase()) {
          m = R(a);
          (e = b.getAttribute("id")) ? f = e.replace(va, "\\$&") : b.setAttribute("id", f);
          f = "[id='" + f + "'] ";
          for (g = m.length; g--;)m[g] = f + S(m[g]);
          g = $.test(a) && b.parentNode || b;
          k = m.join(",")
        }
        if (k)try {
          return E.apply(c, g.querySelectorAll(k)), c
        } catch (Ka) {
        } finally {
          e || b.removeAttribute("id")
        }
      }
    }
    var p;
    a:{
      a = a.replace(T, "$1");
      f = R(a);
      if (!d && 1 === f.length) {
        e =
            f[0] = f[0].slice(0);
        if (2 < e.length && "ID" === (p = e[0]).type && l.getById && 9 === b.nodeType && z && h.relative[e[1].type]) {
          b = (h.find.ID(p.matches[0].replace(F, G), b) || [])[0];
          if (!b) {
            p = c;
            break a
          }
          a = a.slice(e.shift().value.length)
        }
        for (m = U.needsContext.test(a) ? 0 : e.length; m--;) {
          p = e[m];
          if (h.relative[g = p.type])break;
          if (g = h.find[g])if (d = g(p.matches[0].replace(F, G), $.test(e[0].type) && b.parentNode || b)) {
            e.splice(m, 1);
            a = d.length && S(e);
            if (!a) {
              E.apply(c, d);
              p = c;
              break a
            }
            break
          }
        }
      }
      aa(a, f)(d, b, !z, c, $.test(a));
      p = c
    }
    return p
  }

  function ba() {
    function a(c, d) {
      b.push(c += " ") > h.cacheLength && delete a[b.shift()];
      return a[c] = d
    }

    var b = [];
    return a
  }

  function x(a) {
    a[r] = !0;
    return a
  }

  function y(a) {
    var b = v.createElement("div");
    try {
      return!!a(b)
    } catch (c) {
      return!1
    } finally {
      b.parentNode && b.parentNode.removeChild(b)
    }
  }

  function ca(a, b) {
    for (var c = a.split("|"), d = a.length; d--;)h.attrHandle[c[d]] = b
  }

  function ka(a, b) {
    var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || la) - (~a.sourceIndex || la);
    if (d)return d;
    if (c)for (; c = c.nextSibling;)if (c === b)return-1;
    return a ? 1 : -1
  }

  function wa(a) {
    return function (b) {
      return"input" === b.nodeName.toLowerCase() && b.type === a
    }
  }

  function xa(a) {
    return function (b) {
      var c = b.nodeName.toLowerCase();
      return("input" === c || "button" === c) && b.type === a
    }
  }

  function J(a) {
    return x(function (b) {
      b = +b;
      return x(function (c, d) {
        for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
      })
    })
  }

  function ma() {
  }

  function R(a, b) {
    var c, d, e, f, g, m, k;
    if (g = na[a + " "])return b ? 0 : g.slice(0);
    g = a;
    m = [];
    for (k = h.preFilter; g;) {
      if (!c || (d = ya.exec(g)))d && (g = g.slice(d[0].length) ||
          g), m.push(e = []);
      c = !1;
      if (d = za.exec(g))c = d.shift(), e.push({value: c, type: d[0].replace(T, " ")}), g = g.slice(c.length);
      for (f in h.filter)!(d = U[f].exec(g)) || k[f] && !(d = k[f](d)) || (c = d.shift(), e.push({value: c, type: f, matches: d}), g = g.slice(c.length));
      if (!c)break
    }
    return b ? g.length : g ? n.error(a) : na(a, m).slice(0)
  }

  function S(a) {
    for (var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value;
    return d
  }

  function da(a, b, c) {
    var d = b.dir, e = c && "parentNode" === d, f = Aa++;
    return b.first ? function (c, b, f) {
      for (; c = c[d];)if (1 === c.nodeType || e)return a(c,
          b, f)
    } : function (c, b, k) {
      var h, p, w, q = C + " " + f;
      if (k)for (; c = c[d];) {
        if ((1 === c.nodeType || e) && a(c, b, k))return!0
      } else for (; c = c[d];)if (1 === c.nodeType || e)if (w = c[r] || (c[r] = {}), (p = w[d]) && p[0] === q) {
        if (!0 === (h = p[1]) || h === V)return!0 === h
      } else if (p = w[d] = [q], p[1] = a(c, b, k) || V, !0 === p[1])return!0
    }
  }

  function ea(a) {
    return 1 < a.length ? function (b, c, d) {
      for (var e = a.length; e--;)if (!a[e](b, c, d))return!1;
      return!0
    } : a[0]
  }

  function W(a, b, c, d, e) {
    for (var f, g = [], m = 0, k = a.length, h = null != b; m < k; m++)if (f = a[m])if (!c || c(f, d, e))g.push(f), h && b.push(m);
    return g
  }

  function fa(a, b, c, d, e, f) {
    d && !d[r] && (d = fa(d));
    e && !e[r] && (e = fa(e, f));
    return x(function (g, f, k, h) {
      var p, w, q = [], B = [], l = f.length, u;
      if (!(u = g)) {
        u = b || "*";
        for (var s = k.nodeType ? [k] : k, r = [], v = 0, t = s.length; v < t; v++)n(u, s[v], r);
        u = r
      }
      u = !a || !g && b ? u : W(u, q, a, k, h);
      s = c ? e || (g ? a : l || d) ? [] : f : u;
      c && c(u, s, k, h);
      if (d)for (p = W(s, B), d(p, [], k, h), k = p.length; k--;)if (w = p[k])s[B[k]] = !(u[B[k]] = w);
      if (g) {
        if (e || a) {
          if (e) {
            p = [];
            for (k = s.length; k--;)(w = s[k]) && p.push(u[k] = w);
            e(null, s = [], p, h)
          }
          for (k = s.length; k--;)(w = s[k]) && -1 < (p = e ? K.call(g,
              w) : q[k]) && (g[p] = !(f[p] = w))
        }
      } else s = W(s === f ? s.splice(l, s.length) : s), e ? e(null, f, s, h) : E.apply(f, s)
    })
  }

  function ga(a) {
    var b, c, d, e = a.length, f = h.relative[a[0].type];
    c = f || h.relative[" "];
    for (var g = f ? 1 : 0, m = da(function (a) {
      return a === b
    }, c, !0), k = da(function (a) {
      return-1 < K.call(b, a)
    }, c, !0), l = [function (a, c, d) {
      return!f && (d || c !== X) || ((b = c).nodeType ? m(a, c, d) : k(a, c, d))
    }]; g < e; g++)if (c = h.relative[a[g].type])l = [da(ea(l), c)]; else {
      c = h.filter[a[g].type].apply(null, a[g].matches);
      if (c[r]) {
        for (d = ++g; d < e && !h.relative[a[d].type]; d++);
        return fa(1 < g && ea(l), 1 < g && S(a.slice(0, g - 1).concat({value: " " === a[g - 2].type ? "*" : ""})).replace(T, "$1"), c, g < d && ga(a.slice(g, d)), d < e && ga(a = a.slice(d)), d < e && S(a))
      }
      l.push(c)
    }
    return ea(l)
  }

  function Ba(a, b) {
    var c = 0, d = 0 < b.length, e = 0 < a.length, f = function (f, m, k, l, p) {
      var w, q, B = [], r = 0, u = "0", s = f && [], t = null != p, x = X, y = f || e && h.find.TAG("*", p && m.parentNode || m), z = C += null == x ? 1 : Math.random() || 0.1, A = y.length;
      t && (X = m !== v && m, V = c);
      for (; u !== A && null != (w = y[u]); u++) {
        if (e && w) {
          for (p = 0; q = a[p++];)if (q(w, m, k)) {
            l.push(w);
            break
          }
          t && (C =
              z, V = ++c)
        }
        d && ((w = !q && w) && r--, f && s.push(w))
      }
      r += u;
      if (d && u !== r) {
        for (p = 0; q = b[p++];)q(s, B, m, k);
        if (f) {
          if (0 < r)for (; u--;)s[u] || B[u] || (B[u] = Ca.call(l));
          B = W(B)
        }
        E.apply(l, B);
        t && (!f && 0 < B.length && 1 < r + b.length) && n.uniqueSort(l)
      }
      t && (C = z, X = x);
      return s
    };
    return d ? x(f) : f
  }

  var N, l, V, h, Y, oa, aa, X, L, I, v, A, z, t, M, Z, P, r = "sizzle" + -new Date, D = Q.document, C = 0, Aa = 0, pa = ba(), na = ba(), qa = ba(), O = !1, ha = function (a, b) {
    a === b && (O = !0);
    return 0
  }, la = -2147483648, Da = {}.hasOwnProperty, H = [], Ca = H.pop, Ea = H.push, E = H.push, ra = H.slice, K = H.indexOf || function (a) {
    for (var b =
        0, c = this.length; b < c; b++)if (this[b] === a)return b;
    return-1
  }, sa = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), ta = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + sa + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", ia = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ta.replace(3, 8) + ")*)|.*)\\)|)", T = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
      "g"), ya = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, za = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, $ = /[\x20\t\r\n\f]*[+~]/, Fa = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]", "g"), Ga = RegExp(ia), Ha = RegExp("^" + sa + "$"), U = {ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR: RegExp("^" + ta), PSEUDO: RegExp("^" + ia), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
      "i"), bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")}, ja = /^[^{]+\{\s*\[native \w/, ua = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ia = /^(?:input|select|textarea|button)$/i, Ja = /^h\d$/i, va = /'|\\/g, F = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)",
      "ig"), G = function (a, b, c) {
    a = "0x" + b - 65536;
    return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
  };
  try {
    E.apply(H = ra.call(D.childNodes), D.childNodes), H[D.childNodes.length].nodeType
  } catch (La) {
    E = {apply: H.length ? function (a, b) {
      Ea.apply(a, ra.call(b))
    } : function (a, b) {
      for (var c = a.length, d = 0; a[c++] = b[d++];);
      a.length = c - 1
    }}
  }
  oa = n.isXML = function (a) {
    return(a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
  };
  l = n.support = {};
  I = n.setDocument = function (a) {
    var b = a ?
        a.ownerDocument || a : D;
    a = b.defaultView;
    if (b === v || 9 !== b.nodeType || !b.documentElement)return v;
    v = b;
    A = b.documentElement;
    z = !oa(b);
    a && (a.attachEvent && a !== a.top) && a.attachEvent("onbeforeunload", function () {
      I()
    });
    l.attributes = y(function (a) {
      a.className = "i";
      return!a.getAttribute("className")
    });
    l.getElementsByTagName = y(function (a) {
      a.appendChild(b.createComment(""));
      return!a.getElementsByTagName("*").length
    });
    l.getElementsByClassName = y(function (a) {
      a.innerHTML = "<div class='a'></div><div class='a i'></div>";
      a.firstChild.className =
          "i";
      return window['MooTools'] === undefined && 2 === a.getElementsByClassName("i").length
    });
    l.getById = y(function (a) {
      A.appendChild(a).id = r;
      return!b.getElementsByName || !b.getElementsByName(r).length
    });
    l.getById ? (h.find.ID = function (a, b) {
      if ("undefined" !== typeof b.getElementById && z) {
        var e = b.getElementById(a);
        return e && e.parentNode ? [e] : []
      }
    }, h.filter.ID = function (a) {
      var b = a.replace(F, G);
      return function (a) {
        return a.getAttribute("id") === b
      }
    }) : (delete h.find.ID, h.filter.ID = function (a) {
      var b = a.replace(F, G);
      return function (a) {
        return(a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
      }
    });
    h.find.TAG = l.getElementsByTagName ? function (a, b) {
      if ("undefined" !== typeof b.getElementsByTagName)return b.getElementsByTagName(a)
    } : function (a, b) {
      var e, f = [], g = 0, m = b.getElementsByTagName(a);
      if ("*" === a) {
        for (; e = m[g++];)1 === e.nodeType && f.push(e);
        return f
      }
      return m
    };
    h.find.CLASS = l.getElementsByClassName && function (a, b) {
      if ("undefined" !== typeof b.getElementsByClassName && z)return b.getElementsByClassName(a)
    };
    M = [];
    t = [];
    if (l.qsa = ja.test(b.querySelectorAll))y(function (a) {
      a.innerHTML =
          "<select><option selected=''></option></select>";
      a.querySelectorAll("[selected]").length || t.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
      a.querySelectorAll(":checked").length || t.push(":checked")
    }), y(function (a) {
      var d = b.createElement("input");
      d.setAttribute("type", "hidden");
      a.appendChild(d).setAttribute("t", "");
      a.querySelectorAll("[t^='']").length && t.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
      a.querySelectorAll(":enabled").length || t.push(":enabled", ":disabled");
      a.querySelectorAll("*,:x");
      t.push(",.*:")
    });
    (l.matchesSelector = ja.test(Z = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && y(function (a) {
      l.disconnectedMatch = Z.call(a, "div");
      Z.call(a, "[s!='']:x");
      M.push("!=", ia)
    });
    t = t.length && RegExp(t.join("|"));
    M = M.length && RegExp(M.join("|"));
    P = ja.test(A.contains) || A.compareDocumentPosition ? function (a, b) {
      var e = 9 === a.nodeType ? a.documentElement : a, f = b && b.parentNode;
      return a === f || !!(f && 1 === f.nodeType && (e.contains ? e.contains(f) : a.compareDocumentPosition && a.compareDocumentPosition(f) & 16))
    } : function (a, b) {
      if (b)for (; b = b.parentNode;)if (b === a)return!0;
      return!1
    };
    ha = A.compareDocumentPosition ? function (a, d) {
      if (a === d)return O = !0, 0;
      var e = d.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(d);
      return e ? e & 1 || !l.sortDetached && d.compareDocumentPosition(a) === e ? a === b || P(D, a) ? -1 : d === b || P(D, d) ? 1 : L ? K.call(L, a) - K.call(L, d) : 0 : e & 4 ? -1 : 1 : a.compareDocumentPosition ?
          -1 : 1
    } : function (a, d) {
      var e, f = 0;
      e = a.parentNode;
      var g = d.parentNode, m = [a], k = [d];
      if (a === d)return O = !0, 0;
      if (!e || !g)return a === b ? -1 : d === b ? 1 : e ? -1 : g ? 1 : L ? K.call(L, a) - K.call(L, d) : 0;
      if (e === g)return ka(a, d);
      for (e = a; e = e.parentNode;)m.unshift(e);
      for (e = d; e = e.parentNode;)k.unshift(e);
      for (; m[f] === k[f];)f++;
      return f ? ka(m[f], k[f]) : m[f] === D ? -1 : k[f] === D ? 1 : 0
    };
    return b
  };
  n.matches = function (a, b) {
    return n(a, null, null, b)
  };
  n.matchesSelector = function (a, b) {
    (a.ownerDocument || a) !== v && I(a);
    b = b.replace(Fa, "='$1']");
    if (l.matchesSelector &&
        z && !(M && M.test(b) || t && t.test(b)))try {
      var c = Z.call(a, b);
      if (c || l.disconnectedMatch || a.document && 11 !== a.document.nodeType)return c
    } catch (d) {
    }
    return 0 < n(b, v, null, [a]).length
  };
  n.contains = function (a, b) {
    (a.ownerDocument || a) !== v && I(a);
    return P(a, b)
  };
  n.attr = function (a, b) {
    (a.ownerDocument || a) !== v && I(a);
    var c = h.attrHandle[b.toLowerCase()], c = c && Da.call(h.attrHandle, b.toLowerCase()) ? c(a, b, !z) : void 0;
    return void 0 === c ? l.attributes || !z ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null : c
  };
  n.error =
      function (a) {
        throw Error("Syntax error, unrecognized expression: " + a);
      };
  n.uniqueSort = function (a) {
    var b, c = [], d = 0, e = 0;
    O = !l.detectDuplicates;
    L = !l.sortStable && a.slice(0);
    a.sort(ha);
    if (O) {
      for (; b = a[e++];)b === a[e] && (d = c.push(e));
      for (; d--;)a.splice(c[d], 1)
    }
    return a
  };
  Y = n.getText = function (a) {
    var b, c = "", d = 0;
    b = a.nodeType;
    if (!b)for (; b = a[d]; d++)c += Y(b); else if (1 === b || 9 === b || 11 === b) {
      if ("string" === typeof a.textContent)return a.textContent;
      for (a = a.firstChild; a; a = a.nextSibling)c += Y(a)
    } else if (3 === b || 4 === b)return a.nodeValue;
    return c
  };
  h = n.selectors = {cacheLength: 50, createPseudo: x, match: U, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (a) {
    a[1] = a[1].replace(F, G);
    a[3] = (a[4] || a[5] || "").replace(F, G);
    "~=" === a[2] && (a[3] = " " + a[3] + " ");
    return a.slice(0, 4)
  }, CHILD: function (a) {
    a[1] = a[1].toLowerCase();
    "nth" === a[1].slice(0, 3) ? (a[3] || n.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
        a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && n.error(a[0]);
    return a
  }, PSEUDO: function (a) {
    var b, c = !a[5] && a[2];
    if (U.CHILD.test(a[0]))return null;
    a[3] && void 0 !== a[4] ? a[2] = a[4] : c && (Ga.test(c) && (b = R(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length)) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b));
    return a.slice(0, 3)
  }}, filter: {TAG: function (a) {
    var b = a.replace(F, G).toLowerCase();
    return"*" === a ? function () {
      return!0
    } : function (a) {
      return a.nodeName && a.nodeName.toLowerCase() === b
    }
  }, CLASS: function (a) {
    var b = pa[a + " "];
    return b || (b =
        RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && pa(a, function (a) {
      return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
    })
  }, ATTR: function (a, b, c) {
    return function (d) {
      d = n.attr(d, a);
      if (null == d)return"!=" === b;
      if (!b)return!0;
      d += "";
      return"=" === b ? d === c : "!=" === b ? d !== c : "^=" === b ? c && 0 === d.indexOf(c) : "*=" === b ? c && -1 < d.indexOf(c) : "$=" === b ? c && d.slice(-c.length) === c : "~=" === b ? -1 < (" " + d + " ").indexOf(c) : "|=" === b ? d === c || d.slice(0, c.length +
          1) === c + "-" : !1
    }
  }, CHILD: function (a, b, c, d, e) {
    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), m = "of-type" === b;
    return 1 === d && 0 === e ? function (a) {
      return!!a.parentNode
    } : function (b, c, h) {
      var l, q, n, t, u;
      c = f !== g ? "nextSibling" : "previousSibling";
      var s = b.parentNode, v = m && b.nodeName.toLowerCase();
      h = !h && !m;
      if (s) {
        if (f) {
          for (; c;) {
            for (q = b; q = q[c];)if (m ? q.nodeName.toLowerCase() === v : 1 === q.nodeType)return!1;
            u = c = "only" === a && !u && "nextSibling"
          }
          return!0
        }
        u = [g ? s.firstChild : s.lastChild];
        if (g && h)for (h = s[r] || (s[r] = {}), l = h[a] || [], t =
            l[0] === C && l[1], n = l[0] === C && l[2], q = t && s.childNodes[t]; q = ++t && q && q[c] || (n = t = 0) || u.pop();) {
          if (1 === q.nodeType && ++n && q === b) {
            h[a] = [C, t, n];
            break
          }
        } else if (h && (l = (b[r] || (b[r] = {}))[a]) && l[0] === C)n = l[1]; else for (; (q = ++t && q && q[c] || (n = t = 0) || u.pop()) && ((m ? q.nodeName.toLowerCase() !== v : 1 !== q.nodeType) || !++n || (h && ((q[r] || (q[r] = {}))[a] = [C, n]), q !== b)););
        n -= e;
        return n === d || 0 === n % d && 0 <= n / d
      }
    }
  }, PSEUDO: function (a, b) {
    var c, d = h.pseudos[a] || h.setFilters[a.toLowerCase()] || n.error("unsupported pseudo: " + a);
    return d[r] ? d(b) : 1 <
        d.length ? (c = [a, a, "", b], h.setFilters.hasOwnProperty(a.toLowerCase()) ? x(function (a, c) {
      for (var g, h = d(a, b), k = h.length; k--;)g = K.call(a, h[k]), a[g] = !(c[g] = h[k])
    }) : function (a) {
      return d(a, 0, c)
    }) : d
  }}, pseudos: {not: x(function (a) {
    var b = [], c = [], d = aa(a.replace(T, "$1"));
    return d[r] ? x(function (a, b, c, h) {
      h = d(a, null, h, []);
      for (var k = a.length; k--;)if (c = h[k])a[k] = !(b[k] = c)
    }) : function (a, f, g) {
      b[0] = a;
      d(b, null, g, c);
      return!c.pop()
    }
  }), has: x(function (a) {
    return function (b) {
      return 0 < n(a, b).length
    }
  }), contains: x(function (a) {
    return function (b) {
      return-1 <
          (b.textContent || b.innerText || Y(b)).indexOf(a)
    }
  }), lang: x(function (a) {
    Ha.test(a || "") || n.error("unsupported lang: " + a);
    a = a.replace(F, G).toLowerCase();
    return function (b) {
      var c;
      do if (c = z ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
      return!1
    }
  }), target: function (a) {
    var b = Q.location && Q.location.hash;
    return b && b.slice(1) === a.id
  }, root: function (a) {
    return a === A
  }, focus: function (a) {
    return a === v.activeElement &&
        (!v.hasFocus || v.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
  }, enabled: function (a) {
    return!1 === a.disabled
  }, disabled: function (a) {
    return!0 === a.disabled
  }, checked: function (a) {
    var b = a.nodeName.toLowerCase();
    return"input" === b && !!a.checked || "option" === b && !!a.selected
  }, selected: function (a) {
    a.parentNode && a.parentNode.selectedIndex;
    return!0 === a.selected
  }, empty: function (a) {
    for (a = a.firstChild; a; a = a.nextSibling)if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType)return!1;
    return!0
  }, parent: function (a) {
    return!h.pseudos.empty(a)
  },
    header: function (a) {
      return Ja.test(a.nodeName)
    }, input: function (a) {
      return Ia.test(a.nodeName)
    }, button: function (a) {
      var b = a.nodeName.toLowerCase();
      return"input" === b && "button" === a.type || "button" === b
    }, text: function (a) {
      var b;
      return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
    }, first: J(function () {
      return[0]
    }), last: J(function (a, b) {
      return[b - 1]
    }), eq: J(function (a, b, c) {
      return[0 > c ? c + b : c]
    }), even: J(function (a, b) {
      for (var c = 0; c < b; c += 2)a.push(c);
      return a
    }),
    odd: J(function (a, b) {
      for (var c = 1; c < b; c += 2)a.push(c);
      return a
    }), lt: J(function (a, b, c) {
      for (b = 0 > c ? c + b : c; 0 <= --b;)a.push(b);
      return a
    }), gt: J(function (a, b, c) {
      for (c = 0 > c ? c + b : c; ++c < b;)a.push(c);
      return a
    })}};
  h.pseudos.nth = h.pseudos.eq;
  for (N in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})h.pseudos[N] = wa(N);
  for (N in{submit: !0, reset: !0})h.pseudos[N] = xa(N);
  ma.prototype = h.filters = h.pseudos;
  h.setFilters = new ma;
  aa = n.compile = function (a, b) {
    var c, d = [], e = [], f = qa[a + " "];
    if (!f) {
      b || (b = R(a));
      for (c = b.length; c--;)f = ga(b[c]),
          f[r] ? d.push(f) : e.push(f);
      f = qa(a, Ba(e, d))
    }
    return f
  };
  l.sortStable = r.split("").sort(ha).join("") === r;
  l.detectDuplicates = O;
  I();
  l.sortDetached = y(function (a) {
    return a.compareDocumentPosition(v.createElement("div")) & 1
  });
  y(function (a) {
    a.innerHTML = "<a href='#'></a>";
    return"#" === a.firstChild.getAttribute("href")
  }) || ca("type|href|height|width", function (a, b, c) {
    if (!c)return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
  });
  l.attributes && y(function (a) {
    a.innerHTML = "<input/>";
    a.firstChild.setAttribute("value", "");
    return"" === a.firstChild.getAttribute("value")
  }) || ca("value", function (a, b, c) {
    if (!c && "input" === a.nodeName.toLowerCase())return a.defaultValue
  });
  y(function (a) {
    return null == a.getAttribute("disabled")
  }) || ca("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, c) {
    var d;
    if (!c)return(d = a.getAttributeNode(b)) && d.specified ? d.value : !0 === a[b] ? b.toLowerCase() : null
  });
  Q.Sizzle = n
})(window);
util.merge = function (base, target) {
  for (var key in target)base[key] = target[key]
};
util.areEqual = function (first, second) {
  try {
    return first === second || JSON.stringify(first) === JSON.stringify(second)
  } catch (error) {
    util.nop(error)
  }
  return false
};
util.toArray = function (list) {
  return Array.prototype.slice.call(list)
};
util.cloneArray = function (array) {
  return array.slice(0)
};
util.indexOf = function (element, array) {
  if (array.indexOf !== undefined)return array.indexOf(element); else {
    var i = 0, l = array.length;
    while (i < l) {
      if (array[i] === element)return i;
      i++
    }
  }
  return-1
};
util.encodeJsonData = function (object) {
  try {
    return JSON.stringify(object)
  } catch (error) {
  }
  return""
};
util.decodeJsonData = function (data) {
  try {
    return JSON.parse(data)
  } catch (error) {
  }
  return null
};
util.encodeFormData = function (object, opt_separator) {
  return util.tokenizeUrlData(object).join(opt_separator || "&")
};
util.tokenizeUrlData = function (object, opt_path) {
  var result = [];
  if (opt_path === undefined)opt_path = [];
  if (typeof object === "object")for (var key in object) {
    var newPath = opt_path.length === 0 ? [encodeURIComponent(String(key))] : (opt_path.join(",") + "," + encodeURIComponent(String(key))).split(",");
    result = result.concat(util.tokenizeUrlData(object[key], newPath))
  } else if (object !== undefined)result = [opt_path.shift() + (opt_path.length > 0 ? "[" + opt_path.join("][") + "]=" : "=") + encodeURIComponent(String(object))];
  return result
};
util.decodeFormData = function (data) {
  var result = new util.SafeObject({});
  var values = decodeURIComponent(data).split("&");
  var i = 0, l = values.length;
  var pair = [];
  while (i < l) {
    pair = values[i].split("=");
    if (pair[1] !== undefined)result.setByPath(pair[1], util.parseUrlPathToken(pair[0]));
    i++
  }
  return result.getCore()
};
util.parseUrlPathToken = function (token) {
  if (token.charAt(token.length - 1) !== "]")return[token];
  var nameLength = token.indexOf("[");
  return[token.substring(0, nameLength)].concat(token.substring(nameLength + 1, token.length - 1).split("]["))
};
util.encodeBase64 = function (string, opt_forUrl) {
  var result = "";
  var str = util.__utfEncode(string);
  if (window.btoa !== undefined)result = window.btoa(str); else {
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    while (i < str.length) {
      chr1 = str.charCodeAt(i++);
      chr2 = str.charCodeAt(i++);
      chr3 = str.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;
      if (isNaN(chr2))enc3 = enc4 = 64; else if (isNaN(chr3))enc4 = 64;
      result += util.__BASE64_KEYS_STR.charAt(enc1) + util.__BASE64_KEYS_STR.charAt(enc2) +
          util.__BASE64_KEYS_STR.charAt(enc3) + util.__BASE64_KEYS_STR.charAt(enc4)
    }
  }
  if (opt_forUrl)result = result.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+\s*$/g, "");
  return result
};
util.decodeBase64 = function (string, opt_forUrl) {
  if (opt_forUrl)string = string.replace(/-/g, "+").replace(/_/g, "/") + "====".slice(0, -(string.length % 4));
  var result = "";
  if (window.atob !== undefined)result = window.atob(string); else {
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    string = string.replace(/[^A-Za-z0-9\+\/=]/g, "");
    while (i < string.length) {
      enc1 = util.__BASE64_KEYS_STR.indexOf(string.charAt(i++));
      enc2 = util.__BASE64_KEYS_STR.indexOf(string.charAt(i++));
      enc3 = util.__BASE64_KEYS_STR.indexOf(string.charAt(i++));
      enc4 = util.__BASE64_KEYS_STR.indexOf(string.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      result += String.fromCharCode(chr1);
      if (enc3 != 64)result += String.fromCharCode(chr2);
      if (enc4 != 64)result += String.fromCharCode(chr3)
    }
  }
  return util.__utfDecode(result)
};
util.__utfEncode = function (string) {
  string = string.replace(/\r\n/g, "\n");
  var utftext = "";
  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n);
    if (c < 128)utftext += String.fromCharCode(c); else if (c > 127 && c < 2048) {
      utftext += String.fromCharCode(c >> 6 | 192);
      utftext += String.fromCharCode(c & 63 | 128)
    } else {
      utftext += String.fromCharCode(c >> 12 | 224);
      utftext += String.fromCharCode(c >> 6 & 63 | 128);
      utftext += String.fromCharCode(c & 63 | 128)
    }
  }
  return utftext
};
util.__utfDecode = function (utftext) {
  var string = "";
  var i = 0;
  var c = 0;
  var c2 = 0;
  var c3 = 0;
  while (i < utftext.length) {
    c = utftext.charCodeAt(i);
    if (c < 128) {
      string += String.fromCharCode(c);
      i++
    } else if (c > 191 && c < 224) {
      c2 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode((c & 31) << 6 | c2 & 63);
      i += 2
    } else {
      c2 = utftext.charCodeAt(i + 1);
      c3 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      i += 3
    }
  }
  return string
};
util.setCookie = function (name, value, opt_time) {
  var expires = "";
  if (opt_time !== undefined) {
    var date = new Date;
    date.setTime(opt_time + date.getTime());
    expires = "; expires=" + date.toGMTString()
  }
  document.cookie = name + "=" + value + expires + "; path=/"
};
util.getCookie = function (name) {
  var cookies = document.cookie;
  var token = name + "=";
  var tokenIndex = cookies.indexOf(token);
  if (tokenIndex !== -1) {
    var semicolonIndex = cookies.indexOf(";", tokenIndex);
    if (semicolonIndex === -1)return cookies.substring(tokenIndex + token.length); else return cookies.substring(tokenIndex + token.length, semicolonIndex)
  }
  return""
};
util.getCookies = function (opt_prefix) {
  return util.__parseCookies(document.cookie.toString(), opt_prefix)
};
util.__parseCookies = function (cookiesString, opt_prefix) {
  var cookies = cookiesString.split("; ");
  var prefix = opt_prefix || "";
  var result = {};
  var i = 0, l = cookies.length;
  while (i < l) {
    if (cookies[i].indexOf(prefix) === 0) {
      var cookie = cookies[i].split("=");
      result[cookie.shift()] = cookie.shift()
    }
    i += 1
  }
  return result
};

util.getCookiesValues = function (pattern) {
  var cookies = document.cookie;
  var values = {};
  pattern += "=[^;]+";
  var matched = cookies.match(new RegExp(pattern, "g"));
  if (matched !== null)for (var i = 0, l = matched.length; i < l; i += 1) {
    var match = matched[i].split("=");
    values[match[0]] = match[1]
  }
  return values
};
util.removeCookie = function (name) {
  var date = new Date;
  date.setTime(date.getTime() - 1E3);
  document.cookie = name + "=0; expires=" + date.toGMTString() + "; path=/"
};
util.getWindowWidth = function () {
  return window.innerWidth || document.documentElement.clientWidth
};
util.getWindowHeight = function () {
  return window.innerHeight || document.documentElement.clientHeight
};
util.trim = function (str) {
  return str.replace(/^\s+|\s+$/g, "")
};
util.__encodeStorageItem = function (data, opt_expireTime) {
  return util.encodeJsonData({data: data, time: opt_expireTime ? (new Date).getTime() + opt_expireTime : undefined})
};
util.__decodeStorageItem = function (item) {
  return util.decodeJsonData(item)
};
util.saveToStorage = function (key, data, opt_expireTime) {
  try {
    window["localStorage"].setItem(key, util.__encodeStorageItem(data, opt_expireTime))
  } catch (error) {
    util.setCookie(key, data, opt_expireTime)
  }
};
util.removeFromStorage = function (key) {
  try {
    window["localStorage"].removeItem(key)
  } catch (error) {
    if (util.getCookie(key) !== "")util.removeCookie(key)
  }
};
util.loadFromStorage = function (key) {
  try {
    var item = util.__decodeStorageItem(window["localStorage"].getItem(key));
    if (item !== null)if (item["time"] === undefined || (new Date).getTime() < item["time"])return item["data"]; else util.removeFromStorage(key);
    return""
  } catch (error) {
  }
  return util.getCookie(key)
};
util.SafeObject = function (data) {
  this.__core = data
};
util.SafeObject.prototype.getCore = function () {
  return this.__core
};
util.SafeObject.prototype.get = function (var_args) {
  return this.getByPath(Array.prototype.slice.call(arguments))
};
util.SafeObject.prototype.set = function (value, var_args) {
  var path = Array.prototype.slice.call(arguments);
  this.setByPath(path.shift(), path)
};
util.SafeObject.prototype.getByPath = function (path) {
  var result = this.__core;
  var i = 0, l = path.length;
  var value = null;
  while (i < l) {
    if (result === null || path[i] === "")break;
    value = result[path[i]];
    if (value !== undefined)result = value; else result = null;
    i++
  }
  return result
};
util.SafeObject.prototype.setByPath = function (value, path) {
  var scope = this.__core;
  var i = 0, l = path.length;
  var key = null;
  while (i < l) {
    key = path[i += 1];
    if (key === "") {
      key = 0;
      while (scope[key] !== undefined)key++
    }
    if (i === l)scope[key] = value; else if (scope[key] === undefined)scope[key] = isNaN(path[i]) ? {} : [];
    scope = scope[key]
  }
};
util.dom.DUMMY_NODE = document;
util.dom.setSelectorEngine = function (engine) {
  util.dom.__selectorEngine = engine
};
util.dom.select = function (selector, opt_context) {
  if (util.dom.__selectorEngine !== null)return util.dom.__selectorEngine(selector, opt_context);
  return[]
};
util.dom.selectOne = function (selector, opt_context) {
  if (util.dom.__selectorEngine !== null) {
    var result = util.dom.__selectorEngine(selector, opt_context);
    if (result.length > 0)return result[0]
  }
  return null
};
util.dom.matches = function (selector, elements) {
  if (util.dom.__selectorEngine !== null)return util.dom.__selectorEngine.matches(selector, elements);
  return[]
};
util.dom.matchesSelector = function (element, selector) {
  if (util.dom.__selectorEngine !== null)return util.dom.__selectorEngine.matchesSelector(element, selector);
  return false
};
util.dom.__selectorEngine = null;
util.dom.dispatchEvent = function (element, type) {
  var result = false;
  var event = null;
  if (document.createEventObject !== undefined) {
    event = document.createEventObject();
    var eventName = "on" + type;
    if (element[eventName] === undefined)util.dom.__dispatchCustomIEEvent(element, event, type); else result = element.fireEvent(eventName, event)
  } else {
    event = document.createEvent("UIEvents");
    event.initUIEvent(type, true, true, window, 1);
    result = !element.dispatchEvent(event)
  }
  return result
};
util.dom.addEventListener = function (element, type, handler) {
  if (element.addEventListener !== undefined)element.addEventListener(type, handler, false); else if (element.attachEvent !== undefined) {
    var eventName = "on" + type;
    if (element[eventName] === undefined)util.dom.__addCustomIEListener(element, type, handler); else {
      if (element["__ieTargetId"] === undefined)element["__ieTargetId"] = "element_" + util.dom.__lastElementId++;
      var listenerId = element["__ieTargetId"] + "_" + type;
      handler[listenerId] = function (event) {
        handler.call(element,
            event)
      };
      element.attachEvent(eventName, handler[listenerId])
    }
  }
};
util.dom.removeEventListener = function (element, type, handler) {
  if (element.removeEventListener !== undefined)element.removeEventListener(type, handler, false); else if (element.detachEvent !== undefined) {
    var eventName = "on" + type;
    if (element[eventName] === undefined)util.dom.__removeCustomIEListener(element, type, handler); else {
      var listenerId = element["__ieTargetId"] + "_" + type;
      if (handler[listenerId] !== undefined) {
        element.detachEvent("on" + type, handler[listenerId]);
        delete handler[listenerId]
      }
    }
  }
};
util.dom.addOneEventListener = function (element, type, handler) {
  if (element["__onceTargetId"] === undefined)element["__onceTargetId"] = "element_" + util.dom.__lastElementId++;
  var listenerId = element["__onceTargetId"] + "_" + type;
  handler[listenerId] = function (event) {
    handler.call(element, event);
    util.dom.removeOneEventListener(element, type, handler)
  };
  util.dom.addEventListener(element, type, handler[listenerId])
};
util.dom.removeOneEventListener = function (element, type, handler) {
  var listenerId = element["__onceTargetId"] + "_" + type;
  if (handler[listenerId] !== undefined) {
    util.dom.removeEventListener(element, type, handler[listenerId]);
    delete handler[listenerId]
  }
};
util.dom.addChildEventListener = function (element, selector, type, handler) {
  if (selector !== "") {
    if (element["__childTargetId"] === undefined)element["__childTargetId"] = "element_" + util.dom.__lastElementId++;
    var listenerId = element["__childTargetId"] + "_" + type + "_" + selector;
    handler[listenerId] = util.dom.__createChildListener(element, selector, handler);
    util.dom.addEventListener(element, type, handler[listenerId])
  }
};
util.dom.__createChildListener = function (element, selector, handler) {
  return function (event) {
    if (event !== null) {
      var target = util.dom.getEventTarget(event);
      var child = null;
      if (target !== null)if (util.dom.matchesSelector(target, selector))child = target; else child = util.dom.getParentMatches(target, selector, element);
      if (child !== null) {
        handler.call(child, event, child);
        util.dom.stopPropagation(event)
      }
    }
  }
};
util.dom.removeChildEventListener = function (element, selector, type, handler) {
  if (selector !== "") {
    var listenerId = element["__childTargetId"] + "_" + type + "_" + selector;
    if (handler[listenerId] !== undefined) {
      util.dom.removeEventListener(element, type, handler[listenerId]);
      delete handler[listenerId]
    }
  }
};
util.dom.__addCustomIEListener = function (element, type, handler) {
  if (element["__customListener"] === undefined) {
    element["__customListener"] = function (event) {
      if (event["__type"] !== undefined) {
        var type = event["__type"];
        delete event["__type"];
        var handlers = element["__" + type];
        for (var i in handlers)handlers[i].call(element, event)
      }
    };
    element.attachEvent("onhelp", element["__customListener"])
  }
  if (element["__" + type] === undefined)element["__" + type] = [];
  element["__" + type].push(handler)
};
util.dom.__removeCustomIEListener = function (element, type, handler) {
  var handlers = element["__" + type];
  if (handlers !== undefined) {
    var i = handlers.length - 1;
    while (i >= 0) {
      if (handlers[i] === handler)handlers.splice(i, 1);
      i--
    }
  }
};
util.dom.__dispatchCustomIEEvent = function (element, event, type) {
  event["__type"] = type;
  return element.fireEvent("onhelp", event)
};
util.dom.__lastElementId = 0;
util.dom.preventDefault = function (event) {
  if (event !== null)if (event.preventDefault !== undefined)event.preventDefault(); else event.returnValue = false
};
util.dom.stopPropagation = function (event) {
  if (event !== null)if (event.stopPropagation !== undefined)event.stopPropagation(); else event.cancelBubble = true
};
util.dom.getEventTarget = function (event) {
  if (event.target instanceof Node)return event.target;
  if (event.srcElement instanceof Node)return event.srcElement;
  return null
};
util.dom.hasParent = function (element, parent) {
  return parent.contains(element)
};
util.dom.getParents = function (element, opt_context) {
  var context = opt_context || document.documentElement;
  var result = [];
  var nextParent = element.parentNode;
  while (nextParent !== context.parentNode && nextParent !== null) {
    result.push(nextParent);
    nextParent = nextParent.parentNode
  }
  return result
};
util.dom.getParentMatches = function (element, selector, opt_context) {
  var parent = element.parentNode;
  while (parent !== null && parent !== opt_context && !util.dom.matchesSelector(parent, selector))parent = parent.parentNode;
  return parent === opt_context ? null : parent
};
util.dom.getParentWithClass = function (element, className, opt_context) {
  var parent = element.parentNode;
  while (parent !== null && parent !== opt_context && !util.dom.hasClass(parent, className))parent = parent.parentNode;
  return parent === opt_context ? null : parent
};
util.dom.getElementsByClassName = function (className, opt_element) {
  var element = opt_element || document;
  if (element.getElementsByClassName !== undefined)return util.toArray(element.getElementsByClassName(className)); else return util.dom.select("." + className, element)
};
util.dom.getElementByClassName = function (className, opt_element) {
  var elements = util.dom.getElementsByClassName(className, opt_element);
  return elements[0] || null
};
util.dom.hasClass = function (element, className) {
  if (element.classList !== undefined)return element.classList.contains(className); else if (element.className !== undefined) {
    var classRegExp = new RegExp("(\\s|^)" + className + "(\\s|$)");
    return element.className.match(classRegExp) !== null
  }
  return false
};
util.dom.addClass = function (element, className) {
  if (element.classList !== undefined)element.classList.add(className); else if (!util.dom.hasClass(element, className))element.className += " " + className
};
util.dom.removeClass = function (element, className) {
  if (element.classList !== undefined)element.classList.remove(className); else if (util.dom.hasClass(element, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    element.className = element.className.replace(reg, " ")
  }
};
util.dom.setClassExist = function (element, className, isExist) {
  if (!isExist && util.dom.hasClass(element, className))util.dom.removeClass(element, className); else if (isExist && !util.dom.hasClass(element, className))util.dom.addClass(element, className)
};
util.dom.getAttributesData = function (element, opt_prefix) {
  var result = {};
  var prefix = opt_prefix || "data-";
  var attrs = element.attributes;
  var i = 0, l = attrs.length;
  while (i < l) {
    if (attrs[i].name.indexOf(prefix) === 0)result[attrs[i].name.substr(prefix.length)] = attrs[i].value;
    i++
  }
  return result
};
util.dom.createFragment = function (html) {
  var fragment = document.createDocumentFragment();
  var tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;
  var children = tempContainer.childNodes;
  var i = 0, l = children.length;
  while (i < l) {
    fragment.appendChild(children.item(0));
    i++
  }
  return fragment
};
util.dom.getWindowScrollTop = function () {
  var pageYOffset = window.pageYOffset;
  if (pageYOffset === undefined)if (document.documentElement.clientHeight)pageYOffset = document.documentElement.scrollTop; else if (document.body !== null)pageYOffset = document.body.scrollTop; else pageYOffset = 0;
  return pageYOffset
};
util.dom.getWindowScrollLeft = function () {
  var pageXOffset = window.pageXOffset;
  if (pageXOffset === undefined)if (document.documentElement.clientWidth)pageXOffset = document.documentElement.scrollLeft; else if (document.body !== null)pageXOffset = document.body.scrollLeft; else pageXOffset = 0;
  return pageXOffset
};
util.dom.getDocumentHeight = function () {
  var bodyHeight = 0;
  if (document.body !== null)bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
  var docElement = document.documentElement;
  return Math.max(bodyHeight, docElement.clientHeight, docElement.scrollHeight, docElement.offsetHeight)
};
util.dom.getDocumentWidth = function () {
  var bodyWidth = 0;
  if (document.body !== null)bodyWidth = Math.max(document.body.scrollWidth, document.body.offsetWidth);
  var docElement = document.documentElement;
  return Math.max(bodyWidth, docElement.clientWidth, docElement.scrollWidth, docElement.offsetWidth)
};
var events = {};
events.VERSION = "0.0.1";
events.Event = function (target, type, opt_isBubbling) {
  this._target = target;
  this._type = type;
  this._isBubbling = !!opt_isBubbling;
  this._isCanceled = false;
  this._isStopped = false;
  this._isImmediateStopped = false
};
events.Event.prototype.getTarget = function () {
  return this._target
};
events.Event.prototype.getType = function () {
  return this._type
};
events.Event.prototype.isBubbling = function () {
  return this._isBubbling
};
events.Event.prototype.preventDefault = function () {
  this._isCanceled = true
};
events.Event.prototype.isDefaultPrevented = function () {
  return this._isCanceled
};
events.Event.prototype.stopImmediatePropagation = function () {
  this._isImmediateStopped = true
};
events.Event.prototype.isImmediatePropagationStopped = function () {
  return this._isImmediateStopped
};
events.Event.prototype.stopPropagation = function () {
  this._isStopped = true
};
events.Event.prototype.isPropagationStopped = function () {
  return this._isImmediateStopped || this._isStopped
};
events.IEventDispatcher = function () {
};
events.IEventDispatcher.prototype.dispatch = function (event, opt_data) {
};
events.IEventDispatcher.prototype.addEventListener = function (type, listener) {
};
events.IEventDispatcher.prototype.removeEventListener = function (type, listener) {
};
events.IEventDispatcher.prototype.hasEventListener = function (type, listener) {
};
events.IEventDispatcher.prototype.removeAllEventListeners = function (opt_type) {
};
events.EventDispatcher = function (opt_propagationParent) {
  this.__propagationParent = opt_propagationParent || null;
  this.__listeners = {}
};
events.EventDispatcher.prototype.dispatch = function (event, opt_data) {
  if (!(event instanceof events.Event))event = new events.Event(this, event);
  var type = event.getType();
  if (this.__listeners[type] !== undefined) {
    var i = 0, l = this.__listeners[type].length;
    while (i < l) {
      this.__listeners[type][i].call(this, event, opt_data);
      if (event.isImmediatePropagationStopped())break;
      i++
    }
    if (this.__propagationParent !== null && event.isBubbling() && !event.isPropagationStopped())this.__propagationParent.dispatch(event)
  }
  return!event.isDefaultPrevented()
};
events.EventDispatcher.prototype.addEventListener = function (type, listener) {
  if (this.__listeners[type] === undefined)this.__listeners[type] = [listener]; else if (!this.hasEventListener(type, listener))this.__listeners[type].push(listener)
};
events.EventDispatcher.prototype.removeEventListener = function (type, listener) {
  if (this.__listeners[type] !== undefined) {
    var listenerIndex = util.indexOf(listener, this.__listeners[type]);
    if (listenerIndex !== -1)this.__listeners[type].splice(listenerIndex, 1)
  }
};
events.EventDispatcher.prototype.hasEventListener = function (type, listener) {
  if (this.__listeners[type] !== undefined)return util.indexOf(listener, this.__listeners[type]) !== -1;
  return false
};
events.EventDispatcher.prototype.removeAllEventListeners = function (opt_type) {
  if (opt_type === undefined)this.__listeners = {}; else delete this.__listeners[opt_type]
};
var sm = {};
sm.VERSION = "0.0.1";
sm.NAME_SEPARATOR = ":";
sm.FIELD_SEPARATOR = ".";
sm.PARENT_SEPARATOR = ",";
sm.setEntityFactory = function (factory) {
  sm.__factory = factory
};
sm.setEntitySerializer = function (serializer) {
  sm.__serializer = serializer
};
sm.createEntity = function (name, id, opt_parents) {
  if (sm.__factory !== null)return sm.__factory.createEntity(name, id, opt_parents);
  return null
};
sm.createEntityByName = function (fullName, opt_source) {
  var idMarkIndex = fullName.lastIndexOf(":");
  var nameMarkIndex = fullName.lastIndexOf(":", idMarkIndex - 1);
  var id = fullName.substring(idMarkIndex + 1);
  var name = fullName.substring(nameMarkIndex + 1, idMarkIndex);
  var entity = null;
  var parent = null;
  if (opt_source !== undefined)entity = opt_source.getEntity(fullName);
  if (entity === null) {
    var parentNames = [];
    var parents = [];
    var parentsSign = fullName.substring(0, nameMarkIndex);
    if (parentsSign.charAt(0) === "(")parentNames = sm.__splitName(parentsSign.substr(1,
        parentsSign.length - 2)); else if (parentsSign.length > 0)parentNames = [parentsSign];
    var i = 0, l = parentNames.length;
    while (i < l) {
      parent = sm.createEntityByName(parentNames[i], opt_source);
      if (parent !== null)parents.push(parent); else break;
      i += 1
    }
    if (parents.length === parentNames.length)entity = sm.createEntity(name, id, parents)
  }
  return entity
};
sm.getParentsName = function (entities) {
  if (entities.length < 2)return entities.join(",");
  return"(" + entities.join(",") + ")"
};
sm.serializeEntities = function (entities, opt_type) {
  if (sm.__serializer !== null)return sm.__serializer.serializeEntities(entities, opt_type);
  return{}
};
sm.serializeEntity = function (entity, opt_type) {
  return sm.serializeEntities([entity], opt_type)
};
sm.reconstructEntities = function (data, opt_type) {
  if (sm.__serializer !== null)return sm.__serializer.reconstructEntities(data, opt_type);
  return[]
};
sm.reconstructEntity = function (data, opt_type) {
  var singleData = {};
  for (var entityId in data) {
    singleData[entityId] = data[entityId];
    break
  }
  if (entityId !== "")return sm.reconstructEntities(singleData, opt_type)[0] || null;
  return null
};
sm.setEntityStorage = function (storage) {
  sm.__db = storage
};
sm.save = function (entity) {
  if (sm.__db !== null)sm.__db.save(entity)
};
sm.remove = function (entity) {
  if (sm.__db !== null)sm.__db.remove(entity)
};
sm.select = function (name) {
  if (sm.__db !== null)return sm.__db.select(name);
  return[]
};
sm.selectOne = function (name) {
  if (sm.__db !== null)return sm.__db.selectOne(name);
  return null
};
sm.selectById = function (name, id) {
  if (sm.__db !== null)return sm.__db.selectById(name, id);
  return[]
};
sm.selectOneById = function (name, id) {
  if (sm.__db !== null)return sm.__db.selectById(name, id)[0] || null;
  return null
};
sm.selectByName = function (fullName) {
  if (sm.__db !== null)return sm.__db.selectByName(fullName);
  return null
};
sm.selectChildren = function (parent, name) {
  if (sm.__db !== null)return sm.__db.selectChildren(parent, name);
  return[]
};
sm.flush = function () {
  if (sm.__db !== null)sm.__db.flush()
};
sm.addUpdateHandler = function (name, listener) {
  if (sm.__db !== null)sm.__db.addUpdateHandler(name, listener)
};
sm.addEntityUpdateHandler = function (name, id, listener) {
  if (sm.__db !== null)sm.__db.addEntityUpdateHandler(name, id, listener)
};
sm.removeUpdateListener = function (name, listener) {
  if (sm.__db !== null)sm.__db.removeUpdateListener(name, listener)
};
sm.removeEntityUpdateHandler = function (name, id, listener) {
  if (sm.__db !== null)sm.__db.removeEntityUpdateHandler(name, id, listener)
};
sm.__factory = null;
sm.__db = null;
sm.__serializer = null;
sm.__splitName = function (name) {
  var names = [];
  var i = 0, b = 0, p = 0, l = name.length;
  while (i < l) {
    if (name.charAt(i) === "(")b += 1; else if (name.charAt(i) === ")")b -= 1; else if (b === 0 && name.charAt(i) === ",") {
      names.push(name.substring(p, i));
      p = i + 1
    }
    i += 1
  }
  names.push(name.substring(p, i));
  return names
};
sm.IEntityFactory = function () {
};
sm.IEntityFactory.prototype.createEntity = function (name, id, opt_parents) {
};
sm.IEntity = function () {
};
sm.IEntity.prototype.getId = function () {
};
sm.IEntity.prototype.getParents = function () {
};
sm.IEntity.prototype.getName = function () {
};
sm.IEntity.prototype.getFullName = function () {
};
sm.IEntity.prototype.getField = function (key) {
};
sm.IEntity.prototype.setField = function (key, value) {
};
sm.IEntity.prototype.setLinks = function (key, entities) {
};
sm.IEntity.prototype.addLink = function (key, entity) {
};
sm.IEntity.prototype.removeLink = function (key, entity) {
};
sm.IEntity.prototype.hasLink = function (key, entity) {
};
sm.IEntity.prototype.serializeData = function (opt_type) {
};
sm.IEntity.prototype.populateData = function (data, opt_type) {
};
sm.IEntitySerializer = function () {
};
sm.IEntitySerializer.prototype.serializeEntities = function (items, opt_type) {
};
sm.IEntitySerializer.prototype.reconstructEntities = function (data, opt_type) {
};
sm.IEntitySource = function () {
};
sm.IEntitySource.prototype.getEntity = function (fullName) {
};
sm.IEntityStorage = function () {
};
sm.IEntityStorage.prototype.save = function (entity) {
};
sm.IEntityStorage.prototype.remove = function (entity) {
};
sm.IEntityStorage.prototype.select = function (name) {
};
sm.IEntityStorage.prototype.selectOne = function (name) {
};
sm.IEntityStorage.prototype.selectById = function (name, id) {
};
sm.IEntityStorage.prototype.selectByName = function (fullName) {
};
sm.IEntityStorage.prototype.selectChildren = function (parent, name) {
};
sm.IEntityStorage.prototype.flush = function () {
};
sm.IEntityStorage.prototype.addUpdateHandler = function (name, listener) {
};
sm.IEntityStorage.prototype.addEntityUpdateHandler = function (name, id, listener) {
};
sm.IEntityStorage.prototype.removeUpdateListener = function (name, listener) {
};
sm.IEntityStorage.prototype.removeEntityUpdateHandler = function (name, id, listener) {
};
sm.Entity = function (name, id, opt_parents) {
  var parentSign = "";
  if (opt_parents !== undefined && opt_parents.length > 0)parentSign = sm.getParentsName(opt_parents) + sm.NAME_SEPARATOR;
  this.__id = id;
  this.__entityName = name;
  this.__parents = opt_parents || [];
  this.__fullEntityName = parentSign + name + sm.NAME_SEPARATOR + id
};
sm.Entity.prototype.getId = function () {
  return this.__id
};
sm.Entity.prototype.getParents = function () {
  return this.__parents
};
sm.Entity.prototype.getEntity = function (fullName) {
  var result = null;
  if (this.__fullEntityName === fullName)result = this;
  var i = 0, l = this.__parents.length;
  while (result === null && i < l) {
    result = this.__parents[i].getEntity(fullName);
    i += 1
  }
  return result
};
sm.Entity.prototype.getName = function () {
  return this.__entityName
};
sm.Entity.prototype.getFullName = function () {
  return this.__fullEntityName
};
sm.Entity.prototype.getField = function (key) {
  return""
};
sm.Entity.prototype.setField = function (key, value) {
};
sm.Entity.prototype._getLinksCollection = function (linkName) {
  return null
};
sm.Entity.prototype.setLinks = function (linkName, entities) {
  var collection = this._getLinksCollection(linkName);
  if (collection !== null) {
    var entity = null;
    var table = {};
    var i = 0, l = entities.length;
    while (i < l) {
      entity = entities[i];
      table[entity.getFullName()] = entity;
      i += 1
    }
    i = collection.length - 1;
    while (i >= 0) {
      entity = collection[i];
      if (table[entity.getFullName()] === undefined)collection.splice(i, 1); else delete table[entity.getFullName()];
      i -= 1
    }
    for (var name in table)collection.push(table[name])
  }
};
sm.Entity.prototype.addLink = function (linkName, entity) {
  var collection = this._getLinksCollection(linkName);
  if (collection !== null)collection.push(entity)
};
sm.Entity.prototype.removeLink = function (linkName, entity) {
  var collection = this._getLinksCollection(linkName);
  if (collection !== null) {
    var i = 0, l = collection.length;
    while (i < l) {
      if (collection[i].getId() === entity.getId())collection.splice(i, 1);
      i += 1
    }
  }
};
sm.Entity.prototype.hasLink = function (linkName, entity) {
  var collection = this._getLinksCollection(linkName);
  if (collection !== null) {
    var i = 0, l = collection.length;
    while (i < l) {
      if (collection[i].getId() === entity.getId())return true;
      i += 1
    }
  }
  return false
};
sm.Entity.prototype.serializeData = function (opt_type) {
  return{}
};
sm.Entity.prototype.populateData = function (data, opt_type) {
};
sm.Entity.prototype.toString = function () {
  return this.__fullEntityName
};
sm.EntitySerializer = function (storage) {
  this.__storage = storage
};
sm.EntitySerializer.prototype.serializeEntities = function (items, opt_type) {
  var result = {};
  var i = 0, l = items.length;
  while (i < l) {
    var entity = items[i];
    result[entity.getFullName()] = entity.serializeData(opt_type);
    i += 1
  }
  return result
};
sm.EntitySerializer.prototype.reconstructEntities = function (data, opt_type) {
  var result = [];
  for (var name in data) {
    var entity = sm.createEntityByName(name, this.__storage);
    if (entity !== null && data[name]instanceof Object) {
      entity.populateData(data[name], opt_type);
      result.push(entity);
      this.__storage.save(entity)
    }
  }
  return result
};
sm.EntityStorage = function () {
  var isDispatchRequested = false;
  var self = this;

  function dispatchUpdate() {
    isDispatchRequested = false;
    self.__dispatchUpdates()
  }

  this.__entities = {};
  this.__children = {};
  this.__types = {};
  this.__dispatcher = new events.EventDispatcher;
  this.__updates = {};
  this.__dispatchNextTick = function () {
    if (!isDispatchRequested) {
      isDispatchRequested = true;
      util.async(dispatchUpdate)
    }
  }
};
sm.EntityStorage.prototype.getEntity = function (fullName) {
  return this.selectByName(fullName)
};
sm.EntityStorage.prototype.save = function (entity) {
  var parents = entity.getParents();
  var fullName = entity.getFullName();
  var name = entity.getName();
  var id = entity.getId();
  this.__entities[fullName] = entity;
  for (var i = 0, l = parents.length; i < l; i += 1) {
    var parent = parents[i];
    var parentName = parent.getFullName();
    if (this.__children[parentName] === undefined)this.__children[parentName] = {};
    if (this.__children[parentName][name] === undefined)this.__children[parentName][name] = {};
    if (this.__children[parentName][name][id] === undefined)this.__children[parentName][name][id] =
        entity;
    this.save(parent)
  }
  if (this.__types[name] === undefined)this.__types[name] = {};
  if (this.__types[name][id] === undefined)this.__types[name][id] = [fullName]; else if (util.indexOf(fullName, this.__types[name][id]) === -1)this.__types[name][id].push(fullName);
  if (this.__updates[name] === undefined)this.__updates[name] = [id]; else this.__updates[name].push(id);
  this.__dispatchNextTick()
};
sm.EntityStorage.prototype.remove = function (entity) {
  var fullName = entity.getFullName();
  var parents = entity.getParents();
  var name = entity.getName();
  var id = entity.getId();
  for (var i = 0, l = parents.length; i < l; i += 1) {
    var parentName = parents[i].getFullName();
    if (this.__children[parentName] !== undefined && this.__children[parentName][name] !== undefined && this.__children[parentName][name][id] !== undefined)delete this.__children[parentName][name][id]
  }
  if (this.__types[name] !== undefined && this.__types[name][id] !== undefined) {
    var names =
        this.__types[name][id];
    var index = util.indexOf(fullName, names);
    if (index !== -1) {
      names.splice(index, 1);
      if (names.length === 0)delete this.__types[name][id]
    }
  }
  var children = this.__children[fullName];
  if (children !== undefined)for (var childType in children)for (var childId in children[childType])this.remove(children[childType][childId]);
  delete this.__entities[fullName];
  if (this.__updates[name] === undefined)this.__updates[name] = [id]; else this.__updates[name].push(id);
  this.__dispatchNextTick()
};
sm.EntityStorage.prototype.select = function (name) {
  var result = [];
  for (var id in this.__types[name]) {
    var names = this.__types[name][id];
    for (var i = 0, l = names.length; i < l; i += 1)if (this.__entities[names[i]] !== undefined)result.push(this.__entities[names[i]])
  }
  return result
};
sm.EntityStorage.prototype.selectOne = function (name) {
  for (var id in this.__types[name]) {
    var names = this.__types[name][id];
    for (var i = 0, l = names.length; i < l; i += 1)if (this.__entities[names[i]] !== undefined)return this.__entities[names[i]]
  }
  return null
};
sm.EntityStorage.prototype.selectById = function (name, id) {
  var result = [];
  if (this.__types[name] !== undefined && this.__types[name][id] !== undefined) {
    var names = this.__types[name][id];
    for (var i = 0, l = names.length; i < l; i += 1)if (this.__entities[names[i]] !== undefined)result.push(this.__entities[names[i]])
  }
  return result
};
sm.EntityStorage.prototype.selectByName = function (fullName) {
  return this.__entities[fullName] || null
};
sm.EntityStorage.prototype.selectChildren = function (parent, name) {
  var result = [];
  var children = this.__children[parent.getFullName()];
  if (children !== undefined && children[name] !== undefined)for (var id in children[name])result.push(children[name][id]);
  return result
};
sm.EntityStorage.prototype.flush = function () {
  for (var fullName in this.__entities)this.remove(this.__entities[fullName])
};
sm.EntityStorage.prototype.addUpdateHandler = function (name, listener) {
  this.__dispatcher.addEventListener(name, listener)
};
sm.EntityStorage.prototype.addEntityUpdateHandler = function (name, id, listener) {
  this.__dispatcher.addEventListener(name + ":" + id, listener)
};
sm.EntityStorage.prototype.removeUpdateListener = function (name, listener) {
  this.__dispatcher.removeEventListener(name, listener)
};
sm.EntityStorage.prototype.removeEntityUpdateHandler = function (name, id, listener) {
  this.__dispatcher.removeEventListener(name + ":" + id, listener)
};
sm.EntityStorage.prototype.__dispatchUpdates = function () {
  var updates = this.__updates;
  this.__updates = {};
  for (var name in updates) {
    var ids = updates[name];
    var i = 0, l = ids.length;
    while (i < l) {
      this.__dispatcher.dispatch(new events.Event(this.__dispatcher, name + ":" + ids[i]));
      i += 1
    }
    this.__dispatcher.dispatch(new events.Event(this.__dispatcher, name))
  }
};
var net = {};
net.factory = {};
net.CAN_USE_CORS = window["XMLHttpRequest"] !== undefined && (new XMLHttpRequest)["withCredentials"] !== undefined;
net.CAN_SAVE_COOKIE = !navigator.userAgent.match(/Mozilla\/5.0.+AppleWebKit\/.+Version\/.+Safari\/|Trident|Presto/i);
net.CHARSET_ENCODING = "UTF-8";
net.IS_SAFARI = navigator.userAgent.toLowerCase().indexOf('safari/') > -1 &&
    navigator.userAgent.toLowerCase().indexOf('chrome/') === -1;
net.IS_IE11 = !(window["ActiveXObject"]) && "ActiveXObject" in window;
net.createRequest = function (opt_hostOrUrl, opt_isSecure, opt_port, opt_needResult) {
  return(new net.factory.RequestFactory(opt_hostOrUrl, opt_isSecure, opt_port)).createRequest(opt_needResult)
};
net.createSocket = function (opt_hostOrUrl, opt_isSecure, opt_port) {
  return(new net.factory.SocketFactory(opt_hostOrUrl, opt_isSecure, opt_port)).createSocket()
};
net.makeUrl = function (opt_hostOrUrl, opt_isSecure, opt_port, opt_protocol) {
  if (opt_hostOrUrl !== undefined) {
    if (opt_hostOrUrl.indexOf("://") !== -1)return opt_hostOrUrl;
    if (opt_hostOrUrl.indexOf("//") === 0)if (opt_protocol !== undefined)return opt_protocol + ":" + opt_hostOrUrl; else return opt_hostOrUrl
  }
  var host = opt_hostOrUrl || location.hostname;
  var isSecure = opt_isSecure || location.protocol === "https:";
  var port = (opt_port || location.port || (isSecure ? 443 : 80)) + "";
  var protocol = opt_protocol || "http";
  var url = protocol + (isSecure ?
      "s" : "") + "://" + host;
  if (port === "443" && isSecure || port === "80" && !isSecure)url += "/"; else url += ":" + port + "/";
  return url
};
net.encodeHeadersFallback = function (headers) {
  var fallback = "";
  for (var name in headers)fallback += "&_h[" + encodeURIComponent(name.toLowerCase()) + "]=" + encodeURIComponent(headers[name]);
  return fallback
};
net.RequestMethod = {GET: "GET", POST: "POST"};
net.RequestEvent = function (target, type, responseStatus, opt_data) {
  events.Event.call(this, target, type);
  this.__responseStatus = responseStatus;
  this.__data = opt_data || ""
};
util.inherits(net.RequestEvent, events.Event);
net.RequestEvent.COMPLETE = "complete";
net.RequestEvent.prototype.getResponseData = function () {
  return this.__data
};
net.RequestEvent.prototype.getResponseStatus = function () {
  return this.__responseStatus
};
net.RequestEvent.prototype.isRequestFailed = function () {
  return this.__responseStatus >= 400 || this.__responseStatus === 0
};
net.RequestEvent.prototype.isRequestFailLocal = function () {
  return this.__responseStatus === 0
};
net.RequestEvent.prototype.isRequestTimeout = function () {
  return this.__responseStatus === 504 || this.__responseStatus === 408
};
net.RequestEvent.prototype.isRequestForbidden = function () {
  return this.__responseStatus === 403
};
net.Request = function (url) {
  events.EventDispatcher.call(this);
  this.__url = url;
  this.__method = net.RequestMethod.GET;
  this.__headers = {};
  this.__sendQueue = [];
  this.__run = util.bind(this.__run, this);
  this.__timeout = -1;
  this.__ttr = net.Request.__DEFAULT_TTR
};
util.inherits(net.Request, events.EventDispatcher);
net.Request.__DEFAULT_TTR = 3E4;
net.Request.prototype.setTimeoutTime = function (timeout) {
  this.__ttr = timeout
};
net.Request.prototype.getUrl = function () {
  return this.__url
};
net.Request.prototype.setMethod = function (method) {
  this.__method = method
};
net.Request.prototype.getMethod = function () {
  return this.__method
};
net.Request.prototype.setHeaders = function (headers) {
  for (var header in headers)this.setHeader(header, headers[header])
};
net.Request.prototype.getHeaders = function () {
  return this.__headers
};
net.Request.prototype.setHeader = function (key, value) {
  this.__headers[key] = value
};
net.Request.prototype.getHeader = function (key) {
  return this.__headers[key.toLowerCase()] || ""
};
net.Request.prototype.removeHeader = function (key) {
  delete this.__headers[key.toLowerCase()]
};
net.Request.prototype.send = function (data, opt_path) {
  var args = [data, ""];
  if (opt_path !== undefined)if (opt_path.charAt(0) === "/")args[1] = opt_path.substr(1); else args[1] = opt_path;
  this.__sendQueue.push(args);
  util.async(this.__run)
};
net.Request.prototype.cancel = function () {
  this.__sendQueue.length = 0
};
net.Request.prototype.abort = function () {
  if (this._isRunning())this._handleResult(0)
};
net.Request.prototype._isRunning = function () {
  return false
};
net.Request.prototype._doSend = function (data, path) {
};
net.Request.prototype._handleResult = function (status, opt_data) {
  util.async(this.__run);
  if (this.__timeout !== -1) {
    clearTimeout(this.__timeout);
    this.__timeout = -1
  }
  this._reset();
  this.dispatch(new net.RequestEvent(this, net.RequestEvent.COMPLETE, status, opt_data), opt_data)
};
net.Request.prototype._reset = function () {
};
net.Request.prototype.__run = function () {
  if (!this._isRunning() && this.__sendQueue.length > 0) {
    var self = this;
    this.__timeout = setTimeout(function () {
      if (self._isRunning())self._handleResult(504)
    }, this.__ttr);
    this._doSend.apply(this, this.__sendQueue.shift())
  }
};
net.XhrRequest = function (url, opt_useCors) {
  net.Request.call(this, url);
  this.__request = null;
  this.__useCors = opt_useCors || false
};
util.inherits(net.XhrRequest, net.Request);
net.XhrRequest.prototype._isRunning = function () {
  return this.__request !== null
};
net.XhrRequest.prototype._doSend = function (data, path) {
  this.__request = this.__createRequest();
  if (this.__request !== null) {
    var method = this.getMethod();
    var headers = this.getHeaders();
    var self = this;
    this.__request.onreadystatechange = function () {
      if (self.__request !== null && self.__request.readyState === 4) {
        var data = self.__request.responseText || "";
        var status = self.__request.status;
        if (status === 1223)status = 204;
        self._handleResult(status, data)
      }
    };
    var url = this.getUrl() + path;
    if (method === net.RequestMethod.GET && data.length >
        0)url += (url.indexOf("?") === -1 ? "?" : "&") + data;
    var fallback = net.encodeHeadersFallback(this.getHeaders());
    if (fallback.length > 0)url += (url.indexOf("?") === -1 ? "?" : "&") + "__fallback__" + fallback;
    this.__request.open(method, url, true);
    this.__request.withCredentials = this.__useCors;
    var sendData = null;
    if (method !== net.RequestMethod.GET) {
      this.__request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      sendData = data
    } else this.__request.setRequestHeader("Content-Type", "text/plain");
    try {
      this.__request.send(sendData)
    } catch (error) {
      util.nop("XHR request error: " +
          error.message);
      this._handleResult(500)
    }
  } else {
    util.nop("Unable to create instance of XMLHttpRequest.");
    this._handleResult(500)
  }
};
net.XhrRequest.prototype._reset = function () {
  if (this.__request !== null) {
    this.__request.onreadystatechange = util.nop;
    this.__request.abort();
    this.__request = null
  }
};
net.XhrRequest.prototype.__createRequest = function () {
  if (window["XMLHttpRequest"] !== undefined)return new XMLHttpRequest;
  if (window["ActiveXObject"] !== undefined)return new ActiveXObject("Microsoft.XMLHTTP");
  return null
};
net.JsonpRequest = function (url) {
  net.Request.call(this, url);
  this.__id = "njr_" + (net.JsonpRequest.__lastId += 1);
  this.__callbackName = this.__id + "_callback";
  this.__script = null
};
util.inherits(net.JsonpRequest, net.Request);
net.JsonpRequest.__lastId = 0;
net.JsonpRequest.ERROR_TIMEOUT = 3E4;
net.JsonpRequest.CALLBACK_TABLE = "__jsonp";
net.JsonpRequest.__DATA_KEY = "lt-jsonp-data";
net.JsonpRequest.prototype._isRunning = function () {
  return this.__script !== null
};
net.JsonpRequest.prototype._doSend = function (data, path) {
  if (!net.CAN_SAVE_COOKIE) {
    var cookies = this.__findDomainCookies(this.getUrl());
    if (cookies !== "")this.setHeader("cookie", cookies)
  }

  var url = this.getUrl() + path;
  url += (url.indexOf("?") === -1 ? "?" : "&") + "__fallback__&" + util.encodeFormData({"": "", "_m": this.getMethod(), "_c": this.__callbackName, "_t": "jsonp", "_": data || undefined, "_rnd": Math.random().toString(36).substr(2)}) + net.encodeHeadersFallback(this.getHeaders());
  var self = this;

  function callback(opt_data, opt_status, opt_cookie) {
    if (!net.CAN_SAVE_COOKIE && opt_cookie !== undefined) {
      var cookies = opt_cookie.split("; ");
      for (var i = 0; i < cookies.length; i += 1) {
        var cookie = cookies[i];
        if (cookie !== '') {
          var name = self.__extractCookieKey(cookie);
          var jsonpCookies =
              util.decodeJsonData(
                  util.loadFromStorage(net.JsonpRequest.__DATA_KEY));

          if (!(jsonpCookies instanceof Object)) {
            jsonpCookies = {};
          }

          jsonpCookies[name] =
          {
            'domain': self.__extractCookieDomain(cookie),
            'value': self.__extractCookieValue(cookie)
          };
          util.saveToStorage(net.JsonpRequest.__DATA_KEY,
              util.encodeJsonData(jsonpCookies), lt.sm.VISITOR_COOKIE_TIMEOUT);
        }
      }
    }
    self._handleResult(opt_status === undefined ? 404 : opt_status, opt_data)
  }

  window[this.__callbackName] =
      callback;
  this.__script = document.createElement("SCRIPT");
  this.__script.charset = net.CHARSET_ENCODING;
  this.__script.id = this.__id;
  this.__script.src = url;
  this.__script.onreadystatechange = function () {
    if (self.__script.readyState === "complete" || self.__script.readyState === "loaded")callback()
  };
  this.__script.onload = function () {
    callback()
  };
  document.body.appendChild(this.__script)
};
net.JsonpRequest.prototype.__extractCookieDomain = function (cookie) {
  var token = "domain=";
  var tokenIndex = cookie.indexOf(token);
  if (tokenIndex !== -1) {
    var semicolonIndex = cookie.indexOf(";", tokenIndex);
    if (semicolonIndex === -1)return cookie.substring(tokenIndex + token.length); else return cookie.substring(tokenIndex + token.length, semicolonIndex)
  }
  return""
};
net.JsonpRequest.prototype.__extractCookieKey = function (cookie) {
  var index = cookie.indexOf("=");
  if (index !== -1)return cookie.substring(0, index);
  return""
};
net.JsonpRequest.prototype.__extractCookieValue = function (cookie) {
  var separatorIndex = cookie.indexOf("=");
  if (separatorIndex !== -1) {
    var semicolonIndex = cookie.indexOf(";");
    if (semicolonIndex !== -1)return cookie.substring(separatorIndex + 1, semicolonIndex); else return cookie.substring(separatorIndex + 1)
  }
  return""
};
net.JsonpRequest.prototype.__extractUrlDomain = function (url) {
  var token = "//";
  var tokenIndex = url.indexOf(token);
  if (tokenIndex !== -1) {
    var semicolonIndex = url.indexOf("/", tokenIndex + token.length);
    if (semicolonIndex === -1)return url.substring(tokenIndex + token.length); else return url.substring(tokenIndex + token.length, semicolonIndex)
  }
  return""
};
net.JsonpRequest.prototype.__findDomainCookies = function (url) {
  var fullDomain = this.__extractUrlDomain(url);
  var cookies = util.decodeJsonData(
      util.loadFromStorage(net.JsonpRequest.__DATA_KEY));
  var result = [];

  function checkDomain(addr, domain) {
     var fullName = addr.split(':')[0];
    return domain && fullName.slice(fullName.length - domain.length) === domain;
  }

  for (var name in cookies) {
    var cookie = cookies[name];
      if (cookie !== undefined) {

      if (checkDomain(fullDomain, cookie['domain'])) {
        result.push(name + "=" + cookie['value']);
      }
    }
  }
  return result.join("; ");
};
net.JsonpRequest.prototype._reset = function () {
  if (this.__script !== null) {
    this.__script.onreadystatechange = util.nop;
    this.__script.onload = util.nop;
    document.body.removeChild(this.__script);
    try {
      delete window[this.__callbackName]
    } catch (error) {
      window[this.__callbackName] = util.nop
    }
    this.__script = null
  }
};
net.FormRequest = function (url) {
  net.Request.call(this, url);
  this.__id = "nfr_" + (net.FormRequest.__lastId += 1);
  this.__frameName = this.__id + "_frame";
  this.__frame = null;
  this.__form = null
};
util.inherits(net.FormRequest, net.Request);
net.FormRequest.__lastId = 0;
net.FormRequest.prototype._isRunning = function () {
  return this.__frame !== null;
};
net.FormRequest.prototype._doSend = function (data, path) {
  var url = this.getUrl() + path;
  url += (url.indexOf("?") === -1 ? "?" : "&") + "__fallback__&_m=" + this.getMethod() + net.encodeHeadersFallback(this.getHeaders());
  this.__frame = document.body.appendChild(this.__createFrame());
  this.__frame.style.display = "none";
  this.__form = document.body.appendChild(document.createElement("FORM"));
  this.__form.style.display = "none";
  this.__form.method = net.RequestMethod.POST;
  this.__form.action = url;
  this.__form.target = this.__frameName;
  if (data !== "") {
    this.__form.appendChild(this.__createInput("_", data));
  }

  var self = this;

  function callback() {
    util.async(function () {
      self._handleResult(200);
    });
  }

  this.__frame.onload = callback;
  this.__frame.onerror = util.nop;

  setTimeout(function() {
    self.__frame.onload = util.nop;
    callback();
  }, 300);

  this.__form.submit();

  if (this.__form !== null) {
    document.body.removeChild(this.__form);
    this.__form = null;
  }
};
net.FormRequest.prototype._reset = function () {
  if (this.__frame !== null) {
    document.body.removeChild(this.__frame);
    this.__frame.onreadystatechange = util.nop;
    this.__frame.onload = util.nop;
    this.__frame = null;
  }
};
net.FormRequest.prototype.__createInput = function (name, value) {
  var input = document.createElement("INPUT");
  input.type = "hidden";
  input.name = name;
  input.value = value;
  return input
};
net.FormRequest.prototype.__createFrame = function () {
  try {
    return document.createElement('<iframe name="' + this.__frameName + '">')
  } catch (error) {
    var frame = document.createElement("IFRAME");
    frame.name = this.__frameName;

    return frame
  }
};
net.factory.IRequestFactory = function () {
};
net.factory.IRequestFactory.prototype.setMethod = function (method) {
};
net.factory.IRequestFactory.prototype.setHeaders = function (headers) {
};
net.factory.IRequestFactory.prototype.setHeader = function (key, value) {
};
net.factory.IRequestFactory.prototype.createRequest = function (opt_needResult) {
};
net.factory.ISocketFactory = function () {
};
net.factory.ISocketFactory.prototype.setHeader = function (key, value) {
};
net.factory.ISocketFactory.prototype.setHeaders = function (headers) {
};
net.factory.ISocketFactory.prototype.createSocket = function () {
};
net.factory.RequestFactory = function (opt_hostOrUrl, opt_isSecure, opt_port) {
  this.__url = net.makeUrl(opt_hostOrUrl, opt_isSecure, opt_port);
  this.__sameDomain = this.__url.indexOf(location.protocol + "//" + location.host + "/") === 0;
  this.__headers = {};
  this.__method = net.RequestMethod.GET
};
net.factory.RequestFactory.prototype.createRequest = function (opt_needResult) {
  var request = this.__buildRequest(opt_needResult);
  request.setHeaders(this.__headers);
  request.setMethod(this.__method);
  return request
};
net.factory.RequestFactory.prototype.__buildRequest = function (opt_needResult) {
  if (this.__sameDomain || net.CAN_USE_CORS && net.CAN_SAVE_COOKIE)return new net.XhrRequest(this.__url, !this.__sameDomain);
  if (opt_needResult === undefined || opt_needResult)return new net.JsonpRequest(this.__url);
  return new net.FormRequest(this.__url)
};
net.factory.RequestFactory.prototype.setMethod = function (method) {
  this.__method = method
};
net.factory.RequestFactory.prototype.setHeaders = function (headers) {
  this.__headers = headers
};
net.factory.RequestFactory.prototype.setHeader = function (key, value) {
  this.__headers[key] = value
};
net.factory.SocketFactory = function (opt_hostOrUrl, opt_isSecure, opt_port) {
  this.__url = net.makeUrl(opt_hostOrUrl, opt_isSecure, opt_port, "ws");
  this.__headers = {}
};
net.factory.SocketFactory.prototype.setHeaders = function (headers) {
  this.__headers = headers
};
net.factory.SocketFactory.prototype.setHeader = function (key, value) {
  this.__headers[key] = value
};
net.factory.SocketFactory.prototype.createSocket = function () {
  try {
    var url = this.__url;
    var fallback = net.encodeHeadersFallback(this.__headers);
    if (fallback.length > 0)url += (url.indexOf("?") === -1 ? "?" : "&") + "__fallback__" + fallback
    if (window["WebSocket"] !== undefined && !net.IS_SAFARI)return new WebSocket(url); else if (window["MozWebSocket"] !== undefined)return new window["MozWebSocket"](url)
  } catch (error) {
  }
  return null
};
var protocols = {};
protocols.VERSION = "0.1.0";
protocols.frames = {};
protocols.StreamSource;
protocols.Protocol = function () {
  this._frame = this._createFrame()
};
protocols.Protocol.prototype.decodeChunk = function (chunk) {
  var result = [];
  var message = [];
  var messageSize = 0;
  var chunks = [chunk];
  while (chunks.length > 0) {
    if (this._frame === null)this._frame = this._createFrame();
    this._frame.appendChunk(chunks.shift());
    if (this._frame.isReady === true) {
      var frame = this._frame.flush();
      message.push(frame);
      messageSize += frame.length;
      if (this._frame.isFinal === true) {
        result.push(new protocols.Message(this._frame.type, this._joinMessage(message, messageSize)));
        message.length = 0;
        messageSize = 0
      }
      chunks =
          chunks.concat(this._frame.getRest());
      this._frame.clean();
      this._frame = null
    }
  }
  return result
};
protocols.Protocol.prototype._joinMessage = function (message, size) {
  return""
};
protocols.Protocol.prototype.clean = function () {
  if (this._frame !== null) {
    this._frame.clean();
    this._frame = null
  }
};
protocols.Protocol.prototype.disconnect = function () {
  return""
};
protocols.Protocol.prototype.ping = function () {
  return""
};
protocols.Protocol.prototype.pong = function () {
  return""
};
protocols.Protocol.prototype.encode = function (data, opt_type) {
  return""
};
protocols.Protocol.prototype._createFrame = function () {
  return new protocols.frames.Frame
};
protocols.Message = function (type, data) {
  this.type = type;
  this.data = data
};
protocols.WsLike = function () {
  protocols.Protocol.call(this)
};
util.inherits(protocols.WsLike, protocols.Protocol);
protocols.WsLike.__DISCONNECT_MESSAGE = "fdn0" + "------------------";
protocols.WsLike.__PING_MESSAGE = "fin0------------------";
protocols.WsLike.__PONG_MESSAGE = "fon0------------------";
protocols.WsLike.TEXT_CODE = "t".charCodeAt(0);
protocols.WsLike.DISCONNECT_CODE = "d".charCodeAt(0);
protocols.WsLike.PING_CODE = "i".charCodeAt(0);
protocols.WsLike.PONG_CODE = "o".charCodeAt(0);
protocols.WsLike.prototype.disconnect = function () {
  return protocols.WsLike.__DISCONNECT_MESSAGE
};
protocols.WsLike.prototype.ping = function () {
  return protocols.WsLike.__PING_MESSAGE
};
protocols.WsLike.prototype.pong = function () {
  return protocols.WsLike.__PONG_MESSAGE
};
protocols.WsLike.prototype.encode = function (data, opt_urlSafe) {
  var string = data.toString();
  if (opt_urlSafe)string = util.encodeBase64(string, true);
  var length = util.encodeBase64(string.length.toString(16), true);
  var rate = length.length.toString(16);
  return"ft" + (opt_urlSafe ? "y" : "n") + rate + length + string
};
protocols.WsLike.prototype._createFrame = function () {
  return new protocols.frames.WsLike
};
protocols.WsLike.prototype._joinMessage = function (message, size) {
  return message.join("")
};
protocols.frames.Frame = function () {
  this.isFinal = false;
  this.isReady = false;
  this.type = 0
};
protocols.frames.Frame.prototype.appendChunk = function (chunk) {
};
protocols.frames.Frame.prototype.flush = function () {
  return""
};
protocols.frames.Frame.prototype.getRest = function () {
  return[]
};
protocols.frames.Frame.prototype.clean = function () {
};
protocols.frames.WsLike = function () {
  protocols.frames.Frame.call(this);
  this.__baseLength = -1;
  this.__isUrlSafe = false;
  this.__lengthRate = -1;
  this.__payloadLength = -1;
  this.__buffer = ""
};
util.inherits(protocols.frames.WsLike, protocols.frames.Frame);
protocols.frames.WsLike.prototype.appendChunk = function (chunk) {
  this.__buffer += chunk;
  if (this.__buffer.length >= 4 && this.__lengthRate === -1) {
    var fin = this.__buffer.charAt(0);
    this.isFinal = fin === "f";
    if (this.isFinal === false)this.isReady = fin !== "_";
    if (this.isReady === true) {
      this.__baseLength = 1;
      this.__payloadLength = 0
    } else {
      this.type = this.__buffer.charCodeAt(1);
      this.__isUrlSafe = this.__buffer.charAt(2) === "y";
      this.__lengthRate = parseInt(this.__buffer.charAt(3), 16);
      if (isNaN(this.__lengthRate)) {
        this.__baseLength = 1;
        this.__payloadLength =
            0;
        this.isReady = true
      } else {
        this.__baseLength = 4;
        if (this.__lengthRate === 0) {
          this.__baseLength = 1;
          this.__payloadLength = 0;
          this.isReady = true
        }
      }
    }
  }
  if (this.isReady === false && this.__lengthRate !== -1)if (this.__payloadLength === -1 && this.__buffer.length >= this.__baseLength + this.__lengthRate) {
    var length = this.__buffer.substr(this.__baseLength, this.__lengthRate);
    this.__payloadLength = parseInt(util.decodeBase64(length, true), 16);
    if (isNaN(this.__payloadLength)) {
      this.__baseLength = 1;
      this.__payloadLength = 0;
      this.isReady = true
    } else this.__baseLength +=
        this.__lengthRate
  }
  if (this.isReady === false && this.__payloadLength !== -1)this.isReady = this.__buffer.length >= this.__payloadLength + this.__baseLength
};
protocols.frames.WsLike.prototype.flush = function () {
  var payload = this.__buffer.substr(this.__baseLength, this.__payloadLength);
  if (this.__isUrlSafe === true)return util.decodeBase64(payload, true);
  return payload
};
protocols.frames.WsLike.prototype.getRest = function () {
  return[this.__buffer.substr(this.__payloadLength + this.__baseLength)]
};
protocols.frames.WsLike.prototype.clean = function () {
  this.__buffer = ""
};
var io = {};
io.HOLD_TIMEOUT = 5E3;
io.POLL_TIMEOUT = 0;
io.MIN_DESTROY_TIMEOUT = 1E4;
io.createConnection = function (opt_hostOrUrl, opt_isSecure, opt_port) {
  return new io.AdaptiveConnection(io.HOLD_TIMEOUT, io.POLL_TIMEOUT, new io.AdaptiveConnectionFactory(opt_hostOrUrl, opt_isSecure, opt_port))
};
io.createBestPossibleConnection = function (opt_hostOrUrl, opt_isSecure, opt_port) {
  var factory = new io.BestPossibleConnectionFactory(opt_hostOrUrl, opt_isSecure, opt_port);
  return factory.createConnection(io.HOLD_TIMEOUT, io.POLL_TIMEOUT)
};
io.createPollingConnection = function (opt_hostOrUrl, opt_isSecure, opt_port) {
  var factory = new io.PollingConnectionFactory(opt_hostOrUrl, opt_isSecure, opt_port);
  return factory.createConnection(io.HOLD_TIMEOUT, io.POLL_TIMEOUT)
};
io.IConnection = function () {
};
io.IConnection.prototype.write = function (data) {
};
io.IConnection.prototype.destroy = function () {
};
io.IConnectionFactory = function () {
};
io.IConnectionFactory.prototype.setHeader = function (key, value) {
};
io.IConnectionFactory.prototype.setHeaders = function (headers) {
};
io.IConnectionFactory.prototype.createConnection = function (holdTimeout, pollTimeout) {
};
io.ConnectionEvent = function (target, type) {
  events.Event.call(this, target, type)
};
util.inherits(io.ConnectionEvent, events.Event);
io.ConnectionEvent.DATA = "data";
io.ConnectionEvent.CLOSE = "close";
io.ConnectionEvent.ERROR = "error";
io.BaseConnection = function () {
  events.EventDispatcher.call(this);
  this._writeQueue = []
};
util.inherits(io.BaseConnection, events.EventDispatcher);
io.BaseConnection.prototype.write = function (data) {
  if (!this._isClosed()) {
    this._writeQueue.push(data);
    if (this._canWrite())this._flush()
  }
};
io.BaseConnection.prototype.destroy = function () {
  if (!this._isClosed()) {
    this._writeQueue.length = 0;
    this._close();
    this.dispatch(new io.ConnectionEvent(this, io.ConnectionEvent.CLOSE))
  }
};
io.BaseConnection.prototype._canWrite = function () {
  return false
};
io.BaseConnection.prototype._flush = function () {
};
io.BaseConnection.prototype._isClosed = function () {
  return false
};
io.BaseConnection.prototype._close = function () {
};
io.WebSocketConnection = function (webSocket) {
  io.BaseConnection.call(this);
  this._webSocket = webSocket;
  this.__connectionTimeout = -1;
  this.__pingTimeout = -1;
  this.__destroyTimeout = -1;
  var self = this;
  this.__openHandler = function () {
    self.__stopConnectionTimeout();
    self.__startPingLoop();
    self._flush()
  };
  this.__dataHandler = function (event) {
    self.__stopPingLoop();
    self.__startPingLoop();
    if (event !== null && event.data !== "")self.dispatch(new io.ConnectionEvent(self, io.ConnectionEvent.DATA), event.data)
  };
  this.__errorHandler = function () {
    util.nop("Websocket connection error.");
    self.__stopConnectionTimeout();
    self.dispatch(new io.ConnectionEvent(self, io.ConnectionEvent.ERROR))
  };
  this.__closeHandler = function () {
    if (self.__connectionTimeout !== -1) {
      util.nop("Websocket handshake error.");
      self.__stopConnectionTimeout();
      self.dispatch(new io.ConnectionEvent(self, io.ConnectionEvent.ERROR))
    }
    self._close()
  };
  this.__initWebSocket();
  this.__startConnectionTimeout()
};
util.inherits(io.WebSocketConnection, io.BaseConnection);
io.WebSocketConnection.CONNECTION_TIMEOUT = 5E3;
io.WebSocketConnection.PING_INTERVAL = 2E4;
io.WebSocketConnection.DESTROY_TIMEOUT = 3E4;
io.WebSocketConnection.prototype._flush = function () {
  while (this._writeQueue.length > 0) {
    var message = this._writeQueue.shift();
    if (message.length > 0)this._webSocket.send(message)
  }
};
io.WebSocketConnection.prototype._canWrite = function () {
  return this._webSocket.readyState !== 0
};
io.WebSocketConnection.prototype._isClosed = function () {
  return this._webSocket.readyState >= 2
};
io.WebSocketConnection.prototype._close = function () {
  this.__stopPingLoop();
  this.__destroyWebSocket();
  this._webSocket.close();
  this.dispatch(new io.ConnectionEvent(this, io.ConnectionEvent.CLOSE));
};
io.WebSocketConnection.prototype.__startPingLoop = function () {
  var self = this;
  this.__pingTimeout = setTimeout(function () {
    self._webSocket.send("")
  }, io.WebSocketConnection.PING_INTERVAL);
  this.__destroyTimeout = setTimeout(function () {
    self.destroy()
  }, io.WebSocketConnection.DESTROY_TIMEOUT)
};
io.WebSocketConnection.prototype.__stopPingLoop = function () {
  if (this.__destroyTimeout !== -1) {
    clearTimeout(this.__destroyTimeout);
    this.__destroyTimeout = -1
  }
  if (this.__pingTimeout !== -1) {
    clearInterval(this.__pingTimeout);
    this.__pingTimeout = -1
  }
};
io.WebSocketConnection.prototype.__startConnectionTimeout = function () {
  var self = this;
  this.__connectionTimeout = setTimeout(function () {
    util.nop("Websocket handshake timeout.");
    self.__connectionTimeout = -1;
    self.dispatch(new io.ConnectionEvent(self, io.ConnectionEvent.ERROR));
    self.destroy()
  }, io.WebSocketConnection.CONNECTION_TIMEOUT)
};
io.WebSocketConnection.prototype.__stopConnectionTimeout = function () {
  if (this.__connectionTimeout !== -1) {
    clearTimeout(this.__connectionTimeout);
    this.__connectionTimeout = -1
  }
};
io.WebSocketConnection.prototype.__destroyWebSocket = function () {
  this._webSocket.removeEventListener("open", this.__openHandler, false);
  this._webSocket.removeEventListener("message", this.__dataHandler, false);
  this._webSocket.removeEventListener("error", this.__errorHandler, false);
  this._webSocket.removeEventListener("close", this.__closeHandler, false)
};
io.WebSocketConnection.prototype.__initWebSocket = function () {
  this._webSocket.addEventListener("open", this.__openHandler, false);
  this._webSocket.addEventListener("message", this.__dataHandler, false);
  this._webSocket.addEventListener("error", this.__errorHandler, false);
  this._webSocket.addEventListener("close", this.__closeHandler, false)
};
io.PollingConnection = function (holdTimeout, pollTimeout, requestFactory) {
  io.BaseConnection.call(this);
  var self = this;
  var destroyTimeout = Math.max((holdTimeout + pollTimeout) * 2, io.MIN_DESTROY_TIMEOUT);

  function poll() {
    self.__poll()
  }

  function writeHandler(event) {
    if (event.isRequestFailed())self.destroy()
  }

  function readHandler(event, opt_data) {
    if (event.isRequestFailed())self.destroy(); else {
      if (typeof opt_data === "string" && opt_data.length > 0)self.__handleData(opt_data);
      if (!self._isClosed())self.__pollTimer = setTimeout(poll,
          pollTimeout)
    }
  }

  this.__id = io.PollingConnection.HANDSHAKE_KEY;
  this.__protocol = new protocols.WsLike;
  this.__writeRequest = requestFactory.createRequest(false);
  this.__writeRequest.setMethod(net.RequestMethod.POST);
  this.__writeRequest.addEventListener(net.RequestEvent.COMPLETE, writeHandler);
  this.__isUrlSafe = Number(this.__writeRequest instanceof net.FormRequest);
  this.__readRequest = requestFactory.createRequest();
  this.__readRequest.addEventListener(net.RequestEvent.COMPLETE, readHandler);
  this.__readRequest.setHeader("x-hold-timeout",
      holdTimeout.toString());
  this.__readRequest.setHeader("x-destroy-timeout", destroyTimeout.toString());
  this.__readRequest.setTimeoutTime(destroyTimeout);
  this.__pollTimer = setTimeout(poll, 0)
};
util.inherits(io.PollingConnection, io.BaseConnection);
io.PollingConnection.HANDSHAKE_KEY = "0";
io.PollingConnection.prototype.__poll = function () {
  this.__readRequest.send("", this.__getPath())
};
io.PollingConnection.prototype._flush = function () {
  var payload = "";
  while (this._writeQueue.length > 0) {
    var message = this._writeQueue.shift();
    if (message.length > 0)payload += this.__protocol.encode(message, this.__isUrlSafe)
  }
  if (payload.length > 0)this.__writeRequest.send(payload, this.__getPath())
};
io.PollingConnection.prototype._canWrite = function () {
  return this.__id !== io.PollingConnection.HANDSHAKE_KEY
};
io.PollingConnection.prototype._isClosed = function () {
  return this.__id === ""
};
io.PollingConnection.prototype._close = function () {
  clearTimeout(this.__pollTimer);
  if (this.__id !== io.PollingConnection.HANDSHAKE_KEY)this.__writeRequest.send(this.__protocol.disconnect(), this.__getPath());
  this.__readRequest.abort();
  this.__id = ""
};
io.PollingConnection.prototype.__getPath = function () {
  return"poll/" + this.__id + "/" + (new Date).getTime()
};
io.PollingConnection.prototype.__handleData = function (data) {
  var messages = this.__protocol.decodeChunk(data);
  var message = null;
  while (messages.length > 0) {
    message = messages.shift();
    this.__handleMessage(message.type, message.data)
  }
};
io.PollingConnection.prototype.__handleMessage = function (type, data) {
  if (type === protocols.WsLike.TEXT_CODE)if (this.__id === io.PollingConnection.HANDSHAKE_KEY) {
    this.__readRequest.removeHeader("x-hold-timeout");
    this.__readRequest.removeHeader("x-destroy-timeout");
    this.__id = data;
    this._flush()
  } else this.dispatch(new io.ConnectionEvent(this, io.ConnectionEvent.DATA), data); else if (type === protocols.WsLike.PING_CODE)this.__writeRequest.send(this.__protocol.pong(), this.__getPath())
};
io.AdaptiveConnection = function (holdTimeout, pollTimeout, connectionFactory) {
  events.EventDispatcher.call(this);
  var self = this;
  this.__connectionFactory = connectionFactory;
  this.__base = this.__connectionFactory.createConnection(holdTimeout, pollTimeout);
  this.__holdTimeout = holdTimeout;
  this.__pollTimeout = pollTimeout;
  this.__fallbackQueue = [];
  this.__isFallen = false;
  this.__dataHandler = function (event, opt_data) {
    self.dispatch(new io.ConnectionEvent(self, io.ConnectionEvent.DATA), opt_data)
  };
  this.__closeHandler = function () {
    self.__base.removeAllEventListeners();
    self.__base.destroy();
    self.dispatch(new io.ConnectionEvent(self, io.ConnectionEvent.CLOSE))
  };
  this.__errorHandler = function () {
    self.__fallback()
  };
  this.__base.addEventListener(io.ConnectionEvent.DATA, this.__dataHandler);
  this.__base.addEventListener(io.ConnectionEvent.CLOSE, this.__closeHandler);
  this.__base.addEventListener(io.ConnectionEvent.ERROR, this.__errorHandler)
};
util.inherits(io.AdaptiveConnection, events.EventDispatcher);
io.AdaptiveConnection.prototype.write = function (data) {
  this.__base.write(data);

  if (!this.__isFallen) {
    this.__fallbackQueue.push(data);
  }
};
io.AdaptiveConnection.prototype.destroy = function () {
  this.__fallbackQueue.length = 0;
  this.__base.destroy()
};
io.AdaptiveConnection.prototype.__fallback = function () {
  this.__isFallen = true;

  this.__base.removeAllEventListeners();
  this.__base.destroy();
  this.__base = this.__connectionFactory.createConnection(this.__holdTimeout, this.__pollTimeout);
  this.__base.addEventListener(io.ConnectionEvent.DATA, this.__dataHandler);
  this.__base.addEventListener(io.ConnectionEvent.CLOSE, this.__closeHandler);
  this.__base.addEventListener(io.ConnectionEvent.ERROR, this.__errorHandler);

  while (this.__fallbackQueue.length) {
    this.__base.write(this.__fallbackQueue.shift());
  }
};
io.PollingConnectionFactory = function (opt_hostOrUrl, opt_isSecure, opt_port) {
  this.__requestFactory = new net.factory.RequestFactory(opt_hostOrUrl, opt_isSecure, opt_port)
};
io.PollingConnectionFactory.prototype.setHeader = function (key, value) {
  this.__requestFactory.setHeader(key, value)
};
io.PollingConnectionFactory.prototype.setHeaders = function (headers) {
  this.__requestFactory.setHeaders(headers)
};
io.PollingConnectionFactory.prototype.createConnection = function (holdTimeout, pollTimeout) {
  return new io.PollingConnection(holdTimeout, pollTimeout, this.__requestFactory)
};
io.BestPossibleConnectionFactory = function (opt_hostOrUrl, opt_isSecure, opt_port) {
  io.PollingConnectionFactory.call(this, opt_hostOrUrl, opt_isSecure, opt_port);
  this.__socketFactory = new net.factory.SocketFactory(opt_hostOrUrl, opt_isSecure, opt_port)
};
util.inherits(io.BestPossibleConnectionFactory, io.PollingConnectionFactory);
io.BestPossibleConnectionFactory.prototype.setHeader = function (key, value) {
  this.__socketFactory.setHeader(key, value);
  io.PollingConnectionFactory.prototype.setHeader.call(this, key, value)
};
io.BestPossibleConnectionFactory.prototype.setHeaders = function (headers) {
  this.__socketFactory.setHeaders(headers);
  io.PollingConnectionFactory.prototype.setHeaders.call(this, headers)
};
io.BestPossibleConnectionFactory.prototype.createConnection = function (holdTimeout, pollTimeout) {
  var socket = this.__socketFactory.createSocket();
  if (socket !== null)return new io.WebSocketConnection(socket);
  return io.PollingConnectionFactory.prototype.createConnection.call(this, holdTimeout, pollTimeout)
};
io.AdaptiveConnectionFactory = function (opt_hostOrUrl, opt_isSecure, opt_port) {
  io.BestPossibleConnectionFactory.call(this, opt_hostOrUrl, opt_isSecure, opt_port);
  this.__isFallen = false
};
util.inherits(io.AdaptiveConnectionFactory, io.BestPossibleConnectionFactory);
io.AdaptiveConnectionFactory.prototype.createConnection = function (holdTimeout, pollTimeout) {
  if (this.__isFallen)return io.PollingConnectionFactory.prototype.createConnection.call(this, holdTimeout, pollTimeout);
  this.__isFallen = true;
  return io.BestPossibleConnectionFactory.prototype.createConnection.call(this, holdTimeout, pollTimeout)
};
var rest = {};
rest.VERSION = "0.0.1";
rest.setMethodFactory = function (factory) {
  rest.__methodFactory = factory
};
rest.setRequestFactory = function (factory) {
  rest.__requestFactory = factory
};
rest.createMethod = function (name) {
  if (rest.__methodFactory !== null) {
    var method = rest.__methodFactory.createMethod(name);
    if (method !== null)return method
  }
  return new rest.Method(rest.__requestFactory, name)
};
rest.call = function (name, args, opt_callback) {
  rest.createMethod(name).call(args, function (data) {
    if (opt_callback !== undefined)opt_callback(data)
  })
};
rest.__methodFactory = null;
rest.__requestFactory = new net.factory.RequestFactory;
rest.IMethod = function () {
};
rest.IMethod.prototype.call = function (args, callback) {
};
rest.IMethodFactory = function () {
};
rest.IMethodFactory.prototype.createMethod = function (name) {
};
rest.Method = function (requestFactory, path) {
  this.__requestFactory = requestFactory;
  this.__path = path
};
rest.Method.prototype.call = function (args, callback) {
  var request = this.__requestFactory.createRequest();

  function resultHandler(event, opt_data) {
    request.removeEventListener(net.RequestEvent.COMPLETE, resultHandler);
    if (typeof opt_data === "string")callback(opt_data); else callback("")
  }

  request.addEventListener(net.RequestEvent.COMPLETE, resultHandler);
  if (args instanceof rest.MethodArgs)request.send(args.serialize(), this.__path); else request.send(util.encodeFormData(args), this.__path)
};
rest.MethodArgs = function () {
};
rest.MethodArgs.prototype.serialize = function () {
  return""
};
var tt = {};
tt.VERSION = "0.1.0";
tt.rules = {};
tt.data = {};
tt.view = {};
tt.view.helpers = {};
tt.createTemplate = function (target, sign) {
  return tt.createTemplateFromRules(target, tt.createRules(sign))
};
tt.createTemplateFromRules = function (target, rules) {
  var units = [];
  var i = 0, l = rules.length;
  while (i < l) {
    units = units.concat(rules[i].createTemplateUnits(target));
    i += 1
  }
  return new tt.Template(target, units)
};
tt.createRules = function (sign) {
  var rules = [];
  for (var key in sign) {
    var atIndex = key.indexOf("@");
    var colonIndex = key.indexOf(":");
    if (atIndex !== -1 && colonIndex !== -1 && colonIndex > atIndex) {
      var type = key.substring(0, atIndex);
      var viewHelper = tt.view.createViewHelper(type, sign[key]);
      if (viewHelper !== null)rules.push(new tt.TemplateRule(type, key.substring(atIndex + 1, colonIndex), key.substring(colonIndex + 1), viewHelper))
    }
  }
  return rules
};
tt.Template = function (target, units) {
  this.__target = target;
  this.__units = units
};
tt.Template.prototype.getTarget = function () {
  return this.__target
};
tt.Template.prototype.processData = function (data, opt_createdNodes, opt_removedNodes) {
  this.applyData(new tt.data.DataNode(data), opt_createdNodes, opt_removedNodes)
};
tt.Template.prototype.applyData = function (dataNode, opt_createdNodes, opt_removedNodes) {
  var i = 0, l = this.__units.length;
  while (i < l) {
    this.__units[i].applyData(dataNode, opt_createdNodes, opt_removedNodes);
    i += 1
  }
};
tt.TemplateUnit = function (view, pathEvaluator) {
  this.__view = view;
  this.__pathEvaluator = pathEvaluator
};
tt.TemplateUnit.prototype.applyData = function (dataNode, opt_createdNodes, opt_removedNodes) {
  this.__view.applyTransformation(this.__pathEvaluator.evaluate(dataNode), opt_createdNodes, opt_removedNodes)
};
tt.TemplateRule = function (type, className, dataPath, viewHelper) {
  this.__type = type;
  this.__className = className;
  this.__pathEvaluator = new tt.data.PathEvaluator(dataPath);
  this.__viewHelper = viewHelper
};
tt.TemplateRule.prototype.createTemplateUnits = function (parent) {
  var elements = this.__findTemplateElements(parent);
  var i = 0, l = elements.length;
  var items = new Array(l);
  while (i < l) {
    items[i] = new tt.TemplateUnit(this.__viewHelper.createView(elements[i]), this.__pathEvaluator);
    i += 1
  }
  return items
};
tt.TemplateRule.prototype.__findTemplateElements = function (parent) {
  if (util.dom.hasClass(parent, this.__className))return[parent];
  return util.dom.getElementsByClassName(this.__className, parent)
};
tt.data.PathEvaluator = function (path) {
  this.__path = path.split("/")
};
tt.data.PathEvaluator.prototype.evaluate = function (node) {
  return this.__applyToken(node, 0)
};
tt.data.PathEvaluator.prototype.__applyToken = function (node, index) {
  if (this.__path.length > index && node.getValue() !== null)return this.__applyToken(this.__fetchNode(this.__path[index], node), index + 1);
  return node
};
tt.data.PathEvaluator.prototype.__fetchNode = function (token, node) {
  if (token.length > 2)return node.growChild(token);
  if (token.length === 0)return node.getRoot();
  if (token === "$")return node.getKey();
  if (token === ".")return node;
  if (token === "..")return node.getParent();
  return node.growChild(token)
};
tt.data.DataNode = function (value, opt_parent, opt_key) {
  this.__value = value;
  this.__parent = opt_parent || null;
  this.__key = opt_key === undefined ? "" : opt_key;
  this.__keyNode = null;
  this.__children = {}
};
tt.data.DataNode.__NULL_NODE = new tt.data.DataNode(null);
tt.data.DataNode.prototype.getParent = function () {
  return this.__parent || tt.data.DataNode.__NULL_NODE
};
tt.data.DataNode.prototype.getKey = function () {
  if (this.__keyNode === null)this.__keyNode = new tt.data.DataNode(this.__key);
  return this.__keyNode
};
tt.data.DataNode.prototype.getRoot = function () {
  return this.__parent !== null ? this.__parent.getRoot() : this
};
tt.data.DataNode.prototype.getValue = function () {
  return this.__value
};
tt.data.DataNode.prototype.growChild = function (key) {
  if (this.__children[key] === undefined) {
    if (this.__value != null && this.__value[key] !== undefined) {
      var node = new tt.data.DataNode(this.__value[key], this, key);
      this.__children[key] = node;
      return node
    }
    return tt.data.DataNode.__NULL_NODE
  }
  return this.__children[key]
};
tt.data.DataNode.prototype.growChildren = function () {
  if (this.__value instanceof Array) {
    var i = 0, l = this.__value.length;
    var items = new Array(l);
    while (i < l) {
      if (this.__children[i] === undefined)this.__children[i] = new tt.data.DataNode(this.__value[i], this, i);
      items[i] = this.__children[i];
      i += 1
    }
    return items
  } else {
    var nodes = [];
    for (var key in this.__value) {
      if (this.__children[key] === undefined)this.__children[key] = new tt.data.DataNode(this.__value[key], this, key);
      nodes.push(this.__children[key])
    }
    return nodes
  }
};
tt.view.helpers.ITemplateViewHelper = function () {
};
tt.view.helpers.ITemplateViewHelper.prototype.createView = function (element) {
};
tt.view.helpers.SimpleViewHelper = function () {
};
tt.view.helpers.SimpleViewHelper.prototype.createView = function (element) {
  return new tt.view.SimpleView(element, this)
};
tt.view.helpers.SimpleViewHelper.prototype.process = function (element, value) {
};
tt.view.helpers.CaseViewHelper = function (cases, caseClasses, regExps, regExpsClasses) {
  this.__cases = cases;
  this.__caseClasses = caseClasses;
  this.__regExps = regExps;
  this.__regExpsClasses = regExpsClasses
};
util.inherits(tt.view.helpers.CaseViewHelper, tt.view.helpers.SimpleViewHelper);
tt.view.helpers.CaseViewHelper.prototype.process = function (element, value) {
  var str = value === null ? "" : value.toString();
  var i = 0, l = this.__cases.length;
  while (i < l) {
    if (this.__caseClasses[i] !== undefined)util.dom.setClassExist(element, this.__caseClasses[i], this.__cases[i] === str);
    i += 1
  }
  i = 0;
  l = this.__regExps.length;
  while (i < l) {
    if (this.__regExpsClasses[i] !== undefined)util.dom.setClassExist(element, this.__regExpsClasses[i], this.__regExps[i].test(str));
    i += 1
  }
};
tt.view.helpers.TextViewHelper = function (pattern) {
  tt.view.helpers.SimpleViewHelper.call(this);
  this.__pattern = pattern
};
util.inherits(tt.view.helpers.TextViewHelper, tt.view.helpers.SimpleViewHelper);
tt.view.helpers.TextViewHelper.prototype.process = function (element, value) {
  if (this.__pattern.length === 0)element.innerHTML = value; else element.innerHTML = this.__pattern.join(value)
};
tt.view.helpers.AttributeViewHelper = function (name, pattern) {
  this.__pattern = pattern;
  this.__attributeName = name
};
util.inherits(tt.view.helpers.AttributeViewHelper, tt.view.helpers.SimpleViewHelper);
tt.view.helpers.AttributeViewHelper.prototype.process = function (element, value) {
  var name = this.__attributeName;
  if (value !== null) {
    var attrValue = this.__pattern.length > 0 ? this.__pattern.join(value) : value;
    if (element[name] === undefined || name === "style")element.setAttribute(name, attrValue); else element[name] = attrValue
  } else if (element[name] === undefined)element.removeAttribute(name); else if (element[name] !== "")element[name] = ""
};
tt.view.helpers.ListViewHelper = function (itemRenderer, itemRules, opt_keyPath) {
  this.__itemRenderer = itemRenderer;
  this.__itemRules = itemRules;
  this.__keyPathEvaluator = opt_keyPath === undefined ? null : new tt.data.PathEvaluator(opt_keyPath)
};
tt.view.helpers.ListViewHelper.prototype.createView = function (element) {
  return new tt.view.ListView(element, this)
};
tt.view.helpers.ListViewHelper.prototype.evaluateKey = function (dataNode) {
  if (this.__keyPathEvaluator !== null)return this.__keyPathEvaluator.evaluate(dataNode).getValue();
  return dataNode.getKey().getValue()
};
tt.view.helpers.ListViewHelper.prototype.createItem = function (parent) {
  var target = this.__itemRenderer.cloneNode(true);
  if (target !== null) {
    parent.appendChild(target);
    return tt.createTemplateFromRules(target, this.__itemRules)
  }
  return null
};
tt.view.helpers.ListViewHelper.prototype.removeItem = function (parent, item) {
  parent.removeChild(item.getTarget())
};
tt.view.ITemplateView = function () {
};
tt.view.ITemplateView.prototype.applyTransformation = function (dataNode, opt_createdNodes, opt_removedNodes) {
};
tt.view.SimpleView = function (target, helper) {
  this.__target = target;
  this.__helper = helper;
  this.__lastValue = undefined
};
tt.view.SimpleView.prototype.applyTransformation = function (dataNode) {
  var value = dataNode.getValue();
  if (this.__lastValue !== value) {
    this.__helper.process(this.__target, value);
    this.__lastValue = value
  }
};
tt.view.ListView = function (target, helper) {
  this.__target = target;
  this.__helper = helper;
  this.__items = {}
};
tt.view.ListView.prototype.applyTransformation = function (dataNode, opt_createdNodes, opt_removedNodes) {
  var oldItems = this.__items;
  var newItems = {};
  var dataNodes = dataNode.growChildren();
  var i = 0, l = dataNodes.length;
  while (i < l) {
    var itemDataNode = dataNodes[i];
    var key = this.__helper.evaluateKey(itemDataNode);
    if (oldItems[key] === undefined) {
      var createdTemplate = this.__helper.createItem(this.__target);
      if (createdTemplate !== null) {
        createdTemplate.applyData(itemDataNode);
        if (opt_createdNodes !== undefined)opt_createdNodes.push(createdTemplate.getTarget());
        newItems[key] = createdTemplate
      }
    } else {
      var currentTemplate = oldItems[key];
      currentTemplate.applyData(itemDataNode, opt_createdNodes, opt_removedNodes);
      delete oldItems[key];
      newItems[key] = currentTemplate
    }
    i += 1
  }
  for (key in oldItems) {
    this.__helper.removeItem(this.__target, oldItems[key]);
    if (opt_removedNodes !== undefined)opt_removedNodes.push(oldItems[key].getTarget())
  }
  this.__items = newItems
};
tt.view.TEXT = "text";
tt.view.ATTR = "attr";
tt.view.CASE = "case";
tt.view.LIST = "list";
tt.view.createViewHelper = function (type, options) {
  switch (type) {
    case tt.view.TEXT:
      return tt.view.__createTextViewHelper(options);
    case tt.view.ATTR:
      return tt.view.__createAttributeViewHelper(options);
    case tt.view.CASE:
      return tt.view.__createCaseViewHelper(options);
    case tt.view.LIST:
      return tt.view.__createListViewHelper(options)
  }
  return null
};
tt.view.__createListViewHelper = function (options) {
  var itemRules = [];
  var itemRenderer = null;
  if (typeof options["item-renderer-id"] === "string") {
    var itemRendererPrototype = document.getElementById(options["item-renderer-id"]);
    if (itemRendererPrototype !== null) {
      itemRenderer = itemRendererPrototype.cloneNode(true);
      if (itemRenderer !== null)itemRenderer.removeAttribute("id")
    }
  }
  if (options["item-template"]instanceof Object)itemRules = tt.createRules(options["item-template"]);
  if (itemRenderer !== null)return new tt.view.helpers.ListViewHelper(itemRenderer,
      itemRules);
  return null
};
tt.view.__createTextViewHelper = function (options) {
  var pattern = [];
  if (typeof options["pattern"] === "string")pattern = options["pattern"].split("$$");
  return new tt.view.helpers.TextViewHelper(pattern)
};
tt.view.__createAttributeViewHelper = function (options) {
  var pattern = [];
  if (typeof options["pattern"] === "string")pattern = options["pattern"].split("$$");
  if (typeof options["name"] === "string")return new tt.view.helpers.AttributeViewHelper(options["name"], pattern);
  return null
};
tt.view.__createCaseViewHelper = function (options) {
  var isRegExp = Boolean(options["is-reg-exp"]);
  var cases = [];
  var caseClasses = [];
  var regExps = [];
  var regExpClasses = [];
  for (var key in options["cases"])if (isRegExp)try {
    regExps.push(new RegExp(key));
    regExpClasses.push(options["cases"][key])
  } catch (error) {
  } else {
    cases.push(key);
    caseClasses.push(options["cases"][key])
  }
  return new tt.view.helpers.CaseViewHelper(cases, caseClasses, regExps, regExpClasses)
};
var ui = {};
ui.VERSION = "0.0.1";
ui.buttons = {};
ui.forms = {};
ui.templates = {};
ui.lists = {};
ui.addIsolator = function (selector) {
  if (util.indexOf(selector, ui.__isolators) === -1)ui.__isolators.push(selector)
};
ui.getNextId = function () {
  var id = ui.__ID_PREFIX + (ui.__lastId += 1);
  while (document.getElementById(id) !== null)id = ui.__ID_PREFIX + (ui.__lastId += 1);
  return id
};
ui.init = function (body, factory) {
  ui.__factory = factory;
  var container = new ui.Container(body);
  var type = factory.getContainerType();
  if (type !== "") {
    ui.addIsolator(factory.getTargetSelector(type));
    ui.registerWidget(type, container)
  } else util.nop("Unable to register root container - container widget type " + "is empty, see `ui.IWidgetFactory#getContainerType` for details. " + "[ui.init]");
  return container
};
ui.createWidget = function (type, target) {
  var widget = ui.getWidgetAt(type, target);
  if (widget === null && ui.__factory !== null) {
    widget = ui.__factory.createWidget(type, target);
    if (widget !== null)ui.registerWidget(type, widget)
  }
  return widget
};
ui.registerWidget = function (type, widget) {
  var id = widget.getTargetId();
  if (ui.__widgetNodes[id] === undefined)ui.__widgetNodes[id] = new ui.WidgetNode;
  ui.__widgetNodes[id].addWidget(type, widget)
};
ui.terminateWidget = function (type, widget) {
  var id = widget.getTargetId();
  if (ui.__widgetNodes[id] !== undefined) {
    ui.__widgetNodes[id].removeWidget(type);
    if (ui.__widgetNodes[id].getWidgetsCount() === 0)delete ui.__widgetNodes[id]
  }
};
ui.terminateWidgetsAt = function (target) {
  delete ui.__widgetNodes[target.id]
};
ui.getWidgetName = function (target) {
  return target.getAttribute("data-name") || ""
};
ui.getWidgetsAt = function (target) {
  if (ui.__widgetNodes[target.id] !== undefined)return ui.__widgetNodes[target.id].getWidgets();
  return[]
};
ui.getWidgetsCount = function (target) {
  if (ui.__widgetNodes[target.id] !== undefined)return ui.__widgetNodes[target.id].getWidgetsCount();
  return 0
};
ui.getWidgetAt = function (type, target) {
  if (ui.__widgetNodes[target.id] !== undefined)return ui.__widgetNodes[target.id].getWidget(type);
  return null
};
ui.getContainerAt = function (target) {
  if (ui.__widgetNodes[target.id] !== undefined)return ui.__widgetNodes[target.id].getContainer();
  return null
};
ui.getParentContainer = function (target) {
  var result = null;
  var parents = util.dom.getParents(target);
  for (var i = 0, l = parents.length; i < l; i += 1) {
    result = ui.getContainerAt(parents[i]);
    if (result !== null)break
  }
  return result
};
ui.getTargetSelector = function (type) {
  if (ui.__factory !== null)return ui.__factory.getTargetSelector(type);
  return""
};
ui.findWidgetTargets = function (type, context, useContext, useIsolators) {
  var targets = [];
  var selector = "";
  if (ui.__factory !== null)selector = ui.__factory.getTargetSelector(type);
  if (selector !== "") {
    var applicants = ui.__findApplicants(context, selector, useContext);
    var i = 0, l = applicants.length;
    while (i < l) {
      if (ui.__isInContext(applicants[i], context, useIsolators))targets.push(applicants[i]);
      i++
    }
  }
  return targets
};
ui.__ID_PREFIX = "tuna_";
ui.__lastId = 0;
ui.__isolators = [];
ui.__factory = null;
ui.__widgetNodes = {};
ui.__findApplicants = function (context, selector, useContext) {
  var result = util.dom.select(selector, context);
  if (useContext && util.dom.matchesSelector(context, selector))result.push(context);
  return result
};
ui.__isInContext = function (target, context, useIsolators) {
  if (target !== context) {
    var i = 0, l = ui.__isolators.length;
    while (i < l) {
      var isolator = ui.__isolators[i];
      if (!useIsolators && util.dom.getParentMatches(target, isolator, context) !== null)return false;
      i += 1
    }
  }
  return true
};
ui.Widget = function (target) {
  events.EventDispatcher.call(this);
  this.__target = target;
  if (this.__target.id === "")this.__target.id = ui.getNextId()
};
util.inherits(ui.Widget, events.EventDispatcher);
ui.Widget.__OPTION_SEPARATOR = /\s*,\s*/;
ui.Widget.prototype.getTarget = function () {
  return this.__target
};
ui.Widget.prototype.getTargetId = function () {
  return this.__target.id
};
ui.Widget.prototype.getName = function () {
  return this.__target.getAttribute("data-name") || ""
};
ui.Widget.prototype.init = function () {
  this.dispatch(new ui.WidgetEvent(this, ui.WidgetEvent.INIT))
};
ui.Widget.prototype.destroy = function () {
  this.dispatch(new ui.WidgetEvent(this, ui.WidgetEvent.DESTROY))
};
ui.Widget.prototype.disable = function () {
  util.dom.addClass(this.__target, "disabled")
};
ui.Widget.prototype.enable = function () {
  util.dom.removeClass(this.__target, "disabled")
};
ui.Widget.prototype.isEnabled = function () {
  return!util.dom.hasClass(this.__target, "disabled")
};
ui.Widget.prototype.select = function () {
  util.dom.addClass(this.__target, "active")
};
ui.Widget.prototype.deselect = function () {
  util.dom.removeClass(this.__target, "active")
};
ui.Widget.prototype.isSelected = function () {
  return util.dom.hasClass(this.__target, "active")
};
ui.Widget.prototype.show = function () {
  util.dom.removeClass(this.__target, "hide")
};
ui.Widget.prototype.hide = function () {
  util.dom.addClass(this.__target, "hide")
};
ui.Widget.prototype.isHidden = function () {
  return util.dom.hasClass(this.__target, "hide")
};
ui.Widget.prototype.toggle = function () {
  if (this.isHidden())this.show(); else this.hide()
};
ui.Widget.prototype.setOption = function (name, value) {
  if (value)this.__target.setAttribute("data-" + name, value); else this.__target.removeAttribute("data-" + value)
};
ui.Widget.prototype.getOptions = function () {
  return util.dom.getAttributesData(this.__target)
};
ui.Widget.prototype.getOption = function (name) {
  return this.__target.getAttribute("data-" + name) || ""
};
ui.Widget.prototype.getNumberOption = function (name) {
  return Number(this.getOption(name)) || 0
};
ui.Widget.prototype.getBooleanOption = function (name) {
  return Boolean(this.getOption(name))
};
ui.Widget.prototype.getArrayOption = function (name, opt_separator) {
  var option = this.getOption(name);
  if (opt_separator === undefined)return option.split(ui.Widget.__OPTION_SEPARATOR);
  return option.split(opt_separator)
};
ui.WidgetEvent = function (widget, type) {
  events.Event.call(this, widget, type);
  this.__widget = widget
};
util.inherits(ui.WidgetEvent, events.Event);
ui.WidgetEvent.INIT = "init";
ui.WidgetEvent.DESTROY = "destroy";
ui.WidgetEvent.prototype.getWidget = function () {
  return this.__widget
};
ui.IWidgetFactory = function () {
};
ui.IWidgetFactory.prototype.createWidget = function (type, target) {
};
ui.IWidgetFactory.prototype.getTargetSelector = function (type) {
};
ui.IWidgetFactory.prototype.getContainerType = function () {
};
ui.WidgetNode = function () {
  this.__widgets = {};
  this.__widgetCount = 0;
  this.__container = null
};
ui.WidgetNode.prototype.getWidgetsCount = function () {
  return this.__widgetCount
};
ui.WidgetNode.prototype.getWidget = function (type) {
  return this.__widgets[type] || null
};
ui.WidgetNode.prototype.getContainer = function () {
  return this.__container
};
ui.WidgetNode.prototype.getWidgets = function () {
  var result = [];
  for (var type in this.__widgets)result.push(this.__widgets[type]);
  return result
};
ui.WidgetNode.prototype.addWidget = function (type, widget) {
  if (this.__widgets[type] === undefined)this.__widgetCount += 1;
  this.__widgets[type] = widget;
  if (widget instanceof ui.Container && this.__container === null)this.__container = widget
};
ui.WidgetNode.prototype.removeWidget = function (type) {
  if (this.__widgets[type] === this.__container)this.__container = null;
  delete this.__widgets[type];
  this.__widgetCount -= 1
};
ui.Container = function (target) {
  ui.Widget.call(this, target);
  this.__widgetTypes = this.getArrayOption("widgets");
  this.__widgetTargets = {};
  this.__nameTargets = {}
};
util.inherits(ui.Container, ui.Widget);
ui.Container.NAME = "container";
ui.Container.prototype.init = function () {
  this.initWidgetsAt(this.getTarget());
  ui.Widget.prototype.init.call(this)
};
ui.Container.prototype.destroy = function () {
  this.destroyWidgetsAt(this.getTarget());
  ui.Widget.prototype.destroy.call(this)
};
ui.Container.prototype.registerWidgetType = function (type) {
  if (util.indexOf(type, this.__widgetTypes) === -1)this.__widgetTypes.push(type)
};
ui.Container.prototype.getWidgetTypes = function () {
  return this.__widgetTypes
};
ui.Container.prototype.initWidgetsAt = function (node) {
  if (util.dom.hasParent(node, this.getTarget())) {
    var types = this.getWidgetTypes();
    for (var i = 0, l = types.length; i < l; i += 1)this.initWidgetsWithType(types[i], node)
  }
};
ui.Container.prototype.initWidgetsWithType = function (type, container) {
  var targets = ui.findWidgetTargets(type, container, true, false);
  var i = 0, l = targets.length;
  while (i < l) {
    var widget = ui.getWidgetAt(type, targets[i]);
    if (widget === null) {
      widget = ui.createWidget(type, targets[i]);
      if (widget !== null)widget.init()
    }
    if (widget !== null)this.__unsafeRegisterWidget(widget);
    i += 1
  }
};
ui.Container.prototype.destroyWidgetsAt = function (node) {
  for (var id in this.__widgetTargets) {
    var target = this.__widgetTargets[id];
    if (util.dom.hasParent(target, node)) {
      var widgets = ui.getWidgetsAt(target);
      var name = ui.getWidgetName(target);
      for (var i = 0, l = widgets.length; i < l; i += 1)widgets[i].destroy();
      ui.terminateWidgetsAt(target);
      delete this.__widgetTargets[id];
      delete this.__nameTargets[name]
    }
  }
};
ui.Container.prototype.handleBroken = function () {
  for (var id in this.__widgetTargets) {
    var target = this.__widgetTargets[id];
    var name = ui.getWidgetName(target);
    var parentContainer = ui.getParentContainer(target);
    if (parentContainer !== this) {
      var widgets = ui.getWidgetsAt(target);
      if (parentContainer === null) {
        for (var i = 0; i < widgets.length; i += 1)widgets[i].destroy();
        ui.terminateWidgetsAt(target)
      } else for (var j = 0; j < widgets.length; j += 1)parentContainer.registerWidget(widgets[j]);
      delete this.__widgetTargets[id];
      delete this.__nameTargets[name]
    } else {
      var container =
          ui.getContainerAt(target);
      if (container !== null)container.handleBroken(); else if (ui.getWidgetsCount(target) === 0) {
        delete this.__widgetTargets[id];
        delete this.__nameTargets[name]
      }
    }
  }
};
ui.Container.prototype.getWidget = function (type, name) {
  if (this.__nameTargets[name] !== undefined)return ui.getWidgetAt(type, this.__nameTargets[name]);
  return null
};
ui.Container.prototype.registerWidget = function (widget) {
  if (this === ui.getParentContainer(widget.getTarget()))this.__unsafeRegisterWidget(widget)
};
ui.Container.prototype.__unsafeRegisterWidget = function (widget) {
  var id = widget.getTargetId();
  var target = widget.getTarget();
  var name = ui.getWidgetName(target);
  if (this.__widgetTargets[id] === undefined)this.__widgetTargets[id] = this.__nameTargets[name] = target
};
ui.templates.Template = function (target) {
  ui.Widget.call(this, target)
};
util.inherits(ui.templates.Template, ui.Widget);
ui.templates.Template.prototype.processTransform = function (data) {
};
ui.templates.TunaTemplate = function (target) {
  ui.templates.Template.call(this, target);
  this.__template = null;
  this.__currentData = null
};
util.inherits(ui.templates.TunaTemplate, ui.templates.Template);
ui.templates.TunaTemplate.NAME = "tuna-template";
ui.templates.TunaTemplate.prototype.processTransform = function (data) {
  if (this.__template !== null) {
    var container = ui.getContainerAt(this.getTarget());
    if (container === null)container = ui.getParentContainer(this.getTarget());
    if (container === null)this.__template.processData(data); else {
      var created = [], removed = [];
      this.__template.processData(data, created, removed);
      for (var i = 0; i < created.length; i += 1)container.initWidgetsAt(created[i]);
      if (removed.length > 0)container.handleBroken()
    }
  }
  this.__currentData = data
};
ui.templates.TunaTemplate.prototype.init = function () {
  var url = this.getOption("template-url");
  if (url.length > 0)this.loadTemplateSign(url);
  ui.templates.Template.prototype.init.call(this)
};
ui.templates.TunaTemplate.prototype.destroy = function () {
  this.__currentData = null;
  this.__template = null;
  ui.templates.Template.prototype.destroy.call(this)
};
ui.templates.TunaTemplate.prototype.setTemplateSign = function (sign) {
  this.__template = tt.createTemplate(this.getTarget(), sign);
  this.processTransform(this.__currentData)
};
ui.templates.TunaTemplate.prototype.loadTemplateSign = function (url) {
  var self = this;
  var request = net.createRequest();

  function handleTemplate(event, opt_data) {
    request.removeEventListener(net.RequestEvent.COMPLETE, handleTemplate);
    if (typeof opt_data === "string") {
      var sign = util.decodeJsonData(opt_data);
      if (sign instanceof Object)self.setTemplateSign(sign)
    }
  }

  request.addEventListener(net.RequestEvent.COMPLETE, handleTemplate);
  request.send("", url)
};
ui.buttons.Button = function (target) {
  ui.Widget.call(this, target);
  var self = this;
  this.__clickHandler = function (event) {
    util.dom.preventDefault(event);
    if (self.isEnabled()) {
      util.dom.stopPropagation(event);
      self.dispatch(new ui.buttons.ButtonEvent(self, ui.buttons.ButtonEvent.CLICK))
    }
  }
};
util.inherits(ui.buttons.Button, ui.Widget);
ui.buttons.Button.NAME = "button";
ui.buttons.Button.prototype.init = function () {
  util.dom.addEventListener(this.getTarget(), "click", this.__clickHandler);
  ui.Widget.prototype.init.call(this)
};
ui.buttons.Button.prototype.destroy = function () {
  util.dom.removeEventListener(this.getTarget(), "click", this.__clickHandler);
  ui.Widget.prototype.destroy.call(this)
};
ui.buttons.ButtonEvent = function (target, type) {
  ui.WidgetEvent.call(this, target, type)
};
util.inherits(ui.buttons.ButtonEvent, ui.WidgetEvent);
ui.buttons.ButtonEvent.CLICK = "click";
var lt = {};
lt.sm = {};
lt.sm.factory = {};
lt.ui = {};
lt.ui.cobrowse = {};
lt.io = {};
lt.api = {};
lt.api.args = {};
lt.api.io = {};
lt.xdm = {};
lt.cron = {};
lt.tabs = {};
lt.ext = {};
lt.ext.events = {};
lt.VERSION = "3.0.0";
lt.error = function (message, opt_code) {
  util.nop(message, opt_code)
};
lt.sm.VISITED_PAGE_COUNT_COOKIE = "lt-pc";
lt.sm.ON_SITE_TIME_COOKIE = "lt-on-site-time";
lt.sm.VISITOR_FULLNAME_COOKIE = "lt-v";
lt.sm.__IO_INDEX_COOKIE = "lt-ii";
lt.sm.VISITOR_COOKIE_TIMEOUT = 14 * 24 * 60 * 60 * 1E3;
lt.sm.__ACTIVE_FEATURE_COOKIE = "lt-active-feature";
lt.sm.__ACTIVE_CHAT_COOKIE = "lt-active-chat";
lt.sm.ACTIVE_FEATURE_EMBEDDED_TIMEOUT = 60 * 60 * 1E3;
lt.sm.ACTIVE_FEATURE_EXTERNAL_TIMEOUT = 2 * 1E3;
lt.sm.EMBEDDED_WINDOW_STATE_COOKIE = "lt-embed-state";
lt.sm.TRANSFER_COOKIE_TTL = 1E4;
lt.sm.DEFAULT_STRING = "";
lt.sm.DEFAULT_BOOLEAN = false;
lt.sm.DEFAULT_NUMBER = 0;
lt.sm.__visitor = null;
lt.sm.__authCallback = util.nop;
lt.sm.__defaultVisitorName = "\u0413\u043e\u0441\u0442\u044c";
lt.sm.init = function () {
  util.setCookie(lt.sm.VISITED_PAGE_COUNT_COOKIE, String(lt.sm.getPageCount() + 1));
  lt.sm.__openSiteTime = Number(util.getCookie(lt.sm.ON_SITE_TIME_COOKIE)) || 0;
  if (lt.sm.__openSiteTime === 0)lt.sm.__openSiteTime = lt.sm.__OPEN_PAGE_TIME;
  util.setCookie(lt.sm.ON_SITE_TIME_COOKIE, String(lt.sm.__openSiteTime))
};
lt.sm.getVisitor = function () {
  if (lt.sm.__visitor === null) {
    var entity = sm.createEntityByName(util.loadFromStorage(lt.sm.VISITOR_FULLNAME_COOKIE));
    if (entity instanceof lt.sm.Visitor && entity.getId() !== "undefined")lt.sm.__visitor = entity
  }
  return lt.sm.__visitor
};
lt.sm.needPageSync = function() {
  return /iPhone|iPod|iPad/i.test(navigator.userAgent);
};
lt.sm.removeVisitor = function () {
  lt.sm.__visitor = null;
  util.removeFromStorage(lt.sm.VISITOR_FULLNAME_COOKIE)
};
lt.sm.handleNotification = function (type, data) {
  if (type === lt.api.Notification.AUTH)lt.sm.__handleAuth(data); else {
    if (data)var entity = lt.api.reconstructResponseEntity(data);
    switch (type) {
      case lt.api.Notification.COBROWSE_START:
        lt.ui.cobrowse.startCobrowse();
        break;
      case lt.api.Notification.COBROWSE_STOP:
        lt.ui.cobrowse.stopCobrowse();
        break;
      case lt.api.Notification.COBROWSE_SELECT:
        if (entity instanceof lt.sm.Cobrowse)lt.ui.cobrowse.selectArea(entity);
        break;
      case lt.api.Notification.COBROWSE_DESELECT:
        lt.ui.cobrowse.deselectArea();
        break;
      case lt.api.Notification.COBROWSE_GOTO:
        if (entity instanceof lt.sm.Cobrowse)lt.ui.cobrowse.gotoLink(entity);
        break;
      case lt.api.Notification.COBROWSE_WEB_INIT:
        lt.api.setPollTimeout(lt.api.COBROWSE_POLL_TIMEOUT);
        lt.ui.cobrowse.checkCobrowsePossibility();
        break
    }
  }
};
lt.sm.setAuthCallback = function (callback) {
  lt.sm.__authCallback = callback
};
lt.sm.__handleAuth = function (data) {
  var visitor = lt.api.reconstructResponseEntity(data);
  if (visitor instanceof lt.sm.Visitor) {
    lt.sm.__visitor = visitor;
    if (lt.sm.__visitor.hasCobrowse()) {
      lt.api.setPollTimeout(lt.api.COBROWSE_POLL_TIMEOUT, true);
      lt.ui.cobrowse.startCobrowse()
    } else if (lt.sm.__visitor.hasChat())lt.api.setPollTimeout(lt.api.CHAT_POLL_TIMEOUT, true); else lt.api.setPollTimeout(lt.api.POLL_TIMEOUT, true);
    setTimeout(lt.api.io.destroyConnection, lt.api.STOP_POLLING_TIMEOUT);
    util.saveToStorage(lt.sm.VISITOR_FULLNAME_COOKIE,
        lt.sm.__visitor.getFullName(), lt.sm.VISITOR_COOKIE_TIMEOUT);
    sm.save(lt.sm.__visitor);
    lt.sm.__authCallback();
    lt.sm.__authCallback = util.nop;
    lt.ext.events.dispatch(lt.ext.events.EventType.AUTH, {})
  } else lt.error("Incorrect auth data.")
};
lt.sm.filterString = function (value) {
  if (value !== "")return value
};
lt.sm.filterBoolean = function (value) {
  if (value !== false)return value
};
lt.sm.getPageCount = function () {
  return Number(util.getCookie(lt.sm.VISITED_PAGE_COUNT_COOKIE)) || 0
};
lt.sm.getOnPageTime = function () {
  return Math.floor((new Date).getTime() / 1E3) - lt.sm.__OPEN_PAGE_TIME
};
lt.sm.getOnSiteTime = function () {
  return Math.floor((new Date).getTime() / 1E3) - lt.sm.__openSiteTime
};
lt.sm.isNewUser = function () {
  return lt.sm.__OPEN_PAGE_TIME === lt.sm.__openSiteTime
};
lt.sm.isActiveChatExists = function () {
  return util.getCookie(lt.sm.__ACTIVE_FEATURE_COOKIE) !== ""
};
lt.sm.getActiveChatFeature = function (site) {
  var feature = lt.sm.retrieveActiveChatFeature(site);
  if (feature instanceof lt.sm.Feature)return feature;
  return null
};
lt.sm.retrieveActiveChatFeature = function (site) {
  var feature = sm.createEntityByName(util.getCookie(lt.sm.__ACTIVE_FEATURE_COOKIE), site);
  if (feature instanceof lt.sm.Feature)return feature;
  return null
};
lt.sm.__activeFeatureCookieTimeout = 0;
lt.sm.setActiveChatFeature = function (member, group, opt_timeout) {
  var timeout = opt_timeout || lt.sm.ACTIVE_FEATURE_EMBEDDED_TIMEOUT;

  function updateCookie(feature) {
    util.setCookie(lt.sm.__ACTIVE_FEATURE_COOKIE, feature.getFullName(), timeout);
    lt.sm.__activeFeatureCookieTimeout = setTimeout(function () {
      updateCookie(feature)
    }, timeout / 2)
  }

  if (member instanceof lt.sm.Member && group instanceof lt.sm.Group) {
    var feature = new lt.sm.Feature(lt.sm.FeatureType.CHAT, member, group);
    if (lt.sm.__activeFeatureCookieTimeout)lt.sm.__activeFeatureCookieTimeout =
        clearTimeout(lt.sm.__activeFeatureCookieTimeout);
    updateCookie(feature)
  } else util.nop("Unknown chat feature.")
};
lt.sm.setEmbeddedActiveChatFeature = function (member, group) {
  lt.sm.setActiveChatFeature(member, group, lt.sm.ACTIVE_FEATURE_EMBEDDED_TIMEOUT)
};
lt.sm.setExternalActiveChatFeature = function (member, group) {
  lt.sm.setActiveChatFeature(member, group, lt.sm.ACTIVE_FEATURE_EXTERNAL_TIMEOUT)
};
lt.sm.getActiveChatId = function () {
  return util.getCookie(lt.sm.__ACTIVE_CHAT_COOKIE)
};
lt.sm.setActiveChatId = function (chatId) {
  util.setCookie(lt.sm.__ACTIVE_CHAT_COOKIE, chatId)
};
lt.sm.removeActiveChatFeature = function () {
  lt.sm.__activeFeatureCookieTimeout = clearTimeout(lt.sm.__activeFeatureCookieTimeout);
  util.removeCookie(lt.sm.__ACTIVE_FEATURE_COOKIE);
  util.removeCookie(lt.sm.__ACTIVE_CHAT_COOKIE)
};
lt.sm.isAuthChatExists = function () {
  return lt.sm.__visitor.hasChat()
};
lt.sm.getGroupMembers = function (groupId) {
  var members = sm.select(lt.sm.EntityName.MEMBER);
  if (groupId === lt.sm.Member.ANY_MEMBER_ID)return members; else {
    var result = [];
    for (var i = 0, l = members.length; i < l; i += 1) {
      var groups = members[i].getGroups();
      for (var j = 0, m = groups.length; j < m; j += 1)if (groups[j].getId() === groupId) {
        result.push(members[i]);
        break
      }
    }
    return result
  }
};
lt.sm.__OPEN_PAGE_TIME = Math.floor((new Date).getTime() / 1E3);
lt.sm.__openSiteTime = 0;
lt.sm.getLeadInviteText = function () {
  var text = "";
  var invite = sm.selectOne(lt.sm.EntityName.SITE_INVITE);
  if (invite instanceof lt.sm.SiteInvite)text = invite.getMemberFirstMessage();
  return text
};
lt.sm.getLeadSubmitText = function () {
  var text = "";
  var invite = sm.selectOne(lt.sm.EntityName.SITE_INVITE);
  if (invite instanceof lt.sm.SiteInvite)text = invite.getLeadSubmitText();
  return text
};
lt.sm.getEmbeddedWindowState = function () {
  return util.getCookie(lt.sm.EMBEDDED_WINDOW_STATE_COOKIE)
};
lt.sm.setEmbeddedWindowState = function (state) {
  util.setCookie(lt.sm.EMBEDDED_WINDOW_STATE_COOKIE, state)
};
lt.sm.__removeInvitesCookies = function () {
  var cookies = util.getCookies("lt-si-");
  for (var name in cookies)util.removeCookie(name)
};
lt.sm.removeCookies = function () {
  lt.sm.__removeInvitesCookies();
  util.removeCookie(lt.sm.VISITED_PAGE_COUNT_COOKIE);
  util.removeCookie(lt.sm.ON_SITE_TIME_COOKIE);
  lt.sm.removeActiveChatFeature();
  util.removeCookie(lt.sm.EMBEDDED_WINDOW_STATE_COOKIE)
};
lt.sm.createDummyMember = function () {
  return new lt.sm.Member(lt.sm.Member.DUMMY_MEMBER_ID, new lt.sm.Account(lt.sm.Account.DUMMY_ACCOUNT_ID))
};
lt.sm.createDummyGroup = function (site) {
  return new lt.sm.Group(lt.sm.Group.ANY_GROUP_ID, site)
};
lt.sm.getString = function (data, field) {
  if (typeof data[field] === "string")return data[field]; else return lt.sm.DEFAULT_STRING
};
lt.sm.getBoolean = function (data, field) {
  if (typeof data[field] === "boolean")return data[field]; else return lt.sm.DEFAULT_BOOLEAN
};
lt.sm.getNumber = function (data, field) {
  if (typeof data[field] === "number")return data[field]; else return lt.sm.DEFAULT_NUMBER
};
lt.sm.__openInitiator = "";
lt.sm.setOpenInitiator = function (initiator) {
  lt.sm.__openInitiator = initiator
};
lt.sm.getOpenInitiator = function () {
  return lt.sm.__openInitiator
};
lt.sm.setVisitorOpenInitiator = function () {
  lt.sm.__openInitiator = lt.sm.OpenInitiator.VISITOR
};
lt.sm.setManualOpenInitiator = function () {
  lt.sm.__openInitiator = lt.sm.OpenInitiator.MANUAL
};
lt.sm.setApiOpenInitiator = function () {
  lt.sm.__openInitiator = lt.sm.OpenInitiator.API
};
lt.sm.setAutoOpenInitiator = function () {
  lt.sm.__openInitiator = lt.sm.OpenInitiator.AUTO
};
lt.sm.translateOpenInitiatorByType = function (type) {
  switch (type) {
    case lt.sm.InitiatorType.INVITE:
      return lt.sm.OpenInitiator.AUTO;
    case lt.sm.InitiatorType.API:
      return lt.sm.OpenInitiator.API;
    case lt.sm.InitiatorType.AUTO:
      return lt.sm.OpenInitiator.AUTO;
    default:
      return lt.sm.OpenInitiator.VISITOR
  }
};
lt.sm.makeChatOpenInitiator = function (source) {
  if (source === lt.sm.OpenInitiator.AUTO)return lt.sm.OpenInitiator.INVITATION;
  return source
};
lt.sm.getDefaultVisitorName = function () {
  return lt.sm.__defaultVisitorName
};
lt.sm.getIoIndex = function () {
  return util.getCookie(lt.sm.__IO_INDEX_COOKIE)
};
lt.sm.serializeArray = function (entities, opt_type) {
  var serializedEntities = [];
  for (var i = 0, l = entities.length; i < l; i += 1)serializedEntities.push(entities[i].serializeData(opt_type));
  return serializedEntities
};
lt.sm.EntityFactory = function () {
};
lt.sm.EntityFactory.prototype.createEntity = function (name, id, opt_parents) {
  var firstParent = null;
  var secondParent = null;
  if (opt_parents !== undefined) {
    if (opt_parents[0] !== undefined)firstParent = opt_parents[0];
    if (opt_parents[1] !== undefined)secondParent = opt_parents[1]
  }
  var result = null;
  switch (name) {
    case lt.sm.EntityName.ACCOUNT:
      result = new lt.sm.Account(id);
      break;
    case lt.sm.EntityName.MEMBER:
      if (firstParent instanceof lt.sm.Account)result = new lt.sm.Member(id, firstParent);
      break;
    case lt.sm.EntityName.SITE:
      if (firstParent instanceof
          lt.sm.Account)result = new lt.sm.Site(id, firstParent);
      break;
    case lt.sm.EntityName.VISITOR:
      if (firstParent instanceof lt.sm.Site)result = new lt.sm.Visitor(id, firstParent);
      break;
    case lt.sm.EntityName.GROUP:
      if (firstParent instanceof lt.sm.Site)result = new lt.sm.Group(id, firstParent);
      break;
    case lt.sm.EntityName.CHAT:
      if (firstParent instanceof lt.sm.Visitor)result = new lt.sm.Chat(id, firstParent);
      break;
    case lt.sm.EntityName.PAGE:
      if (firstParent instanceof lt.sm.Site)result = new lt.sm.Page(id, firstParent);
      break;
    case lt.sm.EntityName.FEATURE:
      if (firstParent instanceof lt.sm.Member && secondParent instanceof lt.sm.Group)result = new lt.sm.Feature(id, firstParent, secondParent);
      break;
    case lt.sm.EntityName.COBROWSE:
      if (firstParent instanceof lt.sm.Visitor)result = new lt.sm.Cobrowse(id, firstParent);
      break;
    case lt.sm.EntityName.INVITE:
      if (firstParent instanceof lt.sm.Feature && secondParent instanceof lt.sm.Visitor)result = new lt.sm.Invite(id, firstParent, secondParent);
      break
  }
  return result
};
lt.sm.EntityName = {ACCOUNT: "account", MEMBER: "member", SITE: "site", GROUP: "group", VISITOR: "visitor", PAGE: "page", COBROWSE: "cobrowse", CHAT: "chat", FEATURE: "feature", BUTTON_TRIGGER: "button-trigger", LABEL_TRIGGER: "label-trigger", INVITE: "invite", SITE_INVITE: "site-invite"};
lt.sm.FeatureType = {CHAT: "chat", CALL: "call"};
lt.sm.TriggerType = {CHAT: "chat", CALL: "call", OFFLINE: "offline"};
lt.sm.EmbeddedWindowState = {SHOWN: "shown", HIDDEN: "hidden"};
lt.sm.InitiatorType = {BUTTON: "button", SOUND_BUTTON: "sound-button", LABEL: "label", SOUND_LABEL: "sound-label", AUTO: "auto", INVITE: "invite", API: "api", CALL_FROM_CHAT: "chat_button"};
lt.sm.OpenInitiator = {VISITOR: "visitor", MANUAL: "manual", API: "api", AUTO: "auto", INVITATION: "invitation"};
lt.sm.InviteAction = {SEND: "send", SHOW: "show", CLOSE: "close", DECLINE: "decline"};
lt.sm.ActionWindowType = {EMBEDDED: "embedded", EXTERNAL: "external"};
lt.sm.ActionType = {CHAT: "chat", CALL: "call", WELCOME: "welcome", OFFLINE: "offline", LEAD: "lead", PERSONAL_CALL: "personalcall", SHOW_INVITE: "pseudo-show-invite", INVITE_ACTION: "pseudo-invite-action"};
lt.sm.WindowActionType = {SHOW: "show", HIDE: "hide", DECLINE: "decline", SEND: "send"};
lt.sm.Account = function (id) {
  sm.Entity.call(this, lt.sm.EntityName.ACCOUNT, id);
  this.__sipHost = lt.sm.DEFAULT_STRING
};
util.inherits(lt.sm.Account, sm.Entity);
lt.sm.Account.DUMMY_ACCOUNT_ID = "0";
lt.sm.Account.prototype.getSipHost = function () {
  return this.__sipHost
};
lt.sm.Account.prototype.populateData = function (data, opt_type) {
  this.__sipHost = lt.sm.getString(data, "sip_host")
};
lt.sm.Member = function (id, account) {
  sm.Entity.call(this, lt.sm.EntityName.MEMBER, id, [account]);
  this.__status = lt.sm.MemberStatus.OFFLINE;
  this.__firstName = lt.sm.DEFAULT_STRING;
  this.__lastName = lt.sm.DEFAULT_STRING;
  this.__avatarUrl = lt.sm.DEFAULT_STRING;
  this.__canUseVoice = lt.sm.DEFAULT_BOOLEAN;
  this.__forwardingEnabled = lt.sm.DEFAULT_BOOLEAN;
  this.__groups = [];
  this.__allGroups = []
};
util.inherits(lt.sm.Member, sm.Entity);
lt.sm.Member.ANY_MEMBER_ID = "*";
lt.sm.Member.DUMMY_MEMBER_ID = "0";
lt.sm.Member.getMemberStatus = function (data, field) {
  if (typeof data[field] === "string")return data[field];
  return lt.sm.MemberStatus.OFFLINE
};
lt.sm.Member.prototype.getDisplayName = function () {
  return this.__firstName
};
lt.sm.Member.prototype.getAvatarUrl = function () {
  return this.__avatarUrl
};
lt.sm.Member.prototype.getStatus = function () {
  return this.__status
};
lt.sm.Member.prototype.getGroups = function () {
  return this.__groups
};
lt.sm.Member.prototype.getAllGroups = function () {
  return this.__allGroups
};
lt.sm.Member.prototype.getFirstName = function () {
  return this.__firstName
};
lt.sm.Member.prototype.getLastName = function () {
  return this.__lastName
};
lt.sm.Member.prototype.setStatus = function (status) {
  this.__status = status
};
lt.sm.Member.prototype.isAvailableFor = function (feature) {
  var featureType = feature.getId();
  var isFeatureAvailable = false;
  if (featureType === lt.sm.FeatureType.CHAT)isFeatureAvailable = this.isAvailable(); else if (featureType === lt.sm.FeatureType.CALL)isFeatureAvailable = this.__canUseVoice && (this.isAvailable() || this.__forwardingEnabled);
  return isFeatureAvailable
};
lt.sm.Member.prototype.isAvailable = function () {
  return this.__status === lt.sm.MemberStatus.ONLINE
};
lt.sm.Member.prototype.isForwardingEnable = function () {
  return this.__forwardingEnabled
};
lt.sm.Member.prototype.canUseVoice = function () {
  return this.__canUseVoice
};
lt.sm.Member.prototype.__getGroups = function (opt_siteId) {
  var groups = [];
  var allGroups = this.getAllGroups();
  var siteId = opt_siteId || LiveTex.site.getId();
  for (var j = 0, m = allGroups.length; j < m; j += 1) {
    var group = allGroups[j];
    if (group.getSite().getId() == siteId)groups.push(Number(allGroups[j].getId()))
  }
  return groups
};
lt.sm.Member.prototype.serializeData = function (opt_type) {
  return{"id": Number(this.getId()), "avatar": /^(http|\/\/)/.test(this.__avatarUrl) ? this.__avatarUrl : window["LTX_URL"] + this.__avatarUrl, "firstname": this.getFirstName(), "lastname": this.getLastName(), "state_id": this.isAvailable() ? 1 : 0, "is_call": this.canUseVoice(), "is_call_forwarding": this.isForwardingEnable(), "department_id": this.__getGroups()}
};
lt.sm.Member.prototype.populateData = function (data, opt_type) {
  this.__firstName = lt.sm.getString(data, "first_name");
  this.__lastName = lt.sm.getString(data, "last_name");
  this.__status = lt.sm.Member.getMemberStatus(data, "status");
  this.__avatarUrl = lt.sm.getString(data, "avatar_url");
  this.__canUseVoice = lt.sm.getBoolean(data, "can_use_voice");
  this.__forwardingEnabled = lt.sm.getBoolean(data, "forwarding_enable");
  if (data["groups"]instanceof Object)this.__groups = sm.reconstructEntities(data["groups"], opt_type);
  if (data["all_groups"]instanceof
      Object)this.__allGroups = sm.reconstructEntities(data["all_groups"], opt_type)
};
lt.sm.Site = function (id, account) {
  sm.Entity.call(this, lt.sm.EntityName.SITE, id, [account]);
  this.__account = account;
  this.__displayName = lt.sm.DEFAULT_STRING;
  this.__labelTriggers = [];
  this.__buttonTriggers = [];
  this.__actionWindowType = lt.sm.ActionWindowType.EMBEDDED;
  this.__isLeadEnabled = lt.sm.DEFAULT_BOOLEAN;
  this.__leadQuestionNo = "2";
  this.__leadColorNo = "3";
  this.__isMobileWidgetsEnabled = lt.sm.DEFAULT_BOOLEAN;
  this.__leadFace = lt.sm.DEFAULT_STRING;
  this.__leadFaceType = 1;
  this.__leadMemberMessage = lt.sm.DEFAULT_STRING;
  this.__siteSettings = {};
  this.__features = [];
  this.__members = [];
  this.__isOfflineGroupsEnabled = false;
  this.__isCallbackEnabled = false
};
util.inherits(lt.sm.Site, sm.Entity);
lt.sm.Site.prototype.getAccount = function () {
  return this.__account
};
lt.sm.Site.prototype.getMembers = function (callback, opt_fromCache) {
  var fromCache = opt_fromCache || false;
  var self = this;
  if (fromCache && this.__members.length)callback(this.__members); else lt.api.getAllMembers(function (members) {
    self.setMembers(members);
    callback(members)
  })
};
lt.sm.Site.prototype.setMembers = function (members) {
  this.__members = members
};
lt.sm.Site.prototype.getLabelTriggers = function () {
  return this.__labelTriggers
};
lt.sm.Site.prototype.getButtonTriggers = function () {
  return this.__buttonTriggers
};
lt.sm.Site.prototype.getFeatures = function () {
  return this.__features
};
lt.sm.Site.prototype.addFeatures = function (features) {
  this.__features.concat(features)
};
lt.sm.Site.prototype.setSiteSettings = function (liveSettings) {
  this.__siteSettings = liveSettings
};
lt.sm.Site.prototype.getSiteSettings = function () {
  return this.__siteSettings
};
lt.sm.Site.prototype.populateData = function (data, opt_type) {
  if (data instanceof Array) {
    var features = data;
    features.sort(function (feature1, feature2) {
      var member1 = feature1.getMember(), member2 = feature2.getMember(), member1Rank = member1.isAvailable() ? -1E3 : 0 + member1.isAvailable(), member2Rank = member2.isAvailable() ? -1E3 : 0 + member2.isAvailable();
      return member1Rank - member2Rank
    });
    this.__features = features;
    var buttonTriggers = [], labelTriggers = [];
    if (typeof this.__siteSettings["buttons"] === "object") {
      var buttons = lt.sm.Site.__parseSiteSettings(this.__siteSettings["buttons"]);
      for (var i = 0, l = buttons.length; i < l; i += 1) {
        var button = buttons[i];
        var buttonFeature = this.lookupForFeature(button);
        if (buttonFeature instanceof lt.sm.Feature)buttonTriggers.push(new lt.sm.ButtonTrigger(button["id"], buttonFeature, button))
      }
    }
    if (this.__siteSettings["auto"]instanceof Array && this.__siteSettings["auto"].length > 0) {
      this.__leadMemberMessage = this.__siteSettings["auto"][0]["oper"]["say"];
      var invites = lt.sm.Site.__parseSiteSettings(this.__siteSettings["auto"]);
      for (var j = 0, k = invites.length; j < k; j += 1) {
        var invite =
            invites[j];
        var inviteFeature = this.lookupForFeature(invite);
        if (inviteFeature instanceof lt.sm.Feature) {
          var auto = lt.sm.Site.__findSettingById(this.__siteSettings["auto"], invite["id"]);
          if (auto !== null)sm.save(new lt.sm.SiteInvite(this, auto, inviteFeature))
        }
      }
    }
    if (typeof this.__siteSettings["jarl"] === "object") {
      this.__siteSettings["jarl"]["group_id"] = lt.sm.Group.ANY_GROUP_ID;
      var label = lt.sm.Site.__parseSiteSetting(this.__siteSettings["jarl"]);
      if (typeof this.__siteSettings["lid_question"] === "number")label["lead_message_no"] =
          this.__siteSettings["lid_question"];
      if (typeof this.__siteSettings["lid_color"] === "number")label["lead_color"] = this.__siteSettings["lid_color"];
      if (label !== null) {
        var labelFeature = this.lookupForFeature(label);
        if (!(labelFeature instanceof lt.sm.Feature))labelFeature = new lt.sm.Feature(lt.sm.FeatureType.CHAT, new lt.sm.Member("", this.__account), new lt.sm.Group("", this));
        labelTriggers.push(new lt.sm.LabelTrigger(label["id"], labelFeature, label))
      }
    }
    if (typeof this.__siteSettings["jarl_sound"] === "object") {
      this.__siteSettings["jarl_sound"]["voice"] =
          "1";
      var soundLabel = lt.sm.Site.__parseSiteSetting(this.__siteSettings["jarl_sound"]);
      if (soundLabel !== null) {
        var soundLabelFeature = this.lookupForFeature(soundLabel);
        if (soundLabelFeature instanceof lt.sm.Feature)labelTriggers.push(new lt.sm.LabelTrigger(soundLabel["id"], soundLabelFeature, soundLabel))
      }
    }
    if (typeof this.__siteSettings["account_enable_lid"] === "number" && typeof this.__siteSettings["site_enable_lid"] === "number" && typeof this.__siteSettings["flag_activate"] === "number")this.__isLeadEnabled = Boolean(this.__siteSettings["account_enable_lid"] &&
        this.__siteSettings["site_enable_lid"] && this.__siteSettings["flag_activate"]);
    if (typeof this.__siteSettings["flag_mobile"] === "number")this.__isMobileWidgetsEnabled = this.__siteSettings["flag_mobile"];
    if (typeof this.__siteSettings["embed_chat"] === "number")this.__actionWindowType = this.__siteSettings["embed_chat"] === 1 && !(lt.ui.NEED_MOBILE_WIDGETS && this.__isMobileWidgetsEnabled) ? lt.sm.ActionWindowType.EMBEDDED : lt.sm.ActionWindowType.EXTERNAL;
    if (typeof this.__siteSettings["lid_face"] === "string")this.__leadFace =
        this.__siteSettings["lid_face"];
    if (typeof this.__siteSettings["lid_face_type"] === "number")this.__leadFaceType = this.__siteSettings["lid_face_type"];
    this.__buttonTriggers = buttonTriggers;
    this.__labelTriggers = labelTriggers
  } else {
    this.__displayName = lt.sm.getString(data, "name");
    if (typeof this.__siteSettings["is_offline_groups_enabled"] === "number")this.__isOfflineGroupsEnabled = this.__siteSettings["is_offline_groups_enabled"];
    if (typeof this.__siteSettings["is_callback_enabled"] === "number")this.__isCallbackEnabled =
        this.__siteSettings["is_callback_enabled"];
    if (data["account"]instanceof Object)this.__account.populateData(data["account"])
  }
};
lt.sm.Site.prototype.getDisplayName = function () {
  return this.__displayName
};
lt.sm.Site.__parseSiteSettings = function (settings) {
  var parsed = [];
  if (settings instanceof Array)for (var i = 0; i < settings.length; i++) {
    var parsedElem = lt.sm.Site.__parseSiteSetting(settings[i]);
    if (parsedElem !== null)parsed.push(parsedElem)
  } else parsed.push(lt.sm.Site.__parseSiteSetting(settings));
  return parsed
};
lt.sm.Site.__translateChatLabelColorProperty = function (color) {
  var parsedColor = "blue";
  switch (color) {
    case 0:
      parsedColor = "blue";
      break;
    case 1:
      parsedColor = "green";
      break;
    case 2:
      parsedColor = "orange";
      break;
    case 3:
      parsedColor = "blue";
      break;
    case 4:
      parsedColor = "red";
      break;
    case 5:
      parsedColor = "purple";
      break;
    case 6:
      parsedColor = "gray";
      break;
    case 7:
      parsedColor = "pink";
      break;
    case 8:
      parsedColor = "black";
      break;
    case 9:
      parsedColor = "yellow";
      break;
    case 10:
      parsedColor = "white";
      break
  }
  return parsedColor
};
lt.sm.Site.__translateCallsLabelColorProperty = function (color) {
  var parsedColor = "blue";
  switch (color) {
    case 0:
      parsedColor = "black";
      break;
    case 1:
      parsedColor = "blue";
      break;
    case 2:
      parsedColor = "red";
      break;
    case 3:
      parsedColor = "green";
      break;
    case 4:
      parsedColor = "gray";
      break;
    case 5:
      parsedColor = "orange";
      break;
    case 6:
      parsedColor = "purple";
      break;
    case 7:
      parsedColor = "pink";
      break;
    case 8:
      parsedColor = "white";
      break;
    case 9:
      parsedColor = "yellow";
      break
  }
  return parsedColor
};
lt.sm.Site.__parseSiteColorProperty = function (setting) {
  var color = 1;
  if (typeof setting["bcolor"] === "number")color = setting["bcolor"]; else if (typeof setting["color"] === "number")color = setting["color"];
  var isSoundLabel = setting["voice"] === "1";
  return isSoundLabel ? lt.sm.Site.__translateCallsLabelColorProperty(color) : lt.sm.Site.__translateChatLabelColorProperty(color)
};
lt.sm.Site.__parseSiteSizeProperty = function (setting) {
  var parsedSize = "big";
  if (typeof setting["bsize"] === "number")switch (setting["bsize"]) {
    case 3:
      parsedSize = "big";
      break;
    case 2:
      parsedSize = "medium";
      break;
    case 1:
      parsedSize = "small";
      break
  } else if (typeof setting["type_size"] === "number")switch (setting["type_size"]) {
    case 2:
      parsedSize = "big";
      break;
    case 1:
      parsedSize = "small";
      break;
    case 0:
      parsedSize = "none";
      break
  } else if (typeof setting["size"] === "number")switch (setting["size"]) {
    case 1:
      parsedSize = "big";
      break;
    case 0:
      parsedSize =
          "small";
      break
  }
  return parsedSize
};
lt.sm.Site.__parseSiteSetting = function (setting) {
  var parsed = {"id": "", "group_id": "*", "member_id": "*", "type": lt.sm.FeatureType.CHAT};
  if (setting["group_id"] === undefined)return null;
  if (setting["group_id"] != 1)parsed["group_id"] = String(setting["group_id"]);
  if (setting["member_id"] !== undefined && setting["member_id"] != 1)parsed["member_id"] = String(setting["member_id"]);
  if (setting["id"] !== undefined && (typeof setting["id"] === "string" || typeof setting["id"] === "number"))parsed["id"] = String(setting["id"]);
  if (setting["voice"] !==
      undefined && setting["voice"] == 1)parsed["type"] = lt.sm.FeatureType.CALL;
  parsed["color"] = lt.sm.Site.__parseSiteColorProperty(setting);
  parsed["size"] = lt.sm.Site.__parseSiteSizeProperty(setting);
  if (typeof setting["position"] === "string")parsed["location"] = setting["position"];
  if (typeof setting["position"] === "number")switch (setting["position"]) {
    case 0:
      parsed["location"] = "bottom";
      break;
    case 1:
      parsed["location"] = "left";
      break;
    case 2:
      parsed["location"] = "right";
      break;
    case 3:
      parsed["location"] = "top";
      break
  }
  if (typeof setting["offset_type"] ===
      "number")parsed["offset_type"] = setting["offset_type"];
  if (typeof setting["offset"] === "number")parsed["offset"] = setting["offset"];
  if (typeof setting["flag_hide_offline"] === "boolean")parsed["hide_on_offline"] = setting["flag_hide_offline"];
  if (typeof setting["flag_hide"] === "boolean")parsed["hide_calls_label"] = setting["flag_hide"];
  parsed["flag_animate"] = setting["flag_animate"] === 1;
  return parsed
};
lt.sm.Site.prototype.lookupForFeature = function (setting) {
  var feature = null;
  for (var i = 0, l = this.__features.length; i < l; i++)if (lt.sm.Site.prototype.memberEquals(setting["member_id"], this.__features[i].getMember()) && lt.sm.Site.prototype.groupEquals(setting["group_id"], this.__features[i].getGroup()) && lt.sm.Site.prototype.hasNeededFeatureType(setting["type"], this.__features[i]) && lt.sm.Site.prototype.memberHasGroup(this.__features[i].getMember(), setting["group_id"])) {
    feature = this.__features[i];
    break
  }
  var member =
      new lt.sm.Member(setting["member_id"], this.getAccount());
  var group = new lt.sm.Group(setting["group_id"], this);
  var originalFeature = new lt.sm.Feature(setting["type"], member, group);
  if (feature !== null) {
    originalFeature.setMember(feature.getMember());
    originalFeature.setGroup(feature.getGroup())
  }
  return originalFeature
};
lt.sm.Site.prototype.memberEquals = function (memberId, member) {
  return memberId === lt.sm.Member.ANY_MEMBER_ID || memberId === member.getId()
};
lt.sm.Site.prototype.groupEquals = function (groupId, group) {
  return groupId === lt.sm.Group.ANY_GROUP_ID || groupId === group.getId()
};
lt.sm.Site.prototype.hasNeededFeatureType = function (type, feature) {
  return type === feature.getId()
};
lt.sm.Site.prototype.memberHasGroup = function (member, groupId) {
  var found = groupId === lt.sm.Group.ANY_GROUP_ID;
  if (!found) {
    var groups = member.getGroups();
    for (var i = 0, l = groups.length; i < l; i += 1)if (groups[i].getId() === groupId) {
      found = true;
      break
    }
  }
  return found
};
lt.sm.Site.__findSettingById = function (settings, id) {
  var found = null;
  var map = {};
  for (var i = 0, l = settings.length; i < l; i += 1)if (settings[i]["id"] !== undefined)map[settings[i]["id"]] = i;
  if (map[id] !== undefined)found = settings[map[id]];
  return found
};
lt.sm.Site.prototype.getWindowType = function () {
  return this.__actionWindowType
};
lt.sm.Site.prototype.isLeadEnabled = function () {
  return this.__isLeadEnabled
};
lt.sm.Site.prototype.isOfflineGroupsEnabled = function () {
  return this.__isOfflineGroupsEnabled
};
lt.sm.Site.prototype.isCallbackEnabled = function () {
  return this.__isCallbackEnabled
};
lt.sm.Site.prototype.isMobileWidgetsEnabled = function () {
  return this.__isMobileWidgetsEnabled
};
lt.sm.Site.prototype.getLeadFace = function () {
  return"//cs15.livetex.ru/" + this.__leadFace
};
lt.sm.Site.prototype.getLeadFaceType = function () {
  return this.__leadFaceType
};
lt.sm.Site.prototype.getLeadMemberMessage = function () {
  return this.__leadMemberMessage
};
lt.sm.Invite = function (id, feature, visitor, opt_text) {
  sm.Entity.call(this, lt.sm.EntityName.INVITE, id, [visitor]);
  this.__feature = feature;
  this.__memberFirstMessage = opt_text || lt.sm.DEFAULT_STRING
};
util.inherits(lt.sm.Invite, sm.Entity);
lt.sm.Invite.prototype.populateData = function (data, opt_type) {
  this.__memberFirstMessage = lt.sm.getString(data, "invite_text")
};
lt.sm.Invite.prototype.getFeature = function () {
  return this.__feature
};
lt.sm.Invite.prototype.getMemberFirstMessage = function () {
  return this.__memberFirstMessage
};
lt.sm.Group = function (id, site) {
  sm.Entity.call(this, lt.sm.EntityName.GROUP, id, [site]);
  this.__site = site;
  this.__displayName = lt.sm.DEFAULT_STRING
};
util.inherits(lt.sm.Group, sm.Entity);
lt.sm.Group.ANY_GROUP_ID = "*";
lt.sm.Group.prototype.getSite = function () {
  return this.__site
};
lt.sm.Group.prototype.getSortOrder = function () {
  return this.__sortOrder
};
lt.sm.Group.prototype.getDisplayName = function () {
  return this.__displayName === lt.sm.DEFAULT_STRING ? this.__site.getDisplayName() : this.__displayName
};
lt.sm.Group.prototype.populateData = function (data, opt_type) {
  this.__displayName = lt.sm.getString(data, "name");
  this.__sortOrder = lt.sm.getNumber(data, "sorting")
};
lt.sm.Visitor = function (id, site) {
  sm.Entity.call(this, lt.sm.EntityName.VISITOR, id, [site]);
  this.__displayName = lt.sm.Visitor.DEFAULT_NAME;
  this.__isNameEditable = true;
  this.__chat = null;
  this.__cobrowse = null;
  this.__site = site
};
util.inherits(lt.sm.Visitor, sm.Entity);
lt.sm.Visitor.DEFAULT_NAME = "\u0413\u043e\u0441\u0442\u044c";
lt.sm.Visitor.getVisitorName = function (data, field) {
  if (typeof data[field] === "string")return data[field]; else return lt.sm.Visitor.DEFAULT_NAME
};
lt.sm.Visitor.prototype.getDisplayName = function () {
  return this.__displayName
};
lt.sm.Visitor.prototype.setDisplayName = function (name, opt_isEditable) {
  this.__isNameEditable = opt_isEditable || lt.sm.DEFAULT_BOOLEAN;
  this.__displayName = name
};
lt.sm.Visitor.prototype.isNameEditable = function () {
  return this.__isNameEditable
};
lt.sm.Visitor.prototype.populateData = function (data, opt_type) {
  this.__displayName = lt.sm.Visitor.getVisitorName(data, "name");
  if (data["chat"]instanceof Object) {
    var chat = sm.reconstructEntity(data["chat"], opt_type);
    if (chat instanceof lt.sm.Chat)this.__chat = chat
  }
  if (data["cobrowse"]instanceof Object) {
    var cobrowse = sm.reconstructEntity(data["cobrowse"], opt_type);
    if (cobrowse instanceof lt.sm.Cobrowse)this.__cobrowse = cobrowse
  }
  if (data["site"]instanceof Object)this.__site.populateData(data["site"])
};
lt.sm.Visitor.prototype.serializeData = function (opt_type) {
  return{"is_mobile": lt.sm.filterBoolean(lt.ui.IS_MOBILE_CLIENT)}
};
lt.sm.Visitor.prototype.hasChat = function () {
  return this.__chat !== null
};
lt.sm.Visitor.prototype.hasCobrowse = function () {
  return this.__cobrowse !== null
};
lt.sm.Visitor.prototype.getSite = function () {
  return this.__site
};
lt.sm.Visitor.prototype.getAccount = function () {
  return this.__site.getAccount()
};
lt.sm.Feature = function (id, member, group) {
  sm.Entity.call(this, lt.sm.EntityName.FEATURE, id, [member, group]);
  this.__member = member;
  this.__group = group;
  this.__originalGroup = group
};
util.inherits(lt.sm.Feature, sm.Entity);
lt.sm.Feature.prototype.isAvailable = function () {
  return this.__member.isAvailableFor(this)
};
lt.sm.Feature.prototype.getMember = function () {
  return this.__member
};
lt.sm.Feature.prototype.setMember = function (member) {
  this.__member = member
};
lt.sm.Feature.prototype.getGroup = function () {
  return this.__group
};
lt.sm.Feature.prototype.getRegularGroupId = function () {
  return this.__group.getId() === lt.sm.Group.ANY_GROUP_ID ? null : this.__group.getId()
};
lt.sm.Feature.prototype.setGroup = function (group) {
  this.__group = group
};
lt.sm.Feature.prototype.getOriginalGroup = function () {
  return this.__originalGroup
};
lt.sm.Feature.prototype.populateData = function (data, opt_type) {
  if (data["member"]instanceof Object) {
    var member = sm.reconstructEntity(data["member"], opt_type);
    if (member instanceof lt.sm.Member)this.__member = member
  }
  if (data["group"]instanceof Object) {
    var group = sm.reconstructEntity(data["group"], opt_type);
    if (group instanceof lt.sm.Group)this.__group = group
  }
};
lt.sm.Trigger = function (name, id, feature, settings) {
  sm.Entity.call(this, name, id, [feature]);
  this.__currentFeature = feature;
  this._settings = settings;
  this.__groupId = settings["group_id"];
  this.__isWelcome = true;
  this.__initiatorType = this._detectInitiatorType();
  this.__initiatortId = this.__getShortId()
};
util.inherits(lt.sm.Trigger, sm.Entity);
lt.sm.Trigger.API_ID = "APIWindow";
lt.sm.Trigger.API_CALLS_ID = "APICallsWindow";
lt.sm.Trigger.prototype._detectInitiatorType = function () {
};
lt.sm.Trigger.prototype.setInitiatorState = function (type, opt_idOrMessage) {
  this.__initiatorType = type;
  this.__initiatortId = opt_idOrMessage || ""
};
lt.sm.Trigger.prototype.__getShortId = function () {
  if (this.__id !== lt.sm.Trigger.API_ID && this.__id !== lt.sm.Trigger.API_CALLS_ID)return this.__id.substr(this.__id.indexOf("_") + 1);
  return this.__id
};
lt.sm.Trigger.prototype.getOriginalGroupId = function () {
  return this.__groupId
};
lt.sm.Trigger.prototype.getInitiatorType = function () {
  return this.__initiatorType
};
lt.sm.Trigger.prototype.getInitiatorId = function () {
  return this.__initiatortId
};
lt.sm.Trigger.prototype.getSite = function () {
  return this.__currentFeature.getGroup().getSite()
};
lt.sm.Trigger.prototype.getCurrentFeature = function () {
  return this.__currentFeature
};
lt.sm.Trigger.prototype.updateFeature = function (feature) {
  this.__currentFeature = feature
};
lt.sm.Trigger.prototype.isWelcome = function () {
  return this.__isWelcome && this.__currentFeature.getId() !== lt.sm.FeatureType.CALL
};
lt.sm.Trigger.prototype.setWelcome = function (isWelcome) {
  this.__isWelcome = isWelcome
};
lt.sm.Trigger.prototype.isSound = function () {
  return this.__currentFeature.getId() === lt.sm.FeatureType.CALL
};
lt.sm.Trigger.prototype.isReadyToShow = function () {
  return this.__currentFeature.getId() === lt.sm.FeatureType.CALL ? this._isCallsStateReadyToShow() : this._isChatStateReadyToShow()
};
lt.sm.Trigger.prototype._isChatStateReadyToShow = function () {
  return true
};
lt.sm.Trigger.prototype._isCallsStateReadyToShow = function () {
  return true
};
lt.sm.Trigger.prototype.isAvailableMemberExists = function () {
  if (this.__currentFeature.getId() === lt.sm.FeatureType.CHAT)return this.__currentFeature.isAvailable() || lt.sm.isAuthChatExists();
  if (this.__currentFeature.getId() === lt.sm.FeatureType.CALL)return this.isVoiceAvailableMemberExists();
  return false
};
lt.sm.Trigger.prototype.isVoiceAvailableMemberExists = function () {
  var members = lt.sm.getGroupMembers(this.__groupId);
  return lt.sm.Trigger.__isVoiceOnlineMemberExists(members) || lt.sm.Trigger.__isVoiceForwardingOfflineMemberExists(members)
};
lt.sm.Trigger.__isVoiceOnlineMemberExists = function (members) {
  for (var i = 0, l = members.length; i < l; i += 1)if (members[i].isAvailable() && members[i].canUseVoice())return true;
  return false
};
lt.sm.Trigger.__isVoiceForwardingOfflineMemberExists = function (members) {
  for (var i = 0, l = members.length; i < l; i += 1)if ((members[i].getStatus() === lt.sm.MemberStatus.OFFLINE || members[i].getStatus() === lt.sm.MemberStatus.BUSY) && members[i].canUseVoice() && members[i].isForwardingEnable())return true;
  return false
};
lt.sm.Page = function (id, site) {
  sm.Entity.call(this, lt.sm.EntityName.PAGE, id, [site]);
  this.__countryCode = lt.sm.DEFAULT_STRING;
  this.__countryName = lt.sm.DEFAULT_STRING;
  this.__cityName = lt.sm.DEFAULT_STRING;
  this.__region = lt.sm.DEFAULT_STRING
};
util.inherits(lt.sm.Page, sm.Entity);
lt.sm.Page.__ENGINES = {google: {prefix: "https?://www\\.google\\.", key: "q"}, yandex: {prefix: "https?://yandex\\.", key: "text"}, "rambler": {prefix: "rambler\\.ru/search", key: "query"}, mailru: {prefix: "https?://go\\.mail\\.ru/", key: "q"}, bing: {prefix: "https?://www\\.bing\\.com/", key: "q"}, yahoo: {prefix: "https?://.*\\.yahoo\\.com/", key: "p"}, ask: {prefix: "https?://.*\\.ask\\.com/", key: "q"}, qip: {prefix: "https?://search\\.qip\\.ru/search", key: "query"}};
lt.sm.Page.__extractSeoData = function (encReferrer) {
  var data = {};
  var referrer = String(decodeURIComponent(encReferrer));
  data["seo_engine"] = lt.sm.filterString(lt.sm.Page.__extractSeoEngine(referrer));
  var seoQuery = lt.sm.Page.__extractSeoQuery(data["seo_engine"], referrer);
  data["seo_query"] = lt.sm.filterString(util.encodeBase64(seoQuery));
  data["seo_referrer"] = lt.sm.filterString(util.encodeBase64(lt.sm.Page.__extractSeoReferrer(referrer, data["seo_engine"], seoQuery)));
  return data
};
lt.sm.Page.__extractSeoEngine = function (referrer) {
  for (var key in lt.sm.Page.__ENGINES)if ((new RegExp(lt.sm.Page.__ENGINES[key]["prefix"])).test(referrer))return key;
  return""
};
lt.sm.Page.__extractSeoQuery = function (engine, referrer) {
  if (lt.sm.Page.__ENGINES[engine]instanceof Object) {
    var key = lt.sm.Page.__ENGINES[engine]["key"];
    var matched = referrer.match(new RegExp("[&|\\?]" + key + "=([^&]*)&?"));
    return matched !== null && matched.length === 2 ? matched[1] : ""
  }
  return""
};
lt.sm.Page.__extractSeoReferrer = function (referrer, engine, query) {
  switch (engine) {
    case "yandex":
      return lt.sm.Page.__recoverYandexReferrer(query);
    default:
      return referrer
  }
};
lt.sm.Page.__recoverYandexReferrer = function (query) {
  return"http://yandex.ru/yandsearch?text=" + query
};
lt.sm.Page.prototype.getGeoData = function () {
  return{"country_code": this.__countryCode, "country_name": this.__countryName, "city_name": this.__cityName, "region": this.__region}
};
lt.sm.Page.prototype.populateData = function (data, opt_type) {
  this.__countryCode = lt.sm.getString(data, "country_code");
  this.__countryName = lt.sm.getString(data, "country_name");
  this.__cityName = lt.sm.getString(data, "city_name");
  this.__region = lt.sm.getString(data, "region")
};
lt.sm.Page.prototype.serializeData = function (opt_type) {
  var data = lt.sm.Page.__extractSeoData(document.referrer);
  data["referrer"] = lt.sm.filterString(util.encodeBase64(document.referrer));
  data["page_title"] = lt.sm.filterString(util.encodeBase64(document.title));
  data["page_url"] = lt.sm.filterString(util.encodeBase64(location.href.toString()));
  return data
};
lt.sm.Chat = function (id, visitor, opt_memberFirstMessage, opt_visitorFirstMessage) {
  sm.Entity.call(this, lt.sm.EntityName.CHAT, id, [visitor]);
  this.__visitor = visitor;
  this.__memberFirstMessage = opt_memberFirstMessage || "";
  this.__visitorFirstMessage = opt_visitorFirstMessage || ""
};
util.inherits(lt.sm.Chat, sm.Entity);
lt.sm.Chat.prototype.getMemberFirstMessage = function () {
  return this.__memberFirstMessage
};
lt.sm.Chat.prototype.getVisitorFirstMessage = function () {
  return this.__visitorFirstMessage
};
lt.sm.Chat.prototype.populateData = function (data, opt_type) {
  if (data["visitor"]instanceof lt.sm.Visitor)this.__visitor = data["visitor"]
};
lt.sm.LabelTrigger = function (id, feature, settings) {
  lt.sm.Trigger.call(this, lt.sm.EntityName.LABEL_TRIGGER, id, feature, settings);
  this.__cancelLabel = "";
  this.__location = settings["location"];
  this.__offsetMeasure = settings["offset_type"] === 1 ? "%" : "px";
  this.__offset = settings["offset"];
  this.__leadMessageNo = settings["lead_message_no"];
  this.__leadColor = lt.sm.Site.__translateChatLabelColorProperty(settings["lead_color"]);
  this.__originalColor = settings["color"];
  this.__isHideOnOffline = settings["hide_on_offline"];
  this.__isCallsDisabled =
      settings["hide_calls_label"];
  this.__isAnimatedLogo = settings["flag_animate"];
  this.__memberFirstMessage = "";
  this.__leadSubmitText = "";
  this.__isWelcome = true
};
util.inherits(lt.sm.LabelTrigger, lt.sm.Trigger);
lt.sm.LabelTrigger.prototype._detectInitiatorType = function () {
  return this.isSound() ? lt.sm.InitiatorType.SOUND_LABEL : lt.sm.InitiatorType.LABEL
};
lt.sm.LabelTrigger.prototype.serializeData = function (opt_type) {
  var settings = this._settings;
  settings["name"] = this.__currentFeature.getMember().getDisplayName();
  settings["title"] = settings["name"];
  settings["depart"] = this.__currentFeature.getGroup().getDisplayName();
  settings["subtitle"] = settings["depart"];
  if (!this.isAvailableMemberExists() && this.getSite().isLeadEnabled() && this.__currentFeature.getId() === lt.sm.FeatureType.CHAT && lt.ui.isMobileViewEnable()) {
    var visitor = lt.sm.getVisitor();
    if (visitor !== null) {
      var site =
          visitor.getSite();
      if (site.getLeadFaceType() === 2)settings["image_url"] = site.getLeadFace(); else settings["image_url"] = window["LTX_URL"] + "/img/label/operator-lead.png"
    }
  } else if (this.__currentFeature.getMember().getAvatarUrl())settings["image_url"] = window["LTX_URL"] + this.__currentFeature.getMember().getAvatarUrl(); else settings["image_url"] = window["LTX_URL"] + "img/label/operator-def.png";
  if (this.isAvailableMemberExists())settings["status"] = "online"; else if (this.getSite().isLeadEnabled() && this.__currentFeature.getId() ===
      lt.sm.FeatureType.CHAT)settings["status"] = "lead"; else settings["status"] = "offline";
  if (this.__currentFeature.getId() === lt.sm.FeatureType.CALL)settings["type"] = "call"; else settings["type"] = "chat";
  if (this.isLeadIsReadyToShow() && !this.isSound())settings["color"] = this.__leadColor; else settings["color"] = this.__originalColor;
  settings["member-first-message"] = this.__memberFirstMessage || "";
  settings["cancel-label"] = this.__cancelLabel || "\u041d\u0435\u0442, \u0441\u043f\u0430\u0441\u0438\u0431\u043e!";
  return settings
};
lt.sm.LabelTrigger.prototype.isWelcome = function () {
  return this.__isWelcome && !lt.sm.isActiveChatExists()
};
lt.sm.LabelTrigger.prototype.cancelLabel = function (cancelLabel) {
  this.__cancelLabel = cancelLabel
};
lt.sm.LabelTrigger.prototype.getLocation = function () {
  return this.__location
};
lt.sm.LabelTrigger.prototype.getOffset = function () {
  return this.__offset
};
lt.sm.LabelTrigger.prototype.getOffsetMeasure = function () {
  return this.__offsetMeasure
};
lt.sm.LabelTrigger.prototype.getLeadMessageNo = function () {
  return this.__leadMessageNo
};
lt.sm.LabelTrigger.prototype.isHideOnOffline = function () {
  return this.__isHideOnOffline
};
lt.sm.LabelTrigger.prototype.isCallsDisabled = function () {
  return this.__isCallsDisabled
};
lt.sm.LabelTrigger.prototype.isAnimatedLogo = function () {
  return this.__isAnimatedLogo
};
lt.sm.LabelTrigger.prototype.isMemberIsAvailable = function () {
  var feature = this.getCurrentFeature();
  return feature.getMember().isAvailableFor(feature)
};
lt.sm.LabelTrigger.prototype.isLeadIsReadyToShow = function () {
  return!lt.sm.isActiveChatExists() && !this.isMemberIsAvailable() && this.getSite().isLeadEnabled()
};
lt.sm.LabelTrigger.prototype.setMemberFirstMessage = function (message) {
  this.__memberFirstMessage = message
};
lt.sm.LabelTrigger.prototype.setLeadSubmitText = function (text) {
  this.__leadSubmitText = text
};
lt.sm.LabelTrigger.prototype.getMemberFirstMessage = function () {
  return this.__memberFirstMessage
};
lt.sm.LabelTrigger.prototype.getLeadSubmitText = function () {
  return this.__leadSubmitText
};
lt.sm.LabelTrigger.prototype._isChatStateReadyToShow = function () {
  return this.isMemberIsAvailable() || !this.isHideOnOffline()
};
lt.sm.LabelTrigger.prototype._isCallsStateReadyToShow = function () {
  return!this.isCallsDisabled() && this.isVoiceAvailableMemberExists()
};
lt.sm.ButtonTrigger = function (id, feature, settings) {
  lt.sm.Trigger.call(this, lt.sm.EntityName.BUTTON_TRIGGER, id, feature, settings);
  this.setWelcome(false)
};
util.inherits(lt.sm.ButtonTrigger, lt.sm.Trigger);
lt.sm.ButtonTrigger.prototype._detectInitiatorType = function () {
  return this.isSound() ? lt.sm.InitiatorType.SOUND_BUTTON : lt.sm.InitiatorType.BUTTON
};
lt.sm.ButtonTrigger.prototype.serializeData = function (opt_type) {
  var settings = this._settings;
  if (!this.isSound())if (settings["size"] === "small") {
    settings["title"] = "\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441";
    if (this.__currentFeature.isAvailable())settings["subtitle"] = "\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0432 \u0441\u0435\u0442\u0438"; else settings["subtitle"] = "\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043d\u0435 \u0432 \u0441\u0435\u0442\u0438"
  } else {
    settings["title"] =
        this.__currentFeature.getMember().getDisplayName();
    settings["subtitle"] = this.__currentFeature.getGroup().getDisplayName()
  } else {
    if (settings["size"] === "small") {
      settings["title"] = "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0432\u043e\u043d\u043e\u043a";
      settings["subtitle"] = "\u0441 \u0441\u0430\u0439\u0442\u0430"
    }
    if (settings["size"] === "medium")settings["title"] = "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439";
    if (this.__groupId !== lt.sm.Group.ANY_GROUP_ID) {
      settings["title"] =
          "\u0417\u0432\u043e\u043d\u043e\u043a \u0441 \u0441\u0430\u0439\u0442\u0430";
      settings["subtitle"] = this.__currentFeature.getGroup().getDisplayName()
    } else {
      settings["title"] = "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0432\u043e\u043d\u043e\u043a \u0441 \u0441\u0430\u0439\u0442\u0430";
      settings["subtitle"] = ""
    }
  }
  if (this.isSound() && settings["size"] === "big" && settings["subtitle"].length > 28)settings["subtitle"] = settings["subtitle"].substr(0, 28) + "...";
  if (!this.isSound() && settings["size"] ===
      "big" && settings["subtitle"].length > 16)settings["subtitle"] = settings["subtitle"].substr(0, 16) + "...";
  if ((settings["size"] === "small" || settings["size"] === "medium") && settings["subtitle"].length > 16)settings["subtitle"] = settings["subtitle"].substr(0, 16) + "...";
  if (this.__currentFeature.getMember().getAvatarUrl())settings["image_url"] = window["LTX_URL"] + this.__currentFeature.getMember().getAvatarUrl(); else settings["image_url"] = window["LTX_URL"] + "/img/label/operator-def.png";
  if (this.isAvailableMemberExists())settings["status"] =
      "online"; else settings["status"] = "offline";
  if (this.__currentFeature.getId() === lt.sm.FeatureType.CALL)settings["type"] = "call"; else settings["type"] = "chat";
  return settings
};
lt.sm.ButtonTrigger.prototype.isAvailableMemberExists = function () {
  if (this.__currentFeature.getId() === lt.sm.FeatureType.CHAT)return this.__currentFeature.isAvailable();
  if (this.__currentFeature.getId() === lt.sm.FeatureType.CALL)return this.isVoiceAvailableMemberExists();
  return false
};
lt.sm.SiteInvite = function (site, data, feature) {
  sm.Entity.call(this, lt.sm.EntityName.SITE_INVITE, data["id"], [site]);
  this.__site = site;
  this.__feature = feature;
  this.__memberFirstMessage = lt.sm.DEFAULT_STRING;
  this.__leadSubmitText = lt.sm.DEFAULT_STRING;
  if (data["oper"]instanceof Object) {
    if (typeof data["oper"]["say"] === "string")this.__memberFirstMessage = data["oper"]["say"];
    if (typeof data["oper"]["lid_submit_text"] === "string")this.__leadSubmitText = data["oper"]["lid_submit_text"]
  }
  this.__settings = data["settings"] ||
  {};
  this.__geoData = data["location"] || {};
  this.__activateConditions = this.__createActivateConditions();
  this.__isLead = data["flag_lid"] === 1
};
util.inherits(lt.sm.SiteInvite, sm.Entity);
lt.sm.SiteInvite.ONCE_A_DAY = 24 * 60 * 60 * 1E3;
lt.sm.SiteInvite.ACTIVATION_COOKIE_PREFIX = "lt-si-";
lt.sm.SiteInvite.prototype.isLead = function () {
  return this.__isLead
};
lt.sm.SiteInvite.prototype.readyToActivate = function () {
  var isReady = true;
  var i = 0, l = this.__activateConditions.length;
  while (i < l) {
    isReady = isReady && this.__activateConditions[i].call(this);
    if (!isReady)break;
    i += 1
  }
  return isReady
};
lt.sm.SiteInvite.prototype.getFeature = function () {
  return this.__feature
};
lt.sm.SiteInvite.prototype.__createActivateConditions = function () {
  var activateConditions = [];
  if (typeof this.__settings["countpage"] === "number")activateConditions.push(this.__isVisitedPageCountEqual);
  if (typeof this.__settings["no_chat"] === "number")activateConditions.push(this.__isChatNotExists);
  if (typeof this.__settings["url"] === "string")activateConditions.push(this.__isUrlMatched);
  if (typeof this.__settings["main"] !== "undefined")activateConditions.push(this.__isMainPage);
  if (typeof this.__settings["time_sec_page"] ===
      "number")activateConditions.push(this.__isPageTimeoutExpired);
  if (typeof this.__settings["time_sec_all"] === "number")activateConditions.push(this.__isSiteTimeoutExpired);
  if (typeof this.__settings["new_user"] !== "undefined")activateConditions.push(this.__isUserIsNew);
  if (typeof this.__settings["once"] !== "undefined")activateConditions.push(this.__isNotActivated);
  if (typeof this.__settings["title"] === "string")activateConditions.push(this.__isTitleMatched);
  if (this.__geoData instanceof Array && this.__geoData.length >
      0)activateConditions.push(this.__isGeoLocated);
  if (typeof this.__settings["max_show"] === "number")activateConditions.push(this.__isLimitNotReached);
  return activateConditions
};
lt.sm.SiteInvite.prototype.__isVisitedPageCountEqual = function () {
  var visitedPageCount = Number(util.getCookie(lt.sm.VISITED_PAGE_COUNT_COOKIE));
  return lt.tabs.isLast() && visitedPageCount === this.__settings["countpage"]
};
lt.sm.SiteInvite.prototype.__isUrlMatched = function () {
  return document.location.href.indexOf(this.__settings["url"]) !== -1
};
lt.sm.SiteInvite.prototype.__isChatNotExists = function () {
  return!lt.sm.isActiveChatExists()
};
lt.sm.SiteInvite.prototype.__isMainPage = function () {
  return document.location.href.split("/")[3].length === 0
};
lt.sm.SiteInvite.prototype.__isPageTimeoutExpired = function () {
  return lt.sm.getOnPageTime() >= this.__settings["time_sec_page"]
};
lt.sm.SiteInvite.prototype.__isSiteTimeoutExpired = function () {
  return lt.sm.getOnSiteTime() >= this.__settings["time_sec_all"]
};
lt.sm.SiteInvite.prototype.__isUserIsNew = function () {
  return lt.sm.isNewUser()
};
lt.sm.SiteInvite.prototype.__isTitleMatched = function () {
  return document.title.indexOf(this.__settings["title"]) !== -1
};
lt.sm.SiteInvite.prototype.__isVisitorCountryLocated = function (countryName) {
  var i = 0, l = this.__geoData.length, isLocated = false;
  while (i < l) {
    if (typeof this.__geoData[i]["country"] === "string")if (this.__geoData[i]["country"] === "" || this.__geoData[i]["country"].indexOf(countryName.toLowerCase()) !== -1 && countryName !== "") {
      isLocated = true;
      break
    }
    i += 1
  }
  return isLocated
};
lt.sm.SiteInvite.prototype.__isVisitorRegionLocated = function (regionCode) {
  var i = 0, l = this.__geoData.length, isLocated = false;
  while (i < l) {
    if (typeof this.__geoData[i]["region"] === "string")if (this.__geoData[i]["region"] === "" || this.__geoData[i]["region"].indexOf(regionCode) !== -1 && regionCode !== "") {
      isLocated = true;
      break
    }
    i += 1
  }
  return isLocated
};
lt.sm.SiteInvite.prototype.__isVisitorCityLocated = function (cityName) {
  var i = 0, l = this.__geoData.length, isLocated = false;
  while (i < l) {
    if (typeof this.__geoData[i]["city"] === "string")if (this.__geoData[i]["city"] === "" || this.__geoData[i]["city"].indexOf(cityName.toLowerCase()) !== -1 && cityName !== "") {
      isLocated = true;
      break
    }
    i += 1
  }
  return isLocated
};
lt.sm.SiteInvite.prototype.__isGeoLocated = function () {
  var isLocated = false;
  var page = sm.selectOne(lt.sm.EntityName.PAGE);
  if (page instanceof lt.sm.Page)isLocated = this.__isVisitorCountryLocated(page.getGeoData()["country_name"]) && this.__isVisitorCityLocated(page.getGeoData()["city_name"]) && this.__isVisitorRegionLocated(page.getGeoData()["region"]);
  return isLocated
};
lt.sm.SiteInvite.prototype.__isLimitNotReached = function () {
  return this.getActivationCount() < this.__settings["max_show"]
};
lt.sm.SiteInvite.prototype.__isNotActivated = function () {
  return this.getActivationCount() === 0
};
lt.sm.SiteInvite.prototype.getActivationCount = function () {
  return Number(util.getCookie(lt.sm.SiteInvite.ACTIVATION_COOKIE_PREFIX + this.getId())) || 0
};
lt.sm.SiteInvite.prototype.incrActivationsCount = function () {
  util.setCookie(lt.sm.SiteInvite.ACTIVATION_COOKIE_PREFIX + this.getId(), String(this.getActivationCount() + 1), lt.sm.SiteInvite.ONCE_A_DAY)
};
lt.sm.SiteInvite.prototype.getMemberFirstMessage = function () {
  return this.__memberFirstMessage
};
lt.sm.SiteInvite.prototype.getLeadSubmitText = function () {
  return this.__leadSubmitText
};
lt.sm.MemberStatus = {ONLINE: "1", OFFLINE: "", BUSY: "2"};
lt.sm.Cobrowse = function (id, visitor) {
  sm.Entity.call(this, lt.sm.EntityName.COBROWSE, id, [visitor]);
  this.__visitor = visitor;
  this.__url = lt.sm.DEFAULT_STRING;
  this.__mousePosition = [0, 0];
  this.__displayArea = [0, 0];
  this.__selectedArea = [0, 0, 0, 0]
};
util.inherits(lt.sm.Cobrowse, sm.Entity);
lt.sm.Cobrowse.prototype.getUrl = function () {
  return this.__url
};
lt.sm.Cobrowse.prototype.getSelectedArea = function () {
  return this.__selectedArea
};
lt.sm.Cobrowse.prototype.setUrl = function (url) {
  this.__url = url
};
lt.sm.Cobrowse.prototype.setMousePosition = function (mousePosition) {
  this.__mousePosition = mousePosition
};
lt.sm.Cobrowse.prototype.setDisplayArea = function (displayArea) {
  this.__displayArea = displayArea
};
lt.sm.Cobrowse.prototype.serializeData = function (opt_type) {
  return{"visitor": sm.serializeEntity(this.__visitor), "url": this.__url, "mouse_position": this.__mousePosition, "display_area": this.__displayArea}
};
lt.sm.Cobrowse.prototype.populateData = function (data, opt_type) {
  if (data["visitor"]instanceof Object) {
    var visitor = sm.reconstructEntity(data["visitor"]);
    if (visitor instanceof lt.sm.Visitor)this.__visitor = visitor
  }
  this.__url = lt.sm.getString(data, "url");
  if (data["mouse_position"]instanceof Array && data["mouse_position"].length === 2)this.__mousePosition = data["mouse_position"];
  if (data["display_area"]instanceof Array && data["display_area"].length === 2)this.__displayArea = data["display_area"];
  if (data["selected_area"]instanceof
      Array && data["selected_area"].length === 4)this.__selectedArea = data["selected_area"]
};
lt.sm.CobrowseType = {ACTIVE: "active", TOO_MANY_TABS: "too-many-tabs"};
lt.sm.factory.createFeature = function (type, memberId, groupId, site) {
  var member = new lt.sm.Member(memberId, site.getAccount());
  var group = new lt.sm.Group(groupId, site);
  return new lt.sm.Feature(type, member, group)
};
lt.ui.ActionWindow = function (type, trigger, opt_inviteText, opt_question, opt_lead_submit_text, opt_chatAttributes, opt_visitorAttributes, opt_memberId) {
  this.__type = type;
  this.__name = this.isEmbedded() ? lt.ui.EMBEDDED_WINDOW_NAME : lt.ui.EXTERNAL_WINDOW_NAME;
  this.__trigger = trigger;
  this.__inviteText = opt_inviteText || "";
  this.__question = opt_question || "";
  this.__leadSubmitText = opt_lead_submit_text || "";
  this.__chatAttributes = opt_chatAttributes || {};
  this.__visitorAttributes = opt_visitorAttributes || {};
  this.__memberId = opt_memberId ||
      lt.sm.Member.ANY_MEMBER_ID;
  this.__memberFirstMessage = "";
  var self = this;
  lt.xdm.setWindowMessageHandler(this.__name, function (message) {
    if (!self.isClosed()) {
      var action = "";
      var params = {};
      var index = message.indexOf(",");
      if (index === -1)action = message; else {
        action = message.substr(0, index);
        params = util.decodeJsonData(message.substr(index + 1, message.length))
      }
      self.__acceptAction(action, params)
    }
  })
};
lt.ui.ActionWindow.prototype.isEmbedded = function () {
  return this.__type.indexOf("embeded") === 0
};
lt.ui.ActionWindow.prototype.show = function () {
};
lt.ui.ActionWindow.prototype.hide = function (opt_isDeclinedFromAction) {
};
lt.ui.ActionWindow.prototype.getType = function () {
  return this.__type
};
lt.ui.ActionWindow.prototype.setType = function (type) {
  this.__type = type
};
lt.ui.ActionWindow.prototype.getTrigger = function () {
  return this.__trigger
};
lt.ui.ActionWindow.prototype._getUrl = function () {
  var url = window["LTX_URL"] + this.__type + "/?" + util.encodeFormData(this._makeUrlOptions());
  var attrKey;
  for (attrKey in this.__chatAttributes)url += "&chat_attrs[" + encodeURIComponent(attrKey) + "]=" + encodeURIComponent(this.__chatAttributes[attrKey]);
  for (attrKey in this.__visitorAttributes)url += "&visitor_attrs[" + encodeURIComponent(attrKey) + "]=" + encodeURIComponent(this.__visitorAttributes[attrKey]);
  if (typeof LiveTex.prechatData === "object")url += "&" + util.encodeFormData(LiveTex.prechatData);
  if (typeof LiveTex.manyPrechatFieldsValues === "object")url += "&" + util.encodeFormData(LiveTex.manyPrechatFieldsValues);
  return url
};
lt.ui.ActionWindow.prototype._makeUrlOptions = function () {
  var visitor = lt.sm.getVisitor();
  var options = {"site_id": visitor.getSite().getId(), "visitor_id": visitor.getId()};
  if (!this.__trigger.isWelcome() && this.__type !== "embeded-" + lt.sm.ActionType.WELCOME || this.__trigger.isSound()) {
    var feature = this.__trigger.getCurrentFeature();
    var memberId = feature.getMember().getId();
    if (memberId !== lt.sm.Member.ANY_MEMBER_ID)options["operator_id"] = memberId;
    var groupId = feature.getGroup().getId();
    if (groupId !== lt.sm.Group.ANY_GROUP_ID)options["group_id"] =
        groupId;
    if (this.__type === lt.sm.ActionType.CALL)if (feature.getOriginalGroup().getId() === lt.sm.Group.ANY_GROUP_ID)options["group_id"] = "1"
  }
  if (this.__trigger.isWelcome()) {
    if (LiveTex.welcomeGroups)options["groups"] = LiveTex.welcomeGroups;
    if (this.__memberId !== lt.sm.Member.ANY_MEMBER_ID)options["operator_id"] = this.__memberId
  }
  options["name_readonly"] = visitor instanceof lt.sm.Visitor && !visitor.isNameEditable() || undefined;
  options["invite_text"] = this.__inviteText;
  options["first_message"] = this.__question;
  options["lead_submit_text"] =
      this.__leadSubmitText;
  options["account_id"] = sm.selectOne(lt.sm.EntityName.ACCOUNT).getId();
  if (lt.sm.getVisitor() !== null)options["media_server"] = lt.sm.getVisitor().getAccount().getSipHost();
  options["open_page"] = document.location.href;
  options["widget_type"] = this.__trigger.getInitiatorType();
  options["widget_id"] = this.__trigger.getInitiatorId();
  options["lt-ii"] = lt.sm.getIoIndex();
  return options
};
lt.ui.ActionWindow.prototype.__acceptAction = function (action, params) {
  switch (action) {
    case "windowLoaded":
      lt.xdm.registerWindow(this.__name, this._getWindow());
      break;
    case "hideChat":
      this.hide(true);
      lt.ui.acceptHideLabelActionEvent();
      break;
    case "openChat":
      lt.ui.switchToOnline();
      this.__handleChatOpen(params);
      break;
    case "closeChat":
      lt.sm.removeActiveChatFeature();
      break;
    case "chatOpenError":
      lt.sm.removeActiveChatFeature();
      lt.ui.switchFromOnline();
      break;
    case "bigChatOnBlur":
      this.__canBeShowed = true;
      break;
    case "bigChatOnFocus":
      this.__canBeShowed =
          false;
      break;
    case "newMessage":
      if (this.__canBeShowed)lt.tabs.dispatch(lt.tabs.EventType.SHOW);
      break;
    case "openChatFromWelcome":
      lt.ui.setCurrentActionType("embeded-" + lt.sm.ActionType.CHAT);
      lt.tabs.dispatch(lt.tabs.EventType.OPEN_CHAT, lt.sm.ActionType.CHAT);
      break;
    case "offlineAction":
      lt.ext.events.dispatchOfflineActionEvent(params["action"], lt.sm.getOpenInitiator(), this.isEmbedded());
      break;
    case "leadAction":
      lt.ext.events.dispatchLeadActionEvent(params["action"], lt.sm.getOpenInitiator(), this.isEmbedded());
      break;
    case "setVisitorName":
      lt.api.setName(params["name"], util.nop);
      break;
    case "welcomeAction":
      lt.ext.events.dispatchWelcomeActionEvent(params["action"]);
      break;
    case "touchFeature":
      this.__handleTouchFeature(params["memberId"], params["groupId"]);
      break;
    case "callOpen":
      lt.ext.events.dispatchCallOpenEvent(lt.sm.getOpenInitiator(), lt.sm.InitiatorType.CALL_FROM_CHAT, null, params["group_id"], params["visitor_name"]);
      break;
    case "setVisitorOpenInitiator":
      lt.sm.setVisitorOpenInitiator();
      break;
    case "switchOffline":
      lt.ui.switchFromOnline();
      break
  }
};
lt.ui.ActionWindow.prototype.__handleChatOpen = function (params) {
  var visitor = lt.sm.getVisitor();
  if (visitor !== null) {
    var member = new lt.sm.Member(params["member_id"], visitor.getAccount());
    var group = new lt.sm.Group(params["group_id"], visitor.getSite());
    this.__acceptChat(params["chat_id"], member, group, params["visitor_name"], params["user_attrs"], params["hidden_attrs"])
  }
  this.__memberFirstMessage = params["auto_text"];
  lt.xdm.postWindowMessage(this.__name, "startHoldMessage")
};
lt.ui.ActionWindow.prototype.__acceptChat = function (chatId, member, group, visitorName, opt_userAttrs, opt_hiddenAttrs) {
  if (this.isEmbedded())lt.sm.setEmbeddedActiveChatFeature(member, group); else lt.sm.setExternalActiveChatFeature(member, group);
  if (lt.sm.getActiveChatId() != chatId) {
    lt.sm.setActiveChatId(chatId);
    var originalGroupId = this.__trigger.getOriginalGroupId();
    var groupId = originalGroupId === lt.sm.Group.ANY_GROUP_ID ? null : originalGroupId;
    lt.ext.events.dispatchChatOpenEvent(lt.sm.getOpenInitiator(), groupId,
        visitorName, this.isEmbedded(), opt_userAttrs, opt_hiddenAttrs)
  }
};
lt.ui.ActionWindow.prototype.__handleTouchFeature = function (memberId, groupId) {
  var site = this.getTrigger().getSite();
  var member = new lt.sm.Member(memberId, site.getAccount());
  var group = new lt.sm.Group(groupId, site);
  lt.sm.setExternalActiveChatFeature(member, group)
};
lt.ui.ActionWindow.prototype._getWindow = function () {
  return null
};
lt.ui.ActionWindow.prototype.isClosed = function () {
  return false
};
lt.ui.ExternalActionWindow = function (type, trigger, opt_inviteText, opt_question, opt_lead_submit_text, opt_chatAttributes, opt_visitorAttributes, opt_memberId) {
  lt.ui.ActionWindow.call(this, type, trigger, opt_inviteText, opt_question, opt_lead_submit_text, opt_chatAttributes, opt_visitorAttributes, opt_memberId);
  this.__link = this.__openWindow()
};
util.inherits(lt.ui.ExternalActionWindow, lt.ui.ActionWindow);
lt.ui.ExternalActionWindow.prototype.isClosed = function () {
  if (this.__link !== null && typeof this.__link.closed !== "undefined")return this.__link.closed;
  return true
};
lt.ui.ExternalActionWindow.prototype.show = function () {
  if (this.__link !== null) {
    if (typeof this.__link.closed !== "undefined" && this.__link.closed !== false)this.__link = this.__openWindow();
    this.__link.focus()
  }
};
lt.ui.ExternalActionWindow.prototype.hide = function () {
  if (this.__link !== null && typeof this.__link.close === "function")this.__link.close()
};
lt.ui.ExternalActionWindow.prototype.__getOptions = function () {
  var height = 604;
  if (/Mac OS X/i.test(navigator.userAgent)) {
    if (navigator.appVersion.indexOf("Safari") != -1)height = 555;
    if (navigator.appVersion.indexOf("Chrome") != -1)height = 635
  }
  return lt.ui.isMobileViewEnable() ? {"status": 0, "toolbar": 0, "menubar": 0, "scrollbars": 0, "location": 0, "width": 447, "height": 604} : {"status": 0, "toolbar": 0, "menubar": 0, "resizable": 0, "scrollbars": 0, "width": 447, "height": height, "top": 20, "left": 20, "location": 0, "resize": 0}
};
lt.ui.ExternalActionWindow.prototype.__openWindow = function () {
  return window.open(this._getUrl(), this.__name, util.encodeFormData(this.__getOptions(), ",")) || null
};
lt.ui.ExternalActionWindow.prototype._getWindow = function () {
  return this.__link
};
lt.ui.EmbeddedActionWindow = function (type, label, frame, opt_inviteText, opt_question, opt_lead_submit_text, opt_chatAttributes, opt_visitorAttributes, opt_memberId) {
  lt.ui.ActionWindow.call(this, type, label.getTriggerEntity(), opt_inviteText, opt_question, opt_lead_submit_text, opt_chatAttributes, opt_visitorAttributes, opt_memberId);
  this.__label = label;
  this.__label.showAction();
  this.__canBeShowed = true;
  this.__frame = frame;
  this.__frame.setAttribute("src", this._getUrl())
};
util.inherits(lt.ui.EmbeddedActionWindow, lt.ui.ActionWindow);
lt.ui.EmbeddedActionWindow.prototype.show = function () {
  this.__canBeShowed = true;
  this.__label.show()
};
lt.ui.EmbeddedActionWindow.prototype.hide = function (opt_isDeclinedFromAction) {
  this.__label.hide(opt_isDeclinedFromAction)
};
lt.ui.EmbeddedActionWindow.prototype._getWindow = function () {
  return this.__frame.contentWindow
};
lt.ui.IS_IE = "\v" == "v" || navigator.appName.indexOf("Internet Explorer") != -1;
lt.ui.IS_IE_QUIRKS_MODE = document.compatMode == "BackCompat" && navigator.appVersion.indexOf("MSIE") != -1;
lt.ui.isIOS = function () {
  return/iPhone|iPod/i.test(navigator.userAgent)
};
lt.ui.isAndroid = function () {
  return/android/i.test(navigator.userAgent)
};
lt.ui.NEED_MOBILE_WIDGETS = lt.ui.isIOS() || lt.ui.isAndroid();
lt.ui.isMobileViewEnable = function () {
  return lt.ui.NEED_MOBILE_WIDGETS && lt.ui.__site.isMobileWidgetsEnabled()
};
lt.ui.isOldAndroid = function () {
  var androidVersion = navigator.userAgent.match(/Android\s+(\d)/);
  if (androidVersion !== null)return androidVersion[1] < 3;
  return false
};
lt.ui.isStandardAndroidBrowser = function () {
  return/(Android.*)(?=Version)/.test(navigator.userAgent)
};
lt.ui.isDeviceWidth = false;
lt.ui.zoomScale = 1;
lt.ui.MOBILE_INITIAL_SCALE = 1;
lt.ui.EMBEDDED_WINDOW_NAME = "lt_embeded_window";
lt.ui.EXTERNAL_WINDOW_NAME = "lt_external_window";
lt.ui.CHAT_TYPES_TO_DISPATCH = [lt.sm.ActionType.CHAT];
lt.ui.IS_MOBILE_CLIENT = navigator.userAgent.toLowerCase().indexOf("android") !== -1 || navigator.userAgent.toLowerCase().indexOf("blackberry") !== -1 || navigator.userAgent.toLowerCase().indexOf("iphone") !== -1 || navigator.userAgent.toLowerCase().indexOf("ipad") !== -1 || navigator.userAgent.toLowerCase().indexOf("ipod") !== -1 || navigator.userAgent.toLowerCase().indexOf("opera mini") !== -1 || navigator.userAgent.toLowerCase().indexOf("iemobile") !== -1;
lt.ui.__isTriggerWaitingForUpdate = function (trigger, chatFeature) {
  return trigger.getTriggerEntity()instanceof lt.sm.LabelTrigger && !trigger.getTriggerEntity().isSound() && chatFeature !== null
};
lt.ui.init = function (site) {
  lt.ui.__site = site;
  var triggers = lt.ui.__createTriggers(site.getButtonTriggers(), site.getLabelTriggers());
  var chatFeature = lt.sm.getActiveChatFeature(site);
  sm.addUpdateHandler(lt.sm.EntityName.FEATURE, function () {
    for (var i = 0, l = triggers.length; i < l; i += 1)if (!lt.ui.__isTriggerWaitingForUpdate(triggers[i], chatFeature))triggers[i].updateView()
  });
  for (var i = 0, l = triggers.length; i < l; i += 1) {
    triggers[i].addEventListener(lt.ui.TriggerEvent.START_ACTION, lt.ui.__handleStartAction);
    triggers[i].init();
    if (!lt.ui.__isTriggerWaitingForUpdate(triggers[i], chatFeature))triggers[i].updateView()
  }
  lt.cron.startSiteInvitesTimer();
  lt.cron.startImmediateInvitesTimer();
  lt.tabs.addEventListener(lt.tabs.EventType.OPEN_CHAT, lt.ui.__handleTabsInviteEvent);
  lt.tabs.addEventListener(lt.tabs.EventType.SHOW, lt.ui.__handleTabsToggleEvent);
  lt.tabs.addEventListener(lt.tabs.EventType.HIDE, lt.ui.__handleTabsToggleEvent);
  if (chatFeature !== null && lt.ui.__label !== null)lt.api.populateMember(chatFeature.getMember(), function (member) {
    chatFeature.setMember(member);
    if (chatFeature !== null)lt.ui.__updateLabelView(chatFeature)
  }, util.nop)
};
lt.ui.__updateLabelView = function (chatFeature) {
  var trigger = lt.ui.__label.getTriggerEntity();
  trigger.updateFeature(chatFeature);
  lt.ui.__label.updateView();
  if (lt.sm.isActiveChatExists() && lt.ui.__site !== null && lt.ui.__site.getWindowType() === lt.sm.ActionWindowType.EMBEDDED)if (lt.sm.getEmbeddedWindowState() === lt.sm.EmbeddedWindowState.SHOWN)lt.ui.openEmbeddedWindow(lt.sm.ActionType.CHAT); else lt.ui.loadEmbeddedWindowFrame()
};
lt.ui.showSiteInvite = function (invite) {
  if (lt.ui.__label !== null && lt.ui.__label.isHidden() && !lt.sm.isActiveChatExists())if (lt.ui.__externalWindow === null || lt.ui.__externalWindow.isClosed()) {
    var trigger = lt.ui.__label.getTriggerEntity();
    if (invite.getFeature().isAvailable()) {
      if (!invite.isLead()) {
        lt.sm.setAutoOpenInitiator();
        trigger.setInitiatorState(lt.sm.InitiatorType.AUTO, invite.getId());
        trigger.setWelcome(false);
        trigger.updateFeature(invite.getFeature());
        trigger.setMemberFirstMessage(invite.getMemberFirstMessage());
        lt.ui.__label.updateView();
        lt.ui.__label.removeEventListener("show", lt.ui.__handleLabelShow);
        lt.ui.__label.show();
        lt.ui.__label.addEventListener("show", lt.ui.__handleLabelShow);
        lt.ext.events.dispatchShowEvent(lt.sm.ActionType.SHOW_INVITE, "embedded", lt.sm.getOpenInitiator());
        lt.ext.events.dispatchShowInviteEvent(lt.sm.getOpenInitiator());
        invite.incrActivationsCount()
      }
    } else {
      var type = invite.isLead() && trigger.getSite().isLeadEnabled() ? lt.sm.ActionType.LEAD : lt.sm.ActionType.OFFLINE;
      if (type === lt.sm.ActionType.LEAD) {
        lt.sm.setAutoOpenInitiator();
        trigger.setInitiatorState(lt.sm.InitiatorType.AUTO, invite.getId());
        trigger.setWelcome(false);
        trigger.updateFeature(invite.getFeature());
        trigger.setMemberFirstMessage(invite.getMemberFirstMessage());
        trigger.setLeadSubmitText(invite.getLeadSubmitText());
        lt.ui.__label.updateView();
        lt.ui.openEmbeddedWindow(type, invite.getMemberFirstMessage(), "", invite.getLeadSubmitText(), false);
        lt.ext.events.dispatchLeadActionEvent(lt.sm.WindowActionType.SHOW, lt.sm.getOpenInitiator(), true);
        invite.incrActivationsCount()
      }
    }
  }
};
lt.ui.showInvite = function (invite, source) {
  if (lt.ui.__label !== null && !lt.sm.isActiveChatExists() && lt.ui.__label.isHidden() && lt.ui.isLabelOnline()) {
    lt.sm.setOpenInitiator(source);
    var trigger = lt.ui.__label.getTriggerEntity();
    trigger.setWelcome(false);
    trigger.updateFeature(invite.getFeature());
    trigger.setMemberFirstMessage(invite.getMemberFirstMessage());
    trigger.setInitiatorState(lt.sm.InitiatorType.INVITE, invite.getMemberFirstMessage());
    lt.ui.__label.updateView();
    lt.ui.__label.removeEventListener("show",
        lt.ui.__handleLabelShow);
    lt.ui.__label.show();
    lt.ui.__label.addEventListener("show", lt.ui.__handleLabelShow);
    lt.ext.events.dispatchShowEvent(lt.sm.ActionType.SHOW_INVITE, "embedded", lt.sm.getOpenInitiator());
    lt.ext.events.dispatchShowInviteEvent(lt.sm.getOpenInitiator())
  }
};
lt.ui.__dispatchUserEvent = function (type, trigger) {
  if ((type !== lt.sm.ActionType.CHAT || !lt.sm.isActiveChatExists()) && type !== lt.sm.ActionType.CALL)lt.ext.events.dispatchShowEvent(type, "external", lt.sm.getOpenInitiator());
  var widget = "";
  var visitorName = "";
  if (trigger instanceof lt.sm.ButtonTrigger)widget = "button"; else if (trigger instanceof lt.sm.LabelTrigger)widget = "label";
  if (type === lt.sm.ActionType.CALL)lt.ext.events.dispatchCallOpenEvent(lt.sm.getOpenInitiator(), widget, trigger.getInitiatorId(), trigger.getCurrentFeature().getGroup().getId(),
      visitorName)
};
lt.ui.openExternalWindow = function (type, trigger, opt_inviteText, opt_question, opt_lead_submit_text, opt_chatAttributes, opt_visitorAttributes, opt_memberId) {
  if (lt.ui.__embeddedWindow !== null)lt.ui.__embeddedWindow.hide(); else if (lt.ui.__label !== null && !lt.ui.__label.isHidden())lt.ui.__label.hide();
  if (lt.ui.__externalWindow === null || lt.ui.__externalWindow.isClosed() || lt.sm.isActiveChatExists())lt.ui.__externalWindow = new lt.ui.ExternalActionWindow(type, trigger, opt_inviteText, opt_question, opt_lead_submit_text, opt_chatAttributes,
      opt_visitorAttributes, opt_memberId);
  lt.ui.__externalWindow.show();
  lt.ui.__dispatchUserEvent(type, trigger)
};
lt.ui.openEmbeddedWindow = function (type, opt_inviteText, opt_question, opt_lead_submit_text, opt_tabs, opt_chatAttributes, opt_visitorAttributes, opt_memberId) {
  var embedType = "embeded-" + type;
  if (lt.ui.__label !== null) {
    if (lt.ui.__embeddedWindow === null || lt.ui.__embeddedWindow.getType() !== embedType) {
      var frame = lt.ui.__label.getFrame();
      if (frame !== null)lt.ui.__embeddedWindow = new lt.ui.EmbeddedActionWindow(embedType, lt.ui.__label, frame, opt_inviteText, opt_question, opt_lead_submit_text, opt_chatAttributes, opt_visitorAttributes,
          opt_memberId);
      if (lt.ui.__embeddedWindow !== null)lt.ui.__embeddedWindow.setType(embedType);
      if (opt_tabs !== false)if (util.indexOf(type, lt.ui.CHAT_TYPES_TO_DISPATCH) !== -1)lt.tabs.dispatch(lt.tabs.EventType.OPEN_CHAT, type)
    }
    lt.ui.__embeddedWindow.show()
  }
  if (type !== lt.sm.ActionType.CHAT)lt.ext.events.dispatchShowEvent(type, "embedded", lt.sm.getOpenInitiator())
};
lt.ui.openEmbeddedWindowAPI = function (type, memberId, opt_question, opt_chatAttributes, opt_visitorAttributes) {
  var account = sm.selectOne(lt.sm.EntityName.ACCOUNT);
  var site = sm.selectOne(lt.sm.EntityName.SITE);
  lt.sm.setApiOpenInitiator();
  function acceptOpenWindow(type, member) {
    if (member instanceof lt.sm.Member) {
      if (type !== lt.sm.ActionType.WELCOME) {
        var feature = new lt.sm.Feature(lt.sm.FeatureType.CHAT, member, group);
        if (memberId === lt.sm.Member.ANY_MEMBER_ID)feature.getMember().setStatus(lt.sm.MemberStatus.ONLINE);
        if (lt.ui.__label !== null) {
          lt.ui.__label.getTriggerEntity().updateFeature(feature);
          lt.ui.__label.updateView()
        }
      }
      if (type === lt.sm.ActionType.OFFLINE && site.isLeadEnabled())type = lt.sm.ActionType.LEAD;
      lt.ui.__label.getTriggerEntity().setInitiatorState(lt.sm.InitiatorType.API, opt_question);
      lt.ui.openEmbeddedWindow(type, "", opt_question, "", false, opt_chatAttributes, opt_visitorAttributes, memberId)
    }
  }

  if (account instanceof lt.sm.Account && site instanceof lt.sm.Site) {
    var group = new lt.sm.Group(lt.sm.Group.ANY_GROUP_ID,
        site);
    var member = new lt.sm.Member(memberId, account);
    if (memberId !== lt.sm.Member.ANY_MEMBER_ID && memberId !== lt.sm.Member.DUMMY_MEMBER_ID)lt.api.populateMember(member, function (member) {
      var type = member.getStatus() === lt.sm.MemberStatus.ONLINE ? lt.sm.ActionType.CHAT : lt.sm.ActionType.OFFLINE;
      acceptOpenWindow(type, member)
    }, util.nop); else acceptOpenWindow(type, member)
  }
};
lt.ui.openWindowAPI = function (type, memberStatus, opt_memberId, opt_question, opt_chatAttributes, opt_visitorAttributes) {
  var account = sm.selectOne(lt.sm.EntityName.ACCOUNT);
  var site = sm.selectOne(lt.sm.EntityName.SITE);
  if (account instanceof lt.sm.Account && site instanceof lt.sm.Site) {
    var group = new lt.sm.Group(lt.sm.Group.ANY_GROUP_ID, site);
    var member = new lt.sm.Member(opt_memberId ? opt_memberId : lt.sm.Member.ANY_MEMBER_ID, account);
    if (member instanceof lt.sm.Member) {
      lt.sm.setApiOpenInitiator();
      function acceptOpenWindow(type, member, group) {
        var feature = new lt.sm.Feature(lt.sm.FeatureType.CHAT, member, group);
        var trigger = new lt.sm.ButtonTrigger(lt.sm.Trigger.API_ID, feature, {});
        trigger.setWelcome(type === lt.sm.ActionType.WELCOME);
        trigger.setInitiatorState(lt.sm.InitiatorType.API, opt_question);
        lt.ui.openExternalWindow(type, trigger, undefined, opt_question, undefined, opt_chatAttributes, opt_visitorAttributes, opt_memberId)
      }

      if (account instanceof lt.sm.Account && site instanceof lt.sm.Site)if (opt_memberId !== lt.sm.Member.ANY_MEMBER_ID &&
          opt_memberId !== lt.sm.Member.DUMMY_MEMBER_ID)lt.api.populateMember(member, function (member) {
        var type = member.getStatus() === lt.sm.MemberStatus.ONLINE ? lt.sm.ActionType.CHAT : lt.sm.ActionType.OFFLINE;
        acceptOpenWindow(type, member, group)
      }, util.nop); else acceptOpenWindow(type, member, group)
    }
  }
};
lt.ui.openCallsWindowAPI = function (opt_groupId) {
  var account = sm.selectOne(lt.sm.EntityName.ACCOUNT);
  var site = sm.selectOne(lt.sm.EntityName.SITE);
  lt.sm.setApiOpenInitiator();
  if (account instanceof lt.sm.Account && site instanceof lt.sm.Site) {
    var group = typeof opt_groupId !== "undefined" ? sm.selectByName("account:" + account.getId() + ":site:" + site.getId() + ":group:" + opt_groupId) : lt.sm.createDummyGroup(site);
    if (group instanceof lt.sm.Group) {
      var member = new lt.sm.Member(lt.sm.Member.ANY_MEMBER_ID, account);
      var feature =
          new lt.sm.Feature(lt.sm.FeatureType.CALL, member, group);
      var trigger = new lt.sm.ButtonTrigger(lt.sm.Trigger.API_CALLS_ID, feature, {});
      trigger.setInitiatorState(lt.sm.InitiatorType.API);
      lt.ui.openExternalWindow(lt.sm.ActionType.CALL, trigger)
    }
  }
};
lt.ui.setCurrentActionType = function (type) {
  if (lt.ui.__embeddedWindow !== null)lt.ui.__embeddedWindow.setType(type)
};
lt.ui.switchFromOnline = function () {
  var site = sm.selectOne(lt.sm.EntityName.SITE);
  if (lt.ui.__label !== null && site instanceof lt.sm.Site) {
    var trigger = lt.ui.__label.getTriggerEntity();
    var feature = trigger.getCurrentFeature();
    feature.getMember().setStatus(lt.sm.MemberStatus.OFFLINE);
    trigger.updateFeature(feature);
    trigger.setWelcome(false);
    var type = trigger.isLeadIsReadyToShow() ? lt.sm.ActionType.LEAD : lt.sm.ActionType.OFFLINE;
    lt.ui.__label.removeChatClasses();
    lt.ui.__label.updateView();
    if (type === lt.sm.ActionType.LEAD) {
      lt.ui.__label.addLeadClasses();
      lt.ui.__label.addLeadClass()
    } else lt.ui.__label.addOfflineClass()
  }
};
lt.ui.switchToOnline = function () {
  var site = sm.selectOne(lt.sm.EntityName.SITE);
  if (lt.ui.__label !== null && site instanceof lt.sm.Site) {
    var trigger = lt.ui.__label.getTriggerEntity();
    var feature = trigger.getCurrentFeature();
    feature.getMember().setStatus(lt.sm.MemberStatus.ONLINE);
    trigger.updateFeature(feature);
    trigger.setWelcome(false);
    lt.ui.__label.removeLeadClasses();
    lt.ui.__label.addChatClasses();
    lt.ui.__label.updateView()
  }
};
lt.ui.switchToOffline = function () {
  var site = lt.ui.__site;
  if (lt.ui.__label !== null && site instanceof lt.sm.Site) {
    var trigger = lt.ui.__label.getTriggerEntity();
    var feature = trigger.getCurrentFeature();
    trigger.setWelcome(false);
    feature.getMember().setStatus(lt.sm.MemberStatus.OFFLINE);
    trigger.updateFeature(feature);
    lt.ui.__label.updateView();
    lt.ui.__label.addOfflineClass()
  }
};
lt.ui.updateLabelFeature = function (feature) {
  if (lt.ui.__label !== null)lt.ui.__label.getTriggerEntity().updateFeature(feature)
};
lt.ui.setInitialScale = function () {
  lt.ui.MOBILE_INITIAL_SCALE = screen.width / document.documentElement.clientWidth;
  var metaLink = document.getElementsByTagName("meta");
  var scale = null;
  for (var i = 0, length = metaLink.length; i < length; i++)if (metaLink[i].name === "viewport") {
    scale = metaLink[i].content.match(/initial-scale=(\d\.?\d?)/);
    if (scale !== null)lt.ui.MOBILE_INITIAL_SCALE = scale[1]
  }
};
lt.ui.setDeviceWidth = function () {
  var metaLink = document.getElementsByTagName("meta");
  for (var i = 0, length = metaLink.length; i < length; i++)if (metaLink[i].name === "viewport" && /width=device-width/.test(metaLink[i].content))lt.ui.isDeviceWidth = true
};
lt.ui.__HTML_BUTTON = '<div class="lt-image">' + '<img class="lt-tmpl-image" />' + "</div>" + '<div class="lt-title lt-tmpl-title"></div>' + '<div class="lt-subtitle lt-tmpl-subtitle"></div>';
lt.ui.__HTML_BUTTON_CLASSES = "lt-button lt-tmpl-status";
lt.ui.__HTML_LABEL = '<div class="lt-invite lt-tmpl-type lt-tmpl-status">' + '<div class="lt-label">' + '<div class="lt-logo"></div>' + '<div class="lt-label-bg">' + '<div class="lt-text"></div>' + "</div>" + "</div>" + '<div class="lt-content">' + '<div class="lt-invite-message">' + '<div class="lt-op-info">' + '<div class="lt-operator">' + '<img class="lt-operator-img lt-tmpl-image" />' + "</div>" + '<div class="lt-title">' + '<div class="lt-name lt-tmpl-name"></div>' + '<div class="lt-depart lt-tmpl-depart"></div>' + "</div>" +
    "</div>" + '<div class="lt-greet">' + '<div class="lt-greet-arrow"></div>' + '<p class="lt-greet-text lt-tmpl-member-first-message"></p>' + "</div>" + '<div class="lt-textarea">' + '<textarea placeholder="" class="lt-tmpl-visitor-question">' + "</textarea>" + "</div>" + '<a class="lt-cancel lt-tmpl-cancel-label"></a>' + '<button type="submit" class="lt-send"></button>' + '<span class="lt-footer">\u0421\u0435\u0440\u0432\u0438\u0441 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d ' + '<a class="lt-link" href="//livetex.ru">LiveTex</a></span>' +
    "</div>" + '<iframe src="" allowtransparency="true" name="' + lt.ui.EMBEDDED_WINDOW_NAME + '"></iframe>' + "</div>" + "</div>";
lt.ui.__HTML_SOUND_LABEL = '<div class="lt-calls"></div>';
lt.ui.__label = null;
lt.ui.__soundLabel = null;
lt.ui.__embeddedWindow = null;
lt.ui.__externalWindow = null;
lt.ui.__site = null;
lt.ui.isActionChatAvailable = function () {
  return lt.ui.__externalWindow === null || lt.ui.__externalWindow !== null && !lt.ui.__externalWindow.isClosed()
};
lt.ui.__handleStartAction = function (event) {
  var site = lt.ui.__site;
  if (site !== null && event instanceof lt.ui.TriggerEvent) {
    var trigger = event.getTriggerEntity();
    var target = event.getTarget();
    var inviteText = event.getInviteText();
    var question = event.getQuestion();
    if (lt.ui.__label.isHidden())lt.sm.setOpenInitiator(lt.sm.translateOpenInitiatorByType(trigger.getInitiatorType()));
    if (target instanceof lt.ui.Label)if (site.getWindowType() !== lt.sm.ActionWindowType.EMBEDDED)if (trigger.isAvailableMemberExists())if (trigger.isSound())lt.ui.openExternalWindow(lt.sm.ActionType.CALL,
        trigger, inviteText, question); else if ((target.isActive() || lt.sm.isAuthChatExists() || lt.sm.isActiveChatExists()) && lt.ui.isActionChatAvailable())lt.ui.openExternalWindow(lt.sm.ActionType.CHAT, trigger, inviteText, question); else lt.ui.openExternalWindow(lt.sm.ActionType.WELCOME, trigger, inviteText, question); else if (site.isLeadEnabled())lt.ui.openExternalWindow(lt.sm.ActionType.LEAD, trigger, trigger.getMemberFirstMessage(), "", trigger.getLeadSubmitText()); else lt.ui.openExternalWindow(lt.sm.ActionType.OFFLINE,
        trigger, inviteText, question); else if (trigger.isAvailableMemberExists())if (trigger.isSound())lt.ui.openExternalWindow(lt.sm.ActionType.CALL, trigger, inviteText, question); else if (target.isActive() || lt.sm.isActiveChatExists())lt.ui.openEmbeddedWindow(lt.sm.ActionType.CHAT, inviteText, question); else lt.ui.openEmbeddedWindow(lt.sm.ActionType.WELCOME, inviteText, question); else if (site.isLeadEnabled())lt.ui.openEmbeddedWindow(lt.sm.ActionType.LEAD); else lt.ui.openEmbeddedWindow(lt.sm.ActionType.OFFLINE, inviteText,
        question); else if (trigger.isAvailableMemberExists())if (trigger.isSound())lt.ui.openExternalWindow(lt.sm.ActionType.CALL, trigger, inviteText, question); else lt.ui.openExternalWindow(lt.sm.ActionType.CHAT, trigger, inviteText, question); else if (site.isLeadEnabled())lt.ui.openExternalWindow(lt.sm.ActionType.LEAD, trigger, inviteText, question); else lt.ui.openExternalWindow(lt.sm.ActionType.OFFLINE, trigger, inviteText, question)
  }
};
lt.ui.__handleTabsInviteEvent = function (event, type) {
  if (lt.ui.__label !== null && lt.ui.__label.getTriggerEntity().getCurrentFeature().getMember().getStatus() !== lt.sm.MemberStatus.OFFLINE)lt.ui.openEmbeddedWindow(type)
};
lt.ui.__handleTabsToggleEvent = function (event, data) {
  if (lt.ui.__label !== null)if (event === lt.tabs.EventType.HIDE) {
    if (!lt.ui.__label.isHidden())lt.ui.__label.hide()
  } else if (event === lt.tabs.EventType.SHOW)if (lt.ui.__label.isHidden() && lt.ui.__site.getWindowType() === lt.sm.ActionWindowType.EMBEDDED)if (!lt.sm.isActiveChatExists())lt.ui.__label.show(); else lt.ui.openEmbeddedWindow(lt.sm.ActionType.CHAT)
};
lt.ui.__createButtonTriggers = function (buttons) {
  var result = [];
  var target = null;
  for (var i = 0, l = buttons.length; i < l; i += 1) {
    target = lt.ui.__drawButton(buttons[i]);
    if (target !== null)result.push(new lt.ui.Button(target, buttons[i]))
  }
  return result
};
lt.ui.__createLabelTriggers = function (labels) {
  var result = [];
  var target = null;
  for (var i = 0, l = labels.length; i < l; i += 1)if (labels[i].isSound()) {
    if (lt.ui.__soundLabel === null) {
      target = lt.ui.__drawLabel(true);
      if (target !== null) {
        lt.ui.__soundLabel = new lt.ui.Label(target, labels[i]);
        result.push(lt.ui.__soundLabel)
      }
    }
  } else if (lt.ui.__label === null) {
    target = lt.ui.__drawLabel(false);
    if (target !== null) {
      lt.ui.__label = new lt.ui.Label(target, labels[i]);
      lt.ui.__label.addEventListener("show", lt.ui.__handleLabelShow);
      lt.ui.__label.addEventListener("hide",
          lt.ui.__handleLabelHide);
      result.push(lt.ui.__label)
    }
  }
  return result
};
lt.ui.__handleLabelHide = function () {
  lt.tabs.dispatch(lt.tabs.EventType.HIDE)
};
lt.ui.__handleLabelShow = function () {
  lt.tabs.dispatch(lt.tabs.EventType.SHOW)
};
lt.ui.__createTriggers = function (buttons, labels) {
  var result = [];
  var buttonTriggers = lt.ui.__createButtonTriggers(buttons);
  for (var i = 0, l = buttonTriggers.length; i < l; i++)result.push(buttonTriggers[i]);
  var labelTriggers = lt.ui.__createLabelTriggers(labels);
  for (var j = 0, k = labelTriggers.length; j < k; j++)result.push(labelTriggers[j]);
  return result
};
lt.ui.__drawButton = function (button) {
  var node = document.getElementById(button.getId());
  if (node !== null) {
    node.className = lt.ui.__HTML_BUTTON_CLASSES;
    node.innerHTML = lt.ui.__HTML_BUTTON
  }
  return node
};
lt.ui.__drawLabel = function (isSound) {
  var node = document.createElement("div");
  node.innerHTML = isSound ? lt.ui.__HTML_SOUND_LABEL : lt.ui.__HTML_LABEL;
  return document.body.appendChild(node.firstChild)
};
lt.ui.resetView = function () {
  if (lt.ui.__externalWindow !== null) {
    lt.ui.__externalWindow.hide();
    lt.ui.__externalWindow = null
  }
  if (lt.ui.__embeddedWindow !== null) {
    lt.ui.__embeddedWindow.hide();
    lt.ui.__embeddedWindow = null
  }
  if (lt.ui.__label !== null) {
    lt.ui.__label.destroy();
    lt.ui.__label = null
  }
};
lt.ui.loadEmbeddedWindowFrame = function () {
  var embedType = "embeded-chat";
  if (lt.ui.__label !== null)if (lt.ui.__embeddedWindow === null || lt.ui.__embeddedWindow.getType() !== embedType) {
    var frame = lt.ui.__label.getFrame();
    if (frame !== null)lt.ui.__embeddedWindow = new lt.ui.EmbeddedActionWindow(embedType, lt.ui.__label, frame);
    if (lt.ui.__embeddedWindow !== null)lt.ui.__embeddedWindow.setType(embedType)
  }
};
lt.ui.hideLabel = function () {
  if (lt.ui.__label !== null)lt.ui.__label.hide()
};
lt.ui.isLabelShown = function () {
  return lt.sm.getEmbeddedWindowState() === lt.sm.EmbeddedWindowState.SHOWN
};
lt.ui.showChatLabel = function () {
  if (lt.ui.__label !== null)lt.ui.__label.unstash()
};
lt.ui.hideChatLabel = function () {
  if (lt.ui.__label !== null)lt.ui.__label.stash()
};
lt.ui.showSoundLabel = function () {
  if (lt.ui.__soundLabel !== null)lt.ui.__soundLabel.unstash()
};
lt.ui.hideSoundLabel = function () {
  if (lt.ui.__soundLabel !== null)lt.ui.__soundLabel.stash()
};
lt.ui.sendMessage = function (text) {
  var name = "";
  if (lt.ui.__embeddedWindow !== null)name = lt.ui.EMBEDDED_WINDOW_NAME;
  if (lt.ui.__externalWindow !== null)name = lt.ui.EXTERNAL_WINDOW_NAME;
  if (name !== "")lt.xdm.postWindowMessage(name, lt.xdm.makeMessage("send", {text: text}))
};
lt.ui.isLabelOnline = function () {
  return lt.ui.__label.getTriggerEntity().isMemberIsAvailable()
};
lt.ui.isOfflineGroupsEnabled = function () {
  return lt.ui.__site !== null && lt.ui.__site.isOfflineGroupsEnabled()
};
lt.ui.isCallbackEnabled = function () {
  return lt.ui.__site !== null && lt.ui.__site.isCallbackEnabled()
};
lt.ui.acceptHideLabelActionEvent = function () {
  if (lt.ui.__label !== null)lt.ui.__label.acceptHideActionEvent()
};
lt.ui.Trigger = function (target, entity, templateSign) {
  ui.Widget.call(this, target);
  var self = this;
  this.__template = new ui.templates.TunaTemplate(target);
  this.__template.setTemplateSign(templateSign);
  this.__triggerEntity = entity;
  this._dispatchStartActionEvent = function (event) {
    self.dispatch(new lt.ui.TriggerEvent(self, lt.ui.TriggerEvent.START_ACTION))
  };
  this.__isActive = false
};
util.inherits(lt.ui.Trigger, ui.Widget);
lt.ui.Trigger.prototype.getTriggerEntity = function () {
  return this.__triggerEntity
};
lt.ui.Trigger.prototype.updateView = function () {
  if (lt.ui.IS_MOBILE_CLIENT && this.getTriggerEntity().isSound())this.disable(); else if (this.getTriggerEntity().isReadyToShow()) {
    this.enable();
    this.__template.processTransform(this.__triggerEntity.serializeData());
    this._processCustomViewUpdate()
  } else this.disable()
};
lt.ui.Trigger.prototype._processCustomViewUpdate = function () {
};
lt.ui.Trigger.prototype.init = function () {
  this.__template.init();
  ui.Widget.prototype.init.call(this)
};
lt.ui.Trigger.prototype.destroy = function () {
  this.__template.destroy();
  ui.Widget.prototype.destroy.call(this)
};
lt.ui.Trigger.prototype.enable = function () {
  util.dom.removeClass(this.getTarget(), "lt-hidden")
};
lt.ui.Trigger.prototype.disable = function () {
  util.dom.addClass(this.getTarget(), "lt-hidden")
};
lt.ui.TriggerEvent = function (trigger, type, opt_inviteText, opt_question) {
  ui.WidgetEvent.call(this, trigger, type);
  this.__trigger = trigger;
  this.__inviteText = opt_inviteText || "";
  this.__question = opt_question || ""
};
util.inherits(lt.ui.TriggerEvent, ui.WidgetEvent);
lt.ui.TriggerEvent.START_ACTION = "start-action";
lt.ui.TriggerEvent.prototype.getTriggerEntity = function () {
  return this.__trigger.getTriggerEntity()
};
lt.ui.TriggerEvent.prototype.getTrigger = function () {
  return this.__trigger
};
lt.ui.TriggerEvent.prototype.getInviteText = function () {
  return this.__inviteText
};
lt.ui.TriggerEvent.prototype.getQuestion = function () {
  return this.__question
};
lt.ui.Button = function (target, entity) {
  lt.ui.Trigger.call(this, target, entity, lt.ui.Button.__TEMPLATE);
  this.__button = new ui.buttons.Button(target)
};
util.inherits(lt.ui.Button, lt.ui.Trigger);
lt.ui.Button.__TEMPLATE = {"text@lt-tmpl-title:title": {}, "text@lt-tmpl-subtitle:subtitle": {}, "attr@lt-tmpl-image:image_url": {"name": "src"}, "attr@lt-tmpl-image:title": {"name": "alt"}, "case@lt-tmpl-size:size": {"cases": {"big": "lt-big", "medium": "lt-medium", "small": "lt-small"}}, "case@lt-tmpl-type:type": {"cases": {"chat": "lt-chat", "call": "lt-call"}}, "case@lt-tmpl-status:status": {"cases": {"online": "lt-online", "offline": "lt-offline"}}};
lt.ui.Button.prototype.init = function () {
  this.__button.init();
  this.__button.addEventListener(ui.buttons.ButtonEvent.CLICK, this._dispatchStartActionEvent);
  lt.ui.Trigger.prototype.init.call(this)
};
lt.ui.Button.prototype.destroy = function () {
  this.__button.removeEventListener(ui.buttons.ButtonEvent.CLICK, this._dispatchStartActionEvent);
  this.__button.destroy();
  lt.ui.Trigger.prototype.destroy.call(this)
};
lt.ui.Label = function (target, entity) {
  lt.ui.Trigger.call(this, target, entity, lt.ui.Label.__TEMPLATE);
  this.__originalOffsetTop = 0;
  this.__originalOffsetLeft = 0;
  this.__labelContentHeight = 0;
  this.__labelContentWidth = 0;
  this.__label = new ui.buttons.Button(target);
  this.__labelNode = util.dom.getElementByClassName("lt-label", target);
  this.__opArrowNode = util.dom.getElementByClassName("lt-greet-arrow", target);
  this.__opImgNode = util.dom.getElementByClassName("lt-operator-img", target);
  this.__cancelBtnNode = util.dom.getElementByClassName("lt-cancel",
      target);
  this.__btnSendNode = util.dom.getElementByClassName("lt-send", target);
  this.__isActive = false;
  this.__isDeclined = false
};
util.inherits(lt.ui.Label, lt.ui.Trigger);
lt.ui.EmbeddedActionWindow.SEND_BUTTON_CLASS = "lt-send";
lt.ui.EmbeddedActionWindow.CANCEL_BUTTON_CLASS = "lt-cancel";
lt.ui.EmbeddedActionWindow.MEMBER_FIRST_MESSAGE_CLASS = "lt-tmpl-member-first-message";
lt.ui.EmbeddedActionWindow.VISITOR_FIRST_MESSAGE_CLASS = "lt-tmpl-visitor-question";
lt.ui.Label.__LABEL_CLASS = "lt-label";
lt.ui.Label.FRAME_CLASS = "lt-frame";
lt.ui.Label.ACTIVE_CLASS = "lt-active";
lt.ui.Label.__BG_CLASS = "lt-label-bg";
lt.ui.Label.__TEMPLATE = {"text@lt-tmpl-title:title": {}, "text@lt-tmpl-subtitle:subtitle": {}, "attr@lt-tmpl-image:image_url": {"name": "src"}, "attr@lt-tmpl-image:title": {"name": "alt"}, "text@lt-tmpl-name:name": {}, "text@lt-tmpl-depart:depart": {}, "case@lt-tmpl-type:type": {"cases": {"chat": "lt-chat", "call": "lt-calls"}}, "case@lt-tmpl-status:status": {"cases": {"online": "lt-online", "offline": "lt-offline", "lead": "lt-lead"}}, "text@lt-tmpl-member-first-message:member-first-message": {}, "attr@lt-tmpl-visitor-question:visitor-question": {name: "placeholder"},
  "text@lt-tmpl-cancel-label:cancel-label": {}};
lt.ui.Label.prototype.getFrame = function () {
  return this.getTarget().getElementsByTagName("iframe")[0] || null
};
lt.ui.Label.prototype.init = function () {
  var button = util.dom.getElementByClassName(lt.ui.Label.__LABEL_CLASS, this.getTarget());
  if (button !== null)this.__label = new ui.buttons.Button(button);
  this.__label.init();
  this.__label.addEventListener(ui.buttons.ButtonEvent.CLICK, this._dispatchStartActionEvent);
  if (lt.ui.IS_IE_QUIRKS_MODE)this.__initQuirksMode();
  this.__setOriginalOffset();
  var trigger = this.getTriggerEntity();
  if (lt.ui.isMobileViewEnable() && !trigger.isSound() && trigger.isReadyToShow())this.__initMobileView();
  lt.ui.Trigger.prototype.init.call(this)
};
lt.ui.Label.prototype.destroy = function () {
  this.__label.removeAllEventListeners();
  var parent = this.getTarget().parentNode;
  if (parent)parent.removeChild(this.getTarget());
  this.__label.destroy();
  this.__label = null;
  lt.ui.Trigger.prototype.destroy.call(this)
};
lt.ui.Label.prototype.show = function () {
  util.dom.addClass(this.getTarget(), lt.ui.Label.ACTIVE_CLASS);
  lt.sm.setEmbeddedWindowState(lt.sm.EmbeddedWindowState.SHOWN);
  if (!lt.ui.isMobileViewEnable())this.__setPosition();
  if (lt.ui.IS_IE_QUIRKS_MODE) {
    this.__setContentSizes();
    this.__setQuirksModePosition()
  }
  if (!this.__isActive) {
    this.__isActive = true;
    this.__label.removeEventListener(ui.buttons.ButtonEvent.CLICK, this._dispatchStartActionEvent);
    var self = this;
    this.__label.addEventListener(ui.buttons.ButtonEvent.CLICK,
        function () {
          if (self.isHidden()) {
            self.dispatch("show");
            self.__acceptShowActionEvent()
          } else self.dispatch("hide");
          self.toggle()
        });
    this.__setSendButtonEventListener();
    this.__setCancelButtonEventListener()
  }
};
lt.ui.Label.prototype.hide = function (opt_isDeclinedFromAction) {
  util.dom.removeClass(this.getTarget(), lt.ui.Label.ACTIVE_CLASS);
  lt.sm.setEmbeddedWindowState(lt.sm.EmbeddedWindowState.HIDDEN);
  if (!lt.ui.isMobileViewEnable()) {
    var self = this;
    setTimeout(function () {
      self.__setPosition();
      self.__resetContentSizes();
      if (lt.ui.IS_IE_QUIRKS_MODE)self.__setQuirksModePosition()
    }, 650)
  }
  if (!this.__isDeclined && !opt_isDeclinedFromAction)this.acceptHideActionEvent();
  this.__isDeclined = false
};
lt.ui.Label.prototype.__getActionEventType = function () {
  var type = null;
  if (this.isAction())if (this.isOffline())type = lt.ext.events.EventType.OFFLINE_ACTION; else if (this.isLead())type = lt.ext.events.EventType.LEAD_ACTION; else {
    if (this.__triggerEntity.isWelcome())type = lt.ext.events.EventType.CHAT_WELCOME_ACTION
  } else type = lt.ext.events.EventType.CHAT_INVITATION_ACTION;
  return type
};
lt.ui.Label.prototype.__makeActionEventParams = function (actionEventType) {
  var source = undefined;
  var isEmbedded = undefined;
  if (actionEventType !== lt.ext.events.EventType.CHAT_WELCOME_ACTION) {
    source = lt.sm.getOpenInitiator();
    isEmbedded = true
  }
  return{source: source, isEmbedded: isEmbedded}
};
lt.ui.Label.prototype.__acceptShowActionEvent = function () {
  var actionEventType = this.__getActionEventType();
  if (actionEventType !== null) {
    var params = this.__makeActionEventParams(actionEventType);
    lt.ext.events.dispatchActionEvent(actionEventType, lt.sm.WindowActionType.SHOW, params["source"], params["isEmbedded"])
  }
};
lt.ui.Label.prototype.acceptHideActionEvent = function () {
  var actionEventType = this.__getActionEventType();
  if (actionEventType !== null) {
    var params = this.__makeActionEventParams(actionEventType);
    lt.ext.events.dispatchActionEvent(actionEventType, lt.sm.WindowActionType.HIDE, params["source"], params["isEmbedded"])
  }
};
lt.ui.Label.prototype.__acceptDeclineActionEvent = function () {
  var actionEventType = this.__getActionEventType();
  if (actionEventType !== null)lt.ext.events.dispatchActionEvent(actionEventType, lt.sm.WindowActionType.DECLINE, lt.sm.getOpenInitiator(), true)
};
lt.ui.Label.prototype.isHidden = function () {
  return!util.dom.hasClass(this.getTarget(), lt.ui.Label.ACTIVE_CLASS)
};
lt.ui.Label.prototype.isActive = function () {
  return this.__isActive
};
lt.ui.Label.prototype.showAction = function () {
  util.dom.addClass(this.getTarget(), lt.ui.Label.FRAME_CLASS)
};
lt.ui.Label.prototype.isAction = function () {
  return util.dom.hasClass(this.getTarget(), lt.ui.Label.FRAME_CLASS)
};
lt.ui.Label.prototype.__setSendButtonEventListener = function () {
  var sendButtonNode = util.dom.getElementByClassName(lt.ui.EmbeddedActionWindow.SEND_BUTTON_CLASS, this.getTarget());
  var self = this;

  function handleClick() {
    var memberMessage = util.dom.getElementByClassName(lt.ui.EmbeddedActionWindow.MEMBER_FIRST_MESSAGE_CLASS, self.getTarget()).innerHTML;
    var visitorQuestion = util.trim(util.dom.getElementByClassName(lt.ui.EmbeddedActionWindow.VISITOR_FIRST_MESSAGE_CLASS, self.getTarget()).value);
    if (visitorQuestion !==
        "" || lt.ui.isMobileViewEnable()) {
      lt.ext.events.dispatchSendInviteEvent(lt.sm.getOpenInitiator());
      self.dispatch(new lt.ui.TriggerEvent(self, lt.ui.TriggerEvent.START_ACTION, memberMessage, visitorQuestion))
    }
  }

  if (sendButtonNode !== null)util.dom.addEventListener(sendButtonNode, "click", handleClick)
};
lt.ui.Label.prototype.__setCancelButtonEventListener = function () {
  var cancelButtonNode = util.dom.getElementByClassName(lt.ui.EmbeddedActionWindow.CANCEL_BUTTON_CLASS, this.getTarget());
  var self = this;

  function handleClick() {
    self.__isDeclined = true;
    self.__acceptDeclineActionEvent();
    self.hide()
  }

  if (cancelButtonNode !== null)util.dom.addEventListener(cancelButtonNode, "click", handleClick)
};
lt.ui.Label.prototype.addLeadClasses = function () {
  var label = this.getTarget();
  util.dom.addClass(label, "lt-lead");
  var parentElement = util.dom.getElementByClassName(lt.ui.Label.__BG_CLASS, this.getTarget());
  if (parentElement !== null) {
    var elements = parentElement.getElementsByTagName("div");
    if (elements.length !== 0) {
      if (!util.dom.hasClass(elements[0], "lt-text"))util.dom.addClass(elements[0], "lt-text");
      util.dom.addClass(elements[0], "lt-text-" + this.getTriggerEntity().getLeadMessageNo());
      util.dom.addClass(this.getTarget(),
          "lt-text-" + this.getTriggerEntity().getLeadMessageNo())
    }
  }
};
lt.ui.Label.prototype.addLeadClass = function () {
  util.dom.addClass(this.getTarget(), "lt-lead")
};
lt.ui.Label.prototype.addChatClasses = function () {
  util.dom.addClass(this.getTarget(), "lt-online")
};
lt.ui.Label.prototype.addOfflineClass = function () {
  util.dom.addClass(this.getTarget(), "lt-offline")
};
lt.ui.Label.prototype.removeChatClasses = function () {
  util.dom.removeClass(this.getTarget(), "lt-online");
  util.dom.removeClass(this.getTarget(), "lt-offline");
  util.dom.removeClass(this.getTarget(), "lt-chat")
};
lt.ui.Label.prototype.removeLeadClasses = function () {
  var parentElement = util.dom.getElementByClassName(lt.ui.Label.__BG_CLASS, this.getTarget());
  if (parentElement !== null) {
    var elements = parentElement.getElementsByTagName("div");
    if (elements.length !== 0)elements[0].className = ""
  }
};
lt.ui.Label.prototype.isLead = function () {
  var entity = this.__triggerEntity;
  return!entity.isAvailableMemberExists() && entity.getSite().isLeadEnabled()
};
lt.ui.Label.prototype.isOffline = function () {
  var entity = this.__triggerEntity;
  return!entity.isAvailableMemberExists() && !entity.getSite().isLeadEnabled()
};
lt.ui.Label.prototype.getWidth = function () {
  return this.getTarget().clientWidth
};
lt.ui.Label.prototype.getHeight = function () {
  return this.getTarget().clientHeight
};
lt.ui.Label.prototype._processCustomViewUpdate = function () {
  var entity = this.getTriggerEntity();
  if (!entity.isSound())if (entity.isLeadIsReadyToShow()) {
    this.removeChatClasses();
    this.addLeadClasses()
  } else this.removeLeadClasses();
  if (!lt.ui.isMobileViewEnable())this.__setPosition();
  util.dom.addClass(this.getTarget(), "lt-animate")
};
lt.ui.Label.prototype.getOffset = function () {
  return this.getTriggerEntity().getOffset()
};
lt.ui.Label.prototype.getOffsetMeasure = function () {
  return this.getTriggerEntity().getOffsetMeasure()
};
lt.ui.Label.prototype.__setPosition = function () {
  if (lt.ui.isMobileViewEnable())return;
  switch (this.getTriggerEntity().getLocation()) {
    case "left":
      this.__setVerticalPosition();
      break;
    case "right":
      this.__setVerticalPosition();
      break;
    case "top":
      this.__setHorizontalPosition();
      break;
    case "bottom":
      this.__setHorizontalPosition();
      break
  }
};
lt.ui.Label.prototype.__setOriginalOffset = function () {
  this.__originalOffsetTop = this.getTarget().offsetTop;
  this.__originalOffsetLeft = this.getTarget().offsetLeft
};
lt.ui.Label.prototype.__initQuirksMode = function () {
  this.getTarget().style.position = "absolute";
  util.dom.addEventListener(window, "scroll", util.bind(this.__setQuirksModePosition, this))
};
lt.ui.Label.prototype.__setQuirksModePosition = function () {
  this.getTarget().style.top = this.__originalOffsetTop + util.dom.getWindowScrollTop() - this.__labelContentHeight;
  this.getTarget().style.left = this.__originalOffsetLeft + util.dom.getWindowScrollLeft() - this.__labelContentWidth
};
lt.ui.Label.prototype.__setContentSizes = function () {
  var entity = this.getTriggerEntity();
  var content = util.dom.getElementByClassName("lt-content");
  if (!entity.isSound() && content !== undefined)if (entity.getLocation() == "right")this.__labelContentWidth = content.offsetWidth; else if (entity.getLocation() == "bottom")this.__labelContentHeight = content.offsetHeight
};
lt.ui.Label.prototype.__resetContentSizes = function () {
  this.__labelContentHeight = 0;
  this.__labelContentWidth = 0
};
lt.ui.Label.prototype.__initMobileView = function () {
  lt.ui.setInitialScale();
  this.__initMobileCrutches();
  if (this.getTriggerEntity().isLeadIsReadyToShow()) {
    this.__setMobileLead();
    this.__setLabelText("\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c");
    this.__setButtonText("\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")
  } else {
    this.__setLabelText("\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441");
    this.__setButtonText("\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441")
  }
};
lt.ui.Label.prototype.__initMobileCrutches = function () {
  if (lt.ui.isAndroid())this.__initAndroidCrutch(); else if (lt.ui.isIOS())this.__initIOSCrutch()
};
lt.ui.Label.prototype.__initIOSCrutch = function () {
  this.getTarget().style.width = "100%";
  util.dom.addClass(this.getTarget(), "lt-ios");
  var self = this;
  util.dom.addEventListener(window, "gesturechange", function () {
    setTimeout(function () {
      self.__mobileLabelResize()
    }, 200)
  });
  util.dom.addEventListener(window, "resize", function () {
    setTimeout(function () {
      self.__mobileLabelResize()
    }, 200)
  });
  this.__mobileLabelResize()
};
lt.ui.Label.prototype.__initAndroidCrutch = function () {
  var self = this;
  this.getTarget().style.top = "80px";
  if (lt.ui.isOldAndroid()) {
    util.dom.addClass(this.getTarget(), "android-fix");
    util.dom.addEventListener(window, "scroll", function () {
      self.__androidFixedPosition()
    })
  } else util.dom.addClass(this.getTarget(), "android-standart");
  if (this.__isDeviceWidthViewport())util.dom.addClass(this.getTarget(), "android-dw")
};
lt.ui.Label.prototype.__androidFixedPosition = function () {
  this.getTarget().style.top = String(window.scrollY + 80) + "px";
  this.getTarget().style.left = String(window.scrollX) + "px"
};
lt.ui.Label.prototype.__isDeviceWidthViewport = function () {
  lt.ui.MOBILE_INITIAL_SCALE = screen.width / document.documentElement.clientWidth;
  var metaLink = document.getElementsByTagName("meta");
  for (var i = 0, length = metaLink.length; i < length; i++)if (metaLink[i].name === "viewport")return/width=device-width/.test(metaLink[i].content);
  return false
};
lt.ui.Label.prototype.__setLabelText = function (text) {
  if (this.__labelNode !== null)this.__labelNode.innerHTML = text
};
lt.ui.Label.prototype.__setButtonText = function (text) {
  if (this.__btnSendNode !== null)this.__btnSendNode.innerHTML = text
};
lt.ui.Label.prototype.__setMobileLead = function () {
  var site = sm.selectOne(lt.sm.EntityName.SITE);
  if (site instanceof lt.sm.Site && site.getLeadFaceType() === 0)util.dom.addClass(this.getTarget(), "lt-no-photo");
  var sayText = util.dom.getElementByClassName("lt-greet-text");
  sayText.innerHTML = site.getLeadMemberMessage()
};
lt.ui.Label.prototype.__getZoom = function () {
  return window.innerWidth / document.documentElement.clientWidth / lt.ui.MOBILE_INITIAL_SCALE
};
lt.ui.Label.prototype.__mobileLabelResize = function () {
  var zoom = this.__getZoom();
  if (zoom !== lt.ui.zoomScale) {
    lt.ui.zoomScale = zoom;
    var fontSize = window.orientation === 0 ? 13 : 10;
    if (!util.dom.hasClass(this.getTarget(), "active"))this.getTarget().style.height = Math.round(33 * zoom) + "px";
    this.getTarget().style.fontSize = Math.round(fontSize * zoom) + "px";
    if (this.__labelNode !== null) {
      this.__labelNode.style.height = Math.round(33 * zoom) + "px";
      this.__labelNode.style.width = Math.round(310 * zoom) + "px"
    }
    if (this.__opArrowNode !== null) {
      this.__opArrowNode.style.width =
          Math.round(fontSize * zoom) + "px";
      this.__opArrowNode.style.height = Math.round(fontSize * zoom) + "px";
      if (this.getTriggerEntity().isLeadIsReadyToShow())this.__opArrowNode.style.left = "-" + Math.round(fontSize * zoom) + "px"; else this.__opArrowNode.style.top = "-" + Math.round(fontSize * zoom) + "px"
    }
    if (this.__opImgNode !== null)this.__opImgNode.style.border = String(Math.round(3 * zoom)) + "px solid #e7e7e7";
    if (this.__cancelBtnNode !== null) {
      this.__cancelBtnNode.style.height = Math.round(30 * zoom) + "px";
      this.__cancelBtnNode.style.width =
          Math.round(30 * zoom) + "px"
    }
  }
};
lt.ui.Label.prototype.__setVerticalPosition = function () {
  if (!this.__isVerticalOffsetOutOfWindow())this.__setTopCoordinate(this.getOffset()); else this.__setBottomCoordinate(0)
};
lt.ui.Label.prototype.__setHorizontalPosition = function () {
  if (!this.__isHorizontalOffsetOutOfWindow())this.__setLeftCoordinate(this.getOffset()); else this.__setRightCoordinate(0)
};
lt.ui.Label.prototype.__isVerticalOffsetOutOfWindow = function () {
  var offset = this.getOffset();
  var windowHeight = util.getWindowHeight();
  if (this.getOffsetMeasure() === "%")offset = windowHeight * offset / 100;
  return offset + this.getHeight() > windowHeight
};
lt.ui.Label.prototype.__isHorizontalOffsetOutOfWindow = function () {
  var offset = this.getOffset();
  var windowWidth = util.getWindowWidth();
  if (this.getOffsetMeasure() === "%")offset = windowWidth * offset / 100;
  return offset + this.getWidth() > windowWidth
};
lt.ui.Label.prototype.__setTopCoordinate = function (value) {
  this.getTarget().style.bottom = "auto";
  this.getTarget().style.top = String(value) + this.getOffsetMeasure()
};
lt.ui.Label.prototype.__setBottomCoordinate = function (value) {
  this.getTarget().style.top = "auto";
  this.getTarget().style.bottom = String(value) + this.getOffsetMeasure()
};
lt.ui.Label.prototype.__setLeftCoordinate = function (value) {
  this.getTarget().style.right = "auto";
  this.getTarget().style.left = String(value) + this.getOffsetMeasure()
};
lt.ui.Label.prototype.__setRightCoordinate = function (value) {
  this.getTarget().style.left = "auto";
  this.getTarget().style.right = String(value) + this.getOffsetMeasure()
};
lt.ui.Label.prototype.stash = function () {
  this.getTarget().style.display = "none"
};
lt.ui.Label.prototype.unstash = function () {
  this.getTarget().style.display = "block"
};
lt.ui.cobrowse.COBROWSE_SELECT_AREA_ID = "livetex-cobrowse-select-area";
lt.ui.cobrowse.COBROWSE_SELECT_BOX_ID = "livetex-cobrowse-select-box";
lt.ui.cobrowse.COBROWSE_SELECT_CLOSE_ID = "livetex-cobrowse-close-link";
lt.ui.cobrowse.COBROWSE_SELECT_CLOSE_IMG_ID = "livetex-cobrowse-close-img";
lt.ui.cobrowse.COBROWSE_COOKIE = "lt-cobrowse";
lt.ui.cobrowse.__COBROWSE_COOKIE_TTL = 7E3;
lt.ui.cobrowse.__COBROWSE_INTERVAL = 1E3;
lt.ui.cobrowse.START_COBROWSE_EVENT = "_s_";
lt.ui.cobrowse.__IS_FIRST_UPDATE = true;
lt.ui.cobrowse.__enabledInThisTab = false;
lt.ui.cobrowse.__enabled = false;
lt.ui.cobrowse.__mousePosition = [0, 0];
lt.ui.cobrowse.checkCobrowseTab = function (tab) {
  var cobrowseTab = lt.ui.cobrowse.getCobrowseTab();
  if (tab === cobrowseTab || util.indexOf(cobrowseTab, lt.tabs.getTabList()) === -1) {
    util.removeCookie(lt.ui.cobrowse.COBROWSE_COOKIE);
    if (lt.ui.cobrowse.__enabled)lt.tabs.dispatch(lt.ui.cobrowse.START_COBROWSE_EVENT)
  }
};
lt.ui.cobrowse.getCobrowseTab = function () {
  return util.getCookie(lt.ui.cobrowse.COBROWSE_COOKIE)
};
lt.ui.cobrowse.checkCobrowsePossibility = function () {
  var cobrowseName = lt.tabs.getTabsCount() > 1 || lt.ui.isMobileViewEnable() ? lt.sm.CobrowseType.TOO_MANY_TABS : lt.sm.CobrowseType.ACTIVE;
  var visitor = sm.selectOne(lt.sm.EntityName.VISITOR);
  if (visitor instanceof lt.sm.Visitor) {
    var cobrowse = new lt.sm.Cobrowse(cobrowseName, visitor);
    lt.api.sendCobrowsePossibility(cobrowse)
  }
};
lt.ui.cobrowse.startCobrowse = function () {
  lt.ui.cobrowse.__enabled = true;
  if (!lt.ui.cobrowse.__enabledInThisTab && lt.tabs.isLast() && util.getCookie(lt.ui.cobrowse.COBROWSE_COOKIE) === "") {
    util.setCookie(lt.ui.cobrowse.COBROWSE_COOKIE, lt.tabs.TAB_ID, lt.ui.cobrowse.__COBROWSE_COOKIE_TTL);
    lt.ui.cobrowse.__enabledInThisTab = true;
    var cobrowse = sm.selectOne(lt.sm.EntityName.COBROWSE);
    if (cobrowse === null) {
      var visitor = sm.selectOne(lt.sm.EntityName.VISITOR);
      if (visitor instanceof lt.sm.Visitor)sm.save(new lt.sm.Cobrowse(lt.sm.CobrowseType.ACTIVE,
          visitor))
    }
    lt.ui.cobrowse.deselectArea();
    var body = document.getElementsByTagName("body")[0];
    util.dom.addEventListener(body, "mousemove", lt.ui.cobrowse.__grabMousePosition);
    setTimeout(lt.ui.cobrowse.updateCobrowseState, lt.ui.cobrowse.__COBROWSE_INTERVAL)
  }
};
lt.ui.cobrowse.stopCobrowse = function () {
  lt.ui.cobrowse.__enabled = false;
  if (lt.ui.cobrowse.__enabledInThisTab) {
    lt.ui.cobrowse.__IS_FIRST_UPDATE = true;
    var body = document.getElementsByTagName("body")[0];
    util.dom.removeEventListener(body, "mousemove", lt.ui.cobrowse.__grabMousePosition);
    lt.ui.cobrowse.__enabledInThisTab = false;
    util.removeCookie(lt.ui.cobrowse.COBROWSE_COOKIE);
    lt.ui.cobrowse.deselectArea(true)
  }
};
lt.ui.cobrowse.gotoLink = function (cobrowse) {
  if (lt.ui.cobrowse.__enabledInThisTab)location.href = cobrowse.getUrl()
};
lt.ui.cobrowse.selectArea = function (cobrowse) {
  if (lt.ui.cobrowse.__enabledInThisTab) {
    lt.ui.cobrowse.deselectArea(true);
    lt.ui.cobrowse.__selectedArea = cobrowse.getSelectedArea();
    var elements = lt.ui.cobrowse.__getAreaElements();
    var area = lt.ui.cobrowse.__calculateSelectArea();
    if (lt.ui.cobrowse.__assertSelectArea(area)) {
      lt.ui.cobrowse.__setSelectAreaEvents(elements);
      lt.ui.cobrowse.__positionSelectAreaElements(elements, area);
      lt.ui.cobrowse.__scrollToSelectArea(area)
    } else lt.ui.cobrowse.deselectArea()
  }
};
lt.ui.cobrowse.__onResizeSelectArea = function () {
  var elements = lt.ui.cobrowse.__getAreaElements();
  var area = lt.ui.cobrowse.__calculateSelectArea();
  lt.ui.cobrowse.__positionSelectAreaElements(elements, area)
};
lt.ui.cobrowse.__getAreaElements = function () {
  var divArea1 = lt.ui.cobrowse.__getOrCreateElement("div", lt.ui.cobrowse.COBROWSE_SELECT_AREA_ID + "1", "lt-shadow-field");
  var divArea2 = lt.ui.cobrowse.__getOrCreateElement("div", lt.ui.cobrowse.COBROWSE_SELECT_AREA_ID + "2", "lt-shadow-field");
  var divArea3 = lt.ui.cobrowse.__getOrCreateElement("div", lt.ui.cobrowse.COBROWSE_SELECT_AREA_ID + "3", "lt-shadow-field");
  var divArea4 = lt.ui.cobrowse.__getOrCreateElement("div", lt.ui.cobrowse.COBROWSE_SELECT_AREA_ID + "4", "lt-shadow-field");
  var divClose = lt.ui.cobrowse.__getOrCreateElement("div", lt.ui.cobrowse.COBROWSE_SELECT_CLOSE_ID, "lt-cobrowse-close");
  return{"area": [divArea1, divArea2, divArea3, divArea4], "close": [divClose]}
};
lt.ui.cobrowse.__calculateSelectArea = function () {
  var area = lt.ui.cobrowse.__selectedArea;
  var left = Math.min(area[0], util.dom.getDocumentWidth()), top = Math.min(area[1], util.dom.getDocumentHeight()), width = Math.min(area[2], util.dom.getDocumentWidth() - left), height = Math.min(area[3], util.dom.getDocumentHeight() - top);
  return[left, top, width, height]
};
lt.ui.cobrowse.__setSelectAreaEvents = function (elements) {
  var deselectArea = function (event) {
    lt.ui.cobrowse.deselectArea()
  };
  for (var key in elements["area"])util.dom.addEventListener(elements["area"][key], "click", deselectArea);
  for (var key in elements["close"])util.dom.addEventListener(elements["close"][key], "click", deselectArea);
  util.dom.addEventListener(window, "resize", lt.ui.cobrowse.__onResizeSelectArea)
};
lt.ui.cobrowse.__assertSelectArea = function (area) {
  var left = area[0], top = area[1], width = area[2], height = area[3];
  return width > 0 && height > 0 && left >= 0 && top >= 0
};
lt.ui.cobrowse.__positionSelectAreaElements = function (elements, area) {
  var left = area[0], top = area[1], width = area[2], height = area[3];
  elements["area"][0].style.left = 0 + "px";
  elements["area"][0].style.top = 0 + "px";
  elements["area"][0].style.width = util.dom.getDocumentWidth() + "px";
  elements["area"][0].style.height = top + "px";
  elements["area"][1].style.left = 0 + "px";
  elements["area"][1].style.top = top + "px";
  elements["area"][1].style.width = left + "px";
  elements["area"][1].style.height = util.dom.getDocumentHeight() - top + "px";
  elements["area"][2].style.left =
      left + "px";
  elements["area"][2].style.top = top + height + "px";
  elements["area"][2].style.width = width + "px";
  elements["area"][2].style.height = util.dom.getDocumentHeight() - top - height + "px";
  elements["area"][3].style.left = left + width + "px";
  elements["area"][3].style.top = top + "px";
  elements["area"][3].style.width = util.dom.getDocumentWidth() - left - width + "px";
  elements["area"][3].style.height = util.dom.getDocumentHeight() - top + "px";
  var closePicSize = 12;
  elements["close"][0].style.top = top - closePicSize + "px";
  elements["close"][0].style.left =
      left + width - closePicSize + "px"
};
lt.ui.cobrowse.__scrollToSelectArea = function (area) {
  var left = area[0], top = area[1], width = area[2], height = area[3];
  var areaVisible = left > util.dom.getWindowScrollLeft() && top > util.dom.getWindowScrollTop() && left + width < util.getWindowWidth() + util.dom.getWindowScrollLeft() && top + height < util.getWindowHeight() + util.dom.getWindowScrollTop();
  if (!areaVisible) {
    var widthMargin = (util.getWindowWidth() - width) / 2;
    var heightMargin = (util.getWindowHeight() - height) / 2;
    window.scrollTo(left - widthMargin, top - heightMargin)
  }
};
lt.ui.cobrowse.deselectArea = function (opt_silent) {
  var elementsIds = [lt.ui.cobrowse.COBROWSE_SELECT_AREA_ID + "1", lt.ui.cobrowse.COBROWSE_SELECT_AREA_ID + "2", lt.ui.cobrowse.COBROWSE_SELECT_AREA_ID + "3", lt.ui.cobrowse.COBROWSE_SELECT_AREA_ID + "4", lt.ui.cobrowse.COBROWSE_SELECT_CLOSE_ID];
  for (var i = 0, l = elementsIds.length; i < l; i += 1) {
    var element = document.getElementById(elementsIds[i]);
    var body = document.getElementsByTagName("body")[0];
    if (element !== null)body.removeChild(element)
  }
  if (lt.ui.cobrowse.__enabledInThisTab) {
    util.dom.removeEventListener(window,
        "resize", lt.ui.cobrowse.__onResizeSelectArea);
    if (opt_silent !== true) {
      var cobrowse = sm.selectOne(lt.sm.EntityName.COBROWSE);
      if (cobrowse instanceof lt.sm.Cobrowse)lt.api.sendCobrowseDeselect(cobrowse)
    }
  }
  return false
};
lt.ui.cobrowse.updateCobrowseState = function () {
  if (lt.ui.cobrowse.__enabledInThisTab) {
    util.setCookie(lt.ui.cobrowse.COBROWSE_COOKIE, lt.tabs.TAB_ID, lt.ui.cobrowse.__COBROWSE_COOKIE_TTL);
    var cobrowse = sm.selectOne(lt.sm.EntityName.COBROWSE);
    if (cobrowse instanceof lt.sm.Cobrowse) {
      if (lt.ui.cobrowse.__IS_FIRST_UPDATE)cobrowse.setUrl(location.href); else cobrowse.setUrl("");
      cobrowse.setMousePosition(lt.ui.cobrowse.__mousePosition);
      cobrowse.setDisplayArea(lt.ui.cobrowse.__getDisplayArea());
      var callback = util.nop;
      if (lt.ui.cobrowse.__IS_FIRST_UPDATE)callback = function (entity) {
        if (entity instanceof lt.sm.Cobrowse)lt.ui.cobrowse.__IS_FIRST_UPDATE = false
      };
      lt.api.sendCobrowseState(cobrowse, callback);
      setTimeout(lt.ui.cobrowse.updateCobrowseState, lt.ui.cobrowse.__COBROWSE_INTERVAL)
    }
  }
};
lt.ui.cobrowse.__grabMousePosition = function (mouseEvent) {
  if (mouseEvent !== null) {
    var tempX = 0, tempY = 0;
    if (lt.ui.IS_IE) {
      tempX = mouseEvent.clientX + document.documentElement.scrollLeft;
      tempY = mouseEvent.clientY + document.documentElement.scrollTop
    } else {
      tempX = mouseEvent.pageX;
      tempY = mouseEvent.pageY
    }
    if (tempX < 0)tempX = 0;
    if (tempY < 0)tempY = 0;
    lt.ui.cobrowse.__mousePosition = [tempX, tempY]
  }
  return true
};
lt.ui.cobrowse.__getDisplayArea = function () {
  return[util.getWindowWidth(), util.getWindowHeight()]
};
lt.ui.cobrowse.__getOrCreateElement = function (tag, id, opt_className) {
  var element = document.getElementById(id);
  if (element === null) {
    element = document.createElement(tag);
    element.id = id;
    if (opt_className)element.className = opt_className;
    document.getElementsByTagName("body")[0].appendChild(element)
  }
  return element
};
lt.api.RECONNECT_TIMEOUT = 15E3;
lt.api.RECONNECT_DELTA = 5E3;
lt.api.POLL_TIMEOUT = 3E4;
lt.api.STOP_POLLING_TIMEOUT = 36E5;
lt.api.CHAT_POLL_TIMEOUT = 5E3;
lt.api.COBROWSE_POLL_TIMEOUT = 1E3;
lt.api.__REINIT_ID = "0";
lt.api.init = function (site, visitor, opt_reconnect) {
  lt.api.io.init({"LT-Origin": site.getFullName()}, new lt.api.args.Auth(site, visitor, opt_reconnect))
};
lt.api.reinit = function (site, visitor) {
  lt.api.io.__authCount = 0;
  lt.api.init(site, visitor, true)
};
lt.api.reconstructResponseEntities = function (string) {
  var data = util.decodeJsonData(string);
  if (data instanceof Object)return sm.reconstructEntities(data);
  return[]
};
lt.api.reconstructResponseEntity = function (string) {
  var data = util.decodeJsonData(string);
  if (data instanceof Object)return sm.reconstructEntity(data);
  return null
};
lt.api.reject = function (complete) {
  lt.api.io.send("/visitor/reject", complete, lt.error)
};
lt.api.getMembers = function (complete) {
  lt.api.io.send("/site/get-members", function (data) {
    var members = lt.api.reconstructResponseEntities(data);
    var result = [];
    for (var i = 0, l = members.length; i < l; i += 1)if (members[i]instanceof lt.sm.Member)result.push(members[i]);
    complete(result)
  }, lt.error)
};
lt.api.getAllMembers = function (complete) {
  lt.api.io.send("/site/get-all-members", function (data) {
    var members = lt.api.reconstructResponseEntities(data);
    var result = [];
    for (var i = 0, l = members.length; i < l; i += 1)if (members[i]instanceof lt.sm.Member)result.push(members[i]);
    complete(result)
  }, lt.error)
};
lt.api.setName = function (name, complete) {
  lt.api.io.send("/visitor/set-name", complete, lt.error, new lt.api.args.SetName(name))
};
lt.api.populateMember = function (member, complete, cancel) {
  lt.api.io.send("/member/populate", function (data) {
    var entity = lt.api.reconstructResponseEntity(data);
    if (entity instanceof lt.sm.Member)complete(entity); else complete(member)
  }, lt.error, new lt.api.args.Member(member))
};
lt.api.getGroups = function (complete) {
  lt.api.io.send("/site/get-groups", function (data) {
    var groups = lt.api.reconstructResponseEntities(data);
    var result = [];
    for (var i = 0, l = groups.length; i < l; i += 1)if (groups[i]instanceof lt.sm.Group)result.push(groups[i]);
    complete(result)
  }, lt.error)
};
lt.api.getAllGroups = function (complete) {
  lt.api.io.send("/site/get-all-groups", function (data) {
    var groups = lt.api.reconstructResponseEntities(data);
    var result = [];
    for (var i = 0, l = groups.length; i < l; i += 1)if (groups[i]instanceof lt.sm.Group)result.push(groups[i]);
    complete(result)
  }, lt.error)
};
lt.api.hasGroup = function (groupId, complete) {
  lt.api.getGroups(function (groups) {
    var isFound = false;
    for (var i = 0; i < groups.length; i++)if (groupId === groups[i].getId()) {
      isFound = true;
      break
    }
    complete(isFound)
  })
};
lt.api.__makeLegacyGroup = function (group) {
  return{"id": group.getId(), "name": group.getDisplayName()}
};
lt.api.__makeWelcomeWindowGroup = function (group) {
  return{"group_id": group.getId(), "group_name": group.getDisplayName(), "site_id": group.getSite().getId(), "sortOrder": group.getSortOrder()}
};
lt.api.__transform = function (groups, transformer, opt_filter) {
  var result = [];
  for (var i = 0, l = groups.length; i < l; i += 1)if (groups[i].getId() !== lt.sm.Group.ANY_GROUP_ID) {
    var group = transformer(groups[i]);
    if (opt_filter) {
      if (opt_filter(groups[i]))result.push(group)
    } else result.push(group)
  }
  return result
};
lt.api.getLegacyAllGroups = function (complete) {
  lt.api.getAllGroups(function (groups) {
    complete(lt.api.__transform(groups, lt.api.__makeLegacyGroup))
  })
};
lt.api.__getNotEmptyGroups = function (members) {
  var groups = {};

  function updateGroups(memberGroups) {
    var i = 0, l = memberGroups.length;
    var site = lt.sm.getVisitor().getSite();
    if (site instanceof lt.sm.Site)while (i < l) {
      if (memberGroups[i].getDisplayName() !== "" && memberGroups[i].getSite().getId() === site.getId())groups[memberGroups[i].getId()] = memberGroups[i];
      i += 1
    }
  }

  var i = 0, l = members.length;
  while (i < l) {
    updateGroups(members[i].getGroups());
    i += 1
  }
  var result = [];
  for (var key in groups)result.push(lt.api.__makeWelcomeWindowGroup(groups[key]));
  return result
};
lt.api.__filterOnline = function (members) {
  var result = [];
  var i = 0, l = members.length;
  while (i < l) {
    if (members[i].isAvailable())result.push(members[i]);
    i += 1
  }
  return result
};
lt.api.getOfflineWindowGroups = function (complete) {
  lt.api.getMembers(function (members) {
    complete(lt.api.__getNotEmptyGroups(members))
  })
};
lt.api.getWelcomeWindowGroups = function (complete) {
  lt.api.getMembers(function (members) {
    complete(lt.api.__getNotEmptyGroups(lt.api.__filterOnline(members)))
  })
};
lt.api.getSiteFeatures = function (site, complete) {
  lt.api.populateFeatures(lt.api.__getFeatureRequest(site), complete)
};
lt.api.addPage = function (complete) {
  var visitor = lt.sm.getVisitor();
  if (visitor !== null) {
    var page = new lt.sm.Page(Math.random().toString(36).substr(2), LiveTex.site);
    lt.api.io.send("/site/add-page", function (data) {
      var page = lt.api.reconstructResponseEntity(data);
      if (page instanceof lt.sm.Page) {
        sm.save(page);
        complete(page)
      } else complete(null)
    }, lt.error, new lt.api.args.Page(page))
  } else lt.error("Can`t add page - no active visitor.")
};
lt.api.populateFeatures = function (features, complete) {
  lt.api.io.send("/feature/populate", function (data) {
    var members = lt.api.reconstructResponseEntities(data);
    var result = [];
    for (var i = 0, l = members.length; i < l; i += 1)if (members[i]instanceof lt.sm.Feature)result.push(members[i]);
    complete(result)
  }, lt.error, new lt.api.args.PopulateFeatures(features))
};
lt.api.setReinitId = function () {
  lt.api.__REINIT_ID = Math.random().toString(36).substr(2, 6)
};
lt.api.getReinitId = function () {
  return lt.api.__REINIT_ID
};
lt.api.__getFeatureRequest = function (site) {
  var featureRequests = [
    {"type": lt.sm.FeatureType.CHAT, "group_id": lt.sm.Group.ANY_GROUP_ID, "member_id": lt.sm.Member.ANY_MEMBER_ID}
  ];
  var settings = site.getSiteSettings();
  var result = [];
  if (typeof settings["jarl_sound"] === "object") {
    settings["jarl_sound"]["voice"] = "1";
    lt.api.__addFeatureRequest(featureRequests, settings["jarl_sound"])
  }
  if (typeof settings["auto"] === "object")for (var a = 0; a < settings["auto"].length; a++)lt.api.__addFeatureRequest(featureRequests, settings["auto"][a]);
  if (typeof settings["buttons"] === "object")for (var b = 0; b < settings["buttons"].length; b++) {
    var button = settings["buttons"][b];
    if (typeof button["id"] === "string" && document.getElementById(button["id"]) !== null)lt.api.__addFeatureRequest(featureRequests, button)
  }
  for (var c = 0; c < featureRequests.length; c++) {
    var featureObject = featureRequests[c];
    var member = new lt.sm.Member(featureObject["member_id"], site.getAccount());
    var group = new lt.sm.Group(featureObject["group_id"], site);
    result.push(new lt.sm.Feature(featureObject["type"],
        member, group))
  }
  var savedChatFeature = lt.sm.retrieveActiveChatFeature(site);
  if (savedChatFeature !== null)result.push(savedChatFeature);
  return result
};
lt.api.__addFeatureRequest = function (featureRequests, setting) {
  if (typeof setting["group_id"] !== "undefined") {
    var groupId = setting["group_id"].toString();
    if (groupId === "1" || groupId === "0")groupId = lt.sm.Group.ANY_GROUP_ID;
    var type = lt.sm.FeatureType.CHAT;
    if (typeof setting["voice"] !== "undefined" && setting["voice"] == 1)type = lt.sm.FeatureType.CALL;
    var operatorId = lt.sm.Member.ANY_MEMBER_ID;
    if (typeof setting["member_id"] !== "undefined" && setting["member_id"] != 1)operatorId = setting["member_id"].toString();
    var request =
    {"type": type, "group_id": groupId, "member_id": operatorId};
    for (var i = 0, l = featureRequests.length; i < l; i += 1)if (featureRequests[i]["type"] === request["type"] && featureRequests[i]["group_id"] === request["group_id"] && featureRequests[i]["member_id"] === request["member_id"])return;
    featureRequests.push(request)
  }
};
lt.api.sendCobrowseState = function (cobrowse, opt_complete) {
  var complete = util.nop;
  if (typeof opt_complete === "function")complete = function (data) {
    var obj = util.decodeJsonData(data), entity = null;
    if (obj instanceof Object)entity = sm.reconstructEntity(obj);
    opt_complete(entity)
  };
  lt.api.io.send("/cobrowse/state", complete, lt.error, new lt.api.args.Cobrowse(cobrowse))
};
lt.api.sendCobrowseNotify = function (cobrowse, opt_complete) {
  var complete = typeof opt_complete === "function" ? opt_complete : util.nop;
  lt.api.io.send("/cobrowse/notify", complete, lt.error, new lt.api.args.Cobrowse(cobrowse))
};
lt.api.sendCobrowsePossibility = function (cobrowse, opt_complete) {
  var complete = typeof opt_complete === "function" ? opt_complete : util.nop;
  lt.api.io.send("/cobrowse/possibility", complete, lt.error, new lt.api.args.Cobrowse(cobrowse))
};
lt.api.sendCobrowseDeselect = function (cobrowse, opt_complete) {
  var complete = typeof opt_complete === "function" ? opt_complete : util.nop;
  lt.api.io.send("/cobrowse/deselect", complete, lt.error, new lt.api.args.Cobrowse(cobrowse))
};
lt.api.setPollTimeout = function (timeout, opt_force) {
  if (lt.api.__pollTimeout > timeout || opt_force) {
    lt.api.__pollTimeout = timeout;
    lt.api.io.resetConnection(0, timeout)
  }
};
lt.api.Notification = {AUTH: "auth", INVITE: "invite", CHAT: "chat", COBROWSE_START: "cobrowse-start", COBROWSE_STOP: "cobrowse-stop", COBROWSE_GOTO: "cobrowse-goto", COBROWSE_SELECT: "cobrowse-select", COBROWSE_DESELECT: "cobrowse-deselect", COBROWSE_WEB_INIT: "cobrowse-web-init", COBROWSE_POSSIBILITY: "cobrowse-possibility", COBROWSE_NOTIFY: "cobrowse-notify", COBROWSE_STATE: "cobrowse-state", COBROWSE_DESTROY: "cobrowse-destroy"};
lt.api.IArgs = function () {
};
lt.api.IArgs.prototype.serialize = function () {
};
lt.api.Args = function () {
};
lt.api.Args.prototype.serialize = function () {
  return util.encodeJsonData(this._getData())
};
lt.api.Args.prototype._getData = function () {
  return{}
};
lt.api.args.Auth = function (site, visitor, opt_reconnect) {
  lt.api.Args.call(this);
  this.__site = site;
  this.__visitor = visitor;
  this.__isReconnect = opt_reconnect || false
};
util.inherits(lt.api.args.Auth, lt.api.Args);
lt.api.args.Auth.prototype._getData = function () {
  var data = {"is_reconnect": lt.sm.filterBoolean(this.__isReconnect)};
  if (this.__visitor !== null)data["visitor"] = sm.serializeEntity(this.__visitor); else data["visitor"] = undefined;
  return data
};
lt.api.args.Page = function (page) {
  lt.api.Args.call(this);
  this.__page = page
};
util.inherits(lt.api.args.Page, lt.api.Args);
lt.api.args.Page.prototype._getData = function () {
  return{"page": sm.serializeEntity(this.__page)}
};
lt.api.args.PopulateFeatures = function (features) {
  lt.api.Args.call(this);
  this.__features = features
};
util.inherits(lt.api.args.PopulateFeatures, lt.api.Args);
lt.api.args.PopulateFeatures.prototype._getData = function () {
  return{"features": sm.serializeEntities(this.__features)}
};
lt.api.args.SetName = function (name) {
  lt.api.Args.call(this);
  this.__name = name
};
util.inherits(lt.api.args.SetName, lt.api.Args);
lt.api.args.SetName.prototype._getData = function () {
  return{"name": this.__name}
};
lt.api.args.SetTag = function (tag) {
  lt.api.Args.call(this);
  this.__tag = tag
};
util.inherits(lt.api.args.SetTag, lt.api.Args);
lt.api.args.SetTag.prototype._getData = function () {
  return{"tag": this.__tag}
};
lt.api.args.Member = function (member) {
  lt.api.Args.call(this);
  this.__member = member
};
util.inherits(lt.api.args.Member, lt.api.Args);
lt.api.args.Member.prototype._getData = function () {
  return{"member": sm.serializeEntity(this.__member)}
};
lt.api.args.Cobrowse = function (cobrowse) {
  lt.api.Args.call(this);
  this.__cobrowse = cobrowse
};
util.inherits(lt.api.args.Cobrowse, lt.api.Args);
lt.api.args.Cobrowse.prototype._getData = function () {
  return{"cobrowse": sm.serializeEntity(this.__cobrowse)}
};
lt.api.io.MAX_AUTH_COUNT = 5;
lt.api.io.__headers = {};
lt.api.io.__authArgs = null;
lt.api.io.__requestFactory = null;
lt.api.io.__connectionFactory = null;
lt.api.io.__connection = null;
lt.api.io.__requestQueue = [];
lt.api.io.__authCount = 0;
lt.api.io.__dataHandler = util.nop;
lt.api.io.setNotificationHandler = function (handler) {
  lt.api.io.__dataHandler = handler
};
lt.api.io.init = function (headers, opt_args) {
  lt.api.io.__authArgs = opt_args || null;
  lt.api.io.__headers = headers;
  lt.api.io.__auth()
};
lt.api.io.send = function (path, complete, cancel, opt_args) {
  lt.api.io.__requestQueue.push(arguments);
  lt.api.io.__flush()
};
lt.api.io.resetConnection = function (holdTimeout, pollTimeout) {
  lt.api.io.destroyConnection();
  if (lt.api.io.__connectionFactory !== null) {
    var connection = lt.api.io.__connectionFactory.createConnection(holdTimeout, pollTimeout);
    connection.addEventListener(io.ConnectionEvent.DATA, lt.api.io.__handleData);
    connection.addEventListener(io.ConnectionEvent.CLOSE, function (event) {
      connection.removeAllEventListeners();
      lt.api.io.__reauth()
    });
    lt.api.io.__connection = connection
  }
};
lt.api.io.destroyConnection = function () {
  if (lt.api.io.__connection !== null) {
    lt.api.io.__connection.removeAllEventListeners();
    lt.api.io.__connection.destroy()
  }
};
lt.api.io.__auth = function () {
  if (lt.api.io.__authCount < lt.api.io.MAX_AUTH_COUNT) {
    lt.api.io.__getUrl(lt.api.io.__sendAuthRequest, function (errMessage, errNo) {
      lt.error(errMessage, errNo);
      setTimeout(lt.api.io.__auth, lt.api.RECONNECT_TIMEOUT + lt.api.io.__authCount * lt.api.RECONNECT_DELTA)
    });
    lt.api.io.__authCount += 1
  } else lt.ext.events.dispatch(lt.ext.events.EventType.RECONNECT_FAILED)
};
lt.api.io.__getUrl = function (complete, cancel) {
  var request = lt.api.io.__createRequestFactory(LivetexSettings["HTTP_BALANCER"]).createRequest();
  request.addEventListener(net.RequestEvent.COMPLETE, function (event) {
    request.removeEventListener(net.RequestEvent.COMPLETE);
    if (event instanceof net.RequestEvent)if (!event.isRequestFailed()) {
      var url = event.getResponseData();
      complete(url)
    } else cancel("Can't get a config from balancer: ", event.getResponseStatus())
  });
  request.send("", "")
};
lt.api.io.__createRequestFactory = function (url, opt_method) {
  var method = typeof opt_method === "string" ? opt_method : net.RequestMethod.POST;
  var requestFactory = new net.factory.RequestFactory(url);
  requestFactory.setMethod(method);
  requestFactory.setHeaders(lt.api.io.__headers);
  return requestFactory
};
lt.api.io.__createConnectionFactory = function (url) {
  var connectionFactory = new io.PollingConnectionFactory(url);
  connectionFactory.setHeaders(lt.api.io.__headers);
  return connectionFactory
};
lt.api.io.__sendAuthRequest = function (url) {
  var requestFactory = lt.api.io.__createRequestFactory(url);
  var connectionFactory = lt.api.io.__createConnectionFactory(url);
  var request = requestFactory.createRequest();
  var payload = "";
  if (lt.api.io.__authArgs !== null || lt.sm.needPageSync()) {
    if (lt.api.io.__authCount > 1 || lt.sm.needPageSync())lt.api.io.__authArgs = new lt.api.args.Auth(LiveTex.site, lt.sm.getVisitor(), true);
    payload = lt.api.io.__authArgs.serialize()
  }
  request.addEventListener(net.RequestEvent.COMPLETE, function (event) {
    if (event instanceof net.RequestEvent)if (event.isRequestTimeout())lt.api.io.__auth();
    else if (event.isRequestFailLocal())setTimeout(lt.api.io.__auth, lt.api.RECONNECT_TIMEOUT); else if (!event.isRequestFailed()) {
      lt.api.io.__connectionFactory = connectionFactory;
      lt.api.io.__requestFactory = requestFactory;
      lt.api.io.__dataHandler(lt.api.Notification.AUTH, event.getResponseData());
      lt.ext.events.dispatch(lt.ext.events.EventType.AUTH, {});
      lt.api.io.__authCount = 0;
      lt.api.io.__flush()
    }
    request.removeAllEventListeners()
  });
  request.send(payload, "/visitor/auth")
};
lt.api.io.__handleData = function (event, opt_data) {
  if (typeof opt_data === "string") {
    var data = util.decodeJsonData(opt_data);
    if (typeof data["notification"] === "string" && typeof data["payload"] === "string")lt.api.io.__dataHandler(data["notification"], data["payload"])
  }
};
lt.api.io.__reauth = function () {
  if (lt.api.io.__requestFactory !== null) {
    lt.api.io.__requestFactory = null;
    lt.api.io.__auth()
  }
};
lt.api.io.__flush = function () {
  if (lt.api.io.__requestFactory !== null)while (lt.api.io.__requestQueue.length > 0)lt.api.io.__doRequest.apply(lt.api.io.__requestFactory.createRequest(), lt.api.io.__requestQueue.shift())
};
lt.api.io.__doRequest = function (path, complete, cancel, opt_args) {
  var authCount = lt.api.io.__authCount;
  var args = arguments;
  var request = this;

  function handleResult(event) {
    if (event.isRequestFailed())if (event.isRequestForbidden()) {
      lt.api.io.__requestQueue.unshift(args);
      lt.api.io.__reauth()
    } else if (lt.api.io.__authCount > authCount || lt.api.io.__authCount === 0)lt.api.io.__doRequest.apply(request, args); else cancel("Request failed.", event.getResponseStatus()); else complete(event.getResponseData())
  }

  request.addEventListener(net.RequestEvent.COMPLETE,
      function (event) {
        if (event instanceof net.RequestEvent)handleResult(event);
        request.removeAllEventListeners()
      });
  request.send(opt_args !== undefined ? opt_args.serialize() : "", path)
};
lt.xdm.registerFrame = function (frame) {
  if (frame.contentWindow !== null)lt.xdm.__windows[frame.name] = frame.contentWindow
};
lt.xdm.registerWindow = function (name, window) {
  if (window !== null)lt.xdm.__windows[name] = window
};
lt.xdm.postWindowMessage = function (name, message) {
  if (lt.xdm.__windows[name] !== undefined && typeof lt.xdm.__windows[name]["postMessage"] === "function")lt.xdm.__windows[name].postMessage(name + ":" + message, "*")
};
lt.xdm.postParentMessage = function (message) {
  var parent = null;
  if (window.parent !== window)parent = window.parent; else if (window.opener !== window)parent = window.opener;
  if (parent !== null && typeof parent["postMessage"] === "function") {
    var name = window.name ? window.name : window.frameElement.id;
    parent.postMessage(name + ":" + message, "*")
  }
};
lt.xdm.setParentMessageHandler = function (handler) {
  util.dom.addEventListener(window, "message", function (event) {
    if (typeof event["data"] === "string")handler(event["data"])
  })
};
lt.xdm.setWindowMessageHandler = function (name, handler) {
  var prefix = name + ":";
  util.dom.addEventListener(window, "message", function (event) {
    if (typeof event["data"] === "string") {
      var data = event["data"];
      if (data.indexOf(prefix) === 0)handler(data.substr(prefix.length))
    }
  })
};
lt.xdm.makeMessage = function (action, params) {
  return action + "," + util.encodeJsonData(params)
};
lt.xdm.__windows = {};
lt.tabs.TAB_COOKIE_PREFIX = "lt-";
lt.tabs.TAB_ID = Math.random().toString(36).substr(2, 4);
lt.tabs.TAB_EVENTS_COOKIE = lt.tabs.TAB_COOKIE_PREFIX + lt.tabs.TAB_ID;
lt.tabs.TAB_LIST_COOKIE = "lt-tl";
lt.tabs.LAST_TAB_COOKIE = "lt-lt";
lt.tabs.TAB_COOKIE_TIMEOUT = 12E4;
lt.tabs.__updateIntervel = 500;
lt.tabs.TAB_TTL = 15;
lt.tabs.CLOSE_EVENT = "_c_";
lt.tabs.OPEN_EVENT = "_o_";
lt.tabs.DATE_ORIGIN = 1375858639338;
lt.tabs.init = function () {
  lt.tabs.__registerTab();
  lt.tabs.__keepTabCookieAlive();
  lt.tabs.__registerUnloadHandler()
};
lt.tabs.isLast = function () {
  var tabList = util.getCookie(lt.tabs.TAB_LIST_COOKIE);
  if (tabList === "")return true; else {
    var splitTabList = tabList.split(",");
    if (splitTabList[splitTabList.length - 1] === lt.tabs.TAB_ID)return true
  }
  return false
};
lt.tabs.getTabsCount = function () {
  lt.tabs.__updateTabs();
  return lt.tabs.__tabs.length
};
lt.tabs.dispatch = function (event, opt_data) {
  lt.tabs.__updateTabs();
  var payload = event;
  if (opt_data !== undefined)payload += ":" + opt_data;
  for (var i = lt.tabs.__tabs.length - 1; i >= 0; i -= 1) {
    var tabCookie = lt.tabs.TAB_COOKIE_PREFIX + lt.tabs.__tabs[i];
    util.setCookie(tabCookie, util.getCookie(tabCookie).split(",").concat(payload).join(","), lt.tabs.TAB_COOKIE_TIMEOUT)
  }
};
lt.tabs.addEventListener = function (type, listener) {
  if (lt.tabs.__listeners[type] === undefined)lt.tabs.__listeners[type] = [listener]; else if (!lt.tabs.hasEventListener(type, listener))lt.tabs.__listeners[type].push(listener)
};
lt.tabs.removeEventListener = function (type, listener) {
  if (lt.tabs.__listeners[type] !== undefined) {
    var i = util.indexOf(listener, lt.tabs.__listeners[type]);
    if (i !== -1)lt.tabs.__listeners[type].splice(i, 1)
  }
};
lt.tabs.hasEventListener = function (type, listener) {
  if (lt.tabs.__listeners[type] !== undefined)return util.indexOf(listener, lt.tabs.__listeners[type]) !== -1;
  return false
};
lt.tabs.getTabList = function () {
  return util.getCookie(lt.tabs.TAB_LIST_COOKIE).split(",")
};
lt.tabs.__tabs = [];
lt.tabs.__listeners = {};
lt.tabs.__keepTabCookieAlive = function () {
  var events = util.getCookie(lt.tabs.TAB_EVENTS_COOKIE).split(",").slice(1);
  util.setCookie(lt.tabs.TAB_EVENTS_COOKIE, String(lt.tabs.__getRelativeTime()), lt.tabs.TAB_COOKIE_TIMEOUT);
  lt.tabs.__registerTab();
  util.async(function () {
    lt.tabs.__processEvents(events)
  });
  lt.tabs.__updateTabs();
  setTimeout(lt.tabs.__keepTabCookieAlive, lt.tabs.__updateIntervel)
};
lt.tabs.__registerTab = function () {
  var tabs = util.getCookie(lt.tabs.TAB_LIST_COOKIE);
  if (tabs.indexOf(lt.tabs.TAB_ID) === -1) {
    if (tabs.length > 0)util.setCookie(lt.tabs.TAB_LIST_COOKIE, tabs.split(",").concat(lt.tabs.TAB_ID).join(",")); else util.setCookie(lt.tabs.TAB_LIST_COOKIE, lt.tabs.TAB_ID);
    lt.tabs.__dispatch(lt.tabs.OPEN_EVENT, lt.tabs.TAB_ID)
  }
};
lt.tabs.__updateTabs = function () {
  var now = lt.tabs.__getRelativeTime();
  var tabList = util.getCookie(lt.tabs.TAB_LIST_COOKIE);
  if (tabList.length > 0)lt.tabs.__tabs = tabList.split(","); else lt.tabs.__tabs = [];
  for (var i = lt.tabs.__tabs.length - 1; i >= 0; i -= 1) {
    var cookieName = lt.tabs.TAB_COOKIE_PREFIX + lt.tabs.__tabs[i];
    var cookieValue = util.getCookie(cookieName);
    var updateTime = Number(cookieValue.split(",").shift()) || 0;
    if (now - updateTime >= lt.tabs.TAB_TTL) {
      lt.tabs.__dispatch(lt.tabs.CLOSE_EVENT, lt.tabs.__tabs[i]);
      lt.tabs.__tabs.splice(i,
          1);
      util.removeCookie(cookieName)
    }
  }
  util.setCookie(lt.tabs.TAB_LIST_COOKIE, lt.tabs.__tabs.join(","))
};
lt.tabs.__dispatch = function (event, opt_data) {
  var payload = event;
  if (opt_data !== undefined)payload += ":" + opt_data;
  for (var i = lt.tabs.__tabs.length - 1; i >= 0; i -= 1) {
    var tabCookie = lt.tabs.TAB_COOKIE_PREFIX + lt.tabs.__tabs[i];
    util.setCookie(tabCookie, util.getCookie(tabCookie).split(",").concat(payload).join(","), lt.tabs.TAB_COOKIE_TIMEOUT)
  }
};
lt.tabs.__processEvents = function (events) {
  for (var i = events.length - 1; i >= 0; i -= 1) {
    var event = events[i];
    var data = "";
    var separatorIndex = event.indexOf(":");
    if (separatorIndex !== -1) {
      data = event.substr(separatorIndex + 1);
      event = event.substring(0, separatorIndex)
    }
    if (lt.tabs.__listeners[event] !== undefined)for (var j = lt.tabs.__listeners[event].length - 1; j >= 0; j -= 1)lt.tabs.__listeners[event][j](event, data)
  }
};
lt.tabs.__getRelativeTime = function () {
  return Math.floor(((new Date).getTime() - lt.tabs.DATE_ORIGIN) / 1E3)
};
lt.tabs.__registerUnloadHandler = function () {
  util.dom.addEventListener(window, "unload", lt.tabs.__unloadHandler)
};
lt.tabs.__unloadHandler = function (event) {
  if (!lt.ui.IS_IE)util.removeCookie(lt.tabs.TAB_EVENTS_COOKIE)
};
lt.tabs.EventType = {INVITE: "invite", OPEN_CHAT: "open-chat", SHOW: "show", HIDE: "hide", REINIT: "reinit"};
lt.cron.INVITE_CHECK_TIMEOUT = 1E3;
lt.cron.IMMEDIATE_INVITE_CHECK_TIMEOUT = 200;
lt.cron.startSiteInvitesTimer = function () {
  function step() {
    var visitor = sm.selectOne(lt.sm.EntityName.VISITOR);
    if (visitor instanceof lt.sm.Visitor) {
      var site = visitor.getSite();
      var invites = sm.selectChildren(site, lt.sm.EntityName.SITE_INVITE);
      var i = 0, l = invites.length;
      while (i < l) {
        var invite = invites[i];
        if (invite instanceof lt.sm.SiteInvite && invite.readyToActivate()) {
          lt.ui.showSiteInvite(invite);
          sm.remove(invite)
        }
        i += 1
      }
    }
    setTimeout(step, lt.cron.INVITE_CHECK_TIMEOUT)
  }

  setTimeout(step, lt.cron.INVITE_CHECK_TIMEOUT)
};
lt.cron.startImmediateInvitesTimer = function () {
  function step() {
    var visitor = lt.sm.getVisitor();
    if (visitor !== null) {
      var invites = sm.selectChildren(visitor, lt.sm.EntityName.INVITE);
      var i = 0, l = invites.length;
      while (i < l) {
        var invite = invites[i];
        if (invite instanceof lt.sm.Invite) {
          lt.ui.showInvite(invite, lt.sm.OpenInitiator.MANUAL);
          sm.remove(invite)
        }
        i += 1
      }
    }
    setTimeout(step, lt.cron.IMMEDIATE_INVITE_CHECK_TIMEOUT)
  }

  setTimeout(step, lt.cron.IMMEDIATE_INVITE_CHECK_TIMEOUT)
};
lt.ext.events.EventType = {CHAT_OPEN: "chat_open", CHAT_INVITATION_ACTION: "chat_invitation_action", CHAT_INVITATION_OPEN: "chat_invitation_open", CHAT_WELCOME_OPEN: "chat_welcome_open", LEAD_ACTION: "lead_action", CHAT_WELCOME_ACTION: "chat_welcome_action", LEAD_OPEN: "lead_open", OFFLINE_ACTION: "offline_action", OFFLINE_OPEN: "offline_open", CALL_OPEN: "call_open", AUTH: "auth", RECONNECT_FAILED: "reconnect_failed"};
lt.ext.events.__listeners = {};
lt.ext.events.addEventListener = function (type, listener) {
  if (lt.ext.events.__listeners[type] === undefined)lt.ext.events.__listeners[type] = [listener]; else if (!lt.ext.events.__hasEventListener(type, listener))lt.ext.events.__listeners[type].push(listener)
};
lt.ext.events.removeAllEventListeners = function (opt_type) {
  if (opt_type === undefined)lt.ext.events.__listeners = {}; else delete lt.ext.events.__listeners[opt_type]
};
lt.ext.events.__hasEventListener = function (type, listener) {
  if (lt.ext.events.__listeners[type] !== undefined)return util.indexOf(listener, lt.ext.events.__listeners[type]) !== -1;
  return false
};
lt.ext.events.dispatch = function (event, opt_data) {
  if (lt.ext.events.__listeners[event] !== undefined) {
    var i = 0, l = lt.ext.events.__listeners[event].length;
    while (i < l) {
      lt.ext.events.__listeners[event][i](lt.ext.events.__makeEventBody(event, opt_data));
      i += 1
    }
  }
};
lt.ext.events.__makeEventBody = function (event, opt_data) {
  var result = {type: event};
  if (opt_data instanceof Object)result.data = opt_data;
  return result
};
lt.ext.events.__makeOpenEventType = function (actionType) {
  switch (actionType) {
    case lt.sm.ActionType.SHOW_INVITE:
      return lt.ext.events.EventType.CHAT_INVITATION_OPEN;
    case lt.sm.ActionType.WELCOME:
      return lt.ext.events.EventType.CHAT_WELCOME_OPEN;
    case lt.sm.ActionType.OFFLINE:
      return lt.ext.events.EventType.OFFLINE_OPEN;
    case lt.sm.ActionType.LEAD:
      return lt.ext.events.EventType.LEAD_OPEN;
    case lt.sm.ActionType.CALL:
      return lt.ext.events.EventType.CALL_OPEN
  }
  return lt.ext.events.EventType.CHAT_INVITATION_OPEN
};
lt.ext.events.__makeOpenEventBody = function (source, groupId, visitorName, opt_userAttrs, opt_hiddenAttrs) {
  return{source: source, departmentId: groupId, name: visitorName, prechats_chat: opt_userAttrs || null, prechats_hidden: opt_hiddenAttrs || null}
};
lt.ext.events.__makeChatOpenEventBody = function (source, groupId, visitorName, isEmbedded, opt_userAttrs, opt_hiddenAttrs) {
  var body = lt.ext.events.__makeOpenEventBody(source, groupId, visitorName, opt_userAttrs, opt_hiddenAttrs);
  body["is_embedded"] = isEmbedded;
  return body
};
lt.ext.events.__makeCallOpenEventBody = function (source, widget, widgetId, groupId, visitorName) {
  var body = lt.ext.events.__makeOpenEventBody(source, groupId, visitorName);
  body["control"] = widget;
  body["button_id"] = widgetId;
  if (visitorName === "")body["name"] = lt.sm.getDefaultVisitorName();
  return body
};
lt.ext.events.__makeActionEventBody = function (action, opt_source, opt_isEmbedded) {
  var result = {action: action};
  if (typeof opt_source === "string")result.source = opt_source;
  if (typeof opt_isEmbedded === "boolean")result.is_embedded = String(opt_isEmbedded);
  return result
};
lt.ext.events.__makeShowEventBody = function (source, isEmbedded) {
  return{source: source, is_embedded: String(isEmbedded)}
};
lt.ext.events.dispatchShowEvent = function (actionType, windowType, source) {
  var eventType = lt.ext.events.__makeOpenEventType(actionType);
  if (eventType !== "")lt.ext.events.dispatch(eventType, lt.ext.events.__makeShowEventBody(source, windowType === "embedded"))
};
lt.ext.events.dispatchCallOpenEvent = function (source, widget, widgetId, groupId, visitorName) {
  lt.ext.events.dispatch(lt.ext.events.EventType.CALL_OPEN, lt.ext.events.__makeCallOpenEventBody(source, widget, widgetId, groupId, visitorName))
};
lt.ext.events.dispatchActionEvent = function (type, action, opt_source, opt_isEmbedded) {
  lt.ext.events.dispatch(type, lt.ext.events.__makeActionEventBody(action, opt_source, opt_isEmbedded))
};
lt.ext.events.dispatchInviteActionEvent = function (action, source) {
  lt.ext.events.dispatchActionEvent(lt.ext.events.EventType.CHAT_INVITATION_ACTION, action, source)
};
lt.ext.events.dispatchOfflineActionEvent = function (action, source, isEmbedded) {
  lt.ext.events.dispatchActionEvent(lt.ext.events.EventType.OFFLINE_ACTION, action, source, isEmbedded)
};
lt.ext.events.dispatchLeadActionEvent = function (action, source, isEmbedded) {
  lt.ext.events.dispatchActionEvent(lt.ext.events.EventType.LEAD_ACTION, action, source, isEmbedded)
};
lt.ext.events.dispatchWelcomeActionEvent = function (action) {
  lt.ext.events.dispatchActionEvent(lt.ext.events.EventType.CHAT_WELCOME_ACTION, action)
};
lt.ext.events.dispatchSendInviteEvent = function (source) {
  lt.ext.events.dispatchInviteActionEvent(lt.sm.WindowActionType.SEND, source)
};
lt.ext.events.dispatchShowInviteEvent = function (source) {
  lt.ext.events.dispatchInviteActionEvent(lt.sm.WindowActionType.SHOW, source)
};
lt.ext.events.dispatchChatOpenEvent = function (source, groupId, visitorName, isEmbedded, opt_userAttrs, opt_hiddenAttrs) {
  lt.ext.events.dispatch(lt.ext.events.EventType.CHAT_OPEN, lt.ext.events.__makeChatOpenEventBody(lt.sm.makeChatOpenInitiator(source), groupId, visitorName, isEmbedded, opt_userAttrs, opt_hiddenAttrs))
};
if (typeof LiveTex === "undefined")LiveTex = {};
LiveTex["on"] = function (type, callback) {
  lt.ext.events.addEventListener(type, callback)
};
LiveTex["off"] = function (type) {
  lt.ext.events.removeAllEventListeners(type)
};
LiveTex["hasActiveChat"] = function () {
  return lt.sm.isActiveChatExists()
};
LiveTex["sendMessage"] = function (text) {
  if (LiveTex["hasActiveChat"]()) {
    lt.ui.sendMessage(text);
    return true
  }
  return false
};
LiveTex["init"] = function (accountId, siteId, settings, sizzle) {
  var storage = new sm.EntityStorage;
  sm.setEntityFactory(new lt.sm.EntityFactory);
  sm.setEntitySerializer(new sm.EntitySerializer(storage));
  sm.setEntityStorage(storage);
  var account = new lt.sm.Account(accountId);
  var site = new lt.sm.Site(siteId, account);
  site.setSiteSettings(settings);
  sm.save(site);
  util.dom.setSelectorEngine(sizzle);
  lt.tabs.init();
  lt.tabs.addEventListener(lt.tabs.CLOSE_EVENT, function (event, tid) {
    lt.ui.cobrowse.checkCobrowseTab(tid)
  });
  lt.ext.events.addEventListener(lt.ext.events.EventType.CHAT_OPEN, function () {
    lt.api.setPollTimeout(lt.api.CHAT_POLL_TIMEOUT)
  });
  lt.tabs.addEventListener(lt.tabs.EventType.REINIT, function (event, data) {
    if (data !== lt.api.getReinitId())reinitSession()
  });
  lt.tabs.addEventListener(lt.ui.cobrowse.START_COBROWSE_EVENT, function (event, tid) {
    lt.ui.cobrowse.startCobrowse()
  });
  function handleReady() {
    if (typeof LiveTex !== "undefined" && typeof LiveTex["onLiveTexReady"] === "function")LiveTex["onLiveTexReady"].call(LiveTex)
  }

  LiveTex.site = site;
  if (LTX_IS_API)LiveTex["authorize"](handleReady); else LiveTex["replaceWidgets"](handleReady)
};
LiveTex["authorize"] = function (callback) {
  var site = LiveTex.site;
  if (site instanceof lt.sm.Site) {
    lt.api.io.setNotificationHandler(lt.sm.handleNotification);
    lt.sm.setAuthCallback(function () {
      lt.api.addPage(function () {
        lt.api.getSiteFeatures(site, function (features) {
          site.populateData(features);
          callback()
        })
      });
      lt.sm.setAuthCallback(util.nop)
    });
    lt.api.init(site, lt.sm.getVisitor())
  }
};
LiveTex["offlineAuthorize"] = function (accountId, siteId, visitorId) {
  var storage = new sm.EntityStorage;
  sm.setEntityFactory(new lt.sm.EntityFactory);
  sm.setEntitySerializer(new sm.EntitySerializer(storage));
  sm.setEntityStorage(storage);
  if (typeof accountId === "string" && typeof siteId === "string" && typeof visitorId === "string") {
    var account = new lt.sm.Account(accountId);
    var site = new lt.sm.Site(siteId, account);
    var visitor = new lt.sm.Visitor(visitorId, site);
    lt.api.io.setNotificationHandler(lt.sm.handleNotification);
    lt.api.init(site, visitor)
  }
};
LiveTex["getWelcomeWindowGroups"] = function (callback) {
  lt.api.getWelcomeWindowGroups(callback)
};
LiveTex["getOfflineWindowGroups"] = function (callback) {
  lt.api.getOfflineWindowGroups(callback)
};
LiveTex["replaceWidgets"] = function (opt_callback) {
  var callback = opt_callback || util.nop;

  function getElementsStartedAt(tagName, substring) {
    var allElements = document.getElementsByTagName(tagName);
    var elements = [];
    var i = 0;
    var l = allElements.length;
    while (i < l) {
      if (allElements[i].id.indexOf(substring) === 0)elements.push(allElements[i]);
      i += 1
    }
    return elements
  }

  var divs = getElementsStartedAt("div", "liveTexButton_");
  var preloaderHtml = '<img src="' + window["LTX_URL"] + 'img/loadbtn.gif" width="80" height="12" class="livetexBtnPreloader" />';
  var i = 0, l = divs.length;
  while (i < l) {
    divs[i].innerHTML = preloaderHtml;
    i += 1
  }
  LiveTex["authorize"](function () {
    if (LiveTex.site instanceof lt.sm.Site) {
      lt.sm.init();
      lt.ui.init(LiveTex.site);
      callback()
    }
  })
};
LiveTex["haveOnlineOperators"] = function (opt_onSuccess, opt_onError) {
  LiveTex.site.getMembers(function (members) {
    var onlineMembers = [];
    var serializedMembers = lt.sm.serializeArray(members);
    for (var i = 0; i < serializedMembers.length; i += 1)if (serializedMembers[i]["state_id"] == 1 || serializedMembers[i]["state_id"] == 2)onlineMembers.unshift(serializedMembers[i]);
    if (onlineMembers.length > 0 && typeof opt_onSuccess === "function")opt_onSuccess(onlineMembers); else if (typeof opt_onError === "function")opt_onError()
  })
};
LiveTex["openWelcomeWindow"] = function (opt_operatorId, opt_chatAttributes, opt_visitorAttributes) {
  lt.ui.openWindowAPI(lt.sm.ActionType.WELCOME, lt.sm.MemberStatus.ONLINE, String(opt_operatorId || lt.sm.Member.ANY_MEMBER_ID), undefined, opt_chatAttributes, opt_visitorAttributes)
};
LiveTex["openChatWindow"] = function (opt_operatorId, opt_message, opt_chatAttributes, opt_visitorAttributes) {
  var message = opt_message ? String(opt_message) : undefined;
  var type = lt.sm.ActionType.CHAT;
  if (arguments.length === 0)type = lt.sm.ActionType.WELCOME;
  lt.ui.openWindowAPI(type, lt.sm.MemberStatus.ONLINE, String(opt_operatorId || lt.sm.Member.ANY_MEMBER_ID), message, opt_chatAttributes, opt_visitorAttributes)
};
LiveTex["openEmbeddedChatWindow"] = function (opt_operatorId, opt_message, opt_chatAttributes, opt_visitorAttributes) {
  var type = arguments.length !== 0 ? lt.sm.ActionType.CHAT : lt.sm.ActionType.WELCOME;
  if (opt_operatorId !== undefined && isNaN(opt_operatorId))type = lt.sm.ActionType.OFFLINE;
  var memberId = "";
  if (type === lt.sm.ActionType.CHAT)memberId = String(opt_operatorId);
  if (type === lt.sm.ActionType.OFFLINE || type === lt.sm.ActionType.WELCOME)memberId = lt.sm.Member.DUMMY_MEMBER_ID;
  if (opt_operatorId === "")memberId = lt.sm.Member.ANY_MEMBER_ID;
  lt.ui.openEmbeddedWindowAPI(type, memberId, opt_message ? String(opt_message) : undefined, opt_chatAttributes, opt_visitorAttributes)
};
LiveTex["openOfflineWindow"] = function () {
  lt.ui.openWindowAPI(lt.sm.ActionType.OFFLINE, lt.sm.MemberStatus.OFFLINE)
};
LiveTex["getOperators"] = function (callback) {
  LiveTex.site.getMembers(function (members) {
    callback(lt.sm.serializeArray(members))
  }, true)
};
LiveTex["getOperatorStates"] = function (callback) {
  callback([
    {"id": 0, "name": "offline", "description": "member is offline"},
    {"id": 1, "name": "online", "description": "member is online"},
    {"id": 2, "name": "busy", "description": "member is busy"}
  ])
};
LiveTex["getGroupStatus"] = function (groupId, callback) {
  groupId = Number(groupId);
  LiveTex.site.getMembers(function (members) {
    var isOnline = false;
    var serializedMembers = lt.sm.serializeArray(members);
    for (var i = 0, l = serializedMembers.length; i < l; i += 1) {
      if (serializedMembers[i]["state_id"]) {
        var groups = serializedMembers[i]["department_id"];
        for (var j = 0, k = groups.length; j < k; j += 1)if (groups[j] === groupId) {
          isOnline = true;
          break
        }
      }
      if (isOnline)break
    }
    callback(isOnline)
  }, true)
};
LiveTex["setName"] = function (name, opt_callback, opt_isEditable) {
  if (typeof name === "string") {
    lt.sm.getVisitor().setDisplayName(name, opt_isEditable);
    lt.api.setName(name, function () {
      (opt_callback || util.nop)()
    })
  } else if (opt_callback)opt_callback("Incorrect name format.")
};
LiveTex["getDepartments"] = function (callback) {
  lt.api.getLegacyAllGroups(callback)
};
LiveTex["setPrechatFields"] = function (prechatFirst, prechatSecond, opt_callback) {
  LiveTex.prechatData = {prechatFields: [String(prechatFirst), String(prechatSecond)]};
  if (opt_callback)opt_callback()
};
LiveTex["setManyPrechatFields"] = function (user, hidden, opt_callback) {
  LiveTex.manyPrechatFieldsValues = {user: user, hidden: hidden};
  if (opt_callback)opt_callback()
};
LiveTex["setWelcomeGroups"] = function (groups, opt_callback) {
  if (typeof groups === "string" || typeof groups === "number")LiveTex.welcomeGroups = groups; else if (groups instanceof Array)LiveTex.welcomeGroups = groups.join(",");
  if (opt_callback)opt_callback()
};
LiveTex["showInvitation"] = function (text, opt_groupId, opt_memberId, opt_accountId, opt_callback) {
  if (typeof text === "undefined" || !lt.ui.isLabelOnline())return;
  var callback = opt_callback || util.nop;
  var featureType = lt.sm.ActionType.CHAT;
  var memberId = String(opt_memberId || lt.sm.Member.ANY_MEMBER_ID);
  var groupId = String(opt_groupId || lt.sm.Group.ANY_GROUP_ID);
  var visitor = lt.sm.getVisitor();

  function handleGroupExistence(isExist) {
    if (isExist && visitor !== null)createInvitation(visitor); else callback(false)
  }

  function createInvitation(visitor) {
    lt.sm.setApiOpenInitiator();
    var site = visitor.getSite();
    var preFeature = lt.sm.factory.createFeature(featureType, memberId, groupId, site);
    lt.api.populateFeatures([preFeature], function (features) {
      site.addFeatures(features);
      var feature = features[0] || site.lookupForFeature({"type": featureType, "member_id": memberId, "group_id": groupId});
      if (feature.getMember().getStatus() === lt.sm.MemberStatus.ONLINE) {
        if (visitor !== null) {
          var invite = new lt.sm.Invite(Math.random().toString(36).substr(2, 4), feature, visitor, String(text));
          lt.ui.showInvite(invite,
              lt.sm.OpenInitiator.API)
        }
      } else {
        lt.ui.updateLabelFeature(feature);
        lt.ui.switchFromOnline();
        lt.ui.switchToOffline();
        var actionType = site.isLeadEnabled() ? lt.sm.ActionType.LEAD : lt.sm.ActionType.OFFLINE;
        lt.ui.openEmbeddedWindow(actionType)
      }
      callback(true)
    })
  }

  if (visitor instanceof lt.sm.Visitor)if (groupId === lt.sm.Group.ANY_GROUP_ID)handleGroupExistence(true); else lt.api.hasGroup(groupId, handleGroupExistence); else callback(false)
};
LiveTex["getButton"] = function (id, callback) {
  if (window.liveSettings !== undefined && typeof window.liveSettings.buttons === "object") {
    var searchId = "liveTexButton_" + id;
    for (var i in window.liveSettings.buttons)if (window.liveSettings.buttons[i]["id"] === searchId) {
      callback(window.liveSettings.buttons[i]);
      return
    }
    callback({"errno": 1003, "errtext": "Button not found"})
  } else callback({"errno": 1003, "errtext": "Can`t load settings"})
};
LiveTex["setWelcomeOpenCallback"] = function (callback) {
  if (typeof callback === "function")LiveTex.on(lt.ext.events.EventType.CHAT_WELCOME_OPEN, callback)
};
LiveTex["setChatOpenCallback"] = function (callback) {
  if (typeof callback === "function")LiveTex.on(lt.ext.events.EventType.CHAT_OPEN, callback)
};
LiveTex["setInvitationOpenCallback"] = function (callback) {
  if (typeof callback === "function")LiveTex.on(lt.ext.events.EventType.CHAT_INVITATION_OPEN, function (result) {
    callback(result["data"]["source"])
  })
};
LiveTex["setInvitationActionCallback"] = function (callback) {
  if (typeof callback === "function")LiveTex.on(lt.ext.events.EventType.CHAT_INVITATION_ACTION, function (result) {
    callback(result["data"]["action"])
  })
};
function reinitSession() {
  lt.api.reject(function () {
    LiveTex["authorize"](function () {
      if (LiveTex.site instanceof lt.sm.Site) {
        lt.ui.resetView();
        lt.ui.init(LiveTex.site)
      }
    })
  })
}
LiveTex["reinitSession"] = function (callback) {
  lt.api.setReinitId();
  lt.sm.removeCookies();
  lt.sm.removeVisitor();
  reinitSession();
  lt.tabs.dispatch(lt.tabs.EventType.REINIT, lt.api.getReinitId());
  if (typeof callback === "function")callback()
};
LiveTex["hideInvitation"] = function () {
  lt.ui.hideLabel()
};
LiveTex["isInvitationShown"] = function () {
  return lt.ui.isLabelShown()
};
LiveTex["openCallWindow"] = function (opt_groupId) {
  if (typeof opt_groupId !== "undefined") {
    var groupId = String(opt_groupId);
    lt.api.hasGroup(groupId, function (isGroupExists) {
      if (isGroupExists)lt.ui.openCallsWindowAPI(groupId)
    })
  } else lt.ui.openCallsWindowAPI()
};
LiveTex["showChatLabel"] = function () {
  lt.ui.showChatLabel()
};
LiveTex["hideChatLabel"] = function () {
  lt.ui.hideChatLabel()
};
LiveTex["showCallLabel"] = function () {
  lt.ui.showSoundLabel()
};
LiveTex["hideCallLabel"] = function () {
  lt.ui.hideSoundLabel()
};
util.dom.getElementsByClassName = function (className, opt_element) {
  var element = opt_element || document;
  if (element.getElementsByClassName !== undefined &&
      window['MooTools'] === undefined) {
    return util.toArray(element.getElementsByClassName(className));
  } else {
    return util.dom.select('.' + className, element);
  }
};
