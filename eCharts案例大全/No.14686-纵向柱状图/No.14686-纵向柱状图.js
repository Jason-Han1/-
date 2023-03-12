var item = ["魏公村", "大兴龙湖", "通州", "万丰", "河荫中路", "酒仙桥", "回龙观西大街旁边左边后边", "清河", "马家堡", "回龙观东大街10000#ABCDE", "天通苑", "望京西路", "安贞", "三里屯", "立水桥", "簋街", "牡丹园"];
var value = [1530, 2165, 6681, 8899, 9695, 10551, 10567, 11924, 12999, 13579, 14992, 15406, 16843, 17376, 17486, 19345, 23260];
option = {
    // 调色，
    backgroundColor: '#fff',
    color: ['#f88a4d'],
    // 提示框
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        textStyle: {
            fontSize: 12
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: '4%',
        right: '16%',
        top: '2%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        show: false,
        boundaryGap: [0, 0.2],
    },
    yAxis: {
        type: 'category',
        // 轴线
        axisLine: {
            show: false,
            boundaryGap: true
        },
        // 刻度
        axisTick: {
            show: false,
            alignWithLabel: true,
            boundaryGap: true
        },
        axisLabel: {
            show: true,
            margin: 12,
            textStyle: {
                fontSize: 12,
                color: '#333'
            },
            formatter: function(name) {
                // 当名称长度超过10,进行回行处理且循环持续, 防止过长
                var result = '';
                for (var i = 0, len = name.length; i < len; i++) {
                    result += name[i];
                    if (i >= 9 && (i % 9 === 0)) {
                        result += '\n';
                    }
                }
                return result;
            }
        },
        data: item
    },

    series: [{
        type: 'bar',
        barCategoryGap: '50%',
        barWidth: 16,
        label: {
            normal: {
                show: true,
                position: 'right',
                // 图示标签显示内容格式化
                formatter: function(item) {
                    return Number(item.value).toFixed(2);
                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#329794' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00fffc' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 50, 50, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        },
        zlevel: 10,
        data: value
    }]
};