var data1 = [{
    "q": [{
        "y": "西二旗",
        "x": "13号线",
        "id": "1",
        "z": "3.87",
        "t": "201601",
        "time": "6-8时",
        "r": "第1行"
    }, {
        "y": "西二旗",
        "x": "13号线",
        "id": "2",
        "z": "30.20",
        "t": "201601",
        "time": "12-14时",
        "r": "第1行"
    }, {
        "y": "西二旗",
        "x": "13号线",
        "id": "3",
        "z": "30.61",
        "t": "201601",
        "time": "18-20时",
        "r": "第1行"
    }, {
        "y": "西二旗",
        "x": "13号线",
        "id": "4",
        "z": "6.46",
        "t": "201601",
        "time": "6-8时",
        "r": "第2行"
    }, {
        "y": "西二旗",
        "x": "13号线",
        "id": "5",
        "z": "56.19",
        "t": "201601",
        "time": "12-14时",
        "r": "第2行"
    }, {
        "y": "西二旗",
        "x": "13号线",
        "id": "6",
        "z": "57.24",
        "t": "201601",
        "time": "18-20时",
        "r": "第2行"
    }]
}, {
    "q": [{
        "y": "天通苑",
        "x": "5号线",
        "id": "13",
        "z": "0.93",
        "t": "201601",
        "time": "6-8时",
        "r": "第1行"
    }, {
        "y": "天通苑",
        "x": "5号线",
        "id": "14",
        "z": "5.66",
        "t": "201601",
        "time": "12-14时",
        "r": "第1行"
    }, {
        "y": "天通苑",
        "x": "5号线",
        "id": "15",
        "z": "7.19",
        "t": "201601",
        "time": "18-20时",
        "r": "第1行"
    }, {
        "y": "天通苑",
        "x": "5号线",
        "id": "16",
        "z": "1.53",
        "t": "201601",
        "time": "6-8时",
        "r": "第2行"
    }, {
        "y": "天通苑",
        "x": "5号线",
        "id": "17",
        "z": "11.41",
        "t": "201601",
        "time": "12-14时",
        "r": "第2行"
    }, {
        "y": "天通苑",
        "x": "5号线",
        "id": "18",
        "z": "13.71",
        "t": "201601",
        "time": "18-20时",
        "r": "第2行"
    }]
}];
obj = createGaugeOption(data1, "q", ["x", "y"], "z", ["r", "time"]);
option = {
    title: {
        text: '长宽比必须是2比1\n另外legend处echars还是有bug'
    },
    legend: obj.legend,
    series: obj.series
};

function createGaugeOption(datas, colName, legColName, dataColName, categoryColName) {
    console.log(JSON.stringify(datas))
    var colors = ['#3374b4', '#f23b67', '#04a0ea', '#aad529', '#f0b503', '#12b5b2'];
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
                    color: colors[n]
                }
            });
        }
        for (var i = 0; i < d.length; i++) {
            var rowname = ArrToStr(d[i], categoryColName[0]);
            var colname = ArrToStr(d[i], categoryColName[1]);
            var x = ($.inArray(colname, cols) + 1) / (cols.length + 1);
            var y = ($.inArray(rowname, rows) + 1) / (rows.length + 1);
            var size = 0;
            size = 1 / rows.length - 0.05 - 0.15 * n;
            var offset = [];
            if (($.inArray(rowname, rows) * cols.length + $.inArray(colname, cols)) % 2 == 0) {
                offset = [0, titleOffset(0.15, y, size) + '%'];
            } else {
                // offset=[titleOffset(0.15,x,size),0];
                offset = [titleOffset(0.15, x, size) * 2 + '%', -10];

            }

            var o = {
                name: lstr,
                type: 'gauge',
                z: 100 - n,
                min: 0,
                max: 100,
                splitNumber: 10,
                center: [x * 100 + '%', y * 100 + '%'],
                startAngle: 180,
                endAngle: 0,
                radius: size * 100 + '%',
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 8,
                        color: [
                            [100, colors[n]]
                        ]
                    }
                },
                axisTick: { // 坐标轴小标记
                    length: 5, // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: { // 分隔线
                    length: 15, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 4
                },
                title: {
                    show: (n == 0) ? true : false,
                    offsetCenter: offset,
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    }
                },
                detail: {
                    show: false
                },
                data: [{
                    value: eval("d[i]." + dataColName),
                    name: (($.inArray(rowname, rows) * cols.length + $.inArray(colname, cols)) % 2 == 0) ? colname : rowname
                }]
            }
            series.push(o);
        }
    }

    obj.series = series;
    obj.legend = {
        selectedMode: false,
        data: legs
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
    var str = "";
    if (isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            if (i != 0) {
                str += ",";
            }
            str += eval("data." + arr[i]);
        }
    } else {
        str = eval("data." + arr);
    }

    return str;
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
    return ((final - center * 2) / size) * 100
}