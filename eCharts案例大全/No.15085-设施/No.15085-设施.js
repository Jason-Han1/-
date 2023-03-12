var data = [{
    value:48,
    name: '公共设施'
}, {
    value: 13,
    name: '道路交通设施'
}, {
    value: 12,
    name: '园林绿化设施'
}, {
    value: 22,
    name: '基础设施'
}];
option = {
        title: {
        text: '设施'
    },
    backgroundColor: 'rgba(255,255,255,0)',
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
        toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['公共设施', '道路交通设施', '园林绿化设施', '基础设施']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['40%', '58%'],
        color: ['#AF89D6', '#59ADF3', '#FF999A', '#FFCC67','#FCC667','#CC5962'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }]
};