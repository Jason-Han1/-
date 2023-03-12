var data = [];
data.push({
    value:[90 - 46.36, 140.00],
	name:'C01',
});
data.push({
    value:[90 - 34.54, 234.48],
	name:'C02',
});
data.push({
    value:[90 - 50.55, 199.98],
	name:'C03',
});
data.push({
    value:[90 - 34.94, 122.87],
	name:'C04',
});
var data2 = [];
data2.push({
    value:[90 - 18.76, 175.56],
	name:'G21',
});
data2.push({
    value:[90 - 5.64, 38.49],
	name:'G18',
});
data2.push({
    value:[90 - 24.96, 317.18],
	name:'G07',
});
//data2.push([90 - 18.76, 175.56]);
//data2.push([90 - 5.64, 38.49]);
//data2.push([90 - 24.96, 317.18]);

option = {
    title: {
        text: '极坐标双数值轴'
    },
    legend: {
        data: ['line']
    },
    polar: {},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
		min:0,
		max:360,
		axisTick:{
			show:false
		},
		axisLabel:{
			show:false
		}
    },
    radiusAxis: {
        type: 'value',
		min:0,
		max:90,
		splitNumber:3,
		axisLine:{
			show:false
		},
		axisTick:{
			show:false
		},
		axisLabel:{
			show:false
		}
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        symbolSize: 30,
        itemStyle:{
			normal:{
				color:'#009999'
			}
		},
		label:{
    		normal:{
    			show:true,
    			formatter: '{b}',
    			position:'inside',
    			textStyle:{
    				color:'#fff',
    				fontSize:15
    			}
    		}
    	},
        type: 'scatter',
        data: data
    },
    {
        coordinateSystem: 'polar',
        name: 'line',
        symbolSize: 30,
        label:{
    		normal:{
    			show:true,
    			formatter: '{b}',
    			position:'inside',
    			textStyle:{
    				color:'#fff',
    				fontSize:15
    			}
    		}
    	},
        type: 'scatter',
        data: data2
    }]
};