var sexIcon = { //男女图片(base64转换的)
    'male': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAYCAYAAAAlBadpAAACq0lEQVQ4jX2UXUhTYRjHf2dzzmwGiktdfjDT5UdoklJqXZwxw/AmwkEHqpsgratC6qrbLgIvIgyhiISIBVldZXURUplZGFKS1kSSrZKlqTOnx4803rnp9Gz+L97DeZ//733e8z7vcyQipNQrKcBF4BhQACwDbuARcM3V7pqL9K/BSr1SAjwDLETXP+AW0BReRBcCU4EXW4BCep0knQMehyd0oecVIF1j36TllRUxUavUK4eDsFKviAVOaZxb60w487alpSVdLGtCfNRQdRB2tbsCqqremQtMYtCvR40GHQl6laNVFo7XFG2GF8UQJwaTyfTkSHVek1yRxesPg6jqPIV5u6gozUeSVguSYU6i55OXWXWRweGxq4RLNd57d/vI6Iy7OD/N8qCjn7LCDAp3m9fSDHsn6O7z4KzdS9/Ar5lcS1Jm9qGz/vAHXbDlJFt0OonyolTm1ZmNe5yfZZ8tmYT4OPYXppsSEwyX17YNvEGSxgCzLVdb6oK8zPUXiT/AKyJv2Lz7YSPQqiG1umS0OZuJuCRCgxpbdH0Jz0bCXcBAVPu6vgMvNbDR5hQXXwHGNMiqJgGn0eZc0MChBT4DoruuT00HFlR1Af90QLRlC1BqtDk/Rvo3wA7ZbqpraLWOLJekYD6w9LyzF8zlK15dWWpdQ2uWQ7bv0MAO2W50yPbm0Ja7vT+8p3dmFyQW1zVizi7W+3y+E8BbEXfI9psO2Z4oOL1DtotaPwVOhus+5HaTUlrJwZZOKnPM3LvRjN/vD/qBCkDOtVrvi8zngZrI7fh8PvQTP8H7FcO0D4/Hs/nwqsTvSp9rtd4G0jZHA5KRLn0W6eNDjA5/i3b6mSKzpt+EPr3vxmSMo79HlD+q9gg4arcv/p2k1vCbhemJWHAQbIsVnHrXERME2v4DNBvHKgW955cAAAAASUVORK5CYII=',
    'female': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAZCAYAAADXPsWXAAADPElEQVQ4jcWUbUhTURjH/9ftNjd106bTSlJTK42ly7D0QxgySelDQSAIYWBvFARZSJgERZgfUoiKiBQyJJAKghB8wbIyX0vTaUmltsyXTSdzy3nv7vTGmd61uYykD/3h3nOe55znd5/nnHMPhWVqLsnXGCfMtyaNZo1lZlbK2R2gaTH85VImRBXYHaxSnEwrutHrHuUBqb90Ol/XNXidZTkvuCCJhObVO6LPZ1y5XeYFeXXtbPzbloE+hrGvCHCBfGk+Xh2lySy+00NsH2Fg0mCu/BNA4ku7+izDUZaZ2QrBdkHGRqY0XpFLksokyD2RCUWgn8s39n0q0QPSVlqw1WqxibyiAYhpEQ5k74EyRIHDx/chPELl9M/ZWFHNhRMJpC/i2+9ngecf9XYNypcDFEH+OJSTho1RoYslSWgkJMUgbL0SPA8k7d6yv/RczoAYQPnCAr/OPVgZLIcmeTMSd8aCXiP2yi52a7jzAUBed8mMtUHKAGQdTIHMzxeqsCCP2v9CSgJ5ECCXHSNpggfALYuysIBc8su2A6A9TlglWdhTI3pjEcPYAQsAMwDb0jAp3MYtwrHkJ+MWgJljMfLVWAjgjA+164ij6l5dTfvrfkDYH6GlKCDU/9dXBb8YaH3Vj6ryumckXjgnox1vPsJgnQbIDrpl7/FjEL8KMFim0dk6QDwTLnbj0LBtb1Rk1kD/tw1kYclCr6TBT6N48vAl7CzXVtjQeNM9QaRHb3rh4ObV/b3DkePfTRRFUQhWKUBanufxUafH89p3aG7q5R3cfBOA3MahYfPyZJ0q1qbLSNKpuzJSUzPC7tESXmZnKVtL/fjR1vaGVgDGwoZGm3uMB6Ram0cHhCoLIpPVFyUBflKxmEN4DIORz76Yn6fBWGfn9B26y1aDqSy7ocJ1GHzcANsB6KwG01WOsUuJz+Gg8aWbdwKIuDlGajWYSgD0VGvztnlAlgCvAWwhtr5T51wH0/Ao3j9txrR+zGl/6+wT4uIAtAggUbU2j5RUCyBCmOFg7GCts5j4MOg8cOZRIxjLD1gNJvfqyYanPB7qvktVa/PUADzuzFUqjpQT+Q8AojAC+e1ltBq5duf/QgD8BEmrO3j7XsHtAAAAAElFTkSuQmCC',
};
var data = [131, 113]
let count = data[0] + data[1]

var symbols = [ //echarts组件自带的图片
    'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13',
    'path://M28.9624207,31.5315864 L24.4142575,16.4793596 C23.5227152,13.8063773 20.8817445,11.7111088 17.0107398,11.7111088 L12.112691,11.7111088 C8.24168636,11.7111088 5.60080331,13.8064652 4.70917331,16.4793596 L0.149791395,31.5315864 C-0.786976655,34.7595013 2.9373074,35.9147532 3.9192135,32.890727 L8.72689855,19.1296485 L9.2799493,19.1296485 C9.2799493,19.1296485 2.95992025,43.7750224 2.70031069,44.6924335 C2.56498417,45.1567684 2.74553639,45.4852068 3.24205501,45.4852068 L8.704461,45.4852068 L8.704461,61.6700801 C8.704461,64.9659872 13.625035,64.9659872 13.625035,61.6700801 L13.625035,45.360657 L15.5097899,45.360657 L15.4984835,61.6700801 C15.4984835,64.9659872 20.4191451,64.9659872 20.4191451,61.6700801 L20.4191451,45.4852068 L25.8814635,45.4852068 C26.3667633,45.4852068 26.5586219,45.1567684 26.4345142,44.6924335 C26.1636859,43.7750224 19.8436568,19.1296485 19.8436568,19.1296485 L20.3966199,19.1296485 L25.2043926,32.890727 C26.1862111,35.9147532 29.9105828,34.7595013 28.9625083,31.5315864 L28.9624207,31.5315864 Z M14.5617154,0 C17.4960397,0 19.8773132,2.3898427 19.8773132,5.33453001 C19.8773132,8.27930527 17.4960397,10.66906 14.5617154,10.66906 C11.6274788,10.66906 9.24611767,8.27930527 9.24611767,5.33453001 C9.24611767,2.3898427 11.6274788,0 14.5617154,0 L14.5617154,0 Z',
    'path://M512 292.205897c80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 65.503248 592.855572 0 512 0 431.144428 0 365.641179 65.503248 365.641179 146.358821 365.641179 227.214393 431.144428 292.205897 512 292.205897zM512 731.282359c-80.855572 0-146.358821 65.503248-146.358821 146.358821 0 80.855572 65.503248 146.358821 146.358821 146.358821 80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 796.273863 592.855572 731.282359 512 731.282359z'
];
var bodyMax = 100; //指定图形界限的值
var labelSetting = {
    normal: {
        show: true,
        position: 'bottom',
        offset: [0, -20],
        formatter: function(param) {
            return (param.value / bodyMax * 100).toFixed(0) + '%';
        },
        textStyle: {
            fontSize: 40,
            fontFamily: 'Arial',
        }
    }
};

options = [{
        backgroundColor: '#121B2C',
        xAxis: [{
            type: 'value',
            show: false,
            max: count // 居中显示
        }],
        yAxis: [{
            type: 'category',
            show: false,
            data: ['性别比例']
        }],
        color: ['#2FACFA', '#FF8800'],
        series: [{
                name: '男',
                type: 'bar',
                stack: '性别比例',
                barGap: '30%',
                barWidth: '20',
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                    }
                },
                itemStyle: {
                    normal: {
                        // color: '各异',
                        barBorderRadius: 10, // 柱条边线圆角，单位px，默认为0
                        label: {
                            show: false,
                            position: 'left' //默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                            //           'inside'|'left'|'right'|'top'|'bottom'
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        }
                    },
                    emphasis: {
                        // color: '各异',
                        barBorderColor: 'rgba(0,0,0,0)', // 柱条边线
                        barBorderRadius: 0, // 柱条边线圆角，单位px，默认为0
                        barBorderWidth: 1, // 柱条边线线宽，单位px，默认为1
                        label: {
                            show: false
                            // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                            //           'inside'|'left'|'right'|'top'|'bottom'
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        }
                    }
                },
                data: [{
                    value: data[0],
                    label: {
                        normal: {
                            //offset: [50, 30],
                            formatter: [
                                '{male|}' +
                                '{b|男}',
                                '{c|' + data[0] + '人}'
                            ].join('\n'),
                            rich: {
                                male: {
                                    height: 40,
                                    align: 'center',
                                    backgroundColor: {
                                        image: sexIcon.male
                                    }
                                },
                                b: {
                                    fontSize: 15,
                                    fontWeight: 100,
                                    align: 'center',

                                    //offset: [50, 8880],
                                    padding: [-10, 0, 10, 0]
                                },
                                c: {
                                    fontSize: 18,
                                    fontWeight: 100,
                                    align: 'center',
                                    padding: [45, 0, 0, -100]

                                }
                            }
                        }
                    }
                }]
            },
            {
                name: '女',
                type: 'bar',
                stack: '性别比例',
                barWidth: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                    }
                },
                itemStyle: {
                    normal: {
                        // color: '各异',
                        barBorderRadius: 10, // 柱条边线圆角，单位px，默认为0
                        label: {
                            show: false,
                            position: 'right' //默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                            //           'inside'|'left'|'right'|'top'|'bottom'
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        }
                    },
                    emphasis: {
                        // color: '各异',
                        barBorderColor: 'rgba(0,0,0,0)', // 柱条边线
                        barBorderRadius: 0, // 柱条边线圆角，单位px，默认为0
                        barBorderWidth: 1, // 柱条边线线宽，单位px，默认为1
                        label: {
                            show: false
                            // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                            //           'inside'|'left'|'right'|'top'|'bottom'
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        }
                    }
                },
                data: [{
                    value: data[1],
                    label: {
                        normal: {
                            //offset: [0, -20],
                            formatter: [
                                '{Female|}' +
                                '{b|女}',
                                '{c|' + data[1] + '人}'
                            ].join('\n'),
                            rich: {
                                Female: {
                                    height: 40,
                                    align: 'center',
                                    backgroundColor: {
                                        image: sexIcon.female
                                    }
                                },
                                b: {
                                    fontSize: 15,
                                    fontWeight: 100,
                                    align: 'center',

                                    padding: [-10, 0, 10, 0]
                                },
                                c: {
                                    fontSize: 18,
                                    fontWeight: 100,
                                    align: 'center',
                                    padding: [45, -100, 0, 0]

                                }
                            }
                        }
                    }
                }]
            }
        ]
    }, {
        backgroundColor: '#121B2C',
        tooltip: {
            show: false, //鼠标放上去显示悬浮数据
        },
        color: ['#FF8800', '#2FACFA'],
        grid: {
            left: '40%',
            right: '40%',
            top: '30%',
            bottom: '45%',
            containLabel: true
        },
        xAxis: {
            position: 'top',
            data: ['男性', '女性'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#666',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            max: bodyMax,
            splitLine: {
                show: false
            },
            axisTick: {
                // 刻度线
                show: false
            },
            axisLine: {
                // 轴线
                show: false
            },
            axisLabel: {
                // 轴坐标文字
                show: false
            }
        },
        series: [{
                name: '男性',
                type: 'pictorialBar',
                symbolClip: true,
                symbolBoundingData: bodyMax,
                label: labelSetting,
                data: [{
                        value: 80,
                        symbol: symbols[0],
                        itemStyle: {
                            normal: {
                                color: 'rgba(105,204,230)' //单独控制颜色
                            }
                        },
                    },
                    {

                    }
                ],
                // markLine: markLineSetting,
                z: 10
            },
            {
                name: '女性',
                type: 'pictorialBar',
                symbolClip: true,
                symbolBoundingData: bodyMax,
                label: labelSetting,
                data: [{},
                    {
                        value: 65,
                        symbol: symbols[1],
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,130,130)' //单独控制颜色
                            }
                        },
                    }
                ],
                // markLine: markLineSetting,
                z: 10
            },
            {
                // 设置背景底色，不同的情况用这个
                name: 'full',
                type: 'pictorialBar', //异型柱状图 图片、SVG PathData
                symbolBoundingData: bodyMax,
                animationDuration: 0,
                itemStyle: {
                    normal: {
                        color: '#ccc' //设置全部颜色，统一设置
                    }
                },
                z: 10,
                data: [{
                        itemStyle: {
                            normal: {
                                color: 'rgba(105,204,230,0.40)' //单独控制颜色
                            }
                        },
                        value: 100,
                        symbol: symbols[0]
                    },
                    {
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,130,130,0.40)' //单独控制颜色
                            }
                        },
                        value: 100,
                        symbol: symbols[1]
                    }
                ]
            },
            {
                name: '男女比例',
                type: 'pie',
                radius: ['65%', '85%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: 80,
                        name: '男性'
                    },
                    {
                        value: 60,
                        name: '女性'
                    }
                ]
            }
        ]
    }

];