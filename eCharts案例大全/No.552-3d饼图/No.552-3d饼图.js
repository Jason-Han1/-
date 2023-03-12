var data = [
    { name: '满意', value: 30, itemStyle: { color: '#c045ed' }, startRatio: 0, endRatio: 0.7 },
    { name: '非常满意', value: 45, itemStyle: { color: '#6442ee' }, startRatio: 0.7, endRatio: 1 },
    { name: '满意', value: 6, itemStyle: { color: '#3556ee' }, startRatio: 0.7, endRatio: 1 },
    { name: '基本满意', value: 14, itemStyle: { color: '#82cbe4' }, startRatio: 0.7, endRatio: 1 },
    { name: '不满意', value: 5, itemStyle: { color: '#56c0f4' }, startRatio: 0.7, endRatio: 1 },
];
var optionConfig = {};

const getPie3D = (pieData, internalDiameterRatio) => {
    //internalDiameterRatio:透明的空心占比
    let series = [];
    let sumValue = 0;
    let startValue = 0;
    let endValue = 0;
    let k = 1;
    pieData.sort((a, b) => {
        return b.value - a.value;
    });
    // 为每一个饼图数据，生成一个 series-surface 配置
    for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value;
        let seriesItem = {
            name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
            type: 'surface',
            parametric: true,
            wireframe: {
                show: false,
            },
            pieData: pieData[i],
            pieStatus: {
                selected: false,
                hovered: false,
                k: k,
            },
            radius: '50%',
            center: ['10%', '10%'],
        };

        if (typeof pieData[i].itemStyle != 'undefined') {
            let itemStyle = {};
            typeof pieData[i].itemStyle.color != 'undefined' ? (itemStyle.color = pieData[i].itemStyle.color) : null;
            typeof pieData[i].itemStyle.opacity != 'undefined'
                ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                : null;
            seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem);
    }

    // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
    // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。

    for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value;
        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].parametricEquation = getParametricEquation(
            series[i].pieData.startRatio,
            series[i].pieData.endRatio,
            false,
            false,
            k,
            series[i].pieData.value
        );
        startValue = endValue;
    }
    let boxHeight = getHeight3D(series, 25); //通过传参设定3d饼/环的高度，26代表26px
    // 准备待返回的配置项，把准备好的 legendData、series 传入。
    let option = {
        backgroundColor: '#203598',
        labelLine: {
            show: true,
            lineStyle: {
                color: '#404772',
            },
        },
        label: {
            show: true,
            position: 'outside',
            rich: {
                b: {
                    fontSize: 24,
                    lineHeight: 30,
                    fontWeight: 'bold',
                    color: '#fff',
                },
                c: {
                    fontSize: 18,
                    color: '#fff',
                },
            },
            formatter: '{b|{b}}\n{c|{c}%}',
        },
        tooltip: {
            backgroundColor: '#053A8D',
            formatter: (params) => {
                if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
                    let bfb = (
                        (option.series[params.seriesIndex].pieData.endRatio -
                            option.series[params.seriesIndex].pieData.startRatio) *
                        100
                    ).toFixed(2);
                    return (
                        `${params.seriesName}<br/>` +
                        `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>` +
                        `${bfb}%`
                    );
                }
            },
        },
        xAxis3D: {
            min: -1,
            max: 1,
        },
        yAxis3D: {
            min: -1,
            max: 1,
        },
        zAxis3D: {
            min: -1,
            max: 1,
        },
        grid3D: {
            show: false,
            boxHeight: boxHeight, //圆环的高度
            left: 0,
            top: 0, //3d饼图的位置
            viewControl: {
                //3d效果可以放大、旋转等，请自己去查看官方配置
                alpha: 20, //角度
                distance: 250, //调整视角到主体的距离，类似调整zoom
                rotateSensitivity: 0, //设置为0无法旋转
                zoomSensitivity: 0, //设置为0无法缩放
                panSensitivity: 0, //设置为0无法平移
                autoRotate: false, //自动旋转
            },
        },
        series: series,
    };
    return option;
};

//获取3d丙图的最高扇区的高度
const getHeight3D = (series, height) => {
    series.sort((a, b) => {
        return b.pieData.value - a.pieData.value;
    });
    return (height * 25) / series[0].pieData.value;
};

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
const getParametricEquation = (startRatio, endRatio, isSelected, isHovered, k, h) => {
    // 计算
    let midRatio = (startRatio + endRatio) / 2;
    let startRadian = startRatio * Math.PI * 2;
    let endRadian = endRatio * Math.PI * 2;
    let midRadian = midRatio * Math.PI * 2;
    // 如果只有一个扇形，则不实现选中效果。
    if (startRatio === 0 && endRatio === 1) {
        isSelected = true;
    }
    // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
    k = typeof k !== 'undefined' ? k : 1 / 3;
    // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
    let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
    let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
    // 计算高亮效果的放大比例（未高亮，则比例为 1）
    let hoverRate = isHovered ? 1.05 : 1;
    // 返回曲面参数方程
    return {
        u: {
            min: -Math.PI,
            max: Math.PI * 3,
            step: Math.PI / 32,
        },
        v: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20,
        },
        x: function (u, v) {
            if (u < startRadian) {
                return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        y: function (u, v) {
            if (u < startRadian) {
                return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        z: function (u, v) {
            if (u < -Math.PI * 0.5) {
                return Math.sin(u);
            }
            if (u > Math.PI * 2.5) {
                return Math.sin(u) * h * 0.1;
            }
            return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
        },
    };
};

option = getPie3D(data, 0.8);
console.log(option);
//是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
option.series.push({
    name: 'pie2d',
    type: 'pie',
    labelLine: {
        length: 10,
        length2: 10,
    },
    startAngle: -25, //起始角度，支持范围[0, 360]。
    clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
    radius: ['65%', '65%'],
    center: ['55%', '48%'], //指示线的位置
    data: data,
    itemStyle: {
        opacity: 0,
    },
});
