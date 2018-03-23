$(function() {
 // $.getJSON('api', updateFeedback);
/*
  $('.feedback-form').submit(function(e) {
    e.preventDefault();
    $.post('api', {
      name: $('#feedback-form-name').val(),
      title: $('#feedback-form-title').val(),
      message: $('#feedback-form-message').val()
    }, updateFeedback);
  });
*/

  $('.feedback-form').submit(function(e) {
    e.preventDefault();
    $.post('api', {
      firstname: $('#feedback-form-firstname').val(),
      lastname: $('#feedback-form-lastname').val(),
      email: $('#feedback-form-email').val(),
      phone: $('#feedback-form-phone').val(),
      DOB:$('#feedback-form-DOB').val(),
      eschoolname:$('#feedback-form-eschoolname').val(),
      eschoolstart:$('#feedback-form-eschoolstart').val(),
      eschoolend:$('#feedback-form-eschoolend').val(),
      mschoolname:$('#feedback-form-mschoolname').val(),
      mschoolstart:$('#feedback-form-mschoolstart').val(),
      mschoolend:$('#feedback-form-mschoolend').val(),
      hschoolname:$('#feedback-form-hschoolname').val(),
      hschoolstart:$('#feedback-form-hschoolstart').val(),
      hschoolend:$('#feedback-form-hschoolend').val(),
      cschoolname:$('#feedback-form-cschoolname').val(),
      cschoolstart:$('#feedback-form-cschoolstart').val(),
      cschoolend:$('#feedback-form-cschoolend').val(),
      comments: $('#feedback-form-comments').val(),
      passport: $('#feedback-form-passport').val()
      
      
    });
  });
/*
  $('.feedback-messages').on('click', function(e) {
      if (e.target.className == 'glyphicon glyphicon-remove') {
        $.ajax({
          url: 'api/' + e.target.id,
          type: 'DELETE',
          success: updateFeedback
        }); //ajax
      } // the target is a delete button
  }); //feedback messages
*/
/*
  function updateFeedback(data) {
   var output = '';
   $.each(data,function(key, item) {
     output += '     <div class="feedback-item item-list media-list">';
     output += '       <div class="feedback-item media">';
     output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
     output += '         <div class="feedback-info media-body">';
     output += '           <div class="feedback-head">';
     output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
     output += '           </div>';
     output += '           <div class="feedback-message">' + item.message + '</div>';
     output += '         </div>';
     output += '       </div>';
     output += '     </div>';
   });
   $('.feedback-messages').html(output);
  }
  */
});
