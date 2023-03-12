var series = [];
var data = [{
        name: "版本检验测试",
        data: [new Date("2018-10-01"), new Date(""), new Date("2018-05-01"), new Date("2018-05-01")],
        type: 1,

        stack: 't0',
        prodDate: ["2018-08-01", "", "2018-04-25", "2018-04-20"],
    },
    {
        name: "版本检验测试",
        data: [new Date("2018-03-01T00:00:00.000Z"), new Date(""), new Date("2018-04-01T00:00:00.000Z"), new Date("2018-04-01T00:00:00.000Z")],

        type: 0,
        stack: 't0'
    },

    {
        name: "版本检验测试",
        data: [new Date("2018-03-01"), new Date("2018-04-14"), new Date("2018-04-01"), new Date("2018-04-01")],

        type: 1,
        stack: 't00',
        prodDate: ["2018-02-01", "2018-03-01", "2018-03-01", "2018-03-20"],
    },
    {
        name: "版本检验测试",
        data: [new Date("2018-01-18"), new Date("2018-02-01"), new Date("2018-01-01"), new Date("2018-01-01")],

        type: 0,
        stack: 't00'
    },

    {
        name: "应用组装&用户测试",
        data: [new Date("2018-01-10"), new Date("2018-01-10"), new Date("2018-03-30"), new Date("2018-03-30")],

        type: 1,
        stack: 't1',
        prodDate: ["2018-01-05", "2018-01-06", "2018-03-20", "2018-03-20"],
    },
    {
        name: "应用组装&用户测试",
        data: [new Date("2018-01-02"), new Date("2018-01-02"), new Date("2018-03-16"), new Date("2018-03-16")],

        type: 0,
        stack: 't1'
    },

    {
        name: "版本安装检验",
        data: [new Date("2018-02-20"), new Date("2018-01-20"), new Date("2018-04-10"), new Date("2018-04-10")],

        type: 1,
        stack: 't2',
        prodDate: ["2018-02-05", "2018-01-16", "2018-04-07", "2018-04-07"],
    },
    {
        name: "版本安装检验",
        data: [new Date("2018-02-01"), new Date("2018-01-12"), new Date("2018-04-01"), new Date("2018-04-01")],

        type: 0,
        stack: 't2'
    },

]
for (var i in data) {
    if (data[i].type == 1) {
        series.push({
            name: data[i].name,
            type: "bar",
            stack: data[i].stack,
            markPoint: {
                data: [{
                        name: '投产点',
                        value: data[i].prodDate[0],
                        xAxis: data[i].prodDate[0],
                        yAxis: 'VT'
                    },
                    {
                        name: '投产点',
                        value: data[i].prodDate[1],
                        xAxis: data[i].prodDate[1],
                        yAxis: 'PL2'
                    },
                    {
                        name: '投产点',
                        value: data[i].prodDate[2],
                        xAxis: data[i].prodDate[2],
                        yAxis: 'PL3'
                    },
                    {
                        name: '投产点',
                        value: data[i].prodDate[3],
                        xAxis: data[i].prodDate[3],
                        yAxis: 'PL4'
                    },
                ],
                symbolSize: 40,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'yellow' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'blue' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                label: {
                    formatter: function(params) {

                        return params.value
                    }
                }

            },
            label: {
                normal: {
                    show: true,
                    color: "#000",
                    position: "right",
                    formatter: function(params) {
                        return params.seriesName
                    }
                }
            },
            itemStyle: {
                normal: {
                    //color: data[i].color,
                    borderColor: "#fff",
                    borderWidth: 2,
                },

            },
            zlevel: -1,
            data: data[i].data
        }, )
    } else {
        series.push({
            name: data[i].name,
            type: "bar",
            stack: data[i].stack,
            itemStyle: {
                normal: {
                    color: '#fff',
                }
            },
            zlevel: -1,
            z: 3,
            data: data[i].data
        })
    }
}

var option = {
    backgroundColor: "#fff",
    title: {
        text: "环境计划安排",
        left: 'center',
        padding: 20,
        position: 'center',
        textStyle: {
            fontSize: 17,
            fontWeight: "bolder",
            color: "#333"
        },
    },
    legend: {

        data: ["版本检验测试", "应用组装&用户测试", "版本安装检验"],

        top: 50
    },
    grid: {
        containLabel: true,
        show: false,
        right: 130,
        left: 40,
        bottom: 40,
        top: 90
    },
    xAxis: {
        type: "time",
        maxInterval: 3600 * 1000 * 24 * 30,

        axisLabel: {
            "show": true,
            "interval": 0
        }
    },
    yAxis: {
        splitLine: {
            show: true
        },
        name: '所属环境',
        axisLabel: {
            show: true,
            interval: 0,
            formatter: function(value, index) {
                //console.log(value,index)
                var last = ""
                var max = 5;
                var len = value.length;
                var hang = Math.ceil(len / max);
                if (hang > 1) {
                    for (var i = 0; i < hang; i++) {
                        var start = i * max;
                        var end = start + max;
                        var temp = value.substring(start, end) + "\n";
                        last += temp; //凭借最终的字符串
                    }
                    return last;
                } else {
                    return value;
                }
            }
        },

        data: ["VT", "PL2", "PL3", "PL4"]
    },
    tooltip: {
        trigger: "axis",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            //console.log(params[1])
            var res = "";
            var name = "";
            var start0 = "";
            var start = "";
            var end0 = "";
            var end = "";
            for (var i in params) {
                var k = i % 2;
                if (!k) { //偶数
                    start0 = params[i].data;
                    // console.log(start0)
                    start = start0.getFullYear() + "-" + (start0.getMonth() + 1) + "-" + start0.getDate();
                }
                if (k) { //奇数
                    name = params[i].seriesName;
                    end0 = params[i].data;
                    end = end0.getFullYear() + "-" + (end0.getMonth() + 1) + "-" + end0.getDate();
                    res += name + " : " + end + "~" + start + "</br>";

                }
            }
            return res;
        }
    },
    series: series
}