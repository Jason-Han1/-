let colorList = [
        ['#F76B1C','#FAD961'],
        ['#4D7CFE','#51C0F8'],
        ['#0096AF','#00D6BE'],
    ]
        
option = {
    backgroundColor: '#071729',
    grid: {
        left: '12%',
        top: '15%',
        bottom: '12%',
        right: '8%'
    },
    tooltip: {
        trigger: 'axis',  
         formatter: (params)=> {
            var result = ''
        　　params.forEach(function (item) {
        　　　　let markerHtml = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background: linear-gradient(360deg, ${item.color.colorStops[1].color} 0%, ${item.color.colorStops[0].color} 100%);"></span>`
        　　　　result +=`${item.axisValue}<br>${markerHtml}${item.data}%`
        　　})
        　　return result
         }
    },
    xAxis: {
        data: ['2017','2018','2019'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#D1D1D1',
                width: 0.5 //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            textStyle: {
                color: '#8998AC',
                fontSize: 10
            }
        }
    },
    yAxis: [{
        name:'个',
        nameTextStyle: {
            color: '#8998AC',
            padding: [0, 25, 0, 0]
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#999',
                fontSize: 12
            }
        }, 
    }
    ],
    series: [{
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        barWidth: '65%',
        itemStyle: {
            color: function (params) {
                let itemColor = colorList[params.dataIndex];
                let curColor = '';
                if(Array.isArray(itemColor)){
                    curColor = {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: itemColor[0] //  0%  处的颜色
                        },
                        {
                            offset: 1,
                            color: itemColor[1]?itemColor[1]:itemColor[0] //  100%  处的颜色
                        }
                        ],
                        global: false //  缺省为  false
                    }
                }else{
                    curColor = itemColor;
                }
                return curColor
            }

        },
        data: [123, 60, 25],
        z: 10
    }]
};