    var nodeData = [
        "供应商1",
        "三层",
        "大碗宽面",
        "马山县周鹿镇琴马小学",
        "国油中央厨房",
        "江西小学",
        "学校",
        "广西餐馆",
        "重庆安安",
        "11",
        "huahai",
    ];
    var linkData = [{
            source: "xxx学校",
            target: "三层",
            value: 1
        },
        {
            source: "xxx学校",
            target: "大碗宽面",
            value: 1
        },
        {
            source: "xxx学校",
            target: "马山县周鹿镇琴马小学",
            value: 1
        },
        {
            source: "xxx学校",
            target: "国油中央厨房",
            value: 1
        },
        {
            source: "xxx学校",
            target: "江西小学",
            value: 1
        },
        {
            source: "学校",
            target: "三层",
            value: 1
        },
        {
            source: "学校",
            target: "马山县周鹿镇琴马小学",
            value: 1
        },
        {
            source: "学校",
            target: "国油中央厨房",
            value: 1
        },
        {
            source: "学校",
            target: "江西小学",
            value: 1
        },
        {
            source: "学校",
            target: "广西餐馆",
            value: 1
        },
        {
            source: "重庆安安",
            target: "三层",
            value: 1
        },
        {
            source: "11",
            target: "大碗宽面",
            value: 1
        },
        {
            source: "huahai",
            target: "马山县周鹿镇琴马小学",
            value: 1
        },
    ];

    var color = [
        "#38D7E8",
        "#365ECA",
        "#06EC31",
        "#FFA41F",
        "#79c628",
        "#6c93ee",
        "#4C98FB",
        "#83CCE7",
        "#26C7C8",
        "#73DEBD",
        "#26C978",
        "#8CDF6C",
        "#FBD657",
        "#F56679",
        "#E07BCE",
        "#9D50E0",
        "#634FDA",
    ];
    // node 节点 添加name属性
    nodeData = nodeData.map(function(node) {
        return {
            name: node
        };
    });
    // node 节点 添加 样式 颜色
    nodeData.forEach((v, i) => {
        v.itemStyle = {
            color: color[i + 2], //配送点颜色
        };
    });
    // link 关系添加样式 颜色
    linkData.forEach((val, j) => {
        val.lineStyle = {
            color: color[j],
        };
    });

    var option = {
        backgroundColor: "#",
        tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
            textStyle: {
                fontSize: 12,
            },
            extraCssText: "width:200px;height:30px",
            formatter: function(o) {
                if (o.dataType !== "edge") {
                    return "";
                }
                return o.data.source + " - " + o.data.target;
            },
        },
        grid: {
            containLabel: true,
            left: "5%",
            right: "5%",
            bottom: "10%",
            top: "15%",
        },
        series: [{
            type: "sankey",
            orient: "vertical", //旋转
            data: nodeData,
            links: linkData,
            top: "10%",
            right: "10%",
            bottom: "5%",
            nodeWidth: 5, // 宽度
            nodeGap: 5, // 相隔间距
            focusNodeAdjacency: "allEdges",
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: "#fff",
                    opacity: 1,
                    fontSize: 12,
                },
            },
            label: {
                normal: {
                    align: "center",
                    padding: [-16, 0, 0, -50], //移动字体位置
                    fontSize: 12,
                    color: "#fff",
                },
            },
            lineStyle: {
                normal: {
                    curveness: 0.5,
                    opacity: 0.5,
                },
            },
        }, ],
    };