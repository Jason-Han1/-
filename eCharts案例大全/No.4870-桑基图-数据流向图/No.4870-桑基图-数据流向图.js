    let datalist = [{
            name: "系统11"
        },
        {
            name: "系统22"
        },
        {
            name: "系统33"
        },
        {
            name: "系统44"
        },
        {
            name: "系统55"
        },
        {
            name: "系统66"
        },
        {
            name: "系统77"
        },
        {
            name: "系统88"
        },
        {
            name: "系统99"
        },
        {
            name: "公共平台"
        },
        {
            name: "系统0000"
        },
        {
            name: "系统0011"
        },
        {
            name: "系统0022"
        },
        {
            name: "系统0033"
        },
        {
            name: "系统0044"
        },
        {
            name: "系统0055"
        }
    ];
    let linksData = [{
            source: "系统11",
            target: "公共平台",
            value: 645246
        },
        {
            source: "系统22",
            target: "公共平台",
            value: 513275
        },
        {
            source: "系统33",
            target: "公共平台",
            value: 282986
        },
        {
            source: "系统44",
            target: "公共平台",
            value: 118655
        },
        {
            source: "系统55",
            target: "公共平台",
            value: 105989
        },
        {
            source: "系统66",
            target: "公共平台",
            value: 95100
        },
        {
            source: "系统77",
            target: "公共平台",
            value: 87796
        },
        {
            source: "系统88",
            target: "公共平台",
            value: 47658
        },
        {
            source: "系统99",
            target: "公共平台",
            value: 24366
        },
        {
            source: "公共平台",
            target: "系统00",
            value: 1044305
        },
        {
            source: "公共平台",
            target: "系统0011",
            value: 651527
        },
        {
            source: "公共平台",
            target: "系统0022",
            value: 651527
        },
        {
            source: "公共平台",
            target: "系统0033",
            value: 48671
        },
        {
            source: "公共平台",
            target: "系统0044",
            value: 21267
        },
        {
            source: "公共平台",
            target: "系统0055",
            value: 21040
        }
    ];
    let Color = [
        "#4E70F0",
        "#2cb8cf",
        "#54c189",
        "#f5d523",
        "#2cb8cf",
        "#f5b823",
        "#8f23f5",
        "#0576ea",
        "#2cb8cf",
        "#8A7EE0",
        "#2cb8cf",
        "#4e70f0",
        "#1fa3de",
        "#bbc951",
        "#FFC14B",
        "#b785a6",

    ];
    let sourceLabel = [
        "right",
        "right",
        "right",
        "right",
        "right",
        "right",
        "right",
        "right",
        "right",
        "right",
        "left",
        "left",
        "left",
        "left",
        "left",
        "left"
    ];
    let itemStyleColor = [];
    let labelSource = [];
    for (let i = 0; i < datalist.length; i++) {
        datalist[i].label = {
            normal: {
                position: sourceLabel[i]
            }
        };
        labelSource.push(sourceLabel[i]);
    }
    for (let d = 0; d < datalist.length; d++) {
        datalist[d].itemStyle = {
            normal: {
                color: Color[d]
            }
        };
        itemStyleColor.push(datalist[d]);
    }
    option = {
        backgroundColor: "#031d7a",
        tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
            formatter: function(params) {
                if (params.name == "公共平台") {
                    return " 公共平台 "
                } else {
                    let value = params.data.value;
                    if (!value && value !== 0) return 0;
                    let str = value.toString();
                    let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
                    if (params.data.source == "公共平台") {
                        return params.data.target + " : " + str.replace(reg, "$1,");
                    } else {
                        return params.data.source + " : " + str.replace(reg, "$1,");
                    }
                }
            }
        },
        series: [{
            type: "sankey",
            layout: "none",
            top: "4%",
            bottom: "12%",
            left: "20",
            right: "20",
            nodeGap: 15,
            nodeWidth: 25,
            focusNodeAdjacency: "allEdges",
            data: itemStyleColor,
            links: linksData,
            label: {
                normal: {
                    color: "#fff",
                    fontSize: 14,
                    formatter: function(params) {
                        if (params.data.name == '公共平台') {
                            let strs = params.data.name.split(''); //字符串数组
                            let str = ''
                            for (let i = 0, s; s = strs[i++];) { //遍历字符串数组
                                str += s;
                                if (!(i % 1)) str += '\n'; //按需要求余
                            }
                            return "{white|" + str + "}"
                        } else {
                            return params.data.name
                        }
                    },
                    rich: {
                        white: {
                            fontSize: 16,
                            lineHeight: 30,
                            padding: [0, 0, 0, -26]
                        }
                    }
                }
            },
            lineStyle: {
                normal: {
                    opacity: 0.4,
                    color: "source",
                    curveness: 0.5
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: "transparent"
                }
            }
        }]
    };