option = {
    title: {
        text: '累计未解决工单量'
    },
    tooltip : {
        trigger: 'axis'
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
            data : ['20170101','20170102','20170103','20170104','20170105','20170106','20170107','20170108','20170109','20170110','20170111','20170112','20170113','201701014','201701015','201701016']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
                        label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[120, 132, 101, 134, 90, 230, 210,150, 232, 201, 154, 190, 330, 410,220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
