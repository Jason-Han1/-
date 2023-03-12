var dataMxz = [
    [55,9,22]
];

var dataLxm = [
    [26,37,27]
];

var dataDdz = [
    [91,45,125]
];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option = {
    backgroundColor: '#161627',
    title: {
        text: '个人能力 - 雷达图',
        left: 'center',
        textStyle: {
            color: '#eee'
        }
    },
    legend: {
        bottom: 5,
        data: ['马小战', '李小美', '大朵子'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    radar: {
        // 雷达图
        // indicator 美[ 'ɪndɪkeɪtər ] 指标
        // 表示不通的维度，表现为雷达图上的一个轴。
        // 比如：个人能力：运动能力、绘画能力、编程能力等...
        indicator: [
            // indicator 又叫指示器
            // 用来指定雷达图中的多个变量（维度）
            // max 指示器的最大值，可选，建议设置
            {name: '运动能力'},
            {name: '绘画能力'},
            {name: '编程能力'}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '马小战',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataMxz,
            symbol: 'none',
            itemStyle: {
                color: '#F9713C'
            },
            areaStyle: {
                opacity: 0.25
            }
        },
        {
            name: '李小美',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataLxm,
            symbol: 'none',
            itemStyle: {
                color: '#B3E4A1'
            },
            areaStyle: {
                opacity: 0.25
            }
        },
        {
            name: '大朵子',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataDdz,
            symbol: 'none',
            itemStyle: {
                color: 'rgb(238, 197, 102)'
            },
            areaStyle: {
                opacity: 0.25
            }
        }
    ]
};