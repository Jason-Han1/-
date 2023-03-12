var data = [30, 50, 40, 80, 30, 50, 40, 80, 30, 50, 40, 80, 30, 50, 40, 80];
var ydata = [
    '昆明',
    '保山',
    '曲靖',
    '楚雄',
    '昭通',
    '大理',
    '普洱',
    '红河',
    '玉溪',
    '文山',
    '德宏',
    '版纳',
    '丽江',
    '迪庆',
    '怒江',
    '临沧',
];
option = {
    backgroundColor: 'rgba(0,0,0,1)',
    tooltip: {},
    xAxis: {
        type: 'category',
        data: ydata,
        max: 15,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            lineHeight: 50,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
        },
    },
    yAxis: {
        max: 150,
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    grid: {
        top: '10',
        left: '5%',
        containLabel: true,
    },
    series: [
        {
            // current data
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbolClip: true,
            symbolSize: [10, 5],
            symbolBoundingData: 120,
            data: data,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        return params.value;
                    },
                    position: 'top',
                    offset: [0, 0],
                    textStyle: {
                        color: '#06d3c4',
                        fontSize: 12,
                    },
                },
            },
            itemStyle: {
                color: 'rgba(3,204,188,0.6)',
                borderWidth: 1,
                borderColor: 'rgba(3,204,188,1)',
            },
            z: 7,
        },
        {
            // full data
            type: 'pictorialBar',
            itemStyle: {
                color: 'rgba(54,215,182,0.1)',
                borderWidth: 1,
                borderColor: 'rgba(54,215,182,0.2)',
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'rect',
            symbolSize: [10, 5],
            symbolBoundingData: 120,
            data: data,
            z: 6,
        },
    ],
};
