option = {
    //实现颜色映射
    visualMap: {
        show: true,
        inRange: {
             color: ['#0DFFD6', '#0D68FF']
        }
    },
    series: [{
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        roseType: 'radius',
        labelLine: {
            show: true,
            length: 15,
            length2: 110
        },
        label: {
            formatter: '{b|{b} {d}%}\n{c|●}',
            rich: {
                c: {//小圆点
                    padding: [0, -10, 0, -10]
                },
                b: {
                    padding: [0, -110, -15, -110],
                    color: '#8ebef2',
                    fontSize: 14
                }
            }
        },
        data: [{
                value: 100,
                name: '乒乓球'
            },
            {
                value: 120,
                name: '羽毛球'
            },
            {
                value: 100,
                name: '篮球'
            },
            {
                value: 140,
                name: '足球'
            }
        ]
    }]
};