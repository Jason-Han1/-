let color = ['#ffffff', '#36fff6', '#ffe93a', '#67f95f'];
const symbol = "path://M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0";

let oneArr = []
let erArr = [{"id":"1","name":"教育局","value":"136"},
{"id":"2","name":"城市管理局","value":"121"},
{"id":"3","name":"市场和质量监督管理局","value":"112"},
{"id":"4","name":"经济运行局","value":"100"},
{"id":"5","name":"政法委","value":"96"},
{"id":"6","name":"现代服务业局","value":"64"},
{"id":"7","name":"财政局","value":"44"},
{"id":"8","name":"社会保障局","value":"40"},
{"id":"11","name":"翠云街道","value":"26"},
{"id":"9","name":"社会发展局","value":"24"},
{"id":"10","name":"税务局","value":"24"},
{"id":"12","name":"消防支队","value":"16"},
{"id":"13","name":"应急局","value":"14"},
{"id":"14","name":"组织人事部","value":"14"},
{"id":"15","name":"生态环境分局","value":"14"},
{"id":"19","name":"政务中心","value":"10"},
{"id":"18","name":"规划和自然资源局","value":"10"},
{"id":"17","name":"产业促进局","value":"10"},
{"id":"16","name":"法制局","value":"10"},
{"id":"27","name":"自贸办","value":"9"},
{"id":"24","name":"科技创新局","value":"8"},
{"id":"25","name":"总工会","value":"8"},
{"id":"26","name":"两江产业集团","value":"8"},
{"id":"22","name":"办公室","value":"8"},
{"id":"23","name":"宣传部","value":"8"},
{"id":"20","name":"审计局","value":"8"},
{"id":"21","name":"建设管理局","value":"8"},
{"id":"28","name":"团工委","value":"6"},
{"id":"29","name":"康美街道","value":"5"},
{"id":"30","name":"港务物流集团","value":"5"},
{"id":"31","name":"两江招商集团","value":"5"},
{"id":"32","name":"机关事务中心","value":"5"},
{"id":"33","name":"土储中心","value":"5"},
{"id":"34","name":"检察室","value":"5"},
{"id":"38","name":"大竹林街道","value":"4"},
{"id":"39","name":"两江投资集团","value":"4"},
{"id":"40","name":"悦来投资集团","value":"4"},
{"id":"41","name":"机关党委","value":"4"},
{"id":"42","name":"纪工委监察室","value":"4"},
{"id":"43","name":"保税港区集团","value":"4"},
{"id":"44","name":"礼嘉街道","value":"4"},
{"id":"45","name":"鸳鸯街道","value":"4"},
{"id":"46","name":"天宫殿街道","value":"4"},
{"id":"47","name":"金山街道","value":"4"},
{"id":"48","name":"火车北站地区综合管理局","value":"4"},
{"id":"49","name":"人和街道","value":"4"},
{"id":"50","name":"财评中心","value":"4"},
{"id":"37","name":"江北嘴投资集团","value":"4"},
{"id":"36","name":"公安分局","value":"4"},
{"id":"35","name":"妇联","value":"4"}
]
let lines = [
{"source":"50","target":"41"},
{"source":"1","target":"23"},
{"source":"1","target":"45"},
{"source":"1","target":"5"},
{"source":"1","target":"12"},
{"source":"1","target":"11"},
{"source":"1","target":"44"},
{"source":"1","target":"43"},
{"source":"1","target":"7"},
{"source":"1","target":"50"},
{"source":"1","target":"14"},
{"source":"1","target":"9"},
{"source":"1","target":"19"},
{"source":"1","target":"37"},
{"source":"1","target":"15"},
{"source":"1","target":"26"},
{"source":"1","target":"25"},
{"source":"1","target":"3"},
{"source":"1","target":"49"},
{"source":"1","target":"8"},
{"source":"1","target":"27"},
{"source":"1","target":"47"},
{"source":"1","target":"10"},
{"source":"1","target":"38"},
{"source":"1","target":"20"},
{"source":"1","target":"32"},
{"source":"1","target":"34"},
{"source":"1","target":"16"},
{"source":"1","target":"18"},
{"source":"1","target":"36"},
{"source":"1","target":"33"},
{"source":"1","target":"46"},
{"source":"1","target":"29"},
{"source":"1","target":"28"},
{"source":"1","target":"6"},
{"source":"1","target":"30"},
{"source":"1","target":"4"},
{"source":"1","target":"17"},
{"source":"1","target":"40"},
{"source":"1","target":"21"},
{"source":"2","target":"14"},
{"source":"2","target":"25"},
{"source":"2","target":"18"},
{"source":"2","target":"35"},
{"source":"2","target":"20"},
{"source":"2","target":"12"},
{"source":"2","target":"33"},
{"source":"2","target":"42"},
{"source":"2","target":"11"},
{"source":"2","target":"4"},
{"source":"2","target":"49"},
{"source":"2","target":"29"},
{"source":"2","target":"16"},
{"source":"2","target":"23"},
{"source":"2","target":"26"},
{"source":"2","target":"40"},
{"source":"2","target":"30"},
{"source":"2","target":"28"},
{"source":"2","target":"17"},
{"source":"2","target":"50"},
{"source":"2","target":"46"},
{"source":"2","target":"45"},
{"source":"2","target":"15"},
{"source":"2","target":"39"},
{"source":"2","target":"34"},
{"source":"2","target":"22"},
{"source":"2","target":"13"},
{"source":"2","target":"7"},
{"source":"2","target":"3"},
{"source":"2","target":"41"},
{"source":"2","target":"38"},
{"source":"2","target":"24"},
{"source":"2","target":"10"},
{"source":"2","target":"44"},
{"source":"2","target":"5"},
{"source":"2","target":"37"},
{"source":"2","target":"8"},
{"source":"2","target":"47"},
{"source":"2","target":"43"},
{"source":"2","target":"1"},
{"source":"3","target":"29"},
{"source":"3","target":"14"},
{"source":"3","target":"35"},
{"source":"3","target":"20"},
{"source":"3","target":"48"},
{"source":"3","target":"10"},
{"source":"3","target":"49"},
{"source":"3","target":"15"},
{"source":"3","target":"6"},
{"source":"3","target":"28"},
{"source":"3","target":"7"},
{"source":"3","target":"18"},
{"source":"3","target":"50"},
{"source":"3","target":"24"},
{"source":"3","target":"46"},
{"source":"3","target":"23"},
{"source":"3","target":"33"},
{"source":"3","target":"37"},
{"source":"3","target":"27"},
{"source":"3","target":"13"},
{"source":"3","target":"40"},
{"source":"3","target":"36"},
{"source":"3","target":"17"},
{"source":"3","target":"4"},
{"source":"3","target":"30"},
{"source":"3","target":"11"},
{"source":"3","target":"26"},
{"source":"3","target":"42"},
{"source":"3","target":"9"},
{"source":"3","target":"19"},
{"source":"3","target":"43"},
{"source":"3","target":"38"},
{"source":"3","target":"39"},
{"source":"3","target":"8"},
{"source":"3","target":"41"},
{"source":"3","target":"44"},
{"source":"3","target":"2"},
{"source":"3","target":"31"},
{"source":"3","target":"25"},
{"source":"3","target":"34"},
{"source":"4","target":"35"},
{"source":"4","target":"36"},
{"source":"4","target":"37"},
{"source":"4","target":"31"},
{"source":"4","target":"21"},
{"source":"4","target":"33"},
{"source":"4","target":"49"},
{"source":"4","target":"19"},
{"source":"4","target":"13"},
{"source":"4","target":"43"},
{"source":"4","target":"29"},
{"source":"4","target":"30"},
{"source":"4","target":"41"},
{"source":"4","target":"18"},
{"source":"4","target":"15"},
{"source":"4","target":"32"},
{"source":"4","target":"22"},
{"source":"4","target":"50"},
{"source":"4","target":"42"},
{"source":"4","target":"5"},
{"source":"5","target":"33"},
{"source":"5","target":"28"},
{"source":"5","target":"17"},
{"source":"5","target":"29"},
{"source":"5","target":"34"},
{"source":"5","target":"26"},
{"source":"5","target":"3"},
{"source":"5","target":"35"},
{"source":"5","target":"21"},
{"source":"5","target":"37"},
{"source":"5","target":"27"},
{"source":"5","target":"46"},
{"source":"5","target":"49"},
{"source":"5","target":"4"},
{"source":"5","target":"24"},
{"source":"5","target":"8"},
{"source":"5","target":"12"},
{"source":"5","target":"10"},
{"source":"5","target":"47"},
{"source":"5","target":"50"},
{"source":"6","target":"16"},
{"source":"6","target":"26"},
{"source":"6","target":"11"},
{"source":"6","target":"12"},
{"source":"6","target":"3"},
{"source":"6","target":"1"},
{"source":"6","target":"5"},
{"source":"6","target":"49"},
{"source":"6","target":"7"},
{"source":"6","target":"24"},
{"source":"6","target":"43"},
{"source":"6","target":"4"},
{"source":"6","target":"28"},
{"source":"6","target":"38"},
{"source":"6","target":"35"},
{"source":"6","target":"8"},
{"source":"6","target":"47"},
{"source":"6","target":"36"},
{"source":"6","target":"32"},
{"source":"6","target":"33"},
{"source":"7","target":"29"},
{"source":"7","target":"22"},
{"source":"7","target":"24"},
{"source":"7","target":"43"},
{"source":"7","target":"10"},
{"source":"7","target":"32"},
{"source":"7","target":"39"},
{"source":"7","target":"16"},
{"source":"7","target":"42"},
{"source":"7","target":"38"},
{"source":"7","target":"17"},
{"source":"7","target":"5"},
{"source":"7","target":"8"},
{"source":"7","target":"49"},
{"source":"7","target":"30"},
{"source":"7","target":"6"},
{"source":"7","target":"41"},
{"source":"7","target":"14"},
{"source":"7","target":"13"},
{"source":"7","target":"26"},
{"source":"8","target":"1"},
{"source":"8","target":"24"},
{"source":"8","target":"19"},
{"source":"8","target":"17"},
{"source":"8","target":"2"},
{"source":"8","target":"41"},
{"source":"8","target":"43"},
{"source":"8","target":"25"},
{"source":"8","target":"15"},
{"source":"8","target":"26"},
{"source":"8","target":"47"},
{"source":"8","target":"5"},
{"source":"8","target":"10"},
{"source":"8","target":"48"},
{"source":"8","target":"9"},
{"source":"8","target":"13"},
{"source":"8","target":"49"},
{"source":"8","target":"6"},
{"source":"8","target":"36"},
{"source":"8","target":"40"},
{"source":"11","target":"40"},
{"source":"11","target":"19"},
{"source":"11","target":"26"},
{"source":"11","target":"12"},
{"source":"11","target":"15"},
{"source":"11","target":"43"},
{"source":"11","target":"28"},
{"source":"11","target":"33"},
{"source":"11","target":"25"},
{"source":"11","target":"32"},
{"source":"11","target":"35"},
{"source":"11","target":"13"},
{"source":"11","target":"16"},
{"source":"11","target":"3"},
{"source":"11","target":"44"},
{"source":"11","target":"21"},
{"source":"11","target":"5"},
{"source":"11","target":"37"},
{"source":"11","target":"38"},
{"source":"11","target":"50"},
{"source":"9","target":"11"},
{"source":"9","target":"14"},
{"source":"9","target":"1"},
{"source":"9","target":"10"},
{"source":"9","target":"8"},
{"source":"9","target":"45"},
{"source":"9","target":"48"},
{"source":"9","target":"15"},
{"source":"9","target":"26"},
{"source":"9","target":"20"},
{"source":"9","target":"43"},
{"source":"9","target":"21"},
{"source":"9","target":"22"},
{"source":"9","target":"35"},
{"source":"9","target":"6"},
{"source":"9","target":"29"},
{"source":"9","target":"17"},
{"source":"9","target":"19"},
{"source":"9","target":"5"},
{"source":"9","target":"25"},
{"source":"10","target":"9"},
{"source":"10","target":"13"},
{"source":"10","target":"23"},
{"source":"10","target":"50"},
{"source":"10","target":"28"},
{"source":"10","target":"47"},
{"source":"10","target":"33"},
{"source":"10","target":"17"},
{"source":"10","target":"19"},
{"source":"10","target":"18"},
{"source":"10","target":"44"},
{"source":"10","target":"38"},
{"source":"10","target":"22"},
{"source":"10","target":"14"},
{"source":"10","target":"4"},
{"source":"10","target":"40"},
{"source":"10","target":"20"},
{"source":"10","target":"37"},
{"source":"10","target":"1"},
{"source":"10","target":"42"},
{"source":"12","target":"46"},
{"source":"12","target":"25"},
{"source":"12","target":"34"},
{"source":"12","target":"32"},
{"source":"12","target":"23"},
{"source":"12","target":"35"},
{"source":"12","target":"37"},
{"source":"12","target":"17"},
{"source":"12","target":"27"},
{"source":"12","target":"30"},
{"source":"13","target":"41"},
{"source":"13","target":"27"},
{"source":"13","target":"35"},
{"source":"13","target":"45"},
{"source":"13","target":"46"},
{"source":"13","target":"14"},
{"source":"13","target":"40"},
{"source":"13","target":"33"},
{"source":"13","target":"16"},
{"source":"13","target":"9"},
{"source":"14","target":"38"},
{"source":"14","target":"9"},
{"source":"14","target":"42"},
{"source":"14","target":"25"},
{"source":"14","target":"26"},
{"source":"14","target":"33"},
{"source":"14","target":"47"},
{"source":"14","target":"6"},
{"source":"14","target":"7"},
{"source":"14","target":"49"},
{"source":"15","target":"16"},
{"source":"15","target":"33"},
{"source":"15","target":"19"},
{"source":"15","target":"50"},
{"source":"15","target":"13"},
{"source":"15","target":"31"},
{"source":"15","target":"47"},
{"source":"15","target":"43"},
{"source":"15","target":"27"},
{"source":"15","target":"14"},
{"source":"19","target":"37"},
{"source":"19","target":"30"},
{"source":"19","target":"5"},
{"source":"19","target":"20"},
{"source":"19","target":"14"},
{"source":"19","target":"29"},
{"source":"19","target":"3"},
{"source":"19","target":"28"},
{"source":"19","target":"22"},
{"source":"19","target":"49"},
{"source":"18","target":"9"},
{"source":"18","target":"5"},
{"source":"18","target":"38"},
{"source":"18","target":"8"},
{"source":"18","target":"6"},
{"source":"18","target":"37"},
{"source":"18","target":"40"},
{"source":"18","target":"3"},
{"source":"18","target":"46"},
{"source":"18","target":"24"},
{"source":"17","target":"39"},
{"source":"17","target":"30"},
{"source":"17","target":"43"},
{"source":"17","target":"4"},
{"source":"17","target":"37"},
{"source":"17","target":"15"},
{"source":"17","target":"28"},
{"source":"17","target":"34"},
{"source":"17","target":"24"},
{"source":"17","target":"25"},
{"source":"16","target":"7"},
{"source":"16","target":"41"},
{"source":"16","target":"38"},
{"source":"16","target":"13"},
{"source":"16","target":"46"},
{"source":"16","target":"29"},
{"source":"16","target":"28"},
{"source":"16","target":"33"},
{"source":"16","target":"8"},
{"source":"16","target":"27"},
{"source":"27","target":"17"},
{"source":"27","target":"2"},
{"source":"27","target":"33"},
{"source":"27","target":"47"},
{"source":"27","target":"38"},
{"source":"27","target":"49"},
{"source":"27","target":"35"},
{"source":"27","target":"5"},
{"source":"27","target":"22"},
{"source":"27","target":"48"},
{"source":"24","target":"3"},
{"source":"24","target":"49"},
{"source":"24","target":"37"},
{"source":"25","target":"20"},
{"source":"25","target":"27"},
{"source":"25","target":"26"},
{"source":"26","target":"28"},
{"source":"26","target":"32"},
{"source":"26","target":"43"},
{"source":"22","target":"37"},
{"source":"22","target":"31"},
{"source":"22","target":"13"},
{"source":"23","target":"6"},
{"source":"23","target":"18"},
{"source":"23","target":"16"},
{"source":"20","target":"44"},
{"source":"20","target":"31"},
{"source":"20","target":"23"},
{"source":"21","target":"12"},
{"source":"21","target":"23"},
{"source":"21","target":"7"},
{"source":"28","target":"27"},
{"source":"28","target":"34"},
{"source":"28","target":"45"},
{"source":"29","target":"32"},
{"source":"29","target":"27"},
{"source":"29","target":"50"},
{"source":"30","target":"32"},
{"source":"30","target":"50"},
{"source":"30","target":"24"},
{"source":"31","target":"35"},
{"source":"31","target":"40"},
{"source":"31","target":"41"},
{"source":"32","target":"4"},
{"source":"32","target":"41"},
{"source":"32","target":"40"},
{"source":"33","target":"14"},
{"source":"33","target":"5"},
{"source":"33","target":"20"},
{"source":"34","target":"45"},
{"source":"34","target":"6"},
{"source":"34","target":"13"},
{"source":"38","target":"44"},
{"source":"39","target":"21"},
{"source":"40","target":"13"},
{"source":"41","target":"49"},
{"source":"42","target":"30"},
{"source":"43","target":"48"},
{"source":"44","target":"7"},
{"source":"45","target":"47"},
{"source":"46","target":"12"},
{"source":"47","target":"16"},
{"source":"48","target":"41"},
{"source":"49","target":"23"},
{"source":"50","target":"33"},
{"source":"37","target":"36"},
{"source":"36","target":"31"},
{"source":"35","target":"10"},

]
let allArr = [...oneArr, ...erArr],
    dataArr = [];
//处理点
function getNodes(nodes){
    nodes.map(el => {
        if (el.value < 25) {
            Object.assign(el,{
                symbol,
                symbolSize: 50,
                itemStyle: {
                    color: "#36fff6"
                }
            })
        }else if(el.value < 75){
            Object.assign(el,{
                symbol,
                symbolSize: 50,
                itemStyle: {
                    color: "#36eff6"
                }
            })
        }else{
            Object.assign(el,{
                symbol,
                symbolSize: 50,
                itemStyle: {
                    color: "#36fef6"
                }
            })
        }
        Object.assign(el,{
            label: {
                normal: {
                    show: true,
                    position: "bottom",
                    distance: 10,
                    color: "#36fff6",
                },
            }
        })
    });
}
// 处理坐标
function group(arr, r) {
    const newArray = [];
    const {
        length: arLen
    } = arr;
    arr.forEach((e, ind) => {
        // 按角度均匀分布
        const ang = 90 - (360 / arLen).toFixed(2) * (ind + 1);
        const x = (Math.cos(ang * Math.PI / 180)).toFixed(2) * r;
        const y = (Math.sin(ang * Math.PI / 180)).toFixed(2) * r;
        const x1 = (Math.cos(ang * Math.PI / 180)).toFixed(2) * (r - 2);
        const y1 = (Math.sin(ang * Math.PI / 180)).toFixed(2) * (r - 2);
        const x0 = (Math.cos(ang * Math.PI / 180)).toFixed(2) * (r - 30);
        const y0 = (Math.sin(ang * Math.PI / 180)).toFixed(2) * (r - 30);
        e.value = [x.toFixed(2), y.toFixed(2)]
        e.twoPoint = [[x1.toFixed(2), y1.toFixed(2)], [x0.toFixed(2), y0.toFixed(2)]];
        newArray.push(e);
    });
    return newArray;
}

// 线配置
function linesConfig(arr) {
    const [dataArr, targetCoord] = [
        [],
        []
    ];
    const data = []
    arr.forEach((el) => {
        function getFormatItem(start, end) {
            let item = [
                {coord: el.twoPoint[end]},// 起点
                {
                    coord: el.twoPoint[start],
                }, {
                    id: el.id
                }                    ]
            return item
        }
        dataArr.push(getFormatItem(0, 1));
    });
    lines.forEach(el=>{
        const index1 = dataArr.findIndex(y=>el.target === y[2].id)
        const index2 = dataArr.findIndex(y=>el.source === y[2].id)
        console.log(index2, index1,el.target)
        if(index2>-1 && index1>-1){
            let item = [
                {coord: dataArr[index1][1].coord},// 起点
                {
                    coord: dataArr[index2][1].coord
                }

            ]
            console.log(dataArr[index1][2])
            data.push(item)
        }
    })
    return data;
}
// 节点处理
getNodes(allArr)
// 划分坐标
oneArr = group(oneArr, 0);
erArr = group(erArr, 40);
allArr = [...oneArr, ...erArr];
// 线坐标和配置
dataArr = linesConfig(allArr);

function generateData(totalNum, bigvalue, smallvalue, color) {
    let dataArr = [];
    for (var i = 0; i < totalNum; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: bigvalue,
                itemStyle: {
                    normal: {
                        color: color,
                        borderWidth: 0,
                    }
                }
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: smallvalue,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                    }
                }
            });
        }

    }
    return dataArr;
}

let dolitData = generateData(100, 25, 20, 'rgb(126,190,255)');
let threeData = generateData(6, 40, 10, '#2dc0c9');

function getOption(startAngle, radius) {
    let option = {
        backgroundColor: '#081c47',
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            show: false,
            type: "value",
            max: 50,
            min: -51,
        },
        grid: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        },
        yAxis: {
            show: false,
            type: "value",
            max: 50,
            min: -50,
        },
        series: [{
                name: "",
                type: "graph",
                silent: false,
                hoverAnimation: false, // 鼠标悬浮高亮
                cursor: 'default',
                coordinateSystem: "cartesian2d",
                z: 3,
                itemStyle: {
                    normal: {
                        shadowColor: "none",
                    },
                },
                emphasis: {
                    scale: false
                },
                data: allArr,
            },
            {
                name: "",
                type: "lines",
                hoverAnimation: false,
                silent: false,
                cursor: 'default',
                coordinateSystem: "cartesian2d",
                polyline: false, // 多线段
                z: 1,
                lineStyle: {
                    width: 2,
                    type: 'solid',
                    curveness: 0,
                },
                effect: {
                    show: true,
                    period: 8, //箭头指向速度，值越小速度越快
                    trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 6
                },
                emphasis: {
                    lineStyle: {
                        type: 'dashed',
                    }
                },
                data: dataArr,
            },
            {
                name: '不动外圆',
                type: 'pie',
                zlevel: 4,
                silent: true,
                radius: ['60%', '59%'],
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
                data: dolitData
            },
            {
                type: 'pie',
                name: '旋转圆',
                zlevel: 20,
                silent: true,
                radius: ['50%', '49%'],
                hoverAnimation: false,
                startAngle: startAngle,
                data: threeData,
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
            },
            {
                name: '缩放圆',
                type: 'pie',
                zlevel: 4,
                silent: true,
                radius: [(radius + 1) + '%', radius + '%'],
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
                data: dolitData
            },
        ],
    };
    return option;
}

let startAngle = 50; // 初始旋转角度
let [minradius, radius, maxradius] = [24, 24, 28] // 初始缩放尺寸
        let isBig = true // 缩放动画 标识

        function draw() {
            startAngle = startAngle - 5
            if (isBig) {
                radius = radius + 0.5
                if (radius > maxradius) {
                    isBig = false
                }
            } else {
                radius = radius - 0.5
                if (radius < minradius) {
                    isBig = true
                }
            }
            let option = getOption(startAngle, radius)
            myChart.setOption(option, true);
        }

timer = setInterval(draw, 200);
