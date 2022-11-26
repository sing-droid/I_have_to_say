
const comment =  document.querySelectorAll("#comments");
const input = document.getElementById("input");
const save = document.getElementById("button");
const likePic = document.querySelectorAll("#thumbs-up");
const dislikePic = document.querySelectorAll("#thumbs-down");
const like = document.querySelectorAll("#likes");
const disLike = document.querySelectorAll("#dislike");
const remove = document.querySelectorAll("#delete");
const description = document.querySelectorAll("#description");

var i = 0;

save.addEventListener("click",() => {
let commentValue = input.value;
description[i].innerText = commentValue;
comment[i].classList.remove("hide");
input.value = "";
i++;
});

remove.forEach((item,index)=>{
    item.addEventListener("click",()=> {
        comment[index].classList.add("hide");

    })
});

likePic.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        increment(index);
    })
});

function increment(index){
let likes = parseInt(like[index].innerText)+1; 
like[index].innerText = likes;
};

dislikePic.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        decrement(index);
    })
});


function decrement(index){
    let dislikes = parseInt(disLike[index].innerText)+1;
    disLike[index].innerText = dislikes;
}


