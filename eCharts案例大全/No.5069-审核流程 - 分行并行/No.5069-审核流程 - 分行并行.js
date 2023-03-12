option = {
    title: {
        text: "审核流程 ",
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [{
        type: "graph",
        layout: "none",
        symbolSize: 50,
        roam: true,
        label: {
            show: true,
        },
        edgeSymbol: ["circle", "arrow"],
        edgeSymbolSize: [4, 8],
        edgeLabel: {
            fontSize: 10,
        },
        data: [],
        // links: [],
        links: [],
        lineStyle: {
            color: "#12b5d0",
            opacity: 0.9,
            width: 1,
            curveness: 0,
            type: "dashed",
        },
        // 图形样式
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#157eff",
                    },
                    {
                        offset: 1,
                        color: "#35c2ff",
                    },
                ]),
            },
        },
    }, ],
};
var end = [{
    name: "结束",
    x: 100,
    y: 0,
}, ];
var start = [{
    name: "开始",
    x: 100,
    y: 100,
}, ];
var iList = [];
var eList = [];
var data = [{
        nodeDo: "初审",
        nodeSort: 1,
        nodeTypeName: "并行",
        userRoleName: "副经理",
    },
    {
        nodeDo: "终审",
        nodeSort: 1,
        nodeTypeName: "并行",
        userRoleName: "经理",
    },
    {
        nodeDo: "复审",
        nodeSort: 2,
        nodeTypeName: "分行",
        userRoleName: "主管",
    },
    {
        nodeDo: "终审",
        nodeSort: 3,
        nodeTypeName: "并行",
        userRoleName: "刘副总经理",
    },
    {
        nodeDo: "终审",
        nodeSort: 3,
        nodeTypeName: "并行",
        userRoleName: "张副总经理",
    },
    {
        nodeDo: "终审",
        nodeSort: 3,
        nodeTypeName: "并行",
        userRoleName: "李副总经理",
    },
    {
        nodeDo: "复审",
        nodeSort: 4,
        nodeTypeName: "分行",
        userRoleName: "总经理",
    },
];

function fun_Ilist(i) {
    iList.map((ei) => {
        obj = {
            source: "",
            target: "",
        };
        if (newData[ei].nodeSort === newData[i].nodeSort - 1) {
            obj.source = newData[ei].name;
            obj.target = newData[i].name;
            option.series[0].links = [
                ...option.series[0].links,
                obj,
            ];
        }
    });
}

function fun_Elist(i) {
    eList.map((e) => {
        obj.source = newData[e].name;
        obj.target = newData[i].name;
    });
}
var newData = [...start, ...data, ...end];
for (let i = 0; i < newData.length; i++) {
    for (let key in newData[i]) {
        if (key === "userRoleName") {
            newData[i].name = newData[i][key];
            newData[i].x = 100;
            newData[i].y = 100;
        }
    }
    // 分行 x不变 y加100
    // 并行 x加100 y不变
    var obj = {
        source: "",
        target: "",
    };
    if (i === 0) {
        eList.push(i);
    }
    if (i > 0) {
        if (newData[i].nodeTypeName === "并行" && i == newData[i].nodeSort) {
            iList.push(i);
            newData[i].x = newData[i - 1].x + 100;
            newData[i].y = newData[i].y + 100 * newData[i].nodeSort;
            obj.source = newData[i - 1].name;
            obj.target = newData[i].name;
        } else if (
            newData[i].nodeTypeName === "并行" &&
            newData[i].nodeSort < i
        ) {
            newData[i].x = newData[i - 1].x + 100;
            newData[i].y = newData[i].y + 100 * newData[i].nodeSort;
            fun_Elist(i);
            if (newData[i].nodeSort - 1 === newData[i - 1].nodeSort) {
                obj.source = newData[i - 1].name;
                obj.target = newData[i].name;
            }
            iList.push(i);
        } else if (newData[i].nodeSort) {
            eList.push(i);
            newData[i].x = 100;
            newData[i].y = newData[i].y + 100 * newData[i].nodeSort;
            obj.source = newData[i - 1].name;
            obj.target = newData[i].name;
            if (newData[i].nodeSort - 1 === newData[i - 1].nodeSort) {
                obj.source = newData[i - 1].name;
                obj.target = newData[i].name;
            }
            fun_Ilist(i);
        } else {
            newData[i].x = 100;
            newData[i].y = newData[i].y + 100 * newData[i - 1].nodeSort + 200;
            obj.source = newData[i - 1].name;
            obj.target = newData[i].name;
        }
    }
    option.series[0].links.push(obj);
}
option.series[0].data = newData;