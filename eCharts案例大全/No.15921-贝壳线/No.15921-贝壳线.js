var data=[];
for(var i=0; i<2; i++)
{
	data[i]=[];
}
				
for (var i = -360*10; i <=0 ; i++) 
{
	var t=i*Math.PI / 180;
	var r=t*Math.sin(t);
	data[1].push([r, i%360]);
}

for (i = 0; i <= 360*10; i++)
{
	var t = i*Math.PI / 180;
	var r=t*Math.sin(t);
	data[0].push([r, i%360]);
}
var title=[];
title.push("贝壳线（下）");
title.push("贝壳线（上）");

var polar=[];
var angleAxis=[];
var radiusAxis=[];
var series=[];

for(var i = 0; i< data.length; i++)
{
	polar.push({
		center: [25 + 50 * (i % 2) + '%', '54%'],
		radius:'50%'
	});
	angleAxis.push({
		polarIndex:i,
		type: 'value',
		startAngle: 0
	});
	radiusAxis.push({
		show: false,
		polarIndex:i,
		min: 0
	});
	series.push({
		polarIndex: i,
		coordinateSystem: 'polar',
		name: title[i],
		type: 'line',
		showSymbol: false,
		label:{
            normal:{
            	show:true,
            	position:'bottom'
            }
		},
		data: data[i]
	});
}


option = {
	title: {
		text: '贝壳线',
		x:'center'
	},
	legend: {
		data: ['line']
	},
	polar: polar,
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross'
		}
	},
	angleAxis: angleAxis,
	radiusAxis: radiusAxis,
	series: series,
	animationDuration: 2000
}