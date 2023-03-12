option = {
    title: {
        text: '公司领域指标监控仪表盘',
        textStyle: {
            color: 'black',
            fontWeight: 'bolder',
            fontSize: 20,
        },
        left: 'center',
        top: '0%',
    },
    tooltip: {
        position: 'top',
    },
    grid: {
        top: '15%',
        bottom: '15%',
        left: '30%',
        right: '30%',
    },
    xAxis: {
        type: 'category',
        data: ['B1公司', 'B2公司', 'B3公司', 'B4公司', 'B5公司', 'B6公司'],
        splitArea: {
            show: true,
        },
    },
    yAxis: {
        type: 'category',
        data: ['安全隐患整改完成', '两票检查不合格率', '安委会不安全事件'],
        splitArea: {
            show: true,
        },
    },
    visualMap: {
        type: 'piecewise',
        min: 0,
        max: 3,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '0%',
        precision: 0,
        inRange: {
            color: ['#f4f4fc', '#145c2c', '#fcb404', '#e4341c'],
        },
        pieces: [
            {
                value: 0,
                label: '不适用',
            },
            {
                value: 1,
                label: '正常状态',
            },
            {
                value: 2,
                label: '提示状态',
            },
            {
                value: 3,
                label: '预警状态',
            },
        ],
    },
    series: [
        {
            name: '预警状态',
            type: 'heatmap',
            data: [
                [0, 0, 2],
                [0, 1, 1],
                [0, 2, 3],
                [1, 0, 3],
                [1, 1, 2],
                [1, 2, 2],
                [2, 0, 1],
                [2, 1, 1],
                [2, 2, 1],
                [3, 0, 3],
                [3, 1, 3],
                [3, 2, 1],
                [4, 0, 1],
                [4, 1, 1],
                [4, 2, 1],
                [5, 0, 2],
                [5, 1, 1],
                [5, 2, 2],
            ],
            label: {
                show: false,
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
