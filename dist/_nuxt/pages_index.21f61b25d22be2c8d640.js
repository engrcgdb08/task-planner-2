webpackJsonp([1], { "/TYz": function (t, e, a) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var n = a("3J1H"), o = a("rGQh"), i = !1; var r = function (t) { i || a("X8ip") }, s = a("VU/8")(n.a, o.a, !1, r, "data-v-2a183b29", null); s.options.__file = "pages/index.vue", e.default = s.exports }, "3J1H": function (t, e, a) { "use strict"; var n = a("Xxa5"), o = a.n(n), i = a("exGp"), r = a.n(i), s = a("4XZ8"); e.a = { components: { Homepage: s.a }, fetch: function () { var t = r()(o.a.mark(function t(e) { var a = e.store; return o.a.wrap(function (t) { for (; ;)switch (t.prev = t.next) { case 0: return t.next = 2, a.dispatch("todos/setTodos"); case 2: case "end": return t.stop() } }, t, this) })); return function (e) { return t.apply(this, arguments) } }() } }, "4XZ8": function (t, e, a) { "use strict"; var n = a("L1mL"), o = a("Nv/d"), i = !1; var r = function (t) { i || a("7CpA") }, s = a("VU/8")(n.a, o.a, !1, r, "data-v-cb8a878a", null); s.options.__file = "components/Homepage.vue", e.a = s.exports }, "7CpA": function (t, e, a) { var n = a("Rrv1"); "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals); a("rjj0")("dec1fb5c", n, !1, { sourceMap: !1 }) }, At1I: function (t, e, a) { "use strict"; var n = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("div", [a("div", { staticClass: "input-container" }, [a("i", { staticClass: "fa fa-plus icon", attrs: { "aria-hidden": "true" } }), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.newTodo.title, expression: "newTodo.title" }], staticClass: "addtodo", attrs: { type: "text", placeholder: "Add a Task" }, domProps: { value: t.newTodo.title }, on: { keyup: function (e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.createTodo.apply(null, arguments) }, input: function (e) { e.target.composing || t.$set(t.newTodo, "title", e.target.value) } } })]), t._m(0)]) }; n._withStripped = !0; var o = { render: n, staticRenderFns: [function () { var t = this.$createElement, e = this._self._c || t; return e("p", { staticClass: "task-notes" }, [this._v("Please "), e("b", [this._v("enter")]), this._v(" to add task")]) }] }; e.a = o }, FJTL: function (t, e, a) { "use strict"; var n = a("cK6R"), o = a("At1I"), i = !1; var r = function (t) { i || a("KmOP") }, s = a("VU/8")(n.a, o.a, !1, r, "data-v-2110434e", null); s.options.__file = "components/TodoInput.vue", e.a = s.exports }, KmOP: function (t, e, a) { var n = a("lEul"); "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals); a("rjj0")("37097c70", n, !1, { sourceMap: !1 }) }, L1mL: function (t, e, a) { "use strict"; var n = a("Xxa5"), o = a.n(n), i = a("exGp"), r = a.n(i), s = a("FJTL"); e.a = { components: { TodoInput: s.a }, fetch: function () { var t = r()(o.a.mark(function t(e) { var a = e.store; return o.a.wrap(function (t) { for (; ;)switch (t.prev = t.next) { case 0: return t.next = 2, a.dispatch("todos/setTodos"); case 2: case "end": return t.stop() } }, t, this) })); return function (e) { return t.apply(this, arguments) } }() } }, "Nv/d": function (t, e, a) { "use strict"; var n = function () { var t = this.$createElement, e = this._self._c || t; return e("div", [this._m(0), e("section", { staticClass: "create-todo" }, [e("TodoInput")], 1)]) }; n._withStripped = !0; var o = { render: n, staticRenderFns: [function () { var t = this.$createElement, e = this._self._c || t; return e("div", { staticClass: "center" }, [e("h1", { staticClass: "landing-title" }, [this._v("Welcome to Task Planner")]), e("span", { staticClass: "landing-sub-title" }, [this._v("\n      Get things done with your day, a list that "), e("br"), this._v("refreshes every day.\n    ")])]) }] }; e.a = o }, Rrv1: function (t, e, a) { (t.exports = a("FZ+f")(!1)).push([t.i, ".create-todo[data-v-cb8a878a]{margin-left:2.5em;margin-top:2%}.title[data-v-cb8a878a]{margin-left:1.5em}.center[data-v-cb8a878a]{text-align:center;margin-top:20%}.landing-sub-title[data-v-cb8a878a]{font-size:10px}", ""]) }, X8ip: function (t, e, a) { var n = a("cAJs"); "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals); a("rjj0")("3e857b28", n, !1, { sourceMap: !1 }) }, cAJs: function (t, e, a) { (t.exports = a("FZ+f")(!1)).push([t.i, ".create-todo[data-v-2a183b29]{margin-left:2.5em;margin-top:10%}.title[data-v-2a183b29]{margin-left:1.5em}", ""]) }, cK6R: function (t, e, a) { "use strict"; var n = a("Xxa5"), o = a.n(n), i = a("exGp"), r = a.n(i), s = a("Dd8w"), c = a.n(s), d = a("NYxO"); e.a = { name: "TodoInput", data: function () { return { isLoading: !1, newTodo: { title: "", completed: !1, user: 1 } } }, methods: c()({}, Object(d.mapActions)("todos", ["addTodo"]), { createTodo: function () { var t = r()(o.a.mark(function t() { var e; return o.a.wrap(function (t) { for (; ;)switch (t.prev = t.next) { case 0: if (!this.newTodo.title.length) { t.next = 9; break } return this.isLoading = !0, console.log($nuxt.$route.name), e = c()({}, this.newTodo), this.newTodo.title = "", t.next = 7, this.addTodo(e); case 7: "index" === $nuxt.$route.name && this.$router.push({ path: "/TasksList" }), this.isLoading = !1; case 9: case "end": return t.stop() } }, t, this) })); return function () { return t.apply(this, arguments) } }() }) } }, lEul: function (t, e, a) { (t.exports = a("FZ+f")(!1)).push([t.i, ".disabled[data-v-2110434e]{opacity:.7}.addtodo input[type=text][data-v-2110434e]{color:#777;padding:.25em .625em;width:100%}.input-container[data-v-2110434e]{display:-ms-flexbox;display:-webkit-box;display:flex;width:100%;margin-bottom:15px}.icon[data-v-2110434e]{padding:10px;background:#f3f4f7;color:#d0d0d0;min-width:50px;text-align:center}.addtodo[data-v-2110434e],.input-field[data-v-2110434e]{width:100%;padding:10px;outline:none}.addtodo[data-v-2110434e]{left:50%;background-color:#f3f4f7}[data-v-2110434e]::-webkit-input-placeholder{color:#bababa;opacity:1}[data-v-2110434e]::-moz-placeholder{color:#bababa;opacity:1}[data-v-2110434e]::-ms-input-placeholder{color:#bababa;opacity:1}[data-v-2110434e]::placeholder{color:#bababa;opacity:1}.task-notes[data-v-2110434e]{font-size:10px;color:#bababa;margin-top:-1em}.task-notes b[data-v-2110434e]{color:red}", ""]) }, rGQh: function (t, e, a) { "use strict"; var n = function () { var t = this.$createElement, e = this._self._c || t; return e("div", { staticClass: "container" }, [e("Homepage")], 1) }; n._withStripped = !0; var o = { render: n, staticRenderFns: [] }; e.a = o } });