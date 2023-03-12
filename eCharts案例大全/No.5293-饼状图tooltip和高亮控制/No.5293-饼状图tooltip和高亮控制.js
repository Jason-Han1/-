const data = [
        { value: 335, name: '特困人员供养' },
        { value: 310, name: '房屋建筑施工许可' },
        { value: 234, name: '发票领用' },
        { value: 135, name: '信息查询' },
      ]

option = {
    tooltip: {
          trigger: 'item',
          // 设置提示框的位置
          position: ["43%", "11%"],
          // 设为空值  去掉提示框默认的背景色
          backgroundColor: '',
          // 是否设置让提示框的内容一直显示  默认值是false
          alwaysShowContent: true,
          formatter: (params) => {
            return `
                         <div style="height: 240px;width: 399px;opacity: 0.1;background-color: #72BCE9;border: 1px solid #979797;text-align: right;padding: 50px">
                             <p><span style='font-size: 52px;color: rgba(255,255,255,0.85);letter-spacing: 0;text-align: right;'>${params.percent}%</span></p>
                             <hr style="margin: 10px;">
                             <p style="font-size: 24px;color: rgba(255,255,255,0.85);margin: 20px 0;">
                                <span style="width: 10px;height:10px;display: inline-block;background: ${params.color}"></span>
                                ${ params.name }
                             </p>
                             <p><span style='font-size: 32px;color: rgba(255,255,255,0.85);'>${params.value}</span></p>
                         </div>
                        `
          },
        },
        legend: {
          right: 10,
          data: ['特困人员供养', '房屋建筑施工许可', '发票领用', '信息查询'],
        },
        series: [
          {
            name: '服务内容占比',
            type: 'pie',
            left: '-50%',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            color: ['rgba(57,234,167,0.70)', 'rgba(252,83,137,0.60)', 'rgba(255,127,31,0.70)', 'rgba(255,220,100,0.70)'],
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              normal: {
                // borderColor: '#091B3A',
                // borderWidth: 8,
              },
            },
            data: data,
          },
          {
            name: '',
            type: 'pie',
            left: '-50%',
            hoverAnimation: false,
            radius: ['47%', '42%'],
            avoidLabelOverlap: false,
            tooltip: {
              show: false,
            },
            label: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0.19)',
              },
            },
            data: [1],
          },
        ]
};

// 设置某条数据默认高亮且tooltip显示

// myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: dataIndex })
// myChart.dispatchAction({ type: 'highlight', dataIndex: dataIndex })
// myChart.on('mouseover', (params) => {
//     if (params.dataIndex !== dataIndex) {
//         myChart.dispatchAction({ type: 'downplay', dataIndex: dataIndex })
//     }
//     this.hoverContentService = params
// })
//  myChart.on('mouseout', (params) => {
//     dataIndex = params.dataIndex
//     myChart.dispatchAction({ type: 'highlight', dataIndex: params.dataIndex })
// })