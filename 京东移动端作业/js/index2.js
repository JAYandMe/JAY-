window.onload = function () {
    var ct_left = document.querySelector(".ct_left");
    var leftHeight = ct_left.offsetHeight;
    var ulBox = ct_left.querySelector("ul:first-of-type");
    var ulBoxHeight = ulBox.offsetHeight;
    var lis = ulBox.querySelectorAll("li");
    var maxTop = 0;
    var minTop = leftHeight - ulBoxHeight;
    var maxBounceTop = maxTop + 100;
    var minBounceTop = minTop - 100;
    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    var currentY = 0;
    ulBox.addEventListener("touchstart", function (e) {
        startY = e.targetTouches[0].clientY;
    })
    ulBox.addEventListener("touchmove", function (e) {
        moveY = e.targetTouches[0].clientY;
        distanceY = moveY - startY;
        if (currentY + distanceY > maxBounceTop || currentY + distanceY < minBounceTop) {
            console.log("超出范围啦");
            return;
        }
        ulBox.style.transition = "none";
        ulBox.style.top = (currentY + distanceY) + "px";
    })
    ulBox.addEventListener("touchend", function (e) {
        if (currentY + distanceY > maxBounceTop) {
            currentY = maxTop;
            ulBox.style.transition = "top 0.5s";
            ulBox.style.top = maxTop + "px";
        } else if (currentY + distanceY < minTop) {
            currentY = minTop;
            ulBox.style.transition = "top 0.5s";
            ulBox.style.top = minTop + "px";
        } else {
            currentY += distanceY;
            currentY = currentY + distanceY;
        }
    })

    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
    }
    // 
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            /*参数可以是任意的dom元素，如果写document.body，说明会将document.body下面的所的元素都绑定fastclick*/
            FastClick.attach(document.body);
        }, false);
    }
    /*fastclick使用的时候就是来绑定添加click事件*/
    ulBox.addEventListener("click",function(e){
        /*1.修改li元素的样式：将所有li元素的active样式清除，再为当前被点击的li元素添加active样式*/
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove("active");
        }
        /*为当前被单击的li元素添加样式*/
        var li=e.target.parentNode;
        var liHeight=li.offsetHeight;
        li.classList.add("active");

        /*2.移动当前的li元素到父容器的最顶部，但是不能超出之前设定了静止状态下的最小top值*/
        /*获取当前li元素的索引值*/
        var index=li.index;
        /*开启过渡*/
        ulBox.style.transition="top .5s";
        /*设置偏移*/
        if(-index*liHeight < minTop){
            /*只能偏移到minTop位置*/
            ulBox.style.top=minTop+"px";
            currentY=minTop;
        }
        else{
            ulBox.style.top=-index*liHeight+"px";
            currentY=-index*liHeight;
        }
    })

}