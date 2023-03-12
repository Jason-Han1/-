var yAxisData = [1, 2, 3, 5, 8, 4]

var a = 0
var yAxis = yAxisData
var xAxis = []
for (let i = 0; i < yAxis.length; i++) {
    if (i === 0 && parseInt(yAxis[i]) !== 0) {
        xAxis.push(0)
        xAxis.push(parseInt(yAxis[i]))
    } else if (i === 0 && parseInt(xAxis[i]) === 0) {
        xAxis.push(0)
    } else {
        if (i === 1) {
            a = parseInt(yAxis[i]) + parseInt(yAxis[i - 1])
            xAxis.push(a)
        } else if (i === 2) {
            a = parseInt(yAxis[i]) + parseInt(yAxis[i - 1]) + parseInt(yAxis[i - 2])
            xAxis.push(a)
        } else if (i === 3) {
            a = parseInt(yAxis[i]) + parseInt(yAxis[i - 1]) + parseInt(yAxis[i - 2]) + parseInt(yAxis[i - 3])
            xAxis.push(a)
        } else if (i === 4) {
            a = parseInt(yAxis[i]) + parseInt(yAxis[i - 1]) + parseInt(yAxis[i - 2]) + parseInt(yAxis[i - 3]) + parseInt(yAxis[i - 4])
            xAxis.push(a)
        }
    }
}

option = {
        title: [
    {
        text: '标题',
        textStyle: {
            fontSize: 16,
            color: "black"
        },
        left: "2%"
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            } else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value + '天';
        }
    },
    xAxis: [

        {
            name: '天',
            type: 'value'
        }
    ],
    yAxis: [{
        type: 'category',
        splitLine: {
            show: false
        },
        minInterval: 1000 * 60 * 60 * 24,
        maxInterval: 1000 * 60 * 60 * 24,
        axisTick: {
            interval: 0
        },
        data: ["启动", "发布", "洽谈", "规划", "签约", "落项"]
    }],
    series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: xAxis
        },
        {
            name: '所用时间',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#49c9bf',
                    barBorderColor: '#49c9bf',
                    barBorderWidth: 2,
                    label: {
                        show: false,
                        position: 'top'
                    }
                }
            },
            data: yAxisData
        }
    ]
};