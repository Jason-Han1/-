var dataArry = [
    [
        ["2010", "2514", 2514, "机器学习"],
        ["2011", "2528", 2528, "机器学习"],
        ["2012", "2264", 2264, "机器学习"],
        ["2013", "1050", 1050, "机器学习"],
        ["2014", "1313", 1313, "机器学习"],
        ["2015", "1545", 1545, "机器学习"],
        ["2016", "1730", 1730, "机器学习"],
        ["2017", "1915", 1915, "机器学习"],
        ["2018", "2249", 2249, "机器学习"]
    ],

    [
        ["2010", "564", 564, "群体智能"],
        ["2011", "630", 630, "群体智能"],
        ["2012", "581", 581, "群体智能"],
        ["2013", "303", 303, "群体智能"],
        ["2014", "431", 431, "群体智能"],
        ["2015", "493", 493, "群体智能"],
        ["2016", "479", 479, "群体智能"],
    ],
    [
        ["2010", "317", 317, "图计算"],
        ["2011", "293", 293, "图计算"],
        ["2013", "525", 525, "图计算"],
        ["2014", "539", 539, "图计算"],
        ["2015", "704", 704, "图计算"],
        ["2016", "648", 648, "图计算"],
        ["2017", "650", 650, "图计算"],
        ["2018", "590", 590, "图计算"]
    ],

    [
        ["2010", "240", 240, "智能传感器"],
        ["2011", "287", 287, "智能传感器"],
        ["2012", "399", 399, "智能传感器"],
        ["2013", "358", 358, "智能传感器"],
        ["2014", "417", 417, "智能传感器"],
        ["2015", "545", 545, "智能传感器"],
        ["2016", "592", 592, "智能传感器"],
        ["2017", "614", 614, "智能传感器"],
        ["2018", "436", 436, "智能传感器"],
    ],

    [
        ["2010", "228", 228, "智能芯片"],
        ["2011", "238", 238, "智能芯片"],
        ["2012", "267", 267, "智能芯片"],
        ["2018", "413", 413, "智能芯片"],
    ],


    [
        ["2010", "166", 166, "自然语言处理"],
        ["2012", "370", 370, "自然语言处理"],
    ],

    [
        ["2011", "177", 177, "模式识别"],
        ["2013", "425", 425, "模式识别"],
        ["2014", "415", 415, "模式识别"],
        ["2015", "687", 687, "模式识别"],
        ["2016", "503", 503, "模式识别"],
        ["2017", "580", 580, "模式识别"],
        ["2018", "471", 471, "模式识别"],
    ],

    [
        ["2012", "282", 282, "分布式计算框架"],
        ["2013", "348", 348, "分布式计算框架"],
        ["2014", "636", 636, "分布式计算框架"],
        ["2015", "619", 619, "分布式计算框架"],
        ["2016", "566", 566, "分布式计算框架"],
        ["2017", "751", 751, "分布式计算框架"],
        ["2018", "369", 369, "分布式计算框架"],
    ],
    [
        ["2010", "377", 377, "计算机视觉"],
        ["2011", "421", 421, "计算机视觉"],
        ["2012", "462", 462, "计算机视觉"],
        ["2013", "786", 786, "计算机视觉"],
        ["2014", "921", 921, "计算机视觉"],
        ["2015", "1237", 1237, "计算机视觉"],
        ["2016", "926", 926, "计算机视觉"],
        ["2017", "975", 975, "计算机视觉"],
        ["2018", "736", 736, "计算机视觉"],
    ]
];



option = {
    title: {
        text: "人工智能领域论文热点分析",
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: function(obj) {
            var resule = [];
            for (var prop in obj) {
                var pr = obj[prop].value;
                resule.push(pr[3] + ":" + pr[2] + "<br>");
            }
            return resule.join("");
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        name: "年份",
        axisLabel: {
            fontSize: 18
        },
        data: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
    },
    yAxis: {
        name: "热度",
        axisLabel: {
            fontSize: 18
        },
    },
    visualMap: [{
        show: true,
        categories: ["计算智能", "群体智能", "人机交互", "计算机视觉", "智能芯片", "图计算", "智能传感器", "机器学习", "模式识别"],
        textStyle: {
            fontSize: 18
        },
        right: 0,
        top: '40%',
        inRange: {
            color: (function() {
                var colors = ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a'];
                return colors.concat(colors);
            })()
        },

    }],
    series: [{
        type: 'scatter',
        symbolSize: function(val) {
            return sizeFunction(val[2]);
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#000',
            formatter: function(param) {
                return param.data[3];
            },
        },
        zlevel:2,
        data: dataArry[0]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            return sizeFunction(val[2]);
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#000',
            formatter: function(param) {
                return param.data[3];
            },
        },
        
        zlevel:3,
        data: dataArry[1]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            return sizeFunction(val[2]);
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#000',
            formatter: function(param) {
                return param.data[3];
            },
        },
        zlevel:4,
        data: dataArry[2]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            return sizeFunction(val[2]);
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#000',
            formatter: function(param) {
                return param.data[3];
            },
        },
        zlevel:5,
        data: dataArry[3]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            return sizeFunction(val[2]);
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#000',
            formatter: function(param) {
                return param.data[3];
            },
        },
        zlevel:20,
        data: dataArry[4]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            return sizeFunction(val[2]);
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#000',
            formatter: function(param) {
                return param.data[3];
            },
        },
        zlevel:7,
        data: dataArry[5]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            return sizeFunction(val[2]);
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#000',
            formatter: function(param) {
                return param.data[3];
            },
        },
        zlevel:2,
        data: dataArry[6]
    },{
        type: 'scatter',
        symbolSize: function(val) {
            return sizeFunction(val[2]);
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#000',
            formatter: function(param) {
                return param.data[3];
            },
        },
        zlevel:9,
        data: dataArry[7]
    },{
        type: 'scatter',
        symbolSize: function(val) {
            return sizeFunction(val[2]);
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#000',
            formatter: function(param) {
                return param.data[3];
            },
        },
        zlevel:2,
        data: dataArry[8]
    }]
};
var sizeFunction = function(x) {
    var y = Math.sqrt(x / 3900) + 0.1;
    return y * 80;
};