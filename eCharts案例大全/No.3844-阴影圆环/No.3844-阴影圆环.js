option = {
    title: {
        text: "带阴影圆环",
        top: '10%',
        textStyle: {
            color: '#333333',
            fontWeight: 500,
            fontSize: 16,
        },
    },
    color: ['#35B0FF', '#857BFF', '#FF7474'],

    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        confine: true,
        backgroundColor: 'rgba(51,51,51,0.9)',
        borderRadius: 4,
        borderColor: 'rgba(51,51,51,0.9)',
        formatter: (params) => {
            return `
                   <div style="margin-bottom: 4px">
                        ${params.marker}${params.name}
                   </div>
                   <div style="margin-bottom: 4px">
                        人数：${params.data.value} 人
                   </div>
                   <div style="margin-bottom: 4px">
                        占比：${params.percent} %
                   </div>
                   `
        },
        textStyle: {
            color: '#F2F2F2',
            fontSize: 12,
        },
    },
    series: [{
            top: '10%',
            name: '访问来源',
            type: 'pie',
            radius: ['15%', '50%'],
            avoidLabelOverlap: false,
            width: '100%',
            label: {
                alignTo: 'edge',
                formatter: (params) => {
                    return params.name + '\n' + params.data.value +' 人'+ '\n' + params.percent + '%'
                },
                lineHeight: 18,
                edgeDistance: 1,
            },
            
            labelLayout: (params) => {
                const isLeft = params.labelRect.x < myChart.getWidth() / 2
                const points = params.labelLinePoints
                points[2][0] = isLeft ?
                    params.labelRect.x :
                    params.labelRect.x + params.labelRect.width

                return {
                    labelLinePoints: points,
                }
            },

            data: [{
                    value: 435,
                    name: '在租'
                },
                {
                    value: 635,
                    name: '空置'
                },
                {
                    value: 445,
                    name: '合同纠纷'
                },
            ],
        },
        // 边框的设置
        {
            top: '10%',
            radius: ['15%', '25%'],
            type: 'pie',
            emphasis: {
                show: false,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
            tooltip: {
                show: false,
            },
            data: [{
                value: 1,
                itemStyle: {
                    color: 'rgb(51,51,51,0.2)',
                },
            }, ],
        },
    ],

};