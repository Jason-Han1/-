var uploadedDataURL_so2s = "/asset/get/s/data-1545467145238-e2u2-lmeO.png";
var uploadedDataURL_so2 = "/asset/get/s/data-1545467141616-Eghv5Ytws.png";
var uploadedDataURL_pm10s = "/asset/get/s/data-1545467137737-vJz_yqL9t.png";
var uploadedDataURL_pm10 = "/asset/get/s/data-1545467133351-KLz42zsIF.png";
var uploadedDataURL_pm25s = "/asset/get/s/data-1545467128455-NU5t5ZG9E.png";
var uploadedDataURL_pm25 = "/asset/get/s/data-1545467124583-ORw-ECo5w.png";
var uploadedDataURL_o3s = "/asset/get/s/data-1545467121269-reelpI11u.png";
var uploadedDataURL_o3 = "/asset/get/s/data-1545467115259-Y5aDEbm8u.png";
var uploadedDataURL_no2s = "/asset/get/s/data-1545467110861-reFExi4DX.png";
var uploadedDataURL_no2 = "/asset/get/s/data-1545467105106-yPJ8Zcb4h.png";
var uploadedDataURL_cos = "/asset/get/s/data-1545467101721-021RL2hJL.png";
var uploadedDataURL_co = "/asset/get/s/data-1545467092460-k1AfgVk8S.png";



var legendData = [{
    name: 'PM2.5',
    icon: 'image://'+uploadedDataURL_pm25s
    //icon:'pie'
}, {
    name: 'NO2',
    icon: 'image://'+uploadedDataURL_no2s
}, {
    name: 'O3',
    icon: 'image://'+uploadedDataURL_o3s
}, {
    name: 'SO2',
    icon: 'image://'+uploadedDataURL_so2s
}, {
    name: 'PM10',
    icon: 'image://'+uploadedDataURL_pm10s
}, {
    name: 'CO',
    icon: 'image://'+uploadedDataURL_cos
}];
option = {
    color: ['#D53A35', '#E98F6F', '#6AB0B8', '#334B5C'],
    tooltip: {
        trigger: 'axis',
        //formatter: "{b} <br> 合格率: {c}%"
    },
    legend: [{
        type: 'plain',
        bottom: '18%',
        left: 'center',
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 38,
        //orient:'vertical',
        symbolKeepAspect: false,
        data: [legendData[0], legendData[1], legendData[2]],
        formatter: function(name) {
            if (name == 'NO2') {
                name = name + '  '; //3
            }
            return name;
        },
    }, {
        type: 'plain',
        top: '85%',
        left: 'center',
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 38,
        //orient:'vertical',
        symbolKeepAspect: false,
        data: [legendData[3], legendData[4], legendData[5]],
        formatter: function(name) {
            if (name == 'SO2') {
                name = name + '    '; //4
            }
            return name;
        },
    }],
    grid: {
        //	    	height:'66%',
        top: '6%',
        bottom: '30%',
        left: '4%',
        right: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        //name: '日期',
        boundaryGap: false,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#AAA'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#AAAAAA'
        },
        data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7']
    },
    yAxis: {
        name: '',
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#AAA'
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#AAA'
            }
        }
    },
    series: [{
            name: 'PM2.5',
            type: 'line',
            stack: '总量',
            //smooth:true,
            data: [120, 132, 101, 134, 90, 230, 210]
            //data:factorJson.PM2_5Arr
        },
        {
            name: 'NO2',
            type: 'line',
            stack: '总量',
            //smooth:true,
            data: [220, 182, 191, 234, 290, 330, 310]
            //data:factorJson.NO2Arr
        },
        {
            name: 'O3',
            type: 'line',
            //smooth:true,
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
            //data:factorJson.O3Arr
        },
        {
            name: 'SO2',
            type: 'line',
            //smooth:true,
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320],
            //data:factorJson.SO2Arr
        },
        {
            name: 'PM10',
            type: 'line',
            //smooth:true,
            stack: '总量',
            data: [120, 302, 311, 324, 380, 320, 360]
            //data:factorJson.PM10Arr
        },
        {
            name: 'CO',
            type: 'line',
            //smooth:true,
            stack: '总量',
            data: [310, 352, 101, 234, 370, 310, 350]
            //data:factorJson.COArr
        },
    ]
};

	myChart.on('legendselectchanged', function (params) {
      let selected = params.selected;
      let name = params.name;
      switch(name){
      	case 'PM2.5':{
      		if(selected['PM2.5']){
				option.legend[0].data[0].icon='image://'+uploadedDataURL_pm25s;
			}else{
				option.legend[0].data[0].icon='image://'+uploadedDataURL_pm25;
			}
      	}break;
      	case 'NO2':{
      		if(selected['NO2']){
				option.legend[0].data[1].icon='image://'+uploadedDataURL_no2s;
			}else{
				option.legend[0].data[1].icon='image://'+uploadedDataURL_no2;
			}
      	}break;
      	case 'O3':{
      		if(selected['O3']){
				option.legend[0].data[2].icon='image://'+uploadedDataURL_o3s;
				//option.legend.selected['NO2']=true;
			}else{
				option.legend[0].data[2].icon='image://'+uploadedDataURL_o3;
			}
      	}break;
      	case 'SO2':{
      		if(selected['SO2']){
				option.legend[1].data[0].icon='image://'+uploadedDataURL_so2s;
			}else{
				option.legend[1].data[0].icon='image://'+uploadedDataURL_so2s;
			}
      	}break;
      	case 'PM10':{
      		if(selected['PM10']){
				option.legend[1].data[1].icon='image://'+uploadedDataURL_pm10s;
			}else{
				option.legend[1].data[1].icon='image://'+uploadedDataURL_pm10;
			}
      	}break;
      	case 'CO':{
      		if(selected['CO']){
				option.legend[1].data[2].icon='image://'+uploadedDataURL_cos;
			}else{
				option.legend[1].data[2].icon='image://'+uploadedDataURL_co;
			}
      	}break;
	      }
	      //局部刷新（init）
	      myChart.setOption({
	      //legend:{data:legendData}
			legend:[
				{data:[legendData[0],legendData[1],legendData[2]]},
				{data:[legendData[3],legendData[4],legendData[5]]}
			]
	      })
	      //整体刷新
	      //myChart.setOption(option);
	})