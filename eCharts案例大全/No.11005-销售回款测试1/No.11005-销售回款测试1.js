var data = [{
        "TimeBegin": null,
        "TimeEnd": null,
        "SalesVolume": 1000000,
        "ReturnVolume": 500000,
        "ReturnRate": 0.5,
        "FirstRegionName": null,
        "SecondRegionName": null,
        "ThirdRegionName": null,
        "FirstRegionStructure": "EF255C4B-91D8-47A5-AC36-EE257D030274",
        "SecondRegionStructure": "D3456367-3493-4364-8CA4-75BA1CE401E9",
        "ThirdRegionStructure": null,
        "ShopName": "门店1"
    },
    {
        "TimeBegin": null,
        "TimeEnd": null,
        "SalesVolume": 800000,
        "ReturnVolume": 500000,
        "ReturnRate": 0.625,
        "FirstRegionName": null,
        "SecondRegionName": null,
        "ThirdRegionName": null,
        "FirstRegionStructure": null,
        "SecondRegionStructure": null,
        "ThirdRegionStructure": null,
        "ShopName": "门店2"
    },
    {
        "TimeBegin": null,
        "TimeEnd": null,
        "SalesVolume": 700000,
        "ReturnVolume": 400000,
        "ReturnRate": 0.5714,
        "FirstRegionName": null,
        "SecondRegionName": null,
        "ThirdRegionName": null,
        "FirstRegionStructure": null,
        "SecondRegionStructure": null,
        "ThirdRegionStructure": null,
        "ShopName": "门店3"
    },
    {
        "TimeBegin": null,
        "TimeEnd": null,
        "SalesVolume": 1000000,
        "ReturnVolume": 1000000,
        "ReturnRate": 1,
        "FirstRegionName": null,
        "SecondRegionName": null,
        "ThirdRegionName": null,
        "FirstRegionStructure": null,
        "SecondRegionStructure": null,
        "ThirdRegionStructure": null,
        "ShopName": "门店4"
    },
    {
        "TimeBegin": null,
        "TimeEnd": null,
        "SalesVolume": 500000,
        "ReturnVolume": 400000,
        "ReturnRate": 0.8,
        "FirstRegionName": null,
        "SecondRegionName": null,
        "ThirdRegionName": null,
        "FirstRegionStructure": null,
        "SecondRegionStructure": null,
        "ThirdRegionStructure": null,
        "ShopName": "门店5"
    },

];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
for (var i = 0; i < data.length; i++) {
    data1.push(data[i].ShopName);
    data2.push(data[i].ReturnVolume);
    data3.push(data[i].SalesVolume - data[i].ReturnVolume);
    data4.push(data[i].ReturnRate);
}


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params, ticket, callback) {
            var html = ""
            html += params[0].name;
            html += '<br /> 销售额：'
            html += params[0].value + params[1].value;
            html += '<br />回款：';
            html += params[0].value;
            html += '<br />回款率：';
            html += params[2].value*100;
            html += '%';
            return html;
        }
    },
    dataZoom: [{
        type: 'inside'
    }, {
        type: 'slider'
    }],
    xAxis: {
        data: data1
    },
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '金额',
            min: 0,
        },
        {
            type: 'value',
            scale: true,
            name: '回款率',
            max: 1,
            min: 0,
        }
    ],
    series: [{
            type: 'bar',
            data: data2
        },
        {
            type: 'bar',
            data: data3
        },
        {
            type: 'line',
            data: data4,
            yAxisIndex: 1,
            stack: '回款率',
        }
    ]
};

myChart.getZr().on('click',params=>{
    console.log('点击zr');
    const pointInPixel= [params.offsetX, params.offsetY];
    if (myChart.containPixel('grid',pointInPixel)) {
        let xIndex=myChart.convertFromPixel({seriesIndex:0},[params.offsetX, params.offsetY])[0];
        /*事件处理代码书写位置*/
        console.log(xIndex);
        //这里可以根据X轴的索引来改变charts的数据显示

}
});