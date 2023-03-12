option = {
    backgroundColor: '#ffffff',
    textStyle: {
        fontFamily: 'Microsoft YaHei'
    },
    title: {
        text: '日告警量趋势',
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
        data:['新增告警量','告警总量']
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
            data : ['2017-11-01','2017-11-02','2017-11-03','2017-11-04','2017-11-05','2017-11-06','2017-11-07']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'新增告警量',
            type:'line',
            //stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'告警总量',
            type:'line',
            //stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
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
