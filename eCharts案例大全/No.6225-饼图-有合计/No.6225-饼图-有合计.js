let dataArr = [{
        name: "测试1",
        value: 20
    },
    {
        name: "测试2",
        value: 30
    }, {
        name: "测试3",
        value: 40
    }, {
        name: "测试4",
        value: 50
    }, {
        name: "测试5",
        value: 60
    }, {
        name: "测试6",
        value: 70
    }, {
        name: "测试7",
        value: 80
    }, {
        name: "测试8",
        value: 90
    }, {
        name: "测试9",
        value: 100
    }, {
        name: "测试10",
        value: 110
    }, {
        name: "测试11",
        value: 120
    }, {
        name: "测试12",
        value: 130
    }, {
        name: "测试13",
        value: 140
    }, {
        name: "测试14",
        value: 150
    }, {
        name: "测试15",
        value: 160
    }, {
        name: "测试16",
        value: 170
    }, {
        name: "测试17",
        value: 180
    }
];
let total = 0; //合计总数
for (var totalIndex = 0; totalIndex < dataArr.length; totalIndex++) {
    total += dataArr[totalIndex].value
}
if (total === 0) { //当值为0时 不显示 改为字符串可显示
    total = "0"
}

let colorsArr = ['#0098fe', '#fe7270', '#ff9a65', '#6bb7b2', '#9bcd35', '#db4e36', '#01a758', '#8c53e6', '#5ed9a8', '#49c2e8', '#e7bcf1', '#5f58da', '#b88350', '#50bb5e', '#fc47ff', '#b0b0b0', '#f19d11'];
option = {
     backgroundColor:'#dbf6e9',
    title: [{
            text: '合计',
            x: 'center',
            y: '22%',
            textStyle: {
                color: '#000',
                fontSize: 16
            },
            subtext: total,
            subtextStyle: {
                color: '#000',
                fontSize: 24,
                fontWeight: 'bold'
            }

        },
        {

            text: '标题二',
            x: '20',
            y: '50%',
            textStyle: {
                color: '#000',
                fontSize: 14
            },
        }
    ],
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) { //hover显示内容
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "数量：" + parms.data.value + "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        },
        textStyle: {
            fontSize: 14
        }
    },
    legend: {

        orient: 'vertical', //纵向图例
        left: 'center',
        itemWidth: 15,
        itemHeight: 15,
        icon: 'circle',
        top: '55%',
        itemGap: 25, //图例item间距
        textStyle: {
            color: '#000',
            fontSize: 14
        },
        data: dataArr,
        formatter: function(name) { //图表名称+数值
            if (dataArr && dataArr.length) {
                for (var index = 0; index < dataArr.length; index++) {
                    if (name === dataArr[index].name) {
                        return (
                            name + "  ： " + dataArr[index].value
                        )
                    }
                }
            }
        },

    },
    series: [{
        type: 'pie',
        center: ['50%', '25%'],
        radius: ['25%', '40%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 2,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorsArr[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{d}%',
            fontSize: 10,
        },
        labelLine: {
            normal: {
                length: 5,
                length2: 8,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: dataArr
    }]
};


// 图例改变事件
myChart.on('legendselectchanged', function(params) {
    var option_reset = this.getOption();
    let select_value = Object.values(params.selected);
    let total_reset = 0; //  重置合计
    if (select_value && select_value.length) {
        for (var index = 0; index < select_value.length; index++) {
            if (select_value[index] !== false) {
                total_reset += dataArr[index].value
            }
        }
    }
    option_reset.title[0].subtext = total_reset; //修改合计值为修改后的值
    this.setOption(option_reset);
});