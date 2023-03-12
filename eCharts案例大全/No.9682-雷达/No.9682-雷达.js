option = {
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#0ae7f8',
                // backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '0%', max: 6500},
           { name: '20%', max: 16000},
           { name: '40%', max: 30000},
           { name: '60%', max: 38000},
           { name: '80%', max: 52000},
           { name: '100%', max: 25000}
        ],
        splitLine:{
            lineStyle:{
                color:'#05396c'
            },
        },
        splitArea:{
            areaStyle:{
                color:['#010e46','#010e46']
            }
        },
       axisLine:{
           lineStyle:{
               color:'#075994'
           }
       }
    },
    series: [{
        name: '孕产妇高危统计',
        type: 'radar',
        symbol:'circle',
        symbolSize:'6',
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '孕产妇高危统计',
                lineStyle :{
                    color:'#0a78b5',
                    
                },
                itemStyle:{
                    color:'#e0c92a',
                    borderColor:'#065d95'
                },
                areaStyle:{
                        color:'#065d95',
                        offset: 0.5
                        
                }
            }
            
        ]
    }]
};