option = {
    backgroundColor:'#CDDEE6',
    "title": [
        {
        "text": "成都工业用电量（1978-2017）",
        'textStyle':{fontSize:20},
       // "subtext": "单位（亿千瓦时）",
        x: "center",
        subtextStyle: {
            color: '#90979c',
            fontSize: '10',

        },
        },
       ],
    "tooltip": {
        "trigger": "axis",
        'axisPointer':{
            type:'shadow'
        }
    },
       toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    "grid": {
       left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    "legend": {
        top: '11%',
        x:'10%',
        "data": ['工业电量', '总用电量']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLabel": {
            "interval": 0,
            'textStyle':{fontSize:16}

        },
        "data": ['1978','1979','1980','1981','1982',
                '1983','1984','1985','1986','1987',
                '1988','1989','1990','1991','1992',
                '1993','1994','1995','1996','1997',
                '1998','1999','2000','2001','2002',
                '2003','2004','2005','2006','2007',
                '2008','2009','2010','2011','2012',
                '2013','2014','2015','2016','2017'],
    }],
    "yAxis": [
        {
        'name':'电量（kWh)',
        'nameTextStyle':{fontSize:16},
        "type": "value",
        "axisLine": {
            lineStyle: {
                color: '#151515'
            }
        },
        "splitLine": {
            "show": true,
            lineStyle:{
                color:'white',
                width:'3'
            }
        },
        "axisTick": {
            "show":true
        },
        "axisLabel": {
            "interval": 0,

        },
        

    },
    {
        'name':'工业电量比重（%）',
        'nameTextStyle':{fontSize:16},
        'min':35,
        "type": "value",
        "axisLine": {
            lineStyle: {
                color: '#151515'
            }
        },
        "splitLine": {
            "show": true,
            lineStyle:{
                color:'white',
                width:'3'
            }
        },
        "axisTick": {
            "show":true
        },
        "axisLabel": {
            "interval": 0,
            formatter: '{value} %'

        },
        

    }],
        "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 0,
        "start": 40,//起始位置
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',//灰色条的比例
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
    "series": [
        {
            "name": "工业电量",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#c86014",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [17.1,
                    18.8,
                    20,
                    19.3,
                    19.9,
                    21.8,
                    22,
                    23.3,
                    23.6,
                    23.7,
                    23.6,
                    26.4,
                    26.9,
                    31.1,
                    33.5,
                    37.4,
                    39.1,
                    41,
                    42.4,
                    42.5,
                    42.7,
                    43.1,
                    45.3,
                    47.6,
                    62.5,
                    65.4,
                    69.1,
                    76.1,
                    86.8,
                    96.6,
                    105.6,
                    121.7,
                    143.8,
                    182.6,
                    209.9,
                    222.7,
                    244,
                    268.1
],
        },
       
        
        {
            "name": "总用电量",
            "type": "bar",
            "stack": "基础",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#345b9c",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [19,
                    21,
                    23,
                    23,
                    24,
                    26,
                    26,
                    27,
                    28,
                    29,
                    30,
                    33,
                    35,
                    40,
                    44,
                    51,
                    55,
                    59,
                    64,
                    67,
                    69,
                    73,
                    82,
                    90,
                    111,
                    118,
                    131,
                    146,
                    167,
                    239,
                    261,
                    296,
                    341,
                    385,
                    411,
                    444,
                    478,
                    486


],
        },
         
        {
            name:'工业电量百分比',
            type:'line',
            yAxisIndex: 1,
            data:[  86,
                    85,
                    84,
                    82,
                    81,
                    82,
                    81,
                    85,
                    83,
                    79,
                    77,
                    78,
                    75,
                    76,
                    75,
                    73,
                    70,
                    68,
                    65,
                    62,
                    61,
                    58,
                    55,
                    52,
                    56,
                    55,
                    52,
                    51,
                    51,
                    40,
                    40,
                    41,
                    42,
                    47,
                    50,
                    50,
                    51,
                    55,
]
        }
        
        
    ]
}