option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        itemGap: 8,
        itemWidth: 8,
        data: [
            {name:'邮件营销',lineStyle:{width:8}},
            {name:'联盟广告'}
        ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 12,
            areaStyle: {
                color:'#9287E7',
                opacity:0.2
            },
            lineStyle: {
                color:'#9287E7',
            },
            itemStyle: {
                color: '#9287E7',
                 opacity:0
            },
            emphasis: {
                focus: 'series',
                itemStyle: {
                    opacity:1,
                    borderWidth:3,
                    borderColor: '#fff',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 12,
            areaStyle: {
                color:'#FEB64D',
                opacity:0.2
            },
            itemStyle: {
                color: '#FEB64D',
                opacity:0
            },
            lineStyle: {
                color:'#FEB64D',
            },
            emphasis: {
                focus: 'series',
                 itemStyle: {
                    opacity:1,
                    borderWidth:3,
                    borderColor: '#fff',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
     
    ]
};