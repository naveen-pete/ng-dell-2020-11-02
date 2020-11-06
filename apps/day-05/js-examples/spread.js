// Spread - ES6
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Spread on array
var a = [1, 2]
var b = a.slice()
b
a
var c = a
c
a
a[2] = 'hi'
a
c
b
var d = [...a]
d
d[3] = true
d
a
var e = [100, 200, ...a, 'bangalore']
e

// Spread on object literals
var x = { id: 10, name: 'hari' }
undefined
x
{ id: 10, name: "hari" }
var y = { ...x }
undefined
y
{ id: 10, name: "hari" }
y.city = 'bangalore'
"bangalore"
y
{ id: 10, name: "hari", city: "bangalore" }
x
{ id: 10, name: "hari" }
var z = { area: 'jayanagar', ...y }
undefined
z
{ area: "jayanagar", id: 10, name: "hari", city: "bangalore" }