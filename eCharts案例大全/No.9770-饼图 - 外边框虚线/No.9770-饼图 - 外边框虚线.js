option = {
    backgroundColor: '#142468',
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow',
        },
        textStyle: {
            fontSize: 18,
        },
        formatter: "{a} <br/>{b}: {c}万人({d}%)",
    },
    legend: {
        show: false,
        left: "left",
        top: "20%",
        bottom: "30%",
        orient: "vertical",
        itemGap: 25,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#ffffff',
            fontStyle: 'normal',
            fontSize: 14,
            // fontFamily: 'CRegular',
            fontFamily: '黑体',
        },
    },
    color:['#0c85dd','#ffe035','#00c0ff','#f6e9dd','#63a1e3'],
    series: [
        // 数据展示层
        {
        name:'年龄分布',
        type:'pie',
        center:['50%', '50%'],
        radius: [0, '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'outside'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data:[
            {value:1214, name:'20-24岁'},
            {value:943, name:'25-29岁'},
            {value:518, name:'30-34岁'},
            {value:225, name:'35-39岁'},
            {value:51, name:'40岁以上'}
        ]
    },
    // 外边框虚线
    {
        type: 'pie',
        zlevel: 4,
        silent: true,
        radius: ['75%', '76%'],
        label: {
            normal: {
                show: false
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: createData()
    },
    ]
};
function createData() {
    let dataArr = [];
    for (var i = 0; i < 200; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "#dbaa56",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr
}