let min = 8,
    max = 40;
let data = (() => {
    let count = 50;
    let set = new Set();
    while (count--) {
        set.add(Math.floor(Math.random() * (max - min)) + min);
    }
    return [...set].map((v) => ({
        value: v,
        name: `${v}`
    }))
})();

// 获取比例尺,domain: 输入域，range 输出域
function getScale([d1, d2], [r1, r2]) {
    return function(val) {
        return (val - d1) / (d2 - d1) * (r2 - r1) + r1;
    };
}

// value 对应的比例尺
// 泡泡大小
let scale = getScale([min, max], [32, 80]);
// label字体大小
let scaleFontSize = getScale([min, max], [20, 38]);
// 对应类别categories根据value 值对应5种
let scaleCategory = getScale([min, max], [0, 4.99]);

data = data.map((item, index) => {
    let {
        value
    } = item;
    return Object.assign(item, {
        symbolSize: scale(value),
        category: Math.floor(scaleCategory(value)),
        label: {
            fontSize: parseInt(scaleFontSize(value))
        }
    });
});
option = {
    series: [{
        type: 'graph',
        layout: 'force',
        legendHoverLink: false,
        force: {
            repulsion: 160,
            edgeLength: 70
        },
        categories: [{
                itemStyle: {
                    color: '#409EFF'
                }
            },
            {
                itemStyle: {
                    color: '#67C23A'
                }
            },
            {
                itemStyle: {
                    color: '#E6A23C'
                }
            },
            {
                itemStyle: {
                    color: '#F56C6C'
                }
            },
            {
                itemStyle: {
                    color: '#ff7edb'
                }
            }
        ],
        label: {
            normal: {
                show: true
            }
        },
        data
    }]
};