import githubLogo from "../../public/img/svg/github.svg";
import linkedIn from "../../public/img/svg/linkedin.svg";
import React, { Component, Fragment } from "react";
import "../../public/styles/index.scss";
import "aos/dist/aos.css";
import AOS from "aos";

class Main extends Component {
  componentDidMount() {
    this.handleAOS();
  }

  handleAOS = () => {
    AOS.init({
      duration: 2000,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="panel panel--margin-top">
          <div className="avatar" data-aos="fade-down"></div>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <p className="panel__desc">Hello, I'm Khashayar</p>
            <p className="panel__desc">Front-End Engineer</p>
            <p className="panel__desc">MyEmail: khashayarmahg@gmail.com</p>
            <span className="panel__social">
              <a href="https://github.com/khashayarsw" target="_blank">
                <img
                  alt=""
                  src={githubLogo}
                  className="panel__img panel__img--margin-right"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/khashayar-mahdavi-nejad-770b7b180/"
                target="_blank"
              >
                <img alt="" src={linkedIn} className="panel__img" />
              </a>
            </span>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-once="true">
          <pre>{`myWorks = {
          websites : {
            filimobox: { link : "https://filimo.com/filimobox" } ,
            aparatLive: { link : "https://aparat.com/liveevent" } ,
            aparatIncome: { link : "https://aparat.com/income" } ,
            aparatRepublisher: { link : "https://aparat.com/income/republisher" } ,
            televika: { link : "https://televika.com/welcome", needVpn : true } ,
            itshahr : { link : "itshahr.saba-api.ir" } ,
            indecision-App : { type : "React" , link : "https://khashayarsw.github.io/Indecision-App" } ,
            lego : { type : "React" , link : "https://lego.now.sh" } , 
            netflix : { type " "React" , link : "https://netflix-kappa.now.sh" } ,
            login-panel : { type " "React" , link : "https://khashayarsw.github.io/Login-Panel/" } ,
          },
          packages : {
            @khashi/tiny : { link : "https://www.npmjs.com/package/@khashi/tiny" } ,
            @khashi/stringer : { link : "https://www.npmjs.com/package/@khashi/stringer" }
          }
        }`}</pre>
        </div>
      </Fragment>
    );
  }
}
export default Main;
