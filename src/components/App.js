import React from 'react';
import Birth from './Birth';
import Calculate from './Calculate';
import Gender from './Gender';
import Measures from './Measures';
import Range from './Range';

export default () => (
  <div>
    <div className="navbar">
      <div className="container">
        <h1 className="navbar-brand">Meet Sherpa</h1>
      </div>
    </div>
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <header>
              <h2>Your BMI Calculator</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </header>
            <div className="card">
              <Birth />
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <Measures name="height" title="Height" />
                  </div>
                  <div className="col">
                    <Measures name="weight" title="Weight" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <Gender />
            </div>
            <Calculate />
            <div className="card">
              <Range />
            </div>
            <footer>
              <p>www.justsherpa.com</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
);
