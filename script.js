$(document).ready(function() {
    var theFile = $('#uploadFile');
    $('#uploadImage').submit(function(event) {
      if (theFile[0].files[0].size > 10*1000000) {
        alert("Please upload files of size less than 10MB.");
      }
      
      if (theFile.val()) {
        event.preventDefault();
        $('#loader-icon').show();
        $('#targetLayer').hide();
        
        $(this).ajaxSubmit({
          target: '#targetLayer',
          beforeSubmit:function() {
            $('.progress-bar').width('50%');
          },
          uploadProgress: function(event, position, total, percentageComplete) {
            $('.progress-bar').animate({
              width: percentageComplete + '%'
            }, {
              duration: 1000
            });
          },
          success: function() {
            $('#loader-icon').hide();
            $('#targetLayer').show();
          },
          error: function() {
            $('#loader-icon').hide();
          },
          resetForm: true
        });
      }
    return false;
    });
  });
  