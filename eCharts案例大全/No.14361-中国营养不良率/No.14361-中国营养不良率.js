app.title = '堆叠条形图';

option = {
    backgroundColor: '#fff',
    legend: {
        bottom: 20,
        textStyle:{
            color:'#984A59',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    title: {
        text: '中国营养不良率',
        left: 'center',
        textStyle: {
            color: '#1a1b4e',
            fontStyle: 'normal',
            fontSize: 24
        },
    },
    
            tooltip: {
        show:"true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis:  {
        type: 'value',
        axisTick : {show: false},
        axisLine: {
            show: false,
            lineStyle:{
                color:'#984A59',
            }
        },
        splitLine: {show:false},
        axisLabel: {  
                  show: true,  
                  interval: 'auto',  
                  formatter: '{value} %'  
                },  
    },
    xAxis: [
            {
                type: 'category',
                axisTick : {show: false},
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#984A59',
                    }
                },
                data: ['2010年','2011年','2012年','2013年','2014年','2015年']
            },
            {
                type: 'category',
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel: {show:false},
                splitArea: {show:false},
                splitLine: {show:false},
                data: ['2010年','2011年','2012年','2013年','2014年','2015年']
            },
            
    ],
    series: [
        {
            name: '国际标准',
            type: 'bar',
            xAxisIndex:1,
            
            itemStyle:{
                normal: {
                    show: true,
                    color: '#ddd',
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#FBFFB9',
                }
            },
            barGap:'0%',
            barCategoryGap:'50%',
            data: [15, 15, 15, 15, 15, 15]
        },
        {
            name: '中国营养不良率',
            type: 'bar',
            itemStyle:{
                normal: {
                    show: true,
                    color: '#EC7357',
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#333',
                }
            },
            barGap:'0%',
            barCategoryGap:'50%',
            data: [11.9, 11.3, 10.8, 10.3, 9.9, 9.6]
        }
       
    ]
};