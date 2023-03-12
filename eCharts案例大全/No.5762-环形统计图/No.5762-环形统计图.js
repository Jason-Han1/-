var m2R2Data = [{
        value: 335,
        legendname: '10-30',
        name: "10-30",
        itemStyle: {
            color: "#05C985 "
        }
    },
    {
        value: 234,
        legendname: '30-50',
        name: "30-50",
        itemStyle: {
            color: "#1F8EFA"
        }
    },
    {
        value: 310,
        legendname: '50-100',
        name: "50-100",
        itemStyle: {
            color: "#FFAB4F"
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
        },
        {
            text: '合计',
            subtext: 879 + '个',
            textStyle: {
                fontSize: 24,
                color: "#505050"
            },
            subtextStyle: {
                fontSize: 14,
                color: 'black'
            },
            textAlign: "center",
            x: '34%',
            y: '40%',
        }
    ],
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
    legend: {
        type: "scroll",
        orient: 'vertical',
        right: '10%',
        align: 'left',
        icon: 'circle',
        itemHeight: 10, //修改icon图形大小
        top: 'middle',
        textStyle: {
            fontSize: 14,
            color: '#505050'
        },
        height: 250
    },
    series: [{
        name: '价格',
        type: 'pie',
        radius: [40, 60],
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
                length: 5,
                length2: 3,
                smooth: true,
            }
        },
        data: m2R2Data
    }]
};