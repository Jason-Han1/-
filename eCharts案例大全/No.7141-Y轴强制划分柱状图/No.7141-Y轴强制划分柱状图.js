option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['兴庆区', '西夏区', '金凤区', '永宁县', '贺兰县', '灵武市'],
        axisTick: {
            show:false
        },
        axisLabel:{
            color:'#AAAFBB'
        },
        axisLine:{
            lineStyle:{
                color:'rgba(255,255,255,0.08)'
            }
        }
    },
    yAxis: {
        type: 'value',
        min:0,
        max:1,
        interval:0.25,
        axisTick:{
            show:false
        },
        axisLabel:{
            color:'#AAAFBB',
            formatter:function(e){
                return e*100+'%'
            }
        },
        axisLine:{
            lineStyle:{
                color:'rgba(255,255,255,0.08)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(255,255,255,0.04)'
            }
        }
    },
    series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '30%',
            color: new echarts.graphic.LinearGradient(0,0,0,1,[{
                offset: 0,color:'rgba(79,196,211,1)'
            },{
                offset: 1,color:'rgba(79,196,211,0.2)'
            }]),
            data: [0.7, 0.5, 0.45, 0.34, 0.9, 0.33, 0.61]
    }]
};