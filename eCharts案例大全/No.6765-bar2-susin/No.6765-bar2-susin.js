var colorList = ["#AED4F8", "#4683E5", "#0058E6", "#00529C", '#013B99', "#001E50"];
var dataObj = [{
        name: '01',
        title: '张三',
        value: 10
    },
    {
        name: '02',
        title: '李四',
        value: 20
    },
    {
        name: '03',
        title: '王五',
        value: 130
    },
    {
        name: '04',
        title: '张1三',
        value: 140
    },
    {
        name: '05',
        title: '张2三',
        value: 110
    },
    {
        name: '06',
        title: '张3三',
        value: 100
    }
]
var legendArr = [];
var dataArr = [];
for (var i = 0; i < dataObj.length; i++) {
    legendArr.push(dataObj[i].name);
    dataArr.push(dataObj[i].value);
}
option = {
    backgroundColor: "#FBFBFD",
    xAxis: {
        type: 'category',
        data: legendArr,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#001E50',
            formatter: function(value) {
                var title = '';
                for (var i = 0; i < dataObj.length; i++) {
                    if (value == dataObj[i].name) {
                        title = dataObj[i].title;
                    }
                }
                return value + "\n" + title;
            }
        },
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#001E50',
        },
    },
    series: [{
        type: 'bar',
        barWidth: 20,
        data: dataArr,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        }
    }]
};