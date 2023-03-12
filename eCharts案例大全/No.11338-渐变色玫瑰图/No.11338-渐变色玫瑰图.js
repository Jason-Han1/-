option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        left: '20%',
        top: 'center',
        orient: 'vertical',
        itemWidth: 20,
        itemHeight: 20,
        icon: 'rect',
        data: ['一营', '二营', '三营', '五营', '政企中国']
    },
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#6777fe' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#32ccf3' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#33c4fa' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#2af0d5' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#e8474c' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#ff5ca1' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#726aff' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#a587ff' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#fe9039' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#f0ce39' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }],
    series: [{
        name: '各营过保局点统计',
        type: 'pie',
        radius: [20, 110],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        lableLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        data: [{
                value: 10,
                name: '一营'
            },
            {
                value: 5,
                name: '二营'
            },
            {
                value: 15,
                name: '三营'
            },
            {
                value: 25,
                name: '五营'
            },
            {
                value: 20,
                name: '政企中国'
            }
        ]
    }]
};