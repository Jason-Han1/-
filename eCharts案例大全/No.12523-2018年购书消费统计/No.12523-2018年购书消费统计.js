var uploadedDataURL = "/asset/get/s/data-1545380327814-MyMAAvXQh.txt";  //数据文件

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

var fontSize = 18; //阅读偏好中文字大小
var titleFontSize = 18;
var subTitleFontSize = 15;
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
            fontSize: titleFontSize + 2,
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
    rich: {
        r: {
            //xcvvvvvvvcolor: 'rgba(100,220,200,1)',
            color:colors[2],
            fontWeight: 'bold',
            fontSize: subTitleFontSize + 2,
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },

    }
};

options = [
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
            containLabel: true
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
    }
];