var chartName = ['Q1', 'Q2', 'Q3','Q4']
var chartData = [10, 20, 30,20]
var chartColor = ['red', 'blue', 'green', 'yellowgreen']
var chartUnit = '元'
var title = {
    // text: '营业收入',
    x: 'left',
    subtext: '单位: ' + chartUnit,
    subtextStyle: {
        color: '#000',
        fontSize: 14
    }
}
let labelPosition = ['top', 'bottom'];
let datas = [];

for (var i=0;i<chartData.length; i++) {
    let tmpColor = chartColor[i]
    let index = 0;
    
        index = 1;

        datas.push({
            value: chartData[i],
            label: {
                show: true,
                position: labelPosition[0],
                padding: 3,
                color: '#fff',
                fontSize: 14,
                // fontWeight: 'bold',
                backgroundColor: tmpColor, //随便填一个
                borderRadius: [15, 15, 15, 15],
                formatter: (params) => {
                    return params.value
                    // return this.convertToHundredBillion(params.value,unit_tmp);
                }
    
            }
        });
    
}
option = {
    title: title,
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: chartName,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true
        }
    },
    series: [{
        type: 'line',
        smooth: false,
        // symbol: 'circle',
        symbolSize: 10,
        color:'blue',
        showSymbol: true,
        lineStyle: {
            normal: {
                width: 3,
                color:'#000'
            }
        },

        data: datas
    }]
};