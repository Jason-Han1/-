var geoCoordMap = {
  //北外滩
    '国航大厦':[117.184715,36.668172],
    '国客':[117.193715,36.668972],
    '城投大厦':[117.190277,36.668031],
    '中信广场':[117.192713,36.669238],
    '建邦大厦':[117.194242,36.668522],
    '家化大厦':[117.196486,36.66891],
    '家化金融':[117.185486,36.66891],
    '宝矿国际':[117.195486,36.66851],
    '瑞丰国际':[117.187486,36.66891],
    '上海滩国际':[117.189486,36.66901],
    '金岸大厦':[117.192186,36.66791],
    '海运大楼':[117.193786,36.669938],
    '森林湾':[117.189486,36.66751],
    '国际港务':[117.195486,36.67151],
    //川北
    '海泰时代':[117.185325,36.672325],
    '虹口soho':[117.19225,36.671825],
    '利通广场':[117.183962,36.673162],
    '福德大厦':[117.184022,36.674941],
    '国际大厦':[117.185163,36.674347],
    '盛邦国际':[117.185062,36.671862],
    '嘉杰广场':[117.183963,36.673647],
    '高宝新时代':[117.183762,36.673762],

    '龙之梦':[117.188373,36.6794603],
    
      '香杉商务':[117.189073,36.6794603],
    '商务中心':[117.186573,36.6798603],
    '复城国际':[117.187873,36.6799603],
   // '广益大厦':[117.185325,36.672325],
    
     '建邦大厦':[117.191625,36.673325],
    '广益大厦':[117.193452,36.673225],
    '物华大厦':[117.190162,36.673162],
    '华西证券大厦':[117.192325,36.673325],
    
    
  //凉城
    '京抵商务':[117.183873,36.6851603],
    '凉城中心商办楼':[117.187573,36.6798603],
    '中兴理想':[117.186573,36.6799603],
 

};
var BJData=[];
for(var x in geoCoordMap){
    BJData.push(
        [{
            name: x,
            value: 250//Math.random()*1000
        }, {
            name: '虹口区'
        }]

    )
}
var color = ['#56e88c', '#ffa022', '#46bee9'];
var series = [];
[['山东建筑大学', BJData]].forEach(function (item, i) {
    series.push(
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            tooltip:{
                formatter: function (params) {
                    var strT = String(params.value);
                    var num = strT.lastIndexOf(',');
                    return params.name+":"+strT.substr(num+1);
                },
            },
            symbolSize: function (val) {
                return 10;//3 + val[2] / 10
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
    tooltip : {
        trigger: 'item'
    },
    visualMap: [{
        show: false,
        pieces: [
            {min: 300}, // 不指定 max，表示 max 为无限大（Infinity）。
            {min: 200, max: 300},
            {max: 200}     // 不指定 min，表示 min 为无限大（-Infinity）。
        ],
        color: ['#00D359', 'aqua', 'yellow'],
        textStyle: {
            color: '#fff'
        }
    }],
    geo: {
        show: true,
         roam: true,//缩放拖拽
        center: [117.186,36.679],
        zoom: 2750,
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#808080',
                //borderColor: '#111'
            },
            emphasis: {
                areaColor: '#808080'
            }
        }
    },
    series: series
};