
var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
};
// 出发地
var fromdata = '北京';
// 目的地
var BJData = [
    [
      {name:fromdata}, 
      {
        name:'上海',
        value:'HXD3C1004',//车号
        state:'故障',//状态
        baojing:10,//报警
        guzhang:728,//故障
        tips:0,//提示
        shiyan:1,//试验
        zhidong:56230,//制动
        zouhang:85120,//走行
        fanghuo:23200,//防火
        video:23561,//视频
        jueyuan:56230,//绝缘
        jiankong:51020,//监控
        liegong:56230,//列供
        weiji:16132,//微机
      }
    ],

    [
      {name:fromdata}, 
      {
        name:'广州',
        value:'HXD3C1004',//车号
        state:'正常',//状态
        baojing:10,//报警
        guzhang:728,//故障
        tips:0,//提示
        shiyan:1,//试验
        zhidong:56230,//制动
        zouhang:85120,//走行
        fanghuo:23200,//防火
        video:23561,//视频
        jueyuan:56230,//绝缘
        jiankong:51020,//监控
        liegong:56230,//列供
        weiji:16132,//微机

      }
    ],
    [
      {name:fromdata}, 
      {
        name:'西安',
        value:'HXD3C1004',//车号
        state:'正常',//状态
        baojing:10,//报警
        guzhang:728,//故障
        tips:0,//提示
        shiyan:1,//试验
        zhidong:56230,//制动
        zouhang:85120,//走行
        fanghuo:23200,//防火
        video:23561,//视频
        jueyuan:56230,//绝缘
        jiankong:51020,//监控
        liegong:56230,//列供
        weiji:16132,//微机

      }
    ],
    [
      {name:fromdata}, 
      {
        name:'衡水',
        value:'HXD3C1004',//车号
        state:'正常',//状态
        baojing:10,//报警
        guzhang:728,//故障
        tips:0,//提示
        shiyan:1,//试验
        zhidong:56230,//制动
        zouhang:85120,//走行
        fanghuo:23200,//防火
        video:23561,//视频
        jueyuan:56230,//绝缘
        jiankong:51020,//监控
        liegong:56230,//列供
        weiji:16132,//微机

      }
    ],
    [
      {name:fromdata}, 
      {
        name:'大同',
        value:'HXD3C1004',//车号
        state:'正常',//状态
        baojing:10,//报警
        guzhang:728,//故障
        tips:0,//提示
        shiyan:1,//试验
        zhidong:56230,//制动
        zouhang:85120,//走行
        fanghuo:23200,//防火
        video:23561,//视频
        jueyuan:56230,//绝缘
        jiankong:51020,//监控
        liegong:56230,//列供
        weiji:16132,//微机

      }
    ],
    [
      {name:fromdata}, 
      {
        name:'广州',
        value:'HXD3C1004',//车号
        state:'正常',//状态
        baojing:10,//报警
        guzhang:728,//故障
        tips:0,//提示
        shiyan:1,//试验
        zhidong:56230,//制动
        zouhang:85120,//走行
        fanghuo:23200,//防火
        video:23561,//视频
        jueyuan:56230,//绝缘
        jiankong:51020,//监控
        liegong:56230,//列供
        weiji:16132,//微机

      }
    ],
    [
      {name:fromdata}, 
      {
        name:'广州',
        value:'HXD3C1004',//车号
        state:'正常',//状态
        baojing:10,//报警
        guzhang:728,//故障
        tips:0,//提示
        shiyan:1,//试验
        zhidong:56230,//制动
        zouhang:85120,//走行
        fanghuo:23200,//防火
        video:23561,//视频
        jueyuan:56230,//绝缘
        jiankong:51020,//监控
        liegong:56230,//列供
        weiji:16132,//微机

      }
    ],
];

var planePath = 'path://M694.098884 627.138756 694.098884 377.263158c0-37.562998-31.030303-68.593301-68.593301-68.593301l-228.644338 0c-37.562998 0-68.593301 31.030303-68.593301 68.593301l0 249.875598c0 34.296651 26.130781 63.69378 58.794258 68.593301l-60.427432 75.125997L391.961722 770.858054l65.326954-73.492823L571.610845 697.365231l60.427432 73.492823 62.060606 0-55.527911-75.125997C669.601276 689.199362 694.098884 661.435407 694.098884 627.138756zM400.127592 658.169059c-16.331738 0-31.030303-13.065391-31.030303-31.030303 0-16.331738 13.065391-31.030303 31.030303-31.030303 16.331738 0 31.030303 13.065391 31.030303 31.030303C431.157895 643.470494 418.092504 658.169059 400.127592 658.169059zM618.972887 658.169059c-16.331738 0-31.030303-13.065391-31.030303-31.030303 0-16.331738 13.065391-31.030303 31.030303-31.030303 16.331738 0 31.030303 13.065391 31.030303 31.030303C650.00319 643.470494 636.937799 658.169059 618.972887 658.169059zM664.701754 493.218501c0 19.598086-14.698565 34.296651-34.296651 34.296651L393.594896 527.515152c-19.598086 0-34.296651-14.698565-34.296651-34.296651l0-75.125997c0-19.598086 14.698565-34.296651 34.296651-34.296651l235.177033 0c19.598086 0 34.296651 14.698565 34.296651 34.296651L663.068581 493.218501z" p-id="2471"></path><path d="M470.354067 292.338118l83.291866 0c13.065391 0 24.497608-11.432217 24.497608-24.497608 0-13.065391-11.432217-24.497608-24.497608-24.497608l-83.291866 0c-13.065391 0-24.497608 11.432217-24.497608 24.497608C445.856459 280.905901 457.288676 292.338118 470.354067 292.338118z';

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

var color = ['#f6d23b'];
var series = [];
[[fromdata, BJData]].forEach(function (item, i) {
    series.push({
        name: item[0],
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2//维度
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'arrow',
            symbolSize: 8
        },
        label: {
                  normal: {
                      show: true,
                      position: 'right',
                      formatter: '{b}'
                  }
              },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness:0.2//维度
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
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
        symbolSize:10, // function (val) {return val[2] / 8; },

        itemStyle: {
            normal: {
                areaColor:'#fff',
                color: color[i]
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),
              

            };
        })
    });
});

option = {
    backgroundColor: '#031528',

    tooltip : {
        trigger: 'item',
        enterable:true,
        formatter: function(params) {
            var normal = '';
            var gubug = '';

            normal = '<div class="toop-line title"><a>车号：' + params.data.value[2] + '</a><a>状态：' + params.data.state[2]+'</div>'
              + '<div class="toop-line coords"><a><i class="ico ico-coord"></i>坐标值：' + params.data.value[0]+','+ params.data.value[1]+'</div>'
              + '<div class="toop-line"><a>报警：' + params.data.baojing[2] + '</a><a>故障：' + params.data.guzhang[2]+'</a></div>'
              + '<div class="toop-line"><a>提示：' + params.data.tips[2] + '</a><a>试验：' + params.data.shiyan[2]+'</a></div>'
              + '<div class="toop-line"><a>制动：' + params.data.zhidong[2] + '</a><a>走行：' + params.data.zouhang[2]+'</a></div>'
              + '<div class="toop-line"><a>防火：' + params.data.fanghuo[2] + '</a><a>视频：' + params.data.video[2]+'</a></div>'
              + '<div class="toop-line"><a>绝缘：' + params.data.jueyuan[2] + '</a><a>监控：' + params.data.jiankong[2]+'</a></div>'
              + '<div class="toop-line"><a>列供：' + params.data.liegong[2] + '</a><a>微机：' + params.data.weiji[2]+'</a></div>';

            gubug = '<div class="toop-line title"><a>车号：' + params.data.value[2] + '</a><a>状态：<span style="color:red">' + params.data.state[2]+'</span></a></div>'
              + '<div class="toop-line coords"><a><i class="ico ico-coord"></i>坐标值：' + params.data.value[0]+','+ params.data.value[1]+'</div>'
              + '<div class="toop-line"><a>报警：' + params.data.baojing[2] + '</a><a>故障：' + params.data.guzhang[2]+'</a></div>'
              + '<div class="toop-line"><a>提示：' + params.data.tips[2] + '</a><a>试验：' + params.data.shiyan[2]+'</a></div>'
              + '<div class="toop-line"><a>制动：' + params.data.zhidong[2] + '</a><a>走行：' + params.data.zouhang[2]+'</a></div>'
              + '<div class="toop-line"><a>防火：' + params.data.fanghuo[2] + '</a><a>视频：' + params.data.video[2]+'</a></div>'
              + '<div class="toop-line"><a>绝缘：' + params.data.jueyuan[2] + '</a><a>监控：' + params.data.jiankong[2]+'</a></div>'
              + '<div class="toop-line"><a>列供：' + params.data.liegong[2] + '</a><a>微机：' + params.data.weiji[2]+'</a></div>';

              if (params.data.state[2] === '正常') {
                return normal;
              }else if(params.data.state[2] === '故障'){
                 return gubug;
              }
        }
    },
    geo: {
        map: 'china',
        zoom:1.5,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#000002',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series,

};