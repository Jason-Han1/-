 // 数据
let dataList = [
    {value: 9, name: '企业管理'},
    {value: 30, name: '企业服务'},
    {value: 11, name: '企业文化'},
    {value: 16, name: '运营服务'},
    {value: 14, name: '营销业务'},
    {value: 20, name: '营销管理'},
];
let dataAllList = [
     {value: 50, name: '营销占比'},
    {value: 50, name: '企业占比'},
];
// 求和，计算 label 的旋转角度
let sum = 0;
dataList.forEach((val)=> {
    sum += val.value;
});
let seriesData = [];
let addDeg = 0;
let deg = 0;
for (let i = 0; i < dataList.length; i++) {
    // 计算 label 的旋转角度
    addDeg = addDeg + (dataList[i].value/sum*360);
    deg = addDeg - (dataList[i].value/sum*180);

    seriesData.push({
        value: dataList[i].value,
        name: dataList[i].name,
        label:{
            rotate:deg
        },
        itemStyle: {
            normal: {
                color: 'rgba(0, 0, 0, 0)',
                borderWidth: 3,
                shadowBlur: 0,
                borderColor:'#fff',
            }
        }
    });
}
let seriesOption = [{
    type: 'pie',
    clockWise: false,
    radius: ['60%', '80%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'inside',
                color: '#4D77F4',
                formatter: function(pram){
                    return pram.data.name + pram.percent+'%'
                },
                padding:[-90,0, 0, 0],

            }
        }
    },
    data: seriesData
},
{
    type: 'pie',
    clockWise: false,
    radius: ["35%", '60%'],
    hoverAnimation: false,
    tooltip: {
        show: true,
    },
    itemStyle: {
        normal: {
            borderWidth: 3,
            shadowBlur: 0,
            borderColor:'#fff',
            label: {
                show: true,
                position: 'inside',
                color: '#fff',
                formatter: function(pram){
                    return pram.data.name
                },
                padding:[15,0,0,0],
                fontSize:12,
            }
        }
    },
    data: dataAllList
}];
option = {
    backgroundColor: '#F2E38C',
    color: ['#2EDBA4','#FFBE00'],
    title: {
                    subtext:'问题占比',//副标题文本
                    text: '企业营销',
                    top: 'center',
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    },
                    subtextStyle:{
                        color: '#fff',
                        fontSize: 18
                    }
     },
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}