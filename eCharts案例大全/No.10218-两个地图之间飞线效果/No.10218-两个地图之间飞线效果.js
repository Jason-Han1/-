//从省会城市基础地理坐标数据,转换 为散点图的系列数据;
var convertProvinceData = function() {
    var res = [];
    for (let key in provinceGeoCoordMap) {
         res.push({
             name: key,
             value: provinceGeoCoordMap[key],
         });
    }
    return res;
};
//从山东地图中的地理坐标数据转换为 散点图的系列数据;
var mapJson = echarts.getMap('shandong').geoJson.features;
var convertCityData = function(){
    
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

var data = [
  [
      [116.405285,39.904989],[117.000923,36.675807]
  ],
  [
      [117.190182,39.125596],[120.355173,36.082982]
  ],
  [
      [114.502461,38.045474],[118.047648,36.814939]
  ],
  [
      [112.549248,37.857014],[117.557964,34.856424]
  ],
  [
      [111.670801,40.818311],[118.66471,37.434564]
  ],
  [
      [123.429096,41.796767],[121.391382,37.539297]
  ],
  [
      [126.642464,45.756967],[119.107078,36.70925]
  ],
  [
      [121.472644,31.231706],[116.587245,35.415393]
  ],
  [
      [118.767413,32.041544],[117.129063,36.194968]
  ],
  [
      [119.306239,26.075302],[122.116394,37.509691]
  ],
];
//从两个地图的的地理坐标 转换为飞线数据
var convertData = function(){
    var res = [];
    for(let index in data){
	    var from = myChart.convertToPixel({geoIndex:0},data[index][0]);
	    from = myChart.convertFromPixel('grid',from);
	    var to = myChart.convertToPixel({geoIndex:1},data[index][1]);
	    to = myChart.convertFromPixel('grid',to);
        res.push({
            coords:[from,to]
        });
    }
	  
      return res;
};





option = {
    title: {
        text: '平面飞线图'
    },
    grid:{
        
    },
    xAxis: {
        type:'value',
        show:false,
        min:0,
        max:100,
        position:'top'
    },
    yAxis: {
        type:'value',
        show:false,
        min:0,
        max:100,
        inverse:true
    },
    geo:[
       {
            id:'china',
            map:'china',
            roam:false,
            center:[127,20],
            zoom:0.6,
        },
        {
            id:'shandong',
            map:'shandong',
            roam:false,
            center: [113.97, 39.01],
            zoom:0.5,
            
        }
    ],
    series:[
        {
            id:'zuobiao',
            name:'省会坐标',
            type:'scatter',
            geoIndex:0,
            coordinateSystem:'geo',
            symbol:'circle',
            symbolSize:function(val){
                return 10;
            },
            data:convertProvinceData(),
            label:{
                normal:{
                    show:true,
                    formatter:function(params){
                        return params.data.name;
                    },
                    position:'right'
                },
            },
            itemStyle:{
                normal:{
                    color:'#F62157'
                }  
            },
        },    
        {
            id:'cityzuobiao',
            name:'地市坐标',
            type:'scatter',
            geoIndex:1,
            coordinateSystem:'geo',
            symbol:'circle',
            symbolSize:function(val){
                return 10;
            },
            data:convertCityData(),
            label:{
                normal:{
                    show:true,
                    formatter:function(params){
                        return params.data.name;
                    },
                    position:'right'
                },
            },
            itemStyle:{
                normal:{
                    color:'#F62157'
                }  
            },
        },    
    ]
};
if(!app.inNode){
    setTimeout(function() {
        myChart.setOption({
            series: [
                {
                    id:'feixian',
                    type:'lines',
                    coordinateSystem:'cartesian2d',
                    xAxisIndex:0,
                    yAxisIndex:0,
                    /*data:[
                        {
                            coords:[
                                [0,0],[40,40]    
                            ]
                        }    
                    ],*/
                    data: convertData(),
                    effect: {
                        show: true,
                        trailLength: 0,
                        symbol: 'arrow',
                        color: '#00FFFF',
                        symbolSize: 8
                    },
                    lineStyle:{
                        curveness:0.6
                    }
                }
            ]
        });
        
    }, 10);
    
}
