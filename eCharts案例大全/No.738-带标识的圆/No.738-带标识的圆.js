option = {
         backgroundColor: '#273454',
        color: ['#6DDEBD','#D27CBD', '#5470C7', '#D4AC31', '#91CC75',
                '#FAC858','#EE6666','#F5A8F6','#FA9898','#73C0DE',
                '#3BA272','#FC8452','#A164BC'],
        // color: ['#6DDEBD','#cd4692', '#9658c3', '#6c6be2', '#01aebf', '#18b794'],
        tooltip: {
          trigger: 'item',
          // formatter: "{a} <br/>{b} : {c}$ ({d}%)",
          textStyle: {
            fontSize: 16
          }
        },
        //  grid: {
        //   left: '5%',
        //   right: '2%',
        //   bottom: '-10%',
        //   top: '2%',
        //   height: '70%',
        //   // containLabel: true
        // },
        legend: {
          data: ['人员', '机构', '医疗机构', '教育机构', '企业信息', '股东信息', '房产', '社保', '发票', '费用报销', '专项资金', '项目', '公共资源交易'],
          orient: 'vertical',
          right: '5%',
          top: '0%',
          itemWidth: 15,
          itemHeight: 10,
          itemGap:5,
          textStyle: {
            color: '#',
            fontSize: 16
          }
        },
        series: [
          {
            name: '类别查询',
            type: 'pie',
            clockwise: true, //时针方向
            startAngle: 110, //线文字间距
            radius: '80%', //外圈圆，两个就有内圈圆
            center: ['40%', '50%'],
            //  hoverAnimation: false,
            data: [
              {
                value: 6,
                name: '人员'
              },
              {
                value: 4,
                name: '机构'
              },
              {
                value: 6,
                name: '医疗机构'
              },
              {
                value: 0,
                name: '教育机构'
              },
              {
                value: 22,
                name: '企业信息'
              },
              {
                value: 1,
                name: '股东信息'
              },
              {
                value: 8,
                name: '房产'
              },
              {
                value: 0,
                name: '社保'
              },
              {
                value: 0,
                name: '发票'
              },
              {
                value: 4,
                name: '费用报销'
              },
              {
                value: 25,
                name: '专项资金'
              },
              {
                value: 6,
                name: '项目'
              },
              {
                value: 22,
                name: '公共资源交易'
              }
            ],
            label: {
              show: true,
              position: 'outside', //标签的位置
              formatter: '{a|{b}：({c})}\n{hr|}',
              rich: {
                //可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果
                // hr: {
                //     backgroundColor: 't',
                //     borderRadius: 100,
                //     width: 0,
                //     height: 10,
                //     padding: [3, 3, 0, -16],
                //     shadowColor: '#1c1b3a',
                //     shadowBlur: 1,
                //     shadowOffsetX: '0',
                //     shadowOffsetY: '2',
                // },
                a: {
                  // color:'#1AC9A2',
                  // lineHeight: 10
                  //  padding: [-35, 15, -20, 5],
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                length2: 35,
                lineStyle: {
                  width: 1
                }
              }
            }
          }
        ]
      }