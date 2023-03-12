option = {
    title: {
        text: '总就诊人次趋势'
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
            data : ['1日','','','','5日','','',
            '','','10日','','','','',
            '15日','','','','','20日','',
            '','','','25日','','','',
            '','30日']

        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'人次',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            data:[820, 932, 901, 934, 1290, 1330, 1320,
            820, 932, 901, 934, 1290, 1330, 1320,
            820, 932, 901, 934, 1290, 1330, 1320,
            820, 932, 901, 934, 1290, 1330, 1320,2312,1234]
        }
    ]
};
