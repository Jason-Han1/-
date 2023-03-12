
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
    ////// 作家
    {
        backgroundColor: bgColor,
        title: {
            //text: '2018年阅读量统计',
            text: '2018年阅读“最XX”分析',
            subtext: '{r|东野圭吾}的小说读得最多',
            subtextStyle: subtextStyle,
            textStyle : {
                fontSize:23,
                //align: 'center',
                fontStyle: 'bold',
                textBorderWidth:5,
                textBorderColor:"#FFF",
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowBlur: 5,
                textShadowOffsetX:1,
                textShadowOffsetY:1,
                
            },
            left:'65',
                top:5,
        },
        graphic: {
            zlevel:20,
                 elements: [{
                     type: 'image',
                     style: {
                         image: "/asset/get/s/data-1513425570601-HyoscFffz.png",
                         width: 60,
                         height: 60
                     },
                     left: '5',
                     top: '5'
                 }]
                },
        
        tooltip: {
            trigger: 'axis',
            formatter: '{a}:{c}本'
        },
        grid: {
            top: '20%',
            left: '3%',
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
        yAxis: [{
            position:'right',
            type: 'category',
            inverse:false,
            data: ['西蒙·普利德摩尔', '乔治.奥威尔', '周国平', '刘慈欣', '东野圭吾'],
            axisLabel: {
                fontSize: 18,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0,
                show:false
            },
            axisLine: {
                lineStyle: {
                    color: '#FFF'
                }
            },

        }],
        xAxis: [{
            type: 'value',
            inverse:'true',
            //max: 12,
            axisLabel: {
                //fontSize: fontSize,
                show: false,
            },
            axisLine: {
                show:false,
            },
        }],
        series: [{
            name: '每月',
            type: 'bar',
            //barWidth:'40%',
            data: [2,2,3, 3, 12],
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
                        fontSize: 18,
                        color: '#FFF',
                        show: true,
                        position: 'insideRight',
                        formatter: '{b} {c}本',
                        textShadowColor: 'rgba(0,0,0,0.3)',
                        textShadowBlur: 5,
                        textShadowOffsetY: 1,
                        textShadowOffsetX: 1,

                    }
                }
            },
           
        }]
    },
    
    ////// 国家
    {
        backgroundColor: bgColor,
        title: {
            //text: '2018年阅读量统计',
            //text: '2018年阅读综合分析',
            subtext: '{r|日本}作家的书读得最多',
            subtextStyle: subtextStyle,
            textStyle : {
                fontSize:23,
                //align: 'center',
                fontStyle: 'bold',
                textBorderWidth:5,
                textBorderColor:"#FFF",
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowBlur: 5,
                textShadowOffsetX:1,
                textShadowOffsetY:1,
                
            },
            top:'2%'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a}:{c}本'
        },
        grid: {
            top: '20%',
            left: '3%',
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
        yAxis: [{
            type: 'category',
            data: ['台湾','英国','大陆', '美国', '日本'],
            axisLabel: {
                fontSize: 18,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0,
                show:false
            },
            

        }],
        xAxis: [{
            type: 'value',
            //max: 12,
            axisLabel: {
                //fontSize: fontSize,
                show: false,
            },
            axisLine: {
                show:false,
            },
        }],
        series: [{
            name: '每月',
            type: 'bar',
            //barWidth:'40%',
            data: [4, 10,14, 14,20],
            
            //barWidth: 20,
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
                    label: {
                        fontSize: 18,
                        color: '#FFF',
                        show: true,
                        position: 'insideLeft',
                        formatter: '{b} {c}本',
                        textShadowColor: 'rgba(0,0,0,0.3)',
                        textShadowBlur: 5,
                        textShadowOffsetY: 1,
                        textShadowOffsetX: 1,

                    }
                }
            },
           
        }]
    },
   ////// 最慢
    {
        backgroundColor: bgColor,
        title: {
            //text: '2018年阅读量统计',
            //text: '2018年阅读综合分析',
            subtext: '{r|《三体》}读得最慢：{r|48}天',
            subtextStyle: subtextStyle,
            textStyle : {
                fontSize:23,
                //align: 'center',
                fontStyle: 'bold',
                textBorderWidth:5,
                textBorderColor:"#FFF",
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowBlur: 5,
                textShadowOffsetX:1,
                textShadowOffsetY:1,
                
            },
            top:'2%'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a}:{c}本'
        },
        grid: {
            top: '20%',
            left: '3%',
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
        yAxis: [{
            type: 'category',
            position:'right',
            data: ['禅与心理分析', '禅与摩托车修理艺术', '花园里的科学与艺术', '瓦尔登湖', '三体'],
            axisLabel: {
                show:false,
                fontSize: 18,
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
        xAxis: [{
            type: 'value',
            inverse:'true',
            //max: 60,
            axisLabel: {
                //fontSize: fontSize,
                show: false,
            },
            axisLine: {
                show:false,
            },
        }],
        series: [{
            name: '每月',
            type: 'bar',
            //barWidth:'40%',
            data:[12, 13, 15, 22, 48],
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
                        fontSize: 18,
                        color: '#FFF',
                        show: true,
                        position: 'insideRight',
                        formatter: '《{b}》{c}天',
                        textShadowColor: 'rgba(0,0,0,0.3)',
                        textShadowBlur: 5,
                        textShadowOffsetY: 1,
                        textShadowOffsetX: 1,

                    }
                }
            },
           
        }]
    },
    ////// 最快
    {
        backgroundColor: bgColor,
        title: {
            //text: '2018年阅读量统计',
            //text: '2018年阅读综合分析',
            subtext: '{r|《京都山居生活》}读得最快：{r|半天}',
            subtextStyle: subtextStyle,
            textStyle : {
                fontSize:23,
                //align: 'center',
                fontStyle: 'bold',
                textBorderWidth:5,
                textBorderColor:"#FFF",
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowBlur: 5,
                textShadowOffsetX:1,
                textShadowOffsetY:1,
                
            },
            top:'2%'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a}:{c}本'
        },
        grid: {
            top: '20%',
            left: '3%',
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
        yAxis: [{
            type: 'category',
            data: ['京都山居生活', '塔莎的世界', '从小读到大', '去山里盖一座小屋吧', '隐居的愿望'],
            axisLabel: {
                fontSize: 18,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0,
                show:false
            },
            inverse:true
            

        }],
        xAxis: [{
            type: 'value',
            //max: 12,
            axisLabel: {
                //fontSize: fontSize,
                show: false,
            },
            axisLine: {
                show:false,
            },
        }],
        series: [{
            name: '每月',
            type: 'bar',
            //barWidth:'40%',
            data: [0.5, 0.6, 1, 1, 1],
            
            //barWidth: 20,
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
                    label: {
                        fontSize: 18,
                        color: '#FFF',
                        show: true,
                        position: 'insideLeft',
                        formatter: '《{b}》 {c}天',
                        textShadowColor: 'rgba(0,0,0,0.3)',
                        textShadowBlur: 5,
                        textShadowOffsetY: 1,
                        textShadowOffsetX: 1,

                    }
                }
            },
           
        }]
    },
    ////// 标签
    {
        backgroundColor: bgColor,
        title: {
            //text: '2018年阅读量统计',
            //text: '2018年阅读综合分析',
            subtext: '涉及到{r|“爱”}的书最多{r|22}本',
            subtextStyle: subtextStyle,
            textStyle : {
                fontSize:23,
                //align: 'center',
                fontStyle: 'bold',
                textBorderWidth:5,
                textBorderColor:"#FFF",
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowBlur: 5,
                textShadowOffsetX:1,
                textShadowOffsetY:1,
                
            },
            top:'2%'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a}:{c}本'
        },
        grid: {
            top: '20%',
            left: '3%',
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
        yAxis: [{
            type: 'category',
            position:'right',
            data:['爱', '生活方式', '孤独', '教育', '艺术', '自然', '价值观', '哲学', '死亡', '隐居'],
            inverse:true,
            axisLabel: {
                show:false,
                fontSize: 18,
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
        xAxis: [{
            type: 'value',
            inverse:'true',
            //max: 60,
            axisLabel: {
                //fontSize: fontSize,
                show: false,
            },
            axisLine: {
                show:false,
            },
        }],
        series: [{
            name: '每月',
            type: 'bar',
            //barWidth:'40%',
            data:[22, 21, 20, 17, 16, 14, 14, 12, 11, 10],
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
                        fontSize: 18,
                        color: '#FFF',
                        show: true,
                        position: 'insideRight',
                        formatter: '“{b}”{c}本',
                        textShadowColor: 'rgba(0,0,0,0.3)',
                        textShadowBlur: 5,
                        textShadowOffsetY: 1,
                        textShadowOffsetX: 1,

                    }
                }
            },
           
        }]
    },
    ////// 被打标签最多的书
    {
        backgroundColor: bgColor,
        title: {
            //text: '2018年阅读量统计',
            //text: '2018年阅读综合分析',
            subtext: '{r|《瓦尔登湖》}被打标签{r|63}次',
            subtextStyle: subtextStyle,
            textStyle : {
                fontSize:23,
                //align: 'center',
                fontStyle: 'bold',
                textBorderWidth:5,
                textBorderColor:"#FFF",
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowBlur: 5,
                textShadowOffsetX:1,
                textShadowOffsetY:1,
                
            },
            top:'2%'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a}:{c}本'
        },
        grid: {
            top: '20%',
            left: '3%',
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
        yAxis: [{
            type: 'category',
            data: ['瓦尔登湖', '月亮与六便士', '半农半X的生活', '不思八九 常想一二', '三体1', '三体3 死神永生', '塔莎的世界', '三体2 黑暗森林', '禅与摩托车修理艺术', '1984'],
            axisLabel: {
                fontSize: 18,
                color: '#FFF',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowBlur: 5,
                interval: 0,
                show:false
            },
            inverse:true
            

        }],
        xAxis: [{
            type: 'value',
            //max: 12,
            axisLabel: {
                //fontSize: fontSize,
                show: false,
            },
            axisLine: {
                show:false,
            },
        }],
        series: [{
            name: '每月',
            type: 'bar',
            //barWidth:'40%',
            data:[63, 31, 30, 30, 25, 24, 21, 21, 21, 19],
            
            //barWidth: 20,
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
                    label: {
                        fontSize: 18,
                        color: '#FFF',
                        show: true,
                        position: 'insideLeft',
                        formatter: '《{b}》 {c}次',
                        textShadowColor: 'rgba(0,0,0,0.3)',
                        textShadowBlur: 5,
                        textShadowOffsetY: 1,
                        textShadowOffsetX: 1,

                    }
                }
            },
           
        }]
    },
   
];