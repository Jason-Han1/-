var names = ['正常', '维护', '建设中', '关闭'];
var values1 = [257, 142, 125, 120];
var values2 = [222, 231, 157, 120];
var colorList = ['#FAFC01', '#FF288D', '#01C4C6', '#41FD58'];
var data1 = [],
    data2 = [],
    t1 = 0,
    t2 = 0,
    data3 = [],
    data4 = [];
names.forEach((v, i) => {
    data1.push({ name: names[i], value: values1[i] });
    data2.push({ name: names[i], value: values2[i] });
    t1 += values1[i];
    t2 += values2[i];
});
values1.forEach((v, i) => {
    data3.push(Number((values1[i] * 100) / t1).toFixed(2));
    data4.push(Number((values2[i] * 100) / t2).toFixed(2));
});
console.log(data3 + '|' + data4);
data1.reverse();
data2.reverse();
// 公用调整
var itemStyle = {
    normal: {
        borderColor: '#0A1934',
        borderWidth: 5,
        color: function (params) {
            return colorList[params.dataIndex];
        },
    },
};
var textStyle = {
    color: '#fff',
    fontSize: 30,
    fontWeight: 100,
};
var legendTextStyle = {
    rich: {
        title: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 100,
            fontFamily: 'HuaKang',
            width: '100px',
            padding: [0, 10, 0, 10],
        },
        value: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 100,
            fontFamily: 'HuaKang',
            padding: [0, 0, 0, 10],
        },
        zhanbi: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 100,
            fontFamily: 'HuaKang',
            padding: [0, 10, 0, 0],
        },
        unit: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 100,
            fontFamily: 'HuaKang',
            padding: [0, 30, 0, 0],
        },
        percent: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 100,
            fontFamily: 'HuaKang',
            padding: [0, 0, 0, 0],
        },
    },
};
var leftCenter = ['25.5%', '30%'],
    rightCenter = ['74.5%', '30%'],
    radius1 = ['15%', '20%'], // 饼图
    radius3 = ['30%', '31%']; // 线圈
var option = {
    backgroundColor: '#0A1934',
    legend: [
        {
            data: names,
            icon: 'vertical',
            left: '10%',
            bottom: '10%',
            orient: 'vertical',
            itemGap: 20,
            itemWidth: 12,
            itemHeight: 12,
            formatter: function (val) {
                let index = names.indexOf(val);
                return `{title|${val}}{value|${data1[index].value}}{unit|个}{zhanbi|占比}{percent|${data3[index]}}{unit|%}`;
            },
            textStyle: legendTextStyle,
        },
        {
            data: names,
            icon: 'vertical',
            left: '61%',
            bottom: '10%',
            orient: 'vertical',
            itemGap: 20,
            itemWidth: 12,
            itemHeight: 12,
            formatter: function (val) {
                let index = names.indexOf(val);
                return `{title|${val}}{value|${values2[index]}}{unit|个}{zhanbi|占比}{percent|${data4[index]}}{unit|%}`;
            },
            textStyle: legendTextStyle,
        },
    ],
    tooltip: {
        trigger: 'item',
    },
    title: [
        {
            text: '充电站',
            x: '21%',
            y: '28%',
            textStyle: textStyle,
        },
        {
            text: '充电桩',
            x: '70%',
            y: '28%',
            textStyle: textStyle,
        },
    ],
    series: [
        // 左饼图
        {
            // 饼图圈
            type: 'pie',
            zlevel: 3,
            radius: radius1,
            center: leftCenter,
            itemStyle: itemStyle,
            labelLine: {
                show: false,
                normal: {
                    length: 5,
                    length2: 0,
                    lineStyle: {
                        color: 'transparent',
                    },
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        return '●';
                    },
                },
            },
            data: data1,
        },
        {
            // 最外圆圈
            type: 'pie',
            zlevel: 1,
            silent: true, //取消高亮
            radius: radius3,
            center: leftCenter,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            labelLine: {
                show: false,
                normal: {
                    length: 10,
                    length2: 0,
                    lineStyle: {
                        color: 'transparent',
                    },
                },
            },
            label: {
                show: true,
            },
            data: data1,
        },

        // 右饼图
        {
            // 饼图圈
            type: 'pie',
            zlevel: 3,
            radius: radius1,
            center: rightCenter,
            itemStyle: itemStyle,
            labelLine: {
                show: false,
                normal: {
                    length: 5,
                    length2: 0,
                    lineStyle: {
                        color: 'transparent',
                    },
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        return '●';
                    },
                },
            },
            data: data2,
        },
        {
            // 线圆圈
            type: 'pie',
            zlevel: 1,
            silent: true, //取消高亮
            radius: radius3,
            center: rightCenter,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            labelLine: {
                show: false,
                normal: {
                    length: 10,
                    length2: 0,
                    lineStyle: {
                        color: 'transparent',
                    },
                },
            },
            label: { show: true, normal: { formatter: (params) => data4[params.dataIndex]+'%' } },
            data: data2,
        },
    ],
};
