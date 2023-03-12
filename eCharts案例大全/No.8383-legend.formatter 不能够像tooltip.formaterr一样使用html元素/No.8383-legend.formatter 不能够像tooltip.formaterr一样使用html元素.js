let seriesData=[
                {value: 335, name: '直接访1问'},
                {value: 310, name: '邮件营4销'},
                {value: 234, name: '联盟广告33'},
                {value: 135, name: '视频广告22'},
                {value: 1548, name: '搜索引擎123'}
            ]
            
option = {
     tooltip: {
          trigger: 'item',
          formatter:(param) => {
            let {color, data, percent} = param

            let name = data.name
            let value = data.value

            return `<div style="display: flex;align-items: baseline;justify-items: baseline">
                             <div style="margin-right: 10px;border-radius:10px;width:12px;height:12px;background-color:${color}"></div>
                             ${name}<br/>
                             ${value}台 (${percent}%)
                    </div>`
          }
        },
    legend: {
        orient: 'vertical',
        left: 10,
        formatter: (name) => {
            if (!Array.isArray(seriesData)) {
              return
            }

            const reducer = (accumulator, currentValue) => accumulator+currentValue.value
            const sum = seriesData.reduce(reducer, 0)
            let itemData = seriesData.find(item => item.name === name)
            let targetValue = itemData ? itemData.value : null
            let p = (targetValue / sum * 100)

            if (isNaN(p)) {
              p = 0
            }
            p = p.toFixed(2)
            
            //  should return this , 
            //  but can't handle text-align problem
            // return `${name} | ${p}% |${targetValue}`

            return `<div style="display:table-row">
                    <div style="display:table-cell">${name}</div>
                    <div style="display:table-cell"> ${p}%</div>
                    <div style="display:table-cell">${targetValue}</div>
                   </div>`
          }
        
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: seriesData
        }
    ]
};