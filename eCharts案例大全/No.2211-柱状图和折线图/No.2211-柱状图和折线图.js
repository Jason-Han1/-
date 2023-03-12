var OpenCaseYdata = [709, 1999, 709, 2299, 3299, 2299, 1999, 2999, 1999, 709, 1999, 709];
var moneyYdata = [1709, 2999, 1799, 3299, 4299, 3299, 2999, 3999, 2999, 1709, 2999, 1709];
var xData = [2021.01, 2021.02, 2021.03, 2021.04, 2021.05, 2021.06, 2021.07, 2021.08, 2021.09, 2021.10, 2021.11, 2021.12];
option = 
{
    grid: {
        borderWidth: 0,
        top: '20%',
        left: '15%',
        bottom: '25%',
        textStyle: {
            color: '#fff',
        },
    },
    legend: [
        {
            data: ['未处理'],
            // textStyle: {
            //   color: "#ccc",
            // },
            selectedMode: false,
            top: '0%',
            right: '26%',
            itemWidth: 45,
            itemHeight: 13,
            itemGap: 50,
            symbolKeepAspect: true,
            orient: 'horizontal',
            icon: 'rect',
            textStyle: {
                color: '#000',
                fontSize: 20,
            },
        },
        {
            data: ['价格'],
            top: '0%',
            right: '10%',
            textStyle: {
                fontSize: '20px',
                fontFamily: 'MicrosoftYaHeiUI',
                color: '#000',
            },
            itemWidth: 60,
            itemHeight: 15,
        },
    ],
    // {
    //     top: '0%',
    //     right: '10%',
    //     textStyle: {
    //         fontSize: '20px',
    //         fontFamily: 'MicrosoftYaHeiUI',
    //         color: '#000',
    //     },
    //     itemWidth: 60,
    //     itemHeight: 15,
    // },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgb(187, 179, 179)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: '#000',
                fontSize: 18,
                rotate: 40, //x轴倾斜40°
                textStyle: {
                    color: '#000',
                    fontSize: 18,
                    // fontSize:20,
                    fontWeight: 700,
                },
                margin: 13, //刻度标签与轴线之间的距离。
                lineStyle: {
                    width: 20,
                },
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(187, 179, 179)',
                    // type: 'dashed',
                    type: [15, 10],
                    dashOffset: 5,
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: '#000',
                fontSize: 20,
            },
            splitArea: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '未处理',
            type: 'bar',
            // "stack": "总量",
            barMaxWidth: 20,
            barGap: '10%',
            itemStyle: {
                normal: {
                    color: 'rgb(86, 223, 191)',
                },
            },
            data: OpenCaseYdata,
        },
        {
            name: '价格',
            type: 'line',
            symbolSize: 10,
            // symbol: 'circle',
            itemStyle: {
                normal: {
                    color: 'rgb(89, 183, 236)',
                    barBorderRadius: 0,
                },
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: 'rgb(89, 183, 236)',
                },
            },
            data: moneyYdata,
        },
    ],
};
