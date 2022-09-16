import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './header/Header';
import Home from './home/Home';

const Main = () => {
    //하나의 useRef로 관리
    const focusTarget = useRef([]);
    function buy_tobe(item, price, quantity, callback) {
        console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
        setTimeout(function() {
            console.log("계산이 필요합니다.");
            var total = price*quantity;
            callback(total);
        }, 1000);
    }
    buy_tobe("고구마", 1000, 5, function(name) {
            console.log(name);
        });
    
    const [hideElement, setHideElement] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (!scrollRef.current) return;
        window.addEventListener("scroll", yScrollEvent);
        return () => {
            window.removeEventListener("scroll", yScrollEvent);
        };
    }, [scrollRef.current]);

    const yScrollEvent = () => {
        const scroll = scrollRef.current.getBoundingClientRect();
        setHideElement(scroll.top <= -100);
    };
        
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

        //category의 name의 키값과 같은 컴포넌트로 이동
        focusTarget.current[navList[name]].scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div ref={scrollRef}>
            <Header scrollTo={scrollTo} hideElement={hideElement}></Header>
            <Home focusTarget={focusTarget} scrollTo={scrollTo}></Home>
        </div>
    );
};

export default Main;