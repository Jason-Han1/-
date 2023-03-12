var chartName = ['Q1', 'Q2', 'Q3','Q4']
var chartData = [10, 20, 30,20]
var chartColor = ['#4F5FE8', '#765BE6', '#A756E4', '#F255F7']
var chartUnit = '元'
var title = {
    // text: '营业收入',
    x: 'right',
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
    if (chartData[i] < 0)
        index = 1;
    if(i<chartData.length-1){
        datas.push({
            value: chartData[i],
            label: {
                show: true,
                position: labelPosition[index],
                padding: 3,
                color: '#fff',
                fontSize: 14,
                // fontWeight: 'bold',
                backgroundColor: tmpColor, //随便填一个
                borderRadius: [5, 5, 5, 5],
                formatter: (params) => {
                    return params.value
                    // return this.convertToHundredBillion(params.value,unit_tmp);
                }
    
            }
        });
    }else{
        datas.push({
            value: chartData[i],
            label: {
                show: true,
                position: labelPosition[index],
                padding: 3,
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
                // backgroundColor: tmpColor, //随便填一个
                // borderRadius: [5, 5, 5, 5],
                formatter: (params) => {
                    return params.value
                    // return this.convertToHundredBillion(params.value,unit_tmp);
                }
    
            }
        });
    }
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
        showSymbol: true,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        itemStyle: {
            normal: {

                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: chartColor[0]
                }, {
                    offset: 1,
                    color: chartColor[3]
                }])
            },
        },

        data: datas
    }]
};