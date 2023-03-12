var dataArry = [

    [
        ["2010", 353, 353, "计算机视觉"],
        ["2011", 296, 296, "计算机视觉"],
        ["2012", 283, 283, "计算机视觉"],
        ["2013", 257, 257, "计算机视觉"],
        ["2014", 437, 437, "计算机视觉"],
        ["2015", 766, 766, "计算机视觉"],
        ["2016", 686, 686, "计算机视觉"],
        ["2017", 558, 558, "计算机视觉"],
        ["2018", 428, 428, "计算机视觉"],
        ["2019", 74, 74, "计算机视觉"],
    ],

    [
        ["2010", 204, 204, "分布式计算框架"],
        ["2011", 576, 576, "分布式计算框架"],
        ["2012", 796, 796, "分布式计算框架"],
        ["2013", 602, 602, "分布式计算框架"],
        ["2014", 877, 877, "分布式计算框架"],
        ["2015", 793, 793, "分布式计算框架"],
        ["2016", 641, 641, "分布式计算框架"],
        ["2017", 530, 530, "分布式计算框架"],
        ["2018", 205, 205, "分布式计算框架"],
    ],

    [
        ["2010", 203, 203, "自然语言处理"],
        ["2011", 333, 333, "自然语言处理"],
        ["2012", 557, 557, "自然语言处理"],
        ["2013", 568, 568, "自然语言处理"],
        ["2014", 460, 460, "自然语言处理"],
        ["2015", 321, 321, "自然语言处理"],
        ["2016", 94, 94, "自然语言处理"],
    ],

    [
        ["2010", 177, 177, "智能传感器"],
        ["2011", 195, 195, "智能传感器"],
        ["2012", 331, 331, "智能传感器"],
        ["2013", 372, 372, "智能传感器"],
        ["2014", 585, 585, "智能传感器"],
        ["2015", 753, 753, "智能传感器"],
        ["2016", 1030, 1030, "智能传感器"],
        ["2017", 1216, 1216, "智能传感器"],
        ["2018", 906, 906, "智能传感器"],
        ["2019", 31, 31, "智能传感器"],
    ],

    [
        ["2010", 150, 150, "模式识别"],
        ["2011", 101, 101, "模式识别"],
        ["2012", 110, 110, "模式识别"],
        ["2013", 117, 117, "模式识别"],
        ["2014", 162, 162, "模式识别"],
        ["2015", 368, 368, "模式识别"],
        ["2016", 474, 474, "模式识别"],
        ["2017", 274, 274, "模式识别"],
        ["2018", 273, 273, "模式识别"],
        ["2019", 61, 61, "模式识别"],
    ],

    [
        ["2010", 142, 142, "机器学习"],
        ["2011", 190, 190, "机器学习"],
        ["2012", 209, 209, "机器学习"],
        ["2013", 235, 235, "机器学习"],
        ["2014", 396, 396, "机器学习"],
        ["2015", 316, 316, "机器学习"],
        ["2016", 230, 230, "机器学习"],
        ["2017", 402, 402, "机器学习"],
        ["2018", 446, 446, "机器学习"],
        ["2018", 182, 182, "机器学习"],
        ["2019", 37, 37, "机器学习"],
    ],

    [
        ["2010", 72, 72, "人机交互"],
        ["2011", 72, 72, "人机交互"],
        ["2012", 70, 70, "人机交互"],
        ["2013", 49, 49, "人机交互"],
        ["2014", 93, 93, "人机交互"],
        ["2015", 98, 98, "人机交互"],
        ["2016", 107, 107, "人机交互"],
        ["2017", 140, 140, "人机交互"],
        ["2019", 17, 17, "人机交互"],
    ],


    [
        ["2010", 53, 53, "智能芯片"],
        ["2011", 62, 62, "智能芯片"],
        ["2016", 105, 105, "智能芯片"],
        ["2017", 140, 140, "智能芯片"],
    ],


    [
        ["2012", 79, 79, "图计算"],
        ["2013", 87, 87, "图计算"],
        ["2014", 122, 122, "图计算"],
        ["2015", 97, 97, "图计算"],
        ["2017", 156, 156, "图计算"],
        ["2018", 451, 451, "图计算"],
        ["2019", 14, 14, "图计算"],
    ],


];



option = {
    title: {
        text: "人工智能领域专利热点分析",
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
    grid:{
        right:150
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
        categories: ["机器学习", "群体智能", "人机交互", "自然语言处理", "分布式计算框架", "计算机视觉", "智能芯片", "图计算", "智能传感器", "机器学习", "模式识别"],
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
        }
    }],
    series: [{
        type: 'scatter',
        symbolSize: function(val) {
            console.log(val)
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
        data: dataArry[0]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            console.log(val)
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
        data: dataArry[1]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            console.log(val)
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
        data: dataArry[2]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            console.log(val)
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
        data: dataArry[3]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            console.log(val)
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
        data: dataArry[4]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            console.log(val)
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
        data: dataArry[5]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            console.log(val)
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
        data: dataArry[6]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            console.log(val)
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
        data: dataArry[7]
    }, {
        type: 'scatter',
        symbolSize: function(val) {
            console.log(val)
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
        data: dataArry[8]
    }]
};
var sizeFunction = function(x) {
    var y = Math.sqrt(x / 3900) + 0.1;
    return y * 80;
};