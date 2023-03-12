var myData = [
    {
        value: 137,
        name: '数学',
    },
    {
        value: 103,
        name: '语文',
    },
    {
        value: 124,
        name: '英语',
    },
    {
        value: 180,
        name: '理综',
    },
];
option = {
    color: ['#1aa3ff', '#04f9fa', '#16bd87', '#c961ff', '#7cfc12'],
    tooltip: {
        trigger: 'item',
        formatter: '{b}：{c} ({d}%)',
    },
    legend: {
        bottom: '20%',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#fff',
            fontSize: '14',
        },
    },
    series: [
        // 内圈
        {
            type: 'pie',
            center: ['50%', '40%'],
            radius: ['33.5%', '35.5%'],
            silent: true, //取消高亮
            label: { show: false, position: 'center' },
            data: myData,
        },
        // 外圈
        {
            type: 'pie',
            center: ['50%', '40%'],
            radius: ['40%', '50%'],
            label: { show: false, position: 'center' },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 33,
                    lineHeight: 45,
                    formatter: (params) => {
                        return '{name|' + params.name + '}\n{value|' + params.value + '}';
                    },
                    rich: {
                        name: {
                            color: '#fff',
                        },
                        value: {
                            color: '#04F9FA',
                        },
                    },
                },
            },
            data: myData,
        },
    ],
};

activeLoop();

function activeLoop() {
    // 循环高亮显示   seriesIndex：1   外圈高亮
    let index = -1; // 高亮下标
    const dataLength = myData.length;
    var timeoutloop = setInterval(() => {
        // 清除之前的高亮
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 1,
            dataIndex: index,
        });
        myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 1,
            dataIndex: index,
        });
        index = (index + 1) % dataLength;
        // 当前下标高亮
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 1,
            dataIndex: index,
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: index,
        });
    }, 2000);
    // 鼠标划入
    myChart.on('mouseover', (e) => {
        // 停止定时器，清除之前的高亮
        clearInterval(timeoutloop);
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 1,
            dataIndex: index,
        });
        myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 1,
            dataIndex: index,
        });
    });
    // 鼠标离开
    myChart.on('mouseout', (e) => {
        activeLoop();
    });
}
