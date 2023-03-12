var barTitle = '本月标识解析数量统计';

var data = [
    { name: '20211101', value: '5' },
    { name: '20211102', value: '2' },
    { name: '20211103', value: '11' },
    { name: '20211104', value: '2' },
    { name: '20211105', value: '11' },
    { name: '20211106', value: '0' },
    { name: '20211107', value: '0' },
    { name: '20211108', value: '0' },
    { name: '20211109', value: '0' },
    { name: '20211110', value: '1' },
    { name: '20211111', value: '0' },
];
var xdata = [];
data.map((item) => {
    xdata.push(item.name);
});

var colorList = ['#71c3ff', '#ffd684', '#ff9794', '#aaa1ff', '#ffd684', '#ff9794'];
option = {
    backgroundColor:'#000',
    grid: {
        left: '8%',
        right: '5%',
        bottom: '-3%',
        top: '8%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                params[0].seriesName +
                ' : ' +
                params[0].value
            );
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#b1e8fc',
                    fontSize: '20',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: xdata,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#b1e8fc',
                    fontSize: '16',
                },
                formatter: function (value) {
                    return value;
                },
            },
        },
    ],
    dataZoom: [
        {
            show: true,
            type: 'slider',
            filterMode: 'filter',
            backgroundColor: '#132c81',
            width: 15,
            top: 20,
            left: 20,
            bottom: 30,
            start: 0, //数据窗口范围的起始百分比,表示30%
            end: 30,
            // zoomLock: true,
            orient: 'vertical',
            handleStyle: {
                color: '#132c81',
                borderColor: '#132c81',
            },
            textStyle: {
                color: 'transparent',
            },
        },
    ],
    series: [
        {
            name: '本月标识解析数量统计',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    //     offset: 0,
                    //     color: 'rgb(57,89,255,1)'
                    // }, {
                    //     offset: 1,
                    //     color: 'rgb(46,200,207,1)'
                    // }]),
                    color: (params) => {
                        return colorList[params.dataIndex];
                    },
                },
            },
            label: {
                show: true,
                fontSize: 14,
                position: 'right',
                formatter: function (params, i) {
                    let { value, dataIndex } = params;
                    return `${barTitle} {value${dataIndex}| ${value}}`;
                },
                rich: setLabelStyle(xdata),
            },
            barWidth: 15,
            data: data,
        },
    ],
};
function setLabelStyle(xData) {
    var colors = ['#71c3ff', '#ffd684', '#ff9794', '#aaa1ff', '#ff0', '#f0f'];
    let rich = {
        name: {
            fontSize: 16,
            padding: [0, 2, 0, 0],
            color: '#060C11',
        },
    };

    xData.forEach((ele, i) => {
        rich['value' + i] = {
            color: colors[i],
            fontSize: 20,
        };
    });
    return rich;
}
