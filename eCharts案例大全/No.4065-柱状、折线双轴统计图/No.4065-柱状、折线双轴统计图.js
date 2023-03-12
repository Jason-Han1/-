var color = [
    '#0CD2E6',
    '#3751E6',
    '#FFC722',
    '#886EFF',
    '#008DEC',
    '#114C90',
    '#00BFA5',
];
var legend = ['柱状', '折线'];

// 坐标轴配置提出变量，下面使用es6语法...合并使用

// var axis = {
//     nameTextStyle: {
//         color: 'rgba(255,255,255,0.5)',
//     },
//     splitLine: {
//         lineStyle: {
//             type: 'solid',
//             color: 'rgba(255,255,255,0.06)',
//         },
//     },
//     axisTick: {
//         show: false,
//     },
//     axisLine: {
//         show: true,
//         lineStyle: {
//             color: 'rgba(255,255,255,0.06)',
//         },
//     },
//     axisLabel: {
//         show: true,
//         rotate: 0,
//         margin: 10,
//         fontSize: 12,
//         color: 'rgba(255,255,255,0.5)',
//     },
// };

var name1 = "数量";
var name2 = "占比";

var xData = ["1月", "2月", "3月", "4月", "5月", "6月"];
var seriesData = [
    [256, 189, 202, 157, 196, 226],
    [50, 78, 56, 98, 85, 77]
];

var option = {
    backgroundColor: "#0D1B46",
    color: color,
    grid: {
        top: '15%',
        left: 20,
        right: '5%',
        bottom: 20,
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        confine: true,
        appendToBody: true,
    },
    legend: {
        icon: 'circle',
        left: 'center',
        top: 10,
        itemWidth: 10,
        itemHeight: 6,
        borderRadius: 6,
        textStyle: {
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14,
        },
        data: legend
    },
    xAxis: {
        // ...axis,
        type: 'category',
        data: xData,
        nameTextStyle: {
            color: 'rgba(255,255,255,0.5)',
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,0.06)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.06)',
            },
        },
        axisLabel: {
            show: true,
            rotate: 0,
            margin: 10,
            fontSize: 12,
            color: 'rgba(255,255,255,0.5)',
        },
    },
    yAxis: [{
            // ...axis,
            type: 'value',
            name: name1,
            nameTextStyle: {
                color: 'rgba(255,255,255,0.5)',
            },
            splitLine: {
                lineStyle: {
                    type: 'solid',
                    color: 'rgba(255,255,255,0.06)',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.06)',
                },
            },
            axisLabel: {
                show: true,
                rotate: 0,
                margin: 10,
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
            },
        },
        {
            // ...axis,
            type: 'value',
            name: name2,
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            nameTextStyle: {
                color: 'rgba(255,255,255,0.5)',
            },
            axisLabel: {
                show: true,
                rotate: 0,
                margin: 10,
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
            },
        },
    ],
    series: [{
            type: 'bar',
            name: legend[0],
            barWidth: '20%',
            yAxisIndex: 0,
            data: seriesData[0],
        },
        {
            type: 'line',
            name: legend[1],
            yAxisIndex: 1,
            symbolSize: 6,
            data: seriesData[1],
        },
    ],
};