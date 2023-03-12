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
    '韶关': [113.7964, 24.7028],
    '河北省': [114.4995, 38.1006],
    '辽宁省': [123.1238, 42.1216],
    '黑龙江省': [127.9688, 45.368],
    '浙江省': [119.5313, 29.8773],
    '福建省': [119.4543, 25.9222],
    '山东省': [117.1582, 36.8701],
    '广东省': [113.5107, 23.2196],
    '湖北省': [114.3896, 30.6628],
    '四川省': [103.9526, 30.7617],
    '云南省': [102.9199, 25.4663],
    '甘肃省': [103.5901, 36.3043],
    '广西壮族自治区': [108.479, 23.1152],
    '宁夏回族自治区': [106.3586, 38.1775],
    '山西省': [112.3352, 37.9413],
    '吉林省': [125.8154, 44.2584],
    '江苏省': [118.8062, 31.9208],
    '安徽省': [117.29, 32.0581],
    '江西省': [116.0046, 28.6633],
    '河南省': [113.4668, 34.6234],
    '湖南省': [113.0823, 28.2568],
    '海南省': [110.3893, 19.8516],
    '贵州省': [106.6992, 26.7682],
    '陕西省': [109.1162, 34.2004],
    '青海省': [101.4038, 36.8207],
    '内蒙古自治区': [111.4124, 40.4901],
    '西藏自治区': [91.1865, 30.1465],
    '新疆维吾尔自治区': [87.9236, 43.5883],
    '上海市': [121.4648, 31.2891],
    '天津市': [117.4219, 39.4189],
    '重庆市': [107.7539, 30.1904],
    '北京市': [116.4551, 40.2539]


};
var BJData = [
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '北京市'
    }],


    [{
        name: '河北省',
        value: 100
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '广州',
        value: 70
    }, {
        name: '杭州'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '海南省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '湖南省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '青海省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '安徽省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '北京市',
        value: 3
    }, {
        name: '广东省'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '北京市',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '北京市'
    }],
    [{
        name: '福建省',
        value: 25
    }, {
        name: '甘肃省'
    }],
    [{
        name: '福建省',
        value: 3
    }, {
        name: '广东省'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '贵州省'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '福建省',
        value: 8
    }, {
        name: '河南省'
    }],
    [{
        name: '福建省',
        value: 6
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '福建省',
        value: 2
    }, {
        name: '湖南省'
    }],
    [{
        name: '福建省',
        value: 2
    }, {
        name: '吉林省'
    }],
    [{
        name: '福建省',
        value: 2
    }, {
        name: '江苏省'
    }],
    [{
        name: '福建省',
        value: 26
    }, {
        name: '江西省'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '福建省',
        value: 3
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '山西省'
    }],
    [{
        name: '福建省',
        value: 3
    }, {
        name: '上海市'
    }],
    [{
        name: '福建省',
        value: 7
    }, {
        name: '四川省'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '天津市'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '云南省'
    }],
    [{
        name: '福建省',
        value: 36
    }, {
        name: '浙江省'
    }],
    [{
        name: '福建省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '北京市'
    }],
    [{
        name: '甘肃省',
        value: 33
    }, {
        name: '福建省'
    }],
    [{
        name: '甘肃省',
        value: 2
    }, {
        name: '广东省'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '湖南省'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '甘肃省',
        value: 33
    }, {
        name: '江西省'
    }],
    [{
        name: '甘肃省',
        value: 23
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '青海省'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '甘肃省',
        value: 3
    }, {
        name: '四川省'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '天津市'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '西藏自治区'
    }],
    [{
        name: '甘肃省',
        value: 2
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '甘肃省',
        value: 1
    }, {
        name: '云南省'
    }],
    [{
        name: '甘肃省',
        value: 10
    }, {
        name: '浙江省'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '北京市'
    }],
    [{
        name: '广东省',
        value: 18
    }, {
        name: '福建省'
    }],
    [{
        name: '广东省',
        value: 72
    }, {
        name: '甘肃省'
    }],
    [{
        name: '广东省',
        value: 4
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '贵州省'
    }],
    [{
        name: '广东省',
        value: 2
    }, {
        name: '海南省'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '广东省',
        value: 5
    }, {
        name: '河南省'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '广东省',
        value: 7
    }, {
        name: '湖北省'
    }],
    [{
        name: '广东省',
        value: 4
    }, {
        name: '湖南省'
    }],
    [{
        name: '广东省',
        value: 2
    }, {
        name: '吉林省'
    }],
    [{
        name: '广东省',
        value: 2
    }, {
        name: '江苏省'
    }],
    [{
        name: '广东省',
        value: 5
    }, {
        name: '江西省'
    }],
    [{
        name: '广东省',
        value: 3
    }, {
        name: '辽宁省'
    }],
    [{
        name: '广东省',
        value: 12
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '青海省'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '陕西省'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '上海市'
    }],
    [{
        name: '广东省',
        value: 2
    }, {
        name: '四川省'
    }],
    [{
        name: '广东省',
        value: 2
    }, {
        name: '天津市'
    }],
    [{
        name: '广东省',
        value: 4
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '广东省',
        value: 1
    }, {
        name: '云南省'
    }],
    [{
        name: '广东省',
        value: 8
    }, {
        name: '浙江省'
    }],
    [{
        name: '广东省',
        value: 2
    }, {
        name: '重庆市'
    }],
    [{
        name: '广西壮族自治区',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '广西壮族自治区',
        value: 6
    }, {
        name: '甘肃省'
    }],
    [{
        name: '广西壮族自治区',
        value: 8
    }, {
        name: '广东省'
    }],
    [{
        name: '广西壮族自治区',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '广西壮族自治区',
        value: 1
    }, {
        name: '湖南省'
    }],
    [{
        name: '广西壮族自治区',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '广西壮族自治区',
        value: 2
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '广西壮族自治区',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '广西壮族自治区',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '广西壮族自治区',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '广西壮族自治区',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '贵州省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '贵州省',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '贵州省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '贵州省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '海南省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '海南省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '海南省',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '海南省',
        value: 2
    }, {
        name: '广东省'
    }],
    [{
        name: '海南省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '海南省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '海南省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '河北省',
        value: 27
    }, {
        name: '广东省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '湖南省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '山西省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '天津市'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '河北省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '河南省',
        value: 6
    }, {
        name: '福建省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '河南省',
        value: 5
    }, {
        name: '广东省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '江苏省'
    }],
    [{
        name: '河南省',
        value: 3
    }, {
        name: '江西省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '天津市'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '河南省',
        value: 2
    }, {
        name: '浙江省'
    }],
    [{
        name: '河南省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '黑龙江省',
        value: 4
    }, {
        name: '福建省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '江苏省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '黑龙江省',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '湖北省',
        value: 5
    }, {
        name: '福建省'
    }],
    [{
        name: '湖北省',
        value: 2
    }, {
        name: '甘肃省'
    }],
    [{
        name: '湖北省',
        value: 5
    }, {
        name: '广东省'
    }],
    [{
        name: '湖北省',
        value: 2
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '湖北省',
        value: 2
    }, {
        name: '湖南省'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '江苏省'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '山西省'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '上海市'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '天津市'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '云南省'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '湖北省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '湖南省',
        value: 2
    }, {
        name: '福建省'
    }],
    [{
        name: '湖南省',
        value: 2
    }, {
        name: '甘肃省'
    }],
    [{
        name: '湖南省',
        value: 10
    }, {
        name: '广东省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '贵州省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '山西省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '陕西省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '天津市'
    }],
    [{
        name: '湖南省',
        value: 2
    }, {
        name: '浙江省'
    }],
    [{
        name: '湖南省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '北京市'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '吉林省',
        value: 2
    }, {
        name: '广东省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '江苏省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '天津市'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '云南省'
    }],
    [{
        name: '吉林省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '江苏省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '江苏省',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '江苏省',
        value: 2
    }, {
        name: '广东省'
    }],
    [{
        name: '江苏省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '江苏省',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '江苏省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '江苏省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '江苏省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '江苏省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '江苏省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '江西省',
        value: 9
    }, {
        name: '福建省'
    }],
    [{
        name: '江西省',
        value: 2
    }, {
        name: '甘肃省'
    }],
    [{
        name: '江西省',
        value: 3
    }, {
        name: '广东省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '湖南省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '江西省',
        value: 14
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '江西省',
        value: 2
    }, {
        name: '山东省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '山西省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '云南省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '江西省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '辽宁省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '辽宁省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '辽宁省',
        value: 5
    }, {
        name: '广东省'
    }],
    [{
        name: '辽宁省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '辽宁省',
        value: 1
    }, {
        name: '江苏省'
    }],
    [{
        name: '辽宁省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '辽宁省',
        value: 1
    }, {
        name: '山西省'
    }],
    [{
        name: '辽宁省',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '内蒙古自治区',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '北京市'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 11
    }, {
        name: '甘肃省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 3
    }, {
        name: '江苏省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 100
    }, {
        name: '江西省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '陕西省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '天津市'
    }],
    [{
        name: '宁夏回族自治区',
        value: 2
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '云南省'
    }],
    [{
        name: '宁夏回族自治区',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '青海省',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '青海省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '青海省',
        value: 1
    }, {
        name: '西藏自治区'
    }],
    [{
        name: '青海省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '北京市'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '山东省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '山西省',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '山西省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '山西省',
        value: 4
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '山西省',
        value: 4
    }, {
        name: '天津市'
    }],
    [{
        name: '陕西省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '陕西省',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '陕西省',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '陕西省',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '陕西省',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '陕西省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '上海市',
        value: 6
    }, {
        name: '福建省'
    }],
    [{
        name: '上海市',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '上海市',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '北京市'
    }],
    [{
        name: '四川省',
        value: 2
    }, {
        name: '福建省'
    }],
    [{
        name: '四川省',
        value: 4
    }, {
        name: '甘肃省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '湖南省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '四川省',
        value: 5
    }, {
        name: '江苏省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '青海省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '西藏自治区'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '四川省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '天津市',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '天津市',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '天津市',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '天津市',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '天津市',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '天津市',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '天津市',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '天津市',
        value: 9
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '天津市',
        value: 1
    }, {
        name: '山西省'
    }],
    [{
        name: '天津市',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '西藏自治区',
        value: 2
    }, {
        name: '甘肃省'
    }],
    [{
        name: '西藏自治区',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '西藏自治区',
        value: 1
    }, {
        name: '青海省'
    }],
    [{
        name: '西藏自治区',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '西藏自治区',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 5
    }, {
        name: '甘肃省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 2
    }, {
        name: '广东省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '湖南省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '江苏省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '陕西省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '新疆维吾尔自治区',
        value: 1
    }, {
        name: '浙江省'
    }],
    [{
        name: '云南省',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '云南省',
        value: 1
    }, {
        name: '甘肃省'
    }],
    [{
        name: '云南省',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '云南省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '云南省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '云南省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '云南省',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '安徽省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '北京市'
    }],
    [{
        name: '浙江省',
        value: 5
    }, {
        name: '福建省'
    }],
    [{
        name: '浙江省',
        value: 9
    }, {
        name: '甘肃省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '黑龙江省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '湖南省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '吉林省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '江苏省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '江西省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '辽宁省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '宁夏回族自治区'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '青海省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '山东省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '山西省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '陕西省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '天津市'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
    }],
    [{
        name: '浙江省',
        value: 1
    }, {
        name: '重庆市'
    }],
    [{
        name: '重庆市',
        value: 1
    }, {
        name: '福建省'
    }],
    [{
        name: '重庆市',
        value: 1
    }, {
        name: '广东省'
    }],
    [{
        name: '重庆市',
        value: 1
    }, {
        name: '广西壮族自治区'
    }],
    [{
        name: '重庆市',
        value: 1
    }, {
        name: '河北省'
    }],
    [{
        name: '重庆市',
        value: 1
    }, {
        name: '河南省'
    }],
    [{
        name: '重庆市',
        value: 1
    }, {
        name: '湖北省'
    }],
    [{
        name: '重庆市',
        value: 0
    }, {
        name: '湖南省'
    }],
    [{
        name: '重庆市',
        value: 1
    }, {
        name: '四川省'
    }],
    [{
        name: '重庆市',
        value: 1
    }, {
        name: '新疆维吾尔自治区'
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
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];

var series = [];
[
    ['福建省', BJData]
].forEach(function(item, i) {
    series.push(

        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4,
                trailLength: 0.02,
                symbol: 'arrow',
                symbolSize: 5,
            },
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },

            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [5, 0],
                    formatter: '{b}'
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 4 + val[2] / 10;
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },
        //被攻击点
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    //			                offset:[5, 0],

                    color: '#00ffff',
                    formatter: '{b}',
                    textStyle: {
                        color: "#00ffff"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'pin',
            symbolSize: 30,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f5f5f5'
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100]),
            }],
        }
    );
});

option = {
    backgroundColor: '#fff',

    visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        layoutCenter: ['50%', '53%'],
        layoutSize: "108%",
        itemStyle: {
            normal: {
                color: '#f5f5f5',
                borderColor: '#ccc'
            },
            emphasis: {
                color: '#ccc'
            }
        }
    },

    series: series
};