let list = [
    {
        name: '技能培训',
        max: 80,
    },
    {
        name: '人员属性',
        max: 80,
    },
    {
        name: '岗位类别',
        max: 80,
    },
    {
        name: '收入期望',
        max: 80,
    },
    {
        name: '就业地点',
        max: 80,
    },
];
let data1 = [[65, 70, 55, 60, 80]];
option = {
    backgroundColor: 'grey',
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: (data) => {
            // console.log(data.seriesIndex);
            var tip = '<h5 class="echarts-tip-h5">' + data.seriesName + '</h5>';
            let tmpData = [];
            if (data.seriesIndex === 0) {
                tmpData = data1;
            }
            console.log(tmpData);
            data.value.forEach((item, index) => {
                // console.log(list[index].name)
                tip += '<div>';
                tip += '<div>' + list[index].name + ': ' + tmpData[0][index] + '万</div>';
                tip += '</div>';
            });
            return tip;
        },
    },
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
        },
        center: ['50%', '50%'],
        radius: '70%',
        startAngle: 90,
        splitNumber: 1,
        shape: 'circle',
        splitArea: {
            areaStyle: {
                color: ['rgba(0,83,118, .5)', 'transparent'],
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
            symbolSize: 2,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,255,255,.8)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,25,255,.8)',
                            },
                        ],
                        false
                    ),
                },
            },
            itemStyle: {
                color: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'rgba(255, 255, 255, 0.7)',
                borderWidth: 6,
            },
            data: data1,
        },
    ],
};
