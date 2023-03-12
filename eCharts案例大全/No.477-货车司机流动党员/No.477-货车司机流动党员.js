let color = ['#0099EA', '#00DADF'];
let echartData = [
    {
        name: '货车司机流动党员',
        value: '863',
    },
    {
        name: '已纳管',
        value: '276',
        label: {show: true}
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
            text: '货车司机流动党员',
            subtext: '{val|' + total + '人}',
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
                fontSize: 15,
            },
        },
    ],
    series: [
        {
            name: '已纳管',
            type: 'pie',
            radius: ['35%', '65%'],
            center: ['50%', '50%'],
            data: echartData,
            hoverAnimation: false,
            labelLine: {
                normal: {
                    length: 0,
                    length2: 20,
                    lineStyle: {
                        color: '#0099EA',
                    },
                },
            },
            label: {
                normal: {
                    show: false,
                    formatter: '{a|{a}}\n{hr|}\n{c|{c}人}',
                    rich: {
                        a: {
                            fontSize: 14,
                            fontFamily: 'PingFang SC',
                            fontWeight: 400,
                            color: '#fff',
                            padding: 10,
                            lineHeight: 40,
                            textAlign: 'center'
                        },
                        hr: {
                            borderColor: '#4681ec',
                            width: '100%',
                            borderWidth: 2,
                            height: 0,
                        },
                        c: {
                            fontSize: 14,
                            fontFamily: 'Source Han Sans CN',
                            color: '#E7B943',
                            fontWeight: 400,
                            lineHeight: 30,
                            align: 'center',
                        },
                    }
                },
            },
        },
    ],
};
