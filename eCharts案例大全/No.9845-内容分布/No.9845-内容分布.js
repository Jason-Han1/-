app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    //legend: {
      //  orient: 'vertical',
      //  x: 'left',
      //  data:['社会','生活','美食','文化历史','军事','科技','体育','亲子','汽车','旅游','其他有用','影视娱乐','音乐','搞笑趣味','游戏','大自然','动漫','舞蹈']
   // },
    series: [
        {
           // name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
               normal: {
                   position: 'inner'
               }
            },
            //labelLine: {
              //  normal: {
               //     show: false
               // }
            //},
            data:[
                {value:34.58, name:'更有用', selected:true},
               // {value:679, name:'营销广告'},
                {value:65.42, name:'更有趣'}
            ]
        },
        {
            //name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: ' {b|{b}}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                  // borderWidth: 1,
                borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                rich: {
                       a: {
                           color: '#999',
                          lineHeight: 22,
                          align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        //hr: {
                          //  borderColor: '#aaa',
                          //  width: '100%',
                          //  borderWidth: 0.5,
                          //  height: 0
                       // },
                        //b: {
                           // fontSize: 16,
                           // lineHeight: 33
                        //},
                        per: {
                           color: '#eee',
                           backgroundColor: '#334455',
                           padding: [2, 4],
                           borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:7.6, name:'社会'},
                {value:4.41, name:'生活'},
                {value:4.25, name:'美食'},
                {value:2.6, name:'文化历史'},
                {value:2.38, name:'军事'},
                {value:2.36, name:'科技'},
                {value:2.03, name:'体育'},
                {value:2.03, name:'亲子'},
                {value:1.86, name:'汽车'},
                {value:1.16, name:'旅游'},
                {value:3.37, name:'其他有用'},
                {value:47.09, name:'影视娱乐'},
                {value:4.68, name:'音乐'},
                {value:4.51, name:'搞笑趣味'},
                {value:3.08, name:'游戏'},
                {value:2.54, name:'大自然'},
                {value:2.9, name:'动漫'},
                {value:0.63, name:'舞蹈'}
            ]
        }
    ]
};