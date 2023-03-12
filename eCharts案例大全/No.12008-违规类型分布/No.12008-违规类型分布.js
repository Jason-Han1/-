option = {
    legend: {
        data: ['行为', '管理', '装置', '指挥'],
        y: 'bottom',
        textStyle: {
            color: "#e1e3f0",
            fontSize: 16
        },
        itemGap: 30,
        itemWidth: 30,
        itemHeight: 10,
    },
    backgroundColor: '#031571',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '违规类型分布',
        type: 'pie',
        radius: ['54%', '72%'],
        color: ['#00a1e4', '#ff7c00', '#37ca5e', '#ffd900'],
        label: {
            show: false,
        },
        data: [{
            value: 10,
            name: '行为'
        }, {
            value: 10,
            name: '管理'
        }, {
            value: 10,
            name: '装置'
        }, {
            value: 10,
            name: '指挥'
        }]
    }]
};