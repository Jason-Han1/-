var radarValue1 = [50, 70, 80, 70, 90, 100];
var radarValue2 = [50, 70, 80, 70, 90, 100];
var indicator = [];
var typeList = [
    {
        Title: '体重指数(BMI)',
        Result: '',
        Desc: '',
    },
    {
        Title: '肺活量',
        Result: '',
        Desc: 'ml',
    },
    {
        Title: '50米跑',
        Result: '',
        Desc: 's',
    },
    {
        Title: '坐位体前屈',
        Result: '',
        Desc: 'cm',
    },
    {
        Title: '1分钟跳绳',
        Result: '',
        Desc: '个',
    },
    {
        Title: '1分钟仰卧起坐',
        Result: '',
        Desc: '个',
    },
    {
        Title: '50米x8折返跑',
        Result: '',
        Desc: '',
    },
];
for (let i = 0; i < typeList.length; i++) {
    indicator.push({
        text: typeList[i].Title,
        max: 100,
        color: '#999',
    });
}
var dataArr = [
    {
        value: radarValue1,
        lineStyle: {
            color: 'rgba(21, 246, 201, 0.5)',
        },
        symbol: 'none',
        areaStyle: {
            normal: {
                // 单项区域填充样式
                color: '#4BF1C3',
                opacity: 0.6, // 区域透明度
            },
        },
    },
    {
        value: radarValue2,
        name: 'legendData[0]',
        lineStyle: {
            color: 'rgba(56, 137, 255, 1)',
        },
        symbol: 'none',
        areaStyle: {
            normal: {
                // 单项区域填充样式
                color: '#3889FF',
                opacity: 0.6, // 区域透明度
            },
        },
    },
];
option = {
    backgroundColor:'#111E3A',
    radar: {
        center: ['50%', '55%'],
        radius: '80%',
        indicator: indicator,
        shape: 'circle', //形状
        splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: false,
            areaStyle: {
                // 分隔区域的样式设置。
                color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            },
        },
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(2, 205, 255, 0.03)',
                    'rgba(2, 205, 255, 0.06)',
                    'rgba(2, 205, 255, 0.1)',
                    'rgba(2, 205, 255, 0.2)',
                    'rgba(2, 205, 255, 0.3)',
                    'rgba(2, 205, 255, 0.5)',
                ].reverse(),
            },
        },
        axisLine: {
            //指向外圈文本的分隔线样式
            lineStyle: {
                color: 'rgba(0,0,0,0)',
            },
        },
        splitLine: {
            lineStyle: {
                width: 2,
                color: 'rgba(2, 205, 255, 0.03)',
            },
        },
    },

    tooltip: {
        show: false,
        trigger: 'item',
    },
    series: [
        {
            type: 'radar',
            itemStyle: {
                normal: {
                    color: '#000',
                },
            },
            data: dataArr,
        },
    ],
};
