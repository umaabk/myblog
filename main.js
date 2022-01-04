
var canvas= new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function (Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:block_y,
    left:block_x
});
canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '73') 
	{
		new_image('iron_man.png');
            console.log("i");
	}
	if(keyPressed == '67')
	{
		block_x = 200;
		new_image('captan.png');
            console.log("c");
	}
	
	if(keyPressed == '87')
	{
		block_x =500;
		new_image('war.jpg');
            console.log("w");
	}
	if(keyPressed == '84')
	{
		block_x = 680;
		new_image('thor.jpg');
            console.log("t");
	}
	if(keyPressed == '83')
	{
		block_x = 840;
		new_image('spider.jpg');
		console.log("s");
	}
	
}

