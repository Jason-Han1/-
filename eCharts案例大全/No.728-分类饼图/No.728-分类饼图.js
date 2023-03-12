let color = ['#6597FB', '#5FF5E8', '#18BEF7', '#F67C2D'];
let echartData = [
    {
        name: '待审核',
        value: '3720',
    },
    {
        name: '通过',
        value: '2920',
    },
    {
        name: '拒绝',
        value: '2200',
    },
    {
        name: '审核中',
        value: '1420',
    },
];

let total = echartData.reduce((a, b) => {
    return a + b.value * 1;
}, 0);

option = {
    backgroundColor: '#000',
    color: color,
    title: [
        {
            text: '{val|' + total + '}',
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    val: {
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#FFF',
                    },
                },
            },
        },
    ],
    series: [
        {
            type: 'pie',
            radius: ['35%', '65%'],
            center: ['50%', '50%'],
            data: echartData,
            hoverAnimation: false,
            labelLine: {
                normal: {
                    length: 10,
                    length2: 20,
                    lineStyle: {
                        color: 'rgba(75, 219, 198, 1)',
                    },
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        return '{name|' + params.name + '}'+ '\n' +' {value|' + params.value +'次'+ '}';
                    },
                    rich: {
                        name: {
                            fontSize: 10,
                            fontFamily: 'PingFang SC',
                            fontWeight: 400,
                            color: 'auto',
                            lineHeight:20,
                            align: 'center'
                        },
                        value: {
                            fontSize: 13,
                            fontFamily: 'Source Han Sans CN',
                            color: '#FFF',
                            fontWeight: 400,
                            lineHeight:16,
                            align: 'center'
                        },
                    },
                },
            },
        },
    ],
};
