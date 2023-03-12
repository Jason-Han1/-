option = {

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [0, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 25, name: 'rose4'},
                {value: 20, name: 'rose5'},
                {value: 35, name: 'rose6'},
                {value: 30, name: 'rose7'},
                {value: 10, name: 'rose11'},
                {value: 5, name: 'rose21'},
                {value: 15, name: 'rose13'},
                {value: 25, name: 'rose14'},
                {value: 20, name: 'rose15'},
                {value: 35, name: 'rose16'},
                {value: 30, name: 'rose17'},
                {value: 40, name: 'rose18'}
            ]
        }
    ]
};
