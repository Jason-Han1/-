var pin4 = "/asset/get/s/data-1579066062473-JXsamkXZ.png";

var pin3 = "/asset/get/s/data-1579066054941-hkIocfsu.png";

var pin2 = "/asset/get/s/data-1579066044534-5azw_C9v.png";

var pin1 = "/asset/get/s/data-1579066027633-7D_ue3Yu.png";

option = {
    backgroundColor:'#011a33',
    tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: { //标签位置样式
          orient: 'vertical',
          right:'0%',
          itemWidth: 22,
          itemHeight: 16,
          icon: 'diamond',
          itemGap: 15,
          data:[
              { name:'肇事肇祸精神障碍患者群体',icon:'image://'+pin1 },
              { name:'其他利益诉求群体',icon:'image://'+pin2 },
              { name:'征地拆迁群体',icon:'image://'+pin3 },
              { name:'投资理财群体',icon:'image://'+pin4 },
          ],
          textStyle:{
            fontSize:15,
            color:"#fff",

          }  
        
          
      },
      series: [
          {
              name: '累计服务',
              type: 'pie',
              radius: ["18%", "86%"],
              center: ['50%', '52%'],
              roseType: 'radius',//是否展示成南丁格尔图,'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小,'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
              label: {
                  normal: {
                      show: false
                  }

              },
              lableLine: {
                  normal: {
                      show: false
                  }
              },
              data: [
                  { value: 18, name: '肇事肇祸精神障碍患者群体', itemStyle: { color: '#3f98fd' } },
                  { value: 24, name: '其他利益诉求群体', itemStyle: { color: '#fffd00' } },
                  { value: 22, name: '征地拆迁群体', itemStyle: { color: '#fd9d73' } },
                  { value: 36, name: '投资理财群体', itemStyle: { color: '#0be3f5' } },
                 
              ]
          },{
              type: 'pie',
              radius: ["90%", "91%"],
              center: ['48%', '50%'],
              hoverAnimation: false,
              labelLine: {
                  normal: {
                      show: false,
                      length: 30,
                      length2: 35
                  },
                  emphasis: {
                      show: false
                  }
              },
              name: "",
              data: [{
                  name: '',
                  value: 0,
                  itemStyle: {
                      normal: {
                          color: "#0043c2"
                      }
                  }
              }]
             }
       ]
};