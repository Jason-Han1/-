option = {
    color:['#7ABEFD','#83CB9D','#D2EE57','#FEC756','#FD7B7B','#8885D9'],
    title: {
        text: '占比',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        icon:'circle',
        top: 'center',
        right: '10%',
        width:120,
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
        formatter: function (name) {
            return  name + '%';
        }
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
            name: '半径模式',
            type: 'pie',
            radius: ['32', '60%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
                show: false
            },
           itemStyle: { //图形样式
                normal: {
                    borderColor: '#ffffff',
                    borderWidth: 2,
                },
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 25, name: 'rose4'},
                {value: 20, name: 'rose5'},
                {value: 35, name: 'rose6'},
                {value: 30, name: 'rose7'},
                {value: 40, name: 'rose8'}
            ]
        },
        
    ]
};
