import React, { useState , useRef} from 'react';
import {add , format , sub , differenceInHours} from 'date-fns'
import addWeeks from 'date-fns/addWeeks'
import { format as timezoneFormat , toDate} from 'date-fns-tz';
import {ko} from "date-fns/locale"


const Datefns = () => {
    const birtDayRef = useRef(null);
    const [days , setDay] = useState("");
    const handleBirthDayChange = (event) => {
        setDay(format(new Date(event.target.value) , "EEEE" , {locale: ko}))
    }

    const dateFnsDate = new Date();
    const newDateFnsDate = add(dateFnsDate , {weeks : "1"});
    const newDateFnsDate2 = addWeeks(newDateFnsDate , 1);

    return (
        <div>
            <h1>date-fns</h1>
            <div>Immutable Check</div>
            <div>
                {format(dateFnsDate , "yyyy-MM-dd")}
                <br />
                {format(newDateFnsDate , "yyyy-MM-dd")}
                <br />
                {format(newDateFnsDate2 , "yyyy-MM-dd")}
            </div>
            <br />
            <div>Summer Time New-york</div>
            <div>
                2018년 3월 10일 13시에 하루 더하기 :
                <br /> 
                {
                    timezoneFormat(add(new Date("2018-03-01 13:00:00"),  {days : 1}) ,
                    "yyyy-MM-dd HH:mm:ssXXX" , {timeZone : "America/New_York"})
                }
            </div>
            <br />
            <div>Leap year(윤년)</div>
            <div>
                2017년 1월 1일 1년 빼기 : 
                {format(sub(new Date("2017-01-01 13:00:00") ,{ years : 1}), 'yyyy-MM-dd')}
            </div>
            <div>
                2017년 1월 1일 365일 빼기  :
                {format(sub(new Date("2017-01-01 13:00:00") ,{ days : 365}), 'yyyy-MM-dd')}
            </div>

            <br />
            <div>한국어로 표기</div>
            <div>
                {format(new Date("2017-01-01 13:00:00") , 'yyyy년 MM 월 dd일')}
            </div>

            <br />
            <div>생일 요일 찾기</div>
            <div>
                <input type="date" ref={birtDayRef} onChange={handleBirthDayChange}/>
                <div>무슨 요일이었을까</div>
                <div>
                    {days}
                </div>
            </div>
            <br />
            <div>두 날짜 비교</div>
            <div>2021-07-17 03:00 와 2021-07-18 02:00은 몇시간 차이인가</div>
            <div>
                {differenceInHours(new Date("2021-07-11 03:00"), new Date("2021-07-18 02:00"))} 시간
            </div>
        </div>
    );
};

export default Datefns;