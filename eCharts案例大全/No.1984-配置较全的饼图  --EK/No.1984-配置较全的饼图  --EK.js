data = [
    {
        name: '国家级',
        value: '7',
    },
    {
        name: '省部级',
        value: '20',
    },
    {
        name: '市级',
        value: '35',
    },
    {
        name: '校级',
        value: '81',
    },
];

option = {
    backgroundColor: '#112D69',
    title: [
        {
            text: 143,
            subtext: '科研项目数量',
            x: 'center',
            y: '33%',
            textStyle: {
                fontWeight: 'bold',
                color: '#FF9900',
                fontSize: '100',
                lineHeight: 170,
            },
            subtextStyle: {
                fontSize: 30,
                color: '#FF9900',
            },
        },
        {
            text: '-------------------------------------',
            left: '49%',
            top: '51%',
            textAlign: 'center',
            textStyle: {
                top: 10,
                fontSize: '14',
                fontWeight: '400',
                color: '#FFCC99',
                textAlign: 'center',
            },
        },
    ],
    legend: {
        show: false,
        data: [],
    },
    color: ['#0092FF', '#FD2D8A', '#FCE648', '#00BFC9'],
    tooltip: {
        trigger: 'item',
        padding: [10, 10, 10, 10],
        formatter: '{b} :<br/> {d}%',
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['50%', '50%'],
            label: {
                show: true,
                color: '#fff',
                fontSize: 16,
                position: 'outside',
                formatter: '{b}: {c} 项',
            },
            labelLine: {
                show: true,
                normal: {
                    length: 30,
                    length2: 50,
                    align: 'right',
                    lineStyle: {
                        width: 2,
                        color: '#fff',
                    },
                },
            },
            data: data,
        },
    ],
};