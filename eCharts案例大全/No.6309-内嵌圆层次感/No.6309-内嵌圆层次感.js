//两圆做出来的，通过和没通过整改，数据拆成两圆的数据，不需要展示的那个，这里指yes和no，颜色对应给背景色，就可以了
option = {
   graphic: [{ // 环形图中间添加文字
          type: 'text', // 通过不同top值可以设置上下显示
          left: 'center',
          top: '40%',
          style: {
            text: '81.3%',
            textAlign: 'center',
            fill: '#34E4FE',
            width: 30,
            height: 30,
            fontSize: 78,
            fontFamily: 'Microsoft YaHei'
          }
        }, {
          type: 'text',
          left: 'center',
          top: '60%',
          style: {
            text: '整改通过率',
            textAlign: 'center',
            fill: '#9B9EB5',
            width: 30,
            height: 30,
            fontSize: 72
          }
        }],
        series: [
          {
            type: 'pie',
            label: {
              show: false
            },
            startAngle: 90, // 设置起始角度
            avoidLabelOverlap: false, // 避免标注重叠
            hoverAnimation: false, // 移入放大
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['70%', '80%'],
            color: ['#EFEFEF', '#34E4FE'],
            data: [
              { value: 30, name: 'no' },
              { value: 214, name: '通过' }
            ]
          },
          {
            type: 'pie',
            label: {
              show: false
            },
            startAngle: 90, // 设置起始角度
            avoidLabelOverlap: false, // 避免标注重叠
            hoverAnimation: false, // 移入放大
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['60%', '70%'],
            color: ['#FDAD5C', '#EFEFEF'],
            data: [
              { value: 30, name: '没通过' },
              { value: 214, name: 'yes' }
            ]
          }
        ]
};