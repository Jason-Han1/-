//数据文件

var uploadedDataURL = "/asset/get/s/data-1546054407386-I77NfgU1m.txt";

////图标
var logobig = "/asset/get/s/data-1513425570601-HyoscFffz.png";

var colors = [
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    "#ffb980",
    "#d87a80",
    "#8d98b3",
    "#e5cf0d",
    "#97b552",
    "#95706d",
    "#dc69aa",
    "#07a2a4",
    "#9a7fd1",
    "#588dd5",
    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089"
];
var bgColor = {
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.7,
    colorStops: [{
        offset: 0,
        color: '#b6a2de' // 0% 处的颜色
    }, {
        offset: .4,
        color: '#9a7fd1' // 100% 处的颜色
    }, {
        offset: 1,
        color: '#59678c' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
};

//33333
var categorys = [{
        name: '教育',
        max:28
    },
    {
        name: '励志',
        max:28
    },
    {
        name: '散文',
        max:28
    },
    {
        name: '小说',
        max:28
    },
    {
        name: '艺术',
        max:28
    },
    {
        name: '其他',
        max:28
    }
];
var year2016 = [6, 3, 5, 7, 1, 0];
var year2017 = [10, 4, 10, 4, 8, 4];
var year2018 = [9, 7, 16, 25, 4, 5];
var fontSize = 18; //阅读偏好中文字大小


//
var series = [];
var parseData = function() {
    //console.log(readrecord);
    for (var i = 0; i < readrecord.length; i++) {
        //console.log(readrecord);
        var d = new Date();
        d.setTime(Date.parse(readrecord[i].date));
        //console.log(d.getMonth());
        var m = d.getMonth();
        var dayData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        //var wordsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var wordsData = [, , , , , , , , , , , ];


        dayData[m] = readrecord[i].readDays;
        wordsData[m] = readrecord[i].words;
        var daySerie = {
            name: readrecord[i].name,
            type: 'bar',
            stack: '天统计月',
            //barWidth: '30px',
            data: dayData,
            //markArea: areaStyle
        };
        var wordSerie = {
            name: readrecord[i].name,
            type: 'bar',
            stack: '字数统计',
            //barWidth: '30px',
            data: wordsData,
            label: {
                show: false,
                position: 'inside',
                //rotate: 90,
                formatter: '{c}'
            },
            itemStyle: {
                shadowBlur: 5,
                shadowColor: 'rgba(0,0,0,0.3)',
                shadowOffsetX: 1,
                shadowOffsetY: 0,
                opacity:0.9

            }
            //markArea: areaStyle
        };
        //series.push(daySerie);
        series.push(wordSerie);


    }
    var readspeedData = [3, 5, 3, 2, 4, 4, 6, 5, 3, 3, 5, 6];
    var speedserie = {
        name: '阅读速度',
        type: 'line',
        data: readspeedData,
        yAxisIndex: 1,
        itemStyle: {
            shadowBlur: 5,
            shadowColor: '#666',
            shadowOffsetX: 1,
            shadowOffsetY: 1,

        },
        lineStyle: {
            //color: 自适应,
            width: 2,
            //type: 'solid',
            shadowBlur: 2,
            shadowColor: '#666',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            opacity:0.5
        },
        smooth:false,
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                }
            ],
            label: {
                fontSize:13,
                formatter: '最快\n{r|{c}}\n万字/天',
                textStyle:{
                    rich: {
                        r: {
                            color: '#',
                            fontWeight: 'bold',
                            fontSize: 15,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                            textShadowBlur: 5,
                        },
                
                    },
                },
            },
            symbolSize:80,
            symbolOffset:[0,-30],
            itemStyle: {
                shadowBlur: 5,
                shadowColor: '#666',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 2,
                borderColor: '#FFF',
                //opacity:0.8
            },
        },
        
        //markArea: areaStyle
    };
    series.push(speedserie);
    console.log(series);
    
    var monthsum = [118, 15, 56.6, 49.3, 142.2, 94.3, 157.2, 130, 44, 89.9, 140, 160.4];
    
    var monthsumserie = {
        name: '月汇总',
        type: 'line',
        data: monthsum,
        symbol: 'arrow',
symbolSize: 10,
symbolRotate:180,
        //yAxisIndex: 1,
        itemStyle: {
            shadowBlur: 5,
            shadowColor: '#666',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            
        },
        lineStyle: {
            //color: 自适应,
            width: 0,  //不显示线
            //type: 'solid',
            shadowBlur: 2,
            shadowColor: '#666',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
        },
        label:{
            show:true,
            offset:[0,5],
            color:'#FFF',
            //fontStyle:'bold',
            fontSize:13,
            formatter: '{c}',
            textShadowBlur: 5,
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
        },
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                }
            ],
            label: {
                fontSize:13,
                formatter: '最多\n{r|{c}}\n万字',
                textStyle:{
                    rich: {
                        r: {
                            color: '#',
                            fontWeight: 'bold',
                            fontSize: 15,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                            textShadowBlur: 5,
                        },
                
                    },
                },
            },
            symbolSize:80,
            //symbolOffset:[0,-20],
            itemStyle: {
                shadowBlur: 5,
                shadowColor: '#666',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 2,
                borderColor: '#FFF',
                //opacity:0.8
            },
        },
        
        //markArea: areaStyle
    };
    series.push(monthsumserie);
};
parseData();


var titleFontSize = 18;
var subTitleFontSize = 18;
var textStyle = {
    fontSize: titleFontSize,
    align: 'center',
    fontStyle: 'bold',
    color: '#DDD',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowBlur: 5,
    rich: {
        r: {
            //color: 'rgba(100,220,200,1)',
            color:colors[2],
            fontWeight: 'bold',
            fontSize: titleFontSize + 5,
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },

    }
};
var subtextStyle = {
    fontSize: subTitleFontSize,
    color: '#DDD',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowBlur: 5,
    fontWeight: 'bold',
    rich: {
        r: {
            //xcvvvvvvvcolor: 'rgba(100,220,200,1)',
            color:colors[2],
            fontWeight: 'bold',
            fontSize: subTitleFontSize + 3,
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },

    }
};

options = [

    //阅读天数统计
    {
        backgroundColor: bgColor,
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },

                saveAsImage: {
                    show: true
                }
            }
        },
        graphic: {
                 elements: [{
                     type: 'image',
                     style: {
                         image: logobig,
                         width: 60,
                         height: 60
                     },
                     left: '5',
                     top: '5'
                 }]
                },
        
        grid: {
            left: '0%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: false     
            
        },
        calculable: true,
        "tooltip": {
            "trigger": "item",
            "formatter": "{a}<br/>{b}<br/>年阅读率：{c}%"
        },
        "title": {
            "text": "2018年阅读综合分析",
            subtext: '全年阅读{r|341}天\n一年{r|93%}的时间有阅读行为',
            //"left": "left",
            
                left:'65',
                top:5,
            subtextStyle: subtextStyle,
            textStyle : {
                fontSize: titleFontSize+5,
                fontStyle: 'bold',
                textBorderWidth:5,
                textBorderColor:"#FFF",
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowBlur: 5,
                textShadowOffsetX:1,
                textShadowOffsetY:1,
                
            }
        },
        "series": [{
            "name": "年阅读天数统计",
            "type": "pie",

            "radius": [
                '30%',
                '100%'
            ],
            "avoidLabelOverlap": false,
            "startAngle": 0,
            "center": [
                "45%",
                "30%"
            ],
            "roseType": "area",
            "selectedMode": "single",
            "label": {
                "normal": {
                    "show": true,
                    formatter: "{b} \n{r|{c}%}",
                    rich: {
                        r: {
                            color: 'rgba(255,255,255,1)',
                            
                            fontWeight: 'bold',
                            fontSize: 18,
                        },
                    },
                    position: 'inside',

                    color: '#FFF',
                    textShadowBlur: 5,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 2,
                    textShadowColor: 'rgba(0,0,0,0.3)',
                },

            },
            itemStyle: {
                shadowBlur: 5,
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowColor: 'rgba(0,0,0,0.3)',

            },

            "data": [{
                    "value": 93,
                    "name": "2018年\n{r|341}天",
                    label: {
                        normal: {
                            fontSize: 30,
                            fontStyle: 'bold',
                            rich: {
                                r: {
                                    color:colors[13],
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                },
                            },

                        }
                    },
                },
                {
                    "value": 76,
                    "name": "2017年\n276天",
                    label: {
                        normal: {
                            fontSize: 23,
                            color: '#FFF',
                            fontStyle: 'bold'
                        }
                    },

                },
                {
                    "value": 67,
                    "name": "2016年\n246天",
                    label: {
                        normal: {
                            fontSize: 20,
                            fontStyle: 'bold'
                        }
                    },

                },
                {
                    "value": 58,
                    "name": "2015年\n211天",
                    label: {
                        normal: {
                            fontSize: 18,
                            fontStyle: 'bold'
                        }
                    },
                },
                {
                    "value": 0,
                    "name": "",
                    label: {
                        normal: {
                            show: false,
                        }
                    },

                },
                {
                    "value": 0,
                    "name": "",
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                },
                {
                    "value": 0,
                    "name": "",
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                },
                {
                    "value": 0,
                    "name": "",
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                }
            ]
        }]
    },
    ////// 阅读量月统计
    {
        backgroundColor: bgColor,
        title: {
            //text: '2018年阅读量统计',
            text: '总计读{r|66}本；月均：{r|5.5}本；最多月读{r|10}本',
            subtextStyle: subtextStyle,
            textStyle: textStyle,
            top:'2%'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a}:{c}本'
        },
        grid: {
            top: '20%',
            left: '10%',
            right: '3%',
            bottom: '10%',
            show: false     
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                //fontSize: 10,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0
            },
            axisLine: {
                lineStyle: {
                    color: '#FFF'
                }
            },

        }],
        yAxis: [{
            type: 'value',
            max: 12,
            axisLabel: {
                //fontSize: fontSize,
                //show: false,
            },
            axisLine: {
                //show:false,
                lineStyle: {
                    color: '#FFF'
                }
            },
        }],
        series: [{
            name: '每月',
            type: 'bar',
            //barWidth:'40%',
            data: [3, 1, 4, 2, 7, 6, 8, 10, 4, 4, 8, 9],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        return colors[params.dataIndex]
                    },
                    shadowBlur: 5,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                    barWidth: 5,
                    label: {
                        fontSize: fontSize - 5,
                        color: '#FFF',
                        show: true,
                        position: 'insideTop',
                        formatter: '{c}本',
                        textShadowColor: 'rgba(0,0,0,0.3)',
                        textShadowBlur: 5,
                        textShadowOffsetY: 1,
                        textShadowOffsetX: 1,

                    }
                }
            },
            markPoint: {

                data: [{
                    name: '最大值',
                    type: 'max'
                }, ],
                label:{
                    formatter:'最多'
                },
                itemStyle: {
                    color: colors[7],
                    borderColor: '#FFF',
                    borderWidth: 2,
                    borderType: 'solid',
                    shadowBlur: 5,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,

                },
            }
        }]
    },
    //阅读偏好统计
    {
        title: {
            //text: '2018年阅读偏好分析',
            text: '偏好：{r|小说25本}，18年{r|小说、散文}类增多',
            subtextStyle: subtextStyle,
            textStyle: textStyle,
            top:'2%'
        },
        tooltip: {
            trigger: 'item',
            //formatter:'{b}</br> {c}',
            textStyle: {
                color: '#fff',
                fontSize: fontSize,
                textShadowColor: '#333',
                textShadowBlur: 10,
                textShadowOffsetX: 5,
                textShadowOffsetY: 5,
            },
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {
                    show: true
                }
            }
        },
        grid: {
            top: '10%',
            bottom: '0%',
            show: false     
        },
        legend: {
            top: '40%',
            left: 0,
            orient: 'vertical',
            itemWidth: 12,
            itemHeight: 12,
            data: ['2016年', '2017年', '2018年'],
            textStyle: {
                color: colors,
                fontSize: fontSize
            }
        },
        radar: {
            radius: '68%',
            center: ['55%', '55%'],
            splitNumber: 4,
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    opacity: 0.8
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#fff',
                    opacity: 0.5
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(127,95,132,.3)',
                    opacity: 1,
                    shadowBlur: 45,
                    shadowColor: 'rgba(0,0,0,.5)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 15,
                }
            },
            name: {

                show: true,
                color: '#fff',
                fontSize: fontSize,
                textShadowColor: '#333',
                textShadowBlur: 10,
                textShadowOffsetX: 5,
                textShadowOffsetY: 5,

            },
            indicator: categorys,
            label:{
                show:true,
                position:'top',
            },
        },
        series: [{
            name: '阅读类别统计',
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
                normal: {
                    shadowBlur: 13,
                    shadowColor: 'rgba(0,0,0,.2)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    opacity: .8
                }
            },

            data: [{
                value: year2018,
                name: '2018年',
            }, {
                value: year2017,
                name: '2017年',
            }, {
                value: year2016,
                name: '2016年',
            }, ]
        }],
        color: colors,
        backgroundColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.7,
            colorStops: [{
                offset: 0,
                color: '#b6a2de' // 0% 处的颜色
            }, {
                offset: .4,
                color: '#9a7fd1' // 100% 处的颜色
            }, {
                offset: 1,
                color: '#59678c' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        }
    },
    

   
    
    // 购书月分析
    {
        backgroundColor: bgColor,
        color:colors,
        title: {
            text: '全年购书消费：{r|6453}元；折扣：{r|3239}元：\n总计购书：{r|292}本；',
            //subtext: '',
            //subtextStyle: subtextStyle,
            textStyle: textStyle,
        },

        tooltip: { // 提示框组件
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                //show:true,
                type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            },
            position: ['50%', '10%'],
            /*formatter:function(params, ticket, callback ){
                
            }*/


        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {
                    show: true
                }
            }
        },
        grid: {
            left: '1%',
            right: '8%',
            bottom: '3%',
            top:'25%',
            containLabel: true,
            
            show: false 
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                //fontSize: 10,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0
            },
            axisLine: {
                lineStyle: {
                    color: '#FFF'
                }
            },

        }],
        yAxis: [{
            name: '金额',
            //min: 0,
            //max: 200,
            axisLabel: {
                //fontSize: 10,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0,
                formatter:'{value}元'
            },
            axisLine: {
                lineStyle: {
                    color: '#FFF'
                }
            },
        }, ],
        series:[{
        name: '阅读速度',
        type: 'bar',
        data: [259, 96, 730,, 1049, 684, 209, 544, 377, 810, 1172, 518],
        //yAxisIndex: 1,
        itemStyle: {
            shadowBlur: 5,
            shadowColor: '#666',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            color:function(params){
                return colors[params.dataIndex];
            }

        },
        lineStyle: {
            //color: 自适应,
            width: 2,
            //type: 'solid',
            shadowBlur: 2,
            shadowColor: '#666',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            opacity:0.5
        },
        smooth:false,
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                }
            ],
            label: {
                fontSize:13,
                formatter: '¥{r|{c}}',
                textStyle:{
                    rich: {
                        r: {
                            color: '#',
                            fontWeight: 'bold',
                            fontSize: 15,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                            textShadowBlur: 5,
                        },
                
                    },
                },
            },
            itemStyle: {
                shadowBlur: 5,
                shadowColor: '#666',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 2,
                borderColor: '#FFF',
                //opacity:0.8,
                color:colors[10],
            },
        },
        
    }]
    },
    //阅读率统计
     // 阅读率统计
    {
        backgroundColor: bgColor,
        color: colors,
        grid:{
          
            show: false      
        },
        title: {
            text: '2018年购买的书读完：{r|47%}',
            //subtext: '购买与阅读的比例',
            textStyle: textStyle,
            subtextStyle: subtextStyle,
        },
        tooltip: {},

        series: {
            type: 'sunburst',
            highlightPolicy: 'descendant',
            data: [{ //新建年份节点
                name: '2018年阅读率',
                value: 292,
                itemStyle: {
                    color: colors[0]
                },
                label: {
                        rotate: 'tangential',
                        fontSize: 20,
                        //formatter: '{b}:{c}'
                    },
                children: [{
                    name: '已读',
                    //value: '46%',
                    itemStyle: {
                        color: colors[1]
                    },
                    label: {
                        rotate: 'tangential',
                        fontSize: 20,
                        formatter: '{b}:47%'
                    },
                    children: [{
                        name: '蛋卷',
                        value: 82,
                        itemStyle: {
                            color: colors[11]
                        },
                        label: {
                        rotate: 'tangential',
                        fontSize: 20,
                        formatter: '{b}:{c}本'
                    },
                    }, {
                        name: '我',
                        value: 56,
                        itemStyle: {
                            color: colors[12]
                        },
                        label: {
                        rotate: 'tangential',
                        fontSize: 20,
                        formatter: '{b}:{c}本'
                    },
                    }]
                }, {
                    name: '未读',
                    //value: '54%',
                    itemStyle: {
                        color: colors[4]
                    },
                    label: {
                        rotate: 'tangential',
                        fontSize: 20,
                        formatter: '{b}:53%'
                    },
                    children: [{
                        name: '蛋卷',
                        value: 16,
                        itemStyle: {
                            color: colors[14]
                        },label: {
                        rotate: 'tangential',
                        fontSize: 20,
                        formatter: '{b}:{c}本'
                    },
                    }, {
                        name: '我',
                        value: 138,
                        itemStyle: {
                            color: colors[9]
                        },
                        label: {
                        rotate: 'tangential',
                        fontSize: 20,
                        formatter: '{b}:{c}本'
                    },
                    }]
                }, ]

            }],
            radius: [0, 500],
            sort: null,
            center: ['50%', '50%'],
            levels: [{}, {
                //年份
                r0: '0%',
                r: '40%',
                itemStyle: {
                    borderWidth: 2,
                    shadowBlur: 5,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                },
                highlight: {
                    itemStyle: {
                        color: 'orange'
                    }
                },
                downplay: {
                    itemStyle: {
                        color: '#ccc'
                    }
                }
            }, {
                //分类
                r0: '40%',
                r: '60%',
                itemStyle: {
                    borderWidth: 2,
                    opacity: 1,
                    shadowBlur: 5,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,

                },
                
                highlight: {
                    itemStyle: {
                        color: 'orange'
                    }
                },
                downplay: {
                    itemStyle: {
                        color: '#ccc'
                    }
                }
            }, {
                //读者
                r0: '60%',
                r: '80%',

                itemStyle: {
                    shadowBlur: 5,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                    opacity:1
                },
                label: {
                    //position: 'outside',
                    rotate: 'tangential',
                    //align: 'left',
                    textShadowBlur: 5,
                    textShadowColor: '#333',
                    fontSize: 14,

                    formatter: '{a}:{b}'
                },
                downplay: {
                    label: {
                        opacity: 0
                    }
                },
                highlight: {
                    itemStyle: {
                        color: 'orange',

                    },
                    label: {

                        color: '#FFF',
                        fontSize: 13
                    }

                }
            }, ]
        }
    },
     // 阅读速度分析
    {
        backgroundColor: bgColor,
        title: {
            text: '{r|12月}读最多：{r|160}万字;{r|7月}读最快：{r|6}万字/天\n日均读{r|3.5}万字',
            subtext: '',
            subtextStyle: subtextStyle,
            textStyle: textStyle,
        },

        tooltip: { // 提示框组件
            trigger: 'item',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                //show:true,
                type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            },
            position: ['50%', '10%'],
            /*formatter:function(params, ticket, callback ){
                
            }*/


        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {
                    show: true
                }
            }
        },
        grid: {
            left: '1%',
            right: '8%',
            bottom: '3%',
            top:'25%',
            containLabel: true,
            
            show: false    
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                //fontSize: 10,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0
            },

        }],
        yAxis: [{
            name: '字数',
            min: 0,
            max: 200,
            axisLabel: {
                //fontSize: 10,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0
            },
            axisLine: {
                lineStyle: {
                    color: '#FFF'
                }
            },
        }, {
            name: '速度（万字/天）',
            //nameLocation: 'start',
            splitLine: { // 网格线 y轴对应的是否显示
                show: false
            },
            min: 0,
            max: 8, // growing rate upper limit
            type: 'value',
            //top:10,
            inverse: false,
            axisLine: {
                lineStyle: {
                    color: '#FFF'
                }
            },
            axisLabel: {
                //fontSize: 10,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0
            },

        }],
        series: series
    },
];