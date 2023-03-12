var data = {
    insideData: [{
        name: '机械',
        value: 75
    }, {
        name: '车辆',
        value: 25
    }],
    outsideData: [{
        name: '推土机',
        value: 40
    }, {
        name: '挖掘机',
        value: 35
    }, {
        name: '车内车辆',
        value: 25
    }]
}

option = {
    title: {
        text: '机械分类\n占比',
        x: 'center',
        y: 'center'
    },
    series: [{
            type: 'pie',
            data: data.insideData,
            color: ['#78E0FD', '#FED1CB'],
            label: {
                position: 'inside',
                formatter: '{b} {d}%',
                color: 'black',
                fontSize: 18,
                align: 'left'
            },
            radius: [60, 120],
        },
        {
            type: 'pie',
            data: data.outsideData,
            color: ['#46D0AE', '#2482C2', '#FFA99C'],
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 90,
                    lineStyle: {
                        color: '#d3d3d3'
                    },
                    align: 'right'
                },
                color: '#000',
                emphasis: {
                    show: true
                }
            },
            label: {
                normal: {
                    color: 'black',
                    formatter: function(params) {
                        var str = ''
                        str = '{b|■}{a|' + params.name + ' }\n{c|' + params.percent + '%}'
                        console.log(params)
                        return str
                    },
                    rich: {
                        a: {
                            fontSize: 16,
                            color: '#555',
                            align: 'center'
                        },
                        b: {
                            fontSize: 30,
                            align: 'center'
                        },
                        c: {
                            padding: [0, 0, 0, 0],
                            fontSize: 20,
                            color: 'black',
                            fontWeight: 'bold',
                            align: 'center'
                        }
                    }
                }
            },
            radius: [120, 180],
        },
    ],
    backgroundColor: '#FFFFFF',
};