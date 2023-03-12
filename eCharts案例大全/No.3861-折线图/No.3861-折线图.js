const xAxisData = ["2020-05-30", "2020-05-31", "2020-06-01", "2020-06-02", "2020-06-03", "2020-06-04", "2020-06-05", "2020-06-06", "2020-06-07", "2020-06-08", "2020-06-09", "2020-06-10"];
option = {
    // 这个里面指定图标的样式和数据
    textStyle: {
        "fontFamily": "Din-Light"
    },
    color: ["#123dac", "#73e2e2", "#ff7e85", "#9b52ff", "#fac524", "#46caff", "#a1e867", "#10b2b2", "#ec87f7", "#f4905a", "#00baba", "#facf24", "#e89d67", "#23c6c6", "#fa8699", "#40b7fc", "#006d75", "#595959", "#f4764f", "#a640fc", "#fda23f", "#2d7ae4", "#5092ff", "#9351ed", "#8a89fe", "#df89e8", "#2797ff", "#6ad089", "#7c92e8 "],
    title: {
        text: "地区折线图（本周）",
        left: "center",
        top: "2%",
        textStyle: {
            fontSize: 19,
            color: "white",
            fontWeight: '400'
        }
    },
    legend: {
        bottom: -20,
        textStyle: { //图例文字的样式
            color: '#fff'
        },
        data: [{
            name: "白起",
            icon: "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z",
            color: '#fff'
        }, {
            name: "李泽言",
            icon: "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z"
        }, {
            name: "许墨",
            icon: "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z"
        }],
        left: "left",
        selected: {
            "白起": true,
            "李泽言": true,
            "许墨": true
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 10,
        textStyle: {
            color: "#898989",
            lineHeight: 15
        },
        type: "scroll",
        selectedMode: false, //取消图例上的点击事件
        bottom: 0,
        left: "center",
    },
    tooltip: {
        backgroundColor: "#fff",
        trigger: "axis",
        axisPointer: {
            type: "none"
        },
        textStyle: {
            color: "#565656",
            lineHeight: 18
        },
        confine: true,
        padding: 12,
        extraCssText: "box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;max-height: 100%;",
        formatter: {
            _custom: {
                type: "function",
                display: "<span>ƒ</span> (params)"
            }
        }
    },

    grid: {
        left: "4%",
        right: "4%",
        top: "20%",
        bottom: "24%"
    },
    xAxis: {
        type: "category",
        // 图与x轴
        boundaryGap: true,
        data: xAxisData,
        axisLabel: {
            fontSize: '12',
            color: "white",
            //X轴标签 label 做了特殊处理，防止左右溢出(也就是不显示第一个和最后一个标签)
            formatter: (value, index) => {
                if (index === 0) {
                    return "";
                }
                return value;
            },
            //showMaxLabel: true, //显示x轴的所有标签（与上面的二选一）
            interval: 0, //坐标刻度之间的显示间隔，默认就可以了（默认是不重叠）
            rotate: 20, //调整数值改变倾斜的幅度（范围-90到90）
            margin: 16
        },
        axisLine: {
            // x轴的刻度线，是否显示
            show: false
        },
        //坐标轴刻度相关设置
        axisTick: {
            show: true,
            alignWithLabel: true, //true 的时候有效，可以保证刻度线和标签对齐,
            lineStyle: {
                color: 'white' // x轴刻度的颜色
            }
        },
    },
    yAxis: {
        name: "",
        nameTextStyle: {
            color: "gray"
        },
        type: "value",
        axisLabel: {
            color: "white",
            inside: true,
            margin: 0,
            verticalAlign: "bottom"
        },
        splitLine: {
            lineStyle: {
                type: "dashed"
            }
        },
        minInterval: 1,
        axisLine: {
            show: false
        },
        axisTick: {
            show: true,
            alignWithLabel: true, //true 的时候有效，可以保证刻度线和标签对齐
            lineStyle: {
                color: 'white' // x轴刻度的颜色
            }
        },
    },
    series: [{
        name: "白起",
        data: [43, 58, 195, 229, 320, 211, 124, 131, 124, 360, 124, 1],
        type: "line",
        smooth: true,
        smoothMonotone: "x",
        cursor: "pointer",
        showSymbol: false,
        lineStyle: {
            shadowColor: "rgba(18,61,172,0.5)",
            shadowBlur: 10
        }
    }, {
        name: "李泽言",
        data: [23, 39, 118, 71, 116, 89, 58, 71, 51, 146, 31, 41],
        type: "line",
        smooth: true,
        smoothMonotone: "x",
        cursor: "pointer",
        showSymbol: false,
        lineStyle: {
            shadowColor: "rgba(115,226,226,0.5)",
            shadowBlur: 10
        }
    }, {
        name: "许墨",
        data: [20, 37, 91, 72, 68, 67, 54, 42, 42, 115, 41, 33],
        type: "line",
        smooth: true,
        smoothMonotone: "x",
        cursor: "pointer",
        showSymbol: false,
        lineStyle: {
            shadowColor: "rgba(255,126,133,0.5)",
            shadowBlur: 10
        }
    }]
};