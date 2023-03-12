app.title = '堆叠柱状图';

option = {
    backgroundColor: '#001120',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['邮件营销','联盟广告'],
        textStyle: {
            color: 'rgba(55,255,249,1)'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日'],
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
            name:'邮件营销',
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
            name:'联盟广告',
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
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    
    ]
};
