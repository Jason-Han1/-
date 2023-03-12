option = {
    dataset: {
        source: [
            ['product', 'p1', 'p2', 'p3', 'p4'],
            ['2018Q1', 78, 69, 45, 48],
            ['2018Q2', 32, 89, 12, 79],
            ['2018Q3', 51, 18, 32, 48],
            ['2018Q4', 21, 58, 54, 12],
            ['2019Q1', 78, 48, 21, 95]
        ]
    },
    id: 'demoline1',
    xAxis: {
        show: true,
        type: 'category',
        name: '',
        axisTick: {
            show: true,
            alignWithLabel: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#DFE1E6'
            }
        },
        axisLabel: {
            show: true,
            color: '#7A869A',
            fontSize: 14,
            lineHeight: 20
        }
    },
    yAxis: {
        show: true,
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#7A869A'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#DFE1E6'
            }
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(9,30,66,0.54)'
    },
    legend: {
        show: true,
        x: 'center',
        y: 'top',
        orient: 'horizontal',
        textStyle: {
            fontSize: 14,
            color: '#7A869A'
        }
    },
    series: [{
            type: 'line',
            // 		encode: {
            // 			x: 'date',
            // 			y:['sales']
            // 		}
        },
        {
            type: 'line',
            // 		encode: {
            // 		    x: 'date',
            // 			y:'sales'
            // 		}
        }, {
            type: 'line',
            // 		encode: {
            // 		    x: 'date',
            // 			y:'sales'
            // 		}
        },
        {
            type: 'line',
            // 		encode: {
            // 			x: 'date',
            // 			y:['']
            // 		}
        }
    ]
}