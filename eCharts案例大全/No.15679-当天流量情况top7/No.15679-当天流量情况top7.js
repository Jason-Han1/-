option = {
    title: {
        text: '当天流量情况top7'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: null // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '<div style="text-align: center;">当天流量情况top7</div>{b} : {c}'
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '10%',
        height: 280, //设置grid高度
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }

    }],
    yAxis: [{
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: true
        },
        axisLabel: {
            interval: null
        },
        data: ['北京', '长沙', '天津', '太原', '石家庄', '广州', '重庆'],
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '流量',
        type: 'bar',
        barWidth: 25,
        label: {
            normal: {
                show: true,
                position: 'right'
            }

        },
        data: [160, 170, 240, 264, 300, 520, 610]
    }]
};