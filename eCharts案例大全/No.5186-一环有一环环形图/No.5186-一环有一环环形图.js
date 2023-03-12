// 画圈开始位置
let startAngle = 90;
let series = [];
let datas = {
    datasArr: [{
            name: "A区",
            value: 9
        },
        {
            name: "B区",
            value: 16.5
        },
        {
            name: "C区",
            value: 12
        },
        {
            name: "D区",
            value: 25
        },
        {
            name: "E区",
            value: 61.5
        },
    ]
}
let legend = [];
// 里到外颜色
let colors = ["rgba(49, 164, 255)", "rgba(66, 195, 175,1)", "rgba(249, 224, 21)", "orange", "red", ];
let datasArr = datas.datasArr;
datasArr.forEach(function(item, index) {
    // 图例
    legend.push(item.name);
    // 圈大小
    let radius = [10 + index * 10 + index + '%', 18 + index * 10 + index + '%'];
    // 上面彩色圈
    let upCircle = {
        // name: item.name,
        type: 'pie',
        radius,
        center: ['50%', '50%'],
        z: 2,
        startAngle,
        data: [
            // 占比的一边
            {
                hoverOffset: 1,
                value: item.value,
                name: item.name,
                itemStyle: {
                    color: colors[index],
                },
                label: {
                    normal: {
                        show: false,
                    },
                },
                labelLine: {
                    normal: {
                        smooth: false,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                hoverAnimation: false,
            },
            // 另外一边
            {
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - item.value,
                hoverAnimation: false,
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            }
        ]
    };
    // 下面一圈
    let downCircle = {
        type: 'pie',
        radius,
        center: ['50%', '50%'],
        z: -1,
        data: [{
            hoverOffset: 0,
            value: item.value,
            name: '',
            itemStyle: {
                color: 'rgba(229, 229, 229,1)',
            },
            label: {
                show: false
            },
            tooltip:false,
            labelLine: {
                normal: {
                    smooth: true,
                    lineStyle: {
                        width: 0
                    }
                }
            },
            hoverAnimation: false,
        }, ]
    };
    series.push(upCircle, downCircle);
})
console.log("legend",legend,series)
option = {
    backgroundColor: '#fff',
    lenend: {
        icon: "circle",
        orient: "vertical",
        right: "15%",
        top: "20%",
        itemWidth:10,
        itemHeight:10,
        textStyle: {
            color: "#000",
            fontSize:20
        },
        formatter: function(params) {
            return "11111111"
            // return params + "     " + objData[params].value + "  " + company;
        },
        data: legend
    },
    series
};