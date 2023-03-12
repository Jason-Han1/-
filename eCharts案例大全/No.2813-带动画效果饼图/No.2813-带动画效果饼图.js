let colorsList = ['#00FFFF','#FFB3FF','#FFA488', '#00BBFF','#E38EFF','#00FF99', '#0066FF','#FFAA33', '#B94FFF', '#FFDD55','#B088FF','#00FF00', '#FFFF33','#0000FF', '#5555FF',  '#BBFF00','#FFCCCC', '#77FF00', '#EE7700','#FF00FF','#008800','#FF44AA'];
let angle =0;
let pieChart=null;
// let intervalPie=null;

let dataList =[
            {name: '联网使用单位',value: parseInt(Math.random()*50)},
            {name: '数据中心',value: parseInt(Math.random()*50)},
            {name: '等级保护单位',value: parseInt(Math.random()*50)},
            {name: '网络产品/服务厂商',value: parseInt(Math.random()*50)},
            {name: '信息服务单位',value: parseInt(Math.random()*50)}
        ]

option = {
    backgroundColor:'#003a82',
    color: colorsList,
    legend: {
        // selectedMode: false, // 取消图例上的点击事件
        type: 'plain',
        icon: 'circle',
        orient: 'vertical',
        right: '10px',
        bottom: '10px',
        align: 'left',
        itemGap: 15,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        symbolKeepAspect: false,
        textStyle: {
            color: '#3699e0',
            rich: {
                name: {
                    verticalAlign: 'right',
                    align: 'left',
                    width: 35,
                    fontSize: 12
                },
                value: {
                    align: 'left',
                    width: 60,
                    fontSize: 12
                },
                count: {
                    align: 'left',
                    width: 80,
                    fontSize: 12
                },
                upRate: {
                    align: 'left',
                    fontSize: 12,
                    color: '#00cf90'
                },
                downRate: {
                    align: 'left',
                    fontSize: 12,
                    color: '#ff5722'
                }
            }
        },
    },
    series: [
        {
            name: "",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                        startAngle: (0 + angle) * Math.PI / 180,
                        endAngle: (90 + angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                        startAngle: (180 + angle) * Math.PI / 180,
                        endAngle: (270 + angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (270 + -angle) * Math.PI / 180,
                        endAngle: (40 + -angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (90 + -angle) * Math.PI / 180,
                        endAngle: (220 + -angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function (params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (90 + -angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 4
                    },
                    style: {
                        stroke: "#0CD3DB",//粉
                        fill: "#0CD3DB"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "",  //绿点
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function (params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (270 + -angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 4
                    },
                    style: {
                        stroke: "#0CD3DB",      //绿
                        fill: "#0CD3DB"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: '数量',
            type: 'pie',
            hoverAnimation: false,
            radius: ['40%', '55%'],
            center: ['50%', '50%'],
            data: dataList,
            label: {
                textStyle: {
                    // color: '#4ff2c9',
                },
                normal: {
                    show: false,
                    position: 'center',
                    formatter: '{text|{b}}\n{c}',
                    rich: {
                        text: {
                            align: 'center',
                            verticalAlign: 'middle',
                            padding: 8,
                            fontSize: 12
                        },
                        value: {
                            align: 'center',
                            verticalAlign: 'middle',
                            fontSize: 40
                        }
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            }
        },

    ]
};
 
//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
    let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
    return {
        x: x1,
        y: y1
    }
}

let timeIntervalPie = setInterval(() => {
    drawTimeIntervalPie()
}, 100);

function drawTimeIntervalPie() {
    angle = angle + 3;
    myChart.setOption(option, true);
}
 timeIntervalPie;
