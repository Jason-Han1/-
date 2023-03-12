var colors=['#57bbf7','#ffc969','#f38b97', '#b1d882','#c0acf9'];
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        borderColor:'#eeeff0'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
            }
        }
    },
    color:colors,
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 15,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor:'#b9d2fa'
                }
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 15,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor:'#fad89f'
                }
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 15,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor:'#f6b9c0'
                }
            },
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 15,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor:'#d4e9bb'
                }
            },
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 15,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor:'#d8ccfd'
                }
            },
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
