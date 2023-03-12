let color = ['#454bb3', '#a17131', '#a3a71a', '#0aa75b', '#0a7fb3'];
data = [
    { name: '机关干部', value: 70 },
    { name: '专家学者', value: 90 },
    { name: '单位职工', value: 110 },
    { name: '农村居民', value: 130 },
    { name: '其他', value: 150 },
];
let max = Math.max(...data.map((item) => item.value));
let sum = eval(data.map((item) => item.value).join('+'));
option = {
    backgroundColor: '#000237',
    angleAxis: {
        show: 0,
        clockwise: false,
        max: max + max / 3,
    },
    radiusAxis: {
        type: 'category',
        data: data.map((item) => {
            return item.name + ':' + '　' + ((item.value / sum) * 100).toFixed() + '%';
        }),
        z: 10,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            color: '#fff',
            align: 'left',
            margin: -10,
        },
    },
    polar: {
        show: 0,
        center: ['50%', '50%'],
    },
    series: [
        {
            type: 'bar',
            data: data.map((item, index) => {
                return {
                    value: item.value,
                    name: item.name,
                    itemStyle: {
                        color: color[index],
                    },
                };
            }),
            label: {
                show: true,
                position: 'top',
            },
            barWidth: 10,
            coordinateSystem: 'polar',
        },
    ],
};
