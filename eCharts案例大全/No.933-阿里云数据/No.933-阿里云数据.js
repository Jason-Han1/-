app.title = '堆叠条形图';

option = {
    backgroundColor: '#0E2A43',
    legend: {
        bottom: 20,
        textStyle:{
            color:'#fff',
        },
        data: ['钥匙量', '有效房源量']
    },
    grid: {
        left: '3%',
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
            lineStyle:{
                color:'#fff',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [
            {
                type: 'category',
                axisTick : {show: false},
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#fff',
                    }
                },
                data: ['广州','深圳','东莞','天津','惠州','北京三级','成都','南京','重庆','长沙']
            },
            {
                type: 'category',
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel: {show:false},
                splitArea: {show:false},
                splitLine: {show:false},
                data: ['广州','深圳','东莞','天津','惠州','北京三级','成都','南京','重庆','长沙']
            },
            
    ],
    series: [
        {
            name: '有效房源量',
            type: 'bar',
            yAxisIndex:1,
            
            itemStyle:{
                normal: {
                    show: true,
                    color: '#277ace',
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#333',
                }
            },
            barGap:'0%',
            barCategoryGap:'50%',
            data: [120, 132, 101, 134, 90, 230, 210, 125, 231, 132]
        },
        {
            name: '钥匙量',
            type: 'bar',
            itemStyle:{
                normal: {
                    show: true,
                    color: '#5de3e1',
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#333',
                }
            },
            barGap:'0%',
            barCategoryGap:'50%',
            data: [32, 52, 41, 64, 15, 10, 32, 25, 210, 32]
        }
       
    ]
};