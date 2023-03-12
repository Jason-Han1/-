option = {
    title : {
        text: '专利类型授权量',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['发明','实用新型','外观设计','发明走势','实用新型走势','外观设计走势']
    },
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    color: [//定义了线条，柱状图的颜色，颜色值的顺序你要跟你上面的totalYearList存储的顺序要一直
            "yellow", "green", "black"
        ],
    series : [
        {
            name:'发明',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            barWidth:15,
            itemStyle: {
               normal: {
                   label: {
                       show: true,		//开启显示
                       position: 'top',	//在上方显示
                       textStyle: {	    //数值样式
                           color: 'black',
                           fontSize: 16
                       }
                   }
               }
           }
        },
        {
            name: '发明走势',//数据项名称。如果不写这个那么上面的2排里面就会少一个
            type: 'line',//设置为折线图
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            showAllSymbol: true,//示折线图上所有小标签
            symbolSize: 5,//标记的大小
        },
        {
            name:'实用新型',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            barWidth:15,
            itemStyle: {
              normal: {
                  label: {
                      show: true,		//开启显示
                      position: 'top',	//在上方显示
                      textStyle: {	    //数值样式
                          color: 'black',
                          fontSize: 16
                      }
                  }
              }
          }
        },
        {
            name: '实用新型走势',//数据项名称。如果不写这个那么上面的2排里面就会少一个
            type: 'line',//设置为折线图
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            showAllSymbol: true,//示折线图上所有小标签
            symbolSize: 5,//标记的大小
        },
        {
            name:'外观设计',
            type:'bar',
            data:[2.0, 5.5, 4.0, 21.4, 18.7, 30.7, 62.6, 82.2, 40.7, 28.8, 8.0, 10],
            barWidth:15,
            itemStyle: {
              normal: {
                  label: {
                      show: true,		//开启显示
                      position: 'top',	//在上方显示
                      textStyle: {	    //数值样式
                          color: 'black',
                          fontSize: 16
                      }
                  }
              }
          }
        },
        {
            name: '外观设计走势',//数据项名称。如果不写这个那么上面的2排里面就会少一个
            type: 'line',//设置为折线图
            data:[2.0, 5.5, 4.0, 21.4, 18.7, 30.7, 62.6, 82.2, 40.7, 28.8, 8.0, 10],
            showAllSymbol: true,//示折线图上所有小标签
            symbolSize: 5,//标记的大小
        }
    ]
};
