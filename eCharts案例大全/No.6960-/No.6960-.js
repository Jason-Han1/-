var data = [
  { x: "告警", y: 40 },
  { x: "紧急", y: 20 },
  { x: "错误", y: 30 },
  { x: "恢复", y: 160 }
]

var color = ["#e75f6a", '#ffc000', '#3fb4ff', '#3fffdd']
var x = []
var imgList = []
var maxY = Math.max(...data.map(d => d.y))

data = data.map((item, index) => {
  let yL = 0.2
  x.push(item.x)
  imgList.push({
      coord: [index, item.y],
      symbolOffset: ['0%', "0%"],
      symbolSize: [89, 30],
      symbol: 'circle',
      itemStyle: {
          color: color[index],
          opacity: 1
      }
  }, {
    	name: item.x,
    	value: item.x,
  		coord: [index, item.y],
      symbolOffset: ['50%', "-50%"],
      symbolSize: [89, 30],
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAA7CAYAAACT8x/FAAABaElEQVR4nO3dyU0EMRRF0dcloiEiBMFAOhAQ2aBm0yWVWj3U4OH973slr+vbR966TufzWcn7lPQVfYuTwQw1S4Gk5FAz0p+kN0mnyCsr1BLpQ9K3wUyHygiVDkkJoVIiKRlUWiQlgkqNpCRQ6ZGUAGoIJAWHGgZJgaGGQlJQqOGQFBBqSCQFgxoWSYGghkZSEKjhkRQACqRLzlAgLXKFAukqRyiQbuQGBdKdnKBAepALFEhPcoACaUUvnb+/RHqX9NN5Htt63iiQNtQLCqSN9YACaUetoUDaWUsokA7UCgqkg7WAAqlAtaFAKlRNKJAKVgsKpMLVgAKpQqWhQKpUSSiQKlYKCqTKlYACqUFHoUBq1BEokBq2Fwqkxu2BAqlDW6FA6tQWKJA6thYKpM6tgQLJoGdQIJn0CAoko+5BgWTWLSiQDLuGAsm0JRRIxs1QIJk3gRSj6fLENEjmzX8SeJX0O/ph2CbpH7Ahr/VGFdhiAAAAAElFTkSuQmCC',
    	label: {
      	show: true,
        fontSize: 42,
        color: "#fff",
        fontFamily: "PingFang",
        position: ['110%', "-50%"],
        
      }
  },/*{
  		coord: [index, 0],
      symbolOffset: ['0%', "0%"],
      symbolSize: [89, 30],
      symbol: 'circle',
      itemStyle: {
          color: {
            type: "radial",
            x: -0.5,
            y: yL,
            r: 2.8,
            colorStops: [
              {offset: 0, color: color[index]},
              {offset: 1, color: "rgba(0,0,0,0)"},
            ],
            global: false // 缺省为 false
          },
          opacity: 0.4
      }
  }*/)
  if (item.y < maxY / 3) {
  	yL = -0.9
  } else if (item.y < maxY / 2) {
  	yL = -0.9
  } else if (item.y < maxY / 1.7) {
  	yL = -0.3
  }
	return {
  	name: item.x,
    value: item.y,
    itemStyle: {
    	color: {
        type: "radial",
      	x: -0.5,
        y: yL,
        r: 2.8,
        colorStops: [
          {offset: 0, color: color[index]},
          {offset: 0.8, color: "rgba(0,0,0,0)"},
        ],
        global: false // 缺省为 false
      },
      opacity: 1
    }
  }
})

var option = {
  grid: {
  	bottom: 100
  },
	"yAxis": {
    "axisLabel": {
      show: false,
      "margin": 10,
      "textStyle": {
        "fontFamily": "微软雅黑",
        "color": "#D5CBE8",
        "fontSize": 35,
        "fontWeight": "normal"
      }
    },
    "setMin": false,
    "axisLine": {
      "lineStyle": {
        "color": "#D5CBE8"
      },
      "show": false
    },
    "name": "",
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#57617B",
        "type": "solid"
      },
      "show": false
    },
    "nameGap": 30,
    "type": "value",
    "calibration": 5,
    "nameTextStyle": {
      "fontFamily": "微软雅黑",
      "color": "#D5CBE8",
      "fontSize": 20,
      "align": "left",
      "fontWeight": "normal"
    }
  },
  "xAxis": {
    "axisLabel": {
      "margin": 30,
      "textStyle": {
        "fontFamily": "微软雅黑",
        "color": "#D5CBE8",
        "fontSize": 42,
        "fontWeight": "normal"
      }
    },
    "axisLine": {
      "lineStyle": {
        "color": "#D5CBE8"
      },
      "show": false
    },
    "name": "",
    axisTick: {
      show: false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#57617B",
        "type": "solid"
      },
      "show": false
    },
    "nameGap": 5,
    // "boundaryGap": false,
    "type": "category",
    "nameTextStyle": {
      "fontFamily": "微软雅黑",
      "color": "#D5CBE8",
      "fontSize": 20,
      "fontWeight": "normal"
    },
    data: x
  },
  series: [
    {
    	"type": "bar",
      "name": "all",
      "hoverAnimation": true,
      barWidth: 89,
      // "symbolSize": 100,
      "label": {
        "show": true,
        "position": "top",
        "offset": [140, -50],
        "fontSize": 42,
        "color": "#fff",
        "fontFamily": "PingFang",
        "fontWeight": "normal"
      },
      // "symbolMargin": 100,
      data: data, //circle
      markPoint: {
          animation: false,
          data: imgList
      },
    }
  ]
}
