
//字符串截取
var wordLength = (value) => {
    var ret = ""; //拼接加\n返回的类目项
    var maxLength = 4; //每项显示文字个数
    var valLength = value.length; //X轴类目项的文字个数
    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
    if (rowN > 1) //如果类目项的文字大于3,
    {
        for (var i = 0; i < rowN; i++) {
            var temp = ""; //每次截取的字符串
            var start = i * maxLength; //开始截取的位置
            var end = start + maxLength; //结束截取的位置
            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
            temp = value.substring(start, end) + "\n";
            ret += temp; //凭借最终的字符串
        }
        return ret;
    } else {
        return value;
    }
}
//
var data = [{
        name: "生产矿井",
        value: "5"
    },
    {
        name: "新建矿井",
        value: "4"
    },
    {
        name: "停产矿井",
        value: "6"
    }

];
//偏移量
var offsetData = [
    [80, 53],
    [35, 73],
    [30, 33]
];
//symbolSize 散点气泡大小
var symbolSizeData = [200, 185, 175];
//
//循环定义series的data值
var datas = [];
for (var i = 0; i < data.length; i++) {
    var item = data[i];
    //var itemToStyle = datalist[i];

    datas.push({
        name: wordLength(item.name) + "\n" + item.value + "座",
        value: offsetData[i],
        symbolSize: symbolSizeData[i],
        label: {
            normal: {
                textStyle: {
                    fontSize: 14
                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [{
                        offset: 0,
                        color: "#409eff"
                    },
                    {
                        offset: 1,
                        color: "rgba(1,98,156,0.6)"
                    }
                ]),
                opacity: 0.8,
                shadowColor: '#409eff',
                shadowBlur: 10,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
            },

        }
    });
}

var option = {
    //   backgroundColor: "transparent",
    backgroundColor: '#EDF5FF',
    grid: {
        show: false,
        top: 10,
        bottom: 10
    },
    xAxis: [{
        gridIndex: 0,
        type: "value",
        show: false,
        min: 0,
        max: 100,
        nameLocation: "middle",
        nameGap: 5
    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: "middle",
        nameGap: 30
    }],

    series: [{
        type: "scatter",
        symbol: "circle",
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: "{b}",
                color: "#fff",
                textStyle: {
                    fontSize: "20"
                }
            }
        },

        itemStyle: {
            normal: {
                color: "#00acea"
            }
        },
        data: datas
    }]
};