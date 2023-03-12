app.title = '堆叠柱状图';

option = {
  //  backgroundColor: '#001120',
    legend: {
        bottom: '85%',
                right:'3%',
                textStyle: {
                    color: 'rgb(63,80,124)',
                    fontSize: 14
                },
                selectedMode:false,
                data: ['不坐公交', '坐公交']
    },
    grid: {
        left: '-5%',
        right: '1%',
        bottom: '10%',
        containLabel: true
    },
    xAxis : [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(148,158,219)',
                    width: 2
                }
            }, 
            axisLabel: {
                color: 'rgb(63,80,124)',
                fontWeight: 'bold',
                fontSize: 14,
                interval:0   
            },
            data: ['站点站站点', '站点站点站点', '站点站点站点', '站站点站点站', '站点站点站点']
        }
    ],
    yAxis : [
        {
            show:false
        }
    ],
    series : [
        {
            name:'不坐公交',
            type:'bar',
            barWidth: 20,
            itemStyle: {
               barBorderRadius: 20, 
               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255,105,35)'
                            }, {
                                offset: 1,
                                color: 'rgb(254,44,17)'
                            }],false),
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'rgb(63,80,124)',
                        fontSize: 14
                    }
                }
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {  // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
            type:'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
              color: 'transparent'  
            },
            data:[100, 102, 81, 114, 70, 210, 190]
        },
        {
            name:'坐公交',
            type:'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
               barBorderRadius: 20, 
               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(55,220,231)'
                            }, {
                                offset: 1,
                                color: 'rgb(0,88,241)'
                            }],false),
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                     distance: 0, //文字距离柱状图的距离像素
                    textStyle: {
                        color: 'rgb(63,80,124)',
                        fontSize: 14
                    }
                }
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    
    ]
};
