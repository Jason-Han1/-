option = {
    title: {
        text: '流转动画'
    },
    tooltip: {},
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value',
    },
    
    series: [{
            // type: 'scatter',
            type: 'graph',
            coordinateSystem: 'cartesian2d',
            label: {
                show: true,
                // position: 'left'
            },
            symbolSize: 20,
            data: [{
                name: '节点1',
                value: [10, 40],
            }, {
                name: '节点2',
                value: [100, 200],
            }, {
                name: '节点3',
                value: [200, 100],
            }, {
                name: '节点4',
                value: [100, 50]
            }],
        },
        {
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            effect: {
              show: true,
              symbol: 'triangle',
              symbolSize: 10,
              trailLength: 0
            },
            lineStyle: {
              curveness: 0.3
            },
            label: {
                show: true,
                position: 'middle'
            },
            data: [
                {
                    name: "1",
                    coords: [
                        [10, 40],
                        [100, 200]
                    ]
                },
                {
                    name: "2",
                    coords: [
                        [100, 200],
                        [10, 40]
                    ]
                },
                {
                    name: "3",
                    coords: [
                        [100, 200],
                        [200, 100]
                    ]
                },
                {
                    name: "4",
                    coords: [
                        [200, 100],
                        [100, 200]
                    ]
                },
                {
                    name: "5",
                    coords: [
                        [100, 50],
                        [100, 200]
                    ]
                },
                {
                    name: "6",
                    coords: [
                        [100, 200],
                        [100, 50]
                    ]
                }
            ]
        }
    ]
};