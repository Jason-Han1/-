option = {
    title: {
        text: '高亮轮播',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                color: '#329ffa',
            },
            emphasis: {
                itemStyle: {
                    color: '#329f00',
                },
                label: {
                    show: true,
                },
            },
        },
    ],
};

let _t = -1;

setInterval(() => {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: _t % 7,
    });
    _t++;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: _t % 7,
    });
}, 1000);
