option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {
        show: true,
        trigger: 'item',
        padding: [5, 10],
        formatter: function(params) {
          let parm = [{
                name: '攻击途径',
                max: 10
            },
            {
                name: '攻击难度',
                max: 10
            },
            {
                name: '权限要求',
                max: 10
            },
            {
                name: '机密性影响',
                max: 10
            },
            {
                name: '完整性影响',
                max: 10
            },
            {
                name: '可用性影响',
                max: 10
            }
        ]
          let obj = ''
          for (let i=0;i<parm.length;i++) {
            obj =  obj + '<div style="display: flex;align-items:center;justify-content:space-between;"><span>' + parm[i].name 
            + '：</span><span style="margin-left:5px">' + params.data.value[i] + '分</span></div>\n'
          }
          return params.seriesName  + obj
        }
        
    },
    legend:{
        show:true,
        data: ['风险评估']
    },
    radar: {
        // shape: 'circle',
        splitNumber: 4,
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [5, 5]
            }
        },
        indicator: [{
                name: '攻击途径',
                max: 10
            },
            {
                name: '攻击难度',
                max: 10
            },
            {
                name: '权限要求',
                max: 10
            },
            {
                name: '机密性影响',
                max: 10
            },
            {
                name: '完整性影响',
                max: 10
            },
            {
                name: '可用性影响',
                max: 10
            }
        ]
    },
    series: [{
        name: '风险评估',
        type: 'radar',
        areaStyle: {
            normal: {
                width: 1,
                opacity: 0.7,
            },
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#67abff',
                    lineStyle: {
                        color: '#67abff',
                    },
                },
            },
            value: [3, 5, 8, 9, 10, 8]
        }]
    }]
};