let colorList = [
    "#5a91fb",
    "#5ad9a7",
    "#f7bd16",
    "#6ec9eb",
    "#955eb9",
    "#ff9944",
    "#1e9593",
    "#ff99c3",
    "#e86452",
]

let seriesData = [{
        name: "保护工程",
        value: 2,
    },
    {
        name: "展示工程",
        value: 1,
    },
]

let keepWordNum = 2 // 每几个字换行
option = {
    title: {},
    color: colorList,
    tooltip: {
        trigger: "item",
        formatter: "{b} : {c}<br/> ({d}%)",
    },
    calculable: true,
    series: [{
            name: "测试集",
            type: "pie",
            hoverAnimation: false,
            selectedMode: "single",
            radius: "70%",
            label: {
                normal: {
                    show: true,
                    position: "inner", //显示在扇形上
                    formatter: "{c}", //显示内容
                    textStyle: {
                        color: "white", // 改变标示文字的颜色
                        fontSize: 12, //文字大小
                        fontWeight: "bold",
                    },
                },
            },
            data: seriesData,
        },
        {
            type: "pie",
            radius: "70%",
            hoverAnimation: false,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 14,
                    },
                    formatter: (param) => {
                        let newStr = "";
                        let start, end;
                        let name_len = param.name.length; //每个内容名称的长度
                        let max_name = keepWordNum; //每行最多显示的字数
                        let new_row = Math.ceil(name_len / max_name); // 最多能显示几行，向上取整比如2.1就是3行
                        if (name_len > max_name) { //如果长度大于每行最多显示的字数
                         for (let i = 0; i < new_row; i++) { //循环次数就是行数
                                let old = ''; //每次截取的字符
                                start = i * max_name; //截取的起点
                                end = start + max_name; //截取的终点
                                if (i == new_row - 1) { //最后一行就不换行了
                                    old = param.name.substring(start);
                                } else {
                                    old = param.name.substring(start, end) + "\n";
                                }
                                newStr += old; //拼接字符串
                            }
                        } else { //如果小于每行最多显示的字数就返回原来的字符串
                            newStr = param.name;
                        }
                        return `${newStr}\n${Math.round(param.percent)}%` 
                    },
                },
            },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 10,
                    smooth: true,
                    lineStyle: {
                        width: 2,
                    },
                },
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: "rgba(0, 0, 0, 0.4)",
                },
            },
            data: seriesData,

        },
    ],
}