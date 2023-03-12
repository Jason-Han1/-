var convertRatePostion = 10;
option = {
    backgroundColor: "#fff",
    height: 350,
    xAxis: {
        min: 0,
        max: 100,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "#eee",
                type: "dotted"
            }
        },
        axisLabel: {
            formatter: "{value}%",
            color: "#aaa",
            fontSize: 10
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        data: ['进入首页', '0a', '开始注册', 'ab', '填写手机号', 'bc', '发送验证码', 'cd', '注册成功'],
        inverse: true,
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 1,
            fontSize: 11
        }
    },
    animationDurationUpdate: 1200,
    series: [{
        type: 'bar',
        z: 9,
        itemStyle: {
            normal: {
                color: 'rgb(255, 184, 163, 0.3)',
                //color: { image: img1 }
            }
        },
        silent: true,
        barWidth: 40,
        barGap: '-100%', // Make series be overlap
        data: [100, null, 100, null, 90, null, 45, null, 21]
    }, {
        type: 'bar',
        barWidth: 40,
        z: 10,
        data: [100, null, 90, null, 45, null, 21, null, 11],
        itemStyle: {
            color: '#00a0e9'
        },
        markPoint: {
            symbol: 'triangle',
            symbolSize: [40, 25],
            symbolRotate: 180,
            label: {
                position: "insideTop",
                distance: 3,
                fontSize: 8
            },
            itemStyle: {
                color: "#bbb",
            },
            data: [{
                    value: '90%',
                    xAxis: convertRatePostion,
                    yAxis: '0a'
                },
                {
                    value: '50%',
                    xAxis: convertRatePostion,
                    yAxis: 'ab'
                },
                {
                    value: '45%',
                    xAxis: convertRatePostion,
                    yAxis: 'bc'
                },
                {
                    value: '50%',
                    xAxis: convertRatePostion,
                    yAxis: 'cd'
                }
            ]
        }
    }, ]
};