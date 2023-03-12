option = {
    color: ['#1F78B4', '#A6CEE3', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C'],
    title: {
        text: '异常原因占比',
        bottom: 10,
        left: 'center',
        textStyle: {
            fontSize: 16
        }
    },
    series: [{
        type: 'pie',
        radius: ['28%', '66%'],
        center: ['50%', '45%'],
        label: {
            fontSize: 16,
            formatter: '{b} {d}%',
        },
        data: [{
                value: 70,
                name: '低能见度1'
            },
            {
                value: 50,
                name: '低能见度2'
            },
            {
                value: 30,
                name: '低能见度3'
            },
            {
                value: 25,
                name: '低能见度4'
            },
            {
                value: 15,
                name: '低能见度5'
            },
            {
                value: 5,
                name: '低能见度6'
            }
        ],
    }]
};