$( document ).ready(function() {
	var url = "./data.json";
	$.getJSON( url, {
  	format: "json"
	})
  .done(function( data ) {
  const comments = data.comments;
  const commentQty = Object.entries(comments).length;
  
for (let i = 0; i < commentQty; i++) {
  console.log(i);
  $('.row').html('<div class="col-lg-6 comment"><div class="comment__votes"><img src="./images/icon-plus.svg" alt=""><p class="comment__score"></p><img src="./images/icon-minus.svg" alt=""></div><div class="comment__container"><div class="comment__container__header"><h2 class="comment__profile"></h2><p class="comment__creation"></p><img src="./images/icon-reply.svg" alt="" class="reply"></div><p class="comment__content"></p></div></div>')
  $(".comment__profile").text(data.comments[i].user.username);
  $(".comment__creation").text(data.comments[i].createdAt);
  $(".comment__score").text(data.comments[i].score);
  $(".comment__content").text(data.comments[i].content);
  $('.comment__profile').prepend($('<img>',{class:'comment_profilepic',src:data.comments[i].user.image.png}))
  
}
  });
});