option = {
    legend: {
        top: 'top' // 图例显示位置
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
            name: '面积模式',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                {value: 10, name: 'rose 1'},
                {value: 20, name: 'rose 2'},
                {value: 15, name: 'rose 3'},
                {value: 8, name: 'rose 4'},
                {value: 10, name: 'rose 5'},
                {value: 20, name: 'rose 6'},
                {value: 15, name: 'rose 7'},
                {value: 18, name: 'rose 8'}
            ]
        }
    ]
};