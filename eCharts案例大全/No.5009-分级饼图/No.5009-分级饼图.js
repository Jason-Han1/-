let innerFontColor = '#FFFFFF';
let outerFontColor = '#666666';
let scale = 1;
let echartData = {
    inner: [{
            value: 30,
            unit: '个',
            name: '禽类'
        },
        {
            value: 20,
            unit: '个',
            name: '畜类'
        },
        {
            value: 10,
            unit: '个',
            name: '水产品'
        }
    ],
    outer: [{
            value: 10,
            unit: '个',
            name: '鸭肉'
        },
        {
            value: 20,
            unit: '个',
            name: '鸡肉'
        },
        {
            value: 10,
            unit: '个',
            name: '羊肉'
        },
        {
            value: 10,
            unit: '个',
            name: '牛肉'
        },
        {
            value: 2,
            unit: '个',
            name: '鱼'
        },
        {
            value: 8,
            unit: '个',
            name: '鱿鱼'
        }
    ]
}

let legend1 = echartData.inner.map(v => v.name);
let legend2 = echartData.outer.map(v => v.name);
let legendData = [...legend1, ...legend2];

option = {
    backgroundColor: '#fff',
    color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80",
        "#8d98b3", "#FFEA01", "#B8D07C", "#fca4bb", "#dc69aa",
        "#07a2a4", "#9a7fd1", "#588dd5", "#f5994e", "#c05050",
        "#59678c", "#c9ab00", "#7eb00a", "#6f5553", "#c14089"
    ],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: [0, '35%'],
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: echartData.inner
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '55%'],
            data: echartData.outer,
            labelLine: {
                normal: {
                    length: 20,
                    length2: 140,
                    lineStyle: {
                        color: '#e6e6e6'
                    }
                }
            },
            label: {
                normal: {
                    formatter: params => {
                        return (
                            '{icon|●}{name|' + params.name + '}{percent|'+ params.percent.toFixed(1) +'%}{value|' +
                            (params.value) + '}'
                        );
                    },
                    padding: [0, -130, 25, -130],
                    rich: {
                        color: '#333',
                        icon: {
                            fontSize: 16
                        },
                        name: {
                            fontSize: 14,
                            padding: [0, 5, 0, 5],
                            color: '#666666'
                        },
                        percent: {
                            color: '#333',
                            padding: [0, 5, 0, 0],
                        },
                        value: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#333333'
                        }
                    }
                }
            },
        }
    ]
};