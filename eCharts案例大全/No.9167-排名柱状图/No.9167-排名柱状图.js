var data = {
    x: ['一区', '二区', '三区', '四区', '五区', '六区', '七区'],
    y: [85, 52, 83, 95, 70, 30, 90]
}
var len = data.x.length;
var colors = ['#0cb689', '#e6a909', '#e1630f'];
for (var i = 0; i < len - 3; i++) {
    colors.unshift("#1767b0");
}
option = {
    backgroundColor: '#0d213b',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '2%',
        top: '5px',
        right: '20px',
        bottom: '10px',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: data.x,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
                width: 1,
            }
        },
    }],
    xAxis: [{
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
        name: '训练质量',
        type: 'bar',
        barWidth: '40%',
        label: {
            show: true,
            position: 'right',
            color: '#fff'
        },
        itemStyle: {
            color: function(params) {
                return colors[params.dataIndex];
            }
        },
        data: data.y
    }]
}