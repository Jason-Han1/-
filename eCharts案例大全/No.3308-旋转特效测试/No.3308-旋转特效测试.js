//更新时间: 2021.05.28 17:12 v1.0
//使用组件: grid3D、xAxis3D、yAxis3D、zAxis3D、surface曲面
//运行版本: 4.8.0，最高4.9.0
//脚本接入链接https://cdn.jsdelivr.net/npm/echarts-gl@1/dist/echarts-gl.min.js
//脚本echats 4.x兼容版本
//根据用户ZhXand618的模版曲面函数修改
//如果转载: 请注明出处
//制作者：by CC
//*************************
//【 getParametricEquation 曲面建造函数说明 】 :
//*************************
// 根据传入的
//startRatio（浮点数）: 当前扇形起始比例，取值区间 [0, endRatio)
//endRatio（浮点数）: 当前扇形结束比例，取值区间 (startRatio, 1]
//k（0~1之间的浮点数）：用于参数方程的一个参数，取值 0~1 之间，通过「内径/外径」的值换算而来。
// 生成 3D 扇形环曲面
//*************************
//【 getPie3D 函数说明 】 :
//*************************
//根据传入的
//pieData（object）：饼图数据
// internalDiameterRatio（0~1之间的浮点数）：内径/外径的值（默认值 1/2），当该值等于 0 时，为普通饼图
// 生成模拟 3D 饼图的配置项 option
// 备注：饼图数据格式示意如下
//[{
//     name: '数据1',
//     value: 10
// }, {
//    // 数据项名称
//    name: '数据2',
//    value : 56,
//    itemStyle:{
//        // 透明度
//       opacity: 0.5,
// 扇形颜色
//        color: 'green'
//    }
// }]
//**********************
// 曲面函数 series-surface.parametricEquation
function getParametricEquation(startRatio, endRatio, k, h) {
    let midRatio = (startRatio + endRatio) / 2;
    let startRadian = startRatio * Math.PI * 2;
    let endRadian = endRatio * Math.PI * 2;
    let midRadian = midRatio * Math.PI * 2;
    // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
    k = typeof k !== 'undefined' ? k : 1 / 3;
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
                return Math.cos(startRadian) * (1 + Math.cos(v) * k);
            }
            if (u > endRadian) {
                return Math.cos(endRadian) * (1 + Math.cos(v) * k);
            }
            return Math.cos(u) * (1 + Math.cos(v) * k);
        },

        y: function (u, v) {
            if (u < startRadian) {
                return Math.sin(startRadian) * (1 + Math.cos(v) * k);
            }
            if (u > endRadian) {
                return Math.sin(endRadian) * (1 + Math.cos(v) * k);
            }
            return Math.sin(u) * (1 + Math.cos(v) * k);
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
}
// 生成模拟 3D 饼图的配置项
function getPie3D(pieData, internalDiameterRatio) {
    let series = [];
    let sumValue = 0;
    let startValue = 0;
    let endValue = 0;
    let k =
        typeof internalDiameterRatio !== 'undefined'
            ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
            : 1 / 3;
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
                k: k,
            },
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

            k,
            series[i].pieData.value
        );

        startValue = endValue;
    }

    // 准备待返回的配置项，把准备好的series 传入。
    let option = {
        theme: {
            textStyle: {
                color: '#00eaff',
                fontSize: 26,
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
        //构建三维曲面
        grid3D: {
            environment: '#005fe5',
            show: false,
            boxHeight: 0,
            viewControl: {
                //视角控制

                alpha: 20, //3D视角
                rotateSensitivity: 0,
                zoomSensitivity: 0,
                panSensitivity: 0,
                autoRotate: true,
            },
        },
        series: series,
    };
    return option;
}

// 传入数据生成 option
option = getPie3D(
    [
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
        {
            name: '使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#00eaff',
            },
        },
        {
            name: '未使用',
            value: 5,
            itemStyle: {
                opacity: 1,
                color: '#006aff',
            },
        },
    ],
    0.95 //圆环粗细
);
