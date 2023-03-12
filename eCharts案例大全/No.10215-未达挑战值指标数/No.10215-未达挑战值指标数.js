var colorList=['#42679e', '#74994a', '#64aeaf', '#c79339'],
option = {
    title: {
        x: 'center',
        show:false,
        text: '未达挑战值指标数',
    },
    tooltip: {
        trigger: 'item'
    },
    calculable: true,
    grid: {
        borderWidth: 0,
        y: 70,
        y2: 60
    },
    xAxis: [
        {
            type: 'category',
            show: true,
            axisLine: {
                lineStyle: {
                    
                    color: '#707070'
                }
            },
            axisTick: {
            show: false,
            color: '#707070'
        },
           	data: ["移动业务","家庭业务","政企业务","新业务"],//['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: true,
            axisLine: {
                lineStyle: {
                    
                    color: '#707070'
                }
            },
            splitLine: {
                show:false,
                lineStyle: {
                    
                    color: '#707070'
                }
            },
        }
    ],
    series: [
        {
            name: '未达挑战值指标数',
            type: 'bar',
             barWidth: '35',
             barMinHeight:[10],
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: [50,77,99,0],//[12,21,10,4,12,5,6,5,25,23,7],
           
        }
    ]
};
