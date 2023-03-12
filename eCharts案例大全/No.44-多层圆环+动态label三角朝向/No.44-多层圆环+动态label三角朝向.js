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

backgroundColor = 'rgba(0,0,0,1)';
// 数据
chartdata = [
    {
        name: '竞争性谈判',
        value: 30,
    },
    {
        name: '公开招标',
        value: 50,
    },
    {
        name: '询价',
        value: 80,
    },
    {
        name: '单一来源',
        value: 90,
    },
];
radius = ['30%', '34%'];
// 颜色系列
color = ['#37FFC9', '#FFE777', '#19D6FF', '#32A1FF', '#cccccc', '#ff1111'];
labelshow = true;
centerimg = true;
lineshow = false;
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
// 每层圆环大小
let radius2 = [Number(radius[1].split('%')[0]) + 0 + '%', Number(radius[1].split('%')[0]) + 4 + '%'];
let radius3 = [Number(radius[1].split('%')[0]) + 4 + '%', Number(radius[1].split('%')[0]) + 8 + '%'];
option = {
    backgroundColor: backgroundColor,
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
                return params.name + ' : ' + params.value + '\n' + '(' + params.percent + '%)';
            }
        },
    },
    series: [
        // 最外层圆环
        {
            type: 'pie',
            radius: radius3,
            center: ['50%', '50%'],
            hoverAnimation: false,
            startAngle: 90,
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    color: (params) => {
                        return color1[params.dataIndex];
                    },
                },
            },
            label: {
                show: true,
                position: 'outside',
                formatter: (params) => {
                    let zzb = 0;
                    data1.forEach((item, index) => {
                        // 当前值一半加上前面的值是否大于50%（判断label朝向）
                        if (index <= params.dataIndex && item.name != '') {
                            if (index == params.dataIndex) {
                                zzb += Number(item.value) / 2;
                            } else {
                                zzb += Number(item.value);
                            }
                        }
                    });
                    if (params.name != '') {
                        // 若当前值一半加上前面的值的占比大于0.5三角形朝右，相反朝左
                        if (zzb / sum > 0.5) {
                            return '{txt|' + ((params.value * 100) / sum).toFixed(0) + '%}' + '\n{san|▶}';
                        } else {
                            return '{txt|' + ((params.value * 100) / sum).toFixed(0) + '%}' + '\n{san|◀}';
                        }
                    }
                },
                align: 'left',
                padding: [0, -50, 10, -60],
                rich: {
                    txt: {
                        color: '#fff',
                        width: 10,
                        height: 10,
                        padding: [10, 10, 0, 24],
                    },
                    san: {
                        padding: [12, -3, -20, 10],
                    },
                },
            },
            labelLine: {
                show: true,
                length: 15,
                length2: 60,
                lineStyle: {
                    color: '#fff',
                    width: 2,
                },
            },
            data: data1,
            z: 666,
        },
        {
            type: 'pie',
            radius: radius2,
            center: ['50%', '50%'],
            hoverAnimation: false,
            startAngle: 90,
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    color: (params) => {
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
            radius: radius,
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
