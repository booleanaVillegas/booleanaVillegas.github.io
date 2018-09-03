

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
    $(node).children('.bottom-icons').css('height', '5vw');
    $(node).children('.bottom-icons').children().children('.icons-skills').css('width','3vw');

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