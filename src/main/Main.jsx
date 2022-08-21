import React, { useRef } from 'react';
import Header from './header/Header';
import Home from './home/Home';

const Main = () => {
    //하나의 useRef로 관리
    const focusTarget = useRef([]);

    //자식컴포넌트에서 onClick 이벤트를 받아옴
        const scrollTo = e => {
        const name = e.target.innerHTML;
        const navList = {
            Home: 0,
            About: 1,
            Skills: 2,
            MyWork: 3,
            Contact: 4
        };

        console.log(focusTarget.current)
        //category의 name의 키값과 같은 컴포넌트로 이동
        focusTarget.current[navList[name]].scrollIntoView({ behavior: 'smooth' });
        };

    return (
        <div>
            <Header scrollTo={scrollTo}></Header>
            <Home focusTarget={focusTarget}></Home>
        </div>
    );
};

export default Main;