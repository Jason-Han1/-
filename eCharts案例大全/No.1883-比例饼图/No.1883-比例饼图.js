function _pie() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: 'rgba(24,144,255,0.3)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
var colorList = [
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#69c0ff', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#1890ff', // 100% 处的颜色
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#fff566', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#fadb14', // 100% 处的颜色
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#fff566', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#fadb14', // 100% 处的颜色
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#ff85c0', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#eb2f96', // 100% 处的颜色
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#b7eb8f', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#73d13d', // 100% 处的颜色
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#fff566', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#fadb14', // 100% 处的颜色
            },
        ],
    },
];
option = {
    backgroundColor: '#000',
    legend: {
        orient: 'vertical',
        top: 'center',
        right: '5%',
        data: ['rose1', 'rose2'],
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
        {
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['59%', '60%'],
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: _pie(),
        },
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['44%', '45%'],
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: _pie(),
        },
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['29%', '30%'],
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: _pie(),
        },
        {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: ['14%', '15%'],
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: _pie(),
        },
        {
            type: 'gauge',
            zlevel: 5,
            splitNumber: 90,
            radius: '69%',
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    width: 4,
                    color: 'rgba(24,144,255,0.5)',
                },
            },
            pointer: {
                show: 0,
            },
            detail: {
                show: 0,
            },
        },
        {
            type: 'pie',
            zlevel: 6,
            silent: true,
            radius: ['72%', '73%'],
            color: 'rgba(24,144,255,0.3)',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [1, 0, 0, 0],
        },
        {
            type: 'pie',
            zlevel: 7,
            silent: true,
            radius: ['77%', '80%'],
            hoverAnimation: false,
            color: [
                {
                    type: 'linear',
                    colorStops: [
                        {
                            offset: 0,
                        color: 'rgba(24,144,255,0.5)',
                        },
                        {
                            offset: 1,
                        
                        color: 'rgba(24,144,255,0.5)',
                        },
                    ],
                    global: false,
                },
                {
                    type: 'linear',
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(6,15,56,0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(18,52,133,1)',
                        },
                    ],
                    global: false,
                },
                {
                    type: 'linear',
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(6,15,56,0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(18,52,133,1)',
                        },
                    ],
                    global: false,
                },
            ],
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [1, 1, 1],
        },
        {
            name: '公变、专变比例',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            zlevel: 9,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 613,
                    name: '公变',
                    itemStyle: {
                        color: 'rgba(24,144,255,0.7)',
                        borderColor: 'rgba(50,123,250,1)',
                        borderWidth: 3,
                    },
                },
                {
                    value: 387,
                    name: '专变',
                    itemStyle: {
                        color: 'rgba(92,219,211,0.7)',
                        borderColor: 'rgba(54,207,201,1)',
                        borderWidth: 3,
                    },
                },
            ],
        },
    ],
};
