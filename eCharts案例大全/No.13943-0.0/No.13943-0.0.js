var i = 0; //代表组数


var m = 0; //代表鼠标点击以图搜车次数编号


option = {
    title: {
        text: '',
        textStyle: {
            color: "white"
        }
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 18
            },
        }
    },
    legend: {
        x: "center",
        data: ["车辆图片", "车牌", '操作']
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 60,
            focusNodeAdjacency: true,

            roam: true,
            categories: [{
                name: ''
            }, {
                name: ''
            }, {
                name: '',

            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 18
                    },
                }
            },
            force: {
                repulsion: 2000
            },
            //edgeSymbol: ['pin'],
            //edgeSymbolSize: [1, 10],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 18
                    },
                    formatter: "{c}"
                }
            },
            data: [{
                    id: '0' + i,
                    name: '屋里躺糖',
                    category: 0,
                    symbol: 'image://https://s1.ax1x.com/2018/03/10/9RqK0J.jpg',
                }, {
                    id: '1' + i,
                    name: '曹栋',
                    draggable: true,
                    category: 1
                }, {
                    id: '2' + i,
                    name: '分裂',
                    draggable: true,

                    category: 2
                }

            ],
            links: [
                //白色汽车到以图搜车
                {
                    source: '0' + i,
                    target: '2' + i,
                    //			source : '00',
                    //			target : '20',
                    symbol: ['none', 'arrow'],
                    value: "",
                    lineStyle: {

                        normal: {
                            color: 'red',
                            type: 'dotted',
                        }
                    }

                }, {
                    //白色汽车到车牌
                    source: '0' + i,
                    target: '1' + i,
                    value: '想念'
                }, {

                    source: '1' + i,
                    target: '3' + i,
                    symbol: ['none', 'arrow'],
                    value: "",
                    lineStyle: {

                        normal: {
                            color: 'red',
                            type: 'dotted',
                        }
                    }
                }, {
                    source: '1' + i,
                    target: '4' + i,
                    symbol: ['none', 'arrow'],
                    value: "",
                    lineStyle: {

                        normal: {
                            color: 'red',
                            type: 'dotted',
                        }
                    }
                }
            ],
            lineStyle: {
                symbolSize: [5, 200000],
                symbol: ['none', 'arrow'],
                normal: {
                    opacity: 0.7,
                    width: 1,
                    curveness: 0.1
                }
            }
        }
    ]
};
var data = option.series[0].data;
var links = option.series[0].links;
//alert(data[2].id);
myChart.on('click', function(params) {
    i++;
    // 控制台打印数据的名称
    if (params.name == "分裂") {
        data.push({
                id: '0' + i,
                name: '屋里躺糖' + i,
                category: 0,
                symbol: 'image://https://s1.ax1x.com/2018/03/10/9RqK0J.jpg',
            }, {
                id: '1' + i,
                name: '曹栋',
                draggable: true,
                category: 1
            }, {
                id: '2' + i,
                name: '分裂',
                draggable: true,

                category: 2
            }

        );
        links.push(
            //白色汽车到以图搜车
            {
                source: '0' + i,
                target: '2' + i,
                //			source : '00',
                //			target : '20',
                symbol: ['none', 'arrow'],
                value: "",
                lineStyle: {

                    normal: {
                        color: 'red',
                        type: 'dotted',
                    }
                }

            }, {
                //白色汽车到车牌
                source: '0' + i,
                target: '1' + i,
                value: '想念'
            }, {

                source: '1' + i,
                target: '3' + i,
                symbol: ['none', 'arrow'],
                value: "",
                lineStyle: {

                    normal: {
                        color: 'red',
                        type: 'dotted',
                    }
                }
            }, {
                source: '1' + i,
                target: '4' + i,
                symbol: ['none', 'arrow'],
                value: "",
                lineStyle: {

                    normal: {
                        color: 'red',
                        type: 'dotted',
                    }
                }
            }, {
                source: '0' + i,
                target: '2' + (params.dataIndex - 2) / 5,
                //			source : '00',
                //			target : '20',
                symbol: ['none', 'arrow'],
                value: "",
                lineStyle: {

                    normal: {
                        color: 'red',
                        type: 'dotted',
                    }
                }

            });
        //		alert('2'+((params.dataIndex-2)/5)*3)
        //		alert('0'+(i-1))
        //		alert(data[i].id)
        //		alert("I="+i+";;;;;j="+j+";;;;;;;k="+k)
        //		if(confirm("是否生成")){
        //			
        myChart.setOption(option);
        //		}
    }
});