var data = [{
    name: '一',
    value: 1
}, {
    name: '二',
    value: 2
}, {
    name: '三',
    value: 3
}, {
    name: '四',
    value: 4
}, {
    name: '五',
    value: 5
}]
let timer = null;
let dataLength = data.length;
let index = 0;
myChart.dispatchAction({
    type: "highlight",
    seriesIndex: 0,
    dataIndex: index,
});

function setInterFun() {
    timer = setInterval(() => {
        myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: index,
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: index == 0 ? dataLength - 1 : index - 1,
        });
        index++;
        if (index > dataLength - 1) {
            index = 0;
        }
    }, 2000);
}
setInterFun();
myChart.on("mouseover", (e) => {
    for (let i = 0; i < dataLength; i++) {
        if (i != e.dataIndex) {
            myChart.dispatchAction({
                type: "downplay",
                seriesIndex: 0,
                dataIndex: i,
            });
        }
    }
    if (e.dataIndex != index) {
        index = e.dataIndex;
        myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: index,
        });
    }
    clearInterval(timer);
});
myChart.on("mouseout", (e) => {
    // timer=null;
    index = e.dataIndex;
    myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e.dataIndex,
    });
    clearInterval(timer);
    if (index + 1 > dataLength - 1) {
        index = 0;
    } else {
        index += 1;
    }
    setInterFun();
});

let sum = 0;
data.map(item => {
    sum += item.value;
})

option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    title: {
        text: "风险评估",
        textStyle: {
            fontSize: "18",
            color: "white",
        },
    },
    series: [{
        name: "风险评估",
        type: "pie",
        radius: ["52%", "70%"],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: "center",
        },
        emphasis: {
            label: {
                show: true,
                formatter: ["{astyle|{d}%}", "{dstyle|{b}}"].join("\n"),
                lineHeight:  20,
                rich: {
                    astyle: {
                        color: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                    },
                    dstyle: {
                        color: "white",
                        fontSize: 20,
                        lineHeight: 30,
                    },
                },
                fontSize: "30",
                fontWeight: "bold",
            },
        },
        labelLine: {
            show: false,
        },
        color: ["#10c4ff", "#49f6a1", "#fbd15f", "#7c83dd", "#e46573"],
        data: data,
    }, ],
};