var scale = 1;
var echartData = [{
    value: 2154,
    name: 'A'
}, {
    value: 3854,
    name: 'B'
}, {
    value: 3515,
    name: 'C'
}, {
    value: 3515,
    name: 'D'
}, {
    value: 3854,
    name: 'E'
}, {
    value: 2154,
    name: 'F'
},{
    value: 2154,
    name: 'G'
}, {
    value: 3854,
    name: 'H'
}, {
    value: 3515,
    name: 'I'
}, {
    value: 3515,
    name: 'J'
}, {
    value: 3854,
    name: 'K'
}, {
    value: 2154,
    name: 'L'
}]
var legendData=[];
legendData=echartData.map(item=>{
    return item.name;
})
option = {
    backgroundColor: '#031f2d',
    tooltip:{
        trigger:"item"
    },
    legend: {
        show:true,
        data:legendData,
        right:'25%',
        top:'40%',
        orient:'vertical',
        height:300,
        itemGap:35,
        textStyle: {
            color: "#fff",
            fontSize: 16 * scale
        },
    },
    series: [{
        name: '总考生数量',
        type: 'pie',
        radius: ['42%', '53%'],
        center:['30%','50%'],
        hoverAnimation: false,
        color: ['#6f81da', '#00ffb4','rgb(141, 129, 220)', 'rgb(104, 187, 252)','rgb(200, 114, 56)','rgb(142, 244, 126)','#c487ee', 'rgb(73, 183, 101)','#deb140','rgb(233, 136, 116)' ,'rgb(84, 178, 224)','rgb(47, 172, 143)' ],
          itemStyle: { //图形样式
            normal: {
                borderColor: '#031f2d',
                borderWidth: 10,
            },
        },
        label: {
            show:false
        },
        labelLine: {
            normal: {
             show:false,
            }
        },
        data: echartData
    }]
};