
$('.bg-menu>li').on({"mouseover focusin":function(){
   $(this).addClass('active1');
},"mouseout focusout":function(){
   $(this).removeClass('active1');
}
});