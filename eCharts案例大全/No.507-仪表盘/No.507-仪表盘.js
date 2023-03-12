option = {
    backgroundColor: '#151515',
    grid: {
        right: '5%',
        left: '5%',
        top: '5%',
        bottom: '5%',
        borderWidth: 1,
        containLabel:true
    },
    xAxis: {
        show: false,
        type: 'category',
        data: ['Mon'],
    },
    yAxis: {
        show: false,
        type: 'value',
    },
    series: [
        {
            name: 'line',
            type: 'gauge',
            radius: '80%',
            min: 0,
            max: 4,
            splitNumber: 4,
            startAngle: 180,
            endAngle: 0,
            zlevel: 0,
            data: [
                {
                    value: 2.21,
                    name: '实时PUE',
                },
            ],

            detail: {
                color: '#fff',
            },
            title: {
                // 仪表盘标题。
                show: true, // 是否显示标题,默认 true。
                color: '#9d9d9d',
            },
            legend: {
                padding: 0,
                margin: 0,
            },
            pointer: {
                icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAABECAYAAAC1ftTmAAADfklEQVRIiYWWPW8cRRjHf7Pvu3e+u/iOJDIhWHGkvCiJkFAKmhQUFFSpI/gA0IJExVeAb5KSComWihY5spAiIseKrLzd2efz7c5QzOz52c3s8pdG3vHub+Z5m2dOfXH7IQ0Zo3SW3X/96NHP7+/dW+48ffpTNJ+/NEEAQKCzDDlMmoblaPTx/Natz8vx+HGxv//ERNFmvUAnCY0Rx3o9HleL23cKYKucTL5ktZpSllCWBKosaYzzc63TdL747MGV9XRKlWVKGXNW7xC9e9j0Qa3LaHlz9ybbKeiqqrL8ODw9OTFKWeDFN982ndZmpof516xgdf3T5XLvxr/FwUGik+QcILr74w8Xq5cly93d5Pl332/nv/1O8Wy/TI6PT6L5vKodj+TiJgxJj45Od3/95UDBV+rsLIwXi0ynabXxwTQcUKj1usoOD9+aIEBnWayjKMPZb4E4buYNCtL0mkviGngn3zdMciow5oZ7PgGO5MvAA6RAId4n8jsfMAZK95wAE0D3AaH4vwLO5EsfUABX3XPlTOwFhsA19zwAZn2AArbFPALyPmAAjID3bn7qnoddQOhsVmK+JXdpAwbr9Jabx26BsgtYY2OPACrgTRfwEXBdzLXbYbsLGACXxDwArtBTGjEXDteqsL55gQ/iji2NQd8OsuQNNgfTLmDH2VxLubHqAoYtAGzyTn2AwiZs1QJyROQkEOE/sikimRKoj2M7rBo49wGJs3/UAhTiEEnAAJc9O4y6fJjSLAu5c8PuWhmiBISW9JSGTzE2P6oNpLQOvFOODbdpA0MuOp6UQvRXCexgu54PmPiAUccOsy7AYM90W7EbHwBZxw5vsOWRtIGhXEkowFZxJoER8En9z5Zy7JkoJVDnwLdDAsyxGW8Avo/BhnXmzNoAoRtdKnC3UA1EPTuADXmjNGZc3DpdSiUwQWSzJY09WA0fhnT7EDioEda8BwBbMmsJyKvWp0u1yTLT7SYslbRNuozo0P9n0gTbMXwNoFaG64p1tyvo9+Gq+4YAe8Mk9Edp03MD7A2T42/EtRaI87CFuOk7FGODogJgD3+LlBpgs20Ct3pXHdXSuMs9wNquez+3QRnVQEB/lsE2uU1Yx/QfHrBmZzhz9np2qBvbgfsbRdiyCHFdAXiFPfjPsL9Zj4E/gb8AHQGHwB/Ac+Af4AXwN/AWeIn4rQTwH5Mi2p/qCBF5AAAAAElFTkSuQmCC",
                show: true,
                length: '50%',
                radius: '20%',
                width: 5, //指针粗细
                itemStyle: {
                    color: '#303747',
                },
            },
            anchor: {
                show: true,
                showAbove: true,
                size: 24,
                itemStyle: {
                    color: '#14daf6',
                },
            },

            markLine: {
                precision: 2,
            },
            axisTick: {
                show: false,
                splitNumber: 5,
                lineStyle: {
                    width: 2,
                },
                length: -8,
            },
            splitLine: {
                //刻度样式
                show: true,
                length: 25,
                distance: 0,
                lineStyle: {
                    color: 'auto',
                    width: 5,
                },
            },
            axisLabel: {
                show: true,
                distance: -60,
                color: '#1a979e',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 5,
                    color: [
                        [0, '#409bc0'],
                        [0.25, '#5a97a0'],
                        [0.25, '#2a95b5'],
                        [0.35, '#698e7c'],
                        [0.45, '#846c4b'],
                        [0.5, '#9c6524'],
                        [0.6, '#985128'],
                        [0.75, '#a35c3b'],
                        [0.85, '#933c3c'],
                        [1, '#a22b3e'],
                    ],
                },
            },
        },
        {
            name: 'axisTick',
            type: 'gauge',
            radius: '75%',
            min: 0,
            max: 4,
            splitNumber: 5,
            startAngle: 180,
            endAngle: 0,
            zlevel: 0,
            data: [
                {
                    value: 2,
                    name: '压力(Pa)',
                    itemStyle: {
                        color: '#fff',
                    },
                },
            ],
            detail: {
                show: false,
            },
            legend: {
                padding: 0,
                margin: 0,
            },
            pointer: {
                show: false,
                length: 50,
                radius: '20%',
                width: 5, //指针粗细
            },
            title: {
                // 仪表盘标题。
                show: false, // 是否显示标题,默认 true。
            },
            markLine: {
                precision: 2,
            },
            axisTick: {
                show: true,
                splitNumber: 10,
                length: 20,
                lineStyle: {
                    width: 2,
                    color: '#19273b',
                },
            }, //刻度样式

            axisLabel: {
                show: false,
                distance: -70,
                color: '#fff',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: [
                        [0.25, '#E71A6D'],
                        [0.5, '#F88168'],
                        [0.75, '#FBF76B'],
                        [1, '#70C27E'],
                    ],
                },
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: 'auto',
                    width: 5,
                },
            },
        },
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['85%', '87%'],
            startAngle: 0,
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: '1',
                    value: 50,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0,
                        },
                    },
                },
                {
                    name: '2',
                    value: 1.2,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 10,
                        },
                    },
                },
                {
                    name: '1',
                    value: 10.5,
                    itemStyle: {
                        normal: {
                            color: '#0fdbf2',
                            borderWidth: 0,
                            borderColor: 'rgba(0,0,0,0)',
                        },
                    },
                },
                {
                    name: '2',
                    value: 1.7,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 10,
                        },
                    },
                },
                {
                    name: '1',
                    value: 11,
                    itemStyle: {
                        normal: {
                            color: '#0fdbf2',
                            borderWidth: 0,
                            borderColor: 'rgba(0,0,0,0)',
                        },
                    },
                },
                {
                    name: '2',
                    value: 1.2,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 10,
                        },
                    },
                },
                {
                    name: '1',
                    value: 11,
                    itemStyle: {
                        normal: {
                            color: '#0fdbf2',
                            borderWidth: 0,
                            borderColor: 'rgba(0,0,0,0)',
                        },
                    },
                },
                {
                    name: '2',
                    value: 1.7,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 10,
                        },
                    },
                },
                {
                    name: '1',
                    value: 10.5,
                    itemStyle: {
                        normal: {
                            color: '#0fdbf2',
                            borderWidth: 0,
                            borderColor: 'rgba(0,0,0,0)',
                        },
                    },
                },
                {
                    name: '2',
                    value: 1.2,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 10,
                        },
                    },
                },
            ],
        },
    ],
};
