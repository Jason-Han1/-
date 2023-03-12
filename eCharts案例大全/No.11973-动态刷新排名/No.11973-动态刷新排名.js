app.title = '世界人口总量 - 条形图';
var dataName=['中国','印度','美国','印尼','巴西'];
var dataValue = [131744,104970, 29034, 23489,18203];
var lendata = dataName.length;
var dataIndex = [];
for(var i = 0; i < lendata;i++)
	dataIndex.push(i+1);
	
var show_num = 3;
var startIndex = 0;
var lastIndex = show_num;
if (lendata < show_num)
    lastIndex = lendata;

option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show:false,
    },
    yAxis: {
        type: 'category',
        data: dataIndex.slice(0, lastIndex),
        inverse: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
       
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: dataValue.slice(0, lastIndex),
            barWidth:48,
            label: {
                normal: {
                    position: 'inner',
                    show: true,
                    formatter: function (params) {
                        var index = (params.dataIndex + startIndex) % lendata;
                        return dataName[index] +'-'+ dataValue[index] + '人';
                    },
                    fontSize: 36,
                    color: 'white',
                }
            },
        },
    ]
};

if (lendata > show_num) {
    setInterval(function () {
        var lendata = dataName.length;
        if (lastIndex >= lendata) lastIndex = 0;

        var data0 = option.series[0].data;
        data0.shift();
        data0.push(dataValue[lastIndex]);

        option.yAxis.data.shift();
        option.yAxis.data.push(dataIndex[lastIndex]);

        lastIndex = (lastIndex + 1) % lendata;
        startIndex = (startIndex + 1) % lendata;

        myChart.setOption(option, true);

    }, 3000);
}