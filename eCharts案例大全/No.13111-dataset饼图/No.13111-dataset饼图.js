var option = {
    legend: {
        orient: 'vertical',
        left: '2%',
        top: '45%',
        itemGap: 20,
        data: [
          {
            name: '待维修'
          },
          {
            name: '维修中'
          },
          {
            name: '运行中'
          }
        ],
        textStyle: {
          fontWeight: 'normal',
          color: '#27C2E1',
          fontSize: 16
        }
    },
    tooltip: {},
    dataset: [
        {
            source: [
                ['状态', '待维修', '维修中', '运行中'],
                ['value', 34, 23, 236]
            ]
        },{
            source: [
                ['week', '吨数', '次数', '报修'],
                ['周一', 41.1, 30.4, 65.1],
                ['周二', 32, 0, 72.2]
            ]
        }, {
            source: [
                ['cate', '配送次数', '配送车次'],
                ['value', 325, 2873]
            ]
        }
    ],
    series: [
        
        {
            type: 'pie',
            radius: [20, 60],
            center: ['28%', '50%'],
            datasetIndex: 0,
            seriesLayoutBy: 'row',
            color: [{
                colorStops: [{
                  offset: 0,
                  color: '#FFEA4F'
                }, {
                  offset: 1,
                  color: '#F89212'
                }]
            }, {
                colorStops: [{
                  offset: 0,
                  color: "#FF7671"
                }, {
                  offset: 1,
                  color: '#A14AFF'
                }]
            }, {
                colorStops: [{
                  offset: 0,
                  color: "#A568FF"
                }, {
                  offset: 1,
                  color: '#006CFF'
            }]
          }]
        },
    
    
    
    
    
        {
            type: 'pie',
            radius: [30, 60],
            center: ['15%', '15%'],
            datasetIndex: 1,
            encode: {
                itemName: 'week',
                value: '吨数'
            }
        }, {
            type: 'pie',
            radius: [30, 60],
            center: ['50%', '15%'],
            datasetIndex: 1,
            encode: {
                itemName: 'week',
                value: '次数'
            }
        }, {
            type: 'pie',
            radius: [30, 60],
            center: ['80%', '15%'],
            datasetIndex: 1,
            encode: {
                itemName: 'week',
                value: '报修'
            }
        },
        
        
        
        
        
        
        {
            type: 'pie',
            name: '配送',
            radius: [50, 60],
            center: ['15%', '80%'],
            datasetIndex: 2,
            encode: {
                itemName: 'cate',
                value: '配送次数'
            },
            color: [{
                colorStops: [{
                  offset: 0,
                  color: '#FF7671'
                }, {
                  offset: 1,
                  color: '#A14AFF'
                }]
            }],
            label: {
              formatter: '{@配送次数}\n{x|{a}}',
              position: 'center',
              textStyle: {
                color: '#000',
                fontSize: 24
              },
              rich: {
                  x: {
                      color: '#f00',
                      fontSize: 18
                  }
              }
            },
            tooltip: {
                show: false
            }
        },
        {
            type: 'pie',
            name: '配送车次',
            radius: [50, 60],
            center: ['45%', '80%'],
            datasetIndex: 2,
            encode: {
                itemName: 'cate',
                value: '配送车次'
            },
            color: 'orange'
        }
        
        
        
        
        
        
        
        
    ]
};