option = {
    color: [
        "#19d4ae",
        "#5ab1ef",
        "#fa6e86",
        "#ffb980",
        "#0067a6",
        "#c4b4e4",
        "#d87a80",
        "#9cbbff",
        "#d9d0c7",
        "#87a997",
        "#d49ea2",
        "#5b4947",
        "#7ba3a8"
    ],  // 全局颜色盘
    title: {
        x: '25%',
        text: '矩形树图练习',
        subtext: '矩形树图练习子标题'
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        name: '统计',
        type: 'treemap',
        label: {
            show: true,
            formatter: '{b}'
        },
        upperLabel: {
            show: true,
            height: 30
        },
        levels: [{
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    gapWidth: 1
                }
            },
            upperLabel: {
                normal: {
                    show: false
                }
            }
        }, {
           itemStyle: {
               normal: {
                   borderColor: '#555',
                   borderWidth: 5,
                   gapWidth: 1
               },
               emphasis: {
                   borderColor: '#888'
               }
           } 
        }, {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    gapWidth: 1,
                    borderColorSaturation: 0.6
                }
            }
        }],
        data: [{
            name: 'Matcha Latte',
            value: 189.9,
            children: [{
                name: 'Matcha Latte/2012',
                value: 41.1
            }, {
                name: 'Matcha Latte/2013',
                value: 30.4
            }, {
                name: 'Matcha Latte/2014',
                value: 65.1
            }, {
                name: 'Matcha Latte/2015',
                value: 53.3
            }]
        }, {
            name: 'Milk Tea',
            value: 347.4,
            children: [{
                name: 'Milk Tea/2012',
                value: 86.5
            }, {
                name: 'Milk Tea/2013',
                value: 92.1
            }, {
                name: 'Milk Tea/2014',
                value: 85.7
            }, {
                name: 'Milk Tea/2015',
                value: 83.1
            }]
        }, {
            name: 'Cheese Cocoa',
            value: 257.2,
            children: [{
                name: 'Cheese Cocoa/2012',
                value: 24.1
            }, {
                name: 'Cheese Cocoa/2013',
                value: 57.2
            }, {
                name: 'Cheese Cocoa/2014',
                value: 87.8
            }, {
                name: 'Cheese Cocoa/2015',
                value: 88.1
            }]
        }]
    }]
};