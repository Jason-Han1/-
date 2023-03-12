const data = [{
        label: "幼年",
        value: 320
    },
    {
        label: "青年",
        value: 430
    },
    {
        label: "成年",
        value: 580
    },
    {
        label: "老年",
        value: 930
    }
]
const colors = [
    '55,156,248',
    '164,125,240',
    '225,132,91',
    '175,227,123',
    '42,191,191'
];
option = {
    backgroundColor: '#0f375f',
    legend: {
        orient: 'vertical',
        top: 'center',
        right: '2%',
        data: data.map(it => it.label),
        textStyle: {
            color: '#fff',
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        textStyle: {
            fontSize: 18
        }
    },
    series: [{
        name: '年龄段',
        type: 'pie',
        radius: ['30%', '60%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
            show: true,
            normal: {
                position: 'outside',
                fontSize: 18
            }
        },
        labelLine: {
            length: 2,
            length2: 7
        },
        data: data.map((it, i) => {
            return {
                value: it.value,
                name: it.label,
                itemStyle: {
                    color: `rgba(${colors[i]},0.7)`,
                    borderColor: `rgba(${colors[i]},1)`,
                    borderWidth: 1
                }
            };
        })
    }]
};