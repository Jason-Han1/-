option = {
    color: ["#315C94", "#497FB6", "#6F8FCF", "#7AA0BB", "#9FBEDD", "#BCD4E1"],
    backgroundColor: '#211b6a',
    textStyle: {
        color: '#fff',

    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                type: 'dashed',
                width: 2,
                color: '#4B941A'
            },
            animation: true
        }
    },
    legend: {
        show: false,
        data: ['俄罗', '宝钢', '宣钢', '梅钢', '涟钢', '福建','郑州'],
        left: 'right',
    },
    grid: {
        show: false
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#555'],
            }
        },
        axisLine: {
            show: false
        },
    },
    xAxis: {
        data: ['俄罗', '宝钢', '宣钢', '梅钢', '涟钢', '福建','郑州'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#555',
            },
        },
    },
    dataset: {
        // 提供一份数据。
        source: [
            ['name', '2011', '2012', '2013', '2014', '2015', '2016'],
            ['俄罗', 200, 1400, 0, 0, 1050, 500],
            ['宝钢', 1500, 1500, 0, 500, 0, 1700],
            ['宣钢', 2000, 5500, 200, 0, 0, 0],
            ['梅钢', 2500, 500, 0, 4500, 900, 0],
            ['涟钢', 3000, 0, 0, 0, 300, 0],
            ['福建', 3500, 0, 1000, 0, 1600, 500],
            ['郑州', 1500, 1500, 0, 500, 0, 1700],
        ]
    },
    // series:[{
    //     type:'scatter'
    // },{
    //     type:'scatter'
    // },{
    //     type:'scatter'
    // },{
    //     type:'scatter'
    // },{
    //     type:'scatter'
    // },{
    //     type:'scatter'
    // }],
    series: [{
            name: '2011',
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return Math.sqrt(data[2]) * 1;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function(param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    color: 'red'
                }
            },
        },
        {
            name: '2012',
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return Math.sqrt(data[2]) * 1;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function(param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    color: '#C94C15'
                }
            },
        },
        {
            name: '2013',
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return Math.sqrt(data[2]) * 1;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function(param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    color: '#A18F1D'
                }
            },
        },
        {
            name: '2014',
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return Math.sqrt(data[2]) * 1;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function(param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    color: '#17885C'
                }
            },
        },
        {
            name: '2015',
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return Math.sqrt(data[2]) * 1;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function(param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    color: '#2769CF'
                }
            },
        },
        {
            name: '2016',
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return Math.sqrt(data[2]) * 1;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function(param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    color: '#509820'
                }
            },
        },
    ]
};