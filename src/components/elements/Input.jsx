import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Input extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Input">A field to get a response from a user</Title>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Transparent inputs</h5>
            <p>An input with no background or border</p>
          </div>
          <div className="module collapsed">
            <div className="input transparent">
              <input type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Standard inputs</h5>
            <p>A standard input with a border</p>
          </div>
          <div className="module collapsed">
            <div className="input">
              <input type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Disabled inputs</h5>
            <p>A disabled input using the <code>.disabled</code> class</p>
          </div>
          <div className="module collapsed">
            <div className="input disabled">
              <input type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Disabled inputs</h5>
            <p>A disabled input using the <code>disabled</code> property</p>
          </div>
          <div className="module collapsed">
            <div className="input">
              <input disabled type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Input with a button</h5>
            <p>A standard input with an ajoined default button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <input type="text" name="name" placeholder="Search..."/>
              <a className="button">Search</a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Input with an outlined button</h5>
            <p>A standard input with an ajoined default outlined button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <input type="text" name="name" placeholder="Search..."/>
              <a className="button outlined">Search</a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Input with an icon button</h5>
            <p>A standard input with an ajoined icon button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <input type="text" name="name" placeholder="Search..."/>
              <a className="icon button"><i className="ion-search"></i></a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Input with an left aligned button</h5>
            <p>A standard input with an ajoined left aligned button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <a className="button">Search</a>
              <input type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Input with a left aligned labeled button</h5>
            <p>A standard input with an ajoined left aligned, colored labeled button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <a className="button blue labeled">
                Copy
                <i className="ion-clipboard"></i>
              </a>
              <input type="text" name="name" value="http://short.url/123"/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Input with a labeled button</h5>
            <p>A standard input with an ajoined colored labeled button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <input type="text" name="name" placeholder="Enter your 12-digit ID"/>
              <a className="button grey labeled labeled-right">
                Get help
                <i className="ion-help-buoy"></i>
              </a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Input
