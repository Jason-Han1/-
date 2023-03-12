option = {
    backgroundColor:'#fff',
       title:{
        text: "任务关系图",
        subtext: "",
        top: "top",
        left: "center"
    },
      tooltip: {},
      legend: false,
      animationDuration: 1000,
      animationEasingUpdate: 'quinticInOut',
      
      series: [{
          name: '王同学',
          type: 'graph',
          layout: 'force',
          force: {
              repulsion: 50
          },
          data: [{
              "name": "王同学",
              "symbolSize": 20,
              "draggable": "true",
              "value": 50,
              itemStyle:{
                  color:'#2E77EA'
              },
              focusNodeAdjacency:false,
              hoverAnimation:false,
              draggable:true,
              symbol:'image://http://thirdwx.qlogo.cn/mmopen/wVTMxTlO9rRHGxzbxOdHl3oIlUsFuqyClF10Iftl7BfIiajMJSSlQV4stI58WYiaEwSFt1Y0lCMtQJ8WcBqN4kyxXBxLMfyWrT/132'

          }, {
              "name": "杨同学",
              "value": 8,
              "symbolSize": 10,
              "category": "王同学",
              focusNodeAdjacency:false,
              hoverAnimation:false,
               itemStyle:{
                  color:'#010101'
              },
              draggable:true,
          
          symbol:'image://http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7b8opnxfxlLpEnqGEIQ8ibd5KyuoSUYG2vWSVKvUyhV57CK9xUROzampyctbF0V0JyvbYUjicksjxTjEGxk8KGUyowSoAe3JQUI/132'
          }, {
              "name": "陈同学",
              "symbolSize": 10,
              "category": "王同学",
              focusNodeAdjacency:false,
          hoverAnimation:false,
          draggable:true,
               itemStyle:{
                  color:'#010101'
              },
              "value": 1,
              symbol:'image://http://thirdwx.qlogo.cn/mmopen/YriaJGGGBCNN5pVPgtw2ia06wWSzv4XSavKGPtRBjCJoqz8dRcf0AODicKPW2N6M3SuricyLUicR75oL1od9WN2xe37OicaTYEj55n/132'
          }, {
              "name": "秦同学",
              "symbolSize": 10,
              "category": "王同学",
              focusNodeAdjacency:false,
          hoverAnimation:false,
               itemStyle:{
                  color:'#010101'
              },
          draggable:true,
              "value": 1,
              symbol:'image://http://img.sxfs0351.com/oi/178332126d0f43ae967863aadb8446e0.jpg?x-oss-process=image/resize,w_200,h_200/auto-orient,1/quality,q_90/format,jpg'
          }, {
              "name": "郭同学",
              "symbolSize": 10,
              "category": "王同学",
              focusNodeAdjacency:false,
          hoverAnimation:false,
               itemStyle:{
                  color:'#010101'
              },
          draggable:true,
              "value": 1,
              symbol:'image://http://thirdwx.qlogo.cn/mmopen/wVTMxTlO9rR6No3iaiaXLh107W84Wrj24aN04d0QnkQJAicRpmJC8ams8aATl4ZGNoM3ibJBLEo2P26GgrtarsRW0g/132'
          }, {
              "name": "孟同学",
              "symbolSize": 10,
              "category": "王同学",
              focusNodeAdjacency:false,
          hoverAnimation:false,
               itemStyle:{
                  color:'#010101'
              },
          draggable:true,
              "value": 1,
              symbol:'image://http://thirdwx.qlogo.cn/mmopen/YriaJGGGBCNN5pVPgtw2ia01iaicYLzMdS9RVeY0icLDBhzw7yibyuB5eNAyasRhZSrk3fuA53GaRfNvv3wfeqdicib1jEPgBkbQTVPD/132'
          }],
          links: [{
              "source": "王同学",
              "target": "杨同学"
          }, {
              "source": "王同学",
              "target": "陈同学"
          }, {
              "source": "王同学",
              "target": "秦同学"
          }, {
              "source": "王同学",
              "target": "郭同学"
          }, {
              "source": "王同学",
              "target": "孟同学"
          }],
          categories: [{
              'name': '王同学'
          }],
          focusNodeAdjacency: true,
          roam: true,
          label: {
              normal: {

                  show: true,
                  position: 'top',

              }
          },
          lineStyle: {
              normal: {
                  color: 'source',
                  curveness: 0,
                  type: "solid"
              }
          }
      }]
  };