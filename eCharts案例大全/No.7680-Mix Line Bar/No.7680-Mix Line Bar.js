var colors= ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],
    
option = {
    color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],
    tooltip: {
        trigger: 'axis',
        formatter: 
        function(datas) 
              {
                  var res = datas[0].name + '<br/>', val;
                  for(var i = 0, length = datas.length; i < length; i++) {
                      if(datas[i].seriesName == '降水量'){
                        val = (datas[i].value) + 'ml';
                        res +=  datas[i].marker +datas[i].seriesName + '：' + val + '<br/>';
                      }else if(datas[i].seriesName == '蒸发量'){
                        val = (datas[i].value) + 'C';
                        res +=  datas[i].marker +datas[i].seriesName + '：' + val + '<br/>';
                      }else{
                          val = (datas[i].value*100) + '%';
                          res += datas[i].marker + datas[i].seriesName + '：' + val + '<br/>';
                      }
                        
                    }
                    return res;
              }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['蒸发量', '降水量', '平均温度', '平均温度2']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
            
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: function (value) {
                    if(value > 100){
                       return value/100 + '%'; 
                    } else{
                        return value;
                    }
                
                // And other formatter tool (e.g. moment) can be used here.
            }
                
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            itemStyle:{
                color:colors[0],
                opacity: 0.8,
            },
            label:{
                show:true,
                color: "#FFF",
                textBorderColor:colors[0],
                textBorderWidth:2,
                // position:'top'
            }
        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            itemStyle:{
                color:colors[1],
                opacity: 0.8,
            },
            label:{
                show:true,
                color: "#FFF",
                textBorderColor:colors[1],
                textBorderWidth:2,
                // position: "top",
            }
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            itemStyle:{
                color:colors[2],
                opacity: 0.8,
            },
            label:{
                show:true,
                color:colors[2]
                // color: "#FFF",
                // textBorderColor:colors[2],
                // textBorderWidth:2,
            }
        },
        {
            name: '平均温度2',
            type: 'line',
            yAxisIndex: 1,
            data: [1.0, 1.2, 2.3, 3.5, 4.3, 8.2, 10.3, 22.4, 23.0, 14.5, 10.0, 5.2],
            itemStyle:{
                color:colors[3],
                opacity: 0.8,
            },
            label:{
                show:true,
                color:colors[3]
                // color: "#FFF",
                // textBorderColor:colors[3],
                // textBorderWidth:2,
            }
        }
    ]
};
