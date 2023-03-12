 // 地图
 let geoCoordMap = {
     '上海': [121.4648, 31.2891],
     '东莞': [113.8953, 22.901],
     '东营': [118.7073, 37.5513],
     '中山': [113.4229, 22.478],
     '临汾': [111.4783, 36.1615],
     '临沂': [118.3118, 35.2936],
     '丹东': [124.541, 40.4242],
     '丽水': [119.5642, 28.1854],
     '乌鲁木齐': [87.9236, 43.5883],
     '佛山': [112.8955, 23.1097],
     '保定': [115.0488, 39.0948],
     '兰州': [103.5901, 36.3043],
     '包头': [110.3467, 41.4899],
     '北京': [116.4551, 40.2539],
     '北海': [109.314, 21.6211],
     '南京': [118.8062, 31.9208],
     '南宁': [108.479, 23.1152],
     '南昌': [116.0046, 28.6633],
     '南通': [121.1023, 32.1625],
     '厦门': [118.1689, 24.6478],
     '台州': [121.1353, 28.6688],
     '合肥': [117.29, 32.0581],
     '呼和浩特': [111.4124, 40.4901],
     '咸阳': [108.4131, 34.8706],
     '哈尔滨': [127.9688, 45.368],
     '唐山': [118.4766, 39.6826],
     '嘉兴': [120.9155, 30.6354],
     '大同': [113.7854, 39.8035],
     '大连': [122.2229, 39.4409],
     '天津': [117.4219, 39.4189],
     '太原': [112.3352, 37.9413],
     '威海': [121.9482, 37.1393],
     '宁波': [121.5967, 29.6466],
     '宝鸡': [107.1826, 34.3433],
     '宿迁': [118.5535, 33.7775],
     '常州': [119.4543, 31.5582],
     '广州': [113.5107, 23.2196],
     '廊坊': [116.521, 39.0509],
     '延安': [109.1052, 36.4252],
     '张家口': [115.1477, 40.8527],
     '徐州': [117.5208, 34.3268],
     '德州': [116.6858, 37.2107],
     '惠州': [114.6204, 23.1647],
     '成都': [103.9526, 30.7617],
     '扬州': [119.4653, 32.8162],
     '承德': [117.5757, 41.4075],
     '拉萨': [91.1865, 30.1465],
     '无锡': [120.3442, 31.5527],
     '日照': [119.2786, 35.5023],
     '昆明': [102.9199, 25.4663],
     '杭州': [119.5313, 29.8773],
     '枣庄': [117.323, 34.8926],
     '柳州': [109.3799, 24.9774],
     '株洲': [113.5327, 27.0319],
     '武汉': [114.3896, 30.6628],
     '汕头': [117.1692, 23.3405],
     '江门': [112.6318, 22.1484],
     '沈阳': [123.1238, 42.1216],
     '沧州': [116.8286, 38.2104],
     '河源': [114.917, 23.9722],
     '泉州': [118.3228, 25.1147],
     '泰安': [117.0264, 36.0516],
     '泰州': [120.0586, 32.5525],
     '济南': [117.1582, 36.8701],
     '济宁': [116.8286, 35.3375],
     '海口': [110.3893, 19.8516],
     '淄博': [118.0371, 36.6064],
     '淮安': [118.927, 33.4039],
     '深圳': [114.5435, 22.5439],
     '清远': [112.9175, 24.3292],
     '温州': [120.498, 27.8119],
     '渭南': [109.7864, 35.0299],
     '湖州': [119.8608, 30.7782],
     '湘潭': [112.5439, 27.7075],
     '滨州': [117.8174, 37.4963],
     '潍坊': [119.0918, 36.524],
     '烟台': [120.7397, 37.5128],
     '玉溪': [101.9312, 23.8898],
     '珠海': [113.7305, 22.1155],
     '盐城': [120.2234, 33.5577],
     '盘锦': [121.9482, 41.0449],
     '石家庄': [114.4995, 38.1006],
     '福州': [119.4543, 25.9222],
     '秦皇岛': [119.2126, 40.0232],
     '绍兴': [120.564, 29.7565],
     '聊城': [115.9167, 36.4032],
     '肇庆': [112.1265, 23.5822],
     '舟山': [122.2559, 30.2234],
     '苏州': [120.6519, 31.3989],
     '莱芜': [117.6526, 36.2714],
     '菏泽': [115.6201, 35.2057],
     '营口': [122.4316, 40.4297],
     '葫芦岛': [120.1575, 40.578],
     '衡水': [115.8838, 37.7161],
     '衢州': [118.6853, 28.8666],
     '西宁': [101.4038, 36.8207],
     '西安': [109.1162, 34.2004],
     '贵阳': [106.6992, 26.7682],
     '连云港': [119.1248, 34.552],
     '邢台': [114.8071, 37.2821],
     '邯郸': [114.4775, 36.535],
     '郑州': [113.4668, 34.6234],
     '鄂尔多斯': [108.9734, 39.2487],
     '重庆': [107.7539, 30.1904],
     '金华': [120.0037, 29.1028],
     '铜川': [109.0393, 35.1947],
     '银川': [106.3586, 38.1775],
     '镇江': [119.4763, 31.9702],
     '长春': [125.8154, 44.2584],
     '长沙': [113.0823, 28.2568],
     '长治': [112.8625, 36.4746],
     '阳泉': [113.4778, 38.0951],
     '青岛': [120.38, 36.07],
     '韶关': [113.7964, 24.7028],
     '敦煌': [94.71, 40.13],
     '库尔勒': [86.17369, 41.72643],
     '奎屯': [84.90167, 44.42689],
     '昌吉': [87.30822, 44.01117],
     '克拉玛依': [84.8697, 45.5905],

     '武威': [102.63, 37.93],
     '瓜州': [95.7832282721, 40.5319295174],
     '双塔水库': [95.8618987044, 40.5488634768],
     '哈密': [93.5219246754, 42.8243728820],
     '鄯善': [90.2207332610, 42.8731928218],
     '吐鲁番': [89.1960521828, 42.9572578648],
     '焉耆': [86.5807573704, 42.0652104472],
     '阿克苏': [80.2665024939, 41.1745589469],

     '托克马克': [75.2833, 42.8333],
     '撒马尔罕': [66.965159, 39.651099],
     '古佐尔': [66.258211, 38.612865],
     '巴米扬': [67.832346, 34.821217],
     '喀布尔': [69.189511, 34.562135],
     '白沙瓦': [71.555907, 34.011312],
     '斯利那加': [74.795235, 34.128023],
     '卢迪亚纳': [75.855612, 30.906297],
     '卡瑙杰': [79.919299, 27.065225],
     '那烂陀寺': [85.457013, 25.121574],


     '陕州': [111.103453, 34.720437],
     '洛阳': [112.454331, 34.618038],
     '开封': [114.307571, 34.797395],
     '冲绳岛那霸市': [127.680613, 26.226334],
     '奄美市': [129.493458, 28.376662],
     '屋久岛': [130.394543, 30.371910],
     '佐多岬': [130.659499, 30.997713],
     '南萨摩市鹿儿岛县': [130.318799, 31.418862],
     '长崎': [129.875784, 32.751862],
     '太宰府': [130.521372, 33.515718],
     '难波': [135.500393, 34.667345],
     '奈良东大寺': [135.839815, 34.689066],
 };

 let colors = ['lightskyblue', 'orange', 'greenyellow', 'limegreen',
     'mediumturquoise', 'mediumpurple'
 ];
 let scale = .63;
 option = {
     title: {
         textStyle: {
             color: 'orange'
         },
         text: '更多请访问： http://e-art.top 项目下面的可视化大屏图表'
     },
     backgroundColor: 'midnightblue',
     grid: {
         top: '5%'
     },
     legend: {
         orient: 'vertical',
         right: '2%',
         bottom: '5%',
         textStyle: {
             color: 'white'
         }
     },
     geo: {
         map: 'world',
         roam: true,
         center: [103.1492, 36.2776],
         zoom: 5.554,
         itemStyle: {
             areaColor: 'rgba(255,255,255,.13)',
             borderColor: 'rgba(255,255,255,.33)'
         },
         emphasis: {
             itemStyle: {
                 areaColor: 'rgba(255,255,255,.33)'
             },
         }
     },
     series: [{
         name: '玄奘取经路线(去)',
         type: 'lines',
         polyline: true,
         lineStyle: {
             color: colors[0]
         },
         effect: {
             show: true,
             symbolSize: 8 * scale,
             constantSpeed: 50 * scale,
             trailLength: 0.5 * scale
         },
         data: []
     }, {
         name: '玄奘取经路线(去)',
         type: 'scatter',
         symbol: 'pin',
         symbolSize: 24 * scale,
         label: {
             show: true,
             formatter: param => {
                 return param.value[2].oldName;
             },
             fontSize: 16 * scale,
             position: 'top'
         },
         tooltip: {
             formatter: param => {
                 return `${param.value[2].oldName}<br>
                                    今 ${param.value[2].name}
                                    <br>${param.value[2].remark || ''}`;
             },
         },
         itemStyle: {
             color: colors[0]
         },
         data: []
     }, {
         name: '鉴真东渡路线',
         type: 'lines',
         polyline: true,
         lineStyle: {
             color: colors[1]
         },
         effect: {
             show: true,
             symbolSize: 8 * scale,
             constantSpeed: 50 * scale,
             trailLength: 0.5 * scale
         },
         data: []
     }, {
         name: '鉴真东渡路线',
         type: 'scatter',
         symbol: 'pin',
         symbolSize: 24 * scale,
         label: {
             show: true,
             formatter: param => {
                 return param.value[2].oldName;
             },
             fontSize: 16 * scale,
             position: 'top'
         },
         tooltip: {
             formatter: param => {
                 return `${param.value[2].oldName}<br>
                                    今 ${param.value[2].name}
                                    <br>${param.value[2].remark || ''}`;
             },
         },
         itemStyle: {
             color: colors[1]
         },
         data: []
     }, {
         name: '我去过的地方',
         type: 'scatter',
         symbol: 'arrow',
         symbolSize: 18 * scale,
         label: {
             show: true,
             formatter: param => {
                 return param.value[2].name;
             },
             fontSize: 16 * scale,
             position: 'bottom'
         },
         tooltip: {
             formatter: param => {
                 return `${param.value[2].name}<br>
                                    ${param.value[2].remark}`
             },
         },
         itemStyle: {
             color: colors[2]
         },
         data: []
     }].map(item => {
         return $.extend(true, item, {
             coordinateSystem: 'geo',
             zlevel: 1,
         })
     })
 };
 let xuanZangToPoints = [{
         name: '西安',
         oldName: '长安'
     },
     // {name: '天水', oldName: '秦州'},
     {
         name: '兰州',
         oldName: '兰州'
     },
     {
         name: '武威',
         oldName: '凉州',
         remark: '武威市凉州区'
     },
     // {name: '张掖', oldName: '甘州'},
     // {name: '酒泉', oldName: '肃州'},
     {
         name: '瓜州',
         oldName: '安西'
     },
     // {name: '葫芦河', oldName: '窟窿河'},
     {
         name: '双塔水库',
         oldName: '唐代玉门关',
         remark: '瓜州(曾长期叫安西)县城东五十公里双塔水库'
     },
     {
         name: '哈密',
         oldName: '伊吾'
     },
     {
         name: '鄯善',
         oldName: '白力城'
     },
     {
         name: '吐鲁番',
         oldName: '高昌王城'
     },
     // {name: '布干台', oldName: '无半城'},
     {
         name: '焉耆',
         oldName: '阿耆尼'
     },
     {
         name: '阿克苏',
         oldName: '跋禄迦国'
     },
     {
         name: '托克马克',
         oldName: '碎叶',
         remark: '今吉尔吉斯之托克马克西南八公里处，是唐代四大名镇之一，另三个是安西都护府所在的龟兹镇（今库车）、疏勒镇（今喀什）、于阗镇（今和田），也是诗人李白出生地。'
     },
     {
         name: '',
         oldName: ''
     },
     {
         name: '江布尔',
         oldName: '恒罗斯'
     },
     // {name: '汗阿巴德', oldName: '窣堵利瑟那国',remark: '乌兹别克塔什干地区汗阿巴德'},
     {
         name: '撒马尔罕',
         oldName: '飒秣建国',
         remark: '乌兹别克斯坦撒马尔罕北三公里处，其内城东门叫中国门'
     },
     {
         name: '古佐尔',
         oldName: '铁门关',
         remark: '乌兹别克斯坦南部达尔本特之西'
     },

     {
         name: '巴米扬',
         oldName: '梵衍那国',
         remark: '阿富汗之巴米扬，有被塔利班炸毁的巴米扬立石佛像'
     },
     {
         name: '喀布尔',
         oldName: '迦毕试国',
         remark: '阿富汗喀布尔流域'
     },
     {
         name: '白沙瓦',
         oldName: '健陀罗国',
         remark: '巴基斯坦白沙瓦'
     },
     {
         name: '斯利那加',
         oldName: '迦湿弥罗国',
         remark: '今克什米尔印度控制区之斯利那加'
     },
     {
         name: '卢迪亚纳',
         oldName: '磔迦国',
         remark: '巴基斯坦旁遮普地区，经纬度可能不准'
     },
     {
         name: '卡瑙杰',
         oldName: '曲女城',
         remark: '玄奘归途中在此参加了有20余国君王和僧众参加的大法会'
     },
     {
         name: '那烂陀寺',
         oldName: '摩揭陀国的那烂陀寺',
         remark: '今印度比哈尔邦王舍城附近'
     },
     {
         name: '',
         oldName: '',
         remark: ''
     },
     {
         name: '',
         oldName: '',
         remark: ''
     },
 ];
 let xuanZangToline = xuanZangToPoints.map(item => geoCoordMap[item.name]).filter(item => item);
 xuanZangToPoints = xuanZangToPoints.map(item => {
     if (!geoCoordMap[item.name]) return false;
     item = geoCoordMap[item.name].concat(item);
     return item
 }).filter(item => item);
 option.series[0].data = [{
     coords: xuanZangToline
 }];
 option.series[1].data = xuanZangToPoints;
 let jianZhenPoints = [{
         name: '西安',
         oldName: '长安',
         remark: ''
     },
     {
         name: '陕州',
         oldName: '陕州',
         remark: ''
     },
     {
         name: '洛阳',
         oldName: '洛阳',
         remark: ''
     },
     {
         name: '开封',
         oldName: '汴州',
         remark: ''
     },
     {
         name: '扬州',
         oldName: '扬州',
         remark: ''
     },
     {
         name: '冲绳岛那霸市',
         oldName: '阿儿奈波岛',
         remark: ''
     },
     {
         name: '奄美市',
         oldName: '奄美大岛',
         remark: ''
     },
     {
         name: '屋久岛',
         oldName: '益救岛',
         remark: ''
     },
     {
         name: '佐多岬',
         oldName: '佐多岬',
         remark: ''
     },
     {
         name: '南萨摩市鹿儿岛县',
         oldName: '秋妻屋浦',
         remark: '不知地图上秋日何在，找了个差不多的地点'
     },
     {
         name: '长崎',
         oldName: '鹿濑？',
         remark: '地图上鹿濑离得比较远，找了个差不多的地点'
     },
     {
         name: '太宰府',
         oldName: '太宰府',
         remark: ''
     },
     {
         name: '难波',
         oldName: '难波',
         remark: ''
     },
     {
         name: '奈良东大寺',
         oldName: '奈良东大寺',
         remark: ''
     },
 ];
 let jianZhenLine = jianZhenPoints.map(item => geoCoordMap[item.name]).filter(item => item);
 jianZhenPoints = jianZhenPoints.map(item => {
     if (!geoCoordMap[item.name]) return false;
     item = geoCoordMap[item.name].concat(item);
     return item
 }).filter(item => item);
 option.series[2].data = [{
     coords: jianZhenLine
 }];
 option.series[3].data = jianZhenPoints;
 option.series[4].data = [
     // 宝鸡，青岛，西安，乌鲁木齐，库尔勒，阿克苏，克拉玛依，昌吉，奎屯，吐鲁番，北京，大连，哈尔滨，杭州，苏州，西塘，上海，济南。
     {
         name: '宝鸡',
         remark: '家乡'
     },
     {
         name: '青岛',
         remark: '求学之地'
     },
     {
         name: '西安',
         remark: '家乡省城'
     },
     {
         name: '乌鲁木齐',
         remark: '出差'
     },
     {
         name: '库尔勒',
         remark: '有美丽的孔雀河'
     },
     {
         name: '阿克苏',
         remark: '馕正宗，'
     },
     {
         name: '克拉玛依',
         remark: '油田上的磕头机很多'
     },
     {
         name: '昌吉',
         remark: '和乌鲁木齐邻居'
     },
     {
         name: '奎屯',
         remark: '遇见两个伊利小姑娘'
     },
     {
         name: '吐鲁番',
         remark: '鄯善县到处是葡萄屋'
     },
     {
         name: '北京',
         remark: '北漂那些年'
     },
     {
         name: '大连',
         remark: '出差，大黑山，野山上的樱桃'
     },
     {
         name: '哈尔滨',
         remark: '出差，8月的地下室穿军大衣'
     },
     {
         name: '杭州',
         remark: '旅行，西湖，西塘'
     },
     {
         name: '苏州',
         remark: '平江路上和王之一父亲帮弹古筝的小姑娘调琴'
     },
     {
         name: '西塘',
         remark: '如画的江南风景'
     },
     {
         name: '上海',
         remark: '陆家嘴和注射器三件套'
     },
     {
         name: '济南',
         remark: '没看到趵突泉喷水，没听到大明湖的蛙鸣'
     },
 ].map(item => {
     if (!geoCoordMap[item.name]) return false;
     item = geoCoordMap[item.name].concat(item);
     return item
 }).filter(item => item);