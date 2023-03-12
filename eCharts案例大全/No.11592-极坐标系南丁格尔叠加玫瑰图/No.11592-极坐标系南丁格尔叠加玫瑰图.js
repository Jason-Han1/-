option = {
    polar: {},
    angleAxis: {
        min: 0,
        max: 350,
        interval: 30,
        startAngle: 90
    },
    radiusAxis: {
        min: 0,
        max: 10,
        interval: 2
    },
    title: {
        text: '南丁格尔玫瑰图',
        subtext: '南丁格尔玫瑰图',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [{
        stack: 'a',
        type: 'pie',
        radius: [60, 300],
        roseType: 'area',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 10,
                name: 'rose1'
            },
            {
                value: 5,
                name: 'rose2'
            },
            {
                value: 15,
                name: 'rose3'
            },
            {
                value: 25,
                name: 'rose4'
            },
            {
                value: 20,
                name: 'rose5'
            },
            {
                value: 35,
                name: 'rose6'
            },
            {
                value: 30,
                name: 'rose7'
            },
            {
                value: 40,
                name: 'rose8'
            }
        ]
    }, {
        stack: 'a',
        type: 'pie',
        radius: [60, 250],
        roseType: 'area',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 70,
                name: 'rose10'
            },
            {
                value: 80,
                name: 'rose20'
            },
            {
                value: 90,
                name: 'rose30'
            },
            {
                value: 100,
                name: 'rose40'
            },
            {
                value: 110,
                name: 'rose50'
            },
            {
                value: 120,
                name: 'rose60'
            },
            {
                value: 130,
                name: 'rose70'
            },
            {
                value: 140,
                name: 'rose80'
            }
        ]
    }]
}