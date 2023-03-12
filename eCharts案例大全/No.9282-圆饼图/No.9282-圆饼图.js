var data = {
    dataAge: [{
        name: '名称2',
        value: '272'
    }, {
        name: '名称3',
        value: '292'
    }, {
        name: '名称4',
        value: '120'
    }, {
        name: '名称5',
        value: '42'
    }]
};
var Line = ["名称2", "名称3", "名称4", "名称5"];



option = {
    grid: {
        left: '2%'
    },
    title: {
        text: '瑶瑶',
        left: 'center',

        textStyle: {
            color: '#ccc'
        }
    },
    legend: {
        type: "scroll",
        data: Line,
        top: 40,
        itemWidth: 18,
        itemHeight: 1,
        textStyle: {
            color: "#00ffff",
            fontSize: 14
        },
    },
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    series: [{
            color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
            type: 'pie',
            radius: ['25%', '30%'],
            labelLine: {
                normal: {
                    length: 30, //横线长度
                    length2: 40, //横线长度
                    lineStyle: {
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    formatter: (params) => {
                        console.log(params);
                        return '{b| ' + params.name + '}  ' + '{c|' + params.percent.toFixed(0) + '%}'
                    },

                    /* 标注位置 */
                    borderWidth: 0,
                    borderRadius: 4,
                    // padding: [0, 0],
                    // height: 60, //
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 12,
                            lineHeight: 40,
                            color: '#41B3DC',
                            padding: [0, 0, 5, 0]
                        },
                        c: {
                            fontSize: 15,
                            lineHeight: 40,
                            color: 'orange',
                            padding: [0, 0, 5, 0]
                        }

                    }
                }
            },
            itemStyle: { // 此配置
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 2,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: data.dataAge,
        },

        // 外边框虚线
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['35.7%', '36%'],

            label: {
                normal: {
                    show: false
                },
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
                        color: "#00c0ff",
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