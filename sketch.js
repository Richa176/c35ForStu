var ball;
// var db;
// var position;

function setup(){
    db= firebase.database();
    console.log(db);

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    // var ballPosition = db.ref('ball/positions');
    // ballPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

// function readPosition(data){
//     position = data.val();
//     console.log(position.x);
//     ball.x = position.x;
//     ball.y = position.y;
//   }
  
//   function showError(){
//     console.log("Error in writing to the database");
//   }
