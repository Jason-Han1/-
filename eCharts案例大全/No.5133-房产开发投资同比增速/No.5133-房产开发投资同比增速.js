option = {
 "color": [
         "#516b91",
         "#59c4e6",
         "#edafda",
         "#93b7e3",
         "#a5e7f0",
         "#cbb0e3"
     ],

    legend: {
        data:['同比增速', '开发投资额']
    },

    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '（万亿元）'
        },
        {
            type: 'value',
            axisLabel: {  
                            show: true,  
                            interval: 'auto',  
                            formatter: '{value} %'  
                            },  
            scale: true
        }
    ],
    series: [
        {
            name: '开发投资额',
            type: 'bar',
            
            data: [4.4,6.1,6.7,8.3,8.5,9.8,10.1,11.5,12.4,13,14,18]
        },
        {
            name: '同比增速',
            type: 'line',
             itemStyle: {  
                normal: {  
                    label: {  
                        show: true,  
                        position: 'top',  
                        formatter: '{c}%'  
                    }  
                }  
            },  
            yAxisIndex: 1,
            data: [33, 28,16, 20,10, 1, 7,7, 10, 10,6, 6]
        }
    ]
};

