        var geoCoordMap = {
            "北京": [116.4551, 40.2539],
            "廊坊": [116.521, 39.0509],
            "太原": [112.3352, 37.9413],
            "兰州": [103.5901, 36.3043],
            "杭州": [119.5313, 29.8773],
            "四川": [103.9526, 30.7617],
            "重庆": [107.7539, 30.1904],
            "库尔勒": [86.85, 47.70],
            "克拉玛依": [79.92, 37.12],
            "金华": [120.0037, 29.1028],
            "舟山": [122.2559, 30.2234]
        }

        var nodes = [{
                name: "北京",
                value: 0,
                symbol: "",
                id: 1,
                pid: 0,
                ip: ""
            },
            {
                symbol: "",
                name: "廊坊",
                category: 0,
                belong: '北京',
                id: 2,
                pid: 1,
                ip: ""
            },
            {
                symbol: "",
                name: "太原",
                category: 0,
                value: 0,
                belong: '北京',
                id: 3,
                pid: 1,
                ip: ""
            },
            {
                symbol: "",
                name: "兰州",
                category: 1,
                belong: '北京',
                id: 4,
                pid: 1,
                ip: ""
            },
            {
                symbol: "",
                name: "杭州",
                category: 0,
                belong: '北京',
                id: 5,
                pid: 1,
                ip: ""
            },
            {
                symbol: "",
                name: "四川",
                category: 0,
                belong: '北京',
                id: 6,
                pid: 1,
                ip: ""
            },
            {
                symbol: "",
                name: "重庆",
                category: 2,
                belong: '四川',
                id: 7,
                pid: 6,
                ip: ""
            },
            {
                symbol: "",
                name: "库尔勒",
                category: 1,
                belong: '北京',
                id: 8,
                pid: 1,
                ip: ""
            },
            {
                level: 0,
                symbol: "",
                name: "克拉玛依",
                category: 3,
                belong: '北京',
                id: 9,
                pid: 1,
                ip: ""
            },
            {
                symbol: '',
                name: '金华',
                category: 0,
                belong: '杭州',
                id: 10,
                pid: 5,
                ip: ""
            },
            {
                symbol: '',
                name: '舟山',
                category: 0,
                belong: '杭州',
                id: 11,
                pid: 5,
                ip: ""
            }
        ];

        var convertLinkData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                res.push({
                    name: dataItem.name,
                    source: dataItem.pid,
                    target: dataItem.id

                });
            }
            return res;
        };

        var links = convertLinkData(nodes);
        
         nodes = nodes.map(function (item) {
            var pos = geoCoordMap[item.name];
            if (pos == undefined || pos == null || pos.length < 2) {
                item.x = parseInt(Math.random() * 450);
                item.y = parseInt(Math.random() * 450);
            }
            else {
                item.x = pos[0];
                item.y = pos[1];
            }
            return item;
        })
        
        var  option = {
            backgroundColor: "#013954",
            color: ['#22FF0F', '#ffde00', '#fc9700', '#f44336'],//['#f44336', '#fc9700', '#ffde00', '#22FF0F'],
            legend: {
                data: ['正常', '一般', '重要', '紧急']//['紧急', '重要', '一般', '正常']
            },
            series: [
                {
                    id: 'a',
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'none',
                    force: {
                        initLayout: 'circular',
                        repulsion: 500,//斥力大小
                        edgeLength: [10,300], //节点连线长度
                        layoutAnimation: false,
                        gravity: 0,
                    },
                    data: nodes,
                    links: links,
                    roam: true,
                    hoverAnimation: false,
                    draggable: false,
                    symbolSize: 30,
                    focusNodeAdjacency: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'bottom',
                            color: '#fff'
                        }
                    },
                    lineStyle: {   // 线的颜色
                        normal: {
                            color: 'source',
                            curveness: 0,
                            width: 2
                        },

                    },
                    categories: [
                        {
                            name: '正常'
                        },
                        {
                            name: '一般'
                        },
                        {
                            name: '重要'
                        },
                        {
                            name: '紧急'
                        }
                    ],
                    edgeSymbol: ['', 'arrow'],
                    animation: false,
                    animationEasingUpdate: false
                }
            ]
        };


        myChart.setOption(option);


        upDataTuPu();


        //在demo里，必须要加setTimeout ，否则执行 myChart.convertToPixel 会报错
        setTimeout(function() {
            upDataTuPu();
            //窗口大小改事件
            window.addEventListener('resize', updatePosition);
        }, 0);

        function upDataTuPu() {
            myChart.setOption({
                graphic: echarts.util.map(nodes, function(item, dataIndex) {
                    return {
                        type: 'circle',
                        shape: {
                            r: 15
                        },
                        position: myChart.convertToPixel({
                            seriesIndex: 0
                        }, [item.x, item.y]),
                        draggable: true,
                        invisible: true,
                        onclick: echarts.util.curry(circleClick, dataIndex),
                        ondrag: echarts.util.curry(onPointDragging, dataIndex),
                        z: 100,
                    };
                })
            });
        };
        myChart.on('graphRoam', function() {
            updatePosition();
            rememberHighlight(clickLastNode);
        });

        function onPointDragging(dataIndex) {
            var tmpPos = myChart.convertFromPixel({
                seriesIndex: 0
            }, this.position);
            nodes[dataIndex].x = tmpPos[0];
            nodes[dataIndex].y = tmpPos[1];
            myChart.setOption({
                series: [{
                    id: 'a',
                    data: nodes
                }]
            });
            updatePosition();
            rememberHighlight(clickLastNode);

        }

        function circleClick(dataIndex) {
            if (!isHighlight) {
                myChart.dispatchAction({
                    type: 'focusNodeAdjacency',
                    seriesId: option.series[0].id,
                    dataIndex: dataIndex
                });
                isHighlight = true;
                clickLastNode = dataIndex;
            }
        };

        function updatePosition() { //更新节点定位的函数
            myChart.setOption({
                graphic: echarts.util.map(nodes, function(item, dataIndex) {
                    var tmpPos = myChart.convertToPixel({
                        'seriesIndex': 0
                    }, [item.x, item.y]);
                    return {
                        position: tmpPos
                    };
                })
            });

        };

        function rememberHighlight(clickLastNode) {
            myChart.dispatchAction({
                type: 'focusNodeAdjacency',
                seriesId: option.series[0].id,
                dataIndex: clickLastNode
            });
        }
        // 点击空白区域复原
        myChart.getZr().on('click', function(params) {
            console.log('params', params);
            if (params.cancelBubble === false && params.target === undefined) {
                updatePosition();
                isHighlight = false;
                clickLastNode = null;
            }
        })