function full(id) {
    var zIndex = 9999;
    var full = document.getElementById(id);

    // div 뒤에 희끄무레한 레이어
    var bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        // 레이어 색깔은 여기서 바꾸면 됨
        backgroundColor: 'rgba(0,0,0,0.8)'
    });
    document.body.append(bg);

    // 닫기 버튼 처리, 시꺼먼 레이어와 div 지우기
    full.querySelector('.close').addEventListener('click', function() {
        bg.remove();
        full.style.display = 'none';
    });

    full.setStyle({
        position: 'absolute',
        display: 'block',

        //  한칸 위에 보이기
        zIndex: zIndex + 1,

        // full center 정렬
        top: '80vh',
        left: '50vw',
        transform: 'translate(-50%, -50%)',
        
        // full style
        width: '80%',
        height: '100vh',
    });
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function(styles) {
    for (let k in styles) this.style[k] = styles[k];
    return this; 
    // 위는 setstyle이 두개여서 style을 반복문으로 리턴해준것. setstyle은 하나밖에 안됨.
};

document.getElementById('popup').addEventListener('click', function() {
    // 모달창 띄우기
    full('full');
});