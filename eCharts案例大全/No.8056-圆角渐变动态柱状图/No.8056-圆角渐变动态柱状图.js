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
var red = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(249, 42, 42, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(249, 42, 42, 0.1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}

function randomData() {
    value = (Math.random() * 20+210).toFixed(1);
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
    title: {
        left:"12%",
        top:"5%",
        text: '单位：ug/m³',
        textStyle:{
            color:"rgba(0, 192, 255, 1)"
        },
    },
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
            inside: true,
            color: '#fff',
            fontSize: 12
        },
        splitLine: {
            show: false
        },
        data: timeData,

    },
    yAxis: [{
        max: 230,
        min: 205,
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
            color: function(params) {
                if(params.value>225){
                            return red;
                        }else{
                        return lightBlue;
                            
                        }
            },
            fontSize: 14
        },
        itemStyle: {
            barBorderRadius: [30, 30, 0, 0],
            color: function(params) {
                if(params.value>225){
                            return red;
                        }else{
                        return lightBlue;
                            
                        }
            }
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
    key = (key === 1) ? 0 : 1;

    myChart.setOption({
        xAxis: {
            data: timeData
        },
        series: [{
            itemStyle: {
                normal: {
                    color: function(params) {
                        if(params.value>225){
                            return red;
                        }else{
                        return lightBlue;}
                    }
                }
            },
            data: data
        }]
    });
}, 1000);