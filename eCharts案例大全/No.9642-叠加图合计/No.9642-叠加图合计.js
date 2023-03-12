app.title = '堆叠条形图';

option = {
    title: [{
        text: '在线构建',
        subtext: '总计 ',
        x: '25%',
        textAlign: 'center'
    }, {
        text: '各版本下载',
        subtext: '总计 ',
        x: '75%',
        textAlign: 'center'
    }],
    tooltip : {
        trigger: 'axis',

        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '30%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    
    series: [
         {
            type: 'pie',
            radius: [0, '30%'],
            center: ['82%', '25%'],
            shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10,
            z:100,
            data: [
                    {name: '直接访问', value: 1},
                    {name: '邮件营销', value: 2},
                    {name: '联盟广告', value: 3}
                ]
  
         },
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
   
            data: [320, 302, 301, 334.23213, 390, 330, 320]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
   
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
    
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
   
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',

            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
