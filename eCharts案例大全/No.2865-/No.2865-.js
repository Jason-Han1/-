let list = [
    {
        name: '钢筋工',
        value: 12,
    },
    {
        name: '木工',
        value: 11,
    },
    {
        name: '瓦工',
        value: 8,
    },
    {
        name: '电工',
        value: 18,
    },
    {
        name: '架子工',
        value: 9,
    },
    {
        name: '混凝土工',
        value: 14,
    },
    {
        name: '防水工',
        value: 6,
    },
      {
        name: '土方工',
        value: 8,
    },
      {
        name: '防降水工',
        value: 4,
    },
      {
        name: '打桩工',
        value: 8,
    }
];
let xData = [];
let yData = [];
list.forEach(function(item){
    console.log(item)
    xData.push(item.name);
    console.log(xData)
    yData.push(item.value);
});

option = {
    grid: {
        top: '5%',
        left: '5%',
        bottom: '5%',
        right: '5%',
        containLabel: true,
    },
    tooltip: {
        show: true,
    },
    animation: false,
    xAxis: [
        {
            name: '日期',
            type: 'category',
            data: xData,
            
            axisTick: {
                show: false,
                alignWithLabel: true,
            },
            nameTextStyle: {
                color: '#8F8F8F',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8F8F8F',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#8F8F8F',
                },
                margin: 10,
            },
        },
    ],
      dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            maxValueSpan: 6, // 设置展示最大数量
            textStyle: {
                color: 'transparent',
            },
            filterMode: 'filter',
            start: 0,
            end: 100,
            backgroundColor: '#fff',
        },
    ],
    yAxis: [
        {
            name: '单位/次',
            show: true,
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#8F8F8F',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#CDD4D9',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8F8F8F',
                },
            },
        },
    ],
    series: [
        {
            name: '日期',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            barWidth: '0',
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#7099E0',
                },
            },
            color: '#7099E0',
            data: yData,
        },

        {
            type: 'bar',
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                        {
                            offset: 0,
                            color: '#79A9EC',
                        },
                        {
                            offset: 1,
                            color: '#2765D1',
                        },
                    ]),
                },
            },
            data: yData,
        },
    ],
};
