var option_data = {
    item0: {
        unit: '万',
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        name: '总兵力',
    },
    item1: {
        area: [],
        unit: '%',
        data: [21.43, 16.82, 14.28, 13.98, 7.01, 6.38, 4.12, 4.05, 3.9473, 3.92],
        name: '综合战力',
    },
    legend: ['内圈', 'eps'],
    dates: [
        '石头科技',
        '奥泰生物',
        '东方生物',
        '硕世生物',
        '圣湘生物',
        '之江生物',
        '财富趋势',
        '菱电电控',
        '奥普特',
        '宏力达',
    ],
    title: ' ',
};

option = {
    title: {
        x: 'center',
        y: '4%',
        text: option_data.title,
        textStyle: {
            color: '#37ABD8',
            fontSize: 24,
            fontFamily: '微软雅黑',
            fontWeight: 'normal',
        },
    },
    backgroundColor: '#Fff',
    angleAxis: {
        type: 'category',
        z: 20,
        axisLine: {
            lineStyle: {
                color: '#19E813', // 外环颜色
            },
        },
        axisLabel: {
            color: '#000', // 外环文字颜色
        },
        data: option_data.dates,
    },
    radiusAxis: {
        max: 25,
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(12, 28, 128, 0.5)',
            },
        },
    },
    polar: {
        radius: '70%',
        center: ['50%', '55%'],
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var item0 = params[0].seriesName + ' : ' + params[0].value;
            var item1 = params[1].seriesName + ' : ' + params[1].value;
            return params[0].name + '<br/>' + item0 + '<br/>' + item1;
        },
    },
    legend: {
        left: '3%',
        top: '12%',
        orient: 'vertical',
        icon: 'circle',
        textStyle: {
            color: '#666',
            fontSize: 13,
        },
        data: option_data.legend,
    },
    series: [
        {
            type: 'bar',
            name: option_data.item0.name,
            data: option_data.item0.data,
            coordinateSystem: 'polar',
            color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                    {
                        offset: 1,
                        color: '#29D1EE',
                    },
                    {
                        offset: 0,
                        color: '#63B2EE',
                    },
                ],
                globalCoord: false,
            },
            stack: option_data.title,
        },
        {
            type: 'bar',
            name: option_data.item1.name,
            data: option_data.item1.data,
            coordinateSystem: 'polar',
            color: {
                type: 'linear',
                x: 1,
                y: 0.5,
                x2: 0.5,
                y2: 0,
                colorStops: [
                    {
                        offset: 1,
                        color: 'rgba(30,144,225,0.9)',
                    },
                    {
                        offset: 0,
                        color: 'rgba(154 ,255 ,154,0.8)',
                    },
                ],
                globalCoord: false,
            },
            stack: option_data.title,
        },
    ],
};
