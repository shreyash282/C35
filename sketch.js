var newball;
var position,database

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    newball = createSprite(250,250,10,10);
    newball.shapeColor = "red";
    var positionref = database.ref('ball/position')
    positionref.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if (position!==undefined){
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
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x' : position.x+x,
        'y' : position.y+y,
    })
}
function readposition(data){
    position = data.val()
    newball.x = position.x
    newball.y = position.y
}
function showerror(){
console.log("error")
}

