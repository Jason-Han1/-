var uploadedDataURL = "/asset/get/s/data-1604284283597-1ECMDl8MN.json";

$.get(uploadedDataURL).done(data => {
    var option = {
        type: "tree",
        backgroundColor: "#002770",
        toolbox: {
            show: true,
            iconStyle: {
                borderColor: "#03ceda"
            },
            feature: {
                restore: {}
            }
        },
        tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
            backgroundColor: "rgba(1,70,86,1)",
            borderColor: "rgba(0,246,255,1)",
            borderWidth: 0.5,
            textStyle: {
                fontSize: 10
            },
            formatter: '{b}'
        },
        series: [{
            type: "tree",
            hoverAnimation: true,
            data: getdata(JSON.parse(data)),
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            layout: "radial",
            symbol: "circle",
            symbolSize: 10,
            nodePadding: 20,
            animationDurationUpdate: 750,
            expandAndCollapse: true,
            initialTreeDepth: 1,
            roam: true,
            focusNodeAdjacency: true,
            itemStyle: {
                borderWidth: 1,
            },
            label: {
                color: "#fff",
                fontSize: 10,
                fontFamily: "SourceHanSansCN",
                // position: "top",
                // rotate: 0,
            },
            lineStyle: {
                width: 1,
                curveness: 0.5,
            }
        }]
    };
    myChart.setOption(option);
});

var colors = [
    "#00ADD0",
    "#FFA12F",
    "#B62AFF",
    "#604BFF",
    "#6E35FF",
    "#002AFF",
    "#20C0F4",
    "#95F300",
    "#04FDB8",
    "#AF5AFF"
]

const map = new Map();
map.set('盟住房管理中心', '公积金');
map.set('盟文体旅游广电旅游局', '文旅');
map.set('盟林业和草原局', '林草');

const getdata = (arr) => {
    let data = {
        name: "锡大数据中心",
        value: 0,
        children: []
    };
    const res = arr.reduce((prev, cur, i) => {
        const index = prev.findIndex(_v => _v.name === cur.org);
        if (index > -1) {
            const obj = {
                name: cur.res,
                value: i,
                children: []
            }
            prev[index].children.push(obj);
        } else {
            const obj = {
                name: cur.org,
                value: i,
                children: [{
                    name: cur.res,
                    value: i,
                    children: []
                }]
            }
            prev.push(obj);
        }
        return prev;
    }, []).map(_v => {
        if (map.has(_v.name)) {
            return {
                ..._v,
                name: map.has(_v.name) ? map.get(_v.name) : _v.name
            }
        } else {
            return _v;
        }
    });

    data.children.push(...res)
    let a = []
    a.push(data)
    a = handle(a, 0)
    return a;
}

const handle = (data, index, color = '#00f6ff') => {
    //index标识第几层
    return data.map((item, index2) => {
        //计算出颜色
        if (index == 1) {
            color = colors.find((item, eq) => eq == index2 % 10);
        }
        // 设置节点大小
        if (index === 0 || index === 1) {
            item.label = {
                position: "inside"
            }
        }
        // 设置label大小
        switch (index) {
            case 0:
                item.symbolSize = 100
                break;
            case 1:
                item.symbolSize = 50
                break;
            default:
                item.symbolSize = 10
                break;
        }
        // 设置线条颜色
        item.lineStyle = {
            color: color
        }

        if (item.children) {
            //存在子节点
            item.itemStyle = {
                borderColor: color,
                color: color
            };
            item.children = handle(item.children, index + 1, color)
        } else {
            //不存在
            item.itemStyle = {
                color: 'transparent',
                borderColor: color
            };
        }
        return item
    })
}