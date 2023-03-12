let tableId = 1;
const data = [
    [
        {
            tableId:2,
            tableName:'我是祖先表AAAAAAAAAA',
        },{
            tableId:3,
            tableName:'我是祖先表B',
        }
    ],
    [
        {
            tableId:4,
            parentId:[2],
            tableName:'我是父亲表A',
        },{
            tableId:5,
            parentId:[2,3,22],
            tableName:'我是父亲表BAAAAAA',
        },{
            tableId:6,
            parentId:[3],
            tableName:'我是父亲表C',
        },{
            tableId:7,
            parentId:[3],
            tableName:'我是父亲表D',
        }
    ],
  [
        {
            parentId: [4,5,6,7],
            tableId:1,
            tableName:'我是被选中的表',
        }
    ],
    [
        {
            tableId:8,
            parentId: [1],
            tableName:'我是子表AAAAA',
        },{
            tableId:9,
            parentId: [1],
            tableName:'我是子表B',
        }
    ],
    [
        {
            tableId:10,
            parentId:[8,1],
            tableName:'我是孙子表A',
        },{
            tableId:11,
            parentId:[8,9],
            tableName:'我是孙子表B',
        },{
            tableId:12,
            parentId:[8,9],
            tableName:'我是孙子表CCCCC',
        },{
            tableId:13,
            parentId:[9],
            tableName:'我是孙子表D',
        }
    ],
];
let gleft = 150, gtop = 100;

let allTable = [];

let allLine = [];

// let hasDataKeys = ['grandfatherTableList','fatherTableList','selfList','childTableList','grandsonTableList'];
// hasDataKeys.forEach((val,index) => {
//     if(data[val] && data[val].length < 0) {
//         hasDataKeys.splice(index, 1)
//     }
// })

// console.log('hasDataKeys',hasDataKeys)
let lengthKey = [];
let lengthKeyList = [];
for(let i = 0; i < data.length; i++){
    lengthKeyList[i] = data[i].map(val => val.tableName.length*15);
    lengthKey[i] = data[i].map(val => val.tableName).join('').length*25;
}
function getW(lengthList, listLength, index) {
    let w = 0;
    let datafloor = listLength/2;
    let middleNum = Math.floor(listLength/2);
    // console.log(middleNum)
    if (index < datafloor) {
        for(let i = index; i < middleNum; i++) {
            if (i === index) {
                w += lengthList[i] / 2
            } else {
                w += lengthList[i]
            }
        }
        w = -w
    } else if (index >= datafloor) {
      for(let i = middleNum; i < index + 1; i++) {
            if (i === index) {
                w += lengthList[i]/2
            } else {
                w += lengthList[i]
            }
        }
    }
    return w
}
const maxLengthMid = Math.max(...lengthKey) / 2;
console.log(maxLengthMid)
for(let i = 0; i < data.length; i++){
    let datalist = data[i];
    let lengthList = lengthKeyList[i];
    if (datalist) {
        let listLength = datalist.length;
        let middleNum = listLength/2;
        let leftLength = 0, rightLength = 0;
        let sumW = gleft;
        for(let j = 0; j < datalist.length; j++){
            let _data = datalist[j];
            let nameW = _data.tableName.length*12;
            if (j < middleNum) {
                leftLength--;
            } else if (j >= middleNum) {
                rightLength++;
            }
            let moveLength = getW(lengthList, listLength, j)
            if (moveLength < 0) {
                moveLength += leftLength*5
            } else if (moveLength > 0) {
                moveLength += rightLength*5
            }
            allTable.push({
                id: _data.tableId,
                level: i,
                name: _data.tableName,
                tableName: _data.tableName,
                data: _data,
                parentId: _data.parentId,
                value: [maxLengthMid + moveLength, gtop + i*100],
                symbol: 'rect',
                symbolSize: [nameW, 25],
                itemStyle: {
                    normal: {
                        color: _data.tableId === tableId?'red': "#337ab7"
                    }
                }
            })
            
        }
    }
}
console.log(allTable)

for(let i = 0; i < allTable.length; i++) {
    let data = allTable[i];
    let _line = [];
    data.parentId && data.parentId.forEach(val => {
        let parentData = allTable.find(item => item.id == val)
        if(parentData){
            _line.push({
                fromName: parentData.tableName,
                toName: data.tableName,
                coords: [
                    parentData.value,
                    data.value
                ]
            })
        }
    })
    allLine = allLine.concat(_line)
}
console.log(allLine)
const temp = {
    id:'',
    name: "数据表A",
    value: [gleft+0, gtop+0],
    symbol: 'rect',
    symbolSize: [80, 25],
    itemStyle: {
        normal: {
            color: "#337ab7"
        }
    }
};
const line = {
    fromName: "数据表A",
    toName: "数据表AA",
    coords: [
        [112, 215],
        [232, 215]
    ]
};

            
            

option = {
    title: {
        text: '数据库表血缘图',
    },
    // legend: {
    //     show: true,
    //     orient: 'vertical',
    //     top: 'bottom',
    //     left: 'right',
    //     data: ['地点', '线路'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    tooltip: {
        trigger: 'item',
        show: true,
        // alwaysShowContent:true,
        // position:[185,75],
        // formatter:'{b}的表信息，巴拉巴拉'
        formatter: function(params, ticket, callback) {
            // console.log(params)
            if (params.componentSubType === 'scatter') {
                return params.name + '的表信息，巴拉巴拉~~'
            } else if (params.componentSubType === 'lines') {
                return '从' + params.data.fromName + '到' + params.data.toName
            }
        }
    },
    geo: {
        map: '北京市',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
            name: '数据库表',
            //type: 'effectScatter',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke',
                period: 7,
                scale: 26
            },
            label: {
                normal: {
                    show: true,
                    //   position:'top',
                    formatter: '{b}',
                    color: '#000',
                },
                emphasis: {
                    show: true,
                    // position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 2,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9'
                }
            },
            data: allTable
        },
        {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'arrow', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 6,
                trailLength: 0,
            },

            lineStyle: {
                normal: {
                    color: 'green',
                    /*
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#58B3CC'
                        }, {
                            offset: 1, color: '#F58158'
                        }], false),*/
                    width: 2,
                    opacity: 0.6,
                    curveness: 0
                }
            },
            data: allLine
        },
    ]
};
const clickFun = param => {
    console.log(param.event.target)
    param.event.target.style.textFill = "blue"
}

myChart.on("click", clickFun);