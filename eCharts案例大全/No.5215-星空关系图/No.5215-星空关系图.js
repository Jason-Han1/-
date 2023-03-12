var uploadedLinkURL = "/asset/get/s/data-1604478378485-VVIZIAT-T.json";
var uploadedNodeURL = "/asset/get/s/data-1604478301534-V9GUxvkB8.json";

var fontSize = (val) => {
    return val
}
var posX = (n) => {
    let res = 0
    switch (n) {
        case "d":
            res = 30 + Math.random() * 80;
            break;
        case "b":
            res = 50 + Math.random() * 50;
            break;
        case "a":
            res = 70 + Math.random() * 50;
            break;
        case "e":
            res = 20 + Math.random() * 50;
            break;
        case "c":
            res = 80 + Math.random() * 50;
            break;
    }
    return res
}
var posY = (n) => {
    let res = 0
    switch (n) {
        case "d":
            res = 50 + Math.random() * 50;
            break;
        case "b":
            res = 40 + Math.random() * 50;
            break;
        case "a":
            res = 60 + Math.random() * 50;
            break;
        case "e":
            res = 60 + Math.random() * 50;
            break;
        case "c":
            res = 35 + Math.random() * 50;
            break;
    }
    return res
}
var color = (n) => {
    switch (n) {
        case "d":
            return {
                type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(212,130,101,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(212,130,101,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
            }
            break;
        case "b":
            return {
                type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(202,134,34,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(202,134,34,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
            }
            break;
        case "a":
            return {
                type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(194,53,49,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(194,53,49,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
            }
            break;
        case "e":
            return {
                type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(97,160,168,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(97,160,168,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
            }
            break;
        case "c":
            return {
                type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(110,112,116,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(110,112,116,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
            }
            break;
    }
}



$.getJSON(uploadedNodeURL, (knowledgeGraphNodes) => {
    $.getJSON(uploadedLinkURL, (knowledgeGraphLinks) => {
        var text = "<div id='fullChart' style='position:fixed;top:0;bottom:0;left:0;right:0;display:none;'></div>"
        $('body').append(text)
        var fullFlag = false
        var showFullScreen = (option) => {
            let dom = document.getElementById("fullChart")
            if (fullFlag) {
                dom.style.display = 'none'
                fullFlag = false
            } else {
                dom.style.display = 'block'
                fullFlag = true
                let nodes = knowledgeGraphNodes.map((item) => {
                    return {
                        name: item.name,
                        value: item.num,
                        symbolSize: fontSize(item.num * 15),
                        category: item.category,
                        itemStyle: {
                            color: color(item.category)
                        },
                        label: {
                            color: item.category != "d" ? "#ffffff" : "#d48265"
                        },
                        x: posX(item.category),
                        y: posY(item.category),
                    }
                })
                option.series[0].data = nodes
                option.series[0].width = "100%"
                option.series[0].height = "120%"
                option.series[0].left = "10%"
                option.series[0].bottom = "5%"
                let fullChart = echarts.init(dom)
                fullChart.setOption(option)
            }
        }
        let colorArr = [
            "#c23531",
            "#ca8622",
            "#6e7074",
            "#d48265",
            "#61a0a8",
        ]
        let categories = [{
            name: "a"
        }, {
            name: "b"
        }, {
            name: "c"
        }, {
            name: "d"
        }, {
            name: "e"
        }]
        let nodes = knowledgeGraphNodes.map((item) => {
            return {
                name: item.name,
                value: item.num,
                symbolSize: fontSize(item.num * 7),
                category: item.category,
                itemStyle: {
                    color: color(item.category)
                },
                label: {
                    color: item.category != "d" ? "#ffffff" : "#d48265"
                },
                x: posX(item.category),
                y: posY(item.category),
            }
        })
        let links = knowledgeGraphLinks.map((item) => {
            return {
                source: item.source,
                target: item.target,
                value: item.num
            }
        })
        let option = {
            backgroundColor: '#012248',
            color: colorArr,
            tooltip: {
                show: false
            },
            toolbox: {
                show: true,
                itemSize: fontSize(30),
                feature: {
                    myFull: {
                        show: true,
                        title: '查看',
                        icon: "path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",
                        onclick: (e) => {
                            showFullScreen(e.getOption())
                        },
                    }
                }
            },
            legend: [{
                // selectedMode: 'single',
                icon: 'circle',
                itemWidth: fontSize(15),
                itemHeight: fontSize(15),
                itemGap: fontSize(10),
                textStyle: {
                    color: "#ffffff",
                    fontSize: fontSize(15),
                },
                data: categories.map((a) => {
                    return a.name;
                })
            }],
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                name: 'KnowledgeGraph',
                type: 'graph',
                layout: 'none',
                // layout: 'force',
                // force: {
                //   repulsion: fontSize(20),
                //   gravity: 1,
                //   edgeLength: fontSize(30),
                // },
                data: nodes,
                links: links,
                categories: categories,
                // roam: true,//拖动
                focusNodeAdjacency: true,
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: fontSize(0),
                        // shadowBlur: fontSize(2),
                        // shadowColor: 'rgba(145,142,39,0.5)',
                        // opacity:0.6,
                    }
                },
                lineStyle: {
                    color: 'rgba(13,28,74,0.3)',
                    // color:'target',
                    curveness: 0.3,
                },
                emphasis: {
                    lineStyle: {
                        width: 1,
                        color: '#d48265',
                    }
                },
                label: {
                    show: false,
                    position: 'right',
                    formatter: '{b}'
                },
                edgeLabel: {
                    show: false,
                },
                width: "80%",
                height: "70%"
            }]
        }
        myChart.setOption(option)
    })
})