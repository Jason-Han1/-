var datas = [
    {
        value: 36,
        name: '昆明市',
    },
    {
        value: 54,
        name: '玉溪市',
    },
    {
        value: 29,
        name: '曲靖市',
    },
    {
        value: 25,
        name: '大理白族自治州',
    },
    {
        value: 45,
        name: '文山壮族苗族自治州',
    },
    {
        value: 29,
        name: '红河哈尼族彝族自治州',
    },
    {
        value: 25,
        name: '迪庆藏族自治区',
    },
    {
        value: 45,
        name: '楚雄彝族自治州',
    },
];
var maxArr = new Array(datas.length).fill(100);
option = {
    backgroundColor: 'rgba(0, 21, 54, 0.9)',
    grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        containLabel: true,
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params.data.name + ' : ' + params.data.value;
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                align: 'right',
                textStyle: {
                    fontSize: 14,
                    color: 'white',
                    rich: {
                        index: {
                            color: 'white',
                            fontWeight: 'bold',
                            width: 15,
                            height: 15,
                            borderRadius: 50,
                            align: 'left',
                        },
                        index1: {
                            color: 'white',
                            fontWeight: 'bold',
                            width: 15,
                            height: 15,
                            // backgroundColor: '#EE9A3A',
                            borderRadius: 50,
                            align: 'left',
                            textAlign:'center'
                        },
                        index2: {
                            color: 'white',
                            fontWeight: 'bold',
                            width: 15,
                            height: 15,
                            // backgroundColor: '#EE9A3A',
                            borderRadius: 50,
                            align: 'left',
                            textAlign:'left',
                        },
                        index3: {
                            color: 'white',
                            fontWeight: 'bold',
                            width: 15,
                            height: 15,
                            // backgroundColor: '#EE9A3A',
                            borderRadius: 50,
                            align: 'left',
                            textAlign:'left',
                        },
                        name: {
                            padding: [0,0,0,20],
                            width:110,
                            borderWidth:1,
                            align: 'left',
                        },
                    },
                },
                formatter: (name) => {
                    var index = datas.map((item) => item.name).indexOf(name) + 1;
                    return [
                        '{' + (index > 3 ? 'index' : 'index' + index) + '|' + index + '}',
                        '{name|' + name + '}',
                    ].join('');
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: datas.map((item) => item.name),
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            zlevel: 1,
            label: {
                show: true,
                position: 'right', // 位置
                color: 'hsla(192, 100%, 62%, 1)',
                fontSize: 12,
                distance: 5, // 字与条形图bar 的距离
                formatter: '{c}', // 这里是数据展示的时候显示的数据
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'hsla(195, 100%, 43%, 1)',
                        },
                        {
                            offset: 1,
                            color: 'hsla(193, 100%, 59%, 1)',
                        },
                    ]),
                },
            },
            barWidth: 20,
            data: datas,
        },
    ],
};
