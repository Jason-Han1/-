var geoCoordMap = {
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
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
};
var BJData = [
    [{
        name: "南通",
        value: 880
    }, {
        name: "南京"
    }],
    [{
        name: "徐州",
        value: 462
    }, {
        name: "南京"
    }],
    [{
        name: "盐城",
        value: 477
    }, {
        name: "南京"
    }],
    [{
        name: "金华",
        value: 38
    }, {
        name: "南京"
    }],
    [{
        name: "珠海",
        value: 5
    }, {
        name: " 南京"
    }],
    [{
        name: "盘锦",
        value: 13
    }, {
        name: "南京"
    }],
    [{
        name: "扬州",
        value: 572
    }, {
        name: "南京"
    }],
    [{
        name: "唐山",
        value: 24
    }, {
        name: "南京"
    }],
    [{
        name: "苏州",
        value: 533
    }, {
        name: "南京"
    }],
    [{
        name: "阳泉",
        value: 39
    }, {
        name: "南京"
    }],
    [{
        name: "重庆",
        value: 276
    }, {
        name: "南京"
    }],
    [{
        name: "天津",
        value: 259
    }, {
        name: "南京"
    }],
    [{
        name: "宝鸡",
        value: 32
    }, {
        name: "南京"
    }],
    [{
        name: "秦皇岛",
        value: 10
    }, {
        name: "南京"
    }],
    [{
        name: "北京",
        value: 190
    }, {
        name: "南京"
    }],
    [{
        name: "宿迁",
        value: 381
    }, {
        name: "南京"
    }],
    [{
        name: "潍坊",
        value: 18
    }, {
        name: "南京"
    }],
    [{
        name: "连云港",
        value: 429
    }, {
        name: "南京"
    }],
    [{
        name: "宁波",
        value: 36
    }, {
        name: "南京"
    }],
    [{
        name: "日照",
        value: 10
    }, {
        name: "南京"
    }],
    [{
        name: "深圳",
        value: 26
    }, {
        name: "南京"
    }],
    [{
        name: "张家口",
        value: 11
    }, {
        name: "南京"
    }],
    [{
        name: "丽水",
        value: 11
    }, {
        name: "南京"
    }],
    [{
        name: "镇江",
        value: 236
    }, {
        name: "南京"
    }],
    [{
        name: "上海",
        value: 234
    }, {
        name: "南京"
    }],
    [{
        name: "东莞",
        value: 11
    }, {
        name: "南京"
    }],
    [{
        name: "东营",
        value: 9
    }, {
        name: "南京"
    }],
    [{
        name: "中山",
        value: 11
    }, {
        name: "南京"
    }],
    [{
        name: "临汾",
        value: 38
    }, {
        name: "南京"
    }],
    [{
        name: "丹东",
        value: 8
    }, {
        name: "南京"
    }],
    [{
        name: "临沂",
        value: 19
    }, {
        name: "南京"
    }],
    [{
        name: "乌鲁木齐",
        value: 70
    }, {
        name: "南京"
    }],
    [{
        name: "佛山",
        value: 18
    }, {
        name: "南京"
    }],
    [{
        name: "保定",
        value: 12
    }, {
        name: "南京"
    }],
    [{
        name: "兰州",
        value: 110
    }, {
        name: "南京"
    }],
    [{
        name: "包头",
        value: 41
    }, {
        name: "南京"
    }],
    [{
        name: "北海",
        value: 8
    }, {
        name: "南京"
    }],
    [{
        name: "南宁",
        value: 77
    }, {
        name: "南京"
    }],
    [{
        name: "南昌",
        value: 27
    }, {
        name: "南京"
    }],
    [{
        name: "厦门",
        value: 24
    }, {
        name: "南京"
    }],
    [{
        name: "台州",
        value: 30
    }, {
        name: "南京"
    }],
    [{
        name: "合肥",
        value: 38
    }, {
        name: "南京"
    }],
    [{
        name: "呼和浩特",
        value: 37
    }, {
        name: "南京"
    }],
    [{
        name: "咸阳",
        value: 13
    }, {
        name: "南京"
    }],
    [{
        name: "哈尔滨",
        value: 31
    }, {
        name: "南京"
    }],
    [{
        name: "嘉兴",
        value: 20
    }, {
        name: "南京"
    }],
    [{
        name: "大连",
        value: 52
    }, {
        name: "南京"
    }],
    [{
        name: "太原",
        value: 86
    }, {
        name: "南京"
    }],
    [{
        name: "威海",
        value: 15
    }, {
        name: "南京"
    }],
    [{
        name: "大同",
        value: 55
    }, {
        name: "南京"
    }],
    [{
        name: "常州",
        value: 693
    }, {
        name: "南京"
    }],
    [{
        name: "广州",
        value: 16
    }, {
        name: "南京"
    }],
    [{
        name: "廊坊",
        value: 8
    }, {
        name: "南京"
    }],
    [{
        name: "延安",
        value: 3
    }, {
        name: "南京"
    }],
    [{
        name: "德州",
        value: 5
    }, {
        name: "南京"
    }],
    [{
        name: "惠州",
        value: 2
    }, {
        name: "南京"
    }],
    [{
        name: "成都",
        value: 71
    }, {
        name: "南京"
    }],
    [{
        name: "承德",
        value: 5
    }, {
        name: "南京"
    }],
    [{
        name: "拉萨",
        value: 0
    }, {
        name: "南京"
    }],
    [{
        name: "无锡",
        value: 530
    }, {
        name: "南京"
    }],
    [{
        name: "昆明",
        value: 104
    }, {
        name: "南京"
    }],
    [{
        name: "杭州",
        value: 63
    }, {
        name: "南京"
    }],
    [{
        name: "枣庄",
        value: 14
    }, {
        name: "南京"
    }],
    [{
        name: "柳州",
        value: 34
    }, {
        name: "南京"
    }],
    [{
        name: "株洲",
        value: 21
    }, {
        name: "南京"
    }],
    [{
        name: "武汉",
        value: 39
    }, {
        name: "南京"
    }],
    [{
        name: "江门",
        value: 7
    }, {
        name: "南京"
    }],
    [{
        name: "汕头",
        value: 11
    }, {
        name: "南京"
    }],
    [{
        name: "沈阳",
        value: 48
    }, {
        name: "南京"
    }],
    [{
        name: "沧州",
        value: 5
    }, {
        name: "南京"
    }],
    [{
        name: "河源",
        value: 1
    }, {
        name: "南京"
    }],
    [{
        name: "泉州",
        value: 25
    }, {
        name: "南京"
    }],
    [{
        name: "泰安",
        value: 16
    }, {
        name: "南京"
    }],
    [{
        name: "泰州",
        value: 382
    }, {
        name: "南京"
    }],
    [{
        name: "济南",
        value: 20
    }, {
        name: "南京"
    }],
    [{
        name: "济宁",
        value: 9
    }, {
        name: "南京"
    }],
    [{
        name: "海口",
        value: 72
    }, {
        name: "南京"
    }],
    [{
        name: "淄博",
        value: 30
    }, {
        name: "南京"
    }],
    [{
        name: "淮安",
        value: 394
    }, {
        name: "南京"
    }],
    [{
        name: "清远",
        value: 1
    }, {
        name: "南京"
    }],
    [{
        name: "湖州",
        value: 25
    }, {
        name: "南京"
    }],
    [{
        name: "温州",
        value: 42
    }, {
        name: "南京"
    }],
    [{
        name: "渭南",
        value: 14
    }, {
        name: "南京"
    }],
    [{
        name: "湘潭",
        value: 9
    }, {
        name: "南京"
    }],
    [{
        name: "滨州",
        value: 1
    }, {
        name: "南京"
    }],
    [{
        name: "烟台",
        value: 18
    }, {
        name: "南京"
    }],
    [{
        name: "玉溪",
        value: 23
    }, {
        name: "南京"
    }],
    [{
        name: "石家庄",
        value: 45
    }, {
        name: "南京"
    }],
    [{
        name: "福州",
        value: 22
    }, {
        name: "南京"
    }],
    [{
        name: "绍兴",
        value: 39
    }, {
        name: "南京"
    }],
    [{
        name: "聊城",
        value: 5
    }, {
        name: "南京"
    }],
    [{
        name: "肇庆",
        value: 0
    }, {
        name: "南京"
    }],
    [{
        name: "舟山",
        value: 13
    }, {
        name: "南京"
    }],
    [{
        name: "莱芜",
        value: 8
    }, {
        name: "南京"
    }],
    [{
        name: "菏泽",
        value: 7
    }, {
        name: "南京"
    }],
    [{
        name: "营口",
        value: 16
    }, {
        name: "南京"
    }],
    [{
        name: "葫芦岛",
        value: 10
    }, {
        name: "南京"
    }],
    [{
        name: "衡水",
        value: 26
    }, {
        name: "南京"
    }],
    [{
        name: "衢州",
        value: 13
    }, {
        name: "南京"
    }],
    [{
        name: "西宁",
        value: 2
    }, {
        name: "南京"
    }],
    [{
        name: "西安",
        value: 39
    }, {
        name: "南京"
    }],
    [{
        name: "贵阳",
        value: 124
    }, {
        name: "南京"
    }],
    [{
        name: "邢台",
        value: 16
    }, {
        name: "南京"
    }],
    [{
        name: "邯郸",
        value: 17
    }, {
        name: "南京"
    }],
    [{
        name: "郑州",
        value: 37
    }, {
        name: "南京"
    }],
    [{
        name: "鄂尔多斯",
        value: 8
    }, {
        name: "南京"
    }],
    [{
        name: "铜川",
        value: 8
    }, {
        name: "南京"
    }],
    [{
        name: "银川",
        value: 49
    }, {
        name: "南京"
    }],
    [{
        name: "长春",
        value: 24
    }, {
        name: "南京"
    }],
    [{
        name: "长沙",
        value: 29
    }, {
        name: "南京"
    }],
    [{
        name: "长治",
        value: 30
    }, {
        name: "南京"
    }],
    [{
        name: "青岛",
        value: 33
    }, {
        name: "南京"
    }],
    [{
        name: "韶关",
        value: 1
    }, {
        name: "南京"
    }]
];

var NJData = [
    [{
        name: '南京'
    }, {
        name: '上海',
        value: 327
    }],
    [{
        name: '南京'
    }, {
        name: '东莞',
        value: 7
    }],
    [{
        name: '南京'
    }, {
        name: '东营',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '中山',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '临汾',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '临沂',
        value: 4
    }],
    [{
        name: '南京'
    }, {
        name: '乌鲁木齐',
        value: 13
    }],
    [{
        name: '南京'
    }, {
        name: '佛山',
        value: 9
    }],
    [{
        name: '南京'
    }, {
        name: '兰州',
        value: 19
    }],
    [{
        name: '南京'
    }, {
        name: '包头',
        value: 5
    }],
    [{
        name: '南京'
    }, {
        name: '南京',
        value: 1519
    }],
    [{
        name: '南京'
    }, {
        name: '北京',
        value: 115
    }],
    [{
        name: '南京'
    }, {
        name: '南宁',
        value: 7
    }],
    [{
        name: '南京'
    }, {
        name: '南昌',
        value: 6
    }],
    [{
        name: '南京'
    }, {
        name: '南通',
        value: 99
    }],
    [{
        name: '南京'
    }, {
        name: '厦门',
        value: 11
    }],
    [{
        name: '南京'
    }, {
        name: '台州',
        value: 9
    }],
    [{
        name: '南京'
    }, {
        name: '合肥',
        value: 18
    }],
    [{
        name: '南京'
    }, {
        name: '呼和浩特',
        value: 6
    }],
    [{
        name: '南京'
    }, {
        name: '咸阳',
        value: 5
    }],
    [{
        name: '南京'
    }, {
        name: '哈尔滨',
        value: 4
    }],
    [{
        name: '南京'
    }, {
        name: '唐山',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '嘉兴',
        value: 11
    }],
    [{
        name: '南京'
    }, {
        name: '大同',
        value: 5
    }],
    [{
        name: '南京'
    }, {
        name: '大连',
        value: 6
    }],
    [{
        name: '南京'
    }, {
        name: '天津',
        value: 37
    }],
    [{
        name: '南京'
    }, {
        name: '太原',
        value: 7
    }],
    [{
        name: '南京'
    }, {
        name: '威海',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '宁波',
        value: 28
    }],
    [{
        name: '南京'
    }, {
        name: '宝鸡',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '宿迁',
        value: 22
    }],
    [{
        name: '南京'
    }, {
        name: '常州',
        value: 151
    }],
    [{
        name: '南京'
    }, {
        name: '广州',
        value: 28
    }],
    [{
        name: '南京'
    }, {
        name: '廊坊',
        value: 2
    }],
    [{
        name: '南京'
    }, {
        name: '徐州',
        value: 52
    }],
    [{
        name: '南京'
    }, {
        name: '惠州',
        value: 4
    }],
    [{
        name: '南京'
    }, {
        name: '成都',
        value: 17
    }],
    [{
        name: '南京'
    }, {
        name: '扬州',
        value: 55
    }],
    [{
        name: '南京'
    }, {
        name: '承德',
        value: 2
    }],
    [{
        name: '南京'
    }, {
        name: '拉萨',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '无锡',
        value: 96
    }],
    [{
        name: '南京'
    }, {
        name: '昆明',
        value: 17
    }],
    [{
        name: '南京'
    }, {
        name: '杭州',
        value: 76
    }],
    [{
        name: '南京'
    }, {
        name: '枣庄',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '柳州',
        value: 2
    }],
    [{
        name: '南京'
    }, {
        name: '株洲',
        value: 3
    }],
    [{
        name: '南京'
    }, {
        name: '武汉',
        value: 14
    }],
    [{
        name: '南京'
    }, {
        name: '江门',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '沈阳',
        value: 3
    }],
    [{
        name: '南京'
    }, {
        name: '沧州',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '河源',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '泉州',
        value: 4
    }],
    [{
        name: '南京'
    }, {
        name: '泰安',
        value: 2
    }],
    [{
        name: '南京'
    }, {
        name: '泰州',
        value: 39
    }],
    [{
        name: '南京'
    }, {
        name: '济南',
        value: 13
    }],
    [{
        name: '南京'
    }, {
        name: '济宁',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '海口',
        value: 16
    }],
    [{
        name: '南京'
    }, {
        name: '淄博',
        value: 9
    }],
    [{
        name: '南京'
    }, {
        name: '淮安',
        value: 22
    }],
    [{
        name: '南京'
    }, {
        name: '深圳',
        value: 81
    }],
    [{
        name: '南京'
    }, {
        name: '清远',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '潍坊',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '烟台',
        value: 10
    }],
    [{
        name: '南京'
    }, {
        name: '玉溪',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '珠海',
        value: 5
    }],
    [{
        name: '南京'
    }, {
        name: '盐城',
        value: 30
    }],
    [{
        name: '南京'
    }, {
        name: '盘锦',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '石家庄',
        value: 8
    }],
    [{
        name: '南京'
    }, {
        name: '福州',
        value: 10
    }],
    [{
        name: '南京'
    }, {
        name: '秦皇岛',
        value: 3
    }],
    [{
        name: '南京'
    }, {
        name: '盐城',
        value: 30
    }],
    [{
        name: '南京'
    }, {
        name: '绍兴',
        value: 13
    }],
    [{
        name: '南京'
    }, {
        name: '舟山',
        value: 3
    }],
    [{
        name: '南京'
    }, {
        name: '苏州',
        value: 128
    }],
    [{
        name: '南京'
    }, {
        name: '营口',
        value: 4
    }],
    [{
        name: '南京'
    }, {
        name: '衡水',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '西安',
        value: 18
    }],
    [{
        name: '南京'
    }, {
        name: '贵阳',
        value: 26
    }],
    [{
        name: '南京'
    }, {
        name: '连云港',
        value: 67
    }],
    [{
        name: '南京'
    }, {
        name: '邢台',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '邯郸',
        value: 2
    }],
    [{
        name: '南京'
    }, {
        name: '郑州',
        value: 15
    }],
    [{
        name: '南京'
    }, {
        name: '鄂尔多斯',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '重庆',
        value: 17
    }],
    [{
        name: '南京'
    }, {
        name: '金华',
        value: 5
    }],
    [{
        name: '南京'
    }, {
        name: '银川',
        value: 10
    }],
    [{
        name: '南京'
    }, {
        name: '镇江',
        value: 37
    }],
    [{
        name: '南京'
    }, {
        name: '长沙',
        value: 22
    }],
    [{
        name: '南京'
    }, {
        name: '阳泉',
        value: 1
    }],
    [{
        name: '南京'
    }, {
        name: '青岛',
        value: 23
    }]
];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                },
                {
                    coord: toCoord
                }
            ]);
        }
    }
    return res;
};

var series = [];
[
    ["南京", BJData],
    ["南京", NJData]
].forEach(function(item, i) {
    series.push({
            type: "lines",
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: "arrow", //箭头图标
                symbolSize: 5 //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 0, //尾迹线条透明度
                    curveness: 0.3 //尾迹线条曲直度
                }
            },

            data: convertData(item[1])
        }, {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: "right", //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: "{b}" //圆环显示文字
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "circle",
            symbolSize: function(val) {
                return 4 + val[2] / 1000; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            })
        },
        //被攻击点
        {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: "stroke",
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    color: "#00ffff",
                    formatter: "{b}",
                    textStyle: {
                        color: "#0bc7f3"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "pin",
            symbolSize: 30,
            itemStyle: {
                normal: {
                    show: true,
                    color: "#9966cc"
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
            }]
        }
    );
});

option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: "item",
        backgroundColor: "#1540a1",
        borderColor: "#FFFFCC",
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: "z-index:100",
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res =
                "<span style='color:#fff;'>" +
                name +
                "</span><br/>人数：" + value;
            return res;
        }
    },
    toolbox: {

        show: true,

        feature: {

            saveAsImage: {

                show: true,

                excludeComponents: ['toolbox'],

                pixelRatio: 2

            }

        }

    },
    visualMap: {
        //图例值控制
        min: 0,
        max: 10000,
        show: false,
        calculable: true,
        color: ["#0bc7f3"],
        textStyle: {
            color: "#fff"
        },

    },
    geo: {
        map: "china",
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "180%",
        itemStyle: {
            normal: {
                color: "#04284e", //地图背景色
                borderColor: "#5bc1c9" //省市边界线
            },
            emphasis: {
                color: "rgba(37, 43, 61, .5)" //悬浮背景
            }
        }
    },

    series: series
};