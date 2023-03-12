var fourPieData = [
    {
        name: '法人信用认证',
        max: 3500,
        value: 1185,
    },
    {
        name: '产品质量评价',
        max: 3200,
        value: 2011,
    },
    {
        name: '市场业绩评价',
        max: 30000,
        value: 24737,
    },
    {
        name: '履约动态考评',
        max: 30000,
        value: 8757,
    },
];

var titleArr = [],
    seriesArr = [];
colors = [
    ['#57bbf7', 'pink'],
    ['#ffc969', '#f4f4f7'],
    ['#f38b97', '#f4f4f7'],
    ['#b1d882', '#f4f4f7'],
    ['#c0acf9', '#f4f4f7'],
];
fourPieData.forEach(function (item, index) {
    titleArr.push({
        text: item.name,
        left: index < 2 ? index * 50 + 25 + '%' : index * 50 - 75 + '%',
        top: index < 2 ? '40%' : '90%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: colors[index][0],
            textAlign: 'center',
        },
    });
    seriesArr.push({
        name: item.name,
        type: 'pie',
        clockWise: false,
        radius: [60, 70],
        itemStyle: {
            normal: {
                color: colors[index][0],
                shadowColor: colors[index][0],
                shadowBlur: 0,
                label: {
                    show: true,
                },
                labelLine: {
                    show: true,
                },
            },
        },
        hoverAnimation: false,
        center: [index < 2 ? index * 50 + 25 + '%' : index * 50 - 75 + '%', index < 2 ? '25%' : '75%'],
        data: [
            {
                value: item.value,
                label: {
                    normal: {
                        formatter: function (params) {
                            console.log(params);
                            return ['{a|' + params.seriesName + '}', '{b|' + params.value + '分}'].join('\n');
                        },
                        rich: {
                            a: {
                                color: '#fff',
                                fontWeight: 500,
                                fontSize: 10,
                                lineHeight: 20,
                                align: 'center',
                            },
                            b: {
                                color: '#fff',
                                fontSize: 14,
                            },
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: colors[index][0], //跟随其他颜色
                        },
                    },
                },
                itemStyle: {
                    emphasis: {
                        color: colors[index][0],
                    },
                },
            },
            {
                value: item.max - item.value,
                name: 'invisible',
                label: {
                    normal: {
                        formatter: function (params, i) {
                            return '排名前：' + params.value + '%';
                        },
                        rich: {
                            b: {
                                fontSize: 18,
                                color: '#f5f08a',
                                align: 'left',
                                padding: 4,
                            },
                            d: {
                                fontSize: 18,
                                color: '#f5f08a',
                                align: 'left',
                                padding: 4,
                            },
                            c: {
                                fontSize: 18,
                                color: '#f5f08a',
                                align: 'left',
                                padding: 4,
                            },
                            bigwhite: {
                                color: 'pink',
                                fontSize: 20,
                            },
                        },
                        position: 'outside',
                        show: true,
                    },
                },
                itemStyle: {
                    normal: {
                        color: colors[index][1],
                    },
                },
            },
        ],
    });
});

option = {
    backgroundColor: '#003366',
    title: titleArr,
    series: seriesArr,
};
