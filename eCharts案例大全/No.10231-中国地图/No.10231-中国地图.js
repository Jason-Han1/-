
var convertData = function() {
    var res = [];
    for (let key in provinceGeoCoordMap) {
         res.push({
             name: key,
             value: provinceGeoCoordMap[key],
         });
    }
    return res;
};
 
option = {
    tooltip:{
        trigger:'item',
        formatter:function(params){
            console.log(params);
            if(typeof (params.value)[2] == 'undefined' ){
                return ` ${params.name} : ${params.value}`;
            }else {
                return ` ${params.name} : ${params.value[2]}`;
            }
        },
    },
    geo:{
        show:true,
        map:'china',
        label:{
            normal:{
                show:false  
            },
            emphasis:{
                show:false
            }
        },
        roam:true,
    },
    series:[
        {
            name:'涟漪散点',
            type:'effectScatter',
            coordinateSystem:'geo',
            data: [
                {
                    name : '北京',
                    value : provinceGeoCoordMap['北京'].concat(10)
                },
                {
                    name : '陕西',
                    value : provinceGeoCoordMap['陕西'].concat(60)
                }                    
            ],
            symbol:'circle',
            symbolSize:function(val){
                return 0;
            },
            label:{
                normal:{
                    formatter:'{b}',
                    position:'right',
                    show : true
                },
                emphasis:{
                    show:true
                }
            },
            itemStyle:{
                normal:{
                    color:'#05C3F9'
                }
            },
        },    
        {
            name : '散点',
            type:'scatter',
            coordinateSystem:'geo',
            symbol:'pin',
            symbolSize:function(val){
                return 0;
            },
            data: [
                {
                    name : '上海',
                    value : provinceGeoCoordMap['上海'].concat(10)
                },
                {
                    name : '广东',
                    value : provinceGeoCoordMap['广东'].concat(60)
                }                    
            ],
        },
        {
            name:'省会坐标',
            type:'scatter',
            coordinateSystem:'geo',
            symbol:'circle',
            symbolSize:function(val){
                return 10;
            },
            data:convertData(),
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
            name:'地图',
            type:'map',
            map:'china',
            geoIndex:0,
            data: [
                {name:'云南',value:1000},    
            ],
        },
    ]
};

































