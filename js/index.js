$(function(){
    //show里的作品展示选项卡
    var zuopin=$('.zuopin1');
    var shows=$('.shows');
    for(var i=0;i<zuopin.length;i++){
        zuopin[i].index=i;
        zuopin[i].onmouseover=function(){
            for(var j=0;j<shows.length;j++){
                shows[j].style.display='none';
                zuopin[j].style.color="yellow";
                zuopin[j].style.fontSize="20px";

            }
            shows[this.index].style.display='block'
            zuopin[this.index].style.color="blue";
            zuopin[this.index].style.fontSize="30px";


        }
    }
    //展示页面切换
    $('.ju1').on('click',function(){
        $('.shouye').css('display','block');
        $('.jieshao').css('display','none');
        $('.jieshao1').css('display','none');
        $('.show').css('display','none');
        $('.lianxi').css('display','none');
    })
    $('.ju2').on('click',function(){
        $('.jieshao').css('display','block');
        $('.jieshao1').css('display','none');
        $('.shouye').css('display','none');
        $('.show').css('display','none');
        $('.lianxi').css('display','none');
    })
    $('.ju3').on('click',function(){
        $('.show').css('display','block');
        $('.shouye').css('display','none');
        $('.jieshao').css('display','none');
        $('.jieshao1').css('display','none');
        $('.lianxi').css('display','none')
    })
    $('.ju4').on('click',function(){
        $('.jieshao1').css('display','block');
        $('.jieshao').css('display','none');
        $('.shouye').css('display','none');
        $('.show').css('display','none');
        $('.lianxi').css('display','none')
    })
    $('.ju5').on('click',function(){
        $('.lianxi').css('display','block');
        $('.jieshao1').css('display','none');
        $('.shouye').css('display','none');
        $('.jieshao').css('display','none');
        $('.show').css('display','none');
    })
    //首页动画
    // setInterval(function(){
    //     $('.left span').css({
    //         fontSize:'50'
    //         alert(1)
    //     })
    // },500);
    //照片放大
    $('.photo').on('mouseover',function(){
        $(this).css({
                    width:"180px",
                     height:"180px",
                     border:"3px solid rgba(255, 255, 255, 1)"
        })
    })
    $('.photo').on('mouseout',function(){
        $(this).css({
                    width:"170px",
                    height:"170px",
                     border:"2px solid rgba(255, 255, 255,0.9)"})
    })
    //第二页动画
    $('.mengban').on('mouseenter',function(){
        $('.zuo').addClass('zuo1')
        $('.infor').css({display:'block'});
        // $('.infor').addClass('zuo2');
        $(this).addClass('bac');
    })
    $('.mengban').on('mouseleave',function(){
        $('.zuo').removeClass('zuo1')
        $('.infor').css({display:'none'});
        // $('.infor').removeClass('zuo2');
        $(this).removeClass('bac');

    })
    //第三页动画
    $('.triangle-up').on('mouseover',false);
    $('.jineng1 .ajax').on('mouseover',function(){
        $(this).text('80%');
    })
    $('.jineng1 .ajax').on('mouseout',function(){
        $(this).text('ajax');
    })
    $('.jineng1 .php').on('mouseover',function(){
        $('.jineng1 .php').text('50%');
        alert(1)
    })
    $('.jineng1 .php').on('mouseout',function(){
        $(this).text('PHP');
    })
    $('.jineng1 .scss').on('mouseover',function(){
        $(this).text('85%');
    })
    $('.jineng1 .scss').on('mouseout',function(){
        $(this).text('scss');
    })
    $('.jineng1 .h5').on('mouseover',function(){
        $(this).text('90%');
    })
    $('.jineng1 .h5').on('mouseout',function(){
        $(this).text('H5');
    })
    $('.jineng1 .js').on('mouseover',function(){
        $(this).text('78%');
    })
    $('.jineng1 .js').on('mouseout',function(){
        $(this).text('Js');
    })
    $('.jineng1 .jquery').on('mouseover',function(){
        $(this).text('85%');
    })
    $('.jineng1 .jquery').on('mouseout',function(){
        $(this).text('jQuery');
    })
    $('.jineng2 .css3').on('mouseover',function(){
        $(this).text('90%');
    })
    $('.jineng2 .css3').on('mouseout',function(){
        $(this).text('css3');
    })
    $('.jineng2 .mysql').on('mouseover',function(){
        $(this).text('60%');
    })
    $('.jineng2 .mysql').on('mouseout',function(){
        $(this).text('mysql');
    })
})