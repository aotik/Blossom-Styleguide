import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Buttons extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Buttons">A button indicates a possible user action</Title>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Default & Primary buttons</h5>
            <p>Standard buttons</p>
          </div>
          <div className="module collapsed">
            <a className="button">
              Default Button
            </a>
            <a className="button primary">
              Primary Button
            </a>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Outlined buttons</h5>
            <p>Transparent buttons with an outline</p>
          </div>
          <div className="module collapsed">
            <a className="button outlined">
              Outlined default
            </a>
            <a className="button red outlined">
              Outlined red
            </a>
            <a className="button orange outlined">
              Outlined orange
            </a>
            <a className="button yellow outlined">
              Outlined yellow
            </a>
            <a className="button teal outlined">
              Outlined teal
            </a>
            <a className="button blue outlined">
              Outlined blue
            </a>
            <a className="button violet outlined">
              Outlined violet
            </a>
            <a className="button purple outlined">
              Outlined purple
            </a>
            <a className="button pink outlined">
              Outlined pink
            </a>
            <a className="button brown outlined">
              Outlined brown
            </a>
            <a className="button grey outlined">
              Outlined grey
            </a>
            <a className="button black outlined">
              Outlined black
            </a>
            <div className="footer">

            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Colored buttons</h5>
            <p>Spice up your page with colored buttons</p>
          </div>
          <div className="module collapsed">
            <a className="button red">
              Red
            </a>
            <a className="button orange">
              Orange
            </a>
            <a className="button yellow">
              Yellow
            </a>
            <a className="button green">
              Green
            </a>
            <a className="button teal">
              Teal
            </a>
            <a className="button blue">
              Blue
            </a>
            <a className="button violet">
              Violet
            </a>
            <a className="button purple">
              Purple
            </a>
            <a className="button pink">
              Pink
            </a>
            <a className="button brown">
              Brown
            </a>
            <a className="button grey">
              Grey
            </a>
            <a className="button black">
              Black
            </a>
            <div className="footer">

            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Labeled buttons</h5>
            <p>Labels give visual aid on what the button does</p>
          </div>
          <div className="module collapsed">
            <a className="button blue labeled">
              <i className="fa fa-check"></i>
              Labeled Button
            </a>
            <a className="button green labeled">
              <i className="fa fa-shopping-cart"></i>
              Checkout
            </a>
            <a className="button red labeled labeled-right">
              Delete
              <i className="fa fa-times"></i>
            </a>
            <div className="footer">

            </div>
          </div>
        </div>
        <div className="example sizes">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Button sizes</h5>
            <p>Add <code>.small</code><code>.medium</code><code>.large</code><code>.big</code><code>.massive</code> classes to your button to change its size</p>
          </div>
          <div className="module collapsed">
            <a className="button small">
              Small
            </a>
            <a className="button medium">
              Medium
            </a>
            <a className="button large">
              Large
            </a>
            <a className="button big">
              Big
            </a>
            <a className="button massive">
              Massive
            </a>
            <div className="footer">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Buttons
