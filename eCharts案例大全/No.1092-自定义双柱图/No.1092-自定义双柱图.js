
    var option = {
           backgroundColor: '#0e1c47',
             grid: [{
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '8%',
                width: '0%'
            }, {
                show: false,
                right: '2%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: '#fff'
                },
                splitLine:{
                     show: true,
                    lineStyle:{
                        color:'#fff'
                    }
                },
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: '#fff'
                },
                 splitLine:{
                     show: true,
                    lineStyle:{
                        color:'#fff'
                    }
                },
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#fff'
                    }
                },
               
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    padding:[30,0,0,0],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 20
                    },
                    align: "center"

                },
                data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                     show: true,
                    lineStyle:{
                        color:'#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
                data:  ['A', 'B', 'C', 'D', 'E', 'F', 'G']
            }],
              series: [{
                name: "2017",
                type: "bar",
                barWidth: 25,
                stack: "1",
                itemStyle: {
                    normal: {
                color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 0, color:'rgba(255, 188, 70, 0.5)'
    }, {
        offset: 1, color: 'rgba(255, 188, 70, 0)' 
    }],
    global: false
}
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                data:  [3, 20, 62, 34, 55, 65, 33],
            },
            {
                name: "2018",
                type: "bar",
                stack: "2",
                barWidth: 25,
                xAxisIndex: 2,
                yAxisIndex: 2,
                itemStyle: {
                    normal: {
                                        color: {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0, color:'rgba(82, 253, 235, 0.5)'
    }, {
        offset: 1, color: 'rgba(82, 253, 235, 0)' 
    }],
    global: false
}
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: [11, 38, 23, 39, 66, 66, 79],
            },
        ]
    }
