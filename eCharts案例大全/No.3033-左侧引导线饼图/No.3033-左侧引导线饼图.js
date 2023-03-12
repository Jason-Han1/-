const color = ['#FF801C', '#00FEFF'];
const radius = 5;
const datas = [
    {
        name: '故障车辆',
        value: 25,
    },
    {
        name: '在线车辆',
        value: 75,
        otherName: '任务车辆',
        otherValue: 35,
    },
];
let sum = 0;
for (i of datas) {
    sum += i.value;
}
const title = {
    name: '车辆总数',
    value: sum,
    unit: '辆',
};
const rich = {
    name: {
        color: '#fff',
        fontSize: 16,
        align: 'left',
        padding: [0, 10, 0, 0],
    },
    value: {
        color: '#ccc',
        fontSize: 14,
        align: 'left',
    },
    title: {
        color: '#fff',
        fontSize: 17,
    },
    titleUnit: {
        color: '#fff',
        fontSize: 16,
        padding: [15, 0, 0, 0],
    },
    titleValue: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 600,
        padding: [15, 5, 5, 5],
    },
};
option = {
    color,
    backgroundColor: '#000E1A',
    series: [
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '60%'],
            data: datas,
            startAngle: 180,
            label: {
                show: true,
                position: 'outside',
                alignTo: 'labelLine',
                // ·圆点
                backgroundColor: 'auto', //圆点颜色，auto：映射的系列色
                height: 0,
                width: 0,
                lineHeight: 0,
                distanceToLabelLine: 0, //圆点到labelline距离
                borderRadius: radius,
                padding: [radius, -radius, radius, -radius],
                formatter: '',
            },
            labelLine: {
                normal: {
                    length: 50,
                    length2: 30,
                    lineStyle: {
                        width: 2,
                    },
                },
            },
            // labelLayout(params) {
            //     return {
            //         x: '10%',
            //     };
            // },
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '60%'],
            data: datas,
            startAngle: 180,
            label: {
                show: true,
                position: 'outside',
                alignTo: 'labelLine',
                formatter: (i) => {
                    if (i.data.otherValue) {
                        return `{name|${i.name}}\n\n{value|${i.value}（${i.data.otherName}：${i.data.otherValue}）}`;
                    } else {
                        return `{name|${i.name}}\n\n{value|${i.value}}`;
                    }
                },
                rich,
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 50,
                    length2: 30,
                    lineStyle: {
                        width: 2,
                    },
                },
            },
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '60%'],
            data: datas,
            startAngle: 180,
            label: {
                show: true,
                position: 'center',
                formatter: () => `{title|${title.name}}\n{titleValue|${title.value}}{titleUnit|${title.unit}}`,
                rich,
            },
        },
    ],
};
