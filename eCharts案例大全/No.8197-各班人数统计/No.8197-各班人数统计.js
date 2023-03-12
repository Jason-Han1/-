option = {
    backgroundColor: '#0A2E5D',
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
        data: ['总人数', '男生', '女生'],
        textStyle: {
            color: 'white', //坐标的字体颜色
        },
    },
    xAxis: [{
        type: 'category',
        data: ['一班', '二班', '三班', '四班', '五班'],
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
        name: '人数',
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
            name: '总人数',
            type: 'bar',
            data: [60, 68, 62, 61, 70]
        },
        {
            name: '男生',
            type: 'bar',
            data: [32, 35, 29, 31, 42]
        },
        {
            name: '女生',
            type: 'bar',
            data: [28, 33, 33, 30, 28]
        }
    ]
};