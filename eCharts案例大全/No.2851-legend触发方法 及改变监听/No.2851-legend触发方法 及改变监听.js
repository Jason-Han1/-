option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
// 监听legend改变
myChart.on('legendselectchanged', function (params) {
    // 获取点击图例的选中状态
    var isSelected = params.selected[params.name];
    // 在控制台中打印
    console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
    // 打印所有图例的状态
    console.log(params.selected);
});

// 外部触发legend改变
function legendChange(legend){
    myChart.dispatchAction({
      type: 'legendUnSelect', // 'legendSelect' 选中 
      name: legend,
    })
}
setTimeout(function() {
    legendChange('2011年')
}, 3000);

option && myChart.setOption(option);
