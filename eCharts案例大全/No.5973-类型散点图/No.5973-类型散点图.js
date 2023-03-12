var curTime = getNowTime('1'); // 当天时间
// status 0事故类（三角形） 1异常类（圆形） 2越限类（方形）
// type 0红色代表动作，1绿色代表复归
var minDate = new Date(curTime+' 08:30:00').getTime();
// 散点数据（x轴下方）
var resData = [
	{
		name: '08:43:00',
		value: [new Date(curTime+' 08:43:00').getTime(), 2],
		status: '1',
		type: '1',
	},
	{
		name: '09:13:00',
		value: [new Date(curTime+' 09:13:00').getTime(), 4],
		status: '0',
		type: '0',
	},
	{
		name: '09:43:00',
		value: [new Date(curTime+' 09:43:00').getTime(), 6.5],
		status: '0',
		type: '1',
	},
	{
		name: '10:15:00',
		value: [new Date(curTime+' 10:15:00').getTime(), 26],
		status: '1',
		type: '0',
	},
	{
		name: '10:42:00',
		value: [new Date(curTime+' 10:42:00').getTime(), 9],
		status: '2',
		type: '0',
	},
	{
		name: '10:44:00',
		value: [new Date(curTime+' 10:44:00').getTime(), 43],
		status: '1',
		type: '0',
	},
	{
		name: '10:50:00',
		value: [new Date(curTime+' 10:50:00').getTime(), 40],
		status: '1',
		type: '1',
	},
	{
		name: '12:10:00',
		value: [new Date(curTime+' 12:10:00').getTime(), 12],
		status: '2',
		type: '1',
	},
	{
		name: '13:05:00',
		value: [new Date(curTime+' 13:05:00').getTime(), 40],
		status: '1',
		type: '0',
	},
	{
		name: '13:30:00',
		value: [new Date(curTime+' 13:30:00').getTime(), 16],
		status: '1',
		type: '0',
	},
	{
		name: '13:40:00',
		value: [new Date(curTime+' 13:40:00').getTime(), 38],
		status: '2',
		type: '1',
	},
	{
		name: '14:00:00',
		value: [new Date(curTime+' 14:00:00').getTime(), 10],
		status: '2',
		type: '1',
	},
	{
		name: '14:30:00',
		value: [new Date(curTime+' 14:30:00').getTime(), 12],
		status: '1',
		type: '1',
	},
	{
		name: '15:00:00',
		value: [new Date(curTime+' 15:00:00').getTime(), 13],
		status: '1',
		type: '0',
	},
	{
		name: '15:38:00',
		value: [new Date(curTime+' 15:38:00').getTime(), 14],
		status: '1',
		type: '1',
	},
];
// 散点数据（x轴上方）
var resData2 = [
	{
        value: [new Date(curTime+' 11:05:00').getTime(), 2],
        symbol: 'emptyCircle',
        itemStyle: {
            color: 'red',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 11:10:00').getTime(), 2],
        symbol: 'circle',
        itemStyle: {
            color: 'green',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 11:15:00').getTime(), 2],
        symbol: 'emptyCircle',
        itemStyle: {
            color: 'red',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 11:20:00').getTime(), 2],
        symbol: 'circle',
        itemStyle: {
            color: 'green',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 11:25:00').getTime(), 2],
        symbol: 'emptyCircle',
        itemStyle: {
            color: 'red',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 11:30:00').getTime(), 2],
        symbol: 'circle',
        itemStyle: {
            color: 'green',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 11:35:00').getTime(), 2],
        symbol: 'emptyCircle',
        itemStyle: {
            color: 'red',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 11:40:00').getTime(), 2],
        symbol: 'circle',
        itemStyle: {
            color: 'green',
        },
        symbolSize: 10,
    },
];
var resData3 =  [
    {
        value: [new Date(curTime+' 08:40:00').getTime(), 2],
        symbol: 'circle',
        itemStyle: {
            color: '#ff0000',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 08:50:00').getTime(), 2],
        symbol: 'circle',
        itemStyle: {
            color: '#00ff00',
        },
        symbolSize: 10,
    },
];
var resData4 = [
    {
        value: [new Date(curTime+' 08:52:00').getTime(), 5],
        symbol: 'circle',
        itemStyle: {
            color: '#ff0000',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 11:00:00').getTime(), 5],
        symbol: 'circle',
        itemStyle: {
            color: '#00ff00',
        },
        symbolSize: 10,
    },
];
var resData5 = [
    {
        value: [new Date(curTime+' 11:10:00').getTime(), 10],
        symbol: 'circle',
        itemStyle: {
            color: '#ff0000',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 15:10:00').getTime(), 10],
        symbol: 'circle',
        itemStyle: {
            color: '#00ff00',
        },
        symbolSize: 10,
    },
];
var resData6 = [
    {
        value: [new Date(curTime+' 12:10:00').getTime(), 15],
        symbol: 'triangle',
        itemStyle: {
            color: 'red',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 15:38:00').getTime(), 15],
        symbol: 'arrow',
        symbolRotate: 270,
        itemStyle: {
            color: 'blue',
        },
        symbolSize: 10,
    },
];
var resData7 = [
    {
        value: [new Date(curTime+' 08:30:00').getTime(), 12],
        symbol: 'arrow',
        symbolRotate: 90,
        itemStyle: {
            color: 'blue',
        },
        symbolSize: 10,
    },
    {
        value: [new Date(curTime+' 11:25:00').getTime(), 12],
        symbol: 'circle',
        itemStyle: {
            color: 'green',
        },
        symbolSize: 10,
    },
];
// 渲染图表
drawChart();

// 渲染图表
function drawChart() {
	var scatterData = [];
	for (var i=0; i<resData.length; i++) {
		var obj = {
			itemStyle: {}
		};
		obj.value = resData[i].value;
		obj.value[1] = -resData[i].value[1]; // 把分钟变成负数，好在x轴下方显示
		var icon = '';
		var color = '';
		if (resData[i].status == '0') {
			icon = 'triangle'
		} else if (resData[i].status == '1') {
			icon = 'circle'
		} else if (resData[i].status == '2') {
			icon = 'roundRect'
		}
		if (resData[i].type == '0') {
			color = '#ff0000';
		} else if (resData[i].type == '1') {
			color = '#00ff00';
		}
		if (resData[i].show == 'false') {
			obj.symbolSize = 0;
		} else {
			obj.symbolSize = 15;
		}
		obj.symbol = icon;
		obj.itemStyle.color = color;
		scatterData.push(obj);
	}
	var obj2 = {
        value: [new Date(curTime+' 08:30:00').getTime(), 20],
        symbol: 'circle',
        itemStyle: {
            color: 'green',
        },
        symbolSize: 0,
    };
    var obj3 = {
        value: [new Date(curTime+' 18:00:00').getTime(), 20],
        symbol: 'circle',
        itemStyle: {
            color: 'green',
        },
        symbolSize: 0,
    };
    scatterData.push(obj2);
    // scatterData.push(obj3);
// 	console.log(scatterData);
    option = {
        legend: {
            data: ['列表'],
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true,
        },
        xAxis: {
            name: '时间',
            type: 'time',
            min: minDate, // 当天08:30:00
            splitNumber: 9,
            axisLabel: {
                formatter: function(value, index) {
                    return echarts.format.formatTime('hh:mm', new Date(value));
                }
            },
            splitLine: {
                show: false,
            },
        },
        yAxis: {
            type: 'value',
            name: 'x',
            position: 'bottom',
            axisLabel: {
                formatter: function(value) {
                    if (value > 0) {
                        return '';
                    } else {
                        return Math.abs(value);
                    }
                }
            },
            splitLine: {
                show: false,
            },
        },
        series: [
            {
                name: '',
                type: 'scatter',
                data: scatterData,
                markLine: {
                    animation: false,
                    symbolSize: 0,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'solid',
                                color: 'blue'
                            },
                            label: {
                                show: true,
                                position: 'end',
                                formatter: function() {
                                    return '时间（分钟）';
                                }
                            }
                        },
                    },
                    data: [
                        // {
                        //     name: '平均线',
                        //     // 支持 'average', 'min', 'max'
                        //     type: 'average'
                        // },
                        {
                            name: 'Y水平线',
                            yAxis: -40
                        }
                    ]
                },
            },
            {
                name: '',
                type: 'scatter',
                data: resData2,
            },
            {
                name: '',
                type: 'line',
                data: resData3,
            },
            {
                name: '',
                type: 'line',
                data: resData4,
            },
            {
                name: '',
                type: 'line',
                data: resData5,
            },
            {
                name: '',
                type: 'line',
                lineStyle: {
                    color: 'blue',
                },
                data: resData6
            },
            {
                name: '',
                type: 'line',
                lineStyle: {
                    color: 'blue',
                },
                data: resData7
            },
        ]
    };
}

// 获取时间
function getNowTime(type) { // type 1=年月日 2=时分秒 3=星期几
	var time = '';
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var weekArray = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	var weekDay = date.getDay(); // 0~6 0=星期天
	if (month < 10) {
		month = '0' + month;
	}
	if (day < 10) {
		day = '0' + day;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	switch(type) {
		case '0':
			time = year + '.' + month + '.' + day + ' ' + hours + ':' + minutes + ':' + seconds;
			break;
		case '1':
			time = year + '-' + month + '-' + day;
			break;
		case '2':
			time = hours + ':' + minutes + ':' + seconds;
			break;
		case '3':
			time = weekArray[weekDay];
			break;
		default:
	}
	return time;
}