
option = {
    title: {
        text: '同名数量统计',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ["Apple", "Grapes", "Pineapples", "Oranges", "Bananas"]
    },
    series: [{
        name: '姓名',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        label: {
            show: true,
            position: 'inside',
            formatter: '{d}%'
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        data: [{
            value: 335,
            name: "Apple"
        }, {
            value: 310,
            name: "Grapes"
        }, {
            value: 234,
            name: "Pineapples"
        }, {
            value: 135,
            name: "Oranges"
        }, {
            value: 1548,
            name: "Bananas"
        }],

    }]
};