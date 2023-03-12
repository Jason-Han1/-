// 黄色：FFC501    橘色：EA6E29    绿色：05C985   蓝色：1F8EFA    紫色：8086FB
// 服务 价格 质量 卫生状况 其他
var m2R2Data = [{
        value: 335,
        legendname: '服务',
        name: "服务",
        itemStyle: {
            color: "#FFC501 "
        }
    },
    {
        value: 234,
        legendname: '价格',
        name: "价格",
        itemStyle: {
            color: "#EA6E29"
        }
    },
    {
        value: 310,
        legendname: '质量',
        name: "质量",
        itemStyle: {
            color: "#05C985 "
        }
    },
    {
        value: 310,
        legendname: '卫生状况',
        name: "卫生状况",
        itemStyle: {
            color: "#1F8EFA "
        }
    },
    {
        value: 310,
        legendname: '其他',
        name: "其他",
        itemStyle: {
            color: "#8086FB "
        }
    },
];


option = {
    title: [{
        text: '',
        textStyle: {
            fontSize: 16,
            color: "black"
        },
        left: "2%"
    }],
    tooltip: {
        trigger: 'item',
        formatter: function(parms) {
            var str = parms.seriesName + "</br>" +
                parms.marker + "" + parms.data.legendname + "</br>" +
                "数量：" + parms.data.value + "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    grid: {
        top: 'middle',
        left: '0%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: true
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        right: '10%',
        align: 'left',
        // icon: 'pin',
        icon: 'circle',
        itemHeight: 10, //修改icon图形大小
        top: 'middle',
        textStyle: {
            fontSize: 12,
            color: '#505050'
        },
        height: 250
    },
    series: [{
        name: '占比',
        type: 'pie',
        radius: '70%',
        // radius: [0, 100],
        center: ['35%', '50%'],
        clockwise: false, //饼图的扇区是否是顺时针排布
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'outter',
                formatter: function(parms) {
                    return parms.data.legendname
                }
            }
        },
        labelLine: {
            normal: {
                length: 3,
                length2: 3,
                smooth: true,
            }
        },
        data: m2R2Data
    }]
};