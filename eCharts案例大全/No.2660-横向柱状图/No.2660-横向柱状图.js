let yLabel = ['100+', '91-100', '81-90', '71-80', '61-70', '51-60', '41-50', '31-40', '21-30', '11-20', '0-10'];
let yData = [20, 50, 10, 35, 221, 124, 8, 35, 212, 212, 75];
let yRtData = [102, 95, 85, 75, 65, 55, 45, 35, 25, 15, 5];
let bgData = [];
for (let i in yData) {
    bgData.push(350);
}
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        show: true,
        trigger: 'axis', //axis , item
        backgroundColor: 'RGBA(0, 49, 85, 1)',
        borderColor: 'rgba(0, 151, 251, 1)',
        borderWidth: 1,
        borderRadius: 0,
        axisPointer: {
            type: 'none',
            // show:false
        },
        textStyle: {
            color: '#BCE9FC',
            fontSize: 16,
            align: 'left',
        },
        formatter: function (a) {
            return a[0].seriesName + '：' + a[0].value;
        },
    },
    backgroundColor: '#031d33',
    xAxis: {
        show: true,
        type: 'value',
        // data:xData
        splitNumber: 7,
        axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
                color: 'rgba(128, 207, 240, 1)',
                fontStyle: 'normal',
                fontSize: 16,
                // fontWeight: 'bolder'
            },
        },
        axisLine: {
            show: false, // X轴 网格线 颜色类型的修改
            lineStyle: {
                type: 'solid',
                color: '#292c38',
            },
        },
        splitLine: {
            show: true, // X轴线 颜色类型的修改
            lineStyle: {
                type: 'solid',
                color: 'rgba(77, 128, 254, 0.2)',
            },
        },
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                margin: 15,
                textStyle: {
                    color: 'rgba(128, 207, 240, 1)',
                    fontSize: '16',
                    fontWeight: 'bolder',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: yLabel,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: 'rgba(128, 207, 240, 1)',
                    fontSize: '16',
                },
                formatter: function (value) {
                    return '均:' + value + '岁';
                },
            },
            data: yRtData,
        },
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 1,
                            color: '#0097FB',
                        },
                        {
                            offset: 0,
                            color: '#30ECA6',
                        },
                    ]),
                    // shadowBlur: 0,
                    // shadowColor: 'rgba(87,220,222,0.7)',
                },
            },
            barWidth: 20,
            data: yData,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: bgData,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 151, 251, 0.2)',
                },
            },
        },
    ],
};
