option = {
        tooltip: { show: true },
        dataset: {
          dimensions: ['name', 'version'],
          source: [
            {
              'name': '新版首页-生产',
              'code': '1567167800561',
              'version': 285,
              'createdAt': 1594019050449
            },
            {
              'name': '邢培东-电力',
              'code': '1592815993034',
              'version': 17,
              'createdAt': 1592894028395
            },
            {
              'name': '刘倩-皮带系统',
              'code': '1592805567409',
              'version': 71,
              'createdAt': 1592893610361
            },
            {
              'name': '刘倩-皮带系统-变频参数',
              'code': '1592891526215',
              'version': 4,
              'createdAt': 1592893303233
            },
            {
              'name': '变频参数',
              'code': '1592889952370',
              'version': 1,
              'createdAt': 1592890037919
            }
          ]
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: 'bar'
          }
        ]
      }