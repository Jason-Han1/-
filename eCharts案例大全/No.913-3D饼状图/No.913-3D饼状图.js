/*************************
pie3D 尝试

更新时间: 2020.7.21 13:30 v0.5
使用组件: grid3D、xAxis3D、yAxis3D、zAxis3D、surface
 EC 版本: 4.8.0
 GL 版本：0.4.3
 公众号 : ZXand618的ECharts之旅 
 知乎号 : ZhXand618 
如果转载: 请注明出处

*************************
【 getParametricEquation 函数说明 】 :
*************************
    根据传入的
    startRatio（浮点数）: 当前扇形起始比例，取值区间 [0, endRatio)
    endRatio（浮点数）: 当前扇形结束比例，取值区间 (startRatio, 1]
    isSelected（布尔值）:是否选中，效果参照二维饼图选中效果（单选）
    isHovered（布尔值）: 是否放大，效果接近二维饼图高亮（放大）效果（未能实现阴影）
    
    生成 3D 扇形曲面

*************************
【 getPie3D 函数说明 】 :
*************************
    根据传入的饼图数据，生成模拟 3D 饼图的配置项 option
    
    饼图数据格式示意：
    [{
        name: '数据1',
        value: 10
    }, {
        // 数据项名称
        name: '数据2',
        value : 56,
        itemStyle:{
            // 透明度
            opacity: 0.5,
            // 扇形颜色
            color: 'green'
        }
    }]
    
*************************
【 鼠标事件监听说明 】 :
*************************
    click： 实现饼图的选中效果（单选）
            大致思路是，通过监听点击事件，获取到被点击数据的系列序号 params.seriesIndex，
            然后将对应扇形向外/向内移动 10% 的距离。
            
    mouseover： 近似实现饼图的高亮（放大）效果
            大致思路是，在饼图外部套一层透明的圆环，然后监听 mouseover 事件，获取
            到对应数据的系列序号 params.seriesIndex 或系列名称 params.seriesName，
            如果鼠标移到了扇形上，则先取消高亮之前的扇形（如果有）,再高亮当前扇形；
            如果鼠标移到了透明圆环上，则只取消高亮之前的扇形（如果有），不做任何高亮。
            
    globalout： 当鼠标移动过快，直接划出图表区域时，有可能监听不到透明圆环的 mouseover，
            导致此前高亮没能取消，所以补充了对 globalout 的监听。

        
*************************/

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
function getParametricEquation(startRatio, endRatio, isSelected, isHovered) {
    // 计算
    let midRatio = (startRatio + endRatio) / 2;

    let startRadian = startRatio * Math.PI * 2;
    let endRadian = endRatio * Math.PI * 2;
    let midRadian = midRatio * Math.PI * 2;

    // 如果只有一个扇形，则不实现选中效果。
    // if (startRatio === 0 && endRatio === 1) {
    //     isSelected = false;
    // }
    isSelected = false;

    // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
    let offsetX = isSelected ? Math.sin(midRadian) * 0.1 : 0;
    let offsetY = isSelected ? Math.cos(midRadian) * 0.1 : 0;

    // 计算高亮效果的放大比例（未高亮，则比例为 1）
    let hoverRate = isHovered ? 1.05 : 1;

    // 返回曲面参数方程
    return {
        u: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 200,
        },

        v: {
            min: 0,
            max: Math.PI,
            step: Math.PI / 200,
        },

        x: function (u, v) {
            if (midRatio - 0.5 < 0) {
                if (u < startRadian || u > midRadian + Math.PI) {
                    tmp = u - Math.PI - midRadian < 0 ? u + Math.PI - midRadian : u - Math.PI - midRadian;
                    return offsetX + ((Math.sin(startRadian) * tmp) / (Math.PI - midRadian + startRadian)) * hoverRate;
                }
                if (u > endRadian && u < midRadian + Math.PI) {
                    tmp = midRadian + Math.PI - u;
                    return offsetX + ((Math.sin(endRadian) * tmp) / (Math.PI - midRadian + startRadian)) * hoverRate;
                }
            } else {
                if (u < startRadian && u > midRadian - Math.PI) {
                    tmp = u + Math.PI - midRadian;
                    return offsetX + ((Math.sin(startRadian) * tmp) / (Math.PI - midRadian + startRadian)) * hoverRate;
                }
                if (u > endRadian || u < midRadian - Math.PI) {
                    tmp = midRadian - Math.PI - u < 0 ? midRadian + Math.PI - u : midRadian - Math.PI - u;
                    return offsetX + ((Math.sin(endRadian) * tmp) / (Math.PI - midRadian + startRadian)) * hoverRate;
                }
            }
            return offsetX + Math.sin(v) * Math.sin(u) * hoverRate;
        },

        y: function (u, v) {
            if (midRatio - 0.5 < 0) {
                if (u < startRadian || u > midRadian + Math.PI) {
                    tmp = u - Math.PI - midRadian < 0 ? u + Math.PI - midRadian : u - Math.PI - midRadian;
                    return offsetY + ((Math.cos(startRadian) * tmp) / (Math.PI - midRadian + startRadian)) * hoverRate;
                }
                if (u > endRadian && u < midRadian + Math.PI) {
                    tmp = midRadian + Math.PI - u;
                    return offsetY + ((Math.cos(endRadian) * tmp) / (Math.PI - midRadian + startRadian)) * hoverRate;
                }
            } else {
                if (u < startRadian && u > midRadian - Math.PI) {
                    tmp = u + Math.PI - midRadian;
                    return offsetY + ((Math.cos(startRadian) * tmp) / (Math.PI - midRadian + startRadian)) * hoverRate;
                }
                if (u > endRadian || u < midRadian - Math.PI) {
                    tmp = midRadian - Math.PI - u < 0 ? midRadian + Math.PI - u : midRadian - Math.PI - u;
                    return offsetY + ((Math.cos(endRadian) * tmp) / (Math.PI - midRadian + startRadian)) * hoverRate;
                }
            }
            return offsetY + Math.sin(v) * Math.cos(u) * hoverRate;
        },

        z: function (u, v) {
            return Math.cos(v) > 0 ? 3: -0;
        },
    };
}

// 生成模拟 3D 饼图的配置项
function getPie3D(pieData) {
    let series = [];
    let sumValue = 0;
    let startValue = 0;
    let endValue = 0;
    let legendData = [];

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
            false,
            false
        );

        startValue = endValue;

        legendData.push(series[i].name);
    }

    // // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
    series.push({
        name: 'mouseoutSeries',
        type: 'surface',
        parametric: true,
        wireframe: {
            show: false,
        },
        itemStyle: {
            opacity: 0.1,
            color: '#E1E8EC',
        },
        parametricEquation: {
            u: {
                min: 0,
                max: Math.PI * 2,
                step: Math.PI / 200,
            },
            v: {
                min: 0,
                max: Math.PI,
                step: Math.PI / 200,
            },
            x: function (u, v) {
                return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 1.7;
            },
            y: function (u, v) {
                return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 1.7;
            },
            z: function (u, v) {
                return Math.cos(v) > 0 ? -0.5 : -1;
            },
        },
    });
    
    // // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
    series.push({
        name: 'mouseoutSeries',
        type: 'surface',
        parametric: true,
        wireframe: {
            show: false,
        },
        itemStyle: {
            opacity: 0.1,
            color: '#E1E8EC',
        },
        parametricEquation: {
            u: {
                min: 0,
                max: Math.PI * 2,
                step: Math.PI / 200,
            },
            v: {
                min: 0,
                max: Math.PI,
                step: Math.PI / 200,
            },
            x: function (u, v) {
                return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 1.7;
            },
            y: function (u, v) {
                return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 1.7;
            },
            z: function (u, v) {
                return Math.cos(v) > 0 ? -1.5 : -2;
            },
        },
    });
    series.push({
        name: 'mouseoutSeries',
        type: 'surface',
        parametric: true,
        wireframe: {
            show: false,
        },
        itemStyle: {
            opacity: 0.1,
            color: '#E1E8EC',
        },
        parametricEquation: {
            u: {
                min: 0,
                max: Math.PI * 2,
                step: Math.PI / 200,
            },
            v: {
                min: 0,
                max: Math.PI,
                step: Math.PI / 200,
            },
            x: function (u, v) {
                return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 1.9;
            },
            y: function (u, v) {
                return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 1.9;
            },
            z: function (u, v) {
                return Math.cos(v) > 0 ? -2.5 : -2.5;
            },
        },
    });

    // 准备待返回的配置项，把准备好的 legendData、series 传入。
    let option = {
        //animation: false,
        legend: {
            left: '50%',
            top: 'center',
            textStyle:{
                fontSize:8
            },
            // icon:'diamond',
            data: legendData,
            formatter: (params) => {
                return params ;
            },
        }, 
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: {},
        grid3D: {
            left: 'left',
            width:'50%',
            show: false,
            boxHeight: 5,
            boxWidth:50,
            boxDepth:50
        },
        series: series,
    };
    return option;
}

// 传入数据生成 option
option = getPie3D([
    {
        name: '性能测试',
        value: 134,
        itemStyle: {
            color: '#99D3F3',
        },
    },
    {
        name: '安全功能',
        value: 156,
        itemStyle: {
            color: '#007AFF',
        },
    },
    {
        name: '功能测试',
        value: 57,
        itemStyle: {
            color: '#2563AE',
        },
    },
    {
        name: '易用性测试',
        value: 51,
        itemStyle: {
            color: '#1F9AA7',
        },
    },
    {
        name: '代码安全',
        value: 11,
        itemStyle: {
            color: '#F5B64C',
        },
    },
]);
