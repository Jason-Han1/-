var getName =['一年级','二年级','三年级','四年级','五年级','六年级'];
var getValue =[174,44,114,82,77,50];
var max = Math.max.apply(null, getValue);
var getMax=[];
for(i=0;i<getName.length;i++){
    getMax.push(max+10)
}
console.log(getMax) ;

option = {
    backgroundColor:"#003366",
    grid: {
        left: '5%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        offset: 10,
        
        axisLabel: {
            show: true,
            // align: 'center',
            textStyle: {
                color: '#fff',
             
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getName
    }, {
        type: 'category',
        inverse: true,
        offset: -5,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
            
        },
        data:getValue
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(128,204,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 20,
            data: getValue
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: getMax,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};
