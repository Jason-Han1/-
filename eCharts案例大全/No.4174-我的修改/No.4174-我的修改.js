option = {
    backgroundColor:'#00265f',
    title:{
        show:true,
        text:'我的修改',
        textStyle:{
            color:'#fff',
            fontSize:'25',
        },
        top:'5%',
        left:'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid:{
        top:'15%',
        left:'5%',
        right:'5%',
        buttom:'15%',
    },
     xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
            },
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
        axisTick:{
            show:false,
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        name:'单位：（万元）',
        nameTextStyle:{
            color:'#fff',
        },
        type: 'value',
         axisLine: {
             show:false,
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            },
        },
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
         splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisTick:{
            show:true,
            
            lineStyle:{
                color:'#fff',
            },
        },
    },
    series: [{
        itemStyle:{
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,244,255,1)'
                }, {
                    offset: 1,
                    color: 'rgba(0,77,167,1)'
                }], false),
                barBorderRadius: 10,
                opacity:0.8
        },
        barWidth:20,
        label:{
            show:true,
            position:['0','-20'],
            color:'#fff',
        },
        data: [120, 200, 150, 80, 70, 110],
        type: 'bar',
    }]
};
