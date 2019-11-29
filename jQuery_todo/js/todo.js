//document.ready prevents code running before web page has loaded
$(document).ready(function(){

    //Get addBtn and add click function
    $('#addBtn').click(function(){
    //Make variable addTodo and set value to be the input field
        var addTodo = $('input[name="userInput"]').val();
    //Check value of input field
        if($('#userInput').val() == '' || $('#userInput').val().length < 3 ) {
          alert("Input too short!");
          $('#userInput').css("borderColor", "red");
        } else {
    //Append addTodo to li element inside of ul
          $('ul').append('<li>' + addTodo + '</li>');
          $('#userInput').css("borderColor", "");
        }

    //Set inputfield to be empty
        $('#userInput').val('');
      });

    //Click li element to set class 'check' on
    $(document).on('click','li', function(){
      $(this).toggleClass('check');
    });

    //Double click li to remove it from the list
    $(document).on('dblclick','li', function(){
        $(this).toggleClass('check').fadeOut('slow');
      });

    //Clear all listed items from todo list
    $('.clearBtn').click(function() {
      if(confirm("Are you sure you want to clear todo list?")) {
    //Hide all li elements
        $("li").hide();
      }
    });


  }
);
