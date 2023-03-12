var numberBackground = "/asset/get/s/data-1558089401788-vabbsuamA.png";

option = {
    grid: {
        left: '0',
        right: '0',
        top: '0',
        bottom: '0'
    },
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },
    series: getSeriesDatas(),
};

function getSeriesDatas() {
    let series = [{
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#3E789F']
                    ],
                    width: 2,
                },
            },
        },
        {
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#3E789F']
                    ],
                    width: 2,
                },
            },
        },
        {
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#022e5d']
                    ],
                    width: 200,
                },
            },
        },
        {
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#045d97']
                    ],
                    width: 2,
                },
            },
        },
        {
            axisLine: {
                lineStyle: {
                    color: Array(...Array(36)).map((val, index) => {
                        let color = '#0096fb';
                        if (index % 3 === 0) {
                            color = '#0096fb00';
                        }
                        return [index / 36, color];
                    }),
                    width: 4,
                },
            },
        },
        {
            clockwise: false,
            startAngle: 25,
            endAngle: 155,
            axisLine: {
                lineStyle: {
                    color: [
                        [0, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

                            offset: 0,
                            color: 'rgba(5,251,251,1)',
                        }, {
                            offset: 1,
                            color: 'rgba(38,197,254,0.00)',
                        }])],
                        [1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

                            offset: 0,
                            color: 'rgba(5,251,251,1)',
                        }, {
                            offset: 1,
                            color: 'rgba(38,197,254,0.00)',
                        }])],
                    ],
                    shadowColor: '#05fbfb', // 默认透明
                    shadowBlur: 10,
                    width: 4,
                },
            },
        },
    ];

    const radiusList = ['80%', '75%', '10%', '18%', '26%', '75%'];
    series = series.map((item, index, array) => {
        const publicSection = {
            type: 'gauge',
            radius: radiusList[index],
            detail: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
        };

        if (array.length !== (index + 1)) {
            Object.assign(publicSection, {
                startAngle: 359.99,
                endAngle: 0,
            });
        }

        return Object.assign(item, publicSection);
    });

    series.push({
        startAngle: 225,
        endAngle: -45,
        type: 'gauge',
        radius: '42%',
        min: 0,
        max: 6,
        splitNumber: 6,
        axisLine: {
            lineStyle: {
                color: [
                    [1, '#69aed1'],
                ],
                width: 2,
            },
        },
        axisTick: {
            show: true,
            length: 5,
            lineStyle: {
                color: '#0092ef',
            },
        },
        detail: {
            show: false,
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                color: '#0092ef',
            },
        },
        axisLabel: {
            show: false,
        },
        pointer: {
            show: false,
        },
    });

    series.push({
        name: '',
        type: 'gauge',
        startAngle: 225,
        endAngle: -45,
        radius: '58%',
        data: [0.000],
        min: 0,
        max: 6,
        splitNumber: 6,
        axisLine: {
            lineStyle: {
                color: [
                    [0, '#045d97'],
                    [1, '#045d97'],
                ],
                width: 40,
            },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        detail: {
            // backgroundColor: '#07263f50',
            backgroundColor: {
                image: numberBackground,
            },
            offsetCenter: [0, '84%'], // x, y，单位px
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#00f0ff',
                fontSize: 36,
            },
            formatter(value) {
                return value.toFixed(3);
            },
            padding: [10, 10, 15, 10],
        },
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 20,
            distance: -27,
        },
        pointer: {
            length: '92%',
        },
        itemStyle: {
            color: '#90ccff',
        },
    });

    series = series.map(item => Object.assign(item, {
        center: ['50%', '58%'],
    }));

    return series;
}

doAnimate();

function doAnimate() {
    const cardinalNumber = 0.1;
    let cur = getCurrent();
    let target = getTarget();

    function animate() {
        const data = option.series[option.series.length - 1].data;

        if (isEqual(cur, target)) {
            target = getTarget();
            setTimeout(animate, Math.random() * 5000);
        } else {
            let pow;
            if (cur > target) {
                pow = -1 * cardinalNumber;
            } else if (cur < target) {
                pow = cardinalNumber;
            }
            cur += pow;

            data[0] = cur;
            myChart.setOption(option, true);
            
            setTimeout(animate, 66);
        }
    }
    setTimeout(animate, 66);
}

function getTarget() {
    return (Math.random() * 6).toFixed(1);
}

function getCurrent() {
    const data = option.series[option.series.length - 1].data;

    return data[0];
}

function isEqual(a, b) {
    return Math.abs(a - b) < 0.01;
}