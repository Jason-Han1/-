option = {
    series: [{
        type: 'liquidFill',
        name: '50',
        data: [{
            name: '50',
            value: 0.5,
        }],
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 1,
                color: ['rgba(131,249,103,0.01)'], // 0% 处的颜色
            }, {
                offset: 0,
                color: ['rgb(131,249,103)'], // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        radius: '80%',
        center: ['50%', '50%'],
        label: {
            formatter: '{b}',
            fontSize: 28,
            color: 'rgb(131,249,103)',
        },
        backgroundStyle: {
            borderWidth: 1,
            borderColor: 'rgba(255,255,255, 0)',
            color: ['rgba(255,255,255, 0)'],
        },
        itemStyle: {
            shadowBlur: 0,

        },
        emphasis: {
            itemStyle: {
                opacity: 0.7
            },
        },
        outline: {
            borderDistance: 5,
            itemStyle: {
                borderWidth: 3,
                borderColor: 'rgb(39,84,125)',
                shadowBlur: 10,
                shadowColor: 'rgb(0,181,248)'
            }
        }
    }]
};