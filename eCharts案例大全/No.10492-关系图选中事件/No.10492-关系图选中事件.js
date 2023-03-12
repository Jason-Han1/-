var noteArr = [{"label":"吴思凡","id":0,"name":"吴思凡"},{"label":"孙俪","id":1,"name":"孙俪"},{"label":"鲁若晴","id":2,"name":"鲁若晴"},{"label":"李胜基","id":3,"name":"李胜基"},{"label":"汪峰","id":4,"name":"汪峰"},{"label":"范诗冰","id":5,"name":"范诗冰"},{"label":"谢天华","id":6,"name":"谢天华"},{"label":"王铁生","id":7,"name":"王铁生"},{"label":"王杰","id":8,"name":"王杰"},{"label":"吴秀波","id":9,"name":"吴秀波"},{"label":"李易峰","id":10,"name":"李易峰"},{"label":"陈思思","id":11,"name":"陈思思"},{"label":"罗志祥","id":12,"name":"罗志祥"},{"label":"谢娜娜","id":13,"name":"谢娜娜"},{"label":"张杰","id":14,"name":"张杰"},{"label":"赵又廷","id":15,"name":"赵又廷"},{"label":"于娜","id":16,"name":"于娜"},{"label":"彭帅","id":17,"name":"彭帅"},{"label":"李娜","id":18,"name":"李娜"},{"label":"陈翔","id":19,"name":"陈翔"},{"label":"陈讯飞","id":20,"name":"陈讯飞"},{"label":"武兰兰","id":21,"name":"武兰兰"},{"label":"吴奇峰","id":22,"name":"吴奇峰"},{"label":"佟丽娅","id":23,"name":"佟丽娅"},{"label":"唐嫣嫣","id":24,"name":"唐嫣嫣"}];
var linkArr = [{"source":1,"target":2,"value":"同伙"},{"source":3,"target":4,"value":"同伙"},{"source":5,"target":6,"value":"同伙"},{"source":3,"target":7,"value":"离异"},{"source":8,"target":9,"value":"同伙"},{"source":3,"target":9,"value":"表亲"},{"source":10,"target":11,"value":"同伙"},{"source":12,"target":11,"value":"同伙"},{"source":13,"target":14,"value":"同伙"},{"source":15,"target":16,"value":"同伙"},{"source":17,"target":16,"value":"同犯"},{"source":18,"target":16,"value":"同犯"},{"source":19,"target":20,"value":"同犯"},{"source":21,"target":20,"value":"同伙"},{"source":8,"target":22,"value":"同伙"},{"source":23,"target":22,"value":"养母"},{"source":3,"target":24,"value":"邻居"},{"source":8,"target":25,"value":"同伙"}];

var option = {
    title: {
        text: ''
    },
    tooltip: {
        show: false
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true, //当鼠标移动到节点上，突出显示节点以及节点的边和邻接节点
            roam: true, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            itemStyle: {
                normal: {
                    color: 'skyblue',
                }
            },
            force: {
                repulsion: 500,
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            categories: [{
                name: 'boss'
            }, {
                name: '大老板'
            }, {
                name: '小老板'
            }],
            data: noteArr,
            links: linkArr,
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};
 myChart.on('click', function (param) {
    console.log("param.dataIndex=====", param);
    // console.log("param=====", param.event.offsetX);
    var curOption = myChart.getOption();
    var nodesOption = curOption.series[0].data;
    var linksOption = option.series[0].links;
    // console.log("nodesOption=====", nodesOption);
    for (var i = 0; i < nodesOption.length; i++) {
        if (nodesOption[i].id == param.dataIndex) {
            if (!nodesOption[i].selected) {
                nodesOption[i].itemStyle = {
                    normal: {
                        color: 'pink',
                    }
                }
                nodesOption[i].selected = true;
            } else {
                nodesOption[i].itemStyle = {
                    normal: {
                        color: 'skyblue'
                    }
                }
                nodesOption[i].selected = false;
            }
        }
    }

    myChart.setOption(curOption);
});