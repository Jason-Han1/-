var option = {
    title: {
        text: '公司所有项目详情',
        subtext: '目前所有',
        x: 'center',
        y: '10%'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['red', 'green'],
    legend: {
        orient: 'vertical',
        x: 'left',
        y: '30%',
        data: ['已完成项目', '未完成项目']
    },
    series: [{
        name: '项目详情',
        type: 'pie',
        radius: '50%',
        center: ['50%', '70%'],
        data: [{
                value: 8,
                name: '已完成项目'
            }, {
                value: 5,
                name: '未完成项目'
            },

        ],
        itemStyle: {
            emphasis: {
                show: true,
                fontSize: '20',
            }
        },
        label: {
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
        },
    }]
};