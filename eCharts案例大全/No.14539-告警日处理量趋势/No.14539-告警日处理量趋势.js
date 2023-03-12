option = {
    backgroundColor: '#ffffff',
    textStyle: {
        fontFamily: 'Microsoft YaHei'
    },
    title: {
        text: '告警日处理量趋势',
        left:'10',
        textStyle: {
            color: '#666666',
            fontWeight: 'bold',
            fontSize: 14
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        right:'left',
        itemGap: 8,
        itemWidth: 16,
        itemHeight: 9,
        textStyle: {
            color: '#999999',
        },
        data:['告警处理量','新增告警量']
    },
    /*toolbox: {
        feature: {
            saveAsImage: {}
        }
    },*/
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2017-11-01','11-02','11-03','11-04','11-05','11-06','11-07']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'告警处理量',
            type:'line',
            //stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 232, 101, 184, 120, 130, 110]
        },
        {
            name:'新增告警量',
            type:'line',
            //stack: '总量',
            areaStyle: {normal: {}},
            data:[140, 182, 191, 134, 190, 80, 210]
        },
        /*{
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }*/
    ]
};
