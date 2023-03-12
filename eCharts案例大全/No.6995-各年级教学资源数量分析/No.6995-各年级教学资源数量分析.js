option = {
    backgroundColor: '#0A2E5D',
   title: {
        text: '各年级教学资源数量分析',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            },
            textStyle: {
                color: 'white', //坐标的字体颜色
            },
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['高一', '高二', '高三'],
        textStyle: {
            color: 'white', //坐标的字体颜色
        },
    },
    xAxis: [{
        type: 'category',
        data: ['课件', '电子教案', '教学视频', '教学ppt', '其他'],
        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
            textStyle: {
                color: 'white', //坐标的字体颜色
            },
        },
        axisLine: {
            lineStyle: {
                color: 'white', //坐标轴的颜色
            },
        },
    }],
    yAxis: [{
        type: 'value',
        name: '数量',
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
            textStyle: {
                color: 'white', //坐标的字体颜色
            },
            formatter: '{value} '
        },
        axisLine: {
            lineStyle: {
                color: 'white', //坐标轴的颜色
            },
        },


    }],
    series: [{
            name: '高一',
            type: 'bar',
            data: [60, 68, 62, 61, 70]
        },
        {
            name: '高二',
            type: 'bar',
            data: [32, 35, 29, 31, 42]
        },
        {
            name: '高三',
            type: 'bar',
            data: [78, 33, 45, 30, 28]
        }
    ]
};