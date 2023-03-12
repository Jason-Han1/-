option = {
    dataset: {
        source: [
            ['product', 'nums'],
            ['Linux 7.x', 100],
            ['Linux 6.6.x', 200],
            ['Windows7', 120],
            ['Windows10', 240]
        ]
    },
    xAxis: [{
            show: false,
        },
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        inverse: true,
        show: false
    },
    series: [
        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barWidth: '20%',
            z: 2,
            color: function(params) {
                var colorList = [
                    '#d74e67', '#0092ff', '#eba954', '#21b6b9', '#60a900', '#01949b', ' #f17677'
                ];
                return colorList[params.dataIndex]
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000',
                        fontSize: 25,
                        fontWeight: 'bold'
                    },
                    position: 'right'
                }
            },
        },
        //年份
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度
            barGap: '-100%',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    barBorderRadius: 200,
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-20'],
                    formatter: '{b}',
                    textStyle: {
                        fontSize: 14,
                        color: '#333',
                    }
                }
            },
            encode: {
                y: 'product'
            }
        }
    ]
};