import React, { Fragment } from "react";
import { tablabels } from "./constant";
import { Link } from "react-router-dom";
import "./Tabs.css";

const Tabs = (props) => {
  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => props.onClickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive ? "tab-border" : ""}`}
    >
      <i className={icon} />
      <p>{tabTitle}</p>
    </div>
  );

  return (
    <Fragment>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            tablabels.CANCEL_AT_ANY_TIME,
            props.activeTabName === tablabels.CANCEL_AT_ANY_TIME,
            "fas fa-door-open fa-3x",
            "tab-1"
          )}
          {renderTabTitle(
            tablabels.WATCH_ANYWHERE,
            props.activeTabName === tablabels.WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            tablabels.PICK_YOUR_PRICE,
            props.activeTabName === tablabels.PICK_YOUR_PRICE,
            "fas fa-tags fa-3x",
            "tab-3"
          )}
        </div>
      </section>
      {props.activeTabName === tablabels.CANCEL_AT_ANY_TIME && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-1-content"
              className={`tab-content-item ${
                props.activeTabName === tablabels.CANCEL_AT_ANY_TIME && "show"
              }`}
            >
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-lg">
                    If you decide Netflix isn't for you- no problem. No
                    commitments.Cancel online anytime
                  </p>
                  <Link to="/netflix-show" className="btn btn-lg">
                    Watch Free for 30 days
                  </Link>
                </div>
                <img
                  src="https://i.ibb.co/J2xDJV7/tab-content-1/.png"
                  alt="an image"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {props.activeTabName === tablabels.WATCH_ANYWHERE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${
                props.activeTabName === tablabels.WATCH_ANYWHERE && "show"
              }`}
            >
              <div className="tab-2-content-top">
                <p className="text-lg">
                  Watch TV Shows and movies anytime, anywhere - personalized for
                  you.
                </p>
                <Link to="/netflic-show" className="btn btn-lg">
                  Watch Free For 30 Days
                </Link>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                    alt=""
                  />
                  <p className="text-md">Watch on your TV</p>
                  <p className="text-dark">
                    Smart TVs, Playstation,XBox, Chromecast, Apple TV, Blu-Ray
                    players and more
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                    alt=""
                  />
                  <p className="text-md">
                    Watch instantly or download for later
                  </p>
                  <p className="text-dark">
                    Available on phone and tablet,wherever you go.
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png"
                    alt=""
                  />
                  <p className="text-md">Use any computer</p>
                  <p className="text-dark">Watch right on Netflix.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {props.activeTabName === tablabels.PICK_YOUR_PRICE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-3-content"
              className={`tab-content-item ${
                props.activeTabName === tablabels.PICK_YOUR_PRICE && "show"
              }`}
            >
              <div className="text-center">
                <p className="text-lg">
                  Choose one plan and watch everthing on Netflix
                </p>
                <Link to="/netflix-show" className="btn btn-lg">
                  Watch Free for 30 Days
                </Link>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Basic Plan</th>
                    <th>Standard Plan</th>
                    <th>Premium Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly price after free month ends on 6/19/2021</td>
                    <td>$6.99</td>
                    <td>$11.99</td>
                    <td>$15.99</td>
                  </tr>
                  <tr>
                    <td>HD Available</td>
                    <td>
                      <i className="fas fa-times" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ultra HD Available</td>
                    <td>
                      <i className="fas fa-times" />
                    </td>
                    <td>
                      <i className="fas fa-times" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                  </tr>
                  <tr>
                    <td>Screens you can watch on at the same time</td>
                    <td>1</td>
                    <td>2</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Watch on your laptop, Tv, phone and tablet</td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                  </tr>
                  <tr>
                    <td>Unlimited movies and TV shows</td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                  </tr>
                  <tr>
                    <td>Cancel anytime</td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                  </tr>
                  <tr>
                    <td>First month Free</td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Tabs;
