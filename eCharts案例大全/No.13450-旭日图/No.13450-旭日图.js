/**
 * [rgbToHex 将rgb转换为hex]
 * @param  {[type]} r [description]
 * @param  {[type]} g [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
function rgbToHex(r, g, b) {
    var hex = ((r << 16) | (g << 8) | b).toString(16);
    return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
}
/**
 * [hexToRgb 将hex转换为rgb]
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
function hexToRgb(hex) {
    var rgb = [];
    for (var i = 1; i < 7; i += 2) {
        rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
    }
    return rgb;
}
/**
 * [gradient 生成渐变颜色]
 * @param  {[type]} startColor [description]
 * @param  {[type]} endColor   [description]
 * @param  {[type]} step       [description]
 * @return {[type]}            [description]
 */
function gradient(startColor, endColor, step) {
    //将hex转换为rgb
    var sColor = hexToRgb(startColor),
        eColor = hexToRgb(endColor);
    //计算R\G\B每一步的差值
    var rStep = (eColor[0] - sColor[0]) / step,
        gStep = (eColor[1] - sColor[1]) / step,
        bStep = (eColor[2] - sColor[2]) / step;
    var gradientColorArr = [];
    for (var i = 0; i < step; i++) {
        //计算每一步的hex值
        gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])));
    }
    return gradientColorArr;
}
// var color = ['#4dc2ff', '#5fff7a', '#ffa662', '#7d9cef', '#00ffea'];
var color = ['#0197d4', '#6dcaf3', '#066db7', '#15d7fa', '#00b0f0'];
var data = [{
    name: '企业画像',
    children: [{
        name: '基本数据',
        value: 4,
        itemStyle: {
            color: color[0]
        },
        children: [{
            name: '社会统一\n信用代码',
            value: 1,
            itemStyle: {
                color: color[0]
            },
            // 应用场景:金融贷款、政府扶持、税收征管、信用报告、政府招投标
            children: [{
                name: '金融贷款',
                value: 6,
                itemStyle: {
                    color: color[4]
                }
            }, {
                name: '政府扶持',
                value: 7,
                itemStyle: {
                    color: color[3]
                }
            }, {
                name: '税收征管',
                value: 6,
                itemStyle: {
                    color: color[2]
                }
            }, {
                name: '信用报告',
                value: 7,
                itemStyle: {
                    color: color[1]
                }
            }, {
                name: '政府招投标',
                value: 6,
                itemStyle: {
                    color: color[0]
                }
            }]
        }, {
            name: '登记日期',
            value: 1,
            itemStyle: {
                color: color[1]
            },
        }, {
            name: '法定代表人',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }, {
            name: '行业类型',
            value: 1,
            itemStyle: {
                color: color[3]
            }
        }]
    }, {
        name: '税收数据',
        value: 4,
        itemStyle: {
            color: color[1]
        },
        children: [{
            name: '所属日期起',
            value: 1,
            itemStyle: {
                color: color[0]
            }
        }, {
            name: '所属日期止',
            value: 1,
            itemStyle: {
                color: color[1]
            }
        }, {
            name: '应税销售收入',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }, {
            name: '入库税额',
            value: 1,
            itemStyle: {
                color: color[3]
            }
        }]
    }, {
        name: '欠税信息',
        value: 3,
        itemStyle: {
            color: color[2]
        },
        children: [{
            name: '增值税欠税金额',
            value: 1,
            itemStyle: {
                color: color[0]
            }
        }, {
            name: '消费税欠税金额',
            value: 1,
            itemStyle: {
                color: color[1]
            }
        }, {
            name: '所得税欠税金额',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }]
    }, {
        name: '行政处罚信息',
        value: 4,
        itemStyle: {
            color: color[3]
        },
        children: [{
            name: '案件名称',
            value: 1,
            itemStyle: {
                color: color[0]
            }
        }, {
            name: '行政处罚事由',
            value: 1,
            itemStyle: {
                color: color[1]
            }
        }, {
            name: '处罚金额',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }, {
            name: '处罚机关',
            value: 1,
            itemStyle: {
                color: color[3]
            }
        }]
    }, {
        name: '重大违法信息',
        value: 3,
        itemStyle: {
            color: color[4]
        },
        children: [{
            name: '案件性质',
            value: 1,
            itemStyle: {
                color: color[0]
            }
        }, {
            name: '主要违法事实',
            value: 1,
            itemStyle: {
                color: color[1]
            }
        }, {
            name: '处罚情况',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }]
    }, {
        name: '增值税申报信息',
        value: 3,
        itemStyle: {
            color: color[0]
        },
        children: [{
            name: '申报月份',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }, {
            name: '按适用税率\n计税销售额',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }, {
            name: '应补退税额',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }]
    }, {
        name: '缴税情况',
        value: 4,
        itemStyle: {
            color: color[1]
        },
        children: [{
            name: '属期起止',
            value: 1,
            itemStyle: {
                color: color[0]
            },
        }, {
            name: '税款种类',
            value: 1,
            itemStyle: {
                color: color[1]
            }
        }, {
            name: '实缴时间',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }, {
            name: '实缴税额',
            value: 1,
            itemStyle: {
                color: color[3]
            }
        }]
    }, {
        name: '税务信用评级',
        value: 3,
        itemStyle: {
            color: color[2]
        },
        children: [{
            name: '信用级别',
            value: 1,
            itemStyle: {
                color: color[0]
            }
        }, {
            name: '信用评级年度',
            value: 1,
            itemStyle: {
                color: color[1]
            }
        }, {
            name: '信用评分分数',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }]
    }, {
        name: '所得税年\n度汇算清缴',
        value: 4,
        itemStyle: {
            color: color[3]
        },
        children: [{
            name: '年度',
            value: 1,
            itemStyle: {
                color: color[0]
            },
        }, {
            name: '汇算清缴日期',
            value: 1,
            itemStyle: {
                color: color[1]
            }
        }, {
            name: '营业收入',
            value: 1,
            itemStyle: {
                color: color[2]
            }
        }, {
            name: '应纳所得税额',
            value: 1,
            itemStyle: {
                color: color[3]
            }
        }]
    }]
}]
// '#007ec7','#09b4dc'//'#25d7fa', '#066db7'
var dc = data[0].children,
    color1 = gradient('#007ec7','#09b4dc', dc.length);
for (var i = 0; i < dc.length; i++) {
    dc[i].itemStyle.color = color1[i];
    var dcc = dc[i].children,
        color2 = gradient('#007ec7','#09b4dc', dcc.length);
    for (var j = 0; j < dcc.length; j++) {
        dcc[j].itemStyle.color = color2[j];
        if (dcc[j].children) {
            var dccc = dcc[j].children,
                color3 = gradient('#007ec7','#09b4dc', dccc.length);
            for (var k = 0; k < dccc.length; k++) {
                dccc[k].itemStyle.color = color3[k];
            }
        }
    }
}
option = {
    backgroundColor: '#01052a',
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    color: color,
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '90%'],
        sort: null,
        label: {
            rotate: 'radial',
            //formatter: '{b}: {@score}xxxx'
        },
        levels: [{}, {
            r0: '0%',
            r: '12%',
            itemStyle: {
                align: 'right',
                borderWidth: 0,
            },
            label: {
                // rotate: 0
                rotate: 'tangential',
            }
        }, {
            r0: '21%',
            r: '42%',
            itemStyle: {
                align: 'center',
                borderWidth: 0
            },
            label: {
                align: 'center'
            }
        }, {
            r0: '45%',
            r: '70%',
            itemStyle: {
                borderWidth: 0
            }
        }, {
            r0: '72%',
            r: '88%',
            label: {
                // position: 'outside',
                padding: 3,
                silent: false,
                textBorderWidth: 0
            },
            itemStyle: {
                borderWidth: 0
            }
        }]
    }
}