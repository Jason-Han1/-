
var data = [{name:'a',testRate:0.56,score:0.80,state:'薄弱'},{name:'a',testRate:1.56,score:1.81,state:'薄弱'},{name:'a',testRate:0.56,score:0.80,state:'薄弱'},{name:'a',testRate:0.56,score:0.80,state:'薄弱'},{name:'a',testRate:0.56,score:0.80,state:'薄弱'},{name:'a',testRate:0.56,score:0.80,state:'薄弱'},{name:'a',testRate:0.56,score:0.80,state:'薄弱'}]

option = {
    backgroundColor: '#fff',
    color: ["RGB(34,215,187)", "RGB(45,188,255)"],
    title: {
        top: 18,
        left: 'center',
        textStyle: {
            color: '#333',
            fontSize: 16,
            fontFamily: "MicrosoftYaHei-Bold"
        },
    },
    legend: {
        show: false
    },
    grid: {
        top: "35%", //距上边距
        left: "10%", //距离左边距
        right: "10%", //距离右边距
        bottom: "10%", //距离下边距
    },
    xAxis: {
        name: "知识点",
        data: ["a", "b", "c", "d", "e", "f", "g"],
        axisTick: {
            show: true,
            alignWithLabel: true,
            length: 0,
        },
        nameTextStyle: {
            color: "#999",
            
        },
        axisLabel:{
            show:false
        },
        boundaryGap: false,
        //轴线样式
        axisLine: {
            lineStyle: {
                color: "#e0e7ff",
            },
        },
    },
    yAxis: {
        name: "认知积分(分)",
        max: 100,
        min: 0,
        nameTextStyle: {
            color: "#999",
        },
         axisLabel:{
            color:'#999'
        },
        //网格样式
        splitLine: {
            show: true,
            lineStyle: {
                color: "RGBA(128,151,177,0.76)",
                width: 1,
                type: "dashed",
            },
        },
        //轴线样式
        axisLine: {
            lineStyle: {
                color: "#e0e7ff",
            },
        },
        axisTick: {
            show: false, //不显示刻度
            alignWithLabel: true, //刻度与标签对齐
            interval: 1,
        },
    },
    tooltip: {
        confine: true,
        trigger: "axis", //axis为整个系列（a1有效），item为各个部分（a1无效）
        // position: 'bottom', //trigger: 'item'有效
        formatter: function(a){
            console.log(a[0].dataIndex);
            var i = a[0].dataIndex;
            var text = a[0].name+"<br>测试概率&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data[i].testRate+"<br>中高考分值&nbsp;&nbsp;&nbsp;&nbsp;"+data[i].score+"<br>掌握程度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data[i].state;
            return text;
        },
    },
    series: [{
            name: "优秀学生",
            type: "line",
            symbol: "none",
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "#ffffff",
                        },
                        {
                            offset: 1,
                            color: "RGBA(34,215,187,0.5)",
                        },
                    ]),
                },
            },
            data: [80, 90, 70, 80, 70, 90, 90],
        }
    ]
};