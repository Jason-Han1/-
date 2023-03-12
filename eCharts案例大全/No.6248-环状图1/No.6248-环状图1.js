const data = [{
        value: 150000,
        name: '小'
    },
    {
        value: 300000,
        name: '中'
    },
    {
        value: 100000,
        name: '大'
    }
];
const colorList = ['#f3c645', '#00bdf1', '#2bc191'];
option = {
    color: colorList,
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(4, 115, 176, .8)'
    },
    legend: {
        type: "scroll",
        orient: "vartical",
        right: "5%",
        top: "20%",
        itemWidth: 16,
        itemHeight: 8,
        itemGap: 16,
        textStyle: {
            color: '#A3E2F4',
            fontSize: 14,
            fontWeight: 0
        },
    },
    series: [{
        type: 'pie',
        center: ['43%', '50%'],
        radius: ['40%', '75%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            padding: [0, -100, 0, -100],
            show: true,
            position: 'outside',
            formatter: [
                '{name|{b}}', //引导线上面文字
                '{text|{c}只  {d}%}' //引导线下面文字
            ].join('\n'), //用\n来换行
            rich: {
                name: {
                    fontSize: 15,
                    padding: [10, 0],
                },
                text: {
                    fontSize: 13,
                    padding: [10, 0],
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 90,
                align: 'right',
                lineStyle: {
                    width: 1
                }
            }
        },
        data: data,
    }]
};