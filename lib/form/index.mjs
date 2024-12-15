import { defineComponent as In, ref as Kt, onMounted as Rn, watch as Mn, resolveComponent as le, unref as lt, openBlock as dt, createBlock as St, mergeProps as Jt, withCtx as Ft, createElementBlock as Wt, Fragment as se, renderList as Re, resolveDynamicComponent as ue, createCommentVNode as Ct, renderSlot as fe, createVNode as Nn, nextTick as Bn } from "vue";
var Xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function en(I) {
  return I && I.__esModule && Object.prototype.hasOwnProperty.call(I, "default") ? I.default : I;
}
function Fn() {
  this.__data__ = [], this.size = 0;
}
var On = Fn;
function Ln(I, L) {
  return I === L || I !== I && L !== L;
}
var nn = Ln, $n = nn;
function Hn(I, L) {
  for (var o = I.length; o--; )
    if ($n(I[o][0], L))
      return o;
  return -1;
}
var te = Hn, bn = te, jn = Array.prototype, Un = jn.splice;
function wn(I) {
  var L = this.__data__, o = bn(L, I);
  if (o < 0)
    return !1;
  var n = L.length - 1;
  return o == n ? L.pop() : Un.call(L, o, 1), --this.size, !0;
}
var Qn = wn, Yn = te;
function zn(I) {
  var L = this.__data__, o = Yn(L, I);
  return o < 0 ? void 0 : L[o][1];
}
var Gn = zn, Vn = te;
function Kn(I) {
  return Vn(this.__data__, I) > -1;
}
var Jn = Kn, Wn = te;
function Xn(I, L) {
  var o = this.__data__, n = Wn(o, I);
  return n < 0 ? (++this.size, o.push([I, L])) : o[n][1] = L, this;
}
var Zn = Xn, kn = On, qn = Qn, _n = Gn, tr = Jn, er = Zn;
function Ot(I) {
  var L = -1, o = I == null ? 0 : I.length;
  for (this.clear(); ++L < o; ) {
    var n = I[L];
    this.set(n[0], n[1]);
  }
}
Ot.prototype.clear = kn;
Ot.prototype.delete = qn;
Ot.prototype.get = _n;
Ot.prototype.has = tr;
Ot.prototype.set = er;
var ee = Ot, nr = ee;
function rr() {
  this.__data__ = new nr(), this.size = 0;
}
var or = rr;
function ar(I) {
  var L = this.__data__, o = L.delete(I);
  return this.size = L.size, o;
}
var ir = ar;
function lr(I) {
  return this.__data__.get(I);
}
var sr = lr;
function ur(I) {
  return this.__data__.has(I);
}
var fr = ur, cr = typeof Xt == "object" && Xt && Xt.Object === Object && Xt, rn = cr, dr = rn, vr = typeof self == "object" && self && self.Object === Object && self, pr = dr || vr || Function("return this")(), pt = pr, hr = pt, mr = hr.Symbol, ge = mr, Me = ge, on = Object.prototype, gr = on.hasOwnProperty, Ar = on.toString, Qt = Me ? Me.toStringTag : void 0;
function yr(I) {
  var L = gr.call(I, Qt), o = I[Qt];
  try {
    I[Qt] = void 0;
    var n = !0;
  } catch {
  }
  var t = Ar.call(I);
  return n && (L ? I[Qt] = o : delete I[Qt]), t;
}
var Er = yr, xr = Object.prototype, Sr = xr.toString;
function Cr(I) {
  return Sr.call(I);
}
var Tr = Cr, Ne = ge, Dr = Er, Pr = Tr, Ir = "[object Null]", Rr = "[object Undefined]", Be = Ne ? Ne.toStringTag : void 0;
function Mr(I) {
  return I == null ? I === void 0 ? Rr : Ir : Be && Be in Object(I) ? Dr(I) : Pr(I);
}
var ne = Mr;
function Nr(I) {
  var L = typeof I;
  return I != null && (L == "object" || L == "function");
}
var Yt = Nr, Br = ne, Fr = Yt, Or = "[object AsyncFunction]", Lr = "[object Function]", $r = "[object GeneratorFunction]", Hr = "[object Proxy]";
function br(I) {
  if (!Fr(I))
    return !1;
  var L = Br(I);
  return L == Lr || L == $r || L == Or || L == Hr;
}
var an = br, jr = pt, Ur = jr["__core-js_shared__"], wr = Ur, ce = wr, Fe = function() {
  var I = /[^.]+$/.exec(ce && ce.keys && ce.keys.IE_PROTO || "");
  return I ? "Symbol(src)_1." + I : "";
}();
function Qr(I) {
  return !!Fe && Fe in I;
}
var Yr = Qr, zr = Function.prototype, Gr = zr.toString;
function Vr(I) {
  if (I != null) {
    try {
      return Gr.call(I);
    } catch {
    }
    try {
      return I + "";
    } catch {
    }
  }
  return "";
}
var ln = Vr, Kr = an, Jr = Yr, Wr = Yt, Xr = ln, Zr = /[\\^$.*+?()[\]{}|]/g, kr = /^\[object .+?Constructor\]$/, qr = Function.prototype, _r = Object.prototype, to = qr.toString, eo = _r.hasOwnProperty, no = RegExp(
  "^" + to.call(eo).replace(Zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ro(I) {
  if (!Wr(I) || Jr(I))
    return !1;
  var L = Kr(I) ? no : kr;
  return L.test(Xr(I));
}
var oo = ro;
function ao(I, L) {
  return I == null ? void 0 : I[L];
}
var io = ao, lo = oo, so = io;
function uo(I, L) {
  var o = so(I, L);
  return lo(o) ? o : void 0;
}
var Dt = uo, fo = Dt, co = pt, vo = fo(co, "Map"), Ae = vo, po = Dt, ho = po(Object, "create"), re = ho, Oe = re;
function mo() {
  this.__data__ = Oe ? Oe(null) : {}, this.size = 0;
}
var go = mo;
function Ao(I) {
  var L = this.has(I) && delete this.__data__[I];
  return this.size -= L ? 1 : 0, L;
}
var yo = Ao, Eo = re, xo = "__lodash_hash_undefined__", So = Object.prototype, Co = So.hasOwnProperty;
function To(I) {
  var L = this.__data__;
  if (Eo) {
    var o = L[I];
    return o === xo ? void 0 : o;
  }
  return Co.call(L, I) ? L[I] : void 0;
}
var Do = To, Po = re, Io = Object.prototype, Ro = Io.hasOwnProperty;
function Mo(I) {
  var L = this.__data__;
  return Po ? L[I] !== void 0 : Ro.call(L, I);
}
var No = Mo, Bo = re, Fo = "__lodash_hash_undefined__";
function Oo(I, L) {
  var o = this.__data__;
  return this.size += this.has(I) ? 0 : 1, o[I] = Bo && L === void 0 ? Fo : L, this;
}
var Lo = Oo, $o = go, Ho = yo, bo = Do, jo = No, Uo = Lo;
function Lt(I) {
  var L = -1, o = I == null ? 0 : I.length;
  for (this.clear(); ++L < o; ) {
    var n = I[L];
    this.set(n[0], n[1]);
  }
}
Lt.prototype.clear = $o;
Lt.prototype.delete = Ho;
Lt.prototype.get = bo;
Lt.prototype.has = jo;
Lt.prototype.set = Uo;
var wo = Lt, Le = wo, Qo = ee, Yo = Ae;
function zo() {
  this.size = 0, this.__data__ = {
    hash: new Le(),
    map: new (Yo || Qo)(),
    string: new Le()
  };
}
var Go = zo;
function Vo(I) {
  var L = typeof I;
  return L == "string" || L == "number" || L == "symbol" || L == "boolean" ? I !== "__proto__" : I === null;
}
var Ko = Vo, Jo = Ko;
function Wo(I, L) {
  var o = I.__data__;
  return Jo(L) ? o[typeof L == "string" ? "string" : "hash"] : o.map;
}
var oe = Wo, Xo = oe;
function Zo(I) {
  var L = Xo(this, I).delete(I);
  return this.size -= L ? 1 : 0, L;
}
var ko = Zo, qo = oe;
function _o(I) {
  return qo(this, I).get(I);
}
var ta = _o, ea = oe;
function na(I) {
  return ea(this, I).has(I);
}
var ra = na, oa = oe;
function aa(I, L) {
  var o = oa(this, I), n = o.size;
  return o.set(I, L), this.size += o.size == n ? 0 : 1, this;
}
var ia = aa, la = Go, sa = ko, ua = ta, fa = ra, ca = ia;
function $t(I) {
  var L = -1, o = I == null ? 0 : I.length;
  for (this.clear(); ++L < o; ) {
    var n = I[L];
    this.set(n[0], n[1]);
  }
}
$t.prototype.clear = la;
$t.prototype.delete = sa;
$t.prototype.get = ua;
$t.prototype.has = fa;
$t.prototype.set = ca;
var da = $t, va = ee, pa = Ae, ha = da, ma = 200;
function ga(I, L) {
  var o = this.__data__;
  if (o instanceof va) {
    var n = o.__data__;
    if (!pa || n.length < ma - 1)
      return n.push([I, L]), this.size = ++o.size, this;
    o = this.__data__ = new ha(n);
  }
  return o.set(I, L), this.size = o.size, this;
}
var Aa = ga, ya = ee, Ea = or, xa = ir, Sa = sr, Ca = fr, Ta = Aa;
function Ht(I) {
  var L = this.__data__ = new ya(I);
  this.size = L.size;
}
Ht.prototype.clear = Ea;
Ht.prototype.delete = xa;
Ht.prototype.get = Sa;
Ht.prototype.has = Ca;
Ht.prototype.set = Ta;
var Da = Ht;
function Pa(I, L) {
  for (var o = -1, n = I == null ? 0 : I.length; ++o < n && L(I[o], o, I) !== !1; )
    ;
  return I;
}
var Ia = Pa, Ra = Dt, Ma = function() {
  try {
    var I = Ra(Object, "defineProperty");
    return I({}, "", {}), I;
  } catch {
  }
}(), Na = Ma, $e = Na;
function Ba(I, L, o) {
  L == "__proto__" && $e ? $e(I, L, {
    configurable: !0,
    enumerable: !0,
    value: o,
    writable: !0
  }) : I[L] = o;
}
var sn = Ba, Fa = sn, Oa = nn, La = Object.prototype, $a = La.hasOwnProperty;
function Ha(I, L, o) {
  var n = I[L];
  (!($a.call(I, L) && Oa(n, o)) || o === void 0 && !(L in I)) && Fa(I, L, o);
}
var un = Ha, ba = un, ja = sn;
function Ua(I, L, o, n) {
  var t = !o;
  o || (o = {});
  for (var e = -1, i = L.length; ++e < i; ) {
    var r = L[e], a = n ? n(o[r], I[r], r, o, I) : void 0;
    a === void 0 && (a = I[r]), t ? ja(o, r, a) : ba(o, r, a);
  }
  return o;
}
var ae = Ua;
function wa(I, L) {
  for (var o = -1, n = Array(I); ++o < I; )
    n[o] = L(o);
  return n;
}
var Qa = wa;
function Ya(I) {
  return I != null && typeof I == "object";
}
var zt = Ya, za = ne, Ga = zt, Va = "[object Arguments]";
function Ka(I) {
  return Ga(I) && za(I) == Va;
}
var Ja = Ka, He = Ja, Wa = zt, fn = Object.prototype, Xa = fn.hasOwnProperty, Za = fn.propertyIsEnumerable, ka = He(/* @__PURE__ */ function() {
  return arguments;
}()) ? He : function(I) {
  return Wa(I) && Xa.call(I, "callee") && !Za.call(I, "callee");
}, qa = ka, _a = Array.isArray, ye = _a, kt = { exports: {} };
function ti() {
  return !1;
}
var ei = ti;
kt.exports;
(function(I, L) {
  var o = pt, n = ei, t = L && !L.nodeType && L, e = t && !0 && I && !I.nodeType && I, i = e && e.exports === t, r = i ? o.Buffer : void 0, a = r ? r.isBuffer : void 0, f = a || n;
  I.exports = f;
})(kt, kt.exports);
var cn = kt.exports, ni = 9007199254740991, ri = /^(?:0|[1-9]\d*)$/;
function oi(I, L) {
  var o = typeof I;
  return L = L ?? ni, !!L && (o == "number" || o != "symbol" && ri.test(I)) && I > -1 && I % 1 == 0 && I < L;
}
var ai = oi, ii = 9007199254740991;
function li(I) {
  return typeof I == "number" && I > -1 && I % 1 == 0 && I <= ii;
}
var dn = li, si = ne, ui = dn, fi = zt, ci = "[object Arguments]", di = "[object Array]", vi = "[object Boolean]", pi = "[object Date]", hi = "[object Error]", mi = "[object Function]", gi = "[object Map]", Ai = "[object Number]", yi = "[object Object]", Ei = "[object RegExp]", xi = "[object Set]", Si = "[object String]", Ci = "[object WeakMap]", Ti = "[object ArrayBuffer]", Di = "[object DataView]", Pi = "[object Float32Array]", Ii = "[object Float64Array]", Ri = "[object Int8Array]", Mi = "[object Int16Array]", Ni = "[object Int32Array]", Bi = "[object Uint8Array]", Fi = "[object Uint8ClampedArray]", Oi = "[object Uint16Array]", Li = "[object Uint32Array]", ot = {};
ot[Pi] = ot[Ii] = ot[Ri] = ot[Mi] = ot[Ni] = ot[Bi] = ot[Fi] = ot[Oi] = ot[Li] = !0;
ot[ci] = ot[di] = ot[Ti] = ot[vi] = ot[Di] = ot[pi] = ot[hi] = ot[mi] = ot[gi] = ot[Ai] = ot[yi] = ot[Ei] = ot[xi] = ot[Si] = ot[Ci] = !1;
function $i(I) {
  return fi(I) && ui(I.length) && !!ot[si(I)];
}
var Hi = $i;
function bi(I) {
  return function(L) {
    return I(L);
  };
}
var Ee = bi, qt = { exports: {} };
qt.exports;
(function(I, L) {
  var o = rn, n = L && !L.nodeType && L, t = n && !0 && I && !I.nodeType && I, e = t && t.exports === n, i = e && o.process, r = function() {
    try {
      var a = t && t.require && t.require("util").types;
      return a || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  I.exports = r;
})(qt, qt.exports);
var xe = qt.exports, ji = Hi, Ui = Ee, be = xe, je = be && be.isTypedArray, wi = je ? Ui(je) : ji, Qi = wi, Yi = Qa, zi = qa, Gi = ye, Vi = cn, Ki = ai, Ji = Qi, Wi = Object.prototype, Xi = Wi.hasOwnProperty;
function Zi(I, L) {
  var o = Gi(I), n = !o && zi(I), t = !o && !n && Vi(I), e = !o && !n && !t && Ji(I), i = o || n || t || e, r = i ? Yi(I.length, String) : [], a = r.length;
  for (var f in I)
    (L || Xi.call(I, f)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    t && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    e && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Ki(f, a))) && r.push(f);
  return r;
}
var vn = Zi, ki = Object.prototype;
function qi(I) {
  var L = I && I.constructor, o = typeof L == "function" && L.prototype || ki;
  return I === o;
}
var Se = qi;
function _i(I, L) {
  return function(o) {
    return I(L(o));
  };
}
var pn = _i, tl = pn, el = tl(Object.keys, Object), nl = el, rl = Se, ol = nl, al = Object.prototype, il = al.hasOwnProperty;
function ll(I) {
  if (!rl(I))
    return ol(I);
  var L = [];
  for (var o in Object(I))
    il.call(I, o) && o != "constructor" && L.push(o);
  return L;
}
var sl = ll, ul = an, fl = dn;
function cl(I) {
  return I != null && fl(I.length) && !ul(I);
}
var hn = cl, dl = vn, vl = sl, pl = hn;
function hl(I) {
  return pl(I) ? dl(I) : vl(I);
}
var Ce = hl, ml = ae, gl = Ce;
function Al(I, L) {
  return I && ml(L, gl(L), I);
}
var yl = Al;
function El(I) {
  var L = [];
  if (I != null)
    for (var o in Object(I))
      L.push(o);
  return L;
}
var xl = El, Sl = Yt, Cl = Se, Tl = xl, Dl = Object.prototype, Pl = Dl.hasOwnProperty;
function Il(I) {
  if (!Sl(I))
    return Tl(I);
  var L = Cl(I), o = [];
  for (var n in I)
    n == "constructor" && (L || !Pl.call(I, n)) || o.push(n);
  return o;
}
var Rl = Il, Ml = vn, Nl = Rl, Bl = hn;
function Fl(I) {
  return Bl(I) ? Ml(I, !0) : Nl(I);
}
var Te = Fl, Ol = ae, Ll = Te;
function $l(I, L) {
  return I && Ol(L, Ll(L), I);
}
var Hl = $l, _t = { exports: {} };
_t.exports;
(function(I, L) {
  var o = pt, n = L && !L.nodeType && L, t = n && !0 && I && !I.nodeType && I, e = t && t.exports === n, i = e ? o.Buffer : void 0, r = i ? i.allocUnsafe : void 0;
  function a(f, g) {
    if (g)
      return f.slice();
    var d = f.length, p = r ? r(d) : new f.constructor(d);
    return f.copy(p), p;
  }
  I.exports = a;
})(_t, _t.exports);
var bl = _t.exports;
function jl(I, L) {
  var o = -1, n = I.length;
  for (L || (L = Array(n)); ++o < n; )
    L[o] = I[o];
  return L;
}
var Ul = jl;
function wl(I, L) {
  for (var o = -1, n = I == null ? 0 : I.length, t = 0, e = []; ++o < n; ) {
    var i = I[o];
    L(i, o, I) && (e[t++] = i);
  }
  return e;
}
var Ql = wl;
function Yl() {
  return [];
}
var mn = Yl, zl = Ql, Gl = mn, Vl = Object.prototype, Kl = Vl.propertyIsEnumerable, Ue = Object.getOwnPropertySymbols, Jl = Ue ? function(I) {
  return I == null ? [] : (I = Object(I), zl(Ue(I), function(L) {
    return Kl.call(I, L);
  }));
} : Gl, De = Jl, Wl = ae, Xl = De;
function Zl(I, L) {
  return Wl(I, Xl(I), L);
}
var kl = Zl;
function ql(I, L) {
  for (var o = -1, n = L.length, t = I.length; ++o < n; )
    I[t + o] = L[o];
  return I;
}
var gn = ql, _l = pn, ts = _l(Object.getPrototypeOf, Object), An = ts, es = gn, ns = An, rs = De, os = mn, as = Object.getOwnPropertySymbols, is = as ? function(I) {
  for (var L = []; I; )
    es(L, rs(I)), I = ns(I);
  return L;
} : os, yn = is, ls = ae, ss = yn;
function us(I, L) {
  return ls(I, ss(I), L);
}
var fs = us, cs = gn, ds = ye;
function vs(I, L, o) {
  var n = L(I);
  return ds(I) ? n : cs(n, o(I));
}
var En = vs, ps = En, hs = De, ms = Ce;
function gs(I) {
  return ps(I, ms, hs);
}
var As = gs, ys = En, Es = yn, xs = Te;
function Ss(I) {
  return ys(I, xs, Es);
}
var Cs = Ss, Ts = Dt, Ds = pt, Ps = Ts(Ds, "DataView"), Is = Ps, Rs = Dt, Ms = pt, Ns = Rs(Ms, "Promise"), Bs = Ns, Fs = Dt, Os = pt, Ls = Fs(Os, "Set"), $s = Ls, Hs = Dt, bs = pt, js = Hs(bs, "WeakMap"), Us = js, de = Is, ve = Ae, pe = Bs, he = $s, me = Us, xn = ne, bt = ln, we = "[object Map]", ws = "[object Object]", Qe = "[object Promise]", Ye = "[object Set]", ze = "[object WeakMap]", Ge = "[object DataView]", Qs = bt(de), Ys = bt(ve), zs = bt(pe), Gs = bt(he), Vs = bt(me), Tt = xn;
(de && Tt(new de(new ArrayBuffer(1))) != Ge || ve && Tt(new ve()) != we || pe && Tt(pe.resolve()) != Qe || he && Tt(new he()) != Ye || me && Tt(new me()) != ze) && (Tt = function(I) {
  var L = xn(I), o = L == ws ? I.constructor : void 0, n = o ? bt(o) : "";
  if (n)
    switch (n) {
      case Qs:
        return Ge;
      case Ys:
        return we;
      case zs:
        return Qe;
      case Gs:
        return Ye;
      case Vs:
        return ze;
    }
  return L;
});
var Pe = Tt, Ks = Object.prototype, Js = Ks.hasOwnProperty;
function Ws(I) {
  var L = I.length, o = new I.constructor(L);
  return L && typeof I[0] == "string" && Js.call(I, "index") && (o.index = I.index, o.input = I.input), o;
}
var Xs = Ws, Zs = pt, ks = Zs.Uint8Array, qs = ks, Ve = qs;
function _s(I) {
  var L = new I.constructor(I.byteLength);
  return new Ve(L).set(new Ve(I)), L;
}
var Ie = _s, tu = Ie;
function eu(I, L) {
  var o = L ? tu(I.buffer) : I.buffer;
  return new I.constructor(o, I.byteOffset, I.byteLength);
}
var nu = eu, ru = /\w*$/;
function ou(I) {
  var L = new I.constructor(I.source, ru.exec(I));
  return L.lastIndex = I.lastIndex, L;
}
var au = ou, Ke = ge, Je = Ke ? Ke.prototype : void 0, We = Je ? Je.valueOf : void 0;
function iu(I) {
  return We ? Object(We.call(I)) : {};
}
var lu = iu, su = Ie;
function uu(I, L) {
  var o = L ? su(I.buffer) : I.buffer;
  return new I.constructor(o, I.byteOffset, I.length);
}
var fu = uu, cu = Ie, du = nu, vu = au, pu = lu, hu = fu, mu = "[object Boolean]", gu = "[object Date]", Au = "[object Map]", yu = "[object Number]", Eu = "[object RegExp]", xu = "[object Set]", Su = "[object String]", Cu = "[object Symbol]", Tu = "[object ArrayBuffer]", Du = "[object DataView]", Pu = "[object Float32Array]", Iu = "[object Float64Array]", Ru = "[object Int8Array]", Mu = "[object Int16Array]", Nu = "[object Int32Array]", Bu = "[object Uint8Array]", Fu = "[object Uint8ClampedArray]", Ou = "[object Uint16Array]", Lu = "[object Uint32Array]";
function $u(I, L, o) {
  var n = I.constructor;
  switch (L) {
    case Tu:
      return cu(I);
    case mu:
    case gu:
      return new n(+I);
    case Du:
      return du(I, o);
    case Pu:
    case Iu:
    case Ru:
    case Mu:
    case Nu:
    case Bu:
    case Fu:
    case Ou:
    case Lu:
      return hu(I, o);
    case Au:
      return new n();
    case yu:
    case Su:
      return new n(I);
    case Eu:
      return vu(I);
    case xu:
      return new n();
    case Cu:
      return pu(I);
  }
}
var Hu = $u, bu = Yt, Xe = Object.create, ju = /* @__PURE__ */ function() {
  function I() {
  }
  return function(L) {
    if (!bu(L))
      return {};
    if (Xe)
      return Xe(L);
    I.prototype = L;
    var o = new I();
    return I.prototype = void 0, o;
  };
}(), Uu = ju, wu = Uu, Qu = An, Yu = Se;
function zu(I) {
  return typeof I.constructor == "function" && !Yu(I) ? wu(Qu(I)) : {};
}
var Gu = zu, Vu = Pe, Ku = zt, Ju = "[object Map]";
function Wu(I) {
  return Ku(I) && Vu(I) == Ju;
}
var Xu = Wu, Zu = Xu, ku = Ee, Ze = xe, ke = Ze && Ze.isMap, qu = ke ? ku(ke) : Zu, _u = qu, tf = Pe, ef = zt, nf = "[object Set]";
function rf(I) {
  return ef(I) && tf(I) == nf;
}
var of = rf, af = of, lf = Ee, qe = xe, _e = qe && qe.isSet, sf = _e ? lf(_e) : af, uf = sf, ff = Da, cf = Ia, df = un, vf = yl, pf = Hl, hf = bl, mf = Ul, gf = kl, Af = fs, yf = As, Ef = Cs, xf = Pe, Sf = Xs, Cf = Hu, Tf = Gu, Df = ye, Pf = cn, If = _u, Rf = Yt, Mf = uf, Nf = Ce, Bf = Te, Ff = 1, Of = 2, Lf = 4, Sn = "[object Arguments]", $f = "[object Array]", Hf = "[object Boolean]", bf = "[object Date]", jf = "[object Error]", Cn = "[object Function]", Uf = "[object GeneratorFunction]", wf = "[object Map]", Qf = "[object Number]", Tn = "[object Object]", Yf = "[object RegExp]", zf = "[object Set]", Gf = "[object String]", Vf = "[object Symbol]", Kf = "[object WeakMap]", Jf = "[object ArrayBuffer]", Wf = "[object DataView]", Xf = "[object Float32Array]", Zf = "[object Float64Array]", kf = "[object Int8Array]", qf = "[object Int16Array]", _f = "[object Int32Array]", tc = "[object Uint8Array]", ec = "[object Uint8ClampedArray]", nc = "[object Uint16Array]", rc = "[object Uint32Array]", rt = {};
rt[Sn] = rt[$f] = rt[Jf] = rt[Wf] = rt[Hf] = rt[bf] = rt[Xf] = rt[Zf] = rt[kf] = rt[qf] = rt[_f] = rt[wf] = rt[Qf] = rt[Tn] = rt[Yf] = rt[zf] = rt[Gf] = rt[Vf] = rt[tc] = rt[ec] = rt[nc] = rt[rc] = !0;
rt[jf] = rt[Cn] = rt[Kf] = !1;
function Zt(I, L, o, n, t, e) {
  var i, r = L & Ff, a = L & Of, f = L & Lf;
  if (o && (i = t ? o(I, n, t, e) : o(I)), i !== void 0)
    return i;
  if (!Rf(I))
    return I;
  var g = Df(I);
  if (g) {
    if (i = Sf(I), !r)
      return mf(I, i);
  } else {
    var d = xf(I), p = d == Cn || d == Uf;
    if (Pf(I))
      return hf(I, r);
    if (d == Tn || d == Sn || p && !t) {
      if (i = a || p ? {} : Tf(I), !r)
        return a ? Af(I, pf(i, I)) : gf(I, vf(i, I));
    } else {
      if (!rt[d])
        return t ? I : {};
      i = Cf(I, d, r);
    }
  }
  e || (e = new ff());
  var c = e.get(I);
  if (c)
    return c;
  e.set(I, i), Mf(I) ? I.forEach(function(s) {
    i.add(Zt(s, L, o, s, I, e));
  }) : If(I) && I.forEach(function(s, m) {
    i.set(m, Zt(s, L, o, m, I, e));
  });
  var l = f ? a ? Ef : yf : a ? Bf : Nf, u = g ? void 0 : l(I);
  return cf(u || I, function(s, m) {
    u && (m = s, s = I[m]), df(i, m, Zt(s, L, o, m, I, e));
  }), i;
}
var oc = Zt, ac = oc, ic = 1, lc = 4;
function sc(I) {
  return ac(I, ic | lc);
}
var uc = sc;
const tn = /* @__PURE__ */ en(uc);
var Dn = { exports: {} };
(function(I, L) {
  (function(n, t) {
    I.exports = t();
  })(window, function() {
    return (
      /******/
      function(o) {
        var n = {};
        function t(e) {
          if (n[e])
            return n[e].exports;
          var i = n[e] = {
            /******/
            i: e,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return o[e].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
        }
        return t.m = o, t.c = n, t.d = function(e, i, r) {
          t.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: r });
        }, t.r = function(e) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }, t.t = function(e, i) {
          if (i & 1 && (e = t(e)), i & 8 || i & 4 && typeof e == "object" && e && e.__esModule) return e;
          var r = /* @__PURE__ */ Object.create(null);
          if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), i & 2 && typeof e != "string") for (var a in e) t.d(r, a, (function(f) {
            return e[f];
          }).bind(null, a));
          return r;
        }, t.n = function(e) {
          var i = e && e.__esModule ? (
            /******/
            function() {
              return e.default;
            }
          ) : (
            /******/
            function() {
              return e;
            }
          );
          return t.d(i, "a", i), i;
        }, t.o = function(e, i) {
          return Object.prototype.hasOwnProperty.call(e, i);
        }, t.p = "", t(t.s = 141);
      }([
        /* 0 */
        /***/
        function(o, n) {
          function t(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
          o.exports = t;
        },
        /* 1 */
        /***/
        function(o, n, t) {
          o.exports = t(142);
        },
        /* 2 */
        /***/
        function(o, n, t) {
          t.r(n), t.d(n, "__extends", function() {
            return i;
          }), t.d(n, "__assign", function() {
            return r;
          }), t.d(n, "__rest", function() {
            return a;
          }), t.d(n, "__decorate", function() {
            return f;
          }), t.d(n, "__param", function() {
            return g;
          }), t.d(n, "__metadata", function() {
            return d;
          }), t.d(n, "__awaiter", function() {
            return p;
          }), t.d(n, "__generator", function() {
            return c;
          }), t.d(n, "__createBinding", function() {
            return l;
          }), t.d(n, "__exportStar", function() {
            return u;
          }), t.d(n, "__values", function() {
            return s;
          }), t.d(n, "__read", function() {
            return m;
          }), t.d(n, "__spread", function() {
            return v;
          }), t.d(n, "__spreadArrays", function() {
            return h;
          }), t.d(n, "__spreadArray", function() {
            return A;
          }), t.d(n, "__await", function() {
            return y;
          }), t.d(n, "__asyncGenerator", function() {
            return x;
          }), t.d(n, "__asyncDelegator", function() {
            return S;
          }), t.d(n, "__asyncValues", function() {
            return D;
          }), t.d(n, "__makeTemplateObject", function() {
            return P;
          }), t.d(n, "__importStar", function() {
            return E;
          }), t.d(n, "__importDefault", function() {
            return T;
          }), t.d(n, "__classPrivateFieldGet", function() {
            return R;
          }), t.d(n, "__classPrivateFieldSet", function() {
            return N;
          });
          /*! *****************************************************************************
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
          var e = function(M, B) {
            return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(F, O) {
              F.__proto__ = O;
            } || function(F, O) {
              for (var b in O) Object.prototype.hasOwnProperty.call(O, b) && (F[b] = O[b]);
            }, e(M, B);
          };
          function i(M, B) {
            if (typeof B != "function" && B !== null)
              throw new TypeError("Class extends value " + String(B) + " is not a constructor or null");
            e(M, B);
            function F() {
              this.constructor = M;
            }
            M.prototype = B === null ? Object.create(B) : (F.prototype = B.prototype, new F());
          }
          var r = function() {
            return r = Object.assign || function(B) {
              for (var F, O = 1, b = arguments.length; O < b; O++) {
                F = arguments[O];
                for (var $ in F) Object.prototype.hasOwnProperty.call(F, $) && (B[$] = F[$]);
              }
              return B;
            }, r.apply(this, arguments);
          };
          function a(M, B) {
            var F = {};
            for (var O in M) Object.prototype.hasOwnProperty.call(M, O) && B.indexOf(O) < 0 && (F[O] = M[O]);
            if (M != null && typeof Object.getOwnPropertySymbols == "function")
              for (var b = 0, O = Object.getOwnPropertySymbols(M); b < O.length; b++)
                B.indexOf(O[b]) < 0 && Object.prototype.propertyIsEnumerable.call(M, O[b]) && (F[O[b]] = M[O[b]]);
            return F;
          }
          function f(M, B, F, O) {
            var b = arguments.length, $ = b < 3 ? B : O === null ? O = Object.getOwnPropertyDescriptor(B, F) : O, H;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function") $ = Reflect.decorate(M, B, F, O);
            else for (var j = M.length - 1; j >= 0; j--) (H = M[j]) && ($ = (b < 3 ? H($) : b > 3 ? H(B, F, $) : H(B, F)) || $);
            return b > 3 && $ && Object.defineProperty(B, F, $), $;
          }
          function g(M, B) {
            return function(F, O) {
              B(F, O, M);
            };
          }
          function d(M, B) {
            if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(M, B);
          }
          function p(M, B, F, O) {
            function b($) {
              return $ instanceof F ? $ : new F(function(H) {
                H($);
              });
            }
            return new (F || (F = Promise))(function($, H) {
              function j(Q) {
                try {
                  U(O.next(Q));
                } catch (J) {
                  H(J);
                }
              }
              function K(Q) {
                try {
                  U(O.throw(Q));
                } catch (J) {
                  H(J);
                }
              }
              function U(Q) {
                Q.done ? $(Q.value) : b(Q.value).then(j, K);
              }
              U((O = O.apply(M, B || [])).next());
            });
          }
          function c(M, B) {
            var F = { label: 0, sent: function() {
              if ($[0] & 1) throw $[1];
              return $[1];
            }, trys: [], ops: [] }, O, b, $, H;
            return H = { next: j(0), throw: j(1), return: j(2) }, typeof Symbol == "function" && (H[Symbol.iterator] = function() {
              return this;
            }), H;
            function j(U) {
              return function(Q) {
                return K([U, Q]);
              };
            }
            function K(U) {
              if (O) throw new TypeError("Generator is already executing.");
              for (; F; ) try {
                if (O = 1, b && ($ = U[0] & 2 ? b.return : U[0] ? b.throw || (($ = b.return) && $.call(b), 0) : b.next) && !($ = $.call(b, U[1])).done) return $;
                switch (b = 0, $ && (U = [U[0] & 2, $.value]), U[0]) {
                  case 0:
                  case 1:
                    $ = U;
                    break;
                  case 4:
                    return F.label++, { value: U[1], done: !1 };
                  case 5:
                    F.label++, b = U[1], U = [0];
                    continue;
                  case 7:
                    U = F.ops.pop(), F.trys.pop();
                    continue;
                  default:
                    if ($ = F.trys, !($ = $.length > 0 && $[$.length - 1]) && (U[0] === 6 || U[0] === 2)) {
                      F = 0;
                      continue;
                    }
                    if (U[0] === 3 && (!$ || U[1] > $[0] && U[1] < $[3])) {
                      F.label = U[1];
                      break;
                    }
                    if (U[0] === 6 && F.label < $[1]) {
                      F.label = $[1], $ = U;
                      break;
                    }
                    if ($ && F.label < $[2]) {
                      F.label = $[2], F.ops.push(U);
                      break;
                    }
                    $[2] && F.ops.pop(), F.trys.pop();
                    continue;
                }
                U = B.call(M, F);
              } catch (Q) {
                U = [6, Q], b = 0;
              } finally {
                O = $ = 0;
              }
              if (U[0] & 5) throw U[1];
              return { value: U[0] ? U[1] : void 0, done: !0 };
            }
          }
          var l = Object.create ? function(M, B, F, O) {
            O === void 0 && (O = F), Object.defineProperty(M, O, { enumerable: !0, get: function() {
              return B[F];
            } });
          } : function(M, B, F, O) {
            O === void 0 && (O = F), M[O] = B[F];
          };
          function u(M, B) {
            for (var F in M) F !== "default" && !Object.prototype.hasOwnProperty.call(B, F) && l(B, M, F);
          }
          function s(M) {
            var B = typeof Symbol == "function" && Symbol.iterator, F = B && M[B], O = 0;
            if (F) return F.call(M);
            if (M && typeof M.length == "number") return {
              next: function() {
                return M && O >= M.length && (M = void 0), { value: M && M[O++], done: !M };
              }
            };
            throw new TypeError(B ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }
          function m(M, B) {
            var F = typeof Symbol == "function" && M[Symbol.iterator];
            if (!F) return M;
            var O = F.call(M), b, $ = [], H;
            try {
              for (; (B === void 0 || B-- > 0) && !(b = O.next()).done; ) $.push(b.value);
            } catch (j) {
              H = { error: j };
            } finally {
              try {
                b && !b.done && (F = O.return) && F.call(O);
              } finally {
                if (H) throw H.error;
              }
            }
            return $;
          }
          function v() {
            for (var M = [], B = 0; B < arguments.length; B++)
              M = M.concat(m(arguments[B]));
            return M;
          }
          function h() {
            for (var M = 0, B = 0, F = arguments.length; B < F; B++) M += arguments[B].length;
            for (var O = Array(M), b = 0, B = 0; B < F; B++)
              for (var $ = arguments[B], H = 0, j = $.length; H < j; H++, b++)
                O[b] = $[H];
            return O;
          }
          function A(M, B) {
            for (var F = 0, O = B.length, b = M.length; F < O; F++, b++)
              M[b] = B[F];
            return M;
          }
          function y(M) {
            return this instanceof y ? (this.v = M, this) : new y(M);
          }
          function x(M, B, F) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var O = F.apply(M, B || []), b, $ = [];
            return b = {}, H("next"), H("throw"), H("return"), b[Symbol.asyncIterator] = function() {
              return this;
            }, b;
            function H(w) {
              O[w] && (b[w] = function(V) {
                return new Promise(function(W, _) {
                  $.push([w, V, W, _]) > 1 || j(w, V);
                });
              });
            }
            function j(w, V) {
              try {
                K(O[w](V));
              } catch (W) {
                J($[0][3], W);
              }
            }
            function K(w) {
              w.value instanceof y ? Promise.resolve(w.value.v).then(U, Q) : J($[0][2], w);
            }
            function U(w) {
              j("next", w);
            }
            function Q(w) {
              j("throw", w);
            }
            function J(w, V) {
              w(V), $.shift(), $.length && j($[0][0], $[0][1]);
            }
          }
          function S(M) {
            var B, F;
            return B = {}, O("next"), O("throw", function(b) {
              throw b;
            }), O("return"), B[Symbol.iterator] = function() {
              return this;
            }, B;
            function O(b, $) {
              B[b] = M[b] ? function(H) {
                return (F = !F) ? { value: y(M[b](H)), done: b === "return" } : $ ? $(H) : H;
              } : $;
            }
          }
          function D(M) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var B = M[Symbol.asyncIterator], F;
            return B ? B.call(M) : (M = typeof s == "function" ? s(M) : M[Symbol.iterator](), F = {}, O("next"), O("throw"), O("return"), F[Symbol.asyncIterator] = function() {
              return this;
            }, F);
            function O($) {
              F[$] = M[$] && function(H) {
                return new Promise(function(j, K) {
                  H = M[$](H), b(j, K, H.done, H.value);
                });
              };
            }
            function b($, H, j, K) {
              Promise.resolve(K).then(function(U) {
                $({ value: U, done: j });
              }, H);
            }
          }
          function P(M, B) {
            return Object.defineProperty ? Object.defineProperty(M, "raw", { value: B }) : M.raw = B, M;
          }
          var C = Object.create ? function(M, B) {
            Object.defineProperty(M, "default", { enumerable: !0, value: B });
          } : function(M, B) {
            M.default = B;
          };
          function E(M) {
            if (M && M.__esModule) return M;
            var B = {};
            if (M != null) for (var F in M) F !== "default" && Object.prototype.hasOwnProperty.call(M, F) && l(B, M, F);
            return C(B, M), B;
          }
          function T(M) {
            return M && M.__esModule ? M : { default: M };
          }
          function R(M, B) {
            if (!B.has(M))
              throw new TypeError("attempted to get private field on non-instance");
            return B.get(M);
          }
          function N(M, B, F) {
            if (!B.has(M))
              throw new TypeError("attempted to set private field on non-instance");
            return B.set(M, F), F;
          }
        },
        /* 3 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(89)), a = e(t(4)), f = e(t(26)), g = e(t(17)), d = e(t(120)), p = e(t(27)), c = e(t(91)), l = e(t(70)), u = e(t(44)), s = e(t(57));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.DomElement = void 0;
          var m = t(2), v = t(6), h = [];
          function A(C) {
            var E = document.createElement("div");
            E.innerHTML = C;
            var T = E.children;
            return v.toArray(T);
          }
          function y(C) {
            return C ? C instanceof HTMLCollection || C instanceof NodeList : !1;
          }
          function x(C) {
            var E = document.querySelectorAll(C);
            return v.toArray(E);
          }
          function S(C) {
            var E = [], T = [];
            return (0, r.default)(C) ? E = C : E = C.split(";"), (0, a.default)(E).call(E, function(R) {
              var N, M = (0, f.default)(N = R.split(":")).call(N, function(B) {
                return (0, g.default)(B).call(B);
              });
              M.length === 2 && T.push(M[0] + ":" + M[1]);
            }), T;
          }
          var D = (
            /** @class */
            function() {
              function C(E) {
                if (this.elems = [], this.length = this.elems.length, this.dataSource = new d.default(), !!E) {
                  if (E instanceof C)
                    return E;
                  var T = [], R = E instanceof Node ? E.nodeType : -1;
                  if (this.selector = E, R === 1 || R === 9)
                    T = [E];
                  else if (y(E))
                    T = v.toArray(E);
                  else if (E instanceof Array)
                    T = E;
                  else if (typeof E == "string") {
                    var N, M = (0, g.default)(N = E.replace(`/
/mg`, "")).call(N);
                    (0, p.default)(M).call(M, "<") === 0 ? T = A(M) : T = x(M);
                  }
                  var B = T.length;
                  if (!B)
                    return this;
                  for (var F = 0; F < B; F++)
                    this.elems.push(T[F]);
                  this.length = B;
                }
              }
              return (0, i.default)(C.prototype, "id", {
                /**
                 * 获取元素 id
                 */
                get: function() {
                  return this.elems[0].id;
                },
                enumerable: !1,
                configurable: !0
              }), C.prototype.forEach = function(E) {
                for (var T = 0; T < this.length; T++) {
                  var R = this.elems[T], N = E.call(R, R, T);
                  if (N === !1)
                    break;
                }
                return this;
              }, C.prototype.clone = function(E) {
                var T;
                E === void 0 && (E = !1);
                var R = [];
                return (0, a.default)(T = this.elems).call(T, function(N) {
                  R.push(N.cloneNode(!!E));
                }), P(R);
              }, C.prototype.get = function(E) {
                E === void 0 && (E = 0);
                var T = this.length;
                return E >= T && (E = E % T), P(this.elems[E]);
              }, C.prototype.first = function() {
                return this.get(0);
              }, C.prototype.last = function() {
                var E = this.length;
                return this.get(E - 1);
              }, C.prototype.on = function(E, T, R) {
                var N;
                return E ? (typeof T == "function" && (R = T, T = ""), (0, a.default)(N = this).call(N, function(M) {
                  if (!T) {
                    M.addEventListener(E, R);
                    return;
                  }
                  var B = function(O) {
                    var b = O.target;
                    b.matches(T) && R.call(b, O);
                  };
                  M.addEventListener(E, B), h.push({
                    elem: M,
                    selector: T,
                    fn: R,
                    agentFn: B
                  });
                })) : this;
              }, C.prototype.off = function(E, T, R) {
                var N;
                return E ? (typeof T == "function" && (R = T, T = ""), (0, a.default)(N = this).call(N, function(M) {
                  if (T) {
                    for (var B = -1, F = 0; F < h.length; F++) {
                      var O = h[F];
                      if (O.selector === T && O.fn === R && O.elem === M) {
                        B = F;
                        break;
                      }
                    }
                    if (B !== -1) {
                      var b = (0, c.default)(h).call(h, B, 1)[0].agentFn;
                      M.removeEventListener(E, b);
                    }
                  } else
                    M.removeEventListener(E, R);
                })) : this;
              }, C.prototype.attr = function(E, T) {
                var R;
                return T == null ? this.elems[0].getAttribute(E) || "" : (0, a.default)(R = this).call(R, function(N) {
                  N.setAttribute(E, T);
                });
              }, C.prototype.removeAttr = function(E) {
                var T;
                (0, a.default)(T = this).call(T, function(R) {
                  R.removeAttribute(E);
                });
              }, C.prototype.addClass = function(E) {
                var T;
                return E ? (0, a.default)(T = this).call(T, function(R) {
                  if (R.className) {
                    var N = R.className.split(/\s/);
                    N = (0, l.default)(N).call(N, function(M) {
                      return !!(0, g.default)(M).call(M);
                    }), (0, p.default)(N).call(N, E) < 0 && N.push(E), R.className = N.join(" ");
                  } else
                    R.className = E;
                }) : this;
              }, C.prototype.removeClass = function(E) {
                var T;
                return E ? (0, a.default)(T = this).call(T, function(R) {
                  if (R.className) {
                    var N = R.className.split(/\s/);
                    N = (0, l.default)(N).call(N, function(M) {
                      return M = (0, g.default)(M).call(M), !(!M || M === E);
                    }), R.className = N.join(" ");
                  }
                }) : this;
              }, C.prototype.hasClass = function(E) {
                if (!E)
                  return !1;
                var T = this.elems[0];
                if (!T.className)
                  return !1;
                var R = T.className.split(/\s/);
                return (0, u.default)(R).call(R, E);
              }, C.prototype.css = function(E, T) {
                var R, N;
                return T == "" ? N = "" : N = E + ":" + T + ";", (0, a.default)(R = this).call(R, function(M) {
                  var B, F = (0, g.default)(B = M.getAttribute("style") || "").call(B);
                  if (F) {
                    var O = S(F);
                    O = (0, f.default)(O).call(O, function(b) {
                      return (0, p.default)(b).call(b, E) === 0 ? N : b;
                    }), N != "" && (0, p.default)(O).call(O, N) < 0 && O.push(N), N == "" && (O = S(O)), M.setAttribute("style", O.join("; "));
                  } else
                    M.setAttribute("style", N);
                });
              }, C.prototype.getBoundingClientRect = function() {
                var E = this.elems[0];
                return E.getBoundingClientRect();
              }, C.prototype.show = function() {
                return this.css("display", "block");
              }, C.prototype.hide = function() {
                return this.css("display", "none");
              }, C.prototype.children = function() {
                var E = this.elems[0];
                return E ? P(E.children) : null;
              }, C.prototype.childNodes = function() {
                var E = this.elems[0];
                return E ? P(E.childNodes) : null;
              }, C.prototype.replaceChildAll = function(E) {
                for (var T = this.getNode(), R = this.elems[0]; R.hasChildNodes(); )
                  T.firstChild && R.removeChild(T.firstChild);
                this.append(E);
              }, C.prototype.append = function(E) {
                var T;
                return (0, a.default)(T = this).call(T, function(R) {
                  (0, a.default)(E).call(E, function(N) {
                    R.appendChild(N);
                  });
                });
              }, C.prototype.remove = function() {
                var E;
                return (0, a.default)(E = this).call(E, function(T) {
                  if (T.remove)
                    T.remove();
                  else {
                    var R = T.parentElement;
                    R && R.removeChild(T);
                  }
                });
              }, C.prototype.isContain = function(E) {
                var T = this.elems[0], R = E.elems[0];
                return T.contains(R);
              }, C.prototype.getNodeName = function() {
                var E = this.elems[0];
                return E.nodeName;
              }, C.prototype.getNode = function(E) {
                E === void 0 && (E = 0);
                var T;
                return T = this.elems[E], T;
              }, C.prototype.find = function(E) {
                var T = this.elems[0];
                return P(T.querySelectorAll(E));
              }, C.prototype.text = function(E) {
                if (E) {
                  var R;
                  return (0, a.default)(R = this).call(R, function(N) {
                    N.innerHTML = E;
                  });
                } else {
                  var T = this.elems[0];
                  return T.innerHTML.replace(/<[^>]+>/g, function() {
                    return "";
                  });
                }
              }, C.prototype.html = function(E) {
                var T = this.elems[0];
                return E ? (T.innerHTML = E, this) : T.innerHTML;
              }, C.prototype.val = function() {
                var E, T = this.elems[0];
                return (0, g.default)(E = T.value).call(E);
              }, C.prototype.focus = function() {
                var E;
                return (0, a.default)(E = this).call(E, function(T) {
                  T.focus();
                });
              }, C.prototype.prev = function() {
                var E = this.elems[0];
                return P(E.previousElementSibling);
              }, C.prototype.next = function() {
                var E = this.elems[0];
                return P(E.nextElementSibling);
              }, C.prototype.getNextSibling = function() {
                var E = this.elems[0];
                return P(E.nextSibling);
              }, C.prototype.parent = function() {
                var E = this.elems[0];
                return P(E.parentElement);
              }, C.prototype.parentUntil = function(E, T) {
                var R = T || this.elems[0];
                if (R.nodeName === "BODY")
                  return null;
                var N = R.parentElement;
                return N === null ? null : N.matches(E) ? P(N) : this.parentUntil(E, N);
              }, C.prototype.parentUntilEditor = function(E, T, R) {
                var N = R || this.elems[0];
                if (P(N).equal(T.$textContainerElem) || P(N).equal(T.$toolbarElem))
                  return null;
                var M = N.parentElement;
                return M === null ? null : M.matches(E) ? P(M) : this.parentUntilEditor(E, T, M);
              }, C.prototype.equal = function(E) {
                return E instanceof C ? this.elems[0] === E.elems[0] : E instanceof HTMLElement ? this.elems[0] === E : !1;
              }, C.prototype.insertBefore = function(E) {
                var T, R = P(E), N = R.elems[0];
                return N ? (0, a.default)(T = this).call(T, function(M) {
                  var B = N.parentNode;
                  B == null || B.insertBefore(M, N);
                }) : this;
              }, C.prototype.insertAfter = function(E) {
                var T, R = P(E), N = R.elems[0], M = N && N.nextSibling;
                return N ? (0, a.default)(T = this).call(T, function(B) {
                  var F = N.parentNode;
                  M ? F.insertBefore(B, M) : F.appendChild(B);
                }) : this;
              }, C.prototype.data = function(E, T) {
                if (T != null)
                  this.dataSource.set(E, T);
                else
                  return this.dataSource.get(E);
              }, C.prototype.getNodeTop = function(E) {
                if (this.length < 1)
                  return this;
                var T = this.parent();
                return E.$textElem.equal(this) || E.$textElem.equal(T) ? this : (T.prior = this, T.getNodeTop(E));
              }, C.prototype.getOffsetData = function() {
                var E = this.elems[0];
                return {
                  top: E.offsetTop,
                  left: E.offsetLeft,
                  width: E.offsetWidth,
                  height: E.offsetHeight,
                  parent: E.offsetParent
                };
              }, C.prototype.scrollTop = function(E) {
                var T = this.elems[0];
                T.scrollTo({
                  top: E
                });
              }, C;
            }()
          );
          n.DomElement = D;
          function P() {
            for (var C = [], E = 0; E < arguments.length; E++)
              C[E] = arguments[E];
            return new ((0, s.default)(D).apply(D, m.__spreadArrays([void 0], C)))();
          }
          n.default = P;
        },
        /* 4 */
        /***/
        function(o, n, t) {
          o.exports = t(180);
        },
        /* 5 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(71).f, r = t(100), a = t(9), f = t(39), g = t(19), d = t(16), p = function(c) {
            var l = function(u, s, m) {
              if (this instanceof c) {
                switch (arguments.length) {
                  case 0:
                    return new c();
                  case 1:
                    return new c(u);
                  case 2:
                    return new c(u, s);
                }
                return new c(u, s, m);
              }
              return c.apply(this, arguments);
            };
            return l.prototype = c.prototype, l;
          };
          o.exports = function(c, l) {
            var u = c.target, s = c.global, m = c.stat, v = c.proto, h = s ? e : m ? e[u] : (e[u] || {}).prototype, A = s ? a : a[u] || (a[u] = {}), y = A.prototype, x, S, D, P, C, E, T, R, N;
            for (P in l)
              x = r(s ? P : u + (m ? "." : "#") + P, c.forced), S = !x && h && d(h, P), E = A[P], S && (c.noTargetGet ? (N = i(h, P), T = N && N.value) : T = h[P]), C = S && T ? T : l[P], !(S && typeof E == typeof C) && (c.bind && S ? R = f(C, e) : c.wrap && S ? R = p(C) : v && typeof C == "function" ? R = f(Function.call, C) : R = C, (c.sham || C && C.sham || E && E.sham) && g(R, "sham", !0), A[P] = R, v && (D = u + "Prototype", d(a, D) || g(a, D, {}), a[D][P] = C, c.real && y && !y[P] && g(y, P, C)));
          };
        },
        /* 6 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(92)), r = e(t(1)), a = e(t(256)), f = e(t(45)), g = e(t(46)), d = e(t(89)), p = e(t(26));
          (0, r.default)(n, "__esModule", {
            value: !0
          }), n.hexToRgb = n.getRandomCode = n.toArray = n.deepClone = n.isFunction = n.debounce = n.throttle = n.arrForEach = n.forEach = n.replaceSpecialSymbol = n.replaceHtmlSymbol = n.getRandom = n.UA = void 0;
          var c = t(2), l = (
            /** @class */
            function() {
              function E() {
                this._ua = navigator.userAgent;
                var T = this._ua.match(/(Edge?)\/(\d+)/);
                this.isOldEdge = !!(T && T[1] == "Edge" && (0, a.default)(T[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
              }
              return E.prototype.isIE = function() {
                return "ActiveXObject" in window;
              }, E.prototype.isWebkit = function() {
                return /webkit/i.test(this._ua);
              }, E;
            }()
          );
          n.UA = new l();
          function u(E) {
            var T;
            return E === void 0 && (E = ""), E + (0, f.default)(T = Math.random().toString()).call(T, 2);
          }
          n.getRandom = u;
          function s(E) {
            return E.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
          }
          n.replaceHtmlSymbol = s;
          function m(E) {
            return E.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
          }
          n.replaceSpecialSymbol = m;
          function v(E, T) {
            for (var R in E)
              if (Object.prototype.hasOwnProperty.call(E, R)) {
                var N = T(R, E[R]);
                if (N === !1)
                  break;
              }
          }
          n.forEach = v;
          function h(E, T) {
            var R, N, M, B = E.length || 0;
            for (R = 0; R < B && (N = E[R], M = T.call(E, N, R), M !== !1); R++)
              ;
          }
          n.arrForEach = h;
          function A(E, T) {
            T === void 0 && (T = 200);
            var R = !1;
            return function() {
              for (var N = this, M = [], B = 0; B < arguments.length; B++)
                M[B] = arguments[B];
              R || (R = !0, (0, g.default)(function() {
                R = !1, E.call.apply(E, c.__spreadArrays([N], M));
              }, T));
            };
          }
          n.throttle = A;
          function y(E, T) {
            T === void 0 && (T = 200);
            var R = 0;
            return function() {
              for (var N = this, M = [], B = 0; B < arguments.length; B++)
                M[B] = arguments[B];
              R && window.clearTimeout(R), R = (0, g.default)(function() {
                R = 0, E.call.apply(E, c.__spreadArrays([N], M));
              }, T);
            };
          }
          n.debounce = y;
          function x(E) {
            return typeof E == "function";
          }
          n.isFunction = x;
          function S(E) {
            if ((0, i.default)(E) !== "object" || typeof E == "function" || E === null)
              return E;
            var T;
            (0, d.default)(E) && (T = []), (0, d.default)(E) || (T = {});
            for (var R in E)
              Object.prototype.hasOwnProperty.call(E, R) && (T[R] = S(E[R]));
            return T;
          }
          n.deepClone = S;
          function D(E) {
            return (0, f.default)(Array.prototype).call(E);
          }
          n.toArray = D;
          function P() {
            var E;
            return (0, f.default)(E = Math.random().toString(36)).call(E, -5);
          }
          n.getRandomCode = P;
          function C(E) {
            var T = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(E);
            if (T == null) return null;
            var R = (0, p.default)(T).call(T, function(F) {
              return (0, a.default)(F, 16);
            }), N = R[1], M = R[2], B = R[3];
            return "rgb(" + N + ", " + M + ", " + B + ")";
          }
          n.hexToRgb = C;
        },
        /* 7 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.EMPTY_P_REGEX = n.EMPTY_P_LAST_REGEX = n.EMPTY_P = n.urlRegex = n.EMPTY_FN = void 0;
          function r() {
          }
          n.EMPTY_FN = r, n.urlRegex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/, n.EMPTY_P = '<p data-we-empty-p=""><br></p>', n.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, n.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
        },
        /* 8 */
        /***/
        function(o, n, t) {
          (function(e) {
            var i = function(r) {
              return r && r.Math == Math && r;
            };
            o.exports = // eslint-disable-next-line no-undef
            i(typeof globalThis == "object" && globalThis) || i(typeof window == "object" && window) || i(typeof self == "object" && self) || i(typeof e == "object" && e) || // eslint-disable-next-line no-new-func
            Function("return this")();
          }).call(this, t(145));
        },
        /* 9 */
        /***/
        function(o, n) {
          o.exports = {};
        },
        /* 10 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(74), r = t(16), a = t(64), f = t(76), g = t(105), d = i("wks"), p = e.Symbol, c = g ? p : p && p.withoutSetter || a;
          o.exports = function(l) {
            return r(d, l) || (f && r(p, l) ? d[l] = p[l] : d[l] = c("Symbol." + l)), d[l];
          };
        },
        /* 11 */
        /***/
        function(o, n) {
          o.exports = function(t) {
            try {
              return !!t();
            } catch {
              return !0;
            }
          };
        },
        /* 12 */
        /***/
        function(o, n, t) {
          var e = t(9), i = t(16), r = t(93), a = t(18).f;
          o.exports = function(f) {
            var g = e.Symbol || (e.Symbol = {});
            i(g, f) || a(g, f, {
              value: r.f(f)
            });
          };
        },
        /* 13 */
        /***/
        function(o, n) {
          o.exports = function(t) {
            return typeof t == "object" ? t !== null : typeof t == "function";
          };
        },
        /* 14 */
        /***/
        function(o, n, t) {
          var e = t(11);
          o.exports = !e(function() {
            return Object.defineProperty({}, 1, { get: function() {
              return 7;
            } })[1] != 7;
          });
        },
        /* 15 */
        /***/
        function(o, n, t) {
          var e = t(9);
          o.exports = function(i) {
            return e[i + "Prototype"];
          };
        },
        /* 16 */
        /***/
        function(o, n) {
          var t = {}.hasOwnProperty;
          o.exports = function(e, i) {
            return t.call(e, i);
          };
        },
        /* 17 */
        /***/
        function(o, n, t) {
          o.exports = t(192);
        },
        /* 18 */
        /***/
        function(o, n, t) {
          var e = t(14), i = t(99), r = t(25), a = t(60), f = Object.defineProperty;
          n.f = e ? f : function(d, p, c) {
            if (r(d), p = a(p, !0), r(c), i) try {
              return f(d, p, c);
            } catch {
            }
            if ("get" in c || "set" in c) throw TypeError("Accessors not supported");
            return "value" in c && (d[p] = c.value), d;
          };
        },
        /* 19 */
        /***/
        function(o, n, t) {
          var e = t(14), i = t(18), r = t(48);
          o.exports = e ? function(a, f, g) {
            return i.f(a, f, r(1, g));
          } : function(a, f, g) {
            return a[f] = g, a;
          };
        },
        /* 20 */
        /***/
        function(o, n, t) {
          var e = /* @__PURE__ */ function() {
            var h;
            return function() {
              return typeof h > "u" && (h = !!(window && document && document.all && !window.atob)), h;
            };
          }(), i = /* @__PURE__ */ function() {
            var h = {};
            return function(y) {
              if (typeof h[y] > "u") {
                var x = document.querySelector(y);
                if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement)
                  try {
                    x = x.contentDocument.head;
                  } catch {
                    x = null;
                  }
                h[y] = x;
              }
              return h[y];
            };
          }(), r = [];
          function a(v) {
            for (var h = -1, A = 0; A < r.length; A++)
              if (r[A].identifier === v) {
                h = A;
                break;
              }
            return h;
          }
          function f(v, h) {
            for (var A = {}, y = [], x = 0; x < v.length; x++) {
              var S = v[x], D = h.base ? S[0] + h.base : S[0], P = A[D] || 0, C = "".concat(D, " ").concat(P);
              A[D] = P + 1;
              var E = a(C), T = {
                css: S[1],
                media: S[2],
                sourceMap: S[3]
              };
              E !== -1 ? (r[E].references++, r[E].updater(T)) : r.push({
                identifier: C,
                updater: m(T, h),
                references: 1
              }), y.push(C);
            }
            return y;
          }
          function g(v) {
            var h = document.createElement("style"), A = v.attributes || {};
            if (typeof A.nonce > "u") {
              var y = t.nc;
              y && (A.nonce = y);
            }
            if (Object.keys(A).forEach(function(S) {
              h.setAttribute(S, A[S]);
            }), typeof v.insert == "function")
              v.insert(h);
            else {
              var x = i(v.insert || "head");
              if (!x)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              x.appendChild(h);
            }
            return h;
          }
          function d(v) {
            if (v.parentNode === null)
              return !1;
            v.parentNode.removeChild(v);
          }
          var p = /* @__PURE__ */ function() {
            var h = [];
            return function(y, x) {
              return h[y] = x, h.filter(Boolean).join(`
`);
            };
          }();
          function c(v, h, A, y) {
            var x = A ? "" : y.media ? "@media ".concat(y.media, " {").concat(y.css, "}") : y.css;
            if (v.styleSheet)
              v.styleSheet.cssText = p(h, x);
            else {
              var S = document.createTextNode(x), D = v.childNodes;
              D[h] && v.removeChild(D[h]), D.length ? v.insertBefore(S, D[h]) : v.appendChild(S);
            }
          }
          function l(v, h, A) {
            var y = A.css, x = A.media, S = A.sourceMap;
            if (x ? v.setAttribute("media", x) : v.removeAttribute("media"), S && typeof btoa < "u" && (y += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(S)))), " */")), v.styleSheet)
              v.styleSheet.cssText = y;
            else {
              for (; v.firstChild; )
                v.removeChild(v.firstChild);
              v.appendChild(document.createTextNode(y));
            }
          }
          var u = null, s = 0;
          function m(v, h) {
            var A, y, x;
            if (h.singleton) {
              var S = s++;
              A = u || (u = g(h)), y = c.bind(null, A, S, !1), x = c.bind(null, A, S, !0);
            } else
              A = g(h), y = l.bind(null, A, h), x = function() {
                d(A);
              };
            return y(v), function(P) {
              if (P) {
                if (P.css === v.css && P.media === v.media && P.sourceMap === v.sourceMap)
                  return;
                y(v = P);
              } else
                x();
            };
          }
          o.exports = function(v, h) {
            h = h || {}, !h.singleton && typeof h.singleton != "boolean" && (h.singleton = e()), v = v || [];
            var A = f(v, h);
            return function(x) {
              if (x = x || [], Object.prototype.toString.call(x) === "[object Array]") {
                for (var S = 0; S < A.length; S++) {
                  var D = A[S], P = a(D);
                  r[P].references--;
                }
                for (var C = f(x, h), E = 0; E < A.length; E++) {
                  var T = A[E], R = a(T);
                  r[R].references === 0 && (r[R].updater(), r.splice(R, 1));
                }
                A = C;
              }
            };
          };
        },
        /* 21 */
        /***/
        function(o, n, t) {
          o.exports = function(r) {
            var a = [];
            return a.toString = function() {
              return this.map(function(g) {
                var d = e(g, r);
                return g[2] ? "@media ".concat(g[2], " {").concat(d, "}") : d;
              }).join("");
            }, a.i = function(f, g, d) {
              typeof f == "string" && (f = [[null, f, ""]]);
              var p = {};
              if (d)
                for (var c = 0; c < this.length; c++) {
                  var l = this[c][0];
                  l != null && (p[l] = !0);
                }
              for (var u = 0; u < f.length; u++) {
                var s = [].concat(f[u]);
                d && p[s[0]] || (g && (s[2] ? s[2] = "".concat(g, " and ").concat(s[2]) : s[2] = g), a.push(s));
              }
            }, a;
          };
          function e(r, a) {
            var f = r[1] || "", g = r[3];
            if (!g)
              return f;
            if (a && typeof btoa == "function") {
              var d = i(g), p = g.sources.map(function(c) {
                return "/*# sourceURL=".concat(g.sourceRoot || "").concat(c, " */");
              });
              return [f].concat(p).concat([d]).join(`
`);
            }
            return [f].join(`
`);
          }
          function i(r) {
            var a = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), f = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a);
            return "/*# ".concat(f, " */");
          }
        },
        /* 22 */
        /***/
        function(o, n, t) {
          var e = t(14), i = t(11), r = t(16), a = Object.defineProperty, f = {}, g = function(d) {
            throw d;
          };
          o.exports = function(d, p) {
            if (r(f, d)) return f[d];
            p || (p = {});
            var c = [][d], l = r(p, "ACCESSORS") ? p.ACCESSORS : !1, u = r(p, 0) ? p[0] : g, s = r(p, 1) ? p[1] : void 0;
            return f[d] = !!c && !i(function() {
              if (l && !e) return !0;
              var m = { length: -1 };
              l ? a(m, 1, { enumerable: !0, get: g }) : m[1] = 1, c.call(m, u, s);
            });
          };
        },
        /* 23 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(95)), f = (
            /** @class */
            function(g) {
              r.__extends(d, g);
              function d(p, c) {
                return g.call(this, p, c) || this;
              }
              return d;
            }(a.default)
          );
          n.default = f;
        },
        /* 24 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(46));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(3)), d = f.__importDefault(t(95)), p = f.__importDefault(t(133)), c = (
            /** @class */
            function(l) {
              f.__extends(u, l);
              function u(s, m, v) {
                var h = l.call(this, s, m) || this;
                v.title = m.i18next.t("menus.dropListMenu." + v.title);
                var A = m.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
                if (A !== "" && v.type === "list") {
                  var y;
                  (0, r.default)(y = v.list).call(y, function(S) {
                    var D = S.$elem, P = g.default(D.children());
                    if (P.length > 0) {
                      var C = P == null ? void 0 : P.getNodeName();
                      C && C === "I" && D.addClass(A);
                    }
                  });
                }
                var x = new p.default(h, v);
                return h.dropList = x, s.on("click", function() {
                  var S;
                  m.selection.getRange() != null && (s.css("z-index", m.zIndex.get("menu")), (0, r.default)(S = m.txt.eventHooks.dropListMenuHoverEvents).call(S, function(D) {
                    return D();
                  }), x.show());
                }).on("mouseleave", function() {
                  s.css("z-index", "auto"), x.hideTimeoutId = (0, a.default)(function() {
                    x.hide();
                  });
                }), h;
              }
              return u;
            }(d.default)
          );
          n.default = c;
        },
        /* 25 */
        /***/
        function(o, n, t) {
          var e = t(13);
          o.exports = function(i) {
            if (!e(i))
              throw TypeError(String(i) + " is not an object");
            return i;
          };
        },
        /* 26 */
        /***/
        function(o, n, t) {
          o.exports = t(188);
        },
        /* 27 */
        /***/
        function(o, n, t) {
          o.exports = t(201);
        },
        /* 28 */
        /***/
        function(o, n, t) {
          var e = t(72), i = t(49);
          o.exports = function(r) {
            return e(i(r));
          };
        },
        /* 29 */
        /***/
        function(o, n, t) {
          var e = t(49);
          o.exports = function(i) {
            return Object(e(i));
          };
        },
        /* 30 */
        /***/
        function(o, n, t) {
          var e = t(39), i = t(72), r = t(29), a = t(34), f = t(88), g = [].push, d = function(p) {
            var c = p == 1, l = p == 2, u = p == 3, s = p == 4, m = p == 6, v = p == 5 || m;
            return function(h, A, y, x) {
              for (var S = r(h), D = i(S), P = e(A, y, 3), C = a(D.length), E = 0, T = x || f, R = c ? T(h, C) : l ? T(h, 0) : void 0, N, M; C > E; E++) if ((v || E in D) && (N = D[E], M = P(N, E, S), p)) {
                if (c) R[E] = M;
                else if (M) switch (p) {
                  case 3:
                    return !0;
                  case 5:
                    return N;
                  case 6:
                    return E;
                  case 2:
                    g.call(R, N);
                }
                else if (s) return !1;
              }
              return m ? -1 : u || s ? s : R;
            };
          };
          o.exports = {
            // `Array.prototype.forEach` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
            forEach: d(0),
            // `Array.prototype.map` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.map
            map: d(1),
            // `Array.prototype.filter` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.filter
            filter: d(2),
            // `Array.prototype.some` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.some
            some: d(3),
            // `Array.prototype.every` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.every
            every: d(4),
            // `Array.prototype.find` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.find
            find: d(5),
            // `Array.prototype.findIndex` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
            findIndex: d(6)
          };
        },
        /* 31 */
        /***/
        function(o, n, t) {
          o.exports = t(283);
        },
        /* 32 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(31)), f = e(t(131));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var g = t(2), d = g.__importDefault(t(3)), p = t(7), c = (
            /** @class */
            function() {
              function l(u, s) {
                this.menu = u, this.conf = s, this.$container = d.default('<div class="w-e-panel-container"></div>');
                var m = u.editor;
                m.txt.eventHooks.clickEvents.push(l.hideCurAllPanels), m.txt.eventHooks.toolbarClickEvents.push(l.hideCurAllPanels), m.txt.eventHooks.dropListMenuHoverEvents.push(l.hideCurAllPanels);
              }
              return l.prototype.create = function() {
                var u = this, s = this.menu;
                if (!l.createdMenus.has(s)) {
                  var m = this.conf, v = this.$container, h = m.width || 300, A = s.editor.$toolbarElem.getBoundingClientRect(), y = s.$elem.getBoundingClientRect(), x = A.height + A.top - y.top, S = (A.width - h) / 2 + A.left - y.left, D = 300;
                  Math.abs(S) > D && (y.left < document.documentElement.clientWidth / 2 ? S = -y.width / 2 : S = -h + y.width / 2), v.css("width", h + "px").css("margin-top", x + "px").css("margin-left", S + "px").css("z-index", s.editor.zIndex.get("panel"));
                  var P = d.default('<i class="w-e-icon-close w-e-panel-close"></i>');
                  v.append(P), P.on("click", function() {
                    u.remove();
                  });
                  var C = d.default('<ul class="w-e-panel-tab-title"></ul>'), E = d.default('<div class="w-e-panel-tab-content"></div>');
                  v.append(C).append(E);
                  var T = m.height;
                  T && E.css("height", T + "px").css("overflow-y", "auto");
                  var R = m.tabs || [], N = [], M = [];
                  (0, r.default)(R).call(R, function(F, O) {
                    if (F) {
                      var b = F.title || "", $ = F.tpl || "", H = d.default('<li class="w-e-item">' + b + "</li>");
                      C.append(H);
                      var j = d.default($);
                      E.append(j), N.push(H), M.push(j), O === 0 ? (H.data("active", !0), H.addClass("w-e-active")) : j.hide(), H.on("click", function() {
                        H.data("active") || ((0, r.default)(N).call(N, function(K) {
                          K.data("active", !1), K.removeClass("w-e-active");
                        }), (0, r.default)(M).call(M, function(K) {
                          K.hide();
                        }), H.data("active", !0), H.addClass("w-e-active"), j.show());
                      });
                    }
                  }), v.on("click", function(F) {
                    F.stopPropagation();
                  }), s.$elem.append(v), (0, r.default)(R).call(R, function(F, O) {
                    if (F) {
                      var b = F.events || [];
                      (0, r.default)(b).call(b, function($) {
                        var H, j = $.selector, K = $.type, U = $.fn || p.EMPTY_FN, Q = M[O], J = (H = $.bindEnter) !== null && H !== void 0 ? H : !1, w = function(W) {
                          return g.__awaiter(u, void 0, void 0, function() {
                            var _;
                            return g.__generator(this, function(nt) {
                              switch (nt.label) {
                                case 0:
                                  return W.stopPropagation(), [
                                    4,
                                    U(W)
                                    // 执行完事件之后，是否要关闭 panel
                                  ];
                                case 1:
                                  return _ = nt.sent(), _ && this.remove(), [
                                    2
                                    /*return*/
                                  ];
                              }
                            });
                          });
                        };
                        (0, a.default)(Q).call(Q, j).on(K, w), J && K === "click" && Q.on("keyup", function(V) {
                          V.keyCode == 13 && w(V);
                        });
                      });
                    }
                  });
                  var B = (0, a.default)(v).call(v, "input[type=text],textarea");
                  B.length && B.get(0).focus(), l.hideCurAllPanels(), s.setPanel(this), l.createdMenus.add(s);
                }
              }, l.prototype.remove = function() {
                var u = this.menu, s = this.$container;
                s && s.remove(), l.createdMenus.delete(u);
              }, l.hideCurAllPanels = function() {
                var u;
                l.createdMenus.size !== 0 && (0, r.default)(u = l.createdMenus).call(u, function(s) {
                  var m = s.panel;
                  m && m.remove();
                });
              }, l.createdMenus = new f.default(), l;
            }()
          );
          n.default = c;
        },
        /* 33 */
        /***/
        function(o, n) {
          var t = {}.toString;
          o.exports = function(e) {
            return t.call(e).slice(8, -1);
          };
        },
        /* 34 */
        /***/
        function(o, n, t) {
          var e = t(62), i = Math.min;
          o.exports = function(r) {
            return r > 0 ? i(e(r), 9007199254740991) : 0;
          };
        },
        /* 35 */
        /***/
        function(o, n, t) {
          var e = t(9), i = t(8), r = function(a) {
            return typeof a == "function" ? a : void 0;
          };
          o.exports = function(a, f) {
            return arguments.length < 2 ? r(e[a]) || r(i[a]) : e[a] && e[a][f] || i[a] && i[a][f];
          };
        },
        /* 36 */
        /***/
        function(o, n, t) {
          var e = t(81), i = t(18).f, r = t(19), a = t(16), f = t(170), g = t(10), d = g("toStringTag");
          o.exports = function(p, c, l, u) {
            if (p) {
              var s = l ? p : p.prototype;
              a(s, d) || i(s, d, { configurable: !0, value: c }), u && !e && r(s, "toString", f);
            }
          };
        },
        /* 37 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(95)), f = (
            /** @class */
            function(g) {
              r.__extends(d, g);
              function d(p, c) {
                return g.call(this, p, c) || this;
              }
              return d.prototype.setPanel = function(p) {
                this.panel = p;
              }, d;
            }(a.default)
          );
          n.default = f;
        },
        /* 38 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(57));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(3)), d = (
            /** @class */
            function() {
              function p(c, l, u) {
                this.editor = c, this.$targetElem = l, this.conf = u, this._show = !1, this._isInsertTextContainer = !1;
                var s = g.default("<div></div>");
                s.addClass("w-e-tooltip"), this.$container = s;
              }
              return p.prototype.getPositionData = function() {
                var c = this.$container, l = 0, u = 0, s = 20, m = document.documentElement.scrollTop, v = this.$targetElem.getBoundingClientRect(), h = this.editor.$textElem.getBoundingClientRect(), A = this.$targetElem.getOffsetData(), y = g.default(A.parent), x = this.editor.$textElem.elems[0].scrollTop;
                if (this._isInsertTextContainer = y.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
                  var S = y.getBoundingClientRect().height, D = A.top, P = A.left, C = A.height, E = D - x;
                  E > s + 5 ? (l = E - s - 15, c.addClass("w-e-tooltip-up")) : E + C + s < S ? (l = E + C + 10, c.addClass("w-e-tooltip-down")) : (l = (E > 0 ? E : 0) + s + 10, c.addClass("w-e-tooltip-down")), P < 0 ? u = 0 : u = P;
                } else
                  v.top < s || v.top - h.top < s ? (l = v.bottom + m + 5, c.addClass("w-e-tooltip-down")) : (l = v.top + m - s - 15, c.addClass("w-e-tooltip-up")), v.left < 0 ? u = 0 : u = v.left;
                return {
                  top: l,
                  left: u
                };
              }, p.prototype.appendMenus = function() {
                var c = this, l = this.conf, u = this.editor, s = this.$targetElem, m = this.$container;
                (0, r.default)(l).call(l, function(v, h) {
                  var A = v.$elem, y = g.default("<div></div>");
                  y.addClass("w-e-tooltip-item-wrapper "), y.append(A), m.append(y), A.on("click", function(x) {
                    x.preventDefault();
                    var S = v.onClick(u, s);
                    S && c.remove();
                  });
                });
              }, p.prototype.create = function() {
                var c, l, u = this.editor, s = this.$container;
                this.appendMenus();
                var m = this.getPositionData(), v = m.top, h = m.left;
                s.css("top", v + "px"), s.css("left", h + "px"), s.css("z-index", u.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(s) : g.default("body").append(s), this._show = !0, u.beforeDestroy((0, a.default)(c = this.remove).call(c, this)), u.txt.eventHooks.onBlurEvents.push((0, a.default)(l = this.remove).call(l, this));
              }, p.prototype.remove = function() {
                this.$container.remove(), this._show = !1;
              }, (0, i.default)(p.prototype, "isShow", {
                /**
                 * 是否显示
                 */
                get: function() {
                  return this._show;
                },
                enumerable: !1,
                configurable: !0
              }), p;
            }()
          );
          n.default = d;
        },
        /* 39 */
        /***/
        function(o, n, t) {
          var e = t(40);
          o.exports = function(i, r, a) {
            if (e(i), r === void 0) return i;
            switch (a) {
              case 0:
                return function() {
                  return i.call(r);
                };
              case 1:
                return function(f) {
                  return i.call(r, f);
                };
              case 2:
                return function(f, g) {
                  return i.call(r, f, g);
                };
              case 3:
                return function(f, g, d) {
                  return i.call(r, f, g, d);
                };
            }
            return function() {
              return i.apply(r, arguments);
            };
          };
        },
        /* 40 */
        /***/
        function(o, n) {
          o.exports = function(t) {
            if (typeof t != "function")
              throw TypeError(String(t) + " is not a function");
            return t;
          };
        },
        /* 41 */
        /***/
        function(o, n, t) {
          var e = t(165), i = t(8), r = t(13), a = t(19), f = t(16), g = t(63), d = t(51), p = i.WeakMap, c, l, u, s = function(S) {
            return u(S) ? l(S) : c(S, {});
          }, m = function(S) {
            return function(D) {
              var P;
              if (!r(D) || (P = l(D)).type !== S)
                throw TypeError("Incompatible receiver, " + S + " required");
              return P;
            };
          };
          if (e) {
            var v = new p(), h = v.get, A = v.has, y = v.set;
            c = function(S, D) {
              return y.call(v, S, D), D;
            }, l = function(S) {
              return h.call(v, S) || {};
            }, u = function(S) {
              return A.call(v, S);
            };
          } else {
            var x = g("state");
            d[x] = !0, c = function(S, D) {
              return a(S, x, D), D;
            }, l = function(S) {
              return f(S, x) ? S[x] : {};
            }, u = function(S) {
              return f(S, x);
            };
          }
          o.exports = {
            set: c,
            get: l,
            has: u,
            enforce: s,
            getterFor: m
          };
        },
        /* 42 */
        /***/
        function(o, n) {
          o.exports = !0;
        },
        /* 43 */
        /***/
        function(o, n) {
          o.exports = {};
        },
        /* 44 */
        /***/
        function(o, n, t) {
          o.exports = t(213);
        },
        /* 45 */
        /***/
        function(o, n, t) {
          o.exports = t(261);
        },
        /* 46 */
        /***/
        function(o, n, t) {
          o.exports = t(265);
        },
        /* 47 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.createElementFragment = n.createDocumentFragment = n.createElement = n.insertBefore = n.getEndPoint = n.getStartPoint = n.updateRange = n.filterSelectionNodes = void 0;
          var a = t(2), f = t(137), g = a.__importDefault(t(3));
          function d(h) {
            var A = [];
            return (0, r.default)(h).call(h, function(y) {
              var x = y.getNodeName();
              if (x !== f.ListType.OrderedList && x !== f.ListType.UnorderedList)
                A.push(y);
              else if (y.prior)
                A.push(y.prior);
              else {
                var S = y.children();
                S == null || (0, r.default)(S).call(S, function(D) {
                  A.push(g.default(D));
                });
              }
            }), A;
          }
          n.filterSelectionNodes = d;
          function p(h, A, y) {
            var x = h.selection, S = document.createRange();
            A.length > 1 ? (S.setStart(A.elems[0], 0), S.setEnd(A.elems[A.length - 1], A.elems[A.length - 1].childNodes.length)) : S.selectNodeContents(A.elems[0]), y && S.collapse(!1), x.saveRange(S), x.restoreSelection();
          }
          n.updateRange = p;
          function c(h) {
            var A;
            return h.prior ? h.prior : g.default((A = h.children()) === null || A === void 0 ? void 0 : A.elems[0]);
          }
          n.getStartPoint = c;
          function l(h) {
            var A;
            return h.prior ? h.prior : g.default((A = h.children()) === null || A === void 0 ? void 0 : A.last().elems[0]);
          }
          n.getEndPoint = l;
          function u(h, A, y) {
            y === void 0 && (y = null), h.parent().elems[0].insertBefore(A, y);
          }
          n.insertBefore = u;
          function s(h) {
            return document.createElement(h);
          }
          n.createElement = s;
          function m() {
            return document.createDocumentFragment();
          }
          n.createDocumentFragment = m;
          function v(h, A, y) {
            return y === void 0 && (y = "li"), (0, r.default)(h).call(h, function(x) {
              var S = s(y);
              S.innerHTML = x.html(), A.appendChild(S), x.remove();
            }), A;
          }
          n.createElementFragment = v;
        },
        /* 48 */
        /***/
        function(o, n) {
          o.exports = function(t, e) {
            return {
              enumerable: !(t & 1),
              configurable: !(t & 2),
              writable: !(t & 4),
              value: e
            };
          };
        },
        /* 49 */
        /***/
        function(o, n) {
          o.exports = function(t) {
            if (t == null) throw TypeError("Can't call method on " + t);
            return t;
          };
        },
        /* 50 */
        /***/
        function(o, n, t) {
          var e = t(164).charAt, i = t(41), r = t(75), a = "String Iterator", f = i.set, g = i.getterFor(a);
          r(String, "String", function(d) {
            f(this, {
              type: a,
              string: String(d),
              index: 0
            });
          }, function() {
            var p = g(this), c = p.string, l = p.index, u;
            return l >= c.length ? { value: void 0, done: !0 } : (u = e(c, l), p.index += u.length, { value: u, done: !1 });
          });
        },
        /* 51 */
        /***/
        function(o, n) {
          o.exports = {};
        },
        /* 52 */
        /***/
        function(o, n, t) {
          var e = t(106), i = t(80);
          o.exports = Object.keys || function(a) {
            return e(a, i);
          };
        },
        /* 53 */
        /***/
        function(o, n, t) {
          var e = t(19);
          o.exports = function(i, r, a, f) {
            f && f.enumerable ? i[r] = a : e(i, r, a);
          };
        },
        /* 54 */
        /***/
        function(o, n, t) {
          t(173);
          var e = t(174), i = t(8), r = t(65), a = t(19), f = t(43), g = t(10), d = g("toStringTag");
          for (var p in e) {
            var c = i[p], l = c && c.prototype;
            l && r(l) !== d && a(l, d, p), f[p] = f.Array;
          }
        },
        /* 55 */
        /***/
        function(o, n, t) {
          var e = t(33);
          o.exports = Array.isArray || function(r) {
            return e(r) == "Array";
          };
        },
        /* 56 */
        /***/
        function(o, n, t) {
          var e = t(11), i = t(10), r = t(86), a = i("species");
          o.exports = function(f) {
            return r >= 51 || !e(function() {
              var g = [], d = g.constructor = {};
              return d[a] = function() {
                return { foo: 1 };
              }, g[f](Boolean).foo !== 1;
            });
          };
        },
        /* 57 */
        /***/
        function(o, n, t) {
          o.exports = t(222);
        },
        /* 58 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.ListHandle = void 0;
          var r = t(2), a = r.__importDefault(t(373)), f = (
            /** @class */
            /* @__PURE__ */ function() {
              function g(d) {
                this.options = d, this.selectionRangeElem = new a.default();
              }
              return g;
            }()
          );
          n.ListHandle = f;
        },
        /* 59 */
        /***/
        function(o, n, t) {
          var e = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, r = i && !e.call({ 1: 2 }, 1);
          n.f = r ? function(f) {
            var g = i(this, f);
            return !!g && g.enumerable;
          } : e;
        },
        /* 60 */
        /***/
        function(o, n, t) {
          var e = t(13);
          o.exports = function(i, r) {
            if (!e(i)) return i;
            var a, f;
            if (r && typeof (a = i.toString) == "function" && !e(f = a.call(i)) || typeof (a = i.valueOf) == "function" && !e(f = a.call(i)) || !r && typeof (a = i.toString) == "function" && !e(f = a.call(i))) return f;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        /* 61 */
        /***/
        function(o, n) {
        },
        /* 62 */
        /***/
        function(o, n) {
          var t = Math.ceil, e = Math.floor;
          o.exports = function(i) {
            return isNaN(i = +i) ? 0 : (i > 0 ? e : t)(i);
          };
        },
        /* 63 */
        /***/
        function(o, n, t) {
          var e = t(74), i = t(64), r = e("keys");
          o.exports = function(a) {
            return r[a] || (r[a] = i(a));
          };
        },
        /* 64 */
        /***/
        function(o, n) {
          var t = 0, e = Math.random();
          o.exports = function(i) {
            return "Symbol(" + String(i === void 0 ? "" : i) + ")_" + (++t + e).toString(36);
          };
        },
        /* 65 */
        /***/
        function(o, n, t) {
          var e = t(81), i = t(33), r = t(10), a = r("toStringTag"), f = i(/* @__PURE__ */ function() {
            return arguments;
          }()) == "Arguments", g = function(d, p) {
            try {
              return d[p];
            } catch {
            }
          };
          o.exports = e ? i : function(d) {
            var p, c, l;
            return d === void 0 ? "Undefined" : d === null ? "Null" : typeof (c = g(p = Object(d), a)) == "string" ? c : f ? i(p) : (l = i(p)) == "Object" && typeof p.callee == "function" ? "Arguments" : l;
          };
        },
        /* 66 */
        /***/
        function(o, n, t) {
          var e = t(25), i = t(111), r = t(34), a = t(39), f = t(112), g = t(113), d = function(c, l) {
            this.stopped = c, this.result = l;
          }, p = o.exports = function(c, l, u, s, m) {
            var v = a(l, u, s ? 2 : 1), h, A, y, x, S, D, P;
            if (m)
              h = c;
            else {
              if (A = f(c), typeof A != "function") throw TypeError("Target is not iterable");
              if (i(A)) {
                for (y = 0, x = r(c.length); x > y; y++)
                  if (S = s ? v(e(P = c[y])[0], P[1]) : v(c[y]), S && S instanceof d) return S;
                return new d(!1);
              }
              h = A.call(c);
            }
            for (D = h.next; !(P = D.call(h)).done; )
              if (S = g(h, v, P.value, s), typeof S == "object" && S && S instanceof d) return S;
            return new d(!1);
          };
          p.stop = function(c) {
            return new d(!0, c);
          };
        },
        /* 67 */
        /***/
        function(o, n, t) {
          var e = t(11);
          o.exports = function(i, r) {
            var a = [][i];
            return !!a && e(function() {
              a.call(null, r || function() {
                throw 1;
              }, 1);
            });
          };
        },
        /* 68 */
        /***/
        function(o, n) {
          o.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
        },
        /* 69 */
        /***/
        function(o, n, t) {
          var e = t(60), i = t(18), r = t(48);
          o.exports = function(a, f, g) {
            var d = e(f);
            d in a ? i.f(a, d, r(0, g)) : a[d] = g;
          };
        },
        /* 70 */
        /***/
        function(o, n, t) {
          o.exports = t(209);
        },
        /* 71 */
        /***/
        function(o, n, t) {
          var e = t(14), i = t(59), r = t(48), a = t(28), f = t(60), g = t(16), d = t(99), p = Object.getOwnPropertyDescriptor;
          n.f = e ? p : function(l, u) {
            if (l = a(l), u = f(u, !0), d) try {
              return p(l, u);
            } catch {
            }
            if (g(l, u)) return r(!i.f.call(l, u), l[u]);
          };
        },
        /* 72 */
        /***/
        function(o, n, t) {
          var e = t(11), i = t(33), r = "".split;
          o.exports = e(function() {
            return !Object("z").propertyIsEnumerable(0);
          }) ? function(a) {
            return i(a) == "String" ? r.call(a, "") : Object(a);
          } : Object;
        },
        /* 73 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(13), r = e.document, a = i(r) && i(r.createElement);
          o.exports = function(f) {
            return a ? r.createElement(f) : {};
          };
        },
        /* 74 */
        /***/
        function(o, n, t) {
          var e = t(42), i = t(102);
          (o.exports = function(r, a) {
            return i[r] || (i[r] = a !== void 0 ? a : {});
          })("versions", []).push({
            version: "3.6.4",
            mode: e ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
          });
        },
        /* 75 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(167), r = t(104), a = t(171), f = t(36), g = t(19), d = t(53), p = t(10), c = t(42), l = t(43), u = t(103), s = u.IteratorPrototype, m = u.BUGGY_SAFARI_ITERATORS, v = p("iterator"), h = "keys", A = "values", y = "entries", x = function() {
            return this;
          };
          o.exports = function(S, D, P, C, E, T, R) {
            i(P, D, C);
            var N = function(U) {
              if (U === E && b) return b;
              if (!m && U in F) return F[U];
              switch (U) {
                case h:
                  return function() {
                    return new P(this, U);
                  };
                case A:
                  return function() {
                    return new P(this, U);
                  };
                case y:
                  return function() {
                    return new P(this, U);
                  };
              }
              return function() {
                return new P(this);
              };
            }, M = D + " Iterator", B = !1, F = S.prototype, O = F[v] || F["@@iterator"] || E && F[E], b = !m && O || N(E), $ = D == "Array" && F.entries || O, H, j, K;
            if ($ && (H = r($.call(new S())), s !== Object.prototype && H.next && (!c && r(H) !== s && (a ? a(H, s) : typeof H[v] != "function" && g(H, v, x)), f(H, M, !0, !0), c && (l[M] = x))), E == A && O && O.name !== A && (B = !0, b = function() {
              return O.call(this);
            }), (!c || R) && F[v] !== b && g(F, v, b), l[D] = b, E)
              if (j = {
                values: N(A),
                keys: T ? b : N(h),
                entries: N(y)
              }, R) for (K in j)
                (m || B || !(K in F)) && d(F, K, j[K]);
              else e({ target: D, proto: !0, forced: m || B }, j);
            return j;
          };
        },
        /* 76 */
        /***/
        function(o, n, t) {
          var e = t(11);
          o.exports = !!Object.getOwnPropertySymbols && !e(function() {
            return !String(Symbol());
          });
        },
        /* 77 */
        /***/
        function(o, n, t) {
          var e = t(25), i = t(169), r = t(80), a = t(51), f = t(107), g = t(73), d = t(63), p = ">", c = "<", l = "prototype", u = "script", s = d("IE_PROTO"), m = function() {
          }, v = function(S) {
            return c + u + p + S + c + "/" + u + p;
          }, h = function(S) {
            S.write(v("")), S.close();
            var D = S.parentWindow.Object;
            return S = null, D;
          }, A = function() {
            var S = g("iframe"), D = "java" + u + ":", P;
            return S.style.display = "none", f.appendChild(S), S.src = String(D), P = S.contentWindow.document, P.open(), P.write(v("document.F=Object")), P.close(), P.F;
          }, y, x = function() {
            try {
              y = document.domain && new ActiveXObject("htmlfile");
            } catch {
            }
            x = y ? h(y) : A();
            for (var S = r.length; S--; ) delete x[l][r[S]];
            return x();
          };
          a[s] = !0, o.exports = Object.create || function(D, P) {
            var C;
            return D !== null ? (m[l] = e(D), C = new m(), m[l] = null, C[s] = D) : C = x(), P === void 0 ? C : i(C, P);
          };
        },
        /* 78 */
        /***/
        function(o, n, t) {
          var e = t(28), i = t(34), r = t(79), a = function(f) {
            return function(g, d, p) {
              var c = e(g), l = i(c.length), u = r(p, l), s;
              if (f && d != d) {
                for (; l > u; )
                  if (s = c[u++], s != s) return !0;
              } else for (; l > u; u++)
                if ((f || u in c) && c[u] === d) return f || u || 0;
              return !f && -1;
            };
          };
          o.exports = {
            // `Array.prototype.includes` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.includes
            includes: a(!0),
            // `Array.prototype.indexOf` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
            indexOf: a(!1)
          };
        },
        /* 79 */
        /***/
        function(o, n, t) {
          var e = t(62), i = Math.max, r = Math.min;
          o.exports = function(a, f) {
            var g = e(a);
            return g < 0 ? i(g + f, 0) : r(g, f);
          };
        },
        /* 80 */
        /***/
        function(o, n) {
          o.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf"
          ];
        },
        /* 81 */
        /***/
        function(o, n, t) {
          var e = t(10), i = e("toStringTag"), r = {};
          r[i] = "z", o.exports = String(r) === "[object z]";
        },
        /* 82 */
        /***/
        function(o, n) {
          o.exports = function() {
          };
        },
        /* 83 */
        /***/
        function(o, n) {
          o.exports = function(t, e, i) {
            if (!(t instanceof e))
              throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
            return t;
          };
        },
        /* 84 */
        /***/
        function(o, n, t) {
          var e = t(35);
          o.exports = e("navigator", "userAgent") || "";
        },
        /* 85 */
        /***/
        function(o, n, t) {
          var e = t(40), i = function(r) {
            var a, f;
            this.promise = new r(function(g, d) {
              if (a !== void 0 || f !== void 0) throw TypeError("Bad Promise constructor");
              a = g, f = d;
            }), this.resolve = e(a), this.reject = e(f);
          };
          o.exports.f = function(r) {
            return new i(r);
          };
        },
        /* 86 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(84), r = e.process, a = r && r.versions, f = a && a.v8, g, d;
          f ? (g = f.split("."), d = g[0] + g[1]) : i && (g = i.match(/Edge\/(\d+)/), (!g || g[1] >= 74) && (g = i.match(/Chrome\/(\d+)/), g && (d = g[1]))), o.exports = d && +d;
        },
        /* 87 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = t(6), d = a.__importDefault(t(267)), p = a.__importDefault(t(280)), c = a.__importDefault(t(281)), l = a.__importDefault(t(282)), u = a.__importDefault(t(301)), s = a.__importStar(t(416)), m = a.__importDefault(t(417)), v = a.__importDefault(t(418)), h = a.__importDefault(t(419)), A = a.__importStar(t(420)), y = a.__importDefault(t(423)), x = a.__importDefault(t(424)), S = a.__importDefault(t(425)), D = a.__importDefault(t(427)), P = a.__importDefault(t(437)), C = a.__importDefault(t(440)), E = a.__importStar(t(441)), T = a.__importDefault(t(23)), R = a.__importDefault(t(133)), N = a.__importDefault(t(24)), M = a.__importDefault(t(32)), B = a.__importDefault(t(37)), F = a.__importDefault(t(38)), O = 1, b = (
            /** @class */
            function() {
              function $(H, j) {
                this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + O++, this.toolbarSelector = H, this.textSelector = j, s.selectorValidator(this), this.config = g.deepClone(d.default), this.$toolbarElem = f.default("<div></div>"), this.$textContainerElem = f.default("<div></div>"), this.$textElem = f.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new p.default(this), this.cmd = new c.default(this), this.txt = new l.default(this), this.menus = new u.default(this), this.zIndex = new x.default(), this.change = new S.default(this), this.history = new D.default(this), this.onSelectionChange = new C.default(this);
                var K = P.default(this), U = K.disable, Q = K.enable;
                this.disable = U, this.enable = Q, this.isEnable = !0;
              }
              return $.prototype.initSelection = function(H) {
                m.default(this, H);
              }, $.prototype.create = function() {
                this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), h.default(this), s.default(this), this.txt.init(), this.menus.init(), A.default(this), this.initSelection(!0), v.default(this), this.change.observe(), this.history.observe(), E.default(this);
              }, $.prototype.beforeDestroy = function(H) {
                return this.beforeDestroyHooks.push(H), this;
              }, $.prototype.destroy = function() {
                var H, j = this;
                (0, r.default)(H = this.beforeDestroyHooks).call(H, function(K) {
                  return K.call(j);
                }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
              }, $.prototype.fullScreen = function() {
                A.setFullScreen(this);
              }, $.prototype.unFullScreen = function() {
                A.setUnFullScreen(this);
              }, $.prototype.scrollToHead = function(H) {
                y.default(this, H);
              }, $.registerMenu = function(H, j) {
                !j || typeof j != "function" || ($.globalCustomMenuConstructorList[H] = j);
              }, $.prototype.registerPlugin = function(H, j) {
                E.registerPlugin(H, j, this.pluginsFunctionList);
              }, $.registerPlugin = function(H, j) {
                E.registerPlugin(H, j, $.globalPluginsFunctionList);
              }, $.$ = f.default, $.BtnMenu = T.default, $.DropList = R.default, $.DropListMenu = N.default, $.Panel = M.default, $.PanelMenu = B.default, $.Tooltip = F.default, $.globalCustomMenuConstructorList = {}, $.globalPluginsFunctionList = {}, $;
            }()
          );
          n.default = b;
        },
        /* 88 */
        /***/
        function(o, n, t) {
          var e = t(13), i = t(55), r = t(10), a = r("species");
          o.exports = function(f, g) {
            var d;
            return i(f) && (d = f.constructor, typeof d == "function" && (d === Array || i(d.prototype)) ? d = void 0 : e(d) && (d = d[a], d === null && (d = void 0))), new (d === void 0 ? Array : d)(g === 0 ? 0 : g);
          };
        },
        /* 89 */
        /***/
        function(o, n, t) {
          o.exports = t(185);
        },
        /* 90 */
        /***/
        function(o, n, t) {
          var e = t(49), i = t(68), r = "[" + i + "]", a = RegExp("^" + r + r + "*"), f = RegExp(r + r + "*$"), g = function(d) {
            return function(p) {
              var c = String(e(p));
              return d & 1 && (c = c.replace(a, "")), d & 2 && (c = c.replace(f, "")), c;
            };
          };
          o.exports = {
            // `String.prototype.{ trimLeft, trimStart }` methods
            // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
            start: g(1),
            // `String.prototype.{ trimRight, trimEnd }` methods
            // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
            end: g(2),
            // `String.prototype.trim` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.trim
            trim: g(3)
          };
        },
        /* 91 */
        /***/
        function(o, n, t) {
          o.exports = t(205);
        },
        /* 92 */
        /***/
        function(o, n, t) {
          var e = t(227), i = t(230);
          function r(a) {
            "@babel/helpers - typeof";
            return typeof i == "function" && typeof e == "symbol" ? o.exports = r = function(g) {
              return typeof g;
            } : o.exports = r = function(g) {
              return g && typeof i == "function" && g.constructor === i && g !== i.prototype ? "symbol" : typeof g;
            }, r(a);
          }
          o.exports = r;
        },
        /* 93 */
        /***/
        function(o, n, t) {
          var e = t(10);
          n.f = e;
        },
        /* 94 */
        /***/
        function(o, n, t) {
          o.exports = t(306);
        },
        /* 95 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(32)), g = (
            /** @class */
            function() {
              function d(p, c) {
                var l = this;
                this.$elem = p, this.editor = c, this._active = !1, p.on("click", function(u) {
                  var s;
                  f.default.hideCurAllPanels(), (0, r.default)(s = c.txt.eventHooks.menuClickEvents).call(s, function(m) {
                    return m();
                  }), u.stopPropagation(), c.selection.getRange() != null && l.clickHandler(u);
                });
              }
              return d.prototype.clickHandler = function(p) {
              }, d.prototype.active = function() {
                this._active = !0, this.$elem.addClass("w-e-active");
              }, d.prototype.unActive = function() {
                this._active = !1, this.$elem.removeClass("w-e-active");
              }, (0, i.default)(d.prototype, "isActive", {
                /**
                 * 是否处于激活状态
                 */
                get: function() {
                  return this._active;
                },
                enumerable: !1,
                configurable: !0
              }), d;
            }()
          );
          n.default = g;
        },
        /* 96 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(57)), a = e(t(4)), f = e(t(27));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var g = t(2), d = t(6), p = g.__importDefault(t(135)), c = g.__importDefault(t(136)), l = (
            /** @class */
            function() {
              function u(s) {
                this.editor = s;
              }
              return u.prototype.insertImg = function(s, m, v) {
                var h = this.editor, A = h.config, y = "validate.", x = function(E, T) {
                  return T === void 0 && (T = y), h.i18next.t(T + E);
                }, S = m ? 'alt="' + m + '" ' : "", D = v ? 'data-href="' + encodeURIComponent(v) + '" ' : "";
                h.cmd.do("insertHTML", '<img src="' + s + '" ' + S + D + 'style="max-width:100%;" contenteditable="false"/>'), A.linkImgCallback(s, m, v);
                var P = document.createElement("img");
                P.onload = function() {
                  P = null;
                }, P.onerror = function() {
                  A.customAlert(x("插入图片错误"), "error", "wangEditor: " + x("插入图片错误") + "，" + x("图片链接") + ' "' + s + '"，' + x("下载链接失败")), P = null;
                }, P.onabort = function() {
                  return P = null;
                }, P.src = s;
              }, u.prototype.uploadImg = function(s) {
                var m = this;
                if (s.length) {
                  var v = this.editor, h = v.config, A = "validate.", y = function(w) {
                    return v.i18next.t(A + w);
                  }, x = h.uploadImgServer, S = h.uploadImgShowBase64, D = h.uploadImgMaxSize, P = D / 1024 / 1024, C = h.uploadImgMaxLength, E = h.uploadFileName, T = h.uploadImgParams, R = h.uploadImgParamsWithUrl, N = h.uploadImgHeaders, M = h.uploadImgHooks, B = h.uploadImgTimeout, F = h.withCredentials, O = h.customUploadImg;
                  if (!(!O && !x && !S)) {
                    var b = [], $ = [];
                    if (d.arrForEach(s, function(J) {
                      if (J) {
                        var w = J.name || J.type.replace("/", "."), V = J.size;
                        if (!(!w || !V)) {
                          var W = v.config.uploadImgAccept.join("|"), _ = ".(" + W + ")$", nt = new RegExp(_, "i");
                          if (nt.test(w) === !1) {
                            $.push("【" + w + "】" + y("不是图片"));
                            return;
                          }
                          if (D < V) {
                            $.push("【" + w + "】" + y("大于") + " " + P + "M");
                            return;
                          }
                          b.push(J);
                        }
                      }
                    }), $.length) {
                      h.customAlert(y("图片验证未通过") + `: 
` + $.join(`
`), "warning");
                      return;
                    }
                    if (b.length === 0) {
                      h.customAlert(y("传入的文件不合法"), "warning");
                      return;
                    }
                    if (b.length > C) {
                      h.customAlert(y("一次最多上传") + C + y("张图片"), "warning");
                      return;
                    }
                    if (O && typeof O == "function") {
                      var H;
                      O(b, (0, r.default)(H = this.insertImg).call(H, this));
                      return;
                    }
                    var j = new FormData();
                    if ((0, a.default)(b).call(b, function(J, w) {
                      var V = E || J.name;
                      b.length > 1 && (V = V + (w + 1)), j.append(V, J);
                    }), x) {
                      var K = x.split("#");
                      x = K[0];
                      var U = K[1] || "";
                      (0, a.default)(d).call(d, T, function(J, w) {
                        R && ((0, f.default)(x).call(x, "?") > 0 ? x += "&" : x += "?", x = x + J + "=" + w), j.append(J, w);
                      }), U && (x += "#" + U);
                      var Q = p.default(x, {
                        timeout: B,
                        formData: j,
                        headers: N,
                        withCredentials: !!F,
                        beforeSend: function(w) {
                          if (M.before) return M.before(w, v, b);
                        },
                        onTimeout: function(w) {
                          h.customAlert(y("上传图片超时"), "error"), M.timeout && M.timeout(w, v);
                        },
                        onProgress: function(w, V) {
                          var W = new c.default(v);
                          V.lengthComputable && (w = V.loaded / V.total, W.show(w));
                        },
                        onError: function(w) {
                          h.customAlert(y("上传图片错误"), "error", y("上传图片错误") + "，" + y("服务器返回状态") + ": " + w.status), M.error && M.error(w, v);
                        },
                        onFail: function(w, V) {
                          h.customAlert(y("上传图片失败"), "error", y("上传图片返回结果错误") + ("，" + y("返回结果") + ": ") + V), M.fail && M.fail(w, v, V);
                        },
                        onSuccess: function(w, V) {
                          if (M.customInsert) {
                            var W;
                            M.customInsert((0, r.default)(W = m.insertImg).call(W, m), V, v);
                            return;
                          }
                          if (V.errno != "0") {
                            h.customAlert(y("上传图片失败"), "error", y("上传图片返回结果错误") + "，" + y("返回结果") + " errno=" + V.errno), M.fail && M.fail(w, v, V);
                            return;
                          }
                          var _ = V.data;
                          (0, a.default)(_).call(_, function(nt) {
                            typeof nt == "string" ? m.insertImg(nt) : m.insertImg(nt.url, nt.alt, nt.href);
                          }), M.success && M.success(w, v, V);
                        }
                      });
                      typeof Q == "string" && h.customAlert(Q, "error");
                      return;
                    }
                    S && d.arrForEach(s, function(J) {
                      var w = m, V = new FileReader();
                      V.readAsDataURL(J), V.onload = function() {
                        if (this.result) {
                          var W = this.result.toString();
                          w.insertImg(W, W);
                        }
                      };
                    });
                  }
                }
              }, u;
            }()
          );
          n.default = l;
        },
        /* 97 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(410)), a = e(t(4)), f = e(t(45));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.dealTextNode = n.isAllTodo = n.isTodo = n.getCursorNextNode = void 0;
          function g(u) {
            return u.length ? u.attr("class") === "w-e-todo" : !1;
          }
          n.isTodo = g;
          function d(u) {
            var s = u.selection.getSelectionRangeTopNodes();
            if (s.length !== 0)
              return (0, r.default)(s).call(s, function(m) {
                return g(m);
              });
          }
          n.isAllTodo = d;
          function p(u, s, m) {
            var v;
            if (u.hasChildNodes()) {
              var h = u.cloneNode(), A = !1;
              s.nodeValue === "" && (A = !0);
              var y = [];
              return (0, a.default)(v = u.childNodes).call(v, function(x) {
                if (!c(x, s) && A && (h.appendChild(x.cloneNode(!0)), x.nodeName !== "BR" && y.push(x)), c(x, s)) {
                  if (x.nodeType === 1) {
                    var S = p(x, s, m);
                    S && S.textContent !== "" && (h == null || h.appendChild(S));
                  }
                  if (x.nodeType === 3 && s.isEqualNode(x)) {
                    var D = l(x, m);
                    h.textContent = D;
                  }
                  A = !0;
                }
              }), (0, a.default)(y).call(y, function(x) {
                var S = x;
                S.remove();
              }), h;
            }
          }
          n.getCursorNextNode = p;
          function c(u, s) {
            return u.nodeType === 3 ? u.nodeValue === s.nodeValue : u.contains(s);
          }
          function l(u, s, m) {
            m === void 0 && (m = !0);
            var v = u.nodeValue, h = v == null ? void 0 : (0, f.default)(v).call(v, 0, s);
            if (v = v == null ? void 0 : (0, f.default)(v).call(v, s), !m) {
              var A = v;
              v = h, h = A;
            }
            return u.nodeValue = h, v;
          }
          n.dealTextNode = l;
        },
        /* 98 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(430), a = (
            /** @class */
            function() {
              function f(g) {
                this.maxSize = g, this.isRe = !1, this.data = new r.CeilStack(g), this.revokeData = new r.CeilStack(g);
              }
              return (0, i.default)(f.prototype, "size", {
                /**
                 * 返回当前栈中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
                 */
                get: function() {
                  return [this.data.size, this.revokeData.size];
                },
                enumerable: !1,
                configurable: !0
              }), f.prototype.resetMaxSize = function(g) {
                this.data.resetMax(g), this.revokeData.resetMax(g);
              }, f.prototype.save = function(g) {
                return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(g), this;
              }, f.prototype.revoke = function(g) {
                !this.isRe && (this.isRe = !0);
                var d = this.data.outstack();
                return d ? (this.revokeData.instack(d), g(d), !0) : !1;
              }, f.prototype.restore = function(g) {
                !this.isRe && (this.isRe = !0);
                var d = this.revokeData.outstack();
                return d ? (this.data.instack(d), g(d), !0) : !1;
              }, f;
            }()
          );
          n.default = a;
        },
        /* 99 */
        /***/
        function(o, n, t) {
          var e = t(14), i = t(11), r = t(73);
          o.exports = !e && !i(function() {
            return Object.defineProperty(r("div"), "a", {
              get: function() {
                return 7;
              }
            }).a != 7;
          });
        },
        /* 100 */
        /***/
        function(o, n, t) {
          var e = t(11), i = /#|\.prototype\./, r = function(p, c) {
            var l = f[a(p)];
            return l == d ? !0 : l == g ? !1 : typeof c == "function" ? e(c) : !!c;
          }, a = r.normalize = function(p) {
            return String(p).replace(i, ".").toLowerCase();
          }, f = r.data = {}, g = r.NATIVE = "N", d = r.POLYFILL = "P";
          o.exports = r;
        },
        /* 101 */
        /***/
        function(o, n, t) {
          var e = t(102), i = Function.toString;
          typeof e.inspectSource != "function" && (e.inspectSource = function(r) {
            return i.call(r);
          }), o.exports = e.inspectSource;
        },
        /* 102 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(166), r = "__core-js_shared__", a = e[r] || i(r, {});
          o.exports = a;
        },
        /* 103 */
        /***/
        function(o, n, t) {
          var e = t(104), i = t(19), r = t(16), a = t(10), f = t(42), g = a("iterator"), d = !1, p = function() {
            return this;
          }, c, l, u;
          [].keys && (u = [].keys(), "next" in u ? (l = e(e(u)), l !== Object.prototype && (c = l)) : d = !0), c == null && (c = {}), !f && !r(c, g) && i(c, g, p), o.exports = {
            IteratorPrototype: c,
            BUGGY_SAFARI_ITERATORS: d
          };
        },
        /* 104 */
        /***/
        function(o, n, t) {
          var e = t(16), i = t(29), r = t(63), a = t(168), f = r("IE_PROTO"), g = Object.prototype;
          o.exports = a ? Object.getPrototypeOf : function(d) {
            return d = i(d), e(d, f) ? d[f] : typeof d.constructor == "function" && d instanceof d.constructor ? d.constructor.prototype : d instanceof Object ? g : null;
          };
        },
        /* 105 */
        /***/
        function(o, n, t) {
          var e = t(76);
          o.exports = e && !Symbol.sham && typeof Symbol.iterator == "symbol";
        },
        /* 106 */
        /***/
        function(o, n, t) {
          var e = t(16), i = t(28), r = t(78).indexOf, a = t(51);
          o.exports = function(f, g) {
            var d = i(f), p = 0, c = [], l;
            for (l in d) !e(a, l) && e(d, l) && c.push(l);
            for (; g.length > p; ) e(d, l = g[p++]) && (~r(c, l) || c.push(l));
            return c;
          };
        },
        /* 107 */
        /***/
        function(o, n, t) {
          var e = t(35);
          o.exports = e("document", "documentElement");
        },
        /* 108 */
        /***/
        function(o, n, t) {
          var e = t(8);
          o.exports = e.Promise;
        },
        /* 109 */
        /***/
        function(o, n, t) {
          var e = t(53);
          o.exports = function(i, r, a) {
            for (var f in r)
              a && a.unsafe && i[f] ? i[f] = r[f] : e(i, f, r[f], a);
            return i;
          };
        },
        /* 110 */
        /***/
        function(o, n, t) {
          var e = t(35), i = t(18), r = t(10), a = t(14), f = r("species");
          o.exports = function(g) {
            var d = e(g), p = i.f;
            a && d && !d[f] && p(d, f, {
              configurable: !0,
              get: function() {
                return this;
              }
            });
          };
        },
        /* 111 */
        /***/
        function(o, n, t) {
          var e = t(10), i = t(43), r = e("iterator"), a = Array.prototype;
          o.exports = function(f) {
            return f !== void 0 && (i.Array === f || a[r] === f);
          };
        },
        /* 112 */
        /***/
        function(o, n, t) {
          var e = t(65), i = t(43), r = t(10), a = r("iterator");
          o.exports = function(f) {
            if (f != null) return f[a] || f["@@iterator"] || i[e(f)];
          };
        },
        /* 113 */
        /***/
        function(o, n, t) {
          var e = t(25);
          o.exports = function(i, r, a, f) {
            try {
              return f ? r(e(a)[0], a[1]) : r(a);
            } catch (d) {
              var g = i.return;
              throw g !== void 0 && e(g.call(i)), d;
            }
          };
        },
        /* 114 */
        /***/
        function(o, n, t) {
          var e = t(10), i = e("iterator"), r = !1;
          try {
            var a = 0, f = {
              next: function() {
                return { done: !!a++ };
              },
              return: function() {
                r = !0;
              }
            };
            f[i] = function() {
              return this;
            }, Array.from(f, function() {
              throw 2;
            });
          } catch {
          }
          o.exports = function(g, d) {
            if (!d && !r) return !1;
            var p = !1;
            try {
              var c = {};
              c[i] = function() {
                return {
                  next: function() {
                    return { done: p = !0 };
                  }
                };
              }, g(c);
            } catch {
            }
            return p;
          };
        },
        /* 115 */
        /***/
        function(o, n, t) {
          var e = t(25), i = t(40), r = t(10), a = r("species");
          o.exports = function(f, g) {
            var d = e(f).constructor, p;
            return d === void 0 || (p = e(d)[a]) == null ? g : i(p);
          };
        },
        /* 116 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(11), r = t(33), a = t(39), f = t(107), g = t(73), d = t(117), p = e.location, c = e.setImmediate, l = e.clearImmediate, u = e.process, s = e.MessageChannel, m = e.Dispatch, v = 0, h = {}, A = "onreadystatechange", y, x, S, D = function(T) {
            if (h.hasOwnProperty(T)) {
              var R = h[T];
              delete h[T], R();
            }
          }, P = function(T) {
            return function() {
              D(T);
            };
          }, C = function(T) {
            D(T.data);
          }, E = function(T) {
            e.postMessage(T + "", p.protocol + "//" + p.host);
          };
          (!c || !l) && (c = function(R) {
            for (var N = [], M = 1; arguments.length > M; ) N.push(arguments[M++]);
            return h[++v] = function() {
              (typeof R == "function" ? R : Function(R)).apply(void 0, N);
            }, y(v), v;
          }, l = function(R) {
            delete h[R];
          }, r(u) == "process" ? y = function(T) {
            u.nextTick(P(T));
          } : m && m.now ? y = function(T) {
            m.now(P(T));
          } : s && !d ? (x = new s(), S = x.port2, x.port1.onmessage = C, y = a(S.postMessage, S, 1)) : e.addEventListener && typeof postMessage == "function" && !e.importScripts && !i(E) && p.protocol !== "file:" ? (y = E, e.addEventListener("message", C, !1)) : A in g("script") ? y = function(T) {
            f.appendChild(g("script"))[A] = function() {
              f.removeChild(this), D(T);
            };
          } : y = function(T) {
            setTimeout(P(T), 0);
          }), o.exports = {
            set: c,
            clear: l
          };
        },
        /* 117 */
        /***/
        function(o, n, t) {
          var e = t(84);
          o.exports = /(iphone|ipod|ipad).*applewebkit/i.test(e);
        },
        /* 118 */
        /***/
        function(o, n, t) {
          var e = t(25), i = t(13), r = t(85);
          o.exports = function(a, f) {
            if (e(a), i(f) && f.constructor === a) return f;
            var g = r.f(a), d = g.resolve;
            return d(f), g.promise;
          };
        },
        /* 119 */
        /***/
        function(o, n) {
          o.exports = function(t) {
            try {
              return { error: !1, value: t() };
            } catch (e) {
              return { error: !0, value: e };
            }
          };
        },
        /* 120 */
        /***/
        function(o, n, t) {
          o.exports = t(197);
        },
        /* 121 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(8), r = t(122), a = t(11), f = t(19), g = t(66), d = t(83), p = t(13), c = t(36), l = t(18).f, u = t(30).forEach, s = t(14), m = t(41), v = m.set, h = m.getterFor;
          o.exports = function(A, y, x) {
            var S = A.indexOf("Map") !== -1, D = A.indexOf("Weak") !== -1, P = S ? "set" : "add", C = i[A], E = C && C.prototype, T = {}, R;
            if (!s || typeof C != "function" || !(D || E.forEach && !a(function() {
              new C().entries().next();
            })))
              R = x.getConstructor(y, A, S, P), r.REQUIRED = !0;
            else {
              R = y(function(M, B) {
                v(d(M, R, A), {
                  type: A,
                  collection: new C()
                }), B != null && g(B, M[P], M, S);
              });
              var N = h(A);
              u(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(M) {
                var B = M == "add" || M == "set";
                M in E && !(D && M == "clear") && f(R.prototype, M, function(F, O) {
                  var b = N(this).collection;
                  if (!B && D && !p(F)) return M == "get" ? void 0 : !1;
                  var $ = b[M](F === 0 ? 0 : F, O);
                  return B ? this : $;
                });
              }), D || l(R.prototype, "size", {
                configurable: !0,
                get: function() {
                  return N(this).collection.size;
                }
              });
            }
            return c(R, A, !1, !0), T[A] = R, e({ global: !0, forced: !0 }, T), D || x.setStrong(R, A, S), R;
          };
        },
        /* 122 */
        /***/
        function(o, n, t) {
          var e = t(51), i = t(13), r = t(16), a = t(18).f, f = t(64), g = t(200), d = f("meta"), p = 0, c = Object.isExtensible || function() {
            return !0;
          }, l = function(h) {
            a(h, d, { value: {
              objectID: "O" + ++p,
              // object ID
              weakData: {}
              // weak collections IDs
            } });
          }, u = function(h, A) {
            if (!i(h)) return typeof h == "symbol" ? h : (typeof h == "string" ? "S" : "P") + h;
            if (!r(h, d)) {
              if (!c(h)) return "F";
              if (!A) return "E";
              l(h);
            }
            return h[d].objectID;
          }, s = function(h, A) {
            if (!r(h, d)) {
              if (!c(h)) return !0;
              if (!A) return !1;
              l(h);
            }
            return h[d].weakData;
          }, m = function(h) {
            return g && v.REQUIRED && c(h) && !r(h, d) && l(h), h;
          }, v = o.exports = {
            REQUIRED: !1,
            fastKey: u,
            getWeakData: s,
            onFreeze: m
          };
          e[d] = !0;
        },
        /* 123 */
        /***/
        function(o, n, t) {
          var e = t(18).f, i = t(77), r = t(109), a = t(39), f = t(83), g = t(66), d = t(75), p = t(110), c = t(14), l = t(122).fastKey, u = t(41), s = u.set, m = u.getterFor;
          o.exports = {
            getConstructor: function(v, h, A, y) {
              var x = v(function(C, E) {
                f(C, x, h), s(C, {
                  type: h,
                  index: i(null),
                  first: void 0,
                  last: void 0,
                  size: 0
                }), c || (C.size = 0), E != null && g(E, C[y], C, A);
              }), S = m(h), D = function(C, E, T) {
                var R = S(C), N = P(C, E), M, B;
                return N ? N.value = T : (R.last = N = {
                  index: B = l(E, !0),
                  key: E,
                  value: T,
                  previous: M = R.last,
                  next: void 0,
                  removed: !1
                }, R.first || (R.first = N), M && (M.next = N), c ? R.size++ : C.size++, B !== "F" && (R.index[B] = N)), C;
              }, P = function(C, E) {
                var T = S(C), R = l(E), N;
                if (R !== "F") return T.index[R];
                for (N = T.first; N; N = N.next)
                  if (N.key == E) return N;
              };
              return r(x.prototype, {
                // 23.1.3.1 Map.prototype.clear()
                // 23.2.3.2 Set.prototype.clear()
                clear: function() {
                  for (var E = this, T = S(E), R = T.index, N = T.first; N; )
                    N.removed = !0, N.previous && (N.previous = N.previous.next = void 0), delete R[N.index], N = N.next;
                  T.first = T.last = void 0, c ? T.size = 0 : E.size = 0;
                },
                // 23.1.3.3 Map.prototype.delete(key)
                // 23.2.3.4 Set.prototype.delete(value)
                delete: function(C) {
                  var E = this, T = S(E), R = P(E, C);
                  if (R) {
                    var N = R.next, M = R.previous;
                    delete T.index[R.index], R.removed = !0, M && (M.next = N), N && (N.previous = M), T.first == R && (T.first = N), T.last == R && (T.last = M), c ? T.size-- : E.size--;
                  }
                  return !!R;
                },
                // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                forEach: function(E) {
                  for (var T = S(this), R = a(E, arguments.length > 1 ? arguments[1] : void 0, 3), N; N = N ? N.next : T.first; )
                    for (R(N.value, N.key, this); N && N.removed; ) N = N.previous;
                },
                // 23.1.3.7 Map.prototype.has(key)
                // 23.2.3.7 Set.prototype.has(value)
                has: function(E) {
                  return !!P(this, E);
                }
              }), r(x.prototype, A ? {
                // 23.1.3.6 Map.prototype.get(key)
                get: function(E) {
                  var T = P(this, E);
                  return T && T.value;
                },
                // 23.1.3.9 Map.prototype.set(key, value)
                set: function(E, T) {
                  return D(this, E === 0 ? 0 : E, T);
                }
              } : {
                // 23.2.3.1 Set.prototype.add(value)
                add: function(E) {
                  return D(this, E = E === 0 ? 0 : E, E);
                }
              }), c && e(x.prototype, "size", {
                get: function() {
                  return S(this).size;
                }
              }), x;
            },
            setStrong: function(v, h, A) {
              var y = h + " Iterator", x = m(h), S = m(y);
              d(v, h, function(D, P) {
                s(this, {
                  type: y,
                  target: D,
                  state: x(D),
                  kind: P,
                  last: void 0
                });
              }, function() {
                for (var D = S(this), P = D.kind, C = D.last; C && C.removed; ) C = C.previous;
                return !D.target || !(D.last = C = C ? C.next : D.state.first) ? (D.target = void 0, { value: void 0, done: !0 }) : P == "keys" ? { value: C.key, done: !1 } : P == "values" ? { value: C.value, done: !1 } : { value: [C.key, C.value], done: !1 };
              }, A ? "entries" : "values", !A, !0), p(h);
            }
          };
        },
        /* 124 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("iterator");
        },
        /* 125 */
        /***/
        function(o, n, t) {
          var e = t(106), i = t(80), r = i.concat("length", "prototype");
          n.f = Object.getOwnPropertyNames || function(f) {
            return e(f, r);
          };
        },
        /* 126 */
        /***/
        function(o, n) {
          n.f = Object.getOwnPropertySymbols;
        },
        /* 127 */
        /***/
        function(o, n, t) {
          o.exports = t(268);
        },
        /* 128 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.default = {
            zIndex: 1e4
          };
        },
        /* 129 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.default = {
            focus: !0,
            height: 300,
            placeholder: "请输入正文",
            zIndexFullScreen: 10002,
            showFullScreen: !0
          };
        },
        /* 130 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.getPasteImgs = n.getPasteHtml = n.getPasteText = void 0;
          var a = t(2), f = t(6), g = a.__importDefault(t(292));
          function d(l) {
            var u = l.clipboardData, s = "";
            return u == null ? s = window.clipboardData && window.clipboardData.getData("text") : s = u.getData("text/plain"), f.replaceHtmlSymbol(s);
          }
          n.getPasteText = d;
          function p(l, u, s) {
            u === void 0 && (u = !0), s === void 0 && (s = !1);
            var m = l.clipboardData, v = "";
            if (m && (v = m.getData("text/html")), !v) {
              var h = d(l);
              if (!h)
                return "";
              v = "<p>" + h + "</p>";
            }
            return v = v.replace(/<(\d)/gm, function(A, y) {
              return "&lt;" + y;
            }), v = v.replace(/<(\/?meta.*?)>/gim, ""), v = g.default(v, u, s), v;
          }
          n.getPasteHtml = p;
          function c(l) {
            var u, s = [], m = d(l);
            if (m)
              return s;
            var v = (u = l.clipboardData) === null || u === void 0 ? void 0 : u.items;
            return v && (0, r.default)(f).call(f, v, function(h, A) {
              var y = A.type;
              /image/i.test(y) && s.push(A.getAsFile());
            }), s;
          }
          n.getPasteImgs = c;
        },
        /* 131 */
        /***/
        function(o, n, t) {
          o.exports = t(294);
        },
        /* 132 */
        /***/
        function(o, n, t) {
          o.exports = t(310);
        },
        /* 133 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(46));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(3)), d = t(7), p = (
            /** @class */
            function() {
              function c(l, u) {
                var s = this;
                this.hideTimeoutId = 0, this.menu = l, this.conf = u;
                var m = g.default('<div class="w-e-droplist"></div>'), v = g.default("<p>" + u.title + "</p>");
                v.addClass("w-e-dp-title"), m.append(v);
                var h = u.list || [], A = u.type || "list", y = u.clickHandler || d.EMPTY_FN, x = g.default('<ul class="' + (A === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
                (0, r.default)(h).call(h, function(S) {
                  var D = S.$elem, P = S.value, C = g.default('<li class="w-e-item"></li>');
                  D && (C.append(D), x.append(C), C.on("click", function(E) {
                    y(P), E.stopPropagation(), s.hideTimeoutId = (0, a.default)(function() {
                      s.hide();
                    });
                  }));
                }), m.append(x), m.on("mouseleave", function() {
                  s.hideTimeoutId = (0, a.default)(function() {
                    s.hide();
                  });
                }), this.$container = m, this.rendered = !1, this._show = !1;
              }
              return c.prototype.show = function() {
                this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
                var l = this.menu, u = l.$elem, s = this.$container;
                if (!this._show) {
                  if (this.rendered)
                    s.show();
                  else {
                    var m = u.getBoundingClientRect().height || 0, v = this.conf.width || 100;
                    s.css("margin-top", m + "px").css("width", v + "px"), u.append(s), this.rendered = !0;
                  }
                  this._show = !0;
                }
              }, c.prototype.hide = function() {
                var l = this.$container;
                this._show && (l.hide(), this._show = !1);
              }, (0, i.default)(c.prototype, "isShow", {
                get: function() {
                  return this._show;
                },
                enumerable: !1,
                configurable: !0
              }), c;
            }()
          );
          n.default = p;
        },
        /* 134 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          function r(a) {
            var f = a.selection.getSelectionContainerElem();
            return f != null && f.length ? f.getNodeName() === "A" : !1;
          }
          n.default = r;
        },
        /* 135 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(92)), r = e(t(1)), a = e(t(4));
          (0, r.default)(n, "__esModule", {
            value: !0
          });
          var f = t(6);
          function g(d, p) {
            var c = new XMLHttpRequest();
            if (c.open("POST", d), c.timeout = p.timeout || 10 * 1e3, c.ontimeout = function() {
              console.error("wangEditor - 请求超时"), p.onTimeout && p.onTimeout(c);
            }, c.upload && (c.upload.onprogress = function(u) {
              var s = u.loaded / u.total;
              p.onProgress && p.onProgress(s, u);
            }), p.headers && (0, a.default)(f).call(f, p.headers, function(u, s) {
              c.setRequestHeader(u, s);
            }), c.withCredentials = !!p.withCredentials, p.beforeSend) {
              var l = p.beforeSend(c);
              if (l && (0, i.default)(l) === "object" && l.prevent)
                return l.msg;
            }
            return c.onreadystatechange = function() {
              if (c.readyState === 4) {
                var u = c.status;
                if (!(u < 200) && !(u >= 300 && u < 400)) {
                  if (u >= 400) {
                    console.error("wangEditor - XHR 报错，状态码 " + u), p.onError && p.onError(c);
                    return;
                  }
                  var s = c.responseText, m;
                  if ((0, i.default)(s) !== "object")
                    try {
                      m = JSON.parse(s);
                    } catch {
                      console.error("wangEditor - 返回结果不是 JSON 格式", s), p.onFail && p.onFail(c, s);
                      return;
                    }
                  else
                    m = s;
                  p.onSuccess(c, m);
                }
              }
            }, c.send(p.formData || null), c;
          }
          n.default = g;
        },
        /* 136 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(342)), a = e(t(46));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(3)), d = (
            /** @class */
            function() {
              function p(c) {
                this.editor = c, this.$textContainer = c.$textContainerElem, this.$bar = g.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
              }
              return p.prototype.show = function(c) {
                var l = this;
                if (!this.isShow) {
                  this.isShow = !0;
                  var u = this.$bar, s = this.$textContainer;
                  s.append(u), (0, r.default)() - this.time > 100 && c <= 1 && (u.css("width", c * 100 + "%"), this.time = (0, r.default)());
                  var m = this.timeoutId;
                  m && clearTimeout(m), this.timeoutId = (0, a.default)(function() {
                    l.hide();
                  }, 500);
                }
              }, p.prototype.hide = function() {
                var c = this.$bar;
                c.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
              }, p;
            }()
          );
          n.default = d;
        },
        /* 137 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.ListType = void 0;
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(24)), g = t(47), d = r.__importStar(t(371)), p;
          (function(l) {
            l.OrderedList = "OL", l.UnorderedList = "UL";
          })(p = n.ListType || (n.ListType = {}));
          var c = (
            /** @class */
            function(l) {
              r.__extends(u, l);
              function u(s) {
                var m = this, v = a.default(`<div class="w-e-menu" data-title="序列">
                <i class="w-e-icon-list2"></i>
            </div>`), h = {
                  width: 130,
                  title: "序列",
                  type: "list",
                  list: [{
                    $elem: a.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + s.i18next.t("menus.dropListMenu.list.无序列表") + `
                        <p>`),
                    value: p.UnorderedList
                  }, {
                    $elem: a.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + s.i18next.t("menus.dropListMenu.list.有序列表") + `
                        <p>`),
                    value: p.OrderedList
                  }],
                  clickHandler: function(y) {
                    m.command(y);
                  }
                };
                return m = l.call(this, v, s, h) || this, m;
              }
              return u.prototype.command = function(s) {
                var m = this.editor, v = m.selection.getSelectionContainerElem();
                v !== void 0 && (this.handleSelectionRangeNodes(s), this.tryChangeActive());
              }, u.prototype.validator = function(s, m, v) {
                return !(!s.length || !m.length || v.equal(s) || v.equal(m));
              }, u.prototype.handleSelectionRangeNodes = function(s) {
                var m = this.editor, v = m.selection, h = s.toLowerCase(), A = v.getSelectionContainerElem(), y = v.getSelectionStartElem().getNodeTop(m), x = v.getSelectionEndElem().getNodeTop(m);
                if (this.validator(y, x, m.$textElem)) {
                  var S = v.getRange(), D = S == null ? void 0 : S.collapsed;
                  m.$textElem.equal(A) || (A = A.getNodeTop(m));
                  var P = {
                    editor: m,
                    listType: s,
                    listTarget: h,
                    $selectionElem: A,
                    $startElem: y,
                    $endElem: x
                  }, C;
                  this.isOrderElem(A) ? C = d.ClassType.Wrap : this.isOrderElem(y) && this.isOrderElem(x) ? C = d.ClassType.Join : this.isOrderElem(y) ? C = d.ClassType.StartJoin : this.isOrderElem(x) ? C = d.ClassType.EndJoin : C = d.ClassType.Other;
                  var E = new d.default(d.createListHandle(C, P, S));
                  g.updateRange(m, E.getSelectionRangeElem(), !!D);
                }
              }, u.prototype.isOrderElem = function(s) {
                var m = s.getNodeName();
                return m === p.OrderedList || m === p.UnorderedList;
              }, u.prototype.tryChangeActive = function() {
              }, u;
            }(f.default)
          );
          n.default = c;
        },
        /* 138 */
        /***/
        function(o, n, t) {
          o.exports = t(395);
        },
        /* 139 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          function r(a) {
            var f = a.selection.getSelectionContainerElem();
            return f != null && f.length ? !!(f.getNodeName() == "CODE" || f.getNodeName() == "PRE" || f.parent().getNodeName() == "CODE" || f.parent().getNodeName() == "PRE" || /hljs/.test(f.parent().attr("class"))) : !1;
          }
          n.default = r;
        },
        /* 140 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(31));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.todo = void 0;
          var a = t(2), f = a.__importDefault(t(3)), g = (
            /** @class */
            function() {
              function p(c) {
                var l;
                this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = f.default(this.template), this.$child = (l = c == null ? void 0 : c.childNodes()) === null || l === void 0 ? void 0 : l.clone(!0);
              }
              return p.prototype.init = function() {
                var c = this.$child, l = this.getInputContainer();
                c && c.insertAfter(l);
              }, p.prototype.getInput = function() {
                var c = this.$todo, l = (0, r.default)(c).call(c, "input");
                return l;
              }, p.prototype.getInputContainer = function() {
                var c = this.getInput().parent();
                return c;
              }, p.prototype.getTodo = function() {
                return this.$todo;
              }, p;
            }()
          );
          n.todo = g;
          function d(p) {
            var c = new g(p);
            return c.init(), c;
          }
          n.default = d;
        },
        /* 141 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2);
          t(146), t(148), t(152), t(154), t(156), t(158), t(160);
          var a = r.__importDefault(t(87));
          r.__exportStar(t(442), n);
          try {
          } catch {
            throw new Error("请在浏览器环境下运行");
          }
          n.default = a.default;
        },
        /* 142 */
        /***/
        function(o, n, t) {
          var e = t(143);
          o.exports = e;
        },
        /* 143 */
        /***/
        function(o, n, t) {
          t(144);
          var e = t(9), i = e.Object, r = o.exports = function(f, g, d) {
            return i.defineProperty(f, g, d);
          };
          i.defineProperty.sham && (r.sham = !0);
        },
        /* 144 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(14), r = t(18);
          e({ target: "Object", stat: !0, forced: !i, sham: !i }, {
            defineProperty: r.f
          });
        },
        /* 145 */
        /***/
        function(o, n) {
          var t;
          t = /* @__PURE__ */ function() {
            return this;
          }();
          try {
            t = t || new Function("return this")();
          } catch {
            typeof window == "object" && (t = window);
          }
          o.exports = t;
        },
        /* 146 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(147);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 147 */
        /***/
        function(o, n, t) {
          var e = t(21);
          n = e(!1), n.push([o.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*表情菜单样式*/
  /*分割线样式*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), o.exports = n;
        },
        /* 148 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(149);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 149 */
        /***/
        function(o, n, t) {
          var e = t(21), i = t(150), r = t(151);
          n = e(!1);
          var a = i(r);
          n.push([o.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + a + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), o.exports = n;
        },
        /* 150 */
        /***/
        function(o, n, t) {
          o.exports = function(e, i) {
            return i || (i = {}), e = e && e.__esModule ? e.default : e, typeof e != "string" ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), i.hash && (e += i.hash), /["'() \t\n]/.test(e) || i.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e);
          };
        },
        /* 151 */
        /***/
        function(o, n, t) {
          t.r(n), n.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
        },
        /* 152 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(153);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 153 */
        /***/
        function(o, n, t) {
          var e = t(21);
          n = e(!1), n.push([o.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* 单个菜单 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), o.exports = n;
        },
        /* 154 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(155);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 155 */
        /***/
        function(o, n, t) {
          var e = t(21);
          n = e(!1), n.push([o.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), o.exports = n;
        },
        /* 156 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(157);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 157 */
        /***/
        function(o, n, t) {
          var e = t(21);
          n = e(!1), n.push([o.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* 为 emotion panel 定制的样式 */
  /* 上传图片、上传视频的 panel 定制样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* 输入框的样式 */
  /* 按钮的样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), o.exports = n;
        },
        /* 158 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(159);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 159 */
        /***/
        function(o, n, t) {
          var e = t(21);
          n = e(!1), n.push([o.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), o.exports = n;
        },
        /* 160 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(161));
          Element.prototype.matches || (Element.prototype.matches = function(r) {
            var a = this.ownerDocument.querySelectorAll(r), f = a.length;
            for (f; f >= 0 && a.item(f) !== this; f--)
              ;
            return f > -1;
          }), i.default || (window.Promise = i.default);
        },
        /* 161 */
        /***/
        function(o, n, t) {
          o.exports = t(162);
        },
        /* 162 */
        /***/
        function(o, n, t) {
          var e = t(163);
          o.exports = e;
        },
        /* 163 */
        /***/
        function(o, n, t) {
          t(61), t(50), t(54), t(175), t(178), t(179);
          var e = t(9);
          o.exports = e.Promise;
        },
        /* 164 */
        /***/
        function(o, n, t) {
          var e = t(62), i = t(49), r = function(a) {
            return function(f, g) {
              var d = String(i(f)), p = e(g), c = d.length, l, u;
              return p < 0 || p >= c ? a ? "" : void 0 : (l = d.charCodeAt(p), l < 55296 || l > 56319 || p + 1 === c || (u = d.charCodeAt(p + 1)) < 56320 || u > 57343 ? a ? d.charAt(p) : l : a ? d.slice(p, p + 2) : (l - 55296 << 10) + (u - 56320) + 65536);
            };
          };
          o.exports = {
            // `String.prototype.codePointAt` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
            codeAt: r(!1),
            // `String.prototype.at` method
            // https://github.com/mathiasbynens/String.prototype.at
            charAt: r(!0)
          };
        },
        /* 165 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(101), r = e.WeakMap;
          o.exports = typeof r == "function" && /native code/.test(i(r));
        },
        /* 166 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(19);
          o.exports = function(r, a) {
            try {
              i(e, r, a);
            } catch {
              e[r] = a;
            }
            return a;
          };
        },
        /* 167 */
        /***/
        function(o, n, t) {
          var e = t(103).IteratorPrototype, i = t(77), r = t(48), a = t(36), f = t(43), g = function() {
            return this;
          };
          o.exports = function(d, p, c) {
            var l = p + " Iterator";
            return d.prototype = i(e, { next: r(1, c) }), a(d, l, !1, !0), f[l] = g, d;
          };
        },
        /* 168 */
        /***/
        function(o, n, t) {
          var e = t(11);
          o.exports = !e(function() {
            function i() {
            }
            return i.prototype.constructor = null, Object.getPrototypeOf(new i()) !== i.prototype;
          });
        },
        /* 169 */
        /***/
        function(o, n, t) {
          var e = t(14), i = t(18), r = t(25), a = t(52);
          o.exports = e ? Object.defineProperties : function(g, d) {
            r(g);
            for (var p = a(d), c = p.length, l = 0, u; c > l; ) i.f(g, u = p[l++], d[u]);
            return g;
          };
        },
        /* 170 */
        /***/
        function(o, n, t) {
          var e = t(81), i = t(65);
          o.exports = e ? {}.toString : function() {
            return "[object " + i(this) + "]";
          };
        },
        /* 171 */
        /***/
        function(o, n, t) {
          var e = t(25), i = t(172);
          o.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var r = !1, a = {}, f;
            try {
              f = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, f.call(a, []), r = a instanceof Array;
            } catch {
            }
            return function(d, p) {
              return e(d), i(p), r ? f.call(d, p) : d.__proto__ = p, d;
            };
          }() : void 0);
        },
        /* 172 */
        /***/
        function(o, n, t) {
          var e = t(13);
          o.exports = function(i) {
            if (!e(i) && i !== null)
              throw TypeError("Can't set " + String(i) + " as a prototype");
            return i;
          };
        },
        /* 173 */
        /***/
        function(o, n, t) {
          var e = t(28), i = t(82), r = t(43), a = t(41), f = t(75), g = "Array Iterator", d = a.set, p = a.getterFor(g);
          o.exports = f(Array, "Array", function(c, l) {
            d(this, {
              type: g,
              target: e(c),
              // target
              index: 0,
              // next index
              kind: l
              // kind
            });
          }, function() {
            var c = p(this), l = c.target, u = c.kind, s = c.index++;
            return !l || s >= l.length ? (c.target = void 0, { value: void 0, done: !0 }) : u == "keys" ? { value: s, done: !1 } : u == "values" ? { value: l[s], done: !1 } : { value: [s, l[s]], done: !1 };
          }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries");
        },
        /* 174 */
        /***/
        function(o, n) {
          o.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          };
        },
        /* 175 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(42), r = t(8), a = t(35), f = t(108), g = t(53), d = t(109), p = t(36), c = t(110), l = t(13), u = t(40), s = t(83), m = t(33), v = t(101), h = t(66), A = t(114), y = t(115), x = t(116).set, S = t(176), D = t(118), P = t(177), C = t(85), E = t(119), T = t(41), R = t(100), N = t(10), M = t(86), B = N("species"), F = "Promise", O = T.get, b = T.set, $ = T.getterFor(F), H = f, j = r.TypeError, K = r.document, U = r.process, Q = a("fetch"), J = C.f, w = J, V = m(U) == "process", W = !!(K && K.createEvent && r.dispatchEvent), _ = "unhandledrejection", nt = "rejectionhandled", at = 0, At = 1, Gt = 2, ut = 1, jt = 2, Pt, ft, ht, It, mt = R(F, function() {
            var X = v(H) !== String(H);
            if (!X && (M === 66 || !V && typeof PromiseRejectionEvent != "function") || i && !H.prototype.finally) return !0;
            if (M >= 51 && /native code/.test(H)) return !1;
            var Y = H.resolve(1), k = function(G) {
              G(function() {
              }, function() {
              });
            }, tt = Y.constructor = {};
            return tt[B] = k, !(Y.then(function() {
            }) instanceof k);
          }), ie = mt || !A(function(X) {
            H.all(X).catch(function() {
            });
          }), Rt = function(X) {
            var Y;
            return l(X) && typeof (Y = X.then) == "function" ? Y : !1;
          }, Et = function(X, Y, k) {
            if (!Y.notified) {
              Y.notified = !0;
              var tt = Y.reactions;
              S(function() {
                for (var G = Y.value, z = Y.state == At, Z = 0; tt.length > Z; ) {
                  var q = tt[Z++], et = z ? q.ok : q.fail, it = q.resolve, ct = q.reject, vt = q.domain, st, wt, Vt;
                  try {
                    et ? (z || (Y.rejection === jt && Bt(X, Y), Y.rejection = ut), et === !0 ? st = G : (vt && vt.enter(), st = et(G), vt && (vt.exit(), Vt = !0)), st === q.promise ? ct(j("Promise-chain cycle")) : (wt = Rt(st)) ? wt.call(st, it, ct) : it(st)) : ct(G);
                  } catch (Pn) {
                    vt && !Vt && vt.exit(), ct(Pn);
                  }
                }
                Y.reactions = [], Y.notified = !1, k && !Y.rejection && Ut(X, Y);
              });
            }
          }, Mt = function(X, Y, k) {
            var tt, G;
            W ? (tt = K.createEvent("Event"), tt.promise = Y, tt.reason = k, tt.initEvent(X, !1, !0), r.dispatchEvent(tt)) : tt = { promise: Y, reason: k }, (G = r["on" + X]) ? G(tt) : X === _ && P("Unhandled promise rejection", k);
          }, Ut = function(X, Y) {
            x.call(r, function() {
              var k = Y.value, tt = Nt(Y), G;
              if (tt && (G = E(function() {
                V ? U.emit("unhandledRejection", k, X) : Mt(_, X, k);
              }), Y.rejection = V || Nt(Y) ? jt : ut, G.error))
                throw G.value;
            });
          }, Nt = function(X) {
            return X.rejection !== ut && !X.parent;
          }, Bt = function(X, Y) {
            x.call(r, function() {
              V ? U.emit("rejectionHandled", X) : Mt(nt, X, Y.value);
            });
          }, gt = function(X, Y, k, tt) {
            return function(G) {
              X(Y, k, G, tt);
            };
          }, yt = function(X, Y, k, tt) {
            Y.done || (Y.done = !0, tt && (Y = tt), Y.value = k, Y.state = Gt, Et(X, Y, !0));
          }, xt = function(X, Y, k, tt) {
            if (!Y.done) {
              Y.done = !0, tt && (Y = tt);
              try {
                if (X === k) throw j("Promise can't be resolved itself");
                var G = Rt(k);
                G ? S(function() {
                  var z = { done: !1 };
                  try {
                    G.call(
                      k,
                      gt(xt, X, z, Y),
                      gt(yt, X, z, Y)
                    );
                  } catch (Z) {
                    yt(X, z, Z, Y);
                  }
                }) : (Y.value = k, Y.state = At, Et(X, Y, !1));
              } catch (z) {
                yt(X, { done: !1 }, z, Y);
              }
            }
          };
          mt && (H = function(Y) {
            s(this, H, F), u(Y), Pt.call(this);
            var k = O(this);
            try {
              Y(gt(xt, this, k), gt(yt, this, k));
            } catch (tt) {
              yt(this, k, tt);
            }
          }, Pt = function(Y) {
            b(this, {
              type: F,
              done: !1,
              notified: !1,
              parent: !1,
              reactions: [],
              rejection: !1,
              state: at,
              value: void 0
            });
          }, Pt.prototype = d(H.prototype, {
            // `Promise.prototype.then` method
            // https://tc39.github.io/ecma262/#sec-promise.prototype.then
            then: function(Y, k) {
              var tt = $(this), G = J(y(this, H));
              return G.ok = typeof Y == "function" ? Y : !0, G.fail = typeof k == "function" && k, G.domain = V ? U.domain : void 0, tt.parent = !0, tt.reactions.push(G), tt.state != at && Et(this, tt, !1), G.promise;
            },
            // `Promise.prototype.catch` method
            // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
            catch: function(X) {
              return this.then(void 0, X);
            }
          }), ft = function() {
            var X = new Pt(), Y = O(X);
            this.promise = X, this.resolve = gt(xt, X, Y), this.reject = gt(yt, X, Y);
          }, C.f = J = function(X) {
            return X === H || X === ht ? new ft(X) : w(X);
          }, !i && typeof f == "function" && (It = f.prototype.then, g(f.prototype, "then", function(Y, k) {
            var tt = this;
            return new H(function(G, z) {
              It.call(tt, G, z);
            }).then(Y, k);
          }, { unsafe: !0 }), typeof Q == "function" && e({ global: !0, enumerable: !0, forced: !0 }, {
            // eslint-disable-next-line no-unused-vars
            fetch: function(Y) {
              return D(H, Q.apply(r, arguments));
            }
          }))), e({ global: !0, wrap: !0, forced: mt }, {
            Promise: H
          }), p(H, F, !1, !0), c(F), ht = a(F), e({ target: F, stat: !0, forced: mt }, {
            // `Promise.reject` method
            // https://tc39.github.io/ecma262/#sec-promise.reject
            reject: function(Y) {
              var k = J(this);
              return k.reject.call(void 0, Y), k.promise;
            }
          }), e({ target: F, stat: !0, forced: i || mt }, {
            // `Promise.resolve` method
            // https://tc39.github.io/ecma262/#sec-promise.resolve
            resolve: function(Y) {
              return D(i && this === ht ? H : this, Y);
            }
          }), e({ target: F, stat: !0, forced: ie }, {
            // `Promise.all` method
            // https://tc39.github.io/ecma262/#sec-promise.all
            all: function(Y) {
              var k = this, tt = J(k), G = tt.resolve, z = tt.reject, Z = E(function() {
                var q = u(k.resolve), et = [], it = 0, ct = 1;
                h(Y, function(vt) {
                  var st = it++, wt = !1;
                  et.push(void 0), ct++, q.call(k, vt).then(function(Vt) {
                    wt || (wt = !0, et[st] = Vt, --ct || G(et));
                  }, z);
                }), --ct || G(et);
              });
              return Z.error && z(Z.value), tt.promise;
            },
            // `Promise.race` method
            // https://tc39.github.io/ecma262/#sec-promise.race
            race: function(Y) {
              var k = this, tt = J(k), G = tt.reject, z = E(function() {
                var Z = u(k.resolve);
                h(Y, function(q) {
                  Z.call(k, q).then(tt.resolve, G);
                });
              });
              return z.error && G(z.value), tt.promise;
            }
          });
        },
        /* 176 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(71).f, r = t(33), a = t(116).set, f = t(117), g = e.MutationObserver || e.WebKitMutationObserver, d = e.process, p = e.Promise, c = r(d) == "process", l = i(e, "queueMicrotask"), u = l && l.value, s, m, v, h, A, y, x, S;
          u || (s = function() {
            var D, P;
            for (c && (D = d.domain) && D.exit(); m; ) {
              P = m.fn, m = m.next;
              try {
                P();
              } catch (C) {
                throw m ? h() : v = void 0, C;
              }
            }
            v = void 0, D && D.enter();
          }, c ? h = function() {
            d.nextTick(s);
          } : g && !f ? (A = !0, y = document.createTextNode(""), new g(s).observe(y, { characterData: !0 }), h = function() {
            y.data = A = !A;
          }) : p && p.resolve ? (x = p.resolve(void 0), S = x.then, h = function() {
            S.call(x, s);
          }) : h = function() {
            a.call(e, s);
          }), o.exports = u || function(D) {
            var P = { fn: D, next: void 0 };
            v && (v.next = P), m || (m = P, h()), v = P;
          };
        },
        /* 177 */
        /***/
        function(o, n, t) {
          var e = t(8);
          o.exports = function(i, r) {
            var a = e.console;
            a && a.error && (arguments.length === 1 ? a.error(i) : a.error(i, r));
          };
        },
        /* 178 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(40), r = t(85), a = t(119), f = t(66);
          e({ target: "Promise", stat: !0 }, {
            allSettled: function(d) {
              var p = this, c = r.f(p), l = c.resolve, u = c.reject, s = a(function() {
                var m = i(p.resolve), v = [], h = 0, A = 1;
                f(d, function(y) {
                  var x = h++, S = !1;
                  v.push(void 0), A++, m.call(p, y).then(function(D) {
                    S || (S = !0, v[x] = { status: "fulfilled", value: D }, --A || l(v));
                  }, function(D) {
                    S || (S = !0, v[x] = { status: "rejected", reason: D }, --A || l(v));
                  });
                }), --A || l(v);
              });
              return s.error && u(s.value), c.promise;
            }
          });
        },
        /* 179 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(42), r = t(108), a = t(11), f = t(35), g = t(115), d = t(118), p = t(53), c = !!r && a(function() {
            r.prototype.finally.call({ then: function() {
            } }, function() {
            });
          });
          e({ target: "Promise", proto: !0, real: !0, forced: c }, {
            finally: function(l) {
              var u = g(this, f("Promise")), s = typeof l == "function";
              return this.then(
                s ? function(m) {
                  return d(u, l()).then(function() {
                    return m;
                  });
                } : l,
                s ? function(m) {
                  return d(u, l()).then(function() {
                    throw m;
                  });
                } : l
              );
            }
          }), !i && typeof r == "function" && !r.prototype.finally && p(r.prototype, "finally", f("Promise").prototype.finally);
        },
        /* 180 */
        /***/
        function(o, n, t) {
          t(54);
          var e = t(181), i = t(65), r = Array.prototype, a = {
            DOMTokenList: !0,
            NodeList: !0
          };
          o.exports = function(f) {
            var g = f.forEach;
            return f === r || f instanceof Array && g === r.forEach || a.hasOwnProperty(i(f)) ? e : g;
          };
        },
        /* 181 */
        /***/
        function(o, n, t) {
          var e = t(182);
          o.exports = e;
        },
        /* 182 */
        /***/
        function(o, n, t) {
          t(183);
          var e = t(15);
          o.exports = e("Array").forEach;
        },
        /* 183 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(184);
          e({ target: "Array", proto: !0, forced: [].forEach != i }, {
            forEach: i
          });
        },
        /* 184 */
        /***/
        function(o, n, t) {
          var e = t(30).forEach, i = t(67), r = t(22), a = i("forEach"), f = r("forEach");
          o.exports = !a || !f ? function(d) {
            return e(this, d, arguments.length > 1 ? arguments[1] : void 0);
          } : [].forEach;
        },
        /* 185 */
        /***/
        function(o, n, t) {
          var e = t(186);
          o.exports = e;
        },
        /* 186 */
        /***/
        function(o, n, t) {
          t(187);
          var e = t(9);
          o.exports = e.Array.isArray;
        },
        /* 187 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(55);
          e({ target: "Array", stat: !0 }, {
            isArray: i
          });
        },
        /* 188 */
        /***/
        function(o, n, t) {
          var e = t(189);
          o.exports = e;
        },
        /* 189 */
        /***/
        function(o, n, t) {
          var e = t(190), i = Array.prototype;
          o.exports = function(r) {
            var a = r.map;
            return r === i || r instanceof Array && a === i.map ? e : a;
          };
        },
        /* 190 */
        /***/
        function(o, n, t) {
          t(191);
          var e = t(15);
          o.exports = e("Array").map;
        },
        /* 191 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(30).map, r = t(56), a = t(22), f = r("map"), g = a("map");
          e({ target: "Array", proto: !0, forced: !f || !g }, {
            map: function(p) {
              return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 192 */
        /***/
        function(o, n, t) {
          var e = t(193);
          o.exports = e;
        },
        /* 193 */
        /***/
        function(o, n, t) {
          var e = t(194), i = String.prototype;
          o.exports = function(r) {
            var a = r.trim;
            return typeof r == "string" || r === i || r instanceof String && a === i.trim ? e : a;
          };
        },
        /* 194 */
        /***/
        function(o, n, t) {
          t(195);
          var e = t(15);
          o.exports = e("String").trim;
        },
        /* 195 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(90).trim, r = t(196);
          e({ target: "String", proto: !0, forced: r("trim") }, {
            trim: function() {
              return i(this);
            }
          });
        },
        /* 196 */
        /***/
        function(o, n, t) {
          var e = t(11), i = t(68), r = "​᠎";
          o.exports = function(a) {
            return e(function() {
              return !!i[a]() || r[a]() != r || i[a].name !== a;
            });
          };
        },
        /* 197 */
        /***/
        function(o, n, t) {
          var e = t(198);
          o.exports = e;
        },
        /* 198 */
        /***/
        function(o, n, t) {
          t(199), t(61), t(50), t(54);
          var e = t(9);
          o.exports = e.Map;
        },
        /* 199 */
        /***/
        function(o, n, t) {
          var e = t(121), i = t(123);
          o.exports = e("Map", function(r) {
            return function() {
              return r(this, arguments.length ? arguments[0] : void 0);
            };
          }, i);
        },
        /* 200 */
        /***/
        function(o, n, t) {
          var e = t(11);
          o.exports = !e(function() {
            return Object.isExtensible(Object.preventExtensions({}));
          });
        },
        /* 201 */
        /***/
        function(o, n, t) {
          var e = t(202);
          o.exports = e;
        },
        /* 202 */
        /***/
        function(o, n, t) {
          var e = t(203), i = Array.prototype;
          o.exports = function(r) {
            var a = r.indexOf;
            return r === i || r instanceof Array && a === i.indexOf ? e : a;
          };
        },
        /* 203 */
        /***/
        function(o, n, t) {
          t(204);
          var e = t(15);
          o.exports = e("Array").indexOf;
        },
        /* 204 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(78).indexOf, r = t(67), a = t(22), f = [].indexOf, g = !!f && 1 / [1].indexOf(1, -0) < 0, d = r("indexOf"), p = a("indexOf", { ACCESSORS: !0, 1: 0 });
          e({ target: "Array", proto: !0, forced: g || !d || !p }, {
            indexOf: function(l) {
              return g ? f.apply(this, arguments) || 0 : i(this, l, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 205 */
        /***/
        function(o, n, t) {
          var e = t(206);
          o.exports = e;
        },
        /* 206 */
        /***/
        function(o, n, t) {
          var e = t(207), i = Array.prototype;
          o.exports = function(r) {
            var a = r.splice;
            return r === i || r instanceof Array && a === i.splice ? e : a;
          };
        },
        /* 207 */
        /***/
        function(o, n, t) {
          t(208);
          var e = t(15);
          o.exports = e("Array").splice;
        },
        /* 208 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(79), r = t(62), a = t(34), f = t(29), g = t(88), d = t(69), p = t(56), c = t(22), l = p("splice"), u = c("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), s = Math.max, m = Math.min, v = 9007199254740991, h = "Maximum allowed length exceeded";
          e({ target: "Array", proto: !0, forced: !l || !u }, {
            splice: function(y, x) {
              var S = f(this), D = a(S.length), P = i(y, D), C = arguments.length, E, T, R, N, M, B;
              if (C === 0 ? E = T = 0 : C === 1 ? (E = 0, T = D - P) : (E = C - 2, T = m(s(r(x), 0), D - P)), D + E - T > v)
                throw TypeError(h);
              for (R = g(S, T), N = 0; N < T; N++)
                M = P + N, M in S && d(R, N, S[M]);
              if (R.length = T, E < T) {
                for (N = P; N < D - T; N++)
                  M = N + T, B = N + E, M in S ? S[B] = S[M] : delete S[B];
                for (N = D; N > D - T + E; N--) delete S[N - 1];
              } else if (E > T)
                for (N = D - T; N > P; N--)
                  M = N + T - 1, B = N + E - 1, M in S ? S[B] = S[M] : delete S[B];
              for (N = 0; N < E; N++)
                S[N + P] = arguments[N + 2];
              return S.length = D - T + E, R;
            }
          });
        },
        /* 209 */
        /***/
        function(o, n, t) {
          var e = t(210);
          o.exports = e;
        },
        /* 210 */
        /***/
        function(o, n, t) {
          var e = t(211), i = Array.prototype;
          o.exports = function(r) {
            var a = r.filter;
            return r === i || r instanceof Array && a === i.filter ? e : a;
          };
        },
        /* 211 */
        /***/
        function(o, n, t) {
          t(212);
          var e = t(15);
          o.exports = e("Array").filter;
        },
        /* 212 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(30).filter, r = t(56), a = t(22), f = r("filter"), g = a("filter");
          e({ target: "Array", proto: !0, forced: !f || !g }, {
            filter: function(p) {
              return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 213 */
        /***/
        function(o, n, t) {
          var e = t(214);
          o.exports = e;
        },
        /* 214 */
        /***/
        function(o, n, t) {
          var e = t(215), i = t(217), r = Array.prototype, a = String.prototype;
          o.exports = function(f) {
            var g = f.includes;
            return f === r || f instanceof Array && g === r.includes ? e : typeof f == "string" || f === a || f instanceof String && g === a.includes ? i : g;
          };
        },
        /* 215 */
        /***/
        function(o, n, t) {
          t(216);
          var e = t(15);
          o.exports = e("Array").includes;
        },
        /* 216 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(78).includes, r = t(82), a = t(22), f = a("indexOf", { ACCESSORS: !0, 1: 0 });
          e({ target: "Array", proto: !0, forced: !f }, {
            includes: function(d) {
              return i(this, d, arguments.length > 1 ? arguments[1] : void 0);
            }
          }), r("includes");
        },
        /* 217 */
        /***/
        function(o, n, t) {
          t(218);
          var e = t(15);
          o.exports = e("String").includes;
        },
        /* 218 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(219), r = t(49), a = t(221);
          e({ target: "String", proto: !0, forced: !a("includes") }, {
            includes: function(g) {
              return !!~String(r(this)).indexOf(i(g), arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 219 */
        /***/
        function(o, n, t) {
          var e = t(220);
          o.exports = function(i) {
            if (e(i))
              throw TypeError("The method doesn't accept regular expressions");
            return i;
          };
        },
        /* 220 */
        /***/
        function(o, n, t) {
          var e = t(13), i = t(33), r = t(10), a = r("match");
          o.exports = function(f) {
            var g;
            return e(f) && ((g = f[a]) !== void 0 ? !!g : i(f) == "RegExp");
          };
        },
        /* 221 */
        /***/
        function(o, n, t) {
          var e = t(10), i = e("match");
          o.exports = function(r) {
            var a = /./;
            try {
              "/./"[r](a);
            } catch {
              try {
                return a[i] = !1, "/./"[r](a);
              } catch {
              }
            }
            return !1;
          };
        },
        /* 222 */
        /***/
        function(o, n, t) {
          var e = t(223);
          o.exports = e;
        },
        /* 223 */
        /***/
        function(o, n, t) {
          var e = t(224), i = Function.prototype;
          o.exports = function(r) {
            var a = r.bind;
            return r === i || r instanceof Function && a === i.bind ? e : a;
          };
        },
        /* 224 */
        /***/
        function(o, n, t) {
          t(225);
          var e = t(15);
          o.exports = e("Function").bind;
        },
        /* 225 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(226);
          e({ target: "Function", proto: !0 }, {
            bind: i
          });
        },
        /* 226 */
        /***/
        function(o, n, t) {
          var e = t(40), i = t(13), r = [].slice, a = {}, f = function(g, d, p) {
            if (!(d in a)) {
              for (var c = [], l = 0; l < d; l++) c[l] = "a[" + l + "]";
              a[d] = Function("C,a", "return new C(" + c.join(",") + ")");
            }
            return a[d](g, p);
          };
          o.exports = Function.bind || function(d) {
            var p = e(this), c = r.call(arguments, 1), l = function() {
              var s = c.concat(r.call(arguments));
              return this instanceof l ? f(p, s.length, s) : p.apply(d, s);
            };
            return i(p.prototype) && (l.prototype = p.prototype), l;
          };
        },
        /* 227 */
        /***/
        function(o, n, t) {
          o.exports = t(228);
        },
        /* 228 */
        /***/
        function(o, n, t) {
          var e = t(229);
          o.exports = e;
        },
        /* 229 */
        /***/
        function(o, n, t) {
          t(124), t(50), t(54);
          var e = t(93);
          o.exports = e.f("iterator");
        },
        /* 230 */
        /***/
        function(o, n, t) {
          o.exports = t(231);
        },
        /* 231 */
        /***/
        function(o, n, t) {
          var e = t(232);
          t(251), t(252), t(253), t(254), t(255), o.exports = e;
        },
        /* 232 */
        /***/
        function(o, n, t) {
          t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(124), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
          var e = t(9);
          o.exports = e.Symbol;
        },
        /* 233 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(11), r = t(55), a = t(13), f = t(29), g = t(34), d = t(69), p = t(88), c = t(56), l = t(10), u = t(86), s = l("isConcatSpreadable"), m = 9007199254740991, v = "Maximum allowed index exceeded", h = u >= 51 || !i(function() {
            var S = [];
            return S[s] = !1, S.concat()[0] !== S;
          }), A = c("concat"), y = function(S) {
            if (!a(S)) return !1;
            var D = S[s];
            return D !== void 0 ? !!D : r(S);
          }, x = !h || !A;
          e({ target: "Array", proto: !0, forced: x }, {
            concat: function(D) {
              var P = f(this), C = p(P, 0), E = 0, T, R, N, M, B;
              for (T = -1, N = arguments.length; T < N; T++)
                if (B = T === -1 ? P : arguments[T], y(B)) {
                  if (M = g(B.length), E + M > m) throw TypeError(v);
                  for (R = 0; R < M; R++, E++) R in B && d(C, E, B[R]);
                } else {
                  if (E >= m) throw TypeError(v);
                  d(C, E++, B);
                }
              return C.length = E, C;
            }
          });
        },
        /* 234 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(8), r = t(35), a = t(42), f = t(14), g = t(76), d = t(105), p = t(11), c = t(16), l = t(55), u = t(13), s = t(25), m = t(29), v = t(28), h = t(60), A = t(48), y = t(77), x = t(52), S = t(125), D = t(235), P = t(126), C = t(71), E = t(18), T = t(59), R = t(19), N = t(53), M = t(74), B = t(63), F = t(51), O = t(64), b = t(10), $ = t(93), H = t(12), j = t(36), K = t(41), U = t(30).forEach, Q = B("hidden"), J = "Symbol", w = "prototype", V = b("toPrimitive"), W = K.set, _ = K.getterFor(J), nt = Object[w], at = i.Symbol, At = r("JSON", "stringify"), Gt = C.f, ut = E.f, jt = D.f, Pt = T.f, ft = M("symbols"), ht = M("op-symbols"), It = M("string-to-symbol-registry"), mt = M("symbol-to-string-registry"), ie = M("wks"), Rt = i.QObject, Et = !Rt || !Rt[w] || !Rt[w].findChild, Mt = f && p(function() {
            return y(ut({}, "a", {
              get: function() {
                return ut(this, "a", { value: 7 }).a;
              }
            })).a != 7;
          }) ? function(G, z, Z) {
            var q = Gt(nt, z);
            q && delete nt[z], ut(G, z, Z), q && G !== nt && ut(nt, z, q);
          } : ut, Ut = function(G, z) {
            var Z = ft[G] = y(at[w]);
            return W(Z, {
              type: J,
              tag: G,
              description: z
            }), f || (Z.description = z), Z;
          }, Nt = d ? function(G) {
            return typeof G == "symbol";
          } : function(G) {
            return Object(G) instanceof at;
          }, Bt = function(z, Z, q) {
            z === nt && Bt(ht, Z, q), s(z);
            var et = h(Z, !0);
            return s(q), c(ft, et) ? (q.enumerable ? (c(z, Q) && z[Q][et] && (z[Q][et] = !1), q = y(q, { enumerable: A(0, !1) })) : (c(z, Q) || ut(z, Q, A(1, {})), z[Q][et] = !0), Mt(z, et, q)) : ut(z, et, q);
          }, gt = function(z, Z) {
            s(z);
            var q = v(Z), et = x(q).concat(k(q));
            return U(et, function(it) {
              (!f || xt.call(q, it)) && Bt(z, it, q[it]);
            }), z;
          }, yt = function(z, Z) {
            return Z === void 0 ? y(z) : gt(y(z), Z);
          }, xt = function(z) {
            var Z = h(z, !0), q = Pt.call(this, Z);
            return this === nt && c(ft, Z) && !c(ht, Z) ? !1 : q || !c(this, Z) || !c(ft, Z) || c(this, Q) && this[Q][Z] ? q : !0;
          }, X = function(z, Z) {
            var q = v(z), et = h(Z, !0);
            if (!(q === nt && c(ft, et) && !c(ht, et))) {
              var it = Gt(q, et);
              return it && c(ft, et) && !(c(q, Q) && q[Q][et]) && (it.enumerable = !0), it;
            }
          }, Y = function(z) {
            var Z = jt(v(z)), q = [];
            return U(Z, function(et) {
              !c(ft, et) && !c(F, et) && q.push(et);
            }), q;
          }, k = function(z) {
            var Z = z === nt, q = jt(Z ? ht : v(z)), et = [];
            return U(q, function(it) {
              c(ft, it) && (!Z || c(nt, it)) && et.push(ft[it]);
            }), et;
          };
          if (g || (at = function() {
            if (this instanceof at) throw TypeError("Symbol is not a constructor");
            var z = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), Z = O(z), q = function(et) {
              this === nt && q.call(ht, et), c(this, Q) && c(this[Q], Z) && (this[Q][Z] = !1), Mt(this, Z, A(1, et));
            };
            return f && Et && Mt(nt, Z, { configurable: !0, set: q }), Ut(Z, z);
          }, N(at[w], "toString", function() {
            return _(this).tag;
          }), N(at, "withoutSetter", function(G) {
            return Ut(O(G), G);
          }), T.f = xt, E.f = Bt, C.f = X, S.f = D.f = Y, P.f = k, $.f = function(G) {
            return Ut(b(G), G);
          }, f && (ut(at[w], "description", {
            configurable: !0,
            get: function() {
              return _(this).description;
            }
          }), a || N(nt, "propertyIsEnumerable", xt, { unsafe: !0 }))), e({ global: !0, wrap: !0, forced: !g, sham: !g }, {
            Symbol: at
          }), U(x(ie), function(G) {
            H(G);
          }), e({ target: J, stat: !0, forced: !g }, {
            // `Symbol.for` method
            // https://tc39.github.io/ecma262/#sec-symbol.for
            for: function(G) {
              var z = String(G);
              if (c(It, z)) return It[z];
              var Z = at(z);
              return It[z] = Z, mt[Z] = z, Z;
            },
            // `Symbol.keyFor` method
            // https://tc39.github.io/ecma262/#sec-symbol.keyfor
            keyFor: function(z) {
              if (!Nt(z)) throw TypeError(z + " is not a symbol");
              if (c(mt, z)) return mt[z];
            },
            useSetter: function() {
              Et = !0;
            },
            useSimple: function() {
              Et = !1;
            }
          }), e({ target: "Object", stat: !0, forced: !g, sham: !f }, {
            // `Object.create` method
            // https://tc39.github.io/ecma262/#sec-object.create
            create: yt,
            // `Object.defineProperty` method
            // https://tc39.github.io/ecma262/#sec-object.defineproperty
            defineProperty: Bt,
            // `Object.defineProperties` method
            // https://tc39.github.io/ecma262/#sec-object.defineproperties
            defineProperties: gt,
            // `Object.getOwnPropertyDescriptor` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
            getOwnPropertyDescriptor: X
          }), e({ target: "Object", stat: !0, forced: !g }, {
            // `Object.getOwnPropertyNames` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
            getOwnPropertyNames: Y,
            // `Object.getOwnPropertySymbols` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
            getOwnPropertySymbols: k
          }), e({ target: "Object", stat: !0, forced: p(function() {
            P.f(1);
          }) }, {
            getOwnPropertySymbols: function(z) {
              return P.f(m(z));
            }
          }), At) {
            var tt = !g || p(function() {
              var G = at();
              return At([G]) != "[null]" || At({ a: G }) != "{}" || At(Object(G)) != "{}";
            });
            e({ target: "JSON", stat: !0, forced: tt }, {
              // eslint-disable-next-line no-unused-vars
              stringify: function(z, Z, q) {
                for (var et = [z], it = 1, ct; arguments.length > it; ) et.push(arguments[it++]);
                if (ct = Z, !(!u(Z) && z === void 0 || Nt(z)))
                  return l(Z) || (Z = function(vt, st) {
                    if (typeof ct == "function" && (st = ct.call(this, vt, st)), !Nt(st)) return st;
                  }), et[1] = Z, At.apply(null, et);
              }
            });
          }
          at[w][V] || R(at[w], V, at[w].valueOf), j(at, J), F[Q] = !0;
        },
        /* 235 */
        /***/
        function(o, n, t) {
          var e = t(28), i = t(125).f, r = {}.toString, a = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], f = function(g) {
            try {
              return i(g);
            } catch {
              return a.slice();
            }
          };
          o.exports.f = function(d) {
            return a && r.call(d) == "[object Window]" ? f(d) : i(e(d));
          };
        },
        /* 236 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("asyncIterator");
        },
        /* 237 */
        /***/
        function(o, n) {
        },
        /* 238 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("hasInstance");
        },
        /* 239 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("isConcatSpreadable");
        },
        /* 240 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("match");
        },
        /* 241 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("matchAll");
        },
        /* 242 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("replace");
        },
        /* 243 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("search");
        },
        /* 244 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("species");
        },
        /* 245 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("split");
        },
        /* 246 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("toPrimitive");
        },
        /* 247 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("toStringTag");
        },
        /* 248 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("unscopables");
        },
        /* 249 */
        /***/
        function(o, n, t) {
          var e = t(36);
          e(Math, "Math", !0);
        },
        /* 250 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(36);
          i(e.JSON, "JSON", !0);
        },
        /* 251 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("asyncDispose");
        },
        /* 252 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("dispose");
        },
        /* 253 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("observable");
        },
        /* 254 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("patternMatch");
        },
        /* 255 */
        /***/
        function(o, n, t) {
          var e = t(12);
          e("replaceAll");
        },
        /* 256 */
        /***/
        function(o, n, t) {
          o.exports = t(257);
        },
        /* 257 */
        /***/
        function(o, n, t) {
          var e = t(258);
          o.exports = e;
        },
        /* 258 */
        /***/
        function(o, n, t) {
          t(259);
          var e = t(9);
          o.exports = e.parseInt;
        },
        /* 259 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(260);
          e({ global: !0, forced: parseInt != i }, {
            parseInt: i
          });
        },
        /* 260 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(90).trim, r = t(68), a = e.parseInt, f = /^[+-]?0[Xx]/, g = a(r + "08") !== 8 || a(r + "0x16") !== 22;
          o.exports = g ? function(p, c) {
            var l = i(String(p));
            return a(l, c >>> 0 || (f.test(l) ? 16 : 10));
          } : a;
        },
        /* 261 */
        /***/
        function(o, n, t) {
          var e = t(262);
          o.exports = e;
        },
        /* 262 */
        /***/
        function(o, n, t) {
          var e = t(263), i = Array.prototype;
          o.exports = function(r) {
            var a = r.slice;
            return r === i || r instanceof Array && a === i.slice ? e : a;
          };
        },
        /* 263 */
        /***/
        function(o, n, t) {
          t(264);
          var e = t(15);
          o.exports = e("Array").slice;
        },
        /* 264 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(13), r = t(55), a = t(79), f = t(34), g = t(28), d = t(69), p = t(10), c = t(56), l = t(22), u = c("slice"), s = l("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), m = p("species"), v = [].slice, h = Math.max;
          e({ target: "Array", proto: !0, forced: !u || !s }, {
            slice: function(y, x) {
              var S = g(this), D = f(S.length), P = a(y, D), C = a(x === void 0 ? D : x, D), E, T, R;
              if (r(S) && (E = S.constructor, typeof E == "function" && (E === Array || r(E.prototype)) ? E = void 0 : i(E) && (E = E[m], E === null && (E = void 0)), E === Array || E === void 0))
                return v.call(S, P, C);
              for (T = new (E === void 0 ? Array : E)(h(C - P, 0)), R = 0; P < C; P++, R++) P in S && d(T, R, S[P]);
              return T.length = R, T;
            }
          });
        },
        /* 265 */
        /***/
        function(o, n, t) {
          t(266);
          var e = t(9);
          o.exports = e.setTimeout;
        },
        /* 266 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(8), r = t(84), a = [].slice, f = /MSIE .\./.test(r), g = function(d) {
            return function(p, c) {
              var l = arguments.length > 2, u = l ? a.call(arguments, 2) : void 0;
              return d(l ? function() {
                (typeof p == "function" ? p : Function(p)).apply(this, u);
              } : p, c);
            };
          };
          e({ global: !0, bind: !0, forced: f }, {
            // `setTimeout` method
            // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
            setTimeout: g(i.setTimeout),
            // `setInterval` method
            // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
            setInterval: g(i.setInterval)
          });
        },
        /* 267 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(127));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(272)), g = a.__importDefault(t(273)), d = a.__importDefault(t(128)), p = a.__importDefault(t(274)), c = a.__importDefault(t(275)), l = a.__importDefault(t(276)), u = a.__importDefault(t(129)), s = a.__importDefault(t(277)), m = a.__importDefault(t(278)), v = a.__importDefault(t(279)), h = (0, r.default)(
            {},
            f.default,
            g.default,
            d.default,
            c.default,
            p.default,
            l.default,
            u.default,
            s.default,
            m.default,
            v.default,
            //链接校验的配置函数
            {
              linkCheck: function(y, x) {
                return !0;
              }
            }
          );
          n.default = h;
        },
        /* 268 */
        /***/
        function(o, n, t) {
          var e = t(269);
          o.exports = e;
        },
        /* 269 */
        /***/
        function(o, n, t) {
          t(270);
          var e = t(9);
          o.exports = e.Object.assign;
        },
        /* 270 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(271);
          e({ target: "Object", stat: !0, forced: Object.assign !== i }, {
            assign: i
          });
        },
        /* 271 */
        /***/
        function(o, n, t) {
          var e = t(14), i = t(11), r = t(52), a = t(126), f = t(59), g = t(29), d = t(72), p = Object.assign, c = Object.defineProperty;
          o.exports = !p || i(function() {
            if (e && p({ b: 1 }, p(c({}, "a", {
              enumerable: !0,
              get: function() {
                c(this, "b", {
                  value: 3,
                  enumerable: !1
                });
              }
            }), { b: 2 })).b !== 1) return !0;
            var l = {}, u = {}, s = Symbol(), m = "abcdefghijklmnopqrst";
            return l[s] = 7, m.split("").forEach(function(v) {
              u[v] = v;
            }), p({}, l)[s] != 7 || r(p({}, u)).join("") != m;
          }) ? function(u, s) {
            for (var m = g(u), v = arguments.length, h = 1, A = a.f, y = f.f; v > h; )
              for (var x = d(arguments[h++]), S = A ? r(x).concat(A(x)) : r(x), D = S.length, P = 0, C; D > P; )
                C = S[P++], (!e || y.call(x, C)) && (m[C] = x[C]);
            return m;
          } : p;
        },
        /* 272 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.default = {
            menus: [
              "head",
              "bold",
              "fontSize",
              // 'customFontSize',
              "fontName",
              "italic",
              "underline",
              "strikeThrough",
              "indent",
              "lineHeight",
              "foreColor",
              "backColor",
              "link",
              "list",
              "todo",
              "justify",
              "quote",
              "emoticon",
              "image",
              "video",
              "table",
              "code",
              "splitLine",
              "undo",
              "redo"
            ],
            fontNames: ["黑体", "仿宋", "楷体", "标楷体", "华文仿宋", "华文楷体", "宋体", "微软雅黑", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
            //  fontNames: [{ name: '宋体', value: '宋体' }],
            fontSizes: {
              "x-small": {
                name: "10px",
                value: "1"
              },
              small: {
                name: "13px",
                value: "2"
              },
              normal: {
                name: "16px",
                value: "3"
              },
              large: {
                name: "18px",
                value: "4"
              },
              "x-large": {
                name: "24px",
                value: "5"
              },
              "xx-large": {
                name: "32px",
                value: "6"
              },
              "xxx-large": {
                name: "48px",
                value: "7"
              }
            },
            // customFontSize: [ // 该菜单暂时不用 - 王福朋 20200924
            //     { value: '9px', text: '9' },
            //     { value: '10px', text: '10' },
            //     { value: '12px', text: '12' },
            //     { value: '14px', text: '14' },
            //     { value: '16px', text: '16' },
            //     { value: '20px', text: '20' },
            //     { value: '42px', text: '42' },
            //     { value: '72px', text: '72' },
            // ],
            colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
            //插入代码语言配置
            languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
            languageTab: "　　　　",
            /**
             * 表情配置菜单
             * 如果为emoji表情直接作为元素插入
             * emoticon:Array<EmotionsType>
             */
            emotions: [{
              // tab 的标题
              title: "表情",
              // type -> 'emoji' / 'image'
              type: "emoji",
              // content -> 数组
              content: "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 🤗 🤔 😶 😑 😬 🙄 😯 😴 😷 🤑 😈 🤡 💩 👻 💀 👀 👣".split(/\s/)
            }, {
              // tab 的标题
              title: "手势",
              // type -> 'emoji' / 'image'
              type: "emoji",
              // content -> 数组
              content: "👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏".split(/\s/)
            }],
            lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
            undoLimit: 20,
            indentation: "2em",
            showMenuTooltips: !0,
            // 菜单栏tooltip为上标还是下标
            menuTooltipPosition: "up"
          };
        },
        /* 273 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(7);
          function a(f, g, d) {
            window.alert(f), d && console.error("wangEditor: " + d);
          }
          n.default = {
            onchangeTimeout: 200,
            onchange: null,
            onfocus: r.EMPTY_FN,
            onblur: r.EMPTY_FN,
            onCatalogChange: null,
            customAlert: a
          };
        },
        /* 274 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.default = {
            // 粘贴过滤样式，默认开启
            pasteFilterStyle: !0,
            // 粘贴内容时，忽略图片。默认关闭
            pasteIgnoreImg: !1,
            // 对粘贴的文字进行自定义处理，返回处理后的结果。编辑器会将处理后的结果粘贴到编辑区域中。
            // IE 暂时不支持
            pasteTextHandle: function(a) {
              return a;
            }
          };
        },
        /* 275 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.default = {
            styleWithCSS: !1
          };
        },
        /* 276 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(7);
          n.default = {
            // 网络图片校验的配置函数
            linkImgCheck: function(f, g, d) {
              return !0;
            },
            // 显示“插入网络图片”
            showLinkImg: !0,
            // 显示“插入图片alt”
            showLinkImgAlt: !0,
            // 显示“插入图片href”
            showLinkImgHref: !0,
            // 插入图片成功之后的回调函数
            linkImgCallback: r.EMPTY_FN,
            // accept
            uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
            // 服务端地址
            uploadImgServer: "",
            // 使用 base64 存储图片
            uploadImgShowBase64: !1,
            // 上传图片的最大体积，默认 5M
            uploadImgMaxSize: 5 * 1024 * 1024,
            // 一次最多上传多少个图片
            uploadImgMaxLength: 100,
            // 自定义上传图片的名称
            uploadFileName: "",
            // 上传图片自定义参数
            uploadImgParams: {},
            // 自定义参数拼接到 url 中
            uploadImgParamsWithUrl: !1,
            // 上传图片自定义 header
            uploadImgHeaders: {},
            // 钩子函数
            uploadImgHooks: {},
            // 上传图片超时时间 ms
            uploadImgTimeout: 10 * 1e3,
            // 跨域带 cookie
            withCredentials: !1,
            // 自定义上传
            customUploadImg: null,
            // 从媒体库上传
            uploadImgFromMedia: null
          };
        },
        /* 277 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.default = {
            lang: "zh-CN",
            languages: {
              "zh-CN": {
                wangEditor: {
                  重置: "重置",
                  插入: "插入",
                  默认: "默认",
                  创建: "创建",
                  修改: "修改",
                  如: "如",
                  请输入正文: "请输入正文",
                  menus: {
                    title: {
                      标题: "标题",
                      加粗: "加粗",
                      字号: "字号",
                      字体: "字体",
                      斜体: "斜体",
                      下划线: "下划线",
                      删除线: "删除线",
                      缩进: "缩进",
                      行高: "行高",
                      文字颜色: "文字颜色",
                      背景色: "背景色",
                      链接: "链接",
                      序列: "序列",
                      对齐: "对齐",
                      引用: "引用",
                      表情: "表情",
                      图片: "图片",
                      视频: "视频",
                      表格: "表格",
                      代码: "代码",
                      分割线: "分割线",
                      恢复: "恢复",
                      撤销: "撤销",
                      全屏: "全屏",
                      取消全屏: "取消全屏",
                      待办事项: "待办事项"
                    },
                    dropListMenu: {
                      设置标题: "设置标题",
                      背景颜色: "背景颜色",
                      文字颜色: "文字颜色",
                      设置字号: "设置字号",
                      设置字体: "设置字体",
                      设置缩进: "设置缩进",
                      对齐方式: "对齐方式",
                      设置行高: "设置行高",
                      序列: "序列",
                      head: {
                        正文: "正文"
                      },
                      indent: {
                        增加缩进: "增加缩进",
                        减少缩进: "减少缩进"
                      },
                      justify: {
                        靠左: "靠左",
                        居中: "居中",
                        靠右: "靠右",
                        两端: "两端"
                      },
                      list: {
                        无序列表: "无序列表",
                        有序列表: "有序列表"
                      }
                    },
                    panelMenus: {
                      emoticon: {
                        默认: "默认",
                        新浪: "新浪",
                        emoji: "emoji",
                        手势: "手势"
                      },
                      image: {
                        上传图片: "上传图片",
                        网络图片: "网络图片",
                        图片地址: "图片地址",
                        图片文字说明: "图片文字说明",
                        跳转链接: "跳转链接"
                      },
                      link: {
                        链接: "链接",
                        链接文字: "链接文字",
                        取消链接: "取消链接",
                        查看链接: "查看链接"
                      },
                      video: {
                        插入视频: "插入视频",
                        上传视频: "上传视频"
                      },
                      table: {
                        行: "行",
                        列: "列",
                        的: "的",
                        表格: "表格",
                        添加行: "添加行",
                        删除行: "删除行",
                        添加列: "添加列",
                        删除列: "删除列",
                        设置表头: "设置表头",
                        取消表头: "取消表头",
                        插入表格: "插入表格",
                        删除表格: "删除表格"
                      },
                      code: {
                        删除代码: "删除代码",
                        修改代码: "修改代码",
                        插入代码: "插入代码"
                      }
                    }
                  },
                  validate: {
                    张图片: "张图片",
                    大于: "大于",
                    图片链接: "图片链接",
                    不是图片: "不是图片",
                    返回结果: "返回结果",
                    上传图片超时: "上传图片超时",
                    上传图片错误: "上传图片错误",
                    上传图片失败: "上传图片失败",
                    插入图片错误: "插入图片错误",
                    一次最多上传: "一次最多上传",
                    下载链接失败: "下载链接失败",
                    图片验证未通过: "图片验证未通过",
                    服务器返回状态: "服务器返回状态",
                    上传图片返回结果错误: "上传图片返回结果错误",
                    请替换为支持的图片类型: "请替换为支持的图片类型",
                    您插入的网络图片无法识别: "您插入的网络图片无法识别",
                    您刚才插入的图片链接未通过编辑器校验: "您刚才插入的图片链接未通过编辑器校验",
                    插入视频错误: "插入视频错误",
                    视频链接: "视频链接",
                    不是视频: "不是视频",
                    视频验证未通过: "视频验证未通过",
                    个视频: "个视频",
                    上传视频超时: "上传视频超时",
                    上传视频错误: "上传视频错误",
                    上传视频失败: "上传视频失败",
                    上传视频返回结果错误: "上传视频返回结果错误"
                  }
                }
              },
              en: {
                wangEditor: {
                  重置: "reset",
                  插入: "insert",
                  默认: "default",
                  创建: "create",
                  修改: "edit",
                  如: "like",
                  请输入正文: "please enter the text",
                  menus: {
                    title: {
                      标题: "head",
                      加粗: "bold",
                      字号: "font size",
                      字体: "font family",
                      斜体: "italic",
                      下划线: "underline",
                      删除线: "strikethrough",
                      缩进: "indent",
                      行高: "line heihgt",
                      文字颜色: "font color",
                      背景色: "background",
                      链接: "link",
                      序列: "numbered list",
                      对齐: "align",
                      引用: "quote",
                      表情: "emoticons",
                      图片: "image",
                      视频: "media",
                      表格: "table",
                      代码: "code",
                      分割线: "split line",
                      恢复: "undo",
                      撤销: "redo",
                      全屏: "fullscreen",
                      取消全屏: "cancel fullscreen",
                      待办事项: "todo"
                    },
                    dropListMenu: {
                      设置标题: "title",
                      背景颜色: "background",
                      文字颜色: "font color",
                      设置字号: "font size",
                      设置字体: "font family",
                      设置缩进: "indent",
                      对齐方式: "align",
                      设置行高: "line heihgt",
                      序列: "list",
                      head: {
                        正文: "text"
                      },
                      indent: {
                        增加缩进: "indent",
                        减少缩进: "outdent"
                      },
                      justify: {
                        靠左: "left",
                        居中: "center",
                        靠右: "right",
                        两端: "justify"
                      },
                      list: {
                        无序列表: "unordered",
                        有序列表: "ordered"
                      }
                    },
                    panelMenus: {
                      emoticon: {
                        表情: "emoji",
                        手势: "gesture"
                      },
                      image: {
                        上传图片: "upload image",
                        网络图片: "network image",
                        图片地址: "image link",
                        图片文字说明: "image alt",
                        跳转链接: "hyperlink"
                      },
                      link: {
                        链接: "link",
                        链接文字: "link text",
                        取消链接: "unlink",
                        查看链接: "view links"
                      },
                      video: {
                        插入视频: "insert video",
                        上传视频: "upload local video"
                      },
                      table: {
                        行: "rows",
                        列: "columns",
                        的: " ",
                        表格: "table",
                        添加行: "insert row",
                        删除行: "delete row",
                        添加列: "insert column",
                        删除列: "delete column",
                        设置表头: "set header",
                        取消表头: "cancel header",
                        插入表格: "insert table",
                        删除表格: "delete table"
                      },
                      code: {
                        删除代码: "delete code",
                        修改代码: "edit code",
                        插入代码: "insert code"
                      }
                    }
                  },
                  validate: {
                    张图片: "images",
                    大于: "greater than",
                    图片链接: "image link",
                    不是图片: "is not image",
                    返回结果: "return results",
                    上传图片超时: "upload image timeout",
                    上传图片错误: "upload image error",
                    上传图片失败: "upload image failed",
                    插入图片错误: "insert image error",
                    一次最多上传: "once most at upload",
                    下载链接失败: "download link failed",
                    图片验证未通过: "image validate failed",
                    服务器返回状态: "server return status",
                    上传图片返回结果错误: "upload image return results error",
                    请替换为支持的图片类型: "please replace with a supported image type",
                    您插入的网络图片无法识别: "the network picture you inserted is not recognized",
                    您刚才插入的图片链接未通过编辑器校验: "the image link you just inserted did not pass the editor verification",
                    插入视频错误: "insert video error",
                    视频链接: "video link",
                    不是视频: "is not video",
                    视频验证未通过: "video validate failed",
                    个视频: "videos",
                    上传视频超时: "upload video timeout",
                    上传视频错误: "upload video error",
                    上传视频失败: "upload video failed",
                    上传视频返回结果错误: "upload video return results error"
                  }
                }
              }
            }
          };
        },
        /* 278 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(6);
          function a() {
            return !!(r.UA.isIE() || r.UA.isOldEdge);
          }
          n.default = {
            compatibleMode: a,
            historyMaxSize: 30
          };
        },
        /* 279 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(7);
          n.default = {
            // 插入网络视频前的回调函数
            onlineVideoCheck: function(f) {
              return !0;
            },
            // 插入网络视频成功之后的回调函数
            onlineVideoCallback: r.EMPTY_FN,
            // 显示“插入视频”
            showLinkVideo: !0,
            // accept
            uploadVideoAccept: ["mp4"],
            // 服务端地址
            uploadVideoServer: "",
            // 上传视频的最大体积，默认 1024M
            uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
            // 一次最多上传多少个视频
            // uploadVideoMaxLength: 2,
            // 自定义上传视频的名称
            uploadVideoName: "",
            // 上传视频自定义参数
            uploadVideoParams: {},
            // 自定义参数拼接到 url 中
            uploadVideoParamsWithUrl: !1,
            // 上传视频自定义 header
            uploadVideoHeaders: {},
            // 钩子函数
            uploadVideoHooks: {},
            // 上传视频超时时间 ms 默认2个小时
            uploadVideoTimeout: 1e3 * 60 * 60 * 2,
            // 跨域带 cookie
            withVideoCredentials: !1,
            // 自定义上传
            customUploadVideo: null,
            // 自定义插入视频
            customInsertVideo: null
          };
        },
        /* 280 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(17));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = t(6), d = t(7), p = (
            /** @class */
            function() {
              function c(l) {
                this._currentRange = null, this.editor = l;
              }
              return c.prototype.getRange = function() {
                return this._currentRange;
              }, c.prototype.saveRange = function(l) {
                if (l) {
                  this._currentRange = l;
                  return;
                }
                var u = window.getSelection();
                if (u.rangeCount !== 0) {
                  var s = u.getRangeAt(0), m = this.getSelectionContainerElem(s);
                  if (m != null && m.length && !(m.attr("contenteditable") === "false" || m.parentUntil("[contenteditable=false]"))) {
                    var v = this.editor, h = v.$textElem;
                    if (h.isContain(m)) {
                      if (h.elems[0] === m.elems[0]) {
                        var A;
                        if ((0, r.default)(A = h.html()).call(A) === d.EMPTY_P) {
                          var y = h.children(), x = y == null ? void 0 : y.last();
                          v.selection.createRangeByElem(x, !0, !0), v.selection.restoreSelection();
                        }
                      }
                      this._currentRange = s;
                    }
                  }
                }
              }, c.prototype.collapseRange = function(l) {
                l === void 0 && (l = !1);
                var u = this._currentRange;
                u && u.collapse(l);
              }, c.prototype.getSelectionText = function() {
                var l = this._currentRange;
                return l ? l.toString() : "";
              }, c.prototype.getSelectionContainerElem = function(l) {
                var u;
                u = l || this._currentRange;
                var s;
                if (u)
                  return s = u.commonAncestorContainer, f.default(s.nodeType === 1 ? s : s.parentNode);
              }, c.prototype.getSelectionStartElem = function(l) {
                var u;
                u = l || this._currentRange;
                var s;
                if (u)
                  return s = u.startContainer, f.default(s.nodeType === 1 ? s : s.parentNode);
              }, c.prototype.getSelectionEndElem = function(l) {
                var u;
                u = l || this._currentRange;
                var s;
                if (u)
                  return s = u.endContainer, f.default(s.nodeType === 1 ? s : s.parentNode);
              }, c.prototype.isSelectionEmpty = function() {
                var l = this._currentRange;
                return !!(l && l.startContainer && l.startContainer === l.endContainer && l.startOffset === l.endOffset);
              }, c.prototype.restoreSelection = function() {
                var l = window.getSelection(), u = this._currentRange;
                l && u && (l.removeAllRanges(), l.addRange(u));
              }, c.prototype.createEmptyRange = function() {
                var l = this.editor, u = this.getRange(), s;
                if (u && this.isSelectionEmpty())
                  try {
                    g.UA.isWebkit() ? (l.cmd.do("insertHTML", "&#8203;"), u.setEnd(u.endContainer, u.endOffset + 1), this.saveRange(u)) : (s = f.default("<strong>&#8203;</strong>"), l.cmd.do("insertElem", s), this.createRangeByElem(s, !0));
                  } catch {
                  }
              }, c.prototype.createRangeByElems = function(l, u) {
                var s = window.getSelection ? window.getSelection() : document.getSelection();
                s == null || s.removeAllRanges();
                var m = document.createRange();
                m.setStart(l, 0), m.setEnd(u, u.childNodes.length || 1), this.saveRange(m), this.restoreSelection();
              }, c.prototype.createRangeByElem = function(l, u, s) {
                if (l.length) {
                  var m = l.elems[0], v = document.createRange();
                  s ? v.selectNodeContents(m) : v.selectNode(m), u != null && (v.collapse(u), u || (this.saveRange(v), this.editor.selection.moveCursor(m))), this.saveRange(v);
                }
              }, c.prototype.getSelectionRangeTopNodes = function() {
                var l, u, s, m = (l = this.getSelectionStartElem()) === null || l === void 0 ? void 0 : l.getNodeTop(this.editor), v = (u = this.getSelectionEndElem()) === null || u === void 0 ? void 0 : u.getNodeTop(this.editor);
                return s = this.recordSelectionNodes(f.default(m), f.default(v)), s;
              }, c.prototype.moveCursor = function(l, u) {
                var s, m = this.getRange(), v = l.nodeType === 3 ? (s = l.nodeValue) === null || s === void 0 ? void 0 : s.length : l.childNodes.length;
                (g.UA.isFirefox || g.UA.isIE()) && v !== 0 && (l.nodeType === 3 || l.childNodes[v - 1].nodeName === "BR") && (v = v - 1);
                var h = u ?? v;
                m && l && (m.setStart(l, h), m.setEnd(l, h), this.restoreSelection());
              }, c.prototype.getCursorPos = function() {
                var l = window.getSelection();
                return l == null ? void 0 : l.anchorOffset;
              }, c.prototype.clearWindowSelectionRange = function() {
                var l = window.getSelection();
                l && l.removeAllRanges();
              }, c.prototype.recordSelectionNodes = function(l, u) {
                var s = [], m = !0;
                try {
                  for (var v = l, h = this.editor.$textElem; m; ) {
                    var A = v == null ? void 0 : v.getNodeTop(this.editor);
                    A.getNodeName() === "BODY" && (m = !1), A.length > 0 && (s.push(f.default(v)), u != null && u.equal(A) || h.equal(A) ? m = !1 : v = A.getNextSibling());
                  }
                } catch {
                  m = !1;
                }
                return s;
              }, c.prototype.setRangeToElem = function(l) {
                var u = this.getRange();
                u == null || u.setStart(l, 0), u == null || u.setEnd(l, 0);
              }, c;
            }()
          );
          n.default = p;
        },
        /* 281 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = (
            /** @class */
            function() {
              function g(d) {
                this.editor = d;
              }
              return g.prototype.do = function(d, p) {
                var c = this.editor;
                c.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
                var l = c.selection;
                if (l.getRange()) {
                  switch (l.restoreSelection(), d) {
                    case "insertHTML":
                      this.insertHTML(p);
                      break;
                    case "insertElem":
                      this.insertElem(p);
                      break;
                    default:
                      this.execCommand(d, p);
                      break;
                  }
                  c.menus.changeActive(), l.saveRange(), l.restoreSelection();
                }
              }, g.prototype.insertHTML = function(d) {
                var p = this.editor, c = p.selection.getRange();
                if (c != null) {
                  if (this.queryCommandSupported("insertHTML"))
                    this.execCommand("insertHTML", d);
                  else if (c.insertNode) {
                    if (c.deleteContents(), a.default(d).elems.length > 0)
                      c.insertNode(a.default(d).elems[0]);
                    else {
                      var l = document.createElement("p");
                      l.appendChild(document.createTextNode(d)), c.insertNode(l);
                    }
                    p.selection.collapseRange();
                  }
                }
              }, g.prototype.insertElem = function(d) {
                var p = this.editor, c = p.selection.getRange();
                c != null && c.insertNode && (c.deleteContents(), c.insertNode(d.elems[0]));
              }, g.prototype.execCommand = function(d, p) {
                document.execCommand(d, !1, p);
              }, g.prototype.queryCommandValue = function(d) {
                return document.queryCommandValue(d);
              }, g.prototype.queryCommandState = function(d) {
                return document.queryCommandState(d);
              }, g.prototype.queryCommandSupported = function(d) {
                return document.queryCommandSupported(d);
              }, g;
            }()
          );
          n.default = f;
        },
        /* 282 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(31)), a = e(t(4)), f = e(t(17)), g = e(t(27)), d = e(t(46));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var p = t(2), c = p.__importDefault(t(3)), l = p.__importDefault(t(287)), u = t(6), s = p.__importDefault(t(299)), m = p.__importDefault(t(300)), v = t(7), h = (
            /** @class */
            function() {
              function A(y) {
                this.editor = y, this.eventHooks = {
                  onBlurEvents: [],
                  changeEvents: [],
                  dropEvents: [],
                  clickEvents: [],
                  keydownEvents: [],
                  keyupEvents: [],
                  tabUpEvents: [],
                  tabDownEvents: [],
                  enterUpEvents: [],
                  enterDownEvents: [],
                  deleteUpEvents: [],
                  deleteDownEvents: [],
                  pasteEvents: [],
                  linkClickEvents: [],
                  codeClickEvents: [],
                  textScrollEvents: [],
                  toolbarClickEvents: [],
                  imgClickEvents: [],
                  imgDragBarMouseDownEvents: [],
                  tableClickEvents: [],
                  menuClickEvents: [],
                  dropListMenuHoverEvents: [],
                  splitLineEvents: [],
                  videoClickEvents: []
                };
              }
              return A.prototype.init = function() {
                this._saveRange(), this._bindEventHooks(), l.default(this);
              }, A.prototype.togglePlaceholder = function() {
                var y, x = this.html(), S = (0, r.default)(y = this.editor.$textContainerElem).call(y, ".placeholder");
                S.hide(), !this.editor.isComposing && (!x || x === " ") && S.show();
              }, A.prototype.clear = function() {
                this.html(v.EMPTY_P);
              }, A.prototype.html = function(y) {
                var x = this.editor, S = x.$textElem;
                if (y == null) {
                  var D = S.html();
                  D = D.replace(/\u200b/gm, ""), D = D.replace(/<p><\/p>/gim, ""), D = D.replace(v.EMPTY_P_LAST_REGEX, ""), D = D.replace(v.EMPTY_P_REGEX, "<p>");
                  var P = D.match(/<(img|br|hr|input)[^>]*>/gi);
                  return P !== null && (0, a.default)(P).call(P, function(C) {
                    C.match(/\/>/) || (D = D.replace(C, C.substring(0, C.length - 1) + "/>"));
                  }), D;
                }
                y = (0, f.default)(y).call(y), y === "" && (y = v.EMPTY_P), (0, g.default)(y).call(y, "<") !== 0 && (y = "<p>" + y + "</p>"), S.html(y), x.initSelection();
              }, A.prototype.setJSON = function(y) {
                var x = m.default(y).children(), S = this.editor, D = S.$textElem;
                x && D.replaceChildAll(x);
              }, A.prototype.getJSON = function() {
                var y = this.editor, x = y.$textElem;
                return s.default(x);
              }, A.prototype.text = function(y) {
                var x = this.editor, S = x.$textElem;
                if (y == null) {
                  var D = S.text();
                  return D = D.replace(/\u200b/gm, ""), D;
                }
                S.text("<p>" + y + "</p>"), x.initSelection();
              }, A.prototype.append = function(y) {
                var x = this.editor;
                (0, g.default)(y).call(y, "<") !== 0 && (y = "<p>" + y + "</p>"), this.html(this.html() + y), x.initSelection();
              }, A.prototype._saveRange = function() {
                var y = this.editor, x = y.$textElem, S = c.default(document);
                function D() {
                  y.selection.saveRange(), y.menus.changeActive();
                }
                x.on("keyup", D);
                function P() {
                  D(), x.off("click", P);
                }
                x.on("click", P);
                function C() {
                  D(), S.off("mouseup", C);
                }
                function E() {
                  S.on("mouseup", C), x.off("mouseleave", E);
                }
                x.on("mousedown", function() {
                  x.on("mouseleave", E);
                }), x.on("mouseup", function(T) {
                  x.off("mouseleave", E), (0, d.default)(function() {
                    var R = y.selection, N = R.getRange();
                    N !== null && D();
                  }, 0);
                });
              }, A.prototype._bindEventHooks = function() {
                var y = this.editor, x = y.$textElem, S = this.eventHooks;
                x.on("click", function(P) {
                  var C = S.clickEvents;
                  (0, a.default)(C).call(C, function(E) {
                    return E(P);
                  });
                }), x.on("keyup", function(P) {
                  if (P.keyCode === 13) {
                    var C = S.enterUpEvents;
                    (0, a.default)(C).call(C, function(E) {
                      return E(P);
                    });
                  }
                }), x.on("keyup", function(P) {
                  var C = S.keyupEvents;
                  (0, a.default)(C).call(C, function(E) {
                    return E(P);
                  });
                }), x.on("keydown", function(P) {
                  var C = S.keydownEvents;
                  (0, d.default)(function() {
                    (0, a.default)(C).call(C, function(E) {
                      return E(P);
                    });
                  });
                }), x.on("keyup", function(P) {
                  if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                    var C = S.deleteUpEvents;
                    (0, a.default)(C).call(C, function(E) {
                      return E(P);
                    });
                  }
                }), x.on("keydown", function(P) {
                  if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                    var C = S.deleteDownEvents;
                    (0, a.default)(C).call(C, function(E) {
                      return E(P);
                    });
                  }
                }), x.on("paste", function(P) {
                  if (!u.UA.isIE()) {
                    P.preventDefault();
                    var C = S.pasteEvents;
                    (0, a.default)(C).call(C, function(E) {
                      return E(P);
                    });
                  }
                }), x.on("keydown", function(P) {
                  // 编辑器处于聚焦状态下（多编辑器实例） || 当前处于兼容模式（兼容模式撤销/恢复后不聚焦，所以直接过，但会造成多编辑器同时撤销/恢复）
                  (y.isFocus || y.isCompatibleMode) && (P.ctrlKey || P.metaKey) && P.keyCode === 90 && (P.preventDefault(), P.shiftKey ? y.history.restore() : y.history.revoke());
                }), x.on("keyup", function(P) {
                  if (P.keyCode === 9) {
                    P.preventDefault();
                    var C = S.tabUpEvents;
                    (0, a.default)(C).call(C, function(E) {
                      return E(P);
                    });
                  }
                }), x.on("keydown", function(P) {
                  if (P.keyCode === 9) {
                    P.preventDefault();
                    var C = S.tabDownEvents;
                    (0, a.default)(C).call(C, function(E) {
                      return E(P);
                    });
                  }
                }), x.on(
                  "scroll",
                  // 使用节流
                  u.throttle(function(P) {
                    var C = S.textScrollEvents;
                    (0, a.default)(C).call(C, function(E) {
                      return E(P);
                    });
                  }, 100)
                );
                function D(P) {
                  P.preventDefault();
                }
                c.default(document).on("dragleave", D).on("drop", D).on("dragenter", D).on("dragover", D), y.beforeDestroy(function() {
                  c.default(document).off("dragleave", D).off("drop", D).off("dragenter", D).off("dragover", D);
                }), x.on("drop", function(P) {
                  P.preventDefault();
                  var C = S.dropEvents;
                  (0, a.default)(C).call(C, function(E) {
                    return E(P);
                  });
                }), x.on("click", function(P) {
                  var C = null, E = P.target, T = c.default(E);
                  if (T.getNodeName() === "A")
                    C = T;
                  else {
                    var R = T.parentUntil("a");
                    R != null && (C = R);
                  }
                  if (C) {
                    var N = S.linkClickEvents;
                    (0, a.default)(N).call(N, function(M) {
                      return M(C);
                    });
                  }
                }), x.on("click", function(P) {
                  var C = null, E = P.target, T = c.default(E);
                  if (T.getNodeName() === "IMG" && !T.elems[0].getAttribute("data-emoji") && (P.stopPropagation(), C = T), !!C) {
                    var R = S.imgClickEvents;
                    (0, a.default)(R).call(R, function(N) {
                      return N(C);
                    });
                  }
                }), x.on("click", function(P) {
                  var C = null, E = P.target, T = c.default(E);
                  if (T.getNodeName() === "PRE")
                    C = T;
                  else {
                    var R = T.parentUntil("pre");
                    R !== null && (C = R);
                  }
                  if (C) {
                    var N = S.codeClickEvents;
                    (0, a.default)(N).call(N, function(M) {
                      return M(C);
                    });
                  }
                }), x.on("click", function(P) {
                  var C = null, E = P.target, T = c.default(E);
                  if (T.getNodeName() === "HR" && (C = T), !!C) {
                    y.selection.createRangeByElem(C), y.selection.restoreSelection();
                    var R = S.splitLineEvents;
                    (0, a.default)(R).call(R, function(N) {
                      return N(C);
                    });
                  }
                }), y.$toolbarElem.on("click", function(P) {
                  var C = S.toolbarClickEvents;
                  (0, a.default)(C).call(C, function(E) {
                    return E(P);
                  });
                }), y.$textContainerElem.on("mousedown", function(P) {
                  var C = P.target, E = c.default(C);
                  if (E.hasClass("w-e-img-drag-rb")) {
                    var T = S.imgDragBarMouseDownEvents;
                    (0, a.default)(T).call(T, function(R) {
                      return R();
                    });
                  }
                }), x.on("click", function(P) {
                  var C = null, E = P.target;
                  if (C = c.default(E).parentUntilEditor("TABLE", y, E), !!C) {
                    var T = S.tableClickEvents;
                    (0, a.default)(T).call(T, function(R) {
                      return R(C, P);
                    });
                  }
                }), x.on("keydown", function(P) {
                  if (P.keyCode === 13) {
                    var C = S.enterDownEvents;
                    (0, a.default)(C).call(C, function(E) {
                      return E(P);
                    });
                  }
                }), x.on("click", function(P) {
                  var C = null, E = P.target, T = c.default(E);
                  if (T.getNodeName() === "VIDEO" && (P.stopPropagation(), C = T), !!C) {
                    var R = S.videoClickEvents;
                    (0, a.default)(R).call(R, function(N) {
                      return N(C);
                    });
                  }
                });
              }, A;
            }()
          );
          n.default = h;
        },
        /* 283 */
        /***/
        function(o, n, t) {
          var e = t(284);
          o.exports = e;
        },
        /* 284 */
        /***/
        function(o, n, t) {
          var e = t(285), i = Array.prototype;
          o.exports = function(r) {
            var a = r.find;
            return r === i || r instanceof Array && a === i.find ? e : a;
          };
        },
        /* 285 */
        /***/
        function(o, n, t) {
          t(286);
          var e = t(15);
          o.exports = e("Array").find;
        },
        /* 286 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(30).find, r = t(82), a = t(22), f = "find", g = !0, d = a(f);
          f in [] && Array(1)[f](function() {
            g = !1;
          }), e({ target: "Array", proto: !0, forced: g || !d }, {
            find: function(c) {
              return i(this, c, arguments.length > 1 ? arguments[1] : void 0);
            }
          }), r(f);
        },
        /* 287 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(288)), f = r.__importStar(t(289)), g = r.__importDefault(t(290)), d = r.__importDefault(t(291)), p = r.__importDefault(t(298));
          function c(l) {
            var u = l.editor, s = l.eventHooks;
            a.default(u, s.enterUpEvents, s.enterDownEvents), f.default(u, s.deleteUpEvents, s.deleteDownEvents), f.cutToKeepP(u, s.keyupEvents), g.default(u, s.tabDownEvents), d.default(u, s.pasteEvents), p.default(u, s.imgClickEvents);
          }
          n.default = c;
        },
        /* 288 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(27));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = t(7), g = a.__importDefault(t(3));
          function d(p, c, l) {
            function u(v) {
              var h, A = g.default(f.EMPTY_P);
              if (A.insertBefore(v), (0, r.default)(h = v.html()).call(h, "<img") >= 0) {
                A.remove();
                return;
              }
              p.selection.createRangeByElem(A, !0, !0), p.selection.restoreSelection(), v.remove();
            }
            function s() {
              var v = p.$textElem, h = p.selection.getSelectionContainerElem(), A = h.parent();
              if (A.html() === "<code><br></code>") {
                u(A);
                return;
              }
              if (h.getNodeName() === "FONT" && h.text() === "" && h.attr("face") === "monospace") {
                u(A);
                return;
              }
              if (A.equal(v)) {
                var y = h.getNodeName();
                y === "P" && h.attr("data-we-empty-p") === null || h.text() || u(h);
              }
            }
            c.push(s);
            function m(v) {
              var h;
              p.selection.saveRange((h = getSelection()) === null || h === void 0 ? void 0 : h.getRangeAt(0));
              var A = p.selection.getSelectionContainerElem();
              A.id === p.textElemId && (v.preventDefault(), p.cmd.do("insertHTML", "<p><br></p>"));
            }
            l.push(m);
          }
          n.default = d;
        },
        /* 289 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(17)), a = e(t(44));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.cutToKeepP = void 0;
          var f = t(2), g = t(7), d = f.__importDefault(t(3));
          function p(l, u, s) {
            function m() {
              var h = l.$textElem, A = l.$textElem.html(), y = l.$textElem.text(), x = (0, r.default)(A).call(A), S = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', g.EMPTY_P];
              if (/^\s*$/.test(y) && (!x || (0, a.default)(S).call(S, x))) {
                h.html(g.EMPTY_P);
                var D = h.getNode();
                l.selection.createRangeByElems(D.childNodes[0], D.childNodes[0]);
                var P = l.selection.getSelectionContainerElem();
                l.selection.restoreSelection(), l.selection.moveCursor(P.getNode(), 0);
              }
            }
            u.push(m);
            function v(h) {
              var A, y = l.$textElem, x = (0, r.default)(A = y.html().toLowerCase()).call(A);
              if (x === g.EMPTY_P) {
                h.preventDefault();
                return;
              }
            }
            s.push(v);
          }
          function c(l, u) {
            function s(m) {
              var v;
              if (m.keyCode === 88) {
                var h = l.$textElem, A = (0, r.default)(v = h.html().toLowerCase()).call(v);
                if (!A || A === "<br>") {
                  var y = d.default(g.EMPTY_P);
                  h.html(" "), h.append(y), l.selection.createRangeByElem(y, !1, !0), l.selection.restoreSelection(), l.selection.moveCursor(y.getNode(), 0);
                }
              }
            }
            u.push(s);
          }
          n.cutToKeepP = c, n.default = p;
        },
        /* 290 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          function r(a, f) {
            function g() {
              if (a.cmd.queryCommandSupported("insertHTML")) {
                var d = a.selection.getSelectionContainerElem();
                if (d) {
                  var p = d.parent(), c = d.getNodeName(), l = p.getNodeName();
                  c == "CODE" || l === "CODE" || l === "PRE" || /hljs/.test(l) ? a.cmd.do("insertHTML", a.config.languageTab) : a.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
                }
              }
            }
            f.push(g);
          }
          n.default = r;
        },
        /* 291 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(17));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(130), f = t(6), g = t(7);
          function d(s) {
            var m, v = (0, r.default)(m = s.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(m), h = document.createElement("div");
            return h.innerHTML = v, h.innerHTML.replace(/<p><\/p>/gim, "");
          }
          function p(s) {
            var m = s.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
            return m;
          }
          function c(s) {
            var m;
            if (s === "") return !1;
            var v = document.createElement("div");
            return v.innerHTML = s, ((m = v.firstChild) === null || m === void 0 ? void 0 : m.nodeName) === "P";
          }
          function l(s) {
            if (!(s != null && s.length)) return !1;
            var m = s.elems[0];
            return m.nodeName === "P" && m.innerHTML === "<br>";
          }
          function u(s, m) {
            function v(h) {
              var A = s.config, y = A.pasteFilterStyle, x = A.pasteIgnoreImg, S = A.pasteTextHandle, D = a.getPasteHtml(h, y, x), P = a.getPasteText(h);
              P = P.replace(/\n/gm, "<br>");
              var C = s.selection.getSelectionContainerElem();
              if (C) {
                var E = C == null ? void 0 : C.getNodeName(), T = C == null ? void 0 : C.getNodeTop(s), R = "";
                if (T.elems[0] && (R = T == null ? void 0 : T.getNodeName()), E === "CODE" || R === "PRE") {
                  S && f.isFunction(S) && (P = "" + (S(P) || "")), s.cmd.do("insertHTML", p(P));
                  return;
                }
                if (g.urlRegex.test(P) && y) {
                  S && f.isFunction(S) && (P = "" + (S(P) || ""));
                  var N = g.urlRegex.exec(P)[0], M = P.replace(g.urlRegex, "");
                  return s.cmd.do("insertHTML", '<a href="' + N + '" target="_blank">' + N + "</a>" + M);
                }
                if (D)
                  try {
                    S && f.isFunction(S) && (D = "" + (S(D) || ""));
                    var B = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(D);
                    if (B && y)
                      s.cmd.do("insertHTML", "" + d(P));
                    else {
                      var F = d(D);
                      if (c(F)) {
                        var O = s.$textElem;
                        if (s.cmd.do("insertHTML", F), O.equal(C)) {
                          s.selection.createEmptyRange();
                          return;
                        }
                        l(T) && T.remove();
                      } else {
                        var b = /^<img [^>]*src=['"]([^'"]+)[^>]*>$/g;
                        b.test(F) || s.cmd.do("insertHTML", F);
                      }
                    }
                  } catch {
                    S && f.isFunction(S) && (P = "" + (S(P) || "")), s.cmd.do("insertHTML", "" + d(P));
                  }
              }
            }
            m.push(v);
          }
          n.default = u;
        },
        /* 292 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(17)), a = e(t(4)), f = e(t(44));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var g = t(2), d = t(293), p = g.__importDefault(t(297));
          function c(v) {
            var h = /<span>.*?<\/span>/gi, A = /<span>(.*?)<\/span>/;
            return v.replace(h, function(y) {
              var x = y.match(A);
              return x == null ? "" : x[1];
            });
          }
          function l(v, h) {
            var A;
            return v = (0, r.default)(A = v.toLowerCase()).call(A), !!(d.IGNORE_TAGS.has(v) || h && v === "img");
          }
          function u(v, h) {
            var A = "";
            A = "<" + v;
            var y = [];
            (0, a.default)(h).call(h, function(S) {
              y.push(S.name + '="' + S.value + '"');
            }), y.length > 0 && (A = A + " " + y.join(" "));
            var x = d.EMPTY_TAGS.has(v);
            return A = A + (x ? "/" : "") + ">", A;
          }
          function s(v) {
            return "</" + v + ">";
          }
          function m(v, h, A) {
            h === void 0 && (h = !0), A === void 0 && (A = !1);
            var y = [], x = "";
            function S(E) {
              E = (0, r.default)(E).call(E), E && (d.EMPTY_TAGS.has(E) || (x = E));
            }
            function D() {
              x = "";
            }
            var P = new p.default();
            P.parse(v, {
              startElement: function(T, R) {
                if (S(T), !l(T, A)) {
                  var N = d.NECESSARY_ATTRS.get(T) || [], M = [];
                  (0, a.default)(R).call(R, function(F) {
                    var O = F.name;
                    if (O === "style") {
                      h || M.push(F);
                      return;
                    }
                    (0, f.default)(N).call(N, O) !== !1 && M.push(F);
                  });
                  var B = u(T, M);
                  y.push(B);
                }
              },
              characters: function(T) {
                T && (l(x, A) || y.push(T));
              },
              endElement: function(T) {
                if (!l(T, A)) {
                  var R = s(T);
                  y.push(R), D();
                }
              },
              comment: function(T) {
                S(T);
              }
            });
            var C = y.join("");
            return C = c(C), C;
          }
          n.default = m;
        },
        /* 293 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(131)), a = e(t(120));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.TOP_LEVEL_TAGS = n.EMPTY_TAGS = n.NECESSARY_ATTRS = n.IGNORE_TAGS = void 0, n.IGNORE_TAGS = new r.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), n.NECESSARY_ATTRS = new a.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), n.EMPTY_TAGS = new r.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), n.TOP_LEVEL_TAGS = new r.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
        },
        /* 294 */
        /***/
        function(o, n, t) {
          var e = t(295);
          o.exports = e;
        },
        /* 295 */
        /***/
        function(o, n, t) {
          t(296), t(61), t(50), t(54);
          var e = t(9);
          o.exports = e.Set;
        },
        /* 296 */
        /***/
        function(o, n, t) {
          var e = t(121), i = t(123);
          o.exports = e("Set", function(r) {
            return function() {
              return r(this, arguments.length ? arguments[0] : void 0);
            };
          }, i);
        },
        /* 297 */
        /***/
        function(o, n) {
          function t() {
          }
          t.prototype = {
            handler: null,
            // regexps
            startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
            endTagRe: /^<\/([^>\s]+)[^>]*>/m,
            attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
            parse: function(e, i) {
              i && (this.contentHandler = i);
              for (var r, a, f, g = !1, d = this; e.length > 0; )
                e.substring(0, 4) == "<!--" ? (f = e.indexOf("-->"), f != -1 ? (this.contentHandler.comment(e.substring(4, f)), e = e.substring(f + 3), g = !1) : g = !0) : e.substring(0, 2) == "</" ? this.endTagRe.test(e) ? (r = RegExp.lastMatch, a = RegExp.rightContext, r.replace(this.endTagRe, function() {
                  return d.parseEndTag.apply(d, arguments);
                }), e = a, g = !1) : g = !0 : e.charAt(0) == "<" && (this.startTagRe.test(e) ? (r = RegExp.lastMatch, a = RegExp.rightContext, r.replace(this.startTagRe, function() {
                  return d.parseStartTag.apply(d, arguments);
                }), e = a, g = !1) : g = !0), g && (f = e.indexOf("<"), f == -1 ? (this.contentHandler.characters(e), e = "") : (this.contentHandler.characters(e.substring(0, f)), e = e.substring(f))), g = !0;
            },
            parseStartTag: function(e, i, r) {
              var a = this.parseAttributes(i, r);
              this.contentHandler.startElement(i, a);
            },
            parseEndTag: function(e, i) {
              this.contentHandler.endElement(i);
            },
            parseAttributes: function(e, i) {
              var r = this, a = [];
              return i.replace(this.attrRe, function(f, g, d, p, c, l, u, s) {
                a.push(r.parseAttribute(e, f, g, d, p, c, l, u, s));
              }), a;
            },
            parseAttribute: function(e, i, r) {
              var a = "";
              arguments[7] ? a = arguments[8] : arguments[5] ? a = arguments[6] : arguments[3] && (a = arguments[4]);
              var f = !a && !arguments[3];
              return { name: r, value: f ? null : a };
            }
          }, o.exports = t;
        },
        /* 298 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          function r(a, f) {
            function g(d) {
              a.selection.createRangeByElem(d), a.selection.restoreSelection();
            }
            f.push(g);
          }
          n.default = r;
        },
        /* 299 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = t(6), g = a.__importDefault(t(3));
          function d(p) {
            var c = [], l = p.childNodes() || [];
            return (0, r.default)(l).call(l, function(u) {
              var s, m = u.nodeType;
              if (m === 3 && (s = u.textContent || "", s = f.replaceHtmlSymbol(s)), m === 1) {
                s = {}, s = s, s.tag = u.nodeName.toLowerCase();
                for (var v = [], h = u.attributes, A = h.length || 0, y = 0; y < A; y++) {
                  var x = h[y];
                  v.push({
                    name: x.name,
                    value: x.value
                  });
                }
                s.attrs = v, s.children = d(g.default(u));
              }
              s && c.push(s);
            }), c;
          }
          n.default = d;
        },
        /* 300 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(92)), r = e(t(1)), a = e(t(4));
          (0, r.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(3));
          function d(p, c) {
            c === void 0 && (c = document.createElement("div"));
            var l = c;
            return (0, a.default)(p).call(p, function(u) {
              var s;
              if (typeof u == "string" && (s = document.createTextNode(u)), (0, i.default)(u) === "object") {
                var m;
                s = document.createElement(u.tag), (0, a.default)(m = u.attrs).call(m, function(v) {
                  g.default(s).attr(v.name, v.value);
                }), u.children && u.children.length > 0 && d(u.children, s.getRootNode());
              }
              s && l.appendChild(s);
            }), g.default(l);
          }
          n.default = d;
        },
        /* 301 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(89)), a = e(t(70)), f = e(t(44)), g = e(t(302)), d = e(t(4)), p = e(t(94)), c = e(t(132)), l = e(t(46)), u = e(t(57));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var s = t(2), m = s.__importDefault(t(87)), v = s.__importDefault(t(314)), h = s.__importDefault(t(3)), A = (
            /** @class */
            function() {
              function y(x) {
                this.editor = x, this.menuList = [], this.constructorList = v.default;
              }
              return y.prototype.extend = function(x, S) {
                !S || typeof S != "function" || (this.constructorList[x] = S);
              }, y.prototype.init = function() {
                var x, S, D = this, P = this.editor.config, C = P.excludeMenus;
                (0, r.default)(C) === !1 && (C = []), P.menus = (0, a.default)(x = P.menus).call(x, function(O) {
                  return (0, f.default)(C).call(C, O) === !1;
                });
                var E = (0, g.default)(m.default.globalCustomMenuConstructorList);
                E = (0, a.default)(E).call(E, function(O) {
                  return (0, f.default)(C).call(C, O);
                }), (0, d.default)(E).call(E, function(O) {
                  delete m.default.globalCustomMenuConstructorList[O];
                }), (0, d.default)(S = P.menus).call(S, function(O) {
                  var b = D.constructorList[O];
                  D._initMenuList(O, b);
                });
                for (var T = 0, R = (0, p.default)(m.default.globalCustomMenuConstructorList); T < R.length; T++) {
                  var N = R[T], M = N[0], B = N[1], F = B;
                  this._initMenuList(M, F);
                }
                this._addToToolbar(), P.showMenuTooltips && this._bindMenuTooltips();
              }, y.prototype._initMenuList = function(x, S) {
                var D;
                if (!(S == null || typeof S != "function"))
                  if ((0, c.default)(D = this.menuList).call(D, function(C) {
                    return C.key === x;
                  }))
                    console.warn("菜单名称重复:" + x);
                  else {
                    var P = new S(this.editor);
                    P.key = x, this.menuList.push(P);
                  }
              }, y.prototype._bindMenuTooltips = function() {
                var x = this.editor, S = x.$toolbarElem, D = x.config, P = D.menuTooltipPosition, C = h.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + P + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
                C.css("visibility", "hidden"), S.append(C), C.css("z-index", x.zIndex.get("tooltip"));
                var E = 0;
                function T() {
                  E && clearTimeout(E);
                }
                function R() {
                  T(), C.css("visibility", "hidden");
                }
                S.on("mouseover", function(N) {
                  var M = N.target, B = h.default(M), F, O;
                  if (B.isContain(S)) {
                    R();
                    return;
                  }
                  if (B.parentUntil(".w-e-droplist") != null)
                    R();
                  else if (B.attr("data-title"))
                    F = B.attr("data-title"), O = B;
                  else {
                    var b = B.parentUntil(".w-e-menu");
                    b != null && (F = b.attr("data-title"), O = b);
                  }
                  if (F && O) {
                    T();
                    var $ = O.getOffsetData();
                    C.text(x.i18next.t("menus.title." + F));
                    var H = C.getOffsetData(), j = $.left + $.width / 2 - H.width / 2;
                    C.css("left", j + "px"), P === "up" ? C.css("top", $.top - H.height - 8 + "px") : P === "down" && C.css("top", $.top + $.height + 8 + "px"), E = (0, l.default)(function() {
                      C.css("visibility", "visible");
                    }, 200);
                  } else
                    R();
                }).on("mouseleave", function() {
                  R();
                });
              }, y.prototype._addToToolbar = function() {
                var x, S = this.editor, D = S.$toolbarElem;
                (0, d.default)(x = this.menuList).call(x, function(P) {
                  var C = P.$elem;
                  C && D.append(C);
                });
              }, y.prototype.menuFind = function(x) {
                for (var S = this.menuList, D = 0, P = S.length; D < P; D++)
                  if (S[D].key === x) return S[D];
                return S[0];
              }, y.prototype.changeActive = function() {
                var x;
                (0, d.default)(x = this.menuList).call(x, function(S) {
                  var D;
                  (0, l.default)((0, u.default)(D = S.tryChangeActive).call(D, S), 100);
                });
              }, y;
            }()
          );
          n.default = A;
        },
        /* 302 */
        /***/
        function(o, n, t) {
          o.exports = t(303);
        },
        /* 303 */
        /***/
        function(o, n, t) {
          var e = t(304);
          o.exports = e;
        },
        /* 304 */
        /***/
        function(o, n, t) {
          t(305);
          var e = t(9);
          o.exports = e.Object.keys;
        },
        /* 305 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(29), r = t(52), a = t(11), f = a(function() {
            r(1);
          });
          e({ target: "Object", stat: !0, forced: f }, {
            keys: function(d) {
              return r(i(d));
            }
          });
        },
        /* 306 */
        /***/
        function(o, n, t) {
          var e = t(307);
          o.exports = e;
        },
        /* 307 */
        /***/
        function(o, n, t) {
          t(308);
          var e = t(9);
          o.exports = e.Object.entries;
        },
        /* 308 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(309).entries;
          e({ target: "Object", stat: !0 }, {
            entries: function(a) {
              return i(a);
            }
          });
        },
        /* 309 */
        /***/
        function(o, n, t) {
          var e = t(14), i = t(52), r = t(28), a = t(59).f, f = function(g) {
            return function(d) {
              for (var p = r(d), c = i(p), l = c.length, u = 0, s = [], m; l > u; )
                m = c[u++], (!e || a.call(p, m)) && s.push(g ? [m, p[m]] : p[m]);
              return s;
            };
          };
          o.exports = {
            // `Object.entries` method
            // https://tc39.github.io/ecma262/#sec-object.entries
            entries: f(!0),
            // `Object.values` method
            // https://tc39.github.io/ecma262/#sec-object.values
            values: f(!1)
          };
        },
        /* 310 */
        /***/
        function(o, n, t) {
          var e = t(311);
          o.exports = e;
        },
        /* 311 */
        /***/
        function(o, n, t) {
          var e = t(312), i = Array.prototype;
          o.exports = function(r) {
            var a = r.some;
            return r === i || r instanceof Array && a === i.some ? e : a;
          };
        },
        /* 312 */
        /***/
        function(o, n, t) {
          t(313);
          var e = t(15);
          o.exports = e("Array").some;
        },
        /* 313 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(30).some, r = t(67), a = t(22), f = r("some"), g = a("some");
          e({ target: "Array", proto: !0, forced: !f || !g }, {
            some: function(p) {
              return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 314 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(315)), f = r.__importDefault(t(316)), g = r.__importDefault(t(321)), d = r.__importDefault(t(326)), p = r.__importDefault(t(327)), c = r.__importDefault(t(328)), l = r.__importDefault(t(329)), u = r.__importDefault(t(331)), s = r.__importDefault(t(333)), m = r.__importDefault(t(334)), v = r.__importDefault(t(337)), h = r.__importDefault(t(338)), A = r.__importDefault(t(339)), y = r.__importDefault(t(350)), x = r.__importDefault(t(365)), S = r.__importDefault(t(369)), D = r.__importDefault(t(137)), P = r.__importDefault(t(378)), C = r.__importDefault(t(380)), E = r.__importDefault(t(381)), T = r.__importDefault(t(382)), R = r.__importDefault(t(401)), N = r.__importDefault(t(406)), M = r.__importDefault(t(409));
          n.default = {
            bold: a.default,
            head: f.default,
            italic: d.default,
            link: g.default,
            underline: p.default,
            strikeThrough: c.default,
            fontName: l.default,
            fontSize: u.default,
            justify: s.default,
            quote: m.default,
            backColor: v.default,
            foreColor: h.default,
            video: A.default,
            image: y.default,
            indent: x.default,
            emoticon: S.default,
            list: D.default,
            lineHeight: P.default,
            undo: C.default,
            redo: E.default,
            table: T.default,
            code: R.default,
            splitLine: N.default,
            todo: M.default
          };
        },
        /* 315 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(23)), f = r.__importDefault(t(3)), g = (
            /** @class */
            function(d) {
              r.__extends(p, d);
              function p(c) {
                var l = this, u = f.default(`<div class="w-e-menu" data-title="加粗">
                <i class="w-e-icon-bold"></i>
            </div>`);
                return l = d.call(this, u, c) || this, l;
              }
              return p.prototype.clickHandler = function() {
                var c = this.editor, l = c.selection.isSelectionEmpty();
                l && c.selection.createEmptyRange(), c.cmd.do("bold"), l && (c.selection.collapseRange(), c.selection.restoreSelection());
              }, p.prototype.tryChangeActive = function() {
                var c = this.editor;
                c.cmd.queryCommandState("bold") ? this.active() : this.unActive();
              }, p;
            }(a.default)
          );
          n.default = g;
        },
        /* 316 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(27)), a = e(t(31)), f = e(t(4)), g = e(t(317)), d = e(t(44));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var p = t(2), c = p.__importDefault(t(24)), l = p.__importDefault(t(3)), u = t(6), s = t(7), m = (
            /** @class */
            function(v) {
              p.__extends(h, v);
              function h(A) {
                var y = this, x = l.default('<div class="w-e-menu" data-title="标题"><i class="w-e-icon-header"></i></div>'), S = {
                  width: 100,
                  title: "设置标题",
                  type: "list",
                  list: [{
                    $elem: l.default("<h1>H1</h1>"),
                    value: "<h1>"
                  }, {
                    $elem: l.default("<h2>H2</h2>"),
                    value: "<h2>"
                  }, {
                    $elem: l.default("<h3>H3</h3>"),
                    value: "<h3>"
                  }, {
                    $elem: l.default("<h4>H4</h4>"),
                    value: "<h4>"
                  }, {
                    $elem: l.default("<h5>H5</h5>"),
                    value: "<h5>"
                  }, {
                    $elem: l.default("<p>" + A.i18next.t("menus.dropListMenu.head.正文") + "</p>"),
                    value: "<p>"
                  }],
                  clickHandler: function(C) {
                    y.command(C);
                  }
                };
                y = v.call(this, x, A, S) || this;
                var D = A.config.onCatalogChange;
                return D && (y.oldCatalogs = [], y.addListenerCatalog(), y.getCatalogs()), y;
              }
              return h.prototype.command = function(A) {
                var y = this.editor, x = y.selection.getSelectionContainerElem();
                if (x && y.$textElem.equal(x))
                  this.setMultilineHead(A);
                else {
                  var S;
                  if ((0, r.default)(S = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(S, l.default(x).getNodeName()) > -1)
                    return;
                  y.cmd.do("formatBlock", A);
                }
                A !== "<p>" && this.addUidForSelectionElem();
              }, h.prototype.addUidForSelectionElem = function() {
                var A = this.editor, y = A.selection.getSelectionContainerElem(), x = u.getRandomCode();
                l.default(y).attr("id", x);
              }, h.prototype.addListenerCatalog = function() {
                var A = this, y = this.editor;
                y.txt.eventHooks.changeEvents.push(function() {
                  A.getCatalogs();
                });
              }, h.prototype.getCatalogs = function() {
                var A = this.editor, y = this.editor.$textElem, x = A.config.onCatalogChange, S = (0, a.default)(y).call(y, "h1,h2,h3,h4,h5"), D = [];
                (0, f.default)(S).call(S, function(P, C) {
                  var E = l.default(P), T = E.attr("id"), R = E.getNodeName(), N = E.text();
                  T || (T = u.getRandomCode(), E.attr("id", T)), N && D.push({
                    tag: R,
                    id: T,
                    text: N
                  });
                }), (0, g.default)(this.oldCatalogs) !== (0, g.default)(D) && (this.oldCatalogs = D, x && x(D));
              }, h.prototype.setMultilineHead = function(A) {
                var y = this, x, S, D = this.editor, P = D.selection, C = (x = P.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0], E = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], T = l.default(P.getSelectionStartElem()), R = l.default(P.getSelectionEndElem());
                R.elems[0].outerHTML === l.default(s.EMPTY_P).elems[0].outerHTML && !R.elems[0].nextSibling && (R = R.prev());
                var N = [];
                N.push(T.getNodeTop(D));
                var M = [], B = (S = P.getRange()) === null || S === void 0 ? void 0 : S.commonAncestorContainer.childNodes;
                B == null || (0, f.default)(B).call(B, function(b, $) {
                  b === N[0].getNode() && M.push($), b === R.getNodeTop(D).getNode() && M.push($);
                });
                for (var F = 0; N[F].getNode() !== R.getNodeTop(D).getNode(); ) {
                  if (!N[F].elems[0]) return;
                  var O = l.default(N[F].next().getNode());
                  N.push(O), F++;
                }
                N == null || (0, f.default)(N).call(N, function(b, $) {
                  if (!y.hasTag(b, E)) {
                    var H = l.default(A), j = b.parent().getNode();
                    H.html("" + b.html()), j.insertBefore(H.getNode(), b.getNode()), b.remove();
                  }
                }), P.createRangeByElems(C.children[M[0]], C.children[M[1]]);
              }, h.prototype.hasTag = function(A, y) {
                var x = this, S;
                if (!A) return !1;
                if ((0, d.default)(y).call(y, A == null ? void 0 : A.getNodeName())) return !0;
                var D = !1;
                return (S = A.children()) === null || S === void 0 || (0, f.default)(S).call(S, function(P) {
                  D = x.hasTag(l.default(P), y);
                }), D;
              }, h.prototype.tryChangeActive = function() {
                var A = this.editor, y = /^h/i, x = A.cmd.queryCommandValue("formatBlock");
                y.test(x) ? this.active() : this.unActive();
              }, h;
            }(c.default)
          );
          n.default = m;
        },
        /* 317 */
        /***/
        function(o, n, t) {
          o.exports = t(318);
        },
        /* 318 */
        /***/
        function(o, n, t) {
          var e = t(319);
          o.exports = e;
        },
        /* 319 */
        /***/
        function(o, n, t) {
          t(320);
          var e = t(9);
          e.JSON || (e.JSON = { stringify: JSON.stringify }), o.exports = function(r, a, f) {
            return e.JSON.stringify.apply(null, arguments);
          };
        },
        /* 320 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(35), r = t(11), a = i("JSON", "stringify"), f = /[\uD800-\uDFFF]/g, g = /^[\uD800-\uDBFF]$/, d = /^[\uDC00-\uDFFF]$/, p = function(l, u, s) {
            var m = s.charAt(u - 1), v = s.charAt(u + 1);
            return g.test(l) && !d.test(v) || d.test(l) && !g.test(m) ? "\\u" + l.charCodeAt(0).toString(16) : l;
          }, c = r(function() {
            return a("\uDF06\uD834") !== '"\\udf06\\ud834"' || a("\uDEAD") !== '"\\udead"';
          });
          a && e({ target: "JSON", stat: !0, forced: c }, {
            // eslint-disable-next-line no-unused-vars
            stringify: function(u, s, m) {
              var v = a.apply(null, arguments);
              return typeof v == "string" ? v.replace(f, p) : v;
            }
          });
        },
        /* 321 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(17));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(37)), g = a.__importDefault(t(3)), d = a.__importDefault(t(322)), p = a.__importDefault(t(134)), c = a.__importDefault(t(32)), l = a.__importDefault(t(324)), u = t(7), s = (
            /** @class */
            function(m) {
              a.__extends(v, m);
              function v(h) {
                var A = this, y = g.default('<div class="w-e-menu" data-title="链接"><i class="w-e-icon-link"></i></div>');
                return A = m.call(this, y, h) || this, l.default(h), A;
              }
              return v.prototype.clickHandler = function() {
                var h = this.editor, A, y = h.selection.getSelectionContainerElem(), x = h.$textElem, S = x.html(), D = (0, r.default)(S).call(S);
                if (D === u.EMPTY_P) {
                  var P = x.children();
                  h.selection.createRangeByElem(P, !0, !0), y = h.selection.getSelectionContainerElem();
                }
                if (!(y && h.$textElem.equal(y)))
                  if (this.isActive) {
                    if (A = h.selection.getSelectionContainerElem(), !A)
                      return;
                    this.createPanel(A.text(), A.attr("href"));
                  } else
                    h.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(h.selection.getSelectionText(), "");
              }, v.prototype.createPanel = function(h, A) {
                var y = d.default(this.editor, h, A), x = new c.default(this, y);
                x.create();
              }, v.prototype.tryChangeActive = function() {
                var h = this.editor;
                p.default(h) ? this.active() : this.unActive();
              }, v;
            }(f.default)
          );
          n.default = s;
        },
        /* 322 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(17));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = t(6), g = a.__importDefault(t(3)), d = a.__importDefault(t(134)), p = t(323);
          function c(l, u, s) {
            var m = f.getRandom("input-link"), v = f.getRandom("input-text"), h = f.getRandom("btn-ok"), A = f.getRandom("btn-del"), y = d.default(l) ? "inline-block" : "none", x;
            function S() {
              if (d.default(l)) {
                var T = l.selection.getSelectionContainerElem();
                T && (l.selection.createRangeByElem(T), l.selection.restoreSelection(), x = T);
              }
            }
            function D(T, R) {
              var N = new RegExp(/(<\/*ul>)|(<\/*li>)|(<\/*ol>)/g);
              T = T.replace(N, ""), d.default(l) && S(), l.cmd.do("insertHTML", '<a href="' + R + '" target="_blank">' + T + "</a>");
            }
            function P() {
              if (d.default(l)) {
                S();
                var T = x.text();
                l.cmd.do("insertHTML", "<span>" + T + "</span>");
              }
            }
            function C(T, R) {
              var N = l.config.linkCheck(T, R);
              if (N !== void 0) {
                if (N === !0)
                  return !0;
                l.config.customAlert(N, "warning");
              }
              return !1;
            }
            var E = {
              width: 300,
              height: 0,
              // panel 中可包含多个 tab
              tabs: [{
                // tab 的标题
                title: l.i18next.t("menus.panelMenus.link.链接"),
                // 模板
                tpl: `<div>
                        <input
                            id="` + v + `"
                            type="text"
                            class="block"
                            value="` + u + `"
                            placeholder="` + l.i18next.t("menus.panelMenus.link.链接文字") + `"/>
                        </td>
                        <input
                            id="` + m + `"
                            type="text"
                            class="block"
                            value="` + s + `"
                            placeholder="` + l.i18next.t("如") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + h + `" class="right">
                                ` + l.i18next.t("插入") + `
                            </button>
                            <button type="button" id="` + A + '" class="gray right" style="display:' + y + `">
                                ` + l.i18next.t("menus.panelMenus.link.取消链接") + `
                            </button>
                        </div>
                    </div>`,
                // 事件绑定
                events: [
                  // 插入链接
                  {
                    selector: "#" + h,
                    type: "click",
                    fn: function() {
                      var R, N, M, B;
                      l.selection.restoreSelection();
                      var F = l.selection.getSelectionRangeTopNodes()[0].getNode(), O = window.getSelection(), b = g.default("#" + m), $ = g.default("#" + v), H = (0, r.default)(R = b.val()).call(R), j = (0, r.default)(N = $.val()).call(N), K = "";
                      O && !(O != null && O.isCollapsed) && (K = (M = p.insertHtml(O, F)) === null || M === void 0 ? void 0 : (0, r.default)(M).call(M));
                      var U = K == null ? void 0 : K.replace(/<.*?>/g, ""), Q = (B = U == null ? void 0 : U.length) !== null && B !== void 0 ? B : 0;
                      if (Q <= j.length) {
                        var J = j.substring(0, Q), w = j.substring(Q);
                        U === J && (j = K + w);
                      }
                      if (H && (j || (j = H), !!C(j, H)))
                        return D(j, H), !0;
                    },
                    bindEnter: !0
                  },
                  // 取消链接
                  {
                    selector: "#" + A,
                    type: "click",
                    fn: function() {
                      return P(), !0;
                    }
                  }
                ]
              }]
            };
            return E;
          }
          n.default = c;
        },
        /* 323 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.insertHtml = n.createPartHtml = n.makeHtmlString = n.getTopNode = void 0;
          function a(l, u) {
            var s = l, m = l;
            do {
              if (s.textContent === u) break;
              m = s, s.parentNode && (s = s == null ? void 0 : s.parentNode);
            } while ((s == null ? void 0 : s.nodeName) !== "P");
            return m;
          }
          n.getTopNode = a;
          function f(l, u) {
            var s = l.nodeName, m = "";
            if (l.nodeType === 3 || /^(h|H)[1-6]$/.test(s))
              return u;
            if (l.nodeType === 1) {
              var v = l.getAttribute("style"), h = l.getAttribute("face"), A = l.getAttribute("color");
              v && (m = m + (' style="' + v + '"')), h && (m = m + (' face="' + h + '"')), A && (m = m + (' color="' + A + '"'));
            }
            return s = s.toLowerCase(), "<" + s + m + ">" + u + "</" + s + ">";
          }
          n.makeHtmlString = f;
          function g(l, u, s, m) {
            var v, h = (v = u.textContent) === null || v === void 0 ? void 0 : v.substring(s, m), A = u, y = "";
            do
              y = f(A, h ?? ""), h = y, A = A == null ? void 0 : A.parentElement;
            while (A && A.textContent !== l);
            return y;
          }
          n.createPartHtml = g;
          function d(l, u) {
            var s, m, v, h, A, y = l.anchorNode, x = l.focusNode, S = l.anchorOffset, D = l.focusOffset, P = (s = u.textContent) !== null && s !== void 0 ? s : "", C = p(u), E = "", T = "", R = "", N = "", M = y, B = x, F = y;
            if (y != null && y.isEqualNode(x ?? null)) {
              var O = g(P, y, S, D);
              return O = c(C, O), O;
            }
            for (y && (T = g(P, y, S ?? 0)), x && (N = g(P, x, 0, D)), y && (M = a(y, P)), x && (B = a(x, P)), F = (m = M == null ? void 0 : M.nextSibling) !== null && m !== void 0 ? m : y; !(F != null && F.isEqualNode(B ?? null)); ) {
              var b = F == null ? void 0 : F.nodeName;
              if (b === "#text")
                R = R + (F == null ? void 0 : F.textContent);
              else {
                var $ = (h = (v = F == null ? void 0 : F.firstChild) === null || v === void 0 ? void 0 : v.parentElement) === null || h === void 0 ? void 0 : h.innerHTML;
                F && (R = R + f(F, $ ?? ""));
              }
              var H = (A = F == null ? void 0 : F.nextSibling) !== null && A !== void 0 ? A : F;
              if (H === F) break;
              F = H;
            }
            return E = "" + T + R + N, E = c(C, E), E;
          }
          n.insertHtml = d;
          function p(l) {
            for (var u, s = (u = l.textContent) !== null && u !== void 0 ? u : "", m = []; (l == null ? void 0 : l.textContent) === s; )
              l.nodeName !== "P" && l.nodeName !== "TABLE" && m.push(l), l = l.childNodes[0];
            return m;
          }
          function c(l, u) {
            return (0, r.default)(l).call(l, function(s) {
              u = f(s, u);
            }), u;
          }
        },
        /* 324 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(325));
          function f(g) {
            a.default(g);
          }
          n.default = f;
        },
        /* 325 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(38));
          function g(p) {
            var c;
            function l(s) {
              var m = [{
                $elem: a.default("<span>" + p.i18next.t("menus.panelMenus.link.查看链接") + "</span>"),
                onClick: function(h, A) {
                  var y = A.attr("href");
                  return window.open(y, "_target"), !0;
                }
              }, {
                $elem: a.default("<span>" + p.i18next.t("menus.panelMenus.link.取消链接") + "</span>"),
                onClick: function(h, A) {
                  var y, x;
                  h.selection.createRangeByElem(A), h.selection.restoreSelection();
                  var S = A.childNodes();
                  if ((S == null ? void 0 : S.getNodeName()) === "IMG") {
                    var D = (x = (y = h.selection.getSelectionContainerElem()) === null || y === void 0 ? void 0 : y.children()) === null || x === void 0 ? void 0 : x.elems[0].children[0];
                    h.cmd.do("insertHTML", `<img 
                                src=` + (D == null ? void 0 : D.getAttribute("src")) + ` 
                                style=` + (D == null ? void 0 : D.getAttribute("style")) + ">");
                  } else {
                    var P = A.text();
                    h.cmd.do("insertHTML", "<span>" + P + "</span>");
                  }
                  return !0;
                }
              }];
              c = new f.default(p, s, m), c.create();
            }
            function u() {
              c && (c.remove(), c = null);
            }
            return {
              showLinkTooltip: l,
              hideLinkTooltip: u
            };
          }
          function d(p) {
            var c = g(p), l = c.showLinkTooltip, u = c.hideLinkTooltip;
            p.txt.eventHooks.linkClickEvents.push(l), p.txt.eventHooks.clickEvents.push(u), p.txt.eventHooks.keyupEvents.push(u), p.txt.eventHooks.toolbarClickEvents.push(u), p.txt.eventHooks.menuClickEvents.push(u), p.txt.eventHooks.textScrollEvents.push(u);
          }
          n.default = d;
        },
        /* 326 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(23)), f = r.__importDefault(t(3)), g = (
            /** @class */
            function(d) {
              r.__extends(p, d);
              function p(c) {
                var l = this, u = f.default(`<div class="w-e-menu" data-title="斜体">
                <i class="w-e-icon-italic"></i>
            </div>`);
                return l = d.call(this, u, c) || this, l;
              }
              return p.prototype.clickHandler = function() {
                var c = this.editor, l = c.selection.isSelectionEmpty();
                l && c.selection.createEmptyRange(), c.cmd.do("italic"), l && (c.selection.collapseRange(), c.selection.restoreSelection());
              }, p.prototype.tryChangeActive = function() {
                var c = this.editor;
                c.cmd.queryCommandState("italic") ? this.active() : this.unActive();
              }, p;
            }(a.default)
          );
          n.default = g;
        },
        /* 327 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(23)), f = r.__importDefault(t(3)), g = (
            /** @class */
            function(d) {
              r.__extends(p, d);
              function p(c) {
                var l = this, u = f.default(`<div class="w-e-menu" data-title="下划线">
                <i class="w-e-icon-underline"></i>
            </div>`);
                return l = d.call(this, u, c) || this, l;
              }
              return p.prototype.clickHandler = function() {
                var c = this.editor, l = c.selection.isSelectionEmpty();
                l && c.selection.createEmptyRange(), c.cmd.do("underline"), l && (c.selection.collapseRange(), c.selection.restoreSelection());
              }, p.prototype.tryChangeActive = function() {
                var c = this.editor;
                c.cmd.queryCommandState("underline") ? this.active() : this.unActive();
              }, p;
            }(a.default)
          );
          n.default = g;
        },
        /* 328 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(23)), f = r.__importDefault(t(3)), g = (
            /** @class */
            function(d) {
              r.__extends(p, d);
              function p(c) {
                var l = this, u = f.default(`<div class="w-e-menu" data-title="删除线">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
                return l = d.call(this, u, c) || this, l;
              }
              return p.prototype.clickHandler = function() {
                var c = this.editor, l = c.selection.isSelectionEmpty();
                l && c.selection.createEmptyRange(), c.cmd.do("strikeThrough"), l && (c.selection.collapseRange(), c.selection.restoreSelection());
              }, p.prototype.tryChangeActive = function() {
                var c = this.editor;
                c.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
              }, p;
            }(a.default)
          );
          n.default = g;
        },
        /* 329 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(24)), f = r.__importDefault(t(3)), g = r.__importDefault(t(330)), d = (
            /** @class */
            function(p) {
              r.__extends(c, p);
              function c(l) {
                var u = this, s = f.default(`<div class="w-e-menu" data-title="字体">
                <i class="w-e-icon-font"></i>
            </div>`), m = new g.default(l.config.fontNames), v = {
                  width: 100,
                  title: "设置字体",
                  type: "list",
                  list: m.getItemList(),
                  clickHandler: function(A) {
                    u.command(A);
                  }
                };
                return u = p.call(this, s, l, v) || this, u;
              }
              return c.prototype.command = function(l) {
                var u, s = this.editor, m = s.selection.isSelectionEmpty(), v = (u = s.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
                if (v != null) {
                  var h = (v == null ? void 0 : v.nodeName.toLowerCase()) !== "p", A = (v == null ? void 0 : v.getAttribute("face")) === l;
                  if (m) {
                    if (h && !A) {
                      var y = s.selection.getSelectionRangeTopNodes();
                      s.selection.createRangeByElem(y[0]), s.selection.moveCursor(y[0].elems[0]);
                    }
                    s.selection.setRangeToElem(v), s.selection.createEmptyRange();
                  }
                  s.cmd.do("fontName", l), m && (s.selection.collapseRange(), s.selection.restoreSelection());
                }
              }, c.prototype.tryChangeActive = function() {
              }, c;
            }(a.default)
          );
          n.default = d;
        },
        /* 330 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = (
            /** @class */
            function() {
              function d(p) {
                var c = this;
                this.itemList = [], (0, r.default)(p).call(p, function(l) {
                  var u = typeof l == "string" ? l : l.value, s = typeof l == "string" ? l : l.name;
                  c.itemList.push({
                    $elem: f.default(`<p style="font-family:'` + u + `'">` + s + "</p>"),
                    value: s
                  });
                });
              }
              return d.prototype.getItemList = function() {
                return this.itemList;
              }, d;
            }()
          );
          n.default = g;
        },
        /* 331 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(24)), f = r.__importDefault(t(3)), g = r.__importDefault(t(332)), d = (
            /** @class */
            function(p) {
              r.__extends(c, p);
              function c(l) {
                var u = this, s = f.default(`<div class="w-e-menu" data-title="字号">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), m = new g.default(l.config.fontSizes), v = {
                  width: 160,
                  title: "设置字号",
                  type: "list",
                  list: m.getItemList(),
                  clickHandler: function(A) {
                    u.command(A);
                  }
                };
                return u = p.call(this, s, l, v) || this, u;
              }
              return c.prototype.command = function(l) {
                var u, s = this.editor, m = s.selection.isSelectionEmpty(), v = (u = s.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
                v != null && (s.cmd.do("fontSize", l), m && (s.selection.collapseRange(), s.selection.restoreSelection()));
              }, c.prototype.tryChangeActive = function() {
              }, c;
            }(a.default)
          );
          n.default = d;
        },
        /* 332 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = (
            /** @class */
            function() {
              function g(d) {
                this.itemList = [];
                for (var p in d) {
                  var c = d[p];
                  this.itemList.push({
                    $elem: a.default('<p style="font-size:' + p + '">' + c.name + "</p>"),
                    value: c.value
                  });
                }
              }
              return g.prototype.getItemList = function() {
                return this.itemList;
              }, g;
            }()
          );
          n.default = f;
        },
        /* 333 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(27));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(24)), d = f.__importDefault(t(3)), p = ["LI"], c = ["UL", "BLOCKQUOTE"], l = (
            /** @class */
            function(u) {
              f.__extends(s, u);
              function s(m) {
                var v = this, h = d.default('<div class="w-e-menu" data-title="对齐"><i class="w-e-icon-paragraph-left"></i></div>'), A = {
                  width: 100,
                  title: "对齐方式",
                  type: "list",
                  list: [{
                    $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.靠左") + `
                        </p>`),
                    value: "left"
                  }, {
                    $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.居中") + `
                        </p>`),
                    value: "center"
                  }, {
                    $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.靠右") + `
                        </p>`),
                    value: "right"
                  }, {
                    $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.两端") + `
                        </p>`),
                    value: "justify"
                  }],
                  clickHandler: function(x) {
                    v.command(x);
                  }
                };
                return v = u.call(this, h, m, A) || this, v;
              }
              return s.prototype.command = function(m) {
                var v = this.editor, h = v.selection, A = h.getSelectionContainerElem();
                h.saveRange();
                var y = v.selection.getSelectionRangeTopNodes();
                if (A != null && A.length)
                  if (this.isSpecialNode(A, y[0]) || this.isSpecialTopNode(y[0])) {
                    var x = this.getSpecialNodeUntilTop(A, y[0]);
                    if (x == null) return;
                    d.default(x).css("text-align", m);
                  } else
                    (0, r.default)(y).call(y, function(S) {
                      S.css("text-align", m);
                    });
                h.restoreSelection();
              }, s.prototype.getSpecialNodeUntilTop = function(m, v) {
                for (var h = m.elems[0], A = v.elems[0]; h != null; ) {
                  if ((0, a.default)(p).call(p, h == null ? void 0 : h.nodeName) !== -1 || h.parentNode === A)
                    return h;
                  h = h.parentNode;
                }
                return h;
              }, s.prototype.isSpecialNode = function(m, v) {
                var h = this.getSpecialNodeUntilTop(m, v);
                return h == null ? !1 : (0, a.default)(p).call(p, h.nodeName) !== -1;
              }, s.prototype.isSpecialTopNode = function(m) {
                var v;
                return m == null ? !1 : (0, a.default)(c).call(c, (v = m.elems[0]) === null || v === void 0 ? void 0 : v.nodeName) !== -1;
              }, s.prototype.tryChangeActive = function() {
              }, s;
            }(g.default)
          );
          n.default = l;
        },
        /* 334 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = a.__importDefault(t(23)), d = a.__importDefault(t(335)), p = a.__importDefault(t(336)), c = t(7), l = (
            /** @class */
            function(u) {
              a.__extends(s, u);
              function s(m) {
                var v = this, h = f.default(`<div class="w-e-menu" data-title="引用">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
                return v = u.call(this, h, m) || this, d.default(m), v;
              }
              return s.prototype.clickHandler = function() {
                var m, v, h = this.editor, A = h.selection.isSelectionEmpty(), y = h.selection.getSelectionRangeTopNodes(), x = y[y.length - 1], S = this.getTopNodeName();
                if (S === "BLOCKQUOTE") {
                  var D = f.default(x.childNodes()), P = D.length, C = x;
                  (0, r.default)(D).call(D, function(N) {
                    var M = f.default(N);
                    M.insertAfter(C), C = M;
                  }), x.remove(), h.selection.moveCursor(D.elems[P - 1]), this.tryChangeActive();
                } else {
                  var E = p.default(y);
                  if (h.$textElem.equal(x)) {
                    var T = (m = h.selection.getSelectionContainerElem()) === null || m === void 0 ? void 0 : m.elems[0];
                    h.selection.createRangeByElems(T.children[0], T.children[0]), y = h.selection.getSelectionRangeTopNodes(), E = p.default(y), x.append(E);
                  } else
                    E.insertAfter(x);
                  this.delSelectNode(y);
                  var R = (v = E.childNodes()) === null || v === void 0 ? void 0 : v.last().getNode();
                  if (R == null) return;
                  R.textContent ? h.selection.moveCursor(R) : h.selection.moveCursor(R, 0), this.tryChangeActive(), f.default(c.EMPTY_P).insertAfter(E);
                  return;
                }
                A && (h.selection.collapseRange(), h.selection.restoreSelection());
              }, s.prototype.tryChangeActive = function() {
                var m, v = this.editor, h = (m = v.selection.getSelectionRangeTopNodes()[0]) === null || m === void 0 ? void 0 : m.getNodeName();
                h === "BLOCKQUOTE" ? this.active() : this.unActive();
              }, s.prototype.getTopNodeName = function() {
                var m = this.editor, v = m.selection.getSelectionRangeTopNodes()[0], h = v == null ? void 0 : v.getNodeName();
                return h;
              }, s.prototype.delSelectNode = function(m) {
                (0, r.default)(m).call(m, function(v) {
                  v.remove();
                });
              }, s;
            }(g.default)
          );
          n.default = l;
        },
        /* 335 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = t(7), f = r.__importDefault(t(3));
          function g(d) {
            function p(c) {
              var l, u = d.selection.getSelectionContainerElem(), s = d.selection.getSelectionRangeTopNodes()[0];
              if ((s == null ? void 0 : s.getNodeName()) === "BLOCKQUOTE") {
                if (u.getNodeName() === "BLOCKQUOTE") {
                  var m = (l = u.childNodes()) === null || l === void 0 ? void 0 : l.getNode();
                  d.selection.moveCursor(m);
                }
                if (u.text() === "") {
                  c.preventDefault(), u.remove();
                  var v = f.default(a.EMPTY_P);
                  v.insertAfter(s), d.selection.moveCursor(v.getNode(), 0);
                }
                s.text() === "" && s.remove();
              }
            }
            d.txt.eventHooks.enterDownEvents.push(p);
          }
          n.default = g;
        },
        /* 336 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3));
          function g(d) {
            var p = f.default("<blockquote></blockquote>");
            return (0, r.default)(d).call(d, function(c) {
              p.append(c.clone(!0));
            }), p;
          }
          n.default = g;
        },
        /* 337 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(26));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(24)), g = a.__importDefault(t(3)), d = t(6), p = (
            /** @class */
            function(c) {
              a.__extends(l, c);
              function l(u) {
                var s, m = this, v = g.default(`<div class="w-e-menu" data-title="背景色">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), h = {
                  width: 120,
                  title: "背景颜色",
                  // droplist 内容以 block 形式展示
                  type: "inline-block",
                  list: (0, r.default)(s = u.config.colors).call(s, function(A) {
                    return {
                      $elem: g.default('<i style="color:' + A + ';" class="w-e-icon-paint-brush"></i>'),
                      value: A
                    };
                  }),
                  clickHandler: function(y) {
                    m.command(y);
                  }
                };
                return m = c.call(this, v, u, h) || this, m;
              }
              return l.prototype.command = function(u) {
                var s, m = this.editor, v = m.selection.isSelectionEmpty(), h = (s = m.selection.getSelectionContainerElem()) === null || s === void 0 ? void 0 : s.elems[0];
                if (h != null) {
                  var A = (h == null ? void 0 : h.nodeName.toLowerCase()) !== "p", y = h == null ? void 0 : h.style.backgroundColor, x = d.hexToRgb(u) === y;
                  if (v) {
                    if (A && !x) {
                      var S = m.selection.getSelectionRangeTopNodes();
                      m.selection.createRangeByElem(S[0]), m.selection.moveCursor(S[0].elems[0]);
                    }
                    m.selection.createEmptyRange();
                  }
                  m.cmd.do("backColor", u), v && (m.selection.collapseRange(), m.selection.restoreSelection());
                }
              }, l.prototype.tryChangeActive = function() {
              }, l;
            }(f.default)
          );
          n.default = p;
        },
        /* 338 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(26));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(24)), g = a.__importDefault(t(3)), d = (
            /** @class */
            function(p) {
              a.__extends(c, p);
              function c(l) {
                var u, s = this, m = g.default(`<div class="w-e-menu" data-title="文字颜色">
                <i class="w-e-icon-pencil2"></i>
            </div>`), v = {
                  width: 120,
                  title: "文字颜色",
                  // droplist 内容以 block 形式展示
                  type: "inline-block",
                  list: (0, r.default)(u = l.config.colors).call(u, function(h) {
                    return {
                      $elem: g.default('<i style="color:' + h + ';" class="w-e-icon-pencil2"></i>'),
                      value: h
                    };
                  }),
                  clickHandler: function(A) {
                    s.command(A);
                  }
                };
                return s = p.call(this, m, l, v) || this, s;
              }
              return c.prototype.command = function(l) {
                var u, s = this.editor, m = s.selection.isSelectionEmpty(), v = (u = s.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
                if (v != null) {
                  var h = s.selection.getSelectionText();
                  if (v.nodeName === "A" && v.textContent === h) {
                    var A = g.default("<span>&#8203;</span>").getNode();
                    v.appendChild(A);
                  }
                  s.cmd.do("foreColor", l), m && (s.selection.collapseRange(), s.selection.restoreSelection());
                }
              }, c.prototype.tryChangeActive = function() {
              }, c;
            }(f.default)
          );
          n.default = d;
        },
        /* 339 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(32)), g = r.__importDefault(t(37)), d = r.__importDefault(t(340)), p = r.__importDefault(t(346)), c = (
            /** @class */
            function(l) {
              r.__extends(u, l);
              function u(s) {
                var m = this, v = a.default(`<div class="w-e-menu" data-title="视频">
                <i class="w-e-icon-play"></i>
            </div>`);
                return m = l.call(this, v, s) || this, p.default(s), m;
              }
              return u.prototype.clickHandler = function() {
                this.createPanel("");
              }, u.prototype.createPanel = function(s) {
                var m = d.default(this.editor, s), v = new f.default(this, m);
                v.create();
              }, u.prototype.tryChangeActive = function() {
              }, u;
            }(g.default)
          );
          n.default = c;
        },
        /* 340 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(17));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = t(6), g = a.__importDefault(t(3)), d = a.__importDefault(t(341)), p = t(7);
          function c(l, u) {
            var s = l.config, m = new d.default(l), v = f.getRandom("input-iframe"), h = f.getRandom("btn-ok"), A = f.getRandom("input-upload"), y = f.getRandom("btn-local-ok");
            function x(C) {
              l.cmd.do("insertHTML", C + p.EMPTY_P), l.config.onlineVideoCallback(C);
            }
            function S(C) {
              var E = l.config.onlineVideoCheck(C);
              return E === !0 ? !0 : (typeof E == "string" && l.config.customAlert(E, "error"), !1);
            }
            var D = [{
              // tab 的标题
              title: l.i18next.t("menus.panelMenus.video.上传视频"),
              tpl: `<div class="w-e-up-video-container">
                    <div id="` + y + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + A + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
              events: [
                // 触发选择视频
                {
                  selector: "#" + y,
                  type: "click",
                  fn: function() {
                    var E = g.default("#" + A), T = E.elems[0];
                    if (T)
                      T.click();
                    else
                      return !0;
                  }
                },
                // 选择视频完毕
                {
                  selector: "#" + A,
                  type: "change",
                  fn: function() {
                    var E = g.default("#" + A), T = E.elems[0];
                    if (!T)
                      return !0;
                    var R = T.files;
                    return R.length && m.uploadVideo(R), !0;
                  }
                }
              ]
            }, {
              // tab 的标题
              title: l.i18next.t("menus.panelMenus.video.插入视频"),
              // 模板
              tpl: `<div>
                    <input 
                        id="` + v + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + l.i18next.t("如") + `：<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + h + `" class="right">
                            ` + l.i18next.t("插入") + `
                        </button>
                    </div>
                </div>`,
              // 事件绑定
              events: [
                // 插入视频
                {
                  selector: "#" + h,
                  type: "click",
                  fn: function() {
                    var E, T = g.default("#" + v), R = (0, r.default)(E = T.val()).call(E);
                    if (R && S(R))
                      return x(R), !0;
                  },
                  bindEnter: !0
                }
              ]
            }], P = {
              width: 300,
              height: 0,
              // panel 中可包含多个 tab
              tabs: []
            };
            return window.FileReader && (s.uploadVideoServer || s.customUploadVideo) && P.tabs.push(D[0]), s.showLinkVideo && P.tabs.push(D[1]), P;
          }
          n.default = c;
        },
        /* 341 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(132)), a = e(t(57)), f = e(t(4)), g = e(t(27));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var d = t(2), p = t(6), c = d.__importDefault(t(135)), l = d.__importDefault(t(136)), u = t(7), s = t(6), m = (
            /** @class */
            function() {
              function v(h) {
                this.editor = h;
              }
              return v.prototype.uploadVideo = function(h) {
                var A = this;
                if (h.length) {
                  var y = this.editor, x = y.config, S = "validate.", D = function(W) {
                    return y.i18next.t(S + W);
                  }, P = x.uploadVideoServer, C = x.uploadVideoMaxSize, E = C / 1024, T = x.uploadVideoName, R = x.uploadVideoParams, N = x.uploadVideoParamsWithUrl, M = x.uploadVideoHeaders, B = x.uploadVideoHooks, F = x.uploadVideoTimeout, O = x.withVideoCredentials, b = x.customUploadVideo, $ = x.uploadVideoAccept, H = [], j = [];
                  if (p.arrForEach(h, function(V) {
                    var W = V.name, _ = V.size / 1024 / 1024;
                    if (!(!W || !_)) {
                      if (!($ instanceof Array)) {
                        j.push("【" + $ + "】" + D("uploadVideoAccept 不是Array"));
                        return;
                      }
                      if (!(0, r.default)($).call($, function(nt) {
                        return nt === W.split(".")[W.split(".").length - 1];
                      })) {
                        j.push("【" + W + "】" + D("不是视频"));
                        return;
                      }
                      if (E < _) {
                        j.push("【" + W + "】" + D("大于") + " " + E + "M");
                        return;
                      }
                      H.push(V);
                    }
                  }), j.length) {
                    x.customAlert(D("视频验证未通过") + `: 
` + j.join(`
`), "warning");
                    return;
                  }
                  if (H.length === 0) {
                    x.customAlert(D("传入的文件不合法"), "warning");
                    return;
                  }
                  if (b && typeof b == "function") {
                    var K;
                    b(H, (0, a.default)(K = this.insertVideo).call(K, this));
                    return;
                  }
                  var U = new FormData();
                  if ((0, f.default)(H).call(H, function(V, W) {
                    var _ = T || V.name;
                    H.length > 1 && (_ = _ + (W + 1)), U.append(_, V);
                  }), P) {
                    var Q = P.split("#");
                    P = Q[0];
                    var J = Q[1] || "";
                    (0, f.default)(p).call(p, R, function(V, W) {
                      N && ((0, g.default)(P).call(P, "?") > 0 ? P += "&" : P += "?", P = P + V + "=" + W), U.append(V, W);
                    }), J && (P += "#" + J);
                    var w = c.default(P, {
                      timeout: F,
                      formData: U,
                      headers: M,
                      withCredentials: !!O,
                      beforeSend: function(W) {
                        if (B.before) return B.before(W, y, H);
                      },
                      onTimeout: function(W) {
                        x.customAlert(D("上传视频超时"), "error"), B.timeout && B.timeout(W, y);
                      },
                      onProgress: function(W, _) {
                        var nt = new l.default(y);
                        _.lengthComputable && (W = _.loaded / _.total, nt.show(W));
                      },
                      onError: function(W) {
                        x.customAlert(D("上传视频错误"), "error", D("上传视频错误") + "，" + D("服务器返回状态") + ": " + W.status), B.error && B.error(W, y);
                      },
                      onFail: function(W, _) {
                        x.customAlert(D("上传视频失败"), "error", D("上传视频返回结果错误") + ("，" + D("返回结果") + ": ") + _), B.fail && B.fail(W, y, _);
                      },
                      onSuccess: function(W, _) {
                        if (B.customInsert) {
                          var nt;
                          B.customInsert((0, a.default)(nt = A.insertVideo).call(nt, A), _, y);
                          return;
                        }
                        if (_.errno != "0") {
                          x.customAlert(D("上传视频失败"), "error", D("上传视频返回结果错误") + "，" + D("返回结果") + " errno=" + _.errno), B.fail && B.fail(W, y, _);
                          return;
                        }
                        var at = _.data;
                        A.insertVideo(at.url), B.success && B.success(W, y, _);
                      }
                    });
                    typeof w == "string" && x.customAlert(w, "error");
                  }
                }
              }, v.prototype.insertVideo = function(h) {
                var A = this.editor, y = A.config, x = "validate.", S = function(C, E) {
                  return E === void 0 && (E = x), A.i18next.t(E + C);
                };
                if (!y.customInsertVideo)
                  s.UA.isFirefox ? A.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + h + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : A.cmd.do("insertHTML", '<video src="' + h + '" controls="controls" style="max-width:100%"></video>' + u.EMPTY_P);
                else {
                  y.customInsertVideo(h);
                  return;
                }
                var D = document.createElement("video");
                D.onload = function() {
                  D = null;
                }, D.onerror = function() {
                  y.customAlert(S("插入视频错误"), "error", "wangEditor: " + S("插入视频错误") + "，" + S("视频链接") + ' "' + h + '"，' + S("下载链接失败")), D = null;
                }, D.onabort = function() {
                  return D = null;
                }, D.src = h;
              }, v;
            }()
          );
          n.default = m;
        },
        /* 342 */
        /***/
        function(o, n, t) {
          o.exports = t(343);
        },
        /* 343 */
        /***/
        function(o, n, t) {
          var e = t(344);
          o.exports = e;
        },
        /* 344 */
        /***/
        function(o, n, t) {
          t(345);
          var e = t(9);
          o.exports = e.Date.now;
        },
        /* 345 */
        /***/
        function(o, n, t) {
          var e = t(5);
          e({ target: "Date", stat: !0 }, {
            now: function() {
              return (/* @__PURE__ */ new Date()).getTime();
            }
          });
        },
        /* 346 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(347)), f = r.__importDefault(t(349));
          function g(d) {
            a.default(d), f.default(d);
          }
          n.default = g;
        },
        /* 347 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.createShowHideFn = void 0;
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(38)), g = r.__importDefault(t(348));
          function d(c) {
            var l, u = function(h, A) {
              return A === void 0 && (A = ""), c.i18next.t(A + h);
            };
            function s(v) {
              var h = [{
                $elem: a.default("<span class='w-e-icon-trash-o'></span>"),
                onClick: function(y, x) {
                  return x.remove(), !0;
                }
              }, {
                $elem: a.default("<span>100%</span>"),
                onClick: function(y, x) {
                  return x.attr("width", "100%"), x.removeAttr("height"), !0;
                }
              }, {
                $elem: a.default("<span>50%</span>"),
                onClick: function(y, x) {
                  return x.attr("width", "50%"), x.removeAttr("height"), !0;
                }
              }, {
                $elem: a.default("<span>30%</span>"),
                onClick: function(y, x) {
                  return x.attr("width", "30%"), x.removeAttr("height"), !0;
                }
              }, {
                $elem: a.default("<span>" + u("重置") + "</span>"),
                onClick: function(y, x) {
                  return x.removeAttr("width"), x.removeAttr("height"), !0;
                }
              }, {
                $elem: a.default("<span>" + u("menus.justify.靠左") + "</span>"),
                onClick: function(y, x) {
                  return g.default(x, "left"), !0;
                }
              }, {
                $elem: a.default("<span>" + u("menus.justify.居中") + "</span>"),
                onClick: function(y, x) {
                  return g.default(x, "center"), !0;
                }
              }, {
                $elem: a.default("<span>" + u("menus.justify.靠右") + "</span>"),
                onClick: function(y, x) {
                  return g.default(x, "right"), !0;
                }
              }];
              l = new f.default(c, v, h), l.create();
            }
            function m() {
              l && (l.remove(), l = null);
            }
            return {
              showVideoTooltip: s,
              hideVideoTooltip: m
            };
          }
          n.createShowHideFn = d;
          function p(c) {
            var l = d(c), u = l.showVideoTooltip, s = l.hideVideoTooltip;
            c.txt.eventHooks.videoClickEvents.push(u), c.txt.eventHooks.clickEvents.push(s), c.txt.eventHooks.keyupEvents.push(s), c.txt.eventHooks.toolbarClickEvents.push(s), c.txt.eventHooks.menuClickEvents.push(s), c.txt.eventHooks.textScrollEvents.push(s), c.txt.eventHooks.changeEvents.push(s);
          }
          n.default = p;
        },
        /* 348 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(44));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3));
          function g(p, c) {
            var l = ["P"], u = d(p, l);
            u && f.default(u).css("text-align", c);
          }
          n.default = g;
          function d(p, c) {
            for (var l, u = p.elems[0]; u != null; ) {
              if ((0, r.default)(c).call(c, u == null ? void 0 : u.nodeName))
                return u;
              if (((l = u == null ? void 0 : u.parentNode) === null || l === void 0 ? void 0 : l.nodeName) === "BODY")
                return null;
              u = u.parentNode;
            }
            return u;
          }
        },
        /* 349 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(6);
          function a(f) {
            if (r.UA.isFirefox) {
              var g = f.txt, d = f.selection, p = g.eventHooks.keydownEvents;
              p.push(function(c) {
                var l = d.getSelectionContainerElem();
                if (l) {
                  var u = l.getNodeTop(f), s = u.length && u.prev().length ? u.prev() : null;
                  s && s.attr("data-we-video-p") && d.getCursorPos() === 0 && c.keyCode === 8 && s.remove();
                }
              });
            }
          }
          n.default = a;
        },
        /* 350 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(26));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = t(7), g = a.__importDefault(t(3)), d = a.__importDefault(t(32)), p = a.__importDefault(t(37)), c = a.__importDefault(t(351)), l = a.__importDefault(t(364)), u = (
            /** @class */
            function(s) {
              a.__extends(m, s);
              function m(v) {
                var h = this, A = g.default('<div class="w-e-menu" data-title="图片"><i class="w-e-icon-image"></i></div>'), y = l.default(v);
                if (y.onlyUploadConf) {
                  var x;
                  A = y.onlyUploadConf.$elem, (0, r.default)(x = y.onlyUploadConf.events).call(x, function(S) {
                    var D = S.type, P = S.fn || f.EMPTY_FN;
                    A.on(D, function(C) {
                      C.stopPropagation(), P(C);
                    });
                  });
                }
                return h = s.call(this, A, v) || this, h.imgPanelConfig = y, c.default(v), h;
              }
              return m.prototype.clickHandler = function() {
                this.imgPanelConfig.onlyUploadConf || this.createPanel();
              }, m.prototype.createPanel = function() {
                var v = this.imgPanelConfig, h = new d.default(this, v);
                this.setPanel(h), h.create();
              }, m.prototype.tryChangeActive = function() {
              }, m;
            }(p.default)
          );
          n.default = u;
        },
        /* 351 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(352)), f = r.__importDefault(t(353)), g = r.__importDefault(t(354)), d = r.__importDefault(t(362)), p = r.__importDefault(t(363));
          function c(l) {
            a.default(l), f.default(l), g.default(l), d.default(l), p.default(l);
          }
          n.default = c;
        },
        /* 352 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = t(130), f = r.__importDefault(t(96));
          function g(l, u) {
            var s = l.config, m = s.pasteFilterStyle, v = s.pasteIgnoreImg, h = a.getPasteHtml(u, m, v);
            if (h) return !0;
            var A = a.getPasteText(u);
            return !!A;
          }
          function d(l, u) {
            for (var s, m = ((s = u.clipboardData) === null || s === void 0 ? void 0 : s.types) || [], v = 0; v < m.length; v++) {
              var h = m[v];
              if (h === "Files")
                return !0;
            }
            return !1;
          }
          function p(l, u) {
            if (!(!d(u, l) && g(u, l))) {
              var s = a.getPasteImgs(l);
              if (s.length) {
                var m = new f.default(u);
                m.uploadImg(s);
              }
            }
          }
          function c(l) {
            l.txt.eventHooks.pasteEvents.unshift(function(u) {
              p(u, l);
            });
          }
          n.default = c;
        },
        /* 353 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(96));
          function f(g) {
            function d(p) {
              var c = p.dataTransfer && p.dataTransfer.files;
              if (!(!c || !c.length)) {
                var l = new a.default(g);
                l.uploadImg(c);
              }
            }
            g.txt.eventHooks.dropEvents.push(d);
          }
          n.default = f;
        },
        /* 354 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(31)), a = e(t(355));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.createShowHideFn = void 0;
          var f = t(2), g = f.__importDefault(t(3));
          t(360);
          var d = t(6);
          function p(m, v, h, A, y) {
            m.attr("style", "width:" + v + "px; height:" + h + "px; left:" + A + "px; top:" + y + "px;");
          }
          function c(m, v) {
            var h = g.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
            return h.hide(), v.append(h), h;
          }
          function l(m, v, h) {
            var A = m.getBoundingClientRect(), y = h.getBoundingClientRect(), x = y.width.toFixed(2), S = y.height.toFixed(2);
            (0, r.default)(v).call(v, ".w-e-img-drag-show-size").text(x + "px * " + S + "px"), p(v, (0, a.default)(x), (0, a.default)(S), y.left - A.left, y.top - A.top), v.show();
          }
          function u(m) {
            var v = m.$textContainerElem, h, A = c(m, v);
            function y(D, P) {
              D.on("click", function(C) {
                C.stopPropagation();
              }), D.on("mousedown", ".w-e-img-drag-rb", function(C) {
                if (C.preventDefault(), !h) return;
                var E = C.clientX, T = C.clientY, R = P.getBoundingClientRect(), N = h.getBoundingClientRect(), M = N.width, B = N.height, F = N.left - R.left, O = N.top - R.top, b = M / B, $ = M, H = B, j = g.default(document);
                function K() {
                  j.off("mousemove", U), j.off("mouseup", Q);
                }
                function U(J) {
                  J.stopPropagation(), J.preventDefault(), $ = M + (J.clientX - E), H = B + (J.clientY - T), $ / H != b && (H = $ / b), $ = (0, a.default)($.toFixed(2)), H = (0, a.default)(H.toFixed(2)), (0, r.default)(D).call(D, ".w-e-img-drag-show-size").text($.toFixed(2).replace(".00", "") + "px * " + H.toFixed(2).replace(".00", "") + "px"), p(D, $, H, F, O);
                }
                j.on("mousemove", U);
                function Q() {
                  h.attr("width", $ + ""), h.attr("height", H + "");
                  var J = h.getBoundingClientRect();
                  p(D, $, H, J.left - R.left, J.top - R.top), K();
                }
                j.on("mouseup", Q), j.on("mouseleave", K);
              });
            }
            function x(D) {
              if (d.UA.isIE()) return !1;
              D && (h = D, l(v, A, h));
            }
            function S() {
              (0, r.default)(v).call(v, ".w-e-img-drag-mask").hide();
            }
            return y(A, v), g.default(document).on("click", S), m.beforeDestroy(function() {
              g.default(document).off("click", S);
            }), {
              showDrag: x,
              hideDrag: S
            };
          }
          n.createShowHideFn = u;
          function s(m) {
            var v = u(m), h = v.showDrag, A = v.hideDrag;
            m.txt.eventHooks.imgClickEvents.push(h), m.txt.eventHooks.textScrollEvents.push(A), m.txt.eventHooks.keyupEvents.push(A), m.txt.eventHooks.toolbarClickEvents.push(A), m.txt.eventHooks.menuClickEvents.push(A), m.txt.eventHooks.changeEvents.push(A);
          }
          n.default = s;
        },
        /* 355 */
        /***/
        function(o, n, t) {
          o.exports = t(356);
        },
        /* 356 */
        /***/
        function(o, n, t) {
          var e = t(357);
          o.exports = e;
        },
        /* 357 */
        /***/
        function(o, n, t) {
          t(358);
          var e = t(9);
          o.exports = e.parseFloat;
        },
        /* 358 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(359);
          e({ global: !0, forced: parseFloat != i }, {
            parseFloat: i
          });
        },
        /* 359 */
        /***/
        function(o, n, t) {
          var e = t(8), i = t(90).trim, r = t(68), a = e.parseFloat, f = 1 / a(r + "-0") !== -1 / 0;
          o.exports = f ? function(d) {
            var p = i(String(d)), c = a(p);
            return c === 0 && p.charAt(0) == "-" ? -0 : c;
          } : a;
        },
        /* 360 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(361);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 361 */
        /***/
        function(o, n, t) {
          var e = t(21);
          n = e(!1), n.push([o.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), o.exports = n;
        },
        /* 362 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.createShowHideFn = void 0;
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(38));
          function g(p) {
            var c, l = function(v, h) {
              return h === void 0 && (h = ""), p.i18next.t(h + v);
            };
            function u(m) {
              var v = [{
                $elem: a.default("<span class='w-e-icon-trash-o'></span>"),
                onClick: function(A, y) {
                  return A.selection.createRangeByElem(y), A.selection.restoreSelection(), A.cmd.do("delete"), !0;
                }
              }, {
                $elem: a.default("<span>30%</span>"),
                onClick: function(A, y) {
                  return y.attr("width", "30%"), y.removeAttr("height"), !0;
                }
              }, {
                $elem: a.default("<span>50%</span>"),
                onClick: function(A, y) {
                  return y.attr("width", "50%"), y.removeAttr("height"), !0;
                }
              }, {
                $elem: a.default("<span>100%</span>"),
                onClick: function(A, y) {
                  return y.attr("width", "100%"), y.removeAttr("height"), !0;
                }
              }];
              v.push({
                $elem: a.default("<span>" + l("重置") + "</span>"),
                onClick: function(A, y) {
                  return y.removeAttr("width"), y.removeAttr("height"), !0;
                }
              }), m.attr("data-href") && v.push({
                $elem: a.default("<span>" + l("查看链接") + "</span>"),
                onClick: function(A, y) {
                  var x = y.attr("data-href");
                  return x && (x = decodeURIComponent(x), window.open(x, "_target")), !0;
                }
              }), c = new f.default(p, m, v), c.create();
            }
            function s() {
              c && (c.remove(), c = null);
            }
            return {
              showImgTooltip: u,
              hideImgTooltip: s
            };
          }
          n.createShowHideFn = g;
          function d(p) {
            var c = g(p), l = c.showImgTooltip, u = c.hideImgTooltip;
            p.txt.eventHooks.imgClickEvents.push(l), p.txt.eventHooks.clickEvents.push(u), p.txt.eventHooks.keyupEvents.push(u), p.txt.eventHooks.toolbarClickEvents.push(u), p.txt.eventHooks.menuClickEvents.push(u), p.txt.eventHooks.textScrollEvents.push(u), p.txt.eventHooks.imgDragBarMouseDownEvents.push(u), p.txt.eventHooks.changeEvents.push(u);
          }
          n.default = d;
        },
        /* 363 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          function r(a) {
            var f = a.txt, g = a.selection, d = f.eventHooks.keydownEvents;
            d.push(function(p) {
              var c = g.getSelectionContainerElem(), l = g.getRange();
              if (!(!l || !c || p.keyCode !== 8 || !g.isSelectionEmpty())) {
                var u = l.startContainer, s = l.startOffset, m = null;
                if (s === 0)
                  for (; u !== c.elems[0] && c.elems[0].contains(u) && u.parentNode && !m; ) {
                    if (u.previousSibling) {
                      m = u.previousSibling;
                      break;
                    }
                    u = u.parentNode;
                  }
                else u.nodeType !== 3 && (m = u.childNodes[s - 1]);
                if (m) {
                  for (var v = m; v.childNodes.length; )
                    v = v.childNodes[v.childNodes.length - 1];
                  v instanceof HTMLElement && v.tagName === "IMG" && (v.remove(), p.preventDefault());
                }
              }
            });
          }
          n.default = r;
        },
        /* 364 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(26)), a = e(t(17));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(3)), d = t(6), p = f.__importDefault(t(96));
          function c(l) {
            var u, s = l.config, m = new p.default(l), v = d.getRandom("up-trigger-id"), h = d.getRandom("up-file-id"), A = d.getRandom("input-link-url"), y = d.getRandom("input-link-url-alt"), x = d.getRandom("input-link-url-href"), S = d.getRandom("btn-link"), D = "menus.panelMenus.image.", P = function(b, $) {
              return $ === void 0 && ($ = D), l.i18next.t($ + b);
            };
            function C(O, b, $) {
              var H = s.linkImgCheck(O);
              return H === !0 ? !0 : (typeof H == "string" && s.customAlert(H, "error"), !1);
            }
            var E = s.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', T = (0, r.default)(u = s.uploadImgAccept).call(u, function(O) {
              return "image/" + O;
            }).join(","), R = function(b, $, H) {
              return '<div class="' + b + '" data-title="' + H + `">
            <div id="` + v + `" class="w-e-up-btn">
                <i class="` + $ + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + h + '" type="file" ' + E + ' accept="' + T + `"/>
            </div>
        </div>`;
            }, N = [
              // 触发选择图片
              {
                selector: "#" + v,
                type: "click",
                fn: function() {
                  var b = s.uploadImgFromMedia;
                  if (b && typeof b == "function")
                    return b(), !0;
                  var $ = g.default("#" + h), H = $.elems[0];
                  if (H)
                    H.click();
                  else
                    return !0;
                }
              },
              // 选择图片完毕
              {
                selector: "#" + h,
                type: "change",
                fn: function() {
                  var b = g.default("#" + h), $ = b.elems[0];
                  if (!$)
                    return !0;
                  var H = $.files;
                  return H != null && H.length && m.uploadImg(H), $ && ($.value = ""), !0;
                }
              }
            ], M = [`<input
            id="` + A + `"
            type="text"
            class="block"
            placeholder="` + P("图片地址") + '"/>'];
            s.showLinkImgAlt && M.push(`
        <input
            id="` + y + `"
            type="text"
            class="block"
            placeholder="` + P("图片文字说明") + '"/>'), s.showLinkImgHref && M.push(`
        <input
            id="` + x + `"
            type="text"
            class="block"
            placeholder="` + P("跳转链接") + '"/>');
            var B = [
              // first tab
              {
                // 标题
                title: P("上传图片"),
                // 模板
                tpl: R("w-e-up-img-container", "w-e-icon-upload2", ""),
                // 事件绑定
                events: N
              },
              // second tab
              {
                title: P("网络图片"),
                tpl: `<div>
                    ` + M.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + S + '" class="right">' + P("插入", "") + `</button>
                    </div>
                </div>`,
                events: [{
                  selector: "#" + S,
                  type: "click",
                  fn: function() {
                    var b, $ = g.default("#" + A), H = (0, a.default)(b = $.val()).call(b);
                    if (H) {
                      var j;
                      if (s.showLinkImgAlt) {
                        var K;
                        j = (0, a.default)(K = g.default("#" + y).val()).call(K);
                      }
                      var U;
                      if (s.showLinkImgHref) {
                        var Q;
                        U = (0, a.default)(Q = g.default("#" + x).val()).call(Q);
                      }
                      if (C(H))
                        return m.insertImg(H, j, U), !0;
                    }
                  },
                  bindEnter: !0
                }]
              }
            ], F = {
              width: 300,
              height: 0,
              tabs: [],
              onlyUploadConf: {
                $elem: g.default(R("w-e-menu", "w-e-icon-image", "图片")),
                events: N
              }
            };
            return window.FileReader && (s.uploadImgShowBase64 || s.uploadImgServer || s.customUploadImg || s.uploadImgFromMedia) && F.tabs.push(B[0]), s.showLinkImg && (F.tabs.push(B[1]), F.onlyUploadConf = void 0), F;
          }
          n.default = c;
        },
        /* 365 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = a.__importDefault(t(24)), d = a.__importDefault(t(366)), p = (
            /** @class */
            function(c) {
              a.__extends(l, c);
              function l(u) {
                var s = this, m = f.default(`<div class="w-e-menu" data-title="缩进">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), v = {
                  width: 130,
                  title: "设置缩进",
                  type: "list",
                  list: [{
                    $elem: f.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.增加缩进") + `
                        <p>`),
                    value: "increase"
                  }, {
                    $elem: f.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.减少缩进") + `
                        <p>`),
                    value: "decrease"
                  }],
                  clickHandler: function(A) {
                    s.command(A);
                  }
                };
                return s = c.call(this, m, u, v) || this, s;
              }
              return l.prototype.command = function(u) {
                var s = this.editor, m = s.selection.getSelectionContainerElem();
                if (m && s.$textElem.equal(m)) {
                  var v = s.selection.getSelectionRangeTopNodes();
                  v.length > 0 && (0, r.default)(v).call(v, function(h) {
                    d.default(f.default(h), u, s);
                  });
                } else
                  m && m.length > 0 && (0, r.default)(m).call(m, function(h) {
                    d.default(f.default(h), u, s);
                  });
                s.selection.restoreSelection(), this.tryChangeActive();
              }, l.prototype.tryChangeActive = function() {
                var u = this.editor, s = u.selection.getSelectionStartElem(), m = f.default(s).getNodeTop(u);
                m.length <= 0 || (m.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
              }, l;
            }(g.default)
          );
          n.default = p;
        },
        /* 366 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(45)), a = e(t(17));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(367)), d = f.__importDefault(t(368)), p = /^(\d+)(\w+)$/, c = /^(\d+)%$/;
          function l(s) {
            var m = s.config.indentation;
            if (typeof m == "string") {
              if (p.test(m)) {
                var v, h = (0, r.default)(v = (0, a.default)(m).call(m).match(p)).call(v, 1, 3), A = h[0], y = h[1];
                return {
                  value: Number(A),
                  unit: y
                };
              } else if (c.test(m))
                return {
                  value: Number((0, a.default)(m).call(m).match(c)[1]),
                  unit: "%"
                };
            } else if (m.value !== void 0 && m.unit)
              return m;
            return {
              value: 2,
              unit: "em"
            };
          }
          function u(s, m, v) {
            var h = s.getNodeTop(v), A = /^(P|H[0-9]*)$/;
            A.test(h.getNodeName()) && (m === "increase" ? g.default(h, l(v)) : m === "decrease" && d.default(h, l(v)));
          }
          n.default = u;
        },
        /* 367 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(45));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          function a(f, g) {
            var d = f.elems[0];
            if (d.style.paddingLeft === "")
              f.css("padding-left", g.value + g.unit);
            else {
              var p = d.style.paddingLeft, c = (0, r.default)(p).call(p, 0, p.length - g.unit.length), l = Number(c) + g.value;
              f.css("padding-left", "" + l + g.unit);
            }
          }
          n.default = a;
        },
        /* 368 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(45));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          function a(f, g) {
            var d = f.elems[0];
            if (d.style.paddingLeft !== "") {
              var p = d.style.paddingLeft, c = (0, r.default)(p).call(p, 0, p.length - g.unit.length), l = Number(c) - g.value;
              l > 0 ? f.css("padding-left", "" + l + g.unit) : f.css("padding-left", "");
            }
          }
          n.default = a;
        },
        /* 369 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(37)), g = r.__importDefault(t(32)), d = r.__importDefault(t(370)), p = (
            /** @class */
            function(c) {
              r.__extends(l, c);
              function l(u) {
                var s = this, m = a.default(`<div class="w-e-menu" data-title="表情">
                <i class="w-e-icon-happy"></i>
            </div>`);
                return s = c.call(this, m, u) || this, s;
              }
              return l.prototype.createPanel = function() {
                var u = d.default(this.editor), s = new g.default(this, u);
                s.create();
              }, l.prototype.clickHandler = function() {
                this.createPanel();
              }, l.prototype.tryChangeActive = function() {
              }, l;
            }(f.default)
          );
          n.default = p;
        },
        /* 370 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(26)), a = e(t(70)), f = e(t(17));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var g = t(2), d = g.__importDefault(t(3));
          function p(c) {
            var l = c.config.emotions;
            function u(v) {
              var h = [];
              if (v.type == "image") {
                var A;
                h = (0, r.default)(A = v.content).call(A, function(x) {
                  return typeof x == "string" ? "" : '<span  title="' + x.alt + `">
                    <img class="eleImg" data-emoji="` + x.alt + '" style src="' + x.src + '" alt="[' + x.alt + `]">
                </span>`;
                }), h = (0, a.default)(h).call(h, function(x) {
                  return x !== "";
                });
              } else {
                var y;
                h = (0, r.default)(y = v.content).call(y, function(x) {
                  return '<span class="eleImg" title="' + x + '">' + x + "</span>";
                });
              }
              return h.join("").replace(/&nbsp;/g, "");
            }
            var s = (0, r.default)(l).call(l, function(v) {
              return {
                title: c.i18next.t("menus.panelMenus.emoticon." + v.title),
                // 判断type类型如果是image则以img的形式插入否则以内容
                tpl: "<div>" + u(v) + "</div>",
                events: [{
                  selector: ".eleImg",
                  type: "click",
                  fn: function(A) {
                    var y = d.default(A.target), x = y.getNodeName(), S;
                    if (x === "IMG") {
                      var D;
                      S = (0, f.default)(D = y.parent().html()).call(D);
                    } else
                      S = "<span>" + y.html() + "</span>";
                    return c.cmd.do("insertHTML", S), !0;
                  }
                }]
              };
            }), m = {
              width: 300,
              height: 230,
              tabs: s
            };
            return m;
          }
          n.default = p;
        },
        /* 371 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.createListHandle = n.ClassType = void 0;
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(372)), g = r.__importDefault(t(374)), d = r.__importDefault(t(375)), p = r.__importDefault(t(376)), c = r.__importDefault(t(377)), l;
          (function(v) {
            v.Wrap = "WrapListHandle", v.Join = "JoinListHandle", v.StartJoin = "StartJoinListHandle", v.EndJoin = "EndJoinListHandle", v.Other = "OtherListHandle";
          })(l = n.ClassType || (n.ClassType = {}));
          var u = {
            WrapListHandle: f.default,
            JoinListHandle: g.default,
            StartJoinListHandle: d.default,
            EndJoinListHandle: p.default,
            OtherListHandle: c.default
          };
          function s(v, h, A) {
            if (v === l.Other && A === void 0)
              throw new Error("other 类需要传入 range");
            return v !== l.Other ? new u[v](h) : new u[v](h, A);
          }
          n.createListHandle = s;
          var m = (
            /** @class */
            function() {
              function v(h) {
                this.handle = h, this.handle.exec();
              }
              return v.prototype.getSelectionRangeElem = function() {
                return a.default(this.handle.selectionRangeElem.get());
              }, v;
            }()
          );
          n.default = m;
        },
        /* 372 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = t(58), d = t(47), p = (
            /** @class */
            function(c) {
              a.__extends(l, c);
              function l(u) {
                return c.call(this, u) || this;
              }
              return l.prototype.exec = function() {
                var u = this.options, s = u.listType, m = u.listTarget, v = u.$selectionElem, h = u.$startElem, A = u.$endElem, y, x = [], S = v == null ? void 0 : v.getNodeName(), D = h.prior, P = A.prior;
                if (!h.prior && !A.prior || !(D != null && D.prev().length) && !(P != null && P.next().length)) {
                  var C;
                  (0, r.default)(C = v == null ? void 0 : v.children()).call(C, function(F) {
                    x.push(f.default(F));
                  }), S === s ? y = d.createElementFragment(
                    x,
                    d.createDocumentFragment(),
                    // 创建 文档片段
                    "p"
                  ) : (y = d.createElement(m), (0, r.default)(x).call(x, function(F) {
                    y.appendChild(F.elems[0]);
                  })), this.selectionRangeElem.set(y), d.insertBefore(v, y, v.elems[0]), v.remove();
                } else {
                  for (var E = D; E.length; )
                    x.push(E), P != null && P.equal(E) ? E = f.default(void 0) : (
                      // 结束
                      E = E.next()
                    );
                  var T = D.prev(), R = P.next();
                  if (S === s ? y = d.createElementFragment(
                    x,
                    d.createDocumentFragment(),
                    // 创建 文档片段
                    "p"
                  ) : (y = d.createElement(m), (0, r.default)(x).call(x, function(F) {
                    y.append(F.elems[0]);
                  })), T.length && R.length) {
                    for (var N = []; R.length; )
                      N.push(R), R = R.next();
                    var M = d.createElement(S);
                    (0, r.default)(N).call(N, function(F) {
                      M.append(F.elems[0]);
                    }), f.default(M).insertAfter(v), this.selectionRangeElem.set(y);
                    var B = v.next();
                    B.length ? d.insertBefore(v, y, B.elems[0]) : v.parent().elems[0].append(y);
                  } else if (!T.length)
                    this.selectionRangeElem.set(y), d.insertBefore(v, y, v.elems[0]);
                  else {
                    this.selectionRangeElem.set(y);
                    var B = v.next();
                    B.length ? d.insertBefore(v, y, B.elems[0]) : v.parent().elems[0].append(y);
                  }
                }
              }, l;
            }(g.ListHandle)
          );
          n.default = p;
        },
        /* 373 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = (
            /** @class */
            function() {
              function f() {
                this._element = null;
              }
              return f.prototype.set = function(g) {
                if (g instanceof DocumentFragment) {
                  var d, p = [];
                  (0, r.default)(d = g.childNodes).call(d, function(c) {
                    p.push(c);
                  }), g = p;
                }
                this._element = g;
              }, f.prototype.get = function() {
                return this._element;
              }, f.prototype.clear = function() {
                this._element = null;
              }, f;
            }()
          );
          n.default = a;
        },
        /* 374 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = t(58), d = t(47), p = (
            /** @class */
            function(c) {
              a.__extends(l, c);
              function l(u) {
                return c.call(this, u) || this;
              }
              return l.prototype.exec = function() {
                var u, s, m, v, h, A, y, x = this.options, S = x.editor, D = x.listType, P = x.listTarget, C = x.$startElem, E = x.$endElem, T, R = S.selection.getSelectionRangeTopNodes(), N = C == null ? void 0 : C.getNodeName(), M = E == null ? void 0 : E.getNodeName();
                if (N === M)
                  if (R.length > 2)
                    if (R.shift(), R.pop(), T = d.createElementFragment(
                      d.filterSelectionNodes(R),
                      // 过滤 $nodes 获取到符合要求的选中元素节点
                      d.createDocumentFragment()
                      // 创建 文档片段
                    ), N === D)
                      (u = E.children()) === null || u === void 0 || (0, r.default)(u).call(u, function(J) {
                        T.append(J);
                      }), E.remove(), this.selectionRangeElem.set(T), C.elems[0].append(T);
                    else {
                      for (var B = document.createDocumentFragment(), F = document.createDocumentFragment(), O = d.getStartPoint(C); O.length; ) {
                        var b = O.elems[0];
                        O = O.next(), B.append(b);
                      }
                      for (var $ = d.getEndPoint(E), H = []; $.length; )
                        H.unshift($.elems[0]), $ = $.prev();
                      (0, r.default)(H).call(H, function(J) {
                        F.append(J);
                      });
                      var j = d.createElement(P);
                      j.append(B), j.append(T), j.append(F), T = j, this.selectionRangeElem.set(T), f.default(j).insertAfter(C), !(!((s = C.children()) === null || s === void 0) && s.length) && C.remove(), !(!((m = E.children()) === null || m === void 0) && m.length) && E.remove();
                    }
                  else {
                    R.length = 0;
                    for (var O = d.getStartPoint(C); O.length; )
                      R.push(O), O = O.next();
                    for (var $ = d.getEndPoint(E), H = []; $.length; )
                      H.unshift($), $ = $.prev();
                    R.push.apply(R, H), N === D ? (T = d.createElementFragment(R, d.createDocumentFragment(), "p"), this.selectionRangeElem.set(T), d.insertBefore(C, T, E.elems[0])) : (T = d.createElement(P), (0, r.default)(R).call(R, function(W) {
                      T.append(W.elems[0]);
                    }), this.selectionRangeElem.set(T), f.default(T).insertAfter(C)), !(!((v = C.children()) === null || v === void 0) && v.length) && E.remove(), !(!((h = E.children()) === null || h === void 0) && h.length) && E.remove();
                  }
                else {
                  for (var K = [], $ = d.getEndPoint(E); $.length; )
                    K.unshift($), $ = $.prev();
                  for (var U = [], O = d.getStartPoint(C); O.length; )
                    U.push(O), O = O.next();
                  if (T = d.createDocumentFragment(), R.shift(), R.pop(), (0, r.default)(U).call(U, function(V) {
                    return T.append(V.elems[0]);
                  }), T = d.createElementFragment(
                    d.filterSelectionNodes(R),
                    // 序列中间的数据 - 进行数据过滤
                    T
                  ), (0, r.default)(K).call(K, function(V) {
                    return T.append(V.elems[0]);
                  }), this.selectionRangeElem.set(T), N === D)
                    C.elems[0].append(T), !(!((A = E.children()) === null || A === void 0) && A.length) && E.remove();
                  else if (!((y = E.children()) === null || y === void 0) && y.length) {
                    var Q = E.children();
                    d.insertBefore(Q, T, Q.elems[0]);
                  } else
                    E.elems[0].append(T);
                }
              }, l;
            }(g.ListHandle)
          );
          n.default = p;
        },
        /* 375 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = t(58), d = t(47), p = (
            /** @class */
            function(c) {
              a.__extends(l, c);
              function l(u) {
                return c.call(this, u) || this;
              }
              return l.prototype.exec = function() {
                var u, s = this.options, m = s.editor, v = s.listType, h = s.listTarget, A = s.$startElem, y, x = m.selection.getSelectionRangeTopNodes(), S = A == null ? void 0 : A.getNodeName();
                x.shift();
                for (var D = [], P = d.getStartPoint(A); P.length; )
                  D.push(P), P = P.next();
                S === v ? (y = d.createDocumentFragment(), (0, r.default)(D).call(D, function(C) {
                  return y.append(C.elems[0]);
                }), y = d.createElementFragment(
                  d.filterSelectionNodes(x),
                  // 过滤元素节点数据
                  y
                ), this.selectionRangeElem.set(y), A.elems[0].append(y)) : (y = d.createElement(h), (0, r.default)(D).call(D, function(C) {
                  return y.append(C.elems[0]);
                }), y = d.createElementFragment(
                  d.filterSelectionNodes(x),
                  // 过滤普通节点
                  y
                ), this.selectionRangeElem.set(y), f.default(y).insertAfter(A), !(!((u = A.children()) === null || u === void 0) && u.length) && A.remove());
              }, l;
            }(g.ListHandle)
          );
          n.default = p;
        },
        /* 376 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = t(58), d = t(47), p = (
            /** @class */
            function(c) {
              a.__extends(l, c);
              function l(u) {
                return c.call(this, u) || this;
              }
              return l.prototype.exec = function() {
                var u, s, m = this.options, v = m.editor, h = m.listType, A = m.listTarget, y = m.$endElem, x, S = v.selection.getSelectionRangeTopNodes(), D = y == null ? void 0 : y.getNodeName();
                S.pop();
                for (var P = [], C = d.getEndPoint(y); C.length; )
                  P.unshift(C), C = C.prev();
                if (D === h)
                  if (x = d.createElementFragment(
                    d.filterSelectionNodes(S),
                    // 过滤元素节点数据
                    d.createDocumentFragment()
                    // 创建 文档片段
                  ), (0, r.default)(P).call(P, function(R) {
                    return x.append(R.elems[0]);
                  }), this.selectionRangeElem.set(x), !((u = y.children()) === null || u === void 0) && u.length) {
                    var E = y.children();
                    d.insertBefore(E, x, E.elems[0]);
                  } else
                    y.elems[0].append(x);
                else {
                  var T = d.filterSelectionNodes(S);
                  T.push.apply(T, P), x = d.createElementFragment(
                    T,
                    d.createElement(A)
                    // 创建 序列节点
                  ), this.selectionRangeElem.set(x), f.default(x).insertBefore(y), !(!((s = y.children()) === null || s === void 0) && s.length) && y.remove();
                }
              }, l;
            }(g.ListHandle)
          );
          n.default = p;
        },
        /* 377 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = t(58), f = t(47), g = (
            /** @class */
            function(d) {
              r.__extends(p, d);
              function p(c, l) {
                var u = d.call(this, c) || this;
                return u.range = l, u;
              }
              return p.prototype.exec = function() {
                var c = this.options, l = c.editor, u = c.listTarget, s = l.selection.getSelectionRangeTopNodes(), m = f.createElementFragment(
                  f.filterSelectionNodes(s),
                  // 过滤选取的元素
                  f.createElement(u)
                  // 创建 序列节点
                );
                this.selectionRangeElem.set(m), this.range.insertNode(m);
              }, p;
            }(a.ListHandle)
          );
          n.default = g;
        },
        /* 378 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(27));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(24)), d = f.__importDefault(t(3)), p = f.__importDefault(t(379)), c = t(6), l = (
            /** @class */
            function(u) {
              f.__extends(s, u);
              function s(m) {
                var v = this, h = d.default(`<div class="w-e-menu" data-title="行高">
                    <i class="w-e-icon-row-height"></i>
                </div>`), A = new p.default(m, m.config.lineHeights), y = {
                  width: 100,
                  title: "设置行高",
                  type: "list",
                  list: A.getItemList(),
                  clickHandler: function(S) {
                    m.selection.saveRange(), v.command(S);
                  }
                };
                return v = u.call(this, h, m, y) || this, v;
              }
              return s.prototype.command = function(m) {
                var v = this, h, A = window.getSelection ? window.getSelection() : document.getSelection(), y = ["P"], x = this.editor, S = "";
                x.selection.restoreSelection();
                var D = d.default(x.selection.getSelectionContainerElem());
                if (D != null && D.length) {
                  var P = d.default(x.selection.getSelectionContainerElem()), C = d.default(x.selection.getSelectionStartElem()).elems[0], E = "", T = [], R = "";
                  if (D && x.$textElem.equal(D)) {
                    var N = c.UA.isIE(), M = [], B = [], F = [], O = d.default(x.selection.getSelectionStartElem()), b = d.default(x.selection.getSelectionEndElem()), $ = (h = x.selection.getRange()) === null || h === void 0 ? void 0 : h.commonAncestorContainer.childNodes;
                    B.push(this.getDom(O.elems[0])), $ == null || (0, r.default)($).call($, function(Q, J) {
                      Q === v.getDom(O.elems[0]) && M.push(J), Q === v.getDom(b.elems[0]) && M.push(J);
                    });
                    var H = 0, j = void 0;
                    for (F.push(this.getDom(O.elems[0])); B[H] !== this.getDom(b.elems[0]); )
                      j = d.default(B[H].nextElementSibling).elems[0], (0, a.default)(y).call(y, d.default(j).getNodeName()) !== -1 && F.push(j), B.push(j), H++;
                    if (d.default(B[0]).getNodeName() !== "P") {
                      H = 0;
                      for (var K = 0; K < B.length; K++)
                        if (d.default(B[K]).getNodeName() === "P") {
                          H = K;
                          break;
                        }
                      if (H === 0)
                        return;
                      for (var U = 0; U !== H; )
                        B.shift(), U++;
                    }
                    this.setRange(B[0], B[B.length - 1]), (0, r.default)(B).call(B, function(Q) {
                      E = Q.getAttribute("style"), T = E ? E.split(";") : [], R = v.styleProcessing(T), d.default(Q).getNodeName() === "P" && m && (R += m ? "line-height:" + m + ";" : ""), N ? d.default(Q).css("line-height", m) : S += "<" + d.default(Q).getNodeName().toLowerCase() + ' style="' + R + '">' + Q.innerHTML + "</" + d.default(Q).getNodeName().toLowerCase() + ">";
                    }), S && this.action(S, x), C = P.elems[0], this.setRange(C.children[M[0]], C.children[M[1]]);
                    return;
                  }
                  if (C = this.getDom(C), (0, a.default)(y).call(y, d.default(C).getNodeName()) !== -1) {
                    if (E = C.getAttribute("style"), T = E ? E.split(";") : [], A == null || A.selectAllChildren(C), x.selection.saveRange(), !m) {
                      E && (R = this.styleProcessing(T), R === "" ? S = "<" + d.default(C).getNodeName().toLowerCase() + ">" + C.innerHTML + "</" + d.default(C).getNodeName().toLowerCase() + ">" : S = "<" + d.default(C).getNodeName().toLowerCase() + ' style="' + R + '">' + C.innerHTML + "</" + d.default(C).getNodeName().toLowerCase() + ">", this.action(S, x));
                      return;
                    }
                    E ? R = this.styleProcessing(T) + ("line-height:" + m + ";") : R = "line-height:" + m + ";", S = "<" + d.default(C).getNodeName().toLowerCase() + ' style="' + R + '">' + C.innerHTML + "</" + d.default(C).getNodeName().toLowerCase() + ">", d.default(C).getNodeName() === "BLOCKQUOTE" || c.UA.isIE() ? d.default(C).css("line-height", m) : this.action(S, x);
                  }
                }
              }, s.prototype.getDom = function(m) {
                var v = d.default(m).elems[0];
                if (!v.parentNode)
                  return v;
                function h(A, y) {
                  var x = d.default(A.parentNode);
                  return y.$textElem.equal(x) ? A : h(x.elems[0], y);
                }
                return v = h(v, this.editor), v;
              }, s.prototype.action = function(m, v) {
                v.cmd.do("insertHTML", m);
              }, s.prototype.styleProcessing = function(m) {
                var v = "";
                return (0, r.default)(m).call(m, function(h) {
                  h !== "" && (0, a.default)(h).call(h, "line-height") === -1 && (v = v + h + ";");
                }), v;
              }, s.prototype.setRange = function(m, v) {
                var h = this.editor, A = window.getSelection ? window.getSelection() : document.getSelection();
                A == null || A.removeAllRanges();
                var y = document.createRange(), x = m, S = v;
                y.setStart(x, 0), y.setEnd(S, 1), A == null || A.addRange(y), h.selection.saveRange(), A == null || A.removeAllRanges(), h.selection.restoreSelection();
              }, s.prototype.tryChangeActive = function() {
                var m = this.editor, v = m.selection.getSelectionContainerElem();
                if (!(v && m.$textElem.equal(v))) {
                  var h = d.default(m.selection.getSelectionStartElem());
                  if (h.length !== 0) {
                    h = this.getDom(h.elems[0]);
                    var A = h.getAttribute("style") ? h.getAttribute("style") : "";
                    A && (0, a.default)(A).call(A, "line-height") !== -1 ? this.active() : this.unActive();
                  }
                }
              }, s;
            }(g.default)
          );
          n.default = l;
        },
        /* 379 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = (
            /** @class */
            function() {
              function d(p, c) {
                var l = this;
                this.itemList = [{
                  $elem: f.default("<span>" + p.i18next.t("默认") + "</span>"),
                  value: ""
                }], (0, r.default)(c).call(c, function(u) {
                  l.itemList.push({
                    $elem: f.default("<span>" + u + "</span>"),
                    value: u
                  });
                });
              }
              return d.prototype.getItemList = function() {
                return this.itemList;
              }, d;
            }()
          );
          n.default = g;
        },
        /* 380 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(23)), g = (
            /** @class */
            function(d) {
              r.__extends(p, d);
              function p(c) {
                var l = this, u = a.default(`<div class="w-e-menu" data-title="撤销">
                <i class="w-e-icon-undo"></i>
            </div>`);
                return l = d.call(this, u, c) || this, l;
              }
              return p.prototype.clickHandler = function() {
                var c = this.editor;
                c.history.revoke();
                var l = c.$textElem.children();
                if (l != null && l.length) {
                  var u = l.last();
                  c.selection.createRangeByElem(u, !1, !0), c.selection.restoreSelection();
                }
              }, p.prototype.tryChangeActive = function() {
                this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
              }, p;
            }(f.default)
          );
          n.default = g;
        },
        /* 381 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(23)), g = (
            /** @class */
            function(d) {
              r.__extends(p, d);
              function p(c) {
                var l = this, u = a.default(`<div class="w-e-menu" data-title="恢复">
                <i class="w-e-icon-redo"></i>
            </div>`);
                return l = d.call(this, u, c) || this, l;
              }
              return p.prototype.clickHandler = function() {
                var c = this.editor;
                c.history.restore();
                var l = c.$textElem.children();
                if (l != null && l.length) {
                  var u = l.last();
                  c.selection.createRangeByElem(u, !1, !0), c.selection.restoreSelection();
                }
              }, p.prototype.tryChangeActive = function() {
                this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
              }, p;
            }(f.default)
          );
          n.default = g;
        },
        /* 382 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(37)), f = r.__importDefault(t(3)), g = r.__importDefault(t(383)), d = r.__importDefault(t(32)), p = r.__importDefault(t(392)), c = (
            /** @class */
            function(l) {
              r.__extends(u, l);
              function u(s) {
                var m = this, v = f.default('<div class="w-e-menu" data-title="表格"><i class="w-e-icon-table2"></i></div>');
                return m = l.call(this, v, s) || this, p.default(s), m;
              }
              return u.prototype.clickHandler = function() {
                this.createPanel();
              }, u.prototype.createPanel = function() {
                var s = g.default(this.editor), m = new d.default(this, s);
                m.create();
              }, u.prototype.tryChangeActive = function() {
              }, u;
            }(a.default)
          );
          n.default = c;
        },
        /* 383 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(384));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = t(6), g = a.__importDefault(t(3));
          t(389);
          var d = a.__importDefault(t(391));
          function p(l) {
            return l > 0 && (0, r.default)(l);
          }
          function c(l) {
            var u = new d.default(l), s = f.getRandom("w-col-id"), m = f.getRandom("w-row-id"), v = f.getRandom("btn-link"), h = "menus.panelMenus.table.", A = function(D) {
              return l.i18next.t(D);
            }, y = [{
              title: A(h + "插入表格"),
              tpl: `<div>
                    <div class="w-e-table">
                        <span>` + A("创建") + `</span>
                        <input id="` + m + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + A(h + "行") + `</span>
                        <input id="` + s + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (A(h + "列") + A(h + "的") + A(h + "表格")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + v + '" class="right">' + A("插入") + `</button>
                    </div>
                </div>`,
              events: [{
                selector: "#" + v,
                type: "click",
                fn: function() {
                  var D = Number(g.default("#" + s).val()), P = Number(g.default("#" + m).val());
                  return p(P) && p(D) ? (u.createAction(P, D), !0) : (l.config.customAlert("表格行列请输入正整数", "warning"), !1);
                },
                bindEnter: !0
              }]
            }], x = {
              width: 330,
              height: 0,
              tabs: []
            };
            return x.tabs.push(y[0]), x;
          }
          n.default = c;
        },
        /* 384 */
        /***/
        function(o, n, t) {
          o.exports = t(385);
        },
        /* 385 */
        /***/
        function(o, n, t) {
          var e = t(386);
          o.exports = e;
        },
        /* 386 */
        /***/
        function(o, n, t) {
          t(387);
          var e = t(9);
          o.exports = e.Number.isInteger;
        },
        /* 387 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(388);
          e({ target: "Number", stat: !0 }, {
            isInteger: i
          });
        },
        /* 388 */
        /***/
        function(o, n, t) {
          var e = t(13), i = Math.floor;
          o.exports = function(a) {
            return !e(a) && isFinite(a) && i(a) === a;
          };
        },
        /* 389 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(390);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 390 */
        /***/
        function(o, n, t) {
          var e = t(21);
          n = e(!1), n.push([o.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), o.exports = n;
        },
        /* 391 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = t(7), f = r.__importDefault(t(3)), g = (
            /** @class */
            function() {
              function d(p) {
                this.editor = p;
              }
              return d.prototype.createAction = function(p, c) {
                var l = this.editor, u = f.default(l.selection.getSelectionContainerElem()), s = f.default(u.elems[0]).parentUntilEditor("UL", l), m = f.default(u.elems[0]).parentUntilEditor("OL", l);
                if (!(s || m)) {
                  var v = this.createTableHtml(p, c);
                  l.cmd.do("insertHTML", v);
                }
              }, d.prototype.createTableHtml = function(p, c) {
                for (var l = "", u = "", s = 0; s < p; s++) {
                  u = "";
                  for (var m = 0; m < c; m++)
                    s === 0 ? u = u + "<th></th>" : u = u + "<td></td>";
                  l = l + "<tr>" + u + "</tr>";
                }
                var v = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + l + ("</tbody></table>" + a.EMPTY_P);
                return v;
              }, d;
            }()
          );
          n.default = g;
        },
        /* 392 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(393)), f = t(400);
          function g(d) {
            a.default(d), f.bindEventKeyboardEvent(d), f.bindClickEvent(d);
          }
          n.default = g;
        },
        /* 393 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(38)), g = r.__importDefault(t(394)), d = r.__importDefault(t(399)), p = t(7);
          function c(m) {
            var v;
            function h(y) {
              var x = new d.default(m), S = "menus.panelMenus.table.", D = function(E, T) {
                return T === void 0 && (T = S), m.i18next.t(T + E);
              }, P = [{
                // $elem: $("<span class='w-e-icon-trash-o'></span>"),
                $elem: a.default("<span>" + D("删除表格") + "</span>"),
                onClick: function(E, T) {
                  return E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", p.EMPTY_P), !0;
                }
              }, {
                $elem: a.default("<span>" + D("添加行") + "</span>"),
                onClick: function(E, T) {
                  var R = l(E);
                  if (R)
                    return !0;
                  var N = a.default(E.selection.getSelectionStartElem()), M = x.getRowNode(N.elems[0]);
                  if (!M)
                    return !0;
                  var B = Number(x.getCurrentRowIndex(T.elems[0], M)), F = x.getTableHtml(T.elems[0]), O = x.getTableHtml(g.default.ProcessingRow(a.default(F), B).elems[0]);
                  return O = s(T, O), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", O), !0;
                }
              }, {
                $elem: a.default("<span>" + D("删除行") + "</span>"),
                onClick: function(E, T) {
                  var R = l(E);
                  if (R)
                    return !0;
                  var N = a.default(E.selection.getSelectionStartElem()), M = x.getRowNode(N.elems[0]);
                  if (!M)
                    return !0;
                  var B = Number(x.getCurrentRowIndex(T.elems[0], M)), F = x.getTableHtml(T.elems[0]), O = g.default.DeleteRow(a.default(F), B).elems[0].children[0].children.length, b = "";
                  return E.selection.createRangeByElem(T), E.selection.restoreSelection(), O === 0 ? b = p.EMPTY_P : b = x.getTableHtml(g.default.DeleteRow(a.default(F), B).elems[0]), b = s(T, b), E.cmd.do("insertHTML", b), !0;
                }
              }, {
                $elem: a.default("<span>" + D("添加列") + "</span>"),
                onClick: function(E, T) {
                  var R = l(E);
                  if (R)
                    return !0;
                  var N = a.default(E.selection.getSelectionStartElem()), M = x.getCurrentColIndex(N.elems[0]), B = x.getTableHtml(T.elems[0]), F = x.getTableHtml(g.default.ProcessingCol(a.default(B), M).elems[0]);
                  return F = s(T, F), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
                }
              }, {
                $elem: a.default("<span>" + D("删除列") + "</span>"),
                onClick: function(E, T) {
                  var R = l(E);
                  if (R)
                    return !0;
                  var N = a.default(E.selection.getSelectionStartElem()), M = x.getCurrentColIndex(N.elems[0]), B = x.getTableHtml(T.elems[0]), F = g.default.DeleteCol(a.default(B), M), O = F.elems[0].children[0].children[0].children.length, b = "";
                  return E.selection.createRangeByElem(T), E.selection.restoreSelection(), O === 0 ? b = p.EMPTY_P : b = x.getTableHtml(F.elems[0]), b = s(T, b), E.cmd.do("insertHTML", b), !0;
                }
              }, {
                $elem: a.default("<span>" + D("设置表头") + "</span>"),
                onClick: function(E, T) {
                  var R = l(E);
                  if (R)
                    return !0;
                  var N = a.default(E.selection.getSelectionStartElem()), M = x.getRowNode(N.elems[0]);
                  if (!M)
                    return !0;
                  var B = Number(x.getCurrentRowIndex(T.elems[0], M));
                  B !== 0 && (B = 0);
                  var F = x.getTableHtml(T.elems[0]), O = x.getTableHtml(g.default.setTheHeader(a.default(F), B, "th").elems[0]);
                  return O = s(T, O), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", O), !0;
                }
              }, {
                $elem: a.default("<span>" + D("取消表头") + "</span>"),
                onClick: function(E, T) {
                  var R = a.default(E.selection.getSelectionStartElem()), N = x.getRowNode(R.elems[0]);
                  if (!N)
                    return !0;
                  var M = Number(x.getCurrentRowIndex(T.elems[0], N));
                  M !== 0 && (M = 0);
                  var B = x.getTableHtml(T.elems[0]), F = x.getTableHtml(g.default.setTheHeader(a.default(B), M, "td").elems[0]);
                  return F = s(T, F), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
                }
              }];
              v = new f.default(m, y, P), v.create();
            }
            function A() {
              v && (v.remove(), v = null);
            }
            return {
              showTableTooltip: h,
              hideTableTooltip: A
            };
          }
          function l(m) {
            var v = m.selection.getSelectionStartElem(), h = m.selection.getSelectionEndElem();
            return (v == null ? void 0 : v.elems[0]) !== (h == null ? void 0 : h.elems[0]);
          }
          function u(m) {
            var v = c(m), h = v.showTableTooltip, A = v.hideTableTooltip;
            m.txt.eventHooks.tableClickEvents.push(h), m.txt.eventHooks.clickEvents.push(A), m.txt.eventHooks.keyupEvents.push(A), m.txt.eventHooks.toolbarClickEvents.push(A), m.txt.eventHooks.menuClickEvents.push(A), m.txt.eventHooks.textScrollEvents.push(A);
          }
          n.default = u;
          function s(m, v) {
            var h = m.elems[0].nextSibling;
            return (!h || h.innerHTML === "<br>") && (v += "" + p.EMPTY_P), v;
          }
        },
        /* 394 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(45)), a = e(t(91)), f = e(t(4)), g = e(t(138));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var d = t(2), p = d.__importDefault(t(3));
          function c(A, y) {
            for (var x = h(A), S = (0, r.default)(Array.prototype).apply(x.children), D = S[0].children.length, P = document.createElement("tr"), C = 0; C < D; C++) {
              var E = document.createElement("td");
              P.appendChild(E);
            }
            return (0, a.default)(S).call(S, y + 1, 0, P), v(x, S), p.default(x.parentNode);
          }
          function l(A, y) {
            for (var x = h(A), S = (0, r.default)(Array.prototype).apply(x.children), D = function(E) {
              var T, R = [];
              for ((0, f.default)(T = (0, g.default)(S[E].children)).call(T, function(B) {
                R.push(B);
              }); S[E].children.length !== 0; )
                S[E].removeChild(S[E].children[0]);
              var N = p.default(R[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
              (0, a.default)(R).call(R, y + 1, 0, N);
              for (var M = 0; M < R.length; M++)
                S[E].appendChild(R[M]);
            }, P = 0; P < S.length; P++)
              D(P);
            return v(x, S), p.default(x.parentNode);
          }
          function u(A, y) {
            var x = h(A), S = (0, r.default)(Array.prototype).apply(x.children);
            return (0, a.default)(S).call(S, y, 1), v(x, S), p.default(x.parentNode);
          }
          function s(A, y) {
            for (var x = h(A), S = (0, r.default)(Array.prototype).apply(x.children), D = function(E) {
              var T, R = [];
              for ((0, f.default)(T = (0, g.default)(S[E].children)).call(T, function(M) {
                R.push(M);
              }); S[E].children.length !== 0; )
                S[E].removeChild(S[E].children[0]);
              (0, a.default)(R).call(R, y, 1);
              for (var N = 0; N < R.length; N++)
                S[E].appendChild(R[N]);
            }, P = 0; P < S.length; P++)
              D(P);
            return v(x, S), p.default(x.parentNode);
          }
          function m(A, y, x) {
            for (var S = h(A), D = (0, r.default)(Array.prototype).apply(S.children), P = D[y].children, C = document.createElement("tr"), E = function(N) {
              var M, B = document.createElement(x), F = P[N];
              (0, f.default)(M = (0, g.default)(F.childNodes)).call(M, function(O) {
                B.appendChild(O);
              }), C.appendChild(B);
            }, T = 0; T < P.length; T++)
              E(T);
            return (0, a.default)(D).call(D, y, 1, C), v(S, D), p.default(S.parentNode);
          }
          function v(A, y) {
            for (; A.children.length !== 0; )
              A.removeChild(A.children[0]);
            for (var x = 0; x < y.length; x++)
              A.appendChild(y[x]);
          }
          function h(A) {
            var y = A.elems[0].children[0];
            return y.nodeName === "COLGROUP" && (y = A.elems[0].children[A.elems[0].children.length - 1]), y;
          }
          n.default = {
            ProcessingRow: c,
            ProcessingCol: l,
            DeleteRow: u,
            DeleteCol: s,
            setTheHeader: m
          };
        },
        /* 395 */
        /***/
        function(o, n, t) {
          var e = t(396);
          o.exports = e;
        },
        /* 396 */
        /***/
        function(o, n, t) {
          t(50), t(397);
          var e = t(9);
          o.exports = e.Array.from;
        },
        /* 397 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(398), r = t(114), a = !r(function(f) {
            Array.from(f);
          });
          e({ target: "Array", stat: !0, forced: a }, {
            from: i
          });
        },
        /* 398 */
        /***/
        function(o, n, t) {
          var e = t(39), i = t(29), r = t(113), a = t(111), f = t(34), g = t(69), d = t(112);
          o.exports = function(c) {
            var l = i(c), u = typeof this == "function" ? this : Array, s = arguments.length, m = s > 1 ? arguments[1] : void 0, v = m !== void 0, h = d(l), A = 0, y, x, S, D, P, C;
            if (v && (m = e(m, s > 2 ? arguments[2] : void 0, 2)), h != null && !(u == Array && a(h)))
              for (D = h.call(l), P = D.next, x = new u(); !(S = P.call(D)).done; A++)
                C = v ? r(D, m, [S.value, A], !0) : S.value, g(x, A, C);
            else
              for (y = f(l.length), x = new u(y); y > A; A++)
                C = v ? m(l[A], A) : l[A], g(x, A, C);
            return x.length = A, x;
          };
        },
        /* 399 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(138));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(3)), d = (
            /** @class */
            function() {
              function p(c) {
                this.editor = c;
              }
              return p.prototype.getRowNode = function(c) {
                var l, u = g.default(c).elems[0];
                return u.parentNode && (u = (l = g.default(u).parentUntil("TR", u)) === null || l === void 0 ? void 0 : l.elems[0]), u;
              }, p.prototype.getCurrentRowIndex = function(c, l) {
                var u, s = 0, m = c.children[0];
                return m.nodeName === "COLGROUP" && (m = c.children[c.children.length - 1]), (0, r.default)(u = (0, a.default)(m.children)).call(u, function(v, h) {
                  v === l && (s = h);
                }), s;
              }, p.prototype.getCurrentColIndex = function(c) {
                var l, u, s = 0, m = g.default(c).getNodeName() === "TD" || g.default(c).getNodeName() === "TH" ? c : (u = g.default(c).parentUntil("TD", c)) === null || u === void 0 ? void 0 : u.elems[0], v = g.default(m).parent();
                return (0, r.default)(l = (0, a.default)(v.elems[0].children)).call(l, function(h, A) {
                  h === m && (s = A);
                }), s;
              }, p.prototype.getTableHtml = function(c) {
                var l = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + g.default(c).html() + "</table>";
                return l;
              }, p;
            }()
          );
          n.default = d;
        },
        /* 400 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.bindEventKeyboardEvent = n.bindClickEvent = void 0;
          var r = t(2), a = r.__importDefault(t(3));
          function f(p) {
            if (!p.length)
              return !1;
            var c = p.elems[0];
            return c.nodeName === "P" && c.innerHTML === "<br>";
          }
          function g(p) {
            function c(l, u) {
              if (u.detail >= 3) {
                var s = window.getSelection();
                if (s) {
                  var m = s.focusNode, v = s.anchorNode, h = a.default(v == null ? void 0 : v.parentElement);
                  if (!l.isContain(a.default(m))) {
                    var A = h.elems[0].tagName === "TD" ? h : h.parentUntilEditor("td", p);
                    if (A) {
                      var y = p.selection.getRange();
                      y == null || y.setEnd(A.elems[0], A.elems[0].childNodes.length), p.selection.restoreSelection();
                    }
                  }
                }
              }
            }
            p.txt.eventHooks.tableClickEvents.push(c);
          }
          n.bindClickEvent = g;
          function d(p) {
            var c = p.txt, l = p.selection, u = c.eventHooks.keydownEvents;
            u.push(function(s) {
              p.selection.saveRange();
              var m = l.getSelectionContainerElem();
              if (m) {
                var v = m.getNodeTop(p), h = v.length && v.prev().length ? v.prev() : null;
                if (h && h.getNodeName() === "TABLE" && l.isSelectionEmpty() && l.getCursorPos() === 0 && s.keyCode === 8) {
                  var A = v.next(), y = !!A.length;
                  y && f(v) && (v.remove(), p.selection.setRangeToElem(A.elems[0])), s.preventDefault();
                }
              }
            });
          }
          n.bindEventKeyboardEvent = d;
        },
        /* 401 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(26));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.formatCodeHtml = void 0;
          var a = t(2), f = a.__importDefault(t(37)), g = a.__importDefault(t(3)), d = t(6), p = a.__importDefault(t(402)), c = a.__importDefault(t(139)), l = a.__importDefault(t(32)), u = a.__importDefault(t(403));
          function s(v, h) {
            if (!h) return h;
            return h = y(h), h = A(h), h = d.replaceSpecialSymbol(h), h;
            function A(x) {
              var S = x.match(/<pre[\s|\S]+?\/pre>/g);
              return S === null || (0, r.default)(S).call(S, function(D) {
                x = x.replace(D, D.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
              }), x;
            }
            function y(x) {
              var S, D = x.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
              if (!D || !D.length) return x;
              for (var P = (0, r.default)(S = d.deepClone(D)).call(S, function(E) {
                return E = E.replace(/<span\sclass="hljs[^>]+>/, ""), E.replace(/<\/span>/, "");
              }), C = 0; C < D.length; C++)
                x = x.replace(D[C], P[C]);
              return y(x);
            }
          }
          n.formatCodeHtml = s;
          var m = (
            /** @class */
            function(v) {
              a.__extends(h, v);
              function h(A) {
                var y = this, x = g.default('<div class="w-e-menu" data-title="代码"><i class="w-e-icon-terminal"></i></div>');
                return y = v.call(this, x, A) || this, u.default(A), y;
              }
              return h.prototype.insertLineCode = function(A) {
                var y = this.editor, x = g.default("<code>" + A + "</code>");
                y.cmd.do("insertElem", x), y.selection.createRangeByElem(x, !1), y.selection.restoreSelection();
              }, h.prototype.clickHandler = function() {
                var A = this.editor, y = A.selection.getSelectionText();
                this.isActive || (A.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(y));
              }, h.prototype.createPanel = function(A, y) {
                var x = p.default(this.editor, A, y), S = new l.default(this, x);
                S.create();
              }, h.prototype.tryChangeActive = function() {
                var A = this.editor;
                c.default(A) ? this.active() : this.unActive();
              }, h;
            }(f.default)
          );
          n.default = m;
        },
        /* 402 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(26));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = t(6), g = a.__importDefault(t(3)), d = a.__importDefault(t(139)), p = t(7);
          function c(l, u, s) {
            var m, v = f.getRandom("input-iframe"), h = f.getRandom("select"), A = f.getRandom("btn-ok");
            function y(P) {
              var C, E = d.default(l);
              E && x();
              var T = (C = l.selection.getSelectionStartElem()) === null || C === void 0 ? void 0 : C.elems[0].innerHTML;
              T && l.cmd.do("insertHTML", p.EMPTY_P), l.cmd.do("insertHTML", P);
              var R = l.selection.getSelectionStartElem(), N = R == null ? void 0 : R.getNodeTop(l);
              (N == null ? void 0 : N.getNextSibling().elems.length) === 0 && g.default(p.EMPTY_P).insertAfter(N);
            }
            function x() {
              if (d.default(l)) {
                var P = l.selection.getSelectionStartElem(), C = P == null ? void 0 : P.getNodeTop(l);
                C && (l.selection.createRangeByElem(C), l.selection.restoreSelection());
              }
            }
            var S = function(C) {
              return l.i18next.t(C);
            }, D = {
              width: 500,
              height: 0,
              // panel 中可包含多个 tab
              tabs: [{
                // tab 的标题
                title: S("menus.panelMenus.code.插入代码"),
                // 模板
                tpl: `<div>
                        <select name="" id="` + h + `">
                            ` + (0, r.default)(m = l.config.languageType).call(m, function(P) {
                  return "<option " + (s == P ? "selected" : "") + ' value ="' + P + '">' + P + "</option>";
                }) + `
                        </select>
                        <textarea id="` + v + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + u.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + A + '" class="right">' + (d.default(l) ? S("修改") : S("插入")) + `</button>
                        </div>
                    </div>`,
                // 事件绑定
                events: [
                  // 插入链接
                  {
                    selector: "#" + A,
                    type: "click",
                    fn: function() {
                      var C, E, T = document.getElementById(v), R = g.default("#" + h), N = R.val(), M = T.value;
                      if (l.highlight ? C = l.highlight.highlightAuto(M).value : C = "<xmp>" + M + "</xmp>", !!M)
                        return d.default(l) ? !1 : (E = '<pre><code class="' + N + '">' + C + "</code></pre>", y(E), !0);
                    }
                  }
                ]
              }]
            };
            return D;
          }
          n.default = c;
        },
        /* 403 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(404)), f = r.__importDefault(t(405));
          function g(d) {
            a.default(d), f.default(d);
          }
          n.default = g;
        },
        /* 404 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.createShowHideFn = void 0;
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(38));
          function g(p) {
            var c;
            function l(s) {
              var m = "menus.panelMenus.code.", v = function(y, x) {
                return x === void 0 && (x = m), p.i18next.t(x + y);
              }, h = [{
                $elem: a.default("<span>" + v("删除代码") + "</span>"),
                onClick: function(y, x) {
                  return x.remove(), !0;
                }
              }];
              c = new f.default(p, s, h), c.create();
            }
            function u() {
              c && (c.remove(), c = null);
            }
            return {
              showCodeTooltip: l,
              hideCodeTooltip: u
            };
          }
          n.createShowHideFn = g;
          function d(p) {
            var c = g(p), l = c.showCodeTooltip, u = c.hideCodeTooltip;
            p.txt.eventHooks.codeClickEvents.push(l), p.txt.eventHooks.clickEvents.push(u), p.txt.eventHooks.toolbarClickEvents.push(u), p.txt.eventHooks.menuClickEvents.push(u), p.txt.eventHooks.textScrollEvents.push(u);
          }
          n.default = d;
        },
        /* 405 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = t(7), f = r.__importDefault(t(3));
          function g(d) {
            var p = d.$textElem, c = d.selection, l = d.txt, u = l.eventHooks.keydownEvents;
            u.push(function(s) {
              var m;
              if (s.keyCode === 40) {
                var v = c.getSelectionContainerElem(), h = (m = p.children()) === null || m === void 0 ? void 0 : m.last();
                if ((v == null ? void 0 : v.elems[0].tagName) === "XMP" && (h == null ? void 0 : h.elems[0].tagName) === "PRE") {
                  var A = f.default(a.EMPTY_P);
                  p.append(A);
                }
              }
            }), u.push(function(s) {
              d.selection.saveRange();
              var m = c.getSelectionContainerElem();
              if (m) {
                var v = m.getNodeTop(d), h = v == null ? void 0 : v.prev(), A = v == null ? void 0 : v.getNextSibling();
                if (h.length && (h == null ? void 0 : h.getNodeName()) === "PRE" && A.length === 0 && c.getCursorPos() === 0 && s.keyCode === 8) {
                  var y = f.default(a.EMPTY_P);
                  p.append(y);
                }
              }
            });
          }
          n.default = g;
        },
        /* 406 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(23)), f = r.__importDefault(t(3)), g = r.__importDefault(t(407)), d = t(6), p = t(7), c = (
            /** @class */
            function(l) {
              r.__extends(u, l);
              function u(s) {
                var m = this, v = f.default('<div class="w-e-menu" data-title="分割线"><i class="w-e-icon-split-line"></i></div>');
                return m = l.call(this, v, s) || this, g.default(s), m;
              }
              return u.prototype.clickHandler = function() {
                var s = this.editor, m = s.selection.getRange(), v = s.selection.getSelectionContainerElem();
                if (v != null && v.length) {
                  var h = f.default(v.elems[0]), A = h.parentUntil("TABLE", v.elems[0]), y = h.children();
                  h.getNodeName() !== "CODE" && (A && f.default(A.elems[0]).getNodeName() === "TABLE" || y && y.length !== 0 && f.default(y.elems[0]).getNodeName() === "IMG" && !(m != null && m.collapsed) || this.createSplitLine());
                }
              }, u.prototype.createSplitLine = function() {
                var s = "<hr/>" + p.EMPTY_P;
                d.UA.isFirefox && (s = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", s);
              }, u.prototype.tryChangeActive = function() {
              }, u;
            }(a.default)
          );
          n.default = c;
        },
        /* 407 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(408));
          function f(g) {
            a.default(g);
          }
          n.default = f;
        },
        /* 408 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = r.__importDefault(t(38));
          function g(p) {
            var c;
            function l(s) {
              var m = [{
                $elem: a.default("<span>" + p.i18next.t("menus.panelMenus.删除") + "</span>"),
                onClick: function(h, A) {
                  return h.selection.createRangeByElem(A), h.selection.restoreSelection(), h.cmd.do("delete"), !0;
                }
              }];
              c = new f.default(p, s, m), c.create();
            }
            function u() {
              c && (c.remove(), c = null);
            }
            return {
              showSplitLineTooltip: l,
              hideSplitLineTooltip: u
            };
          }
          function d(p) {
            var c = g(p), l = c.showSplitLineTooltip, u = c.hideSplitLineTooltip;
            p.txt.eventHooks.splitLineEvents.push(l), p.txt.eventHooks.clickEvents.push(u), p.txt.eventHooks.keyupEvents.push(u), p.txt.eventHooks.toolbarClickEvents.push(u), p.txt.eventHooks.menuClickEvents.push(u), p.txt.eventHooks.textScrollEvents.push(u);
          }
          n.default = d;
        },
        /* 409 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = a.__importDefault(t(23)), d = t(97), p = a.__importDefault(t(415)), c = a.__importDefault(t(140)), l = (
            /** @class */
            function(u) {
              a.__extends(s, u);
              function s(m) {
                var v = this, h = f.default(`<div class="w-e-menu" data-title="待办事项">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
                return v = u.call(this, h, m) || this, p.default(m), v;
              }
              return s.prototype.clickHandler = function() {
                var m = this.editor;
                d.isAllTodo(m) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
              }, s.prototype.tryChangeActive = function() {
                d.isAllTodo(this.editor) ? this.active() : this.unActive();
              }, s.prototype.setTodo = function() {
                var m = this.editor, v = m.selection.getSelectionRangeTopNodes();
                (0, r.default)(v).call(v, function(h) {
                  var A, y = h == null ? void 0 : h.getNodeName();
                  if (y === "P") {
                    var x = c.default(h), S = x.getTodo(), D = (A = S.children()) === null || A === void 0 ? void 0 : A.getNode();
                    S.insertAfter(h), m.selection.moveCursor(D), h.remove();
                  }
                }), this.tryChangeActive();
              }, s.prototype.cancelTodo = function() {
                var m = this.editor, v = m.selection.getSelectionRangeTopNodes();
                (0, r.default)(v).call(v, function(h) {
                  var A, y, x, S = (y = (A = h.childNodes()) === null || A === void 0 ? void 0 : A.childNodes()) === null || y === void 0 ? void 0 : y.clone(!0), D = f.default("<p></p>");
                  D.append(S), D.insertAfter(h), (x = D.childNodes()) === null || x === void 0 || x.get(0).remove(), m.selection.moveCursor(D.getNode()), h.remove();
                });
              }, s;
            }(g.default)
          );
          n.default = l;
        },
        /* 410 */
        /***/
        function(o, n, t) {
          o.exports = t(411);
        },
        /* 411 */
        /***/
        function(o, n, t) {
          var e = t(412);
          o.exports = e;
        },
        /* 412 */
        /***/
        function(o, n, t) {
          var e = t(413), i = Array.prototype;
          o.exports = function(r) {
            var a = r.every;
            return r === i || r instanceof Array && a === i.every ? e : a;
          };
        },
        /* 413 */
        /***/
        function(o, n, t) {
          t(414);
          var e = t(15);
          o.exports = e("Array").every;
        },
        /* 414 */
        /***/
        function(o, n, t) {
          var e = t(5), i = t(30).every, r = t(67), a = t(22), f = r("every"), g = a("every");
          e({ target: "Array", proto: !0, forced: !f || !g }, {
            every: function(p) {
              return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 415 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3)), g = t(97), d = a.__importDefault(t(140)), p = t(97), c = t(7);
          function l(u) {
            function s(A) {
              var y, x;
              if (g.isAllTodo(u)) {
                A.preventDefault();
                var S = u.selection, D = S.getSelectionRangeTopNodes()[0], P = (y = D.childNodes()) === null || y === void 0 ? void 0 : y.get(0), C = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, E = S.getRange();
                if (!(E != null && E.collapsed)) {
                  var T = E == null ? void 0 : E.commonAncestorContainer.childNodes, R = E == null ? void 0 : E.startContainer, N = E == null ? void 0 : E.endContainer, M = E == null ? void 0 : E.startOffset, B = E == null ? void 0 : E.endOffset, F = 0, O = 0, b = [];
                  T == null || (0, r.default)(T).call(T, function(W, _) {
                    W.contains(R) && (F = _), W.contains(N) && (O = _);
                  }), O - F > 1 && (T == null || (0, r.default)(T).call(T, function(W, _) {
                    _ <= F || _ >= O || b.push(W);
                  }), (0, r.default)(b).call(b, function(W) {
                    W.remove();
                  })), p.dealTextNode(R, M), p.dealTextNode(N, B, !1), u.selection.moveCursor(N, 0);
                }
                if (D.text() === "") {
                  var $ = f.default(c.EMPTY_P);
                  $.insertAfter(D), S.moveCursor($.getNode()), D.remove();
                  return;
                }
                var H = S.getCursorPos(), j = g.getCursorNextNode(P == null ? void 0 : P.getNode(), C, H), K = d.default(f.default(j)), U = K.getInputContainer(), Q = U.parent().getNode(), J = K.getTodo(), w = U.getNode().nextSibling;
                if ((P == null ? void 0 : P.text()) === "" && (P == null || P.append(f.default("<br>"))), J.insertAfter(D), !w || (w == null ? void 0 : w.textContent) === "") {
                  if ((w == null ? void 0 : w.nodeName) !== "BR") {
                    var V = f.default("<br>");
                    V.insertAfter(U);
                  }
                  S.moveCursor(Q, 1);
                } else
                  S.moveCursor(Q);
              }
            }
            function m(A) {
              var y, x;
              if (g.isAllTodo(u)) {
                var S = u.selection, D = S.getSelectionRangeTopNodes()[0], P = (y = D.childNodes()) === null || y === void 0 ? void 0 : y.getNode(), C = f.default("<p></p>"), E = C.getNode(), T = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, R = S.getCursorPos(), N = T.previousSibling;
                if (D.text() === "") {
                  A.preventDefault();
                  var M = f.default(c.EMPTY_P);
                  M.insertAfter(D), D.remove(), S.moveCursor(M.getNode(), 0);
                  return;
                }
                if ((N == null ? void 0 : N.nodeName) === "SPAN" && N.childNodes[0].nodeName === "INPUT" && R === 0) {
                  var B;
                  A.preventDefault(), P == null || (0, r.default)(B = P.childNodes).call(B, function(F, O) {
                    O !== 0 && E.appendChild(F.cloneNode(!0));
                  }), C.insertAfter(D), D.remove();
                }
              }
            }
            function v() {
              var A = u.selection, y = A.getSelectionRangeTopNodes()[0];
              y && p.isTodo(y) && y.text() === "" && (f.default(c.EMPTY_P).insertAfter(y), y.remove());
            }
            function h(A) {
              A && A.target instanceof HTMLInputElement && A.target.type === "checkbox" && (A.target.checked ? A.target.setAttribute("checked", "true") : A.target.removeAttribute("checked"));
            }
            u.txt.eventHooks.enterDownEvents.push(s), u.txt.eventHooks.deleteUpEvents.push(v), u.txt.eventHooks.deleteDownEvents.push(m), u.txt.eventHooks.clickEvents.push(h);
          }
          n.default = l;
        },
        /* 416 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.selectorValidator = void 0;
          var r = t(2), a = r.__importDefault(t(3)), f = t(6), g = t(7), d = r.__importDefault(t(129)), p = {
            border: "1px solid #c9d8db",
            toolbarBgColor: "#FFF",
            toolbarBottomBorder: "1px solid #EEE"
          };
          function c(u) {
            var s = u.toolbarSelector, m = a.default(s), v = u.textSelector, h = u.config, A = h.height, y = u.i18next, x = a.default("<div></div>"), S = a.default("<div></div>"), D, P, C = null;
            v == null ? (P = m.children(), m.append(x).append(S), x.css("background-color", p.toolbarBgColor).css("border", p.border).css("border-bottom", p.toolbarBottomBorder), S.css("border", p.border).css("border-top", "none").css("height", A + "px")) : (m.append(x), C = a.default(v).children(), a.default(v).append(S), P = S.children()), D = a.default("<div></div>"), D.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
            var E, T = u.config.placeholder;
            T !== d.default.placeholder ? E = a.default("<div>" + T + "</div>") : E = a.default("<div>" + y.t(T) + "</div>"), E.addClass("placeholder"), P && P.length ? (D.append(P), E.hide()) : D.append(a.default(g.EMPTY_P)), C && C.length && (D.append(C), E.hide()), S.append(D), S.append(E), x.addClass("w-e-toolbar").css("z-index", u.zIndex.get("toolbar")), S.addClass("w-e-text-container"), S.css("z-index", u.zIndex.get()), D.addClass("w-e-text");
            var R = f.getRandom("toolbar-elem");
            x.attr("id", R);
            var N = f.getRandom("text-elem");
            D.attr("id", N);
            var M = S.getBoundingClientRect().height, B = D.getBoundingClientRect().height;
            M !== B && D.css("min-height", M + "px"), u.$toolbarElem = x, u.$textContainerElem = S, u.$textElem = D, u.toolbarElemId = R, u.textElemId = N;
          }
          n.default = c;
          function l(u) {
            var s = "data-we-id", m = /^wangEditor-\d+$/, v = u.textSelector, h = u.toolbarSelector, A = {
              bar: a.default("<div></div>"),
              text: a.default("<div></div>")
            };
            if (h == null)
              throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");
            if (A.bar = a.default(h), !A.bar.elems.length)
              throw new Error("无效的节点选择器：" + h);
            if (m.test(A.bar.attr(s)))
              throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
            if (v) {
              if (A.text = a.default(v), !A.text.elems.length)
                throw new Error("无效的节点选择器：" + v);
              if (m.test(A.text.attr(s)))
                throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
            }
            A.bar.attr(s, u.id), A.text.attr(s, u.id), u.beforeDestroy(function() {
              A.bar.removeAttr(s), A.text.removeAttr(s);
            });
          }
          n.selectorValidator = l;
        },
        /* 417 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(3)), f = t(7);
          function g(d, p) {
            var c = d.$textElem, l = c.children();
            if (!l || !l.length) {
              c.append(a.default(f.EMPTY_P)), g(d);
              return;
            }
            var u = l.last();
            if (p) {
              var s = u.html().toLowerCase(), m = u.getNodeName();
              if (s !== "<br>" && s !== "<br/>" || m !== "P") {
                c.append(a.default(f.EMPTY_P)), g(d);
                return;
              }
            }
            d.selection.createRangeByElem(u, !1, !0), d.config.focus ? d.selection.restoreSelection() : d.selection.clearWindowSelectionRange();
          }
          n.default = g;
        },
        /* 418 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3));
          function g(s) {
            d(s), p(s), c(s);
          }
          function d(s) {
            s.txt.eventHooks.changeEvents.push(function() {
              var m = s.config.onchange;
              if (m) {
                var v = s.txt.html() || "";
                s.isFocus = !0, m(v);
              }
              s.txt.togglePlaceholder();
            });
          }
          function p(s) {
            s.isFocus = !1;
            function m(v) {
              var h = v.target, A = f.default(h), y = s.$textElem, x = s.$toolbarElem, S = y.isContain(A), D = x.isContain(A), P = x.elems[0] == v.target;
              if (S)
                s.isFocus || u(s), s.isFocus = !0;
              else {
                if (D && !P || !s.isFocus)
                  return;
                l(s), s.isFocus = !1;
              }
            }
            document.activeElement === s.$textElem.elems[0] && s.config.focus && (u(s), s.isFocus = !0), f.default(document).on("click", m), s.beforeDestroy(function() {
              f.default(document).off("click", m);
            });
          }
          function c(s) {
            s.$textElem.on("compositionstart", function() {
              s.isComposing = !0, s.txt.togglePlaceholder();
            }).on("compositionend", function() {
              s.isComposing = !1, s.txt.togglePlaceholder();
            });
          }
          function l(s) {
            var m, v = s.config, h = v.onblur, A = s.txt.html() || "";
            (0, r.default)(m = s.txt.eventHooks.onBlurEvents).call(m, function(y) {
              return y();
            }), h(A);
          }
          function u(s) {
            var m = s.config, v = m.onfocus, h = s.txt.html() || "";
            v(h);
          }
          n.default = g;
        },
        /* 419 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          function r(a) {
            var f = a.config, g = f.lang, d = f.languages;
            if (a.i18next != null) {
              try {
                a.i18next.init({
                  ns: "wangEditor",
                  lng: g,
                  defaultNS: "wangEditor",
                  resources: d
                });
              } catch (p) {
                throw new Error("i18next:" + p);
              }
              return;
            }
            a.i18next = {
              t: function(c) {
                var l = c.split(".");
                return l[l.length - 1];
              }
            };
          }
          n.default = r;
        },
        /* 420 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(31));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.setUnFullScreen = n.setFullScreen = void 0;
          var a = t(2), f = a.__importDefault(t(3));
          t(421);
          var g = "w-e-icon-fullscreen", d = "w-e-icon-fullscreen_exit", p = "w-e-full-screen-editor";
          n.setFullScreen = function(l) {
            var u = f.default(l.toolbarSelector), s = l.$textContainerElem, m = l.$toolbarElem, v = (0, r.default)(m).call(m, "i." + g), h = l.config;
            v.removeClass(g), v.addClass(d), u.addClass(p), u.css("z-index", h.zIndexFullScreen);
            var A = m.getBoundingClientRect();
            s.css("height", "calc(100% - " + A.height + "px)");
          }, n.setUnFullScreen = function(l) {
            var u = f.default(l.toolbarSelector), s = l.$textContainerElem, m = l.$toolbarElem, v = (0, r.default)(m).call(m, "i." + d), h = l.config;
            v.removeClass(d), v.addClass(g), u.removeClass(p), u.css("z-index", "auto"), s.css("height", h.height + "px");
          };
          var c = function(u) {
            if (!u.textSelector && u.config.showFullScreen) {
              var s = u.$toolbarElem, m = f.default(`<div class="w-e-menu" data-title="全屏">
            <i class="` + g + `"></i>
        </div>`);
              m.on("click", function(v) {
                var h, A = (0, r.default)(h = f.default(v.currentTarget)).call(h, "i");
                A.hasClass(g) ? (m.attr("data-title", "取消全屏"), n.setFullScreen(u)) : (m.attr("data-title", "全屏"), n.setUnFullScreen(u));
              }), s.append(m);
            }
          };
          n.default = c;
        },
        /* 421 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(422);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 422 */
        /***/
        function(o, n, t) {
          var e = t(21);
          n = e(!1), n.push([o.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), o.exports = n;
        },
        /* 423 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(31));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = function(g, d) {
            var p, c = g.isEnable ? g.$textElem : (0, r.default)(p = g.$textContainerElem).call(p, ".w-e-content-mantle"), l = (0, r.default)(c).call(c, "[id='" + d + "']"), u = l.getOffsetData().top;
            c.scrollTop(u);
          };
          n.default = a;
        },
        /* 424 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(128)), f = {
            menu: 2,
            panel: 2,
            toolbar: 1,
            tooltip: 1,
            textContainer: 1
          }, g = (
            /** @class */
            function() {
              function d() {
                this.tier = f, this.baseZIndex = a.default.zIndex;
              }
              return d.prototype.get = function(p) {
                return p && this.tier[p] ? this.baseZIndex + this.tier[p] : this.baseZIndex;
              }, d.prototype.init = function(p) {
                this.baseZIndex == a.default.zIndex && (this.baseZIndex = p.config.zIndex);
              }, d;
            }()
          );
          n.default = g;
        },
        /* 425 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(70)), a = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var f = t(2), g = f.__importDefault(t(426)), d = t(6), p = t(7);
          function c(u, s) {
            return (0, r.default)(u).call(u, function(m) {
              var v = m.type, h = m.target, A = m.attributeName;
              return v != "attributes" || v == "attributes" && (A == "contenteditable" || h != s);
            });
          }
          var l = (
            /** @class */
            function(u) {
              f.__extends(s, u);
              function s(m) {
                var v = u.call(this, function(h, A) {
                  var y;
                  if (h = c(h, A.target), (y = v.data).push.apply(y, h), m.isCompatibleMode)
                    v.asyncSave();
                  else if (!m.isComposing)
                    return v.asyncSave();
                }) || this;
                return v.editor = m, v.data = [], v.asyncSave = p.EMPTY_FN, v;
              }
              return s.prototype.save = function() {
                this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
              }, s.prototype.emit = function() {
                var m;
                (0, a.default)(m = this.editor.txt.eventHooks.changeEvents).call(m, function(v) {
                  return v();
                });
              }, s.prototype.observe = function() {
                var m = this;
                u.prototype.observe.call(this, this.editor.$textElem.elems[0]);
                var v = this.editor.config.onchangeTimeout;
                this.asyncSave = d.debounce(function() {
                  m.save();
                }, v), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
                  m.asyncSave();
                });
              }, s;
            }(g.default)
          );
          n.default = l;
        },
        /* 426 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = (
            /** @class */
            function() {
              function a(f, g) {
                var d = this;
                this.options = {
                  subtree: !0,
                  childList: !0,
                  attributes: !0,
                  attributeOldValue: !0,
                  characterData: !0,
                  characterDataOldValue: !0
                }, this.callback = function(p) {
                  f(p, d);
                }, this.observer = new MutationObserver(this.callback), g && (this.options = g);
              }
              return (0, i.default)(a.prototype, "target", {
                get: function() {
                  return this.node;
                },
                enumerable: !1,
                configurable: !0
              }), a.prototype.observe = function(f) {
                this.node instanceof Node || (this.node = f, this.connect());
              }, a.prototype.connect = function() {
                if (this.node)
                  return this.observer.observe(this.node, this.options), this;
                throw new Error("还未初始化绑定，请您先绑定有效的 Node 节点");
              }, a.prototype.disconnect = function() {
                var f = this.observer.takeRecords();
                f.length && this.callback(f), this.observer.disconnect();
              }, a;
            }()
          );
          n.default = r;
        },
        /* 427 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(428)), f = r.__importDefault(t(435)), g = r.__importDefault(t(436)), d = (
            /** @class */
            function() {
              function p(c) {
                this.editor = c, this.content = new a.default(c), this.scroll = new f.default(c), this.range = new g.default(c);
              }
              return (0, i.default)(p.prototype, "size", {
                /**
                 *  获取缓存中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
                 */
                get: function() {
                  return this.scroll.size;
                },
                enumerable: !1,
                configurable: !0
              }), p.prototype.observe = function() {
                this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
              }, p.prototype.save = function(c) {
                c.length && (this.content.save(c), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
              }, p.prototype.revoke = function() {
                this.editor.change.disconnect();
                var c = this.content.revoke();
                c && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), c && this.editor.change.emit();
              }, p.prototype.restore = function() {
                this.editor.change.disconnect();
                var c = this.content.restore();
                c && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), c && this.editor.change.emit();
              }, p;
            }()
          );
          n.default = d;
        },
        /* 428 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(429)), f = r.__importDefault(t(433)), g = (
            /** @class */
            function() {
              function d(p) {
                this.editor = p;
              }
              return d.prototype.observe = function() {
                this.editor.isCompatibleMode ? this.cache = new f.default(this.editor) : this.cache = new a.default(this.editor), this.cache.observe();
              }, d.prototype.save = function(p) {
                this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(p);
              }, d.prototype.revoke = function() {
                var p;
                return (p = this.cache) === null || p === void 0 ? void 0 : p.revoke();
              }, d.prototype.restore = function() {
                var p;
                return (p = this.cache) === null || p === void 0 ? void 0 : p.restore();
              }, d;
            }()
          );
          n.default = g;
        },
        /* 429 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(98)), f = r.__importDefault(t(431)), g = t(432), d = (
            /** @class */
            function(p) {
              r.__extends(c, p);
              function c(l) {
                var u = p.call(this, l.config.historyMaxSize) || this;
                return u.editor = l, u;
              }
              return c.prototype.observe = function() {
                this.resetMaxSize(this.editor.config.historyMaxSize);
              }, c.prototype.compile = function(l) {
                return this.save(f.default(l)), this;
              }, c.prototype.revoke = function() {
                return p.prototype.revoke.call(this, function(l) {
                  g.revoke(l);
                });
              }, c.prototype.restore = function() {
                return p.prototype.restore.call(this, function(l) {
                  g.restore(l);
                });
              }, c;
            }(a.default)
          );
          n.default = d;
        },
        /* 430 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.CeilStack = void 0;
          var r = (
            /** @class */
            function() {
              function a(f) {
                f === void 0 && (f = 0), this.data = [], this.max = 0, this.reset = !1, f = Math.abs(f), f && (this.max = f);
              }
              return a.prototype.resetMax = function(f) {
                f = Math.abs(f), !this.reset && !isNaN(f) && (this.max = f, this.reset = !0);
              }, (0, i.default)(a.prototype, "size", {
                /**
                 * 当前栈中的数据条数
                 */
                get: function() {
                  return this.data.length;
                },
                enumerable: !1,
                configurable: !0
              }), a.prototype.instack = function(f) {
                return this.data.unshift(f), this.max && this.size > this.max && (this.data.length = this.max), this;
              }, a.prototype.outstack = function() {
                return this.data.shift();
              }, a.prototype.clear = function() {
                return this.data.length = 0, this;
              }, a;
            }()
          );
          n.CeilStack = r;
        },
        /* 431 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(27));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.compliePosition = n.complieNodes = n.compileValue = n.compileType = void 0;
          var f = t(6);
          function g(m) {
            switch (m) {
              case "childList":
                return "node";
              case "attributes":
                return "attr";
              default:
                return "text";
            }
          }
          n.compileType = g;
          function d(m) {
            switch (m.type) {
              case "attributes":
                return m.target.getAttribute(m.attributeName) || "";
              case "characterData":
                return m.target.textContent;
              default:
                return "";
            }
          }
          n.compileValue = d;
          function p(m) {
            var v = {};
            return m.addedNodes.length && (v.add = f.toArray(m.addedNodes)), m.removedNodes.length && (v.remove = f.toArray(m.removedNodes)), v;
          }
          n.complieNodes = p;
          function c(m) {
            var v;
            return m.previousSibling ? v = {
              type: "before",
              target: m.previousSibling
            } : m.nextSibling ? v = {
              type: "after",
              target: m.nextSibling
            } : v = {
              type: "parent",
              target: m.target
            }, v;
          }
          n.compliePosition = c;
          var l = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
          function u(m) {
            var v = [], h = !1, A = [];
            return (0, r.default)(m).call(m, function(y, x) {
              var S = {
                type: g(y.type),
                target: y.target,
                attr: y.attributeName || "",
                value: d(y) || "",
                oldValue: y.oldValue || "",
                nodes: p(y),
                position: c(y)
              };
              if (v.push(S), !!f.UA.isFirefox) {
                if (h && y.addedNodes.length && y.addedNodes[0].nodeType == 1) {
                  var D = y.addedNodes[0], P = {
                    type: "node",
                    target: D,
                    attr: "",
                    value: "",
                    oldValue: "",
                    nodes: {
                      add: [h]
                    },
                    position: {
                      type: "parent",
                      target: D
                    }
                  };
                  (0, a.default)(l).call(l, D.nodeName) != -1 ? (P.nodes.add = f.toArray(D.childNodes), v.push(P)) : h.nodeType == 3 ? (s(D, A) && (P.nodes.add = f.toArray(D.childNodes)), v.push(P)) : (0, a.default)(l).call(l, y.target.nodeName) == -1 && s(D, A) && (P.nodes.add = f.toArray(D.childNodes), v.push(P));
                }
                S.type == "node" && y.removedNodes.length == 1 ? (h = y.removedNodes[0], A.push(h)) : (h = !1, A.length = 0);
              }
            }), v;
          }
          n.default = u;
          function s(m, v) {
            for (var h = 0, A = v.length - 1; A > 0 && m.contains(v[A]); A--)
              h++;
            return h;
          }
        },
        /* 432 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(94));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.restore = n.revoke = void 0;
          function f(A, y) {
            var x = A.position.target;
            switch (A.position.type) {
              case "before":
                x.nextSibling ? (x = x.nextSibling, (0, r.default)(y).call(y, function(S) {
                  A.target.insertBefore(S, x);
                })) : (0, r.default)(y).call(y, function(S) {
                  A.target.appendChild(S);
                });
                break;
              case "after":
                (0, r.default)(y).call(y, function(S) {
                  A.target.insertBefore(S, x);
                });
                break;
              default:
                (0, r.default)(y).call(y, function(S) {
                  x.appendChild(S);
                });
                break;
            }
          }
          function g(A) {
            for (var y = 0, x = (0, a.default)(A.nodes); y < x.length; y++) {
              var S = x[y], D = S[0], P = S[1];
              switch (D) {
                case "add":
                  (0, r.default)(P).call(P, function(C) {
                    A.target.removeChild(C);
                  });
                  break;
                default: {
                  f(A, P);
                  break;
                }
              }
            }
          }
          function d(A) {
            var y = A.target;
            A.oldValue == null ? y.removeAttribute(A.attr) : y.setAttribute(A.attr, A.oldValue);
          }
          function p(A) {
            A.target.textContent = A.oldValue;
          }
          var c = {
            node: g,
            text: p,
            attr: d
          };
          function l(A) {
            for (var y = A.length - 1; y > -1; y--) {
              var x = A[y];
              c[x.type](x);
            }
          }
          n.revoke = l;
          function u(A) {
            for (var y = 0, x = (0, a.default)(A.nodes); y < x.length; y++) {
              var S = x[y], D = S[0], P = S[1];
              switch (D) {
                case "add": {
                  f(A, P);
                  break;
                }
                default: {
                  (0, r.default)(P).call(P, function(C) {
                    C.parentNode.removeChild(C);
                  });
                  break;
                }
              }
            }
          }
          function s(A) {
            A.target.textContent = A.value;
          }
          function m(A) {
            A.target.setAttribute(A.attr, A.value);
          }
          var v = {
            node: u,
            text: s,
            attr: m
          };
          function h(A) {
            for (var y = 0, x = A; y < x.length; y++) {
              var S = x[y];
              v[S.type](S);
            }
          }
          n.restore = h;
        },
        /* 433 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(434), a = (
            /** @class */
            function() {
              function f(g) {
                this.editor = g, this.data = new r.TailChain();
              }
              return f.prototype.observe = function() {
                this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
              }, f.prototype.save = function() {
                return this.data.insertLast(this.editor.$textElem.html()), this;
              }, f.prototype.revoke = function() {
                var g = this.data.prev();
                return g ? (this.editor.$textElem.html(g), !0) : !1;
              }, f.prototype.restore = function() {
                var g = this.data.next();
                return g ? (this.editor.$textElem.html(g), !0) : !1;
              }, f;
            }()
          );
          n.default = a;
        },
        /* 434 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(91));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.TailChain = void 0;
          var a = (
            /** @class */
            function() {
              function f() {
                this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
              }
              return f.prototype.resetMax = function(g) {
                g = Math.abs(g), g && (this.max = g);
              }, (0, i.default)(f.prototype, "size", {
                /**
                 * 当前链表的长度
                 */
                get: function() {
                  return this.data.length;
                },
                enumerable: !1,
                configurable: !0
              }), f.prototype.insertLast = function(g) {
                if (this.isRe) {
                  var d;
                  (0, r.default)(d = this.data).call(d, this.point + 1), this.isRe = !1;
                }
                for (this.data.push(g); this.max && this.size > this.max; )
                  this.data.shift();
                return this.point = this.size - 1, this;
              }, f.prototype.current = function() {
                return this.data[this.point];
              }, f.prototype.prev = function() {
                if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
                  this.point = 0;
                  return;
                }
                return this.current();
              }, f.prototype.next = function() {
                if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
                  this.point = this.size - 1;
                  return;
                }
                return this.current();
              }, f;
            }()
          );
          n.TailChain = a;
        },
        /* 435 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(98)), f = (
            /** @class */
            function(g) {
              r.__extends(d, g);
              function d(p) {
                var c = g.call(this, p.config.historyMaxSize) || this;
                return c.editor = p, c.last = 0, c.target = p.$textElem.elems[0], c;
              }
              return d.prototype.observe = function() {
                var p = this;
                this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
                  p.last = p.target.scrollTop;
                }), this.resetMaxSize(this.editor.config.historyMaxSize);
              }, d.prototype.save = function() {
                return g.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
              }, d.prototype.revoke = function() {
                var p = this;
                return g.prototype.revoke.call(this, function(c) {
                  p.target.scrollTop = c[0];
                });
              }, d.prototype.restore = function() {
                var p = this;
                return g.prototype.restore.call(this, function(c) {
                  p.target.scrollTop = c[1];
                });
              }, d;
            }(a.default)
          );
          n.default = f;
        },
        /* 436 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = t(2), a = r.__importDefault(t(98)), f = r.__importDefault(t(3)), g = t(6);
          function d(c) {
            return {
              start: [c.startContainer, c.startOffset],
              end: [c.endContainer, c.endOffset],
              root: c.commonAncestorContainer,
              collapsed: c.collapsed
            };
          }
          var p = (
            /** @class */
            function(c) {
              r.__extends(l, c);
              function l(u) {
                var s = c.call(this, u.config.historyMaxSize) || this;
                return s.editor = u, s.lastRange = d(document.createRange()), s.root = u.$textElem.elems[0], s.updateLastRange = g.debounce(function() {
                  s.lastRange = d(s.rangeHandle);
                }, u.config.onchangeTimeout), s;
              }
              return (0, i.default)(l.prototype, "rangeHandle", {
                /**
                 * 获取 Range 对象
                 */
                get: function() {
                  var s = document.getSelection();
                  return s && s.rangeCount ? s.getRangeAt(0) : document.createRange();
                },
                enumerable: !1,
                configurable: !0
              }), l.prototype.observe = function() {
                var u = this;
                this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
                function s() {
                  var v = u.rangeHandle;
                  (u.root === v.commonAncestorContainer || u.root.contains(v.commonAncestorContainer)) && (u.editor.isComposing || u.updateLastRange());
                }
                function m(v) {
                  (v.key == "Backspace" || v.key == "Delete") && u.updateLastRange();
                }
                f.default(document).on("selectionchange", s), this.editor.beforeDestroy(function() {
                  f.default(document).off("selectionchange", s);
                }), u.editor.$textElem.on("keydown", m);
              }, l.prototype.save = function() {
                var u = d(this.rangeHandle);
                return c.prototype.save.call(this, [this.lastRange, u]), this.lastRange = u, this;
              }, l.prototype.set = function(u) {
                try {
                  if (u) {
                    var s = this.rangeHandle;
                    return s.setStart.apply(s, u.start), s.setEnd.apply(s, u.end), this.editor.menus.changeActive(), !0;
                  }
                } catch {
                  return !1;
                }
                return !1;
              }, l.prototype.revoke = function() {
                var u = this;
                return c.prototype.revoke.call(this, function(s) {
                  u.set(s[0]);
                });
              }, l.prototype.restore = function() {
                var u = this;
                return c.prototype.restore.call(this, function(s) {
                  u.set(s[1]);
                });
              }, l;
            }(a.default)
          );
          n.default = p;
        },
        /* 437 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(31));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var a = t(2), f = a.__importDefault(t(3));
          t(438);
          function g(d) {
            var p = !1, c, l;
            d.txt.eventHooks.changeEvents.push(function() {
              p && (0, r.default)(c).call(c, ".w-e-content-preview").html(d.$textElem.html());
            });
            function u() {
              if (!p) {
                d.$textElem.hide();
                var m = d.zIndex.get("textContainer"), v = d.txt.html();
                c = f.default('<div class="w-e-content-mantle" style="z-index:' + m + `">
                <div class="w-e-content-preview w-e-text">` + v + `</div>
            </div>`), d.$textContainerElem.append(c);
                var h = d.zIndex.get("menu");
                l = f.default('<div class="w-e-menue-mantle" style="z-index:' + h + '"></div>'), d.$toolbarElem.append(l), p = !0, d.isEnable = !1;
              }
            }
            function s() {
              p && (c.remove(), l.remove(), d.$textElem.show(), p = !1, d.isEnable = !0);
            }
            return {
              disable: u,
              enable: s
            };
          }
          n.default = g;
        },
        /* 438 */
        /***/
        function(o, n, t) {
          var e = t(20), i = t(439);
          i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
          var r = {};
          r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
        },
        /* 439 */
        /***/
        function(o, n, t) {
          var e = t(21);
          n = e(!1), n.push([o.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), o.exports = n;
        },
        /* 440 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
          var r = (
            /** @class */
            function() {
              function a(f) {
                var g = this;
                this.editor = f;
                var d = function() {
                  var c = document.activeElement;
                  c === f.$textElem.elems[0] && g.emit();
                };
                window.document.addEventListener("selectionchange", d), this.editor.beforeDestroy(function() {
                  window.document.removeEventListener("selectionchange", d);
                });
              }
              return a.prototype.emit = function() {
                var f, g = this.editor.config.onSelectionChange;
                if (g) {
                  var d = this.editor.selection;
                  d.saveRange(), d.isSelectionEmpty() || g({
                    // 当前文本
                    text: d.getSelectionText(),
                    // 当前的html
                    html: (f = d.getSelectionContainerElem()) === null || f === void 0 ? void 0 : f.elems[0].innerHTML,
                    // select对象
                    selection: d
                  });
                }
              }, a;
            }()
          );
          n.default = r;
        },
        /* 441 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1)), r = e(t(127)), a = e(t(94)), f = e(t(4));
          (0, i.default)(n, "__esModule", {
            value: !0
          }), n.registerPlugin = void 0;
          var g = t(2), d = g.__importDefault(t(87)), p = t(6);
          function c(u, s, m) {
            if (!u)
              throw new TypeError("name is not define");
            if (!s)
              throw new TypeError("options is not define");
            if (!s.intention)
              throw new TypeError("options.intention is not define");
            if (s.intention && typeof s.intention != "function")
              throw new TypeError("options.intention is not function");
            m[u] && console.warn("plugin " + u + " 已存在，已覆盖。"), m[u] = s;
          }
          n.registerPlugin = c;
          function l(u) {
            var s = (0, r.default)({}, p.deepClone(d.default.globalPluginsFunctionList), p.deepClone(u.pluginsFunctionList)), m = (0, a.default)(s);
            (0, f.default)(m).call(m, function(v) {
              var h = v[0], A = v[1];
              console.info("plugin " + h + " initializing");
              var y = A.intention, x = A.config;
              y(u, x), console.info("plugin " + h + " initialization complete");
            });
          }
          n.default = l;
        },
        /* 442 */
        /***/
        function(o, n, t) {
          var e = t(0), i = e(t(1));
          (0, i.default)(n, "__esModule", {
            value: !0
          });
        }
        /******/
      ]).default
    );
  });
})(Dn);
var fc = Dn.exports;
const cc = /* @__PURE__ */ en(fc), dc = {
  key: 2,
  id: "editor"
}, vc = /* @__PURE__ */ In({
  __name: "index",
  props: {
    // 表单的配置项
    options: {
      type: Array,
      required: !0
    },
    // 用户自定义上传方法
    httpRequest: {
      type: Function
    }
  },
  emits: [
    "on-preview",
    "on-remove",
    "on-success",
    "on-error",
    "on-progress",
    "on-change",
    "before-upload",
    "before-remove",
    "on-exceed"
  ],
  setup(I, { expose: L, emit: o }) {
    let n = o, t = I, e = Kt(null), i = Kt(null), r = Kt(), a = Kt(), f = () => {
      if (t.options && t.options.length) {
        let x = {}, S = {};
        t.options.map((D) => {
          x[D.prop] = D.value, S[D.prop] = D.rules, D.type === "editor" && Bn(() => {
            if (document.getElementById("editor")) {
              const P = new cc("#editor");
              P.config.placeholder = D.placeholder, P.create(), P.txt.html(D.value), P.config.onchange = (C) => {
                e.value[D.prop] = C;
              }, a.value = P;
            }
          });
        }), e.value = tn(x), i.value = tn(S);
      }
    };
    L({
      resetFields: () => {
        if (r.value.resetFields(), t.options && t.options.length) {
          let x = t.options.find((S) => S.type === "editor");
          a.value.txt.html(x.value);
        }
      },
      validate: () => r.value.validate,
      // 向外暴露 获取表单数据的方法，而不是暴露 model: model.value ，这样只会获取初始值。
      getFormData: () => e.value
    }), Rn(() => {
      f();
    }), Mn(
      () => t.options,
      () => {
        f();
      },
      {
        deep: !0
      }
    );
    let c = (x) => {
      n("on-preview", x);
    }, l = (x, S) => {
      n("on-remove", {
        uploadFile: x,
        uploadFiles: S
      });
    }, u = (x, S, D) => {
      let P = t.options.find((C) => C.type === "upload");
      e.value[P.prop] = { response: x, uploadFile: S, uploadFiles: D }, n("on-success", {
        response: x,
        uploadFile: S,
        uploadFiles: D
      });
    }, s = (x, S, D) => {
      n("on-error", {
        error: x,
        uploadFile: S,
        uploadFiles: D
      });
    }, m = (x, S, D) => {
      n("on-progress", {
        evt: x,
        uploadFile: S,
        uploadFiles: D
      });
    }, v = (x, S) => {
      let D = t.options.find((P) => P.type === "upload");
      D != null && D.uploadAttrs.autoUpload || (e.value[D.prop] = {
        handlerType: "onChange",
        uploadFile: x,
        uploadFiles: S
      }), n("on-change", {
        uploadFile: x,
        uploadFiles: S
      });
    }, h = (x, S) => {
      n("on-exceed", {
        files: x,
        uploadFiles: S
      });
    }, A = (x) => {
      n("before-upload", x);
    }, y = (x, S) => {
      n("before-remove", {
        uploadFile: x,
        uploadFiles: S
      });
    };
    return (x, S) => {
      const D = le("el-upload"), P = le("el-form-item"), C = le("el-form");
      return lt(e) ? (dt(), St(C, Jt({
        key: 0,
        ref_key: "form",
        ref: r,
        "validate-on-rule-change": !1,
        model: lt(e),
        rules: lt(i)
      }, x.$attrs), {
        default: Ft(() => [
          (dt(!0), Wt(
            se,
            null,
            Re(I.options, (E, T) => (dt(), Wt(
              se,
              { key: T },
              [
                !E.children || !E.children.length ? (dt(), St(P, {
                  key: 0,
                  prop: E.prop,
                  label: E.label
                }, {
                  default: Ft(() => [
                    E.type !== "upload" && E.type !== "editor" ? (dt(), St(ue(`el-${E.type}`), Jt({
                      key: 0,
                      ref_for: !0
                    }, E.attrs, {
                      modelValue: lt(e)[E.prop],
                      "onUpdate:modelValue": (R) => lt(e)[E.prop] = R
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : Ct("v-if", !0),
                    E.type === "upload" ? (dt(), St(D, Jt({
                      key: 1,
                      class: "m-component-upload",
                      ref_for: !0
                    }, E.uploadAttrs, {
                      "on-preview": lt(c),
                      "on-remove": lt(l),
                      "on-success": lt(u),
                      "on-error": lt(s),
                      "on-progress": lt(m),
                      "on-change": lt(v),
                      "before-upload": lt(A),
                      "before-remove": lt(y),
                      "http-request": I.httpRequest,
                      "on-exceed": lt(h)
                    }), {
                      default: Ft(() => [
                        fe(x.$slots, "uploadArea"),
                        fe(x.$slots, "uploadTip")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "before-upload", "before-remove", "http-request", "on-exceed"])) : Ct("v-if", !0),
                    E.type === "editor" ? (dt(), Wt("div", dc)) : Ct("v-if", !0)
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["prop", "label"])) : Ct("v-if", !0),
                E.children && E.children.length ? (dt(), St(P, {
                  key: 1,
                  prop: E.prop,
                  label: E.label
                }, {
                  default: Ft(() => [
                    (dt(), St(ue(`el-${E.type}`), Jt({ ref_for: !0 }, E.attrs, {
                      modelValue: lt(e)[E.prop],
                      "onUpdate:modelValue": (R) => lt(e)[E.prop] = R
                    }), {
                      default: Ft(() => [
                        Ct(` 情况二：\r
          component 嵌套 component 的形式： \r
          类似：下拉框、或者多选框组、单选框组的情况，\r
          它不仅一个组件构成，它有多个组件构成，那就需要配置 children 属性。 `),
                        (dt(!0), Wt(
                          se,
                          null,
                          Re(E.children, (R, N) => (dt(), St(ue(`el-${R.type}`), {
                            key: N,
                            label: R.label,
                            value: R.value
                          }, null, 8, ["label", "value"]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["prop", "label"])) : Ct("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          Nn(P, null, {
            default: Ft(() => [
              fe(x.$slots, "action", {
                form: lt(r),
                model: lt(e)
              })
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["model", "rules"])) : Ct("v-if", !0);
    };
  }
}), hc = {
  install(I) {
    I.component("m-form", vc);
  }
};
export {
  hc as default
};
