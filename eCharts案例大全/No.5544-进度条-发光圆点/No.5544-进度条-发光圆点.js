var value = [965,1155,872];
var value1 = [0.65,0.12,-0.33];
var max1 = Math.max.apply(null,value) * 1.2;
var data1 = [];

//data1存放背景条的数值，for循环使其数量与value一致
for (var i = value.length - 1; i >= 0; i--) {
    data1.push(max1);   
};

option = {
        backgroundColor: '#051F54',
            grid: {
                left: "5%",
                top: "5%",
                bottom: "5%",
                right: "5%",
                containLabel: true
            },
            xAxis: {
                type: 'value',
                max : max1,
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    margin: 0,
                    verticalAlign:'right',
                    align: 'left',
                    padding: [-30, 0, 0, 0],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 16
                    }
                },
                data : ['周一','周二','周三']
            },
            series: [{
                //真实数值的条形图主体
                name: '真实值',
                type: 'bar',
                animation: false,
                barWidth: '5%',
                label: {
                    show: true,
                    position: 'insideLeft',
                    padding: [50, 0, 0, -15],
                    distance: 15,
                    //color: co1,
                    formatter: function(params) {
                        //console.info(params);
                        if (value1[params.dataIndex] < 0) {
                                            return '{a|较上年}{b|'  + (value1[params.dataIndex]*100).toFixed(0) + '%}';
                                        } else {
                                            return '{a|较上年}{c|+'  + (value1[params.dataIndex]*100).toFixed(0) + '%}';
                                        }
                    },
                    rich: {
                        a: {
                            fontSize: 12,
                            color:'#fff',
                            //padding: [20, -30, 0, -30],
                        },
                        b: {
                            fontSize: 12,
                            color:'#13C2C2',
                            fontWeight:'bold',
                            padding: [0, 0, 0, 15],
                        },
                        c: {
                            fontSize: 12,
                            color:'#FF4242',
                            fontWeight:'bold',
                            padding: [0, 0, 0, 15],
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(2,50,147,1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(36,237,255,1)' // 100% 处的颜色
                            }],
                        }
                    }
                },
                data : value,
                z:1
            }, {
                //辅助1：真实数值的圆点
                name: '真实值圆点',
                type: 'scatter',
                symbolOffset: ['10%', '0'],
                symbolSize: 8,
                itemStyle: {
                    borderWidth: 0,
                    color: 'rgba(255,255,255,1)'
                },
                data : value,
                z:5
            }, {
                //辅助2：真实数值的圆点外侧圆环
                name: '真实值圆环',
                type: 'scatter',
                symbolOffset: ['10%', '0'],
                symbolSize: 15,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: 'rgba(101,224,255,1)',
                    //shadowBlur: 15,
                    //shadowColor: 'rgba(101,224,255,1)',
                    color: 'rgba(255,255,255,0.43)'
                },
                data : value,
                z:10
            },{
                //辅助3：背景条
                name: '背景条',
                type: 'bar',
                animation: false,
                barGap: '-100%',
                barWidth: '5%',
                label: {
                    show: true,
                    position: 'insideRight',
                    verticalAlign:'right',
                    padding: [-30, -10, 0, 0],
                    distance: 15,
                    color: '#fff',
                    formatter: function(params) {
                        //console.info(params);
                        return ' ' + value[params.dataIndex].toFixed(0);
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(62,78,123,1)'
                    }
                },
                data : data1,
                z:0
            }]
        };