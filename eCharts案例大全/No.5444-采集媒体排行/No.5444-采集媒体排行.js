var salvProName = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
var salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67, 55];
var salvProMax = []; //背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0])
}
option = {
    title: {
        text: "采集媒体排行",
        left: 40,
        top: 20,
        textStyle: {
            fontSize: 30,
            color: '#fff'
        },
        subtextStyle: {
            fontSize: 20
        }
    },
    backgroundColor: "#000360",
    grid: {
        left: '6%',
        right: '2%',
        bottom: '2%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        data: salvProName
    }],
    yAxis: {
        show: true,
        type: 'value',
        splitLine: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
    },
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0.5, [{
                        offset: 0,
                        color: 'red'
                    }, {
                        offset: 1,
                        color: 'blue'
                    }]),
                    opacity: .8
                },
            },
            barWidth: 20,
            data: salvProValue
        },
    ]
};