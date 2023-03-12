//  * @param  {String} type 组件类型  pie
//  * @param  {Object} data 具体参数  --必选参数
//  * @param  {String} span 饼图环化程度  0%-100%  0%实心 --非必选参数


let data = {
  title: ['微信','朋友圈'],
  data: [{value: 135,name: '微信'},{value: 35,name: '朋友圈'}]
}

let type = 'pie', span = '30%' 

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color: ['#4C84FF','#13C2C2','#9A47FF','#F04864','#FF884C','#FACC14','#2FC25B','#66B5FF'],
      legend: {
        orient: 'horizontal',
        show: true,
        bottom: 0,
        data: data.title
      }, 
      series: [
        {
          name: '详细数据',
          type: type,
          radius: [span || '0%', '55%'],
          labelLine: {
            normal: {
              length: 20,
              length2: 50,
              lineStyle: {
                color: '#333'
              }
            }

          },
          label: {
            normal: {
              formatter: '{a|{d}%} {b|{b}}\n',
              borderWidth: 0,
              borderRadius: 4,
              padding: [0, -50],
              rich: {
                a: {
                  color: '#333',
                  fontSize: 14,
                  lineHeight: 20
                },
                hr: {
                  borderColor: '#333',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 14,
                  lineHeight: 20,
                  color: '#333'
                }
              }
            }
          },
          data: data.data
        }
      ]
};