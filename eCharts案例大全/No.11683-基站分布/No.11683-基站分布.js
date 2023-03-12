option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        },
        formatter: function(params){
            var result = '', temp1 = '', temp2 = '';
            
            result += params[0].name + '<br>';
            
            params.forEach(function(item, index){
                if(index < 3){
                    temp1 +=  item.marker + item.seriesName + ': ' + item.value + '<br>';
                }else{
                    temp2 +=  item.marker + item.seriesName + ': ' + item.value + '<br>';
                }
            });
            
            return result + 'I/II网<br>' + temp1 + 'III/IV网<br>' + temp2;
        }
    },
    legend: {
        data:['在线','告警','关闭']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        { type : 'category', data : ['南京','徐州','无锡','扬州','淮安'] }
    ],
    yAxis : [
        { type : 'value' }
    ],
    series : [
        {
            name:'在线',
            type:'bar',
            stack: 'I/II网',
            data:[320, 332, 301, 334, 390],
            markPoint : {
                symbol: 'pin',
                itemStyle: {color: '#666'},
                data : [
                    {value: 'I/II网', coord: ['南京', 660]},
                    {value: 'I/II网', coord: ['徐州', 646]},
                    {value: 'I/II网', coord: ['无锡', 593]},
                    {value: 'I/II网', coord: ['扬州', 702]},
                    {value: 'I/II网', coord: ['淮安', 770]},
                ]
            },
        },
        {
            name:'告警',
            type:'bar',
            stack: 'I/II网',
            data:[120, 132, 101, 134, 90]
        },
        {
            name:'关闭',
            type:'bar',
            stack: 'I/II网',
            data:[220, 182, 191, 234, 290]
        },
        {
            name:'在线',
            type:'bar',
            stack: 'III/IV网',
            data:[320, 332, 301, 334, 390],
            markPoint : {
                symbol: 'pin',
                itemStyle: {color: '#666'},
                data : [
                    {value: 'III/IV网', coord: ['南京', 660]},
                    {value: 'III/IV网', coord: ['徐州', 646]},
                    {value: 'III/IV网', coord: ['无锡', 593]},
                    {value: 'III/IV网', coord: ['扬州', 702]},
                    {value: 'III/IV网', coord: ['淮安', 770]}
                ]
            },
        },
        {
            name:'告警',
            type:'bar',
            stack: 'III/IV网',
            data:[120, 132, 101, 134, 90]
        },
        {
            name:'关闭',
            type:'bar',
            stack: 'III/IV网',
            data:[220, 182, 191, 234, 290]
        },
    ]
};
