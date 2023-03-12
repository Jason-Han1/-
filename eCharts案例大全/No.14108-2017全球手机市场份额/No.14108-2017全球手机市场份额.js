option = {
    title: {
        text: '2017全球手机市场份额',
        subtext: 'data from IDC',
        link: ''
    },
    tooltip: {
        show: true
    },
    legend: {
        //type:'scroll',
        bottom: 40,
        x: 'center',
        selected:{
            'others':false
        },
        data: ['Apple', 'Huawei', 'Xiaomi', 'Samsung', 'Oppo', 'others']
    },

    series: [{
        type: 'pie',
        radius: ['20%', '50%'],
        roseType: 'area',
        zlevel: 2,
        tooltip: {
            formatter: '{b}: {d}%'
        },
        label: {
            normal:{
            show: true,
            formatter: '{b}\n{d}%'
            }
        },
        data: [{
                value: 14.7,
                name: 'Apple'
            },
            {
                value: 10.4,
                name: 'Huawei'
            },
            {
                value: 6.3,
                name: 'Xiaomi'
            },
            {
                value: 21.6,
                name: 'Samsung'
            },
            {
                value: 7.6,
                name: 'Oppo'
            },
            {
                value: 39.4,
                name: 'others'
            }
        ]
    }]
};