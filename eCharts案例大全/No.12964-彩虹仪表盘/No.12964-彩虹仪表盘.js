option = {
backgroundColor:'#transparent',
    title: {
        show: false
    },
    tooltip : {show: false,
        formatter: "{a}：{b}{c}%"
    },
    series: [{
        name: '彩虹仪表盘',
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "90%",
        center: ["50%", "50%"],
        axisLine: {
            show: true,
            lineStyle: {
                width: 20,
                shadowBlur: 0,
                color: [
              [0.05,'#cf3'],
              [0.10,'#9f3'],
              [0.15,'#6f3'],
              [0.20,'#3f3'],
              [0.25,'#3f6'],
              [0.30,'#3f9'],
              [0.35,'#3fc'],
              [0.40,'#3ff'],
              [0.45,'#3cf'],
              [0.50,'#39f'],
              [0.55,'#36f'],
              [0.60,'#33f'],
              [0.65,'#63f'],
              [0.70,'#93f'],
              [0.75,'#c3f'],
              [0.80,'#f3f'],
              [0.85,'#f3c'],
              [0.90,'#f39'],
              [0.95,'#f36'],
              [1,'#f33']
                ]
            }
        },
        axisTick: {
            show: true //小刻度
        },
        axisLabel: {
            show: false,
            textStyle: {
            fontSize: 12
            }
        },
        splitLine: {
            show: true
        },
       pointer: {
            show: true,
            width: "2%",
            length: '90%',
            color: "red"
        },
       title: {
            offsetCenter: [0, '-55%'],
            textStyle: {
            fontSize: 12,
            color:'#fff'
            }
            },
        detail: {
            formatter: '{value}%',
            offsetCenter: ['0', '-30%'],
            textStyle: {
            fontSize: 24
            }
        },
        data: [{value: 88, name: '销售目标完成率'}]
    }]
};