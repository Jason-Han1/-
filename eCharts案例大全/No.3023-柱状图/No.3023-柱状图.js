option = {
    title: {
        text: '(万辆)',
        left: '90%',
        top: '0%',
        textStyle: {
            //样式大小
            color: '#ccc',
            fontSize: '14px',
        },
    },
    legend: {
        // 	orient: 'vertical',//图例垂直
        left: 'left', //图例位置
        itemGap: 20, //图例之间的间隔
        icon: 'circle', //图例形状
        textStyle: {
            fontSize: 16, //字体大小
            padding: [10, 10, 10, 10], //字体与图例之间的间隔
        },
    },
    //图的位置
    grid: {
        left: '15%',
        top: '15%',
        bottom: '12%',
        right: '8%',
    },
    xAxis: {
        axisTick: {
            show: false, //是否展示x轴刻度线
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {
        name: '(万/辆)',
        min: 0,
        max: 100,
        maxInterval: 50, //间隔数量
        splitNumber: 2, //显示刻度数量,
        nameTextStyle: {
            //调整y轴单位位置
            padding: [10, 20, 0, 50],
        },
        axisLine: {
            show: true, //是否展示Y轴线
        },
        splitLine: {
            show: false, //是否展示网格线,
            lineStyle: {
                color: ['#315070'], //颜色
                width: 1,
                type: 'solid', //网格线的类型
            },
        },
    },
    series: [
        {
            type: 'bar',
            name: '蓝色',
            barWidth: 20, //柱状图的宽度设置
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            type: 'bar',
            name: '绿色',
            barWidth: 15, //柱状图的宽度设置
            data: [120, 152, 291, 249, 190, 300, 210],
        },
    ],
};
