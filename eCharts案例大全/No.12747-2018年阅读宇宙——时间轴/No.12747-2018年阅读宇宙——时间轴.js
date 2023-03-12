var uploadedDataURL = "/asset/get/s/data-1544174834232-k4w2IZXvZ.json";


/*
var nodes = [

    {
        category: '主线',
        name: '1',
        symbolSize: 23
    },
];
var nodes1 = [{
    category: '主线',
    name: '2',
    symbolSize: 17
}];
var nodes2 = [{
    category: '主线',
    name: '3',
    symbolSize: 23
}, ];
var nodes3 = [{
    category: '主线',
    name: '4',
    symbolSize: 23
}, ];


var links = [];
var links1 = [{
    source: '1',
    target: '2'
}, ];
var links2 = [{
        source: '1',
        target: '2'
    },
    {
        source: '2',
        target: '3'
    },
];
var links3 = [{
        source: '1',
        target: '2'
    },
    {
        source: '2',
        target: '3'
    },
    {
        source: '3',
        target: '4'
    },
];
*/
var categories = [


    {
        name: '主线'
    },

    {
        name: '地点'
    },
    {
        name: '专题'
    },

    {
        name: '活动'
    },
    {
        name: '题材'
    },
    {
        name: '人物'
    },
    {
        name: '阅读感受'
    },
    {
        name: '书'
    },
];

//阅读日期
var readdays = ['2018年1月8日', '2018年1月18日', '2018年1月30日', '2018年2月2日', '2018年3月4日', '2018年3月10日', '2018年3月19日', '2018年3月22日', '2018年4月2日', '2018年4月17日', '2018年5月9日', '2018年5月11日', '2018年5月16日', '2018年5月23日', '2018年5月25日', '2018年5月28日', '2018年5月30日', '2018年6月8日', '2018年6月12日', '2018年6月14日', '2018年6月19日', '2018年6月27日', '2018年6月28日', '2018年7月5日', '2018年7月6日', '2018年7月13日', '2018年7月18日', '2018年7月20日', '2018年7月23日', '2018年7月24日', '2018年7月29日', '2018年8月2日', '2018年8月4日', '2018年8月7日', '2018年8月13日', '2018年8月15日', '2018年8月18日', '2018年8月23日', '2018年8月23日', '2018年8月27日', '2018年8月29日', '2018年9月12日', '2018年9月15日', '2018年9月18日', '2018年9月19日', '2018年10月4日', '2018年10月13日', '2018年10月16日', '2018年10月29日', '2018年11月6日', '2018年11月8日', '2018年11月10日', '2018年11月13日', '2018年11月14日', '2018年11月20日', '2018年11月26日', '2018年11月29日'];
$.get(uploadedDataURL, function(tagdata) { //读取可视化数据

    var option = {
        baseOption: {
            timeline: {
                // y: 0,
                axisType: 'category',
                // realtime: false,
                // loop: false,
                autoPlay: true,
                // currentIndex: 2,
                playInterval: 3000,
                // controlStyle: {
                //     position: 'left'
                // },
                data: readdays,
                label: {
                    formatter: function(s) {
                        //return (new Date(s)).getFullYear();
                    }
                }
            },
            title: {
                text: '2018年阅读宇宙',
                subtext: '书籍就像人类智慧的宇宙，每本书就像一个孤独的星球。\n真理的线索分散在不同的书籍中。\n通过书将自己理解到的内容联系在一起。\n将一年选择阅读的书籍的隐秘的关联性显现出来。',
                textStyle: {
                    fontSize: 25,
                }
            },
            backgroundColor: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'blue' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            },
            legend: [{
                //selectedMode: 'single',
                top: 30,
                left: 'right',
                data: categories,
                show: true,
                //selected: selected1

            }],
            tooltip: {},
            animationDurationUpdate: 2,
            animationEasingUpdate: 'quinticInOut',

            series: [{
                type: 'graph',
                ribbonType: true,
                //layout: 'circular',
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [9, 10],
                circular: {
                    rotateLabel: true
                },


                layout: 'force',

                force: {
                    //initLayout: 'circular',
                    repulsion: 300,
                    gravity: 0.5,
                    edgeLength: [1, 10],
                    layoutAnimation: true,
                },

                roam: true,
                focusNodeAdjacency: true,
                hoverAnimation: true,
                label: {
                    normal: {
                        position: 'inside',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 10,
                        formatter: '{b}',
                    }
                },
                draggable: true,
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: 'rgba(255,255, 255, 0.8)'
                    }
                },

                lineStyle: {
                    color: 'target',
                    curveness: 0.3
                },
                emphasis: {
                    lineStyle: {
                        width: 10
                    }
                },
                categories: categories,
                data: nodes,
                links: links
            }]
        },
        /*options: [{
                series: [{
                    data: nodes,
                    // links: [],
                    links: links
                }]
            }, {
                series: [{
                    data: nodes1,
                    // links: [],
                    links: links1
                }]
            },
            {
                series: [{
                    data: nodes2,
                    links: links2
                }]
            },
            {
                series: [{
                    data: nodes3,
                    links: links3
                }]
            },

        ]*/
        options: []
    };

    myChart.hideLoading();

    for (var d = 0; d < readdays.length; d++) { //循环日期
        var da = readdays[d];

        var nodes = [];
        var links = [];
        var lastbookname = '';
        for (var n = 0; n < tagdata.length; n++) { //在
            //option.baseOption.timeline.data.push(linedata[2][n]);
            var d2 = tagdata[n];
            var rd = d2.readdate;
            var bookname = d2.bookname;
            var tag = d2.tag;
            var category = d2.category;
            //alert(d2);break;
            if (d == rd) { //只处理日期一致的数据
                if (bookname !== lastbookname) { //增加书的节点
                    nodes.push({
                        name: bookname,
                        category: '书',
                        value: 10,
                        symbolSize: 10
                    });
                }

            }

        }
        option.options.push({ //添加到options数组里
            series: [{
                nodes: nodes,
                links: links,
            }]
        });

    }
    myChart.setOption(option);

});