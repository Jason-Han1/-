/*
* 角度(圆锥)渐变
* 原理: 使用axisLine的color来模拟实现, 平滑的渐变过渡借助axisTick实现.
* 其他方案: axisTick的color设为image, 用角度渐变图片填充. 
          1.当使用ps生成的png图片时,此方案的问题是需要保持echarts大小不变,
          尺寸一旦变化就需要修改图片的分辨率, 和裁剪图片,适应场景有限制
*         2. 为了解除ps的限制,可以使用canvas的create-conical-gradient polyfill
          根据echarts尺寸以及仪表盘radius动态生成角度渐变的图片填充在axisTick中
* 
* 不均匀刻度
* 原理：通过计算每个splitNumber的单位刻度值实现，公式在81行parseValue方法
*/

// 角度渐变的关键色值，在ps中获取
// 一定要注意ps中角度渐变的起始角度要保持和图形的起始角度(startAngle)一致
const colors = [
    [0, 235, 15, 15],
    [0.1, 235, 15, 15],
    [0.16, 255, 246, 0],
    [0.4, 15, 235, 103],
    [0.54, 15, 235, 103],
    [0.67, 255, 246, 0],
    [0.78, 235, 15, 15],
    [0.9, 0, 99, 177],
    [1, 235, 15, 15],
];

// 将如: 0.04-0.16之间的渐变值补全
const gradientColors = [];
colors.forEach((color, i) => {
    if (i === colors.length - 1) return;
    let maxDiffValue = 0;
    const diffs = color.map((s, j) => {
        const diff = s - colors[i + 1][j];
        const positiveDiff = Math.abs(diff);
        if (Math.abs(maxDiffValue) < positiveDiff) {
            maxDiffValue = positiveDiff;
        }
        return diff;
    });
    gradientColors.push([color[0], `rgb(${color.slice(1).join(',')})`]);
    let start = color[0];
    const end = colors[i + 1][0];
    const step = (end - start) / maxDiffValue;
    for (let k = 0; k < maxDiffValue - 1; k++) {
        let rgb = 'rgb($0,$1,$2)';
        for (let o = 1; o < color.length; o++) {
            let c = color[o];
            c = c - diffs[o] / maxDiffValue;
            color[o] = c;
            rgb = rgb.replace(`$${o - 1}`, c);
        }
        start = start + step;
        gradientColors.push([start, rgb]);
    }
});
const lastColor = colors[colors.length - 1];
gradientColors.push([lastColor[0], `rgb(${lastColor.slice(1).join(',')})`]);

// 测试数据
const testData = {
    startAngle: 225,
    endAngle: -45,
    splitNumber: 6,
    max: 65,
    data: [30],
};

// 仪表盘axisLabel展示的值,个数为splitNumber + 1
const axisLabelData = [0, 40, 45, 50, 55, 60, 65];
// 仪表盘axisLabel根据splitNumber生成的值
const axisLabelOriginData = (() => {
    const data = [];
    for (let index = 0; index < testData.splitNumber + 1; index++) {
        //  echarts自动计算axisLabel时, 精确的是10位小数
        data.push(+((testData.max / testData.splitNumber) * index).toFixed(10));
    }
    return data;
})();

// 将正常值转为指针偏转的值
function parseValue(x, [kp, kn], [zp, zn]) {
    if (x === 0) return 0;
    const y = ((zn - zp) / (kn - kp)) * (x - kp) + zp;
    return y;
}
let value = testData.data[0];
let valueIndex = -1;
axisLabelData.some((item, index) => {
    valueIndex = index;
    return value <= item;
});
const k = [axisLabelData[valueIndex - 1], axisLabelData[valueIndex]];
const z = [axisLabelOriginData[valueIndex - 1], axisLabelOriginData[valueIndex]];
value = parseValue(value, k, z);

// 外层渐变圆环
const baseOut = {
    type: 'gauge',
    axisLabel: {
        show: false,
    },
    axisLine: {
        show: false,
        lineStyle: {
            color: gradientColors, // 因为使用axisLine填充的颜色之间会存在透明间隔, 所以使用axisTick来实现渐变平滑过渡.
        },
    },
    axisTick: {
        length: 4,
        lineStyle: {
            color: 'auto',
            width: 2, // 调整width和splitNumber来使渐变平滑过渡
        },
        splitNumber: 150, // 调整width和splitNumber来使渐变平滑过渡
    },
    splitLine: {
        show: false,
        lineStyle: {
            color: 'auto',
        },
    },
    detail: {
        show: false,
    },
};
// 内层刻度和指针
const baseInner = {
    radius: '70%',
    type: 'gauge',
    axisLine: {
        show: false,
        lineStyle: {
            color: gradientColors,
        },
    },
    splitLine: {
        length: 12,
        lineStyle: {
            color: 'auto',
        },
    },
    axisTick: {
        lineStyle: {
            width: 2,
            color: 'auto',
        },
        splitNumber: 10,
    },
    pointer: {
        width: 5,
        length: '70%',
    },
    axisLabel: {
        formatter(value) {
            const index = axisLabelOriginData.findIndex((item) => item === value);
            return axisLabelData[index];
        },
    },
};
option = {
    series: [
        baseOut,
        {
            ...baseInner,
            ...testData,
            data: [value],
            detail: {
                // 只支持字符串和函数
                formatter: String(testData.data[0]),
            },
        },
    ],
};