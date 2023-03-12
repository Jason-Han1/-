let basedata = [
    {
        name: 'use',
        value: 120,
        color: ['#1998d2', '#1998d2', '#0f67cd'],
    },
    {
        name: 'residue',
        value: 31,
        color: ['rgba(253,42,52,1)', 'rgba(253,42,52,0.5)', 'rgba(253,42,52,0.01)', 'rgba(0,0,0,0)'],
    },
];

let total = 0;

for (let i = 0; i < basedata.length; i++) {
    total += basedata[i].value;
}

option = {
    backgroundColor: '#000f1e',
    title: [
        {
            text: basedata[0].value,

            left: 'center',
            bottom: '10%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                fontFamily: 'Verder',
                color: '#f5feff',
                textShadowColor: '#f5feff',
                textShadowBlur: 30,
            },
        },
    ],
    grid: {
        top: 70,
        left: 33,
        right: 150,
        bottom: 15,
        containLabel: false
    },
    series: [
        {
            name: basedata[0].name,
            type: 'pie',
            clockWise: true,
            startAngle: 90,
            center: ['50%', '50%'],
            radius: ['90%', '95%'],

            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,

            data: [
                {
                    value: basedata[0].value,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: basedata[0].color[0],
                                },
                                {
                                    offset: 0.5,
                                    color: basedata[0].color[1],
                                },
                                {
                                    offset: 1,
                                    color: basedata[0].color[2],
                                },
                            ]),
                        },
                    },
                    label: {
                        normal: {
                            formatter: function (params) {
                                let percent = ((params.value / total) * 100).toFixed(0);
                                return percent + '%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#eefafb',
                            },
                        },
                    },
                },
                {
                    value: total - basedata[0].value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#313c4c',
                        },
                        
                    },
                },
            ],
        },
    ],
};
