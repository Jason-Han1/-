option = {
    legend: {
        "textStyle": {
            "fontSize": 50
        }
    },
    xAxis: {
        data: ['LCC','MS-MLI','RI','NUSchime','RI-0','Cogcomp'],
        type: 'category',
        axisLabel: {
            textStyle: {
                "fontSize": 50
            }
        }
    },
    yAxis: {
        minInterval:5,
        axisLabel: {
            textStyle: {
                "fontSize": 50
            }
        },
    },
    series: [
        
       
        {
            name: 'F1',
            type: 'bar',
            data:[84.6,84.1,83.7,83.1,78.8,76.1],
               itemStyle: {
                   normal: {
                       label: {
                           show: true,
                           position: 'top',
                               fontSize: 30
                           }
                       }
               }
        }
    ]
};
