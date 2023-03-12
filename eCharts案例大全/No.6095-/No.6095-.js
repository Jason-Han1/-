option = {
    series: [{
        type: 'gauge',
        splitNumber: 5,
        radius: '65%',
        min: 0,
        max: 100,
        pointer: {
            show: true,
            width: 5,
            length: "60%"
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                color: [
                    [0.3, "#4B95F3"],
                    [0.7, "#55D4A1"],
                    [1, "#FEC279"],
                ],
            },
        },
        axisLabel: {
            show: true,
            color: "#656565",
            fontSize: 15,
            distance: -55,
        }, //刻度标签。
        axisTick: {
            show: true,
            splitNumber: 5,
            lineStyle: {
                color: "#fff",
                width: 2,
            },

        }, //刻度样式            
        splitLine: {
            show: true,
            length: "28%",
            lineStyle: {
                color: "#fff",
                width: 2,
            },
        }, //分隔线样式
        detail: {
            show: false
        },
        title: {
            show: false
        },
        data: [{
            value: 50,
            name: '占比'
        }],

    }, {
        type: 'pie',
        radius: ['50%', '50%'],
        center: ['50%', '75%'],
        hoverAnimation: false,
        data: [{
                name: '',
                value: 1,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    color: '#fff'
                }
            },
            { //画中间的图标
                name: '',
                value: 0,
                label: {
                    position: 'inside',
                    backgroundColor: '#fff',
                    borderRadius: 7,
                    padding: 3,
                    borderWidth: 0,
                    borderColor: '#fff'

                }
            },
        ]
    }]
};