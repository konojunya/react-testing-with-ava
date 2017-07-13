import test from "ava"
import React from "react"
import { shallow, mount } from "enzyme"

import App from "../src/components/App.jsx"

test("can use ava", (t) => {
  t.pass()
})

test("rendered h1 element", (t) => {
  var wrapper = shallow(<App/>)
  t.is(wrapper.type(),"h1")
})

test("render hello world", (t) => {
  var wrapper = shallow(<App/>)
  t.is(wrapper.text(),"hello world")
})

test("has a .title class name", (t) => {
  var wrapper = shallow(<App/>)
  t.true(wrapper.hasClass("title"))
})