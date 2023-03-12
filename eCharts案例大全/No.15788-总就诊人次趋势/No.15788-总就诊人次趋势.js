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
            data : ['1日','2日','3日','4日','5日','6日','7日',
            '8日','9日','10日','11日','12日','13日','14日',
            '15日','16日','17日','18日','19日','20日','21日',
            '22日','23日','24日','25日','26日','27日','28日',
            '29日','30日']
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
                    show: true,
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
