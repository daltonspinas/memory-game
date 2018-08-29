let library = ["img-bank/football.png","img-bank/baseball.jpg","img-bank/basketball.png","img-bank/soccer.png","img-bank/apple.jpg","img-bank/banana.jpg","img-bank/orange.jpg","img-bank/strawberry.jpg","img-bank/football.png","img-bank/baseball.jpg","img-bank/basketball.png","img-bank/soccer.png","img-bank/apple.jpg","img-bank/banana.jpg","img-bank/orange.jpg","img-bank/strawberry.jpg"];


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
    }
    console.log(array);
}

shuffleArray(library);