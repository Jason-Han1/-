/**
 * 双层圆环图
 * param1  echarts的初始化id  echarts.init(document.getElementById('xxx'))
 * param2  value值  数值型
 * param3  value值的单位
 * param4  字体及圆环大颜色
 * param5,6  最小最大值
 */
/*---------------------蓝色----------------------------*/
//  var innerColor = '#0f6d81';//内层颜色
//  var middleColor = '#1f9bb6';//中间层边框色粗
//  var middleColor1 = '#50e0ff';//中间层边框色细
//  var outColor ="#50e0ff";//外层边框色粗
//  var outColor1 = 'rgba(73,223,240,0.7)'//外层边框色细
//  var shadowColor = 'rgba(255,255,255,0.4)';//发光颜色
//  var percentColor = '#50e0ff';//百分比颜色
//  var textColor = '#fff';//文字颜色

/*---------------------绿色----------------------------*/
//  var innerColor = '#04835d';//内层颜色
//  var middleColor = '#02b27e';//中间层边框色粗
//  var middleColor1 = '#00eca8';//中间层边框色细
//  var outColor ="#00ffb4";//外层边框色粗
//  var outColor1 = 'rgba(0,255,180,0.5)'//外层边框色细
//  var shadowColor = 'rgba(0,255,180,0.53)';//发光颜色
//  var percentColor = '#00eca8';//百分比颜色
//  var textColor = '#fff';//文字颜色
 
/*---------------------黄色----------------------------*/
 var innerColor = '#826d31';//内层颜色
 var middleColor = '#a57c07';//中间层边框色粗
 var middleColor1 = '#ebb92a';//中间层边框色细
 var outColor ="#ebb92a";//外层边框色粗
 var outColor1 = 'rgba(235,185,42,0.5)'//外层边框色细
 var shadowColor = 'rgba(235,185,42,0.53)';//发光颜色
 var percentColor = '#ebb92a';//百分比颜色
 var textColor = '#fff';//文字颜色
 
/*---------------------缩放----------------------------*/ 
var scale = 1;
var innerItemStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowColor: 'rgba(38, 111,148, 0,5)',
        shadowBlur: 10,
    }
};
var midItemStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(80,224,255,0.1)',
        shadowColor: 'rgba(38, 111,148, 0,1)',
        shadowBlur: 5,
        opacity: 0.4
    }
};
var outerItemStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(80,224,255,0.1)',
    }
};


option = {
    title: [{
        text: '单选题',
        // subtext: '单选题',
        x: '35%',
        y: '50%',
        textAlign: 'center',
        textStyle: {
            color: textColor,
            textAlign: 'center',
            fontSize: 38 * scale,
            fontWeight: 'bold'
        },
        // subtextStyle: {
        //     color: textColor,
        //     textAlign: 'center',
        //     fontSize: 30 * scale,
        //     fontWeight: 'bold'
        // }

    }],
    backgroundColor: '#031f2d',
    // color: ['#00eca8', '#00eca8'],
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        itemGap: 12,
        data: ['通过', '未通过']
    },
    series: [
        //内圈圆环
        {
            name: 'Line 0',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['35%', '50%'],
            radius: ['47%', '51.8%'],
            itemStyle: innerItemStyle,
            data: [{
                    value: 10,
                    name: '正确',
                    itemStyle: {
                        normal: {
                            // borderWidth: 10,
                            // borderColor: '#00eca8'
                            color:innerColor
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d} %',
                            position: 'center',
                            padding:[0,0,10,0],
                            align:'left',
                            show: true,
                            textStyle: {
                                fontSize: 38 * scale,
                                fontWeight: 'bold',
                                color: percentColor
                            }
                        }
                    }
                }, {
                    value: 10,
                    name: '错误',
                    itemStyle: {
                        normal: {
                            // borderWidth: 2,
                            // borderColor: '#00eca8'
                            color:"none"
                        }
                    }
                },

            ]
        },
        //中间圆环
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['35%', '50%'],
            radius: ['60%', '60%'],
            itemStyle: innerItemStyle,
            data: [{
                    value: 16,
                    name: '通过',
                    itemStyle: {
                        normal: {
                            borderWidth: 10,
                            borderColor: middleColor,
                            shadowColor:shadowColor,
                            shadowBlur:15
                        }
                    }
                }, {
                    value: 22,
                    name: '未通过',
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: middleColor1,
                            shadowColor:shadowColor,
                            shadowBlur:15
                        }
                    }
                },

            ]
        },
        //外层圆环
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['35%', '50%'],
            radius: ['70%', '70%'],
            itemStyle: innerItemStyle,
            data: [{
                    value: 16,
                    name: '通过',
                    itemStyle: {
                        normal: {
                            borderWidth: 10,
                            borderColor: outColor,
                            shadowColor:shadowColor,
                            shadowBlur:10
                        }
                    }
                }, {
                    value: 10,
                    name: '未通过',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: outColor1,
                            shadowColor:shadowColor,
                            shadowBlur:10
                        }
                    }
                },

            ]
        }
    ],
};