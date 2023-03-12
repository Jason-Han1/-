// 颜色
var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#00FFFF','#CD5C5C','#F08080']

function randomData() {
    value = (Math.random() * 10+50).toFixed(1);
    return value;
    
}
// 时间设置
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function timeSet() {
    var newTime = new Date();
    var m = newTime.getMinutes();
    var s = newTime.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    return [m, s].join(':');
}

var data = [];
var timeData = [];

for (var i = 0; i < 9; i++) {
    timeData.unshift(timeSet());
    data.unshift(randomData());
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
            show:false,
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisTick: {
            show:false,
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
        max: 60,
        min: 48,
        show:false,
        axisLine: {
            show:false,
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
            show:false,
            lineStyle: {
                color: 'rgba(75, 211, 255, 0.2)',
                type: 'dashed'
            }
        }
    }],
    series: [{
        name: '数量',
        type: 'bar',
        barCategoryGap: '10%',
        // symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
        label: {
            show: true,
            position: 'top',
            color: '#1798ff',
            fontSize: 14
        },
        itemStyle: {
            barBorderRadius: [30, 30, 0, 0],
            color: function(params){return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color:  colorList[params.dataIndex]// 0% 处的颜色
                }, {
                    offset: 1,
                    color: colorList[params.dataIndex]+'00' // 100% 处的颜色
                }], false)}
        },
        data: data
    }],
    // backgroundColor: "#190c12",
};

myChart.setOption(option);
var key = 0;
setInterval(function() {

    timeData.shift();
    timeData.push(timeSet());

    data.shift();
    data.push(randomData());

    // 颜色控制
    if(key>8){key=0}
    key++;

    myChart.setOption({
        xAxis: {
            data: timeData
        },
        series: [{
            itemStyle: {
                normal: {
                color: function(params){return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color:  colorList[(params.dataIndex+key)%9]// 0% 处的颜色
                }, {
                    offset: 1,
                    color: colorList[(params.dataIndex+key)%9]+'00' // 100% 处的颜色
                }], false)}
            }
                // normal: {
                //     color: function(params) {
                //         console.log(params)
                //     return colorList[(params.dataIndex+key)%9]
                //     }
                // }
            },
            data: data
        }]
    });
}, 1000);