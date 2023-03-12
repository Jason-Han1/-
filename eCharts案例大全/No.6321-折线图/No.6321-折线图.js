option = {
    backgroundColor: '#fff',
    color: ['#00c783', '#ff1744'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                type: 'dashed',
                color: '#999'
            }
        },
        borderColor: "#ddd",
        borderWidth: 1,
        backgroundColor: "#fff",
        textStyle: {
        color: "#000",
        fontSize: 12,
        }
    },
    legend: {
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        data: ['邮件营销', '联盟广告']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        axisLabel: {
          textStyle: {
              color: '#555',
              fontSize: 12
          }  
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
         axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLine: {
            show: false
        },
        axisLabel: {
          textStyle: {
              color: '#555',
              fontSize: 12
          }  
        },
        splitLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    series: [
        {
            symbol: 'circle',
            smooth: true,
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
            showSymbol: false
        },
        {
            smooth: true,
            symbol: 'circle',
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
