let dataInfo = [{
    "type": "AB",
    "value": 0
}, {
    "type": "AC",
    "value": 0
}, {
    "type": "AV",
    "value": 0
}, {
    "type": "DE",
    "value": 0
}, {
    "type": "DV",
    "value": 0
}, {
    "type": "FG",
    "value": 0
}, {
    "type": "GV",
    "value": 0
}, {
    "type": "PX",
    "value": 0
}, {
    "type": "TE",
    "value": 0
}, {
    "type": "ZZ",
    "value": 0
}];
let legendArr = [];
let seriesData = [];
//处理所需数据
for(let i=0; i<dataInfo.length; i++){
  if(dataInfo[i].type === 'AB'){
    seriesData.push({
      name: 'B区',
      value: dataInfo[i].value
    })
    legendArr.push('B区')
  }else if(dataInfo[i].type === 'AC'){
    seriesData.push({
      name: 'C区',
      value: dataInfo[i].value
    })
    legendArr.push('C区')
  }else if(dataInfo[i].type === 'DE'){
    seriesData.push({
      name: 'DE区',
      value: dataInfo[i].value
    })
    legendArr.push('DE区')
  }else if(dataInfo[i].type === 'FG'){
    seriesData.push({
      name: 'FG区',
      value: dataInfo[i].value
    })
    legendArr.push('FG区')
  }
}
let colorArr = ['#fbf321','#fff','#24feb4','#23539b'];
    // console.log(legendArr)
    // console.log(seriesData)
option = {
    backgroundColor: '#19193b',
    color: colorArr,
    legend: {
    icon: 'rect',
    bottom:'5%',
    left:'center',
    itemWidth:14,
    itemHeight:14,
    data: legendArr,
    textStyle: {
      color: "#fff",
      fontSize: 14,
    },
    selectedMode: false
    },
    grid: {
    width: '95%',
    left: '3%',
    top: '1%',
    },
    series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '65%'],
      center:['45%','40%'],
      avoidLabelOverlap: false,
      selectedOffset: '35',
      legendHoverLink: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          color: '#fff',
          fontSize: 20,
          formatter: `{b}\n\n{d}%`
        },
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: seriesData,
    }
    ],
};