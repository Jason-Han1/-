var tgtVals = [1400, 1300, 1600, 1700, 2000, 3000, 2600, 4560, 2560, 2600];
var compVals = [1420, 1320, 1590, 1730, 2020, 3100, 2700, 4600, 2566, 2660];
var areas = ['北京','天津','河北','辽宁','上海','浙江','江苏','广东','江西','安徽'];
var dataLen = tgtVals.length;
var compPcts = [];
var incPcts = [3, 2, 5, 2, 3, 6, 4, 8, 5, 6];
tgtVals.forEach(function(item, index){
    compPcts.push((compVals[index] / item * 100).toFixed(2));
});
option = {
    title : {
        text: '合同整体完成情况统计', //主标题
        subtext: '纯属虚构', //副标题
        x: 'center' //标题位置
    }, //图表标题
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },  //放缩功能
            dataView: {show: true, readOnly: false}, //清单功能
            magicType: {show: true, type: ['line', 'bar']}, //柱形/折线切换功能
            restore: {show: true},  //刷新功能
            saveAsImage: {show: true}  //下载功能
        }
    },
    calculable : true,
    legend: {
        data:['目标','完成情况', '完成率', '同比增长'],
        left:10,
    },
    xAxis : [
        {
            type : 'category',
            data : areas,
            axisTick: {
                alignWithLabel: true, //刻度线和标签对齐
                interval:0   //间隔
            },
            splitLine: {
                show: true, //网格线开关
            },
            
        },
       
    ],
    yAxis : [
        {
            type : 'value',
            name : '金额（万元）',
            max:5000,
            // axisLabel : {
            //     formatter: '{value} ml'
            // },
            splitLine: { // 分隔线
                show: false, // 默认显示，属性show控制显示与否

            },
              axisLine: {
                show: true // 坐标轴是否显示
            },
            axisTick: {
                show: true  //坐标轴刻度线是否显示
            },
            splitLine: {
                show: true, //网格线开关
            }
        },
        {
            type : 'value',
            name : '百分比',
            // axisLabel : {
            //     formatter: '{value} °C'
            // }, 
            splitLine: { // 分隔线
                show: false, // 默认显示，属性show控制显示与否

            },
              axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            }
        }
    ],
    series : [

        {
            name:'目标',
            type:'bar',
            data: tgtVals,
            markLine: {
                data:[{
                    type: 'average'
                }]
            },
            itemStyle: {
                normal: {
                    //barBorderRadius: 15,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'green'
                            },
                            {
                                offset: 1,
                                color: 'green'
                            }
                        ]
                    )
                }
            }
            
        },
        {
            name:'完成情况',
            type:'bar',
            data: compVals,
            markLine: {
                data:[{
                    type: 'average'
                }],
                label: {
                    position: 'start'
                }
            },
            itemStyle: {
                normal: {
                    //barBorderRadius: 15,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#a04800'
                            },
                            {
                                offset: 1,
                                color: '#a04800'
                            }
                        ]
                    )
                }
            },
        }
    ]
};
           