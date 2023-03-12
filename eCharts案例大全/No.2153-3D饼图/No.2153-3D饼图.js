/*************************

    根据传入的
    startRatio（浮点数）: 当前扇形起始比例，取值区间 [0, endRatio)
    endRatio（浮点数）: 当前扇形结束比例，取值区间 (startRatio, 1]
    isSelected（布尔值）:是否选中，效果参照二维饼图选中效果（单选）
    isHovered（布尔值）: 是否放大，效果接近二维饼图高亮（放大）效果（未能实现阴影）
    k（0~1之间的浮点数）：用于参数方程的一个参数，取值 0~1 之间，通过「内径/外径」的值换算而来。
    
    生成 3D 扇形环曲面

*************************
【 getPie3D 函数说明 】 :
*************************
    根据传入的
    pieData（object）：饼图数据
    internalDiameterRatio（0~1之间的浮点数）：内径/外径的值（默认值 1/2），当该值等于 0 时，为普通饼图
    
    生成模拟 3D 饼图的配置项 option
    
    备注：饼图数据格式示意如下
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
        
*************************/

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k,height) {

    // 计算
    let midRatio = (startRatio + endRatio) / 2;

    let startRadian = startRatio * Math.PI * 2;
    let endRadian = endRatio * Math.PI * 2;
    let midRadian = midRatio * Math.PI * 2;

    // 如果只有一个扇形，则不实现选中效果。
    if (startRatio === 0 && endRatio === 1) {
        isSelected = false;
    }
    
    // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
    k = typeof k !== 'undefined' ? k : 1 / 3 ;
    
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
            step: Math.PI / 32
        },
        
        v: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20
        },
        
        x: function(u, v) {
            if (u < startRadian) {
                return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian ){
                return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        
        y: function(u, v) {
            if (u < startRadian) {
                return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian ){
                return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        
        z: function(u, v) {
            if (u < - Math.PI * 0.5 ) {
                return Math.sin(u);
            }
            if (u > Math.PI * 2.5 ){
                return Math.sin(u);
            }
            return Math.sin(v) > 0 ? 1*height : -1;
        }
    };
}

// 生成模拟 3D 饼图的配置项
function getPie3D(pieData, internalDiameterRatio) {

    let series = [];
    let sumValue = 0;
    let startValue = 0;
    let endValue = 0;
    let legendData = [];
    let k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio): 1 / 3;

    // 为每一个饼图数据，生成一个 series-surface 配置
    for (let i = 0; i < pieData.length; i++) {

        sumValue += pieData[i].value;

        let seriesItem = {
            name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
            type: 'surface',
           
            parametric: true,
            wireframe: {
                show: false
            },
            pieData: pieData[i],
            pieStatus: {
                selected: false,
                hovered: false,
                k: k
            },
            labelLine:{
                show:true
            },
            label:{
                show:true
            }
        };

        if (typeof pieData[i].itemStyle != 'undefined') {

            let itemStyle = {};

            typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
            typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;

            seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem);
    }

    // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
    // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
    for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value;
        console.log(series[i]);
        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k,series[i].pieData.value);

        startValue = endValue;

        legendData.push(series[i].name);
    }

    

    // 准备待返回的配置项，把准备好的 legendData、series 传入。
    let option = {
        tooltip: {
            formatter: params => {
                if (params.seriesName !== 'mouseoutSeries') {
                    return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series[params.seriesIndex].pieData.value}`;
                }
            }
        },
        labelLine:{
            show:true,
        },
        label:{
            show:true,
        },
        legend: {
            data: legendData,
            textStyle:{
                color:'#fff',
                fontSize:14
            }
        },
        xAxis3D: {
            min: -1,
            max: 1
        },
        yAxis3D: {
            min: -1,
            max: 1
        },
        zAxis3D: {
            min: -1,
            max: 1
        },
        grid3D: {
            show: false,
            boxHeight: 20,
            //top: '30%',
            bottom: '50%',
            environment: '#021041',
            viewControl:{
                distance:300,
                alpha:25,
                beta:130,
            },
            
        },
        series: series
    };
    return option;
}

// 传入数据生成 option
option = getPie3D([{
    name: '已消除',
    value: 3,
   
}

, {
    name: '未消除',
    value: 2,
    itemStyle: {
        // opacity: 0.5,
        color:'rgba(209,126,23,.8)',
    }
},
{
    name: '消除',
    value: 1,
    itemStyle: {
        // opacity: 0.5,
        color:'green',
    }
},
],0);


