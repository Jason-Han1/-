var dataMock = [{
        name: "资源量",
        value: 700,
        radiusArr: ['45.5%', '57%'],
        color: '#1b6bee',
        total: 1000

    },
    {
        name: "邀约量",
        value: 430,
        radiusArr: ['25.5%', '37%'],
        color: '#1bb7c4',
        total: 600
    },
    {
        name: "通话量",
        value: 300,
        radiusArr: ['5.5%', '17%'],
        color: '#e530a3',
        total: 400
    }
];
function arrayObj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
option = {
    backgroundColor:'rgba(0,0,0,0.1)',
    title: {
        text: '统计'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        icon: "circle",
        top: "center",
        right: '30%',
        data: dataMock,
        padding: [0, 2],
        itemWidth: 18,
        formatter: function (name, value) {
            return "{title|" + name + "}     {value|" + (arrayObj(dataMock,
                "name")[name].value) + "}"
        },
        // selectedMode: false,
        textStyle: {
            rich: {
                title: {
                    fontSize: 18,
                    color: "#333333"
                },
                value: {
                    fontSize: 18,
                    lineHeight: 20,
                    color: "#27DBF3"
                }
            }
        },
    },
    series: dataMock.map((item, index) => {
        return {
            type: 'pie',
            clockWise: false,
            radius: item.radiusArr,
            center: ['30%', '50%'],
            itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        shadowBlur: 40,
                        borderWidth: 10,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: item.value,
                    name: item.name,
                    itemStyle: {
                        normal: {
                            color: item.color,
                        }
                    }
                },
                {
                    value: item.total - item.value,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#254999',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            color: '#254999'
                        }
                    }
                },
            ]
        }
    })
};