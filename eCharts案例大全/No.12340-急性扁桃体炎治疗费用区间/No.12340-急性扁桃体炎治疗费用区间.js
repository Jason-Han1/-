var data =
    data1=[21616, 54599.5, 69534, 91504, 159980],
    data2 =[20000, 54599.5, 69534, 91504, 160000]
;

option = {
    backgroundColor:'#0D3861',
    title: {
        text:'急性扁桃体炎治疗费用区间',
        x: 'center',
        y: 20,
        textStyle:{
            color:'#4CCDF7',
            fontSize:16,
            fontWeight:'normal',
        },
        top:'5%',
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [{
        top:'25%',
        height:'60%',
        left: '10%',
        right: '10%',
    }],
    yAxis: [{
        type: 'category',
        name:'医疗总费用合理区间：',
        gridIndex:0,
        data: [''],
        nameTextStyle: {
            color: '#4CCDF7',
            fontSize: 16,
           padding: [0, 0, 0, 150],
        },
        axisLine: {
            lineStyle: {
                color: '#4CCDF7',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            rotate:0,
        },
        splitLine: {
            
        }
    }],
    xAxis: [{
        type: 'value',
        name:'医疗总费用',
        gridIndex:0,
        nameTextStyle: {
            color: '#4CCDF7',
            fontSize: 14,
        },
        axisLabel: {
            formatter: '{value} '
        },
        axisTick:{
            show:true,
        },
        axisLine: {
            show:true,
            lineStyle: {
                color: '#4CCDF7',
            }},
        splitLine: {
            show:false,
        },
        splitArea:{
            show:false,
        }
        
    }],
    series: [{
            type: 'boxplot',
            xAxisIndex:0,
            yAxisIndex:0,
            padding:[20,0],
            data: [//min,max
                [20000, 54599.5, 69534, 91504, 160000],
                
            ],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#4CCDF7' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#4CCDF7' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color:  '#04132A'// 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00ffff'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            
            
            tooltip: {
                formatter: function(param) {
                    return [

                        // 'upper: ' + param.data[5],
                        // 'Q3: ' + param.data[4],
                        // 'median: ' + param.data[3],
                        // 'Q1: ' + param.data[2],
                        // 'lower: ' + param.data[1]
                    ].join('<br/>')
                }
            }
        }

    ]
};