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
        data: ['OPPO R9S','Vivo X9','OPPO R9m','Vivo X7','Hisense M20-T','OPPO A37m','OPPO A57','OPPO A33','OPPO R11S','OPPO R11S'],
        
        axisTick: {
            alignWithLabel: true,
           
          
        },
         axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
         axisLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
         },
         
    }],
    xAxis: [{
        type: 'value',
         axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
         axisLine: {
            lineStyle: {
                color: '#fff'
            }
         },
         splitLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
        }
         
         
        
    }],
    backgroundColor: '#ffffff',
    series: [{
        name: 'Top 10',
        type: 'bar',
        barWidth:30,
        data: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
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
                    color: '#64bdc8' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00c484' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 15,15, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        }
    }]
};