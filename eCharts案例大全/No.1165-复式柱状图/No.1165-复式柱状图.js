/*
1.关于柱状图不同柱的颜色处理
2.x轴柱状图转y轴柱状图
3.label数值颜色突出

备注是个人理解
*/


var left1 = [
    { year: 2018, money: 4193.3, percent: 10.5, percentvalue: 210.5 },
    { year: 2019, money: 4680, percent: 11.6, percentvalue: 210.5 },
    { year: 2020, money: 5219.6, percent: 11.5, percentvalue: 210.5 },
];

var yearlist = [];
var value1list = [];
var value2list = [];
var value3list = [];

var color = ['#f6ff00', '#0096ff', '#ff4747'];

for (var i = 0; i < left1.length; i++) {
    yearlist.push(left1[i].year + '年');
    value1list.push(left1[i].money);
    value2list.push(left1[i].percent);
    value3list.push(left1[i].percentvalue);
}

option = {
    backgroundColor: '#231842',
    tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            textStyle: {
                color: '#fff',
            },
        },
    },
    grid: {
        borderWidth: 0,
        top: '15%',
        bottom: '10%',
        right: '40%',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        show: false,
        x: '4%',
        top: '8%',
        textStyle: {
            color: '#90979c',
        },
        data: ['内资', '外资'],
    },

    calculable: true,
    xAxis: [
        {
            type: 'value',//与y轴type: 'category'配套,决定柱状图是x轴起始还是y轴起始
            show: false,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#90979c',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                interval: 0,
            },
        },
    ],
    yAxis: [
        {
            type: 'category',//与x轴type: 'value',配套,决定柱状图是x轴起始还是y轴起始
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#90979c',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
            },
            splitArea: {
                show: false,
            },
            data: yearlist,//起始轴需要有data属性
        },
    ],
    series: [
        {
            name: '省内',
            type: 'bar',
            barMaxWidth: 10,
            stack: '总量',
            barGap: '10%',
            itemStyle: {
                normal: {
                    //修改各个柱的颜色
                    //color不允许绑定集合,妥协方法就是通过判断parms的dataIndex属性值,每个柱赋值
                    //柱多的话foreach更好吧
                    color: function (parms) {
                        if (parms.dataIndex == 0) {
                            return color[0];
                        } else if (parms.dataIndex == 1) {
                            return color[1];
                        } else if (parms.dataIndex == 2) {
                            return color[2];
                        }
                    },
                    label: {
                        show: false,
                    },
                },
            },
            data: value1list,
        },

        {
            //复式柱状图
            name: '省外',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#fff',
                    barBorderRadius: 0,
                    label: {
                        show: true,
                        position: 'right',
                        //修改label,使数值颜色突出
                        //formatter和下面rich配套使用
                        //label的formatter内嵌html大抵是不支持,死心吧
                        formatter: function (p) {
                            if (p.dataIndex == 0) {
                                return (
                                    '{a|' +
                                    value1list[p.dataIndex] +
                                    '}' +
                                    '亿元 同比增长' +
                                    '{a|' +
                                    value2list[p.dataIndex] +
                                    '%' +
                                    '}'
                                );
                            } else if (p.dataIndex == 1) {
                                return (
                                    '{b|' +
                                    value1list[p.dataIndex] +
                                    '}' +
                                    '亿元 同比增长' +
                                    '{b|' +
                                    value2list[p.dataIndex] +
                                    '%' +
                                    '}'
                                );
                            } else if (p.dataIndex == 2) {
                                return (
                                    '{c|' +
                                    value1list[p.dataIndex] +
                                    '}' +
                                    '亿元 同比增长' +
                                    '{c|' +
                                    value2list[p.dataIndex] +
                                    '%' +
                                    '}'
                                );
                            }
                        },
                        rich: {
                            a: {
                                color: '#f6ff00',
                                fontFamily: 'Microsoft YaHei',
                                fontSize: 13,
                            },
                            b: {
                                color: '#0096ff',
                                fontFamily: 'Microsoft YaHei',
                                fontSize: 13,
                            },
                            c: {
                                color: '#ff4747',
                                fontFamily: 'Microsoft YaHei',
                                fontSize: 13,
                            },
                        },
                    },
                },
            },
            data: value3list,
        },
    ],
};
