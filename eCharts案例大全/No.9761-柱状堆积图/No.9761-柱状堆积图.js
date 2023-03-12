var dataArr = [80, 100, 120, 140, 160, 130, 80];
var dataArrPercent = [40, 50, 60, 70, 80, 65, 40];
var dataArr2 = [120, 100, 80, 60, 40, 70, 120];
var dataArrPercent2 = [60, 50, 40, 30, 20, 35, 60];

function formatterToolTip(params, ticket, callback) {
    let tipString = `${params[0].axisValue}<br/>`; // 显示提示文字模板
    for (let i = 0, length = params.length; i < length; i++) {
        tipString += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:${params[i].color}"></span>`;
        tipString += `${params[i].seriesName}: ${params[i].currentData}(${params[i].value}%)<br/>`;
    }
    return tipString;
}

option = {
    title: {
        text: '行为分析',
        show: true,
        textStyle: {
            color: '#333333',
            fontSize: 16,
        },
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: (params, ticket, callback) => {
            let index = params[0]['dataIndex']; // 不能传更多参数,先把参数params增加一个自定义的key：currentData表示真实数据
            if (params[0]) {
                params[0]['currentData'] = dataArr[index];
            }
            if (params[1]) {
                params[1]['currentData'] = dataArr2[index];
            }
            return formatterToolTip(params, ticket, callback);
        }
    },
    legend: {
        data: ['AA', 'BB'],
        left: 'center',
        bottom: 10
    },
    xAxis: {
        type: 'category',
        data: ["20190806", "20190807", "20190808", "20190809", "20190810", "20190811", "20190812"]
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %'
        },
        show: true
    },
    series: [{
            name: 'AA',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: (v) => {
                        return dataArr[v.dataIndex];
                    }
                },
            },
            itemStyle: {
                color: '#5b9bd5'
            },
            data: dataArrPercent
        },
        {
            name: 'BB',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: (v) => {
                        return dataArr2[v.dataIndex];
                    }
                },
            },
            itemStyle: {
                color: '#ed7d31'
            },
            data: dataArrPercent2
        },
    ]
};