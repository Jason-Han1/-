option = {
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '年龄段分析',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                {value: 40, name: '40岁'},
                {value: 38, name: '50岁'},
                {value: 32, name: '60岁'},
                {value: 30, name: '70岁'},
                {value: 28, name: '80岁'},
                {value: 26, name: '90岁'},
                {value: 22, name: '100岁'},
                {value: 18, name: '100岁以上'}
            ]
        }
    ]
};