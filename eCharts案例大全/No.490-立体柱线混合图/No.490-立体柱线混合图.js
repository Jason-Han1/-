var xData = [
    '12:05',
    '12:06',
    '12:07',
    '12:08',
    '12:09',
    '12:10',
    '12:11',
    '12:12',
    '12:13',
    '12:14',
    '12:15',
    '12:16',
    '12:17',
    '12:18',
    '12:19',
    '12:20',
];
var data0 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var data1 = [40, 50, 30, 35, 55, 30, 20, 50, 50, 35, 55, 35, 50, 30, 35, 55]; //模型Name1
var data2 = [45, 35, 60, 50, 66, 54, 60, 50, 50, 35, 55, 30, 50, 66, 54, 60]; //模型Name2
var data4 = [40, 50, 30, 35, 55, 30, 20, 50, 50, 35, 55, 35, 50, 30, 35, 55]; //模型Name3
var data6 = [40, 50, 30, 35, 55, 30, 20, 50, 50, 35, 55, 35, 50, 30, 35, 55]; //模型Name4
var data3 = [];
var data5 = [];
var data7 = [];
for (let i = 0; i < data1.length; i++) {
    data5.push(data1[i] + data2[i]);
}
for (let i = 0; i < data1.length; i++) {
    data3.push(data1[i] + data2[i] + data4[i]);
}
for (let i = 0; i < data1.length; i++) {
    data7.push(data1[i] + data2[i] + data4[i] + data6[i]);
}
option = {
    backgroundColor: '#fff', //背景色
    tooltip: {
        trigger: 'axis',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        textStyle: {
            color: '#111', //设置文字颜色
        },
        borderWidth: 1,
        padding: 5,
        formatter: function (parms) {
            var str =
                '时间：' +
                parms[0].axisValue +
                '</br>' +
                parms[0].marker +
                '模型Name1：' +
                parms[0].value +
                '</br>' +
                parms[1].marker +
                '模型Name2：' +
                parms[1].value +
                '</br>' +
                parms[2].marker +
                '模型Name3：' +
                parms[2].value;
            return str;
        },
    },
    textStyle: {
        color: '#2B6BD1',
    },
    // color: ["#7BA9FA", "#7BA9FA", "#DE9FB1", "#DE9FB1","yellow","yellow"],
    color: ['#376DBB', '#7FC9FF', '#80A6E3', '#7FC9FF', '#80A6E3', '#C4EAFF'],
    legend: {
        type: 'scroll',
        orient: 'vertical',
        selectedMode: false, //图例点击失效
        right: '10%',
        top: '15%',
        textStyle: {
            color: '#2B6BD1',
            fontSize: 14,
        },
        // data: datas.legendData,
    },
    grid: {
        containLabel: true,
        left: '10%',
        top: '20%',
        bottom: '10%',
        right: '10%',
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#2B6BD1',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 20, //刻度标签与轴线之间的距离。
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#2B6BD1',
            },
            fontSize: 14,
            fontStyle: 'bold',
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#2B6BD1',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: ["#2B6BD1"],
                type: "dashed",
                opacity: 0.5,
            },
        },
        axisLabel: {
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#2B6BD1',
            },
            fontSize: 14,
        },
    },
    series: [
        {
            type: 'bar',
            name: '模型Name1',
            type: 'bar',
            data: data1,
            stack: 'zs',
            barMaxWidth: 'auto',
            barWidth: 50,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#80A6E3',
                        },
                        {
                            offset: 1,
                            color: '#2C6CD1',
                        },
                    ],
                },
            },
        },
        {
            name: '模型Name2',
            type: 'bar',
            data: data2,
            stack: 'zs',
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 50,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#7FC9FF',
                        },
                        {
                            offset: 1,
                            color: '#8ECCFF',
                        },
                    ],
                },
            },
        },
        {
            name: '模型Name3',
            type: 'bar',
            data: data4,
            stack: 'zs',
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 50,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#80A6E3',
                        },
                        {
                            offset: 1,
                            color: '#2C6CD1',
                        },
                    ],
                },}
        },
        {
            name: '模型Name4',
            type: 'bar',
            data: data6,
            stack: 'zs',
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 50,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#C4EAFF',
                        },
                        {
                            offset: 1,
                            color: '#7FC9FF',
                        },
                    ],
                },
            },
        },
        {
            data: data0,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [50, 20],
            zlevel: 2,
        },
        {
            data: data1,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [50, 20],
            zlevel: 2,
        },
        {
            data: data1,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [50, 20],
            zlevel: 2,
        },
        {
            data: data5,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [50, 20],
            zlevel: 2,
        },
        {
            data: data3,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [50, 20],
            zlevel: 2,
        },
        {
            data: data7,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [50, 20],
            zlevel: 2,
        },
    ],
};
