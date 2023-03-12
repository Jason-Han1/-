     var option = {
            title: {
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: 20
                }
            },
            tooltip: {
                trigger: 'item'
            },
            color: [
                '#58b2ff', '#68d4b2', '#7380ff', '#fdd56a', '#fdb36a', '#fd866a', '#9e87ff'
            ],
            series: [{
                type: 'pie',
                center: ['50%', '50%'],
                radius: ['40%', '65%'],
                clockwise: true,
                avoidLabelOverlap: true,
                hoverOffset: 15,
                itemStyle: {
                    normal: {

                    }
                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{a|{b}：{d}%}\n{hr|}',
                    rich: {
                        a: {
                            padding: [0,0,-10,0]
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 20,
                        length2: 30,
                        lineStyle: {
                            width: 1
                        }
                    }
                },
                data: [{
                    'name': '数据1',
                    'value': 1.45
                }, {
                    'name': '数据2',
                    'value': 2.93
                }, {
                    'name': '数据3',
                    'value': 3.15
                }, {
                    'name': '数据4',
                    'value': 4.78
                }, {
                    'name': '数据5',
                    'value': 5.93
                }, {
                    'name': '数据6',
                    'value': 2.73
                }, {
                    'name': '数据7',
                    'value': 5.73
                }],
            }]
        };