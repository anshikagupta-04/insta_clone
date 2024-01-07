var photo = document.querySelector(".photo")
var like = document.querySelector("#like")
var like_btn = document.querySelector(".actions")
photo.addEventListener("dblclick", function(){
    like.style.transform = 'translate(-50%, -50%) scale(1)';
    like.style.opacity = 0.9;
    setTimeout(function(){
        like_btn.innerHTML = '<i class="ri-heart-3-fill" id="like" style=" color: red; font-size: 30px;"></i><img src="img/comment.svg"><img src="img/share.svg">'
    },300)

    // setTimeout(function(){
    //     like.style.opacity = 0; 
    // }, 1000)
    
    setTimeout(function(){
        like.style.transform = 'translate(-50%, -50%) scale(0)'
    },1000)
})