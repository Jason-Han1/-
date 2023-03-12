// 绘制类型配置
var shape = 'circle'
var icon = "path://M853.333333 597.333333l-341.333333 426.666667-341.333333-426.666667h682.666666zM512 0l341.333333 426.666667H170.666667l341.333333-426.666667z"

var sData = {
    name: ['1月1日', '1月2日'],
    data: [
        [80, 50, 85],
   
    ]
}


option = {
    
    normal: {
        top: 200,
        left: 300,
        width: 500,
        height: 400,
        zIndex: 6,
        backgroundColor:'red'
    },
    
    tooltip: {},
    toolbox: {
        show: true,
        feature: {
            myTool:{ //自定义方法 配置   我这是为了实现 饼图切换为柱状图
                show : true,
                title : '绘制类型',
                icon : icon,
                onclick : function (){
                   if(shape == 'circle'){
                       shape = 'polygon'
                   }else if(shape == 'polygon'){
                       shape = 'circle'
                   }
                   
                   option.radar.shape = shape
                   myChart.setOption(option, true)
                }
            },
        },
        left: 20,
        top: 20,
    },
    legend: {
        show: true,
        icon: "circle",
        left: "center",
        top: "90%",
        orient: "horizontal",
        textStyle: {
            fontSize: 14,
            color: "color"
        },
        data: sData.name // ["数据1", "数据2"]
    },
    radar: {
        center: ["50%", "50%"],
        radius: "70%",
        startAngle: 90,
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        axisLabel: {
            show: false,
            fontSize: 18,
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {  //轴线
            show: true,
            lineStyle: {
                color: "#00FCFD"//
            }
        },
        splitLine: {   //网线
            show: true,
            lineStyle: {
                color: "#09BEEB"//
            }
        },
        indicator: [
            { "name": "A类", "max": 100 }, 
            { "name": "B类", "max": 100 }, 
            { "name": "C类", "max": 100 }, 
        ]
    },
    series: [{
        name: sData.name[0],
        type: "radar",
        symbol: "circle",
        symbolSize: 5,
        areaStyle: {   //中间面积
            normal: {
                color: "rgba(0,255,255,0.2)"
            }
        },
        itemStyle:{   //数据点
            color:'#00FFFF',
            borderColor:'#00FFFF',
            borderWidth:5,
        },
        lineStyle: {
            normal: {
                type: "dashed",
                
                color: "#00FFFF",
                width: 2
            }
        },
        data: [
            sData.data[0]
        ]
    }, {
        name: sData.name[1],
        type: "radar",
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
            normal: {
                color:'rgba(19, 173, 255, 1)',
                borderColor: "rgba(19, 173, 255, 0.4)",
                borderWidth: 5
            }
        },
        areaStyle: {
            normal: {
                color: "rgba(19, 173, 255, 0.5)"
            }
        },
        lineStyle: {
            normal: {
                color: "rgba(19, 173, 255, 1)",
                width: 2,
                type: "dashed"
            }
        },
        data: [
             sData.data[1]
        ]
    }]
};