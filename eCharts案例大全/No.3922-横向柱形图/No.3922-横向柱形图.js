var nameArr = ["安徽省", "河南省", "浙江省", ];
var dataArr = [239, 181, 154, ];
var maxData = []; //背景按最大值
var minData = []; //左侧边框
for (let i = 0; i < dataArr.length; i++) {
    var item = dataArr[i];
    maxData.push(300 - item);
    minData.push(1);
}
var getSymbolData = (data) => {
    let arr = [];
    for (var i = 0; i < data.length; i++) {
        arr.push({
            value: data[i].value,
            symbolPosition: 'end'
        })
    }
    return arr;
}
option = {
    backgroundColor: "#003366",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
           verticalAlign:"bottom",//文字垂直对其方式
                color: '#fff',
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
           
        },
        data: nameArr
    }, ],
    series: [{
            name: '',
            type: 'bar',
            stack: 1,
            zlevel: 1,
            barWidth: "10%",
            barGap: '-150%',
            itemStyle: {
                normal: {
                    color: 'rgba(28, 204, 254,1)'
                },
            },
            data: dataArr
        },
        {
            name: '左侧',
            type: 'bar',
            zlevel: 2,
            barWidth: "20%",
            barGap: '-150%',
            data: minData,
            itemStyle: {
                normal: {
                    color: '#fff',

                }
            },
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: "10%",
            stack: 1,
            data: maxData,
            itemStyle: {
                normal: {
                    color: 'rgba(43, 143, 179,.5)',

                }
            },
        },
    ]
};