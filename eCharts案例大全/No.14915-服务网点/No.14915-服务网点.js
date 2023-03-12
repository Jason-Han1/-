/**
 * Created by wangjb on 2017/09/08.
 */
//主要城市经纬度坐标
var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '成都': [103.9526, 30.7617],
    '济南': [117.1582, 36.8701],
    '深圳': [114.5435, 22.5439],
    '郑州': [113.4668, 34.6234],
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
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
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

var mapData = [
    { fromName: '上海',toName: '成都',contact: ['成都','028-66320448', 'fqcd@fuqijrfw.com', '四川省成都市高新区益州大道333号东方希望中心7楼702室']},
    { fromName: '上海',toName: '深圳',contact: ['深圳','0755-88604346', 'fqsz@fuqijrfw.com', '深圳市福田区福华三路168号荣超国际商会中心615室']},
    { fromName: '上海',toName: '郑州',contact: ['郑州','0371-65651668', 'fqzz@fuqijrfw.com','郑州市中州大道鑫苑路阳光大厦4楼406室']},
    { fromName: '上海',toName: '济南',contact: ['济南','0531-69929392', 'fqjn@fuqijrfw.com','山东省济南市市中区经四路万达广场写字楼B座20楼2011室']}
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromName = dataItem.fromName;
        var toName = dataItem.toName;
        var fromCoord = geoCoordMap[fromName];
        var toCoord = geoCoordMap[toName];
        if (fromCoord && toCoord) {
            res.push({fromName: fromName,toName: toName,coords: [fromCoord, toCoord]});
        }
    }
    return res;
};

var title = {
    text: '服 务 网 点', //主标题
    subtext: '', //副标题
    x: 'center',                 // 水平安放位置，默认为左对齐，可选为：
    y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
    textAlign: null,          // 水平对齐方式，默认根据x设置自动调整
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ccc',       // 标题边框颜色
    borderWidth: 0,            // 标题边框线宽，单位px，默认为0（无边框）
    padding: 20, // 标题内边距，单位px，默认各方向内边距为5，
    itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
    textStyle: {
        color: '#00f', // 主标题文字颜色
        fontSize: 28,
        fontWeight: 'bolder',
        fontFamily: 'Microsoft YaHei',
        textBorderColor: 'black',
        textBorderWidth: 2,
        textShadowColor: 'white',
        textShadowBlur: 5,
        textShadowOffsetX: 3,
        textShadowOffsetY: 3,
    },
    subtextStyle: {
        color: '#111' // 副标题文字颜色
    }
};

var tooltip = {
    formatter: function(obj) {          //提示框浮层内容格式器
        //console.info(obj);
        if(!obj.data)return null;
        var contact = obj.data.contact;
        if(contact){
            var name =  contact[0] + "<hr>";
            var tel = "电话：" + contact[1] + "<br>";
            var email = "邮箱：" + contact[2] + "<br>";
            var addr = "地址：" + contact[3] + "<br>";
            return name + tel + email + addr ;
        }
    },
    trigger: 'item',                    // 触发类型
        showDelay: 20,                      // 显示延迟，单位ms
        hideDelay: 500,                     // 隐藏延迟，单位ms
        transitionDuration: 1.5,            // 提示框浮层的移动动画过渡时间，单位s
        backgroundColor: 'rgba(0,0,0,0.5)', // 提示框浮层的背景颜色
        borderColor: '#333',                // 提示框浮层的边框颜色
        borderRadius: 5,                    // 提示框浮层的边框圆角，单位px
        borderWidth: 1,                     // 提示框浮层的边框宽度，单位px
        padding: 5,                         // 提示框浮层内边距，单位px，默认各方向内边距为5，
        position:                           //提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。
            function (point, params, dom, rect, size) {
                return [point[0], point[1]];
            },
        enterable: true,                    //鼠标是否可进入提示框浮层中
        confine:true,                       //是否将 tooltip 框限制在图表的区域内
        extraCssText: 'box-shadow:10px 10px rgba(33, 33, 33, 0.3);', //额外附加到浮层的 css 样式
        textStyle: {                        //提示框浮层的文本样式
        color: '#fff',
            fontSize: 15,
            fontWeight: 'bolder',
            fontFamily: 'Microsoft YaHei',
            textBorderColor: 'black',
            textBorderWidth: 2,
            textShadowColor: 'white',
            textShadowBlur: 5,
            textShadowOffsetX: 3,
            textShadowOffsetY: 3,
    }
}

var series = [];

//箭头轨迹
series.push({
    type: 'lines',          //带有起点和终点信息的线图
    zlevel: 1,              //Canvas 分层,值大在上面
    effect: {               //特效配置
        show: false,
        period: 2,          //动画时间s
        delay:200,          //延迟时间ms
        trailLength: 0.2,   //尾迹长度
        symbol: 'arrow',    //标记类型:箭头
        symbolSize: 5,      //标记大小
    },
    lineStyle: {            //线图样式
        normal: {
            width: 2,       //线图宽度
            opacity: 0,     //图形透明度
            curveness: 0.2, //边的曲度
            color: '#f00'   //线的颜色
        }
    },
    data: convertData(mapData)
});
//外办城市
series.push({
    type: 'effectScatter',      //涟漪特效
    coordinateSystem: 'geo',    //使用地理坐标系
    zlevel: 2,
    symbol: 'circle',           //标记类型:圆
    symbolSize: 0,
    animation:true,           //是否开启动画
    rippleEffect: {             //涟漪特效相关配置
        period: 4,              //动画的时间
        brushType: 'stroke',    //波纹的绘制方式
        scale: 4                //动画中波纹的最大缩放比例
    },
    label: {
        normal: {
            show: false,
            offset: [-20, -10], //文字偏移，横向和纵向
            formatter: '{b}',   //标签内容格式化
        }
    },
    itemStyle: {
        normal: {
            color: '#00f'
        }
    },
    data: mapData.map(function(dataItem) {  //拼装数据数组
        return {
            name: dataItem.toName,
            value: geoCoordMap[dataItem.toName],
            contact: dataItem.contact
        };
    }),
});
//总部
series.push({
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        symbol: 'circle',
        symbolSize: 0,
        rippleEffect: {
            period: 2,
            brushType: 'stroke',
            scale: 4
        },
        label: {
            normal: {
                show: false,
                position: 'right',              //标签的位置
                formatter: ' {b} \n(总部)',
                fontSize: 13,
                fontWeight: 'bolder',
                fontFamily: 'Microsoft YaHei',
                textBorderColor: 'black',       //文本描边颜色
                textBorderWidth: 2,             //文本描边宽度
                textShadowColor: 'black',       //文本阴影颜色
                textShadowBlur: 5,              //文本阴影长度
                textShadowOffsetX: 1,           //文本阴影横向偏移
                textShadowOffsetY: 1,           //文本阴影纵向偏移
            },
        },
        itemStyle: {
            normal: {
                color: 'yellow',
            }
        },
        data: [{
            name: '上海',
            value: geoCoordMap['上海'],
            contact: ["上海","00-086-7208", "fqsh@fuqijrfw.com", "上海市浦东新区龙阳路2277号22楼"]
        }],
    } );
var itemStyle = {
    normal: {
        areaColor: 'rgb(255,165,140)',
    },
    emphasis: {
        areaColor: 'rgb(255,125,100)',
        borderWidth:1,
        shadowColor: 'rgba(33, 33, 33, 0.5)',
        shadowBlur: 200,
        shadowOffsetX:-5,
        shadowOffsetY:5
    }
}
//外办省份
series.push({
    type: 'map',
    mapType: 'china',
    center: [103, 36],
    zoom:1,
    roam: false,
    label: {
        emphasis: {
            show: false
        }
    },
    itemStyle: {
        normal: {
            areaColor: 'rgb(255,165,140)',
        },
        emphasis: {
            areaColor: 'rgb(255,165,140)',
        }
    },
    data:[
        {name: '上海',selected:false,itemStyle:itemStyle,contact:['上海','400-086-7208','fqsh@fuqijrfw.com','上海市浦东新区龙阳路2277号22楼']},
        {name: '广东',selected:false,itemStyle:itemStyle,contact:['深圳','0755-88604346','fqsz@fuqijrfw.com','深圳市福田区福华三路168号荣超国际商会中心615室']},
        {name: '四川',selected:false,itemStyle:itemStyle,contact:['成都','028-66320448','fqcd@fuqijrfw.com','四川省成都市高新区益州大道333号东方希望中心7楼702室']},
        {name: '河南',selected:false,itemStyle:itemStyle,contact:['郑州','0371-65651668','fqzz@fuqijrfw.com','郑州市中州大道鑫苑路阳光大厦4楼406室']},
        {name: '山东',selected:false,itemStyle:itemStyle,contact:['济南','0531-69929392','fqjn@fuqijrfw.com','山东省济南市市中区经四路万达广场写字楼B座20楼2011室']}
    ],
});

var china_option = {
    title: title,
    tooltip: tooltip,
    geo: {                                  //地理坐标系组件
        map: 'china',                       //地图类型
        roam: false,                       //是否开启鼠标缩放和平移漫游
        zoom:1,                             //当前视角的缩放比例
        center: [103, 36],                  //当前视角的中心点，用经纬度表示
        itemStyle: {
            normal: {
                areaColor: 'rgb(255,165,140)',
            },
            emphasis: {
                areaColor: 'rgb(255,165,140)',
            }
        }
    },
    series: series
};
var world_option = {
    title: title,
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        center:[0,0],
        zoom:0.5,
        itemStyle: {
            normal: {
                color: 'rgb(238,238,238)',
            },
            emphasis: {
                color: 'rgb(238,238,238)',
            }
        },
        regions: [{
            name: 'China',
            selected:true,
            itemStyle: {
                normal: {
                    areaColor: 'rgb(255,165,140)',
                },
                emphasis: {
                    areaColor: 'rgb(255,165,140)',
                }
            }
        }]
    }
};


$("#chart-panel").css("user-select","text");
var map_chart = echarts.init(document.getElementById('chart-panel'));
var option = map_chart.getOption();
if(option){
    option.series[0].effect.show= false;
    map_chart.setOption(option,true);  
}
 map_chart.setOption(world_option,true)

  zoom(0.5,0,0);

  function zoom(rate,x,y){
    map_chart.setOption({geo: {zoom:rate,center:[x,y]}})
  }

  var interval = setInterval(function(){
    var scale  = map_chart.getOption().geo[0].zoom;
    var center = map_chart.getOption().geo[0].center;
    if(scale >= 2.5){
      clearInterval(interval);
      map_chart.setOption(china_option,true);
      map_chart.resize();
      var option = map_chart.getOption();
      setTimeout(function () {//总部
        option.series[2].label.normal.show= true;
        option.series[2].symbolSize = 15;
        map_chart.setOption(option,true);
      }, 500);
      setTimeout(function () {//外办城市
        option.series[1].label.normal.show= true;
        option.series[1].symbolSize = 10;
        map_chart.setOption(option,true);
      }, 2000);
      setTimeout(function () {//箭头
        option.series[0].effect.show= true;
        map_chart.setOption(option,true);
      }, 1000);
      setTimeout(function () {//外办省份
        option.series[3].data.map(function(dataItem) {
          dataItem.selected=true;
        });
        map_chart.setOption(option,true);
      }, 2500);
      return;
    }
    zoom(scale + 0.1,center[0]+5.15,center[1]+1.8);
  },100);


