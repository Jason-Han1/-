app.title = '如果蜗牛有爱情VS美人为馅 - 条形图';

option = {
    title: {
        text: '如果蜗牛有爱情VS美人为馅',
        subtext: '数据来源微博话题热度及粉丝量  by 信管141 王倩组  1404030525'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['蜗牛', '美人']
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['剧本话题度/万','男主话题度/万','女主话题度/万','男主粉丝数/万','女主粉丝数/万','话题阅读量/千万']
    },
    series: [
        {
            name: '蜗牛',
            type: 'bar',
            data: [720.6, 27.3,20 ,1152 , 700,248 ]
        },
        {
            name: '美人',
            type: 'bar',
            data: [72.9,0.2183 , 0.3521, 133, 500, 117]
        }
    ]
};
