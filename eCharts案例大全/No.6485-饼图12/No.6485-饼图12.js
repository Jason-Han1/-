// option = {
//     title: {
//         text: 'Awesome Chart'
//     },
//     xAxis: {
//         data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//     },
//     yAxis: {},
//     series: [{
//         type: 'line',
//         data:[220, 182, 191, 234, 290, 330, 310]
//     }]
// };

option = {
       // color: ['#4BAF50', '#FF4637', '#FF9600', '#00B4CD', '#AF32C8'],
        // color: ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864'],
        color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
        title: {
          text: '',// 标题
          textStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black'
          },
          y: '4%'
        },
        tooltip: {
          trigger: 'item',
          formatter: ' {a} <br/>{b} : {c} ({d}%) '
        },
        // title: [
        //   {
        //     text: '各渠道接口调用数量',
        //     textStyle: {
        //       fontSize: 10,
        //       color: '#fff'
        //     },
        //     textAlign: 'center',
        //     x: '38%',
        //     y: '48%'
        //   }],
 

        // legend: {
        //   orient: 'vertical',
        //   x: 'right',
        //   y: '20%',
        //   itemWidth: 15,
        //   itemHeight: 15,
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#909399'
        //   },
        //   data: waitName
        // },

        series: [
          {
            name: '总数',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            center: ['50%', '60%'],
            itemStyle: {
              color: '#32b7df',
            },
            label: {
              normal: {
                show: true,
                color: '#fff',
                position: 'center',
                fontSize: '20px Microsoft YaHei',
                formatter: function(a) {
                  return a.name + '\n' + a.value
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: 1232, name: '总数' }]
          },
          {
            // color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
            name: '调用数量',
            type: 'pie',
            center: ['50%', '60%'],
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 4
            }
            },
            label: {
              formatter: '{b} {c}\n{d}%'
            },
            labelLine: {
              normal: {
                show: true,
                length: 6,
                length2: 5
              }
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
          }
        ]
      }