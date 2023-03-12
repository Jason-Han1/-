var dataV = 80;
var option = {
    backgroundColor: '#000022',
    title: [{
        text: dataV + "%",
        x: 'center',
        top: '45%',
        textStyle: {
            color: "rgba(255,216,32,1)",
            fontSize: 30, //表盘上的标题文字大小
            fontWeight: 400,
            fontFamily: 'PingFangSC'
        },
    }, {
        text: '支出',
        x: 'center',
        top: '55%',
        textStyle: {
            color: "rgba(255,216,32,1)",
            fontSize: 30, //表盘上的标题文字大小
            fontWeight: 400,
            fontFamily: 'PingFangSC'
        },
    }],
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        name: '内仪表盘',
        type: 'gauge',
        center: ['50%', '50%'],
        radius: "40%",
        startAngle: 220,
        endAngle: -40,
        min: 0,
        max: 100,
        splitNumber: 1,
        pointer: {
            show: false //指针
        },
        axisLine: { //大刻度
            show: true,
            lineStyle: {
                width: 40,
                color: [
                    [dataV / 100, new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(255,167,10,1)',
                        }, {
                            offset: 0.5,
                            color: 'rgba(255,216,32,1)',
                        }, ]
                    )],
                    [1, "#314476"]
                ]
            }
        },
        axisTick: {
            show: false //小刻度
        },
        splitLine: { //隐藏0和100旁边的白色刻度
            show: false
        },
        axisLabel: {
            show: true,
            distance: -15, //距离刻度的距离
            lineHeight: -25,
            color: '#A9D1EC',
            formatter: function(v) {
                if (v == "") {
                    return '\xa0' + v;
                }
                return v;
            }
        },
        detail: {
            show:false,
            textStyle: {
                fontSize: 24,
                fontWeight: '700',
                color: 'rgba(255,167,10,1)'
            },
            offsetCenter: [0, '50%'],
            formatter: (value) => {
                return [
                    `${value}%`
                ]
            },
        },
          pointer: {
            show: false,
            length: '120%',
            radius: '20%',
            width: 10, //指针粗细
        },
        animationDuration: 2000,
        animationDurationUpdate: 1000,
        data: [{
            value: dataV
        }]

    }]
};