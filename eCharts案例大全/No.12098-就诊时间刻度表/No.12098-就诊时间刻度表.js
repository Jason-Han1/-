option = {
    grid: {
        top: 0,
        height: 160
    },
    xAxis: [{
        type: 'category',
        data: [
            '发病时间', 
            '医生到达现场时间12138',
        ],
        axisTick: {  inside: true },
        axisLabel: { 
            inside: true,
            formatter: function(value, index){
                var temp = [], step = 4;
                
                (function handleText(str){
                    if(str.length > step){
                        temp.push(str.slice(0, step));
                        handleText(str.slice(step))
                    }else {
                        temp.push(str);
                    }
                })(value);
                return temp.join('\n')
            },
        },
        offset: -80,
        position: 'bottom',
        boundaryGap: false,
        name: '时间节点：',
        nameLocation: 'start'
    },{
        type: 'category',
        data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
        offset: 30,
        position: 'bottom',
        boundaryGap: false,
        name: '发生时间：',
        nameLocation: 'start'
    },{
        type: 'category',
        data: ['60', '60', '60', '60', '60', '60', '60'],
        position: 'bottom',
        boundaryGap: false,
        name: '实际时长：',
        nameLocation: 'start'
    }],
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false }
    },
    series : [{
        type: 'bar',
        itemStyle: { opacity: 0 },
        markLine : {
            silent: true,
            label: { show: false },
            data : [{ yAxis: 24 }]
        }
    }]
}