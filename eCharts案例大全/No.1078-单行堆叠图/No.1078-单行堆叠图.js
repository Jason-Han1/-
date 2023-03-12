var legendData = [
    { name: '医生', data: 14 },
    { name: '武汉', data: 12 },
    { name: '中国', data: 9 },
    { name: '疫情', data: 9 },
    { name: '逝世', data: 9 },
];
var colorList = ['#226E9C', '#3C93C2', '#6CB0D6', '#9EC9E2', '#C5E1EF'];
var seriesList = [];
for (var i = 0; i < legendData.length; i++) {
    seriesList.push({
        type: 'bar',
        stack: '2',
        legendHoverLink: false,
        barWidth: 30,
        label: {
            show: true,
            position: 'inside',
            color: '#fff',
            formatter: legendData[i].name,
        },
        data: [
            {
                value: legendData[i].data,
                itemStyle: {
                    color: colorList[i],
                },
            },
        ],
    });
}
option = {
    backgroundColor: '#fff',
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
            data: ['医生', '武汉', '中国', '疫情', '逝世'],
        },
    ],
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            inverse: true,
            data: [''],
            axisLine: {
                show: false,
            },
        },
    ],
    series: seriesList,
};
myChart.setOption(option);

