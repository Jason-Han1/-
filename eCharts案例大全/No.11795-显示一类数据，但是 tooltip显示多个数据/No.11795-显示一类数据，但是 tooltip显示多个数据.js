var option_devices_huoyue = ["30%","40%","30%","60%","41%","42%","43%","20%","50%","90%"]; //设备活跃度
option = {
    // legend: {
    //     data:[],
    //     selected: {
    //         // 选中'系列1'
    //         '测量人次': true,
    //         // 不选中'系列2'
    //         '生成报告': false
    //     },
    // },
    grid: {
        left: "5px",
        right: "40px",
        bottom: "20px",
        top: "40px",
        containLabel: true
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
            label: {
                show: true //显示横坐标文字背景
            }
        },
        formatter: function(data) {
            let item = data[0];
            return `${item.axisValue}</br>${item.marker}使用量：${
                  item.value
                }</br>${item.marker}活跃度：${
                  option_devices_huoyue[item.dataIndex]
                }`;
        }
    },
    xAxis: {
        name: "日期",
        boundaryGap: false, //false代表是零刻度开始，设置为true代表离零刻度间隔一段距离
        data: ["3.10-1.17","3.11-3.18","3.12-3.19","3.13-3.20","3.14-3.21","3.15-3.22","3.16-3.23","3.17-3.24","3.18-3.25","3.19-3.26"],
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisTick: {
            show: false
        },
        axisLine: {
            onZero: false,
            show: true,
            lineStyle: {
                color: "#979797",
                width: 1.2 //这里是为了突出显示加上的
            },
            // 以下属性画箭头的
            symbol: ["none", "arrow"],
            symbolSize: [6, 12],
            symbolOffset: [0, 10]
        },
        axisLabel: {
            interval: 1, //隔几个显示
            rotate: 0,
            showMinLabel: true,
            textStyle: {
                color: "#686868"
            },
            formatter: function(val) {
                console.log(val);
                var strs = val.split("-"); //字符串数组
                var str = strs[0] + "-\n" + strs[1];
                return str;
            }
        }
    },
    yAxis: {
        name: "使用量",
        nameTextStyle: {
            color: "#686868"
            // fontSize:16,
        },
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: {
                color: "#979797",
                width: 1.2 //这里是为了突出显示加上的
            },
            // 以下属性画箭头的
            symbol: ["none", "arrow"],
            symbolSize: [6, 12],
            symbolOffset: [0, 10]
        },
        axisTick: {
            show: false //显示刻度线
        },
        axisLabel: {
            textStyle: {
                color: "#686868"
            }
        }
    },
    // dataZoom: [{ //开启缩放
    //     type: 'inside',
    //     start: 0,
    //     end: 100
    // }],
    series: [{
            // For shadow
            type: "line",
            smooth: false, //圆滑曲线
            showSymbol: false, //显示拐点中间的圆圈
            areaStyle: {
                color: "#f4f9ff"
            },
            name: "测量人次",
            // barWidth: 12, //柱图宽度
            // animation: true,
            itemStyle: {
                normal: {
                    color: "#5883EE"
                }
            },
            data: [23, 43, 68, 100, 145, 177, 223, 367, 400, 599]
        }
        // {
        //     type: 'line',
        //     name:'生成报告',
        //     data: [],
        // }
    ]
}