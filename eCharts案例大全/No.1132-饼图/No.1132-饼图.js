option = {
    title: {
      text: '案件总数(件)',
      subtext: '1305',
      x: 'center',
      y: 'center',
      top: '40%',
      textStyle: {
        color: '#999999',
        fontSize: 14,
        verticalAlign: 'top'
      },
      subtextStyle: {
        color: '#000000',
        fontSize: 38,
        verticalAlign: 'top'
      }
    },
    color: ['#6395FA', '#F6BD16'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: true,
      orient: 'vertical',
      right: 'right',
      bottom:'10%',
      icon: "circle", 

    },
    series: [
      {
        type: "pie",
        radius: ["55%", "80%"],
        center: ["50%", "50%"],
        hoverAnimation: true,
        z: 10,
        itemStyle: {
          normal: {
            borderWidth: 2,
            borderColor: "#303030"
          }
        },
        label: {
          show: false
        },
        data: [{ value: 2000, name: 'Search Engine' },
        { value: 735, name: 'Direct' }],
        labelLine: {
          show: false
        }
      }
    ]
  }