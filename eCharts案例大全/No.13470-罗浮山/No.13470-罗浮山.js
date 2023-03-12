var cellphoneBrand = ['惠州市', '深圳市', '东莞市', '广州市', '佛山市','梅州市', '中山市'];
var cellphoneBrand1 = [ '河源市','揭阳市', '茂名市', '汕头市', '江门市','湛江市','珠海市'];
var cellphoneBrand2 = ['肇庆市', '汕尾市', '潮州市', '阳江市', '清远市', '韶关市','云浮市']

var data1 = [];
for (var i = 0; i < 7; ++i) {
    data1.push({
        name: cellphoneBrand[i],
        label: {
            position: 'inside',
            rotate: 'tangential'
        },
        children: [{
            name: cellphoneBrand1[i],
            value: 2,
            label: {
                position: 'inside',
                rotate: 'tangential'
            }

        }, {
            name: cellphoneBrand2[i],
            value: 2,
            label: {
                position: 'intside',
                rotate: 'tangential'
            }
        }]
    });
}


option = {
    title: {
        text: '罗浮山',
      //  subtext: 'data from IDC',
        link: ''
    },
    tooltip: {
        show: false
    },
    legend: {
        //type:'scroll',
        bottom: 20,
        x: 'center',
        data: ['惠州市', '深圳市', '东莞市', '广州市', '佛山市']
    },

    series: [{
        type: 'pie',
        radius: ['6%', '20%'],
        roseType: 'area',
        zlevel: 2,
        tooltip: {
            show: true,
            formatter: '{b}: {d}%'
        },

        label: {
            show: true,
            formatter: '{b}\n{d}%'
        },

        data: [{
                value: 39.43,
                name: '惠州市'
            },
            {
                value: 19.63,
                name: '深圳市'
            },
            {
                value: 18.70,
                name: '东莞市'
            },
            {
                value: 12.72,
                name: '广州市'
            },
            {
                value: 1.81,
                name: '佛山市'
            },
            {
                value: 7.70,
                name: '其他城市'
            }
        ]
    }, {
        type: 'sunburst',
        nodeClick: false,
        levels: [{}, {
            r0: '48%',
            r: '60%',
            label: {},
            itemStyle: {
                //shadowBlur: 2,
                borderWidth: 6,
                borderColor: '#42ced1',
            }
        }, {
            r0: '60%',
            r: '70%',
            label: {},
            itemStyle: {
                borderWidth: 6,
                borderColor: '#42b0d1',
                opacity: 0.8
            }
        }, {
            r0: '70%',
            r: '76%',

            itemStyle: {
                borderWidth: 6,
                borderColor: '#22bfb1',
                opacity: 0.6
            }
        }],
        data: data1,

    }]
};