function contains(arr, val) {
    var i = arr.length;
    while (i--) {
        if (arr[i].name === val) {
            return i;
        }
    }
    return false;
}
let list = [
    {
        name: '道路结冰',
        max: 88,
    },
    {
        name: '暴雪',
        max: 88,
    },
    {
        name: '暴雨',
        max: 88,
    },
    {
        name: '冰雹',
        max: 88,
    },
    {
        name: '大风',
        max: 88,
    },
    {
        name: '大雾',
        max: 88,
    },
    {
        name: '高温',
        max: 88,
    },
    {
        name: '干旱',
        max: 88,
    }
];
let data1 = [[80, 50, 55, 80, 50, 80, 48, 43]];
let data2 = [[60, 60, 65, 60, 70, 40, 80, 63]];
option = {
    backgroundColor: 'grey',
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: (data) => {
            // console.log(data.seriesIndex);
            var tip = '<h5 class="echarts-tip-h5">' + data.seriesName + '</h5>';
            let tmpData = [];
            if (data.seriesIndex === 0) {
                tmpData = data1;
            } else if (data.seriesIndex === 1) {
                tmpData = data2;
            }
            console.log(tmpData)
            data.value.forEach((item, index) => {
                // console.log(list[index].name)
                tip += '<div>';
                tip += '<div>' + list[index].name + ': '+ tmpData[0][index] + '万</div>'
                tip += '</div>';
            });
            return tip;
        },
    },
    // legend: {
    //     show: true,
    //     icon: 'circle',
    //     left: '15%',
    //     top: '3%',
    //     orient: 'horizontal',
    //     textStyle: {
    //         fontSize: 14,
    //         color: '#fff',
    //     },
    //     data: ['数据1', '数据2'],
    // },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
            rich: {
                a: {
                    fontSize: 16,
                    color: '#FFFFFF',
                    padding: [0, 0, 8, 0],
                },
                b: {
                    fontSize: 18,
                    color: '#ACD3FF',
                },
            },
            formatter: (a) => {
                let i = contains(list, a); // 处理对应要显示的样式
                return `{a| ${a}}\n{b| ${data1[0][i] + data2[0][i]}万}`;
            },
        },
        center: ['50%', '50%'],
        radius: '70%',
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        splitArea: {
            areaStyle: {
                color: ['rgba(50, 72, 130, 0.7)', 'rgba(50, 72, 130, 0.5)', 'rgba(50, 72, 130, 0.6)'],
            },
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(50, 72, 130, 0.4)',
            },
        },
        indicator: list,
    },
    series: [
        {
            name: '数据1',
            type: 'radar',
            symbol: 'circle',
            symbolSize: 3,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        1,
                        0,
                        0,
                        [
                            {
                                offset: 0,
                                color: 'rgba(232, 235, 20, 1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(240, 151, 34, 1)',
                            },
                        ],
                        false
                    ),
                },
            },
            itemStyle: {
                color: 'rgba(245, 166, 35, 1)',
                borderColor: 'rgba(235, 171, 86, 0.7)',
                borderWidth: 10,
            },
            data: data1,
        },
        {
            name: '数据2',
            type: 'radar',
            symbol: 'circle',
            symbolSize: 3,
            itemStyle: {
                normal: {
                    color: 'rgba(19, 173, 255, 1)',
                    borderColor: 'rgba(19, 173, 255, 0.4)',
                    borderWidth: 10,
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        1,
                        0,
                        0,
                        [
                            {
                                offset: 0,
                                color: 'rgba(82, 247, 242, 1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(65, 105, 213, 1)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: data2,
        },
    ],
};
