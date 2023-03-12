(min = 0), (max = 100);
option = {
    color: ['#5189F8'],
    tooltip: {},
    radar: {
        axisName: {
            fontSize: 14,
            color: '#6D7278',
        },
        axisLine: {
            lineStyle: {
                color: '#ebeef3',
            },
        },
        shape: 'circle',
        center: ['50%', '50%'],
        radius: '70%',
        triggerEvent: false,
        indicator: [
            {
                name: '出勤率',
                max: max,
                min: min,
            },
            {
                name: '集体观念',
                max: max,
                min: min,
            },
            {
                name: '主观能动性',
                max: max,
                min: min,
            },
            {
                name: '积极探索精神',
                max: max,
                min: min,
            },
            {
                name: '内务卫生\n及纪律',
                max: max,
                min: min,
            },
            {
                name: '课堂表现',
                max: max,
                min: min,
            },
        ],
    },
    series: [
        {
            name: '综合素质',
            type: 'radar',
            symbolSize: 7,
            areaStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(137, 190, 252, 0.05)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(81, 137, 248, 0.3)', // 100% 处的颜色
                        },
                    ],
                },
            },
            lineStyle: {
                width: 2
            },
            data: [
                {
                    value: [80, 30, 78, 92, 88, 65],
                    name: '综合素质',
                },
            ],
        },
    ],
};
