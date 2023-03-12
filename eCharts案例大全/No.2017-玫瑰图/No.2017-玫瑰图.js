var legends = ['空闲地', '乡(镇)村公共设施和公益事业', '农村村民住宅', '集体经营性建设用地', '乡镇企业用地'];
var colors = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(227,182,67,1)',
        },
        {
            offset: 1,
            color: 'rgba(222,180,65,1)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(217,232,100,1)',
        },
        {
            offset: 1,
            color: 'rgba(221,237,129,1)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(23,180,171,1)',
        },
        {
            offset: 1,
            color: 'rgba(137,255,245,1)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(143,90,221,1)',
        },
        {
            offset: 1,
            color: 'rgba(181,143,243,1)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(86,113,233,1)',
        },
        {
            offset: 1,
            color: 'rgba(118,141,250,1)',
        },
    ]),
].reverse();
var data = [
    {
        name: '空闲地',
        value: [40, 100, 50, 20],
    },
    {
        name: '乡(镇)村公共设施和公益事业',
        value: [21, 90, 40, 18],
    },
    {
        name: '农村村民住宅',
        value: [17, 80, 35, 17],
    },
    {
        name: '集体经营性建设用地',
        value: [13, 70, 33, 14],
    },
    {
        name: '乡镇企业用地',
        value: [9, 60, 20, 8],
    },
];
var total = data.reduce((prev, curr) => prev + curr.value[0], 0);
console.log(total);
option = {
    backgroundColor: '#0f375f',
    color: colors,
    legend: {
        orient: 'vertical',
        top: 'center',
        right: '5%',
        itemGap: 50,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
        data: legends,
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return (
                params.marker +
                params.name +
                ' ' +
                params.value[0] +
                '%</br>&nbsp;&nbsp;&nbsp;城市 ：' +
                params.value[1] +
                '公顷</br>' +
                '&nbsp;&nbsp;&nbsp;建制镇 ：' +
                params.value[2] +
                '公顷</br>' +
                '&nbsp;&nbsp;&nbsp;村庄 ：' +
                params.value[3] +
                '公顷'
            );
        },
        extraCssText:
            'border:1px solid #eee;background:rgba(21,78,239,0.8);color:#fff;box-shadow:rgb(132, 255, 255) 0px 0px 10px inset;',
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: ['15%', '60%'],
            center: ['40%', '50%'],
            roseType: 'radius',
            minShowLabelAngle: 10,
            label: {
                show: true,
                normal: {
                    position: 'outside',
                    fontSize: 16,
                    formatter: (params) => {
                        return params.name + ((params.value[0] / total) * 100).toFixed(2) + '%';
                    },
                },
            },
            labelLine: {
                length: 1,
                length2: 20,
                smooth: true,
            },
            data: data,
        },
        {
            name: '外边框',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['40%', '50%'],
            radius: ['64%', '65%'],
            label: {
                normal: {
                    show: false,
                },
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 9,
                    name: '',
                    itemStyle: {
                        color: 'rgba(30,80,148,0.3)',
                    },
                },
            ],
        },
    ],
};
