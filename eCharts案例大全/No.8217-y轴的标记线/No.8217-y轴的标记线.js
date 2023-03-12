let color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074',
    '#546570', '#c4ccd3'
];
option = {
    legend: {

    },
    toolbox: {
        show: false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    Calculable: true,
    grid: [{
            x: '7%',
            y: '7%',
            width: '43%',
            top: '20%',
            bottom: '11%',
            left: '4%',
            right: '47%',
            show: true
        },
       
    ],
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            gridIndex: 0,
            data: ['2019/07/21', '2019/07/22', '2019/07/23', '2019/07/24', '2019/07/25', '2019/07/26', '2019/07/27']
        },
        
    ],
    yAxis: [{
        type: 'value',
        gridIndex: 0,
        max: 500,
        min: 50
    }],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            color: color[0],
            tipeLang: true,
            itemStyle: {
                normal: {
                    color: '#8cd5c2', //改变折线点的颜色
                    lineStyle: {
                        color: color[0], //改变折线颜色
                    }
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            markLine: {
                lineStyle: {
                    normal: {
                        color: color[0]
                    }
                },
                data: [{
                    yAxis: 450,
                    label: {
                        show: true
                    }
                }, ],
                symbol: 'none'
            },
            data: [
                ['2019/07/21', 100],
                ['2019/07/22', 120],
                ['2019/07/23', 111],
                ['2019/07/24', 130],
                ['2019/07/25', 140],
                ['2019/07/26', 170],
                ['2019/07/27', 170]
            ]
        },
        {
            name: '视频广告',
            color: color[2],
            type: 'line',
            tipeLang: true,
            itemStyle: {
                normal: {
                    color: '#8cd5c2', //改变折线点的颜色
                    lineStyle: {
                        color: color[2], //改变折线颜色
                    }
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [
                ['2019/07/21', 150],
                ['2019/07/22', 160],
                ['2019/07/23', 170],
                ['2019/07/24', 181],
                ['2019/07/25', 192],
                ['2019/07/26', 320],
                ['2019/07/27', 300]
            ]
        },


    ]
};