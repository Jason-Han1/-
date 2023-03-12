var colors = [
    "#3CB371",
    "#3CB371",
    "#3CB371",
    "#FFA500",
    "#DC143C"
]
var getdata = function getData() {
    let data = {
        name: "升压站",
        value: 0,
        children: []
    };
    for (let i = 1; i <= 50; i++) {
        let obj = {
            name: i + "#箱变",
            value: i,
            children: [],
        };
        for (let j = 1; j <= 2; j++) {
            let obj2 = {
                name: `逆变器-${i}-${j}`,
                value: 1 + "-" + i + "-" + j,
            };
            if (j % 2 == 1) {
                obj2.children = []
                for (let k = 1; k <= 7; k++) {
                    let obj3 = {
                        name: `汇流箱-${i}-${j}-${k}`,
                        value: 1 + "-" + i + "-" + j + '-' + k,
                    };
                    obj2.children.push(obj3);
                }
            }

            obj.children.push(obj2);
        }

        data.children.push(obj);
    }
    let arr = []
    arr.push(data)
    // 
    arr = handle(arr, 0)
    console.log(arr);
    return arr;
}
var handle = function handleData(data, index, color = '#00f6ff') {
    //index标识第几层
    return data.map((item, index2) => {
        //计算出颜色
        if (index == 1) {
            color = colors.find((item, eq) => eq == index2 % 5);
        }
        // 设置节点大小
        if (index === 0 || index === 1) {
            item.label = {
                position: "inside",
                //   rotate: 0,
                //   borderRadius: "50%",
            }
        }
        // 设置label大小
        switch (index) {
            case 0:
                item.symbolSize = 70
                break;
            case 1:
                item.symbolSize = 20
                break;
            default:
                item.symbolSize = 10
                break;
        }
        // 设置线条颜色
        item.lineStyle = {
            color: color
        }

        if (item.children) { //存在子节点
            item.itemStyle = {
                borderColor: color,
                color: color
            };
            item.children = handle(item.children, index + 1, color)
        } else { //不存在
            item.itemStyle = {
                color: 'transparent',
                borderColor: color
            };
        }
        return item
    })
}

var option = {
    type: "tree",
    backgroundColor: "#000",
    toolbox: { //工具栏
        show: true,
        iconStyle: {
            borderColor: "#03ceda"
        },
        feature: {
            restore: {}
        }
    },
    tooltip: { //提示框
        trigger: "item",
        triggerOn: "mousemove",
        backgroundColor: "rgba(1,70,86,1)",
        borderColor: "rgba(0,246,255,1)",
        borderWidth: 0.5,
        textStyle: {
            fontSize: 10
        }
    },
    series: [{
        type: "tree",
        hoverAnimation: true, //hover样式
        data: getdata(),
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        layout: "radial",
        symbol: "circle",
        symbolSize: 10,
        nodePadding: 20,
        animationDurationUpdate: 750,
        expandAndCollapse: true, //子树折叠和展开的交互，默认打开
        initialTreeDepth: 2,
        roam: true, //是否开启鼠标缩放和平移漫游。scale/move/true
        focusNodeAdjacency: true,
        itemStyle: {
            borderWidth: 1,
        },
        label: { //标签样式
            color: "#fff",
            fontSize: 10,
            fontFamily: "SourceHanSansCN",
            //position: "top",
            //rotate: 0,
        },
        lineStyle: {
            width: 1,
            curveness: 0.5,
        }
    }]
};