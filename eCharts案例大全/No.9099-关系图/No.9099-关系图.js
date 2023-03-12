var sportsIcon = {
    'a': '/asset/get/s/data-1559121268278-ozjd-lXoz.png',
    'b': '/asset/get/s/data-1559121263841-UC5w7mTJ9.png',
    'c': '/asset/get/s/data-1559121259198-sxyPSimU9.png',
    'd': '/asset/get/s/data-1559121254241-xj5JAIBzC.png',
    'e': '/asset/get/s/data-1559121249274-QxHDAdQGy.png',
};
option = {

    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
        type: 'graph',
        layout: 'none',

        edgeSymbol: ['circle', 'none'],
        edgeSymbolSize: [2, 15],
        edgeLabel: {
            show: false,
            normal: {
                show: false,
                position: 'top',
                textStyle: {
                    fontSize: 12
                },
                formatter: "{c}"
            }
        },
        focusNodeAdjacency: true,
        roam: true,

        lineStyle: {
            normal: {
                width: 1,
                shadowColor: 'none',
                color: '#ff0000'
            },
        },
 label: {
      show:true,
      formatter:function(params){ 
        let str = params.name
        str =  [ '{a|}', '{b|94.102.57.216}{x|（荷兰）}' ].join('')
        return str
    },
        rich: {
          a: {
            width: 38,
            height: 38,
            backgroundColor: {
              image: sportsIcon.e
            },
          },
          b: {
            fontSize: 16,
            color: "#555",
            align: 'center',
            width: 150
          },
          x: {
            fontSize: 12,
            color: "#1ab4b8",
            align: 'right',
            width: 20
          }
  }
},
        itemStyle: {
            normal: {
                color: '#fff',
                shadowColor: 'rgba(225,225,225,0.4)',
                shadowBlur: 10,
                shadowOffsetX: 10,
                shadowOffsetY: 10,

            },
        },

        data: [{
                name: "贷款账户表",
                symbolSize: [250, 70],
                symbol: "roundRect’",
                x: 80,
                y: 150
            }, {
                name: "块n-1",
                x: 200,
                y: 120,
                symbol: "rect",
                itemWidth: 100, // 设置宽度
                symbolSize: [80, 30],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#45D840'
                        }, {
                            offset: 1,
                            color: '#B7FF7D'
                        }]),
                    }
                }
            }, {
                name: "块n",
                x: 200,
                y: 90,
                symbol: "rect",
                symbolSize: [80, 30],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#45D840'
                        }, {
                            offset: 1,
                            color: '#B7FF7D'
                        }]),
                    }
                }
            },
            //节点B,C,D ....n
            {
                name: "合同表",
                x: 300,
                y: 100,
                symbol: "rect",
                symbolSize: [100, 40],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#ffb402'
                        }, {
                            offset: 1,
                            color: '#ffdc84'
                        }]),
                    }
                }
            }, {
                name: "其他表",
                x: 300,
                y: 50,
                symbol: "rect",
                symbolSize: [100, 40],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#ffb402'
                        }, {
                            offset: 1,
                            color: '#ffdc84'
                        }]),
                    }
                }
            }
        ],

        links: [{
            source: "贷款账户表",
            value: "",
            target: "块n-1",
            lineStyle: {

                normal: {
                    color: 'red',
                    type: 'solid',
                    curveness: '-0.25'
                }
            }
        }, {
            source: "贷款账户表",
            value: " ",
            target: "块n",
        }, {
            source: "块n",
            value: " ",
            target: "其他表",
        }, {
            source: "块n-1",
            value: " ",
            target: "其他表",
            lineStyle: {

                normal: {
                    color: 'red',
                    type: 'solid',
                    curveness: '0.1'
                }
            }

        }, {
            source: "块n-1",
            value: " ",
            target: "合同表",
        }, {
            source: "块n",
            value: " ",
            target: "合同表",
            lineStyle: {

                normal: {
                    color: 'red',
                    type: 'solid',
                    curveness: '0.25'
                }
            }
        }],
    }]
};