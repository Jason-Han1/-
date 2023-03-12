const data = [{
    value: 210,
    name: '绿色'
}, {
    value: 150,
    name: '红色',
    selected: true
}, {
    value: 110,
    name: '浅蓝'
}]

option = {
    title: {
        show: false,
    },
    series: [{
        name: '业务健康度',
        type: 'pie',
        hoverAnimation: false,
        avoidLabelOverlap: false,
        radius: [0, '74%'],

        label: {
            normal: {
                position: 'inner',
                formatter: "{c}\n{b}",
                fontSize: 14,
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        color: ['#9BD16F', '#D07070', '#82C5DC'],
        data: data
    }]
};