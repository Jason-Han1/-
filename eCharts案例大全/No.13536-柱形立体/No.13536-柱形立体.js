option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};

/*
<!DOCTYPE html>
<html>
<body style="background-color:#707070">
 
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
  <polygon points="30,30 130,30 120,40 20,40" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:0.1" />
  <polygon points="20,40 120,40 120,70 20,70" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:0.1" />
 
  <polygon points="130,30 230,30 220,40 120,40" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:0.3" />
  <polygon points="120,40 220,40 220,70 120,70" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:0.3" />
 
  <polygon points="230,30 330,30 320,40 220,40" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:0.5" />
  <polygon points="220,40 320,40 320,70 220,70" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:0.5" />
 
  <polygon points="330,30 430,30 420,40 320,40" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:0.7" />
  <polygon points="320,40 420,40 420,70 320,70" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:0.7" />
 
  <polygon points="430,30 530,30 520,40 420,40" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:1" />
  <polygon points="420,40 520,40 520,70 420,70" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:1" />
  <polygon points="530,30 520,40 520,70 530,60" 
		  style="fill:lime;stroke:purple;stroke-width:0.5;fill-opacity:1" />
	
   <circle cx="100" cy="25" r="10" stroke="purple" stroke-width="0.5" 
		  fill="red" />
   <text x="100" y="29" text-anchor="middle" fill="white" font-size="12">2.5</text>
	
   <circle cx="300" cy="25" r="10" stroke="purple" stroke-width="0.5" 
		  fill="red" />
   <text x="300" y="29" text-anchor="middle" fill="white" font-size="12">6.5</text>
	
   <circle cx="500" cy="25" r="10" stroke="purple" stroke-width="0.5" 
		  fill="red" />
   <text x="500" y="29" text-anchor="middle" fill="white" font-size="12">9.5</text>
 
</svg>
 
</body>
</html>


*/