var uploadedDataURL = '/asset/get/s/data-1639194598494-6-HZqJr6g.json';
var geoGpsMap = [121.4648, 31.2891];
var t = 1;
var r = 1;
//所有地点坐标
var geoCoordMap = {
    江苏: [118.8062, 31.9208],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
    西藏: [91.11, 29.97],
};

var d1 = {
    北京市: 114.2,
    天津: 84.3,
    河北: 1270.7434,
    山西: 328.8026,
    内蒙古: 123.3312,
    辽宁: 396.9402,
    吉林: 253.158,
    黑龙江: 356.7,
    上海: 114.4773,
    江苏: 601.945,
    浙江: 568.375,
    安徽: 609.0731,
    福建: 522.0,
    江西: 273.2,
    山东: 2525.9998,
    河南: 1318.5,
    湖北: 611.5727,
    湖南: 512.4,
    广东: 836.9,
    广西: 641.2,
    海南: 193.5,
    重庆: 128.6,
    四川: 464.9,
    贵州: 78.8,
    云南: 126.2,
    西藏: 1.1,
    陕西: 730.9,
    甘肃: 247.7,
    青海: 2.4,
    宁夏: 71.2,
    新疆: 408.3,
};
var d2 = {
    北京市: 113.4,
    天津: 69.0,
    河北: 1346.3,
    山西: 342.9,
    内蒙古: 129.3,
    辽宁: 430.1,
    吉林: 215.0,
    黑龙江: 315.6,
    上海: 111.4,
    江苏: 620.0,
    浙江: 632.1,
    安徽: 719.6,
    福建: 552.9,
    江西: 291.0,
    山东: 2478.5,
    河南: 1638.6,
    湖北: 542.7,
    湖南: 499.4,
    广东: 909.0,
    广西: 702.3,
    海南: 190.6,
    重庆: 137.2,
    四川: 494.8,
    贵州: 87.2,
    云南: 145.1,
    西藏: 0.9,
    陕西: 858.1,
    甘肃: 245.6,
    青海: 2.8,
    宁夏: 68.6,
    新疆: 450.8,
};
var d3 = {
    北京市: 111.9,
    天津: 68.2,
    河北: 1397.9,
    山西: 314.4,
    内蒙古: 178.7884,
    辽宁: 451.2925,
    吉林: 235.3272,
    黑龙江: 352.5577,
    上海: 101.0341,
    江苏: 606.351,
    浙江: 577.9644,
    安徽: 711.5908,
    福建: 559.0814,
    江西: 325.4344,
    山东: 2546.8354,
    河南: 1842.1671,
    湖北: 566.7685,
    湖南: 519.4909,
    广东: 946.4636,
    广西: 766.8373,
    海南: 220.36181,
    重庆: 154.6266,
    四川: 527.1572,
    贵州: 95.9636,
    云南: 169.6927,
    西藏: 0.88779,
    陕西: 906.1409,
    甘肃: 280.7049,
    青海: 2.6021,
    宁夏: 69.611,
    新疆: 511.9138,
};
var d4 = {
    北京市: 114.8174,
    天津: 66.9629,
    河北: 1453.0726,
    山西: 353.7499,
    内蒙古: 220.4765,
    辽宁: 478.4129,
    吉林: 223.8284,
    黑龙江: 413.7573,
    上海: 108.2614,
    江苏: 628.4519,
    浙江: 650.0345,
    安徽: 733.587,
    福建: 570.7723,
    江西: 356.8792,
    山东: 2513.4014,
    河南: 2005.6008,
    湖北: 625.2479,
    湖南: 586.2443,
    广东: 1001.0837,
    广西: 812.0425,
    海南: 247.2297,
    重庆: 145.7446,
    四川: 535.3247,
    贵州: 109.1878,
    云南: 201.8623,
    西藏: 0.8944,
    陕西: 1053.165,
    甘肃: 332.7711,
    青海: 2.3703,
    宁夏: 114.2478,
    新疆: 580.4267,
};
var d5 = {
    北京市: 124.8907,
    天津: 61.9133,
    河北: 1491.5442,
    山西: 342.2304,
    内蒙古: 208.0612,
    辽宁: 532.7249,
    吉林: 232.7673,
    黑龙江: 373.2947,
    上海: 112.377,
    江苏: 642.6802,
    浙江: 701.4863,
    安徽: 749.5107,
    福建: 594.2047,
    江西: 381.1558,
    山东: 2541.1715,
    河南: 2088.5925,
    湖北: 654.7329,
    湖南: 630.6206,
    广东: 1057.1548,
    广西: 861.487,
    海南: 306.8202,
    重庆: 175.8938,
    四川: 591.9878,
    贵州: 112.8635,
    云南: 251.9697,
    西藏: 1.0886,
    陕西: 1124.9534,
    甘肃: 358.4383,
    青海: 3.2981,
    宁夏: 153.8266,
    新疆: 672.5466,
};
var d6 = {
    北京市: 118.798,
    天津: 62.2978,
    河北: 1532.8854,
    山西: 410.6361,
    内蒙古: 238.1577,
    辽宁: 591.6507,
    吉林: 273.8746,
    黑龙江: 367.5465,
    上海: 111.1418,
    江苏: 682.8606,
    浙江: 747.9235,
    安徽: 691.8583,
    福建: 632.4569,
    江西: 444.5302,
    山东: 2612.6162,
    河南: 2129.5864,
    湖北: 686.2185,
    湖南: 663.0948,
    广东: 1081.2764,
    广西: 855.7709,
    海南: 325.1987,
    重庆: 193.2778,
    四川: 635.0999,
    贵州: 114.2821,
    云南: 313.4384,
    西藏: 1.0656,
    陕西: 1246.9726,
    甘肃: 411.6229,
    青海: 3.2637,
    宁夏: 185.7502,
    新疆: 855.0355,
};
var d7 = {
    北京市: 120.1,
    天津: 67,
    河北: 1578.6,
    山西: 449.2,
    内蒙古: 208.7,
    辽宁: 655.6,
    吉林: 253.5,
    黑龙江: 267.7,
    上海: 104.7,
    江苏: 715.7,
    浙江: 712.4,
    安徽: 745.8,
    福建: 645,
    江西: 497.5,
    山东: 2728.3,
    河南: 2228.1,
    湖北: 725.8,
    湖南: 715.7,
    广东: 1160.8,
    广西: 1010.7,
    海南: 350.4,
    重庆: 212.9,
    四川: 689.5,
    贵州: 119.7,
    云南: 342.7,
    西藏: 1.2,
    陕西: 1366.1,
    甘肃: 459.9,
    青海: 3.3,
    宁夏: 202.4,
    新疆: 1056.3,
};
var d8 = {
    北京市: 115.2,
    天津: 60,
    河北: 1612.4,
    山西: 474.9,
    内蒙古: 278.2,
    辽宁: 733.1,
    吉林: 218,
    黑龙江: 279.6,
    上海: 101.9,
    江苏: 738.6,
    浙江: 701.3,
    安徽: 805.3,
    福建: 642.8,
    江西: 468.4,
    山东: 2793.8,
    河南: 2394,
    湖北: 778.5,
    湖南: 788.4,
    广东: 1235.9,
    广西: 1094.4,
    海南: 375.1,
    重庆: 238.5,
    四川: 722.9,
    贵州: 123.5,
    云南: 397.9,
    西藏: 2.2,
    陕西: 1476.5,
    甘肃: 488.5,
    青海: 3.8,
    宁夏: 228.9,
    新疆: 1028.8,
};
var d9 = {
    北京市: 120.9,
    天津: 62.6,
    河北: 1719.2,
    山西: 617.9,
    内蒙古: 301.4,
    辽宁: 810.7,
    吉林: 225.7,
    黑龙江: 279.9,
    上海: 88.0,
    江苏: 757.1,
    浙江: 712.4,
    安徽: 846.6,
    福建: 687.9,
    江西: 580.6,
    山东: 2850.8,
    河南: 2414.1,
    湖北: 855.2,
    湖南: 868.8,
    广东: 1314.3,
    广西: 1223.0,
    海南: 403.7,
    重庆: 261.1,
    四川: 776.6,
    贵州: 128.0,
    云南: 476.4,
    西藏: 1.4,
    陕西: 1587.1,
    甘肃: 519.1,
    青海: 4.4,
    宁夏: 237.3,
    新疆: 1036.0,
};
var d10 = {
    北京市: 113.6046,
    天津: 58.1884,
    河北: 1814.8959,
    山西: 677.3343,
    内蒙古: 283.4959,
    辽宁: 894.2903,
    吉林: 217.4695,
    黑龙江: 268.5767,
    上海: 87.1885,
    江苏: 795.9762,
    浙江: 703.8397,
    安徽: 885.3972,
    福建: 708.828,
    江西: 571.2906,
    山东: 2924.5112,
    河南: 2535.0384,
    湖北: 885.6769,
    湖南: 909.2495,
    广东: 1390.0933,
    广西: 1325.032,
    海南: 428.7054,
    重庆: 291.1934,
    四川: 821.6309,
    贵州: 147.7241,
    云南: 581.1229,
    西藏: 1.3565,
    陕西: 1693.8187,
    甘肃: 564.992,
    青海: 3.6795,
    宁夏: 250.5379,
    新疆: 1222.0977,
};
var d11 = {
    北京市: 103.8487,
    天津: 54.1685,
    河北: 1863.3081,
    山西: 711.842,
    内蒙古: 294.7699,
    辽宁: 944.651,
    吉林: 234.6645,
    黑龙江: 274.3674,
    上海: 74.7275,
    江苏: 814.1892,
    浙江: 715.6526,
    安徽: 905.0567,
    福建: 744.3053,
    江西: 637.7679,
    山东: 3028.841,
    河南: 2599.6638,
    湖北: 920.4573,
    湖南: 879.4436,
    广东: 1485.4045,
    广西: 1433.4166,
    海南: 439.4807,
    重庆: 319.2576,
    四川: 840.0681,
    贵州: 167.7457,
    云南: 634.5223,
    西藏: 1.3044,
    陕西: 1764.4125,
    甘肃: 611.4917,
    青海: 2.9644,
    宁夏: 264.3069,
    新疆: 1326.9382,
};
var d12 = {
    北京市: 96.5,
    天津: 62.7,
    河北: 2019,
    山西: 770.8,
    内蒙古: 322.3,
    辽宁: 870.6,
    吉林: 229.7,
    黑龙江: 258.7,
    上海: 86.2,
    江苏: 861.6,
    浙江: 714.8,
    安徽: 965.3,
    福建: 790.8,
    江西: 627.1,
    山东: 3134,
    河南: 2560.2,
    湖北: 972.3,
    湖南: 920,
    广东: 1560.7,
    广西: 1560.6,
    海南: 413,
    重庆: 347.6,
    四川: 884.5,
    贵州: 196.4,
    云南: 669,
    西藏: 1.4,
    陕西: 1849.9,
    甘肃: 636.6,
    青海: 2.6,
    宁夏: 290.2,
    新疆: 1466.9,
};
var d13 = {
    北京市: 87.9,
    天津: 62.7,
    河北: 2117.2,
    山西: 842.6,
    内蒙古: 296.7,
    辽宁: 882,
    吉林: 209,
    黑龙江: 213.5,
    上海: 61.5,
    江苏: 914.8,
    浙江: 740.9,
    安徽: 1029.8,
    福建: 837,
    江西: 663.4,
    山东: 3218.6,
    河南: 2665.1,
    湖北: 966.3,
    湖南: 981,
    广东: 1648.5,
    广西: 1720,
    海南: 405.9,
    重庆: 375.9,
    四川: 934.2,
    贵州: 224.9,
    云南: 726.5,
    西藏: 1.5,
    陕西: 1930.9,
    甘肃: 679,
    青海: 3.6,
    宁夏: 298.9,
    新疆: 1635,
};
var d14 = {
    北京市: 79.0,
    天津: 61.5,
    河北: 2138.5,
    山西:840.8,
    内蒙古: 316.3,
    辽宁:802.3,
    吉林:241.1,
    黑龙江:259.9,
    上海: 50.6,
    江苏: 893.0,
    浙江:724.3,
    安徽: 1043.5,
    福建: 853.8,
    江西: 617.4,
    山东: 3255.4,
    河南: 2871.3,
    湖北: 1010.4,
    湖南: 1048.2,
    广东: 1717.0,
    广西:1882.5,
    海南:395.4,
    重庆: 408.7,
    四川:979.3,
    贵州: 250.9,
    云南: 759.1,
    西藏: 1.5,
    陕西: 2017.8,
    甘肃:738.0,
    青海: 4.0,
    宁夏: 305.8,
    新疆: 1790.9,
};
var d15 = {
    北京市: 74.4,
    天津: 58.2,
    河北: 1365.3,
    山西: 844,
    内蒙古: 322.9,
    辽宁: 770.3,
    吉林:89.5,
    黑龙江:236.9,
    上海: 46.4,
    江苏: 942.5,
    浙江:751.3,
    安徽: 606.3,
    福建: 644.7,
    江西: 670.1,
    山东: 2804.3,
    河南: 2602.4,
    湖北: 948.4,
    湖南: 956.4,
    广东: 1538.7,
    广西:1900.4,
    海南:405.5,
    重庆: 403.4,
    四川:1007.9,
    贵州: 280.1,
    云南: 783.9,
    西藏: 0.2,
    陕西: 1922.1,
    甘肃:630.9,
    青海: 3.6,
    宁夏: 210.6,
    新疆: 1420.2,
};
var colors = ['#1DE9B6', '#EEDD78', '#FFFF00', '#FFDB5C', '#37A2DA', '#04B9FF'];
var colorIndex = 0;
$(function () {
    var year = ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2012', '2013', '2014', '2015', '2016', '2017']
    var mapData = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            year: '2003',
            name: key,
            value: d1[key] / 25,
            value1: d1[key] / 10,
        });
        mapData[1].push({
            year: '2004',
            name: key,
            value: d2[key] / 25,
            value1: d2[key] / 10,
        });
        mapData[2].push({
            year: '2005',
            name: key,
            value: d3[key] / 25,
            value1: d3[key] / 10,
        });
        mapData[3].push({
            year: '2006',
            name: key,
            value: d4[key] / 25,
            value1: d4[key] / 10,
        });
        mapData[4].push({
            year: '2007',
            name: key,
            value: d5[key] / 25,
            value1: d5[key] / 10,
        });
        mapData[5].push({
            year: '2008',
            name: key,
            value: d6[key] / 25,
            value1: d6[key] / 10,
        });
        mapData[6].push({
            year: '2009',
            name: key,
            value: d7[key] / 25,
            value1: d7[key] / 10,
        });
        mapData[7].push({
            year: '2010',
            name: key,
            value: d8[key] / 25,
            value1: d8[key] / 10,
        });
        mapData[8].push({
            year: '2011',
            name: key,
            value: d9[key] / 25,
            value1: d9[key] / 10,
        });
        mapData[9].push({
            year: '2012',
            name: key,
            value: d10[key] / 25,
            value1: d10[key] / 10,
        });
        mapData[10].push({
            year: '2013',
            name: key,
            value: d11[key] / 25,
            value1: d11[key] / 10,
        });
        mapData[11].push({
            year: '2014',
            name: key,
            value: d12[key] / 25,
            value1: d12[key] / 10,
        });
        mapData[12].push({
            year: '2015',
            name: key,
            value: d13[key] / 25,
            value1: d13[key] / 10,
        });
         mapData[13].push({
            year: '2016',
            name: key,
            value: d13[key] / 25,
            value1: d13[key] / 10,
        });
         mapData[14].push({
            year: '2017',
            name: key,
            value: d13[key] / 25,
            value1: d13[key] / 10,
        });
    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value;
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1 * 10);
            categoryData[i].push(mapData[i][j].name);
        }
    }

    $.getJSON(uploadedDataURL, function (geoJson) {
        $('body').css({
            background:
                'url(https://corgixuoos.oss-cn-shanghai.aliyuncs.com/soc/0623%E4%BF%AE%E6%94%B9%E5%A4%A7%E5%B1%8F-%E6%95%B4%E4%BD%93-Recovered.png) repeat-y', //'#2a6d87',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        });

        echarts.registerMap('china', geoJson);
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };

        var convertToLineData = function (data, gps) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var toCoord = geoCoordMap[dataItem.name];
                var fromCoord = gps;
                if (fromCoord && toCoord) {
                    if (t == 1) {
                        res.push([
                            {
                                coord: toCoord,
                            },
                            {
                                coord: fromCoord,
                                value: dataItem.value,
                            },
                        ]);
                    } else {
                        res.push([
                            {
                                coord: fromCoord,
                                value: dataItem.value,
                            },
                            {
                                coord: toCoord,
                            },
                        ]);
                    }
                }
            }
            if (t == 0) {
                t = 1;
            } else {
                t = 0;
            }
            return res;
        };

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 1500, //时间间隔
                left: '8%',
                right: '10%',
                bottom: '3%',
                width: '70%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd',
                        },
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#FFFFFF',
                },
                checkpointStyle: {
                    borderColor: '#FFFFFF',
                    borderWidth: 2,
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666',
                    },
                    emphasis: {
                        color: '#FFFFFF',
                        borderColor: '#aaa',
                    },
                },
            },
            baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '2%',
                    top: '10%',
                    bottom: '10%',
                    width: '18%',
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(150,150,150,0.1)', //hover颜色
                        },
                    },
                },
                visualMap: {
                    min: 0,
                    max: 3000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    textStyle: {
                        color: 'white',
                    },
                    calculable: true,
                    colorLightness: [0.8, 100],
                    color: ['#c05050', '#e5cf0d', '#5ab1ef'],
                    dimension: 0,
                },
                geo: {
                    show: true,
                    map: 'china',
                    roam: true,
                    zoom: 1,
                    center: [113.83531246, 34.0267395887],
                    label: {
                        emphasis: {
                            show: true,
                        },
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(3, 0, 38,9)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(3, 0, 38,9)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 9)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10,
                        },
                        emphasis: {
                            areaColor: '#FCFFD9',
                            borderWidth: 0,
                        },
                    },
                },
            },
            options: [],
        };

        for (var n = 0; n < year.length; n++) {
            var statistic_name = '水果总产量(万吨)';
            optionXyMap01.options.push({
                backgroundColor: '#555555',

                title: [
                    {
                        text: '2003-2017年各地区水果总产量动态变化',
                        left: '30%',
                        top: '5%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 22,
                        },
                    },
                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '85%',
                        top: '7%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 15,
                        },
                    },
                ],
                grid: {
                    right: 1,
                    top: 85,
                    bottom: 30,
                    width: '200',
                },
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        margin: 1,
                        textStyle: {
                            color: '#aaa',
                        },
                    },
                },
                yAxis: {
                    type: 'category',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd',
                        },
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd',
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd',
                        },
                    },
                    data: categoryData[n],
                },

                series: [
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function (val) {
                            return val[2] / 5;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                            },
                            emphasis: {
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                            },
                        },
                    },
                    //地图？
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#FFFFFF',
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            },
                        },
                        animation: false,
                        data: mapData,
                    },
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(
                            mapData[n]
                                .sort(function (a, b) {
                                    return b.value - a.value;
                                })
                                .slice(0, 20)
                        ),
                        symbolSize: function (val) {
                            return val[2] / 5;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke',
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: '#03152525',
                                shadowBlur: 100,
                                shadowColor: colors[colorIndex][n],
                            },
                        },
                        zlevel: 1,
                    },
                    //地图线的动画效果

                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        barMaxWidth: 10,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[n],
                                barBorderRadius: [0, 30, 30, 0],
                            },
                        },
                        data: barData[n],
                    },
                ],
            });
            if (r == 0) {
                r = 1;
            } else {
                r = 0;
            }
        }
        myChart.setOption(optionXyMap01);
    });
});
