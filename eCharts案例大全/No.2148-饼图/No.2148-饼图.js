option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        color: ['#0099FF', '#FF7A8C', '#FFA94C', '#73A0FA', '#8167F5'],
        legend: {
          orient: 'vertical',
          icon: 'circle',
          align: 'left',
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 20,
          borderRadius: 4,
          textStyle: {
            fontSize: 14,
          },
          x: 'right',
          y: 'center',
          data: ['访问人数', '提交订单', '支付成功', '到店消费'],
          formatter: function(params) {
            return params
          },
        },
        series: [
          {
            name: '统计',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [{name:'访问人数',value:100},{name:'提交订单',value:200},{name:'支付成功',value:300},{name:'到店消费',value:400},],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                },
              },
              labelLine: { show: true },
            },
          },
        ],
      }
