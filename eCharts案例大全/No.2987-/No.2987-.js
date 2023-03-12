app.title = '堆叠柱状图';

option = {
    backgroundColor: '#404e6a',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['已用额度','可用额度'],
        textStyle: {
            color: 'rgba(55,255,249,1)'
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '50%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['广州','深圳','东莞','佛山','惠州','珠海','......'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(55,255,249,1)',
                }
            },
            axisLabel: {
                color: 'rgba(55,255,249,1)'
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(55,255,249,1)',
                }
            }
        }
    ],
    series : [
        {
            name:'已用额度',
            type:'bar',
            barWidth: 20,
            itemStyle: {
               barBorderRadius: 20, 
               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(55,255,249,1)"
                    },
                    {
                        offset: 1,
                        color: "rgba(0,222,215,0.2)"
                    }
                ])
            },
            data:[165, 160, 177, 144, 190, 150, 155]
        },
        {  // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
            type:'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
              color: 'transparent'  
            },
            data:[160, 155, 172, 139, 185, 145, 150]
        },
        {
            name:'可用额度',
            type:'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
               barBorderRadius: 20, 
               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0.4,
                        color: "rgba(255,252,0,1)"
                    },
                    {
                        offset: 1,
                        color: "rgba(8,228,222,0.2)"
                    }
                ])
            },
            data:[200, 205, 199, 221, 160, 210, 200]
        }
    
    ]
};
