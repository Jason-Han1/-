var data = {
    title: ['总计', 'A型车', 'B型车', 'C型车', 'D型车' ],
    plan_production: [500, 300, 490, 333, 346],
    actual_production: [300, 400, 500, 300, 400],
    attainment_rate: [60, 80, 90, 60, 70],
    productivity: [30, 45, 88, 100, 110]
};
option = {
    title:{
        text:'隧道车辆占比',
    },
    grid: {
        bottom: 150,
        left: 80,
        right: 80
    },

    xAxis: [{
        type: 'category',
        data: data.title,
        axisTick:{
            show:false,
        }
        
    }],
    yAxis: [{
        type: 'value',
        scale: false,
        minInterval: 1,
        name: '数量',
        axisLine:{
          lineStyle:{
            opacity:0,
          },  
        },
        
        axisTick:{
            show:false,
        },
        splitLine: {
            show: true,
            lineStyle:{
                type:'dashed',
            }
        },
        min:0,//起点
        interval:200,//步长
        max:1000,//终点
    }, {
        show:false,
        type: 'value',
        scale: true,
        name: '百分比',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value} %'
        }
    }],
    series: [{//柱状图start

        name: '计划数量',
        type: 'bar',
        label: {
            show: false,
            position: 'top'
        },
        itemStyle:{
            color:'#0769a6',
            barBorderRadius:[5, 5, 0, 0],//设置图形圆角
        },
        yAxisIndex: 0,
        data: data.plan_production
    }, {
        name: '实际产出',
        type: 'bar',
        label: {
            show: false,
            position: 'top'
        },
        itemStyle:{
            color:'#02bf8a',
            barBorderRadius:[5, 5, 0, 0],
        },
        yAxisIndex: 0,
        data: data.actual_production
    },
     {
        name: '实际产出',
        type: 'bar',
        label: {
            show: false,
            position: 'top'
        },
        itemStyle:{
            color:'#ffc303',
            barBorderRadius:[5, 5, 0, 0],
        },
        yAxisIndex: 0,
        data: data.actual_production
    },
    
    //柱状图end
    
    {
        name: '达成率',
        type: 'line',
        symbol:'none',
        label: {
            show: false,
            position: 'top',
            formatter: '{c} %'
        },
        lineStyle:{
            color:'#02bf8a',
        },
        yAxisIndex: 1,
        data: data.attainment_rate
    }, {
        name: '生产效率',
        type: 'line',
        symbol:'none',
        label: {
            show: false,
            position: 'top',
            formatter: '{c} %'
        },
        lineStyle:{
            color:'#ffc303',
        },
        yAxisIndex: 1,
        data: data.productivity
    }],
};