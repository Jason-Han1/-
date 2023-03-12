option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}',
        },
        color: ['#0099FF', '#FF7A8C', '#FFA94C', '#73A0FA', '#8167F5'],
        legend: {
          data: ['访问人数', '提交订单', '支付成功', '到店消费'],
          orient: 'horizontal',
          bottom: 0,
          icon: 'circle',
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 20,
          borderRadius: 4,
          textStyle: {
            fontSize: 14,
          },
        },
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: '20%',
            width: '60%',
            minSize: '30%',
            top: 0,
            gap: 2,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  fontSize: 15,
                },
                formatter: '{c}',
              },
            },
            labelLine: {
              normal: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid',
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 0,
              },
            },
            data: [{name:'访问人数',value:100},{name:'提交订单',value:200},{name:'支付成功',value:300},{name:'到店消费',value:400},],
          },
        ],
      }
