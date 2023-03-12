option = {
    backgroundColor: '#faf6f3',
    animation: false,
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow',
            shadowStyle: {
                // color: 'rgba(255, 109, 0, 0.8)'
            }
        }
    },
    grid: {
        top: 60,
        bottom: 30
    },
    xAxis: {
        type : 'value',
        position: 'top',
        splitLine: {
            lineStyle:{
                type:'solid',
                color: '#cfc3bd'
            }
        },
    },
    yAxis: {
        splitNumber:25,
        type : 'category',
       axisLine: {
            lineStyle:{
                type:'solid',
            }
        },
        axisLabel: {
            show: true,
            rotate:0,
            textStyle: {
                color: '#682d19'
            }
        },
        axisTick: {show: true},
        splitLine: {
            lineStyle:{
                type:'solid',
                color: '#cfc3bd'
            }
        },
        data : ['Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
    },
    series : [
        {
            name:'月开支',
            type:'bar',
            stack: '月份',
            label: {
                normal: {
                    textStyle: {
                        color: '#682d19'  
                    },
                    position: 'left',
                    show: false,
                    formatter: '{b}'
                }
            },
            barCategoryGap: 0,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'transparent'
                    }, {
                        offset: 0.5,
                        color: 'transparent'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 0, 0, 0.05)'
                    }, {
                        offset: 0.92,
                        color: 'rgba(0, 0, 0, 0.08)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 0, 0, 0.2)'
                    }])
                }  
            },
            data:[1900, 1029, 1602, 2004, 1100, 1800, 2800, 1407, 2200, 900]
        },
        {
            type: 'bar',
            stack: '月份',
            silent: true,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            itemStyle: {
                normal: {
                    color: '#ff5a00',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetX: -4
                }
            },
            barMinHeight: 4
        }
    ]
}
