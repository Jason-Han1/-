getData = () => {
    let data = {
        // 后台获取到的数据
        // 能量值最大值
        max: ['50','70','80','90','-50','100','90'],
        // 能量值最小值
        min: ['-20','20','50','20','-10','80','50'],
    };
    return {
        base: data.min.map(minValue => minValue > 0 ? minValue : 0),
        top: data.max.map((maxValue, index) => maxValue - data.min[index]),
        bottom: data.min.map(minValue => minValue < 0 ? minValue : 0),
    }
}
option = {
    tooltip: {},
    title: {
        text: '范围柱状图'
    },
    dataset: {
        source: {
            'xData': ['星期一','星期二','星期三','星期四','星期五','星期六','星期天'],
            '辅助': getData().base,
            '负值': getData().bottom,
            '能量值范围': getData().top,
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    series: [
        { 
            type: 'bar', 
            stack: 'all',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            }, 
            silent: true 
            
        },
        { type: 'bar', stack: 'all' },
        { type: 'bar', stack: 'all' }
        ]
};