option = {
   title: {
              text: '雷达图'
          },
          legend: {
              data: ['数据一','数据二']
          },//图例，必须与series的数据data的name相互对应
          radar: {
              // shape: 'circle',//切换多边形为圆形
              indicator: [
                  { name: '第一', max: 100},
                  { name: '第二', max: 100},
                  { name: '第三', max: 100},
                  { name: '第四', max: 100},
                  { name: '第五', max: 100},
                  { name: '第六', max: 100},
                  { name: '第七', max: 100},
                  { name: '第八', max: 100},
                  { name: '第九', max: 100},
                  { name: '第十', max: 100}
              ]
          },//雷达图的数据类型和顶点最大值
           tooltip: {
          trigger: 'item',//数据的name对应下面a
          formatter: '{a} <br/>{b} : {c}'
        },//鼠标移入显示数据形式
          series: [{
            name:'数据',
              type: 'radar',
              data: [
                  {
                      value: [10,18,50,40,54,16,28,41,31,22],
                      name: '数据一',
                      // label:{
                      //   show: true,
                      // }//图中显示具体数字
                  },
                  {
                      value: [20,28,20,30,44,66,58,21,71,12],
                      name: '数据二',
                      // areaStyle: {
                      //   color: 'rgba(255, 228, 52, 0.6)'
                      // }//给围起来的区域添加上颜色，空对象则默认线段颜色
                  }
              ]
          }]
};
