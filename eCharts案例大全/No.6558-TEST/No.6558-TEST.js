var colorList = [
    [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
        '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
        '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
        '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
        '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]
];

option = {
    tooltip: {
    },
    color: ['#fff', '#fff', '#fff'],
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 500,
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [{
            name: "A",
            value: 56,
            symbolSize: 58,
            draggable: true,
            label: {
                show: true,
                color: '#fff',
                fontSize: '12',
                lineHeight: 15,
                formatter() {
                    return 56 + '%' + '\n' + 'A';
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: '1',
                    borderType: 'solid',
                    borderColor: '#00ffff',
                    shadowColor: 'rgba(0, 0, 0, .6)',
                    shadowBlur: 10,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgba(67, 186, 255, 0)',
                    }, {
                        offset: 1,
                        color: 'rgb(67, 186, 255)'
                    }])
                }
            }
        }, {
            name: "B",
            value: 35,
            symbolSize: 67,
            draggable: true,
            label: {
                show: true,
                color: '#fff',
                fontSize: '14',
                fontFamily: 'Lato',
                lineHeight: 15,
                formatter() {
                    return 35 + '%' + '\n' + 'B';
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: '1',
                    borderType: 'solid',
                    borderColor: '#00ffff',
                    shadowColor: 'rgba(0, 0, 0, .6)',
                    shadowBlur: 10,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgba(27, 96, 255, 0)',
                    }, {
                        offset: 1,
                        color: 'rgb(27, 96, 255)'
                    }])
                }
            }
        }, {
            name: "C",
            value: 5,
            symbolSize: 67,
            draggable: true,
            label: {
                show: true,
                color: '#fff',
                fontSize: '14',
                fontFamily: 'Lato',
                lineHeight: 15,
                formatter() {
                    return 5 + 'T' + '\n' + 'C';
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: '1',
                    borderType: 'solid',
                    borderColor: '#00ffff',
                    shadowColor: 'rgba(0, 0, 0, .6)',
                    shadowBlur: 10,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgba(48, 191, 191, 0)',
                    }, {
                        offset: 1,
                        color: 'rgb(48, 191, 191)'
                    }])
                }
            }
        }, {
            name: "D",
            value: 10,
            symbolSize: 50,
            draggable: true,
            label: {
                show: true,
                color: '#fff',
                fontSize: '14',
                fontFamily: 'Lato',
                lineHeight: 15,
                formatter() {
                    return 10 + 'M' + '\n' + 'D';
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: '1',
                    borderType: 'solid',
                    borderColor: '#00ffff',
                    shadowColor: 'rgba(0, 0, 0, .6)',
                    shadowBlur: 10,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgba(0, 166, 166, 0)',
                    }, {
                        offset: 1,
                        color: 'rgb(0, 166, 166)'
                    }])
                }
            }
        }, {
            name: "E",
            value: 4730,
            symbolSize: 70,
            draggable: true,
            label: {
                show: true,
                color: '#fff',
                fontSize: '14',
                fontFamily: 'Lato',
                lineHeight: 15,
                formatter() {
                    return 90 + '%' + '\n' + 'E';
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: '1',
                    borderType: 'solid',
                    borderColor: '#00ffff',
                    shadowColor: 'rgba(0, 0, 0, .6)',
                    shadowBlur: 10,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgba(64, 255, 255, 0)',
                    }, {
                        offset: 1,
                        color: 'rgb(64, 255, 255)'
                    }])
                }
            }
        }, {
            name: "F",
            value: 45,
            symbolSize: 55,
            draggable: true,
            label: {
                show: true,
                color: '#fff',
                fontSize: '14',
                fontFamily: 'Lato',
                lineHeight: 15,
                formatter() {
                    return 45 + '%' + '\n' + 'F';
                }
            },
            itemStyle: {
                "normal": {
                    borderWidth: '1',
                    borderType: 'solid',
                    borderColor: '#00ffff',
                    shadowColor: 'rgba(0, 0, 0, .6)',
                    shadowBlur: 10,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgba(84, 136, 255, 0)',
                    }, {
                        offset: 1,
                        color: 'rgb(84, 136, 255)'
                    }])
                }
            }
        }, ]
    }]
}