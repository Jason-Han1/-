var base = +new Date(2020, 9, 1);
var interval = 24 * 3600 * 1000;


var now = new Date(base); // 时间

var date = [getTime(now)];
var data = [15]; // 初始数据

for (var i = 1; i < 30; i++) {

    now = new Date(base += interval);
    let r = Math.random();
    let c1 = -0.5; // 系数1: 增减趋势概率
    let c2 = 5; // 系数2: 幅度 倍数
    date.push(getTime(now));
    data.push(Math.round((r + c1) * c2 + data[i - 1]));
}

function getTime(now) {
    return [now.getFullYear(), now.getMonth(), now.getDate()].join('-');
}

option = {
    grid: {
        left: "0%",
        right: "5%",
        bottom: "0%",
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        position: function(pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '随机曲线数据',
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        show: false,
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        show: false,
        type: 'inside',
        start: 0,
        end: 100
    }, {
        show: false,
        start: 0,
        end: 100,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [{
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        name: '模拟数据',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
            color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(255, 158, 68)'
            }, {
                offset: 1,
                color: 'rgb(255, 70, 131)'
            }])
        },
        data: data
    }]
};