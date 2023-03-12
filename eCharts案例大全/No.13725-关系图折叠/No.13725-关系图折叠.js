var globalSeriesData = []; //用来存放被收起的某节点的子节点
var seriesData = [{
    "name": "1110011",
    "x": 220,
    "y": 1,
    "symbolSize": 20,
    "category": "1110011",
    "value": 16,
    "symbol": "circle",
    "draggable": "true"
}, {
    "name": "1100007",
    "x": 0,
    "y": 0,
    "symbolSize": 18,
    "category": "1110011",
    "value": 1,
    "symbol": "circle",
    "draggable": "true"
}, {
    "x": 0,
    "y": 0,
    "name": "1100008",
    "symbolSize": 12,
    "category": "1100007",
    "value": 1,
    "symbol": "circle",
    "draggable": "true"
}, {
    "name": "1110018",
    "x": 0,
    "y": 0,
    "symbolSize": 18,
    "category": "1110011",
    "value": 5,
    "symbol": "circle",
    "draggable": "true"
}, {
    "x": 0,
    "y": 0,
    "name": "1110016",
    "symbolSize": 12,
    "category": "1110018",
    "value": 1,
    "symbol": "circle",
    "draggable": "true"
}, {
    "x": 0,
    "y": 0,
    "name": "1110099",
    "symbolSize": 8,
    "category": "1110016",
    "value": 1,
    "symbol": "circle",
    "draggable": "true"
}, {
    "x": 0,
    "y": 0,
    "name": "1110075",
    "symbolSize": 12,
    "category": "1110018",
    "value": 1,
    "symbol": "circle",
    "draggable": "true"
}, {
    "x": 0,
    "y": 0,
    "name": "1110070",
    "symbolSize": 8,
    "category": "1110075",
    "value": 1,
    "symbol": "circle",
    "draggable": "true"
}, {
    "name": "1110013",
    "x": 0,
    "y": 0,
    "symbolSize": 18,
    "category": "1110011",
    "value": 3,
    "symbol": "circle",
    "draggable": "true"
}, {
    "x": 0,
    "y": 0,
    "name": "1110089",
    "symbolSize": 12,
    "category": "1110013",
    "value": 2,
    "symbol": "circle",
    "draggable": "true"
}, {
    "x": 0,
    "y": 0,
    "name": "1110090",
    "symbolSize": 8,
    "category": "1110089",
    "value": 2,
    "symbol": "circle",
    "draggable": "true"
}, {
    "name": "1110012",
    "x": 0,
    "y": 0,
    "symbolSize": 18,
    "category": "1110011",
    "value": 1,
    "symbol": "circle",
    "draggable": "true"
}, {
    "x": 0,
    "y": 0,
    "name": "1110076",
    "symbolSize": 12,
    "category": "1110012",
    "value": 1,
    "symbol": "circle",
    "draggable": "true"
}, {
    "name": "1110088",
    "x": 0,
    "y": 0,
    "symbolSize": 18,
    "category": "1110011",
    "value": 1,
    "symbol": "circle",
    "draggable": "true"
}];

var seriesLinks = [{

    "source": "1110011",
    "target": "1100007"
}, {
    "source": "1100007",
    "target": "1100008"
}, {
    "source": "1100008",
    "target": "1100009"
}, {
    "source": "1110011",
    "target": "1110018"
}, {
    "source": "1110018",
    "target": "1110016"
}, {
    "source": "1110016",
    "target": "1110099"
}, {
    "source": "1110018",
    "target": "1110075"
}, {
    "source": "1110075",
    "target": "1110070"
}, {
    "source": "1110075",
    "target": "1110003"
}, {
    "source": "1110011",
    "target": "1110013"
}, {
    "source": "1110013",
    "target": "1110089"
}, {
    "source": "1110089",
    "target": "1110090"
}, {
    "source": "1110011",
    "target": "1110012"
}, {
    "source": "1110012",
    "target": "1110076"
}, {
    "source": "1110076",
    "target": "1110004"
}, {
    "source": "1110011",
    "target": "1110088"
}];
var seriesCategories = [{
    "name": "1110011"
}, {
    "name": "1100007"
}, {
    "name": "1110018"
}, {
    "name": "1110013"
}, {
    "name": "1110012"
}, {
    "name": "1110088"
}, {
    "name": "1100008"
}, {
    "name": "1110016"
}, {
    "name": "1110076"
}, {
    "name": "1110089"
}, {
    "name": "1110075"
}, {
    "name": "1100009"
}, {
    "name": "1110099"
}, {
    "name": "1110070"
}, {
    "name": "1110003"
}, {
    "name": "1110004"
}, {
    "name": "1110090"
}];


var option = {
    title: {
        text: 'title',
        bottom: "bottom",
        left: "center",
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {
        formatter: '{b}'
    },
    toolbox: {
        show: true,
        feature: {
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        right: 15
    },
    //backgroundColor: '#000000',
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        //name: '', //用于tooltip的显示
        type: 'graph',
        layout: 'force',
        force: {
            initLayout: 'circular',
            repulsion: 50,
            gravity: 0.1,
            edgeLength: 0.01,
            layoutAnimation: true,
        },
        data: seriesData,
        links: seriesLinks,
        categories: seriesCategories,
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'top', //inside
                formatter: '{b}',
                fontSize: 16,
                fontStyle: '100',
            }
        },
        height: 3,
        lineStyle: {
            normal: {
                width: 3,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'white' // 0% 处的颜色red
                    }, {
                        offset: 1,
                        color: 'green' // 100% 处的颜色blue
                    }]
                },
                curveness: 0,
                type: "solid"
            }
        }
    }]
};


myChart.setOption(option);


//点击隐藏节点实现,定义数组globalSeriesData用来存储被隐藏的节点的子节点
myChart.on('click', function(params) {
    if (params.dataType === "node") {
        var deletedFlag = false; // 标记点击的此节点是否存在子节点,若不存在则说明可能在上次的操作中已经删除,这时就需要尝试把之前删除的节点重新添加进去
        for (var i = seriesData.length - 1; i >= 0; i--) {
            if (seriesData[i].category == params.name) {
                if (seriesData[i].category != seriesData[i].name) { //排除删除根元素的可能
                    deletedFlag = true;
                    for (var ii = seriesData.length - 1; ii >= 0; ii--) { //删除第一级节点的子节点
                        if (seriesData[ii].category == seriesData[i].name) {
                            for (var iii = seriesData.length - 1; iii >= 0; iii--) { //删除第二级节点的子节点
                                if (seriesData[iii].category == seriesData[ii].name) {
                                    globalSeriesData.push(seriesData[iii]);
                                    seriesData.splice(iii, 1);
                                }
                            }
                            globalSeriesData.push(seriesData[ii]);
                            seriesData.splice(ii, 1);
                        }
                    }
                    globalSeriesData.push(seriesData[i]);
                    seriesData.splice(i, 1); //删除该元素的第一级子节点,最多需删除三级
                }
            }
        }
        if (!deletedFlag) { //这种情况下需要恢复该节点的子节点
            var nodeChildren = []; //存放本次恢复的数据,然后将它们从globalSeriesData中删除
            for (var n = globalSeriesData.length - 1; n >= 0; n--) {
                if (params.name == globalSeriesData[n].category) { //显示该节点第一级子节点
                    seriesData.push(globalSeriesData[n]);
                    nodeChildren.push(globalSeriesData[n]);
                    for (var nn = globalSeriesData.length - 1; nn >= 0; nn--) {
                        if (globalSeriesData[n].name == globalSeriesData[nn].category) { //显示该节点第二级子节点
                            seriesData.push(globalSeriesData[nn]);
                            nodeChildren.push(globalSeriesData[nn]);
                            for (var nnn = globalSeriesData.length - 1; nnn >= 0; nnn--) {
                                if (globalSeriesData[nn].name == globalSeriesData[nnn].category) { //显示该节点第三级子节点
                                    seriesData.push(globalSeriesData[nnn]);
                                    nodeChildren.push(globalSeriesData[nnn]);
                                }
                            }
                        }
                    }
                }
            }
            if (nodeChildren.length > 0) {
                for (var s = 0; s < nodeChildren.length; s++) {
                    for (var n = globalSeriesData.length - 1; n >= 0; n--) {
                        if (nodeChildren[s].name == globalSeriesData[n].name) {
                            globalSeriesData.splice(n, 1);
                        }
                    }
                }
            }
        }


        myChart.setOption(option);
    }
});