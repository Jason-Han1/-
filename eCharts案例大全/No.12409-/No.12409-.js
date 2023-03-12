option = {
    legend: {
        bottom: 20,
        textStyle:{
            color:'#58595b',
        },
        data: ['时间(月)']
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    
    tooltip: {
        show:"true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis:  {
        type: 'value',
        axisTick : {show: false},
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#58595b',
                fontSize:16
           }
        },
        splitLine: {
            show: false
        },
    },
    yAxis:{
        type: 'category',
        data: ['专注力','表达能力（双语）','脾气暴躁改善','习惯养成','理解能力'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#58595b',
                fontSize:20
           }
        },
        axisTick: {
            show: false, //隐藏Y轴刻度
        },
        axisLine: {
            show: false, //隐藏Y轴线段
        },
        offset: 20,
    },
    series: [
        {
            name: '时间(月)',
            type: 'bar',
            barWidth:22,
            itemStyle:{
                normal: {
                    show: true,
                    color: '#ffae1f',
                    barBorderRadius:8,
                    borderWidth:0,
                    borderColor:'#333',
                }
            },
            barGap:'0%',
            barCategoryGap:'50%',
           data: [9, 12, 14, 12, 16]
        }
       
    ]
};