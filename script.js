const comment = document.getElementById("input");
const save = document.getElementById("button");
const desc = document.getElementById("description");
const container = document.getElementById("comment");
const arr = [];
var html = '';
save.addEventListener("click",() => {
    arr.push(comment.value);
    html += '<div id = "comments"><p id="description">'+comment.value+'</p>'+
    '<div id="followers"><p class="increment">0</p><p class="decrement">0</p></div>'+
    '<div id="icons"><img src="https://cdn-icons-png.flaticon.com/512/25/25297.png" id="thumbs-up"/>'+
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Font_Awesome_5_regular_thumbs-down.svg/2048px-Font_Awesome_5_regular_thumbs-down.svg.png" id="thumbs-down"/>'+
    '<img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" id="delete"/></div></div>'
container.innerHTML = html;
comment.value = '';
});
