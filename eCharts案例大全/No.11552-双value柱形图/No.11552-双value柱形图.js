
/**
* data 样例数据
*/
// var data = [
//     [10, 16, 3, 'A'], 
//     [17, 18, 15, 'B'], 
//     [18, 26, 12, 'C'], 
//     [26, 32, 22, 'D'], 
//     [32, 56, 7, 'E'], 
//     [56, 62, 17, 'F']
// ];


let sourceDataX = [30, 40, 60, 20, 66];
let sourceDataY = [10, 12, 16, 12, 6];
let saleName = ['赵', '钱', '孙', '李', '周', '吴'];
let data = [];
let baseStart = 0;
let barGap = 20;

let xStartMemory = 0;
let xEndMemory = 0;

sourceDataX.forEach((item, index) => {
    xStartMemory += barGap + xEndMemory;
    if (data.length === 0) {
        data.push([barGap, barGap * (index+1) + xEndMemory + item, sourceDataY[index], saleName[index]]);
        xEndMemory += item;
    } else {
        data.push([barGap * (index + 1)  + xEndMemory, barGap * (index+1) + xEndMemory + item, sourceDataY[index], saleName[index]]);
        xEndMemory += item;
    }
});
//sourceDataX[index], sourceDataY[index], saleName[index]
console.log(data);


var colorList = ['#466de2', '#c0504d', '#9bbb59', '#604a7b', '#948a54', '#e46c0b'];

data = echarts.util.map(data, function (item, index) {
    return {
        value: item,
        itemStyle: {
            normal: {
                color: colorList[index]
            }
        }
    };
});

function renderItem(params, api) {
    var yValue = api.value(2);
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style({
        fill: '#466de2'
    });
    return {
        type: 'rect',
        shape: {
            x: start[0],
            y: start[1],
            width: size[0],
            height: size[1]
        },
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
    xAxis: [
        {
            
            show: false,
            scale: true,
            // type: 'categories',
            // data: ['1', '2', '3', '4', '5', '6']
        },
        {
            show: true,
            data: ['1', '2', '3', '4', '5', '6'],
            position: 'bottom',
            offset: 10
        }
    ],
    yAxis: {
    },
    series: [{
        type: 'custom',
        renderItem: renderItem,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
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

