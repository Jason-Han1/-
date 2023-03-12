var echart7Data= [
               {value:1560.79, legendname:'归类不正确',name:"归类不正确", name1: '1560.79', itemStyle:{color:"#fdd000"}},
               {value:1471.67, legendname:'错别字较多',name:"错别字较多", name1: '1471.67', itemStyle:{color:"#3af3ff"}},
               {value:679.90, legendname:'未询问发票',name:"未询问发票", name1: '679.90', itemStyle:{color:"#ff59c2"}},
               {value:520.65, legendname:'未询问交易清单',name:"未询问交易清单", name1: '520.65', itemStyle:{color:"#00de73"}},
               {value:1471.67, legendname:'未询问监控情况',name:"未询问监控情况", name1: '1471.67', itemStyle:{color:"#ab8eff"}},
               {value:1471.67, legendname:'修改处未捺印',name:"修改处未捺印", name1: '1471.67', itemStyle:{color:"#d754e3"}},
               {value:536.78, legendname:'关键信息缺失',name:"关键信息缺失", name1: '536.78', itemStyle:{color:"#1daff3"}},
               {value:520.65, legendname:'该签名未签名',name:"该签名未签名", name1: '520.65', itemStyle:{color:"#7352ff"}},
               {value:1471.67, legendname:'制作数据过短',name:"制作数据过短", name1: '1471.67', itemStyle:{color:"#f4ff42"}},
               {value:679.90, legendname:'文字叙述不规范',name:"文字叙述不规范", name1: '679.90', itemStyle:{color:"#94ffa6"}},   
               {value:679.90, legendname:'内容存在逻辑错误',name:"内容存在逻辑错误", name1: '679.90', itemStyle:{color:"#ffb362"}},
               {value:679.90, legendname:'无行政/刑事诉讼公知书',name:"无行政/刑事诉讼公知书", name1: '679.90', itemStyle:{color:"#00d1c6"}}, 
            ];


 option = {
    tooltip: {
        trigger: 'item',
        formatter: function (parms){
          var str=  parms.seriesName+"</br>"+
            parms.marker+""+parms.data.legendname+"</br>"+
            "数量："+ parms.data.value+"</br>"+
            "占比："+ parms.percent+"%";
            return  str ;
        }
    },
    legend: {
        // type:"scroll",
        orient: 'vertical',
        left:'70%',
        align:'left',
        top:'middle',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 16,
        data: echart7Data,
        formatter: function(name) {
            var res = ''
            for (var i = 0; i < echart7Data.length; i++) {
                if(echart7Data[i].name== name){
                    res+= '{a|'+ name + '}' + '{b|' + echart7Data[i].name1 + '}'
                }
            }
            return res
        },
        textStyle: {
            color:'#000',
            rich: {
                a: {
                    fontSize: 14,
                    width: 130,
                    padding: [0, 50, 0, 0]
                },
                b: {
                    fontSize: 20,
                }
            }
        },
    },
    graphic:{       //图形中间图片
        elements: [{
          type: 'image',
          style: {
            image: '',//你的图片地址
            width: 80,
            height: 85.7
          },
          left: '31%',
          top: 'center'
        }]
    },
    series: [
        {
            name: '笔录审核',
            type:'pie',
            center: ['35%', '50%'],
            radius: ['40%', '65%'],
            clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            itemStyle: { //图形样式
                normal: {
                    borderColor: '#005783',
                    borderWidth: 5,
                    shadowColor: '#037882',
                    shadowBlur: 10
                },
            },
            label: {
                normal: {
                    show: false,
                }
            },
            data: echart7Data
        },
        {
            type: 'pie',
            zlevel: 1,
            silent: true,
            center: ['35%', '50%'],
            radius: ['35%', '36%'],
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
                {
                value:  1 ,
                itemStyle: {
                    normal: {
                        color: '#0ce1d6'
                    }
                }
            }]
          },
        {
            type: 'pie',
            zlevel: 1,
            silent: true,
            center: ['35%', '50%'],
            radius: ['0%', '35%'],
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
                {
                value:  1,
                itemStyle: {
                    normal: {
                        color: 'rgba(2, 117, 128, 0.1)'
                    }
                }
            }]
          }
    ]
};