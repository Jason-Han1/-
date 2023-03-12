var types = [
    '名称',
    '比例',
    '数值'
];
const yArr = ['老北京布鞋', '李宁', '安踏', '鸿星尔克', '名称']
var names = ['1', '2', '3', '4', '5'];

var data = [
    [0, 0, 9],
    [0, 1, 4],
    [0, 2, 8.3],
    [1, 0, 7],
    [1, 1, 4],
    [1, 2, 27.56],
    [2, 0, 1],
    [2, 1, 44],
    [2, 2, 127.31],
    [3, 0, 5],
    [3, 1, 48],
    [3, 2, 1741.88],
    [4, 0, 100],
    [4, 1, 100],
    [4, 2, 100]
];

data = data.map((item) => {
    return {
        value: [item[1], item[0], item[2] || '-'],
        itemStyle: {
            color: item[0] === 4 ? '#fe9a8b1a': '#fff'
        },
        label: {
            color: item[0] === 4 ? '#ccc' : '#fe9a8b',
            align: 'center'
        },
        emphasis: {
            itemStyle: {
                color: item[0] === 4 ? '#fe9a8b1a' :'#FFF'
            }
        }
    }
});

option = {
    grid: {
        backgroundColor: '#F6F8FA',
        width: 270,
        height: 28 * yArr.length,
        left: 'center',
        top:'center'
    },
    xAxis: {
        type: 'category',
        data: types,
        splitArea: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: names,
        splitArea: {
            show: true,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [
        {
            type: 'heatmap',
            data: data,
            label: {
                show: true,
                fontSize: 14,
                lineHeight: 22,
                formatter: (params) => {
                    if (params.name === '比例') {
                        // console.log(params)
                        if (params.value[1] !== 4) {
                            return params.value[2] + '%'
                        } else {
                            console.log(params)
                            return params.name
                        }
                    } 
                    else if (params.name === '数值') {
                        if (params.value[1] === 4) {
                            return params.name
                        }
                    } else {
                        return yArr[params.value[1]]
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                color: '#fff'
            }
        }
    ]
}
