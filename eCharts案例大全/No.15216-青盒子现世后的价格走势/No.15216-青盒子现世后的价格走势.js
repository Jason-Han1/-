option = {
    timeline: {
        data: [
            '青盒子', '红盒子', '瞄金', '雪涛'
        ],
        axisType: 'category',
        show: true,
        autoPlay: false,
        // playInterval: 1000
    },
    options: [{
        title: {
            text: '青盒子现世后的价格走势',
            subtext: '数据来自公众号：漓辞的记账本'
        },
        grid: {
            top: 80,
            bottom: 100
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            name: '时间',
            data: ["5-22", "5-29", "6-5", "6-12"]
        },
        yAxis: {
            type: 'value',
            name: '单位：元',
            max: 1500,
            min:750
        },
        series: [{
            name: '青盒子价格',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            data: [1100, 950, 900, 850]
        }]
    }, {
        yAxis: {
            type: 'value',
            name: '单位：元',
            max: 2500,
            min:1500
            
        },
        series: [{
            name: '红盒子价格',
            'data': [2000, 1900, 1800, 1700]
        }]
    }, {
        yAxis: {
            type: 'value',
            name: '单位：元',
            max: 400,
            min:200
        },
        series: [{
            name: '瞄金价格',
            'data': [300, 280, 280, 230]
        }]
    }, {
        yAxis: {
            type: 'value',
            name: '单位：元',
            max: 600,
            min:400
        },
        series: [{
            name: '雪涛价格',
            'data': [450, 500, 470, 470]
        }]
    }]

};