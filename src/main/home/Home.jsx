import React, { useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './Home.css';
import  youtube from "../../imgs/youtube.jpg";
import  kakaoMap from "../../imgs/kakaoMap.jpg";
import  coin from "../../imgs/coin.jpg";
import  office from "../../imgs/office.jpg";

const Home = ({focusTarget , scrollTo}) => {
    return (
        <>
            <section id="home"  ref={el => (focusTarget.current[0] = el)} >
                <div className="home__container" >
                    <ReactTypingEffect
                        text={["안녕하세요", "어제보다 오늘 더 노력하는" , "프론트엔드 개발자 안준석 입니다."]}
                        typingDelay={100}
                        speed={100}
                        eraseDelay={200}
                        eraseSpeed={100}
                        displayTextRenderer={(text, i) => {
                            return (
                            <h1>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                    <span
                                        key={key}
                                        style={ { color: 'white' , fontSize: "26px"}}
                                    >{char}</span>
                                    );
                                })}
                            </h1>
                            );
                        }}/>
                    <br />
                    <button className="home__contact" onClick={scrollTo}>Contact</button>
                </div>
            </section>
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
                                    <span>80%</span>
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
                        <a href="https://wnstjr541.github.io/my-youtube/" className="project" data-type="front-end" target="_blank">
                            <img className="project__img" src={youtube} alt="youtube" />
                            <div className="project__description">
                                <h3>react youtube</h3>
                                <span>react</span>
                            </div>
                        </a>
                        <a href="https://unique-figolla-ed5a90.netlify.app" className="project" data-type="front-end" target="_blank">
                            <img className="project__img" src={kakaoMap} alt="kakao map" />
                            <div className="project__description">
                                <h3>kakao map</h3>
                                <span>react</span>
                            </div>
                        </a>
                        
                        <a href="https://wnstjr541.github.io/my-coin/" className="project" target="blank" data-type="front-end">
                            <img className="project__img" src={coin} alt="coin" />
                            <div className="project__description">
                                <h3>coin page</h3>
                                <span>react</span>
                            </div>
                        </a>
                        <a href="https://wnstjr541.github.io/my-offices/" className="project" target="blank" data-type="front-end">
                        <img className="project__img" src={office} alt="관공서" />
                            <div className="project__description">
                                <h3>관공서</h3>
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