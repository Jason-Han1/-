var value = 0.25;
var target = 0.75;
var unit = '万公里'
option = {
    backgroundColor: '#031d33',
    grid: {
        top: 10,
        bottom: 20,
        left: '10%',
        right: '20%',
    },
    xAxis: {
        show: false,
        type: 'value',
        max: target,
        boundaryGap: [0, 0],
    },
    yAxis: [
        {
            type: 'category',
            data: [`${target}${unit}`],
            axisLine: { show: false },
             position: 'right',
            axisTick: [
                {
                    show: true,
                },
            ],
            axisLabel:{
                formatter:`{a|${target}}{${unit === '%' ? 'a':'b'}|${unit}}`,
                rich:{
                      a: {
                        fontSize: 26,
                        color: '#fff',
                        fontFamily: 'DS-DIGI',
                    },
                   b: {
                       fontSize: 12,
                        color: '#79C2E5',
                         fontFamily: 'DS-DIGI',
                        height: 20,
                        verticalAlign: 'bottom',
                    },
                }
            }
        },
    ],
    series: [
        {
            name: 'target',
            type: 'bar',
            stack: 'target',
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: value > target? '#00C7BB':'#0053C7',
                },
            },
            label: {
                show: true,
                position: 'insideTopRight',
                offset:value > target ? [0, -30]:[0,0],
                formatter: function (params) {
                    return `{a|${value}}{b| ${unit}}`;
                },
                rich: {
                    a: {
                        fontSize: 26,
                        color: '#03EEFF',
                        textShadowColor: '#03EEFF',
                        textShadowBlur: 10,
                        fontFamily: 'DS-DIGI',
                    },
                    b: {
                        fontSize: 12,
                        color: '#79C2E5',
                        textShadowColor: '#79C2E5',
                        textShadowBlur: 5,
                        fontFamily: 'DS-DIGI',
                        height: 20,
                        verticalAlign: 'bottom',
                    },
                },
            },
            showBackground: true,
            backgroundStyle: {
                color: '#222B42',
                shadowColor: '#0D73FF',
                shadowBlur: value > target ? 10:0,
                borderWidth:1,
                borderColor:'#0053C7'
            },
            barWidth: 24,
            data: [value],
        },
        // {
        //     type: 'bar',
        //     stack: 'target',
        //     zlevel: 2,
        //     itemStyle: {
        //         color: '#00C7BB',
        //         shadowBlur: 10,
        //         shadowColor: '#00C7BB',
        //     },
        //     barWidth: 24,
        //     label: {
        //         show: true,
        //         position: 'right',
        //         formatter: function (params) {
        //             return `{a|${value}}{b| 万公里}`;
        //         },
        //         rich: {
        //             a: {
        //                 fontSize: 26,
        //                 color: '#03EEFF',
        //                 textShadowColor: '#03EEFF',
        //                 textShadowBlur: 10,
        //                 fontFamily: 'DS-DIGI',
        //             },
        //             b: {
        //                 fontSize: 12,
        //                 color: '#79C2E5',
        //                 textShadowColor: '#79C2E5',
        //                 textShadowBlur: 5,
        //                 fontFamily: 'DS-DIGI',
        //                 height: 20,
        //                 verticalAlign: 'bottom',
        //             },
        //         },
        //     },
        //     data: [value - target],
        // },
        // {
        //     type: 'custom',
        // },
    ],
};
