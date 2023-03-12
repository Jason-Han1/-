 option = {
     backgroundColor:'#000',
    tooltip: {},
    grid:{
         top:'5%',
    },
    legend: {
        data:['威胁值'],
        right:'10%',
        top:'5%',
        textStyle:{
            color:'#fff',
            fontSize:24,
        }
    },
    xAxis: {
        data: ["swc-sdhgq","swc-sdh1q","swc-sdh2gq","swc-sdhg3","swc-sdhg4"],       //横坐标
        axisTick:{
            show:false,
        },
        axisLabel:{
            interval: 0,
            rotate:25,
            textStyle: {
                color:'#fff',
                 fontSize:24,
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#fff',
                width:'1  ',                                                //坐标线的宽度
              
            }
        },
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle:{
                color: '#40A1EA',                                         //网格横线颜色
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                 fontSize:24,//坐标值得具体的颜色
            }
        },
        axisLine: {
            show:false,
        },
    },
    series: [{
        name: '威胁值',
        type: 'bar',
        barWidth:70,
        data: [30,49,26, 60, 26],        //数据
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#06B5D7'},                   //柱图渐变色
                        {offset: 0.5, color: '#44C0C1'},                 //柱图渐变色
                        {offset: 1, color: '#71C8B1'},                   //柱图渐变色
                    ]
                )
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#71C8B1'},                  //柱图高亮渐变色
                        {offset: 0.7, color: '#44C0C1'},                //柱图高亮渐变色
                        {offset: 1, color: '#06B5D7'}                   //柱图高亮渐变色
                    ]
                )
            }
        },
    }]
};