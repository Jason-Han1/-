option = {
    title: {
        text: 'Profile',
        left: 'center'
    },
    dataZoom: [{
        type: 'slider',
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: 400,
        height: 10,
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        },
        labelFormatter: ''
    }, {
        type: 'inside',
        filterMode: 'weakFilter'
    }],
    grid: {
        height: 300
    },
    tooltip: {
        formatter: function(params) {
            return params.marker + params.name + ': ' + params.value[3]
        }
    },
    xAxis: {
        min: 0,
        scale: true,
        axisLabel: {
            formatter: function(val) {
                return Math.max(0, val - 0) + 'ms';
            }
        }
    },
    yAxis: {
        data: ['categoryA', 'categoryB', 'categoryC']
    },
    series: [{
        type: 'custom',
        renderItem: function(params, api) {
            var categoryIndex = api.value(0);
            var start = api.coord([api.value(1), categoryIndex]);
            var end = api.coord([api.value(2), categoryIndex]);
            var height = api.size([0, 1])[1] * 0.6;

            var rectShape = echarts.graphic.clipRectByRect({
                x: start[0],
                y: start[1] - height / 2,
                width: end[0] - start[0],
                height: height
            }, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            });

            return rectShape && {
                type: 'group',
                x: start[0],
                y: start[1] - height / 2,
                width: end[0] - start[0],
                height: height,
                children: [{
                    type: 'rect',
                    shape: rectShape,
                    style: api.style()
                }, {
                    type: 'path',
                    shape: {
                        pathData: "M 5 5 L 15 5 L 10 15",
                        x: start[0],
                        y: start[1] - height / 4,
                        width: end[0] - start[0],
                        height: height / 2,
                        right: 'center'
                    }
                }],
                bounding: 'all'
            };
        },
        itemStyle: {
            opacity: 0.8
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: [{
                name: 'CPU',
                value: [
                    1, 0, 1000, 1000
                ],
                itemStyle: {
                    normal: {
                        color: '#7b9ce1'
                    }
                }
            },
            {
                name: 'GPU',
                value: [
                    1, 2000, 2500, 500
                ],
                itemStyle: {
                    normal: {
                        color: '#bd6d6c'
                    }
                }
            }
        ]
    }]
};