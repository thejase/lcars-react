// lib/styleguide/Wrapper.js
import React, { Component } from "react";
export default class Wrapper extends Component {
  render() {
    return <div class="example">{this.props.children}</div>;
  }
}
