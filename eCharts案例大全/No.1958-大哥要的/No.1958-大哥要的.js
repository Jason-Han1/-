var nodes = [
    {
        x: 500,
        y: 1000,
        nodeName: 'Frontend',//圆下面的名字
        svgPath: 'circle',//可以改成正方形等等，也可从网上复制图标
        symbolSize: 50,//自定义圆的大小
    },
    {
        x: 500,
        y: 800,
        nodeName: 'Order',
        svgPath: 'circle',
    },

    {
        x: 0, //log 这个圆的横坐标
        y: 300,
        nodeName: 'Log',
        svgPath: 'circle',
    },
    {
        x: 333,
        y: 300,
        nodeName: 'Pro',
        svgPath: 'circle',
    },
    {
        x: 666,
        y: 300,
        nodeName: 'ItemCenter',
        svgPath: 'circle',
    },
    {
        x: 1000,
        y: 300,
        nodeName: 'Inventory',
        svgPath: 'circle',
    },
];
var charts = {
    nodes: [],
    linesData: [
        {
            coords: [
                [500, 1000],
                [500, 600],
            ],
        },
        {
            coords: [
                [500, 600],
                [0, 600],
                [0, 600],
            ],
        },
        {
            coords: [
                [500, 600],
                [1000, 600],
                [1000, 600],
            ],
        },
        {
            coords: [
                [0, 600],
                [0, 300],
            ],
        },
        {
            coords: [
                [333, 600],
                [333, 300],
            ],
        },
        {
            coords: [
                [666, 600],
                [666, 300],
            ],
        },
        {
            coords: [
                [1000, 600],
                [1000, 300],
            ],
        },
    ],
};
for (var j = 0; j < nodes.length; j++) {
    const { x, y, nodeName, svgPath, symbolSize } = nodes[j];
    var node = {
        nodeName,
        value: [x, y],
        symbolSize: symbolSize || 50,
        symbol: svgPath,

        itemStyle: {
            color: 'orange',
        },
    };
    charts.nodes.push(node);
}

option = {
    backgroundColor: 'white',
    xAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value',
    },
    yAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value',
    },
    series: [
        {
            type: 'graph',
            coordinateSystem: 'cartesian2d',
            label: {
                show: true,
                position: 'bottom',
                color: 'black',
                formatter: function (item) {
                    return item.data.nodeName;
                },
            },
            data: charts.nodes,
        },
        {
            type: 'lines',
            polyline: true,
            coordinateSystem: 'cartesian2d',
            lineStyle: {
                type: 'dashed',
                width: 2,
                color: '#00ffff',
                curveness: 0.3,
            },
            effect: {
                show: true,
                trailLength: 0.1,
                symbol: 'arrow',
                color: 'green',
                symbolSize: 8,
            },
            data: charts.linesData,
        },
    ],
};
