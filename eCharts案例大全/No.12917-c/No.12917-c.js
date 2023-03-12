let data = {
    "chart": [{
            month: "数据库\n\n192.168.1.44",
            value: 76,
            
        },

        {
            month: "网站\n\n192.168.1.56",
            value: 55,
           
        },

        {
            month: "服务器\n\n192.168.1.89",
            value: 39,
            
        },

        {
            month: "服务器\n\n192.168.1.71",
            value: 30,
           
        },

        {
            month: "服务器\n\n192.168.1.55",
            value: 15,
           
        },

    ]
}


let xAxisMonth = [],
    barData = [],
    lineData = [];
for (let i = 0; i < data.chart.length; i++) {
    xAxisMonth.push(data.chart[i].month);
    barData.push({
        "name": xAxisMonth[i],
        "value": data.chart[i].value
    });
    lineData.push({
        "name": xAxisMonth[i],
        "value": data.chart[i].ratio
    });
}

option = {
    backgroundColor: "#fff",
    title: '',
    grid: {
        top: '24%',
        left: '7%',
        bottom: '6%',
        containLabel: true
    },
  
    xAxis: [
        {
        },
        {
            type: 'category',
            position: "bottom",
            data: xAxisMonth,
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
        show: true,
        offset: 52,
       
        axisTick: {
            show: false
        },
         min: 0,
        max: 80,
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
            xAxisIndex: 1,
            barCategoryGap: '-80%',
            // barCategoryGap: '-5%',
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
            data: barData,
        },
 
    ]
}