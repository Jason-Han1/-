
var convertData = function(){
    var res = [];
    for(let index in shiGeoCoordMap){
        res.push(
            {
                name:shiGeoCoordMap[index].name,
                value:shiGeoCoordMap[index].value
            }    
        );
    }
    return res;
}

var convertXianData = function(data){
    var mapJson = data.features;
    var res = [];
    for(let index in mapJson){
        res.push(
            {
                name:mapJson[index].properties.name,
                value:mapJson[index].properties.center
            }    
        );
    }
    return res;
};

option={
    geo:{
        show:true,
        map:'shandong',
        label:{
            normal:{
                show:false
            },
            emphasis:{
                show:false,
            }
        }
    },
    series:[
        {
            name:'涟漪散点',
            type:'effectScatter',
            coordinateSystem:'geo',
            data:convertData(),
            label:{
                normal:{
                    show:true,
                    formatter:'{b}',
                    position:'right'
                }
            }
        },    
    ]
};
let shandongOption = option;

myChart.on('click',function(params){
    echarts.registerMap(params.name,shandong[params.name]);
    option={
        geo:{
            show:true,
            map:params.name,
            roam:true,
        },
        series:[
            {
                name:'县级散点',
                type:'effectScatter',
                coordinateSystem:'geo',
                data:convertXianData(shandong[params.name]),
                label:{
                    normal:{
                        show:true,
                        formatter:'{b}',
                        position:'right'
                    }
                }
            }    
        ]
    };
    myChart.clear();
    myChart.setOption(option);
});
myChart.getZr().on('click',params=>{
    let pointInPixel = [params.offsetX, params.offsetY];
    if (!myChart.containPixel('geo', pointInPixel)) {
        //let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];
        
        
        myChart.clear();
        myChart.setOption(shandongOption);
    }   
});




