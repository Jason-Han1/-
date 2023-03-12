
var mydata =  [
               {value:335, name:"一级指标",itemStyle:{color:"#afa3f5"}},
               {value:310, name:"要不要投降",itemStyle:{color:"#5bd7a1"}},
               {value:234, name:"2019-2020学期第二学期指标",itemStyle:{color:"#25cadd"}},
               {value:154, name:"追梦的蚂蚁",itemStyle:{color:"#3bafff"}},
               {value:335, name:"学期第一学期",itemStyle:{color:"#f1bb4c"}},
 
            ];
option = {
    
        legend: {
            data: ['一级指标', '要不要投降', '2019-2020学期第二学期指标', '追梦的蚂蚁','学期第一学期'],
            top: '20',
            selectedMode: false,
            itemWidth:10,
            itemHeight:10,
            itemGap:2,
            borderRadius: 2,
            textStyle: {
                color: ['#777']
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '加分前五项',
                type: 'pie',
                radius: ['40%', '75%'],
                center: ['50%', '55%'],
                data:mydata,
            },

            
        ],
    };