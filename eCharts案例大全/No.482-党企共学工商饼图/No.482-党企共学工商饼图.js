let color = ['#0099EA', '#00DADF'];
let echartData = [
    {
        name: '共商',
        value: '14',
    },
    {
        name: '共学',
        value: '28',
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
            text: '总数',
            subtext: '{val|' + total + '次}',
            top: '45%',
            left: '49%',
            textAlign: 'center',
            itemGap: 30,
            subtextStyle: {
                rich: {
                    val: {
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#E8BA43',
                    },
                },
            },
            textStyle: {
                color: '#FFF',
                fontSize: 15
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
                    length: 0,
                    length2: 35,
                    lineStyle: {
                        color: '#0099EA',
                    },
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        return '{name|' + params.name + '}' + '\n' + ' {value|' + params.value + '次' + '}';
                    },
                    rich: {
                        name: {
                            fontSize: 14,
                            fontFamily: 'PingFang SC',
                            fontWeight: 400,
                            color: '#fff',
                            align: 'center',
                        },
                        value: {
                            fontSize: 14,
                            fontFamily: 'Source Han Sans CN',
                            color: '#E7B943',
                            fontWeight: 400,
                            lineHeight: 30,
                            align: 'center',
                        },
                    },
                },
            },
        },
    ],
};
