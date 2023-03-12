const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
};

let img1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEUAAAD/V1z/WmH+U2D/U2H9U1/9UmD9U1/9U2D+U2D8U2H8UmD/U1//U1/9U2D9UmD9U2D9U2H8U2D/U2D/U2D9U1/+U2D9U2D8U2D9U1/9U2D8VGD9U2D7UWD9U2BFqrbVAAAAHnRSTlMADwe0FvTs5tW+YFwvIfnMmWxOOyfcq3jEoo1VkEXX0nxvAAAAz0lEQVQ4y62SV47DMAwFnylZsop7S9nN/Y+5CyUO5JApH5nfGRAgQXyHwlwELGFjuohobNTvAi0H9G5C2PxgGsmbqrv6aMaDFKiiPafguKKTghPCkgI3wEvBGV6l4PSDWt7S9dcdTETF/QFhJiSCnVYe9L824oa3gS1a9mbEncGWLJgjMrRiV9DY0++9B2PJ/QJO4bL5BAE6br4jyIzuf5lSjXgOVS3hJa177XXV1s9HTJ1NN1SD7NcmeybB+92huX94iYkHc+6byAMqcvAxf4WbMyOLT6AEAAAAAElFTkSuQmCC';
let img2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEUAAAD/liv/mib/lyr/lir/lir/liv/liv/lir/lSz/liv/lir/liv/lyr/lyr/lyr/lin/lSv/liv/lir/liv/lir/liv/liv/lir/mir/liv/lir/mCv/mCz/litdJRI5AAAAHnRSTlMAEAletfjlv00g8+rb1JpsOyzuzLGrjngmGMeiMkUnrw9tAAAAz0lEQVQ4y62SVxKDMAwFnwsYQu813P+YYSCAQYL8ZD/ZHTHSGP9BBBODK/egnVi6PfD5QBy/4AP5a4LavJc7nA/CePVjkPZcoEWxzhgaxFxQQ1VLYDwoLpg/l0tQ1/D5LU2y7pBniKg3UOF3UeW2DQ2Sd5ABW6HIoq8kT7HjuS8ShBksOn0NSoEzyfXMhMr2FSjSHF5LcMWw+ViCJ9Xzto5OcY+MColHevPsu6jw70e0sbvcUHu8bxzrMTFenQ5N/eVJZDQIT8FIAyks2E14PgzBMyGqhA9eAAAAAElFTkSuQmCC';
let img3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAY1BMVEUAAAD/pwD/pQD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qgD/qwD/qgD/qgD/qgD/qgD/qgD/rAD/rAD/qgD/qgD/qwD/qgD/qQD/qgBqA1+YAAAAIHRSTlMAEQe2YFrt59UgDffzzL6ZbE4+F9yxrI54LinjxKI2JXCWl8AAAADRSURBVDjLrZJXDoMwEAUftrHpvZfA/U+ZiCaDF5KPzO+MLO9q8R88ORP07AimmSQ/ApcOrCOw6IB9e8HefSp9yksnXn2rsoEKuBeub4wNYiqoYVdLEKUQ9BdEuQR1Tf8yR5SsM8gWjukHiGIb1O6nxgySTHXYEMo2Bg0SmeEgVYERFC00cn4NSgtnkrMXMKh0X1FXE2lbZiBg4+5jBpqMf6b1+Qv3MCdkeCSMnn3uhO79E12slh3ylPaNfkyEF6dFm/5yEp0ZFKeA2AWzNDz8zBuAhDcYjYRmwwAAAABJRU5ErkJggg==';

// 数据整理
let xData = ['类别1', '类别2', '类别3', '类别4', '类别5', '类别6', '类别7', '类别8'];
let yData = [4757, 3254, 2454, 2011, 1654, 1211, 1211, 254];
let max = Math.max(...yData);
let labelColor = ['#FD5360', '#FF962B', '#FFAA00']
let emptyData = yData.map((v, i) => {
    let color = i > 2 ? '#1890FF' : labelColor[i];
    let item = {
        value: max,
        label: {
            formatter: '{a|' + v + '}',
            position: 'right',
            distance: 20,
            rich: {
                a: {
                    color: color,
                    borderColor: color,
                    borderWidth: 1,
                    borderType: 'dashed',
                    padding: [0, 0, 2, 0],
                    width: 60,
                    height: 18,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: hexToRgba(color, 0.05)
                }
            }

        }
    }
    return item
})
let xDataFormat = xData.map((v, i) => {
    let color = i > 2 ? '#333333' : '#ffffff';
    let bg;
    switch (i) {
        case 0:
            bg = {image: img1};
            break;
        case 1:
            bg = {image: img2};
            break;
        case 2:
            bg = {image: img3};
            break;
        default:
            bg = '#fff';
            break;
    }
    let item = {
        value: v,
        textStyle: {
            rich: {
                a: {
                    color: color,
                    width: 20,
                    height: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: bg,
                    borderRadius: 10,
                    borderColor: hexToRgba(color, 0.2),
                    borderWidth: 1,
                    shadowColor: hexToRgba(color, 0.1),
                    shadowBlur: 5
                },
                b: {
                    padding: [0, 5]
                },
                value: {
                    color: '#666666'
                }
            }
        }
    }
    return item
})
xData.reverse();
xDataFormat.reverse();
yData.reverse();
emptyData.reverse();


option = {
    backgroundColor: '#fff',
    grid: {
        top: "5%",
        left: "1%",
        right: "15%",
        bottom: "3%",
        containLabel: true
    },
    xAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        max: function(value) {
            return value.max
        },
        axisLine: {
            lineStyle: {
                color: '#D9D9D9'
            }
        },
        axisLabel: {
            color: '#666'
        }
    }],
    yAxis: [{
        type: "category",
        name: "",
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#D9D9D9'
            }
        },
        axisLabel: {
            formatter: function(value) {
                return '{a|' + value.substr(value.length - 1) + '}{b|}{value|' + value + '}'
            }
        },
        data: xDataFormat
    }, {
        type: "category",
        name: "",
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: xData
    }],
    series: [{
            type: 'bar',
            barWidth: 10,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 6, 6, 0],
                    color: 'rgba(225,225,225,0.4)'
                }
            },
            label: {
                show: true,
                position: 'right',
                formatter: function(a) {
                    console.log(a)
                }
            },
            data: emptyData
        },
        {
            type: 'bar',
            barWidth: 10,
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 6, 6, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#3D9FFF'
                    }, {
                        offset: 1,
                        color: '#41D7F3'
                    }], false)
                }
            },
            data: yData
        }
    ]
};