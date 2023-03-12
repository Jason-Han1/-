var uploadedDataURL = "/asset/get/s/data-1495284432107-ry_A52axZ.json";

$.getJSON(uploadedDataURL, function(linedata) {
    var data = linedata[0]
    var links = linedata[1]
    var categories = linedata[2]
    var cont = linedata[3]
    var mid = linedata[4]
    var user1 = linedata[5]
    option = {

        title: {
            text: "微博转发关系图",
            subtext: '@' + user1 + ':' + cont,
            sublink: 'http://m.weibo.cn/status/' + mid,
            top: "top",
            left: "center"
        },

        tooltip: {},

        toolbox: {
            show: true,
            feature: {
                dataView: {
                    show: true,
                    readOnly: true
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: '微博',
            type: 'graph',
            layout: 'force',

            force: {
                //initLayout:'circular'
                edgeLength: 50,
                repulsion: 50,
                gravity: 0.2
            },
            data: data,
            edges: links,
            categories: categories,
            focusNodeAdjacency: true,
            roam: true,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    //color: 'target',
                    curveness: 0
                }
            }
        }]
    };
    myChart.setOption(option)
})