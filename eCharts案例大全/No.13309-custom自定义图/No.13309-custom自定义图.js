var myValue = [40, 60, 29, 70, 100] //矩形数值
var name = '提示描述信息'
var lineColor = '#C4C9D3'
var rectColor = ['#7091C4', '#5170A2', '#A6A6A6', '#C4C9D3', '#3FA7DC'] //矩形颜色
var rectHeight = 24 //矩形高度
var step = 12 //矩形上线间距
var lineWidth = 2 //连线宽度
var originX = 350; //距离左上 0 0 x的距离
var originY = 100; //距离画布左上0 0 y的距离

var rectValue = [] //[[0,10],[0,80]...]
var lineValue = [] //[[0,20,29,30],[0,20,29,30],[...],...]

var maxValue = Math.max(...myValue)
var heightStep = rectHeight + step


myValue.map(function(item) {
    rectValue.push([0, item])
})
var rectData = [] // [[x,y,width],]
rectValue.forEach(function(item, index) {
    var i = (maxValue - item[1]) / 2;
    var j = heightStep * index;
    rectData.push([i, j, item[1]])
})

var tempArr = []
myValue.map(function(item, index) {
    var a = [
        [maxValue - item] / 2, heightStep * index
    ]
    var b = [
        [maxValue - item] / 2 + item, heightStep * index
    ]
    var c = [
        [maxValue - item] / 2 + item, heightStep * index + rectHeight
    ]
    var d = [
        [maxValue - item] / 2, heightStep * index + rectHeight
    ]
    var obj = {
        a: a,
        b: b,
        c: c,
        d: d
    }
    tempArr.push([obj])
})

tempArr.map(function(item, index) {
    let len = myValue.length
    if ((index + 1) < len) {
        var nextItem = tempArr[index + 1]
        lineValue.push([
            item[0].c[0], item[0].c[1], nextItem[0].b[0], nextItem[0].b[1]
        ])
        lineValue.push(
            [item[0].d[0], item[0].d[1], nextItem[0].a[0], nextItem[0].a[1]],
        )
    }
})


function getLineItem(param, api) {
    let pointx1 = originX + api.size([2, 1])[1] + api.value(0)
    let pointy1 = originY + api.size([2, 1])[1] + api.value(1)
    let pointx2 = originX + api.size([2, 1])[1] + api.value(2)
    let pointy2 = originY + api.size([2, 1])[1] + api.value(3)
    return {
        type: 'line',
        shape: {
            x1: pointx1,
            y1: pointy1,
            x2: pointx2,
            y2: pointy2
        },
        style: api.style({
            fill: null,
            stroke: lineColor,
            lineWidth: lineWidth,

        })
    };
}

function getRectItem(param, api) {
    let dataIndex = param.dataIndex
    let pointx = originX + api.size([2, 1])[1] + rectData[dataIndex][0]
    let pointy = originY + api.size([2, 1])[1] + rectData[dataIndex][1]
    let height = api.size([2, 1])[1] + rectHeight
    let width = api.size([2, 1])[1] + rectData[dataIndex][2]
    let _color = rectColor[dataIndex]

    return {
        type: 'rect',
        shape: {
            x: pointx,
            y: pointy,
            width: width,
            height: height,
        },
        style: api.style({
            fill: _color,
            stroke: _color,
            lineWidth: 1,
        })
    };
}


option = {

    title: {
        text: 'custom自定义图',
        left: 'center'
    },
    grid: {
        left: '15',
        right: '15',
        bottom: '25',
    },
    tooltip: {
        show: false,
        formatter: function(params) {
            let str = `${params.seriesName}:${params.value[1]}`;
            return str
        }
    },
    xAxis: {
        //   max:100,
        // type: 'value',
        show: false,

    },
    yAxis: {
        // max:100,
        show: false,
        // type: 'value',
    },
    series: [{
        type: 'custom',
        name: name,
        renderItem: getLineItem,
        data: lineValue
    }, {
        type: 'custom',
        name: name,
        label: {
            normal: {
                show: true,
                color: '#fff',
                fontSize: 12,
                position: 'inside'
            }
        },
        renderItem: getRectItem,
        data: rectValue
    }]
};