$(document).ready(function(){

 $('#meetc').click(function(){
   $('#meet').modal('show')
 });
 $('#iguanac').click(function(){
   $('#iguana').modal('show')
 });
 $('#suricatac').click(function(){
   $('#suricata').modal('show')
 });
 $('#dmarkc').click(function(){
   $('#dmark').modal('show')
 });
 $('#cupponc').click(function(){
   $('#cuppon').modal('show')
 });
 $('#ricomidac').click(function(){
   $('#ricomida').modal('show')
 });

 $("a").click(function(event){
     if (this.hash !== "" ){
       event.preventDefault();

       var gato = this.hash;

       $("html, body").animate({
         scrollTop: $(gato).offset().top
       },800, function(){
         window.location.hash = gato;
       });
     }
   });


});
