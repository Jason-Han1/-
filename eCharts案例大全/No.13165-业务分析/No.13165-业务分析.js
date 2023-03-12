var seriesLabel = {
    normal: {
        show: true,
        //textBorderColor: '#333',
        textBorderWidth: 2,
        position: 'top',
    }
}


var mt = Math;
var rd = mt.round;

var COLORS = ['#01949B', '#EBA954', '#C23531']

var DATA = {
    YEARS: ['2016年', '2017年', '2018上半年'],
    NAMES: ['全行业', '圆通', '顺丰'],
    VOLUME: {
        INDUSTRY: [312.8, 400.6, 220.8], // 全行业业务量（亿件）
        YT: [44.60, 50.64, 28.14], // 圆通业务量（亿件）
        SF: [25.80, 30.52, 18.58], // 顺丰业务量（亿件）
        GROWING_RATE: {
            INDUSTRY: [51.4, 28, 27.5], // 全行业业务同比增长率（%）
            YT: [], // 圆通业务同比增长率（%）
            SF: [31.00, 18.29, 35.29], // 顺丰业务同比增长率（%）
        },
    },

    INCOMING: {
        INDUSTRY: [3974.4, 4957.1, 2745.0], // 全行业收入（亿元）
        YT: [168.18, 199.82, 120.7], // 圆通收入（亿元）
        SF: [571.41, 706.09, 421.60], // 顺丰收入（亿元）
        GROWING_RATE: {
            INDUSTRY: [43.5, 24.7, 25.8], // 全行业收入同比增长率（%）
            YT: [39.04, 18.82, 46.95], // 圆通收入同比增长率（%）
            SF: [21.75, 23.57, 31.74], // 顺丰收入同比增长率（%）
        },
    },

    MEAN_INCOMING: {
        INDUSTRY: [rd(3974.4 / 312.8 * 100) / 100, rd(4957.1 / 400.6 * 100) / 100, rd(2745.0 / 220.8 * 100) / 100], // 全行业单件收入（元）
        YT: [rd(168.18 / 44.60 * 100) / 100, rd(199.82 / 50.64 * 100) / 100, rd(120.7 / 28.14 * 100) / 100], // 圆通单件收入（元）
        SF: [rd(571.41 / 25.80 * 100) / 100, rd(706.09 / 30.52 * 100) / 100, rd(421.60 / 18.58 * 100) / 100], // 顺丰收入（亿元）
    },
    
    TRANSP_COST: {
        SF: [7396927389/1E8, 8237922679/1E8, 4433684663/1E8]    // 顺丰运输成本（亿元）
    },
    
    MEAN_TRANSP_COST: { // 单件运输成本（元）
         SF: [rd(7396927389/1E8 / 25.80 * 100) / 100, rd(8237922679/1E8 / 30.52 * 100) / 100, rd(4433684663/1E8 / 18.58 * 100) / 100], // 顺丰收入（亿元）
    },

    REGION_MARKET: { // 2017年的快递业区域性特征
        REGIONS: ['东部地区', '中部地区', '西部地区'],
        VOLUME_SHARES: ['81.1', '11.6', '7.3'], // 快递业务量比重(%)
        INCOMING_SHARES: ['80.9', '10.8', '8.3'], // 快递收入比重(%)
    },

    SF_DETAIL: {
        VEHICLE: {
            TYPES: ['飞机', '干支线车辆约', '铁路线路'],
            COUNTS: [57, 30000, 158], // 运输工具数量 
            COUNT_SHARES: [57 / 22, 1, 2],
            VOLUME_SHARES: [25, 74, 1], // 业务比重（%）
            VOLUMES: [7.6, 22.59, 0.32], // 业务量（亿件）
            INFO: ['专机', '干支线车辆', '铁路线路']
        }
    }
}

options = [

    /*  // 第一个graph
    {
        backgroundColor: '#FFFFFF',
        title: {
            text: '快递单件收入/成本情况, 2016年-2018上半年',
            textStyle: {
                fontSize: 14
            }
        },

        tooltip: { // 提示框组件
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['2016', '2017', 'Growing Rate'],
            top: '18'
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true,
            show: false // 网格边框是否显示，上和右边框 
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                }, // 数据试图是否在控件中显示
                //magicType: {show: true, type: ['stack', 'tiled']},
                //restore: {show: true},
                saveAsImage: {
                    show: true
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true, // 坐标轴两边留白
            splitLine: { // 网格线 x轴对应的是否显示
                show: false
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },

        yAxis: [ // 双y坐标轴
            {
                name: 'Revenue(10k)',
                type: 'value',
                splitLine: { // 网格线 y轴对应的是否显示
                    show: false
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                name: 'Growing\nRate (%)',
                //nameLocation: 'start',
                splitLine: { // 网格线 y轴对应的是否显示
                    show: false
                },
                min: 0,
                max: 300, // growing rate upper limit
                type: 'value',
                //top:10,
                inverse: false,
                axisLine: {
                    lineStyle: {
                        color: '#2f4554'
                    }
                }
            }
        ],

        series: [{
                name: '2016',
                type: 'bar',
                color: '#00BFFF',
                //stack: '总量',
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                },
                data: [1741.9, 977, 1742.2, 1431.1, 1636.2, 1447, 1711.7, 1921.2, 2609.6, 3332.6, 3647.3, 2498.1]
            },
            {
                name: '2017',
                type: 'bar',
                color: '#DC143C',
                //stack: '总量',
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                },
                data: [2609, 1162.9, 2942.9, 5174.6, 5114.4, 5065.8, 3956.1, 3691.1, 4637.6, 4603.8, 6401.1, 4988.4]
            },
            {
                name: 'Growing Rate',
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: '#FFD700',
                //stack: '总量',
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        //{type : 'min', name : '最小值'}
                    ]
                },
                data: [49.8, 19, 68.9, 261.6, 212.6, 250.1, 131.1, 92.1, 77.7, 38.1, 75.5, 99.7]
            }
        ]
    },
    //---------------------------------------------------------------------------//
 */

    //第1个graph
    {
        backgroundColor: '#FFFFFF',
        title: {
            text: '快递单件收入/成本情况, 2016年-2018上半年',
            //left:'center',              // title位置
            textStyle: {
                fontSize: 14,
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                }, // 数据视图是否在控件中显示
                //magicType: {show: true, type: ['stack', 'tiled']},
                //restore: {show: true},
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: {
            data: DATA.NAMES,
            top: '18'
        },
        grid: {
            left: '2%',
            right: '9%',
            top: '26%',
            bottom: '3%',
            containLabel: true,
            show: false // 网格边框是否显示，上和右边框 
        },

        xAxis: [{
            type: 'category',
            splitLine: { // 网格线 x轴对应的是否显示
                show: false
            },
            data: DATA.YEARS
        }],

        yAxis: [{
                name: '单件收入(元)',
                type: 'value',
                splitLine: { // 网格线 y轴对应的是否显示
                    show: true
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                name: '同比增长 (%)',
                //nameLocation: 'start',
                splitLine: {
                    show: false // 网格线 y轴对应的是否显示
                },
                min: 0,
                max: 100, // growing rate upper limit
                type: 'value',
                //top:10,
                inverse: false,
                axisLine: {
                    lineStyle: {
                        color: '#2f4554'
                    }
                }
            }
        ],

        series: [{
                name: DATA.NAMES[0],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: COLORS[0]
                    },
                },
                label: seriesLabel,
                data: DATA.MEAN_INCOMING.INDUSTRY
            },
            {
                name: DATA.NAMES[1],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: COLORS[1]
                    },
                },
                label: seriesLabel,
                data: DATA.MEAN_INCOMING.YT
            },
            {
                name: DATA.NAMES[2],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: COLORS[2]
                    },
                },
                label: seriesLabel,
                data: DATA.MEAN_INCOMING.SF
            },
            {
                name: DATA.NAMES[2],
                type: 'bar',
                itemStyle: {
                    normal: {
                        //color: COLORS[2]
                    },
                },
                label: seriesLabel,
                data: DATA.MEAN_TRANSP_COST.SF
            },
            {
                name: DATA.NAMES[0] + "同比增长(%)",
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: COLORS[0],
                data: DATA.VOLUME.GROWING_RATE.INDUSTRY
            },
            {
                name: DATA.NAMES[2] + "同比增长(%)",
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: COLORS[2],
                data: DATA.VOLUME.GROWING_RATE.SF
            },
        ]
    },
    //---------------------------------------------------------------------------//

    //第2个graph
    {
        backgroundColor: '#FFFFFF',
        title: {
            text: '快递业务量区域性特征',
            subtext: '2017',
            left: 'center',
            subtextStyle: {
                fontSize: 18
            }
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 20,
            left: 'center',
            data: [],
            show: false // legend 不显示
        },
        series: [{
            name: '业务量比重',
            type: 'pie',
            avoidLabelOverlap: true,
            radius: '50%',
            center: ['50%', '58%'],
            selectedMode: 'single',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        //fontWeight: 'bold'
                    },
                    formatter: '{b} : {d}%',
                    position: 'outer'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                    name: DATA.REGION_MARKET.REGIONS[0],
                    value: DATA.REGION_MARKET.VOLUME_SHARES[0]
                },
                {
                    name: DATA.REGION_MARKET.REGIONS[1],
                    value: DATA.REGION_MARKET.VOLUME_SHARES[1]
                },
                {
                    name: DATA.REGION_MARKET.REGIONS[2],
                    value: DATA.REGION_MARKET.VOLUME_SHARES[2]
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    },
    //---------------------------------------------------------------------------//

    //第3个graph
    {
        backgroundColor: '#FFFFFF',
        title: {
            text: '快递业务规模 2016年-2018上半年',
            //left:'center',              // title位置
            textStyle: {
                fontSize: 14,
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                }, // 数据视图是否在控件中显示
                //magicType: {show: true, type: ['stack', 'tiled']},
                //restore: {show: true},
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: {
            data: ['全行业', '圆通', '顺丰'],
            top: '18'
        },
        grid: {
            left: '2%',
            right: '9%',
            top: '26%',
            bottom: '3%',
            containLabel: true,
            show: false // 网格边框是否显示，上和右边框 
        },

        xAxis: [{
            type: 'category',
            splitLine: { // 网格线 x轴对应的是否显示
                show: false
            },
            data: DATA.YEARS
        }],

        yAxis: [{
                name: '规模(亿件)',
                type: 'value',
                splitLine: { // 网格线 y轴对应的是否显示
                    show: true
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                name: '同比增长 (%)',
                //nameLocation: 'start',
                splitLine: {
                    show: false // 网格线 y轴对应的是否显示
                },
                min: 0,
                max: 100, // growing rate upper limit
                type: 'value',
                //top:10,
                inverse: false,
                axisLine: {
                    lineStyle: {
                        color: '#2f4554'
                    }
                }
            }
        ],

        series: [{
                name: DATA.NAMES[0],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: COLORS[0]
                    },
                },
                label: seriesLabel,
                data: DATA.VOLUME.INDUSTRY
            },
            {
                name: DATA.NAMES[1],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: COLORS[1]
                    },
                },
                label: seriesLabel,
                data: DATA.VOLUME.YT
            },
            {
                name: DATA.NAMES[2],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: COLORS[2]
                    },
                },
                label: seriesLabel,
                data: DATA.VOLUME.SF
            },
            {
                name: DATA.NAMES[0] + "同比增长(%)",
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: COLORS[0],
                data: DATA.VOLUME.GROWING_RATE.INDUSTRY
            },
            {
                name: DATA.NAMES[2] + "同比增长(%)",
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: COLORS[2],
                data: DATA.VOLUME.GROWING_RATE.SF
            },
        ]
    },
    //---------------------------------------------------------------------------//

    //第5个graph
    {
        backgroundColor: '#FFFFFF',
        title: {
            text: '快递业务收入 2016年-2018上半年',
            //left:'center',              // title位置
            textStyle: {
                fontSize: 14,
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                }, // 数据视图是否在控件中显示
                //magicType: {show: true, type: ['stack', 'tiled']},
                //restore: {show: true},
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: {
            data: DATA.NAMES,
            top: '18'
        },
        grid: {
            left: '2%',
            right: '9%',
            top: '26%',
            bottom: '3%',
            containLabel: true,
            show: false // 网格边框是否显示，上和右边框 
        },

        xAxis: [{
            type: 'category',
            splitLine: {
                show: false // 网格线 x轴对应的是否显示
            },
            data: DATA.YEARS
        }],

        yAxis: [ // 双y坐标轴
            {
                name: '收入(亿元)',
                type: 'value',
                splitLine: {
                    show: true // 网格线 y轴对应的是否显示
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                name: '同比增长 (%)',
                //nameLocation: 'start',
                splitLine: {
                    show: false // 网格线 y轴对应的是否显示
                },
                min: 0,
                max: 100, // growing rate upper limit
                type: 'value',
                //top:10,
                inverse: false,
                axisLine: {
                    lineStyle: {
                        color: '#2f4554'
                    }
                }
            }
        ],

        series: [{
                name: DATA.NAMES[0],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: COLORS[0]
                    },
                },
                label: seriesLabel,
                data: DATA.INCOMING.INDUSTRY
            },
            {
                name: DATA.NAMES[1],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: COLORS[1]
                    },
                },
                label: seriesLabel,
                data: DATA.INCOMING.YT
            },
            {
                name: DATA.NAMES[2],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: COLORS[2]
                    },
                },
                label: seriesLabel,
                data: DATA.INCOMING.SF
            },
            {
                name: DATA.NAMES[0] + "同比增长(%)",
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: COLORS[0],
                data: DATA.INCOMING.GROWING_RATE.INDUSTRY
            },
            {
                name: DATA.NAMES[1] + "同比增长(%)",
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: COLORS[1],
                data: DATA.INCOMING.GROWING_RATE.YT
            },
            {
                name: DATA.NAMES[2] + "同比增长(%)",
                type: 'line',
                yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
                color: COLORS[2],
                data: DATA.INCOMING.GROWING_RATE.SF
            },
        ]
    },
    //---------------------------------------------------------------------------//

    //第4个graph
    {
        backgroundColor: '#FFFFFF',
        title: {
            text: '运输工具数量比重',
            subtext: '顺丰,2017',
            left: 'center',
            subtextStyle: {
                fontSize: 18
            }
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                },
                saveAsImage: {
                    show: false
                }
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 20,
            left: 'center',
            data: [],
            show: false // legend 不显示
        },
        series: [{
            name: '运输工具数量比重',
            type: 'pie',
            avoidLabelOverlap: true,
            radius: '50%',
            center: ['50%', '58%'],
            selectedMode: 'single',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    },
                    formatter: '{b} : {d}%',
                    position: 'outer'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                    name: DATA.SF_DETAIL.VEHICLE.INFO[0],
                    value: DATA.SF_DETAIL.VEHICLE.COUNTS[0]
                },
                {
                    name: DATA.SF_DETAIL.VEHICLE.INFO[1],
                    value: DATA.SF_DETAIL.VEHICLE.COUNTS[1]
                },
                {
                    name: DATA.SF_DETAIL.VEHICLE.INFO[2],
                    value: DATA.SF_DETAIL.VEHICLE.COUNTS[2]
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    },
    //---------------------------------------------------------------------------//

    //第6个graph
    {
        backgroundColor: '#FFFFFF',
        title: {
            text: '运输工具业务量比重',
            subtext: '顺丰,2017',
            left: 'center',
            subtextStyle: {
                fontSize: 18
            }
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                },
                saveAsImage: {
                    show: false
                }
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        series: [{
            name: '运输工具业务量比重',
            type: 'pie',
            avoidLabelOverlap: true,
            radius: '50%',
            center: ['50%', '58%'],
            selectedMode: 'single',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    },
                    formatter: '{b} : {d}%',
                    position: 'outer'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                    name: DATA.SF_DETAIL.VEHICLE.INFO[0] /*+ ', ' + DATA.SF_DETAIL.VEHICLE.VOLUMES[0] + '亿票,*/,
                    value: DATA.SF_DETAIL.VEHICLE.VOLUMES[0]
                },
                {
                    name: DATA.SF_DETAIL.VEHICLE.INFO[1]  /*+ ', ' + DATA.SF_DETAIL.VEHICLE.VOLUMES[0] + '亿票,*/,
                    value: DATA.SF_DETAIL.VEHICLE.VOLUMES[1]
                },
                {
                    name: DATA.SF_DETAIL.VEHICLE.INFO[2] /*+ ', ' + DATA.SF_DETAIL.VEHICLE.VOLUMES[0] + '亿票,*/,
                    value: DATA.SF_DETAIL.VEHICLE.VOLUMES[2]
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    },
    //---------------------------------------------------------------------------//

];