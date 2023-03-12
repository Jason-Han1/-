/**
 *
 * @param {*} len   数组长度
 * @param {*} start 最小值
 * @param {*} end   最大值
 * @return {*} 
 */
function random(len, start, end) {
    var arr = [];

    function _inner(start, end) {
        var span = end - start;
        return parseInt(Math.random() * span + start)
    }
    while (arr.length < len) {
        var num = _inner(start, end);
        if (arr.indexOf(num) == -1) {
            arr.push(num);
        }
    }
    return arr;
}

var Xname = ['上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '桐庐县', '淳安县', '建德市', '富阳区', '临安区', '钱塘新区']; //X轴名称
var data1Arr = random(14, 1000, 5000); //数据1
var data2Arr = random(14, 500000, 100000); //数据2
var data3Arr = random(14, 100000, 1500000); //数据2
var dataName = ["数据一", "数据二", "数据三"]; //类别
var colorsArr = ["#0063ed", "#ff9307", "#fe4437"];
var fsize12 = 12; //字体大小

var titleV = "";
if (data2Arr[0] >= 10000) {
    titleV = "(单位:万元)";
} else {
    titleV = "(单位:元)";
}
var option = {
 backgroundColor:'#dbf6e9',
    title: {

        text: titleV,
        left: 20,
        top: 10,

        textStyle: {
            color: '#a7a7a7',
            fontSize: 10
        },
    },
    grid: {
        left: 20,
        right: 20,
        bottom: 50,
        top: 50,
        containLabel: true,
    },


    tooltip: {
        trigger: "axis",
        textStyle: {
            fontSize: fsize12,
        },
    },
    legend: {
        data: dataName,
        left: "center",
        itemWidth: 30, // 设置宽度
        itemHeight: 15, // 设置高度
        top: 10,
        textStyle: {
            color: "#333",
            fontSize: fsize12,
            padding: [2, 0, 0, 0]
        },
    },

    xAxis: [{
        type: "category",

        axisLine: {
            lineStyle: {
                color: "#333",
            },
        },
        axisTick: {
                    show: true,
                    alignWithLabel: true,//x轴记号偏移
                },
        axisLabel: {
            textStyle: {
                fontSize: fsize12,
            },

        },
        data: Xname,
    }, ],
    yAxis: [{
        type: "value",
        splitLine: { //y轴网格线
            lineStyle: {
                color: "#eee",
            },
        },
        axisLabel: { //y轴文本
            showMinLabel: false, //y轴是否设置最小刻度0
            color: "#333",
            textStyle: {
                fontSize: fsize12,
            },
            formatter: function(value, index) {
                if (value >= 10000) {
                    return value / 10000;
                } else {
                    return value;
                }
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: { //y轴线
            lineStyle: {
                color: "#333",
            },
        },
    }, ],
    dataZoom: [{
        show: true,
        height: 15,
        xAxisIndex: [0],

        bottom: 5,
        // start: 0,//数据窗口范围的起始百分比
        // end: 50,//数据窗口范围的结束百分比
        startValue: 0,
        endValue: 5, //初始显示1-12周
        // handleIcon: 'path://M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z',//拖动按钮图形-默认
        // handleIcon: "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z", //拖动按钮图形-矩形
        // handleIcon: 'image://images/echartmap-bg4.png',//自定义图形
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z', //拖动按钮图形-猪
        handleSize: "150%", //拖动按钮大小
        fillerColor: "#fe6e2b", //拖动块颜色
        showDetail: false,
        handleStyle: {
            color: "#fd4536", //拖动按钮颜色
            borderColor: "red", //整体边框
        },
        textStyle: {
            color: "#fff",
        },
        borderColor: "#a7a7a7", //整体边框
    }, ],
    series: [{
            name: dataName[0],
            color: colorsArr[0],
            type: "line",
            data: data1Arr,
        },
        {
            name: dataName[1],
            color: colorsArr[1],
            type: "line",
            smooth: true,
            data: data2Arr,
        },
        {
            name: dataName[2],
            color: colorsArr[2],
            type: "line",
            smooth: true,
            data: data3Arr,
        },
    ],
};