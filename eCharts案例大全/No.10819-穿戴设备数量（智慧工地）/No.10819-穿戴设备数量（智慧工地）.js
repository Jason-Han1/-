var data1 = 
        {'已经使用':{value:'209'},'剩余': {value: '271'}},
option = {
    title : {
        text: '安全帽共480项',
        textStyle: {
            color: '#2E73FF',
            fontSize: 22
        },
        x:'left',
        y:'30%'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: '40%',
        data: [
            {
                name: '已经使用',
                icon: 'circle'
            },
            {
                name: '剩余',
                icon: 'circle'
            }
        ],
        formatter: function (name) {
              return '{name|' + name + '}'+'{value|'+data1[name].value+'}'+'{name|顶}'
        },
        textStyle: {
              rich: {
                name: {
                  fontSize: 12,
                  color: '#96969e',
                  fontWeight: 'bold'
                },
                value: {
                  fontSize: 12,
                  color: '#2E73FF',
                  fontWeight: 'bold'
                }
              }
            }
    },
    series : [
        {
            name: '设备安全帽',
            type: 'pie',
            radius : '70%',
            color: ['#F9951A', '#2E73FF'], 
            center: ['50%', '60%'],
            data:[
                {value:209, name:'已经使用'},
                {value:271, name:'剩余'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                show: false
            }
        }
    ]
};
