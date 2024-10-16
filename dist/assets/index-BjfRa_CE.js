function _f(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Pf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ta = { exports: {} },
  Ji = {},
  La = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = Symbol.for("react.element"),
  jf = Symbol.for("react.portal"),
  Nf = Symbol.for("react.fragment"),
  Tf = Symbol.for("react.strict_mode"),
  Lf = Symbol.for("react.profiler"),
  Rf = Symbol.for("react.provider"),
  Ff = Symbol.for("react.context"),
  Of = Symbol.for("react.forward_ref"),
  If = Symbol.for("react.suspense"),
  Af = Symbol.for("react.memo"),
  zf = Symbol.for("react.lazy"),
  Gl = Symbol.iterator;
function Uf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gl && e[Gl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ra = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fa = Object.assign,
  Oa = {};
function In(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ra);
}
In.prototype.isReactComponent = {};
In.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
In.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ia() {}
Ia.prototype = In.prototype;
function Ks(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ra);
}
var Ys = (Ks.prototype = new Ia());
Ys.constructor = Ks;
Fa(Ys, In.prototype);
Ys.isPureReactComponent = !0;
var Zl = Array.isArray,
  Aa = Object.prototype.hasOwnProperty,
  Xs = { current: null },
  za = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ua(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Aa.call(t, r) && !za.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Tr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Xs.current,
  };
}
function Bf(e, t) {
  return {
    $$typeof: Tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Js(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function Mf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bl = /\/+/g;
function go(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Mf("" + e.key)
    : t.toString(36);
}
function ui(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Tr:
          case jf:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + go(s, 0) : r),
      Zl(i)
        ? ((n = ""),
          e != null && (n = e.replace(bl, "$&/") + "/"),
          ui(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Js(i) &&
            (i = Bf(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(bl, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Zl(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = r + go(o, l);
      s += ui(o, t, n, u, i);
    }
  else if (((u = Uf(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + go(o, l++)), (s += ui(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function $r(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ui(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Df(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ge = { current: null },
  ai = { transition: null },
  $f = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: ai,
    ReactCurrentOwner: Xs,
  };
B.Children = {
  map: $r,
  forEach: function (e, t, n) {
    $r(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      $r(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      $r(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Js(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = In;
B.Fragment = Nf;
B.Profiler = Lf;
B.PureComponent = Ks;
B.StrictMode = Tf;
B.Suspense = If;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Fa({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Xs.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Aa.call(t, u) &&
        !za.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Tr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ff,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rf, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Ua;
B.createFactory = function (e) {
  var t = Ua.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Of, render: e };
};
B.isValidElement = Js;
B.lazy = function (e) {
  return { $$typeof: zf, _payload: { _status: -1, _result: e }, _init: Df };
};
B.memo = function (e, t) {
  return { $$typeof: Af, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = ai.transition;
  ai.transition = {};
  try {
    e();
  } finally {
    ai.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return ge.current.useCallback(e, t);
};
B.useContext = function (e) {
  return ge.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return ge.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return ge.current.useEffect(e, t);
};
B.useId = function () {
  return ge.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return ge.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return ge.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return ge.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return ge.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return ge.current.useRef(e);
};
B.useState = function (e) {
  return ge.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return ge.current.useTransition();
};
B.version = "18.2.0";
La.exports = B;
var E = La.exports;
const st = Pf(E),
  Vf = _f({ __proto__: null, default: st }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hf = E,
  Wf = Symbol.for("react.element"),
  qf = Symbol.for("react.fragment"),
  Qf = Object.prototype.hasOwnProperty,
  Kf = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Yf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ba(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Qf.call(t, r) && !Yf.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Wf,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Kf.current,
  };
}
Ji.Fragment = qf;
Ji.jsx = Ba;
Ji.jsxs = Ba;
Ta.exports = Ji;
var a = Ta.exports,
  qo = {},
  Ma = { exports: {} },
  Te = {},
  Da = { exports: {} },
  $a = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, I) {
    var A = L.length;
    L.push(I);
    e: for (; 0 < A; ) {
      var F = (A - 1) >>> 1,
        $ = L[F];
      if (0 < i($, I)) (L[F] = I), (L[A] = $), (A = F);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var I = L[0],
      A = L.pop();
    if (A !== I) {
      L[0] = A;
      e: for (var F = 0, $ = L.length, Ce = $ >>> 1; F < Ce; ) {
        var V = 2 * (F + 1) - 1,
          sn = L[V],
          $t = V + 1,
          Dr = L[$t];
        if (0 > i(sn, A))
          $t < $ && 0 > i(Dr, sn)
            ? ((L[F] = Dr), (L[$t] = A), (F = $t))
            : ((L[F] = sn), (L[V] = A), (F = V));
        else if ($t < $ && 0 > i(Dr, A)) (L[F] = Dr), (L[$t] = A), (F = $t);
        else break e;
      }
    }
    return I;
  }
  function i(L, I) {
    var A = L.sortIndex - I.sortIndex;
    return A !== 0 ? A : L.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    c = [],
    f = 1,
    d = null,
    m = 3,
    w = !1,
    v = !1,
    k = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(L) {
    for (var I = n(c); I !== null; ) {
      if (I.callback === null) r(c);
      else if (I.startTime <= L)
        r(c), (I.sortIndex = I.expirationTime), t(u, I);
      else break;
      I = n(c);
    }
  }
  function x(L) {
    if (((k = !1), g(L), !v))
      if (n(u) !== null) (v = !0), rn(T);
      else {
        var I = n(c);
        I !== null && on(x, I.startTime - L);
      }
  }
  function T(L, I) {
    (v = !1), k && ((k = !1), p(y), (y = -1)), (w = !0);
    var A = m;
    try {
      for (
        g(I), d = n(u);
        d !== null && (!(d.expirationTime > I) || (L && !O()));

      ) {
        var F = d.callback;
        if (typeof F == "function") {
          (d.callback = null), (m = d.priorityLevel);
          var $ = F(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof $ == "function" ? (d.callback = $) : d === n(u) && r(u),
            g(I);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var Ce = !0;
      else {
        var V = n(c);
        V !== null && on(x, V.startTime - I), (Ce = !1);
      }
      return Ce;
    } finally {
      (d = null), (m = A), (w = !1);
    }
  }
  var S = !1,
    N = null,
    y = -1,
    _ = 5,
    C = -1;
  function O() {
    return !(e.unstable_now() - C < _);
  }
  function U() {
    if (N !== null) {
      var L = e.unstable_now();
      C = L;
      var I = !0;
      try {
        I = N(!0, L);
      } finally {
        I ? ie() : ((S = !1), (N = null));
      }
    } else S = !1;
  }
  var ie;
  if (typeof h == "function")
    ie = function () {
      h(U);
    };
  else if (typeof MessageChannel < "u") {
    var Dt = new MessageChannel(),
      gt = Dt.port2;
    (Dt.port1.onmessage = U),
      (ie = function () {
        gt.postMessage(null);
      });
  } else
    ie = function () {
      P(U, 0);
    };
  function rn(L) {
    (N = L), S || ((S = !0), ie());
  }
  function on(L, I) {
    y = P(function () {
      L(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || w || ((v = !0), rn(T));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (L) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var A = m;
      m = I;
      try {
        return L();
      } finally {
        m = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, I) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var A = m;
      m = L;
      try {
        return I();
      } finally {
        m = A;
      }
    }),
    (e.unstable_scheduleCallback = function (L, I, A) {
      var F = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? F + A : F))
          : (A = F),
        L)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = A + $),
        (L = {
          id: f++,
          callback: I,
          priorityLevel: L,
          startTime: A,
          expirationTime: $,
          sortIndex: -1,
        }),
        A > F
          ? ((L.sortIndex = A),
            t(c, L),
            n(u) === null &&
              L === n(c) &&
              (k ? (p(y), (y = -1)) : (k = !0), on(x, A - F)))
          : ((L.sortIndex = $), t(u, L), v || w || ((v = !0), rn(T))),
        L
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (L) {
      var I = m;
      return function () {
        var A = m;
        m = I;
        try {
          return L.apply(this, arguments);
        } finally {
          m = A;
        }
      };
    });
})($a);
Da.exports = $a;
var Xf = Da.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Va = E,
  Ne = Xf;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ha = new Set(),
  cr = {};
function en(e, t) {
  jn(e, t), jn(e + "Capture", t);
}
function jn(e, t) {
  for (cr[e] = t, e = 0; e < t.length; e++) Ha.add(t[e]);
}
var at = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qo = Object.prototype.hasOwnProperty,
  Jf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  eu = {},
  tu = {};
function Gf(e) {
  return Qo.call(tu, e)
    ? !0
    : Qo.call(eu, e)
    ? !1
    : Jf.test(e)
    ? (tu[e] = !0)
    : ((eu[e] = !0), !1);
}
function Zf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function bf(e, t, n, r) {
  if (t === null || typeof t > "u" || Zf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gs = /[\-:]([a-z])/g;
function Zs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gs, Zs);
    ae[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gs, Zs);
    ae[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gs, Zs);
  ae[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bs(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (bf(t, n, i, r) && (n = null),
    r || i === null
      ? Gf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = Va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vr = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  cn = Symbol.for("react.fragment"),
  el = Symbol.for("react.strict_mode"),
  Ko = Symbol.for("react.profiler"),
  Wa = Symbol.for("react.provider"),
  qa = Symbol.for("react.context"),
  tl = Symbol.for("react.forward_ref"),
  Yo = Symbol.for("react.suspense"),
  Xo = Symbol.for("react.suspense_list"),
  nl = Symbol.for("react.memo"),
  yt = Symbol.for("react.lazy"),
  Qa = Symbol.for("react.offscreen"),
  nu = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nu && e[nu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  vo;
function Xn(e) {
  if (vo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vo = (t && t[1]) || "";
    }
  return (
    `
` +
    vo +
    e
  );
}
var yo = !1;
function wo(e, t) {
  if (!e || yo) return "";
  yo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var u =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (yo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function eh(e) {
  switch (e.tag) {
    case 5:
      return Xn(e.type);
    case 16:
      return Xn("Lazy");
    case 13:
      return Xn("Suspense");
    case 19:
      return Xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = wo(e.type, !1)), e;
    case 11:
      return (e = wo(e.type.render, !1)), e;
    case 1:
      return (e = wo(e.type, !0)), e;
    default:
      return "";
  }
}
function Jo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cn:
      return "Fragment";
    case an:
      return "Portal";
    case Ko:
      return "Profiler";
    case el:
      return "StrictMode";
    case Yo:
      return "Suspense";
    case Xo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qa:
        return (e.displayName || "Context") + ".Consumer";
      case Wa:
        return (e._context.displayName || "Context") + ".Provider";
      case tl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case nl:
        return (
          (t = e.displayName || null), t !== null ? t : Jo(e.type) || "Memo"
        );
      case yt:
        (t = e._payload), (e = e._init);
        try {
          return Jo(e(t));
        } catch {}
    }
  return null;
}
function th(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jo(t);
    case 8:
      return t === el ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function At(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ka(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function nh(e) {
  var t = Ka(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Hr(e) {
  e._valueTracker || (e._valueTracker = nh(e));
}
function Ya(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ka(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ei(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Go(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = At(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xa(e, t) {
  (t = t.checked), t != null && bs(e, "checked", t, !1);
}
function Zo(e, t) {
  Xa(e, t);
  var n = At(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bo(e, t.type, At(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function iu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bo(e, t, n) {
  (t !== "number" || Ei(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jn = Array.isArray;
function xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + At(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function es(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (Jn(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: At(n) };
}
function Ja(e, t) {
  var n = At(t.value),
    r = At(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function su(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ga(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ts(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ga(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Wr,
  Za = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Wr = Wr || document.createElement("div"),
          Wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var er = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  rh = ["Webkit", "ms", "Moz", "O"];
Object.keys(er).forEach(function (e) {
  rh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (er[t] = er[e]);
  });
});
function ba(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (er.hasOwnProperty(e) && er[e])
    ? ("" + t).trim()
    : t + "px";
}
function ec(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ba(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ih = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ns(e, t) {
  if (t) {
    if (ih[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function rs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var is = null;
function rl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var os = null,
  En = null,
  Sn = null;
function lu(e) {
  if ((e = Fr(e))) {
    if (typeof os != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = to(t)), os(e.stateNode, e.type, t));
  }
}
function tc(e) {
  En ? (Sn ? Sn.push(e) : (Sn = [e])) : (En = e);
}
function nc() {
  if (En) {
    var e = En,
      t = Sn;
    if (((Sn = En = null), lu(e), t)) for (e = 0; e < t.length; e++) lu(t[e]);
  }
}
function rc(e, t) {
  return e(t);
}
function ic() {}
var ko = !1;
function oc(e, t, n) {
  if (ko) return e(t, n);
  ko = !0;
  try {
    return rc(e, t, n);
  } finally {
    (ko = !1), (En !== null || Sn !== null) && (ic(), nc());
  }
}
function fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = to(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var ss = !1;
if (at)
  try {
    var $n = {};
    Object.defineProperty($n, "passive", {
      get: function () {
        ss = !0;
      },
    }),
      window.addEventListener("test", $n, $n),
      window.removeEventListener("test", $n, $n);
  } catch {
    ss = !1;
  }
function oh(e, t, n, r, i, o, s, l, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var tr = !1,
  Si = null,
  Ci = !1,
  ls = null,
  sh = {
    onError: function (e) {
      (tr = !0), (Si = e);
    },
  };
function lh(e, t, n, r, i, o, s, l, u) {
  (tr = !1), (Si = null), oh.apply(sh, arguments);
}
function uh(e, t, n, r, i, o, s, l, u) {
  if ((lh.apply(this, arguments), tr)) {
    if (tr) {
      var c = Si;
      (tr = !1), (Si = null);
    } else throw Error(j(198));
    Ci || ((Ci = !0), (ls = c));
  }
}
function tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function sc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function uu(e) {
  if (tn(e) !== e) throw Error(j(188));
}
function ah(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = tn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return uu(i), e;
        if (o === r) return uu(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function lc(e) {
  return (e = ah(e)), e !== null ? uc(e) : null;
}
function uc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ac = Ne.unstable_scheduleCallback,
  au = Ne.unstable_cancelCallback,
  ch = Ne.unstable_shouldYield,
  dh = Ne.unstable_requestPaint,
  Z = Ne.unstable_now,
  fh = Ne.unstable_getCurrentPriorityLevel,
  il = Ne.unstable_ImmediatePriority,
  cc = Ne.unstable_UserBlockingPriority,
  _i = Ne.unstable_NormalPriority,
  hh = Ne.unstable_LowPriority,
  dc = Ne.unstable_IdlePriority,
  Gi = null,
  Ze = null;
function ph(e) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function")
    try {
      Ze.onCommitFiberRoot(Gi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : vh,
  mh = Math.log,
  gh = Math.LN2;
function vh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mh(e) / gh) | 0)) | 0;
}
var qr = 64,
  Qr = 4194304;
function Gn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Pi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Gn(l)) : ((o &= s), o !== 0 && (r = Gn(o)));
  } else (s = n & ~i), s !== 0 ? (r = Gn(s)) : o !== 0 && (r = Gn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function yh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Qe(o),
      l = 1 << s,
      u = i[s];
    u === -1
      ? (!(l & n) || l & r) && (i[s] = yh(l, t))
      : u <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function us(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fc() {
  var e = qr;
  return (qr <<= 1), !(qr & 4194240) && (qr = 64), e;
}
function xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n);
}
function kh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Qe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ol(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var H = 0;
function hc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pc,
  sl,
  mc,
  gc,
  vc,
  as = !1,
  Kr = [],
  _t = null,
  Pt = null,
  jt = null,
  hr = new Map(),
  pr = new Map(),
  kt = [],
  xh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      jt = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pr.delete(t.pointerId);
  }
}
function Vn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Fr(t)), t !== null && sl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Eh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (_t = Vn(_t, e, t, n, r, i)), !0;
    case "dragenter":
      return (Pt = Vn(Pt, e, t, n, r, i)), !0;
    case "mouseover":
      return (jt = Vn(jt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return hr.set(o, Vn(hr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), pr.set(o, Vn(pr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function yc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = sc(n)), t !== null)) {
          (e.blockedOn = t),
            vc(e.priority, function () {
              mc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ci(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = cs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (is = r), n.target.dispatchEvent(r), (is = null);
    } else return (t = Fr(n)), t !== null && sl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function du(e, t, n) {
  ci(e) && n.delete(t);
}
function Sh() {
  (as = !1),
    _t !== null && ci(_t) && (_t = null),
    Pt !== null && ci(Pt) && (Pt = null),
    jt !== null && ci(jt) && (jt = null),
    hr.forEach(du),
    pr.forEach(du);
}
function Hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    as ||
      ((as = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Sh)));
}
function mr(e) {
  function t(i) {
    return Hn(i, e);
  }
  if (0 < Kr.length) {
    Hn(Kr[0], e);
    for (var n = 1; n < Kr.length; n++) {
      var r = Kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    _t !== null && Hn(_t, e),
      Pt !== null && Hn(Pt, e),
      jt !== null && Hn(jt, e),
      hr.forEach(t),
      pr.forEach(t),
      n = 0;
    n < kt.length;
    n++
  )
    (r = kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && ((n = kt[0]), n.blockedOn === null); )
    yc(n), n.blockedOn === null && kt.shift();
}
var Cn = ht.ReactCurrentBatchConfig,
  ji = !0;
function Ch(e, t, n, r) {
  var i = H,
    o = Cn.transition;
  Cn.transition = null;
  try {
    (H = 1), ll(e, t, n, r);
  } finally {
    (H = i), (Cn.transition = o);
  }
}
function _h(e, t, n, r) {
  var i = H,
    o = Cn.transition;
  Cn.transition = null;
  try {
    (H = 4), ll(e, t, n, r);
  } finally {
    (H = i), (Cn.transition = o);
  }
}
function ll(e, t, n, r) {
  if (ji) {
    var i = cs(e, t, n, r);
    if (i === null) Ro(e, t, r, Ni, n), cu(e, r);
    else if (Eh(i, e, t, n, r)) r.stopPropagation();
    else if ((cu(e, r), t & 4 && -1 < xh.indexOf(e))) {
      for (; i !== null; ) {
        var o = Fr(i);
        if (
          (o !== null && pc(o),
          (o = cs(e, t, n, r)),
          o === null && Ro(e, t, r, Ni, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ro(e, t, r, null, n);
  }
}
var Ni = null;
function cs(e, t, n, r) {
  if (((Ni = null), (e = rl(r)), (e = Wt(e)), e !== null))
    if (((t = tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = sc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ni = e), null;
}
function wc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (fh()) {
        case il:
          return 1;
        case cc:
          return 4;
        case _i:
        case hh:
          return 16;
        case dc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  ul = null,
  di = null;
function kc() {
  if (di) return di;
  var e,
    t = ul,
    n = t.length,
    r,
    i = "value" in Et ? Et.value : Et.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (di = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yr() {
  return !0;
}
function fu() {
  return !1;
}
function Le(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Yr
        : fu),
      (this.isPropagationStopped = fu),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Yr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yr));
      },
      persist: function () {},
      isPersistent: Yr,
    }),
    t
  );
}
var An = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  al = Le(An),
  Rr = J({}, An, { view: 0, detail: 0 }),
  Ph = Le(Rr),
  Eo,
  So,
  Wn,
  Zi = J({}, Rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Wn &&
            (Wn && e.type === "mousemove"
              ? ((Eo = e.screenX - Wn.screenX), (So = e.screenY - Wn.screenY))
              : (So = Eo = 0),
            (Wn = e)),
          Eo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : So;
    },
  }),
  hu = Le(Zi),
  jh = J({}, Zi, { dataTransfer: 0 }),
  Nh = Le(jh),
  Th = J({}, Rr, { relatedTarget: 0 }),
  Co = Le(Th),
  Lh = J({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rh = Le(Lh),
  Fh = J({}, An, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Oh = Le(Fh),
  Ih = J({}, An, { data: 0 }),
  pu = Le(Ih),
  Ah = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Uh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Uh[e]) ? !!t[e] : !1;
}
function cl() {
  return Bh;
}
var Mh = J({}, Rr, {
    key: function (e) {
      if (e.key) {
        var t = Ah[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cl,
    charCode: function (e) {
      return e.type === "keypress" ? fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Dh = Le(Mh),
  $h = J({}, Zi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  mu = Le($h),
  Vh = J({}, Rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cl,
  }),
  Hh = Le(Vh),
  Wh = J({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qh = Le(Wh),
  Qh = J({}, Zi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Kh = Le(Qh),
  Yh = [9, 13, 27, 32],
  dl = at && "CompositionEvent" in window,
  nr = null;
at && "documentMode" in document && (nr = document.documentMode);
var Xh = at && "TextEvent" in window && !nr,
  xc = at && (!dl || (nr && 8 < nr && 11 >= nr)),
  gu = " ",
  vu = !1;
function Ec(e, t) {
  switch (e) {
    case "keyup":
      return Yh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dn = !1;
function Jh(e, t) {
  switch (e) {
    case "compositionend":
      return Sc(t);
    case "keypress":
      return t.which !== 32 ? null : ((vu = !0), gu);
    case "textInput":
      return (e = t.data), e === gu && vu ? null : e;
    default:
      return null;
  }
}
function Gh(e, t) {
  if (dn)
    return e === "compositionend" || (!dl && Ec(e, t))
      ? ((e = kc()), (di = ul = Et = null), (dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zh[e.type] : t === "textarea";
}
function Cc(e, t, n, r) {
  tc(r),
    (t = Ti(t, "onChange")),
    0 < t.length &&
      ((n = new al("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var rr = null,
  gr = null;
function bh(e) {
  Ac(e, 0);
}
function bi(e) {
  var t = pn(e);
  if (Ya(t)) return e;
}
function ep(e, t) {
  if (e === "change") return t;
}
var _c = !1;
if (at) {
  var _o;
  if (at) {
    var Po = "oninput" in document;
    if (!Po) {
      var wu = document.createElement("div");
      wu.setAttribute("oninput", "return;"),
        (Po = typeof wu.oninput == "function");
    }
    _o = Po;
  } else _o = !1;
  _c = _o && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  rr && (rr.detachEvent("onpropertychange", Pc), (gr = rr = null));
}
function Pc(e) {
  if (e.propertyName === "value" && bi(gr)) {
    var t = [];
    Cc(t, gr, e, rl(e)), oc(bh, t);
  }
}
function tp(e, t, n) {
  e === "focusin"
    ? (ku(), (rr = t), (gr = n), rr.attachEvent("onpropertychange", Pc))
    : e === "focusout" && ku();
}
function np(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return bi(gr);
}
function rp(e, t) {
  if (e === "click") return bi(t);
}
function ip(e, t) {
  if (e === "input" || e === "change") return bi(t);
}
function op(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : op;
function vr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Qo.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eu(e, t) {
  var n = xu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xu(n);
  }
}
function jc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? jc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Nc() {
  for (var e = window, t = Ei(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ei(e.document);
  }
  return t;
}
function fl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function sp(e) {
  var t = Nc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    jc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Eu(n, o));
        var s = Eu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var lp = at && "documentMode" in document && 11 >= document.documentMode,
  fn = null,
  ds = null,
  ir = null,
  fs = !1;
function Su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fs ||
    fn == null ||
    fn !== Ei(r) ||
    ((r = fn),
    "selectionStart" in r && fl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ir && vr(ir, r)) ||
      ((ir = r),
      (r = Ti(ds, "onSelect")),
      0 < r.length &&
        ((t = new al("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fn))));
}
function Xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var hn = {
    animationend: Xr("Animation", "AnimationEnd"),
    animationiteration: Xr("Animation", "AnimationIteration"),
    animationstart: Xr("Animation", "AnimationStart"),
    transitionend: Xr("Transition", "TransitionEnd"),
  },
  jo = {},
  Tc = {};
at &&
  ((Tc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hn.animationend.animation,
    delete hn.animationiteration.animation,
    delete hn.animationstart.animation),
  "TransitionEvent" in window || delete hn.transitionend.transition);
function eo(e) {
  if (jo[e]) return jo[e];
  if (!hn[e]) return e;
  var t = hn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tc) return (jo[e] = t[n]);
  return e;
}
var Lc = eo("animationend"),
  Rc = eo("animationiteration"),
  Fc = eo("animationstart"),
  Oc = eo("transitionend"),
  Ic = new Map(),
  Cu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ut(e, t) {
  Ic.set(e, t), en(t, [e]);
}
for (var No = 0; No < Cu.length; No++) {
  var To = Cu[No],
    up = To.toLowerCase(),
    ap = To[0].toUpperCase() + To.slice(1);
  Ut(up, "on" + ap);
}
Ut(Lc, "onAnimationEnd");
Ut(Rc, "onAnimationIteration");
Ut(Fc, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(Oc, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
en(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
en(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
en(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
en(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Zn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  cp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function _u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), uh(r, t, void 0, e), (e.currentTarget = null);
}
function Ac(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          _u(i, l, c), (o = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          _u(i, l, c), (o = u);
        }
    }
  }
  if (Ci) throw ((e = ls), (Ci = !1), (ls = null), e);
}
function q(e, t) {
  var n = t[vs];
  n === void 0 && (n = t[vs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zc(t, e, 2, !1), n.add(r));
}
function Lo(e, t, n) {
  var r = 0;
  t && (r |= 4), zc(n, e, r, t);
}
var Jr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Jr]) {
    (e[Jr] = !0),
      Ha.forEach(function (n) {
        n !== "selectionchange" && (cp.has(n) || Lo(n, !1, e), Lo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jr] || ((t[Jr] = !0), Lo("selectionchange", !1, t));
  }
}
function zc(e, t, n, r) {
  switch (wc(t)) {
    case 1:
      var i = Ch;
      break;
    case 4:
      i = _h;
      break;
    default:
      i = ll;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ss ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ro(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Wt(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  oc(function () {
    var c = o,
      f = rl(n),
      d = [];
    e: {
      var m = Ic.get(e);
      if (m !== void 0) {
        var w = al,
          v = e;
        switch (e) {
          case "keypress":
            if (fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Dh;
            break;
          case "focusin":
            (v = "focus"), (w = Co);
            break;
          case "focusout":
            (v = "blur"), (w = Co);
            break;
          case "beforeblur":
          case "afterblur":
            w = Co;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = hu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Nh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Hh;
            break;
          case Lc:
          case Rc:
          case Fc:
            w = Rh;
            break;
          case Oc:
            w = qh;
            break;
          case "scroll":
            w = Ph;
            break;
          case "wheel":
            w = Kh;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Oh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = mu;
        }
        var k = (t & 4) !== 0,
          P = !k && e === "scroll",
          p = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var h = c, g; h !== null; ) {
          g = h;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              p !== null && ((x = fr(h, p)), x != null && k.push(wr(h, x, g)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < k.length &&
          ((m = new w(m, v, null, n, f)), d.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== is &&
            (v = n.relatedTarget || n.fromElement) &&
            (Wt(v) || v[ct]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            f.window === f
              ? f
              : (m = f.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((v = n.relatedTarget || n.toElement),
              (w = c),
              (v = v ? Wt(v) : null),
              v !== null &&
                ((P = tn(v)), v !== P || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((w = null), (v = c)),
          w !== v)
        ) {
          if (
            ((k = hu),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = mu),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (P = w == null ? m : pn(w)),
            (g = v == null ? m : pn(v)),
            (m = new k(x, h + "leave", w, n, f)),
            (m.target = P),
            (m.relatedTarget = g),
            (x = null),
            Wt(f) === c &&
              ((k = new k(p, h + "enter", v, n, f)),
              (k.target = g),
              (k.relatedTarget = P),
              (x = k)),
            (P = x),
            w && v)
          )
            t: {
              for (k = w, p = v, h = 0, g = k; g; g = ln(g)) h++;
              for (g = 0, x = p; x; x = ln(x)) g++;
              for (; 0 < h - g; ) (k = ln(k)), h--;
              for (; 0 < g - h; ) (p = ln(p)), g--;
              for (; h--; ) {
                if (k === p || (p !== null && k === p.alternate)) break t;
                (k = ln(k)), (p = ln(p));
              }
              k = null;
            }
          else k = null;
          w !== null && Pu(d, m, w, k, !1),
            v !== null && P !== null && Pu(d, P, v, k, !0);
        }
      }
      e: {
        if (
          ((m = c ? pn(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var T = ep;
        else if (yu(m))
          if (_c) T = ip;
          else {
            T = np;
            var S = tp;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (T = rp);
        if (T && (T = T(e, c))) {
          Cc(d, T, n, f);
          break e;
        }
        S && S(e, m, c),
          e === "focusout" &&
            (S = m._wrapperState) &&
            S.controlled &&
            m.type === "number" &&
            bo(m, "number", m.value);
      }
      switch (((S = c ? pn(c) : window), e)) {
        case "focusin":
          (yu(S) || S.contentEditable === "true") &&
            ((fn = S), (ds = c), (ir = null));
          break;
        case "focusout":
          ir = ds = fn = null;
          break;
        case "mousedown":
          fs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fs = !1), Su(d, n, f);
          break;
        case "selectionchange":
          if (lp) break;
        case "keydown":
        case "keyup":
          Su(d, n, f);
      }
      var N;
      if (dl)
        e: {
          switch (e) {
            case "compositionstart":
              var y = "onCompositionStart";
              break e;
            case "compositionend":
              y = "onCompositionEnd";
              break e;
            case "compositionupdate":
              y = "onCompositionUpdate";
              break e;
          }
          y = void 0;
        }
      else
        dn
          ? Ec(e, n) && (y = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
      y &&
        (xc &&
          n.locale !== "ko" &&
          (dn || y !== "onCompositionStart"
            ? y === "onCompositionEnd" && dn && (N = kc())
            : ((Et = f),
              (ul = "value" in Et ? Et.value : Et.textContent),
              (dn = !0))),
        (S = Ti(c, y)),
        0 < S.length &&
          ((y = new pu(y, e, null, n, f)),
          d.push({ event: y, listeners: S }),
          N ? (y.data = N) : ((N = Sc(n)), N !== null && (y.data = N)))),
        (N = Xh ? Jh(e, n) : Gh(e, n)) &&
          ((c = Ti(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new pu("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: c }),
            (f.data = N)));
    }
    Ac(d, t);
  });
}
function wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ti(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = fr(e, n)),
      o != null && r.unshift(wr(e, o, i)),
      (o = fr(e, t)),
      o != null && r.push(wr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      c = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      i
        ? ((u = fr(n, o)), u != null && s.unshift(wr(n, u, l)))
        : i || ((u = fr(n, o)), u != null && s.push(wr(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var dp = /\r\n?/g,
  fp = /\u0000|\uFFFD/g;
function ju(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      dp,
      `
`
    )
    .replace(fp, "");
}
function Gr(e, t, n) {
  if (((t = ju(t)), ju(e) !== t && n)) throw Error(j(425));
}
function Li() {}
var hs = null,
  ps = null;
function ms(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var gs = typeof setTimeout == "function" ? setTimeout : void 0,
  hp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nu = typeof Promise == "function" ? Promise : void 0,
  pp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nu < "u"
      ? function (e) {
          return Nu.resolve(null).then(e).catch(mp);
        }
      : gs;
function mp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), mr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  mr(t);
}
function Nt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Tu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zn = Math.random().toString(36).slice(2),
  Ge = "__reactFiber$" + zn,
  kr = "__reactProps$" + zn,
  ct = "__reactContainer$" + zn,
  vs = "__reactEvents$" + zn,
  gp = "__reactListeners$" + zn,
  vp = "__reactHandles$" + zn;
function Wt(e) {
  var t = e[Ge];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ct] || n[Ge])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Tu(e); e !== null; ) {
          if ((n = e[Ge])) return n;
          e = Tu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Fr(e) {
  return (
    (e = e[Ge] || e[ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function to(e) {
  return e[kr] || null;
}
var ys = [],
  mn = -1;
function Bt(e) {
  return { current: e };
}
function Q(e) {
  0 > mn || ((e.current = ys[mn]), (ys[mn] = null), mn--);
}
function W(e, t) {
  mn++, (ys[mn] = e.current), (e.current = t);
}
var zt = {},
  he = Bt(zt),
  xe = Bt(!1),
  Xt = zt;
function Nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function Ri() {
  Q(xe), Q(he);
}
function Lu(e, t, n) {
  if (he.current !== zt) throw Error(j(168));
  W(he, t), W(xe, n);
}
function Uc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, th(e) || "Unknown", i));
  return J({}, n, r);
}
function Fi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
    (Xt = he.current),
    W(he, e),
    W(xe, xe.current),
    !0
  );
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Uc(e, t, Xt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(xe),
      Q(he),
      W(he, e))
    : Q(xe),
    W(xe, n);
}
var rt = null,
  no = !1,
  Oo = !1;
function Bc(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function yp(e) {
  (no = !0), Bc(e);
}
function Mt() {
  if (!Oo && rt !== null) {
    Oo = !0;
    var e = 0,
      t = H;
    try {
      var n = rt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (no = !1);
    } catch (i) {
      throw (rt !== null && (rt = rt.slice(e + 1)), ac(il, Mt), i);
    } finally {
      (H = t), (Oo = !1);
    }
  }
  return null;
}
var gn = [],
  vn = 0,
  Oi = null,
  Ii = 0,
  Fe = [],
  Oe = 0,
  Jt = null,
  it = 1,
  ot = "";
function Vt(e, t) {
  (gn[vn++] = Ii), (gn[vn++] = Oi), (Oi = e), (Ii = t);
}
function Mc(e, t, n) {
  (Fe[Oe++] = it), (Fe[Oe++] = ot), (Fe[Oe++] = Jt), (Jt = e);
  var r = it;
  e = ot;
  var i = 32 - Qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Qe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (it = (1 << (32 - Qe(t) + i)) | (n << i) | r),
      (ot = o + e);
  } else (it = (1 << o) | (n << i) | r), (ot = e);
}
function hl(e) {
  e.return !== null && (Vt(e, 1), Mc(e, 1, 0));
}
function pl(e) {
  for (; e === Oi; )
    (Oi = gn[--vn]), (gn[vn] = null), (Ii = gn[--vn]), (gn[vn] = null);
  for (; e === Jt; )
    (Jt = Fe[--Oe]),
      (Fe[Oe] = null),
      (ot = Fe[--Oe]),
      (Fe[Oe] = null),
      (it = Fe[--Oe]),
      (Fe[Oe] = null);
}
var je = null,
  Pe = null,
  K = !1,
  qe = null;
function Dc(e, t) {
  var n = Ae(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Pe = Nt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Pe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jt !== null ? { id: it, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Pe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ws(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ks(e) {
  if (K) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!Fu(e, t)) {
        if (ws(e)) throw Error(j(418));
        t = Nt(n.nextSibling);
        var r = je;
        t && Fu(e, t)
          ? Dc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (je = e));
      }
    } else {
      if (ws(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (je = e);
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Zr(e) {
  if (e !== je) return !1;
  if (!K) return Ou(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ms(e.type, e.memoizedProps))),
    t && (t = Pe))
  ) {
    if (ws(e)) throw ($c(), Error(j(418)));
    for (; t; ) Dc(e, t), (t = Nt(t.nextSibling));
  }
  if ((Ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pe = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = je ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function $c() {
  for (var e = Pe; e; ) e = Nt(e.nextSibling);
}
function Tn() {
  (Pe = je = null), (K = !1);
}
function ml(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var wp = ht.ReactCurrentBatchConfig;
function Ve(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ai = Bt(null),
  zi = null,
  yn = null,
  gl = null;
function vl() {
  gl = yn = zi = null;
}
function yl(e) {
  var t = Ai.current;
  Q(Ai), (e._currentValue = t);
}
function xs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function _n(e, t) {
  (zi = e),
    (gl = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (gl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (zi === null) throw Error(j(308));
      (yn = e), (zi.dependencies = { lanes: 0, firstContext: e });
    } else yn = yn.next = e;
  return t;
}
var qt = null;
function wl(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function Vc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), wl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    dt(e, r)
  );
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wt = !1;
function kl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      dt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), wl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    dt(e, n)
  );
}
function hi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ol(e, n);
  }
}
function Iu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ui(e, t, n, r) {
  var i = e.updateQueue;
  wt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      c = u.next;
    (u.next = null), s === null ? (o = c) : (s.next = c), (s = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== s &&
        (l === null ? (f.firstBaseUpdate = c) : (l.next = c),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (f = c = u = null), (l = o);
    do {
      var m = l.lane,
        w = l.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            k = l;
          switch (((m = t), (w = n), k.tag)) {
            case 1:
              if (((v = k.payload), typeof v == "function")) {
                d = v.call(w, d, m);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = k.payload),
                (m = typeof v == "function" ? v.call(w, d, m) : v),
                m == null)
              )
                break e;
              d = J({}, d, m);
              break e;
            case 2:
              wt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [l]) : m.push(l));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((c = f = w), (u = d)) : (f = f.next = w),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = d),
      (i.baseState = u),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Zt |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Au(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var Wc = new Va.Component().refs;
function Es(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ro = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Rt(e),
      o = lt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Tt(e, o, i)),
      t !== null && (Ke(t, e, i, r), hi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Rt(e),
      o = lt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Tt(e, o, i)),
      t !== null && (Ke(t, e, i, r), hi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Rt(e),
      i = lt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Tt(e, i, r)),
      t !== null && (Ke(t, e, r, n), hi(t, e, r));
  },
};
function zu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !vr(n, r) || !vr(i, o)
      : !0
  );
}
function qc(e, t, n) {
  var r = !1,
    i = zt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Me(o))
      : ((i = Ee(t) ? Xt : he.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Nn(e, i) : zt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ro),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Uu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ro.enqueueReplaceState(t, t.state, null);
}
function Ss(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Wc), kl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Me(o))
    : ((o = Ee(t) ? Xt : he.current), (i.context = Nn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Es(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ro.enqueueReplaceState(i, i.state, null),
      Ui(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Wc && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function br(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Bu(e) {
  var t = e._init;
  return t(e._payload);
}
function Qc(e) {
  function t(p, h) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [h]), (p.flags |= 16)) : g.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Ft(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((p.flags |= 2), h) : g)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, g, x) {
    return h === null || h.tag !== 6
      ? ((h = Do(g, p.mode, x)), (h.return = p), h)
      : ((h = i(h, g)), (h.return = p), h);
  }
  function u(p, h, g, x) {
    var T = g.type;
    return T === cn
      ? f(p, h, g.props.children, x, g.key)
      : h !== null &&
        (h.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === yt &&
            Bu(T) === h.type))
      ? ((x = i(h, g.props)), (x.ref = qn(p, h, g)), (x.return = p), x)
      : ((x = wi(g.type, g.key, g.props, null, p.mode, x)),
        (x.ref = qn(p, h, g)),
        (x.return = p),
        x);
  }
  function c(p, h, g, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = $o(g, p.mode, x)), (h.return = p), h)
      : ((h = i(h, g.children || [])), (h.return = p), h);
  }
  function f(p, h, g, x, T) {
    return h === null || h.tag !== 7
      ? ((h = Yt(g, p.mode, x, T)), (h.return = p), h)
      : ((h = i(h, g)), (h.return = p), h);
  }
  function d(p, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Do("" + h, p.mode, g)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Vr:
          return (
            (g = wi(h.type, h.key, h.props, null, p.mode, g)),
            (g.ref = qn(p, null, h)),
            (g.return = p),
            g
          );
        case an:
          return (h = $o(h, p.mode, g)), (h.return = p), h;
        case yt:
          var x = h._init;
          return d(p, x(h._payload), g);
      }
      if (Jn(h) || Dn(h))
        return (h = Yt(h, p.mode, g, null)), (h.return = p), h;
      br(p, h);
    }
    return null;
  }
  function m(p, h, g, x) {
    var T = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return T !== null ? null : l(p, h, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Vr:
          return g.key === T ? u(p, h, g, x) : null;
        case an:
          return g.key === T ? c(p, h, g, x) : null;
        case yt:
          return (T = g._init), m(p, h, T(g._payload), x);
      }
      if (Jn(g) || Dn(g)) return T !== null ? null : f(p, h, g, x, null);
      br(p, g);
    }
    return null;
  }
  function w(p, h, g, x, T) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (p = p.get(g) || null), l(h, p, "" + x, T);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Vr:
          return (p = p.get(x.key === null ? g : x.key) || null), u(h, p, x, T);
        case an:
          return (p = p.get(x.key === null ? g : x.key) || null), c(h, p, x, T);
        case yt:
          var S = x._init;
          return w(p, h, g, S(x._payload), T);
      }
      if (Jn(x) || Dn(x)) return (p = p.get(g) || null), f(h, p, x, T, null);
      br(h, x);
    }
    return null;
  }
  function v(p, h, g, x) {
    for (
      var T = null, S = null, N = h, y = (h = 0), _ = null;
      N !== null && y < g.length;
      y++
    ) {
      N.index > y ? ((_ = N), (N = null)) : (_ = N.sibling);
      var C = m(p, N, g[y], x);
      if (C === null) {
        N === null && (N = _);
        break;
      }
      e && N && C.alternate === null && t(p, N),
        (h = o(C, h, y)),
        S === null ? (T = C) : (S.sibling = C),
        (S = C),
        (N = _);
    }
    if (y === g.length) return n(p, N), K && Vt(p, y), T;
    if (N === null) {
      for (; y < g.length; y++)
        (N = d(p, g[y], x)),
          N !== null &&
            ((h = o(N, h, y)), S === null ? (T = N) : (S.sibling = N), (S = N));
      return K && Vt(p, y), T;
    }
    for (N = r(p, N); y < g.length; y++)
      (_ = w(N, p, y, g[y], x)),
        _ !== null &&
          (e && _.alternate !== null && N.delete(_.key === null ? y : _.key),
          (h = o(_, h, y)),
          S === null ? (T = _) : (S.sibling = _),
          (S = _));
    return (
      e &&
        N.forEach(function (O) {
          return t(p, O);
        }),
      K && Vt(p, y),
      T
    );
  }
  function k(p, h, g, x) {
    var T = Dn(g);
    if (typeof T != "function") throw Error(j(150));
    if (((g = T.call(g)), g == null)) throw Error(j(151));
    for (
      var S = (T = null), N = h, y = (h = 0), _ = null, C = g.next();
      N !== null && !C.done;
      y++, C = g.next()
    ) {
      N.index > y ? ((_ = N), (N = null)) : (_ = N.sibling);
      var O = m(p, N, C.value, x);
      if (O === null) {
        N === null && (N = _);
        break;
      }
      e && N && O.alternate === null && t(p, N),
        (h = o(O, h, y)),
        S === null ? (T = O) : (S.sibling = O),
        (S = O),
        (N = _);
    }
    if (C.done) return n(p, N), K && Vt(p, y), T;
    if (N === null) {
      for (; !C.done; y++, C = g.next())
        (C = d(p, C.value, x)),
          C !== null &&
            ((h = o(C, h, y)), S === null ? (T = C) : (S.sibling = C), (S = C));
      return K && Vt(p, y), T;
    }
    for (N = r(p, N); !C.done; y++, C = g.next())
      (C = w(N, p, y, C.value, x)),
        C !== null &&
          (e && C.alternate !== null && N.delete(C.key === null ? y : C.key),
          (h = o(C, h, y)),
          S === null ? (T = C) : (S.sibling = C),
          (S = C));
    return (
      e &&
        N.forEach(function (U) {
          return t(p, U);
        }),
      K && Vt(p, y),
      T
    );
  }
  function P(p, h, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === cn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Vr:
          e: {
            for (var T = g.key, S = h; S !== null; ) {
              if (S.key === T) {
                if (((T = g.type), T === cn)) {
                  if (S.tag === 7) {
                    n(p, S.sibling),
                      (h = i(S, g.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  S.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === yt &&
                    Bu(T) === S.type)
                ) {
                  n(p, S.sibling),
                    (h = i(S, g.props)),
                    (h.ref = qn(p, S, g)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, S);
                break;
              } else t(p, S);
              S = S.sibling;
            }
            g.type === cn
              ? ((h = Yt(g.props.children, p.mode, x, g.key)),
                (h.return = p),
                (p = h))
              : ((x = wi(g.type, g.key, g.props, null, p.mode, x)),
                (x.ref = qn(p, h, g)),
                (x.return = p),
                (p = x));
          }
          return s(p);
        case an:
          e: {
            for (S = g.key; h !== null; ) {
              if (h.key === S)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, g.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = $o(g, p.mode, x)), (h.return = p), (p = h);
          }
          return s(p);
        case yt:
          return (S = g._init), P(p, h, S(g._payload), x);
      }
      if (Jn(g)) return v(p, h, g, x);
      if (Dn(g)) return k(p, h, g, x);
      br(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, g)), (h.return = p), (p = h))
          : (n(p, h), (h = Do(g, p.mode, x)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return P;
}
var Ln = Qc(!0),
  Kc = Qc(!1),
  Or = {},
  be = Bt(Or),
  xr = Bt(Or),
  Er = Bt(Or);
function Qt(e) {
  if (e === Or) throw Error(j(174));
  return e;
}
function xl(e, t) {
  switch ((W(Er, t), W(xr, e), W(be, Or), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ts(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ts(t, e));
  }
  Q(be), W(be, t);
}
function Rn() {
  Q(be), Q(xr), Q(Er);
}
function Yc(e) {
  Qt(Er.current);
  var t = Qt(be.current),
    n = ts(t, e.type);
  t !== n && (W(xr, e), W(be, n));
}
function El(e) {
  xr.current === e && (Q(be), Q(xr));
}
var Y = Bt(0);
function Bi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Io = [];
function Sl() {
  for (var e = 0; e < Io.length; e++)
    Io[e]._workInProgressVersionPrimary = null;
  Io.length = 0;
}
var pi = ht.ReactCurrentDispatcher,
  Ao = ht.ReactCurrentBatchConfig,
  Gt = 0,
  X = null,
  ne = null,
  oe = null,
  Mi = !1,
  or = !1,
  Sr = 0,
  kp = 0;
function ce() {
  throw Error(j(321));
}
function Cl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function _l(e, t, n, r, i, o) {
  if (
    ((Gt = o),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (pi.current = e === null || e.memoizedState === null ? Cp : _p),
    (e = n(r, i)),
    or)
  ) {
    o = 0;
    do {
      if (((or = !1), (Sr = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (oe = ne = null),
        (t.updateQueue = null),
        (pi.current = Pp),
        (e = n(r, i));
    } while (or);
  }
  if (
    ((pi.current = Di),
    (t = ne !== null && ne.next !== null),
    (Gt = 0),
    (oe = ne = X = null),
    (Mi = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Pl() {
  var e = Sr !== 0;
  return (Sr = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (X.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function De() {
  if (ne === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = oe === null ? X.memoizedState : oe.next;
  if (t !== null) (oe = t), (ne = e);
  else {
    if (e === null) throw Error(j(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      oe === null ? (X.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zo(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = ne,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      c = o;
    do {
      var f = c.lane;
      if ((Gt & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((l = u = d), (s = r)) : (u = u.next = d),
          (X.lanes |= f),
          (Zt |= f);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (s = r) : (u.next = l),
      Ye(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (X.lanes |= o), (Zt |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Uo(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Ye(o, t.memoizedState) || (ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Xc() {}
function Jc(e, t) {
  var n = X,
    r = De(),
    i = t(),
    o = !Ye(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ke = !0)),
    (r = r.queue),
    jl(bc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      _r(9, Zc.bind(null, n, r, i, t), void 0, null),
      se === null)
    )
      throw Error(j(349));
    Gt & 30 || Gc(n, t, i);
  }
  return i;
}
function Gc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ed(t) && td(e);
}
function bc(e, t, n) {
  return n(function () {
    ed(t) && td(e);
  });
}
function ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function td(e) {
  var t = dt(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function Mu(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Sp.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function _r(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nd() {
  return De().memoizedState;
}
function mi(e, t, n, r) {
  var i = Je();
  (X.flags |= e),
    (i.memoizedState = _r(1 | t, n, void 0, r === void 0 ? null : r));
}
function io(e, t, n, r) {
  var i = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var s = ne.memoizedState;
    if (((o = s.destroy), r !== null && Cl(r, s.deps))) {
      i.memoizedState = _r(t, n, o, r);
      return;
    }
  }
  (X.flags |= e), (i.memoizedState = _r(1 | t, n, o, r));
}
function Du(e, t) {
  return mi(8390656, 8, e, t);
}
function jl(e, t) {
  return io(2048, 8, e, t);
}
function rd(e, t) {
  return io(4, 2, e, t);
}
function id(e, t) {
  return io(4, 4, e, t);
}
function od(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), io(4, 4, od.bind(null, t, e), n)
  );
}
function Nl() {}
function ld(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ud(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ad(e, t, n) {
  return Gt & 21
    ? (Ye(n, t) || ((n = fc()), (X.lanes |= n), (Zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function xp(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ao.transition;
  Ao.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (Ao.transition = r);
  }
}
function cd() {
  return De().memoizedState;
}
function Ep(e, t, n) {
  var r = Rt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dd(e))
  )
    fd(t, n);
  else if (((n = Vc(e, t, n, r)), n !== null)) {
    var i = me();
    Ke(n, e, r, i), hd(n, t, r);
  }
}
function Sp(e, t, n) {
  var r = Rt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dd(e)) fd(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ye(l, s))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), wl(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vc(e, t, i, r)),
      n !== null && ((i = me()), Ke(n, e, r, i), hd(n, t, r));
  }
}
function dd(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function fd(e, t) {
  or = Mi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ol(e, n);
  }
}
var Di = {
    readContext: Me,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  Cp = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: Du,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        mi(4194308, 4, od.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return mi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return mi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ep.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Mu,
    useDebugValue: Nl,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = Mu(!1),
        t = e[0];
      return (e = xp.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        i = Je();
      if (K) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(j(349));
        Gt & 30 || Gc(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Du(bc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        _r(9, Zc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = se.identifierPrefix;
      if (K) {
        var n = ot,
          r = it;
        (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = kp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _p = {
    readContext: Me,
    useCallback: ld,
    useContext: Me,
    useEffect: jl,
    useImperativeHandle: sd,
    useInsertionEffect: rd,
    useLayoutEffect: id,
    useMemo: ud,
    useReducer: zo,
    useRef: nd,
    useState: function () {
      return zo(Cr);
    },
    useDebugValue: Nl,
    useDeferredValue: function (e) {
      var t = De();
      return ad(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = zo(Cr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Jc,
    useId: cd,
    unstable_isNewReconciler: !1,
  },
  Pp = {
    readContext: Me,
    useCallback: ld,
    useContext: Me,
    useEffect: jl,
    useImperativeHandle: sd,
    useInsertionEffect: rd,
    useLayoutEffect: id,
    useMemo: ud,
    useReducer: Uo,
    useRef: nd,
    useState: function () {
      return Uo(Cr);
    },
    useDebugValue: Nl,
    useDeferredValue: function (e) {
      var t = De();
      return ne === null ? (t.memoizedState = e) : ad(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Uo(Cr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Jc,
    useId: cd,
    unstable_isNewReconciler: !1,
  };
function Fn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += eh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Bo(e, t, n) {
  return { value: e, source: null, stack: null, digest: t ?? null };
}
function Cs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jp = typeof WeakMap == "function" ? WeakMap : Map;
function pd(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vi || ((Vi = !0), (Is = r)), Cs(e, t);
    }),
    n
  );
}
function md(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Cs(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Cs(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function $u(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = $p.bind(null, e, t, n)), t.then(e, e));
}
function Vu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Hu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = lt(-1, 1)), (t.tag = 2), Tt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Np = ht.ReactCurrentOwner,
  ke = !1;
function pe(e, t, n, r) {
  t.child = e === null ? Kc(t, null, n, r) : Ln(t, e.child, n, r);
}
function Wu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    _n(t, i),
    (r = _l(e, t, n, r, o, i)),
    (n = Pl()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ft(e, t, i))
      : (K && n && hl(t), (t.flags |= 1), pe(e, t, r, i), t.child)
  );
}
function qu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !zl(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), gd(e, t, o, r, i))
      : ((e = wi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : vr), n(s, r) && e.ref === t.ref)
    )
      return ft(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ft(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (vr(o, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), ft(e, t, i);
  }
  return _s(e, t, n, r, i);
}
function vd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(kn, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(kn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        W(kn, _e),
        (_e |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(kn, _e),
      (_e |= r);
  return pe(e, t, i, n), t.child;
}
function yd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _s(e, t, n, r, i) {
  var o = Ee(n) ? Xt : he.current;
  return (
    (o = Nn(t, o)),
    _n(t, i),
    (n = _l(e, t, n, r, o, i)),
    (r = Pl()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ft(e, t, i))
      : (K && r && hl(t), (t.flags |= 1), pe(e, t, n, i), t.child)
  );
}
function Qu(e, t, n, r, i) {
  if (Ee(n)) {
    var o = !0;
    Fi(t);
  } else o = !1;
  if ((_n(t, i), t.stateNode === null))
    gi(e, t), qc(t, n, r), Ss(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Me(c))
      : ((c = Ee(n) ? Xt : he.current), (c = Nn(t, c)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || u !== c) && Uu(t, s, r, c)),
      (wt = !1);
    var m = t.memoizedState;
    (s.state = m),
      Ui(t, r, s, i),
      (u = t.memoizedState),
      l !== r || m !== u || xe.current || wt
        ? (typeof f == "function" && (Es(t, n, f, r), (u = t.memoizedState)),
          (l = wt || zu(t, n, l, r, m, u, c))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = c),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Hc(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Ve(t.type, l)),
      (s.props = c),
      (d = t.pendingProps),
      (m = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Me(u))
        : ((u = Ee(n) ? Xt : he.current), (u = Nn(t, u)));
    var w = n.getDerivedStateFromProps;
    (f =
      typeof w == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || m !== u) && Uu(t, s, r, u)),
      (wt = !1),
      (m = t.memoizedState),
      (s.state = m),
      Ui(t, r, s, i);
    var v = t.memoizedState;
    l !== d || m !== v || xe.current || wt
      ? (typeof w == "function" && (Es(t, n, w, r), (v = t.memoizedState)),
        (c = wt || zu(t, n, c, r, m, v, u) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = u),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ps(e, t, n, r, o, i);
}
function Ps(e, t, n, r, i, o) {
  yd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Ru(t, n, !1), ft(e, t, o);
  (r = t.stateNode), (Np.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ln(t, e.child, null, o)), (t.child = Ln(t, null, l, o)))
      : pe(e, t, l, o),
    (t.memoizedState = r.state),
    i && Ru(t, n, !0),
    t.child
  );
}
function wd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lu(e, t.context, !1),
    xl(e, t.containerInfo);
}
function Ku(e, t, n, r, i) {
  return Tn(), ml(i), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var js = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ns(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kd(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    W(Y, i & 1),
    e === null)
  )
    return (
      ks(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = lo(s, r, 0, null)),
              (e = Yt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ns(n)),
              (t.memoizedState = js),
              e)
            : Tl(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Tp(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Ft(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Ft(l, o)) : ((o = Yt(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ns(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = js),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ft(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Tl(e, t) {
  return (
    (t = lo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ei(e, t, n, r) {
  return (
    r !== null && ml(r),
    Ln(t, e.child, null, n),
    (e = Tl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Tp(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bo(Error(j(422)))), ei(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = lo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Yt(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Ln(t, e.child, null, s),
        (t.child.memoizedState = Ns(s)),
        (t.memoizedState = js),
        o);
  if (!(t.mode & 1)) return ei(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(j(419))), (r = Bo(o, r)), ei(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), ke || l)) {
    if (((r = se), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), dt(e, i), Ke(r, e, i, -1));
    }
    return Al(), (r = Bo(Error(j(421)))), ei(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Pe = Nt(i.nextSibling)),
      (je = t),
      (K = !0),
      (qe = null),
      e !== null &&
        ((Fe[Oe++] = it),
        (Fe[Oe++] = ot),
        (Fe[Oe++] = Jt),
        (it = e.id),
        (ot = e.overflow),
        (Jt = t)),
      (t = Tl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Yu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xs(e.return, t, n);
}
function Mo(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function xd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((pe(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Yu(e, n, t);
        else if (e.tag === 19) Yu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Bi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Mo(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Bi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Mo(t, !0, n, null, o);
        break;
      case "together":
        Mo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Lp(e, t, n) {
  switch (t.tag) {
    case 3:
      wd(t), Tn();
      break;
    case 5:
      Yc(t);
      break;
    case 1:
      Ee(t.type) && Fi(t);
      break;
    case 4:
      xl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      W(Ai, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? kd(e, t, n)
          : (W(Y, Y.current & 1),
            (e = ft(e, t, n)),
            e !== null ? e.sibling : null);
      W(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        W(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vd(e, t, n);
  }
  return ft(e, t, n);
}
var Ed, Ts, Sd, Cd;
Ed = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ts = function () {};
Sd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Qt(be.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Go(e, i)), (r = Go(e, r)), (o = []);
        break;
      case "select":
        (i = J({}, i, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = es(e, i)), (r = es(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Li);
    }
    ns(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (cr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((l = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && u !== l && (u != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (cr.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && q("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Cd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!K)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Rp(e, t, n) {
  var r = t.pendingProps;
  switch ((pl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return Ee(t.type) && Ri(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Rn(),
        Q(xe),
        Q(he),
        Sl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Zr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (Us(qe), (qe = null)))),
        Ts(e, t),
        de(t),
        null
      );
    case 5:
      El(t);
      var i = Qt(Er.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return de(t), null;
        }
        if (((e = Qt(be.current)), Zr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ge] = t), (r[kr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Zn.length; i++) q(Zn[i], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              ru(r, o), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              ou(r, o), q("invalid", r);
          }
          ns(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : cr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              Hr(r), iu(r, o, !0);
              break;
            case "textarea":
              Hr(r), su(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Li);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ga(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ge] = t),
            (e[kr] = r),
            Ed(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = rs(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Zn.length; i++) q(Zn[i], e);
                i = r;
                break;
              case "source":
                q("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (i = r);
                break;
              case "details":
                q("toggle", e), (i = r);
                break;
              case "input":
                ru(e, r), (i = Go(e, r)), q("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = J({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                ou(e, r), (i = es(e, r)), q("invalid", e);
                break;
              default:
                i = r;
            }
            ns(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? ec(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Za(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && dr(e, u)
                    : typeof u == "number" && dr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (cr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && q("scroll", e)
                      : u != null && bs(e, o, u, s));
              }
            switch (n) {
              case "input":
                Hr(e), iu(e, r, !1);
                break;
              case "textarea":
                Hr(e), su(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + At(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? xn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Li);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) Cd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Qt(Er.current)), Qt(be.current), Zr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ge] = t),
            (o = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ge] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (Q(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Pe !== null && t.mode & 1 && !(t.flags & 128))
          $c(), Tn(), (t.flags |= 98560), (o = !1);
        else if (((o = Zr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[Ge] = t;
          } else
            Tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (o = !1);
        } else qe !== null && (Us(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? re === 0 && (re = 3) : Al())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        Rn(), Ts(e, t), e === null && yr(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return yl(t.type._context), de(t), null;
    case 17:
      return Ee(t.type) && Ri(), de(t), null;
    case 19:
      if ((Q(Y), (o = t.memoizedState), o === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Qn(o, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Bi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Qn(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Z() > On &&
            ((t.flags |= 128), (r = !0), Qn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Qn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !K)
            )
              return de(t), null;
          } else
            2 * Z() - o.renderingStartTime > On &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Qn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = Y.current),
          W(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Il(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Fp(e, t) {
  switch ((pl(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && Ri(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Rn(),
        Q(xe),
        Q(he),
        Sl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return El(t), null;
    case 13:
      if ((Q(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        Tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(Y), null;
    case 4:
      return Rn(), null;
    case 10:
      return yl(t.type._context), null;
    case 22:
    case 23:
      return Il(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ti = !1,
  fe = !1,
  Op = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function Ls(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var Xu = !1;
function Ip(e, t) {
  if (((hs = ji), (e = Nc()), fl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            c = 0,
            f = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (m = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (m === n && ++c === i && (l = s),
                m === o && ++f === r && (u = s),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = m), (m = d.parentNode);
            }
            d = w;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ps = { focusedElem: e, selectionRange: n }, ji = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var k = v.memoizedProps,
                    P = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Ve(t.type, k),
                      P
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (x) {
          G(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (v = Xu), (Xu = !1), v;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ls(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function oo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Rs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _d(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _d(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ge], delete t[kr], delete t[vs], delete t[gp], delete t[vp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Pd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Li));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fs(e, t, n), e = e.sibling; e !== null; ) Fs(e, t, n), (e = e.sibling);
}
function Os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Os(e, t, n), e = e.sibling; e !== null; ) Os(e, t, n), (e = e.sibling);
}
var le = null,
  He = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) jd(e, t, n), (n = n.sibling);
}
function jd(e, t, n) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function")
    try {
      Ze.onCommitFiberUnmount(Gi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || wn(n, t);
    case 6:
      var r = le,
        i = He;
      (le = null),
        vt(e, t, n),
        (le = r),
        (He = i),
        le !== null &&
          (He
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (He
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? Fo(e.parentNode, n)
              : e.nodeType === 1 && Fo(e, n),
            mr(e))
          : Fo(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = He),
        (le = n.stateNode.containerInfo),
        (He = !0),
        vt(e, t, n),
        (le = r),
        (He = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Ls(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          G(n, t, l);
        }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), vt(e, t, n), (fe = r))
        : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function Gu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Op()),
      t.forEach(function (r) {
        var i = Hp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (le = l.stateNode), (He = !1);
              break e;
            case 3:
              (le = l.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (le = l.stateNode.containerInfo), (He = !0);
              break e;
          }
          l = l.return;
        }
        if (le === null) throw Error(j(160));
        jd(o, s, i), (le = null), (He = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        G(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nd(t, e), (t = t.sibling);
}
function Nd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), Xe(e), r & 4)) {
        try {
          sr(3, e, e.return), oo(3, e);
        } catch (k) {
          G(e, e.return, k);
        }
        try {
          sr(5, e, e.return);
        } catch (k) {
          G(e, e.return, k);
        }
      }
      break;
    case 1:
      $e(t, e), Xe(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (
        ($e(t, e),
        Xe(e),
        r & 512 && n !== null && wn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          dr(i, "");
        } catch (k) {
          G(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Xa(i, o),
              rs(l, s);
            var c = rs(l, o);
            for (s = 0; s < u.length; s += 2) {
              var f = u[s],
                d = u[s + 1];
              f === "style"
                ? ec(i, d)
                : f === "dangerouslySetInnerHTML"
                ? Za(i, d)
                : f === "children"
                ? dr(i, d)
                : bs(i, f, d, c);
            }
            switch (l) {
              case "input":
                Zo(i, o);
                break;
              case "textarea":
                Ja(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? xn(i, !!o.multiple, w, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? xn(i, !!o.multiple, o.defaultValue, !0)
                      : xn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[kr] = o;
          } catch (k) {
            G(e, e.return, k);
          }
      }
      break;
    case 6:
      if (($e(t, e), Xe(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (k) {
          G(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        ($e(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          mr(t.containerInfo);
        } catch (k) {
          G(e, e.return, k);
        }
      break;
    case 4:
      $e(t, e), Xe(e);
      break;
    case 13:
      $e(t, e),
        Xe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Fl = Z())),
        r & 4 && Gu(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (c = fe) || f), $e(t, e), (fe = c)) : $e(t, e),
        Xe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (R = e, f = e.child; f !== null; ) {
            for (d = R = f; R !== null; ) {
              switch (((m = R), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  sr(4, m, m.return);
                  break;
                case 1:
                  wn(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (k) {
                      G(r, n, k);
                    }
                  }
                  break;
                case 5:
                  wn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    bu(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (R = w)) : bu(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (i = d.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = d.stateNode),
                      (u = d.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = ba("display", s)));
              } catch (k) {
                G(e, e.return, k);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (k) {
                G(e, e.return, k);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      $e(t, e), Xe(e), r & 4 && Gu(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (dr(i, ""), (r.flags &= -33));
          var o = Ju(e);
          Os(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Ju(e);
          Fs(e, l, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (u) {
      G(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ap(e, t, n) {
  (R = e), Td(e);
}
function Td(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ti;
      if (!s) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || fe;
        l = ti;
        var c = fe;
        if (((ti = s), (fe = u) && !c))
          for (R = i; R !== null; )
            (s = R),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ea(i)
                : u !== null
                ? ((u.return = s), (R = u))
                : ea(i);
        for (; o !== null; ) (R = o), Td(o), (o = o.sibling);
        (R = i), (ti = l), (fe = c);
      }
      Zu(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : Zu(e);
  }
}
function Zu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || oo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Au(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Au(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && mr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        fe || (t.flags & 512 && Rs(t));
      } catch (m) {
        G(t, t.return, m);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function bu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function ea(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            oo(4, t);
          } catch (u) {
            G(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              G(t, i, u);
            }
          }
          var o = t.return;
          try {
            Rs(t);
          } catch (u) {
            G(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Rs(t);
          } catch (u) {
            G(t, s, u);
          }
      }
    } catch (u) {
      G(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (R = l);
      break;
    }
    R = t.return;
  }
}
var zp = Math.ceil,
  $i = ht.ReactCurrentDispatcher,
  Ll = ht.ReactCurrentOwner,
  Be = ht.ReactCurrentBatchConfig,
  D = 0,
  se = null,
  b = null,
  ue = 0,
  _e = 0,
  kn = Bt(0),
  re = 0,
  Pr = null,
  Zt = 0,
  so = 0,
  Rl = 0,
  lr = null,
  we = null,
  Fl = 0,
  On = 1 / 0,
  nt = null,
  Vi = !1,
  Is = null,
  Lt = null,
  ni = !1,
  St = null,
  Hi = 0,
  ur = 0,
  As = null,
  vi = -1,
  yi = 0;
function me() {
  return D & 6 ? Z() : vi !== -1 ? vi : (vi = Z());
}
function Rt(e) {
  return e.mode & 1
    ? D & 2 && ue !== 0
      ? ue & -ue
      : wp.transition !== null
      ? (yi === 0 && (yi = fc()), yi)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wc(e.type))),
        e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < ur) throw ((ur = 0), (As = null), Error(j(185)));
  Lr(e, n, r),
    (!(D & 2) || e !== se) &&
      (e === se && (!(D & 2) && (so |= n), re === 4 && xt(e, ue)),
      Se(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((On = Z() + 500), no && Mt()));
}
function Se(e, t) {
  var n = e.callbackNode;
  wh(e, t);
  var r = Pi(e, e === se ? ue : 0);
  if (r === 0)
    n !== null && au(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && au(n), t === 1))
      e.tag === 0 ? yp(ta.bind(null, e)) : Bc(ta.bind(null, e)),
        pp(function () {
          !(D & 6) && Mt();
        }),
        (n = null);
    else {
      switch (hc(r)) {
        case 1:
          n = il;
          break;
        case 4:
          n = cc;
          break;
        case 16:
          n = _i;
          break;
        case 536870912:
          n = dc;
          break;
        default:
          n = _i;
      }
      n = Ud(n, Ld.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ld(e, t) {
  if (((vi = -1), (yi = 0), D & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Pn() && e.callbackNode !== n) return null;
  var r = Pi(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wi(e, r);
  else {
    t = r;
    var i = D;
    D |= 2;
    var o = Fd();
    (se !== e || ue !== t) && ((nt = null), (On = Z() + 500), Kt(e, t));
    do
      try {
        Mp();
        break;
      } catch (l) {
        Rd(e, l);
      }
    while (!0);
    vl(),
      ($i.current = o),
      (D = i),
      b !== null ? (t = 0) : ((se = null), (ue = 0), (t = re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = us(e)), i !== 0 && ((r = i), (t = zs(e, i)))), t === 1)
    )
      throw ((n = Pr), Kt(e, 0), xt(e, r), Se(e, Z()), n);
    if (t === 6) xt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Up(i) &&
          ((t = Wi(e, r)),
          t === 2 && ((o = us(e)), o !== 0 && ((r = o), (t = zs(e, o)))),
          t === 1))
      )
        throw ((n = Pr), Kt(e, 0), xt(e, r), Se(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Ht(e, we, nt);
          break;
        case 3:
          if (
            (xt(e, r), (r & 130023424) === r && ((t = Fl + 500 - Z()), 10 < t))
          ) {
            if (Pi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = gs(Ht.bind(null, e, we, nt), t);
            break;
          }
          Ht(e, we, nt);
          break;
        case 4:
          if ((xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Qe(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * zp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gs(Ht.bind(null, e, we, nt), r);
            break;
          }
          Ht(e, we, nt);
          break;
        case 5:
          Ht(e, we, nt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Se(e, Z()), e.callbackNode === n ? Ld.bind(null, e) : null;
}
function zs(e, t) {
  var n = lr;
  return (
    e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256),
    (e = Wi(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && Us(t)),
    e
  );
}
function Us(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function Up(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ye(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function xt(e, t) {
  for (
    t &= ~Rl,
      t &= ~so,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ta(e) {
  if (D & 6) throw Error(j(327));
  Pn();
  var t = Pi(e, 0);
  if (!(t & 1)) return Se(e, Z()), null;
  var n = Wi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = us(e);
    r !== 0 && ((t = r), (n = zs(e, r)));
  }
  if (n === 1) throw ((n = Pr), Kt(e, 0), xt(e, t), Se(e, Z()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ht(e, we, nt),
    Se(e, Z()),
    null
  );
}
function Ol(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((On = Z() + 500), no && Mt());
  }
}
function bt(e) {
  St !== null && St.tag === 0 && !(D & 6) && Pn();
  var t = D;
  D |= 1;
  var n = Be.transition,
    r = H;
  try {
    if (((Be.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (Be.transition = n), (D = t), !(D & 6) && Mt();
  }
}
function Il() {
  (_e = kn.current), Q(kn);
}
function Kt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), hp(n)), b !== null))
    for (n = b.return; n !== null; ) {
      var r = n;
      switch ((pl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ri();
          break;
        case 3:
          Rn(), Q(xe), Q(he), Sl();
          break;
        case 5:
          El(r);
          break;
        case 4:
          Rn();
          break;
        case 13:
          Q(Y);
          break;
        case 19:
          Q(Y);
          break;
        case 10:
          yl(r.type._context);
          break;
        case 22:
        case 23:
          Il();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (b = e = Ft(e.current, null)),
    (ue = _e = t),
    (re = 0),
    (Pr = null),
    (Rl = so = Zt = 0),
    (we = lr = null),
    qt !== null)
  ) {
    for (t = 0; t < qt.length; t++)
      if (((n = qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    qt = null;
  }
  return e;
}
function Rd(e, t) {
  do {
    var n = b;
    try {
      if ((vl(), (pi.current = Di), Mi)) {
        for (var r = X.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Mi = !1;
      }
      if (
        ((Gt = 0),
        (oe = ne = X = null),
        (or = !1),
        (Sr = 0),
        (Ll.current = null),
        n === null || n.return === null)
      ) {
        (re = 1), (Pr = t), (b = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            f = l,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue),
                (f.memoizedState = m.memoizedState),
                (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var w = Vu(s);
          if (w !== null) {
            (w.flags &= -257),
              Hu(w, s, l, o, t),
              w.mode & 1 && $u(o, c, t),
              (t = w),
              (u = c);
            var v = t.updateQueue;
            if (v === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              $u(o, c, t), Al();
              break e;
            }
            u = Error(j(426));
          }
        } else if (K && l.mode & 1) {
          var P = Vu(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Hu(P, s, l, o, t),
              ml(Fn(u, l));
            break e;
          }
        }
        (o = u = Fn(u, l)),
          re !== 4 && (re = 2),
          lr === null ? (lr = [o]) : lr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = pd(o, u, t);
              Iu(o, p);
              break e;
            case 1:
              l = u;
              var h = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = md(o, l, t);
                Iu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Id(n);
    } catch (T) {
      (t = T), b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fd() {
  var e = $i.current;
  return ($i.current = Di), e === null ? Di : e;
}
function Al() {
  (re === 0 || re === 3 || re === 2) && (re = 4),
    se === null || (!(Zt & 268435455) && !(so & 268435455)) || xt(se, ue);
}
function Wi(e, t) {
  var n = D;
  D |= 2;
  var r = Fd();
  (se !== e || ue !== t) && ((nt = null), Kt(e, t));
  do
    try {
      Bp();
      break;
    } catch (i) {
      Rd(e, i);
    }
  while (!0);
  if ((vl(), (D = n), ($i.current = r), b !== null)) throw Error(j(261));
  return (se = null), (ue = 0), re;
}
function Bp() {
  for (; b !== null; ) Od(b);
}
function Mp() {
  for (; b !== null && !ch(); ) Od(b);
}
function Od(e) {
  var t = zd(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? Id(e) : (b = t),
    (Ll.current = null);
}
function Id(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Fp(n, t)), n !== null)) {
        (n.flags &= 32767), (b = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (re = 6), (b = null);
        return;
      }
    } else if (((n = Rp(n, t, _e)), n !== null)) {
      b = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Ht(e, t, n) {
  var r = H,
    i = Be.transition;
  try {
    (Be.transition = null), (H = 1), Dp(e, t, n, r);
  } finally {
    (Be.transition = i), (H = r);
  }
  return null;
}
function Dp(e, t, n, r) {
  do Pn();
  while (St !== null);
  if (D & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (kh(e, o),
    e === se && ((b = se = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ni ||
      ((ni = !0),
      Ud(_i, function () {
        return Pn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Be.transition), (Be.transition = null);
    var s = H;
    H = 1;
    var l = D;
    (D |= 4),
      (Ll.current = null),
      Ip(e, n),
      Nd(n, e),
      sp(ps),
      (ji = !!hs),
      (ps = hs = null),
      (e.current = n),
      Ap(n),
      dh(),
      (D = l),
      (H = s),
      (Be.transition = o);
  } else e.current = n;
  if (
    (ni && ((ni = !1), (St = e), (Hi = i)),
    (o = e.pendingLanes),
    o === 0 && (Lt = null),
    ph(n.stateNode),
    Se(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Vi) throw ((Vi = !1), (e = Is), (Is = null), e);
  return (
    Hi & 1 && e.tag !== 0 && Pn(),
    (o = e.pendingLanes),
    o & 1 ? (e === As ? ur++ : ((ur = 0), (As = e))) : (ur = 0),
    Mt(),
    null
  );
}
function Pn() {
  if (St !== null) {
    var e = hc(Hi),
      t = Be.transition,
      n = H;
    try {
      if (((Be.transition = null), (H = 16 > e ? 16 : e), St === null))
        var r = !1;
      else {
        if (((e = St), (St = null), (Hi = 0), D & 6)) throw Error(j(331));
        var i = D;
        for (D |= 4, R = e.current; R !== null; ) {
          var o = R,
            s = o.child;
          if (R.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                for (R = c; R !== null; ) {
                  var f = R;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (R = d);
                  else
                    for (; R !== null; ) {
                      f = R;
                      var m = f.sibling,
                        w = f.return;
                      if ((_d(f), f === c)) {
                        R = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (R = m);
                        break;
                      }
                      R = w;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var k = v.child;
                if (k !== null) {
                  v.child = null;
                  do {
                    var P = k.sibling;
                    (k.sibling = null), (k = P);
                  } while (k !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (R = s);
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (R = p);
                break e;
              }
              R = o.return;
            }
        }
        var h = e.current;
        for (R = h; R !== null; ) {
          s = R;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (R = g);
          else
            e: for (s = h; R !== null; ) {
              if (((l = R), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oo(9, l);
                  }
                } catch (T) {
                  G(l, l.return, T);
                }
              if (l === s) {
                R = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (R = x);
                break e;
              }
              R = l.return;
            }
        }
        if (
          ((D = i), Mt(), Ze && typeof Ze.onPostCommitFiberRoot == "function")
        )
          try {
            Ze.onPostCommitFiberRoot(Gi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (Be.transition = t);
    }
  }
  return !1;
}
function na(e, t, n) {
  (t = Fn(n, t)),
    (t = pd(e, t, 1)),
    (e = Tt(e, t, 1)),
    (t = me()),
    e !== null && (Lr(e, 1, t), Se(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) na(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        na(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          (e = Fn(n, e)),
            (e = md(t, e, 1)),
            (t = Tt(t, e, 1)),
            (e = me()),
            t !== null && (Lr(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $p(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ue & n) === n &&
      (re === 4 || (re === 3 && (ue & 130023424) === ue && 500 > Z() - Fl)
        ? Kt(e, 0)
        : (Rl |= n)),
    Se(e, t);
}
function Ad(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304))
      : (t = 1));
  var n = me();
  (e = dt(e, t)), e !== null && (Lr(e, t, n), Se(e, n));
}
function Vp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ad(e, n);
}
function Hp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Ad(e, n);
}
var zd;
zd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), Lp(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), K && t.flags & 1048576 && Mc(t, Ii, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      gi(e, t), (e = t.pendingProps);
      var i = Nn(t, he.current);
      _n(t, n), (i = _l(null, t, r, e, i, n));
      var o = Pl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((o = !0), Fi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            kl(t),
            (i.updater = ro),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ss(t, r, e, n),
            (t = Ps(null, t, r, !0, o, n)))
          : ((t.tag = 0), K && o && hl(t), pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (gi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = qp(r)),
          (e = Ve(r, e)),
          i)
        ) {
          case 0:
            t = _s(null, t, r, e, n);
            break e;
          case 1:
            t = Qu(null, t, r, e, n);
            break e;
          case 11:
            t = Wu(null, t, r, e, n);
            break e;
          case 14:
            t = qu(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        _s(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        Qu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((wd(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Hc(e, t),
          Ui(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Fn(Error(j(423)), t)), (t = Ku(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Fn(Error(j(424)), t)), (t = Ku(e, t, r, n, i));
            break e;
          } else
            for (
              Pe = Nt(t.stateNode.containerInfo.firstChild),
                je = t,
                K = !0,
                qe = null,
                n = Kc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tn(), r === i)) {
            t = ft(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yc(t),
        e === null && ks(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        ms(r, i) ? (s = null) : o !== null && ms(r, o) && (t.flags |= 32),
        yd(e, t),
        pe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ks(t), null;
    case 13:
      return kd(e, t, n);
    case 4:
      return (
        xl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ln(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        Wu(e, t, r, i, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          W(Ai, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ye(o.value, s)) {
            if (o.children === i.children && !xe.current) {
              t = ft(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = lt(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      xs(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(j(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  xs(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        _n(t, n),
        (i = Me(i)),
        (r = r(i)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ve(r, t.pendingProps)),
        (i = Ve(r.type, i)),
        qu(e, t, r, i, n)
      );
    case 15:
      return gd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        gi(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), Fi(t)) : (e = !1),
        _n(t, n),
        qc(t, r, i),
        Ss(t, r, i, n),
        Ps(null, t, r, !0, e, n)
      );
    case 19:
      return xd(e, t, n);
    case 22:
      return vd(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Ud(e, t) {
  return ac(e, t);
}
function Wp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ae(e, t, n, r) {
  return new Wp(e, t, n, r);
}
function zl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qp(e) {
  if (typeof e == "function") return zl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === tl)) return 11;
    if (e === nl) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function wi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) zl(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case cn:
        return Yt(n.children, i, o, t);
      case el:
        (s = 8), (i |= 8);
        break;
      case Ko:
        return (
          (e = Ae(12, n, t, i | 2)), (e.elementType = Ko), (e.lanes = o), e
        );
      case Yo:
        return (e = Ae(13, n, t, i)), (e.elementType = Yo), (e.lanes = o), e;
      case Xo:
        return (e = Ae(19, n, t, i)), (e.elementType = Xo), (e.lanes = o), e;
      case Qa:
        return lo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wa:
              s = 10;
              break e;
            case qa:
              s = 9;
              break e;
            case tl:
              s = 11;
              break e;
            case nl:
              s = 14;
              break e;
            case yt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ae(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Yt(e, t, n, r) {
  return (e = Ae(7, e, r, t)), (e.lanes = n), e;
}
function lo(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = Qa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Do(e, t, n) {
  return (e = Ae(6, e, null, t)), (e.lanes = n), e;
}
function $o(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qp(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xo(0)),
    (this.expirationTimes = xo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ul(e, t, n, r, i, o, s, l, u) {
  return (
    (e = new Qp(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ae(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kl(o),
    e
  );
}
function Kp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bd(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return Uc(e, n, t);
  }
  return t;
}
function Md(e, t, n, r, i, o, s, l, u) {
  return (
    (e = Ul(n, r, !0, e, i, o, s, l, u)),
    (e.context = Bd(null)),
    (n = e.current),
    (r = me()),
    (i = Rt(n)),
    (o = lt(r, i)),
    (o.callback = t ?? null),
    Tt(n, o, i),
    (e.current.lanes = i),
    Lr(e, i, r),
    Se(e, r),
    e
  );
}
function uo(e, t, n, r) {
  var i = t.current,
    o = me(),
    s = Rt(i);
  return (
    (n = Bd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = lt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tt(i, t, s)),
    e !== null && (Ke(e, i, s, o), hi(e, i, s)),
    s
  );
}
function qi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ra(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bl(e, t) {
  ra(e, t), (e = e.alternate) && ra(e, t);
}
function Yp() {
  return null;
}
var Dd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ml(e) {
  this._internalRoot = e;
}
ao.prototype.render = Ml.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  uo(e, t, null, null);
};
ao.prototype.unmount = Ml.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bt(function () {
      uo(null, e, null, null);
    }),
      (t[ct] = null);
  }
};
function ao(e) {
  this._internalRoot = e;
}
ao.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++);
    kt.splice(n, 0, e), n === 0 && yc(e);
  }
};
function Dl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function co(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ia() {}
function Xp(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = qi(s);
        o.call(c);
      };
    }
    var s = Md(t, r, e, 0, null, !1, !1, "", ia);
    return (
      (e._reactRootContainer = s),
      (e[ct] = s.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      bt(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = qi(u);
      l.call(c);
    };
  }
  var u = Ul(e, 0, !1, null, null, !1, !1, "", ia);
  return (
    (e._reactRootContainer = u),
    (e[ct] = u.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    bt(function () {
      uo(t, u, n, r);
    }),
    u
  );
}
function fo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = qi(s);
        l.call(u);
      };
    }
    uo(t, s, e, i);
  } else s = Xp(n, t, e, i, r);
  return qi(s);
}
pc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 &&
          (ol(t, n | 1), Se(t, Z()), !(D & 6) && ((On = Z() + 500), Mt()));
      }
      break;
    case 13:
      bt(function () {
        var r = dt(e, 1);
        if (r !== null) {
          var i = me();
          Ke(r, e, 1, i);
        }
      }),
        Bl(e, 1);
  }
};
sl = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = me();
      Ke(t, e, 134217728, n);
    }
    Bl(e, 134217728);
  }
};
mc = function (e) {
  if (e.tag === 13) {
    var t = Rt(e),
      n = dt(e, t);
    if (n !== null) {
      var r = me();
      Ke(n, e, t, r);
    }
    Bl(e, t);
  }
};
gc = function () {
  return H;
};
vc = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
os = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Zo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = to(r);
            if (!i) throw Error(j(90));
            Ya(r), Zo(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ja(e, n);
      break;
    case "select":
      (t = n.value), t != null && xn(e, !!n.multiple, t, !1);
  }
};
rc = Ol;
ic = bt;
var Jp = { usingClientEntryPoint: !1, Events: [Fr, pn, to, tc, nc, Ol] },
  Kn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Gp = {
    bundleType: Kn.bundleType,
    version: Kn.version,
    rendererPackageName: Kn.rendererPackageName,
    rendererConfig: Kn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Kn.findFiberByHostInstance || Yp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ri.isDisabled && ri.supportsFiber)
    try {
      (Gi = ri.inject(Gp)), (Ze = ri);
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jp;
Te.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Dl(t)) throw Error(j(200));
  return Kp(e, t, null, n);
};
Te.createRoot = function (e, t) {
  if (!Dl(e)) throw Error(j(299));
  var n = !1,
    r = "",
    i = Dd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ul(e, 1, !1, null, null, n, !1, r, i)),
    (e[ct] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new Ml(t)
  );
};
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = lc(t)), (e = e === null ? null : e.stateNode), e;
};
Te.flushSync = function (e) {
  return bt(e);
};
Te.hydrate = function (e, t, n) {
  if (!co(t)) throw Error(j(200));
  return fo(null, e, t, !0, n);
};
Te.hydrateRoot = function (e, t, n) {
  if (!Dl(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Dd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Md(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[ct] = t.current),
    yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ao(t);
};
Te.render = function (e, t, n) {
  if (!co(t)) throw Error(j(200));
  return fo(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!co(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (bt(function () {
        fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ct] = null);
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = Ol;
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!co(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return fo(e, t, n, !1, r);
};
Te.version = "18.2.0-next-9e3b772b8-20220608";
function $d() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d);
    } catch (e) {
      console.error(e);
    }
}
$d(), (Ma.exports = Te);
var Zp = Ma.exports,
  oa = Zp;
(qo.createRoot = oa.createRoot), (qo.hydrateRoot = oa.hydrateRoot);
const ye = E.createContext();
function bp({ children: e }) {
  const [t, n] = E.useState({
      csrfToken: null,
      loading: !1,
      posts: [],
      likes: 0,
      follow: 0,
      slammersPosts: [],
      statusInput: "",
      statusUpdate: null,
      userStatus: null,
      active: !0,
      totalPosts: null,
      isAuthenticated: !1,
      token: null,
      sessionId: null,
      user: { _id: null, username: "", status: "" },
      currentUser: {},
      editPost: null,
      isEditing: !1,
      editLoading: !1,
      isCreateNewPost: !1,
      isDeletePostRequest: !1,
      toDeletePostId: null,
      postPage: 1,
      postsLoading: !0,
      itemsPerPage: 15,
      statusCode: "",
      error: [],
      mobileView: !1,
      desktopView: !1,
      miniDesktop: !1,
    }),
    r = (y) => {
      n((_) => {
        let C = _.posts ? [..._.posts] : [];
        return (
          C.pop(),
          C.unshift(y),
          { ..._, posts: C, totalPosts: _.totalPosts + 1 }
        );
      });
    },
    i = (y) => {
      n((_) => {
        let C = _.posts ? [..._.posts] : [],
          O = _.posts.findIndex((U) => U._id === y._id);
        return (C[O] = y), { ..._, posts: C };
      });
    },
    o = (y) => {
      y && n((C) => ({ ...C, postsLoading: !0, posts: [] }));
      let _ = t.postPage;
      y === "next" && (_++, n((C) => ({ ...C, postPage: _ }))),
        y === "previous" && (_--, n((C) => ({ ...C, postPage: _ }))),
        fetch(
          `https://slamit-d27722e9cea6.herokuapp.com/feeds/posts?limit=${t.itemsPerPage}&page=${t.postPage}`
        )
          .then((C) => {
            if (!C.ok) throw new Error("Error occcured fetching post");
            return C.json();
          })
          .then((C) => {
            n((O) => ({
              ...O,
              posts: C.posts,
              totalPosts: C.totalItems,
              postsLoading: !1,
            }));
          })
          .catch((C) => {
            n((O) => ({ ...O, posts: [], totalPosts: 0, postsLoading: !1 })),
              s(C);
          }),
        window.scrollTo({ top: 0 });
    },
    s = (y) => {
      y.message &&
        n((_) => {
          const C = [{ message: y.message, title: y.title }, ..._.error];
          return { ..._, error: C };
        });
    },
    l = () => {
      n((y) => ({ ...y, error: [], loading: !1 }));
    },
    u = () => {
      try {
        if (!t.isAuthenticated) {
          console.log(t.isAuthenticated);
          const _ = new Error("Sign in to update and view status");
          throw ((_.title = "Unauthorized access"), _);
        }
        fetch("https://slamit-d27722e9cea6.herokuapp.com/feeds/status", {
          method: "PATCH",
          body: JSON.stringify({ status: t.statusInput }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + t.token,
            "X-CSRF-Token": t.csrfToken,
          },
        })
          .then((_) => {
            if (_.status !== 200 && _.status !== 201) {
              const C = new Error("Error occured updating user status");
              throw ((C.status = _.status), C);
            }
            return _.json();
          })
          .then((_) => {
            localStorage.setItem("slamUserStatus", _.status),
              n((C) => ({ ...C, userStatus: _.status, statusInput: "" }));
          })
          .catch(s);
      } catch (y) {
        s(y);
      }
    },
    c = () => {
      n((y) => ({ ...y, isCreateNewPost: !0 }));
    },
    f = (y) => {
      n((_) => {
        const C = _.posts.find((O) => O._id === y);
        return { ..._, isLoading: !0, editPost: C, isEditing: !0 };
      });
    },
    d = () => {
      n((y) => ({ ...y, editPost: null, isEditing: !1, isCreateNewPost: !1 }));
    },
    m = (y) => {
      n((U) => ({ ...U, editLoading: !0, loading: !0 }));
      let _ = "https://slamit-d27722e9cea6.herokuapp.com/feeds/post",
        C = "post";
      t.isEditing &&
        ((_ = `https://slamit-d27722e9cea6.herokuapp.com/feeds/edit/${t.editPost._id}`),
        (C = "PUT"));
      const O = new FormData();
      console.log(y),
        O.append("title", y.title),
        O.append("content", y.content),
        O.append("image", y.base64Image),
        t.isEditing && O.append("oldimage", y.oldImageValue),
        fetch(_, {
          method: C,
          body: O,
          headers: {
            Authorization: "Bearers " + t.token,
            "X-CSRF-Token": t.csrfToken,
          },
        })
          .then((U) => {
            if (!U.oK)
              throw new Error("Failed to create/update post", U.status);
            return U.json();
          })
          .then((U) => {
            U.post._id,
              U.post.creator,
              U.post.createdAt,
              U.post.title,
              U.post.content,
              U.post.imageUrl,
              n((ie) => ({
                ...ie,
                isEditing: !1,
                editPost: null,
                editLoading: !1,
                loading: !1,
                isCreateNewPost: !1,
              }));
          })
          .catch((U) => {
            n({
              isEditing: !1,
              loading: !1,
              editLoading: !1,
              isCreateNewPost: !1,
              error: U,
              editPost: null,
            });
          });
    },
    w = (y, _) => {
      n((C) => ({ ...C, statusInput: _ }));
    },
    v = () => {
      var y, _;
      (y = t.user) != null &&
        y._id &&
        fetch(
          `https://slamit-d27722e9cea6.herokuapp.com/auth/${
            (_ = t.user) == null ? void 0 : _._id
          }`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": t.csrfToken,
            },
          }
        )
          .then((C) => {
            if (C.ok) return C.json();
          })
          .then((C) => {
            n((O) => ({ ...O, currentUser: C }));
          })
          .catch(s);
    },
    k = (y) => {
      const _ = new Date(y),
        C = _.getMonth(),
        O = _.getFullYear(),
        U = _.getHours(),
        ie = _.getMinutes(),
        Dt = _.getDate();
      let gt;
      return (
        U < 12 && U ? (gt = "AM") : (gt = "PM"),
        Dt + "/" + C + "/" + O + "  " + U + ":" + ie + " " + gt
      );
    },
    P = (y, _) => {
      let C;
      return t.mobileView && _.length > y
        ? ((C = _.slice(0, y)), C + "...")
        : t.miniDesktop && _.length > y + 93
        ? ((C = _.slice(0, y + 93)), C + "...")
        : !t.miniDesktop && !t.mobileView && _.length > y + 240
        ? ((C = _.slice(0, y + 240)), C + "...")
        : _;
    },
    p = async (y, _) => {
      let C;
      _ === "like" && (C = 1), _ === "dislike" && (C = -1);
      try {
        if (!t.isAuthenticated) {
          const ie = new Error(
            "Couldn't complete like operation. sign in first."
          );
          throw ((ie.title = "Unauthorised access"), ie);
        }
        if (
          !(
            await (
              await fetch(
                "https://slamit-d27722e9cea6.herokuapp.com/feeds/likes",
                {
                  method: "put",
                  body: JSON.stringify({
                    postId: y,
                    postLike: `${C}`,
                    userId: t.user._id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "bearer " + t.token,
                    "X-CSRF-Token": t.csrfToken,
                  },
                }
              )
            ).json()
          ).ok
        ) {
          const ie = new Error("Couldn't complete like operation");
          throw ((ie.title = "Like validation error"), ie);
        }
      } catch (O) {
        s(O);
      }
    },
    h = async (y, _) => {
      try {
        if (!t.isAuthenticated) {
          const U = new Error(
            "Couldn't complete follow operation. sign in first."
          );
          throw ((U.title = "Unauthorised access"), U);
        }
        if (_ === t.user._id) return;
        if (
          !(
            await (
              await fetch(
                "https://slamit-d27722e9cea6.herokuapp.com/feeds/follow",
                {
                  method: "put",
                  body: JSON.stringify({
                    followedUserId: _,
                    followOrUnfollow: y,
                    userId: t.user._id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "bearer " + t.token,
                    "X-CSRF-Token": t.csrfToken,
                  },
                }
              )
            ).json()
          ).ok
        ) {
          const U = new Error("Couldn't complete follow operation");
          throw ((U.title = "Processing error"), U);
        }
      } catch (C) {
        s(C);
      }
    },
    g = (y) => {
      n((_) => ({ ..._, loading: !0 })),
        fetch(`https://slamit-d27722e9cea6.herokuapp.com/feeds/delete/${y}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearers " + t.token,
            "X-CSRF-Token": t.csrfToken,
          },
        })
          .then((_) => {
            if (!_.ok) throw new Error("Deleting a post failed");
            return _.json();
          })
          .then((_) => {
            n((C) => ({ ...C, loading: !1 }));
          })
          .catch(s);
    },
    N = {
      startEditPostHandler: f,
      cancelEditPostHandler: d,
      finishedEditHandler: m,
      deletePostRequest: (y) => {
        n((_) => ({ ..._, deletePostRequest: !0, toDeletePostId: y }));
      },
      deletePostHandler: g,
      loadPosts: o,
      addPost: r,
      likePost: p,
      editPost: i,
      yesButtonFunctions: (y) => {
        g(t.toDeletePostId),
          n((_) => ({ ..._, deletePostRequest: !1, toDeletePostId: null }));
      },
      statusInputChangeHandler: w,
      statusUpdateHandler: u,
      cancelDeletetPost: () => {
        n((y) => ({ ...y, deletePostRequest: !1, toDeletePostId: null }));
      },
      catchError: s,
      errorHandler: l,
      createNewPost: c,
      handleFetchUser: v,
      createdAt: k,
      followUser: h,
      emitContent: P,
      state: t,
      setState: n,
    };
  return a.jsx(ye.Provider, { value: N, children: e });
}
function em(e, t) {
  E.useEffect(() => {
    function n(r) {
      (e != null &&
        e.current &&
        !r.target.contains(e == null ? void 0 : e.current)) ||
        (e != null && e.current.contains(r.target) && t());
    }
    return (
      document.addEventListener("mousedown", n),
      document.addEventListener("touchstart", n),
      () => {
        document.removeEventListener("mousedown", n),
          document.removeEventListener("touchstart", n);
      }
    );
  }, [e, t]);
}
function Vd({ children: e, errorCanConFirmRef: t }) {
  const { errorHandler: n } = E.useContext(ye);
  return (
    em(t, n), a.jsx("div", { className: "modal-popup", ref: t, children: e })
  );
}
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jr() {
  return (
    (jr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jr.apply(this, arguments)
  );
}
var Ct;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ct || (Ct = {}));
const sa = "popstate";
function tm(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location;
    return Bs(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Qi(i);
  }
  return rm(t, n, null, e);
}
function te(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Hd(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function nm() {
  return Math.random().toString(36).substr(2, 8);
}
function la(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Bs(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    jr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Un(t) : t,
      { state: n, key: (t && t.key) || r || nm() }
    )
  );
}
function Qi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Un(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function rm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = Ct.Pop,
    u = null,
    c = f();
  c == null && ((c = 0), s.replaceState(jr({}, s.state, { idx: c }), ""));
  function f() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    l = Ct.Pop;
    let P = f(),
      p = P == null ? null : P - c;
    (c = P), u && u({ action: l, location: k.location, delta: p });
  }
  function m(P, p) {
    l = Ct.Push;
    let h = Bs(k.location, P, p);
    c = f() + 1;
    let g = la(h, c),
      x = k.createHref(h);
    try {
      s.pushState(g, "", x);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      i.location.assign(x);
    }
    o && u && u({ action: l, location: k.location, delta: 1 });
  }
  function w(P, p) {
    l = Ct.Replace;
    let h = Bs(k.location, P, p);
    c = f();
    let g = la(h, c),
      x = k.createHref(h);
    s.replaceState(g, "", x),
      o && u && u({ action: l, location: k.location, delta: 0 });
  }
  function v(P) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof P == "string" ? P : Qi(P);
    return (
      (h = h.replace(/ $/, "%20")),
      te(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, p)
    );
  }
  let k = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(P) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(sa, d),
        (u = P),
        () => {
          i.removeEventListener(sa, d), (u = null);
        }
      );
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: v,
    encodeLocation(P) {
      let p = v(P);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: w,
    go(P) {
      return s.go(P);
    },
  };
  return k;
}
var ua;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ua || (ua = {}));
function im(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Un(t) : t,
    i = $l(r.pathname || "/", n);
  if (i == null) return null;
  let o = Wd(e);
  om(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) {
    let u = vm(i);
    s = pm(o[l], u);
  }
  return s;
}
function Wd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let u = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (te(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Ot([r, u.relativePath]),
      f = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (te(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Wd(o.children, t, f, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: fm(c, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let u of qd(o.path)) i(o, s, u);
    }),
    t
  );
}
function qd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = qd(r.join("/")),
    l = [];
  return (
    l.push(...s.map((u) => (u === "" ? o : [o, u].join("/")))),
    i && l.push(...s),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function om(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : hm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const sm = /^:[\w-]+$/,
  lm = 3,
  um = 2,
  am = 1,
  cm = 10,
  dm = -2,
  aa = (e) => e === "*";
function fm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(aa) && (r += dm),
    t && (r += um),
    n
      .filter((i) => !aa(i))
      .reduce((i, o) => i + (sm.test(o) ? lm : o === "" ? am : cm), r)
  );
}
function hm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function pm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      u = s === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = mm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let d = l.route;
    o.push({
      params: r,
      pathname: Ot([i, f.pathname]),
      pathnameBase: xm(Ot([i, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== "/" && (i = Ot([i, f.pathnameBase]));
  }
  return o;
}
function mm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = gm(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((c, f, d) => {
      let { paramName: m, isOptional: w } = f;
      if (m === "*") {
        let k = l[d] || "";
        s = o.slice(0, o.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const v = l[d];
      return (
        w && !v ? (c[m] = void 0) : (c[m] = (v || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function gm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Hd(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, u) => (
            r.push({ paramName: l, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function vm(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Hd(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function $l(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ym(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Un(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : wm(n, t)) : t,
    search: Em(r),
    hash: Sm(i),
  };
}
function wm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Vo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function km(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Qd(e, t) {
  let n = km(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Kd(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Un(e))
    : ((i = jr({}, e)),
      te(
        !i.pathname || !i.pathname.includes("?"),
        Vo("?", "pathname", "search", i)
      ),
      te(
        !i.pathname || !i.pathname.includes("#"),
        Vo("#", "pathname", "hash", i)
      ),
      te(!i.search || !i.search.includes("#"), Vo("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (s == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let m = s.split("/");
      for (; m[0] === ".."; ) m.shift(), (d -= 1);
      i.pathname = m.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let u = ym(i, l),
    c = s && s !== "/" && s.endsWith("/"),
    f = (o || s === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || f) && (u.pathname += "/"), u;
}
const Ot = (e) => e.join("/").replace(/\/\/+/g, "/"),
  xm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Em = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Sm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Cm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Yd = ["post", "put", "patch", "delete"];
new Set(Yd);
const _m = ["get", ...Yd];
new Set(_m);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nr() {
  return (
    (Nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nr.apply(this, arguments)
  );
}
const Vl = E.createContext(null),
  Pm = E.createContext(null),
  nn = E.createContext(null),
  ho = E.createContext(null),
  pt = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Xd = E.createContext(null);
function jm(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ir() || te(!1);
  let { basename: r, navigator: i } = E.useContext(nn),
    { hash: o, pathname: s, search: l } = Zd(e, { relative: n }),
    u = s;
  return (
    r !== "/" && (u = s === "/" ? r : Ot([r, s])),
    i.createHref({ pathname: u, search: l, hash: o })
  );
}
function Ir() {
  return E.useContext(ho) != null;
}
function Bn() {
  return Ir() || te(!1), E.useContext(ho).location;
}
function Jd(e) {
  E.useContext(nn).static || E.useLayoutEffect(e);
}
function Ar() {
  let { isDataRoute: e } = E.useContext(pt);
  return e ? Vm() : Nm();
}
function Nm() {
  Ir() || te(!1);
  let e = E.useContext(Vl),
    { basename: t, future: n, navigator: r } = E.useContext(nn),
    { matches: i } = E.useContext(pt),
    { pathname: o } = Bn(),
    s = JSON.stringify(Qd(i, n.v7_relativeSplatPath)),
    l = E.useRef(!1);
  return (
    Jd(() => {
      l.current = !0;
    }),
    E.useCallback(
      function (c, f) {
        if ((f === void 0 && (f = {}), !l.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let d = Kd(c, JSON.parse(s), o, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Ot([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, s, o, e]
    )
  );
}
const Tm = E.createContext(null);
function Lm(e) {
  let t = E.useContext(pt).outlet;
  return t && E.createElement(Tm.Provider, { value: e }, t);
}
function Gd() {
  let { matches: e } = E.useContext(pt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Zd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = E.useContext(nn),
    { matches: i } = E.useContext(pt),
    { pathname: o } = Bn(),
    s = JSON.stringify(Qd(i, r.v7_relativeSplatPath));
  return E.useMemo(() => Kd(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function Rm(e, t) {
  return Fm(e, t);
}
function Fm(e, t, n, r) {
  Ir() || te(!1);
  let { navigator: i } = E.useContext(nn),
    { matches: o } = E.useContext(pt),
    s = o[o.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let u = s ? s.pathnameBase : "/";
  s && s.route;
  let c = Bn(),
    f;
  if (t) {
    var d;
    let P = typeof t == "string" ? Un(t) : t;
    u === "/" || ((d = P.pathname) != null && d.startsWith(u)) || te(!1),
      (f = P);
  } else f = c;
  let m = f.pathname || "/",
    w = m;
  if (u !== "/") {
    let P = u.replace(/^\//, "").split("/");
    w = "/" + m.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let v = im(e, { pathname: w }),
    k = Um(
      v &&
        v.map((P) =>
          Object.assign({}, P, {
            params: Object.assign({}, l, P.params),
            pathname: Ot([
              u,
              i.encodeLocation
                ? i.encodeLocation(P.pathname).pathname
                : P.pathname,
            ]),
            pathnameBase:
              P.pathnameBase === "/"
                ? u
                : Ot([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(P.pathnameBase).pathname
                      : P.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && k
    ? E.createElement(
        ho.Provider,
        {
          value: {
            location: Nr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: Ct.Pop,
          },
        },
        k
      )
    : k;
}
function Om() {
  let e = $m(),
    t = Cm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Im = E.createElement(Om, null);
class Am extends E.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          pt.Provider,
          { value: this.props.routeContext },
          E.createElement(Xd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function zm(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = E.useContext(Vl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(pt.Provider, { value: t }, r)
  );
}
function Um(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let s = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let f = s.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    f >= 0 || te(!1), (s = s.slice(0, Math.min(s.length, f + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < s.length; f++) {
      let d = s[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = f),
        d.route.id)
      ) {
        let { loaderData: m, errors: w } = n,
          v =
            d.route.loader &&
            m[d.route.id] === void 0 &&
            (!w || w[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (u = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((f, d, m) => {
    let w,
      v = !1,
      k = null,
      P = null;
    n &&
      ((w = l && d.route.id ? l[d.route.id] : void 0),
      (k = d.route.errorElement || Im),
      u &&
        (c < 0 && m === 0
          ? (Hm("route-fallback"), (v = !0), (P = null))
          : c === m &&
            ((v = !0), (P = d.route.hydrateFallbackElement || null))));
    let p = t.concat(s.slice(0, m + 1)),
      h = () => {
        let g;
        return (
          w
            ? (g = k)
            : v
            ? (g = P)
            : d.route.Component
            ? (g = E.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = f),
          E.createElement(zm, {
            match: d,
            routeContext: { outlet: f, matches: p, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || m === 0)
      ? E.createElement(Am, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: w,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var bd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(bd || {}),
  Ki = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ki || {});
function Bm(e) {
  let t = E.useContext(Vl);
  return t || te(!1), t;
}
function Mm(e) {
  let t = E.useContext(Pm);
  return t || te(!1), t;
}
function Dm(e) {
  let t = E.useContext(pt);
  return t || te(!1), t;
}
function ef(e) {
  let t = Dm(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || te(!1), n.route.id;
}
function $m() {
  var e;
  let t = E.useContext(Xd),
    n = Mm(Ki.UseRouteError),
    r = ef(Ki.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Vm() {
  let { router: e } = Bm(bd.UseNavigateStable),
    t = ef(Ki.UseNavigateStable),
    n = E.useRef(!1);
  return (
    Jd(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Nr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const ca = {};
function Hm(e, t, n) {
  ca[e] || (ca[e] = !0);
}
function tf(e) {
  return Lm(e.context);
}
function Re(e) {
  te(!1);
}
function Wm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ct.Pop,
    navigator: o,
    static: s = !1,
    future: l,
  } = e;
  Ir() && te(!1);
  let u = t.replace(/^\/*/, "/"),
    c = E.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: s,
        future: Nr({ v7_relativeSplatPath: !1 }, l),
      }),
      [u, l, o, s]
    );
  typeof r == "string" && (r = Un(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: m = "",
      state: w = null,
      key: v = "default",
    } = r,
    k = E.useMemo(() => {
      let P = $l(f, u);
      return P == null
        ? null
        : {
            location: { pathname: P, search: d, hash: m, state: w, key: v },
            navigationType: i,
          };
    }, [u, f, d, m, w, v, i]);
  return k == null
    ? null
    : E.createElement(
        nn.Provider,
        { value: c },
        E.createElement(ho.Provider, { children: n, value: k })
      );
}
function qm(e) {
  let { children: t, location: n } = e;
  return Rm(Ms(t), n);
}
new Promise(() => {});
function Ms(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    E.Children.forEach(e, (r, i) => {
      if (!E.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === E.Fragment) {
        n.push.apply(n, Ms(r.props.children, o));
        return;
      }
      r.type !== Re && te(!1), !r.props.index || !r.props.children || te(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Ms(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ds() {
  return (
    (Ds = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ds.apply(this, arguments)
  );
}
function Qm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Km(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ym(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Km(e);
}
const Xm = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Jm = "6";
try {
  window.__reactRouterVersion = Jm;
} catch {}
const Gm = "startTransition",
  da = Vf[Gm];
function Zm(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = E.useRef();
  o.current == null && (o.current = tm({ window: i, v5Compat: !0 }));
  let s = o.current,
    [l, u] = E.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = r || {},
    f = E.useCallback(
      (d) => {
        c && da ? da(() => u(d)) : u(d);
      },
      [u, c]
    );
  return (
    E.useLayoutEffect(() => s.listen(f), [s, f]),
    E.createElement(Wm, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const bm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  eg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  z = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: u,
        to: c,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      m = Qm(t, Xm),
      { basename: w } = E.useContext(nn),
      v,
      k = !1;
    if (typeof c == "string" && eg.test(c) && ((v = c), bm))
      try {
        let g = new URL(window.location.href),
          x = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
          T = $l(x.pathname, w);
        x.origin === g.origin && T != null
          ? (c = T + x.search + x.hash)
          : (k = !0);
      } catch {}
    let P = jm(c, { relative: i }),
      p = tg(c, {
        replace: s,
        state: l,
        target: u,
        preventScrollReset: f,
        relative: i,
        unstable_viewTransition: d,
      });
    function h(g) {
      r && r(g), g.defaultPrevented || p(g);
    }
    return E.createElement(
      "a",
      Ds({}, m, { href: v || P, onClick: k || o ? r : h, ref: n, target: u })
    );
  });
var fa;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(fa || (fa = {}));
var ha;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ha || (ha = {}));
function tg(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    u = Ar(),
    c = Bn(),
    f = Zd(e, { relative: s });
  return E.useCallback(
    (d) => {
      if (Ym(d, n)) {
        d.preventDefault();
        let m = r !== void 0 ? r : Qi(c) === Qi(f);
        u(e, {
          replace: m,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [c, u, f, r, i, n, e, o, s, l]
  );
}
function zr() {
  return a.jsxs("div", {
    className: "loader",
    children: [
      a.jsx("div", {}),
      a.jsx("div", {}),
      a.jsx("div", {}),
      a.jsx("div", {}),
    ],
  });
}
function ut({ props: e }) {
  return a.jsx("div", {
    children: e.link
      ? a.jsx(z, {
          to: e.link,
          className: [
            "link-btn",
            "button",
            `button--${e.design}`,
            `buttton--${e.mode}`,
          ].join(" "),
          style: { paddingTop: "0.5rem", paddingBottom: "0.5rem" },
          children: e.title,
        })
      : a.jsx("button", {
          onClick: e.onClick,
          type: e.type,
          disabled: e.disabled || e.loading,
          className: [
            "button",
            `button--${e.design}`,
            `buttton--${e.mode}`,
          ].join(" "),
          children: e.loading
            ? a.jsx("div", {
                className: "loading-roller",
                children: a.jsx(zr, {}),
              })
            : e.title,
        }),
  });
}
function Ur({ props: e }) {
  let t;
  return (
    e.buttonProperties.length > 1
      ? (t = e.buttonProperties.filter((n) => n.buttonTitle))
      : (t = e.buttonProperties),
    a.jsx("div", {
      className: "post-cancel-btns",
      children:
        t.length > 0 &&
        t.map((n) =>
          a.jsx(
            "div",
            {
              children: a.jsx(ut, {
                props: {
                  type: `${n == null ? void 0 : n.buttonType}`,
                  title: `${n == null ? void 0 : n.buttonTitle}`,
                  loading: n.loading,
                  link: (n == null ? void 0 : n.buttonLink) || null,
                  onClick: (n == null ? void 0 : n.buttonFunction) || null,
                  mode: n == null ? void 0 : n.mode,
                  design: n == null ? void 0 : n.design,
                  disabled: n.disabled,
                },
              }),
            },
            n.buttonTitle
          )
        ),
    })
  );
}
function Br({ props: e }) {
  const t = E.useRef();
  return a.jsx(E.Fragment, {
    children: a.jsx(Vd, {
      isError: e.isError,
      errorCanConFirmRef: t,
      children: a.jsxs("div", {
        className: "errorCanfirmPopup",
        ref: t,
        children: [
          a.jsx("h2", { children: e.title }),
          a.jsx("p", { children: e.message }),
          a.jsx("div", {
            className: "post-cancel-btns",
            children: a.jsx(Ur, {
              props: {
                buttonProperties: [
                  {
                    buttonType: e.buttonOneType,
                    buttonTitle: e.buttonOneTitle,
                    mode: "raised",
                    design: "danger",
                    buttonLink: null,
                    buttonFunction: e.buttonOneFunction,
                  },
                  e.buttonTwoTitle
                    ? {
                        buttonType: e.buttonTwoType,
                        buttonTitle: e.buttonTwoTitle,
                        mode: "flat",
                        design: "",
                        buttonLink: null,
                        buttonFunction: e.buttonTwoFunction,
                      }
                    : {},
                ],
              },
            }),
          }),
        ],
      }),
    }),
  });
}
const Mr = (e) => {
  var r;
  const { state: t, errorHandler: n } = E.useContext(ye);
  return a.jsxs(E.Fragment, {
    children: [
      t.error &&
        t.error.length > 0 &&
        a.jsx(Br, {
          props: {
            isError: ((r = t.error) == null ? void 0 : r.length) > 0,
            title: t.error[0].title || "Error message",
            message: t.error[0].message,
            buttonOneType: "button",
            buttonOneTitle: "Close",
            buttonOneFunction: n,
          },
        }),
      e.children,
    ],
  });
};
function ze({ props: e }) {
  var t, n, r;
  return a.jsxs("div", {
    className: "input",
    children: [
      e.label && a.jsx("label", { htmlFor: e.id, children: e.label }),
      e.control === "input" &&
        a.jsx("input", {
          className: [
            e.valid ? "valid" : "invalid",
            e.touched ? "touched" : "untouched",
          ].join(" "),
          id: e.id,
          type: e.type,
          required: e.required,
          value: e.value,
          onChange: (i) => e.onChange(e.id, i.target.value),
          onBlur: e.onBlur,
          placeholder: e.placeholder,
        }),
      e.control === "textarea" &&
        a.jsx("textarea", {
          className: [
            e.valid ? "valid" : "invalid",
            e.touched ? "touched" : "untouched",
          ].join(" "),
          id: e.id,
          rows: e.rows,
          required: e.required,
          value: e.value,
          placeholder: e.placeholder ? e.placeholder : "",
          onChange: (i) => e.onChange(e.id, i.target.value),
          onBlur: e.onBlur,
        }),
      ((t = e.value) == null ? void 0 : t.trim()) === "" &&
        e.touched &&
        a.jsx("p", {
          className: "input__error-message",
          children: "This field cannot be empty",
        }),
      ((n = e.value) == null ? void 0 : n.length) > 1 &&
        e.touched &&
        a.jsx("div", {
          children:
            !e.valid &&
            e.touched &&
            e.id === "title" &&
            a.jsx("p", {
              className: "input__error-message",
              children: "Title must be above 4 characters",
            }),
        }),
      ((r = e.value) == null ? void 0 : r.length) > 0 &&
        e.touched &&
        a.jsxs("div", {
          children: [
            !e.valid &&
              e.touched &&
              e.id === "fullname" &&
              a.jsx("p", {
                className: "input__error-message",
                children: "A minimum of 3 characters is required here.",
              }),
            !e.valid &&
              e.touched &&
              e.id === "password" &&
              a.jsx("p", {
                className: "input__error-message",
                children: "Password not be less than 6 characters",
              }),
            !e.valid &&
              e.touched &&
              e.id === "username" &&
              a.jsx("p", {
                className: "input__error-message",
                children: "Username must be above 2 characters.",
              }),
            !e.valid &&
              e.touched &&
              e.id === "email" &&
              a.jsx("p", {
                className: "input__error-message",
                children: "This must be a valid email",
              }),
            !e.valid &&
              e.touched &&
              e.id === "emailaddress" &&
              a.jsx("p", {
                className: "input__error-message",
                children: "This must be a valid email",
              }),
            !e.valid &&
              e.touched &&
              e.id === "name" &&
              a.jsx("p", {
                className: "input__error-message",
                children: "Name must be above 3 characters",
              }),
            !e.valid &&
              e.touched &&
              e.id === "enquiry" &&
              a.jsx("p", {
                className: "input__error-message",
                children: "Enquiry must be above 5 characters",
              }),
            !e.valid &&
              e.touched &&
              e.id === "content" &&
              a.jsx("p", {
                className: "input__error-message",
                children: "Content must be above 6 characters",
              }),
          ],
        }),
    ],
  });
}
const Ue = (e) => e.trim() !== "",
  It = (e) => (t) => {
    let n = !0;
    return (
      e.min && (n = n && t.trim().length >= e.min),
      e.max && (n = n && t.trim().length <= e.max),
      n
    );
  },
  Hl = (e) =>
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      e
    );
var nf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  pa = st.createContext && st.createContext(nf),
  ng = ["attr", "size", "title"];
function rg(e, t) {
  if (e == null) return {};
  var n = ig(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function ig(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yi.apply(this, arguments)
  );
}
function ma(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ma(Object(n), !0).forEach(function (r) {
          og(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ma(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function og(e, t, n) {
  return (
    (t = sg(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function sg(e) {
  var t = lg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lg(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function rf(e) {
  return (
    e &&
    e.map((t, n) =>
      st.createElement(t.tag, Xi({ key: n }, t.attr), rf(t.child))
    )
  );
}
function mt(e) {
  return (t) =>
    st.createElement(ug, Yi({ attr: Xi({}, e.attr) }, t), rf(e.child));
}
function ug(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      s = rg(e, ng),
      l = i || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      st.createElement(
        "svg",
        Yi(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: u,
            style: Xi(Xi({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && st.createElement("title", null, o),
        e.children
      )
    );
  };
  return pa !== void 0
    ? st.createElement(pa.Consumer, null, (n) => t(n))
    : t(nf);
}
function ag(e) {
  return mt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z",
        },
        child: [],
      },
    ],
  })(e);
}
function cg(e) {
  return mt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function dg(e) {
  return mt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
        },
        child: [],
      },
    ],
  })(e);
}
function fg(e) {
  return mt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function of() {
  return a.jsx("div", {
    children: a.jsxs("div", {
      className: "footer-main",
      children: [
        a.jsxs("div", {
          className: "each-footer-section footer-about",
          children: [
            a.jsx("h3", { children: "About SLaM" }),
            a.jsxs("section", {
              children: [
                a.jsx(z, { to: "", children: "About us" }),
                a.jsx(z, { to: "", children: "Locations" }),
                a.jsx(z, { to: "", children: "Policies" }),
                a.jsx(z, { to: "", children: "Partners" }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "each-footer-section footer-recommendations",
          children: [
            a.jsx("h3", { children: "Trending Slams" }),
            a.jsxs("section", {
              children: [
                a.jsx(z, { to: "", children: "Isreal Gaza war" }),
                a.jsx(z, { to: "", children: "UK Immigation rules" }),
                a.jsx(z, { to: "", children: "Russia hits Ukrain Again" }),
                a.jsx(z, { to: "", children: "Tips on how to loose weight" }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "each-footer-section footer-interests",
          children: [
            a.jsx("h3", { children: "Interests" }),
            a.jsxs("section", {
              children: [
                a.jsx(z, { to: "", children: "Politics" }),
                a.jsx(z, { to: "", children: "Technology" }),
                a.jsx(z, { to: "", children: "AI" }),
                a.jsx(z, { to: "", children: "Scence" }),
                a.jsx(z, { to: "", children: "Engineering" }),
              ],
            }),
            "                    ",
          ],
        }),
        a.jsxs("div", {
          className: "each-footer-section footer-social",
          children: [
            a.jsx("h3", { children: "Follow SLaM on" }),
            a.jsxs("div", {
              className: "social-links",
              children: [
                a.jsx(z, {
                  to: "",
                  children: a.jsx("p", { children: a.jsx(fg, {}) }),
                }),
                a.jsx(z, {
                  to: "",
                  children: a.jsx("p", { children: a.jsx(dg, {}) }),
                }),
                a.jsx(z, {
                  to: "",
                  children: a.jsx("p", { children: a.jsx(cg, {}) }),
                }),
                a.jsx(z, {
                  to: "",
                  children: a.jsx("p", { children: a.jsx(ag, {}) }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const ga = {
  emailaddress: { value: "", valid: !1, touched: !1, validators: [Ue, Hl] },
  name: { value: "", valid: !1, touched: !1, validators: [Ue, It({ min: 3 })] },
  enquiry: {
    value: "",
    valid: !1,
    touched: !1,
    validators: [Ue, It({ min: 5 })],
  },
};
function hg() {
  const { state: e, setState: t, catchError: n } = E.useContext(ye),
    [r, i] = E.useState({ loading: !1, userForm: ga, formIsValid: !1 }),
    o = (u) => {
      u.preventDefault(),
        t((c) => ({ ...c, loading: !0 })),
        fetch("https://slamit-d27722e9cea6.herokuapp.com/enquiry", {
          method: "put",
          body: JSON.stringify({
            userId: e.user._id || null,
            name: r.userForm.name.value,
            emailaddress: r.userForm.emailaddress.value,
            enquiry: r.userForm.enquiry.value,
          }),
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": e.csrfToken,
          },
        })
          .then((c) => {
            if ((console.log(c), !c.ok)) {
              const f = new Error(
                "Error submitting your enquiry, Please try again"
              );
              throw ((f.title = "Error submitting enquiry"), f);
            }
            return c.json();
          })
          .then((c) => {
            i((d) => ({ ...d, userForm: ga })),
              t((d) => ({ ...d, loading: !1 }));
            const f = new Error(
              "Your enquiry was successfully submited, we will get back to you soon."
            );
            throw ((f.title = "Enquiry success"), f);
          })
          .catch(n);
    },
    s = (u) => {
      i((c) => {
        const f = { ...c.userForm, [u]: { ...c.userForm[u], touched: !0 } };
        return { ...c, userForm: f };
      });
    },
    l = (u, c) => {
      i((f) => {
        let d = !0;
        for (let v of f.userForm[u].validators) d = d && v(c);
        const m = {
          ...f.userForm,
          [u]: {
            value: c,
            touched: !0,
            valid: d,
            validators: f.userForm[u].validators,
          },
        };
        let w = !0;
        for (let v in m) w = w && m[v].valid;
        return { ...f, userForm: m, formIsValid: w };
      });
    };
  return a.jsx(Mr, {
    children: a.jsxs("div", {
      className: "footer",
      children: [
        a.jsxs("div", {
          className: "footer-top",
          children: [
            a.jsxs("div", {
              className: "subscription",
              children: [
                a.jsxs("h1", {
                  children: [
                    "Got any questions?",
                    a.jsx("span", { children: " Submit a quick form" }),
                  ],
                }),
                a.jsxs("form", {
                  onSubmit: o,
                  className: "subscription-form",
                  children: [
                    a.jsx(ze, {
                      props: {
                        id: "name",
                        type: "text",
                        name: "name",
                        control: "input",
                        placeholder: "Full name",
                        onChange: l,
                        onBlur: () => s("name"),
                        touched: r.userForm.name.touched,
                        valid: r.userForm.name.valid,
                        value: r.userForm.name.value,
                      },
                    }),
                    a.jsx(ze, {
                      props: {
                        id: "emailaddress",
                        type: "emailaddress",
                        name: "emailaddress",
                        control: "input",
                        placeholder: "Email address",
                        onChange: l,
                        onBlur: () => s("emailaddress"),
                        touched: r.userForm.emailaddress.touched,
                        valid: r.userForm.emailaddress.valid,
                        value: r.userForm.emailaddress.value,
                      },
                    }),
                    a.jsx(ze, {
                      props: {
                        id: "enquiry",
                        type: "text",
                        control: "textarea",
                        required: "required",
                        name: "enquiry",
                        rows: 3,
                        placeholder: "Enter your enquiry",
                        value: r.userForm.enquiry.value,
                        touched: r.userForm.enquiry.touched,
                        valid: r.userForm.enquiry.valid,
                        onBlur: () => s("enquiry"),
                        onChange: l,
                      },
                    }),
                    a.jsx(ut, {
                      props: {
                        type: "submit",
                        title: "Submit",
                        link: null,
                        loading: e.loading,
                        onClick: o,
                        mode: "flat",
                        design: "success",
                      },
                    }),
                  ],
                }),
                a.jsx("p", {
                  children:
                    'SLAM will never share or spam your emailaddress address. By clicking "Subscribe" you agree to the Terms of Use and Privacy Policy',
                }),
              ],
            }),
            a.jsx(of, {}),
          ],
        }),
        a.jsxs("div", {
          className: "footer-foot",
          children: [
            a.jsx("h1", { children: "New Era Web Services" }),
            a.jsx("p", { children: "Newcastle United Kingdom" }),
          ],
        }),
      ],
    }),
  });
}
function pg(e) {
  return mt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "48",
          d: "M88 152h336M88 256h336M88 360h336",
        },
        child: [],
      },
    ],
  })(e);
}
function mg(e) {
  return mt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z",
        },
        child: [],
      },
    ],
  })(e);
}
function gg() {
  const { pathname: e } = Bn(),
    t = Ar(),
    { state: n, setState: r } = E.useContext(ye),
    [i, o] = E.useState({
      username: null,
      viewMobileMode: null,
      viewDesktopMode: null,
      viewMenu: !1,
    }),
    s = () => {
      localStorage.removeItem("slamUserToken"),
        localStorage.removeItem("slamUserId"),
        localStorage.removeItem("slamUsername"),
        localStorage.removeItem("slamUserStatus"),
        r((f) => ({
          ...f,
          user: { _id: null, username: null },
          isAuthenticated: !1,
          token: null,
          userStatus: null,
          active: !1,
        })),
        o((f) => ({
          ...f,
          isAuthenticated: !1,
          username: null,
          userIdFromLocalStorage: null,
        })),
        t("/");
    };
  function l() {
    o((f) => ({ ...f, viewMenu: !i.viewMenu }));
  }
  function u() {
    o((f) => ({ ...f, viewMenu: !1 }));
  }
  E.useEffect(() => {
    if (n.user && n.user.username && n.user._id && n.token) {
      const d =
        n.user.username.split("")[0].toUpperCase() + n.user.username.slice(1);
      o((m) => ({ ...m, username: d }));
    }
    function f() {
      window.outerWidth <= 400 &&
        r((d) => ({ ...d, mobileView: !0, miniDesktop: !1 })),
        window.outerWidth > 400 &&
          window.outerWidth <= 520 &&
          r((d) => ({ ...d, mobileView: !1, miniDesktop: !0 })),
        window.outerWidth > 520 &&
          r((d) => ({ ...d, mobileView: !1, miniDesktop: !1 })),
        window.outerWidth <= 799 &&
          o((d) => ({ ...d, vieMobilewMode: !0, viewDesktopMode: !1 })),
        window.outerWidth >= 800 &&
          o((d) => ({
            ...d,
            viewMobileMode: !1,
            viewDesktopMode: !0,
            viewMenu: !1,
          }));
    }
    return (
      window.addEventListener("load", f),
      window.addEventListener("resize", f),
      () => window.removeEventListener("resize", f)
    );
  }, [n]);
  const c = a.jsx("div", {
    children:
      n.user && n.user._id && n.isAuthenticated
        ? a.jsxs("div", {
            className: "header__nagivation-link isAut-section mboileViewOfUser",
            children: [
              a.jsxs(z, {
                to: `/user/${n.user._id}`,
                className: e.includes("/user") ? "isActive" : "",
                children: ["Hello ", i.username],
              }),
              a.jsx(ut, {
                props: {
                  type: "button",
                  title: "Logout",
                  link: null,
                  onClick: s,
                  mode: "danger",
                  design: "magnified",
                },
              }),
            ],
          })
        : a.jsxs("div", {
            className: "signup__and__login",
            children: [
              a.jsx(z, {
                to: "/login",
                children: a.jsx(ut, {
                  props: {
                    type: "button",
                    title: "Login",
                    link: null,
                    onClick: null,
                    mode: "success",
                    design: "graceful",
                  },
                }),
              }),
              !n.isAuthenticated &&
                a.jsx(z, {
                  to: "/signup",
                  children: a.jsx(ut, {
                    props: {
                      type: "button",
                      title: "Sign up",
                      link: null,
                      onClick: null,
                      mode: "success",
                      design: "magnified",
                    },
                  }),
                }),
            ],
          }),
  });
  return a.jsx(Mr, {
    children: a.jsxs("header", {
      children: [
        a.jsx(z, {
          to: "/",
          onClick: u,
          children: a.jsx("h1", { children: "S L a M" }),
        }),
        i.viewDesktopMode
          ? a.jsxs("div", {
              className: "header__nagivation-link desktop-view__mode",
              children: [
                a.jsx(z, {
                  to: "/recent-feeds",
                  className: e === "/recent-feeds" ? "isActive" : "",
                  children: "Recent feed",
                }),
                a.jsx(z, {
                  to: "/",
                  className: e === "/" ? "isActive" : "",
                  children: "Feeds",
                }),
                c,
              ],
            })
          : a.jsx("div", {
              onClick: l,
              className: "toggle-icon",
              children: i.viewMenu
                ? a.jsx("h1", {
                    style: { color: "whitesmoke" },
                    children: a.jsx(mg, {}),
                  })
                : a.jsx("h1", {
                    style: { color: "whitesmoke" },
                    children: a.jsx(pg, {}),
                  }),
            }),
        i.viewMenu &&
          a.jsxs("div", {
            className: "mobile-view__mode",
            onClick: l,
            children: [
              a.jsx(z, {
                to: "/recent-feeds",
                className: e === "/recent-feeds" ? "isActive" : "",
                children: "Recent feed",
              }),
              a.jsx(z, {
                to: "/",
                className: e === "/" ? "isActive" : "",
                children: "Feeds",
              }),
              c,
              a.jsx("div", {
                className: "mobile-view__links",
                children: a.jsx(of, {}),
              }),
            ],
          }),
      ],
    }),
  });
}
function vg(e) {
  return a.jsxs("div", {
    className: "main-layout-outlet",
    children: [
      a.jsx(gg, {
        props: { user: e.user, isAuthenticated: e.isAuthenticated },
      }),
      a.jsx("div", { className: "content-outlet", children: a.jsx(tf, {}) }),
      a.jsx(hg, {}),
    ],
  });
}
const tt = Object.create(null);
tt.open = "0";
tt.close = "1";
tt.ping = "2";
tt.pong = "3";
tt.message = "4";
tt.upgrade = "5";
tt.noop = "6";
const ki = Object.create(null);
Object.keys(tt).forEach((e) => {
  ki[tt[e]] = e;
});
const $s = { type: "error", data: "parser error" },
  sf =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  lf = typeof ArrayBuffer == "function",
  uf = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Wl = ({ type: e, data: t }, n, r) =>
    sf && t instanceof Blob
      ? n
        ? r(t)
        : va(t, r)
      : lf && (t instanceof ArrayBuffer || uf(t))
      ? n
        ? r(t)
        : va(new Blob([t]), r)
      : r(tt[e] + (t || "")),
  va = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function ya(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ho;
function yg(e, t) {
  if (sf && e.data instanceof Blob)
    return e.data.arrayBuffer().then(ya).then(t);
  if (lf && (e.data instanceof ArrayBuffer || uf(e.data))) return t(ya(e.data));
  Wl(e, !1, (n) => {
    Ho || (Ho = new TextEncoder()), t(Ho.encode(n));
  });
}
const wa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < wa.length; e++) bn[wa.charCodeAt(e)] = e;
const wg = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      o,
      s,
      l,
      u;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const c = new ArrayBuffer(t),
      f = new Uint8Array(c);
    for (r = 0; r < n; r += 4)
      (o = bn[e.charCodeAt(r)]),
        (s = bn[e.charCodeAt(r + 1)]),
        (l = bn[e.charCodeAt(r + 2)]),
        (u = bn[e.charCodeAt(r + 3)]),
        (f[i++] = (o << 2) | (s >> 4)),
        (f[i++] = ((s & 15) << 4) | (l >> 2)),
        (f[i++] = ((l & 3) << 6) | (u & 63));
    return c;
  },
  kg = typeof ArrayBuffer == "function",
  ql = (e, t) => {
    if (typeof e != "string") return { type: "message", data: af(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: xg(e.substring(1), t) }
      : ki[n]
      ? e.length > 1
        ? { type: ki[n], data: e.substring(1) }
        : { type: ki[n] }
      : $s;
  },
  xg = (e, t) => {
    if (kg) {
      const n = wg(e);
      return af(n, t);
    } else return { base64: !0, data: e };
  },
  af = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  cf = "",
  Eg = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let i = 0;
    e.forEach((o, s) => {
      Wl(o, !1, (l) => {
        (r[s] = l), ++i === n && t(r.join(cf));
      });
    });
  },
  Sg = (e, t) => {
    const n = e.split(cf),
      r = [];
    for (let i = 0; i < n.length; i++) {
      const o = ql(n[i], t);
      if ((r.push(o), o.type === "error")) break;
    }
    return r;
  };
function Cg() {
  return new TransformStream({
    transform(e, t) {
      yg(e, (n) => {
        const r = n.length;
        let i;
        if (r < 126)
          (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const o = new DataView(i.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const o = new DataView(i.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n);
      });
    },
  });
}
let Wo;
function ii(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function oi(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let i = 0; i < t; i++)
    (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function _g(e, t) {
  Wo || (Wo = new TextDecoder());
  const n = [];
  let r = 0,
    i = -1,
    o = !1;
  return new TransformStream({
    transform(s, l) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (ii(n) < 1) break;
          const u = oi(n, 1);
          (o = (u[0] & 128) === 128),
            (i = u[0] & 127),
            i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (ii(n) < 2) break;
          const u = oi(n, 2);
          (i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (ii(n) < 8) break;
          const u = oi(n, 8),
            c = new DataView(u.buffer, u.byteOffset, u.length),
            f = c.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            l.enqueue($s);
            break;
          }
          (i = f * Math.pow(2, 32) + c.getUint32(4)), (r = 3);
        } else {
          if (ii(n) < i) break;
          const u = oi(n, i);
          l.enqueue(ql(o ? u : Wo.decode(u), t)), (r = 0);
        }
        if (i === 0 || i > e) {
          l.enqueue($s);
          break;
        }
      }
    },
  });
}
const df = 4;
function ee(e) {
  if (e) return Pg(e);
}
function Pg(e) {
  for (var t in ee.prototype) e[t] = ee.prototype[t];
  return e;
}
ee.prototype.on = ee.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
ee.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
ee.prototype.off =
  ee.prototype.removeListener =
  ee.prototype.removeAllListeners =
  ee.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, i = 0; i < n.length; i++)
        if (((r = n[i]), r === t || r.fn === t)) {
          n.splice(i, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
ee.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
  }
  return this;
};
ee.prototype.emitReserved = ee.prototype.emit;
ee.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
ee.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const Ie =
  typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Function("return this")();
function ff(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const jg = Ie.setTimeout,
  Ng = Ie.clearTimeout;
function po(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = jg.bind(Ie)), (e.clearTimeoutFn = Ng.bind(Ie)))
    : ((e.setTimeoutFn = Ie.setTimeout.bind(Ie)),
      (e.clearTimeoutFn = Ie.clearTimeout.bind(Ie)));
}
const Tg = 1.33;
function Lg(e) {
  return typeof e == "string"
    ? Rg(e)
    : Math.ceil((e.byteLength || e.size) * Tg);
}
function Rg(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
function Fg(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function Og(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
class Ig extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class Ql extends ee {
  constructor(t) {
    super(),
      (this.writable = !1),
      po(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new Ig(t, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const n = ql(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const n = Fg(t);
    return n.length ? "?" + n : "";
  }
}
const hf =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      ""
    ),
  Vs = 64,
  Ag = {};
let ka = 0,
  si = 0,
  xa;
function Ea(e) {
  let t = "";
  do (t = hf[e % Vs] + t), (e = Math.floor(e / Vs));
  while (e > 0);
  return t;
}
function pf() {
  const e = Ea(+new Date());
  return e !== xa ? ((ka = 0), (xa = e)) : e + "." + Ea(ka++);
}
for (; si < Vs; si++) Ag[hf[si]] = si;
let mf = !1;
try {
  mf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const zg = mf;
function gf(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || zg)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new Ie[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function Ug() {}
const Bg = (function () {
  return new gf({ xdomain: !1 }).responseType != null;
})();
class Mg extends Ql {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < "u")) {
      const r = location.protocol === "https:";
      let i = location.port;
      i || (i = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          i !== t.port);
    }
    const n = t && t.forceBase64;
    (this.supportsBinary = Bg && !n),
      this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  poll() {
    (this.polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    Sg(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this.polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this.poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      Eg(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = pf()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts),
      new et(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (i, o) => {
        this.onError("xhr post error", i, o);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
class et extends ee {
  constructor(t, n) {
    super(),
      po(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    var t;
    const n = ff(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    n.xdomain = !!this.opts.xd;
    const r = (this.xhr = new gf(n));
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) &&
              r.setRequestHeader(i, this.opts.extraHeaders[i]);
        }
      } catch {}
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
        (r.onreadystatechange = () => {
          var i;
          r.readyState === 3 &&
            ((i = this.opts.cookieJar) === null ||
              i === void 0 ||
              i.parseCookies(r)),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this.data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this.index = et.requestsCount++), (et.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = Ug), t))
        try {
          this.xhr.abort();
        } catch {}
      typeof document < "u" && delete et.requests[this.index],
        (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
}
et.requestsCount = 0;
et.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Sa);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Ie ? "pagehide" : "unload";
    addEventListener(e, Sa, !1);
  }
}
function Sa() {
  for (let e in et.requests)
    et.requests.hasOwnProperty(e) && et.requests[e].abort();
}
const Kl =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  li = Ie.WebSocket || Ie.MozWebSocket,
  Ca = !0,
  Dg = "arraybuffer",
  _a =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class $g extends Ql {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64);
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = _a
        ? {}
        : ff(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Ca && !_a ? (n ? new li(t, n) : new li(t)) : new li(t, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      Wl(r, this.supportsBinary, (o) => {
        const s = {};
        try {
          Ca && this.ws.send(o);
        } catch {}
        i &&
          Kl(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = pf()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  check() {
    return !!li;
  }
}
class Vg extends Ql {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" &&
      ((this.transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      )),
      this.transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((t) => {
          this.onError("webtransport error", t);
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          const n = _g(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            i = Cg();
          i.readable.pipeTo(t.writable), (this.writer = i.writable.getWriter());
          const o = () => {
            r.read()
              .then(({ done: l, value: u }) => {
                l || (this.onPacket(u), o());
              })
              .catch((l) => {});
          };
          o();
          const s = { type: "open" };
          this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(s).then(() => this.onOpen());
        });
      }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      this.writer.write(r).then(() => {
        i &&
          Kl(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const Hg = { websocket: $g, webtransport: Vg, polling: Mg },
  Wg =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  qg = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function Hs(e) {
  if (e.length > 2e3) throw "URI too long";
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let i = Wg.exec(e || ""),
    o = {},
    s = 14;
  for (; s--; ) o[qg[s]] = i[s] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((o.source = t),
      (o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":")),
      (o.authority = o.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (o.ipv6uri = !0)),
    (o.pathNames = Qg(o, o.path)),
    (o.queryKey = Kg(o, o.query)),
    o
  );
}
function Qg(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function Kg(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
      i && (n[i] = o);
    }),
    n
  );
}
let vf = class un extends ee {
  constructor(t, n = {}) {
    super(),
      (this.binaryType = Dg),
      (this.writeBuffer = []),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = Hs(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = Hs(n.host).host),
      po(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = n.transports || [
        "polling",
        "websocket",
        "webtransport",
      ]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = Og(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == "function" &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
        this.hostname !== "localhost" &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost",
            });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = df), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    );
    return new Hg[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      un.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    )
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (n) => this.onClose("transport close", n));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    un.priorWebsocketSuccess = !1;
    const i = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (d) => {
          if (!r)
            if (d.type === "pong" && d.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              (un.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (f(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const m = new Error("probe error");
              (m.transport = n.name), this.emitReserved("upgradeError", m);
            }
        }));
    };
    function o() {
      r || ((r = !0), f(), n.close(), (n = null));
    }
    const s = (d) => {
      const m = new Error("probe error: " + d);
      (m.transport = n.name), o(), this.emitReserved("upgradeError", m);
    };
    function l() {
      s("transport closed");
    }
    function u() {
      s("socket closed");
    }
    function c(d) {
      n && d.name !== n.name && o();
    }
    const f = () => {
      n.removeListener("open", i),
        n.removeListener("error", s),
        n.removeListener("close", l),
        this.off("close", u),
        this.off("upgrading", c);
    };
    n.once("open", i),
      n.once("error", s),
      n.once("close", l),
      this.once("close", u),
      this.once("upgrading", c),
      this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      (un.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush(),
      this.readyState === "open" && this.opts.upgrade)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t),
        this.emitReserved("heartbeat"),
        this.resetPingTimeout(),
        t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if ((i && (n += Lg(i)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  sendPacket(t, n, r, i) {
    if (
      (typeof n == "function" && ((i = n), (n = void 0)),
      typeof r == "function" && ((i = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const o = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", o),
      this.writeBuffer.push(o),
      i && this.once("flush", i),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  onError(t) {
    (un.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t);
  }
  onClose(t, n) {
    (this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing") &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == "function" &&
        (removeEventListener(
          "beforeunload",
          this.beforeunloadEventListener,
          !1
        ),
        removeEventListener("offline", this.offlineEventListener, !1)),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const i = t.length;
    for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
vf.protocol = df;
function Yg(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = Hs(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + o + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const Xg = typeof ArrayBuffer == "function",
  Jg = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  yf = Object.prototype.toString,
  Gg =
    typeof Blob == "function" ||
    (typeof Blob < "u" && yf.call(Blob) === "[object BlobConstructor]"),
  Zg =
    typeof File == "function" ||
    (typeof File < "u" && yf.call(File) === "[object FileConstructor]");
function Yl(e) {
  return (
    (Xg && (e instanceof ArrayBuffer || Jg(e))) ||
    (Gg && e instanceof Blob) ||
    (Zg && e instanceof File)
  );
}
function xi(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (xi(e[n])) return !0;
    return !1;
  }
  if (Yl(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return xi(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && xi(e[n])) return !0;
  return !1;
}
function bg(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = Ws(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function Ws(e, t) {
  if (!e) return e;
  if (Yl(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = Ws(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Ws(e[r], t));
    return n;
  }
  return e;
}
function ev(e, t) {
  return (e.data = qs(e.data, t)), delete e.attachments, e;
}
function qs(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = qs(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = qs(e[n], t));
  return e;
}
const tv = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  nv = 5;
var M;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(M || (M = {}));
class rv {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === M.EVENT || t.type === M.ACK) && xi(t)
      ? this.encodeAsBinary({
          type: t.type === M.EVENT ? M.BINARY_EVENT : M.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === M.BINARY_EVENT || t.type === M.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = bg(t),
      r = this.encodeAsString(n.packet),
      i = n.buffers;
    return i.unshift(r), i;
  }
}
function Pa(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Xl extends ee {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === M.BINARY_EVENT;
      r || n.type === M.BINARY_ACK
        ? ((n.type = r ? M.EVENT : M.ACK),
          (this.reconstructor = new iv(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (Yl(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (M[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === M.BINARY_EVENT || r.type === M.BINARY_ACK) {
      const o = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const s = t.substring(o, n);
      if (s != Number(s) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(o, n);
    } else r.nsp = "/";
    const i = t.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const o = n + 1;
      for (; ++n; ) {
        const s = t.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(o, n + 1));
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n));
      if (Xl.isPayloadValid(r.type, o)) r.data = o;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case M.CONNECT:
        return Pa(n);
      case M.DISCONNECT:
        return n === void 0;
      case M.CONNECT_ERROR:
        return typeof n == "string" || Pa(n);
      case M.EVENT:
      case M.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && tv.indexOf(n[0]) === -1))
        );
      case M.ACK:
      case M.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class iv {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = ev(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const ov = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Xl,
      Encoder: rv,
      get PacketType() {
        return M;
      },
      protocol: nv,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function We(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const sv = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class wf extends ee {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      We(t, "open", this.onopen.bind(this)),
      We(t, "packet", this.onpacket.bind(this)),
      We(t, "error", this.onerror.bind(this)),
      We(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    if (sv.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const r = { type: M.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const s = this.ids++,
        l = n.pop();
      this._registerAckCallback(s, l), (r.id = s);
    }
    const i =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!i || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const i =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let l = 0; l < this.sendBuffer.length; l++)
          this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
        n.call(this, new Error("operation has timed out"));
      }, i),
      s = (...l) => {
        this.io.clearTimeoutFn(o), n.apply(this, l);
      };
    (s.withError = !0), (this.acks[t] = s);
  }
  emitWithAck(t, ...n) {
    return new Promise((r, i) => {
      const o = (s, l) => (s ? i(s) : r(l));
      (o.withError = !0), n.push(o), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((i, ...o) =>
      r !== this._queue[0]
        ? void 0
        : (i !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(i))
            : (this._queue.shift(), n && n(null, ...o)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: M.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t],
          r.withError &&
            r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case M.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case M.EVENT:
        case M.BINARY_EVENT:
          this.onevent(t);
          break;
        case M.ACK:
        case M.BINARY_ACK:
          this.onack(t);
          break;
        case M.DISCONNECT:
          this.ondisconnect();
          break;
        case M.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...i) {
      r || ((r = !0), n.packet({ type: M.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" &&
      (delete this.acks[t.id],
      n.withError && t.data.unshift(null),
      n.apply(this, t.data));
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: M.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function Mn(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
Mn.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
Mn.prototype.reset = function () {
  this.attempts = 0;
};
Mn.prototype.setMin = function (e) {
  this.ms = e;
};
Mn.prototype.setMax = function (e) {
  this.max = e;
};
Mn.prototype.setJitter = function (e) {
  this.jitter = e;
};
class Qs extends ee {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      po(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new Mn({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const i = n.parser || ov;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new vf(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const i = We(n, "open", function () {
        r.onopen(), t && t();
      }),
      o = (l) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", l),
          t ? t(l) : this.maybeReconnectOnOpen();
      },
      s = We(n, "error", o);
    if (this._timeout !== !1) {
      const l = this._timeout,
        u = this.setTimeoutFn(() => {
          i(), o(new Error("timeout")), n.close();
        }, l);
      this.opts.autoUnref && u.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(u);
        });
    }
    return this.subs.push(i), this.subs.push(s), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      We(t, "ping", this.onping.bind(this)),
      We(t, "data", this.ondata.bind(this)),
      We(t, "error", this.onerror.bind(this)),
      We(t, "close", this.onclose.bind(this)),
      We(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    Kl(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new wf(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", i))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const Yn = {};
function ar(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = Yg(e, t.path || "/socket.io"),
    r = n.source,
    i = n.id,
    o = n.path,
    s = Yn[i] && o in Yn[i].nsps,
    l = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let u;
  return (
    l ? (u = new Qs(r, t)) : (Yn[i] || (Yn[i] = new Qs(r, t)), (u = Yn[i])),
    n.query && !t.query && (t.query = n.queryKey),
    u.socket(n.path, t)
  );
}
Object.assign(ar, { Manager: Qs, Socket: wf, io: ar, connect: ar });
function kf(e) {
  return mt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
        },
        child: [],
      },
    ],
  })(e);
}
function xf(e) {
  return mt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ef({ props: e }) {
  var d;
  const {
      state: t,
      setState: n,
      likePost: r,
      followUser: i,
      emitContent: o,
      catchError: s,
    } = E.useContext(ye),
    [l, u] = E.useState({
      postLikes: e.likes,
      isLiked: !1,
      postId: null,
      creatorId: null,
      followings: [],
      isFollowing: !1,
      likedPostHistory: [],
    });
  E.useEffect(() => {
    var w;
    let m = (w = t.currentUser) == null ? void 0 : w.likedPosts;
    if (t.isAuthenticated) {
      let v = [];
      if (m && m.length > 0) for (let k = 0; k <= m.length; k++) v.push(m[k]);
      u((k) => ({ ...k, likedPostHistory: v }));
    }
  }, [t]);
  function c(m, w) {
    try {
      if (!t.isAuthenticated) {
        const v = new Error("Please sign in to add post to favorites.");
        throw ((v.title = "Unauthorized access"), v);
      }
      r(m, w),
        w === "like" &&
          (u((v) => ({
            ...v,
            postLikes: v.postLikes + 1,
            isLiked: !0,
            postId: m,
          })),
          n((v) => ({ ...v, likes: v.likes + 1 }))),
        w === "dislike" &&
          (u((v) => ({ ...v, postLikes: v.postLikes - 1, isLiked: !1 })),
          l.likedPostHistory.pop(m),
          n((v) => ({ ...v, likes: v.likes - 1 })));
    } catch (v) {
      s(v);
    }
  }
  E.useEffect(() => {
    var w;
    let m = (w = t.currentUser) == null ? void 0 : w.following;
    if (t.isAuthenticated) {
      let v = [];
      if (m && m.length > 0) for (let k = 0; k <= m.length; k++) v.push(m[k]);
      u((k) => ({ ...k, followings: v }));
    }
  }, [t]);
  function f(m, w) {
    n((v) => ({ ...v, follow: v.follow + 1 }));
    try {
      if (!t.isAuthenticated) {
        const v = new Error("Please sign in to follow user");
        throw ((v.title = "Unauthorized access"), v);
      }
      i(m, w),
        m === "follow" && u((v) => ({ ...v, isFollowing: !0, creatorId: w })),
        m === "unfollow" &&
          (u((v) => ({ ...v, isFollowing: !1 })), l.followings.pop(w)),
        n((v) => ({ ...v, follow: v.follow - 1 }));
    } catch (v) {
      s(v);
    }
  }
  return a.jsx(E.Fragment, {
    children: a.jsxs("div", {
      className: "slam-feed-section",
      children: [
        a.jsxs("div", {
          className: "feed-template__top-section",
          children: [
            a.jsx("div", {
              className: "post-links",
              children: a.jsxs("p", {
                className: "author-date__section",
                children: [
                  "Slammed by",
                  a.jsx("span", {
                    className: "posted-by",
                    children: a.jsx(z, {
                      to: e.creatorId ? `/user/${e.creatorId}` : "",
                      style: {
                        color: "rgb(37, 13, 75)",
                        textDecoration: "underline",
                      },
                      children:
                        (e == null ? void 0 : e.creator) || "Anonymuous User",
                    }),
                  }),
                  a.jsxs("span", {
                    className: "createdAt-time",
                    children: [
                      "on ",
                      (e == null ? void 0 : e.createdAt) || "23/04/2024",
                    ],
                  }),
                ],
              }),
            }),
            ((d = t.user) == null ? void 0 : d._id) !== e.creatorId &&
              a.jsx("div", {
                children:
                  l.followings.find((m) => m === e.creatorId) ||
                  (l.isFollowing && l.creatorId === e.creatorId)
                    ? a.jsx("p", {
                        className: "follow__unfollow follow_unfollow-extras",
                        onClick: () => f("unfollow", e.creatorId),
                        children: "Unfollow",
                      })
                    : a.jsx("p", {
                        className: "follow__unfollow follow_unfollow-extras",
                        onClick: () => f("follow", e.creatorId),
                        children: "Follow",
                      }),
              }),
          ],
        }),
        a.jsx("hr", {}),
        a.jsxs("div", {
          className: "content-section",
          children: [
            a.jsx(z, {
              className: "post-links",
              to: `/feeds/${e.postId}`,
              children: a.jsx("img", {
                className: "source-image",
                crossOrigin: "",
                src: e.image,
              }),
            }),
            a.jsxs("div", {
              className: "post-section",
              children: [
                a.jsx(z, {
                  className: "post-links",
                  to: `/feeds/${e.postId}`,
                  children: a.jsx("h2", {
                    className: "post-title",
                    children: e.title || "Message title",
                  }),
                }),
                e.content
                  ? a.jsx("p", { children: o(40, e.content) })
                  : a.jsx("p", {
                      children:
                        "Message Snippt goes here. This is the message content. Click to view the message details",
                    }),
                a.jsxs("div", {
                  className: "buttons__feed-templates",
                  children: [
                    a.jsxs("div", {
                      className: "like-section",
                      children: [
                        a.jsx("div", {
                          className: "like-buttons",
                          children:
                            l.likedPostHistory.find((m) => m === e.postId) ||
                            (l.isLiked && l.postId === e.postId)
                              ? a.jsx("p", {
                                  className: "like",
                                  onClick: () => c(e.postId, "dislike"),
                                  children: a.jsx(kf, {}),
                                })
                              : a.jsx("p", {
                                  className: "dislike",
                                  onClick: () => c(e.postId, "like"),
                                  children: a.jsx(xf, {}),
                                }),
                        }),
                        a.jsxs("p", {
                          children: [
                            l.postLikes,
                            " Like",
                            a.jsx("span", {
                              children: l.postLikes <= 1 ? "" : "s",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsx(Ur, {
                      props: {
                        buttonProperties: [
                          {
                            buttonType: "button",
                            buttonTitle: "View",
                            mode: "",
                            design: "raised",
                            buttonLink: `/feeds/${e.postId}`,
                            buttonFunction: null,
                          },
                          {
                            buttonType: "button",
                            buttonTitle:
                              e.isAuthenticated && e.userId === e.postUserId
                                ? "Edit"
                                : "",
                            mode: "",
                            design: "raised",
                            buttonLink: null,
                            buttonFunction: e.startEditPostHandler,
                          },
                          {
                            buttonType: "reset",
                            buttonTitle:
                              e.isAuthenticated && e.userId === e.postUserId
                                ? "Delete"
                                : "",
                            mode: "",
                            design: "danger",
                            buttonLink: null,
                            buttonFunction: e.deletePostHandler,
                          },
                        ],
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function lv({ props: e, children: t }) {
  return a.jsxs("div", {
    children: [
      a.jsx("div", { className: "all-slam-posts", children: t }),
      a.jsxs("div", {
        className: "pagination",
        children: [
          e.postPage > 1 &&
            a.jsx("div", {
              className: "paginator-btn prev",
              onClick: e.onPreviousPage,
              children: a.jsxs("p", { children: ["<<", " Prev"] }),
            }),
          e.totalPosts / e.postPage > e.itemsPerPage &&
            a.jsx("div", {
              className: "paginator-btn next",
              onClick: e.onNextPage,
              children: a.jsxs("p", { children: ["Next ", ">>"] }),
            }),
        ],
      }),
    ],
  });
}
function Jl({ props: e, children: t }) {
  return a.jsx("form", {
    className: "form-component",
    onSubmit: e.onSubmit,
    children: t,
  });
}
function uv({ props: e }) {
  return a.jsxs("div", {
    className: "input",
    children: [
      e.label && a.jsx("label", { htmlFor: e.id, children: e.label }),
      a.jsx("input", {
        className: [
          "file-picker",
          e.valid ? "valid" : "invalid",
          e.touched ? "touched" : "untouched",
        ].join(" "),
        id: e.id,
        type: `${e.type}`,
        required: e.required,
        value: e.value,
        onChange: (t) => e.onChange(e.id, t.target.value, t.target.files),
        onBlur: e.onBlur,
      }),
    ],
  });
}
const av = (e) => {
  const t = new FileReader(),
    n = new Promise((r, i) => {
      (t.onload = (o) => r(o.target.result)), (t.onerror = (o) => i(o));
    });
  return t.readAsDataURL(e), n;
};
function cv({ props: e }) {
  return a.jsx("div", {
    className: "image-display__helper",
    style: {
      backgroundImage: `url("${e.imageURL}")`,
      backgroundSize: e.contian ? "contain" : "cover",
      backgroundPosition: e.left ? "left" : "center",
    },
  });
}
const mo = ({ props: e }) => {
  var w, v, k;
  const t = {
      title: {
        value: e.statusInput || "",
        valid: !1,
        touched: !1,
        validators: [Ue, It({ min: 5 })],
      },
      image: { value: "", valid: !1, touched: !1, validators: [Ue] },
      content: {
        value: "",
        valid: !1,
        touched: !1,
        validators: [Ue, It({ min: 7 })],
      },
    },
    { state: n, setState: r, catchError: i } = E.useContext(ye),
    [o, s] = E.useState({
      base64Image: null,
      oldImageValue: null,
      postForm: t,
      formIsValid: !1,
      cancelRequest: !1,
    });
  E.useEffect(() => {
    e.selectedPost && e.isEditing
      ? s((P) => ({
          postForm: {
            title: {
              ...P.postForm.title,
              value: e.selectedPost.title,
              valid: !0,
            },
            image: {
              ...P.postForm.image,
              value: e.selectedPost.imageUrl,
              valid: !0,
            },
            content: {
              ...P.postForm.content,
              value: e.selectedPost.content,
              valid: !0,
            },
          },
          oldImageValue: e.selectedPost.imageUrl,
          formIsValid: !0,
        }))
      : e.isCreateNewPost && s({ postForm: t });
  }, []);
  const l = () => {
      s((P) => ({ ...P, cancelRequest: !o.cancelRequest }));
    },
    u = () => {
      s({ cancelRequest: !1 }), d();
    },
    c = (P, p, h) => {
      h &&
        av(h[0])
          .then((g) => {
            s((x) => ({ ...x, base64Image: g }));
          })
          .catch((g) => {
            s((x) => ({ ...x, base64Image: null }));
          }),
        s((g) => {
          let x = !0;
          for (const N of g.postForm[P].validators) x = x && N(p);
          const T = {
            ...g.postForm,
            [P]: {
              value: h ? h[0] : p,
              valid: x,
              touched: !0,
              validators: o.postForm[P].validators,
            },
          };
          let S = !0;
          for (let N in T) S = S && T[N].valid === !0;
          return { ...g, postForm: T, formIsValid: S };
        });
    },
    f = (P) => {
      s((p) => {
        const h = { ...p.postForm, [P]: { ...p.postForm[P], touched: !0 } };
        return { ...p, postForm: h };
      });
    },
    d = () => {
      s((P) => ({ ...P, postForm: t, formIsValid: !1, base64Image: null })),
        e.cancelEditPostHandler();
    },
    m = (P) => {
      P.preventDefault();
      const p = {
        title: o.postForm.title.value,
        image: o.postForm.image.value,
        oldImageValue: o.oldImageValue,
        content: o.postForm.content.value,
        base64Image: o.base64Image,
      };
      e.finishedEditHandler(p);
    };
  return a.jsx(E.Fragment, {
    children: a.jsx(Vd, {
      children: a.jsx("div", {
        className: "feed-edit-popup",
        children: a.jsxs(Jl, {
          props: { onSubmit: m },
          children: [
            !e.isAuthenticated &&
              a.jsxs("div", {
                className: "signup-prompt",
                style: {
                  display: "flex",
                  gap: "1rem",
                  margin: "1rem auto 0rem auto",
                },
                children: [
                  a.jsx("p", {
                    className: "creat-post-reminder__authentication",
                    children: "You need to be signed in to create a post",
                  }),
                  a.jsx(z, {
                    to: "/login",
                    children: a.jsx(ut, {
                      props: {
                        type: "button",
                        title: "Login",
                        link: null,
                        onClick: null,
                        mode: "success",
                        design: "",
                      },
                    }),
                  }),
                ],
              }),
            a.jsx(ze, {
              props: {
                id: "title",
                type: "text",
                name: "title",
                label: "Slam title",
                required: "required",
                control: "input",
                placeholder: "Enter slam feed title",
                value:
                  ((w = o.postForm.title) == null ? void 0 : w.value) || " ",
                touched:
                  ((v = o.postForm.title) == null ? void 0 : v.touched) || !1,
                valid:
                  ((k = o.postForm.title) == null ? void 0 : k.valid) || !1,
                onBlur: () => f("title"),
                onChange: c,
              },
            }),
            a.jsx(uv, {
              props: {
                id: "image",
                type: "file",
                label: "Post image",
                required: "required",
                control: "input",
                name: "image",
                placeholder: "Select image file",
                touched: o.postForm.image.touched || "",
                valid: o.postForm.image.valid || "",
                onBlur: () => f("image"),
                onChange: c,
              },
            }),
            a.jsxs("div", {
              className: "new-post__image-preview",
              children: [
                !o.base64Image &&
                  a.jsx("p", { children: "Select file to preview" }),
                o.base64Image &&
                  a.jsx(cv, {
                    props: { imageURL: o.base64Image },
                    contain: !0,
                    left: !0,
                  }),
              ],
            }),
            a.jsx(ze, {
              props: {
                id: "content",
                type: "text",
                control: "textarea",
                label: "Comment",
                required: "required",
                name: "content",
                rows: 3,
                placeholder: "Slam post comment",
                value: o.postForm.content.value || "",
                touched: o.postForm.content.touched || "",
                valid: o.postForm.content.valid || "",
                onBlur: () => f("content"),
                onChange: c,
              },
            }),
            a.jsx("div", {
              className: "post-cancel-btns",
              children: a.jsx(Ur, {
                props: {
                  buttonProperties: [
                    {
                      buttonType: "submit",
                      loading: n.loading,
                      buttonTitle: n.isEditing ? "Update" : "Post",
                      disabled: !n.isAuthenticated || !o.formIsValid,
                      mode: "",
                      design: "raised",
                      buttonLink: null,
                      buttonFunction: m,
                    },
                    {
                      buttonType: "reset",
                      buttonTitle: "Cancel",
                      mode: "",
                      design: "danger",
                      buttonLink: null,
                      buttonFunction: l,
                    },
                  ],
                },
              }),
            }),
            o.cancelRequest &&
              a.jsx(Br, {
                props: {
                  title: "Confirm cancel",
                  message: "Are you sure you want to cancel?",
                  buttonOneType: "button",
                  buttonOneTitle: "Yes",
                  buttonOneFunction: u,
                  buttonTwoType: "reset",
                  buttonTwoTitle: "No",
                  buttonTwoFunction: l,
                },
              }),
          ],
        }),
      }),
    }),
  });
};
function ja(e) {
  return mt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z",
        },
        child: [],
      },
    ],
  })(e);
}
function Sf({ props: e }) {
  const { state: t } = E.useContext(ye);
  return a.jsxs("div", {
    className: "side-bar-section",
    children: [
      e.isCreateNewPost &&
        a.jsx(mo, {
          props: {
            isEditing: e.isEditing,
            editLoading: e.editLoading,
            cancelEditPostHandler: e.cancelEditPostHandler,
            finishedEditHandler: e.finishedEditHandler,
            newPostHandler: e.newPostHandler,
            isAuthenticated: e.isAuthenticated,
          },
        }),
      a.jsxs("div", {
        className: "sub-section",
        children: [
          a.jsx("h1", { children: "Post feed" }),
          a.jsx("div", {
            className: "status-update__input",
            children: a.jsx(ze, {
              props: {
                id: "statusUpdate",
                type: "text",
                name: "createfeed",
                control: "input",
                placeholder: "Update your status",
                value: e.statusInput,
                onChange: e.statusInputChangeHandler,
              },
            }),
          }),
          a.jsx("div", {
            style: {
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginTop: "0.2rem",
            },
            children: a.jsx(Ur, {
              props: {
                buttonProperties: [
                  {
                    buttonType: "button",
                    loading: t.loading,
                    buttonTitle:
                      e != null && e.statusInput && e.statusInput.length > 2
                        ? "Update status"
                        : "New feed",
                    mode: "",
                    design: "raised",
                    buttonLink: null,
                    buttonFunction:
                      e != null && e.statusInput && e.statusInput.length > 2
                        ? e.statusUpdateHandler
                        : e.createNewPost,
                  },
                ],
              },
            }),
          }),
        ],
      }),
      a.jsx("div", {
        className: "status-section",
        children: t.isAuthenticated
          ? a.jsxs("div", {
              className: "user-status",
              children: [
                a.jsxs("h3", {
                  children: [
                    "Status: ",
                    a.jsx("span", {
                      className: "active-indicator",
                      children: a.jsx(ja, {}),
                    }),
                    t.isAuthenticated && " Online",
                  ],
                }),
                t.userStatus === "undefined" || t.userStatus === "null"
                  ? a.jsx("p", { children: "No user status" })
                  : a.jsx("p", { children: t.user.status || t.userStatus }),
              ],
            })
          : a.jsxs("div", {
              className: "user-status",
              children: [
                a.jsxs("h3", {
                  children: [
                    "Status: ",
                    a.jsx("span", {
                      className: "active-indicator offline-indicator",
                      children: a.jsx(ja, {}),
                    }),
                    !t.isAuthenticated && " Offline",
                  ],
                }),
                a.jsx("p", { children: "Sign in to view status" }),
              ],
            }),
      }),
    ],
  });
}
const Na = ar("https://slampost-8dd6d1d06367.herokuapp.com"),
  Cf = (e) => {
    const {
      startEditPostHandler: t,
      cancelEditPostHandler: n,
      finishedEditHandler: r,
      deletePostRequest: i,
      loadPosts: o,
      addPost: s,
      editPost: l,
      yesButtonFunctions: u,
      statusInputChangeHandler: c,
      statusUpdateHandler: f,
      cancelDeletetPost: d,
      createNewPost: m,
      createdAt: w,
      state: v,
      setState: k,
      catchError: P,
    } = E.useContext(ye);
    return (
      E.useEffect(() => {
        window.scrollTo({ top: 0 });
      }, []),
      E.useEffect(() => {
        o();
      }, [v.postPage]),
      E.useEffect(
        () => (
          Na.on("posts", (p) => {
            p.action === "create"
              ? s(p.post)
              : p.action === "update"
              ? l(p.post)
              : p.action === "delete" && o();
          }),
          () => {
            Na.off();
          }
        ),
        []
      ),
      a.jsx(E.Fragment, {
        children: a.jsx(Mr, {
          children: a.jsxs("div", {
            className: "displayed-outlet",
            children: [
              a.jsx(Sf, {
                props: {
                  isAuthenticated: v.isAuthenticated,
                  isCreateNewPost: v.isCreateNewPost,
                  editLoading: v.editLoading,
                  cancelEditPostHandler: n,
                  finishedEditHandler: r,
                  createNewPost: m,
                  statusInput: v.statusInput,
                  statusUpdateHandler: f,
                  statusInputChangeHandler: c,
                },
              }),
              a.jsxs("div", {
                className: "main-outlet",
                children: [
                  v.isEditing &&
                    a.jsx(mo, {
                      props: {
                        isAuthenticated: v.isAuthenticated,
                        selectedPost: v.editPost,
                        isEditing: v.isEditing,
                        editLoading: v.editLoading,
                        cancelEditPostHandler: n,
                        finishedEditHandler: r,
                      },
                    }),
                  v.deletePostRequest &&
                    a.jsx(Br, {
                      props: {
                        title: "Comfirm delete",
                        message: "Are you sure you want to delete this post?",
                        buttonOneType: "button",
                        buttonOneTitle: "Yes",
                        buttonOneFunction: u,
                        buttonTwoType: "reset",
                        buttonTwoTitle: "No",
                        buttonTwoFunction: d,
                      },
                    }),
                  a.jsxs("section", {
                    className: "all-slammed-posts",
                    children: [
                      a.jsx("h1", {
                        style: { marginTop: "1rem", marginBottom: "2rem" },
                        children: e.pageTitle || "All Feeds",
                      }),
                      v.postsLoading
                        ? a.jsx("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: a.jsx(zr, {}),
                          })
                        : a.jsx("div", {
                            children:
                              v.posts && v.posts.length === 0
                                ? a.jsx("h3", {
                                    style: {
                                      textAlign: "center",
                                      marginTop: "20%",
                                    },
                                    children: "No posts found",
                                  })
                                : a.jsx(lv, {
                                    props: {
                                      itemsPerPage: v.itemsPerPage,
                                      totalPosts: v.totalPosts,
                                      postPage: v.postPage,
                                      onPreviousPage: () => o("previous"),
                                      onNextPage: () => o("next"),
                                    },
                                    children: a.jsx("div", {
                                      children: a.jsx(
                                        "main",
                                        {
                                          className: "all-slam-posts",
                                          children:
                                            v.posts &&
                                            v.posts.map((p) => {
                                              var h, g, x, T, S;
                                              return a.jsx(
                                                "div",
                                                {
                                                  children: a.jsx(Ef, {
                                                    props: {
                                                      postId: p._id,
                                                      title: p.title,
                                                      image: p.imageUrl,
                                                      content: p.content,
                                                      likes:
                                                        ((h = p.likes) == null
                                                          ? void 0
                                                          : h.length) || 0,
                                                      createdAt: w(p.createdAt),
                                                      creator:
                                                        (g = p.creator) == null
                                                          ? void 0
                                                          : g.username,
                                                      creatorId:
                                                        (x = p.creator) == null
                                                          ? void 0
                                                          : x._id,
                                                      userId:
                                                        ((T = v.user) == null
                                                          ? void 0
                                                          : T._id) || null,
                                                      postUserId:
                                                        ((S = p.creator) == null
                                                          ? void 0
                                                          : S._id) || null,
                                                      isAuthenticated:
                                                        v.isAuthenticated,
                                                      deletePostHandler: () =>
                                                        i(p._id),
                                                      startEditPostHandler:
                                                        () => t(p._id),
                                                    },
                                                  }),
                                                },
                                                p._id
                                              );
                                            }),
                                        },
                                        "1"
                                      ),
                                    }),
                                  }),
                          }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  dv = {
    email: { value: "", valid: !1, touched: !1, validators: [Ue, Hl] },
    password: {
      value: "",
      valid: !1,
      touched: !1,
      validators: [Ue, It({ min: 6, max: 12 })],
    },
  };
function fv(e) {
  const { state: t, setState: n, catchError: r } = E.useContext(ye);
  E.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const [i, o] = E.useState({ loading: !1, userForm: dv, formIsValid: !1 }),
    s = Ar(),
    l = (f) => {
      f.preventDefault(),
        n((d) => ({ ...d, loading: !0 })),
        fetch("https://slamit-d27722e9cea6.herokuapp.com/auth/login", {
          method: "put",
          body: JSON.stringify({
            email: i.userForm.email.value,
            password: i.userForm.password.value,
          }),
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": t.csrfToken,
          },
        })
          .then((d) => {
            if (d.ok) return d.json();
            {
              const m = new Error(
                "Invalid login details... check if login details are correct"
              );
              throw ((m.title = "Login error"), s("/login"), m);
            }
          })
          .then((d) => {
            e.confirmSubmitLogin(d), n((m) => ({ ...m, loading: !1 })), s("/");
          })
          .catch(r);
    },
    u = (f) => {
      o((d) => {
        const m = { ...d.userForm, [f]: { ...d.userForm[f], touched: !0 } };
        return { ...d, userForm: m };
      });
    },
    c = (f, d) => {
      o((m) => {
        let w = !0;
        for (let P of m.userForm[f].validators) w = w && P(d);
        const v = {
          ...m.userForm,
          [f]: {
            value: d,
            touched: !0,
            valid: w,
            validators: m.userForm[f].validators,
          },
        };
        let k = !0;
        for (let P in v) k = k && v[P].valid;
        return { ...m, userForm: v, formIsValid: k };
      });
    };
  return a.jsxs("div", {
    className: "accounts-page",
    children: [
      a.jsxs("div", {
        className: "signup-page",
        children: [
          a.jsxs("div", {
            className: "signup-intro",
            children: [
              a.jsx("h2", { children: "Welcome back to SLaM!!" }),
              a.jsx("p", {
                children:
                  "Login into your account to access your slam posts and get recent updates in the SLaM community",
              }),
            ],
          }),
          a.jsx("div", {
            className: "signup-form-control",
            children: a.jsxs(Jl, {
              props: { onsubmit: i.formIsValid ? l : null },
              children: [
                a.jsxs("div", {
                  className: "input-form-classes",
                  children: [
                    a.jsx(ze, {
                      props: {
                        id: "email",
                        type: "email",
                        name: "email",
                        label: "Email",
                        control: "input",
                        placeholder: "Enter your email",
                        onBlur: () => u("email"),
                        onChange: c,
                        value: i.userForm.email.value,
                        valid: i.userForm.email.valid,
                        touched: i.userForm.email.touched,
                      },
                    }),
                    a.jsx(ze, {
                      props: {
                        id: "password",
                        type: "password",
                        name: "password",
                        label: "Password",
                        control: "input",
                        placeholder: "Enter password",
                        onBlur: () => u("password"),
                        onChange: c,
                        value: i.userForm.password.value,
                        valid: i.userForm.password.valid,
                        touched: i.userForm.password.touched,
                      },
                    }),
                  ],
                }),
                a.jsx(ut, {
                  props: {
                    type: "submit",
                    title: "Login",
                    design: "raised",
                    loading: t.loading,
                    onClick: i.formIsValid ? l : null,
                  },
                }),
                a.jsx(z, {
                  to: "/password-reset",
                  children: "Forgotten your password?",
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsxs("div", {
        className: "signup-link",
        children: [
          a.jsx("h3", { children: "New to SLaM?" }),
          a.jsx(z, { to: "/signup", children: "Sign up" }),
        ],
      }),
    ],
  });
}
const hv = {
  fullname: {
    value: "",
    valid: !1,
    touched: !1,
    validators: [Ue, It({ min: 5 })],
  },
  email: { value: "", valid: !1, touched: !1, validators: [Ue, Hl] },
  username: {
    value: "",
    valid: !1,
    touched: !1,
    validators: [Ue, It({ min: 3, max: 12 })],
  },
  password: {
    value: "",
    valid: !1,
    touched: !1,
    validators: [Ue, It({ min: 6, max: 12 })],
  },
};
function pv() {
  const { state: e, setState: t, catchError: n } = E.useContext(ye),
    [r, i] = E.useState({ loading: !1, userForm: hv, formIsValid: !1 });
  E.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const o = Ar(),
    s = (c) => {
      c.preventDefault(),
        t((f) => ({ ...f, loading: !0 })),
        fetch("https://slamit-d27722e9cea6.herokuapp.com/auth/signup", {
          method: "put",
          body: JSON.stringify({
            fullname: r.userForm.fullname.value,
            email: r.userForm.email.value,
            username: r.userForm.username.value,
            password: r.userForm.password.value,
          }),
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": e.csrfToken,
          },
        })
          .then((f) => {
            if (!f.ok) {
              const d = new Error(
                "Error occured creating user account, Check if email is not already registered"
              );
              throw ((d.title = "Sign up error"), d);
            }
            return f.json();
          })
          .then((f) => {
            t((m) => ({ ...m, loading: !1 }));
            const d = new Error("Sign in to your account to proceed");
            throw ((d.title = "Successful sign up"), o("/login"), d);
          })
          .catch(n);
    },
    l = (c) => {
      i((f) => {
        const d = { ...f.userForm, [c]: { ...f.userForm[c], touched: !0 } };
        return { ...f, userForm: d };
      });
    },
    u = (c, f) => {
      i((d) => {
        let m = !0;
        for (let k of d.userForm[c].validators) m = m && k(f);
        const w = {
          ...d.userForm,
          [c]: {
            value: f,
            touched: !0,
            valid: m,
            validators: d.userForm[c].validators,
          },
        };
        let v = !0;
        for (let k in w) v = v && w[k].valid;
        return { ...d, userForm: w, formIsValid: v };
      });
    };
  return a.jsxs("div", {
    className: "accounts-page",
    children: [
      a.jsxs("div", {
        className: "signup-page",
        children: [
          a.jsxs("div", {
            className: "signup-intro",
            children: [
              a.jsx("h2", { children: "Happy to join SLaM?" }),
              a.jsx("p", {
                children:
                  "Quickly create an account to post your slam and get updates on recent slams",
              }),
            ],
          }),
          a.jsx("div", {
            className: "signup-form-control",
            children: a.jsxs(Jl, {
              props: { onSubmit: r.formIsValid ? s : null },
              children: [
                a.jsxs("div", {
                  className: "input-form-classes",
                  children: [
                    a.jsx(ze, {
                      props: {
                        id: "fullname",
                        type: "text",
                        name: "fullname",
                        label: "Full name",
                        control: "input",
                        placeholder: "Enter your full name",
                        onChange: u,
                        onBlur: () => l("fullname"),
                        touched: r.userForm.fullname.touched,
                        valid: r.userForm.fullname.value,
                        value: r.userForm.fullname.value,
                      },
                    }),
                    a.jsx(ze, {
                      props: {
                        id: "email",
                        type: "email",
                        name: "email",
                        label: "Email",
                        control: "input",
                        placeholder: "Enter your email",
                        onChange: u,
                        onBlur: () => l("email"),
                        touched: r.userForm.email.touched,
                        valid: r.userForm.email.value,
                        value: r.userForm.email.value,
                      },
                    }),
                    a.jsx(ze, {
                      props: {
                        id: "username",
                        type: "text",
                        name: "username",
                        label: "Username",
                        control: "input",
                        placeholder: "Choose username",
                        onChange: u,
                        onBlur: () => l("username"),
                        touched: r.userForm.username.touched,
                        valid: r.userForm.username.value,
                        value: r.userForm.username.value,
                      },
                    }),
                    a.jsx(ze, {
                      props: {
                        id: "password",
                        type: "password",
                        name: "password",
                        label: "Password",
                        control: "input",
                        placeholder: "Password",
                        onChange: u,
                        onBlur: () => l("password"),
                        touched: r.userForm.password.touched,
                        valid: r.userForm.password.value,
                        value: r.userForm.password.value,
                      },
                    }),
                  ],
                }),
                a.jsx(ut, {
                  props: {
                    type: "submit",
                    design: "raised",
                    loading: e.loading,
                    title: "Create account",
                    onClick: r.formIsValid ? s : null,
                  },
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsxs("div", {
        className: "signup-link",
        children: [
          a.jsx("h3", { children: "Already have an account?" }),
          a.jsx(z, { to: "/login", children: "Login" }),
        ],
      }),
    ],
  });
}
function mv() {
  return a.jsx(Cf, { pageTitle: "Recent feeds" });
}
const gv = ar("https://slampost-8dd6d1d06367.herokuapp.com");
function vv() {
  const {
      startEditPostHandler: e,
      cancelEditPostHandler: t,
      finishedEditHandler: n,
      deletePostRequest: r,
      yesButtonFunctions: i,
      cancelDeletetPost: o,
      catchError: s,
      state: l,
      followUser: u,
      likePost: c,
      createdAt: f,
      setState: d,
    } = E.useContext(ye),
    m = Ar(),
    w = Gd().id,
    [v, k] = E.useState({
      error: null,
      post: [],
      postLikes: null,
      isLiked: !1,
      postId: null,
      likedPostHistory: [],
      followings: [],
    });
  E.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []),
    E.useEffect(() => {
      var y, _;
      let S = (y = l.currentUser) == null ? void 0 : y.likedPosts;
      if (l.isAuthenticated) {
        let C = [];
        if (S && S.length > 0) for (let O = 0; O <= S.length; O++) C.push(S[O]);
        k((O) => ({ ...O, likedPostHistory: C }));
      }
      let N = (_ = l.currentUser) == null ? void 0 : _.following;
      if (l.isAuthenticated) {
        let C = [];
        if (N && N.length > 0) for (let O = 0; O <= N.length; O++) C.push(N[O]);
        k((O) => ({ ...O, followings: C }));
      }
    }, [l]);
  function P(S, N) {
    try {
      if (!l.isAuthenticated) {
        const y = new Error("Please sign in to follow user");
        throw ((y.title = "Unauthorized access"), y);
      }
      u(S, N),
        S === "follow" &&
          (k((y) => ({ ...y, isFollowing: !0 })),
          d((y) => ({ ...y, follow: y.follow + 1 }))),
        S === "unfollow" &&
          (k((y) => ({ ...y, isFollowing: !1 })),
          v.followings.pop(N),
          d((y) => ({ ...y, follow: y.follow - 1 })));
    } catch (y) {
      s(y);
    }
  }
  function p(S, N) {
    try {
      if (!l.isAuthenticated) {
        const y = new Error("Please sign in to add post to favorites.");
        throw ((y.title = "Unauthorized access"), y);
      }
      N === "like" &&
        k((y) => ({
          ...y,
          postLikes: y.postLikes + 1,
          isLiked: !0,
          postId: S,
        })),
        N === "dislike" &&
          (k((y) => ({ ...y, postLikes: y.postLikes - 1, isLiked: !1 })),
          v.likedPostHistory.pop(S)),
        c(S, N);
    } catch (y) {
      s(y);
    }
  }
  async function h() {
    try {
      d((y) => ({ ...y, postLoading: !0 }));
      const N = await (
        await fetch(
          `https://slamit-d27722e9cea6.herokuapp.com/feeds/posts/${w}`
        )
      ).json();
      if (!N && N.post.length < 1)
        throw new Error("Unable to fectch post details");
      k((y) => {
        const _ = { ...N.post, imageUrl: N.post.imageUrl };
        return { ...y, post: [_], postLoading: !1, postLikes: _.likes.length };
      }),
        d((y) => ({ ...y, postLoading: !1 }));
    } catch (S) {
      s(S), d((N) => ({ ...N, postLoading: !1 }));
    }
  }
  const g = async (S) => {
      try {
        if (!l.isAuthenticated)
          throw (m("/login"), Error("You must login in to continue"));
        n(S);
      } catch (N) {
        s(N);
      }
    },
    x = async () => {
      await i(), m("/");
    };
  E.useEffect(() => {
    h();
  }, [l.isEditing]),
    E.useEffect(() => {
      gv.on("posts", (S) => {
        S.action === "update" && k((N) => ({ ...N, post: [S.post] }));
      });
    }, []);
  function T() {
    m(-1);
  }
  return l.postLoading
    ? a.jsx("div", {
        className: "single-post-details__page",
        children: a.jsx(zr, {}),
      })
    : v.error
    ? a.jsx("p", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        },
        children: "An error occured... please try again",
      })
    : a.jsx("div", {
        children: a.jsxs(Mr, {
          children: [
            l.isEditing &&
              a.jsx(mo, {
                props: {
                  selectedPost: l.editPost,
                  isEditing: l.isEditing,
                  isAuthenticated: l.isAuthenticated,
                  cancelEditPostHandler: t,
                  finishedEditHandler: g,
                },
              }),
            l.deletePostRequest &&
              a.jsx(Br, {
                props: {
                  title: "Comfirm delete",
                  message: "Are you sure you want to delete this post?",
                  buttonOneType: "button",
                  buttonOneTitle: "Yes",
                  buttonOneFunction: x,
                  buttonTwoType: "reset",
                  buttonTwoTitle: "No",
                  buttonTwoFunction: o,
                },
              }),
            a.jsxs("div", {
              className: "single-post-details__page",
              children: [
                a.jsx(z, {
                  className: "back-to-posts",
                  children: a.jsxs("button", {
                    className: "back-arrow",
                    onClick: T,
                    children: [" ", "<<<", " Back to posts"],
                  }),
                }),
                v.post
                  ? v.post.map((S) => {
                      var N, y, _;
                      return a.jsxs(
                        "div",
                        {
                          children: [
                            a.jsxs("div", {
                              className: "top-like__delete-section",
                              children: [
                                a.jsxs("div", {
                                  className: "like-section",
                                  children: [
                                    a.jsx("div", {
                                      className: "like-buttons",
                                      children:
                                        v.likedPostHistory.find(
                                          (C) => C === S._id
                                        ) ||
                                        (v.isLiked && v.postId === S._id)
                                          ? a.jsx("p", {
                                              className: "like",
                                              onClick: () =>
                                                p(S._id, "dislike"),
                                              children: a.jsx(kf, {}),
                                            })
                                          : a.jsx("p", {
                                              className: "dislike",
                                              onClick: () => p(S._id, "like"),
                                              children: a.jsx(xf, {}),
                                            }),
                                    }),
                                    a.jsxs("p", {
                                      children: [v.postLikes, " Likes"],
                                    }),
                                  ],
                                }),
                                S.creator._id !==
                                  ((N = l.user) == null ? void 0 : N._id) &&
                                  a.jsx("div", {
                                    children:
                                      ((y = v.followings) != null &&
                                        y.length &&
                                        v.followings.find(
                                          (C) => C === S.creator._id
                                        )) ||
                                      v.isFollowing
                                        ? a.jsx("p", {
                                            className: "follow__unfollow",
                                            onClick: () =>
                                              P("unfollow", S.creator._id),
                                            children: "Unfollow",
                                          })
                                        : a.jsx("p", {
                                            className: "follow__unfollow",
                                            onClick: () =>
                                              P("follow", S.creator._id),
                                            children: "Follow +",
                                          }),
                                  }),
                                l.isAuthenticated &&
                                  ((_ = l.user) == null
                                    ? void 0
                                    : _._id.toString()) ===
                                    S.creator._id.toString() &&
                                  a.jsx(Ur, {
                                    props: {
                                      buttonProperties: [
                                        {
                                          buttonType: "button",
                                          buttonTitle: "Edit",
                                          mode: "flat",
                                          design: "",
                                          buttonLink: null,
                                          buttonFunction: () => e(S._id),
                                        },
                                        {
                                          buttonType: "reset",
                                          buttonTitle: "Delete",
                                          mode: "",
                                          design: "danger",
                                          buttonLink: null,
                                          buttonFunction: () => r(S._id),
                                        },
                                      ],
                                    },
                                  }),
                              ],
                            }),
                            a.jsx("h1", {
                              className: "single-post__title",
                              children: S.title,
                            }),
                            a.jsxs("p", {
                              className: "single-post__creator",
                              children: [
                                "Slam created  by",
                                a.jsx("span", {
                                  className: "posted-by",
                                  children: a.jsx(z, {
                                    to: `/user/${S.creator._id}`,
                                    style: {
                                      color: "rgb(37, 13, 75)",
                                      border: "1px solid grey",
                                      padding: "0.1rem",
                                      marginRight: "4px",
                                      marginLeft: "4px",
                                      borderRadius: "0.2rem",
                                    },
                                    children:
                                      S.creator.username || "Anonymuous User",
                                  }),
                                }),
                                "on",
                                " " + f(S.createdAt),
                              ],
                            }),
                            a.jsx(z, {
                              to: S.imageUrl,
                              target: "_blank",
                              children: a.jsx("img", {
                                crossOrigin: "ananymous",
                                className: "single-post__image",
                                src: S.imageUrl,
                              }),
                            }),
                            a.jsx("p", {
                              className: "single-post__content",
                              children: S.content,
                            }),
                          ],
                        },
                        S._id
                      );
                    })
                  : a.jsx("h2", {
                      children:
                        "Unable to fetch post details... It seems Post has been deleted",
                    }),
              ],
            }),
          ],
        }),
      });
}
function yv() {
  return a.jsxs("div", {
    className: "page-not-found",
    children: [
      a.jsx("h1", { children: "Page not found" }),
      a.jsx("h3", {
        children:
          "The page or resource you are looking for does not exist or may have been removed.",
      }),
      a.jsx(ut, {
        props: {
          type: "submit",
          title: "Go to slam feeds",
          link: "/",
          onClick: null,
          mode: "",
          design: "raised",
        },
      }),
    ],
  });
}
function wv() {
  var p, h, g, x, T, S, N, y, _, C, O, U, ie, Dt, gt, rn, on, L, I, A;
  const {
      cancelEditPostHandler: e,
      finishedEditHandler: t,
      yesButtonFunctions: n,
      statusInputChangeHandler: r,
      statusUpdateHandler: i,
      cancelDeletetPost: o,
      createNewPost: s,
      state: l,
      followUser: u,
      setState: c,
      catchError: f,
    } = E.useContext(ye),
    [d, m] = E.useState({
      loading: !1,
      user: null,
      likes: null,
      followedUserId: null,
      following: null,
      followers: null,
      isFollowed: !1,
      isFollowing: !1,
    }),
    { pathname: w } = Bn(),
    { id: v } = Gd(),
    k = () => {
      fetch(`https://slamit-d27722e9cea6.herokuapp.com/auth/${v}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": l.csrfToken,
        },
      })
        .then((F) => {
          if (!F.ok) {
            const $ = new Error(
              "Invalid user details... check if login details are correct"
            );
            throw (($.title = "Authentication error"), $);
          }
          return F.json();
        })
        .then((F) => {
          m(($) => {
            var Ce, V, sn;
            return {
              ...$,
              user: F,
              likes: (Ce = F.likes) == null ? void 0 : Ce.length,
              followers: (V = F.followers) == null ? void 0 : V.length,
              following: (sn = F.following) == null ? void 0 : sn.length,
            };
          }),
            c(($) => ({ ...$, slammersPosts: F.posts, loading: !1 }));
        })
        .catch(f);
    };
  E.useEffect(() => {
    window.scrollTo({ top: 0 }),
      m((F) => ({ ...F, loading: !0 })),
      c((F) => ({ ...F, loading: !0 })),
      k(),
      m((F) => ({ ...F, loading: !1 }));
  }, []),
    E.useEffect(() => {
      k();
    }, [l, d]),
    E.useEffect(() => {
      var $;
      let F = ($ = d.user) == null ? void 0 : $.followers;
      l.isAuthenticated &&
        F &&
        m((Ce) => ({ ...Ce, isFollowing: F.find((V) => V === l.user._id) }));
    }, [d.followers]);
  const P = E.useCallback((F, $, Ce) => {
    console.log(Ce), console.log($);
    try {
      if (!l.isAuthenticated) {
        const V = new Error("Please sign in to folow user");
        throw ((V.title = "Unauthorized access"), V);
      }
      u(F, $, Ce),
        F === "follow" &&
          (m((V) => ({
            ...V,
            followers: V.followers + 1,
            isFollowed: !0,
            followedUserId: Ce,
          })),
          c((V) => ({ ...V, follow: V.follow + 1 }))),
        F === "unfollow" &&
          (m((V) => ({ ...V, followers: V.followers - 1, isFollowed: !1 })),
          c((V) => ({ ...V, follow: V.follow - 1 })));
    } catch (V) {
      f(V);
    }
  });
  return a.jsx("div", {
    className: "displayed-outlet",
    children: d.loading
      ? a.jsxs("div", {
          style: { textAlign: "center" },
          children: [
            a.jsx("p", { children: "Loading.... please wait" }),
            a.jsx(zr, {}),
          ],
        })
      : a.jsxs(a.Fragment, {
          children: [
            a.jsx("div", {
              className: "user-profile__sidebar",
              children: a.jsx(Sf, {
                props: {
                  isAuthenticated: l.isAuthenticated,
                  isCreateNewPost: l.isCreateNewPost,
                  editLoading: l.editLoading,
                  cancelEditPostHandler: e,
                  finishedEditHandler: t,
                  createNewPost: s,
                  statusInput: l.statusInput,
                  statusUpdateHandler: i,
                  statusInputChangeHandler: r,
                },
              }),
            }),
            a.jsxs("div", {
              className: "main-outlet",
              children: [
                l.isEditing &&
                  a.jsx(mo, {
                    props: {
                      isAuthenticated: l.isAuthenticated,
                      selectedPost: l.editPost,
                      isEditing: l.isEditing,
                      editLoading: l.editLoading,
                      cancelEditPostHandler: e,
                      finishedEditHandler: t,
                    },
                  }),
                l.deletePostRequest &&
                  a.jsx(Br, {
                    props: {
                      title: "Comfirm delete",
                      message: "Are you sure you want to delete this post?",
                      buttonOneType: "button",
                      buttonOneTitle: "Yes",
                      buttonOneFunction: n,
                      buttonTwoType: "reset",
                      buttonTwoTitle: "No",
                      buttonTwoFunction: o,
                    },
                  }),
                a.jsxs("div", {
                  className: "user-profile",
                  children: [
                    ((p = d.user) == null ? void 0 : p.status) &&
                      d.user.status.length !== 0 &&
                      a.jsx("div", {
                        className: "current-user-status",
                        children: a.jsxs("p", {
                          children: [
                            "User Status: ",
                            (h = d.user) == null ? void 0 : h.status,
                          ],
                        }),
                      }),
                    a.jsxs("div", {
                      className: "user-profile__top-section",
                      children: [
                        a.jsxs("div", {
                          className: "main-user__top-section",
                          children: [
                            a.jsxs("div", {
                              className: "user-personal__section",
                              children: [
                                a.jsx("div", {
                                  children:
                                    (g = d.user) != null && g.photo
                                      ? a.jsx("img", {
                                          src: `${d.user.photo}`,
                                          className: "user-profile__photo",
                                        })
                                      : a.jsx("img", {
                                          src: "/avataricon.png",
                                          className:
                                            "user-profile__photo avatar",
                                        }),
                                }),
                                a.jsxs("div", {
                                  className: "user-personal__details",
                                  children: [
                                    l.isAuthenticated &&
                                      v ===
                                        ((x = l.user) == null
                                          ? void 0
                                          : x._id) &&
                                      a.jsx("h2", {
                                        children:
                                          (T = d.user) == null
                                            ? void 0
                                            : T.fullname,
                                      }),
                                    a.jsxs("p", {
                                      className:
                                        v !=
                                        ((S = l.user) == null ? void 0 : S._id)
                                          ? "bolden"
                                          : "",
                                      children: [
                                        "@",
                                        (N = d.user) == null
                                          ? void 0
                                          : N.username.split()[0].toLowerCase(),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            ((y = d.user) == null ? void 0 : y._id) !==
                              ((_ = l.user) == null ? void 0 : _._id) &&
                              a.jsx("div", {
                                children:
                                  d.isFollowing && l.isAuthenticated
                                    ? a.jsx("p", {
                                        className: "follow__unfollow",
                                        onClick: () => {
                                          var F;
                                          return P(
                                            "unfollow",
                                            (F = d.user) == null
                                              ? void 0
                                              : F._id
                                          );
                                        },
                                        children: "Unfollow",
                                      })
                                    : a.jsx("p", {
                                        className: "follow__unfollow",
                                        onClick: () => {
                                          var F;
                                          return P(
                                            "follow",
                                            (F = d.user) == null
                                              ? void 0
                                              : F._id
                                          );
                                        },
                                        children: "Follow +",
                                      }),
                              }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "user-activities",
                          children: [
                            a.jsxs("p", {
                              children: [
                                a.jsxs("span", {
                                  children: [
                                    ((O =
                                      (C = d.user) == null
                                        ? void 0
                                        : C.followers) == null
                                      ? void 0
                                      : O.length) || 0,
                                    " ",
                                  ],
                                }),
                                "Follower",
                                ((ie =
                                  (U = d.user) == null
                                    ? void 0
                                    : U.followers) == null
                                  ? void 0
                                  : ie.length) <= 1
                                  ? ""
                                  : "s",
                              ],
                            }),
                            a.jsxs("p", {
                              children: [
                                a.jsxs("span", {
                                  children: [
                                    ((gt =
                                      (Dt = d.user) == null
                                        ? void 0
                                        : Dt.following) == null
                                      ? void 0
                                      : gt.length) || 0,
                                    " ",
                                  ],
                                }),
                                "Following",
                                ((rn = d.user) == null
                                  ? void 0
                                  : rn.following.length) <= 1
                                  ? ""
                                  : "s",
                              ],
                            }),
                            a.jsxs("p", {
                              children: [
                                a.jsxs("span", {
                                  children: [
                                    ((on = d.user) == null
                                      ? void 0
                                      : on.posts.length) || 0,
                                    " ",
                                  ],
                                }),
                                "Slam",
                                ((L = d.user) == null
                                  ? void 0
                                  : L.posts.length) <= 1
                                  ? ""
                                  : "s",
                              ],
                            }),
                            a.jsxs("p", {
                              children: [
                                a.jsxs("span", {
                                  children: [
                                    ((I = d.user) == null
                                      ? void 0
                                      : I.likes.length) || 0,
                                    " ",
                                  ],
                                }),
                                "Like",
                                ((A = d.user) == null
                                  ? void 0
                                  : A.likes.length) <= 1
                                  ? ""
                                  : "s",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "sub-links__user-profile",
                      children: [
                        a.jsx(z, {
                          to: "",
                          className:
                            w === `/user/${v}`
                              ? "subpaths isUserActive"
                              : "sub-paths",
                          children: "Slams",
                        }),
                        a.jsx(z, {
                          to: "favorites",
                          className:
                            w === `/user/${v}/favorites`
                              ? "subpaths isUserActive"
                              : "sub-paths",
                          children: "Favorites",
                        }),
                        a.jsx(z, {
                          to: "trending",
                          className:
                            w === `/user/${v}/trending`
                              ? "subpaths isUserActive"
                              : "sub-paths",
                          children: "Trending",
                        }),
                      ],
                    }),
                    a.jsx(tf, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
  });
}
function kv() {
  var o;
  const {
      state: e,
      deletePostRequest: t,
      startEditPostHandler: n,
      createdAt: r,
    } = E.useContext(ye),
    i = a.jsx(
      "main",
      {
        className: "all-slam-posts",
        children:
          e.slammersPosts &&
          ((o = e.slammersPosts) == null ? void 0 : o.length) > 0
            ? a.jsx("div", {
                children: e.slammersPosts.map((s) => {
                  var l, u, c, f, d;
                  return a.jsx(
                    "div",
                    {
                      style: { marginBottom: "1rem" },
                      children: a.jsx(Ef, {
                        props: {
                          postId: s._id,
                          title: s.title,
                          image: s.imageUrl,
                          content: s.content,
                          likes:
                            ((l = s.likes) == null ? void 0 : l.length) || 0,
                          createdAt: r(s.createdAt),
                          creator:
                            (u = s.creator) == null ? void 0 : u.username,
                          creatorId: (c = s.creator) == null ? void 0 : c._id,
                          userId:
                            ((f = e.user) == null ? void 0 : f._id) || null,
                          postUserId:
                            ((d = s.creator) == null ? void 0 : d._id) || null,
                          isAuthenticated: e.isAuthenticated,
                          deletePostHandler: () => t(s._id),
                          startEditPostHandler: () => n(s._id),
                        },
                      }),
                    },
                    s._id
                  );
                }),
              })
            : a.jsx("p", { children: "No user Slams" }),
      },
      "1"
    );
  return a.jsx("div", {
    children: e.loading
      ? a.jsx("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          children: a.jsx(zr, {}),
        })
      : a.jsx("div", { children: i }),
  });
}
function xv() {
  return a.jsx("div", { children: "Yor trending slams appears heres." });
}
function Ev() {
  return a.jsx("div", {
    children: "This is where the slams posts favorites of this user appears.",
  });
}
function Sv() {
  const {
    state: e,
    setState: t,
    handleFetchUser: n,
    catchError: r,
  } = E.useContext(ye);
  E.useEffect(() => {
    n();
  }, [e]),
    E.useEffect(() => {
      e.token &&
        e.user._id &&
        (localStorage.setItem("slamUserToken", e.token),
        localStorage.setItem("slamUserId", e.user._id),
        localStorage.setItem("slamUsername", e.user.username),
        localStorage.setItem("slamUserStatus", e.user.status));
    }, [e.token]),
    localStorage.getItem("slamUserToken"),
    E.useEffect(() => {
      const o = setTimeout(() => {
        localStorage.removeItem("slamUserToken"),
          localStorage.removeItem("slamUsername"),
          localStorage.removeItem("slamUserId"),
          localStorage.removeItem("slamUserStatus"),
          t((s) => ({
            ...s,
            isAuthenticated: !1,
            userStatus: "",
            user: { ...s.user, _id: null, username: null, status: null },
            token: null,
          }));
      }, 18e5);
      return () => clearTimeout(o);
    }, []),
    E.useEffect(() => {
      const o = localStorage.getItem("slamUserToken");
      if (o) {
        const s = localStorage.getItem("slamUsername"),
          l = localStorage.getItem("slamUserId"),
          u = localStorage.getItem("slamUserStatus");
        t((c) => ({
          ...c,
          isAuthenticated: !0,
          userStatus: u === void 0 ? "" : u,
          user: { ...c.user, _id: l, username: s, status: u },
          token: o,
        }));
      }
    }, [e.statusInput, e.userStatus, e.token]);
  const i = async (o) => {
    t((s) => ({
      ...s,
      isAuthenticated: !0,
      user: o.user,
      token: o.token,
      active: !0,
    }));
  };
  return a.jsx("div", {
    className: "root-app",
    children: a.jsx(Mr, {
      children: a.jsx(Zm, {
        children: a.jsx(qm, {
          children: a.jsxs(Re, {
            path: "/",
            element: a.jsx(vg, {
              user: e.user,
              isAuthenticated: e.isAuthenticated,
              token: e.token,
            }),
            children: [
              a.jsx(Re, {
                index: !0,
                element: a.jsx(Cf, {
                  user: e.user,
                  isAuthenticated: e.isAuthenticated,
                  token: e.token,
                }),
              }),
              a.jsx(Re, {
                path: "/feeds/:id",
                element: a.jsx(vv, {
                  user: e.user,
                  isAuthenticated: e.isAuthenticated,
                  token: e.token,
                }),
              }),
              a.jsx(Re, {
                path: "/recent-feeds",
                element: a.jsx(mv, {
                  user: e.user,
                  isAuthenticated: e.isAuthenticated,
                  token: e.token,
                }),
              }),
              a.jsx(Re, {
                path: "/login",
                element: a.jsx(fv, {
                  authenticated: e.isAuthenticated,
                  confirmSubmitLogin: i,
                }),
              }),
              a.jsx(Re, { path: "/signup", element: a.jsx(pv, {}) }),
              a.jsxs(Re, {
                path: "/user/:id",
                element: a.jsx(wv, {}),
                children: [
                  a.jsx(Re, { index: !0, element: a.jsx(kv, {}) }),
                  a.jsx(Re, { path: "favorites", element: a.jsx(Ev, {}) }),
                  a.jsx(Re, { path: "trending", element: a.jsx(xv, {}) }),
                ],
              }),
              a.jsx(Re, { path: "*", element: a.jsx(yv, {}) }),
            ],
          }),
        }),
      }),
    }),
  });
}
qo.createRoot(document.getElementById("root")).render(
  a.jsxs(bp, {
    children: [a.jsx(st.StrictMode, { children: a.jsx(Sv, {}) }), ","],
  })
);
