
var data = [{
        num: 5,
        name: 'FISH',
    },
    {
        num: 25,
        name: 'EGGS'
    },
    {
        num: 17,
        name: 'NUTS'
    },
    {
        num: 20,
        name: 'SHELLFISH'
    },
    {
        num: 60,
        name: 'SULFITES'
    },
    {
        num: 29,
        name: 'SOY'
    },
    {
        num: 48,
        name: 'WHEAT'
    },
    {
        num: 84,
        name: 'MILK'
    }
]
data = data.map(item => {
    item.value = 1;
    return item
})
option = {
    backgroundColor:'#fff',
    series: [{
            name: 'title',
            type: 'pie',
            radius: ['40%', '30%'],
            center: ['50%', '50%'],
            color: '#00BDB2',
            label: {
                color:'#333333',
                formatter: function(params) {
                        return [params.name + ' 已完成' , '{num|'+params.data.num+'%}'].join('')
                    },
                rich:{
                    num:{
                        color:'#007DF1'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 60,
                    length2: 45,
                    // smooth: true,
                    lineStyle: {
                        type: 'dashed',
                        width: 1.5,
                        color: '#979691',
                        shadowColor: '#fff',
                        shadowBlur: 0,
                        shadowOffsetX: .5,
                        shadowOffsetY: .5,
                    }
                },
                emphasis: {
                    lineStyle: {
                        type: 'dashed',
                        width: 2,
                        color: '#00BDB2',
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                },
                emphasis: {
                    opacity: 1,
                    borderColor: '#fff',
                    borderWidth: 2,
                },
            },
            data: data,
        },
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['25.5%', '26%'],
            z: 0,
            startAngle: -65,
            label: {
               show: false
            },
            labelLine: {
                show: false
            },
            data: Pie()
        },
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['25%', '26.5%'],
            z: 1,
            startAngle: -65,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: Pie1()
        },

    ]
};
function Pie() {
    let dataArr = [];
    for (var i = 0; i < 200; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 5,
                itemStyle: {
                    normal: {
                        color: "#9FABBE",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)",
                        shadowColor: '#fff',
                        shadowBlur: 0,
                        shadowOffsetX: .5,
                        shadowOffsetY: .5,
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 10,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)",
                    }
                }
            })
        }
    }
    return dataArr
}

function Pie1() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "#00BDB2",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)",
                        shadowColor: '#fff',
                        shadowBlur: 0,
                        shadowOffsetX: .5,
                        shadowOffsetY: .5,
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