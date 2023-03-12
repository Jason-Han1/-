
 var infoArray = [{ name:"户籍", value: 40, value1: 40 },
                            { name: "来沪", value: 50, value1: 50 },
                            { name: "其他", value:10, value1: 10}];

option = {
                                color: ['#2ed3dd', '#1c80d5', '#fe4664', '#05cc91', '#eeae00', '#8477ff'],
                                title: {
                                    left: '160px',
                                    top: "75px",
                                    text: "实有人口分布",
                                    textStyle: {
                                        fontSize: '18',
                                        fontFamily: 'Noto Sans CJK SC',
                                        color: '#01b7ec'
                                    }
                                },
                                tooltip: { //鼠标移上去提示框
                                    trigger: 'item'
                                },
                                series: [{
                                    type: 'pie',
                                    center: ['50%', '55%'],
                                    radius: ['25%', '35%'],
                                    avoidLabelOverlap: true,
                                   
                                    minAngle: 50,//最小角度
                                    itemStyle: {//控制间距  颜色调成和背景一直  
                                        normal: {
                                            borderColor: '#1c3144',
                                            borderWidth: 7
                                        }
                                    },
                                    label: {
                                        show: true,
                                        position: 'outside',
                                        formatter: function (val) {//编辑显示内容样式

                                            return "{a|" + val.data.name + "}\n{b|" + val.data.value + "}\n{c|" + val.data.value1 + "%}";
                                            //   '{a|{b}：{d}%}\t{hr|}'
                                        },
                                        rich: {
                                            hr: {
                                                backgroundColor: 't',
                                                borderRadius: 3,
                                                width: 3,
                                                height: 3,
                                                padding: [3, 3, 0, -12]
                                            },
                                            a: {
                                                fontSize: 20,

                                            },
                                            b: {
                                                color: "#f4b148",
                                                fontSize: 20,
                                                fontFamily: "张海山草泥马体",
                                            },
                                            c: {
                                                color: "#67ddff",
                                                fontSize: 18,
                                            }
                                        }
                                    },
                                    labelLine: {//控制线得长宽
                                        normal: {
                                            length: 10,
                                            length2: 15,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: infoArray
                                },
                                {
                                    type: 'pie',
                                    center: ['50%', '55%'],//控制⚪ 位置
                                    radius: ['20%', '21%'],//控制 ⚪ 大小
                                    avoidLabelOverlap: false,
                                    animation: false,//移除鼠标移上去动画效果
                                    silent:true,//禁止鼠标操作
                                     tooltip: { //鼠标移上去提示框  内圆静止
                                   trigger: 'item',
                                    show: false,
                                },
                                    itemStyle: {
                                        normal: {
                                            
                                      show: false,
                                            color: '#249e9b'
                                        }
                                    },
                                    
                                    label: {
                                        normal: {
                                            show: false,
                                            formatter: '{c}\n{d}%',
                                            textStyle: {
                                                fontSize: 14,
                                                color: '#fff'
                                            },
                                        },
                                        emphasis: {
                                            show: false,
                                            textStyle: {
                                                fontSize: '16',
                                            },
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        },
                                        lineStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    data: [{
                                        name: '环',
                                        value: '10'
                                    }]

                                }
                                ]
                            };
                           