option = {
    legend: {
        itemWidth: 15, //图例的宽度
        itemHeight: 15, //图例的高度
        itemGap: 25,
        orient: "vertical",
        right: "10",
        top: "center",
        icon: "rect",
        selectedMode: false, //取消图例上的点击事件
        // data: ["4~18岁", "18<X≤80岁", ">80岁"]
        data: ["4~18岁", "18<X≤80岁", ">80岁"]
    },
    color: ["#33C6F7", "#FFA700", "#FF9090"], //扇形区域以及列表颜色
    graphic: [{
            type: "text",
            left: "center",
            top: "43%",
            style: {
                fill: "#686868",
                text: "总患者数"
            }
        },
        {
            type: "text",
            left: "center",
            top: "53%",
            z: 10,
            style: {
                text: "3231",
                font: "30px Microsoft YaHei"
            }
        }
    ],
    series: [{
        type: "pie",
        radius: ["40%", "60%"], //两个表示环：内半径,外半径
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 20//延长线的长度
            }
        },
        label: {
            normal: {
                // formatter: '{d}%, {c} \n\n',
                //模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。
                formatter: "{per|{d}%} , {c_set|{c}}\n{hr|}\n{a_set|{b}}",
                padding: [0, -10],
                rich: {
                    a_set: {
                        color: "#999",
                        lineHeight: 20,
                        align: "center"
                    },
                    hr: {
                        //设置hr是为了让中间线能够自适应长度
                        borderColor: "auto",
                        width: "105%",
                        borderWidth: 0.5,
                        height: 0.5
                    },
                    per: {
                        padding: [4, 0]
                    }
                }
            }
        },
        data: [
            {
                value: 311,
                name: "4~18岁",
                selected:true
            },
            {
                value: 1311,
                name: "18<X≤80岁"
            },
            {
                value: 9112,
                name: ">80岁"
            }
        ]
    }]
}