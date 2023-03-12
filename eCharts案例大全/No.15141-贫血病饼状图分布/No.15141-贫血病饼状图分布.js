option = {
    tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        show : false,
          orient: 'vertical',
          x: 'left',
          data:['城镇','农村']
      },
      series: [
        {
            name: '贫血病',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['24%', '25%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1,
                label: {
                    normal: {
                        formatter: '贫血病',
                        textStyle: {
                            color: '#00ccfe',
                            fontSize: 16
                        }
                    }
                },
                itemStyle: {
                  normal: {
                    color: '#00ccfe',
                    borderColor: '#00ccfe',
                    borderWidth: 2
                  }
                },
                tooltip: {
                  backgroundColor: 'rgba(0,0,0,0)',
                  textStyle: {
                    color: 'rgba(0,0,0,0)'
                  }
                }
            }]
        },
          {
              name:'贫血病',
              type:'pie',
              radius: ['30%', '35%'],
              avoidLabelOverlap: true,
              label: {
                  normal: {
                    formatter : '{b} {d}%',
                      textStyle: {
                        fontSize: 18,
                        color: '#00ccfe'
                    }
                  },
                  emphasis: {
                      show: true
                  }
              },
              labelLine: {
                  normal: {
                      lineStyle: {
                        color: '#00ccfe'
                    }
                  }
              },
              data:[
                  {value:8, name:'城镇'},
                  {value:2, name:'农村'}
              ]
          }
      ],
      color : ['#3db5f5','#db8776']
  };