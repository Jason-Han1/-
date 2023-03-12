var data = [
    
     {name:"安庆",value:11476.0},
    
     {name:"安康",value:8797.0},
    
     {name:"安阳",value:14077.0},
    
     {name:"安顺",value:14657.0},
    
     {name:"白城",value:2629.0},
    
     {name:"白山",value:4855.0},
    
     {name:"白沙",value:181.0},
    
     {name:"白银",value:3315.0},
    
     {name:"百色",value:8666.0},
    
     {name:"蚌埠",value:3551.0},
    
     {name:"阿克苏",value:4521.0},
    
     {name:"阿勒泰",value:2205.0},
    
     {name:"阿坝",value:73430.0},
    
     {name:"阿拉善盟",value:6539.0},
    
     {name:"阿拉尔",value:355.0},
    
     {name:"阿里",value:301.0},
    
     {name:"鞍山",value:7560.0},
    
    ];

    var geoCoordMap = {

    "安庆":[117.04,30.49],
    "安康":[108.32,32.32],
    "安阳":[114.34,36.09],
    "安顺":[105.92,26.24],
    "白城":[122.83,45.61],
    "白山":[126.39,41.52],
    "白沙":[109.26,19.14],
    "白银":[104.20,36.54],
    "百色":[106.52,23.92],
    "蚌埠":[117.37,32.94],
    "阿克苏":[80.25,41.17],
    "阿勒泰":[88.125,47.838],
    "阿坝":[101.765,32.901],
    "阿拉善盟":[105.111,39.641],
    "阿拉尔":[81.03,40.3],
    "阿里":[81.15,30.17],
    "鞍山":[122.977,41.115],
};

    var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};
    var convertData1 = function (data){
    var res1 = [];
    for (var i = 0;i < data.length; i++){
        var geoCoord = geoCoordMap[data[i].name];
        geoCoord.pop();
        if (geoCoord){
            res1.push(geoCoord.concat(data[i].value));
        }
    }
    return res1;
}

    var option = {
        title:{
            text:'各城市间夜数',
            subtext:'17个城市',
            x:'center',
            y:'top',
            textStyle:{
                color:'red',
                fontSize:'29',
            },
        },
        tooltip:{},
        toolbox:{},
        legend:{
            x:'left',
            y:'top'
        },
        visualMap:{
            min:700,
            max:28000,
            show:true,
            
            },
        geo:{
            map:'china',
            roam:true,
            show:true,
        },
        series:[
            {
                type:'heatmap',
                coordinateSystem:'geo',
                data:convertData(data),
                name:'热力图'
            },
            {
                type:'scatter',
                coordinateSystem:'geo',
                data:convertData(data),
                name:'点'
            }
        ],
    };