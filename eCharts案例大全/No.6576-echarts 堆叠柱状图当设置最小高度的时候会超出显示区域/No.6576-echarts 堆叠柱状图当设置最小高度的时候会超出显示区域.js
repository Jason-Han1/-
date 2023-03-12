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
        type: 'value',
         scale: true,
         
        boundaryGap: [1,0.5],
        min: 0,

    },
    yAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320,400,5],
            barMinHeight: 30,
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210,400,5],
             barMinHeight: 30,
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [22000, 182, 191, 234, 290, 330, 310,400,5],
             barMinHeight: 30,
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [150, 212, 201, 154, 190, 330, 410,400,5],
             barMinHeight: 30,
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320,400,5],
             barMinHeight: 30,
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320,400,5],
             barMinHeight: 30,
        },
        {
            name: 'dd',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [15, 1832, 901, 934, 1290, 1330, 1320,400,5],
             barMinHeight: 30,
        },{
            name: 'cc',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [1544, 0, 0, 0, 0, 0, 0,0,5],
             barMinHeight: 30,
        }
    ]
};