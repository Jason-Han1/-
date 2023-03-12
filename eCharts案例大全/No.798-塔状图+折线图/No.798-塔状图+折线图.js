var xdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var data = [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
var maxArr = [100, 100, 100];
option = {
    backgroundColor: '#0a1a38',
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#202630',
        borderColor: '#202630',
        textStyle: {
            color: '#fff',
            fontSize: 12,
        },
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'solid',
            },
        },
        // formatter: function (params) {
        //     // params[0].data.nameCode
        //     let dot =
        //         '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>';
        //     return params[0].name + '<br>' + '- ：' + params[0].value;
        // },
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '20%',
        top: '15%',
        containLabel: true,
    },
    xAxis: {
        data: xdata,
        // triggerEvent: true,

        type: 'category',
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                type: 'dashed',
                dashOffset: 5,
            },
        },
        axisLabel: {
            show: true,
            padding: [6, 0, 0, 0],
            textStyle: {
                fontSize: 12,
                color: 'rgba(255,255,255,1)',
            },
        },
    },
    yAxis: {
        max: '1',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,.1)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,.1)',
            },
        },
        axisLabel: {
            show: true,

            textStyle: {
                color: 'rgb(148,159,167)',
                fontSize: 14,
            },
        },
    },
    // color: ["#e54035"],
    series: [
        {
            name: '-',
            type: 'pictorialBar',
            barCategoryGap: '50%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    //barBorderRadius: 5,
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#51b9ca',
                        },
                        {
                            offset: 0.4,
                            color: '#51b9ca',
                        },
                        {
                            offset: 1,
                            color: 'rgba(27, 64, 83,.1)',
                        },
                    ]),
                },
            },
            data: data,
            z: 10,
        },
        {
            name: '-',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 12,
            lineStyle: {
                normal: {
                    color: '#2f4eab',
                },
            },
            itemStyle: {
                color: '#6c50f3',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
          
            data: data,
        },
    ],
};
