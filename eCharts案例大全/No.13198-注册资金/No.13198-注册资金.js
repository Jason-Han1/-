var data = [{
    value: 3661,
    name: '刑事案件'
}, {
    value: 5713,
    name: '执行案件'
}, {
    value: 9938,
    name: '商事案件'
}, {
    value: 17623,
    name: '行政案件'
}, {
    value: 3299,
    name: '民事案件'
}];
option = {
    backgroundColor: '#fff',
    title: {
        text: '未结',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 30
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['<10w', '10w-50w', '50w-100w', '100w-500w', '>500w']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '58%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{b}\n{c}',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }, {
        type: 'pie',
        radius: ['58%', '62%'],
        itemStyle: {
            normal: {
                color: '#F2F2F2'
            },
            emphasis: {
                color: '#ADADAD'
            }
        },
        label: {
            normal: {
                show: false,
                position: 'inner',
                formatter: '{c}家',
                textStyle: {
                    color: '#777777',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        data: data
    }]
};