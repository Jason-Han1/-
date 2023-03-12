var seriesData = [{
        name: '广告',
        data: [0],
    },
    {
        name: '直接访问',
        data: [320]
    },
    {
        name: '邮件营销',
        data: [120]
    },
    {
        name: '联盟广告',
        data: [230]
    },
    {
        name: '视频广告',
        data: [160]
    },
    {
        name: '搜索引擎',
        data: [0],
    },
    {
        name: '百度',
        data: [360]
    },
    {
        name: '谷歌',
        data: [80]
    },
    {
        name: '搜狗',
        data: [120]
    },
    {
        name: '其他',
        data: [90]
    }
];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: [{
            orient: "vertical",
            itemWidth: 0,
            itemHeight: 0,
            x: '91.5%',
            data: ["广告"],
            selectedMode: false, //取消图例上的点击事件,
            textStyle: {
                fontSize: 14,
                color: '#ff0000'
            }
        },
        {
            top: 20,
            x: '92%',
            orient: "vertical",
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告'],
        },
        {
            orient: "vertical", // 'vertical'
            itemWidth: 0,
            itemHeight: 0,
            top: 120,
            x: '91.5%',
            data: ["搜索引擎"],
            selectedMode: false, //取消图例上的点击事件
            textStyle: {
                fontSize: 14,
                color: '#ff0000'
            }
        },
        {
            top: 140,
            x: '92%',
            orient: "vertical",
            data: ['百度', '谷歌', '必应', '其他'],
        },
    ],
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        //data: ['直接访问', '直接访问', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌','搜狗','其他']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: seriesData.map(item => {
        return {
            name: item.name,
            type: 'bar',
            barWidth: item.name=='广告'||item.name=='搜索引擎' ? 1 :'auto',
            data: item.data,
        }
    })
};