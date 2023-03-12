
let olddata = []
for(var i=0;i<100;i++){
    for(var j=0;j<100;j++){
        olddata.push([-50+i,-50+j,0])
    }
}
let NowValue = []
option = {
    tooltip: {
        formatter: function (NowValues, ticket, callback){
            NowValue = NowValues.value
        }
    },
    backgroundColor: '#fff',
    visualMap: {
        show: false,
        dimension: 2,
        min: -1,
        max: 1,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        viewControl: {
            // projection: 'orthographic'
        }
    },
    series: [{
        type: 'surface',
        wireframe: {
            // show: false
        },
        data:olddata
    }]
}
let newdata = []

for(var i=0;i<100;i++){
    let HenData = []
    for(var j = 0; j<100;j++){
        HenData.push([0])
    }
    newdata.push(HenData)
}
// console.log(newdata)

window.onclick = function () {
    if(newdata[NowValue[0]+50] && newdata[NowValue[0]+50][NowValue[1]+50]){
        console.log(newdata[NowValue[0]+50][NowValue[1]+50] )
        newdata[NowValue[0]+50][NowValue[1]+50] = moreOne(newdata[NowValue[0]+50][NowValue[1]+50]*1 + 0.1)
    }
    if(newdata[NowValue[0]+49] && newdata[NowValue[0]+49][NowValue[1]+50]){
        newdata[NowValue[0]+49][NowValue[1]+50] = moreOne(newdata[NowValue[0]+49][NowValue[1]+50]*1*1 + 0.1)
    }
    if(newdata[NowValue[0]+51] && newdata[NowValue[0]+51][NowValue[1]+50]){
        newdata[NowValue[0]+51][NowValue[1]+50] = moreOne(newdata[NowValue[0]+51][NowValue[1]+50]*1 + 0.1)
    }
    if(newdata[NowValue[0]+50] && newdata[NowValue[0]+50][NowValue[1]+48]){
        newdata[NowValue[0]+50][NowValue[1]+48] = moreOne(newdata[NowValue[0]+50][NowValue[1]+48]*1 + 0.1)
    }
    if(newdata[NowValue[0]+50] && newdata[NowValue[0]+50][NowValue[1]+51]){
        newdata[NowValue[0]+50][NowValue[1]+51] = moreOne(newdata[NowValue[0]+50][NowValue[1]+51]*1 + 0.1)
    }
    console.log(newdata)
    let mynewData = []
    for(var i=0;i<newdata.length;i++){
        for(var j=0;j<newdata[i].length;j++){
            mynewData.push([i-50,j-50,newdata[i][j]])
        }
    }
    console.log(mynewData)
    option.series[0].data = mynewData
     myChart.setOption(option);
    console.log(NowValue)
}

function moreOne(data){
    return data>1?1:data
}









