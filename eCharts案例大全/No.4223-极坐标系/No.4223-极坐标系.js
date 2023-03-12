option = {
    angleAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        max: 1939 + 1430,
        startAngle: -90,
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        data: ['v', 'w', 'x', 'y', 'z'],
        z: 10,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    polar: {
        radius: ["27%", "75%"]
    },
    series: [
        {
            type: 'bar',
            barWidth: '70%',
            data: [
                { value: 1939, itemStyle: { color: '#ffd061' } },
                { value: 1939, itemStyle: { color: '#ff9c0b' } },
                { value: 1430, itemStyle: { color: '#fff96e' } },
            ],
            coordinateSystem: 'polar',
            roundCap: true,
            itemStyle: {
                borderColor: 'red',
                borderWidth: 0
            },
            showBackground: true,
            backgroundStyle: {
                color: '#516fbd'
            }
        },
        {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: [
                {
                    value: 335,
                    name: '进项',
                    itemStyle: { color: '#fff'}
                },
            ],
            label: {
                position: 'inner',
                verticalAlign: "middle",
                color: '#333',
                fontSize: 30,
                padding: [5, 5, 120, 5]
            },
            hoverAnimation: false,
        }
    ],
};
