var data=[];
// 起始点半径
var pointStart_r = 3;
// 结束点半径
var pointEnd_r = 1;
// 区间绘制点的个数
for (var i = 0; i <= 50; i++)
{
	// var t = i / 45 * Math.PI;
	// 区间点半径
	var r = pointEnd_r + (pointStart_r - pointEnd_r) / 50 * i;
	data.push([Math.sin(2*Math.PI / 360) * r,  Math.cos(2*Math.PI / 360) * r]);
}
var title=[];
title.push("ρ=sin(θ*1/2)");

option= {
    backgroundColor: '#041a55',
	title: {
	},
	polar: {
	    center: ['50%', '50%'],
		radius:'50%',
	},
	tooltip: {
		show:true
	},
	angleAxis: [{
		polarIndex:0,
		type: 'value',
		startAngle: 45,
		// 雷达图绘图区域圆形虚线分割线
        axisLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#0457a0'
            }
        },
        axisLabel: {
            show:true,
            color: '#fff'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#0457a0'
            }
        },
        // data: [0, 2, 4, 6]
	}],
	radiusAxis: {
	    show: true,
	    polarIndex:0,
		min: 0,
        axisLabel: {
            show:false,
            color: '#fff'
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'dashed',
                color: '#0457a0'
            }
        },
		// 雷达图绘图区域圆形虚线分割线
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#0457a0'
            }
        },
	},
	series: [{
		polarIndex: 0,
		coordinateSystem: 'polar',
		name: title[0],
		type: 'line',
		showSymbol: false,
		// 雷达图点围成的区域
        areaStyle: {
            opacity: 0,
        },
        lineStyle: {
            width: 1,
            type: 'solid',
            color: '#19bbf1',
            shadowColor: 'rgba(25,187,241, 1)',
            shadowBlur: 15
        },
		label:{
            normal:{
            	show:false,
            	position:'bottom'
            }
		},
		data: data
	}],
	// animationDuration: 2000
};