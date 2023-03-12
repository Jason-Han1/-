var uploadedDataURL = "/asset/get/s/data-1557709659697-ZFG1DlAzV.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(item) {
    myChart.hideLoading();
    var globalSeriesData = []; //用来存放被收起的某节点的子节点
    var seriesData = item.nodes;
    var seriesLinks = item.links;
    var seriesCategories = item.categories;
    
    for (var node = 0; node < seriesData.length; node++) {
        if (seriesData[node].name == "淮阴工学院") {
            seriesData[node].fixed = "true";
        }
    }
    for (var i = 0; i < seriesLinks.length; i++) {
        if (!((seriesLinks[i].target).indexOf("淮阴工学院") > -1 || (seriesLinks[i].source).indexOf("淮阴工学院") > -1)) {
            index = i;
            seriesLinks.splice(index, 1);
        }
    }

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
            animation: false,
            symbolSize: 13,
            force: {
                initLayout: 'circular',
                repulsion: 250,
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
                    fontSize: 15,
                    fontStyle: '100',
                }
            },
            height: 3,
            lineStyle: {
                normal: {
                    width: 2,
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
                            color: 'black' // 100% 处的颜色blue
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
                if (seriesData[i].category == params.data.category) {
                    console.log(seriesData[i])
                    if (params.data.name != seriesData[i].name) { //排除删除根元素的可能
                        deletedFlag = true;
                        //for (var ii = seriesData.length - 1; ii >= 0; ii--) { //删除第一级节点的子节点
                        //        if(seriesData[ii].category==seriesData[i].category){

                        //        }
                        //    }
                        globalSeriesData.push(seriesData[i]);
                        seriesData.splice(i, 1);
                    }
                }
            }
            if (!deletedFlag) {
                var nodeChildren = [];
                console.log(globalSeriesData)
                for (var n = globalSeriesData.length - 1; n >= 0; n--) {
                    if (params.data.category == globalSeriesData[n].category) {
                        seriesData.push(globalSeriesData[n]);
                        nodeChildren.push(globalSeriesData[n]);
                    }
                }
                if (nodeChildren.length > 0) {
                    for (var s = 0; s < nodeChildren.length - 1; s++) {
                        for (var n = globalSeriesData.length - 1; n >= 0; n--) {
                            if (nodeChildren[s].category == globalSeriesData[n].category) {
                                globalSeriesData.splice(n, 1);
                            }
                        }
                    }
                }
            }

            myChart.setOption(option);
        }
    });
});