
var chartData = [
    { name: '2000年:诞生', value: 2002.3, value1: "dd" },
    { name: '2005年 养老护理员职业纳入国家《职业分类大典》', value: 2005.12, value1: 8009 },
    { name: '2012年 养老护理员保留在第一批职业资格公告目录', value: 2012.5, value1: 12321, },
    { name: '2015年 养老护理员职业正式纳入2015年版国家《职业分类大典》', value: 2015.7, value1: 18621 },
    { name: '2017年 养老护理员退出《国家职业资格目录》', value: 2017.9, value1: 22851 },
    { name: '2019年 养老护理员国家职业标准新规定,较2011年版《国家职业技能标准》作了重大修改。', value: 2019.9, value1: 30659 },

];
var chartD = [
    { name: '2000年', value: 2002.3, value1: "dd" },
    { name: '2005年', value: 2005.12, value1: 8009 },
    { name: '2012年', value: 2012.5, value1: 12321, },
    { name: '2015年', value: 2015.7, value1: 18621 },
    { name: '2017年', value: 2017.9, value1: 22851 },
    { name: '2019年', value: 2019.9, value1: 30659 },

];
option = {
    backgroundColor: '#000f4e', //背景色
    title: {
        show: true,
        text: '养老护理员发展时间轴',
        textStyle: {
            color: '#fff', // 主标题文字颜色
            fontFamily: 'Simsun',
            fontSize: 14
        },
        x: 'center',
        y: 'top'
    },
    tooltip: {
        show: true,
        trigger: 'axis', //axis , item
        backgroundColor: 'rgba(0,15,78,0.6)',
        borderColor: '#00afff',
        borderWidth: 1,
        borderRadius: 0,
        textStyle: {
            color: "#fff",
            fontSize: 13,
            align: 'left'
        },
        axisPointer: {
            type: 'line', //'line' | 'cross' | 'shadow' | 'none
            lineStyle: {
                width: 1,
                type: 'dotted',
                color: 'rgba(46,149,230,.9)'
            }
        }
    },
    legend: {
        show: true,
        orient: 'horizontal', //'vertical' 
        data: ['时间'],
        icon: 'circle',
        selectedMode: true,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 20,
        textStyle: {
            fontSize: 13,
            color: '#9bc8ff'
        },
        x: 'center',
        y: '25'
    },
    grid: {
        top: '25%',
        right: '3%',
        bottom: '10%',
        left: '10%'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            show: true,
            interval: 0, //类目间隔 设置为 1，表示『隔一个标签显示一个标签』
            textStyle: {
                color: '#fff',
                fontSize: 13
            },
            formatter: (value, index) => {
                return value.substring(0, 5)
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(15,45,134,.9)'
            }
        },
        axisTick: {
            show: false //坐标轴小标记
        },
        data: (function(data) {
                var arr = [];
                data.forEach(function(items) {
                    arr.push(items.name); //name
                });
                return arr;
            })(chartData) //载入横坐标数据
    },
    yAxis: {
        type: 'value',

        nameTextStyle: {
            color: '#93d3fc',
            fontSize: 12,
            align: 'right'
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#9bc8ff',
                fontSize: 13
            },
            interval: 0, //类目间隔 设置为 1，表示『隔一个标签显示一个标签』
            margin: 10,
            //formatter: '{value}'
        },
        splitNumber: 5, //y轴刻度设置(值越大刻度越小)
        axisLine: { //y轴线
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(15,45,134,.6)', //横向网格线颜色
                width: 1
            }
        },
        axisTick: {
            show: false //坐标轴小标记
        }
    },
    series: [{
        name: '时间',
        type: 'effectScatter', //effectScatter 涟漪效果, scatter 散点
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#9bc8ff',
                    fontSize: 12
                },
                //图形上显示数字
            }
        },
        itemStyle: {
            normal: {
                color: 'rgba(255,55,135,1)', //颜色
            }
        },
        symbol: 'circle', //circle, rect, roundRect, triangle,  pin, diamond, arrow
        symbolPosition: 'end',
        symbolSize: 30,
        symbolOffset: [0, '-120%'],
        data: (function(data) {
                var arr = [];
                data.forEach(function(items) {
                    var itemName = items.name,
                        itemValue = items.value,
                        itemStyle = itemValue / 80; //console.log(itemStyle)
                    arr.push({
                        name: itemName,
                        value: itemValue,
                        symbolSize: itemStyle
                    })
                });
                return arr;
            })(chartData) //载入数据并设置图形尺寸
    }]
};

var app = {
    curIndex: -1,
};
setInterval(() => {
    var dataLen = chartData.length;

    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.curIndex
    });

    app.curIndex = (app.curIndex + 1) % dataLen;

    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.curIndex,
    });

    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.curIndex
    });

}, 3000);


