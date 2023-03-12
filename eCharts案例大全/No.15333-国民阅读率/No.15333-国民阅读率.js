

option = {
    title: {
        text: '国民阅读率'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['综合阅读率','图书阅读率','报纸阅读率','期刊阅读率','数字阅读率']
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
        type: 'category',
        boundaryGap: false,
        data: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'综合阅读率',
            type:'line',
            stack: '总量',
            data:[0.524,0.697,0.720,0.771,0.776,0.763,0.767,0.786,0.796,0.799]
        },
        {
            name:'图书阅读率',
            type:'line',
            stack: '总量',
            data:[0.488,0.493,0.501,0.523,0.539,0.549,0.578,0.580,0.584,0.588]
        },
        {
            name:'报纸阅读率',
            type:'line',
            stack: '总量',
            data:[0.738,0.639,0.583,0.668,0.631,0.582,0.527,0.551,0.457,0.397]
        },
        {
            name:'期刊阅读率',
            type:'line',
            stack: '总量',
            data:[0.584,0.501,0.456,0.469,0.413,0.452,0.383,0.403,0.346,0.263]
        },
        {
            name:'数字阅读率',
            type:'line',
            stack: '总量',
            data:[0.449,0.245,0.246,0.328,0.386,0.403,0.501,0.581,0.640,0.682]
        }
    ]
};
