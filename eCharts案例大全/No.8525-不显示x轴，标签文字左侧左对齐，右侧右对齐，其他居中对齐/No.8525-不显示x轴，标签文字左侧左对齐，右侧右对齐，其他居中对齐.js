option = {
    title: {
        text: '堆叠区域图'
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
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [{ value: '周一', textStyle: { align: 'left' } }, '周二', '周三', '周四', '周五', '周六', { value: '周日', textStyle: { align: 'right' } }]
        }
    ],
    yAxis: [
        {
            show: false,
            axisLabel: {
                inside: true
            }
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 220]
        },
    ]
};
