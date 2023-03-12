var datapie = [
    { value: 1048, name: '饼图1' },
    { value: 735, name: '饼图2' },
    { value: 580, name: '饼图3' },
    { value: 484, name: '饼图4' },
    { value: 300, name: '饼图5' },
];
var datas = [
    [
        { value: 148, name: '子项1' },
        { value: 135, name: '子项2' },
        { value: 5080, name: '子项3' },
        { value: 484, name: '子项4' },
        { value: 300, name: '子项5' },
        { value: 350, name: '子项6' },
    ],
    [
        { value: 148, name: '子项1' },
        { value: 135, name: '子项2' },
        { value: 80, name: '子项3' },
        { value: 484, name: '子项4' },
        { value: 300, name: '子项5' },
    ],
    [
        { value: 48, name: '子项1' },
        { value: 135, name: '子项2' },
        { value: 850, name: '子项3' },
        { value: 484, name: '子项4' },
        { value: 300, name: '子项5' },
    ],
    [
        { value: 148, name: '子项1' },
        { value: 135, name: '子项2' },
        { value: 850, name: '子项3' },
        { value: 384, name: '子项4' },
        { value: 300, name: '子项5' },
    ],
    [
        { value: 948, name: '子项1' },
        { value: 135, name: '子项2' },
        { value: 150, name: '子项3' },
        { value: 484, name: '子项4' },
        { value: 300, name: '子项5' },
    ],
];

option = {
    tooltip: {
        trigger: 'item',
    },
    grid: [
        {
            x: '7%',
            y: '7%',
            width: '38%',
            height: '38%',
            tooltip: {
                trigger: 'axis',
            },
        },
    ],
    /*legend: {
         orient: 'vertical',
         left: 'left',
    },*/
    series: [
        {
            name: '主饼图',
            id: 'parentpie',
            type: 'pie',
            radius: '30%',
            seriesLayoutBy: 'column',
            center: ['25%', '50%'],
            data: datapie,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            name: '联动饼图',
            id: 'pie',
            type: 'pie',
            radius: '30%',
            seriesLayoutBy: 'column',
            center: ['75%', '50%'],
            data: datas[0],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};

/*
myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        console.log(1111111111);
        console.log(event);
        if (xAxisInfo) {
            console.log(3333333333);
            console.log(xAxisInfo.value);
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
});

*/
myChart.setOption(option);

myChart.on('mouseover', eConsole); //鼠标移入

//鼠标移入
function eConsole(param) {
    var j = param.dataIndex; // 获取当前点击索引， //console.log(param);
    var len = datas.length;
    for (var i = 0; i < len; i++) {
        if (i == j && param.seriesId == 'parentpie') {
            myChart.setOption({
                series: {
                    id: 'pie',
                    data: datas[i],
                },
            });
        }
    }
}
