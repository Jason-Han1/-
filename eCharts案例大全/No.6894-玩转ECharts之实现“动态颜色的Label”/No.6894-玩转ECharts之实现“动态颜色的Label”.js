var formats = {}
// 这里是右图的完成配置项，文中介绍的效果核心为"label"配置项。
option = {
    "backgroundColor": 'rgb(0,0,0)',
    "color": ["#1576d2", "#d14a82", "#26c1f2", "#a166ff", "#1271cc", "#272f67", "rgba(156, 43, 182, 1)"],
    "series": [{
        "radius": ["42%", "48%", 0],
        "data": [{
            "value": 1,
            "itemStyle": {
                "color": "#a0a0a0",
                "matchColor": true,
                "opacity": 0.3
            }
        }],
        "type": "pie",
        "silent": true,
        "label": {
            "show": false
        },
        "labelLine": {
            "show": false
        },
        "animation": false
    }, {
        "type": "pie",
        "data": [{
            "name": "x0",
            "value": 80,
            "itemStyle": {},
            "_startArc": 0,
            "_endArc": 1.6589268137767885,
            "_color": "#1576d2",
            "_percent": 0.264026402640264
        }, {
            "name": "x1",
            "value": 98,
            "itemStyle": {},
            "_startArc": 1.6589268137767885,
            "_endArc": 3.6911121606533546,
            "_color": "#d14a82",
            "_percent": 0.3234323432343234
        }, {
            "name": "x2",
            "value": 10,
            "itemStyle": {},
            "_startArc": 3.6911121606533546,
            "_endArc": 3.898478012375453,
            "_color": "#26c1f2",
            "_percent": 0.033003300330033
        }, {
            "name": "x3",
            "value": 80,
            "itemStyle": {},
            "_startArc": 3.898478012375453,
            "_endArc": 5.557404826152241,
            "_color": "#a166ff",
            "_percent": 0.264026402640264
        }, {
            "name": "x4",
            "value": 35,
            "itemStyle": {},
            "_startArc": 5.557404826152241,
            "_endArc": 6.283185307179586,
            "_color": "#1271cc",
            "_percent": 0.11551155115511551
        }],
        "radius": ["45%", "65%"],
        // 核心代码
        "label": {
            "nameColor": "#CACACA",
            "valueColor": "color",
            "labelStyle": "style2",
            "formatterText": ["{b}-{d}%", "{d}%-{b}"],
            "fontSize": 18,
            "opacity": 1,
            "position": "outside",
            "formatter": function formatterFunc(params) {
                // 这里分别定义了左右两种情况的formatter值，根据数值的左右分别取用。
                const formatter = ["{a|}{b_color|{b}} {c_color|{d}}", "{c_color|{d}} {b_color|{b}}{a|}"];
                const formatterText = ["{b}-{d}%", "{d}%-{b}"];
                var templateLen = formatter.length;
                var values = params.data; // 内容

                var formatterTextIsArray = Array.isArray(formatterText);

                if (templateLen === 0) {
                    return null;
                }

                if (templateLen === 1 && !formatterTextIsArray) {
                    return getText(formatter[0], values, formatterText);
                } else {
                    // 将输入:[f1][t1,t2]、 [f1,f2][t1]、[f1,f2]t1
                    // 都写成[f1,f2][t1,t2]的形式，以简化判断
                    if (!formatterTextIsArray) {
                        formatterText = [formatterText, formatterText];
                    }

                    if (formatterText.length === 1) {
                        formatterText[1] = formatterText[0];
                    }

                    if (templateLen === 1) {
                        formatter[1] = formatter[0];
                    } // 镜像返回

                    // 这里计算了当前数值的角度，用于区分左右。
                    var midAngle = (values._startArc + values._endArc) / 2;

                    if (midAngle <= Math.PI) {
                        return getText(formatter[0], values, formatterText[0]);
                    } else {
                        return getText(formatter[1], values, formatterText[1]);
                    }
                }
            },
            "matchColor": true,
            "rich": {
                "a": {
                    "color": "#999",
                    "height": 12,
                    "width": 8,
                    "backgroundColor": "#264884"
                },
                "c": {
                    "fontSize": 18,
                    "height": 30,
                    "verticalAlign": "middle",
                    "fontFamily": "微软雅黑"
                },
                "b": {
                    "color": "#CACACA",
                    "borderColor": "#264884",
                    "borderWidth": 1,
                    "verticalAlign": "middle",
                    "fontSize": 18,
                    "height": 30,
                    "padding": [0, 10],
                    "fontFamily": "微软雅黑"
                },
                "a_1576d2": {
                    "color": "#999",
                    "height": 12,
                    "width": 8,
                    "backgroundColor": "#264884"
                },
                "c_1576d2": {
                    "fontSize": 18,
                    "height": 30,
                    "verticalAlign": "middle",
                    "fontFamily": "微软雅黑"
                },
                "b_1576d2": {
                    "color": "#CACACA",
                    "borderColor": "#264884",
                    "borderWidth": 1,
                    "verticalAlign": "middle",
                    "fontSize": 18,
                    "height": 30,
                    "padding": [0, 10],
                    "fontFamily": "微软雅黑"
                },
                "a_d14a82": {
                    "color": "#999",
                    "height": 12,
                    "width": 8,
                    "backgroundColor": "#264884"
                },
                "c_d14a82": {
                    "fontSize": 18,
                    "height": 30,
                    "verticalAlign": "middle",
                    "color": "#d14a82",
                    "fontFamily": "微软雅黑"
                },
                "b_d14a82": {
                    "color": "#CACACA",
                    "borderColor": "#264884",
                    "borderWidth": 1,
                    "verticalAlign": "middle",
                    "fontSize": 18,
                    "height": 30,
                    "padding": [0, 10],
                    "fontFamily": "微软雅黑"
                },
                "a_26c1f2": {
                    "color": "#999",
                    "height": 12,
                    "width": 8,
                    "backgroundColor": "#264884"
                },
                "c_26c1f2": {
                    "fontSize": 18,
                    "height": 30,
                    "verticalAlign": "middle",
                    "color": "#26c1f2",
                    "fontFamily": "微软雅黑"
                },
                "b_26c1f2": {
                    "color": "#CACACA",
                    "borderColor": "#264884",
                    "borderWidth": 1,
                    "verticalAlign": "middle",
                    "fontSize": 18,
                    "height": 30,
                    "padding": [0, 10],
                    "fontFamily": "微软雅黑"
                },
                "a_a166ff": {
                    "color": "#999",
                    "height": 12,
                    "width": 8,
                    "backgroundColor": "#264884"
                },
                "c_a166ff": {
                    "fontSize": 18,
                    "height": 30,
                    "verticalAlign": "middle",
                    "color": "#a166ff",
                    "fontFamily": "微软雅黑"
                },
                "b_a166ff": {
                    "color": "#CACACA",
                    "borderColor": "#264884",
                    "borderWidth": 1,
                    "verticalAlign": "middle",
                    "fontSize": 18,
                    "height": 30,
                    "padding": [0, 10],
                    "fontFamily": "微软雅黑"
                },
                "a_1271cc": {
                    "color": "#999",
                    "height": 12,
                    "width": 8,
                    "backgroundColor": "#264884"
                },
                "c_1271cc": {
                    "fontSize": 18,
                    "height": 30,
                    "verticalAlign": "middle",
                    "color": "#1271cc",
                    "fontFamily": "微软雅黑"
                },
                "b_1271cc": {
                    "color": "#CACACA",
                    "borderColor": "#264884",
                    "borderWidth": 1,
                    "verticalAlign": "middle",
                    "fontSize": 18,
                    "height": 30,
                    "padding": [0, 10],
                    "fontFamily": "微软雅黑"
                },
                "a_272f67": {
                    "color": "#999",
                    "height": 12,
                    "width": 8,
                    "backgroundColor": "#264884"
                },
                "c_272f67": {
                    "fontSize": 18,
                    "height": 30,
                    "verticalAlign": "middle",
                    "color": "#272f67",
                    "fontFamily": "微软雅黑"
                },
                "b_272f67": {
                    "color": "#CACACA",
                    "borderColor": "#264884",
                    "borderWidth": 1,
                    "verticalAlign": "middle",
                    "fontSize": 18,
                    "height": 30,
                    "borderColor": "#264884",
                    "borderWidth": 1,
                    "padding": [0, 10],
                    "fontFamily": "微软雅黑"
                },
                "a_156_43_182_1": {
                    "color": "#999",
                    "height": 12,
                    "width": 8,
                    "backgroundColor": "#264884"
                },
                "c_156_43_182_1": {
                    "fontSize": 18,
                    "height": 30,
                    "verticalAlign": "middle",
                    "color": "rgba(156, 43, 182, 1)",
                    "fontFamily": "微软雅黑"
                },
                "b_156_43_182_1": {
                    "color": "#CACACA",
                    "verticalAlign": "middle",
                    "fontSize": 18,
                    "height": 30,
                    "borderColor": "#264884",
                    "borderWidth": 1,
                    "padding": [0, 10],
                    "fontFamily": "微软雅黑"
                }
            }
        },
        "labelLine": {
            "lineStyle": {
                "color": "#fff"
            }
        },
        "itemStyle": {
            "borderColor": "#000",
            "borderWidth": 2
        },
        "hoverAnimation": false
    }]
}
// 以下代码均为辅助性代码理论上不需要详细阅读，未做详细介绍
function toFixed(value, maxDecimals, roundingFunction, optionals) {
    var splitValue = value.toString().split('.');
    var minDecimals = maxDecimals - (optionals || 0);
    var boundedPrecision = splitValue.length === 2 ? Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals) : minDecimals;
    var power = Math.pow(10, boundedPrecision);
    var output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);

    if (optionals > maxDecimals - boundedPrecision) {
        var optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
        output = output.replace(optionalsRegExp, '');
    }

    return output;
}

// 以下代码均为辅助性代码理论上不需要详细阅读，未做详细介绍
function numIsNaN(value) {
    return typeof value === 'number' && isNaN(value);
}

// 以下代码均为辅助性代码理论上不需要详细阅读，未做详细介绍
function numerify(input, formatType, roundingFunction) {
    var value = void 0;

    if (input === 0 || typeof input === 'undefined') {
        value = 0;
    } else if (input === null || numIsNaN(input)) {
        value = null;
    } else if (typeof input === 'string') {
        if (options.zeroFormat && input === options.zeroFormat) {
            value = 0;
        } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
            value = null;
        } else {
            value = +input;
        }
    } else {
        value = +input || null;
    }

    return format(value, formatType, roundingFunction);
}

// 以下代码均为辅助性代码理论上不需要详细阅读，未做详细介绍
function format(value, formatType, roundingFunction) {
    formatType = formatType || options.defaultFormat;
    roundingFunction = roundingFunction || Math.round;
    var output = void 0;
    var formatFunction = void 0;

    if (value === 0 && options.zeroFormat !== null) {
        output = options.zeroFormat;
    } else if (value === null && options.nullFormat !== null) {
        output = options.nullFormat;
    } else {
        for (var kind in formats) {
            if (formats[kind] && formatType.match(formats[kind].regexp)) {
                formatFunction = formats[kind].format;
                break;
            }
        }
        formatFunction = formatFunction || numberToFormat.bind(null, options);
        output = formatFunction(value, formatType, roundingFunction, numerify);
    }

    return output;
}

// 以下代码均为辅助性代码理论上不需要详细阅读，未做详细介绍
function numberToFormat(options, value, format, roundingFunction) {
    var abs = Math.abs(value);
    var negP = false;
    var optDec = false;
    var abbr = '';
    var decimal = '';
    var neg = false;
    var abbrForce = void 0;
    var signed = void 0;
    format = format || '';

    value = value || 0;

    if (~format.indexOf('(')) {
        negP = true;
        format = format.replace(/[(|)]/g, '');
    } else if (~format.indexOf('+') || ~format.indexOf('-')) {
        signed = ~format.indexOf('+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
        format = format.replace(/[+|-]/g, '');
    }
    if (~format.indexOf('a')) {
        abbrForce = format.match(/a(k|m|b|t)?/);

        abbrForce = abbrForce ? abbrForce[1] : false;

        if (~format.indexOf(' a')) abbr = ' ';
        format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

        if (abs >= TRILLION && !abbrForce || abbrForce === 't') {
            abbr += options.abbrLabel.tr;
            value = value / TRILLION;
        } else if (abs < TRILLION && abs >= BILLION && !abbrForce || abbrForce === 'b') {
            abbr += options.abbrLabel.bi;
            value = value / BILLION;
        } else if (abs < BILLION && abs >= MILLION && !abbrForce || abbrForce === 'm') {
            abbr += options.abbrLabel.mi;
            value = value / MILLION;
        } else if (abs < MILLION && abs >= THOUSAND && !abbrForce || abbrForce === 'k') {
            abbr += options.abbrLabel.th;
            value = value / THOUSAND;
        }
    }
    if (~format.indexOf('[.]')) {
        optDec = true;
        format = format.replace('[.]', '.');
    }
    let int = value.toString().split('.')[0];
    let precision = format.split('.')[1];
    let thousands = format.indexOf(',');
    let leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;

    if (precision) {
        if (~precision.indexOf('[')) {
            precision = precision.replace(']', '');
            precision = precision.split('[');
            decimal = toFixed(value, precision[0].length + precision[1].length, roundingFunction, precision[1].length);
        } else {
            decimal = toFixed(value, precision.length, roundingFunction);
        }

        int = decimal.split('.')[0];
        decimal = ~decimal.indexOf('.') ? '.' + decimal.split('.')[1] : '';
        if (optDec && +decimal.slice(1) === 0) decimal = '';
    } else {
        int = toFixed(value, 0, roundingFunction);
    }
    if (abbr && !abbrForce && +int >= 1000 && abbr !== ABBR.trillion) {
        int = '' + +int / 1000;
        abbr = ABBR.million;
    }
    if (~int.indexOf('-')) {
        int = int.slice(1);
        neg = true;
    }
    if (int.length < leadingCount) {
        for (let i = leadingCount - int.length; i > 0; i--) {
            int = '0' + int;
        }
    }

    if (thousands > -1) {
        int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + ',');
    }

    if (!format.indexOf('.')) int = '';

    let output = int + decimal + (abbr || '');

    if (negP) {
        output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
    } else {
        if (signed >= 0) {
            output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
        } else if (neg) {
            output = '-' + output;
        }
    }

    return output;
}

// 以下代码均为辅助性代码理论上不需要详细阅读，未做详细介绍
function getText(template, values, formatterText) {
    const {
        name,
        value,
        _percent
    } = values;
    // 修改颜色
    template = getRichColor(template, values);

    // 内容
    const paramsMap = {
        '{b}': name,
        '{c}': value,
        '{d}': Math.round(_percent * 100),
        '{d.00}': numerify(_percent * 100, '0.00')
    };
    const regex = /(\{d[.]00\})|(\{[a-d]\})/g;
    let splitArray = template.split(regex);
    let resFormatter = null;
    if (!formatterText) {
        splitArray.forEach((d, idx) => {
            if (regex.test(d)) {
                splitArray[idx] = paramsMap[d];
            }
        });
        resFormatter = splitArray.join('');
    } else {
        let setTextsArray = formatterText.split('-');
        const sourceLength = setTextsArray.length;
        setTextsArray.forEach((sourceString, i) => {
            let sourceSplits = sourceString.split(regex);
            sourceSplits.forEach((s, idx) => {
                if (regex.test(s)) {
                    sourceSplits[idx] = paramsMap[s];
                }
            });
            setTextsArray[i] = sourceSplits.join('');
        });
        // template set
        let sourceIndex = 0;
        splitArray.forEach((d, idx) => {
            if (regex.test(d)) {
                if (sourceIndex < sourceLength) {
                    splitArray[idx] = setTextsArray[sourceIndex];
                    sourceIndex++;
                } else {
                    splitArray[idx] = '';
                }
            }
        });
        resFormatter = splitArray.join('');
    }
    return resFormatter;
}

// 以下代码均为辅助性代码理论上不需要详细阅读，未做详细介绍
function getRichColor(template, values) {
    const {
        _color
    } = values;
    const regex = /(_color\|)/g;
    let splitArray = template.split(regex);
    splitArray.forEach((d, idx) => {
        if (regex.test(d)) {
            splitArray[idx] = getColorKeyName(_color) + '|';
        }
    });
    return splitArray.join('');
}

// 以下代码均为辅助性代码理论上不需要详细阅读，未做详细介绍
function getColorKeyName(color) {
    let colorBadge = color;
    if (color && color.indexOf('#') >= 0) {
        colorBadge = color.replace('#', '_');
    } else if (color && (color.indexOf('rgb') >= 0 || color.indexOf('rgba') >= 0)) {
        const colorMatch = colorBadge.match(/\(([^)]*)\)/);
        if (colorMatch) {
            colorBadge = '_' + colorMatch[1].replace(/(\s*)\,(\s*)/g, '_');
            colorBadge = colorBadge.replace(/(\s*)(\%|\.)(\s*)/g, '_');
        }
    } else if (color && color.indexOf('hsl') >= 0) {
        const colorMatch = colorBadge.match(/\(([^)]*)\)/);
        if (colorMatch) {
            colorBadge = '_' + colorMatch[1].replace(/(\s*)\,(\s*)/g, '_');
            colorBadge = colorBadge.replace(/(\s*)(\%|\.)(\s*)/g, '_');
        }
    }
    return colorBadge;
}