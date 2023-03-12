// 待确定后再修改
var data = [{
    name: '家庭关系',
    value: [{
            name: '张大海',
            relaDetail: '父亲'
        },
        {
            name: '李梅',
            relaDetail: '母亲'
        }
    ]
}, {
    name: '舍友关系',
    value: [{
        name: '张三',
        relaDetail: '舍友',
        major: '19级化学类'
    }, {
        name: '李四',
        relaDetail: '舍友',
        major: '18级食品类'
    }, {
        name: '王五',
        relaDetail: '舍友',
        major: '17级技术类'
    }]
}, {
    name: '师生关系',
    value: [{
        name: '李慧珍',
        relaDetail: '授课教师',
        post: '研究员',
        lesson: '工业生产应用有机化学'
    }, {
        name: '王沥川',
        relaDetail: '授课教师',
        post: '研究员',
        lesson: '工业生产应用有机化学'
    }, {
        name: '赵雪琴',
        relaDetail: '授课教师',
        post: '研究员',
        lesson: '工业生产应用有机化学'
    }, {
        name: '李晨曦',
        relaDetail: '授课教师',
        post: '研究员',
        lesson: '工业生产应用有机化学'
    }, {
        name: '张铭轩',
        relaDetail: '授课教师',
        post: '研究员',
        lesson: '工业生产应用有机化学'
    }]
}]




function calcPosition(data) {
    let flag = data.length>1;
    var y = flag ? (data.length - 1) / 2 * 5 : 1
    var seriesOption = [];
    var linesData = data.length ? [{
            coords: [
                [8, y],
                [10, y],
            ]
        }]:[];
    var scatterData = data.length ? [
        [8,y]
    ]:[];
    data.map((item, index) => {
        let data = []
        let value = []
        item.value.map((it, id) => {
            data[id] = {
                ...it,
                value: [15 + id * 8, flag ? index * 5:1]
            }
        })
        seriesOption.push({
            name: item.name,
            type: 'graph',
            coordinateSystem: 'cartesian2d',
            draggable: false,
            symbol: 'rect',
            symbolSize: [80, 40],
            label: {
                show: true,
            },
            hoverAnimation: false,
            tooltip: {
                backgroundColor: '#fff',
                formatter: params => {
                    if (params.seriesName === '家庭关系') {
                        return `
                    <span style="font-size:16px;color:#333">${params.name}</span><br/>
                    关系：${params.data.relaDetail}
                    `
                    } else if (params.seriesName === '舍友关系') {
                        return `
                    <span style="font-size:16px;color:#333">${params.name}</span><br/>
                    关系：${params.data.relaDetail}<br/>
                    年级专业：${params.data.major}
                    `
                    } else if (params.seriesName === '师生关系') {
                        return `
                    <span style="font-size:16px;color:#333">${params.name}</span><br/>
                    关系：${params.data.relaDetail}<br/>
                    专业技术职务：${params.data.post}<br/>
                    授课课程：${params.data.lesson}
                    `
                    }
                },
                textStyle: {
                    color: '#666'
                }
            },
            data: data
        })
        
        linesData.push({
            coords:[
                    [10,y],
                    [10,flag ? index*5 : 1],
                    [12,flag ? index*5 : 1]
                ]
        })
        scatterData.push([12,flag ? index*5 : 1])
    })
    console.log(linesData)

    let option = {
        legend: {
            data: [
                '家庭关系',
                '舍友关系',
                '师生关系'
            ]
        },
        tooltip: {
            type: 'item'
        },
        title: {
            text: 'Awesome Chart',
            show:false
        },
        xAxis: {
            type: 'value',
            max:flag?'auto':50,
            show:false
        },
        yAxis: {
            type: 'value',
            max:flag?(data.length -1)/2*10 : 2,
            show:false
        },
        series: [{
                type: 'graph',
                coordinateSystem: 'cartesian2d',
                draggable: false,
                symbol: 'rect',
                symbolSize: [80, 40],
                label: {
                    show: true,
                },
                hoverAnimation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    name: '张子山',
                    value: [5, data.length>1 ? (data.length - 1) / 2 * 5:1]
                }]
            },
            {
                type: 'lines',
                polyline: true,
                coordinateSystem: 'cartesian2d',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                data:linesData
            },
            {
                type: 'scatter',
                coordinateSystem: 'cartesian2d',
                lineStyle: {
                    normal: {
                        width: 2,
                    }
                },
                symbol: 'circle',
                symbolSize: 10,
                itemStyle: {
                    opacity: 1,
                    color: 'rgba(255,255,255,1)',
                    borderColor: 'red'
                },
                data: scatterData
            },
            ...seriesOption
        ]
    };
    return option;
}


let option = calcPosition(data)
myChart.setOption(option);


myChart.on('legendselectchanged', function(obj) {
    const selectedList = []
    data.forEach((item, i) => {
        if (obj['selected'][item['name']]) {
            selectedList.push(item)
        }
    })
    var option = calcPosition(selectedList)
    myChart.setOption(option);
});