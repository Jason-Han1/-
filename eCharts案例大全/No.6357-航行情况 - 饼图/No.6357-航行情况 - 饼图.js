var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}h ({d}%)'
    },
    legend: [{
        type: 'scroll',
        orient: 'horizontal',
        left: '30%',
        top: 20,
        data: ['停泊', '机动航行', '正常航行'],
        textStyle:{
            fontSize: 15
        }
    },{
        type: 'scroll',
        orient: 'horizontal',
        left: '30%',
        top: 40,
        data: ['A', 'B', 'C'],
        textStyle:{
            fontSize: 15
        }
    }],
    series: [{
        name: '航行状态',
        type: 'pie',
        radius: ['0%','20%'],
        center: ['50%', '50%'],
        data: [{
            name: '停泊',
            value: 10,
            itemStyle:{
                color: '#FFCCCC'
            }
        }, {
            name: '机动航行',
            value: 20,
            itemStyle:{
                color: '#FFFFBB'
            }
        }, {
            name: '正常航行',
            value: 70,
            itemStyle:{
                color: '#D1E9CA'
            }
        }],
        label: {
            normal: {
                show: true,
                formatter: '{b}: {c}h({d}%)',
                color: '#000000',
                fontSize: 15,
                alignTo: 'edge',
                edgeDistance: '10px'
            },
            
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
    },{
        name: '航行状态',
        type: 'pie',
        radius: ['40%','70%'],
        center: ['50%', '50%'],
        data: [{
            name: 'C',
            value: 10,
            itemStyle:{
                color: '#FFCCCC'
            }
        }, {
            name: 'A',
            value: 20,
            itemStyle:{
                color: '#FFFFBB'
            }
        }, {
            name: 'B',
            value: 70,
            itemStyle:{
                color: '#D1E9CA'
            }
        }],
        label: {
            normal: {
                show: true,
                formatter: '{b}: {c}h({d}%)',
                color: '#000000',
                fontSize: 15,
                alignTo: 'edge',
                edgeDistance: '10px'
            },
            
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
    }]
};
console.log(JSON.stringify(option))