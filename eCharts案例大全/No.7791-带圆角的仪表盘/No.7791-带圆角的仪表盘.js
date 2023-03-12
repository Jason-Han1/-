var option = {
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 160,
        boundaryGap: ['0', '100'],
        startAngle: 202.5
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: ['a', 'b', 'c'],
        z: 10
    },
    polar: {},
    series: [{
        type: 'bar',
        data: [, , 40],
        coordinateSystem: 'polar',
        barMaxWidth: 40,
        z: 2,
        name: '已交割',
        roundCap: true,
        color: '#4A90E2',
        barGap: '-100%',
    }, {
        type: 'bar',
        data: [, , 50],
        z: 1,
        coordinateSystem: 'polar',
        barMaxWidth: 40,
        name: '执行中',
        roundCap: true,
        color: '#3768a2',
        barGap: '-100%',
    }, {
        type: 'bar',
        data: [, , 100],
        z: 0,
        silent: true,
        coordinateSystem: 'polar',
        barMaxWidth: 40,
        name: 'C',
        roundCap: true,
        color: '#F1F3F8',
        barGap: '-100%',
    }],
    legend: {
        show: true,
        icon: 'circle',
        itemWidth: 20,
        itemHeight: 20,
        textStyle: {
            fontSize: 16,
            color: '#c0c0c0'
        },
        top: '35%',
        left: 'center',
        data: ['已交割', '执行中']
    },
    tooltip: {
        show: false
    },
    graphic: [{
            type: 'group',
            top: 'middle',
            left: 'center',
            id: 'data',
            children: [{
                    type: 'text',
                    id: 'current',
                    top: 0,
                    style: {
                        text: '5,390',
                        font: 'bolder 4em "Microsoft YaHei", sans-serif',
                        fill: '#000000',
                        textAlign: 'center'
                    }
                },
                {
                    type: 'text',
                    id: 'all',
                    top: 100,
                    style: {
                        text: 'of 10,000',
                        font: 'bolder 2em "Microsoft YaHei", sans-serif',
                        fill: '#c0c0c0',
                        textAlign: 'center'
                    }
                }
            ]
        },
        {
            type: 'text',
            bottom: 370,
            left: 400,
            style: {
                text: '0%',
                font: 'bolder 1em "Microsoft YaHei", sans-serif',
                fill: '#c0c0c0',
            }
        },
        {
            type: 'text',
            bottom: 370,
            right: 400,
            style: {
                text: '100%',
                font: 'bolder 1em "Microsoft YaHei", sans-serif',
                fill: '#c0c0c0',
            }
        }
    ]
};