
function setSuperimposedColor (color) {
  let setColor
  if (typeof color === 'string') {
    setColor = color
  } else {
    let colorArr = []
    if (color.length !== 1) {
      colorArr = color.map((item, index) => {
        return {
          offset: index / (color.length - 1),
          color: item
        }
      })

      const newColor = colorArr.map((item, idx) => {
        return [
          {
            offset: +(idx / colorArr.length).toFixed(2),
            color: item.color
          },
          {
            offset: +((idx + 1) / colorArr.length).toFixed(2) - 0.01 === 0.99 ? 1 : +((idx + 1) / colorArr.length).toFixed(2) - 0.01,
            color: item.color
          }
        ]
      })
      colorArr = []
      newColor.forEach(item => {
        item.forEach(i => {
          colorArr.push(i)
        })
      })
    } else {
      colorArr = [{
        offset: 0,
        color: color[0]
      }, {
        offset: 1,
        color: color[0]
      }]
    }
    setColor = new echarts.graphic.LinearGradient(0, 1, 0, 0, colorArr, false)
  }
  return setColor
}

  

const source = [
    {
       value:220,
    color:['red','blue','#15DFBE']
        
    },
     {
       value:182,
     color:['#D90FA4']
        
    },
    {
       value:191,
     color:'#D90FA4'
        
    }, {
       value:234,
     color:['red','#FFCC00']
        
    }, {
       value:290,
     color:['#FF0000','#FF7F00','#FFFF00','#00FF00','#00FFFF','#0000FF','#8B00FF']
        
    },{
       value:330,
     color:['red']
        
    },{
       value:310,
     color:['red']
        
    }
        
  


]

const data = source.map(({value,color})=>{
    return {
        value,
         itemStyle: {
      color: setSuperimposedColor(color),
      barBorderRadius: 2
    }
        
    }
    
})


option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data
    }]
};

