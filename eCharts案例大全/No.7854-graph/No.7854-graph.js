var color = ['#342423', '#4355ff', '#ff7768']
var categories = [{
        name: 'n0'
    },
    {
        name: 'n1'
    },
    {
        name: 'n2'
    }
];

var datas = [{
        name: 'n0',
        category: 0,
        id: "0",
        itemStyle: {
            color: color[0]
        },
        symbolSize: 19.12381,
        value: 28.685715,
        x: -260.82776,
        y: 299.6904
    },
    {
        name: 'n1',
        category: 0,
        id: "1",
        itemStyle: {
            color: color[1]
        },
        symbolSize: 19.12381,
        value: 28.685715,
        x: -266.82776,
        y: 299.6904
    },
    {
        name: 'n2',
        category: 0,
        id: "2",
        itemStyle: {
            color: color[2]
        },
        symbolSize: 19.12381,
        value: 28.685715,
        x: -276.82776,
        y: 299.6904
    }
];

var links = [{
        id: "0",
        name: null,
        source: "1",
        target: "0"
    },
    {
        id: "1",
        name: null,
        source: "1",
        target: "2"
    },
    {
        id: "2",
        name: null,
        source: "0",
        target: "2"
    },
]
option = {
    title: {
        text: 'Les Miserables',
        subtext: 'Default layout',
        top: 'bottom',
        left: 'right'
    },
    tooltip: {},
    legend: [{
        // selectedMode: 'single',
        data: categories.map(function(a) {
            return a.name;
        })
    }],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: datas,
        links: links,
        categories: categories,
        roam: true,
        focusNodeAdjacency: true,
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.3)'
        },
        label: {
            position: 'right',
            formatter: '{b}'
        },
        lineStyle: {
            color: 'source',
            curveness: 0.3
        },
        emphasis: {
            lineStyle: {
                width: 10
            }
        }
    }]
};

//myChart.setOption(option);