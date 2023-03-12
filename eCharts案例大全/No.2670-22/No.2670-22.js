let basedata = [
    { name: '正常运行', color: '#33cdf0', value: 20 },
    { name: '门禁离线', color: '#ff6c6c', value: 2 },
];

let total = 0;

for (let i = 0; i < basedata.length; i++) {
    total += basedata[i].value;
}

option = {
    backgroundColor: '#000f1e',
    title: [
        {
            text: total,
            subtext: '门禁总数',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                fontFamily: 'Verder',
                color: '#f5feff',
                textShadowColor: '#f5feff',
                textShadowBlur: 30,
            },
            subtextStyle: {
                align: 'center',
                fontSize: 16,
                color: ['#85c7e3'],
                fontWeight: 800,
            },
            x: 'center',
            y: 'center',
        },
    ],
    grid: {
        top: 70,
        left: 33,
        right: 150,
        bottom: 15,
        containLabel: false,
    },

    graphic: {
        elements: [
            {
                type: 'circle',
               
                left: 'center',
                top: 'center',
                shape:{
                    r:100
                }, 
                style: {
                    fill: 'rgba(51, 57, 67,0.3)',
                },
            },
        ],
    },
    series: [
        {
            name: basedata[0].name,
            type: 'pie',
            clockWise: true,
            startAngle: 90,
            center: ['50%', '50%'],
            radius: ['80%', '82%'],

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
                            color: basedata[0].color,
                        },
                    },
                },
                {
                    value: basedata[1].value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: basedata[1].color,
                        },
                    },
                },
            ],
        },
    ],
};
