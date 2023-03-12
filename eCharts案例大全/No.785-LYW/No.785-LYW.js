var xData2 = ['李1', '李2', '李3'];
var data1 = [250, 100, 130];
var data2 = [400, 200, 300];
var data3 = [100, 200, 300];

var datas2 = [];
var datas3 = [];

datas2[0] = data1[0] + data2[0];
datas2[1] = data1[1] + data2[1];
datas2[2] = data1[2] + data2[2];

datas3[0] = data1[0] + data2[0] + data3[0];
datas3[1] = data1[1] + data2[1] + data3[1];
datas3[2] = data1[2] + data2[2] + data3[2];

var barWidth = 30;
option = {
    backgroundColor: '#031835',
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: 100,
        bottom: 100,
    },
    xAxis: {
        data: xData2,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
            margin: 26, //刻度标签与轴线之间的距离。
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
        },
    },
    series: [
        {
            //低柱子
            name: '低级告警',
            type: 'bar',
            barWidth: barWidth,
            stack: 'total',
            barGap: '-100%',
            itemStyle: {
                //lenged文本
                opacity: 1,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#49B78E', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#49B78E', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            data: data1,
        },
        {
            // 中间柱子
            name: '中级告警',
            type: 'bar',
            barWidth: barWidth,
            stack: 'total',
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: '#D6B52D',
                opacity: 0.7,
            },
            data: data2,
        },
        {
            // 上半截柱子
            name: '高级告警',
            type: 'bar',
            barWidth: barWidth,
            stack: 'total',
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: '#601C29',
                opacity: 0.9,
            },
            data: data3,
        },

        {
            // 替代柱状图 默认不显示颜色，是最下方柱图的value值 - 20
            type: 'bar',
            barWidth: barWidth,
            stack: 'total',
            barGap: '-100%',
            itemStyle: {
                color: 'transparent',
            },
            data: data1,
        },
        //上柱子
        {
            name: '高级告警',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            stack: 'total',
            symbolOffset: [0, -5],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
                color: '#FFB2B0',
                opacity: 1,
            },
            label: {
                show: false,
                position: 'top',
                fontSize: 16,
                color: '#FFB2B0',
            },
            data: datas3,
        },
        //中柱子顶部圆片
        {
            name: '中',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            stack: 'total',
            symbolOffset: [0, -5],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
                color: '#FFB2B0',
                opacity: 1,
            },
            label: {
                show: false,
                position: 'top',
                fontSize: 16,
                color: '#fff',
            },
            data: datas2,
        },
        {
            //低柱子顶部圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            stack: 'total',
            symbolOffset: [0, -10],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#FFE165', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FFE165', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            label: {
                // 低柱子数字
                show: false,
                position: 'top',
                fontSize: 16,
                color: '#87FFCA',
                // formatter:(item)=>{
                //     console.log(item)
                //     return 'ssss'
                // }
            },
            symbolPosition: 'end',
            data: data1,
        },
        {
            //低柱子底部圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            stack: 'total',
            symbolOffset: [0, 5],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#87FFCA', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#87FFCA', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            data: [1, 1, 1, 1, 1],
        },

        {
            name: '第一圈',
            type: 'pictorialBar',
            symbolSize: [47, 16],
            symbolOffset: [0, 11],
            z: 11,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#87FFCA',
                    borderWidth: 2,
                },
            },
            data: [1, 1, 1, 1, 1],
        },
        {
            name: '第二圈',
            type: 'pictorialBar',
            symbolSize: [62, 22],
            symbolOffset: [0, 17],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#87FFCA',
                    borderWidth: 2,
                },
            },
            data: [1, 1, 1, 1, 1],
        },
    ],
};
