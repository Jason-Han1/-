
let chartData=[10.66,20.23,30.43,40.22]
let chartname=['Q1','Q2','Q3','Q4']
var unit='元';
option = {
    title: {
        text: '单位:  '+unit,
        right:0,
        textStyle: {
            color: '#000',
            fontSize:14,
        }
    },
    grid: {
        top: '24%',
        left: '7%',
        bottom: '6%',
        containLabel: true
    },
  
    xAxis: [
        {
            type: 'category',
            position: "bottom",
            data: chartname,
            boundaryGap: true,
            offset: 10,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#404752'
                }
            }
        }
    ],
    yAxis: [
            {
            show: false,
            offset: 52,
           
            axisTick: {
                show: false
            },
            interval: 20,
            axisLine: {
                show: false
            },
           
            axisLabel: {
                show: true,
                color: '#404752'
            },
            splitLine: {
                lineStyle: {
                    color: '#e1e3e5',
                    type: 'solid'
                }
            },
        }, 
    
    ],

    series: [{
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
            itemStyle: {
                normal: {
                    color: function(params) {
                        let colorList = [
                            'rgba(90,107,205,0.8)', 'rgba(133,227,175,0.8)',
                            'rgba(90,107,205,0.8)', 'rgba(133,227,175,0.8)',
                            'rgba(90,107,205,0.8)',
                        ];
                        return colorList[params.dataIndex];
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            label:{
                normal:{
                    show:true,
                    position:'top',
                    color:'#000',
                    fontSize:20,
                    fontWeight:'bold'
                }
            },
            data: chartData,
        },
    ]
}