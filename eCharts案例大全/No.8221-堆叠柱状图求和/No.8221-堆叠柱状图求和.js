option = {
    title: {
        text: '分类销量（堆叠柱状图求和）'
    },
    legend: {
        y: "bottom",
        data: ['百货', '电子', '服装']
    },
    xAxis: [{
        type: "category",
        data: [
            20190612,
            20190613,
            20190614,
            20190615
        ]
    }],
    yAxis: [{
        type: "value"
    }],
    series: [{
            name: "百货",
            type: "bar",
            stack: "1",
            data: [
                10,
                14,
                17,
                8
            ],
            label: {
                show: false,
                position: 'top',
                color: 'black',
                formatter: function(params) {
                    return params.value
                }
            }
        },
        {
            name: "电子",
            type: "bar",
            stack: "1",
            data: [
                1,
                12,
                9,
                22
            ],
            label: {
                show: false,
                position: 'top',
                color: 'black',
                formatter: function(params) {
                    return params.value
                }
            }
        },
        {
            name: "服装",
            type: "bar",
            stack: "1",
            data: [
                1,
                8,
                13,
                20
            ],
            label: {
                show: true,
                position: 'top',
                color: 'black',
                formatter: function(params) {
                    return params.value
                }
            }
        }
    ]
}
////求和
var series = option["series"];
var fun = function(params) {
    var datavalue = 0;
    for (var i = 0; i < series.length; i++) {
        datavalue += series[i].data[params.dataIndex]
    }
    return datavalue;
}

if(series[series.length - 1]){
  series[series.length - 1]["label"]["formatter"] = fun;  
}

//点击图例求和
myChart.on("legendselectchanged", function(obj) {
    var b = obj.selected,
        d = [];
    for (var key in b) {
        if (b[key]) {
            for (var i = 0, l = series.length; i < l; i++) {
                var changename = series[i]["name"];
                if (changename == key) {
                    d.push(i);
                }
            }
        }
    }
    var fun = function(params) {
        var datavalue = 0;
        for (var i = 0; i < d.length; i++) {
            for (var j = 0; j < series.length; j++) {
                if (d[i] == j) {
                    datavalue += series[j].data[params.dataIndex]
                }
            }
        }
        return datavalue
    }
    for (var i = 0; i < series.length; i++) {
        series[i]["label"]["show"] = false;
    }
    for (var i = series.length - 1; i >= 0; i--) {
        var name = series[i]["name"];
        if (obj["selected"][name]) {
            series[i]["label"]["formatter"] = fun
            series[i]["label"]["show"] = true
            break;
        }
    }
    myChart.setOption(option);
})