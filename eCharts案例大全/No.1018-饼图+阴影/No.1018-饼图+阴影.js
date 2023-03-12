//颜色16进制换算rgba,添加透明度
function hexToRgba(hex, opacity) {
    return (
        'rgba(' +
        parseInt('0x' + hex.slice(1, 3)) +
        ',' +
        parseInt('0x' + hex.slice(3, 5)) +
        ',' +
        parseInt('0x' + hex.slice(5, 7)) +
        ',' +
        opacity +
        ')'
    );
}

// 数据
chartdata = [
    {
        name: '谷峰差收益',
        value: 90.04,
    },
    {
        name: '充电桩收益',
        value: 5.13,
    },
    {
        name: '需求响应',
        value: 2.31,
    },
    {
        name: '需量管理',
        value: 2.52,
    },
];
// 颜色系列
color = ['#00d2ff', '#22e5d1', '#f4d64e', '#0072ff'];
let color1 = [],
    color2 = [],
    color3 = [];
// 设置每层圆环颜色和添加间隔的透明色
color.forEach((item) => {
    color1.push(item, 'transparent');
    color2.push(hexToRgba(item, 0.7), 'transparent');
    color3.push(hexToRgba(item, 0.4), 'transparent');
});
let data1 = [];
let sum = 0;
// 根据总值设置间隔值大小
chartdata.forEach((item) => {
    sum += Number(item.value);
});
// 给每个数据后添加特定的透明的数据形成间隔
chartdata.forEach((item, index) => {
    if (item.value !== 0) {
        data1.push(item, {
            name: '',
            value: sum / 70,
            labelLine: {
                show: false,
                lineStyle: {
                    color: 'transparent',
                },
            },
            itemStyle: {
                color: 'transparent',
            },
        });
    }
});
console.log(color2, color3)
option = {
    backgroundColor: '#131D25',
    grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
    },
    tooltip: {
        formatter: (params) => {
            if (params.name !== '') {
                return params.name + ' : ' + params.value + '\n' + '%';
            }
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '52%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            startAngle: 90,
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    color: (params) => {
                        console.log('params', params)
                        return color2[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                formatter: '{b}' + ' ' + '{c}',
            },
            data: data1,
            z: 666,
        },
        {
            type: 'pie',
            radius: ['44%', '55%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            startAngle: 90,
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    color: (params) => {
                        return color3[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                formatter: '{b}' + ' ' + '{c}',
            },
            data: data1,
            z: 666,
        },
    ],
};
