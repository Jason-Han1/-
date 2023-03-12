option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        splitLine: {
            //true 显示, false不显示
            show: true,
        },
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        //网格线是否显示true 显示, false不显示
        splitLine: {
            show: 'true',
        },
        axisTick:{
          show:'false',  
        },
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbol:'rect',
            symbolSize:6,
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            symbolSize:6,
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
