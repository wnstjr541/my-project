

let moving=$('.tab-box-full .tab-box'),
    imgWidth=moving.find('.tab-box1').width()+50,
    setIntervalId=undefined;

function sliding(){
    setIntervalId=setInterval(() => {
        moving.animate({left:-imgWidth},500, function(){
            $(this).children('div:first').insertAfter($(this).children('div:last'));
            $(this).css({left:0});
        });
    }, 1000);
}
sliding();

// 호버시 정지

$('.tab-box-full').on({'mouseover':function(){
    clearInterval(setIntervalId);
},'mouseout':function(){
    sliding();
}
});

$('#left').on({'mouseover':function(){
    clearInterval(setIntervalId);
},'mouseout':function(){
    sliding();
}
});

$('#right').on({'mouseover':function(){
    clearInterval(setIntervalId);
},'mouseout':function(){
    sliding();
}
});

// 클릭시 액션설정

function left(){
    moving.animate({left:imgWidth},500, function(){
        $(this).children('div:first').insertAfter($(this).children('div:last'));
        $(this).css({left:0});
    });
}
function right(){
    moving.animate({left:-imgWidth},500, function(){
        $(this).children('div:first').insertAfter($(this).children('div:last'));
        $(this).css({left:0});
    });
}

$('#left').click(function(){
    left();
    return false;
});
$('#right').click(function(){
    right();
    return false;
});