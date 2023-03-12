var color = '#00D5FF';
var chartData = [
    { name: 521, max: 100 },
    { name: 18, max: 100 },
    { name: 15, max: 100 },
    { name: 27, max: 100 },
    { name: 60, max: 100 },
    { name: 110, max: 100 },
    { name: 200, max: 100 },
    { name: 40, max: 100 },
];
option = {
    backgroundColor:"#1e3756",
    grid: {
        containLabel: true,
        top: 'middle',
        left: 20,
        right: 20,
        height: '50%',
    },
    calculable: true,

    radar: [
        {
            center: ['50%', '40%'], // 图的位置
            indicator: [],
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
            },
            axisLine: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            radius: '40%',
            triggerEvent: true,
        },
    ],
    series: [
        {
            type: 'radar',
            symbol: 'none',
            lineStyle: { color: 'rgba(0,213,255)', opacity: 1, width: 2 }, //线的颜色
            data: [
                {
                    value: [100, 50, 0, 0, 0, 0, 0, 50],
                    // 设置区域边框和区域的颜色
                    itemStyle: {
                        normal: {
                            color: '#00D5FF',
                            opacity: 1,
                        },
                    },
                },
                {
                    value: [50, 100, 50, 0, 0, 0, 0, 0],
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,213,255, 0)',
                        },
                    },
                    
                },
                {
                    value: [0, 50, 100, 50, 0, 0, 0, 0],
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,213,255, 0)',
                        },
                    },
                    
                },
                {
                    value: [0, 0, 50, 100, 50, 0, 0, 0],
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,213,255, 0)',
                        },
                    },
                    
                },
                {
                    value: [0, 0, 0, 50, 100, 50, 0, 0],
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,213,255, 0)',
                        },
                    },
                    
                },
                {
                    value: [0, 0, 0, 0, 50, 100, 50, 0],
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,213,255, 0)',
                        },
                    },
                    
                },
                {
                    value: [0, 0, 0, 0, 0, 50, 100, 50],
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,213,255, 0)',
                        },
                    },
                    
                },
                {
                    value: [50, 0, 0, 0, 0, 0, 50, 100],
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,213,255, 0)',
                        },
                    },
                    
                },
            ],
        },
    ],
};
option.radar[0].indicator = chartData
for (let i = 0; i < chartData.length; i++) {
    let count = Number(chartData[i].name);
    if (count === 0) {
        option.series[0].data[i].areaStyle = {
            opacity: 0,
            color: color,
        };
    } else if (count > 0 && count < 50) {
        option.series[0].data[i].areaStyle = {
            opacity: 0.1,
            color: color,
        };
    } else if (count >= 50 && count < 100) {
        option.series[0].data[i].areaStyle = {
            opacity: 0.2,
            color: color,
        };
    } else if (count >= 100 && count < 150) {
        option.series[0].data[i].areaStyle = {
            opacity: 0.3,
            color: color,
        };
    } else if (count >= 150 && count < 200) {
        option.series[0].data[i].areaStyle = {
            opacity: 0.4,
            color: color,
        };
    } else if (count >= 200 && count < 250) {
        option.series[0].data[i].areaStyle = {
            opacity: 0.5,
            color: color,
        };
    } else if (count >= 250 && count < 300) {
        option.series[0].data[i].areaStyle = {
            opacity: 0.6,
            color: color,
        };
    } else if (count >= 300 && count < 400) {
        option.series[0].data[i].areaStyle = {
            opacity: 0.7,
            color: color,
        };
    } else if (count >= 400) {
        option.series[0].data[i].areaStyle = {
            opacity: 0.8,
            color: color,
        };
    }
}
option.series[0].lineStyle.color = color