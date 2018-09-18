

let isDroppedDown=false;

$( ".skills-container" ).click(function() {



    if(this.getAttribute('isDroppedDown')==='false'){
        dropDown(this);
        this.setAttribute('isDroppedDown','true')
    }else{

        dropDownClosed(this);
        this.setAttribute('isDroppedDown','false')
    }


});



var dropDown = function (node) {
    dropDownCloseAll();
    if (screen.width <769){
        $(node).children('.bottom-icons').css('height', '14vw');
        $(node).children('.bottom-icons').children().children('.icons-skills').css('width','9vw');
    }else {
        $(node).children('.bottom-icons').css('height', '5vw');
        $(node).children('.bottom-icons').children().children('.icons-skills').css('width', '3vw');
    }

}

var dropDownClosed = function (node) {
    $(node).children('.bottom-icons').css('height', '0');
    $(node).children('.bottom-icons').children().children('.icons-skills').css('width','0');


}

var dropDownCloseAll = function(){
    $( ".skills-container").each(function (index,value) {
        dropDownClosed(this);
        this.setAttribute('isDroppedDown','false')
    })
}


//---------------------------scroll------

$(document).ready(function () {
    $('a[rel="relativeanchor"]').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

    if (screen.width < 800){
$('.about-me-desc').text('Interactive media design is the perfect combination between design and programming. Every platform needs to be centered in how the user feels during the experience and how they interact with it. I love to learn new things and experiment with new programmable technologies. Do you want to work together?')
    }
});
