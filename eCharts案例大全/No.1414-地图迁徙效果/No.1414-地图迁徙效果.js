// 目标节点（流向节点）
var keyNode = [
    {
        name: '华东供电公司',
        gps: [114.854911, 33.901464],
    },
    {
        name: '华南电公司',
        gps: [115.854911, 26.901464],
    },
];
// 原始节点
var dataMap = [
    {
        name: '上海',
        value: 95,
        gps: [121.4648, 31.2891],
    },
    {
        name: '韶关',
        value: 75,
        gps: [113.7964, 24.7028],
    },
];

// 原始节点
var dataMapDatas = keyNode.map(({ name: dName }, i) => ({
    name: dName,
    type: 'scatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
        brushType: 'stroke',
    },
    label: {
        normal: {
            show: true,
            position: 'right',
            formatter: '{b}',
        },
    },
    itemStyle: {
        normal: {},
    },
    data: dataMap.map(({ name, gps, value }, i) => ({
        name,
        value: [...gps, value],
    })),
}));
// 目标节点
var dataKeyNode = keyNode.map(({ name, gps: value }, i) => ({ name, value, visualMap: false }));

// 流向线条
var dataMapLines = keyNode.map(({ name: dName, gps: dGps }, i) => ({
    name: dName,
    type: 'lines',
    zlevel: 3,
    symbol: ['none', 'circle'],
    effect: {
        show: true,
        period: 3,
        trailLength: 0.01,
        symbolSize: 4,
    },
    lineStyle: {
        normal: {
            opacity: 1,
            curveness: 0.4,
            color: '#609fd4',
        },
    },
    data: dataMap.map(({ name, gps, value }, i) => ({
        fromName: name,
        toName: dName,
        coords: [gps, dGps],
        value: value,

        name,
        value: [...gps, value],
    })),
}));

option = {
    tooltip: {
        trigger: 'item',
    },
    visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        color: ['#00ff78', '#ff971b', '#acff43', '#ff73b7', '#ffff46', '#27bbfe'],
        show: false,
    },
    geo: {
        map: 'china',
        zoom: 0.98,
        zlevel: 2,
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#214278',
                borderColor: '#195BB9',
            },
            emphasis: {
                color: '#112246',
            },
        },
    },
    series: [
        // 原始节点
        ...dataMapDatas,
        // 目标节点
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 4,
            symbolSize: 30,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: 'white',
                },
            },
            itemStyle: {
                normal: {
                    color: 'white',
                },
            },
            rippleEffect: {
                scale: 4,
                brushType: 'stroke',
            },
            data: dataKeyNode,
        },
        // 线条流向
        ...dataMapLines,
    ],
};
