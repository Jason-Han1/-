option = {
    backgroundColor:'#0e2147',
    color : ['rgba(0,0,0,0)'],
    tooltip: {
        trigger: 'item',
    },
    
    radar: {
         name: {
            textStyle: {
                color: '#1db5fb',
                fontSize:12,
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(86,130,245,0.2)', 'rgba(54,77，202,0.2)',
                    'rgba(86,130,245,0.2)', 'rgba(54,77，202,0.2)',
                    'rgba(86,130,245,0.2)', 'rgba(54,77，202,0.2)',
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(86,130,245,0.2)'
            }
        },
        triggerEvent:true,
        indicator:[
          {name:'基本应用', max:20},
          {name:'深度应用', max:20},
          {name:'生成质量', max:20},
          {name:'覆盖情况', max:20},
          {name:'生成时效', max:20},
        ], 
        radius:'70%'
    },
    series: [{
        
        type: 'radar',
        name:'指数情况',
        areaStyle: {
            normal: {
                color: 'rgba(86,130,245,0.6)'
            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                }
            }
        },
        data:[
            {value : ['5','10','15','20','12']}
        ],
    }]
};