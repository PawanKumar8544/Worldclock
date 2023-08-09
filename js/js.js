function time(x,y){
var d=new Date();
t.innerHTML=d.toLocaleString('en-us',
{
timeZone:`${x}/${y}`,
 		
}
).split(',')[1];	
}

function a(){
	var x= document.getElementById('x').value;
	var y= document.getElementById('y').value;
setInterval(()=>{time(x,y)},1000);
}