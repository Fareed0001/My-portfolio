$(".maqsam-card-div").hover(function(){$(".maqsam").fadeToggle()});$(".taskrabbit-card-div").hover(function(){$(".taskrabbit").fadeToggle()});$(".angela-card-div").hover(function(){$(".angela").fadeToggle()});$(".simon-card-div").hover(function(){$(".simon-game").fadeToggle()});$(".tindog-card-div").hover(function(){$(".tindog").fadeToggle()});$(".dice-card-div").hover(function(){$(".dice").fadeToggle()});$(".revamp-card-div").hover(function(){$(".revamp").fadeToggle()});$(".pure-honey-card-div").hover(function(){$(".pure-honey").fadeToggle()});$(".jon-card-div").hover(function(){$(".jon").fadeToggle()});$("body").ready(function(){$(".seemore-div").slideUp()});$(".seemore-button").click(function(){$(".seemore-div").slideDown();$(".seemore-button").css("display","none")});(function(){'use strict'
var forms=document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms).forEach(function(form){form.addEventListener('submit',function(event){if(!form.checkValidity()){event.preventDefault()
event.stopPropagation()}
form.classList.add('was-validated')},!1)})})()
$(".submit-button").on("click",function(){alert("Your Message has been sent.")});if($(window).width()<992){$(".project-container").removeClass("container");$(".project-container").addClass("container-fluid");$(".seemore-button").addClass("btn-lg")}else{}
if($(window).width()<768){$(".header-container").removeClass("container");$(".header-container").addClass("container-fluid")}else{}
if($(window).width()<480){$(".x-mark").removeClass("fa-2x");$(".footer-p").css("display","none")}else{}
