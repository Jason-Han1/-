//1.制作山东地图js
//2.制作山东城市地理坐标

var mapJson = echarts.getMap('shandong').geoJson.features;
var convertData = function(){
    
    var res = [];
    for(let index in mapJson){
        res.push(
            {
                name:mapJson[index].properties.name,
                value:mapJson[index].properties.center
            }    
        );
    }
    console.log(JSON.stringify(res));
    return res;
}

option={
    backgroundColor: 'rgba(0, 10, 52, 1)',
    geo:[{
        show:true,
        map:'shandong',
        label:{
            normal:{
                show:false
            },
            emphasis:{
                show:false,
            }
        },
        itemStyle:{
            borderColor: 'rgba(147, 235, 248, 0.6)',
            borderWidth: 0.0,
            areaColor: {
                type: 'linear-gradient',
                x: 0,
                y: 30,
                x2: 7,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#009DA1' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#005B9E' // 50% 处的颜色
                }],
                global: true // 缺省为 false
            },
            shadowBlur:10,
            shadowOffsetX:1,
            shadowOffsetY:2,
            shadowColor:'#000',
            opacity:0.5
        },
        emphasis:{
            
            itemStyle:{
                borderColor: 'rgba(147, 235, 248, 0.6)',
                borderWidth: 0,
                areaColor: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 30,
                    x2: 7,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#009DA1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#005B9E' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
                /*shadowBlur:10,
                shadowOffsetX:1,
                shadowOffsetY:2,
                shadowColor:'#000',*/
                opacity:0.5
            },        
        },
        silent:false,
        zlevel:5,
    },{
        show:true,
        map:'shandong',
        label:{
            normal:{
                show:false
            },
            emphasis:{
                show:false,
            }
        },
        top:'8%',
        left:'8%',
        itemStyle:{
            borderColor: 'rgba(147, 235, 248, 0.6)',
            borderWidth: 0.8,
            areaColor: {
                type: 'linear-gradient',
                x: 0,
                y: 30,
                x2: 7,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#009DA1' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#005B9E' // 50% 处的颜色
                }],
                global: true // 缺省为 false
            },
            shadowBlur:10,
            shadowOffsetX:1,
            shadowOffsetY:2,
            shadowColor:'#000',
            opacity:1
        },
        zlevel:10
    }],
    series:[
        {
            name:'涟漪散点',
            type:'effectScatter',
            coordinateSystem:'geo',
            geoIndex:1,
            data:convertData(),
            itemStyle:{
                color:'#fff',
            },
            label:{
                normal:{
                    show:true,
                    formatter:'{b}',
                    position:'right',
                    color:'#fff',
                }
            },
            zlevel:15
        },
    ]
};