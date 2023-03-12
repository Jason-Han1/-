option = {
    title: {
        text: '频谱'
    },
    grid: {
        left: "6%", //距离左边的距离
        right: "1%", //距离右边的距离
        bottom: "6%", //距离下边的距离
        top: "4%", //距离上边的距离
        height: "30%" // 高度
    },
    xAxis: {
        name: "频率 / GHz",
        nameTextStyle: {
            align: "center",
            verticalAlign: "bottom",
            fontSize: 14
        },
        nameLocation: 'center',
        nameGap: 50,
        type: "value",
        min: 0,
        max: 6000,
        splitNumber: 6,
        // 格式化显示
        axisLabel: {
            formatter: function(value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                let val = value / 1000;
                return val;
            }
        },
        // 设置次要的网格标线
        minorSplitLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        }
    },
    yAxis: {
        name: "功率密度 / nW/m2",
        nameTextStyle: {
            align: "center",
            verticalAlign: "bottom",
            fontSize: 14
        },
        nameLocation: 'center',
        nameGap: 50,
        type: "log",
        min: 0.0001,
        max: 100000,
        logBase: 10,

    },
    series: [{ // 线
        type: 'line',
        symbol: 'none',
        lineStyle: {
            color: "#000",
            width: 1
        },
        //标记点
        markPoint: {
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: "red"
            },
            label: {
                show: true,
                position: 'top',
                formatter: function(param) {
                    console.log(param)
                    return param.data.coord[1];
                }
            },



            data: []
        }
    }],
    dataset: { // 数据源
        source: [
            [0, "13.390"],
            [25, "10.047"],
            [50, "17.850"],
            [600, 110],
            [700, 130]

        ]
    }
};