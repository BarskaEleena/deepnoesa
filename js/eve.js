$(document).ready(function() {
  var svg = document.querySelector(".preloader_shining");
  svg.classList.add("anim");
});

$(document).on("click", ".menu_logo", function () {
  var win = window.open('./index.html', '_blank');
}); 

$(document).on("click", ".webdesigntuts-workshop input", function () {
  var win = window.open('./download_api.html', '_blank');
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


$(".dialog_header .close").click(function() {
  document.querySelector(".dialog_main").style.display = "none";
    insertAfter(document.querySelector(".dialog_main") , document.querySelector("#bm"));
});

var first_mess = 0;

$("#bm").click(function() {
  if ( document.querySelector(".more_info_window").style.display == "block") {
    document.querySelector(".chatbot_wrapper").style.background = "rgb(0 0 0 / 0%)";
    document.querySelector(".chatbot_wrapper").style.width = "unset";
    document.querySelector(".chatbot_wrapper").style.height = "unset";
    document.querySelector(".more_info_window").style.display = "none";
    document.getElementById("bm").classList.remove("animate");
  } 

  if (document.querySelector(".dialog_main").style.display == "flex") {
    document.querySelector(".dialog_main").style.display = "none";
    insertAfter(document.querySelector(".dialog_main") , document.querySelector("#bm"));

  } else {
    insertAfter(document.querySelector(".dialog_block") , document.querySelector("#bm"));
    document.querySelector(".dialog_main").style.display = "flex";

    if (first_mess == 0) {
      var botAnswer = document.createElement("div");
      botAnswer.innerHTML = "<p>Hi!</p>"; 
      botAnswer.classList.add("message_bot");
      document.querySelector(".dialog__").append(botAnswer);

      document.querySelector(".dialog__").scrollTop = document.querySelector(".dialog__").scrollHeight;

      setTimeout(function(){
        var botAnswer = document.createElement("div");
        botAnswer.innerHTML = "<p>My name is Barska.</p>"; 
        botAnswer.classList.add("message_bot");
        document.querySelector(".dialog__").append(botAnswer);

        document.querySelector(".dialog__").scrollTop = document.querySelector(".dialog__").scrollHeight;
      }, 1000);

      setTimeout(function(){
        var botAnswer = document.createElement("div");
        botAnswer.innerHTML = "<p>Write what interests you and I will answer any of your questions about Smart Neural IE.</p>"; 
        botAnswer.classList.add("message_bot");
        document.querySelector(".dialog__").append(botAnswer);

        document.querySelector(".dialog__").scrollTop = document.querySelector(".dialog__").scrollHeight;
      }, 2400);

      first_mess = 1;
    }
  }
});


$(".send").click(function() {
  var message = document.querySelector('.input_block input').value;
  document.querySelector('.input_block input').value = "";
  var newDiv = document.createElement("div");
  newDiv.innerHTML = "<p>"+message+"</p>"; 
  newDiv.classList.add("message_client");
  document.querySelector(".dialog__").append(newDiv);

  document.querySelector(".dialog__").scrollTop = document.querySelector(".dialog__").scrollHeight;

  setTimeout(function(){
    var botAnswer = document.createElement("div");
    botAnswer.innerHTML = "<p>Thanks for your question! It is very important for me. </p>"; 
    botAnswer.classList.add("message_bot");
    document.querySelector(".dialog__").append(botAnswer);

    document.querySelector(".dialog__").scrollTop = document.querySelector(".dialog__").scrollHeight;
  }, 2000);

  setTimeout(function(){
    var botAnswer = document.createElement("div");
    botAnswer.innerHTML = "<p>I am now learning based on Smart Neural IE, my intellectual skills are increasing.</p>"; 
    botAnswer.classList.add("message_bot");
    document.querySelector(".dialog__").append(botAnswer);

    document.querySelector(".dialog__").scrollTop = document.querySelector(".dialog__").scrollHeight;
  }, 4000);

  setTimeout(function(){
    var botAnswer = document.createElement("div");
    botAnswer.innerHTML = "<p>The official launch of our website is scheduled for July 1, 2021. If you want to chat with me in full format and see all the power of Smart IE for linguistic processing - come to us on July 1, 2021 and I will be glad to talk with you on any topic and become your best bot-friend forever.</p>"; 
    botAnswer.classList.add("message_bot");
    document.querySelector(".dialog__").append(botAnswer);

    document.querySelector(".dialog__").scrollTop = document.querySelector(".dialog__").scrollHeight;
  }, 5000);
});
