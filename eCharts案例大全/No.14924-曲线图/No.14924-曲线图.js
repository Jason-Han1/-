


// option
option = {
    backgroundColor: '#fff',
     tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
         
    }, 
    legend: {
        
        x: 'right',
       itemWidth: 8,
        itemHeight: 8,
        align: 'left',
        icon: 'circle',
        data:['访问量','激活量'],
           
    },
     grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
     xAxis : [
        {
            type : 'category',
            data : ['5-21','5-22','5-23','5-24','5-25','5-26','5-27','6-14','6-15'],
             
            axisLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
        splitLine: {
            lineStyle: {
                color: '#fff'
            }
        
        },
        }
    ],
     yAxis: [{
        type: 'value',
        
       
        axisLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
        splitLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    }],
    series: [
         
    {
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        stack:'line',
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#f7fffa',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: '#f7fffa',
                borderColor: 'rgba(191,240,85,0.2)',
                borderWidth: 10
            }
        },
        data:[20, 42, 21, 34, 50, 20, 10, 25, 45, 22,65, 22]
    } ,
    {
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        stack:'line',
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#dbfae6',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: '#dbfae6',
                borderColor: 'rgba(191,240,85,0.2)',
                borderWidth: 10
            }
        },
        data:[20, 42, 21, 34, 50, 20, 15, 25, 45, 22,65, 22]
    } ,
        {
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        stack:'line',
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#bff2d1',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: '#bff2d1',
                borderColor: 'rgba(75,87,163,0.2)',
                borderWidth: 10
            }
        },
        data:[20, 42, 21, 34, 50, 20, 15, 25, 45, 22,65, 22]
    },
        
        {
        name: 'line',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize:3,
        stack:'line',
        showSymbol: false,
        itemStyle: {
            normal: {
                color: '#a6e8be',
                lineStyle: { // 系列级个性化折线样式
                    width: 2,
                }
            },
            emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
        },
        areaStyle: {
            normal: {
                color: '#a6e8be',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        
        
        
       data: [20, 42, 61, 34, 50, 20, 15, 25, 45, 22,65, 22]
    },
      {
        name: '电信',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        stack:'line',
        lineStyle: {
            normal: {
                width: 2,
            }
        },
        areaStyle: {
            normal: {
                color:'#90dfac',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#90dfac',
                borderColor: 'rgba(252,250,210,0.2)',
                borderWidth: 10

            }
        },
        data: [20, 42, 61, 34, 50, 20, 15, 25, 45, 22,65, 22]
    }, {
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        stack:'line',
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#7dd79d',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: '#7dd79d',
                borderColor: 'rgba(75,87,163,0.2)',
                borderWidth: 10
            }
        },
        data: [20, 42, 21, 34, 50, 20, 15, 25, 45, 22,65, 22]
    },{
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        stack:'line',
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#69ce8d',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#69ce8d',
                borderColor: 'rgba(75,87,163,0.2)',
                borderWidth: 10
            }
        },
        data:[20, 42, 21, 34, 50, 20, 15, 25, 45, 22,65, 22]
    },{
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        stack:'line',
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#58c980',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: '#58c980',
                borderColor: 'rgba(75,87,163,0.2)',
                borderWidth: 10
            }
        },
        data:[20, 42, 21, 34, 50, 20, 15, 25, 45, 22,65, 22]
    },
    
    {
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        stack:'line',
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#41c56f',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: '#41c56f',
                borderColor: 'rgba(225,247,120,0.2)',
                borderWidth: 10
            }
        },
        data:[20, 42, 21, 34, 50, 20, 15, 25, 45, 22,65, 22]
    },
    {
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        stack:'line',
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#2dc161',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: '#2dc161',
                borderColor: 'rgba(218,243,100,0.2)',
                borderWidth: 10
            }
        },
        data:[20, 42, 21, 34, 50, 20, 15, 25, 45, 22,65, 22]
    } 
    
    ]
};