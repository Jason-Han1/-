let labelLineColor = 'rgba(255,255,255,.3)';
let unit = '个';
let unit1 = '次';
let fontSize = 20;
let bgColor = '#031845';

option = {
    backgroundColor: bgColor,
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        show: false,
    },
    series: [
        // 底层背景色
        {
            name: '作业次数',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            z:-1,
            radius:['64%', '65%'],
            color:"rgb(5, 68, 86)",
            label: {
                normal: {
                    position: 'inner',
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    name: '',
                },
                {
                    value: 100,
                    name: '',
                },
                {
                    value: 100,
                    name: '',
                },
            ],
           
        },
        // 环
        {
            name: '作业次数',
            type: 'pie',
            emphasis: {
                scale: true,
                scaleSize: 35,
            },
            radius: ['40%', '55%'],
            color: ['rgba(38, 154, 81,1)', 'rgba(52, 123, 215,1)', 'rgba(1, 193, 186,1)'],
            labelLine: {
                normal: {
                    show: true,
                    length: 50,
                    length2: 20,
                    lineStyle: {
                        width: 2,
                        color: labelLineColor,
                    },
                },
            },
            label: {
                normal: {
                    formatter: `{d|{c}}${unit}\n{hr|}\n{d|{b}}{c|}`,
                    rich: {
                        b: {
                            fontSize: 20,
                            color: '#12EABE',
                            align: 'left',
                            padding: 4,
                        },
                        hr: {
                            borderColor: labelLineColor,
                            width: '100%',
                            borderWidth: 2,
                            height: 0,
                        },
                        d: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4,
                        },
                        c: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4,
                        },
                    },
                },
            },
            data: [
                {
                    value: 100,
                    name: '数学',
                },
                {
                    value: 100,
                    name: '英语',
                },
                {
                    value: 100,
                    name: '语文',
                },
            ],
        },
    ],
};
