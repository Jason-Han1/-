var datas = ['普通高等教育在校学生数', '普通高等教育招生数', '普通高等教育毕业生数'];
var legendData = [
    {
        name: '博士生数',
        data: [1916, 450, 240],
    },
    {
        name: '硕士生数',
        data: [9302, 3892, 2176],
    },
    {
        name: '普通本科生数',
        data: [18080, 4537, 4436],
    },
    {
        name: '学生总数',
        data: [29298],
    },
   
];
//var colorList = ['#009CEB', '#1665D8', '#F8E71C', '#3BAD4B'];
var seriesList = [];
for (var i = 0; i < legendData.length; i++) {
    seriesList.push({
        type: 'bar',
        name: legendData[i].name,
        stack: '2',
        legendHoverLink: false,
        barWidth: 30,
        itemStyle: {
            normal: {
                // color: colorList[i],
            },
        },
        label: {
            show: true,
            position: 'inside',
            color: '#fff',
            formatter: function (params) {
                if (params.value == 0) {
                    return '';
                } else {
                    return params.value;
                }
            },
        },
        data: legendData[i].data,
    });
}
option = {
    backgroundColor: '#fff',
    tooltip: {
        show: true,
    },
    legend: [
        {
            left: '10%',
            top: '7%',
            icon: 'react',
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                color: '#000',
            },
            data: ['博士生数', '硕士生数', '普通本科生数','学生总数'],
        },
       
    ],
    grid: {
        containLabel: true,
        top: '30%',
        left: '-10%',
        right: '0%',
        bottom: '0%',
    },
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            inverse: true,
            data: datas,
            axisLabel: {
                margin: 140,
                fontSize: 10,
                align: 'left',
                color: '#000',
                nterval: 0, //强制显示文字
                rich: {
                    a1: {
                        color: '#fff',
                        backgroundColor: '#FF4431',
                        width: 14,
                        height: 14,
                        align: 'center',
                        borderRadius: 2,
                    },
                    a2: {
                        color: '#fff',
                        backgroundColor: '#F08228',
                        width: 14,
                        height: 14,
                        align: 'center',
                        borderRadius: 2,
                    },
                    a3: {
                        color: '#fff',
                        backgroundColor: '#43A92C',
                        width: 14,
                        height: 14,
                        align: 'center',
                        borderRadius: 2,
                    },
                },
                formatter: function (params) {
                    let index = datas.indexOf(params);
                    if (index == 11) {
                        index = 0;
                    }
                    index++;
                    if (index - 1 < 3) {
                        return ['{a' + index + '|' + index + '}' + '  ' + params].join('\n');
                    } else {
                        return ['{b|' + index + '}' + '  ' + params].join('\n');
                    }
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 30,
                },
            },
        },
        {
            show: false,
            data: datas,
            axisLine: {
                show: false,
            },
        },
    ],
    series: seriesList,
};
// 3.配置项和数据给实例化对象
myChart.setOption(option);
