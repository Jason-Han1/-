var iconList = {
    type: 'pictorialBar',
    symbol:
        'path://M1316.312615 0H1457.230769v1024h-140.918154L1142.153846 502.429538zM0 472.615385h1102.769231v78.76923H0z',
    symbolSize: [50, 30],
    symbolRotate: 0,
    symbolOffset: [-61, 0],
    symbolBoundingData: 400,
    data: [1, 2, 3, 4, 5, 6, 7],
    tooltip: {
        show: false,
    },
    zlevel: 100,
    z: 100,
    color: '#ffb204',
};
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },

    legend: {
        data: ['事件', '人物', '地点'],
        align: 'left',
        right: 10,
        left: 10,
        textStyle: {
            color: '#838383',
        },
        selectedMode: false,
        icon: 'square',
        itemWidth: 8,
        itemHeight: 8,
    },
    grid: {
        left: '4%',
        top: '5%',
        right: '10%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show: false,
    },
    yAxis: {
        type: 'category',
        data: ['人间', '四月', '桃花', '荷叶', '荷花', '人事', '风雨'],
        axisLabel: {
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 70,
            textStyle: {
                color: '#838383',
                fontSize: 14,
            },
        },
        axisTick: {
            //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: {
            //坐标线相关设置。
            show: false,
        },
        splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: false,
        },
    },
    itemStyle: {
        barBorderRadius: [0, 10, 10, 0],
        top: 10,
    },
    series: [
        {
            name: '事件',
            type: 'bar',
            data: [1, 0, 4, 2, 2, 1, 3, 0],
            barWidth: 8, //柱子宽度
            itemStyle: {
                normal: {
                    color: '#ffb204',
                    opacity: 1,
                },
            },
            label: {
                show: true,
                position: 'right',
                trigger: 'axis',
                formatter: '{c}人',
            },
        },
        {
            name: '人物',
            type: 'bar',
            barWidth: 8, //柱子宽度
            data: [2, 1, 3, 4, 2, 1, 6, 1],
            itemStyle: {
                normal: {
                    color: '#64aeff',
                    opacity: 1,
                },
            },
            label: {
                show: true,
                position: 'right',
                trigger: 'axis',
                formatter: '{c}人',
            },
        },
        {
            name: '地点',
            type: 'bar',
            barWidth: 8, //柱子宽度
            data: [0, 0, 0, 0, 0, 0, 0, 0],
            itemStyle: {
                normal: {
                    color: '#59c9b5',
                    opacity: 1,
                },
            },
            label: {
                show: true,
                position: 'right',
                trigger: 'axis',
                formatter: '{c}人',
            },
        },
        iconList,
    ],
};
