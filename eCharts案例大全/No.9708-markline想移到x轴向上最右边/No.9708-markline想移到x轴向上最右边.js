option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
        {type: 'value', gridIndex: 1,show:false,},
        {type: 'value', gridIndex: 2,show:false,}
    ],
    yAxis: [
        {gridIndex: 0},
        {type:'category',gridIndex: 1,show:false},
        {type:'category',gridIndex: 2,show:false}
    ],
    grid: [
        {bottom: '55%',right:'50%'},
        {bottom: '55%',left:'50%'},
        {top: '55%',left:'50%'}
    ],
    series: [
        // These series are in the first grid.
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        // These series are in the second grid.
        {type: 'bar', xAxisIndex: 2, yAxisIndex: 2,seriesLayoutBy: 'column',},
        {type: 'bar', xAxisIndex: 2, yAxisIndex: 2,seriesLayoutBy: 'column',},
        {type: 'bar', xAxisIndex: 2, yAxisIndex: 2,seriesLayoutBy: 'column',},
        {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            seriesLayoutBy: 'column',
            itemStyle:{
                color:'transparent'
            },
            markLine: {
                silent: true,
                symbol: 'none',
                lineStyle: {
                  type: 'solid',
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(255,0,0,0.40)' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#F3F3F4' // 100% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(255,0,0,0.40)' // 100% 处的颜色
                      }
                    ]
                  }
                },
                data: [{
                    xAxis: 86.4,
                    name: '均值',
                    label: {
                      formatter: '均值{c}',
                      position: 'end',
                      color: '#f00'
                    }
                  }]
            }
        }
    ]
};
