$(function(){
  function buildHTML(message) {
    var html = `<div class="message">
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
    <img src="${message.image}" alt="">
</p>

</div>
</div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $('.form__text').val('')
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

    })
    .fail(function(){
      alert('error');
    })
  })
});
