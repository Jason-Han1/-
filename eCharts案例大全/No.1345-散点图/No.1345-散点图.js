chartData = [
    {
        name: '01:00',
        value: 10,
        title: 'XXX01',
    },
    {
        name: '02:00',
        value: 20,
        title: 'XXX02',
    },
    {
        name: '03:00',
        value: 30,
        title: 'XXX03',
    },
    {
        name: '04:00',
        value: 40,
        title: 'XXX04',
    },
    {
        name: '05:00',
        value: 50,
        title: 'XXX05',
    },
    {
        name: '06:00',
        value: 60,
        title: 'XXX06',
    },
];
option = {
    backgroundColor: '#313131',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
        formatter: (params) => {
            let paramStr = params[0].name + 'min' + '<br/>';
            for (var i = 0; i < params.length; i++) {
                paramStr +=
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#FE7B7B'></span>" +
                    params[i].data[3] +
                    ' : ' +
                    params[i].data[1] +
                    '%' +
                    '<br/>';
            }
            return paramStr;
        },
    },
    grid: {
        left: '30',
        right: '0',
        bottom: '20',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        nameLocation: 'middle',
        nameGap: 30,
        scale: true,
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变x轴颜色
            lineStyle: {
                color: 'rgba(255,255,255,0.15)',
                type: 'solid',
            },
        },
        axisLabel: {
            //  改变x轴字体颜色和大小
            show: true,
            textStyle: {
                color: 'rgba(250,250,250,0.7)',
                fontSize: 12,
            },
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变x轴颜色
            lineStyle: {
                color: 'rgba(255,255,255,0.15)',
                type: 'solid',
            },
        },
        axisLabel: {
            //  改变x轴字体颜色和大小
            show: true,
            formatter: '{value}%',
            textStyle: {
                color: 'rgba(250,250,250,0.7)',
                fontSize: 12,
            },
        },
    },
    series: [
        {
            symbolSize: (params) => {
                let markSize = Math.sqrt(params[1]) * 3;
                markSize = markSize < 12 ? 12 : markSize;
                return markSize;
            },
            symbol: 'circle',
            data: ((data) => {
                var arr = [];
                data.forEach((items) => {
                    var itemName = items.name;
                    var itemValue = items.value;
                    var itemStyle = 15;
                    var itemTitle = items.title;
                    arr.push([itemName, itemValue, itemStyle, itemTitle]);
                });
                return arr;
            })(chartData),
            type: 'scatter',
            itemStyle: {
                normal: {
                    color: '#FE7B7B',
                },
            },
        },
    ],
};
