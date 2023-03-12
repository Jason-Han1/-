// 中国地图 散点分布 点击散点触发 自定义样式的 tooltip
// 借鉴 https://gallery.echartsjs.com/editor.html?c=xnmZ5X4gCz

// 散点数据
var data = [{
        name: "景山公园",
        value: ["116.489356", "39.94083"],
        id: 4,
        code: "110000Z0004",
        type: "Z",
        date: "2019-10-01",
        city: "北京市"
    },
    {
        name: "老城动物园",
        value: ["113.489356", "36.94083"],
        id: 3,
        code: "110000D0003",
        type: "D",
        date: "2019-10-16",
        city: "山西省",
    },
    {
        name: "新城植物园",
        value: ["114.489356", "37.94083"],
        id: 2,
        code: "110000D0002",
        type: "Z",
        date: "2019-10-21",
        city: "河北省",
    }
]
option = {
    backgroundColor: "#efefef",
    tooltip: {
        show: true,
        triggerOn: "none",
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: "#000",
            decoration: "none"
        },
        formatter: function(params) {
            const {
                data
            } = params;
            const type = data.type;
            let typeName = "";
            if (type === "D") typeName = "动物园";
            if (type === "Z") typeName = "植物园";
            if (type === "S") typeName = "水族馆";
            if (type === "B") typeName = "濒危动物繁殖中心";
            if (type === "Y") typeName = "种质资源";
            if (type === "Q") typeName = "其它";
            const tipHtml = ` <div style="width: 280px; background: rgba(22, 80, 158, 0.8); border: 1px solid rgba(7, 166, 255, 0.7);">
                                <div style="color: #fff; padding: 10px; font-size: 16px; border-bottom: 2px solid #0c8bdd;">${data.name} (${data.code})</div>
                                <p style="color: #fff;padding: 5px 10px;font-size: 14px;">建设位置：${data.city}</p>
                                <p style="color: #fff;padding: 5px 10px;font-size: 14px;">建设时间：${data.date}</p>
                                <p style="color: #fff;padding: 5px 10px;font-size: 14px;">设施类型：${typeName}</p>
                              </div>`;
            return tipHtml;
        }
    },
    geo: {
        show: true,
        map: "china",
        label: {
            normal: {
                show: true,
                color: "#fff"
            },
            emphasis: {
                color: "#000000",
                fontSize: 14,
                show: true
            }
        },
        roam: true,
        scaleLimit: {
            min: 1.2,
            max: 15
        },
        zoom: 1.2,
        itemStyle: {
            normal: {
                borderWidth: 1, // 区域边框宽度
                borderColor: "#029fd4", // 区域边框颜色
                areaColor: "#2F639A" // 区域颜色
            },
            emphasis: {
                areaColor: "#2F639A"
            }
        }
    },
    series: [{
        name: "",
        type: "scatter",
        coordinateSystem: "geo",
        data: data,
        symbol: "pin",
        symbolSize: 30,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: "#33C481"
            },
            emphasis: {
                color: "#f00"
            }
        }
    }]
};
myChart.on("click", params => {
    if (params.componentType === "series" && params.componentSubType === "scatter") {
        const index = params.dataIndex;
        // 取消所有散点高亮
        myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0 //第几条series
        });
        // 显示指定data 的tooltip
        myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0, //第几条series
            dataIndex: index //第几个tooltip
        });
        // 高亮指定的散点
        myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0, //第几条series
            dataIndex: index //第几个tooltip
        });
    }
});