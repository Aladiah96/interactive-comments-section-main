$( document ).ready(function() {
	var url = "./data.json";
	$.getJSON( url, {
  	format: "json"
	})
  .done(function( data ) {
  const comments = data.comments;
  const commentQty = Object.entries(comments).length;
  
    for (let i = 0; i < commentQty; i++) {
      
      const comment = data.comments[i];

      $('.row').append('<div class="col-lg-12 comment"><div class="comment__votes"><img src="./images/icon-plus.svg" alt="">' +
        '<p class="comment__score">' + comment.score + '</p><img src="./images/icon-minus.svg" alt=""></div><div class="comment__container"><div class="comment__container__header">' +
        '<h2 class="comment__profile"><img src = ' + comment.user.image.png + '>' + comment.user.username + '</h2><p class="comment__creation">' + comment.createdAt + '</p><img src="./images/icon-reply.svg" alt="" class="reply">' +
        '</div><p class="comment__content">' + comment.content + '</p></div></div>')
    }
  });
});