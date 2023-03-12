var axisData = [];
option = {
    title: {
        text: '引用关系图'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    xAxis: {
        type : 'category',
        boundaryGap : false,
        data : axisData,
        show: false
    },
    yAxis: {
        type: '',
        show: false
    },
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            focusNodeAdjacency: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow', 'curveness'],
            edgeSymbolSize: [4, 6],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '1',
                x: 300,
                y: 300,
                symbolSize: 40,
                emphasis: {
                    lineStyle: {
                        width: 100
                    }
                }
            }, {
                name: '9',
                x: 700,
                y: 300,
                symbolSize: 22
            }, {
                name: '2',
                x: 800,
                y: 300,
                symbolSize: 20
            }, {
                name: '3',
                x: 700,
                y: 100,
                symbolSize: 20
            }, {
                name: '4',
                x: 700,
                y: 500,
                symbolSize: 20
            }, {
                name: '5',
                x: 800,
                y: 200,
                symbolSize: 20
            }, {
                name: '6',
                x: 200,
                y: 100,
                symbolSize: 40
            }, {
                name: '7',
                x: 100,
                y: 100,
                symbolSize: 20
            }, {
                name: '8',
                x: 300,
                y: 500,
                symbolSize: 20
            }, {
                name: '10',
                x: 1100,
                y: 300,
                symbolSize: 20
            }, {
                name: '11',
                x: 100,
                y: 200,
                symbolSize: 20
            }, {
                name: '12',
                x: 100,
                y: 500,
                symbolSize: 20
            }, {
                name: '13',
                x: 200,
                y: 400,
                symbolSize: 20
            }, {
                name: '14',
                x: 300,
                y: 200,
                symbolSize: 20
            }, {
                name: '15',
                x: 200,
                y: 200,
                symbolSize: 30
            }, {
                name: '16',
                x: 500,
                y: 300,
                symbolSize: 28
            }, {
                name: '17',
                x: 600,
                y: 200,
                symbolSize: 28
            }, {
                name: '18',
                x: 900,
                y: 400,
                symbolSize: 20
            }, {
                name: '19',
                x: 600,
                y: 100,
                symbolSize: 20
            }, {
                name: '20',
                x: 900,
                y: 100,
                symbolSize: 20
            }, {
                name: '21',
                x: 1100,
                y: 500,
                symbolSize: 20
            }, {
                name: '22',
                x: 800,
                y: 500,
                symbolSize: 20
            }, {
                name: '23',
                x: 900,
                y: 200,
                symbolSize: 20
            }, {
                name: '24',
                x: 1000,
                y: 200,
                symbolSize: 20
            }, {
                name: '25',
                x: 500,
                y: 200,
                symbolSize: 20
            }, {
                name: '26',
                x: 1000,
                y: 300,
                symbolSize: 20
            }, {
                name: '27',
                x: 1000,
                y: 500,
                symbolSize: 20
            }, {
                name: '28',
                x: 400,
                y: 400,
                symbolSize: 20
            }, {
                name: '29',
                x: 600,
                y: 400,
                symbolSize: 20
            }, {
                name: '30',
                x: 600,
                y: 500,
                symbolSize: 20
            }, {
                name: '31',
                x: 900,
                y: 500,
                symbolSize: 20
            }, {
                name: '32',
                x: 1200,
                y: 300,
                symbolSize: 20,
                itemStyle: {
                    normal: {
                        color: '#f1bb4c'
                    }
                }
            }, {
                name: '33',
                x: 1400,
                y: 500,
                symbolSize: 20,
                itemStyle: {
                    normal: {
                        color: '#f1bb4c'
                    }
                }
            }, {
                name: '34',
                x: 900,
                y: 500,
                symbolSize: 20
            }, {
                name: '2015',
                x: -100,
                y: 100,
                symbolSize: [36, 14],
                symbol: 'rect',
                emphasis: {
                    focusNodeAdjacency: false
                }
            }, {
                name: '2016',
                x: -100,
                y: 200,
                symbolSize: [36, 14],
                symbol: 'rect'
            }, {
                name: '2017',
                x: -100,
                y: 300,
                symbolSize: [36, 14],
                symbol: 'rect'
            }, {
                name: '2018',
                x: -100,
                y: 400,
                symbolSize: [36, 14],
                symbol: 'rect'
            }, {
                name: '2019',
                x: -100,
                y: 500,
                symbolSize: [36, 14],
                symbol: 'rect'
            }],
            // links: [],
            links: [{
                source: '2',
                target: '1',
                label: {
                    normal: {
                        show: false
                    }
                }
            }, {
                source: '1',
                target: '5',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '4',
                target: '1',
                lineStyle: {
                    normal: { 
                        curveness: 0.6
                    }
                }
            }, {
                source: '8',
                target: '1',
                lineStyle: {
                    normal: { 
                        curveness: 0.0
                    }
                }
            }, {
                source: '9',
                target: '1'
            }, {
                source: '1',
                target: '6',
                lineStyle: {
                    normal: { 
                        curveness: 0.2
                    }
                }
            }, {
                source: '5',
                target: '3',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '4',
                target: '2',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '2',
                target: '3',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '7',
                target: '6'
            }, {
                source: '12',
                target: '6',
                lineStyle: {
                    normal: { 
                        curveness: 0.6
                    }
                }
            }, {
                source: '10',
                target: '11',
                lineStyle: {
                    normal: { 
                        curveness: -0.86
                    }
                }
            }, {
                source: '13',
                target: '11'
            }, {
                source: '13',
                target: '15',
                lineStyle: {
                    normal: { 
                        curveness: 0.0
                    }
                }
            }, {
                source: '1',
                target: '10',
                lineStyle: {
                    normal: { 
                        curveness: 0.8
                    }
                }
            }, {
                source: '10',
                target: '20',
                lineStyle: {
                    normal: { 
                        curveness: -0.6
                    }
                }
            }, {
                source: '14',
                target: '19'
            }, {
                source: '16',
                target: '17',
                lineStyle: {
                    normal: { 
                        curveness: -0.3
                    }
                }
            }, {
                source: '1',
                target: '14'
            }, {
                source: '14',
                target: '17'
            }, {
                source: '11',
                target: '7'
            }, {
                source: '15',
                target: '7'
            }, {
                source: '12',
                target: '16',
                lineStyle: {
                    normal: {
                        curveness: -0.6
                    }
                }
            }, {
                source: '18',
                target: '16'
            }, {
                source: '18',
                target: '9'
            }, {
                source: '9',
                target: '15',
                lineStyle: {
                    normal: { 
                        curveness: -1.2
                    }
                }
            }, {
                source: '15',
                target: '20',
                lineStyle: {
                    normal: { 
                        curveness: 0.5
                    }
                }
            }, {
                source: '14',
                target: '6',
                lineStyle: {
                    normal: { 
                        curveness: 0.2
                    }
                }
            }, {
                source: '16',
                target: '6',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '17',
                target: '6',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '17',
                target: '3',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '9',
                target: '3',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '9',
                target: '17',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '8',
                target: '2',
                lineStyle: {
                    normal: { 
                        curveness: -0.8
                    }
                }
            }, {
                source: '13',
                target: '9',
                lineStyle: {
                    normal: { 
                        curveness: -0.8
                    }
                }
            }, {
                source: '7',
                target: '20',
                lineStyle: {
                    normal: { 
                        curveness: 0.2
                    }
                }
            }, {
                source: '17',
                target: '19',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '21',
                target: '18',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '21',
                target: '26',
                lineStyle: {
                    normal: { 
                        curveness: -0.3
                    }
                }
            }, {
                source: '22',
                target: '18',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '22',
                target: '24',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '23',
                target: '6',
                lineStyle: {
                    normal: { 
                        curveness: -0.8
                    }
                }
            }, {
                source: '23',
                target: '20',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '24',
                target: '20',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '25',
                target: '19',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '26',
                target: '5',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '26',
                target: '23',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '27',
                target: '9',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }, {
                source: '28',
                target: '25',
                lineStyle: {
                    normal: { 
                        curveness: 0.2
                    }
                }
            }, {
                source: '29',
                target: '17',
                lineStyle: {
                    normal: { 
                        curveness: 0
                    }
                }
            }, {
                source: '30',
                target: '20',
                lineStyle: {
                    normal: { 
                        curveness: -1.5
                    }
                }
            }, {
                source: '31',
                target: '26',
                lineStyle: {
                    normal: { 
                        curveness: -0.2
                    }
                }
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0.2
                }
            },
            emphasis: {
                    lineStyle: {
                        width: 3
                    }
                }
        }
    ]
};