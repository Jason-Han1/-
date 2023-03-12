const total = 6343 + 7019;
option = {
    tooltip: {},
    animationEasingUpdate: 'quarticInOut',
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 800,
        },
        animation: true,
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{b}',
                fontSize: 12,
            },
        },
        data: [{
                name: '新客金额',
                value: 54,
                x: 500,
                y: 56,
                tooltip: {
                    formatter: '贡献金额占比:{c}%',
                    backgroundColor: 'rgba(141, 127, 255, 0.7)',
                },
                symbolSize: 54 * 0.8,
                draggable: true,
                itemStyle: {
                    normal: {
                        borderColor: '#8d7fff',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: '#8d7fff',
                        color: '#8d7fff',
                    },
                },
            }, {
                name: '老客金额',
                value: 46,
                x: 0,
                y: 0,
                tooltip: {
                    formatter: '贡献金额占比:{c}%',
                    backgroundColor: 'rgba(73, 132, 230, 0.7)',
                },
                symbolSize: 46 * 0.8,
                draggable: true,
                itemStyle: {
                    normal: {
                        borderColor: '#4984e6',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: '#4984e6',
                        color: '#4984e6',
                    },
                },
            }, {
                name: '新客户',
                value: 6343,
                symbolSize: 80 * (6343 / total),
                x: 0,
                y: 0,
                tooltip: {
                    formatter: '{b}:{c}人',
                    backgroundColor: 'rgba(99, 173, 252, 0.7)',
                },
                draggable: true,
                itemStyle: {
                    normal: {
                        borderColor: '#63adfc',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: '#63adfc',
                        color: '#63adfc',
                    },
                },
            }, {
                name: '老客户',
                value: 7019,
                x: 0,
                y: 0,
                tooltip: {
                    formatter: '{b}:{c}人',
                    backgroundColor: 'rgba(252, 150, 157, 0.7)',
                },
                symbolSize: 80 * (7019 / total),
                draggable: true,
                itemStyle: {
                    normal: {
                        borderColor: '#fc969d',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: '#fc969d',
                        color: '#fc969d',
                    },
                },
            },
            {
                name: '客户人数',
                x: 0,
                y: 0,
                symbolSize: 40,
                draggable: true,
                tooltip: {
                    show: false,
                },
                itemStyle: {
                    normal: {
                        borderColor: '#ff6161',
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: '#ff6161',
                        color: '#ff6161',
                    },
                },
            },
            {
                name: '金额占比',
                x: 0,
                y: 0,
                symbolSize: 40,
                draggable: true,
                tooltip: {
                    show: false,
                },
                itemStyle: {
                    normal: {
                        borderColor: '#ff6161',
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: '#ff6161',
                        color: '#ff6161',
                    },
                },
            },
            {
                name: '贡献状况',
                x: 0,
                y: 0,
                symbolSize: 80,
                draggable: true,
                tooltip: {
                    show: false,
                },
                itemStyle: {
                    normal: {
                        borderColor: '#ff6161',
                        borderWidth: 4,
                        shadowBlur: 30,
                        shadowColor: '#ff6161',
                        color: '#ff6161',
                    },
                },
            }
        ],
        links: [{
                source: '新客金额',
                target: '金额占比',
            },
            {
                source: '老客金额',
                target: '金额占比',
            },
            {
                source: '新客户',
                target: '客户人数',
            },
            {
                source: '老客户',
                target: '客户人数',
            },
            {
                source: '客户人数',
                target: '贡献状况',
            },
            {
                source: '金额占比',
                target: '贡献状况',
            }
        ],
    }],
}