data = [
    ["正常请求次数", "满请求次数", '错误请求次数'],
    [200, 400, 700]
]

option = {
    legend: {
        // right: '20%', //图例排列方式
        top: '20%',
        // right: '10%',
        // orient: 'vertical',
        icon: "circle",
        itemGap: 18,
        formatter: (name) => {
            var i = data[0].indexOf(name)
            return `${name}：${data[1][i]}`
        },
        textStyle: {
            lineHeight: 20,
        }

        // height:40,
    },
    tooltip: {},
    dataset: {
        source: data
    },
    xAxis: {
        type: 'category',
        show: false
    },
    yAxis: {
        show: false
    },
    series: [{
            type: 'pie',
            label: {
                // alignTo: 'edge',
                formatter: '{d}%'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            seriesLayoutBy: 'row',
            radius: ['25%', '35%'],
            center: ['50%', '50%']
        },
        {
            type: 'pie',
            label: {
                show: false,
                formatter: '{b}',
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            seriesLayoutBy: 'row',
            radius: ['25%', '35%'],
            center: ['50%', '50%']
        }
    ]
};
 dat = option.dataset.source[1];

let _t = 0;

setInterval(() => {
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: _t % dat.length
    });
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1,
        dataIndex: _t % dat.length
    });

    _t++;

    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: _t % dat.length
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: _t % dat.length
    });


}, 3000)