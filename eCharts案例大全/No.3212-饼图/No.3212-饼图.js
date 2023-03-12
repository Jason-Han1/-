let bgColor = '#000';
let title = '人像卡口';
let color = ['#008eda', '#df5400'];
let echartData = [
    {
        name: '公安局',
        value: '60',
    },
    {
        name: '轨交公司',
        value: '40',
    },
];

let formatNumber = function (num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
};
let total = echartData.reduce((a, b) => {
    return a + b.value * 1;
}, 0);

option = {
    backgroundColor: bgColor,
    color: color,
    // tooltip: {
    //     trigger: 'item'
    // },
    title: [
        {
            // text: "{name|" + title + "}\n{val|" + formatNumber(total) + "}",
            text: '{name|' + '人像' + '}\n{name|' + '卡口' + '}',
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: '#ffff',
                    name: {
                        fontSize: 40,
                        fontWeight: 'bold',
                        color: '#ffff',
                        padding: [10, 0],
                    },
                },
            },
        },
    ],
    legend: {
        //orient: 'vertical',
        icon: 'rect',
        itemWidth: 30,
        itemHeight: 15,
        align: 'left',
        top: 'bottom',
        textStyle: {
            fontSize: 26,
            color: '#ffff',
        },

        // data: legendName
    },
    series: [
        {
            type: 'pie',
            radius: ['45%', '60%'],
            center: ['50%', '50%'],
            data: echartData,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    borderColor: bgColor,
                    borderWidth: 2,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 20,
                    length2: 120,
                    lineStyle: {
                        color: '#e6e6e6',
                    },
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        return '{value|' + formatNumber(params.value) + '%}';
                    },
                    padding: [0, -130, 25, -130],
                    rich: {
                        icon: {
                            fontSize: '25',
                        },
                        value: {
                            fontSize: '25',
                            fontWeight: 'bold',
                            color: '#ffff',
                        },
                    },
                },
            },
        },
    ],
};
