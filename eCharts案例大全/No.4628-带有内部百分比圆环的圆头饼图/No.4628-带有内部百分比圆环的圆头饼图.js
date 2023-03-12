let sum = 100
let width = 200
var data = [{
    value: 70,
    name: '70%',
    label: {
        color: '#fff'
    },
    itemStyle: {

    },
    emphasis: {
        itemStyle: {

        }
    }
}, {
    value: 30,
    name: '30%',
    label: {
        color: '#fff'
    },
    itemStyle: {

    },
    emphasis: {
        itemStyle: {

        }
    }
}, ]


let preAngle = 0
 //每个元素的角度
let everyAngle = 360 / sum

// 计算圆环角度
function angleText(i, value) {
    //文字现在所在的角度
    var currentAngle =preAngle +( everyAngle*value / 2);

    preAngle += everyAngle*value

    if (currentAngle <= 90) {
        return -currentAngle;
    } else if (currentAngle <= 180 && currentAngle > 90) {
        return 180 - currentAngle;
    } else if (currentAngle < 270 && currentAngle > 180) {
        return 180 - currentAngle;
    } else if (currentAngle < 360 && currentAngle >= 270) {
        return 360 - currentAngle;
    }
}

data1 = JSON.parse(JSON.stringify(data));
var data2 = [];
var color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
for (var i = 0; i < data1.length; i++) {
    data1[i].name = (100 * (data1[i].value / sum)).toFixed(0) + '%'
    // data1[i].value = 1
    data1[i]['label']['rotate'] = angleText(i,  data1[i].value);
    //   data1[i]['label'].normal.position ='inside';
    //  data1[i].itemStyle.color = color[i]
    
    data2.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
            normal: {
                borderWidth: width * 0.04,
                //   borderWidth: 10,
                shadowBlur: 4,
                borderColor: color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
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
    });

}





option = {
    title: {
        text: 'Awesome Chart'
    },

    series: [{
            type: 'pie',
            radius: [width * 0.36,  width * 0.46],
            hoverAnimation: false,
            // itemStyle: {
            //     color: 'red'
            // },
            // labelLine: {
            //     normal: {
            //         show: false,
            //         length: 30,
            //         length2: 55
            //     },
            // },
            label: {
                normal: {
                    position: 'inside',
                    // align: 'center',
                    fontWeight:'bold',
                    textStyle: {
                        color: '#fff',
                        fontSize: width * 0.06,
                    }
                    
                }
            },
            name: "",
            data: data1
        },
            {
            name: '',
            type: 'pie',
            clockWise: true,
            radius: [ width * 0.5, width * 0.54],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                      show: false,
                    }
                }
            },
            data: data2
        }
    ]
};