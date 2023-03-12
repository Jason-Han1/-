let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF', '#0034ff'];
let chartData = [
    {
        name: '早1发',
        value: 40083,
        unit: '列',
    },
    {
        name: '正点发',
        value: 33974,
        unit: '列',
    },
    {
        name: '晚2发',
        value: 15400,
        unit: '列',
    },
    {
        name: '早点',
        value: 11021,
        unit: '列',
    },
    {
        name: '晚点',
        value: 30696,
        unit: '列',
    },
];
let sum = 0;
let pieSeries = [],
    lineYAxis = [];

// 数据处理
chartData.forEach((v, i) => {
    sum = sum + v.value;
});

// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '沪昆线到达晚点情况',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [60 - i * 10 + '%', 61.5 - i * 10 + '%'],
        center: ['40%', '50%'],
        label: {
            show: false,
        },
        itemStyle: {
            borderRadius: 20,
        },
        data: [
            {
                value: v.value,
                name: v.name,
                 itemStyle: {
                    normal: {
                        borderWidth: 5,
                        borderColor:color[i]
                    }
                }
            },
            {
                value: sum - v.value,
                name: '',
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        ],
    });
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [60 - i * 10 + '%', 61.5 - i * 10 + '%'],
        center: ['40%', '50%'],
        label: {
            show: false,
        },
        itemStyle: {
            borderCap: 'round',
            borderJoin: 'round',
        },
        data: [
            {
                value: sum,
                itemStyle: {
                    color: 'rgba(128,239,246,0.6)',
                },
            }
        ],
    });
    v.percent = ((v.value / sum) * 100).toFixed(1) + '%';
    lineYAxis.push({
        value: i,
        textStyle: {
            rich: {
                circle: {
                    color: color[i],
                    padding: [0, 5],
                },
            },
        },
    });
});

option = {
    color: color,
    grid: {
        top: '17%',
        bottom: '57%',
        left: '40%',
        containLabel: false,
    },
    legend: {
        show: true,
        right: '20%',
        top: 'middle',
        itemWidth: 10,
        itemHeight: 10,
        itemGap:  20,
        textStyle: {
            fontSize:  16,
            color:  '#000',
        },
    },
    series: pieSeries,
};
