const dataArr = [
    {
        value: 91,
        name: '综合健康评分',
    },
];
const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#1f79b6', // 0% 处的颜色
    },
    {
        offset: 1,
        color: '#0dd2db', // 100% 处的颜色
    },
]);
const colorSet = [
    [0.91, color],
    [1, '#15337C'],
];
const rich = {
    white: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '500',
    },
    bule: {
        fontSize: 120,
        fontFamily: 'DINBold',
        color: '#fff',
        fontWeight: '700',
    },
    radius: {
        width: 350,
        height: 80,
        // lineHeight:80,
        borderWidth: 1,
        borderColor: '#0092F2',
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0],
    },
};
option = {
    backgroundColor: '#0E1327',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },

    series: [
        {
            type: 'gauge',
            radius: '70%',
            startAngle: '225',
            endAngle: '-45',
            min: 0,
            max: 1000,
            pointer: {
                show: false,
            },
            detail: {
                // formatter: function (value) {
                //     var num = Math.round(value);
                //     return '{bule|' + num + '}{white|分}';
                // },
                // rich: rich,
                offsetCenter: ['0%', '0%'],
            },
           
            data: dataArr,
            title: {
                show: true,
                color: '#fff',
                offsetCenter: ['0', -100],
                fontSize: 20
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 45,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 35,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: true,
                color:'#fff',
                formatter: function (value) {
                    if (value === 0 ||  value === 1000) {
                        return value;
                    }
                },
            },
        },
    ],
};
