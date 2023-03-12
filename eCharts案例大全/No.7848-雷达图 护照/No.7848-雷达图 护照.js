var data = [{
    name:'个人积分',
    value:[28, 36, 12, 68, 232, 336,458,569,165,146,87,35]
},{
    name:'全国均值',
    value:[289, 356, 12, 16, 23, 36,58,69,126,246,355,466]
}]
var indicatorData =  [
           { name: '1月', max: 600},
           { name: '2月', max: 600},
           { name: '3月', max: 600},
           { name: '4月', max: 600},
           { name: '5月', max: 600},
           { name: '6月', max: 600},
           { name: '7月', max: 600},
           { name: '8月', max: 600},
           { name: '9月', max: 600},
           { name: '10月', max: 600},
           { name: '11月', max: 600},
           { name: '12月', max: 600},
        ]
var legendData=[];
var seriesData=[];
for(var i = 0;i<data.length;i++){
    legendData.push(data[i].name)
    seriesData.push( {
                value : data[i].value,
                name : data[i].name
            })
}

option = {
    color:['#4472c4','#ed7d31'],
    backgroundColor: 'rgba(255,255,255,0)',
    tooltip: {},
    legend: {
        data: legendData,
        itemWidth:8,
        itemHeight:8
    },
    radar: {
        indicator:indicatorData
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : seriesData
    }]
};