var value = '75';
var subtext = `样本量：2233`;
var max = 100;
option = {
    title: {
        show: true,
        text: value || '仪表盘',
        subtext,
        textAlign: 'center',

        subtextStyle: {
            align: 'center',
            fontSize: 40,
            left: 18,
            color: '#7f7f7f',
        },
        left: 550,
        bottom: 350,
        textStyle: {
            color: '#414957',
            fontSize: 50,
            align: 'center',
            textAlign: 'center',
            fontFamily: '"Microsoft Yahei","微软雅黑"',
        },
    },
    angleAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        min: 0,
        max: 132,
        // boundaryGap: ['0', '10'],
        startAngle: 225,
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        data: ['a', 'b', 'c'],
        z: 10,
    },
    polar: {
        radius: '105%',
    },
    series: [
        // 粉色圆
        {
            type: 'bar',
            data: [, , value],
            z: 1,
            coordinateSystem: 'polar',
            barMaxWidth: 24.2,
            name: '警告事件',
            roundCap: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                    offset: 0,
                    color: 'pink',
                },
                {
                    offset: 1,
                    color: '#DE585D',
                },
            ]),
            barGap: '-100%',
        },
        // 灰色的圆
        {
            type: 'bar',
            data: [0, 0, max],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 24.2,
            name: 'C',
            roundCap: true,
            color: '#F1F3F5',
            barGap: '-100%',
        },
        // 里面刻度
        {
            type: 'gauge',
            radius: '75%',
            splitNumber: 4,
            max: max,

            detail: {
                show: false,
            },
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 20,
                    opacity: 0, //刻度背景宽度
                },
            },
            splitLine: {
                show: false,
                length: 22, //长刻度节点线长度
            },
            axisTick: {
                show: true,
                lineStyle: {
                    width: 22,
                    color: 'pink',
                },
                length: 10,
                splitNumber: 6,
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
    ],
    tooltip: {
        show: false,
    },
};
