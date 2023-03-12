option = {
    tooltip : {
        formatter: "{c}%"
    },
    series: [
        {
            name: '优化率',
            radius:'50%',
            startAngle:180,
            endAngle:0,
            splitNumber:'4',
            axisLine:{
                lineStyle:{
                    width:20,
                    color:[[0.35, '#ef4764'], [0.35, '#2ec259'], [1, '#2ec259']]
                }
            },
            splitLine:{
                show:true,
                length:25,
                lineStyle:{
                    color:'#999',
                    width:1
                }
            },
            axisTick:{
                show:false,
                length:20
            },
            axisLabel:{
                distance:2,
                color:'#999'
            },
            pointer:{
                length:'40%',
                width:6
            },
            itemStyle:{
                color:'#e6e6e6'
            },
            type: 'gauge',
            detail: {
                formatter:'{value}%',
                fontWeight:'bold',
                offsetCenter:[0,'30%']
            },
            data: [{value: 87.5, name: ''}]
        },
        {
            name: '优化率',
            radius:'50%',
            startAngle:182,
            endAngle:-2,
            splitNumber:'4',
            splitLine:{
                show:false
            },
            axisLine:{
                lineStyle:{
                    width:20,
                    color:[[0.35, '#ef4764'], [0.35, '#2ec259'], [1, '#2ec259']]
                }
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                show:false
            },
            pointer:{
                length:'2%',
                width:'6'
            },
            itemStyle:{
                color:'#e6e6e6'
            }, detail: {
                show: false
            },
            type: 'gauge'
        }
    ]
};
myChart.setOption(option, true);