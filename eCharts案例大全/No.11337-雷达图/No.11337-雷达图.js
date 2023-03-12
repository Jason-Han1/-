var positive = [190, 250, 120, 150, 300];
var discipline = [160, 150, 260, 285, 140];
// 合并数组
var newArr = positive.concat(discipline);
// 按大到小排序
var isMax = newArr.sort(function(a, b) {
    return b - a
});
isMax = getMaxOfArray(isMax);
// 获取最大值
function getMaxOfArray(data) {
    return Math.max.apply(null, data);
}
var data = [{
        name: '党团活动',
        max: isMax
    },
    {
        name: '实践活动',
        max: isMax
    },
    {
        name: '艺术修养',
        max: isMax
    },
    {
        name: '身心健康',
        max: isMax
    },
    {
        name: '实践活动',
        max: isMax
    }
]
option = {
    tooltip: {
        // trigger: 'item' // 默认
    },
    radar: {
        name: {
            textStyle: {
                color: '#333',
                fontSize: '14'
                // 有背景色的时候设置
                // borderRadius: 3,
                // padding: [3, 5]
            }
        },
        radius: '70%',
        center: ['50%', '50%'],
        indicator: data,
        nameGap: 25, // 指示器名称和指示器轴的距离
        splitArea: {
            show: false,
        },
        axisLine: {
            show: false // 指向外圈文本的分隔线不显示
        },
        splitNumber: 4, // 配合 splitLine=>color控制只显示几个边框线
        splitLine: {
            lineStyle: {
                color: '#254369',
                // 给透明度为 0 不显示线条
                // color: ['#254369', 'rgba(255,255,255,0)', 'rgba(255,255,255,0)', 'rgba(255,255,255,0)', 'rgba(255,255,255,0)'],
                width: 1,
            }
        }
    },
    color: [], // 去除统计图形块边框线
    series: [{
        name: '各类活动次数',
        type: 'radar',
        symbolSize: 0, // 去掉小圆点
        data: [{
                value: positive,
                name: '正向考评',
                areaStyle: {
                    normal: {
                        color: '#e7e906'
                    }
                }
            },
            {
                value: discipline,
                name: '违纪考评',
                areaStyle: {
                    normal: {
                        color: '#4cecf0'
                    }
                }
            }
        ]
    }]

};