option = {
  backgroundColor: '#080b30',
  legend: {
    top: 'center',
    right: 'right',
    icon: 'circle',
    itemWidth: 10, 
    itemHeight: 10,
    textStyle: {
      fontSize: '14px',
    	color: '#a8d5ff',
    }
  },
  //color: ['#ff7824', '#ffde32', '#3bffb7', '#00eaff', '#0084ff'],
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [5, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      //roseType: 'radius',
      itemStyle: {
        // borderRadius: 0
        //color: '#c23531',
        shadowBlur: 40,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        // borderWidth: 1,
        // borderJoin: round
      },
      label: {
          //color: '#a8d5ff',
          fontSize: '14px',
          //formatter:  '{b}--  {c} --{{d}%}',
          //formatter: '{dark|{b}}  {color|{c}} {color|({d}%)}',
          formatter: function(data){
            console.log(data) 
            return '{color'+data.dataIndex+'|'+data.value+'%}'
          },
          rich: {
            color0: {
              color: '#ff7824',
            },
            color1: {
              color: '#ffde32',
            },
            color3: {
              color: '#00eaff',
            },
            color2: {
              color: '#3bffb7',
            },
            color4: {
              color: '#0084ff',
            },
          }
      },
      labelLine: {
        lineStyle: {
          //color: 'rgba(255, 255, 255, 0.3)'
        },
        // smooth: 0.2,
        // length: 10,
        // length2: 20
      },
      color: ['#ff7824', '#ffde32', '#3bffb7', '#00eaff', '#0084ff'],
      data: [
        { value: 30, name: 'rose 1' },
        { value: 20, name: 'rose 2' },
        { value: 15, name: 'rose 3' },
        { value: 20, name: 'rose 4' },
        { value: 15, name: 'rose 5' }
      ]
    }
  ]
};