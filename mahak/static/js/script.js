$(document).ready(function(){

$("#home").click(function(){
window.location="/home/";
});

$("#about_us").click(function(){

    window.location="/about_us/";
});

$(document).on('click','.download',function(){
    
  window.location="/static/media/files/amoozesh.pdf";
});

});





/////////////////////////////////////////////////
////////////CSRF token//////////////////////////
///////////////////////////////////////////////
    function getCookie(name) {
        var cookieValue = null;
        var i = 0;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (i; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }




/////////////////////////////////////////////////
////////////ajax////////////////////////////////
///////////////////////////////////////////////
function do_ajax(){

var csrftoken = getCookie('csrftoken');
    $.ajaxSetup({
        crossDomain: true, // obviates need for sameOrigin test
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
}