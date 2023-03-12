// var data = [[10, 16, 3, 'A'], [16, 18, 15, 'B'], [18, 26, 12, 'C'], [26, 32, 22, 'D'], [32, 56, 7, 'E'], [56, 62, 17, 'F']];
var data =  [
            // 列1：维度x，  列2：维度y, 其它维度。。。
            [12, 44, 55, 60], // 这是第一个 dataItem
            [53, 31, 21, 56], // 这是第二个 dataItem
            [71, 33, 10, 20], // 这是第三个 dataItem
        ]

var colorList = ['#4f81bd', '#c0504d', '#9bbb59', '#604a7b', '#948a54', '#e46c0b'];

data = data.map(function (item, index) {  

    return {
        value: item,
        itemStyle: {
            color: colorList[index]
        }
    };
});

function renderItem(params, api) {
    // api.value()  默认返回第一列的维度值12，53，71；接收参数0，1，2..。返回某列的维度值
    var yValue = api.value(2);
    /*
        @param {Array.<number>} data 数据值。
        @return {Array.<number>} 画布上的点的坐标，至少包含：[x, y]
    
    */
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style();
    console.log(api.value(3))
    return {
        type: 'rect',
        shape: 
        echarts.graphic.clipRectByRect({
                    // 矩形的位置和大小。
                    x: start[0],
                    y: start[1],
                    width: size[0],
                    height: size[1]
                }, {
                    // 当前坐标系的包围盒。
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                }),
        // {
        //     x: start[0],
        //     y: start[1],
        //     width: size[0],
        //     height: size[1]
        // },
        style: style
    };
}

option = {
    title: {
        text: 'Profit',
        left: 'center'
    },
    tooltip: {
    },
    xAxis: {
        scale: true
    },
    yAxis: {
    },
    series: [{
        type: 'custom',
        renderItem: renderItem,
        label: {
            show: true,
            position: 'top'
        },
        dimensions: ['from', 'to', 'profit'],
        encode: {
            x: [0, 1],
            y: 2,
            tooltip: [0, 1, 2],
            itemName: 3
        },
        data: data
    }]
};