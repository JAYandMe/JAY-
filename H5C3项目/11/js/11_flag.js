/**
 * Created by silence on 2017/10/15.
 */
$(function() {
    var height=$(window).height();
    var flag=false;
    $('#fullpage').fullpage({
        sectionsColor:['#fadd67','orange','yellow','green','','blue','#8ac06','pink'],
        navigation: true,
        scrollingSpeed: 1200,
        afterLoad:function(anchorLink, index){
            if(index==2 && flag==false){
                $('.box .search').show().animate({'right':370},1500,function(){
                    $('.box .img1').animate({'opacity':1},500,function(){
                        $('.box .search').hide();
                        $('.box .img2').show().animate({"height":218},1000);
                        $('.box .img3').show().animate({"height":30,'right':250,'bottom':452},1000);

                       /* 标题*/
                        $('.section2 .imgTitlt1a').animate({'opacity':1},1000,function(){
                            flag=true;
                        });
                    })
                });
            }
        },
        
        onLeave:function(index,nextIndex,direction){
            if(index==2 && nextIndex==3 && flag==true){
                $('.box .img4').show().animate({'bottom':-(height-250),'width':207,'left':260},1000,function(){
                    $('main .img1a').animate({'opacity':1},1000,function(){
                        $('main .img2a').animate({'opacity':1},500);
                    });
                })
                $('.box .cover').animate({'opacity':1},200);
            };

            if(index==3 && nextIndex==4){
                $('.box .img4').hide();
                $('main .img4a').show().animate({'bottom':-(height-250+50),'left':247},1000);
            }
        }
    })
})