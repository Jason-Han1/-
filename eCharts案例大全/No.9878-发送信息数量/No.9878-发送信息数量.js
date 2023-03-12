option = {
    title : {
                  text: '发送信息数量',
                  left: 'center',
                  top: 10,
                  textStyle: {
                      color: '#ccc'
                  }
              },
              tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b}: ({c})"
              },
              series: [
                  {
                      name:'类型',
                      type:'pie',
                      radius: ['20%', '60%'],
                      avoidLabelOverlap: true,
                      color: ['#bae8ff','#aad0e2','#27a9ea'],
                      label: {
                          normal: {
                              textStyle: {
                                  fontSize: 18,
                                  color: '#235894'
                              }
                          }
                      },
                      labelLine: {
                          normal: {
                              lineStyle: {
                                  color: '#235894'
                              }
                          }
                      },
                      data:[
                          {value: 11, name:'短信'},
                          {value: 23, name:'语音'},
                          {value: 2, name:'彩信'}
                      ]
                  }
              ]
};