var datas = {
    	"video_ac": {
		"name": "这是标题",
		"datas": {
			"task": [
			  {
				"data": 0,
				"time": "2020-04"
			}, {
				"data": 0,
				"time": "2020-05"
			}, {
				"data": 0,
				"time": "2020-06"
			}, {
				"data": 124,
				"time": "2020-07"
			}, {
				"data": 367,
				"time": "2020-08"
			}, {
				"data": 265,
				"time": "2020-09"
			}, {
				"data": 220,
				"time": "2020-10"
			}, {
				"data": 153,
				"time": "2020-11"
			}, {
				"data": 19,
				"time": "2020-12"
			}, {
				"data": 0,
				"time": "2021-01"
			}, {
				"data": 0,
				"time": "2021-02"
			}, {
				"data": 0,
				"time": "2021-03"
			}],
			"power": [
			  {
				"data": 0,
				"time": "2020-04"
			}, {
				"data": 0,
				"time": "2020-05"
			}, {
				"data": 0,
				"time": "2020-06"
			}, {
				"data": 7,
				"time": "2020-07"
			}, {
				"data": 8,
				"time": "2020-08"
			}, {
				"data": 3,
				"time": "2020-09"
			}, {
				"data": 4,
				"time": "2020-10"
			}, {
				"data": 5,
				"time": "2020-11"
			}, {
				"data": 6,
				"time": "2020-12"
			}, {
				"data": 0,
				"time": "2021-01"
			}, {
				"data": 0,
				"time": "2021-02"
			}, {
				"data": 0,
				"time": "2021-03"
			}],
			"question": [
			  {
				"data": 0,
				"time": "2020-04"
			}, {
				"data": 0,
				"time": "2020-05"
			}, {
				"data": 0,
				"time": "2020-06"
			}, {
				"data": 55885,
				"time": "2020-07"
			}, {
				"data": 0,
				"time": "2020-08"
			}, {
				"data": 45652,
				"time": "2020-09"
			}, {
				"data": 19072,
				"time": "2020-10"
			}, {
				"data": 2055,
				"time": "2020-11"
			}, {
				"data": 0,
				"time": "2020-12"
			}, {
				"data": 0,
				"time": "2021-01"
			}, {
				"data": 0,
				"time": "2021-02"
			}, {
				"data": 0,
				"time": "2021-03"
			}],
			"history": [
			  {
				"data": 0,
				"time": "2020-04"
			}, {
				"data": 0,
				"time": "2020-05"
			}, {
				"data": 0,
				"time": "2020-06"
			}, {
				"data": 34042,
				"time": "2020-07"
			}, {
				"data": 50502,
				"time": "2020-08"
			}, {
				"data": 34820,
				"time": "2020-09"
			}, {
				"data": 35549,
				"time": "2020-10"
			}, {
				"data": 22608,
				"time": "2020-11"
			}, {
				"data": 2716,
				"time": "2020-12"
			}, {
				"data": 0,
				"time": "2021-01"
			}, {
				"data": 0,
				"time": "2021-02"
			}, {
				"data": 0,
				"time": "2021-03"
			}],
			"rate":[
			  {
				"data": 0,
				"time": "2020-04"
			}, {
				"data": 0,
				"time": "2020-05"
			}, {
				"data": 0,
				"time": "2020-06"
			}, {
				"data": 69,
				"time": "2020-07"
			}, {
				"data": 71,
				"time": "2020-08"
			}, {
				"data": 90,
				"time": "2020-09"
			}, {
				"data": 57,
				"time": "2020-10"
			}, {
				"data": 76,
				"time": "2020-11"
			}, {
				"data": 45,
				"time": "2020-12"
			}, {
				"data": 0,
				"time": "2021-01"
			}, {
				"data": 0,
				"time": "2021-02"
			}, {
				"data": 0,
				"time": "2021-03"
			}]
		}
	},
}
var key_dict={
    task:'task',
    power:'power',
    question:'question',
    batch:"batch",
    data:"data",
    history:'history',
    rate:'rate'
},month_data = ['2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12', '2021-01', '2021-02', '2021-03']

function getYdata(datas,key){
    var data = datas[key]
    var reData = [], yAxisIndex = key == 'rate' ? 1 : 0
    data.forEach(v=>{
        reData.push(v.data)
    })
    return {
        label:{
            normal:{
                show:true      ,
                formatter:key=='rate'?'{c}%':'{c}'
            },
        },
            name: key_dict[key],
            type: 'line',
             yAxisIndex:yAxisIndex,
            // stack: '总量',
            data: reData,
        }
}
var data = datas['video_ac']
var x_datas=[],y_datas = []
Object.keys(data.datas).forEach(v=>{
    x_datas.push(v)
    y_datas.push(getYdata(data.datas,v))
})
console.log(y_datas)
option = {
    title: {
        text: '年度报表 - '+data.name
    },
    tooltip: {
        trigger: 'axis',
        formatter:function(params,ticket,callbacl){
            var html =''
            params.forEach(v=>{
                html+= v.marker+v.seriesName+'：<span style="float:right">'+v.value+(v.seriesName=='准确率'?'%':'')+'</span><br/>'
            })
            return html
        }
    },
    legend: {
        top:'20px'
        // data: 
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: month_data
    },
    yAxis:[ {
        type: 'value'
    },
        {
            "type": "value",
            "name": "准确率 (%)",
            "position": "right",
            axisLabel: {
                show:true,
                formatter: "{value} %",
                color: '#27719F'
            },
            "max": 100,
            "splitLine": {
                "show": false
            },
            "axisTick": {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#27719F',
                }
            },
        }],
    series:y_datas
};