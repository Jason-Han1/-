option = {
    tooltip : {
        // trigger: 'axis',
        // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //     type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        // }
    },
    legend: {
        data:['邮件营销','联盟广告']
    },
    grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true
    },
    xAxis : {
        // show: false,
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日'],
            axisLine: { show: false },
            axisTick: { show: false }
        },
    yAxis : {
        // show: false,
        splitNumber: 3,
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
    },
    series : [
        {
            name:'联盟广告',
            type:'bar',
            stack: '1',
            itemStyle: {
                // barBorderRadius: 4,
            },
            data:[220, 182, 191, 234, 290, 330, {
                value: 350,
                itemStyle: {
                    barBorderRadius: 5
                }
            }],
            barWidth: '20vw'
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '1',
            itemStyle: {
                barBorderRadius: 5
            },
            data:[120, 0, 101, 134, 0, 230, 0]
        },
    ]
};
