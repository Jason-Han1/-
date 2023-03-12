  var value = 60;
option={
    backgroundColor:'black',
    title: {
                        text: value,
                        textStyle: {
                            color: "#fff",
                            fontSize: 60,
                            fontWeight: '100',
                            rich: {
                                a: {
                                    fontSize: 48,
                                    color: '#29EEF3'
                                },

                                c: {
                                    fontSize: 40,
                                    lineHeight: 75,
                                    color: '#ffffff',
                                    // padding: [5,0]
                                }
                            }
                        },
                        x: "center",
                        y: "center"
                    },
                    legend: {
                        // orient: 'vertical',
                        // top: 'center',
                        left: 'center',
                        top:'30',
                        icon: "circle",
                        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
                        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
                        itemGap: 30,
                        selectedMode:false,
                        data: ['总注册用户数'],
                        textStyle: {
                            color:'#697dad',
                            fontSize:17,
                        }
                    },
                    series: [
                        {
                            type: 'pie',
                            zlevel: 3,
                            silent: true,
                            radius: ['53%', '54%'],
                            label: {
                                normal: {
                                    show: false
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:dotArr()
                        },
                        {
                            type: 'pie',
                            radius: ['60%', '68%'],
                            minAngle: 10 ,
                            hoverAnimation: false,
                            avoidLabelOverlap: true,
                            label: {
                                normal: {
                                    show: false
                                },
                            },
                            data: [
                                {
                                    name: '总注册用户数',
                                    value: 2,
                                    itemStyle: {
                                        normal: {
                                            color: "#0436cf",
                                        }
                                    }
                                }, {
                                    name: '',
                                    value: 1,
                                    itemStyle: {
                                        normal: {
                                            color: "rgba(0,0,0,0)",
                                        }
                                    }
                                }]
                        },

                    ]
    
    
}

function dotArr() {
                let dataArr = [];
                for (var i = 0; i < 200; i++) {
                    if (i % 2 === 0) {
                        dataArr.push({
                            name: (i + 1).toString(),
                            value: 1,
                            itemStyle: {
                                normal: {
                                    color: "#005dff",
                                    borderWidth: 1,
                                    borderColor: "#005dff"
                                }
                            }
                        })
                    } else {
                        dataArr.push({
                            name: (i + 1).toString(),
                            value: 2,
                            itemStyle: {
                                normal: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0,
                                    borderColor: "rgba(0,0,0,0)"
                                }
                            }
                        })
                    }

                }
                return dataArr

             }