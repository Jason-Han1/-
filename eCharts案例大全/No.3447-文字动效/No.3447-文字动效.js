console.log(123)

option = {
    title: {
      text: '教职工来源',
      textStyle: {
          color: '#ffbc00'
      },
      x: 'center',
      y: 'center',
      z: 9
    },
    series: [
        {   
            z: 2,
            type: 'pie',
            radius: [0, 150],
            itemStyle: {
              color:  '#fff',
            },
            animation: false,
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1},
            ]
        },
        {
            z: 1,
            type: 'pie',
            radius: [0, 140],
            itemStyle: {
              color:  'rgba(251, 195, 195, 1)',
              borderColor: 'rgba(251, 195, 195, .8)',
              shadowBlur: '50',
              shadowColor: 'rgba(251, 195, 195, .8)'
            },
            animation: false,
            labelLine: {
                show: false
            },
            data: [
                {value: 1},
            ]
        },        
        {   
            z: 4,
            type: 'pie',
            radius: [0, 120],
            itemStyle: {
              color:  '#fff',
            },
            animation: false,
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1},
            ]
        },
        {
            z: 3,
            type: 'pie',
            radius: [0, 115],
            itemStyle: {
              color:  'rgba(251, 195, 195, 1)',
              borderColor: 'rgba(251, 195, 195, .8)',
              shadowBlur: '50',
              shadowColor: 'rgba(251, 195, 195, 20)'
            },
            animation: false,
            labelLine: {
                show: false
            },
            data: [
                {value: 1},
            ]
        },
        {   
            z: 6,
            type: 'pie',
            radius: [0, 90],
            itemStyle: {
              color:  '#fff',
            },
            animation: false,
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1},
            ]
        },
        {
            z: 5,
            type: 'pie',
            radius: [0, 85],
            itemStyle: {
              color:  'rgba(251, 195, 195, 1)',
              borderColor: 'rgba(251, 195, 195, .8)',
              shadowBlur: '50',
              shadowColor: 'rgba(251, 195, 195, 20)'
            },
            animation: false,
            labelLine: {
                show: false
            },
            data: [
                {value: 1},
            ]
        },
        {   
            z: 8,
            type: 'pie',
            radius: [0, 60],
            itemStyle: {
              color:  '#fff',
            },
            animation: false,
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1},
            ]
        },
        {
            z: 7,
            type: 'pie',
            radius: [0, 55],
            itemStyle: {
              color:  'rgba(251, 195, 195, 1)',
              borderColor: 'rgba(251, 195, 195, .8)',
              shadowBlur: '50',
              shadowColor: 'rgba(251, 195, 195, .8)'
            },
            animation: false,
            labelLine: {
                show: false
            },
            data: [
                {value: 1},
            ]
        }
    ]
};