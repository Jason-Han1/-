//定义颜色样式
let colorCost = [
    '#13b5b1',
    '#00b7ee',
    '#9887ef',
    '#8f82bc',
    '#f29b76',
    '#b93ef9',
    '#00a0e9',
    '#448aca',
    '#5c63e7',
    '#f39800',
    '#2090ef',
    '#fff100',
    '#05ffff',
    '#008ce3',
    '#72c4f9',
    '#5935ff',
]
//折线数据
var stepDataArr = [{
        "NO": "0",
        "wetTemperature": "37.00", //第一条线的数据
        "dryTemperature": "38", //第二条线的数据
        "hoursLabel": "6.00", //第三条线实际显示的数据
        "hoursY": "29.00", //第三条线绘制的数据
        "wetTemperature_set": "36", //第四条线的数据
        "dryTemperature_set": "36", //第五条线的数据
        "hoursY_set": "24", //第六条线的绘制数据
        "hoursLabel_set": "0.00", //第六条线实际的显示数据
        "Cur_Start_No": 0, //当前阶段的起始点
        "Cur_End_No": 1 //当前阶段的终结点
    },
    {
        "NO": "1",
        "wetTemperature": "37.00",
        "dryTemperature": "38",
        "hoursLabel": "16.00",
        "hoursY": "29.00",
        "wetTemperature_set": "36",
        "dryTemperature_set": "36",
        "hoursY_set": "24",
        "hoursLabel_set": "6.00"
    },
    {
        "NO": "2",
        "wetTemperature": "37.00",
        "dryTemperature": "40",
        "hoursLabel": "4.00",
        "hoursY": "29.00",
        "wetTemperature_set": "37",
        "dryTemperature_set": "38",
        "hoursY_set": "25",
        "hoursLabel_set": "4.00"
    },
    {
        "NO": "3",
        "wetTemperature": "37.00",
        "dryTemperature": "40",
        "hoursLabel": "18.00",
        "hoursY": "29.00",
        "wetTemperature_set": "37",
        "dryTemperature_set": "38",
        "hoursY_set": "25",
        "hoursLabel_set": "18.00"
    },
    {
        "NO": "4",
        "wetTemperature": "36.00",
        "dryTemperature": "42",
        "hoursLabel": "4.00",
        "hoursY": "28.00",
        "wetTemperature_set": "38",
        "dryTemperature_set": "40",
        "hoursY_set": "26",
        "hoursLabel_set": "6.00"
    },
    {
        "NO": "5",
        "wetTemperature": "36.00",
        "dryTemperature": "42",
        "hoursLabel": "22.00",
        "hoursY": "28.00",
        "wetTemperature_set": "38",
        "dryTemperature_set": "40",
        "hoursY_set": "26",
        "hoursLabel_set": "38.00"
    }
];
//处理等到的数据--六条数据线,其中时间的两条数据线绘制数据是一个值,显示数据是另外一个值
//其中三条是虚线
//一条时间数据线显示特殊处理
//一条添加高亮显示---显示当前所在阶段
var xData = []; //x轴数据
var dryData = []; //温度1
var wetData = []; //温度2
var hourData = []; //时间
var drySetData = []; //标准温度1
var wetSetData = []; //标准温度2
var hourSetData = []; //标准时长
stepDataArr.map((item, index) => {
    xData.push(item.NO); //x轴数据
    dryData.push(item.dryTemperature); //温度1
    wetData.push(item.wetTemperature); //温度2
    hourData.push({
        value: item.hoursY,
        label: item.hoursLabel
    });
    drySetData.push(item.dryTemperature_set); //标准温度1
    wetSetData.push(item.wetTemperature_set); //标准温度2
    hourSetData.push({
        value: item.hoursY_set,
        label: item.hoursLabel_set
    }); //标准时长
});
var allLineData = []; //线的数据
allLineData.push(
    dryData,
    wetData,
    hourData,
    drySetData,
    wetSetData,
    hourSetData
);
console.log(allLineData);
var lendName = [
    '温度1',
    '温度2',
    '时间',
    '标准温度1',
    '标准温度2',
    '标准时长',
];
var minStep = stepDataArr[0].Cur_Start_No;
var maxStep = stepDataArr[0].Cur_End_No;
//将处理好的数据传入绘制折线图
//echartsData('stepEchart', xData, lendName, allLineData, minStep, maxStep)

var allData = []; //serise数据部分
//处理得到的数据
allLineData.map((item, index) => {
    if (index === 0 || index === 1) {
        //当前阶段数据在这个里面显示
        allData.push({
            name: lendName[index],
            type: 'line',
            // step: 'step',//阶梯图
            symbol: 'circle',
            symbolSize: 4,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: colorCost[index],
                },
            },
            label: {
                normal: {
                    show: true,
                    position: [-30, 10],
                },
            },
            markArea: { //绘制当前阶段--高亮显示
                data: [
                    [{
                            name: '当前阶段',
                            xAxis: minStep,
                        },
                        {
                            xAxis: maxStep,
                        },
                    ],
                ],
            },
            zlevel: 1,
            data: item,
        });
    } else if (index == 2) {
        //时间的显示数据需要特殊处理
        allData.push({
            name: lendName[index],
            type: 'line',
            // step: 'step',
            symbol: 'circle',
            symbolSize: 4,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: colorCost[index],
                },
            },
            label: { //处理现实的文字,实际显示的内容和绘制线是两个内容
                normal: {
                    show: true,
                    position: [-30, -20],
                    formatter: function(params) {
                        return '{color1|' + params.data.label + '}{color2| h }';
                    },
                    rich: { //定义颜色样式
                        color1: {
                            color: '#fff',
                            backgroundColor: '#108eff',
                            borderColor: '#796aee',
                            border: 1,
                            lineHeight: 18,
                            height: 18,
                            padding: [0, 3, 0, 3],
                            borderWidth: 1,
                            borderRadius: [3, 0, 0, 3],
                        },
                        color2: {
                            color: '#fff',
                            backgroundColor: '#796aee',
                            borderColor: '#796aee',
                            lineHeight: 18,
                            height: 18,
                            borderWidth: 1,
                            borderRadius: [0, 3, 3, 0],
                            padding: [0, 2, 0, 1],
                        },
                    },
                },
            },
            zlevel: 1,
            data: item,
        });
    } else if (index == 5) {
        allData.push({
            name: lendName[index],
            type: 'line',
            // step: 'step',
            symbol: 'circle',
            symbolSize: 4,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: colorCost[index],
                },
            },
            lineStyle: { //绘制线的类型是否是实线
                width: 3,
                type: 'dotted',
            },
            label: {
                normal: {
                    show: true,
                    position: [10, 10],
                    formatter: function(params) {
                        return params.data.label + 'h';
                    },
                },
            },
            zlevel: 1,
            data: item,
        });
    } else {
        allData.push({
            name: lendName[index],
            type: 'line',
            // step: 'step',
            symbol: 'circle',
            symbolSize: 4,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: colorCost[index],
                },
            },
            lineStyle: {
                width: 1,
                type: 'dashed',
            },
            label: {
                normal: {
                    show: true,
                    position: [-30, 10],
                },
            },
            zlevel: 1,
            data: item,
        });
    }
});

option = {
    backgroundColor: '#fff',
    legend: {
        //图例
        textStyle: {
            color: '#666',
        },
        itemGap: 5,
        //orient: 'vertical',
        x: 'right',
        y: 'top',
        data: lendName,
    },
    animation: false,
    tooltip: {
        trigger: 'axis',
        formatter: function(params) { //划过之后显示的内容--params是当前点的所有线的数据
            //console.log(params)
            let allHtml = `<div>gm温度情况gm[${params[0].axisValue}]</div>`
            params.map((item, index) => {
                allHtml += `<div>
          <span class="showIcon" style="width:10px;height:10px;border-radius:10px;background:${item.color}"></span>
          ${
            item.data.label
              ? item.seriesName + ': ' + item.data.label + 'h'
              : item.seriesName + ': ' + item.value + '℃'
          }
        </div>`
            })
            return allHtml
        },
    },
    toolbox: {
        left: 'center',
        itemSize: 10,
        top: 55,
    },
    xAxis: {
        data: xData,
        //boundaryGap: false,//是否起始点就显示数据
        axisPointer: {
            snap: true,
            lineStyle: {
                color: '#004E52',
                opacity: 0.5,
                width: 2,
            },
        },
        axisLabel: {
            //轴线文字
            show: true,
            textStyle: {
                fontSize: '10',
                color: '#666',
            },
            // interval: 0,
            // rotate: 40,
        },
        axisLine: {
            //轴线颜色
            lineStyle: {
                color: '#d3d3d3',
            },
        },
    },
    yAxis: {
        type: 'value',
        // axisTick: {
        //   inside: false,
        // },
        min: 19, //y轴最小数据
        splitLine: {
            show: true,
            lineStyle: {
                //网格颜色
                color: ['#e9e9e9'],
                width: 1,
                type: 'dashed',
            },
        },
        axisLabel: {
            //轴线文字
            show: true,
            textStyle: {
                fontSize: '10',
                color: '#666',
            },
            // interval: 0,
            // rotate:40,
            // inside: false,
            formatter: '{value}\n',
        },
        //z: 10,
        axisLine: {
            //轴线颜色
            lineStyle: {
                color: '#d3d3d3',
            },
        },
    },
    grid: {
        top: 60,
        left: 35,
        right: 10,
    },
    // dataZoom: [
    //   //横向滚动条
    //   {
    //     type: 'inside',
    //     throttle: 50,
    //     show: true,
    //     start: 0,
    //     end: 60,
    //   },
    //   {
    //     type: 'slider',
    //     start: 00,
    //     end: 60,
    //   },
    // ],
    series: allData,
};