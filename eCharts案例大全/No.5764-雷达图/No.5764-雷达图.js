data_1 = [{
        name: '投诉举报',
        max: 10
    },
    {
        name: '日常监管',
        max: 10
    },
    {
        name: '量化分析',
        max: 10
    },
    {
        name: '预警告警',
        max: 10
    },
    {
        name: '资质证照',
        max: 10
    }
];
 data_2 = [5, 6, 7, 5, 4];

option = {
    backgroundColor: '#ffffff',
    color: ['#3D91F7', '#61BE67'],
    tooltip: {},
    legend: {
        show: true,
        icon: "circle",
        bottom: 30,
        center: 0,
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 21,
        orient: "horizontal",
        data: ['a', 'b'],
        textStyle: {
            fontSize: '70%',
            color: '#505050'
        },
    },

    radar: {
        //  shape: 'circle',
        radius: '70%',
        triggerEvent: true,
        name: {
            textStyle: {
                color: '#505050',
                fontSize: '10',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        nameGap: '2',
        indicator: data_1, // 数据的数量代表展示什么形状的图形
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(222,134,85, 0.1)', 'rgba(222,134,85, 0.2)',
                    'rgba(222,134,85, 0.4)', 'rgba(222,134,85, 0.6)',
                    'rgba(222,134,85, 0.8)', 'rgba(222,134,85, 1)'
                ].reverse()
            }
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        splitLine: {
            lineStyle: {
                width: 2,
                color: [
                    'rgba(224,134,82, 0.1)', 'rgba(224,134,82, 0.2)',
                    'rgba(224,134,82, 0.4)', 'rgba(224,134,82, 0.6)',
                    'rgba(224,134,82, 0.8)', 'rgba(224,134,82, 1)'
                ].reverse()
            }
        },

    },

    series: [{
        name: '一级权重分析',
        type: 'radar',
        //areaStyle: {normal: {}},
        areaStyle: {
            normal: {
                color: 'rgba(255,211,30, 0.3)'
            }
        },
        symbolSize: 0,
        lineStyle: {
            normal: {
                color: 'rgba(252,211,3, 1)',
                width: 1
            }
        },
        data: [{
            value: data_2,
            name: '因素',



        }]
    }]
}