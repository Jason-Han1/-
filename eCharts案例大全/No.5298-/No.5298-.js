var woman = "/asset/get/s/data-1603955498192--1t5zh4kr.png";

var man = "/asset/get/s/data-1603955491669-FZkVWrlpO.png";

const res = [{
        "label": "男",
        "value": 65
    },
    {
        "label": "女",
        "value": 35
    }
]

function _pie2() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgb(126,190,255)",
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

const color = ['#008BFF', '#DE496B'];
const data = [];
for (let i = 0; i < res.length; i++) {
    data.push({
        value: res[i].value,
        name: res[i].label,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 5,
                borderColor: color[i],
                shadowColor: color[i]
            }
        }
    }, 
    {
        value: res[0].value / 20,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        }
    }
    );
}

option = {
    color,
    graphic: {
        elements: [
            
            {
                type: 'image',
                z: 3,
                style: {
                    image: man,
                    color:'#008BFF',
                    width: 28,
                    height: 84
                },
                left: '38%',
                top: 'center'
            },
            {
                type: 'image',
                z: 3,
                style: {
                    image: woman,
                    width: 28,
                    height: 84
                },
                right: '38%',
                top: 'center'
            }
        ]
    },
    tooltip: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['50%', '52%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    fontSize: 12,
                    formatter(params) {
                        return params.name ?
                            params.name+' '+ params.value + '%' :
                            '';
                    }
                },
                labelLine: {
                    width: 4,
                    length: 15,
                    length2: 15,
                    show: true,
                    color: '#00ffff'
                }
            }
        },
        data
    },
    {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['44%', '46%'],
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
            data: _pie2()
        }, 
    ]
};