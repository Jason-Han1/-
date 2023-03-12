option = {
    title : {
        text: '散点图',
    },
    legend:{
        
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            interval: 1,
            nameTextStyle:{
                color: 'rgb(160,160,160)',
            },
            axisLabel : {
                formatter: '{value}'
            },
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dotted'
                }
            },
            axisTick:{
                show: false
            },
            axisLine:{
                lineStyle:{
                    type:'dotted',
                    color: '#979797'
                },
                symbol:['none', 'arrow']
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            nameTextStyle:{
                color: 'rgb(160,160,160)',
            },
            axisLabel : {
                formatter: '{value}'
            },
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dotted'
                }
            },
            axisTick:{
                show: false
            },
            axisLine:{
                lineStyle:{
                    type:'dotted',
                    color: '#979797'
                },
                symbol:['none', 'arrow']
            }
        }
    ],
    series : [
        {
            name:'人员',
            type:'scatter',
            color:'#6f6',
            data: [
                [1.2, 1.6, '张三','T7', 2.3], [4.5, 2.0,'张三', 'T7', 2.3], [2.5, 4.2,'张三', 'T7', 2.3], [1.0, 5.0, '张三','T7', 2.3], [4.8, 2.6,'张三', 'T7', 2.3],
                [1.0, 4.0, '张三','T7', 2.3], [2.1, 4.6, '张三','T7', 2.3], [1.0, 4.8,'张三', 'T7', 2.3], [2.2, 3.8, '张三','T7', 2.3], [1.2, 4.2,'张三', 'T7', 2.3],
                [4.5, 3.2, '张三','T7', 2.3], [2.9, 4.2, '张三','T7', 2.3], [2.9, 4.5, '张三','T7', 2.3], [1.4, 4.0, '张三','T7', 2.3], [1.0, 5.0,'张三', 'T7', 2.3],
                [4.2, 4.8,'张三', 'T7', 2.3], [1.2, 4.2, '张三','T7', 2.3], [5.0, 3.2, '张三','T7', 2.3], [1.0, 4.8,'张三', 'T7', 2.3], [1.6, 4.8,'张三', 'T7', 2.3],
                [1.5, 4.6, '张三','T7', 2.3], [1.0, 2.5, '张三','T7', 2.3], [1.8, 4.2, '张三','T7', 2.3], [1.5, 3.8, '张三','T7', 2.3], [1.2, 2.8, '张三','T7', 2.3]
            ],
            //正常标签
            label:{
                show: true,
                position: 'insideTopLeft',
                formatter:`{@[2]}`,
                color: '#000',
                borderColor: '#COCOCO',
                borderWidth: 0.3,
                backgroundColor: '#fff',
                borderRadius: 4,
                padding:[5,10,0,10],
                shadowColor:'rgba(0,0,0,0.1)',
                shadowBlur:4,
                shadowOffsetY:2
            }
        },
        {
            name:'测试',
            type:'scatter',
            color:'#f66',
            data: [
                [2.2, 1.6, '张三','T7', 2.3], [3.5, 2.0,'张三', 'T7', 2.3], [4.5, 4.2,'张三', 'T7', 2.3], [5.0, 5.0, '张三','T7', 2.3], [6.8, 2.6,'张三', 'T7', 2.3]
            ],
            //正常标签
            label:{
                show: true,
                position: 'insideTopLeft',
                formatter:`{@[2]}`,
                color: '#000',
                borderColor: '#COCOCO',
                borderWidth: 0.3,
                backgroundColor: '#fff',
                borderRadius: 4,
                padding:[5,10,0,10],
                shadowColor:'rgba(0,0,0,0.1)',
                shadowBlur:4,
                shadowOffsetY:2
            }
        }
    ]

}
