var geoCoordMap = {
'梅园1号楼':[117.181815,36.684722],
'梅园2号楼':[117.181691,36.684176],
'梅园3号楼':[117.181772,36.68387],
'梅园4号楼':[117.183686,36.615066],
'竹园1号楼':[117.182566,36.684628],
'竹园2号楼':[117.182802,36.684232],
'竹园3号楼':[117.182378,36.68517],
'松园1号楼':[117.184754,36.684718],
'松园2号楼':[117.184706,36.684211],
'松园3号楼':[117.184551,36.683793],
'樱园1楼':[117.185683,36.68434],
'榴园1号楼':[117.181029,36.681565],
'榴园2号楼':[117.181093,36.681131],
'土木楼':[117.185658,36.682284],
'科学西楼':[117.186098,36.681832],
'科学东楼':[117.18649,36.681772],
'逸夫楼':[117.18819,36.681453],
'博文楼':[117.188813,36.680571],
'外文楼':[117.189242,36.679522],
'建艺馆':[117.190277,36.677031],
'信息楼':[117.188373,36.676803],
'科技馆':[117.190513,36.6758],
'艺术2':[117.188925,36.675325],
'综合实验2':[117.188185,36.675915],
'建大超市':[117.183593,36.683581],
'万家隆超市':[117.18193,36.682897],
'樱园学生超市':[117.185422,36.684441],
'建大书店':[117.183888,36.685482],
'商业街':[117.178486,36.682621],
'文苑餐厅':[117.183604,36.683365],
'雅苑餐厅':[117.181743,36.682664],
'火车餐厅':[117.18546,36.683365],
'北门小吃街':[117.181577,36.688536],
'校医院':[117.179763,36.679347],
'学术报告厅':[117.187852,36.67752],
'图书馆':[117.188029,36.678711],
'体育馆':[117.181743,36.686721],
'校车起发站':[117.183787,36.684445],
'映雪长廊':[117.183658,36.682789]
};



var BJData=[];
for(var x in geoCoordMap){
    if(x=='信息楼')
        continue;
    BJData.push(
        [{
            name: x,
            value: Math.random()*100
        }, {
            name: '信息楼'
        }]

    )
}

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var covertColor = function(data){
    var value= data[1].value;
    var result = 'aqua';
    if(value>80){
        result = '#ff3333';
    }else if(value>60){
        result = 'orange';
    }else if(value>40){
        result = 'yellow';
    }else if(value>60){
        result = 'lime';
    }
    return result;
};

var color = ['#56e88c', '#ffa022', '#46bee9'];
var series = [];
[['山东建筑大学', BJData]].forEach(function (item, i) {
    series.push(
        {
            name: item[2],
            type: 'lines',
            zlevel: 2,
            coordinateSystem: 'geo',
            effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
//            symbol: planePath,
                symbol:'arrow',
                symbolSize: 5
            },
            lineStyle: {
                normal: {
                    color: '#60ff44',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            //       name: item[1],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return 3 + val[2] / 10;
            },
            itemStyle: {
                normal: {
                    color: '#60ff44'
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            })
        });
});

option = {
    backgroundColor: 'black',
    title : {
        text: '建大流量监控图',
        subtext: '建大流量监控图',
        left: 'center',
        textStyle : {
            color: 'white'
        }
    },
    tooltip : {
        trigger: 'item'
    },
     geo: {
        show: true,
        roam: true,
        center: [117.19,36.682],
        zoom: 2200,
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
};