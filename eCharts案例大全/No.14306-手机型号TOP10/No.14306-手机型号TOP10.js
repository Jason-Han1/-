app.title = 'Top 10';

option = {
    //color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
         
    }, 
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: ['OPPO R9s','OPPO A57','OPPO A59s','OPPO R9m','OPPO A37m','vivo X9','OPPO A33','OPPO R11','OPPO A59m','vivo X7'],
        inverse: true,
        axisTick: {
            alignWithLabel: true,
           
          
        },
         axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#53a8fa'
                }
        },
         axisLine: {
            lineStyle: {
                color: '#2548ac'
            }
         },
         
    }],
    xAxis: [{
        type: 'value',
         axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#53a8fa'
                }
        },
         axisLine: {
            lineStyle: {
                color: '#192469'
            }
         },
         splitLine: {
            lineStyle: {
                color: '#17367c'
            }
        }
         
         
        
    }],
    backgroundColor: '#192469',
    series: [{
        name: 'Top 10',
        type: 'bar',
        barWidth:26,
        data: [8827896, 7472072, 7433391, 7137253, 6382192, 5268842, 4827026, 3935701, 3875562, 3839609],
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                textStyle: {
                    color: 'white' //color of value
                }
            }
        },
        
      
        itemStyle: {
            
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#0590eb' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#08e3f1' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 15,15, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        }
    }]
};