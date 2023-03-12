//图例svg
SVGPathData = 'path://M480 64C250.24 64 64 250.24 64 480 64 709.76 250.24 896 480 896c229.76 0 416-186.24 416-416C896 250.24 709.76 64 480 64zM480 832C285.44 832 128 674.56 128 480 128 285.44 285.44 128 480 128 674.56 128 832 285.44 832 480 832 674.56 674.56 832 480 832z'

//数据
data = [{
        name: '全校均值',
        value: [
            [3, 3, 3, 3]
        ],
    },
    {
        name: '同年级均值',
        value: [
            [5, 5, 5, 5]
        ],
    },
    {
        name: '同年级专业均值',
        value: [
            [7, 7, 7, 7]
        ],
    },
    {
        name: '我的',
        value: [
            [9, 9, 9, 9]
        ]
    }
]

// 设置每项的最大值
indicatorData = [{
        name: '听力',
        max: 10
    },
    {
        name: '写作',
        max: 10
    },

    {
        name: '综合',
        max: 10
    },
    {
        name: '阅读',
        max: 10
    },

]

colorArry = ['rgba(14, 156, 255, 1)', 'rgba(16, 175, 122, 1)', 'rgba(247, 181, 67, 1)', 'rgba(152, 155, 246, 1)']

seriesData = []

legendData = []

for (var i = 0; i < data.length; i++) {
    var obj = data[i]
    const item = {
        name: obj.name,
        type: 'radar',

        areaStyle: {
            color: colorArry[i],
            opacity: .1
        },
        // symbol: 'roundRect',
        lineStyle: {
            color: colorArry[i],
            width: 2
        },
        itemStyle: {
            color: colorArry[i],
            width:2
        },

        symbolSize: 9,
        data: obj.value
    }
    seriesData.push(item)
    legendData.push(obj.name)
}

option = {
    legend: {
        top: 'center',
        right: '2%',
        orient: 'vertical',
        textStyle: {
            color: 'rgba(102, 102, 102, 1)',
            fontSize: 13,
        },
        data: legendData,
        icon: SVGPathData,
    },
    radar: {
        radius: '60%',//半径
        center: ['50%', '50%'],//中心位置
        // triggerEvent: true,
        name: {
            textStyle: {
                color: '#666',
                fontSize: '15',
                padding: 10
            }
        }, 
        indicator: indicatorData,
        splitArea: {
            areaStyle: {
                color: ['rgba(200, 222, 246, 0)', 'rgba(200, 222, 246, 0.2)', 'rgba(200, 222, 246, 0)', 'rgba(200, 222, 246, 0.4)', 'rgba(200, 222, 246, 0)', 'rgba(200, 222, 246, 0.6)', ].reverse(),
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(200, 222, 246, 1)'
            }
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: 'rgba(200, 222, 246, 1)'
            }
        }
    },
    series: seriesData
};