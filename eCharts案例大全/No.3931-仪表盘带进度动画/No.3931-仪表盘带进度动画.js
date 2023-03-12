var value = 67;
option = {
    backgroundColor: '#031245',
    tooltip: {
        trigger: 'item'
    },
    angleAxis: {
        show: false,
        max: 100 * 360 / 270,
        type: 'value',
        startAngle: 225,
        splitLine: {
            show: false
        }
    },
    //圆环宽度
    barMaxWidth: 30,
    radiusAxis: {
        show: false,
        type: 'category',
    },

    polar: {
        //圆环大小
        radius: "160%"
    },
    series: [{
            type: 'bar',
            data: [{
                value: value,
                itemStyle: {
                    color: '#0e9cff'
                },
            }],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 2,
            animationDuration: 2000
        },
        { //底层圆环
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#0d4698'
                }
            }],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1,
            animation: false
        },
        {

            type: 'gauge',
            radius: "75%",
            //起始
            startAngle: 225,
            //终止
            endAngle: -45,
            axisLine: {
                show: false,
            },
            splitLine: {
                show: 0,
                length: 15
            },
            axisTick: {
                show: 1,
                lineStyle: {
                    color: "#42e4fb"
                }
            },
            axisLabel: {
                show: 1,
                fontSize: 14,
                distance: 0,
                color: "#42e4fb"
            },
            animationDuration: 2000,
            pointer: {
                show: 1,
                length: '60%',
                width: 10
            },
            itemStyle: {
                color: "#2a70b9"
            },
            detail: {
                show: 0
            },
            data: [{
                value: value,
                name: ''
            }]
        }
    ]
};