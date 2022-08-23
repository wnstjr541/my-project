import React, { useRef } from 'react';
import Dayjs from '../libary/Dayjs';
import Moment from '../libary/Moment';
import Datefns from '../libary/Datefns';
import './Home.css';

const Home = ({focusTarget}) => {
    return (
        <>
            <section id="home"  ref={el => (focusTarget.current[0] = el)}>
                <div className="home__container">
                    <div className="typing"></div>
                    <h1 className="home__title">Hello, I'm jun</h1>
                    <h2 className="home__description">
                        I'm a web front-end
                    </h2>
                    <button className="home__contact">Contact Me</button>
                </div>
            </section>
            <Moment></Moment>
            <Dayjs></Dayjs>
            <Datefns></Datefns>

        {/* <!-- About --> */}
            <section id="about" className="section section__container" ref={el => (focusTarget.current[1] = el)}>
                <h1>About me</h1>
                <div className="about__profile">
                    <div className="profile">
                        <dl>
                            <dt>Profile<span></span></dt>
                            <dd>1995.03.03</dd>
                            <dd>안준석 / 충청남도 아산시</dd>
                        </dl>
                    </div>
                    <div className="profile">
                        <dl>
                            <dt>History<span></span></dt>
                            <dd>2021.02.08~2021.07.16 <br /> 더휴먼 컴퓨터아트아카데미 웹퍼블리셔/프론트엔드 웹개발자 과정 수료
                            </dd>
                            <br />
                            <dd>2021.08.23~2022.04.24 <br /> 티에스네트 프론트엔드 개발자 
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>

            {/* <!-- Skills --> */}
            <section id="skills" className="section"  ref={el => (focusTarget.current[2] = el)}>
                <div className="section__container">
                    <h1>Skills</h1>
                    <h2>Skills & Attributes</h2>
                    <div className="skillset">
                        <div className="skillset__left">
                            <h3 className="skillset__title">Skills</h3>
                            <div className="skill">
                                <div className="skill__description">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div className="skill__bar">
                                    <div className="skill__value"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill__description">
                                    <span>CSS</span>
                                    <span>90%</span>
                                </div>
                                <div className="skill__bar">
                                    <div className="skill__value"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill__description">
                                    <span>JavaScript</span>
                                    <span>80%</span>
                                </div>
                                <div className="skill__bar">
                                    <div className="skill__value"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill__description">
                                    <span>React</span>
                                    <span>60%</span>
                                </div>
                                <div className="skill__bar">
                                    <div className="skill__value" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Work --> */}
            <section id="work" className="section"  ref={el => (focusTarget.current[3] = el)}>
                <div className="section__container">
                    <h1>My work</h1>
                    <div className="work__projects">
                        <a href="Offices/index.html" className="project" target="blank" data-type="front-end">
                        <img
                            src="imgs/projects/youtube.png"
                            alt="관공서"
                            className="project__img"
                        />
                        <div className="project__description">
                            <h3>관공서</h3>
                            <span>Clone coding with HTML, CSS, JavaScript, jquery</span>
                        </div>
                        </a>
                        <a href="https://jun-tube.netlify.app" className="project" data-type="front-end" target="_blank">
                            <img className="project__img" src="imgs/projects/woolworth2.png" alt="" />
                            <div className="project__description">
                                <h3>react youtube</h3>
                                <span>react</span>
                            </div>
                        </a>
                        <a href="https://github.com/wnstjr541/CardMaker/" className="project" data-type="front-end">
                            <img className="project__img" src="imgs/projects/woolworth2.png" alt="" />
                            <div className="project__description">
                                <h3>react CardMaker</h3>
                                <span>react</span>
                            </div>
                        </a>
                        <a href="Responsive_web/index.html" className="project" target="blank" data-type="front-end">
                            <img
                                src="imgs/projects/youtube.png"
                                alt="반응형 웹"
                                className="project__img"
                            />
                            <div className="project__description">
                                <h3>반응형 웹</h3>
                                <span>Clone coding with HTML, CSS, JavaScript, jquery</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>


            {/* <!-- Contact --> */}
            <section id="contact" className="section"  ref={el => (focusTarget.current[4] = el)}>
                <h1 className="contact__title">email talk</h1>
                <h2 className="contact__email">wnstjr541@naver.com</h2>
                <div className="contact__links">
                    <a href="https://github.com/wnstjr541" target="_blank">
                    <i className="fab fa-github"></i>
                    </a>
                </div>
                <p className="contact__rights">
                    2021 - jun
                </p>
            </section>

            {/* <!-- Arrow up --> */}
            <button className="arrow-up">
                <i className="fas fa-arrow-up"></i>
            </button>        
        </>
    );
};

export default Home;