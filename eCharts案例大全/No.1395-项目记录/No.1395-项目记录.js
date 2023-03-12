var shiji = 30;
var name = ['实际', '目标', '标准', '预算'];
var value = [30,50, 60, 80];
var min = -100; //最小刻度
var max = 100; //最大刻度
var colorArr = ['rgba(255,174,69,1)', 'rgba(0,168,255,.5)', 'rgba(54,255,104,.5)', 'rgba(0,255,250,.5)'];
var seriesData = [];

name.forEach((v, i) => {
    seriesData.push({
        name: name[i],
        value: value[i],
        itemStyle: {
            color: colorArr[i],
        },
    });
});
option = {
    backgroundColor: '#272935',
    tooltip: {
        show: true,
        trigger: "item",
        axisPointer: {
            type: "line"
        },
        formatter: "{b} : {c}",
        textStyle: {
            fontSize: 14
        },
        borderWidth: 0
    },
    series: [
        {
            name: '刻度',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '72%',
            min: -100, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#f5f7f9',
                fontSize: 12,
                distance: 10,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: '#f5f7f9',
                    width: 1,
                    // length:10
                },
                length: 10,
            }, //刻度样式
            splitLine: {
                show: true,
                length:16,
                lineStyle: {
                    color: '#f5f7f9',
                    width:1,
                },
            }, //分隔线样式
        },
        {
            type: 'gauge',
            radius: '78%',
            center: ['50%', '50%'],
            min: -100, //最小刻度
            max: 100, //最大刻度
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 8,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#33AEEE',
                                },
                                {
                                    offset: 1,
                                    color: '#33AEEE',
                                },
                            ]),
                        ],
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: true,
                length: '80%',
                width: '1%',
            },
            title: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: [0, 20],
                color: '#33AEEE',
                formatter: function (params) {
                    return '实际：' + shiji;
                },
                textStyle: {
                    fontSize: 14,
                    fontFamily: 'PingFangSC',
                },
            },
            data: seriesData,
        },
    ],
};
