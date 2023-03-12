var dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
var color = ['#FEC47A', '#3CA3F3', '#1875F0'];
var getname=['西部','中部','东部'];
var getvalue=[2459,208,156];
var chartData = [];
for(var i = 0;i<getname.length;i++){
	chartData.push({name:getname[i],value:getvalue[i]})
}

var arrName = [];
var arrValue = [];
var sum = 0;
var pieSeries = [],
    lineYAxis = [];

// 数据处理
chartData.forEach((v, i) => {
    arrName.push(v.name);
    arrValue.push(v.value);
    sum = sum + v.value;
})

// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '学历',
        type: 'pie',
        startAngle:270,
        clockWise: true,
        hoverAnimation: false,
        radius: [35 + i * 15 + '%', 30 + i * 15 + '%'],
        center: ["50%", "50%"],
        label: {
            show: false
        },
        data: [{
            value: v.value,
            name: v.name
        }, {
            value: sum - v.value,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)"
            }
        }]
    });
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        startAngle:270,
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [35 + i * 15 + '%',30 + i * 15 + '%'],
        center: ["50%", "50%"],
        label: {
            show: false
        },
        data: [{
            value: 10,
            itemStyle: {
                color: "#E3F0FF",
            }
        }, {
            value: 2,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)"
            }
        }]
    });
    v.percent = (v.value / sum * 100).toFixed(1) + "%";
    lineYAxis.push({
        value: i,
        textStyle: {
            rich: {
                circle: {
                    color: color[i],
                    padding: [0, 5]
                }
            }
        }
    });
})

option = {
    backgroundColor: '#fff',
    color: color,
    grid: {
        top: '63%',
        bottom: '15%',
        left: "50%",
        containLabel: false
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(params) {
                let item = chartData[params];
                console.log(item)
                return '{circle|●} {name|'+ item.name +'}   {percent|'+item.percent+'}'
            },
            interval: 0,
            inside: true,
            textStyle: {
                color: "#333",
                fontSize: 14,
                rich: {
                    line: {
                        width: 170,
                        height: 10,
                        backgroundColor: {image: dashedPic}
                    },
                    name: {
                        color: '#666666',
                        fontSize: 13,
                    },
                    percent:{
                        color: '#333333',
                        fontSize: 16,
                    },
                }
            },
            show: true
        },
        data: lineYAxis
    }],
    xAxis: [{
        show: false
    }],
    series: pieSeries
};