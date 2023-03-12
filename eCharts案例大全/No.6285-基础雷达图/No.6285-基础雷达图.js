option = {
    backgroundColor: '#FDFDFD',
    // 鼠标hover小圆点触发的tooltip
    // tooltip: {
    //     trigger: 'item',
    //     backgroundColor: 'rgba(0,0,250,0.2)'
    // },
    radar: {
        // 传入的维度数据名称
        indicator: [{
                text: '防御',
                max: 100
            },
            {
                text: '穿透',
                max: 100
            },
            {
                text: '躲闪',
                max: 100
            },
            {
                text: '攻击',
                max: 100
            },
            {
                text: '速度',
                max: 100
            }
        ],
        // 大盘的区域
        splitArea: {
            show: true,
            areaStyle: {
                color: '#fff',

            }
        },
        // 大盘分割线
        splitLine: {
            lineStyle: {
                width: 1,
                color: '#E7E7E7'
            }
        },
        // 大盘分割线
        axisLine: {
            // show:false,
            lineStyle: {
                width: 1,
                color: '#E7E7E7'
            }
        },
        axisLabel: {
            rotate: 30
        },
        // (圆外的标签)雷达图每个指示器名称的配置项。
        name: {
            formatter: '{value}',
            textStyle: {
                fontSize: 12,
                color: '#666'
            }
        },
        // 雷达图的大小控制
        radius:'20%',
    },
    series: {
        type: 'radar',
        symbolSize: 10, //圆圈大小
        symbol: "circle", //小圆圈
        // 小区域颜色
        areaStyle: {
            color: "#4285f4",
            opacity: 0.1
        },
        // 小区域的边框
        lineStyle: {
            color: "#4285F4 ",
            opacity: 1,
            width: 2
        },
        // 小区域远点的颜色
        itemStyle: {
            color: "#4285F4",
            borderColor: "#4285F4",
            opacity: 1
        },
        // 小区域数值展示
        label: {
            show: false,
            formatter: "{c} %",
            color: "#333",
            fontSize: 15
        },
        // 传入的维度数组
        data: [{
            value: [45, 50, 49, 43, 39]
        }]
    }
};