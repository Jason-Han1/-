option = {
    backgroundColor:'rgba(5, 38, 75, 0.1)',
    color: ['#447997', '#35C96E', '#4DCEF8'],
    tooltip: {
        trigger: 'axis',
        formatter: function(params, ticket, callback) {

            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + 'h';
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '个';
                }
            }
            return res;

        }
    },
    grid:{
      top:'15%',
      bottom:'15%'
    },
    legend: {
        data: ['人群数量', '基金金额'],
         textStyle:{
            color:'#fff',
            fontSize: 12
        },
        type: 'scroll'
        
    },
    xAxis: [{
        type: 'category',
         nameTextStyle:{
          fontSize:12
        },
        axisLabel:{
          fontSize:14,
          relativeSize:-2,
        },
        splitLine:{
            show:false
        },
        axisTick: {
            show:false
        },
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        },
        axisPointer: {
            type: 'shadow'
        },
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }],
    dataZoom: [{
        type: 'slider',
        xAxisIndex: 0,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        filterMode: 'empty',
        start: 0,
        end: 100,
        height:'10'
    },
    {
        type: 'inside',
        xAxisIndex: 0,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        filterMode: 'empty',
        start: 0,
        end: 100,
         height:'10'
    }],
    yAxis: [{
        type: 'value',
        name: '人群数量',
        splitLine:{
            show:false
        },
         nameTextStyle:{
          fontSize:12
        },
        axisLabel:{
          fontSize:14,
          relativeSize:-2,
          formatter: '{value}'
        },
        axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
        min: 0,
        position: 'top'
    }, {
        type: 'value',
        name: '基金金额',
        min: 0,
        position: 'bottom',
        splitLine:{
            show:false
        },
         nameTextStyle:{
          fontSize:12
        },
        axisLabel:{
          fontSize:14,
          relativeSize:-2,
          formatter: '{value}'
        },
        axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            }
    }],
    series: [ {
        name: '人群数量',
        type: 'bar',
        yAxisIndex: 0,
        data: [22, 22, 23, 77, 24, 55, 55, 89, 98, 164, 106, 224]
    }, {
        name: '基金金额',
        type: 'bar',
        yAxisIndex: 1,
        data: [201, 222, 223, 777, 244, 255, 555, 879, 938, 1364, 1806, 2324]
    }]
};