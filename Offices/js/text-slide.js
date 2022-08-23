    let slide = document.getElementsByClassName('slick-slid'),
        btnNext = document.querySelector('.next'),
        btnPause = document.querySelector('.pause'),
        btnPrev = document.querySelector('.prev'),
        act= document.querySelector('.active');


        // 위에 리스트 같이 클릭되는거 방지

    btnNext.addEventListener("click",function(){

        for(let i = 0; i<slide.length; i++){

            let x = slide[i].classList.contains('active');
            if(x){
                slide[i].classList.remove('active');
                if(i == slide.length-1){
                    slide[0].classList.add('active')
                    return
                } else{
                    slide[i+1].classList.add('active');
                    return
                }
                    
            }
        }
        
    })

btnPrev.addEventListener("click",function(){
    for(let i = 0; i<slide.length; i++){

        let x = slide[i].classList.contains('active');
        if(x){
            slide[i].classList.remove('active');
            if(i === 0){
                slide[slide.length-1].classList.add('active');
                return
            } else{
                slide[i-1].classList.add('active');
                return
            }
                
        }
    }
    
})

