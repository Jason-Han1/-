option = {
    tooltip: {
        formatter: '{b}',
        position: function(pos, params, dom, rect, size) {
            // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
            var obj = {
                top: 60
            };
            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
            return obj;
        }
    },
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 13,
        left: 20,
        // top:25,
        right: 20,
        itemStyle: {
            shadowBlur: '5',
            shadowColor: 'rgba(255,255,255,1)'
        },
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            name: 'A01',
            x: 1,
            y: 0,
            itemStyle: {
                color: 'rgba(128, 255, 128, 0.5)'
            }
        }, {
            name: 'I01',
            x: 2,
            y: 0
        }, {
            name: 'O01',
            x: 3,
            y: 0
        }, {
            name: 'S01',
            x: 4,
            y: 0
        }],
        links: [{
            source: 0,
            target: 1,
            symbolSize: [4, 10]
        }],
        lineStyle: {
            opacity: 0.9,
            width: 4,
            curveness: 0,
            color: 'rgba(253,226,0,0.8)'
        }
    }]
};