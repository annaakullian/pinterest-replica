var createCard = function(columnFive) {
    var card = $('<div class="my-card"> <img class="my-image" src="https://s-media-cache-ak0.pinimg.com/236x/7c/5d/86/7c5d86128f6cf83a60c562d86e18f32c.jpg"> <div class="my-caption"> <p class="p-textbox">Nature scene</p> </div> <div class="my-avatar"> <img src="http://www.annaakullian.com/static/images/yoga.jpg"> </div> <div> <p class="user-name">Anna Akullian</p> <p class="p-board-category">Nature</p> </div> </div>');
    columnFive = $(columnFive);
    columnFive.append(card);
};

function createColumn() {
    var mainContainer = $('#main-container');
    var columnFive = $('<div class="col-5"></div>');
    mainContainer.append(columnFive);
    return columnFive;
}

function makePage() {
    for (var i=0; i<5; i++) {
        var columnFive = createColumn();
        for (var x=0; x<5; x++) {
            createCard(columnFive);
        }
    }
}

$(document).ready(function(event) {
    makePage();

    $('.my-card').on('click', function(event) {
        $(this).toggleClass('when-clicked');
    });
    // $('.my-card').click(function(event) {
    //     $(this).toggleClass('when-clicked');
        // if ( $(this).hasClass('when-clicked')) {
        //     $(this).removeClass('when-clicked');
        // }
        // else {
        //     $(this).addClass('when-clicked');
        // }

    // });
});



