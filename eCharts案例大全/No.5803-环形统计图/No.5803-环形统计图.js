var m2R2Data = [{
        value: 335,
        legendname: '相如镇',
        name: "相如镇  335",
        itemStyle: {
            color: "#8d7fec"
        }
    },
    {
        value: 310,
        legendname: '锦屏镇',
        name: "锦屏镇  310",
        itemStyle: {
            color: "#5085f2"
        }
    },
    {
        value: 234,
        legendname: '巨龙镇',
        name: "巨龙镇  234",
        itemStyle: {
            color: "#e75fc3"
        }
    },
    {
        value: 154,
        legendname: '徐家镇',
        name: "徐家镇  154",
        itemStyle: {
            color: "#f87be2"
        }
    },
    {
        value: 335,
        legendname: '金溪镇',
        name: "金溪镇  335",
        itemStyle: {
            color: "#f2719a"
        }
    },
    {
        value: 335,
        legendname: '河舒镇',
        name: "河舒镇  335",
        itemStyle: {
            color: "#fca4bb"
        }
    },
    {
        value: 335,
        legendname: '兴旺镇',
        name: "兴旺镇  335",
        itemStyle: {
            color: "#f59a8f"
        }
    },
    {
        value: 335,
        legendname: '罗家镇',
        name: "罗家镇  335",
        itemStyle: {
            color: "#fdb301"
        }
    },
    {
        value: 335,
        legendname: '利溪镇',
        name: "利溪镇  335",
        itemStyle: {
            color: "#57e7ec"
        }
    },
    {
        value: 335,
        legendname: '正源镇',
        name: "正源镇  335",
        itemStyle: {
            color: "#cf9ef1"
        }
    },
    {
        value: 335,
        legendname: '龙云镇',
        name: "龙云镇  335",
        itemStyle: {
            color: "#57e7ec"
        }
    },
    {
        value: 335,
        legendname: '龙蚕镇',
        name: "龙蚕镇  335",
        itemStyle: {
            color: "#cf9ef1"
        }
    },
];

option = {
    backgroundColor: "rgba(2, 18, 65, 0.5)",
    title: [{
            text: '',
            textStyle: {
                fontSize: 16,
                color: "#ffffff"
            },
            left: "2%"
        },
        {
            text: '药械合计',
            subtext: 112 + '万',
            textStyle: {
                fontSize: 14,
                color: "#ffffff"
            },
            subtextStyle: {
                fontSize: 14,
                color: '#ffffff'
            },
            textAlign: "center",
            x: '50%',
            y: '45%',
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
    //		legend: {
    ////			type: "scroll",
    //			orient: 'vertical',
    //			left: '70%',
    //			align: 'left',
    //			top: '90%',
    //			textStyle: {
    //				color: '#8C8C8C'
    //			},
    //			height: 0
    //		},
    series: [{
        name: '蓬安药械占比',
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['40%', '65%'],
        clockwise: false, //饼图的扇区是否是顺时针排布
        avoidLabelOverlap: false,
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
                length: 5,
                length2: 3,
                smooth: true,
            }
        },
        data: m2R2Data
    }]
};