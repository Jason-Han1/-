   var categories = [{
            name: '家人',
            itemStyle: {
                normal: {
                    color: "#009800",
                }
            }
        },
        {
            name: '朋友',
            itemStyle: {
                normal: {
                    color: "#4592FF",
                }
            }
        },
        {
            name: '同事',
            itemStyle: {
                normal: {
                    color: "red",
                }
            }
        }
    ];
    var legend = ["家人", "朋友", "同事"];
    var peoples = [],
        linkes = [];
    for (var i = 0; i < 10; i++) {
        peoples.push({
            name: i,
            draggable: true,
            displayname: 'people' + i,
            category: Math.floor(Math.random() * 3)
        });
    };

    for (var i = 0; i < 10; i++) {
        linkes.push({
            source: i,
            target: Math.floor(Math.random() * 10),
            value: legend[Math.floor(Math.random() * 3)],
            lineStyle: {
                normal: {
                    color: '#38f',
                    curveness: Math.random() * 1 // 线的弯曲度 0-1之间 越大则歪曲度更大
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#07ac72',
                        fontSize: 12
                    }
                }
            }
        });
    };


    var option = {
        tooltip: {
            show: true,
            formatter: function(e) {
                return e.data.displayname;
            }
        },
        legend: {
            x: "center",
            data: legend,
            tooltip: {
                show: true
            },
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            categories: categories,
            type: 'graph',
            layout: 'force',
            symbol: "circle",
            symbolSize: 30,
            roam: true, //禁止用鼠标滚轮缩小放大效果
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            // 连接线上的文字
            focusNodeAdjacency: true, //划过只显示对应关系
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 20
                    },
                    formatter: "{c}"
                }
            },
            lineStyle: {
                normal: {
                    opacity: 1,
                    width: 2,
                    curveness: 0
                }
            },
            // 圆圈内的文字
            label: {
                normal: {
                    show: true,
                    formatter: function(e) {
                        return e.data.displayname;
                    },
                    textStyle: {
                        color: '#333',
                        fontFamily: '微软雅黑',
                        fontSize: 12
                    }
                }
            },
            force: {
                repulsion: 500
            },
            data: peoples,
            links: linkes,
        }]
    };

    myChart.on('click', function(params) {
        if (params.dataType === "node") {
            alert(params.data.displayname)

        }
    });