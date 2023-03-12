var data=[];
for(var i=0; i<16; i++)
{
	data[i]=[];
}
var a=Math.random()*10;
for (var i = 0; i <= 360; i++)
{
	var t = i / 180 * Math.PI;
	data[0].push([a*Math.cos(t),  i]);
	data[1].push([a*Math.cos(3*t),  i]);
	data[2].push([a*Math.sin(t)*Math.cos(t),  i]);
	data[3].push([a*Math.cos(2*t),  i]);
	data[4].push([a*Math.cos(5*t),  i]);
	data[5].push([a*Math.cos(7*t),  i]);
	data[6].push([a*Math.cos(4*t),  i]);
	data[7].push([a*Math.sin(2*t) * Math.cos(2*t),  i]);
	data[8].push([a*Math.cos(9*t),  i]);
	data[9].push([a*Math.cos(11*t),  i]);
	data[10].push([a*Math.cos(6*t),  i]);
	data[11].push([a*Math.sin(3*t) * Math.cos(3*t),  i]);
	data[12].push([a*Math.cos(13*t),  i]);
	data[13].push([a*Math.cos(8*t),  i]);
	data[14].push([a*Math.sin(4*t) * Math.cos(4*t),  i]);
	data[15].push([a*Math.cos(10*t),  i]);
}
var title=[];
title.push("圆(ρ=a*Math.cos(t))");
title.push("三叶(ρ=a*Math.cos(3*t))");
title.push("四叶(ρ=a*Math.sin(t)*Math.cos(t))");
title.push("四叶(ρ=a*Math.cos(2*t))");
title.push("五叶(ρ=a*Math.cos(5*t))");
title.push("七叶(ρ=a*Math.cos(7*t))");
title.push("八叶(ρ=a*Math.cos(4*t))");
title.push("八叶(ρ=a*Math.sin(2*t) * Math.cos(2*t))");
title.push("九叶(ρ=a*Math.cos(9*t))");
title.push("十一叶(ρ=a*Math.cos(11*t))");
title.push("十二叶ρ=a*Math.cos(6*t))");
title.push("十二叶(ρ=a*Math.sin(3*t) * Math.cos(3*t))");
title.push("十三叶(ρ=a*Math.cos(13*t))");
title.push("十六叶(ρ=a*Math.cos(8*t))");
title.push("十六叶(ρ=a*Math.sin(4*t) * Math.cos(4*t))");
title.push("二十叶(ρ=a*Math.cos(10*t))");

var polar=[];
var angleAxis=[];
var radiusAxis=[];
var series=[];

for(var i = 0; i< data.length; i++)
{
	polar.push({
		center: [15 + 24 * (i % 4) + '%', (15+ 24 * Math.floor(i/ 4)) + '%'],
		radius:'16%'
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


option= {
	title: {
		text: "极坐标曲线图",
		x:'center'
	},
	polar: polar,
	tooltip: {
		show:false
	},
	angleAxis: angleAxis,
	radiusAxis: radiusAxis,
	series: series,
	animationDuration: 2000
}