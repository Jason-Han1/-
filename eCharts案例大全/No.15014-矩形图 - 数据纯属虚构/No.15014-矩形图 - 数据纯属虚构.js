myChart.setOption(option = {
    title: {
        text: '矩形图 - 数据纯属虚构',
        subtext: '2017/08'
    },
    tooltip: {},
    series: [{
        name: 'root',
        type: 'treemap',
        visibleMin: 300,
        data: [{
            value: 50,
            name: '苹果',
            children: [{
                value: 5,
                name: 'ipod'
            }, {
                value: 80,
                name: 'iphone'
            }, {
                value: 5,
                name: 'mac'
            }, {
                value: 10,
                name: 'iMac'
            }]
        }, {
            value: 50,
            name: '三星',
            children: [{
                value: 70,
                name: '手机'
            }, {
                value: 20,
                name: '内存'
            }, {
                value: 5,
                name: '电视机'
            }, {
                value: 5,
                name: '电脑'
            }]
        }],
        leafDepth: 1,
        levels: [
            {
                itemStyle: {
                    normal: {
                        borderColor: '#555',
                        borderWidth: 4,
                        gapWidth: 4
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.6],
                itemStyle: {
                    normal: {
                        borderColorSaturation: 0.7,
                        gapWidth: 2,
                        borderWidth: 2
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.5],
                itemStyle: {
                    normal: {
                        borderColorSaturation: 0.6,
                        gapWidth: 1
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.5]
            }
        ]
    }]
});