var bgPatternImg = new Image();
bgPatternImg.setAttribute("crossOrigin",'Anonymous');
bgPatternImg.src = 'http://image.91chep.com/3b731aac1f9441c7b505c7c7357e2e43680_680.jpg';


 
let pointList = [{
        name: '测点1',
        position: [250, 10],
        color: 'green',
        items: [{
                name: '沉降',
                value: 132
            },
            {
                name: '温度',
                value: 12
            },
        ]
    },
    {
        name: '测点2',
        position: [323, 36],
        color: 'green',
        items: [{
            name: '沉降',
            value: 132
        }, ]
    },
    {
        name: '测点3',
        position: [360, 50],
        color: 'green',
        items: [{
                name: '沉降测点3测点3测点3测点3测',
                value: 132
            },
            {
                name: '温度',
                value: 12
            },
        ]
    },
    {
        name: '测点4',
        position: [300, 150],
        color: 'skyblue',
        items: [{
                name: '沉降',
                value: 132
            },
            {
                name: '温度',
                value: 12
            },
        ]
    },
    {
        name: '测点5',
        position: [440, 150],
        color: 'skyblue',
        items: [{
                name: '沉降',
                value: 132
            },
            {
                name: '温度',
                value: 12
            },
        ]
    },
    {
        name: '测点6',
        position: [480, 150],
        color: 'skyblue',
        items: [{
                name: '沉降',
                value: 132
            },
            {
                name: '温度',
                value: 12
            },
        ]
    },
    {
        name: '测点7',
        position: [480, 80],
        color: 'red',
        items: [{
                name: '沉降',
                value: 132
            },
            {
                name: '温度',
                value: 12
            },
        ]
    },
];

let lineList = [{
        name: '测线1',
        nodes: [{
            name: '测点1'
        }, {
            name: '测点2'
        }, {
            name: '测点3'
        }, ]
    },
    {
        name: '测线2',
        nodes: [{
            name: '测点4'
        }, {
            name: '测点5'
        }, {
            name: '测点6'
        }, ]
    }
];

option = {
    graphic: [{
            // 拖拽的透明面板
            id: 'toolPan',
            type: 'rect',
            z: 2, // z 方向上的高度
            position: [200, 0],
            invisible: true, // 节点不可见，不然会挡住底图
            style: {
                fill: '#ccc'
            },
            //draggable: true,
            cursor: 'all-scroll',
            shape: {
                height: 300,
                width: 600,
            },
            //ondrag: groupCanDrag(), // 拖动组
            onmousedown: dragPanStart(),
            onmouseup: dragPanEnd(),
            onmousemove: dragPan(),
            onmouseout: dragPanEnd(),
            onmousewheel: groupCanZoom('group1', 'toolPan'), // 缩放组
            onclick: e => {
                //const curPos = vecSub([e.offsetX, e.offsetY])
                // console.log(curPos)
                panPosition = myChart.getOption().graphic[0].elements[0].position;
                console.log(panPosition)
            },
        },
        {
            type: 'group',
            id: 'group1',
            scale: [1, 1],
            position: [0, 0],
            children: [{
                    // 背景图
                    type: 'image',
                    id: 'bg',
                    position: [200, 0],
                    //bounding: 'raw',
                    // origin: [75, 75],
                    z: 1,
                    style: {
                        image: bgPatternImg
                    },
                    shape: {
                        height: 300,
                        width: 600,
                    }
                },
                //{
                //     id: 'p1',
                //     type: 'circle',
                //     position: [10, 10], // 圆心的坐标位置
                //     draggable: true,
                //     z: 3,
                //     style: {
                //         fill: 'red'
                //     },
                //     shape: {
                //         r: 10 // 半径
                //     }
                // },
                // {
                //     id: 'p2',
                //     type: 'circle',
                //     position: [100, 10],
                //     draggable: true,
                //     z: 3,
                //     style: {
                //         fill: 'red'
                //     },
                //     shape: {
                //         r: 10 // 半径
                //     }
                // },
                // {
                //     id: 'l1',
                //     type: 'line',
                //     // position: [100, 10],
                //     draggable: true,
                //     z: 2,
                //     style: {
                //         fill: 'red'
                //     },
                //     shape: {
                //         x1: 10,
                //         y1: 10,
                //         x2: 100,
                //         y2: 10
                //     }
                // },
                {
                    type: 'group',
                    id: 'tooltip',
                    ignore: true,
                    children: [{
                            type: 'rect',
                            id: 'tooltip-bg',
                            z: 100,
                            left: 'center',
                            shape: {
                                width: 190,
                                height: 90
                            },
                            style: {
                                fill: 'rgba(22,50,79,0.7)',
                                stroke: '#555',
                                lineWidth: 0,
                                shadowBlur: 8,
                                shadowOffsetX: 0,
                                shadowOffsetY: 2,
                                shadowColor: 'rgba(0,0,0,0.15)'
                            }
                        }, {
                            type: 'text',
                            id: 't-text',
                            z: 100,
                            left: 'center',
                            top: 10,
                            style: {
                                fill: '#fff',
                                textAlign: 'center',
                                text: '横轴表示温度，单位是°C',
                                font: '400 14px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            id: 't-text0',
                            z: 100,
                            left: 'center',
                            top: 10,
                            style: {
                                fill: '#fff',
                                textAlign: 'center',
                                text: '横轴表示温度，单位是°C',
                                font: '400 14px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            id: 't-text1',
                            z: 100,
                            left: 'center',
                            top: 30,
                            style: {
                                fill: '#fff',
                                textAlign: 'center',
                                text: '，单位是°C',
                                font: '400 14px Microsoft YaHei'
                            }
                        }
                    ]
                }

            ]

        },
        {
            id: 'legend',
            type: 'group',
            children: [{
                id: 'legend-bg',
                type: 'rect',
                z: 66,
                cursor: 'default',
                shape: {
                    width: 200,
                    height: 300
                },
                style: {
                    fill: 'yellow'
                }
            }]
        }
    ]
};

/*
let dragMoveV = [0, 0]; // 拖动产生的偏移
let pointListCopy
// 拖动组
function groupCanDrag() {
    return e => {
        const curPosition = e.target.position; // 拖拽面板的位置
        dragMoveV = curPosition;
        //移动背景图
        myChart.setOption({
            graphic: [{
                    id: 'group1',
                    $action: 'merge',
                    position: vecSub(curPosition, scaleMoveV)
                },
            ]
        });
    };
}*/

let isDrag // 是否在拖动
let dragOrigin //拖动的起始点
let panPosition = [0, 0]; // 拖拽盘的位置
function dragPanStart() {

    return e => {
        isDrag = true;
        dragOrigin = [e.offsetX, e.offsetY];
        panPosition = myChart.getOption().graphic[0].elements[0].position;
    }

}

let pointListCopy;

function dragPan() {
    return e => {

        if (!isDrag) return;
        const curPos = [e.offsetX, e.offsetY]
        const moveV = vecSub(curPos, dragOrigin);
        pointListCopy = JSON.parse(JSON.stringify(pointList));
        pointListCopy.forEach(point => {
            point.position = vecAdd(point.position, moveV)
        })
        updatePoints(pointListCopy);
        drawLine(lineList, pointListCopy);


        myChart.setOption({
            graphic: [{
                    id: 'toolPan',
                    $action: 'merge',
                    position: vecAdd(moveV, panPosition),
                },
                {
                    id: 'bg',
                    $action: 'merge',
                    position: vecAdd(moveV, panPosition),
                }
            ],

        })
    }

}

function dragPanEnd() {
    return e => {
        isDrag = false;
        dragOrigin = undefined;
        if (!pointListCopy) return
        pointList = pointListCopy;
        panPosition = myChart.getOption().graphic[0].elements[0].position;
    }

}


let curScale = 1.00;
// 缩放 group
function groupCanZoom(groupId, dragPanId) {
    return e => {
        let curPointerPos = [e.offsetX, e.offsetY];
        const minScale = 0.5; // 最小缩小尺寸
        const maxScale = 5; // 最大放大尺寸
        const scaleStep = 1.25; // 每次滚轮滑动改变的尺寸
        const isWheelUp = e.wheelDelta > 0;
        scale = isWheelUp ? scaleStep : (1 / scaleStep);


      

        
        
       if (curScale * scale < minScale || curScale * scale > maxScale) return;
       curScale = curScale * scale;

        //const pointListCopy = JSON.parse(JSON.stringify(pointList)); // 深拷贝
        pointList.forEach(point => {
            const tmp1 = vecSub(point.position, curPointerPos);
            const tmp2 = vecScale(tmp1, scale);
            point.position = vecAdd(tmp2, curPointerPos);
        })
        updatePoints(pointList);
        drawLine(lineList, pointList)
        panPosition = myChart.getOption().graphic[0].elements[0].position;
        // 计算背景图原点的偏移
        const temp1 = vecSub(panPosition, curPointerPos);
        const temp2 = vecScale(temp1, scale);
        panPosition = vecAdd(temp2, curPointerPos)

        myChart.setOption({
            graphic: [{
                    id: 'bg',
                    $action: 'merge',
                    scale: [curScale, curScale],
                    shape: {
                        height: 300 * curScale,
                        width: 600 * curScale,
                    },
                    position: panPosition,
                },

                {
                    id: 'toolPan',
                    $action: 'merge',
                    shape: {
                        height: 300 * curScale,
                        width: 600 * curScale,
                    },
                    position: panPosition
                }
            ]
        });


    };
}

// 画点
function drawPoint(points) {
    const pointsInGroup = [];
    // 给每个点设置 circle 的配置
    points.forEach(point => {
        const pointOpt = {
            id: point.name,
            name: point.name,
            type: 'circle',
            items: point.items,
            position: point.position,
            draggable: true,
            z: 3,
            style: {
                fill: point.color || 'black'
            },
            shape: {
                r: 10 // 半径
            },
            ondrag: onDragPoint(lineList, pointList),
            onclick: onPointClick(),
            onmouseover: showTooltip(),
            onmousemove: showTooltip(),
            onmouseout: hideTooltip(),
        };
        pointsInGroup.push(pointOpt);
    });
    myChart.setOption({
        graphic: [{
            id: 'group1',
            type: 'group',
            $action: 'merge',
            children: pointsInGroup
        }]
    });

}

// 更新点
function updatePoints(points) {
    const pointsOpt = [];
    points.forEach(point => {
        pointsOpt.push({
            id: point.name,
            $action: 'merge',
            position: point.position
        })
    });
    myChart.setOption({
        graphic: pointsOpt
    })
}

// 画线
function drawLine(lines, points) {
    const linesInGroup = [];
    lines.forEach(line => {
        const pointsInLine = [];
        line.nodes.forEach(item => {
            points.forEach(point => {
                if (item.name === point.name) pointsInLine.push(point.position)
            })
        });
        const lineOpt = {
            id: line.name,
            type: 'polyline',
            z: 2,
            style: {
                stroke: '#838A9D',
                lineWidth: 2,
            },
            shape: {
                points: pointsInLine,
            },
            onclick: onClickLine()
        };
        linesInGroup.push(lineOpt);

    });
    myChart.setOption({
        graphic: [{
            id: 'group1',
            type: 'group',
            $action: 'merge',
            children: linesInGroup
        }]
    });

}

// 当移动点时，重新画线
function onDragPoint(lines, points) {
    return e => {
        const curPointName = e.target.__ecGraphicId;
        const curPointPosition = [e.offsetX, e.offsetY];
        pointList.forEach(point => {
            if (point.name === curPointName) {
                point.position = curPointPosition;

            }
        });
        // 只从新画该测点的测线
        const linesNeedDraw = lines.filter(line => {
            if (line.nodes.filter(item => item.name === curPointName).length) return true;
        });
        updatePoints(pointList);
        drawLine(linesNeedDraw, pointList);
    };
}

let lastClickedPoint = '';
// 鼠标点击测点，测点放大和加上阴影
function onPointClick() {
    // 放大后的scale
    magnifyScale = 1.2;
    return e => {
        const curPoint = e.target;
        const curPointName = curPoint.__ecGraphicId;
        const curScale = curPoint.scale[0];
        const curColor = curPoint.style.fill;
        const scale = curScale === magnifyScale ? 1 : magnifyScale;
        optList = [{
            id: curPointName,
            $action: 'merge',
            scale: [scale, scale],
            style: {
                shadowBlur: curScale === magnifyScale ? 0 : 4,
                shadowColor: curColor
            }
        }];
        // 取消上次的选中
        if (lastClickedPoint && lastClickedPoint !== curPointName) {
            optList.push({
                id: lastClickedPoint,
                $action: 'merge',
                scale: [1, 1],
                style: {
                    shadowBlur: 0,
                }
            });
            lastClickedPoint = '';
        }
        myChart.setOption({
            graphic: optList
        });
        lastClickedPoint = curPointName;
    }
}

lastClickedLine = ''
// 点击线后放大线
function onClickLine() {
    // 放大后的线宽
    magnifyWidth = 4.5;
    return e => {
        const curLine = e.target;
        const curLineName = curLine.__ecGraphicId;
        const curLineWidth = curLine.style.lineWidth;
        optList = [{
            id: curLineName,
            $action: 'merge',
            style: {
                lineWidth: curLineWidth === magnifyWidth ? 2 : magnifyWidth,
            }
        }];
        // 取消上次的选中
        if (lastClickedLine && lastClickedLine !== curLineName) {
            optList.push({
                id: lastClickedLine,
                $action: 'merge',
                style: {
                    lineWidth: 2,
                }
            });
            lastClickedLine = '';
        }
        myChart.setOption({
            graphic: optList
        });
        lastClickedLine = curLineName;
    }
}

// 还原上次放大的点
/*
function resizeLastPoint() {
    if (!lastClickedPoint) return;
    console.log(lastClickedPoint);
    optList = [{
        id: lastClickedPoint,
        $action: 'merge',
        scale: [1, 1],
    }];
    myChart.setOption({
        graphic: optList
    });
    lastClickedPoint = '';
}
*/


// 显示 tooltip
function showTooltip() {
    return e => {
        const point = e.target;

        let maxLen = 0; // 最长字符数
        point.items.forEach(item => {
            const str = item.name + item.value;
            maxLen = str.length > maxLen ? str.length : maxLen;
        });

        const width = maxLen * 14 + 20;
        const height = point.items ? point.items.length * 20 + 40 : 40;
        const position = point.position;
        let tipX;
        let tipY;

        if (position[0] < width + 10) {
            // x 坐标过小,tooltip 在右方
            tipX = position[0] + width / 2 + 10;
        } else {
            tipX = position[0] - width / 2 - 10;
        }

        if (position[1] < height + 10) {
            // y 坐标过小,tooltip 在下方
            tipY = position[1] + 10;
        } else {
            tipY = position[1] - height - 10;
        }

        const textList = [{
            type: 'text',
            id: 't-text',
            $action: 'merge',
            top: 10,
            style: {
                text: point.name,
            }
        }]
        point.items.forEach((item, i) => {
            textOpt = {
                type: 'text',
                id: 't-text' + i,
                $action: 'merge',
                top: 10 + (i + 1) * 20,
                style: {
                    fill: '#fff',
                    textAlign: 'center',
                    text: item.name + ': ' + item.value,
                    font: '400 14px Microsoft YaHei'
                }
            }
            textList.push(textOpt)
        })
        // 先把 tooltip 内容置空
        myChart.setOption({
            graphic: [{
                    id: 't-text',
                    $action: 'merge',
                    style: {
                        text: '',
                    }
                },
                {
                    id: 't-text0',
                    $action: 'merge',
                    style: {
                        text: '',
                    }
                },
                {
                    id: 't-text1',
                    $action: 'merge',
                    style: {
                        text: '',
                    }
                }
            ]
        });
        myChart.setOption({
            graphic: [{
                    id: 'tooltip',
                    ignore: false,
                    $action: 'merge',
                    position: [tipX, tipY],
                }, {
                    id: 'tooltip-bg',
                    $action: 'merge',
                    shape: {
                        height,
                        width
                    }
                },
                ...textList
            ]
        });

    }
}

//隐藏 tooltip
function hideTooltip() {
    return e => {
        myChart.setOption({
            graphic: {
                id: 'tooltip',
                ignore: true,
                $action: 'merge',
            }
        });
    }
}

function vecAdd(vec1, vec2) {
    if (vec1.length < 2 || vec2.length < 2) return
    return [vec1[0] + vec2[0], vec1[1] + vec2[1]]
}

function vecSub(vec1, vec2) {
    if (vec1.length < 2 || vec2.length < 2) return
    return [vec1[0] - vec2[0], vec1[1] - vec2[1]]
}

function vecScale(vec, size) {
    if (vec.length < 2) return
    return [vec[0] * size, vec[1] * size]
}
// 取反向量
function vecNegate(vec) {
    if (vec.length < 2) return
    return [-vec[0], -vec[1]]
}

// 画图例
function drawLegend() {

    const legendOpt = pointList.map((point, i) => {
        return {
            id: 'legend' + i,
            type: 'group',
            position: [10, 25 * i],
            children: [{
                        // 点击的透明面板
                        id: 'legend' + i + '-pan',
                        pId: point.name,
                        legendId: 'legend' + i,
                        color: point.color,
                        type: 'rect',
                        z: 67, // z 方向上的高度
                        position: [0,0],
                        invisible: true, // 节点不可见，不然会挡住底图
                        shape: {
                            height: 20,
                            width: 100,
                        },
                        onclick: onLegendClick()
                    },

                    {
                        id: 'legend' + i + '-c',
                        type: 'circle',
                        position: [10, 10], // 圆心的坐标位置
                        z: 66,
                        silent: true,
                        style: {
                            fill: point.color
                        },
                        shape: {
                            r: 10 // 半径
                        }
                    },
                    {
                        id: 'legend' + i + '-t',
                        type: 'text',
                        position: [30, 10 - 5], // 圆心的坐标位置
                        z: 66,
                        silent: true,
                        style: {
                            text: point.name,
                            font: 'bolder 14px "Microsoft YaHei", sans-serif',
                            fill: point.color
                        },
                    },]
        }

    });


    myChart.setOption({
        graphic: [{
            id: 'legend',
            type: 'group',
            $action: 'merge',
            children: legendOpt
        }]
    });

}

// 点击图例
function onLegendClick() {
    return e => {
        const legend = e.target;
        const pId = legend.pId;
        const legendId = legend.legendId
        if (!legend.isHide) {
            myChart.setOption({
                graphic:[{
                    id: legendId + '-c',
                    style: {
                        fill: 'rgba(230,233,239,1)',
                    }
                },
                {
                    id: legendId + '-t',
                    style: {
                        fill: 'rgba(230,233,239,1)',
                    }
                },
                {
                    id: pId,
                    ignore: true,
                }
                ]
            });
            legend.isHide = true;
            
        }else {
              myChart.setOption({
                graphic:[{
                    id: legendId + '-c',
                    style: {
                        fill: legend.color,
                    }
                },
                {
                    id: legendId + '-t',
                    style: {
                        fill: legend.color,
                    }
                },
                 {
                    id: pId,
                    ignore: false,
                }
                ]
            });
            legend.isHide = false;
        } 
        
    }
}


setTimeout(function() {
    drawPoint(pointList);
    drawLine(lineList, pointList);
    drawLegend();
}, 100);