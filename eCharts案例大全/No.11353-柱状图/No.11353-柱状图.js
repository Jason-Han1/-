option = {
    color: ['#e5cd00','#0ff'],
    backgroundColor: '#04243E',
    xAxis: {
        type: 'category',
        data: ['河流', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel : {
            color : 'white'
        },
        axisLine : {
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
           
        },
    },
    yAxis: {
        type: 'value',
        axisLine : {
            show : false,
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
        },
        axisLabel : {
            color : '#4397d2'
        },
        splitLine : {
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
        }
    },
    grid : {
        top : '12%',
        bottom : '15%'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 20,
        itemStyle : {
          normal : {
              barBorderRadius: [10, 10, 0, 0], //圆角
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#ff0'
                        }, {
                            offset: 1,
                            color: '#f00'
                        }])
          }  
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color : 'white'
            }
        },
    },{
        data: [100, 120, 50, 80, 70, 10, 30],
        type: 'bar',
        barWidth: 20,
        itemStyle : {
        normal : {
              barBorderRadius: [10, 10, 0, 0], //圆角
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#0ff'
                        }, {
                            offset: 1,
                            color: '#00f'
                        }])
          }  
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color : 'white'
            }
        },
    }]
};