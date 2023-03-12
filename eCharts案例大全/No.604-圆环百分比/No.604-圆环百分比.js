var data = 20;
var color = '#f26c6c';
var text = true;
var radius = ['80%', '90%'];
var centerRadius = ['62%', '65%'];
option = {
  backgroundColor: 'transparent',
  title: {
    text: text ? '{b|' + data + '%' + '}' : '{a|错题率 }{b|' + data + '%' + '}',
    x: 'center',
    y: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'normal',
      color: centerRadius ? color : '#fff',
      rich: {
        a: {
          fontSize: 18,
        },
        b: {
          fontSize:24,
        },
      },
    },
  },
  series: [
    {
      //渐变圆环
      name: '',
      type: 'pie',
      // cursor: "default",
      radius: centerRadius ? centerRadius : '65%',
      startAngle: 180,
      hoverAnimation: false,
      avoidLabelOverlap: true,
      z: 0,
      zlevel: 0,
      label: {
        show: false,
        normal: { show: false },
      },
      data: [
        {
          value: 0,
          name: '',
          itemStyle: {
            normal: {
              color: color,
            },
          },
        },
      ],
    },
    {
      //进度圆环
      name: 'Line 1',
      type: 'pie',
      startAngle: 180,
      clockWise: true,
      radius: radius ? radius : ['70%', '73%'],
      itemStyle: {
        normal: {
          label: {
            show: true,
          },
          labelLine: {
            show: false,
          },
        },
      },
      hoverAnimation: false,

      data: [
        {
          value: data,
          itemStyle: {
            normal: {
              color,
            },
          },
        },
        {
          //画中间的图标
          name: '',
          value: 0,
          label: {
            position: 'inside',
            width: 16,
            height: 16,
            borderRadius: 10,
            padding: 11,
          },
        },
        {
          value: 100 - data,
          name: '',
          itemStyle: {
            normal: {
              color: 'transparent', //未完成的圆环的颜色
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
        },
      ],
    },
  ],
};
