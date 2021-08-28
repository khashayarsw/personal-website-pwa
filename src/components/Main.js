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
            filimoBox: { link : "https://www.filimo.com/filimobox" } ,
            filimoBoxGuarantee: { link : "https://www.filimo.com/filimobox/guarantee" } ,
            filimoSibche: { link : "https://www.filimo.com/sibche" } ,
            filimoInfo99: { link : "https://www.filimo.com/info99v2" } ,
            aparatBoost: { link : "https://www.aparat.com/boost" } ,
            aparatLivePlus: { link : "https://www.aparat.com/liveplus" } ,
            aparatKidsWeek99: { link : "https://www.aparat.com/kids/kidsweek99" } ,
            aparatNiaShow: { link : "https://www.aparat.com/kids/niashow" } ,
            aparatLive: { link : "https://www.aparat.com/liveevent" } ,
            aparatIncome: { link : "https://www.aparat.com/income" } ,
            aparatChefCup: { link : "https://www.aparat.com/chefcup" } ,
            aparatGameSeason3: { link : "https://www.aparat.com/game/season3" } ,
            aparatInfo99: { link : "https://www.aparat.com/info99" } ,
            aparatEuro2020: { link : "https://www.aparat.com/euro2020" } ,
            aparatEuro2020Match: { link : "https://www.aparat.com/euro2020/match" } ,
            aparatAdvertise: { link : "https://www.aparat.com/advertise" } ,
            televikaDvd: { link : "https://www.televika.com/dvd", needVpn : true } ,
            televikaWelcome: { link : "https://www.televika.com/welcome", needVpn : true } ,
            sabaideaCharity: { link : "https://www.sabaidea.com/charity" } ,
            itShahr : { link : "www.itshahr.saba-api.ir" } ,
            behran : { link : "http://www.behran.saba-api.ir" } ,
            bimeTejarat : { link : "http://landing.tejaratinsurance.com" } ,
            202 : { link : "http://www.202.saba-api.ir" } ,
            zarGroup: { link : "http://www.italiandinner.zargroup.ir/" } ,
            sabaIdeaV2 : { link : "http://www.v2.sabaidea.com" } ,
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
