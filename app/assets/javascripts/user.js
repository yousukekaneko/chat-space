
$(function() {
  var nameList = $('#user-search-result');
  var memberSpace = $("#chat-member-space");
  function appendUser(user) {
    var html = `<div class='chat-group-user clearfix'>
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${ user.id } data-user-name=${ user.name }>追加</a>
                </div>`
    nameList.append(html);
  }
  function appendNoUser(user) {
    var html = `<li>
                  <div class='chat-group-user clearfix'>${ user.name }</div>
                </li>`
    nameList.append(html);
  }
  function appendUserResult(user_name, user_id) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user${ user_id }'>
                  <input name='group[user_ids][]' type='hidden' value='${ user_id }'>
                  <p class='chat-group-user__name'>${ user_name }</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    memberSpace.append(html);
  }
  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax ({
      url: '/users',
      type: 'GET',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(data){
      $("#user-search-result").empty();
      if (data.length !== 0) {
        data.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendNoUser("一致するユーザーはいません");
      }
    })
    .fail(function(data){
      alert("ユーザー検索に失敗しました");
    });
  });
  $("#user-search-result").on("click", ".chat-group-user__btn--add", function() {
    var barName = $(this).data('user-name')
    var barId =$(this).data('user-id')
      appendUserResult(barName, barId);
    $(this).parent().remove()
  });
  $("#chat-member-space").on("click", ".chat-group-user__btn--remove", function() {
    $(this).parent().remove();
  });
});
