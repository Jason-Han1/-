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
        "SalesVolume": 100000,
        "ReturnVolume": 100000,
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
    {
        "TimeBegin": null,
        "TimeEnd": null,
        "SalesVolume": 80000,
        "ReturnVolume": 80000,
        "ReturnRate": 1,
        "FirstRegionName": null,
        "SecondRegionName": null,
        "ThirdRegionName": null,
        "FirstRegionStructure": "EF255C4B-91D8-47A5-AC36-EE257D030274",
        "SecondRegionStructure": "D3456367-3493-4364-8CA4-75BA1CE401E9",
        "ThirdRegionStructure": null,
        "ShopName": "门店6"
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
        "ShopName": "门店7"
    },
    {
        "TimeBegin": null,
        "TimeEnd": null,
        "SalesVolume": 600000,
        "ReturnVolume": 400000,
        "ReturnRate": 0.6667,
        "FirstRegionName": null,
        "SecondRegionName": null,
        "ThirdRegionName": null,
        "FirstRegionStructure": null,
        "SecondRegionStructure": null,
        "ThirdRegionStructure": null,
        "ShopName": "门店8"
    },
    {
        "TimeBegin": null,
        "TimeEnd": null,
        "SalesVolume": 300000,
        "ReturnVolume": 100000,
        "ReturnRate": 0.3333,
        "FirstRegionName": null,
        "SecondRegionName": null,
        "ThirdRegionName": null,
        "FirstRegionStructure": null,
        "SecondRegionStructure": null,
        "ThirdRegionStructure": null,
        "ShopName": "门店9"
    },
    {
        "TimeBegin": null,
        "TimeEnd": null,
        "SalesVolume": 50000,
        "ReturnVolume": 40000,
        "ReturnRate": 0.8,
        "FirstRegionName": null,
        "SecondRegionName": null,
        "ThirdRegionName": null,
        "FirstRegionStructure": null,
        "SecondRegionStructure": null,
        "ThirdRegionStructure": null,
        "ShopName": "门店10"
    },

];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
for (var i = 0; i < data.length; i++) {
    data1.push(data[i].ShopName);
    data2.push(data[i].ReturnVolume / 10000);
    data3.push((data[i].SalesVolume - data[i].ReturnVolume) / 10000);
    data4.push(data[i].ReturnRate * 100);
}


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params, ticket, callback) {
            var html = "<table>"
            html += "<tr><td></td><td>" + params[0].name + "</td></tr>";
            html += "<tr><td><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + params[1].color + ";' />"
            html += "</td><td>销售额：" +(params[0].value + params[1].value) +"万元</td></tr>"
            html += "<tr><td><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + params[0].color + ";' />"
            html += "</td><td>回款："+params[0].value+"万元</td></tr>";
            html += "<tr><td><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + params[2].color + ";' />"
            html += "</td><td>回款率："+params[2].value+"%</td></tr>";
            html += "</table>"
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
    yAxis: [{
            type: 'value',
            scale: true,
            name: '金额（万元）',
            min: 0,
        },
        {
            type: 'value',
            scale: true,
            name: '回款率（%）',
            max: 100,
            min: 0,
        }
    ],
    series: [{
            type: 'bar',
            stack: '销售回款',
            data: data2,
        },
        {
            type: 'bar',
            stack: '销售回款',
            data: data3,

        },
        {
            type: 'line',
            data: data4,
            yAxisIndex: 1,
            stack: '回款率',
        }
    ]
};