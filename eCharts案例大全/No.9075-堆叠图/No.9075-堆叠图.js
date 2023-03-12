app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['查询次数','提交预授信次数']
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
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        
        {
            name:'查询次数',
            type:'bar',
            stack: '广告',
            barWidth: 25,
            itemStyle: {
            //   barBorderRadius: 25, 
               normal: {
                   color: '#019349'
               }
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'提交预授信次数',
            type:'bar',
            stack: '广告',
            barWidth: 25,
            itemStyle: {
            //   barBorderRadius: 25, 
               normal: {
                   color: '#ffb400'
               }
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        
    ]
};
