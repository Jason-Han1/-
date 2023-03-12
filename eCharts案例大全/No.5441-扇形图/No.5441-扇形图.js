function getRandom(num) {
    return Math.floor(Math.random() * num);
}

function getMax(arr, key) {
    var max = 0,
        len = arr.length;
    for (var i = 0; i < len; i++) {
        var item = arr[i][key];
        if (max < item) max = item;
    }
    return max;
}

var ageData = [{
            name: '90后',
            value: getRandom(6000)
        },
        {
            name: '80后',
            value: getRandom(6000)
        },
        {
            name: '70后',
            value: getRandom(6000)
        },
        {
            name: '60后',
            value: getRandom(6000)
        },
        {
            name: '其他',
            value: getRandom(6000)
        }
    ], // 年龄分布南丁格尔图数组
    ages = [], // 年龄分布圆环数组
    colorArr = ['#ffd74a', '#34f6cb', '#d88856', '#88a8ff', '#6665ff'],
    len = ageData.length,
    max = parseInt(getMax(ageData, 'value') * 1.2 * 100) / 100;

// 添加一些占位值
ages = ageData.map(function(e) {
    return {
        name: e.name,
        value: 100
    }
});
ages.push({
    name: '',
    value: 100 * len,
    itemStyle: {
        color: 'transparent'
    }
});

for (var i = 0; i < 5; i++) {
    ageData.push({
        value: 0
    });
}

option = {
    backgroundColor: '#188eee',
    tooltip: {
        formatter: '{b}: {c}件'
    },
    grid: {
        top: '75%',
        left: '35%',
        right: '35%',
        height: 2,
    },
    xAxis: [{
        type: 'value',
        min: -max,
        max: max,
        axisTick: {
            show: false,
        },
        boundaryGap: true,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#035de4",
                width: 2
            }
        },
        splitLine: {
            show: false
        },
        showMinLabel: false,
        showMaxLabel: false,
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12
            },
            formatter: function(value, index) {
                return Math.abs(value);
            }
        }
    }],
    yAxis: [{
        show: false
    }],
    series: [
        //南丁格尔图 
        {
            type: 'pie',
            startAngle: 180,
            radius: [63, 180],
            center: ['50%', '75%'],
            roseType: 'area',
            color: colorArr,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            // 默认值
            // data: []
            data: ageData,
        },
        // 年龄分布圆环 
        {
            type: 'pie',
            startAngle: 180,
            endAngle: 0,
            hoverAnimation: false,
            radius: [194, 247],
            center: ['50%', '75%'],
            itemStyle: {
                color: '#2c25b2'
            },
            silent: true,
            label: {
                normal: {
                    position: 'inner',
                    textStyle: {
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: "bold"
                    }
                },
            },
            data: ages
        },
        // 最外层圆弧
        {
            type: 'gauge',
            radius: 249,
            center: ['50%', '75%'],
            startAngle: 180,
            endAngle: 0,
            splitNumber: 5,
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: [
                        [1, '#0a5ba6']
                    ]
                },
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        }
    ]
};