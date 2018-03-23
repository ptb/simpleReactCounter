import React, { Component, createElement } from "./react.mjs"
import { render } from "./react-dom.mjs"

const cloneElement = React.cloneElement
const Fragment = React.Fragment

export { cloneElement, Component, createElement, createElement as h, Fragment, render }
