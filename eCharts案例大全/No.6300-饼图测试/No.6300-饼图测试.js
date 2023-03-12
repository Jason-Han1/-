let echartData = {
    outer: [
        {
            value: 30,
            unit: '件',
            name: '已保护'
        },
        {
            value: 164,
            unit: '件',
            name: '未保护'
        }
    ]
}

var tarObj = {
    '已保护': 30,
    '未保护': 164
}

function fontSize(res){ // 用来计算font-szie

  let docEl = document.documentElement,

    clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

  if (!clientWidth) return;

  let fontSize = 2.5 * (clientWidth / 1920);

  return res*fontSize;

}

// 重新计算文字大小
// window.onresize = function () {
//     //重置容器高宽
//     let option = myChart.getOption();
//     option.title.textStyle.fontSize = fontSize(40)
//     option.title.textStyle.subtextStyle = fontSize(30)
//     myChart.setOption(option);
//     // resizeWorldMapContainer();
//     myChart.resize();
// };


// '(' + (tarObj[name]*100/194) + '%)'

// 获取图例数据
var arrName = getArrayValue(echartData.outer , "name");

function getArrayValue(array, key) {
    key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}


option = {
    backgroundColor: "#ffffff",
     title: {
         text: 7789,
         subtext: 'Total',
         textStyle: {
             color: '#2F396C',
             fontSize: fontSize(40),
         },
         subtextStyle: {
             fontSize: fontSize(30),
             color: '#8494A7',
         },
        top: '46%',
        left: "49%",
        textAlign:'center',
        textVerticalAlign: 'middle'
     },
    //  {
    //     text: '45%',
    //     left: '19.5%',
    //     top: '27%',
    //     textAlign: 'center',
    //     textStyle: {
    //         fontSize: '30',
    //         fontWeight:'600',
    //         color: 'rgba(251, 200, 79, 1)',
    //         textAlign: 'center',
    //     },
    // },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#3190F6', '#FF5B5C', '#53c9c8', '#489ee5', '#436fce'],
    legend: { // 右侧注释
        show: true,
        top: "10%",
        left: '80%',
        data: arrName,
        itemWidth: 20,
        itemHeight: 20,
        padding: [0, 5],
        itemGap: 25,
        textStyle: {
            color: '#b0b9cb'
        },
        formatter: function(name) {
            return name + ' ' + tarObj[name]
            // return "{title|" + name + "}\n{value|" + (objData[name].value) + "人}"
        },
    },
    series: [
        { //最外用来带阴影的环
            name: '外环阴影环',
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['79%', '80%'],
            center: ["50%", "50%"],
            hoverAnimation: false,
            color: "#ffffff",
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                // 设置扇形的阴影
               normal: {
                    // 设置扇形的阴影
                    
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.5)', 
                    shadowOffsetX: 0,
                    shadowOffsetY: 0

                }
            },
            data: [100]
        },
        { // 用来遮挡外边阴影的白环
            name: '外环阴遮挡',
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['80%', '85%'],
            center: ["50%", "50%"],
            hoverAnimation: false,
            color: "#ffffff",
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                color: "#ffffff" // 环设置成透明白色
                // 设置扇形的阴影
            },
            data: [100]
        },
        {
            name: '控制台',
            type: 'pie',
            radius: ['52%', '72%'],
            center: ["50%", "50%"],
            startAngle: '0',
            data: echartData.outer,
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                },
                // emphasis: {
                //     borderWidth: 0,
                //     shadowBlur: 10,
                //     shadowOffsetX: 0,
                //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                // }
            },
            // label: {
            //     normal: {
            //         position: 'inner',
            //         formatter: params => {
            //             return (
            //                 params.value + '件'
            //             );
            //         },
            //         fontSize: 22,
            //         color: '#000',
            //         // padding: [0, -130, 25, -130],
            //     }
            // },
        },
        { //内环用来带阴影的环
            name: '内环阴影环',
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['44%', '45%'],
            center: ["50%", "50%"],
            hoverAnimation: false,
            color: "#ffffff",
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                // 设置扇形的阴影
               normal: {
                    // 设置扇形的阴影
                    
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.5)', 
                    shadowOffsetX: 0,
                    shadowOffsetY: 0

                }
            },
            data: [100]
        },
        { // 用来遮挡内边阴影的白环
            name: '内环阴遮挡',
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['40%', '44%'],
            center: ["50%", "50%"],
            hoverAnimation: false,
            color: "#ffffff",
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                color: "#ffffff" // 环设置成透明白色
                // 设置扇形的阴影
            },
            data: [100]
        }
    ]
};