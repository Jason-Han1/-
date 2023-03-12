option = {
        backgroundColor:'#fff',
        tooltip: {
          trigger: 'item',
          //   formatter: "{b}: {c} ({d}%)",
          formatter: (opdata) => {
            let label = opdata.data.name;
            let count = Number(opdata.data.value)
            return label + ':' + count + '艘(' + opdata.percent + '%)';
          }
        },
        title: {
          text: [`{a|114}`, '{b|船舶总数（艘）}'].join(''),
          top: 20,
          left: "center",
          textStyle: {
            rich: {
              a: {
                fontSize: 36,
                fontWeight: 'bold',
                color: 'rgba(56, 56, 56, 1)',
                lineHeight: 42,

              },
              b: {
                color: 'rgba(56, 56, 56, 1)',
                fontSize: 13,
                fontWeight: 400,
                padding: 10,
                lineHeight: 0,
                verticalAlign: 'bottom',
                // verticalAlign:'middle',
              },
            }
          }
        },
        grid: {
          containLabel: true
        },
        color: ["#C0E7FF", "#FE7537"],
        series: [
          {
            name: '船舶总艘数统计',
            type: 'pie',
            center: ['50%', '60%'],
            radius: ['35%', '55%'],
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: true,
                position: 'outside',
                formatter: (datas) => {
                  let defaultResult = `{a|${datas.name}}\n{b|${datas.value}}`;
                  
                 
                  return defaultResult;
                },
                rich: {
                  a: {
                    fontSize: 20,
                    lineHeight: 20
                  },
                  d: {
                    color: '#6B72C0',
                    fontSize: 20,
                    lineHeight: 20
                  },
                  b: {
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: 20
                  },
                  c: {
                    color: '#6B72C0',
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: 20
                  },
                  //此处还可以添加背景图片，比如上下箭头等
                  //upRed可以是字符串，也可以是require后的变量
                  //https://blog.csdn.net/qq_38571996/article/details/82746663
                //   img1:{
                //         backgroundColor : {
                //             image : upRed
                //         },
                //         padding:[0,0,2,0]
                //     }
                }
              },
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [{name:'内河船',value:113},{name:'外河船',value:442}],
            itemStyle: {
              emphasis: {
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
 
    //   myChart.dispatchAction({
    //     type: 'highlight',
    //     seriesIndex: 0,
    //     dataIndex: 0
    //   });
   
  
    