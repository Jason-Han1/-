commonY = {
    type: 'value',
    nameRotate: 0.1,
    splitLine: {
        lineStyle: {
            type: 'dash'
        }
    },
    min: 0,
    offset: 0,
    axisLine: {
        show: false
    },
    axisLabel: {
        inside: true,
        nameRotate: 0.1,
        verticalAlign: 'top',
        padding: [10, 0],
        margin: 0,
        color: '#888',
        showMinLabel: false
    },
    axisTick: {
        show: false
    },
    nameTextStyle: {
        color: '#333'
    }
}


option = {
    title: {
        text: '双 Y 轴，左右对齐'
    },
    grid: {
        top: 80,
        left: 10,
        right: 10
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            showMinLabel: false,
            showMaxLabel: false
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: [_.merge({}, commonY, {
        name: '左侧 Y 轴'
    }), _.merge({}, commonY, {
        name: '右侧 Y 轴',
        // 关键点，右侧文案又对齐
        nameRotate: -1
    })],
    series: [{
        type: 'line',
        name: '左侧 Y 轴',
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        type: 'line',
        name: '右侧 Y 轴',
        // 指定第二条 Y 轴数据
        yAxisIndex: 1,
        data: [120, 82, 91, 34, 90, 30, 10]
    }]
};