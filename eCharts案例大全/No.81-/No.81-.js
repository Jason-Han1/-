var yLabel = ['一月', '二月', '三月', '四月', '五月'];
var yData = [4800, 4280, 3515, 2940, 2780];
var bgData = [5000, 5000, 5000, 5000, 5000];

option = {
    // backgroundColor:'black',
    grid: {
        left: '10%',
        right: '20%',
        bottom: '10%',
        top: '10%',
        containLabel: true,
    },
    xAxis: {
        show: false,
        type: 'value',
    },
     tooltip: {
        // 格式化提示内容
        formatter: function (params) {
            return params.name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgb(47,215,255)'></span>" +
                '销量 : ' + params.value + '万m³'
        }
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                margin: 15,
                textStyle: {
                    color: 'rgb(188,217,230)',
                    fontSize: 19,
                },
                // 调整左侧文字的3个属性，缺一不可
                 verticalAlign: 'bottom',
                 align:'top',
                //调整文字上右下左
                 padding: [0,0,25,80],
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
            zlevel: 3,
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: 'rgb(188,217,230)',
                    fontSize: '20',
                    padding: [0, 0, 0, 0],
                },
                formatter: function (value) {
                    return value + ' 万m³';
                },
            },
            data: yData,
        },
    ],
    series: [
        {
            name: '销量',
            type: 'bar',
            zlevel: 3,
            itemStyle: {
                normal: {
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    //     {
                    //         offset: 0,
                    //         color: 'rgba(4,128,224,0.3)',
                    //     },
                    //     {
                    //         offset: 1,
                    //         color: 'rgb(4,128,224)',
                    //     },
                    // ]),
                    // shadowBlur: 0,
                    // shadowColor: 'rgba(87,220,222,0.7)',
                    color:'rgb(43,196,253)'
                },
            },

            barWidth: 15,
            data: yData,
        },
        {
            z: 1,
            type: 'pictorialBar',
            symbolPosition: 'end',
            symbolRotate: '180',
            symbolSize: [20, 15],
            color:'rgb(43,196,253)',
            data: yData,
            symbol: 'triangle',
            symbolOffset: ['52%', 0],
        },
        {
            // 背景
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            itemStyle: {
                normal: {
                    color: 'rgb(71,134,163)',
                },
            },
            data: bgData,
            z: 0,
        },
    ],
};
