// 绘制类型配置
var t = 0
var icon = "path://M675.711586 848.029728l-186.277248-105.922357c-29.21996-18.262475-51.134931-3.652495-51.134931 29.219961v98.617366H146.099802c-51.134931 0-91.312376-40.177446-91.312376-91.312376V263.630519c0-51.134931 40.177446-91.312376 91.312376-91.312377h175.319763V121.183212H146.099802C69.397406 121.183212 3.652495 183.275627 3.652495 263.630519v515.001803c0 76.702396 65.744911 142.447307 142.447307 142.447307h295.8521V986.82454c0 32.872456 21.91497 47.482436 51.134931 29.219961l160.709782-94.964872h7.30499V913.774639l18.262476-10.957485c25.567465-14.60998 25.567465-40.177446-3.652495-54.787426M1070.181052 121.183212h-255.674654V37.175825c0-32.872456-21.91497-47.482436-51.134931-29.21996l-186.277248 105.922356c-29.21996 18.262475-29.21996 43.829941 0 58.439921l186.277248 109.574852c29.21996 18.262475 51.134931 3.652495 51.134931-29.21996V168.665647h255.674654c51.134931 0 91.312376 40.177446 91.312376 91.312377v515.001803c0 51.134931-40.177446 91.312376-91.312376 91.312376h-135.142317v51.134931h135.142317c76.702396 0 142.447307-62.092416 142.447307-142.447307V256.325529c0-73.049901-62.092416-135.142317-142.447307-135.142317"


var dataset = {
  dimensions: ["日期", "访问用户"],
	source: [
		{ 日期: "1月1日", 访问用户: 1523 },
		{ 日期: "1月2日", 访问用户: 1223 },
		{ 日期: "1月3日", 访问用户: 2123 },
		{ 日期: "1月4日", 访问用户: 4123 },
		{ 日期: "1月5日", 访问用户: 3123 },
		{ 日期: "1月6日", 访问用户: 7123 }
	]
}

var series = [
  {
    // name: '面积模式',
    type: 'pie',
    radius: ['10%', '50%'],
    center: ['50%', '50%'],
    roseType: 'area', // radius  area
    itemStyle: {
      borderRadius: 8
    }
  }
  
]

option = {
		// title: {
		// 		text: 'Tree Chart'
		// },
    toolbox: {
        show: true,
        feature: {
            myTool:{ //自定义方法 配置   我这是为了实现 饼图切换为柱状图
                show : true,
                title : '切换类型',
                icon : icon,
                onclick : function (){
                    t++
                    if(t%2){
                        series = [{
                            type: 'pie',
                            radius: ['60%', '80%'],
                            avoidLabelOverlap: false,
                            label: {
                               show: false,
                               position: 'center'
                            },
                            emphasis: {
                    		    label: {
                        			show: true,
                        			fontSize: '30',
                        			fontWeight: 'bold'
                        		}
                    	    },
                        	labelLine: {
                        		show: false
                        	}
                        }]
                    }else{
                        series = [{
                            // name: '面积模式',
                            type: 'pie',
                            radius: ['10%', '50%'],
                            center: ['50%', '50%'],
                            roseType: 'area', // radius  area
                            itemStyle: {
                              borderRadius: 8
                            }
                        }]
                    }
                   
                   option.series = series
                   myChart.setOption(option, true)
                }
            },
        },
        left: 20,
        top: 20,
    },
    tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b} : {c} ({d}%)'
        formatter: function(params){
          console.log(params)
          return params.name
			+ `<br />${params.marker}` 
			+ params.dimensionNames[params.encode.value[0]] + ': '
			+ params.value[params.dimensionNames[params.encode.value[0]]] 
			+ ' ( ' + params.percent+'% )'
        }
    },
    legend: {
	    top: 10
    },
    dataset: dataset,
    series: series
};