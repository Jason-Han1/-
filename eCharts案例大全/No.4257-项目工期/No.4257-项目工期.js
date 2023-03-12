var option = {
    backgroundColor: "#081832",
    title: {
        text: "项目工期",
        padding: 20,
        textStyle: {
            fontSize: 17,
            fontWeight: "bolder",
            color: "#ffff"
        },
        subtextStyle: {
            fontSize: 13,
            fontWeight: "bolder",
            color: "#ffff"
        }
    },
    legend: {
        data: ["完钻", "正钻"],
        align: "right",
        right: 80,
        top: 50,
        fontSize: 17,
        fontWeight: "bolder",
        color: "#ffff"
    },
    grid: {
        containLabel: true,
        show: false,
        right: 130,
        left: 160,
        bottom: 40,
        top: 90,
        color: "#ffff"
    },
    xAxis: {
        type: "time",
        axisLabel: {
            "show": true,
            "interval": 0,
            color: "#ffff"
        }
    },
    yAxis: {
        axisLabel: {
            show: true,
            interval: 0,
            color: "#ffff",
            formatter: function(value, index) {
                var last = ""
                var max = 30;
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
        data: ["中石油井001", "中石油井002", "中石油井003"]
        
    },
    tooltip: {
        trigger: "axis",
        color: "#ffff",
        formatter: function(params) {
            var res = "";
            var name = "";
            var start0 = "";
            var start = "";
            var end0 = "";
            var end = "";
            res:{'name:1月'}
            return res;
        }
    },
    series: [{
            name: "正钻",
            type: "bar",
            stack: "总量0",
            label: {
                normal: {
                    show: true,
                    color: "#ffff",
                    position: "right",
                    formatter: function(params) {
                        return params.seriesName
                    }
                },
                color: "#ffff"
            },
            itemStyle: {
                normal: {
                    color: "#228B22",
                    borderColor: "#081832",
                    borderWidth: 2
                
                }
            },
            zlevel: -1,
            data: [
                new Date("2020-05-01"), 
                new Date("2020-03-14"), 
                new Date("2020-05-01")
                ]
        },
        {
            name: "正钻",
            type: "bar",
            stack: "总量0",
            itemStyle: {
                normal: {
                    color: "#081832",
                }
            },
            zlevel: -1,
            z: 3,
            data: [
                new Date("2020-01-01"), 
                new Date("2020-01-01"), 
                new Date("2020-03-15")]
        },


        {
            name: "完钻",
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
                    color: "#fe672c",
                    borderColor: "#081832",
                    borderWidth: 2
                }
            },
            zlevel: -1,
            data: [
                new Date("2020-02-20"), 
                new Date("2020-01-20"), 
                new Date("2020-04-10")]
        },

    ]
}