var maxData = [49, 52, 30, 60, 90, 30, 50, 70, 40];
var xData = ['L1','L2','L3','L4','L5','L6','L7','L8','L9'];
var color = ['#0e6a9b','#3b9ccf','#129e6d','#26a06f','#05897c',
    '#139e97','#c45c53','#908e39','#997f32','#b4a317'];

for (let i = 0; i < maxData.length; i++) {
    maxData[i] = {
        value: maxData[i],
        itemStyle: {
            //color: color[i],
            color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: color[i]
                    },
                    {
                        offset: 1,
                        color: '#00feff'
                    }
                ]
            )
        }
    };
}

var tempMaxData = maxData.pop();
var tempXData = xData.pop();

option = {
    title: {
        text: '设备告警top11',
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data : xData,
    },
    series: [
        {
            name: '最大/最小时延',
            type: 'bar',
            label: {
                show: false,
            },
            barWidth: 10,
            itemStyle: {
                barBorderRadius: 3,
                color: '#fff'
            },
            data: maxData
        }
    ]
};


setInterval(()=>{

    xData.unshift(tempXData);
    tempXData = xData.pop();

    maxData.unshift(tempMaxData);
    tempMaxData = maxData.pop();
    
    myChart.setOption(option);
}, 1000);
