var chartData = [{'name':'S7',data:[34, 20, 34, 10, 15,18,10]},
    {'name':'Modbus',data:[997, 575, 1161, 54, 867,883,35]},
    {'name':'Codesys',data:[357,494,0,0,108,0,45]},
    {'name':'Fox',data:[2090,1494,1728,0,1231,192,565]},
    {'name':'Omron',data:[387,414,0,123,101,39,31]},
    {'name':'Pcworx',data:[112,282,0,100,25,21,9]},
    {'name':'IEC-104',data:[672,173,0,100,25,21,9]},
    {'name':'ENIP',data:[27,29,0,28,20,0,22]},
    {'name':'redlion',data:[69,112,0,10,9,6,6]},
    {'name':'moxa',data:[184,2230,0,0,0,0,75]},
    {'name':'OPC-UA',data:[3,0,0,0,0,0,1]},
    {'name':'hart-ip',data:[106,0,0,0,0,0,49]},
    {'name':'ge-srtp',data:[32,14,0,0,36,92,29]},
    {'name':'ddp',data:[133,0,0,0,0,0,103]},
    {'name':'atgs',data:[129,131,0,0,0,94,18]},
    {'name':'dnp3',data:[9,43,5,3,1,0,1]},
    {'name':'bacnet',data:[2767,2383,2755,2108,3,99,123]},
    {'name':'meisecq',data:[3,19,9,3,2,0,1]},
    {'name':'lantronix',data:[501, 511, 0, 0, 148,0,313]},
    {'name':'cspv4',data:[48,47,0,0,0,0,0]},
    ]
    
var companyData = ['奇安信','shadon','censys','zoomeye','fofa','谛听','威努特']
var dataTmp = []
var categories = []
for(var i = 0;i < companyData.length; i ++){
    
    for(var j = 0;j < chartData.length; j ++){
        dataTmp.push([j,chartData[j].data[i],companyData[i]])
        categories.push(chartData[j].name)
    }
    
}
categories.length = chartData.length

// console.log(dataTmp)
option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
            }
        }
    },

    // legend: {
    //     data: companyData
    // },

    singleAxis: {
        data:categories,
        // top: 50,
        // bottom: 50,
        // axisTick: {},
        // axisLabel: {},
        type: 'category',
        // axisPointer: {
        //     animation: true,
        //     label: {
        //         show: true
        //     }
        // },
        // splitLine: {
        //     show: true,
        //     lineStyle: {
        //         type: 'dashed',
        //         opacity: 0.2
        //     }
        // }
    },

    series: [
        {
            type: 'themeRiver',
            itemStyle: {
                emphasis: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
            data: dataTmp
        }
    ]
};
console.log(option)