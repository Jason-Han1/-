let icon = 'path://M512.584639,219.893708c40.41173,0.258019,73.19961-32.274913,73.199609-72.557634,0-40.025725-32.78788-72.559681-73.199609-72.559681-40.473163,0-73.196538,32.533956-73.196538,72.559681,0,40.089206,32.723375,72.557634,73.196538,72.557634z,m73.330666,16.396499H439.129058c-55.266258,0-91.39098,48.28336-91.390981,94.203594v220.945238c0,42.847553,60.780905,42.847553,60.780905,0V347.144224h11.782872v555.564273c0,59.179548,82.417649,57.316077,84.337434,0V582.569248h15.696162V902.96754c3.391108,60.650871,84.340506,54.817796,84.340506-0.258019V347.144224h9.800631v204.234406c0,42.837314,62.696594,42.837314,62.696594,0V330.433391c0.126962-45.72979-36.116531-94.143184-91.257876-94.143184z'

option = {
    backgroundColor: '#012248',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        'formatter': '{b0}: {c0}%'
    },
    grid: {
        containLabel: true,
        height: '200px',
        width: '500px',
        left: 'center',
        top: 'center',
    },
    xAxis: {
        max: 100,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['男', '女'],
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            // margin: 10,
            fontSize: 20,
            color: 'white'
        },
        axisPointer: {
            label: {
                show: true,
                margin: 100
            }
        }
    },
    series: [{
            type: 'pictorialBar',
            symbolRepeat: 'fixed',
            symbolMargin: '6!',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [3, 0],
                    formatter: (param) => {
                        return (param.value).toFixed(0) + '%'
                    },
                    textStyle: {
                        fontSize: 20,
                        color: 'white'
                    }
                }
            },
            symbolClip: true,
            symbolSize: [14, 30],
            symbolPosition: 'start',
            // symbolOffset: [
            //   10,
            //   0
            // ],
            symbolBoundingData: 100,
            data: [{
                value: 50,
                symbol: icon,
                itemStyle: {
                    color: '#1DDBF9'
                }
            }, {
                value: 40,
                symbol: icon,
                itemStyle: {
                    color: '#ff5983'
                }
            }],
            z: 10
        },
        {
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    opacity: 0.2
                }
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '6!',
            symbolSize: [14, 30],
            symbolBoundingData: 100,
            symbolPosition: 'start',
            // symbolOffset: [
            //   10,
            //   0
            // ],
            data: [{
                value: 100,
                symbol: icon,
                itemStyle: {
                    color: '#1DDBF9'
                }
            }, {
                value: 100,
                symbol: icon,
                itemStyle: {
                    color: '#ff5983'
                }
            }],
            z: 5
        }
    ]
}