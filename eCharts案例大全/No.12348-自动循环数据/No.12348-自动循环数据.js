//X轴要显示的条目数
var count=3;
//每个时间间隔的偏移数
var Tcount=count;
//总记录数
var total=5;
var xAxisData=[2011,2012,2013,2014,2015];
var fdata=[20,35,12,29,46]
// 颜色
var lightBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(0, 192, 255, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(0, 192, 255, 0.1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
var darkBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(41, 121, 255, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(41, 121, 255, 0.1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}

function randomData(v) {
    return {
        value: fdata[v]
    }
}

function timeSet(f) {
    return xAxisData[f];
}

var data = [];
var timeData = [];

for (var i = 0; i < count; i++) {
    timeData.unshift(timeSet(i));
    data.unshift(randomData(i));
}
// 指定图表的配置项和数据
var option = {
    tooltip: {
        show: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // boundaryGap: 100,
        min: -1,
        max: 9,
        axisLine: {
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisTick: {
            interval: (index) => {
                if (index === -1 || index === 9) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        splitLine: {
            show: false
        },
        data: timeData,

    },
    yAxis: [{
        max: 50,
        min: 0,
        axisLine: {
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(75, 211, 255, 0.2)',
                type: 'dashed'
            }
        }
    }],
    series: [{
        name: '数量',
        type: 'pictorialBar',
        barCategoryGap: '-60%',
        symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
        label: {
            show: true,
            position: 'top',
            color: '#1798ff',
            fontSize: 14
        },
        itemStyle: {

            color: function(params) {
                return params.dataIndex % 2 ? darkBlue : lightBlue;
            }
        },
        data: data
    }],
    backgroundColor: "#190c12",
};

myChart.setOption(option);
var key = 0;
setInterval(function() {
    if(Tcount>=total){
        Tcount=Tcount%count;
    }
    timeData.shift();
    timeData.push(timeSet(Tcount));

    data.shift();
    data.push(randomData(Tcount));

    // 颜色控制
    key = (key === 1) ? 0 : 1;

    myChart.setOption({
        xAxis: {
            data: timeData
        },
        series: [{
            itemStyle: {
                normal: {
                    color: function(params) {
                        return (params.dataIndex + key) % 2 ? darkBlue : lightBlue;
                    }
                }
            },
            data: data
        }]
    });
    Tcount++;
}, 5000);