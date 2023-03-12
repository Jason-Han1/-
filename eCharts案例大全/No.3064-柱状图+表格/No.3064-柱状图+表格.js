let dataArr = [
    {
         "测试1": 24,
        "测试2": 12,
        "测试3": 67,
        "测试4": 54,
        "测试5": 23,
        "测试6": 56,
        "Title": "表头1",
    },
    {
        "测试1": 24,
        "测试2": 78,
        "测试3": 24,
        "测试4": 22,
        "测试5": 24,
        "测试6": 56,
        "Title": "表头2",
    },
    {
         "测试1": 24,
        "测试2": 12,
        "测试3": 78,
        "测试4": 66,
        "测试5": 87,
        "测试6": 56,
        "Title": "表头3",
    },
    {
        "测试1": 24,
        "测试2": 54,
        "测试3": 35,
        "测试4": 75,
        "测试5": 54,
        "测试6": 56,
        "Title": "表头4",
    },
    {
        "测试1": 24,
        "测试2": 87,
        "测试3": 25,
        "测试4": 57,
        "测试5": 24,
        "测试6": 56,
        "Title": "表头5",
    },
    {
       "测试1": 24,
        "测试2": 75,
        "测试3": 24,
        "测试4": 35,
        "测试5": 24,
        "测试6": 56,
        "Title": "表头6",
    },
    {
       "测试1": 24,
        "测试2": 77,
        "测试3": 57,
        "测试4": 85,
        "测试5": 24,
        "测试6": 56,
        "Title": "表头7",
    },
    {
        "测试1": 24,
        "测试2": 7,
        "测试3": 75,
        "测试4": 12,
        "测试5": 24,
        "测试6": 56,
        "Title": "表头8",
    }
];
// 取表头
let tableHead = [];
for(var e = 0;e < dataArr.length;e++) {
    tableHead.push(dataArr[e].Title);
}
let totalArr = [];
// 左侧标题
var letftTitle = ["测试1","测试2","测试3","测试4"];
function SeriesData() {
    let arr = [];
    for(var i = 0;i < letftTitle.length;i++) {
        let arr2 = [];
        for(var e = 0;e < tableHead.length;e++) {
            let obj = dataArr.find(x => x.Title == tableHead[e]);
            if(Object.keys(obj).find(x => x == letftTitle[i])){
                let a = obj[Object.keys(obj).find(x => x == letftTitle[i])];
                arr2.push(a);
            }
        }
        // 将数据汇总
        totalArr.push(arr2);
         let obj = {
            name: letftTitle[i],
            type: 'bar',
            label: {
                show: true,
                position: 'top',
            },
            yAxisIndex: 0,
            data: arr2,
        }
        arr.push(obj);
    }
    return arr;
}
function fucIcon() {
    let obj = {};
    for(var i = 0;i < letftTitle.length;i++) {
        obj[i] =  {fontSize: 20,color: color[i]};
    }
    return obj;
}
// 左侧标题显示
function ForName(NameArr) {
let TitleName = '';
for (var i = 0; i < NameArr.length; i++) {
    TitleName += '{'+i+'|●}' + NameArr[i] + '\n';
}
return TitleName;
}
// 绘制表格线
function getTableLine(num) {
var list = [];
var bottom = (letftTitle.length * 30)  + 65; // 可根据表格行数高度动态调整
var height = 30; // 表格线行高
// 循环绘制表格
for (var i = 0; i < num; i++) {
    list.push({
        type: 'line',
        bottom: bottom - i * height,
        right: 80,
        style: {
            fill: '#333',
        }, 
        // 线条
        shape: {
            x1: 0,
            y1: 0,
            x2: 2000,
            y2: 0,
        },
    });
}
return list;
}
// 绘制表格线行数
var lineList = getTableLine(letftTitle.length+1);
// 绘制表格数据
function DrawTable(value) {
let str = '';
str += '{table|' + value +'}\n{table|';
for (let i = 0; i < totalArr.length; i++) {
    str += totalArr[i][i] +'}\n{table|'
}
str += '}';
return str;
}
let color = ['#5470c6', '#fac858', '#73c0de','#ee6666','#3ba272','#fc8452','#9a60b4','#ea7ccc'];
option = {
// 颜色配置
color: color,
legend: {
    orient: 'horizontal',
    top: 10,
    data: letftTitle
    },
// 左侧标题配置
title: [
    {   
        text: ForName(letftTitle),
        bottom: 45 - letftTitle.length,
        left: 0,
        textStyle: {
            lineHeight: 30,
            fontSize: 13,
            fontWeight: 'normal',
            formatter: function (value) {
                return '{table|' + value + '}';
            },
            rich: fucIcon()
        },
    },
],
// 表格边距配置
grid: {
    bottom: (letftTitle.length * 30) + 100, // 可根据表格行数动态调整高度
    left: 100,
    right: 80,
    top:50
},
toolbox: {
    show: true,
    feature: {
        saveAsImage: {},
    },
},
dataZoom: {
    show: true,
    realtime: true,
    start: 0,
    end: 50
},
xAxis: [
    {
        type: 'category',
        boundaryGap: true,
        data: tableHead,
        axisTick: {
            length: (letftTitle.length * 30) + 35,
        },
        axisLabel: {
            formatter: function (value, index) {
                var indexNum = 0;
                for (var i = 0; i < tableHead.length; i++) {
                    if (value == tableHead[i]) {
                        indexNum = i;
                    }
                }
                return (DrawTable(value));
            },
            rich: {
                table: {
                    height: 30, //表格内数据行高
                    lineHeight:30,
                    align: 'center',
                    verticalAlign: 'bottom',
                },
            },
        },
    },
],
yAxis: [
    {
        type: 'value',
        scale: true,
        minInterval: 1,
        splitLine: {
            show: false,
        },
        min: function (v) {
            return Math.max(v.min - 10, 0);
        },
    },
],
series: SeriesData(),
graphic: lineList,
};
