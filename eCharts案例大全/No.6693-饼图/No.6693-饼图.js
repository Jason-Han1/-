var data = [{'value':0.1,'name':'舌象'},{'value':20,'name':'血压'},{'value':20,'name':'心电'},{'value':10,'name':'血氧'},{'value':20,'name':'血糖'},{'value':20,'name':'体温'},{'value':20,'name':'体脂'}]
var option = {
          legend: {
            show: false,
            orient: 'vertical',
            top: '0',
            right: '0',
            textStyle: {
              color: '#666666',
              fontWeight: 'normal'
            }
          },
          title: {
            text: "共有数据\n{number|800000}\n条",
            left: 'center',
            top: 'center', //top待调整
            textStyle: {
              color: '#666666',
              fontSize: 16,
              fontWeight: "400",
              rich: {
                number: {
                  color: '#222222',
                  fontSize: 48,
                  fontWeight: "bold",
                padding: [10, 0, 0, 0]
                }

              }
            },
            itemGap: -4 //主副标题间距
          },
          tooltip: {
            trigger: 'item',
            formatter: (params) => {
              return `${params.name} ${params.value}条`;
            }
          },
          series: [
            {
              type: 'pie',
              radius: ['70%', '90%'],
             // radius: radiusa,
              //center: center,
              label: {
                show: true,
                position: 'outside',
                formatter: '{a|{b}}\n{hr|}',
                rich: {
                  hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                  },
                  a: {
                    padding: [-30, 5, -20, 15]
                  }
                }
              },
              avoidLabelOverlap: true, //是否启用防止标签重叠策略，默认开启
              labelLine: {
                normal: {
                  show: true,
                  length: 5,
                //  length2: -2
                }
              },
              data: data,
              color: ['#15BEB8', '#4786FF', '#FDB54D', '#FD8F4D', '#F76661', '#B06DF4', '#73C8FF'],
              silent: false
            }
          ]
        };