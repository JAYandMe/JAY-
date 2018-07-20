$(function(){
	setTimeout(function(){
		$(".section1").addClass("comein");
	},200);
	$("#fullpage").fullpage({
		navigation:true,
		loopBottom:true,
		//当我们离开第一屏幕
		onLeave:function(index,nextIndex,direction){
			$(".section1").removeClass("comein");
			if(nextIndex == 1){
				$(".section1").addClass("comein");
			}
			if(nextIndex != 1){
				$("#bg").addClass('rotate');
			}else{
				$("#bg").removeClass('rotate');
			}

			//第2屏幕的制作
			if(nextIndex == 2){
				$(".p2").css("transform","translateX(-50%) translateY(-50%) translateZ(0) scale(1)");
			}else{
				$(".p2").css("transform","translateX(-50%) translateY(-50%) translateZ(2000px) scale(1)");				
			}

			//第3屏幕的制作
			if(nextIndex == 3){
				$(".p3").css("transform","translateZ(-50px) rotateX(30deg)")
				$(".title3").css("transform","translateZ(0) rotateX(0deg)")
				
			}

			//第4屏幕的制作
			if(nextIndex == 4){
				$(".p3").css("transform","translateZ(-200px) rotateX(-45deg) translate(3000px)")
				$(".title3").css("transform","translateZ(1200px) rotateX(60deg)")
				
			}
		}
	})
})