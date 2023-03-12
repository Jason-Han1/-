app.title = '周gpu概况';

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
           
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['本周利用率','上周利用率']
    },
    yAxis: [
        {
            type: 'category',
            data: ['minqinchen','lindong','zhengxinkang','liuchang','zhentaotan','zhiboniu','huixue','changweilin','geyongtao','leimao','jiaweili','qingqishi','xiaozhang','diwu','zuweihuang','mingzhang','xingyuzhou','yiwenhuang','zhichengsun'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel:{
                interval:0,
                rotate:0
            },
        }
    ],
    xAxis: [
        {
            type: 'value',
            
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value}'
            }
        },
        
    ],
    series: [
        {
            name:'本周利用率',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position:'right'
                }
            },
            data:[0,
0,
1.34,
6.65,
7.98,
8.77,
10,
13.3,
17.61,
18,
18.38,
22.22,
50.66,
50.77,
52.8,
57.49,
81.81,
82.65,
90.47
]
        },
        {
            name:'上周利用率',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position:'right'
                }
            },
            data:[0,0,0,34.75,2.41,0,26.34,43.19,13.81,42.75,18.03,9.71,63.32,1.06,52.31,62.44,76.78,43.07,88.2]
        },
    ]
};
