// 动态数据与图表配置分离
var series_data = [{
    value: 1959,
    name: '服装鞋包'
}];

option = {
    series: [{
        type: 'pie',
        cursor: 'default',
        radius: ['49.5%', '50%'],
        center: ['50%', '50%'],
        color: '#00CCFF',
        label: {
            show: true,
            position: 'center',
            formatter: [
                '{x|{c}}',
                '{x|{b}}'
            ].join('\n'),
            rich: {
                x: {
                    fontSize: 25,
                    padding: 5,
                },
            }
        },
        data: series_data,
    }],
    animation: false,
};

// echarts 编辑器默认 init 的 chart 为 myChart
myChart.on('click', function(params) {
    console.log(params);
});