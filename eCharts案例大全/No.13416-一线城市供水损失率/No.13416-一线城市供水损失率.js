option = {
    color: ['#D53A35', '#E98F6F', '#6AB0B8', '#334B5C','#A2CD5A'],
    title: {
        text: '一线城市供水损失率'
    },
    tooltip: {
    trigger: 'axis',
    },
    legend: {
        x:'right',
        data: ['全国', '北京', '上海', '广州','深圳']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        name: '年份',
        boundaryGap: false,
        data: ['2007', '2008','2009','2010','2011','2012','2013','2014','2015','2016',]
    },
    yAxis: {
        type: 'value',
          axisLabel: {  
              formatter: '{value} %' 
          },
        name: '供水损失率',
    },
    series: [
        {
            name: '全国',
            type: 'line',
            data: [22.88,22.73,22.99,23.20,20.26,20.96,20.62,20.32,20.10,19.99,20.32],
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        formatter:'{c}%'
                    }
                }
            }
        },
        {
            name: '北京',
            type: 'line',
            data: [16.35,16.22,17.46,17.07,16.29,16.07,16.03,15.29,15.26,15.72,16.38]
        },
        {
            name: '上海',
            type: 'line',
            data: [29.61,29.58,31.18,30.75,27.57,30.78,30.29,29.96,31.11,29.76,28.90]
        },
        {
            name: '广州',
            type: 'line',
            data: [16.71,18.18,18.31,18.71,19.55,20.87,24.04,19.86,17.84,18.35,21.13]
        },
        {
            name: '深圳',
            type: 'line',
            data: [16.69,16.94,16.40,null,17.81,16.83,15.72,14.67,14.42,14.45,13.71]
        },

    ]
};