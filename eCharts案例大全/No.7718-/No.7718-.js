app.title = '环形图';


option = {
    backgroundColor: '#000836',
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 400
        }
    },
    series: [{
        type: 'pie',
        radius: ['0', '130'],
        color:['#0B8DBB','#562CB5','#109A81','#AB8F15','#2358BF'],
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        itemStyle: {
            borderColor: '#04192b',
            borderWidth: 1
        },
        label: {
            normal: {
                show: true,
                formatter: (params) => {
                    console.log(params);
                    return  params.name
                }
            }
        },
        labelLine: {
            length: 24
        },
        emphasis: {
            label: {
                show: true
            }
        },
        data: [{
                value: 100,
                name: '直送项目',
                itemStyle:{
                    borderColor:'#0FBEED',
                    borderWidth:2
                }
            },
            {
                value: 30,
                name: '项目结余物资',
                itemStyle:{
                    borderColor:'#7344E4',
                    borderWidth:2
                }
            },
            {
                value: 30,
                name: '生产运维物资',
                itemStyle:{
                    borderColor:'#14CF9E',
                    borderWidth:2
                }
            },
            {
                value: 30,
                name: '可用退役资产',
                itemStyle:{
                    borderColor:'#EFC60D',
                    borderWidth:2
                }
            },
            {
                value: 30,
                name: '废旧物资',
                itemStyle:{
                    borderColor:'#2D70E6',
                    borderWidth:2
                }
            },

        ]
    },{
        type: 'pie',
        radius: ['0', '130'],
        color:['#0B8DBB','#562CB5','#109A81','#AB8F15','#2358BF'],
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        itemStyle: {
            borderColor: '#04192b',
            borderWidth: 2
        },
        label: {
            normal: {
                show: true,
                position:'inner',
                formatter: (params) => {
                    console.log(params);
                    return  params.value + '\n'+params.percent + '%'
                }
            }
        },
        labelLine: {
            length: 24
        },
        emphasis: {
            label: {
                show: true
            }
        },
        data: [{
                value: 100,
                name: '直送项目',
                itemStyle:{
                    borderColor:'#0FBEED',
                    borderWidth:2
                }
            },
            {
                value: 30,
                name: '项目结余物资',
                itemStyle:{
                    borderColor:'#7344E4',
                    borderWidth:2
                }
            },
            {
                value: 30,
                name: '生产运维物资',
                itemStyle:{
                    borderColor:'#14CF9E',
                    borderWidth:2
                }
            },
            {
                value: 30,
                name: '可用退役资产',
                itemStyle:{
                    borderColor:'#EFC60D',
                    borderWidth:2
                }
            },
            {
                value: 30,
                name: '废旧物资',
                itemStyle:{
                    borderColor:'#2D70E6',
                    borderWidth:2
                }
            },

        ]
    }]
};