var title = '总成绩';
var colorList = ['#7ed4ac', '#fe9c3a', '#ebd571', '#eb7c6f', '#0bb4d7', '#8fcde5', '#00c973'];
var seriesData = [
    {
        name: '单项实训', //模块名称
        total: '80', //总共成绩
        value: '52', //占比
        excellent: '95', //优秀(90-100)
        good: '82', //良好(80-90)
        medium: '74', //中等(70-80)
        pass: '62', //及格(60-70)
        failed: '40', //不及格(0-60)
        low: '20', //低分率(0-30)
        overtake: '30', //超均率(平均分)
    },
    {
        name: '模拟测试', //模块名称
        total: '84', //总共成绩
        value: '40', //占比
        excellent: '98', //优秀(90-100)
        good: '85', //良好(80-90)
        medium: '73', //中等(70-80)
        pass: '68', //及格(60-70)
        failed: '41', //不及格(0-60)
        low: '25', //低分率(0-30)
        overtake: '32', //超均率(平均分)
    },
    {
        name: '综合实训', //模块名称
        total: '90', //总共成绩
        value: '53', //占比
        excellent: '86', //优秀(90-100)
        good: '81', //良好(80-90)
        medium: '74', //中等(70-80)
        pass: '67', //及格(60-70)
        failed: '49', //不及格(0-60)
        low: '2', //低分率(0-30)
        overtake: '31', //超均率(平均分)
    },
    {
        name: '案例中心', //模块名称
        total: '85', //总共成绩
        value: '40', //占比
        excellent: '60', //优秀(90-100)
        good: '56', //良好(80-90)
        medium: '40', //中等(70-80)
        pass: '52', //及格(60-70)
        failed: '30', //不及格(0-60)
        low: '25', //低分率(0-30)
        overtake: '38', //超均率(平均分)
    },
    {
        name: 'VR场景', //模块名称
        total: '70', //总共成绩
        value: '50', //占比
        excellent: '50', //优秀(90-100)
        good: '70', //良好(80-90)
        medium: '60', //中等(70-80)
        pass: '50', //及格(60-70)
        failed: '40', //不及格(0-60)
        low: '20', //低分率(0-30)
        overtake: '30', //超均率(平均分)
    },
    {
        name: '课堂表现', //模块名称
        total: '81', //总共成绩
        value: '40', //占比
        excellent: '81', //优秀(90-100)
        good: '78', //良好(80-90)
        medium: '68', //中等(70-80)
        pass: '60', //及格(60-70)
        failed: '44', //不及格(0-60)
        low: '25', //低分率(0-30)
        overtake: '37', //超均率(平均分)
    },
    {
        name: '课外作业', //模块名称
        total: '80', //总共成绩
        value: '70', //占比
        excellent: '90', //优秀(90-100)
        good: '84', //良好(80-90)
        medium: '72', //中等(70-80)
        pass: '63', //及格(60-70)
        failed: '45', //不及格(0-60)
        low: '26', //低分率(0-30)
        overtake: '34', //超均率(平均分)
    },
];
var formatNumber = function (num) {
    var reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
};
// var total = seriesData.reduce((a, b) => {
//     return a + b.value * 1;
// }, 0);
option = {
    backgroundColor: '#000c31',
    color: colorList,
    title: [
        {
            textStyle: {},
        },
        {
            top: 'center',
            right: 'center',
        },
    ],
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
        formatter: function (parms) {
            var str =
                parms.marker +
                '' +
                parms.data.name +
                '</br>' +
                '优秀(90-100)：' +
                parms.data.excellent +
                '%</br>' +
                '良好(80-90)：' +
                parms.data.good +
                '%</br>' +
                '中等(70-80)：' +
                parms.data.medium +
                '%</br>' +
                '及格(60-70)：' +
                parms.data.pass +
                '%</br>' +
                '不及格(0-60)：' +
                parms.data.failed +
                '%</br>' +
                '低分率(0-30)：' +
                parms.data.low +
                '%</br>' +
                '超均率(平均分)：' +
                parms.data.overtake +
                '分';
            return str;
        },
    },
    legend: {
        type: 'scroll',
        orient: 'horizontal',
        icon: 'square',
        top: '80%',
        left: 'center',
        align: 'auto',
        textStyle: {
            color: '#fff',
        },
        data: seriesData,
    },
    series: [
        {
            type: 'pie',
            radius: ['25%', '45%'],
            center: ['50%', '50%'],
            data: seriesData,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    borderColor: colorList,
                    borderWidth: 0,
                },
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#e6e6e6',
                    },
                },
            },
            label: {
                normal: {
                    formatter: '{icon|●}{name|{b}}',
                    rich: {
                        icon: {
                            fontSize: 20,
                        },
                        name: {
                            fontSize: 14,
                            padding: [0, 10, 0, 4],
                        },
                    },
                },
            },
        },
    ],
};
myChart.on('highlight', function (event) {
    var name = seriesData[event.dataIndex].name;
    var value = seriesData[event.dataIndex].value;
    option.title[1].text = '{name|' + title + '}\n{val|' + value + '%}';
    option.title[1].textStyle = {
        rich: {
            name: {
                fontSize: 17,
                align: 'center',
                fontWeight: 'normal',
                padding: [10, 0],
                color: colorList[event.dataIndex],
            },
            val: {
                fontSize: 26,
                align: 'center',
                fontWeight: 'bold',
                color: colorList[event.dataIndex],
            },
        },
    };
    myChart.setOption(option);
});

autoHover(myChart, option, seriesData.length, 3000);

/**
 *  echarts tooltip 自动轮播
 *  @author liuwei
 *  @param myChart  //初始化echarts的实例
 *  @param option   //指定图表的配置项和数据
 *  @param num      //类目数量(原因：循环时达到最大值后，使其从头开始循环)
 *  @param time     //轮播间隔时长
 */
function autoHover(myChart, option, num, time) {
    var defaultData = {
        //设置默认值
        time: 2000,
        num: 100,
    };
    if (!time) {
        time = defaultData.time;
    }
    if (!num) {
        num = defaultData.num;
    }
    var count = 0;
    var timeTicket = null;
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function () {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0, //serieIndex的索引值   可以触发多个
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: count,
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: count,
        });
        count++;
        if (count >= num) {
            count = 0;
        }
    }, time);
    myChart.on('mouseover', function (params) {
        clearInterval(timeTicket);
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
        });
    });
    myChart.on('mouseout', function () {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function () {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0, //serieIndex的索引值   可以触发多个
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: count,
            });
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: count,
            });
            count++;
            if (count >= defaultData.num) {
                count = 0;
            }
        }, defaultData.time);
    });
}
