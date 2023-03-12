let pie1Data = [
    {
        value: 10,
        name: '26-40',
        itemStyle: {
            color: '#72FFA3',
        },
    },
    {
        value: 21,
        name: '70岁以上',
        itemStyle: {
            color: '#FF7469',
        },
    },
    {
        value: 22,
        name: '56-70',
        itemStyle: {
            color: '#FFBA69',
        },
    },
    {
        value: 25,
        name: '18-25',
        itemStyle: {
            color: '#2BD8FB',
        },
    },
    {
        value: 22,
        name: '41-55',
        itemStyle: {
            color: '#FFE269',
        },
    },
]

var percentColor = null;
var rich = {
    name: {
        color: '#fff',
        fontSize: 14,
    },
};
pie1Data.map(function (item, index) {
    rich['p' + index] = {
        color: item.itemStyle.color,
        fontSize: 17,
        fontWeight: 'bold',
    };
});

option = {
        backgroundColor:'#132A7F',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        backgroundColor: '#1B2D56',
        borderColor: '#2BD8FB',
        textStyle: {
            color: '#fff',
        },
    },
    series: [
        {
            name: '党支部人员',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            label: {
                color: '#fff',
                fontSize: 14,

                formatter: function (params) {
                    percentColor = params.color;
                    return `{name|${params.name}}:{p${params.dataIndex}|${params.percent + '%'}}`;
                },
                rich: rich,
            },
            data: pie1Data,
            roseType: 'area',
        },
        {
            name: '外部刻度',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '95%',
            // min: 0, //最小刻度
            // max: 100, //最大刻度
            startAngle: 90,
            endAngle: -270,
            // endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: false,
                color: '#4d5bd1',
                distance: 25,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 8,
                lineStyle: {
                    color: '#2AD2FB', //用颜色渐变函数不起作用
                    width: 1,
                },
                length: -6,
            }, //刻度样式
            splitLine: {
                show: false,
                length: -20,
                lineStyle: {
                    color: '#2AD2FB', //用颜色渐变函数不起作用
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
    ],
};
myChart.setOption(option);
