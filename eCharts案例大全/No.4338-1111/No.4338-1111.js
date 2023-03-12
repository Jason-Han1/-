let circularGraph = {
    head: true,
    tuglie: ["校督导-在职", "院督导", "辅导员", "教师"],
    data: [{
            name: "校督导-在职",
            value: 29313,
        },
        {
            name: "院督导",
            value: 68397,
        },
        {
            name: "辅导员",
            value: 39084,
        },
        {
            name: "教师",
            value: 58626,
        },
    ],
    sum: {
        name: ['总计'],
        number: 0,
    },
    color: ["#3aa0ff", "#36cbcb", "#4dcb73", "#975fe4"],
}
let sum = 0;
circularGraph.data.map((item) => {
    sum += item.value;
})
circularGraph.sum.number = sum;
option = {
    title: {
        left: "center",
        show: circularGraph.head //是否显示标题组件
    },
    tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)"
    },
    
    graphic: {
        type: "text",
        left: "center",
        top: "center",
        style: {
            text: circularGraph.sum.name + //圆饼中心显示数据，这里是显示得总数
                "\n" +
                String(circularGraph.sum.number).replace(
                    /(\d)(?=(?:\d{6})+$)/g,
                    "$1."
                ),
            textAlign: "center",
            fill: "#000",
            width: 30,
            height: 30,
            fontSize: 24,
            fontWeight:600
        }
    },
    series: [{
        type: "pie",
        radius: ["50%", "70%"],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    textStyle: {
                        color: "#3c4858",
                        fontSize: "14"
                    },
                    formatter: function(val) {
                        //让series 中的文字进行换行
                        return val.name + "：" + val.percent + "%";
                    },
                },
                labelLine: {
                    show: true,
                    lineStyle: {
                        color: "#3c4858"
                    }
                },
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
                textColor: "#000"
            }
        },
        data: circularGraph.data //数据
    }],
    color: circularGraph.color //颜
};