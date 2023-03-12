// 数据
let dataList = [100,30,30,20,20];

// 求和，计算 label 的旋转角度
let sum = 0;
dataList.forEach((val)=> {
    sum += val;
});

let seriesData = [];

let addDeg = 0;
let deg = 0;

let color=['#ff6445','#50c3c6','#1af31d','#1558ff','#64bdfe'];

for (let i = 0; i < dataList.length; i++) {
    
    // 计算 label 的旋转角度
    addDeg = addDeg + (dataList[i]/sum*360);
    deg = addDeg - (dataList[i]/sum*180);
    
    seriesData.push({
        value: dataList[i],
        label:{
            rotate:deg
        },
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    });
}
let seriesOption = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [150, 155],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'inside',
                color: 'rgba(0,0,0,0)',
                formatter: '{styleName|{d}%}',
                rich:{
                    styleName:{
                        fontSize:20,
                        padding:[-70,0,0,0] // 整体偏移label位置
                    }
                }
            }
        }
    },
    data: seriesData
}];

option = {
    backgroundColor:'RGB(9,22,75)',
    color: color,
    tooltip: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}