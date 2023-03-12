var option = {
    backgroundColor: "#fff",
    title: {
        text: "临夏自治州2015年度治理工程项目工期",
        padding: 20,
        textStyle: {
            fontSize: 17,
            fontWeight: "bolder",
            color: "#333"
        },
        subtextStyle: {
            fontSize: 13,
            fontWeight: "bolder"
        }
    },
    legend: {
        data: ["计划工期", "可行性研究阶段", "初步设计阶段", "施工图设计阶段", "项目实施阶段", "项目验收阶段"],
        align: "right",
        right: 80,
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
        axisLabel: {
            "show": true,
            "interval": 0
        }
    },
    yAxis: {
        axisLabel: {
            show: true,
            interval: 0,
            formatter: function(value, index) {
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
        data: ["临夏自治州2015年度治理工程项目", "标段一", "标段二"]
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
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
                    console.log(start0)
                    start = start0.getFullYear() + "-" + (start0.getMonth() + 1) + "-" + start0.getDate();
                }
                if (k) { //奇数
                    name = params[i].seriesName;
                    end0 = params[i].data;
                    end = end0.getFullYear() + "-" + (end0.getMonth() + 1) + "-" + end0.getDate();
                    res += name + " : " + start + "~" + end + "</br>";

                }
            }
            return res;
        }
    },
    series: [{
            name: "计划工期",
            type: "bar",
            stack: "总量0",
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
                    color: "skyblue",
                    borderColor: "#fff",
                    borderWidth: 2
                }
            },
            zlevel: -1,
            data: [new Date("2018-05-01T00:00:00.000Z"), new Date("2018-03-14T00:00:00.000Z"), new Date("2018-05-01T00:00:00.000Z")]
        },
        {
            name: "计划工期",
            type: "bar",
            stack: "总量0",
            itemStyle: {
                normal: {
                    color: "white",
                }
            },
            zlevel: -1,
            z: 3,
            data: [new Date("2018-01-01"), new Date("2018-01-01"), new Date("2018-03-15")]
        },
        {
            name: "可行性研究阶段",
            type: "bar",
            stack: "总量2",
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
                    color: "green",
                    borderColor: "#fff",
                    borderWidth: 2
                }
            },
            zlevel: -1,
            data: [new Date("2018-01-10T00:00:00.000Z"), new Date("2018-01-10T00:00:00.000Z"), new Date("2018-03-30T00:00:00.000Z")]
        },
        {
            name: "可行性研究阶段",
            type: "bar",
            stack: "总量2",
            itemStyle: {
                normal: {
                    color: "white",
                }
            },
            zlevel: -1,
            z: 3,
            data: [new Date("2018-01-02"), new Date("2018-01-02"), new Date("2018-03-16")]
        },
        {
            name: "初步设计阶段",
            type: "bar",
            stack: "总量3",
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
                    color: "red",
                    borderColor: "#fff",
                    borderWidth: 2
                }
            },
            zlevel: -1,
            data: [new Date("2018-02-20T00:00:00.000Z"), new Date("2018-01-20T00:00:00.000Z"), new Date("2018-04-10T00:00:00.000Z")]
        },
        {
            name: "初步设计阶段",
            type: "bar",
            stack: "总量3",
            itemStyle: {
                normal: {
                    color: "white"
                }
            },
            zlevel: -1,
            z: 3,
            data: [new Date("2018-02-01T00:00:00.000Z"), new Date("2018-01-12T00:00:00.000Z"), new Date("2018-04-01T00:00:00.000Z")]
        },
        {
            name: "施工图设计阶段",
            type: "bar",
            stack: "总量4",
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
                    color: "brown",
                    borderColor: "#fff",
                    borderWidth: 2
                }
            },
            zlevel: -1,
            data: [new Date("2018-03-09T00:00:00.000Z"), new Date("2018-01-25T00:00:00.000Z"), new Date("2018-04-20T00:00:00.000Z")]
        },
        {
            name: "施工图设计阶段",
            type: "bar",
            stack: "总量4",
            itemStyle: {
                normal: {
                    color: "white",
                }
            },
            zlevel: -1,
            z: 3,
            data: [new Date("2018-02-25T00:00:00.000Z"), new Date("2018-01-21T00:00:00.000Z"), new Date("2018-04-11T00:00:00.000Z")]
        },
        {
            name: "项目实施阶段",
            type: "bar",
            stack: "总量5",
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
                    color: "yellow",
                    borderColor: "#fff",
                    borderWidth: 2
                }
            },
            zlevel: -1,
            data: [new Date("2018-03-12T00:00:00.000Z"), new Date("2018-02-15T00:00:00.000Z"), new Date("2018-04-30T00:00:00.000Z")]
        },
        {
            name: "项目实施阶段",
            type: "bar",
            stack: "总量5",
            itemStyle: {
                normal: {
                    color: "white",
                }
            },
            zlevel: -1,
            z: 3,
            data: [new Date("2018-03-10T00:00:00.000Z"), new Date("2018-01-26T00:00:00.000Z"), new Date("2018-04-21T00:00:00.000Z")]
        },
        {
            name: "项目验收阶段",
            type: "bar",
            stack: "总量6",
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
                    color: 'orange',
                    borderColor: "#fff",
                    borderWidth: 2
                }
            },
            zlevel: -1,
            data: [new Date("2018-03-30T00:00:00.000Z"), new Date("2018-03-13T00:00:00.000Z"), new Date("2018-05-01T00:00:00.000Z")]
        },
        {
            name: "项目验收阶段",
            type: "bar",
            stack: "总量6",
            itemStyle: {
                normal: {
                    color: 'white',
                }
            },
            zlevel: -1,
            z: 3,
            data: [new Date("2018-03-15T00:00:00.000Z"), new Date("2018-02-16T00:00:00.000Z"), new Date("2018-04-30T00:00:00.000Z")]
        },
    ]
}