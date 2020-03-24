$(document).ready(function() {    
    $("button").click(function() {
        $(this).prev().slideToggle();
    });

    $(".card").click(function() {
        $(this).toggleClass("highlight");
    });

    $("#select").click(function() {
        $(".card:not(.highlight)").hide();
    });

    $("#all").click(function() {
        $(".card").show();
    })
    
    /*
    // When a stream is clicked in the nav, that stream's cards will change background-color
    // when another is clicked, only that stream will transition
    $("#stream1_btn").on('click',function() {
        $(".card").removeClass("highlight_stream");
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on('click',function() {
        $(".card").removeClass("highlight_stream");
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on('click',function() {
        $(".card").removeClass("highlight_stream");
        $(".stream3").addClass('highlight_stream');
    });*/
    
    $("p").click(function() {
        $(this).children("a").css("background-color","yellow");
    });


    // Create the slideToggle effects each of the paragraphs and
    // buttons
    /*
    $("#button_effects1").click(function(){
        $('#par1').slideToggle('1000');
    });
    $("#button_effects2").click(function(){
        $('#par2').slideToggle('1000');
    });
    $("#button_effects3").click(function(){
        $('#par3').slideToggle('1000');
    });
    $("#button_effects4").click(function(){
        $('#par4').slideToggle('1000');
    });
    $("#button_effects5").click(function(){
        $('#par5').slideToggle('1000');
    });
    $("#button_effects6").click(function(){
        $('#par6').slideToggle('1000');
    });*/

    // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    
    /*$("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });

    $("#button_effects2").mouseenter(function(){
        $('#button_effects2').fadeTo(1000, 0.5);
    });
    $("#button_effects2").mouseleave(function(){
        $('#button_effects2').fadeTo(1000, 1);
    });

    $("#button_effects3").mouseenter(function(){
        $('#button_effects3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function(){
        $('#button_effects3').fadeTo(1000, 1);
    });

    $("#button_effects4").mouseenter(function(){
        $('#button_effects4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function(){
        $('#button_effects4').fadeTo(1000, 1);
    });

    $("#button_effects5").mouseenter(function(){
        $('#button_effects5').fadeTo(1000, 0.5);
    });
    $("#button_effects5").mouseleave(function(){
        $('#button_effects5').fadeTo(1000, 1);
    });

    $("#button_effects6").mouseenter(function(){
        $('#button_effects6').fadeTo(1000, 0.5);
    });
    $("#button_effects6").mouseleave(function(){
        $('#button_effects6').fadeTo(1000, 1);
    });

    $("#myButton").removeClass("blueBox").addClass("border");
    $("p").css("color", "blue").slideUp(2000).slideDown(2000);
    $("a").attr("href", "http://www.example.com");
*/
    // Challenge 1
    /* $("button").mouseenter(function() {
        $("button").removeClass("makeRed").addClass("makeBorder");
    });
    $("button").mouseleave(function() {
        $("button").removeClass("makeBorder").addClass("makeRed");
    }); */

    
}); 