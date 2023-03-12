app.title = '柱状图横向居中排序';

option = {
    color: ['#3398DB'],
    tooltip: {
        axisPointer: {
            type: ''
        },
        show: false
    },
    grid: {

    },
    yAxis: [{
            type: 'category',
            data: ['科研', '教育', '人文', '军队', '人口', '贫富', '经济'],
            axisTick: {
                alignWithLabel: false,
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },

        },

    ],
    xAxis: [{
            type: 'value',
            show: false
        },

    ],
    series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            color: ['#3398DB'],
            data: [10, 52, 200, 334, 390, 330, 220],
            barGap: '-100%',
            hoverAnimation: false,
            emphasis: {
                itemStyle: {
                    color: '#3398DB',
                    opacity: 1
                }
            }


        },
        {
            name: '间接访问',
            type: 'bar',
            barWidth: '60%',
            color: ['#3398DB'],
            data: [-10, -52, -200, -334, -390, -330, -220],
            barGap: '-100%',
            hoverAnimation: false,
            emphasis: {
                itemStyle: {
                    color: '#3398DB',
                    opacity: 1
                }
            }



        }
    ]
};