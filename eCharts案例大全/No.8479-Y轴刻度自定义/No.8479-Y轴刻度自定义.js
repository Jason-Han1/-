var uploadedDataURL = "/asset/get/s/data-1583741201057-_YTRLGLa.png";

option = {
    title: {
        text: 'Y轴刻度自定义'
    },
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
        data: ['邮件营销', '联盟广告'],
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 10,
        right: '4%',
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
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        // 主要代码
        axisLabel: {
            margin: -3, // 将数字向右偏移
            formatter: function(p) {
                if (p === 0) {
                    return '{a| ' + p + '}' + '{c|}' + '{d|}';
                } else {
                    return '{a| ' + p + '}' + '{dot|}';
                }
            },
            rich: {
                a: {
                    padding: 6,
                    textAlign: 'left'
                },
                dot: {
                    backgroundColor: '#fff',
                    height: 6,
                    width: 6,
                    borderRadius: 3
                },
                c: {
                    backgroundColor: 'black',
                    height: 1,
                    width: 6
                },
                d: {
                    backgroundColor: 'black',
                    height: 6,
                    width: 1,
                    margin: -2
                }
            }
        }
    },
    series: [{
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};