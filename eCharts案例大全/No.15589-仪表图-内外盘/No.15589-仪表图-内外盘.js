var uploadedDataURL = "/asset/get/s/data-1495173075713-rJ20wZ3gW.json";

var data = [{
    "q": [{
        "x": "T",
        "id": "1",
        "z": "13.87",
        "t": "201601",
        "time": " ",
        "color": [
            [0.166, '#91c7ae'],
            [0.5, '#63869e'],
            [0.635, '#EFC631'],
            [1, '#c23531']
        ],
        "scale": [0, 2]

    }]
}, {
    "q": [{
        "x": "T2",
        "id": "1",
        "z": "72.93",
        "t": "201601",
        "time": " ",
        "color": [
            [0.166, '#91c7ae'],
            [0.5, '#63869e'],
            [0.635, '#EFC631'],
            [1, '#c23531']
        ],
        "scale": [0, 2]
    }]
}];


obj = createGaugeOption(data, "q", ["x"], "z", ["r", "time"], "color", "scale");
setInterval(function() {
    option.series[0].data[0].value = (Math.random() * 2).toFixed(2) - 0;
    myChart.setOption(option, true);
    option.series[1].data[0].value = (Math.random() * 2).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 1000);



option = {
    title: {
        text: '仪表图-内外盘'
    },
    legend: obj.legend,
    series: obj.series
};

function createGaugeOption(datas, colName, legColName, dataColName, categoryColName, colorData, scaleData) {
    console.log(JSON.stringify(datas))
    var obj = {};
    var series = new Array();
    var legs = new Array();
    var rows = new Array();
    var cols = new Array();
    for (var n = 0; n < datas.length; n++) {
        var data = datas[n];
        var d = eval("data." + colName);
        for (var i = 0; i < d.length; i++) {
            var rowname = ArrToStr(d[i], categoryColName[0]);
            var colname = ArrToStr(d[i], categoryColName[1]);
            if ($.inArray(rowname, rows) < 0) {
                rows.push(rowname);
            }
            if ($.inArray(colname, cols) < 0) {
                cols.push(colname);
            }
        }
    }
    rows = rows.sort(fncSort);
    cols = cols.sort(fncSort);
    for (var n = 0; n < datas.length; n++) {
        var data = datas[n];
        var d = eval("data." + colName);
        if (d.length > 0) {
            var lstr = "";
            lstr = ArrToStr(d[0], legColName);
            legs.push({
                name: lstr,
                textStyle: {
                    //color: d[0].color
                }
            });
        }

        var colors = d[0].color;
        var size = 0;
        for (var i = 0; i < d.length; i++) {
            var rowname = ArrToStr(d[i], categoryColName[0]);
            var colname = ArrToStr(d[i], categoryColName[1]);
            var x = ($.inArray(colname, cols) + 1 / (n + 1)) / (cols.length + 1);
            var y = ($.inArray(rowname, rows) + 1 / (n + 1)) / (rows.length + 1);


            // 内外盘间隔 盘面大小
            size = 1 / rows.length - 0.05 - 0.45 * n;
            var offset = [];

            offset = [i, titleOffset(0.15 * (i + 1), y, size) + '%'];
            var o = {
                name: lstr,
                type: 'gauge',
                z: 100 - n,
                min: d[0].scale[0],
                max: d[0].scale[1],
                splitNumber: 10,
                //上边距
                //center: [x * 100 + '%', y * 110 + '%'],
                startAngle: 180,
                endAngle: 0,
                radius: size * 100 + '%',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors,
                        width: 30
                    }
                },
                axisTick: { // 坐标轴小标记
                    length: 38, // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: { // 分隔线
                    length: 35, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 4
                },
                title: {
                    show: true,
                    offsetCenter: offset,
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    }
                },
                detail: {
                    formatter: '{value}',
                    offsetCenter: [0, '' + (-20 * (3 - n)) + '%']
                },
                data: [{
                    value: eval("d[i]." + dataColName),
                    name: colname

                }]
            }
            series.push(o);
        }
    }

    obj.series = series;
    obj.legend = {
        selectedMode: false,
        data: colors
    };
    return obj;
}

function ReservedDecimal(data, digit) {
    var num = data + "";
    if (num.indexOf(".") < 0) {
        return num;
    }
    return num.substring(0, num.indexOf(".") + digit + 1);
}

function ArrToStr(data, arr) {
    return eval("data." + arr);
}

function fncSort(a, b) {
    var x = parseInt(a);
    var y = parseInt(b);
    if (x != y) {
        return x - y;
    } else {
        return a - b;
    }
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function titleOffset(final, center, size) {
    return ((final - center * 2) / size) * 80
}