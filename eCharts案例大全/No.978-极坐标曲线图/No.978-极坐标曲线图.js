var data=[];
for(var i=0; i<16; i++)
{
	data[i]=[];
}
			
for (var i = 0; i <= 360*10; i++)
{
	var t = i / 180 * Math.PI;
	data[0].push([Math.cos(t*1/2),  i%360]);
	data[1].push([Math.cos(t*2/3),  i%360]);
	data[2].push([Math.cos(t*3/4),  i%360]);
	data[3].push([Math.cos(t*4/5),  i%360]);
	data[4].push([Math.cos(t*5/6),  i%360]);
	data[5].push([Math.cos(t*6/7),  i%360]);
	data[6].push([Math.cos(t*7/8),  i%360]);
	data[7].push([Math.cos(t*8/9),  i%360]);
	data[8].push([Math.cos(t*2/1),  i%360]);
	data[9].push([Math.cos(t*3/2),  i%360]);
	data[10].push([Math.cos(t*4/3),  i%360]);
	data[11].push([Math.cos(t*5/4),  i%360]);
	data[12].push([Math.cos(t*6/5),  i%360]);
	data[13].push([Math.cos(t*7/6),  i%360]);
	data[14].push([Math.cos(t*8/7),  i%360]);
	data[15].push([Math.cos(t*9/8),  i%360]);
}
var title=[];
title.push("ρ=sin(θ*1/2)");
title.push("ρ=sin(θ*2/3)");
title.push("ρ=sin(θ*3/4)");
title.push("ρ=sin(θ*4/5)");
title.push("ρ=sin(θ*5/6)");
title.push("ρ=sin(θ*6/7)");
title.push("ρ=sin(θ*7/8)");
title.push("ρ=sin(θ*8/9)");
title.push("ρ=sin(θ*2/1)");
title.push("ρ=sin(θ*3/2)");
title.push("ρ=sin(θ*4/3)");
title.push("ρ=sin(θ*5/4)");
title.push("ρ=sin(θ*6/5)");
title.push("ρ=sin(θ*7/6)");
title.push("ρ=sin(θ*8/7)");
title.push("ρ=sin(θ*9/8)");

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
		subtext:'data-visual.cn',
		sublink:'http://data-visual.cn',
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
};