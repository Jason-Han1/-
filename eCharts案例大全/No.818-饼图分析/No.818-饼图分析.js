option = {
    backgroundColor: '#0f375f',
    color: ['#3682e1', '#35d789', '#9dcfd8', '#ba5879', '#d3da1d', '#21f1ef'],
    legend: {
        orient: 'vertical',
        top: 'center',
        right: '5%',
        itemGap: 50,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
        data: ['湖北', '河南', '山西', '陕西', '广西', '吉林'],
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['40%', '50%'],
            roseType: 'radius',
            minShowLabelAngle: 60,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    name: '湖北',
                    value: 1,
                },
                {
                    name: '河南',
                    value: 2,
                },
                {
                    name: '山西',
                    value: 3,
                },
                {
                    name: '陕西',
                    value: 4,
                },
                {
                    name: '广西',
                    value: 5,
                },
                {
                    name: '吉林',
                    value: 6,
                },
            ],
        },
        {
            name: '',
            type: 'pie',
            radius: ['25%', '25.2%'],
            center: ['40%', '50%'],
            color: '#00ffff',
            roseType: 'radius',
            minShowLabelAngle: 60,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [1],
        },
    ],
};
