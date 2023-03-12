let {
    date,
    dataval
} = {
    date: [],
    dataval: []
}

// 格式化时间
function getTime() {
    var ts = arguments[0] || 0;
    var t, h, i, s;
    t = ts ? new Date(ts * 1000) : new Date();
    h = t.getHours();
    i = t.getMinutes();
    s = t.getSeconds();
    // 可根据需要在这里定义时间格式
    return (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
}
// 生成初始数据
for (var i = 0; i < 50; i++) {
    dataval.push(Math.ceil(Math.random() * 800));
    date.push(getTime(Math.round(new Date().getTime() / 1000) - i))
}
option = {
    grid: [{
        left: 20,
        right: 20,
        top: 80,
        bottom: 20,
        containLabel: true
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: date
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color: '#cccccc'
            }
        }
    }],
    series: [{
        name: '发送',
        type: 'line',
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        data: dataval
    }]
};
setInterval(function() {
    dataval.shift();
    dataval.push(Math.ceil(Math.random() * 800));
    date.shift()
    date.push(getTime(Math.round(new Date().getTime() / 1000)))
    myChart.setOption({
        series: [{
            data: dataval
        }],
        xAxis: [{
            data: date
        }],
    });
}, 1000)