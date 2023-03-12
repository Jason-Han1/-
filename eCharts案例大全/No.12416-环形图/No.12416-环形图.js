var barBgColor = "#eeeeee";
var barFgColor = "#fcd202";
var val = 80;
option = {
    backgroundColor: '#fff',
    series: [{
        name: 'bg',
        type: 'pie',
        hoverAnimation: false,
        animation:false,
        silent:true,
        radius: ['85%', '95%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },        
        data: [{
            value: 0,
            name: '',
            itemStyle: {
                normal: {
                    color: barBgColor
                }
            }
        }]
    },{
        name: 'fg',
        type: 'pie',
        hoverAnimation: false,
        animation:true,
        silent:true,
        radius: ['80%', '100%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        data: [{
            value: val,
            name: 'v1',
            itemStyle: {
                normal: {
                    color:barFgColor
                }
            }            
        }, {
            value: 100-val,
            name: 'v2',
            itemStyle: {
                normal: {
                    opacity: 0
                }
            }
        }]
    }]
};