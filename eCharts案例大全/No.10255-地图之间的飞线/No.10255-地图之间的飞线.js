//中国地图
var chinaURL = "/asset/get/s/data-1566876278844-UcxfLLWJ7.geoJson";
//山东地图
var shandongURL = "/asset/get/s/data-1566876461917-0K5cbEP-L.geoJson";
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';



$.getJSON(chinaURL,function(chinaGeoJson){
    //echarts.registerMap('china',chinaGeoJson);
    $.getJSON(shandongURL,function(shandongGeoJson){
        
        //echarts.registerMap('shandong',shandongGeoJson);
        chinaGeoJson.features.push.apply(chinaGeoJson.features,shandongGeoJson.features);
        echarts.registerMap('china',chinaGeoJson,
            {
                '':{
                    left:150,
                    top:40,
                    width:200
                }
                
            }
        );
        
        option = {
            backgroundColor : {
                type:'linear',
                x:0,
                y:0,
                x2:0,
                y2:1,
                colorStops:[
                    {offset:0,color:'#013954'},
                    {offset:1,color:'#013954'}
                ]
            },
            title:{
                text:'地图间飞线',
                subtext:'两个地图之间的飞线动态',
                textStyle:{
                    color:'#fff',
                },
                left:'center',
                top:20,
                textAlign:'',
            },
            legend:{
                left:300,
                top:50,
                textStyle:{
                    color:'#fff'
                }
                
            },
            tooltip:{},
            geo:{
                map:'china',
                roam:true,
                label:{
                    show:false
                }
            },
            series:[
                {
                    type:'map',
                    id:'china',
                    name:'china',
                    map:'china',
                    geoIndex:0,
                    roam:true,
                    center:[123.97, 29.71],
                    aspectScale:0.75,
                    /*boundingCoords:[
                      [-0,0],
                      [100,-30]
                    ],
                    zoom:3,*/
                    nameMap:{
                        '山东省':'我的省'
                    },
                    label:{
                        show:true,
                    },
                    itemStyle:{
                        areaColor:'#eee',
                        color:'blue',
                        borderColor:'#000',
                    },
                    showLegendSymbol:true,
                    data:[
                        {name:'北京市',value:200},
                        {name:'济南',value:300},
                        {name:'四川省',value:400}
                    ],
                    markPoint: {
                        symbolSize: 50,
                        symbol:'pin',
                        itemStyle: {
                            color: 'yellow'
                        },
                        data:[{x:100,y:100}]
                    }                
                },
                {
                    name: 'lines',
                    type: 'lines',
                    //zlevel: 3,
                    //geoIndex:1,
                    //coordinateSystem:'cartesian2d',
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: 'blue',
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: [
                        {
                            coords :[
                                [103.5901, 36.3043],
                                [117.1582, 36.8701]
                            ]
                        }
                    ]
                        
                    
                    
                },                
                
                      
            ]
        };
        myChart.setOption(option);   
        
   
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });//山东地图加载完毕
});//中国地图加载完毕