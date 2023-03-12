option = {
    backgroundColor: "#fff",
    legend:{
        show:true
    },
    grid: {
        left: '30',
        right: '0',
        top: '64',
        bottom: '64'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: "item",
            crossStyle: {
                color: '#999'
            }
        },
        confine: true,
        formatter:function(params){
            console.log(params)
            var html = params[0].name+'月';
            for(var i=0;i<params.length;i++){
                html+='<br />'+params[i].marker+params[i].seriesName+'年：'+params[i].value;
            }
            
            return html;
        }
    },
    xAxis: [{
        type: 'category',
        name:'月',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisPointer: {
            type: 'shadow'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#eee'
            }
        },
        axisLabel: {
            show: true,
            color: '#333'
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber:5,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eee'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [
        {
            name: '2018',
            type: 'bar',
            symbol: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(49,150,250,0.4)'
                }
            },
            data: [3, 34, 47, 10, 20, 53, 65, 77, 40, 20, 73, 45]
        },
        {
            name: '2019',
            type: 'bar',
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: 'rgba(49,150,250,1)'
                }
            },
            data: [3, 34, 47, 10, 20, 53, 65, 77, 40, 20, 73, 45]
        }
    ]
};