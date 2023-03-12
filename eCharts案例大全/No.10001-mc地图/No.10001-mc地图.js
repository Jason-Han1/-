option = {
    color: '#128d15',
    xAxis: {
        name: '东（x轴）',
        maxInterval: 500,
        nameTextStyle: {
            color: '#f00',
        }
    },
    yAxis: {
        name: '北（z轴）',
        maxInterval: 500,
        inverse: true,
        min: -2000,
        nameTextStyle: {
            color: '#f00',
        }
    },
    series: [{
        symbolSize: 10,
        label: {
            show: true,
            position: 'right',
            formatter: '{b}',
        },
        data: [{
                name: '家',
                value: [245, 224],
            },
            {
                name: '雪屋',
                value: [1215, 554],
            },
            {
                name: '繁花似锦',
                value: [1544, 350],
            },
            {
                name: '丛林',
                value: [2419, 29],
            },
            {
                name: '刷怪笼',
                value: [919, 710],
            },
            {
                name: '被袭击的村庄',
                value: [1334, 664],
            },
            // {
            //     name: '地狱门（村庄下面）',
            //     value: [153, 64],
            // },
            {
                name: '红土山',
                value: [223, 1747],
            },
            {
                name: '沼泽',
                value: [-1922, 4451],
            },
            {
                name: '海底神殿',
                value: [215, 1095],
            },

        ],
        type: 'scatter'
    }]
};