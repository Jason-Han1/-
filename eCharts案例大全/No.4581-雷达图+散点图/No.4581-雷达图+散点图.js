
var data={
  "data":[[8,30,2825],[4,30,2825],[0,30,2825],[2,30,2825]] // [,角度,name]
}

var size=[];
var series = [];
for(let i=0;i<data.data.length;i++){
    size.push(data.data[i][2]);
}
for(let i=0;i<data.data.length;i++){
    series.push({
        coordinateSystem: 'polar',
        angleAxisIndex: 0,
        radiusAxisIndex: 0,
        type: 'scatter',
        symbolSize: 30,
        itemStyle: {
         shadowBlur: 10
        },
        label:{
            normal:{
                show:true,
                
            }
        },
        data: [data.data[i]]
    })
}
option = {
    radar: {
        indicator: [{text: '哈哈哈'}],
        center: ['50%', '50%'],
        radius: ['10%','100%'],
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        name: {
            show:false,
        },
        splitArea: {
            areaStyle: {
                color: ['#B8D3E4', '#96C5E3', '#7DB5DA', '#72ACD1']
            }
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show:false
        },
        axisLabel: {
            show: false,
        },
    },
     color: ['#E84B46', '#496FA5','#4A1BE7','#1BD6E7'],
        polar: {},
        angleAxis: {
            show:false,
            type: 'value',
            min:0,
            max:360
        },
        radiusAxis: {
            show:false,
            axisAngle: 0
        },
    series:series
};