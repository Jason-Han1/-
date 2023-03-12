let checkDate = [1,2,3,4,5];
let checkSuc = [38, 50,40 ,13,32];
let checkFail = [10,18,10,8,9];
let sucPer = [];
for (let i = 0; i < checkDate.length; i++) {
    let suc = checkSuc[i];
    let fail = checkFail[i];
    let sum = suc + fail;
    sucPer.push(((suc / sum) * 100).toFixed(2));
}

var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        backgroundColor: 'rgba(9, 24, 48, 0.5)',
        borderColor: 'rgba(75, 253, 238, 0.4)',
        textStyle: {
            color: '#CFE3FC',
        },
        borderWidth: 1,
    },
    legend: [
        {
            data: ['打卡失败'],
            top: '25',
            x: '10%',
            itemWidth: 14,
            borderColor: 'rgba(255, 192, 0, 1)',
            textStyle: {
                color: '#c1cadf',
                fontSize: 14,
            },
        },
        {
            data: ['打卡成功'],
            top: '25',
            x: '30%',
            itemWidth: 14,
            textStyle: {
                color: '#c1cadf',
                fontSize: 14,
            },
        },
        {
            // series name and legend name should be the same
            data: ['成功率(%)'],
            x: '50%',
            top: '25',
            itemStyle: {
                borderWidth: 2,
            },
            textStyle: {
                color: '#c1cadf',
                fontSize: 14,
            },
        },
    ],
    grid: {
        left: '20px',
        right: '20px',
        top: '50px',
        bottom: '30px',
        containLabel: true,
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisTick: {
                show: false,
            },
            data: checkDate,
            axisLine: {
                lineStyle: {
                    color: 'rgba(51, 176, 255, 1)',
                },
            },
            axisLabel: {
                interval: 0,
                color: 'rgba(207, 227, 252, 1)',
                fontSize: 12,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: true,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(120, 160, 236, 1)',
                },
                symbol: ['none', 'arrow'],
                symbolSize: [5, 12],
                symbolOffset: [0, 10],
            },
            max: 100,
            axisLabel: {
                interval: 0,
                color: 'rgba(207, 227, 252, 1)',
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(39, 57, 75, 1)',
                    width: 1,
                    type: 'solid',
                },
            },
        },
        {
            type: 'value',
            axisTick: {
                show: true,
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(207, 227, 252, 1)t',
                },
                symbol: ['none', 'arrow'],
                symbolSize: [5, 12],
                symbolOffset: [0, 10],
            },
            min: 0,
            max: 102,
            axisLabel: {
                interval: 0,
                color: 'rgba(207, 227, 252, 1)',
                formatter: '{value} %',
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(39, 57, 75, 1)',
                    width: 1,
                    type: 'solid',
                },
            },
        },
    ],
    series: [
        {
            // series name and legend name should be the same
            name: '成功率(%)',
            yAxisIndex: 1,
            type: 'line',
            smooth: true,

            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(194, 175, 223, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(98, 227, 255, 0)',
                    },
                ]),
            },
            data: sucPer,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#FFFFFF',
                    borderColor: 'rgba(111, 25, 240, 1)',
                    lineStyle: {
                        color: 'rgba(194, 175, 223,1)',
                    },
                },
            },
        },
        {
            type: 'bar',

            yAxisIndex: 0,
            name: '打卡失败',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(194, 175, 223, 1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(232, 98, 32, 0)',
                            },
                        ],
                        false
                    ),
                },
            },
            barWidth: 24,
            data: checkFail,
        },
        {
            type: 'bar',

            yAxisIndex: 0,
            name: '打卡成功',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(40, 158, 255, 1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(32, 178, 232, 0)',
                            },
                        ],
                        false
                    ),
                },
            },
            barWidth: 24,
            data: checkSuc,
        },
    ],
};
