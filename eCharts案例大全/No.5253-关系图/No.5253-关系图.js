let data = [
		{
			"id": 1,
			"personNo": "10020160141568900",
			"focusName": "唐孟先",
			"contactName": "王贵元",
			"message": "13948572295",
			"relation": "通联关系"
		},
		{
			"id": 2,
			"personNo": "10020160141568900",
			"focusName": "唐孟先",
			"contactName": "谢飞",
			"message": "乾隆首府B12栋",
			"relation": "同户关系"
		},
		{
			"id": 3,
			"personNo": "10020160141568900",
			"focusName": "唐孟先",
			"contactName": "陈诚",
			"message": "乾隆首府B12栋458室",
			"relation": "同住关系"
		},
		{
			"id": 4,
			"personNo": "10020160141568900",
			"focusName": "唐孟先",
			"contactName": "陈诚",
			"message": "18455294052",
			"relation": "通联关系"
		},
		{
			"id": 5,
			"personNo": "10020160141568900",
			"focusName": "唐孟先",
			"contactName": "张华",
			"message": "铁道学院-开福寺",
			"relation": "同行关系"
		}
	]
    
    let seriesList = [], seriesData = [], categories = []
      let linksData = [], legendData = []
      data.forEach((item, index) => {
          
        //   item.name = item.contactName
        //     item.category = item.relation
            // seriesData.push({
            //     name: item.contactName + index,
            //     category: item.relation,
            //     message: item.message,
            //     draggable: true,
            // })
        
        if (seriesList.indexOf(item.focusName) === -1) {
          seriesList.push(item.focusName)
        }
        if (seriesList.indexOf(item.contactName) === -1) {
          seriesList.push(item.contactName)
          seriesData.push({
            name: item.contactName,
            category: item.relation,
            message: item.message,
            draggable: true,
          })
          linksData.push({
            source: item.focusName,
            target: item.contactName,
            value: item.relation
          })
        } else {
          seriesList.push(item.contactName + ' ')
          seriesData.push({
            name: item.contactName + ' ',
            category: item.relation,
            message: item.message,
            draggable: true,
          })
          linksData.push({
            source: item.focusName,
            target: item.contactName + ' ',
            value: item.relation
          })
        }
        
        if (categories.indexOf(item.relation) === -1) {
          legendData.push(item.relation)
        }
        categories.push({
          name: item.relation
        })
        
      })
  
      //   seriesData = data
        seriesData.push({
          name: data[0].focusName,
          draggable: true,
          category: data[0].category
        })
    
      // console.log(seriesList)
      // seriesList.forEach((item, index) => {
      //     seriesData.push({
      //       name: item,
      //       draggable: true,
      //       itemStyle: {
      //           color: '#0E4583'
      //       }
      //     })
      // })
        console.log(seriesList)
       console.log(seriesData)
       console.log(categories)
       console.log(linksData)
       console.log(legendData)

 option = {
          color:['#199855', '#FF8C40', '#1EB0C1', '#C11E5B', '#0E4583'],
          tooltip: {
              trigger: 'item',
              formatter: params => {
                  console.log(params)
                  let { data, dataType } = params
                  if (dataType === "node") {
                    let str = data.message ? `: ${data.message}` : ''
                     return data.name + str
                  }
                  return ''
              },
              backgroundColor: "#ff7f50", //提示标签背景颜色 
              textStyle: {
                  color: "#fff"
              } //提示标签字体颜色 
          },
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          label: {
              normal: {
                  show: true,
                  textStyle: {
                      fontSize: 12
                  },
              }
          },
          legend: {
              right: 50,
                top:50,
              show: true,
              data: legendData,
              textStyle: {
                  
              }
          },
          series: [
              {
                  type: 'graph',
                  layout: 'force',
                  symbolSize: 45,
                  focusNodeAdjacency: true,
                  roam: true,
                  categories: categories,
                  label: {
                      normal: {
                          show: true,
                          textStyle: {
                              fontSize: 12
                          },
                        //   formatter: params => {
                        //       console.log(params)
                        //       let { data } = params
                        //       let str = data.message ? `: ${data.message}` : ''
                        //       return data.name + str
                        //   },
                      }
                  },
                  force: {
                      repulsion: 1000
                  },
                  edgeSymbolSize: [4, 50],
                  edgeLabel: {
                      normal: {
                          show: true,
                          textStyle: {
                              fontSize: 10
                          },
                          formatter: "{c}"
                      }
                  },
                  data: seriesData,
                  links: linksData,
                  lineStyle: {
                      normal: {
                          opacity: 0.9,
                          width: 1,
                          curveness: 0
                      }
                  }
              }
          ]
      };