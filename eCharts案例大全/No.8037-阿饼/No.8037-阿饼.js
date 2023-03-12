var cellphoneBrand = ['Apple', 'Huawei', 'Xiaomi', 'Meizu', 'Samsung', 'Oneplus', 'Oppo', 'Vivo'];
var cellphoneBrand1 = ['HTC', '中兴', '联想', '锤子', '谷歌', '索尼', '努比亚', '360'];
var cellphoneBrand2 = ['金立', '摩托罗拉', '诺基亚', '微软', 'LG', '酷派', 'zuk', '...']
var phoneValue=[14.7,10.4,6.3,21.6,7.6,39.4,44.3,4.6]

var data1 = [];
for (var i = 0; i < 8; ++i) {
    data1.push({
        name: phoneValue[i],
        label: {
            position: 'inside',
            rotate: 'tangential'
        },
        children: [{
            name: cellphoneBrand[i],
            value: 1,
            label: {
                position: 'inside',
                rotate: 'tangential',
            
            }

        }]
    });
}


option = {
    title: {
        text: '2017全球手机市场份额',
        subtext: 'data from IDC',
        link: ''
    },
    tooltip: {
        show: false
    },
    legend: {
        //type:'scroll',
        bottom: 20,
        x: 'center',
        data: ['Apple', 'Huawei', 'Xiaomi', 'Samsung', 'Oppo', 'others']
    },

    series: [{
        type: 'pie',
        radius: ['6%', '20%'],
        roseType: 'area',
        zlevel: 2,
        tooltip: {
            show: true,
            formatter: '{b}: {c}%'
        },

        label: {
            show: true,
            formatter: '{b}\n{c}%'
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
    }, {
        type: 'sunburst',
        nodeClick: false,
        levels: [{}, {
            r0: '48%',
            r: '60%',
        }, {
            r0: '60%',
            r: '70%',
        }],
        data: data1,

    }]
};