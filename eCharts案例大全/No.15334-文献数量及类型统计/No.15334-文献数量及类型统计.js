option = {
    title: {
        text: '文献数量及类型统计'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['期刊','会议论文','硕博论文','报纸']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
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
            boundaryGap : false,
            data : ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'期刊',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[8, 42, 33,38,79,87,109,129,141,288,272]
        },
        {
            name:'会议论文',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0,1,3,1,2,1,4,1,4,10,19]
        },
        {
            name:'硕博论文',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0,0,0,0,1,1,1,3,4,6,4]
        },
        {
            name:'报纸',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[33,57,35,62,74,60,31,125,135,303,248]
        },
        
    ]
};
