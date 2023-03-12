option = {
    tooltip:{
        
    } ,
    legend:{
      data:["风机1", "xx设备1434", "吹风机3"]  
    },
    xAxis: {
        type: 'category',
        data:["三联村（大坞村）03", "璇山下村", "三联村"]
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    series: [{
            type: 'scatter',
            "name": "风机1",
            "data": [ 15.2,15.4, 42]
        }, {
            type: 'scatter',
            "name": "xx设备1434",
            "data": [172.7, 105.2, 2]
        }, {
            type: 'scatter',
            "name": "吹风机3",
            "data": [17.7, 5.2,3.4]
        }]
};
