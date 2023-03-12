var data_1 = [
    [1738,77,1709,'模块：医院','三生'],
    [106,352,178,'模块：医院','三生']
];

var data_2 = [
    [198,403,485,'医生','百济'],
    [2570,1744,621,'医院医生','百济']
    ];



var inputformat1 = [
    ',.1%','.3s','.6s'
];

var inputformat2 = [
     ',.1%','.3s','.6s'
];

var itemStyle = {
    normal: {
        
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.6)'
    }
};

var C = 1;
option = {
    backgroundColor: '#1119',
    color:C=='false' ?  ['#dd4444', '#fec42c', ] : ['red','green'],

        
    legend: {
        y: 'top',
        data:[],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        
        left: '10%',
        right: 150,
        bottom: '18%',
        y2: '10%'
    },
    
   tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            if (inputformat1 == ",.1%"){
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName  + '</div>'
                + '用户量：' + value[0] *100 + '%' +'<br>'
                + '页面浏览量：' + value[1]*100  +'%'+'<br>'
                +'访问量：' + value[2]*100  +'%'+ '<br>';
                } else if (inputformat1 == ".3s"){
                     return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName  + '</div>'
                + '用户量：' + value[0]/1000 + 'K' +'<br>'
                + '页面浏览量：' + value[1]/1000  +'K'+'<br>'
                +'访问量：' + value[2]/1000  +'K' + '<br>';
                        } else if (inputformat1 == ".6s"){
                     return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName  + '</div>'
                 + '用户量：' + value[0]/1000000 + 'M' +'<br>'
                + '页面浏览量：' + value[1]/1000000  +'M'+'<br>'
                +'访问量：' + value[2]/1000000  +'M' + '<br>';
                }else {
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + obj.seriesName  + '</div>'
                    + '用户量：' + value[0] + "人/次"+'<br>'
                    + '页面浏览量：' + value[1]  +"人/次"+'<br>'
                    +'访问量：' + value[2]  +"人/次"+ '<br>';
                    }
            
            }

        },

    xAxis: {
        type: 'value',
        name: '用户量',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 5000,
        axisLabel: {
            formatter: function (value) {
                if(inputformat1 == ",.1%"){
                    return (value *100) + '%';
                    } else if (inputformat1 == ".3s"){
                        return (value /1000) + 'k';
                        } else if (inputformat1 == ".6s"){
                        return (value /10000000) + 'M';
                        }else {
                        return value;
                    }
                },
            margin: 10,
            },

        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    
    yAxis: {
        type: 'value',
        name: C=='false' ?  ['#dd4444', '#fec42c', ] : ['red','green'],
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        max: 2000,
        axisLabel: {
            formatter: function (value) {
                if(inputformat2 == ",.1%"){
                    return (value *100) + '%';
                    } else if (inputformat2 == ".3s"){
                        return (value /1000) + 'k';
                        } else if (inputformat2 == ".6s"){
                        return (value /10000000) + 'M';
                        }else {
                        return value;
                    }
                }
            },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    
    series: [
        {
            name: '三生',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data_1,
            symbolSize: function (data_1) {
                return Math.sqrt(data_1[2]);
            }
        },
        {
            name: '百济',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data_2,
            symbolSize: function (data_2) {
                return Math.sqrt(data_2[2]);
            }
        }
    ]
};