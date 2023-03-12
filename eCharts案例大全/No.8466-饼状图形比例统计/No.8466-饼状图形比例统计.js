option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var val = params.value.toFixed(2);
            return params.marker + params.name + ': ' + val + ' (' + params.percent + ' %)'
        }
    },
    legend: {
        orient: 'vertical',
        icon: "circle",
        show: true,
        right: 15,
        top: "center",
    },
    series: [{
        // name: '访问来源',
        type: 'pie',
        clockwise: true,
        startAngle: -200,
        radius: '65%',
        center: ['50%', '50%'],
        color: [
            '#F8D800', 
            '#0396FF', 
            '#EA5455', 
            '#7367F0', 
            '#32CCBC', 
            '#FFF6B7', 
            '#28C76F', 
            '#E2B0FF', 
            '#FCCF31', 
            '#8C1BAB', 
            '#9708CC', 
            '#49C628', 
            '#123597', 
            '#3CD500'
        ],
        data: [{
            value: 1,
            name: '华为'
        },{
            value: 1,
            name: '小米'
        },{
            value: 1,
            name: 'OPPO1'
        },{
            value: 13,
            name: 'OPPO2'
        },{
            value: 0,
            name: 'OPPO3'
        },{
            value: 0,
            name: 'OPPO4'
        },{
            value: 0,
            name: 'OPPO5'
        },{
            value: 12,
            name: 'OPPO6'
        },{
            value: 3,
            name: 'OPPO7'
        },{
            value: 23,
            name: 'OPPO8'
        },{
            value: 0,
            name: 'OPPO9'
        },{
            value: 12,
            name: 'OPPO10'
        },{
            value: 3,
            name: 'OPPO11'
        },{
            value: 0,
            name: 'OPPO12'
        },{
            value: 34,
            name: 'OPPO13'
        },{
            value: 98,
            name: 'OPPO14'
        }],
        label: {
            normal: {
                // position: 'inner',
                formatter: function(params) {
                    var val = params.value.toFixed(2);
                    return params.name + '\n' + val + '\n ' + params.percent + ' %'
                }
            }
        },
        labelLine: {
            normal: {
                smooth: 0.2,
                length: 10,
                length2: 20,
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            }
        }
    }]
};