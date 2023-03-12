var scaleData = [{
        'name': '正常',
        'value': 60
    },
    {
        'name': '请假',
        'value': 20
    },
    {
        'name': '缺勤',
        'value': 10
    },
    {
        'name': '打卡异常',
        'value': 2
    },
];

function getArrayName(array, key) {
    var key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}

function getArrayValue(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
var arrName = getArrayName(scaleData, "name");
var arrValue = getArrayValue(scaleData, "name");
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0,0,0,0)',
        borderColor: 'transparent',
        borderWidth: 50,
        barBorderRadius: 50
    }
};
var data = [];
var color = ['rgb(53, 240, 255)', 'rgb(0, 182, 255)', 'rgb(0, 114, 255)', 'rgb(93, 61, 255)', ]
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 10,
                shadowBlur: 0, //图形阴影
                borderColor: color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: true,
    radius: [195, 200],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: false,
                position: 'outside',
                color: 'red',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                        return params.name + '\n{white|' + '占比' + percent + '%}'; //设置label文字颜色
                    } else {
                        return '';
                    }
                },
                // rich: rich
            },
            labelLine: {
                length: 30,
                length2: 100,
                show: false,
                color: '#00ffff'
            }
        }
    },
    data: data
}];
option = {
    backgroundColor: '#000',
    title: {
        text: "设备运维人员",
        x: 'center',
        top: "23%",
        textStyle: {
            color: '#fff'
        }
    },
    color: color, //图例颜色
    tooltip: {
        show: true
    },
    legend: {
        show: true,
        orient: 'horizontal',
        align: 'left',
        // type:'scroll',//图例分页
        bottom: "10%",
        // left: 'center',
        icon: "circle",
        data: arrName,
        width: 300, //设置宽度可以产生换行
        itemGap: 25,
        formatter: function(name, value) {
            return "{title|" + name + "}   {values|" + (arrValue[name].value) + "}"

        },
        rich: {
            a: {
                width: 100,
            },
            b: {

            }
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 16,
                    lineHeight: 5,
                    color: "rgb(0, 204, 228)"
                },
                values: {
                    fontSize: 16,
                    lineHeight: 5,
                    color: "#fff"
                }
            }
        },
    },
    toolbox: {
        show: true
    },
    series: seriesObj
}