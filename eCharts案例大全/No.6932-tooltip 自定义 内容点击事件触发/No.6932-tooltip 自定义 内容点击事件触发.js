
eventInfo()
 function eventInfo() { 
  var myChart = echarts.init(document.getElementById('chart-panel'));

myChart.setOption({
    color: ['#F5C300', '#2F4F4F'],
    legend: {
        x: 'center',
        y: 'bottom',
        itemGap: 80,
        data: ['温度', '湿度']
    },
    tooltip: {
        axisPointer: {
            type: 'cross'
        },
        triggerOn: 'click',
        alwaysShowContent: true,
        trigger: 'axis',
        formatter: function(params) {
            var html = '';
            if (params.length > 0) {
                Xindex = params[0].dataIndex;
                html += params[0].name + '<br>';
                for (var int = 0; int < params.length; int++) {
                    if (int === 0) {
                        html += params[int].marker + params[int].seriesName + ': ' + params[int].data + '&nbsp;&nbsp;&nbsp;<button  style="pointer-events: all;"  onclick="open1()">查 看</button><br>';
                    } else {
                        html += params[int].marker + params[int].seriesName + ': ' + params[int].data + '<br>';
                    }
                }
            }
            return html;
        },
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: [
            '80:00', '80:30', '9:00', '9:30',
            '10:00', '10:30', '11:00', '11:30',
            '12:00', '12:30', '13:00', '13:30',
            '14:00', '14:30', '15:00', '15:30',
            '16:00'
        ]
    }],
    yAxis: [{
        type: 'value',
        interval: 10,
    }],
    series: [{
            name: '温度',
            type: 'line',
            smooth: true,
            data: [21, 25, 27, 29, 30, 31, 32, 35, 36, 35, 30, 29, 27, 25, 24, 23, 21]
        },
        {
            name: '湿度',
            type: 'line',
            smooth: true,
            data: [50, 49, 48, 48, 47, 47, 41, 41, 40, 40, 40, 46, 48, 50, 57, 63, 62, 60, 63]
        },
    ]
})

 }


//  复制到本地 html中添加容器即可食用
open1 = function() {
    alert('tooltip点击事件')
}

var Index = 0; //播放所在下标

var Time = setInterval(function () {
  

    myChart.dispatchAction({
        type: 'showTip', // 根据 tooltip 的配置项显示提示框。

        seriesIndex: 0,

        dataIndex: Index,
    });

    Index++;
    var option=myChart.getOption();
// console.log();
    if (Index >= option.series[0].data.length) {
        Index = 0;
    }
}, 2000);