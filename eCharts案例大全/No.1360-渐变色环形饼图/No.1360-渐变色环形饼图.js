var getname = ['2017级','2018级','2019级','2020级','2021级'];
var getvalue =[27,20,25,30,34];

var data = [];
for (var i = 0; i < getname.length; i++) {
    data.push({ name: getname[i], value: getvalue[i] });
}
var colorList = [
    {
        type: 'linear',
        colorStops: [
            // !! 在此添加想要的渐变过程色 !!
            { offset: 0, color: '#00B4E1' },
            { offset: 1, color: '#00FCFD' },
        ],
    },
    {
        type: 'linear',
        colorStops: [
            // !! 在此添加想要的渐变过程色 !!
            { offset: 0, color: '#38F8D4' },
            { offset: 1, color: '#43EA80' },
        ],
    },
    {
        type: 'linear',
        colorStops: [
            // !! 在此添加想要的渐变过程色 !!
            { offset: 0, color: '#015EEA' },
            { offset: 1, color: '#00C0FA' },
        ],
    },
    {
        type: 'linear',
        colorStops: [
            // !! 在此添加想要的渐变过程色 !!
            { offset: 0, color: '#5050FF' },
            { offset: 1, color: '#8E79FF' },
        ],
    },
    {
        type: 'linear',
        colorStops: [
            // !! 在此添加想要的渐变过程色 !!
            { offset: 0, color: '#FF5EB1' },
            { offset: 1, color: '#FF986B' },
        ],
    },
    {
        type: 'linear',
        colorStops: [
            // !! 在此添加想要的渐变过程色 !!
            { offset: 0, color: '#9F56CB' },
            { offset: 1, color: '#F988E7' },
        ],
    },
];

option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        show: true,

        height: '88%',
        y: '58%',
        x: '46%',
        icon: 'circle', //设置为圆，删除则为矩形
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#c0c4cc',
            fontSize: 14,
            lineHeight: 20,
            rich: {
                percent: {
                    color: '#fff',
                    fontSize: 16,
                },
            },
        },
        formatter: function (name) {
            for (var i = 0; i < getname.length; i++) {
                if (name == data[i].name) {
                    return '{name|' + name + '}\r\r{rate|' + getvalue[i] + '人}';
                }
            }
        },
    },

    series: [
        {
            type: 'pie',
            radius: ['35%', '45%'],
            center: ['50%', '30%'],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                position: 'center',
            },
            labelLine: {
                show: false,
            },
            data: data,
        },
        {
            itemStyle: {
                normal: {
                    color: '#13243a',
                },
            },
            type: 'pie',
            hoverAnimation: false,
            radius: ['30%', '50%'],
            center: ['50%', '30%'],
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 1,
                },
            ],
            z: -1,
        },
    ],
};
return option;  