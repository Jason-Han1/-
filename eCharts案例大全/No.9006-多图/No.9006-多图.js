option = {
    dataset: {
        source: [
            ['product', 'nums'],
            // ['Linux 7.x', 100],
            // ['Linux 6.6.x', 200],
            // ['Windows7', 120],
            // ['Windows10', 240]
            
            ['2019-12-25 09', 6],
            ['2019-12-25 10', 6],
            ['2019-12-25 14', 4],
            ['2019-12-25 13', 3],
            ['2019-12-25 08', 2],
            ['2019-12-25 11', 1],
            ['2019-12-25 16', 1]
        ]
    },
    
    
    
     
    color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9', '#60a900', '#01949b', ' #f17677'],
    backgroundColor:'#fff',
    grid: {
        left: '50%',
        top: 'center',
        right: '4%',
        containLabel: true,
       
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

    series: [{
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            type: 'pie',
            center: ['30%', '50%'],
            radius: ['30%', '35%'],
            avoidLabelOverlap: false,

            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },

            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            encode: {
                itemName: 'product',
                value: 'nums'
            }
        },
        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%',
            z: 2,
            color: function(params) {
                // build a color map as your need.
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
            encode: {
                x: 'nums'
            }
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