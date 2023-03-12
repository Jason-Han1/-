var data = [
{"RoadSection":"管1","FaultName":"问题1"},
{"RoadSection":"管1","FaultName":"问题2"},
{"RoadSection":"管1","FaultName":"问题3"},
{"RoadSection":"管1","FaultName":"问题2"},
{"RoadSection":"管1","FaultName":"问题3"},
{"RoadSection":"管1","FaultName":"问题4"},
{"RoadSection":"管1","FaultName":"问题5"},
{"RoadSection":"管1","FaultName":"问题5"},
{"RoadSection":"管2","FaultName":"问题6"},
{"RoadSection":"管2","FaultName":"问题6"},
{"RoadSection":"管2","FaultName":"问题6"},
{"RoadSection":"管3","FaultName":"问题7"},
{"RoadSection":"管3","FaultName":"问题5"},
{"RoadSection":"管3","FaultName":"问题7"},
{"RoadSection":"管3","FaultName":"问题5"},
{"RoadSection":"管3","FaultName":"问题5"},
{"RoadSection":"管3","FaultName":"问题5"},
{"RoadSection":"管3","FaultName":"问题5"},
{"RoadSection":"管3","FaultName":"问题5"},
{"RoadSection":"管3","FaultName":"问题5"},
{"RoadSection":"管4","FaultName":"问题2"},
{"RoadSection":"管4","FaultName":"问题7"},
{"RoadSection":"管4","FaultName":"问题5"},
{"RoadSection":"管4","FaultName":"问题6"},
{"RoadSection":"管4","FaultName":"问题5"},
{"RoadSection":"管4","FaultName":"问题5"},
{"RoadSection":"管4","FaultName":"问题5"},
{"RoadSection":"管4","FaultName":"问题5"},
{"RoadSection":"管5","FaultName":"问题6"},
{"RoadSection":"管5","FaultName":"问题6"},
{"RoadSection":"管5","FaultName":"问题6"},
{"RoadSection":"管5","FaultName":"问题6"},
{"RoadSection":"管5","FaultName":"问题6"},
{"RoadSection":"管5","FaultName":"问题6"},
{"RoadSection":"管5","FaultName":"问题6"},
{"RoadSection":"管5","FaultName":"问题6"},
{"RoadSection":"管6","FaultName":"问题8"},
{"RoadSection":"管6","FaultName":"问题8"},
{"RoadSection":"管7","FaultName":"问题5"},
{"RoadSection":"管7","FaultName":"问题5"},
{"RoadSection":"管7","FaultName":"问题6"},
{"RoadSection":"管7","FaultName":"问题5"},
{"RoadSection":"管7","FaultName":"问题6"},
{"RoadSection":"管7","FaultName":"问题5"},
{"RoadSection":"管8","FaultName":"问题5"},
{"RoadSection":"管8","FaultName":"问题7"},
{"RoadSection":"管8","FaultName":"问题1"},
{"RoadSection":"管8","FaultName":"问题5"},
{"RoadSection":"管8","FaultName":"问题7"},
{"RoadSection":"管8","FaultName":"问题5"},
{"RoadSection":"管8","FaultName":"问题7"},
{"RoadSection":"管8","FaultName":"问题7"},
{"RoadSection":"管8","FaultName":"问题7"},
{"RoadSection":"管8","FaultName":"问题4"},
{"RoadSection":"管8","FaultName":"问题7"},
{"RoadSection":"管8","FaultName":"问题4"},
{"RoadSection":"管8","FaultName":"问题7"},
{"RoadSection":"管8","FaultName":"问题7"},
{"RoadSection":"管8","FaultName":"问题5"},
{"RoadSection":"管8","FaultName":"问题4"},
{"RoadSection":"管9","FaultName":"问题2"},
{"RoadSection":"管9","FaultName":"问题9"},
{"RoadSection":"管9","FaultName":"问题7"},
{"RoadSection":"管9","FaultName":"问题2"},
{"RoadSection":"管9","FaultName":"问题2"},
{"RoadSection":"管9","FaultName":"问题10"},
{"RoadSection":"管10","FaultName":"问题6"},
{"RoadSection":"管10","FaultName":"问题6"},
{"RoadSection":"管10","FaultName":"问题5"},
{"RoadSection":"管10","FaultName":"问题5"},
{"RoadSection":"管11","FaultName":"问题7"},
{"RoadSection":"管11","FaultName":"问题10"},
{"RoadSection":"管11","FaultName":"问题7"},
{"RoadSection":"管11","FaultName":"问题10"},
{"RoadSection":"管11","FaultName":"问题5"},
{"RoadSection":"管11","FaultName":"问题5"},
{"RoadSection":"管12","FaultName":"问题1"},
{"RoadSection":"管12","FaultName":"问题6"},
{"RoadSection":"管12","FaultName":"问题6"},
{"RoadSection":"管12","FaultName":"问题6"}];


//将数值小的归为其他类
function getSectionData(data) {
    var dataNew = {
        items: [],
        others: []
    };
    var sumOther = 0;
    var sumAll = 0;
    for (var i = 0; i < data.length; i++) {
        if (i < data.length - 4) {
            dataNew.others.push(data[i]);
            sumOther += data[i].value;
        } else {
            dataNew.items.push(data[i]);
        }
        sumAll += data[i].value;
    }
    dataNew.items.push({
        value: sumOther,
        name: "其他"
    });
    dataNew.others.push({
        value: sumAll - sumOther,
        name: "placeholder",
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: "transparent",
                borderColor: "transparent",
                borderWidth: 0
            },
            emphasis: {
                color: "transparent",
                borderColor: "transparent",
                borderWidth: 0,
                label: {
                    show: false
                }
            }
        },
        tooltip: {
            formatter: function() {
                return "";
            },
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            height: 0,
            width: 0
        }
    });
    return dataNew;
}


function getTypeDataForChart(srcData) {
    var datas = [];
    srcData.forEach(function(item) {
        if (datas.length === 0) {
            datas.push({
                value: 1,
                name: item.FaultName
            });
            //仅第一个item执行
        } else {
            var hasItem = datas.some(function(count) {
                return item.FaultName == count.name;
            });
            if (hasItem) {
                datas.forEach( function(count) {
                    if (count.name == item.FaultName)
                        count.value++;
                });
            } else {
                datas.push({
                    value: 1,
                    name: item.FaultName
                });
            }
        }
    });
    return datas.sort(function(a, b) {
        return a.value - b.value;
    });
}

var newData = getSectionData(getTypeDataForChart(data)); //获取其他和几个大的数据分离的数据


var option = {
    title: [{
            text: "各问题类型占比",
            textStyle: {
                color: "#333",
                fontSize: "14"
            }
        }
    ],
   
    tooltip: {
        formatter: '{b} ({c} 处)'
    },
    series: [{
            name: '各缺陷类型占比',
            type: 'pie',
            radius: '60%',
            center: ['60%', '60%'],
            hoverAnimation: false,
            data: newData.items,
            labelLine: {
                normal: {
                    show: true,
                    length: 5,
                    length2: 5
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b} \n ({d}%)'
                    }
                }
            }
        },
        {
            name: '其他',
            type: 'pie',
            clockWise: false,
            radius: ['70%', '80%'],
            center: ['60%', '60%'],
            data: newData.others,
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 10
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b}({d}%)'
                    }
                }
            }
        }
      
    ]

};