var data = [{
        name: "虚构" + 3,
        value: 50,
        textStyle: {
            color: "#fff"
        },
        children: [{
                value: 4,
                name: "111",
                // 每个子类别 可以单独设置颜色
                itemStyle: {
                    color: "#EA5151"
                }
            },
            {
                value: 6,
                name: "111"
            },
            {
                value: 4,
                name: "111"
            },
            {
                value: 6,
                name: "111"
            },
            {
                value: 4,
                name: "111"
            },
            {
                value: 6,
                name: "111"
            },
            {
                value: 4,
                name: "111"
            },
            {
                value: 6,
                name: "111"
            },
            {
                value: 4,
                name: "111"
            },
            {
                value: 6,
                name: "111"
            }
        ]
    },
    {
        name: "非虚构",
        value: 10,
        children: [{
                value: 4,
                name: "111"
            },
            {
                value: 6,
                name: "111"
            }
        ]
    }
];
option = {
    backgroundColor: "#161627",
    tooltip: {
        show: true,
        formatter: function(item) {
            console.log(item);
            return `${item.name}:${item.value}`;
        }
    },
    color: ["#FFAE57", "#FF7853", "#EA5151", "#CC3F57", "#9A2555"],
    series: [{
        type: "sunburst",
        nodeClick: false, //是否允许旭日图点击 默认可以点击
        center: ["50%", "48%"],
        data: data,
        // 占据的位置 文字设置
        label: {
            rotate: "radial",
            color: "#fff",
            fontSize: 14
        },
        // 旭日图的分割线
        itemStyle: {
            borderColor: "#161627",
            borderWidth: 5
        },
        levels: [
            // 这里是设置 每一层的样式，层级低于单独在data里面的
            // 第一个空数据是 占据下钻的位置
            {},
            // 设置第一层为环形
            {
            r0: "10%",
            r: "40%"
        }]
    }]
};