var data = {
    "yaxdata": [{
            "name": "北京"
        },
        {
            "name": "山西"
        },
        {
            "name": "辽宁"
        },
        {
            "name": "吉林"
        },
        {
            "name": "黑龙江"
        },
        {
            "name": "安徽"
        },
        {
            "name": "福建"
        },
        {
            "name": "江西"
        }
    ],
    "seriesarray": [{
            "name": "一级",
            "numbers": [{
                    "name": "一级",
                    "value": 70
                },
                {
                    "name": "一级",
                    "value": 80
                },
                {
                    "name": "一级",
                    "value": 90
                },
                {
                    "name": "一级",
                    "value": 100
                },
                {
                    "name": "一级",
                    "value": 110
                },
                {
                    "name": "一级",
                    "value": 120
                },
                {
                    "name": "一级",
                    "value": 130
                },
                {
                    "name": "一级",
                    "value": 140
                }
            ]
        },
        {
            "name": "二级",
            "numbers": [{
                    "name": "二级",
                    "value": 70
                },
                {
                    "name": "二级",
                    "value": 80
                },
                {
                    "name": "二级",
                    "value": 90
                },
                {
                    "name": "二级",
                    "value": 100
                },
                {
                    "name": "二级",
                    "value": 110
                },
                {
                    "name": "二级",
                    "value": 120
                },
                {
                    "name": "二级",
                    "value": 130
                },
                {
                    "name": "二级",
                    "value": 140
                }
            ]
        },
        {
            "name": "三级",
            "numbers": [{
                    "name": "三级",
                    "value": 70
                },
                {
                    "name": "三级",
                    "value": 80
                },
                {
                    "name": "三级",
                    "value": 90
                },
                {
                    "name": "三级",
                    "value": 100
                },
                {
                    "name": "三级",
                    "value": 110
                },
                {
                    "name": "三级",
                    "value": 120
                },
                {
                    "name": "三级",
                    "value": 130
                },
                {
                    "name": "三级",
                    "value": 140
                }
            ]
        },
        {
            "name": "四级",
            "numbers": [{
                    "name": "四级",
                    "value": 70
                },
                {
                    "name": "四级",
                    "value": 80
                },
                {
                    "name": "四级",
                    "value": 90
                },
                {
                    "name": "四级",
                    "value": 100
                },
                {
                    "name": "四级",
                    "value": 110
                },
                {
                    "name": "四级",
                    "value": 120
                },
                {
                    "name": "四级",
                    "value": 130
                },
                {
                    "name": "四级",
                    "value": 140
                }
            ]
        }
    ]
}
var yaxidata = []; // 类别数组（实际用来盛放X轴坐标值）
//背景色
var colorArray = ['rgba( 40, 252, 150, 0.4 )', 'rgba( 40, 175, 252, 0.4 )', 'rgba( 255, 249, 77, 0.4 )', 'rgba( 255, 144, 77, 0.4 )'];
//边框颜色
var borderColorArray = ['rgb( 40, 252, 150 )', 'rgb( 63, 229, 255 )', 'rgb( 255, 249, 77 )', 'rgb( 255, 144, 77 )'];
var seriesArray = [];
var lengendArray = [];
$.each(data.seriesarray, function(index, item) {
    var dataArray = [];
    $.each(item.numbers, function(index, item) {
        dataArray.push(item);
    });
    lengendArray.push(item.name);
    seriesArray.push({
        name: item.name,
        type: 'bar',
        barWidth: 6,
        barCategoryGap: '80',
        barGap: '90',
        stack: '总量',
        itemStyle: {
            normal: {
                borderColor: borderColorArray[index],
                borderWidth: 1,
                color: colorArray[index]
            }
        },
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
        data: dataArray
    });
});
$.each(data.yaxdata, function(index, item) {
    yaxidata.push(item.name); // 挨个取出类别并填入类别数组
});
var option = {
    backgroundColor:'#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: lengendArray,
        y: '0',
        itemWidth: 17,
        itemHeight: 10,
        itemGap: 25,
        textStyle: {
            fontSize: 16,
            color: '#999'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        top: '12%',
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#4a515a'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#6b868b'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: yaxidata,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2
            }
            //rgb( 191, 191, 191 ) 2px
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#4a515a'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: 'rgb( 124, 124, 124 )'

            }
        }
    },
    series: seriesArray
};