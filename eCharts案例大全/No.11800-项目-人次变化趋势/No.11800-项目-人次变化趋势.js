option = {
    title: {
        text: '标题',
        subtext: '最佳报告数：1000',
        textStyle:{
    　　　　 fontSize:14,
            color:'#565656',
            fontWeight:500,
        },
        subtextStyle:{
            fontSize:12,
            color:'#565656',
            fontWeight:400,
        },
        top:0
    },
    grid: {
        left: "5px",
        right: "40px",
        bottom: "20px",
        top: "60px",
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
            return `${item.axisValue}</br>${item.marker}测量人次：${item.value}`;
        }
    },
    dataZoom: {
        show: true,
        start: 0,
        end: 100,
        bottom: 40,
        zoomLock:true,
    },
    xAxis: {
        name: "日期",
        boundaryGap: false, //false代表是零刻度开始，设置为true代表离零刻度间隔一段距离
        data: ['2.1', '2.2', '2.3', '2.4', '2.5','2.1', '2.2', '2.3', '2.4', '2.5','2.1', '2.2', '2.3', '2.4', '2.5','2.1', '2.2', '2.3', '2.4', '2.5'],
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
            }
        }
    },
    yAxis: {
        
        name: "人次",
        nameTextStyle: {
            color: "#686868"
            // fontSize:16,
        },
         nameGap:5,//轴名字距离轴距离
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
            data: [30, 40, 50, 16, 60,30, 40, 50, 16, 60,30, 40, 50, 16, 60,30, 40, 50, 16, 60]
        }
        // {
        //     type: 'line',
        //     name:'生成报告',
        //     data: [],
        // }
    ]
};
// 根据数据设置默认展示的一页的数据条数
option.dataZoom.start =100 - 100/(option.xAxis.data.length/(5-1))//每页显示5条，计算出来多少页数


