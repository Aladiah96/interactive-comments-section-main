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

      $('.row').append('<div class="col-lg-12 comment id'+ comment.id +'"><div class="comment__votes"><img src="./images/icon-plus.svg" alt="">' +
        '<p class="comment__score">' + comment.score + '</p><img src="./images/icon-minus.svg" alt=""></div><div class="comment__container"><div class="comment__container__header">' +
        '<h2 class="comment__profile"><img src = ' + comment.user.image.png + '>' + comment.user.username + '</h2><p class="comment__creation">' + comment.createdAt + '</p><img src="./images/icon-reply.svg" alt="" class="reply">' +
        '</div><p class="comment__content">' + comment.content + '</p></div></div>')

      if(comment.replies.length){

        $('.id'+ comment.id).after('<div class="align-items-end flex-column replyContainer"></div>')
        
        for (let i = 0; i < comment.replies.length; i++){

          const reply = comment.replies[i];

          $('.replyContainer').append('<div class="col-lg-11 reply"><div class="reply__votes"><img src="./images/icon-plus.svg" alt="">' +
          '<p class="comment__score">' + reply.score + '</p><img src="./images/icon-minus.svg" alt=""></div><div class="reply__container"><div class="reply__container__header">' +
          '<h2 class="comment__profile"><img src = ' + reply.user.image.png + '>' + reply.user.username + '</h2><p class="reply__creation">' + reply.createdAt + '</p><button class="replyBtn"><img src="./images/icon-reply.svg" alt="" class="reply"><p>Reply</p></button> ' +
          '</div><p class="reply__content">' + reply.content + '</p></div></div>')
        }
      }
    }
    //adicionar comentário

    $('.row').append('<div class="col-12 makeAComment"><img src="'+data.currentUser.image.png+'" alt=""><input type="text" name="comment" id="comment"><input type="button" value="send"></div>')

    //adicionar div de reply
    $('.replyBtn').on('click', () =>{
      console.log('passou');
    })
    //adicionar modal do delete
  });
});