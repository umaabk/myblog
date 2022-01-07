var canvas=new fabric.Canvas('myCanvas');
ball_x=5;
ball_y=5;
holy_y=400;
holy_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
holy_obj=Img;
holy_obj.scaleToHeight(50);
holy_obj.scaleToWidth(50);
holy_obj.set({
top:holy_y,
left:holy_x
});
canvas.add(holy_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
ball_obj=Img;
ball_obj.scaleToHeight(50);
ball_obj.scaleToWidth(50);
ball_obj.set({
top:ball_y,
left:ball_x
});
canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
if((ball_x=holy_x)&&(ball_y=holy_y)){
	canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="You Hit The Goal !!";
	document.getElementById("myCanvas").style.borderColor="violet";
	document.getElementById("myCanvas").style.backgroundImage="Grass.jpg";
}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=5){
			ball_y=ball_y-block_image_height;
			console.log("block image height = "+ block_image_height);
			console.log("When up arrow key is pressed , x = "+ball_x  + "y = " +ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y<=400){
			 ball_y=ball_y+block_image_height;
			 console.log("block image height = "+block_image_height);
			 console.log("When down key is pressed , x = "+ball_x + "y = "+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		 } 
	}

	function left()
	{
		if(ball_x>=5)
		{
			ball_x=ball_x-block_image_width;
			console.log("block image width = "+block_image_width);
			console.log("When down key is pressed , x = "+ball_x + "y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x<=950)
		{
			ball_x=ball_x+block_image_width;
			console.log("block image width = "+block_image_width);
			console.log("When down key is pressed , x = "+ball_x + "y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

