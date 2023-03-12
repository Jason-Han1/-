option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: []
    }],
    graphic: [{
        type: 'group',
        bounding: 'raw',
        left: 180,
        top: 50,
        z: 100,
        onmouseover: (e, a, b, c) => {
            console.log(e, a, b, c)
            e.target.style.fill = '#ff00ff'
        },
        children: [{
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                    width: 114,
                    height: 32,
                    r: 3
                },
                style: {
                    fill: '#fff',
                    stroke: '#333333',
                    lineWidth: 0.5
                }
            },
            {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                    fill: '#606266',
                    lineWidth: 0.5,
                    text: '统计率趋势'
                }
            }
        ]
    }, {
        type: 'group',
        bounding: 'raw',
        left: 320,
        top: 50,
        z: 100,
        children: [{
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                    width: 114,
                    height: 32,
                    r: 3
                },
                style: {
                    fill: '#66b1ff',
                    stroke: '#66b1ff',
                    lineWidth: 0.5
                }
            },
            {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                    fill: '#ffffff',
                    lineWidth: 0.5,
                    text: '统计时长趋势'
                }
            }
        ]
    }]
};