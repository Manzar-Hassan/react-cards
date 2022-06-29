import React from "react";
import "../components/Card.css";

function Card(props) {
  return props.data.map((card, i) => (
    <div className="col-lg-4" key={i}>
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.data[i].plan}
          </h5>
          <h6 className="card-price text-center">
            ${props.data[i].cost}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li className={props.data[i].usersCount.fontWeight}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.data[i].usersCount.user}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.data[i].storage}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Community Access
            </li>
            <li className={props.data[i].projectsNumbers.text}>
              <span className="fa-li">
                <i className={props.data[i].projectsNumbers.icon}></i>
              </span>
              {props.data[i].projectsNumbers.privateProjects}
            </li>
            <li className={props.data[i].phone.text}>
              <span className="fa-li">
                <i className={props.data[i].phone.icon}></i>
              </span>
              {props.data[i].phone.phoneSupport}
            </li>
            <li className={props.data[i].domain.text}>
              <span className="fa-li">
                <i className={props.data[i].domain.icon}></i>
              </span>
              <strong>{props.data[i].domain.singleBoldText}</strong>
              {props.data[i].domain.subDomain}
            </li>
            <li className={props.data[i].monthlyReports.text}>
              <span className="fa-li">
                <i className={props.data[i].monthlyReports.icon}></i>
              </span>
              {props.data[i].monthlyReports.report}
            </li>
          </ul>
          <div className="d-grid">
            <a
              href="google.com"
              className="btn btn-primary text-uppercase btn_props"
            >
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Card;
