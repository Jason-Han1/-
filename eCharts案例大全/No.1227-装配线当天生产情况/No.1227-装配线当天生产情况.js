option = {
    grid: {
        show: 'true',
        borderWidth: '0',
        height: '80%',
        width: '80%',
        x: '12%',
        // y:"20%",
    },
    title: {
        text: '装配线当天生产情况',
        left: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: '#fff',
        },
    },
    legend: {
        top: 40,
        right: 50,
        textStyle: {
            color: '#fff',
            fontSize: 22,
        },
        itemGap: 30,
        itemWidth:40,
        itemHeight: 14,
    },
    backgroundColor: '#121B2C', //背景色
    xAxis: {
        show: false, //是否显示x轴
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true, //让y轴数据逆向
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'lighter',
                    fontSize: 18,
                },
            },
            splitLine: { show: false }, //横向的线
            axisTick: { show: false }, //y轴的端点
            axisLine: { show: false }, //y轴的线
            data: ['装配线-1', '装配线-2', '装配线-3', '装配线-4', '装配线-5', '装配线-6'],
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '18',
                },
                formatter: function (value) {
                    return value + ' %';
                },
            },
            data: [80, 80, 80, 80, 80, 80],
        },
    ],
    series: [
        {
            name: '产出',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: 'rgb(112,182,5)',
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    color: 'black',
                    fontSize: 14,
                },
            },
            barWidth: 30,
            data: [800, 800, 800, 800, 800, 800],
        },
        {
            name: '计划数',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: 'rgb(240,160,35)',
                },
            },
            label: {
                normal: {
                    show: true,
                    padding: [0, 0, 0, 670],
                    color: 'black',
                    fontSize: 14,
                },
            },
            barGap: '-100%',
            z: 0,
            barWidth: 30,
            data: [1000, 1000, 1000, 1000, 1000, 1000],
        },
    ],
};
