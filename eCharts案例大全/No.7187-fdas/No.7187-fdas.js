var color = ["#da0d68", "#da1d23", "#ebb40f"]
var data = [{
    name: '大类1',
    value: 15,
    children: [{
        name: '中类1',
        value: 6,
        itemStyle:{
            color:echarts.color.lerp(0.25,["#da0d68", "#da1d23"])
        }
    }, {
        name: '中类2',
        value: 2,
        itemStyle:{
            color:echarts.color.lerp(0.5,["#da0d68", "#da1d23"])
        }
    }, {
        name: '中类3',
        value: 3,
        itemStyle:{
            color:echarts.color.lerp(0.75,["#da0d68", "#da1d23"])
        }
    }]
},{
    name: '大类2',
    value: 6,
    children: [{
        name: '中类1',
        value: 1,
        itemStyle:{
            color:echarts.color.lerp(0.25,["#da1d23", "#ebb40f"])
        }
    }, {
        name: '中类2',
        value: 2,
        itemStyle:{
            color:echarts.color.lerp(0.5,["#da1d23", "#ebb40f"])
        }
    }, {
        name: '中类3',
        value: 3,
        itemStyle:{
            color:echarts.color.lerp(0.75,["#da1d23", "#ebb40f"])
        }
    }]
}];
// function loop(e,i,a,color){
//     if(!e.itemStyle || !e.itemStyle.color){
        
//     }
//     if(e.children&&e.children.length){
//     return e.children.map(function(){
//         loop(e,i,a,color)
//     })
//     }
//     return e
// }
// data = data.map(function(e,i,a){
//     return loop(e,i,a,color[i])
// })
option = {
    color:color,
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '95%'],
        sort: "",
        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '35%',
            r: '70%',
            label: {
                align: 'right'
            }
        }]
    }
};