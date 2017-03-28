$(document).ready(function(){
// check for users session

// SET THE BUTTON VALUE
$(":button").on('click', function (e) {
   // e.preventDefault();
   var value = $(this).attr("value");
   sessionStorage.mySubject  = value;
  //localStorage.setItem("subject", sub);
  
  document.location.href = '/andelaQuiz/quiz.html';
  
   
  });

 $('#signout').click(function(){

 	   localStorage.clear();
 	   sessionStorage.clear();

       window.location.href = 'index.html';

    });





  });