option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
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
        data: ['销售额', '同比']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '销售额',
            min: -250,
            max: 250,
           // interval: 50,
            axisLabel: {
                formatter: '{value} '
            },
             splitLine: {
                show: false
            },
  
          axisLine: {
               show : true
          },
         
    // max: function (value) {   return value.max ;}  ,
   //   min: function (value) {   return  value.max ;}
     
        },
            
        {
            type: 'value',
            name: '同比%',

           //  interval: 5,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name: '销售额',
            type: 'bar',
            data: [2, 4, 7, 23, 25, 76, 135, 162, 32, 20, 6, 3]
        },

        {
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            data: [0.52
,0.76
,0.76
,0.33
,0.08
,0.65
,0.40
,0.30
,0.51
,0.32
,0.26
,-0.88]
        }
    ]
};