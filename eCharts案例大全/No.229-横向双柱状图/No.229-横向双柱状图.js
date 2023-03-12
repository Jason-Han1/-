var img = "/asset/get/s/data-1640056188040-4obBXEDpw.png";
var datas = [
    '国投集团',
    '城投集团',
    '大佛投集团',
    '机场投集团',
    '苏新投集团',
    '娥率投集团',
    '乐山国有资本运用有限公司',
];
var dataheng = [43, 43, 43, 43, 43, 43, 43];
var legendData = [
    {
        name: '实用数量',
        data: [32, 42, 4, 5, 6, 6, 6],
        barBorderRadius: [0, 20, 20, 0],
    },
    {
        name: '空缺编制',
        data: [0, 0, 0, 0, 0, 4, 4],
        barBorderRadius: [20, 20, 20, 20],
    },{
        name:'超编制或(未经市国资委核定编制)',
        data: [3, 0, 0, 6, 0, 0, 0],
        barBorderRadius: [0, 20, 20, 0],
    }
];
let legendData1 = [3, 0, 0, 6, 0, 0, 0];
var dataMax = [];
var xMax = 0;
var colorList = ['#ffc001', '#96cb03', '#fe5959'];
var seriesList = [];

// 取x轴最大值
for (let i = 0; i < legendData[0].data.length; i++) {
    dataMax.push(legendData[0].data[i] + legendData[1].data[i]);
}
xMax = Math.max(...dataMax);

for (var i = 0; i < legendData.length-1; i++) {
    seriesList.push(
        //左边的柱状图
        {
            type: 'bar',
            name: legendData[i].name,
            stack: '2',
            barWidth: 30,
            // barGap:i==1?'-100%':'0',
            itemStyle: {
                color: colorList[i],
                //  shadowBlur: [0, 0, 0, 10],
                //     shadowColor: '#ebe806',
                //     barBorderRadius: [20, 20, 20, 20],
                //     shadowOffsetX: -20,
                barBorderRadius: legendData[i].barBorderRadius,
                emphasis: {
                    color: colorList[i],
                },
            },
            // 数字
            label: {
                show: true,
                position: 'inside',
                right: 0,
                color: '#fff',
                formatter: function (params) {
                    if (params.value == 0) {
                        return '';
                    } else {
                        return params.value;
                    }
                },
            },
            data: legendData[i].data,
        },
        // 实用数量半圆
        // {
        //     name: '',
        //     type: 'pictorialBar',
        //     symbolSize: [30, 30],
        //     symbolOffset: [15, 0],
        //     symbolPosition: 'end',
        //     // "barWidth": "20",
        //     z: 12,
        //     color: '#ffc001',
        //     itemStyle: {
        //         emphasis: {
        //             color: '#ffc001',
        //         },
        //     },
        //     data: legendData[0].data,
        //     tooltip: {
        //         show: false,
        //     },
        // },
        // 核定编制数
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [2, 30],
            symbolOffset: [15, 10],
            symbol: 'back',
            color: '#fff',
            label: {
                show: true,
                position: 'lef',
                color: '#999',
                fontSize: 14,
                formatter: function (params) {
                    console.log(params);
                    return '核定编制数：' + params.value + '辆';
                },
            },
            itemStyle: {
                emphasis: {
                    color: '#ffc001',
                },
            },
            data: dataMax,
            tooltip: {
                show: false,
            },
        },
        //虚线
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [7, 30],
            symbolOffset: [15, 0],
            symbol: 'image://' +img,
            symbolPosition: 'end',
            // "barWidth": "20",
            z: 12,
            color: '#fe5959',
            data: dataheng,
            tooltip: {
                show: false,
            },
        },

    );
}

option = {
    backgroundColor: '#fff',
    tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(210,219,238,0.2)',
            },
        },
    },
    legend: [
        {
            left: '10%',
            top: '7%',
            icon: 'circle',
            itemWidth: 6,
            itemHeight: 6,
            selectedMode: false,
            textStyle: {
                fontSize:16,
                color: '#000',
            },
            data: ['实用数量', '空缺编制'],
        },
        {
            x: '25%',
            top: '7%',
            icon: 'circle',
            itemWidth: 6,
            itemHeight: 6,
            selectedMode: false,
            textStyle: {
                 fontSize:16,
                color: '#000',
            },
            data: ['超编制或(未经市国资委核定编制)'],
        },
    ],
    grid: [
        {
            containLabel: true,
            top: '20%',
            left: '0%',
            bottom: '0%',
            width: '70%',
        },
        {
            gridIndex: 1,
            left: '74%',
            right:'0%',
            top: '20%',
            bottom: '0%',
            containLabel: true,
        },
    ],
    xAxis: [
        {
            show: false,
            max: xMax,
        },
        {
            gridIndex: 1,
            show: false,
            max: xMax,
        },
    ],
    yAxis: [
        {
            inverse: true,
            data: datas,
            // max:10,
            axisLabel: {
                // margin: 80,
                fontSize: 12,
                align: 'right',
                color: '#000',
                nterval: 0, //强制显示文字
                formatter: function (params) {
                    if (params.length > 7) {
                        return params.replace(params.substr(6, 1), '\n' + params.substr(6, 1));
                    } else {
                        return params;
                    }
                },
            },
            axisLine: {
                show: true,
            },
            axisTick: {
                show: true,
            },
            axisPointer: {
                label: {
                    show: false,
                    margin: 30,
                },
            },
        },
        {
            gridIndex: 1,
            inverse: true,
            data: datas,
            //   max:10,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel:{
             show: false,
            },
            axisPointer: {
                label: {
                    show: false,
                    margin: 30,
                },
            },
        },
    ],
    series: [
       {
            type: 'bar',
            name: '实用数量',
            stack: '2',
            // barWidth: 20,
            z:10,
            barCategoryGap:55,
            // barGap:i==1?'-100%':'0',
            itemStyle: {
                color: '#ffc001',
                
                    barBorderRadius: [0, 10, 10, 0],
                    
                // barBorderRadius: legendData[i].barBorderRadius,
                emphasis: {
                    color: '#ffc001',
                },
            },
            // 数字
            label: {
                show: true,
                position: 'inside',
                right: 0,
                color: '#fff',
                formatter: function (params) {
                    if (params.value == 0) {
                        return '';
                    } else {
                        return params.value;
                    }
                },
            },
            data: [32, 42, 4, 5, 6, 6, 6],
        },
        {
            type: 'bar',
            name: '空缺编制',
            stack: '2',
            // barWidth: 20,
            // barGap:i==1?'-100%':'0',
            itemStyle: {
                color: '#96cb03',
                
                    // barBorderRadius: [0, 20, 20, 0],
                    // shadowBlur: [0, 0, 0, 20],
                    shadowColor: '#96cb03',
                    barBorderRadius: [10,10, 10, 10],
                    shadowOffsetX: -20,
                // barBorderRadius: legendData[i].barBorderRadius,
                emphasis: {
                    color: '#96cb03',
                },
            },
            // 数字
            label: {
                show: true,
                position: 'inside',
                right: 0,
                color: '#fff',
                formatter: function (params) {
                    if (params.value == 0) {
                        return '';
                    } else {
                        return params.value;
                    }
                },
            },
            data:[0, 0, 0, 0, 0, 4, 4],
        },
          // 核定编制数
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [2, 10],
            symbolOffset: [10, -20],
            symbol: 'back',
            color: '#fff',
            label: {
                show: true,
                position: [6,-2],
                color: '#999',
                fontSize: 14,
                // margin:[20],
                formatter: function (params) {
                    console.log(params);
                    return '核定编制数：' + params.value + '辆';
                },
            },
            itemStyle: {
                emphasis: {
                    color: '#ffc001',
                },
            },
            data: dataMax,
            tooltip: {
                show: false,
            },
        },
        //虚线
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [7, 30],
            symbolOffset: [15, 0],
            symbol: 'image://' +img,
            symbolPosition: 'end',
            // "barWidth": "20",
            z: 12,
            color: '#fe5959',
            data: dataheng,
            tooltip: {
                show: false,
            },
        },
        //右边的柱状图
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'bar',
            name: '超编制或(未经市国资委核定编制)',
            stack: '3',
            // barWidth: 30,
             barCategoryGap:55,
            // barGap:i==1?'-100%':'0',
            itemStyle: {
                color: '#fe5959',
                barBorderRadius: [0, 20, 20, 0],
                emphasis: {
                    color: '#fe5959',
                },
            },
            // 数字
            label: {
                show: true,
                position: 'inside',
                right: 0,
                color: '#fff',
                formatter: function (params) {
                    if (params.value == 0) {
                        return '';
                    } else {
                        return params.value;
                    }
                },
            },
            data: legendData1,
        },
    ],
};
// 3.配置项和数据给实例化对象
myChart.setOption(option);
