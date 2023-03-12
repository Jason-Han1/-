option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },  
    "backgroundColor": "#ffffff",
    textStyle: {
                color: '#000',
                fontWeight: '50'
            },
    legend: {
        data:['投放','应用市场','自然流量','B拉C','C拉C',],
        top:'92%',
textStyle: {
                color: '#000',
                fontWeight: '50'
            }
    },
    
    xAxis: [
        {
            type: 'category',
            data: ['2018-12-01','2018-12-02','2018-12-03','2018-12-04','2018-12-05','2018-12-06','2018-12-07','2018-12-08','2018-12-09','2018-12-10']
    }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            axisLabel: {
                formatter: '{value}'
            }
            
        },
        {
            type: 'value',
            position: 'right',
            axisLabel: {
                formatter: '{value}',
            }
        }
    ],
      "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 70,
        "end": 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],

    series: [
        {
            name:'应用市场',
            type:'line',
            yAxisIndex: 1,
            itemStyle:{normal:{color:'#3d74c9'}},
            data:[3054, 2327, 2887, 2200, 3229, 3135, 1938, 1463, 2436, 5821, 3732, 3022,3054, 2927,2887, 2500, 2229, 2135, 1938, 2463, 2436, 3821, 2732, 2022],
             markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            }
            
        },
        {
            name:'投放',
            type:'line',
            yAxisIndex: 1,
            itemStyle:{normal:{color:'#ff9933'}},
            data:[4637, 1287, 2938, 2292,3289,2325, 3368,2453,4836,8381,2722,2642,1622, 1101,1209,2116,1599,1604,1203,1804,1992,1510,1392, 1640],
             markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            }
        },
                    {
            name:'C拉C',
            type:'line',
            yAxisIndex: 1,
            data:[467, 187, 238, 292,329,232, 338,243,436,8381,2722,2642,1622, 1101,1209,2116,1599,1604,1203,1804,1992,1510,1392, 1640],
             markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            }
        },
                    {
            name:'自然流量',
            type:'line',
            yAxisIndex: 1,
            data:[637, 128, 293, 229,289,235, 338,283,436,8381,2722,2642,1622, 1101,1209,2116,1599,1604,1203,1804,1992,1510,1392, 1640],
             markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            }
        },
                        {
            name:'B拉C',
            type:'line',
            yAxisIndex: 1,
            data:[467, 187, 238, 292,329,232, 338,243,436,8381,2722,2642,1622, 1101,1209,2116,1599,1604,1203,1804,1992,1510,1392, 1640],
             markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            }
        },
    
    ]
    
};
