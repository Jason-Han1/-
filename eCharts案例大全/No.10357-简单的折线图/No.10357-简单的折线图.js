option = {
    backgroundColor: '#fff',
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告', '搜索引擎']
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        boundaryGap: false,
        // 坐标轴线
        axisLine: {
            show: false,
            lineStyle: {
                color: "#999"
            }
        },
        // 分割线
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#e5e5e5',
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: "#999"
            },
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#e5e5e5'
            }
        }
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            color: "#0bcd74",
            smooth: true,
            symbol: 'circle',
            symbolSize: 14,
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#0bcd74'
                }
            },
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 3
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            color: "#F5A623",
            smooth: true,
            symbol: 'circle',
            symbolSize: 14,
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#F5A623'
                }
            },
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 3
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            color: "#598CFF",
            smooth: true,
            symbol: 'circle',
            symbolSize: 14,
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#598CFF'
                }
            },
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 3
            },
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'line',
            color: "#F58080",
            smooth: true,
            symbol: 'circle',
            symbolSize: 14,
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#F58080'
                }
            },
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 3
            },
            data:[250, 132, 101, 284, 230, 430, 110]
        }
    ]
};
