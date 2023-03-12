// 因为echarts版本升级，导致显示出问题
// 把该代码放在echarts官网demo上即可完整展示

const value = 47.85;
option = {
    backgroundColor: '#001533',
    title: [
        {
            text: '节能',
            left: '50%',
            top: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: '14',
                fontWeight: '400',
                color: '#ffffff'
            },
        }, 
        {
            text: `${value}%`,
            left: '50%',
            top: '50%',
            textAlign: 'center',
            textStyle: {
                fontSize: '24',
                fontWeight: '400',
                color: '#ffffff'
            },
        }, 
        {
            text: `hz`,
            left: '50%',
            top: '55%',
            textAlign: 'center',
            textStyle: {
                fontSize: '18',
                fontWeight: '400',
                color: '#ffffff'
            },
        },
    ],
    series: [
        {
            type: 'gauge',
            name: '外圈',
            startAngle: 90,
            endAngle: -270,
            center: ['50%', '50%'],
            radius: 96,
            min: 0,
            max: 100,
            axisLine: { 
                lineStyle: {
                    color: [
                        [1, 'rgba(0, 0, 0, 0.3)']
                    ],
                    width: 1
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
        },
        {
            type: 'pie',
            name: '背景圆',
            radius: [0, 84],
            silent: true,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0.2)'
                }
            },
            data: [100]
        },
        {
            // 仪表刻度
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            radius: 100,
            splitNumber: '64',
            axisLine: {
                show: false,
            },
            splitLine: {
                length: 12,
                lineStyle: {
                    width: 2,
                    color: 'rgba(255, 255, 255, 0.2)',
                } //刻度节点线
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
        },
        {
            type: "gauge",
            name: "绿色进度条",
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 100,
            data: [{
                value: 50,
                // name: 'Percent'
            }],
            radius: 63,
            axisLine: {
                show: false
            },
            progress: {
                show: true,
                width: 4,
                itemStyle: {
                    color: "#09D141"
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false
            },
            pointer: {
                show: false,
            }
        }
    ]
};