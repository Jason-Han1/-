var dataMap = {};

function dataFormatter(obj) {  
    var pList = ['广东', '河南', '河北', '陕西', '广西', '其他'];  
    var temp;  
    for (var year = 201808; year <= 201812; year++) {    
        var max = 0;    
        var sum = 0;    
        temp = obj[year];    
        for (var i = 0, l = temp.length; i < l; i++) {      
            max = Math.max(max, temp[i]);      
            sum += temp[i];      
            obj[year][i] = {        
                name: pList[i],
                        value: temp[i]      
            }    
        }    
        obj[year + 'max'] = Math.floor(max / 100) * 100;    
        obj[year + 'sum'] = sum;  
    }  
    return obj;
}

dataMap.data = dataFormatter({  
    201808: [150, 200, 100, 100, 200, 50],
      201809: [0, 0, 0, 0, 0, 0, 0],
      201810: [0, 0, 0, 0, 0, 0],
      201811: [0, 0, 0, 0, 0],
      201812: [0, 0, 0, 0, 0],
});

dataMap.dataGD = dataFormatter({  
    201808: [150],
      201809: [0],
      201810: [0],
      201811: [0],
      201812: [0],
});

dataMap.dataHN = dataFormatter({  
    201808: [200],
    201809: [0],
    201810: [0],
    201811: [0],
    201812: [0],

});

dataMap.dataHB = dataFormatter({  
    201808: [100],
    201809: [0],
    201810: [0],
    201811: [0],
    201812: [0],
});

dataMap.dataSX = dataFormatter({  
    201808: [100],
    201809: [0],
    201810: [0],
    201811: [0],
    201812: [0],
});
dataMap.dataGX = dataFormatter({  
    201808: [200],
    201809: [0],
    201810: [0],
    201811: [0],
    201812: [0],
});
dataMap.dataQT = dataFormatter({  
    201808: [50],
    201809: [0],
    201810: [0],
    201811: [0],
    201812: [0],
});
option = {
    baseOption: {
        timeline: {
            axisType: 'category',
                   // realtime: false,
                   // loop: false,
                  autoPlay: false,
                   // currentIndex: 2,
                  playInterval: 1000,
                   // controlStyle: {
                   //     position: 'left'
                   // },
                  data: ['8月', '9月', '10月', '11月', '12月'],
        },
            title: [{
            text: "迁转省份目标",
            subtext: '800万户',
            left: 'center',
            top: '15%',
            padding: [24, 0],
            textStyle: {

                fontSize: 18 * 1,
                align: 'center'
            }
        }],
        calculable: true,
        grid: {
            top: '50%',
            bottom: 80,
            containLabel: true
        },
			 tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
        xAxis: [
        {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
                //	formatter: '{value}%',
                textStyle: {
                    //color: '#fff',  
                    fontWeight: '80'
                }
            }

                  
        }],
        yAxis: [{
            'type': 'category',
            'data': ['广东', '河南', '河北', '陕西', '广西', '其他']      
        }],
        series: [{
            name: '生产量',
            type: 'bar'
        },{
            name: '生产量占比',
            type: 'pie',
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{b} : {c} ({d}%)'

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'normal'
                    }
                }
            },
            radius: ['30%', '40%'],
            center: ['50%', '25%'],

                  
        }    ]  
    },
      options: [    {       // title: {text: '1998年能源生产量与结构'},
              
        series: [        {
            data: dataMap.data['201808']
        },          {
            data: [          {
                name: '广东',
                value: dataMap.dataGD['201808sum']
            },            {
                name: '河南',
                value: dataMap.dataHN['201808sum']
            },            {
                name: '河北',
                value: dataMap.dataHB['201808sum']
            },            {
                name: '陕西',
                value: dataMap.dataSX['201808sum']
            },            {
                name: '广西',
                value: dataMap.dataGX['201808sum']
            },            {
                name: '其他',
                value: dataMap.dataQT['201808sum']
            }        ]
        }      ]    
    },      {         
        series: [        {
            data: dataMap.data['201809']
        },          {
            data: [          {
                name: '广东',
                value: dataMap.dataGD['201809sum']
            },            {
                name: '河南',
                value: dataMap.dataHN['201809sum']
            },            {
                name: '河北',
                value: dataMap.dataHB['201809sum']
            },            {
                name: '陕西',
                value: dataMap.dataSX['201809sum']
            },            {
                name: '广西',
                value: dataMap.dataGX['201809sum']
            },            {
                name: '其他',
                value: dataMap.dataQT['201809sum']
            }        ]
        }      ]    
    },      {          
        series: [        {
            data: dataMap.data['201810']
        },          {
            data: [          {
                name: '广东',
                value: dataMap.dataGD['201810sum']
            },            {
                name: '河南',
                value: dataMap.dataHN['201810sum']
            },            {
                name: '河北',
                value: dataMap.dataHB['201810sum']
            },            {
                name: '陕西',
                value: dataMap.dataSX['201810sum']
            },            {
                name: '广西',
                value: dataMap.dataGX['201810sum']
            },            {
                name: '其他',
                value: dataMap.dataQT['201810sum']
            }        ]
        }      ]    
    },      {        
        series: [        {
            data: dataMap.data['201811']
        },          {
            data: [          {
                name: '广东',
                value: dataMap.dataGD['201811sum']
            },            {
                name: '河南',
                value: dataMap.dataHN['201811sum']
            },            {
                name: '河北',
                value: dataMap.dataHB['201811sum']
            },            {
                name: '陕西',
                value: dataMap.dataSX['201811sum']
            },            {
                name: '广西',
                value: dataMap.dataGX['201811sum']
            },            {
                name: '其他',
                value: dataMap.dataQT['201811sum']
            }        ]
        }      ]    
    },      {           
        series: [        {
            data: dataMap.data['201812']
        },          {
            data: [          {
                name: '广东',
                value: dataMap.dataGD['201812sum']
            },            {
                name: '河南',
                value: dataMap.dataHN['201812sum']
            },            {
                name: '河北',
                value: dataMap.dataHB['201812sum']
            },            {
                name: '陕西',
                value: dataMap.dataSX['201812sum']
            },            {
                name: '广西',
                value: dataMap.dataGX['201812sum']
            },            {
                name: '其他',
                value: dataMap.dataQT['201812sum']
            }        ]
        }      ]    
    },   ]
};