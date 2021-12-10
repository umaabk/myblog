var mouseEvent="empty";
var last_position_of_x, last_position_of_y ;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=4;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
 if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of X and Y coordinates=");
        console.log("X = "+last_position_of_x+"Y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("Current position of X and Y coordinates=");
        console.log("X = "+ current_position_of_mouse_x+"Y = "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
         ctx.stroke();
    }  
}  
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
    function my_mouseup(e){
canvas.addEventListener("mouseup",my_mouseup);
    mouseEvent="mouseUP";

}
function my_mouseleave(e){
canvas.addEventListener("mouseleave",my_mouseleave);
    mouseEvent="mouseleave";
    
}