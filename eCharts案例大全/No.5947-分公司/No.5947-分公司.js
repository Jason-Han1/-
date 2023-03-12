var m2R2Data = [{
        value: 335,
        value1: 234,
        legendname: '一分公司',
        name: "一分公司",
        itemStyle: {
            color: "#8d7fec"
        }
    },
    {
        value: 310,
        value1: 314,
        legendname: '二分公司',
        name: "二分公司",
        itemStyle: {
            color: "#5085f2"
        }
    },
    {
        value: 234,
        value1: 235,
        legendname: '三分公司',
        name: "三分公司",
        itemStyle: {
            color: "#e75fc3"
        }
    },
    {
        value: 154,
        value1: 213,
        legendname: '四分公司',
        name: "四分公司",
        itemStyle: {
            color: "#f87be2"
        }
    },
    // {
    //     value: 335,
    //     value1: 321,
    //     legendname: 'Ⅴ类',
    //     name: "Ⅴ类",
    //     itemStyle: {
    //         color: "#f2719a"
    //     }
    // },

];

option = {
    title: [{
            text: '全网调控情况',
            textStyle: {
                fontSize: 16,
                color: "black"
            },
            left: "2%"
        },
        // {
        //     text: '全网均温',
        //     subtext: 44.5 + '℃',
        //     textStyle: {
        //         fontSize: 15,
        //         color: "black"
        //     },
        //     subtextStyle: {
        //         fontSize: 20,
        //         color: 'black'
        //     },
        //     textAlign: "center",
        //     x: '34.5%',
        //     y: '44%',
        // }
    ],
    tooltip: {
        trigger: 'item',
        formatter: function(parms) {
            var str = parms.seriesName + "</br>" +
                parms.marker + "" + parms.data.legendname + "</br>" +
                "<18.00：" + parms.data.value + "</br>" +
                "18.00-18.0：" + parms.data.value1 + "</br>" +
                ">24.00：" + parms.percent + "%";
            return str;
        }
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: '65%',
        align: 'left',
        top: 'middle',
        textStyle: {
            color: '#8C8C8C'
        },

    },
    series: [{
        name: '全网调控情况',
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['20%', '45%'],
        // clockwise: false, //饼图的扇区是否是顺时针排布
        avoidLabelOverlap: false,
        itemStyle: { //图形样式
            normal: {
                borderColor: '#ffffff',
                borderWidth: 1,
            },
        },
        label: {
            normal: {
                show: true,
                position: 'outter',
                formatter: function(parms) {
                    return parms.data.legendname
                }
            }
        },
        labelLine: {
            normal: {
                length: 15,
                length2: 13,
                smooth: true,
            }
        },
        data: m2R2Data
    }]
};