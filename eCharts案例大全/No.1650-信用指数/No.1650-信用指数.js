option = {
    backgroundColor:'#03213E',
        title: {
          text: '信用指数',
          left: 20,
          top: 20,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 14,
            fontWight: 400,
          },
        },
        color: ['#2479d0', '#479A4C', '#F17104'],
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            name: '信用指数',
            type: 'pie',
            radius: '50%',
            clockWise: false,
            data: [
              { value: 60, name: '80分-100分' },
              { value: 20, name: '60分-80分' },
              { value: 20, name: '60分以下' },
            ],
            label: {
              color: '#fff',
            },
            labelLine: {
              length2: 35,
              length: 20,
              lineStyle: {
                  cap: 'round',
              },
            },
            itemStyle: {
              borderColor: '#03213E',
              borderWidth: 7,
            },
          },
        ],
      }