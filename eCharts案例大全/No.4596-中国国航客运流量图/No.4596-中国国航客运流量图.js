var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '乌鲁木齐': [87.9236,43.5883],
    '兰州': [103.5901,36.3043],
    '北京': [116.4551,40.2539],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '广州': [113.5107,23.2196],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '拉萨': [91.1865,30.1465],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '沈阳': [123.1238,42.1216],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '温州': [120.498,27.8119],
    '烟台': [120.7397,37.5128],
    '珠海': [113.7305,22.1155],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '苏州': [120.6519,31.3989],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '郑州': [113.4668,34.6234],
    '重庆': [107.7539,30.1904],
    '银川': [106.3586,38.1775],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '青岛': [120.4651,36.3373],
};

var BJData = [
    [{name:'北京'}, {name:'深圳',value:71}],
    [{name:'北京'}, {name:'重庆',value:64}],
    [{name:'北京'}, {name:'广州',value:58}],
    [{name:'北京'}, {name:'长沙',value:29}],
    [{name:'北京'}, {name:'海口',value:28}],
    [{name:'北京'}, {name:'南京',value:25}],
    [{name:'北京'}, {name:'武汉',value:23}],
    [{name:'北京'}, {name:'南昌',value:23}],
    [{name:'北京'}, {name:'烟台',value:21}],
    [{name:'北京'}, {name:'温州',value:17}],
    [{name:'北京'}, {name:'沈阳',value:14}],
    [{name:'北京'}, {name:'西宁',value:13}],
    [{name:'北京'}, {name:'合肥',value:9}],
    [{name:'北京'}, {name:'呼和浩特',value:9}],
    [{name:'北京'}, {name:'南通',value:8}],
    [{name:'北京'}, {name:'乌鲁木齐',value:1}],
    [{name:'北京'}, {name:'兰州',value:15}]
    
];

var SHData = [
    [{name:'上海'},{name:'深圳',value:136}],
    [{name:'上海'},{name:'北京',value:132}],
    [{name:'上海'},{name:'广州',value:117}],
    [{name:'上海'},{name:'厦门',value:65}],
    [{name:'上海'},{name:'哈尔滨',value:61}],
    [{name:'上海'},{name:'成都',value:59}],
    [{name:'上海'},{name:'大连',value:55}],
    [{name:'上海'},{name:'重庆',value:53}],
    [{name:'上海'},{name:'西安',value:49}],
    [{name:'上海'},{name:'沈阳',value:49}],
    [{name:'上海'},{name:'青岛',value:48}],
    [{name:'上海'},{name:'长春',value:47}],
    [{name:'上海'},{name:'长沙',value:32}],
    [{name:'上海'},{name:'天津',value:30}],
    [{name:'上海'},{name:'昆明',value:30}],
    [{name:'上海'},{name:'武汉',value:27}],
    [{name:'上海'},{name:'太原',value:24}],
    [{name:'上海'}, {name:'乌鲁木齐',value:4}],
    [{name:'上海'}, {name:'兰州',value:14}]
];


var GZData = [
    [{name:'广州'},{name:'上海',value:153}],
    [{name:'广州'},{name:'北京',value:138}],
    [{name:'广州'},{name:'杭州',value:104}],
    [{name:'广州'},{name:'成都',value:89}],
    [{name:'广州'},{name:'重庆',value:84}],
    [{name:'广州'},{name:'南京',value:75}],
    [{name:'广州'},{name:'昆明',value:62}],
    [{name:'广州'},{name:'西安',value:62}],
    [{name:'广州'},{name:'海口',value:58}],
    [{name:'广州'},{name:'郑州',value:51}],
    [{name:'广州'},{name:'武汉',value:49}],
    [{name:'广州'},{name:'天津',value:39}],
    [{name:'广州'},{name:'青岛',value:36}],
    [{name:'广州'},{name:'济南',value:35}],
    [{name:'广州'},{name:'宁波',value:34}],
    [{name:'广州'}, {name:'乌鲁木齐',value:23}],
    [{name:'广州'}, {name:'兰州',value:25}]
];


var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    console.log(data);
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [];
[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
    //console.log(item,i);
    series.push({
        name: item[0] + ' Top15',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: 'red',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top18',
        type: 'lines',
        zlevel: 2,
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
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top17',
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
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
console.log(series)

option = {
    backgroundColor: '#ADD8E6',
    title : {
        text: '中国国航北上广三城未来30天内直飞航班航空流量图',
        left: 'center',
        textStyle : {
            color: '#fff',
            fontSize: 20
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:function(params, ticket, callback){
            console.log(params);
            if(params.seriesType=="effectScatter") {
                return "线路："+params.data.name+""+params.data.value[2];
            }else if(params.seriesType=="lines"){
                return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
            }else{
                return params.name;
            }
        }
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['北京 Top15', '上海 Top18', '广州 Top17'],
        textStyle: {
            color: '#000000',
            fontSize:19
        },
        selectedMode: 'multiple',
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                color:'blue'
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#444444',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: 'blue'
            }
        }
    },
    series: series
};