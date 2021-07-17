canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var last_posofx;
    var last_posofy;
    var width = screen.width;
    var new_width = screen.width - 70;
    var new_height = screen.height - 300;
   var color = "black";
  var  width_of_line = 2;
if(width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height= new_height;
    document.body.style.overflow = "hidden";
}

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
      last_posofx = e.touches[0].clientX - canvas.offsetLeft;
      last_posofy = e.touches[0].clientY - canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         var current_posofx = e.touches[0].clientX - canvas.offsetLeft;
         var current_posofy = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = "DarkGoldenRod";
        ctx.lineWidth = 5;
        
   
        ctx.moveTo(last_posofx, last_posofsy);
        ctx.lineTo(current_posofx, current_posofy);
        ctx.stroke();
         last_posofx = current_posofx; 
        last_posofy = current_posofsy;
    
    }
