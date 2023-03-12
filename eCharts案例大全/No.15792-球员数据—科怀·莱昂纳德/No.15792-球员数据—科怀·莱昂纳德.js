option = {
    title: {
        text: '球员数据—科怀·莱昂纳德'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['联盟最高值','莱昂纳德','联盟平均值']
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
            data : ['得分','篮板','助攻','抢断','盖帽',]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'联盟最高值',
            type:'line',
            areaStyle: {normal: {}},
            data:[31.8, 15.4, 12.5, 3, 2.8]
        },
        {
            name:'莱昂纳德',
            type:'line',
            areaStyle: {normal: {}},
            data:[25.1, 6.3, 3.1, 2.2, 0.5]
        },
        {
            name:'联盟平均值',
            type:'line',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[7.8, 3.4, 1.7, 0.6, 0.4]
        }
    ]
};
