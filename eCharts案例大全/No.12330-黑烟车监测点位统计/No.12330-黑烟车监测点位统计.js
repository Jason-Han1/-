var colors = ['#8378ea', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293'];
option = {
    title: {
        text: '黑烟车监测点位统计',
        subtext: '纯属虚构',
        link: ''
    },
    color: colors,
    tooltip: {
        show: true
    },
    legend: {
        icon: 'circle',
        orient: 'vertical',
        // left:'right',
        top: 'center',
        right: '2%',
        selected: {
            '神农架林区监测点': false
        },
        data: ['武汉监测点', '襄阳监测点', '孝感监测点', '咸宁监测点', '仙桃监测点', '神农架林区监测点']
    },

    series: [{
        type: 'pie',
        radius: ['10%', '40%'],
        roseType: 'area',
        zlevel: 2,
        // tooltip: {
        //     formatter: '{b}: {d}%'
        // },
        label: {
            normal: {
                show: false,
                formatter: '{b}\n{d}%',
            },
            emphasis: {
                show: true
            }
        },
        data: [{
                value: 800,
                name: '武汉监测点',
                label: {
                    show: true,
                    formatter: '{b}\n{d}%'
                },
                labelLine: {
                    show: true
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: '{b}\n{d}%'
                    },
                    labelLine: {
                        show: true
                    }
                }
            },
            {
                value: 300,
                name: '襄阳监测点'
            },
            {
                value: 600,
                name: '孝感监测点'
            },
            {
                value: 1000,
                name: '咸宁监测点'
            },
            {
                value: 500,
                name: '仙桃监测点'
            },
            {
                value: 300,
                name: '神农架林区监测点'
            }
        ]
    }]
};