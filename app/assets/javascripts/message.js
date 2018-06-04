$(function(){
  function buildHTML(message) {
    var image_html = message.image == null ? `` : `<img src="${message.image}" alt="">` ;
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="right-content__message3">
                      ${message.user_name}
                    </div>
                    <span class="right-content__date">
                      ${message.created_at}
                    </span>
                  </div>
                  <div class="right-content__message4">
                    <p class="lower-message__content">
                      ${message.content}<br />
                      ${image_html}
                    </p>
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.right-content__body').append(html).animate({scrollTop: $('.right-content__body')[0].scrollHeight}, 450);
      $('.new_message')[0].reset();
      $('.form__submit').prop("disabled", false);
    })
    .fail(function(){
      alert('error');
      $('.form__submit').prop("disabled", false);
    })
  })
  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var message_id = $('.message').last().data('message-id');
      $.ajax({
        url: location.href,
        type: "GET",
        data: { id: message_id },
        dataType:'json',
      })
      .done(function(data) {
        var id = $('.message').data('messageId');
        var insertHTML = '';
        data.messages.forEach(function(message) {
          if (message.id > id ) {
            insertHTML = buildHTML(message);
             $('.right-content__body').append(insertHTML).animate({scrollTop: $('.right-content__body')[0].scrollHeight}, 450);
          }
        });
      })
      .fail(function(data) {
        alert('自動更新に失敗しました');
      });
    }
    else {
      clearInterval(interval);
    }} , 5000 );
});
