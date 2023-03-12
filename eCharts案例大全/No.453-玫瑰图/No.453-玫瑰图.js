var colors = [
    '#5e81ec',
    '#ffc855',
    '#98e79b',
    '#00d695',
    '#00b29a',
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc',
];
var data = [
    { value: 55, name: '煤' },
    { value: 38, name: '电' },
    { value: 32, name: '油' },
    { value: 30, name: '其他' },
    { value: 28, name: '气' },
];
var total = data.reduce((p, v) => {
    return p + v.value;
}, 0);
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
    },
    color: colors,
    calculable: true,
    series: [
        {
            type: 'pie',
            radius: ['30%', '65%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
                show: true,
                color: 'inherit',
                position: 'outside',
                fontSize: 14,
                formatter:"{b} {d}%",
            },
            labelLine: {
                length: 1,
                length2: 20,
                smooth: true,
            },
            data: data,
        },
    ],
};
