option = {
    backgroundColor: '#00265f',
    title: {
        text: '数量',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        top: '10%',
        left: '1.5%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        data: ['湖北', '福建', '山东', '广西', '浙江', '河南', '河北'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
        splitNumber: 3,
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
		splitLine: {
			 show: false,
			 lineStyle: {
				 color: '#233e64'
			 }
		},
    }],
    series: [{
        type: 'bar',
        data: [300, 450, 770, 203, 255, 188, 156],
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,244,255,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0,77,167,1)' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 30, 30],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
            }
        },
        // label: {
        //     normal: {
        //         show: true,
        //         lineHeight: 30,
        //         width: 80,
        //         height: 30,
        //         backgroundColor: 'rgba(0,160,221,0.1)',
        //         borderRadius: 200,
        //         position: ['-8', '-60'],
        //         distance: 1,
        //         formatter: [
        //             '    {d|●}',
        //             ' {a|{c}}     \n',
        //             '    {b|}'
        //         ].join(','),
        //         rich: {
        //             d: {
        //                 color: '#3CDDCF',
        //             },
        //             a: {
        //                 color: '#fff',
        //                 align: 'center',
        //             },
        //             b: {
        //                 width: 1,
        //                 height: 30,
        //                 borderWidth: 1,
        //                 borderColor: '#234e6c',
        //                 align: 'left'
        //             },
        //         }
        //     }
        // }
    }]
};