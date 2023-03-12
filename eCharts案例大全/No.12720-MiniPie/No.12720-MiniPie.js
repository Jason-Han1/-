option = {
    backgroundColor: '#fff',
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                show: false
            },
            data:[
                {
                    value:335, 
                    itemStyle: {
                        color: '#fa9645',
                    }
                    
                },
                
                {
                    value:335,
                    itemStyle: {
                        color: '#f5f5f5',
                        emphasis: {color: '#f5f5f5'}
                    }
                    
                }
            ]
        },
        {
            type: 'scatter',
            data: [[0,0]],
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    fontSize: 14,
                    color: '#333',
                    formatter: [
                        '{a|标题}',
                        '{b|50%}'
                    ].join('\n'),
                    rich: {
                        a: {
                            color: '#999',
                            fontWeight: 400,
                            padding: 5,
                            align: 'center'
                        },
                        b: {
                            fontSize: '24',
                            padding: 5,
                            align: 'center'
                        }
                    }
                }
            }
        }
    ],
    xAxis: {
        axisLabel: {show: false},
        axisLine: {show: false},
        splitLine: {show: false},
        axisTick: {show: false},
        min: -1,
        max: 1
    },
    yAxis: {
        axisLabel: {show: false},
        axisLine: {show: false},
        splitLine: {show: false},
        axisTick: {show: false},
        min: -1,
        max: 1
    }
};
