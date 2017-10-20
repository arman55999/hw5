


<script>


//canvas
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const points = new Array ();
const createPoint = (count, canvasWidth, canvasHeight){
	
	if(count === 0){
		return '';
	}
	
	
	points.push("x:");
	points.push(rand(canvasWidth));
	points.push(" ");
	
	points.push("y:");
	points.push(rand(canvasHeight);
	points.push("   ");
	
	count  = count - 1;	
	
	
	
}


//bouncing balls


const context;
const dx= 4;
const dy=4;
const y=150;
const x=10;
function draw(){
    context= myCanvas.getContext('2d');
    context.clearRect(0,0,300,300);
    context.beginPath();
    context.fillStyle="purple";
    context.arc(x,y,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    if( x<0 || x>300)
    dx=-dx;
    if( y<0 || y>300)
        dy=-dy;
        x+=dx;
        y+=dy;
    }
setInterval(draw,10);





//



</script>
