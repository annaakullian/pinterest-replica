var createCard = function(columnFive) {

    var myCardDiv = document.createElement('div');
    myCardDiv.className ='my-card';
    columnFive.appendChild(myCardDiv);
    var img = document.createElement('img');
    img.className ='my-image';
    img.src = 'https://s-media-cache-ak0.pinimg.com/236x/7c/5d/86/7c5d86128f6cf83a60c562d86e18f32c.jpg';
    myCardDiv.appendChild(img);
    var caption = document.createElement('div');
    caption.className ='my-caption';
    myCardDiv.appendChild(caption);
    var description = document.createElement('p');
    description.className ='p-textbox';
    description.innerHTML ='Nature Scene';
    caption.appendChild(description);
    var avatar = document.createElement('div');
    avatar.className ='my-avatar';
    var avatarImage = document.createElement('img');
    avatarImage.src = 'http://www.annaakullian.com/static/images/yoga.jpg';
    avatar.appendChild(avatarImage);
    myCardDiv.appendChild(avatar);
    var info = document.createElement('div');
    var fullName = document.createElement('p');
    fullName.className = 'user-name';
    fullName.innerHTML = 'Anna Akullian';
    info.appendChild(fullName);
    myCardDiv.appendChild(info);
    var category = document.createElement('p');
    category.className = 'p-board-category';
    category.innerHTML = 'Nature';
    info.appendChild(category);

};

function createColumn() {
    var mainContainer = document.getElementById('main-container');
    var columnFive = document.createElement('div');
    columnFive.className = 'col-5';
    mainContainer.appendChild(columnFive);
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
document.addEventListener("DOMContentLoaded", function(event) {
    makePage();
});

