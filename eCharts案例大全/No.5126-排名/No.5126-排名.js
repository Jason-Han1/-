option = {
    backgroundColor:"#0E142D",
    tooltip: {
        formatter: "{b}:{c}",
    },
    grid: {
        left: "8%",
        right: "5%",
        bottom: "0%",
        top: "15%",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        axisLine: {
            
            lineStyle: {
                color: "#35426E",
            },
        },
        axisLabel: {
            fontSize: 14,
            interval: 0,
            color: "#fff",
        },
        axisTick: {
            //x轴刻度线
            show: false,
            lineStyle: {
                color: "#fff",
            },
        },
        data: [
            "镇街1",
            "镇街2",
            "镇街3",
            "镇街4",
            "镇街5",
            "镇街6",
            "镇街7",
            "镇街8",
            "镇街9",
            "镇街10"
        ],
    },
    yAxis: {
        type: "value",
        name: "",
        nameLocation: "end", //坐标位置，支持start,end，middle
        
        min: 0,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#35426E",
                
            },
           show: false,
        },
        axisLabel: {
            show: false,
            ontSize: 24,
            formatter: "{value}",
             color: "#fff",
            
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "red",
            },
        },
        axisTick: {
            show: false,
            
            
        },
    },
    series: [{
        type: "bar",
        barWidth: 20,
        data: [1, 2,3, 4, 5, 6, 7, 8, 9, 10],
        itemStyle: {
            normal: {
               
                label: {
                    show: true,
                    position: "top",
                    formatter: "第{c}名",
                    color:'#ffffff',
                    fontSize: 16
                },
            },
            
        },
        
    }, ],
    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#42A8F7' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#42DBF7' // 100% 处的颜色
                    }], false),
};