var set1 = [
  ['属性', '指标提及率', '指标满意度'],
  ['属性1', 5.9, 0.67],
  ['属性2', 3.58, 0.59],
  ['属性3', 4.97, 0.92],
  ['属性4', 4.11, 0.02],
  ['属性5', 4.93, 0.97],
  ['属性6', 4.5, 0.24],
  ['属性7', 3.75, 0.85],
  ['属性8', 3.86, 0.57],
  ['属性9', 4.9, 0.42],
  ['属性10', 4.25, 0.68],
  ['属性11', 3.79, 0.48],
  ['属性12', 6.76, 0.37],
  ['属性13', 5.22, 0.91],
  ['属性14', 4.68, 0.46],
  ['属性15', 6.61, 0.19],
  ['属性16', 3.58, 0.82],
  ['属性17', 6.69, 0.7],
  ['属性18', 6.19, 0.36],
  ['属性19', 7.04, 0.52],
  ['属性20', 4.68, 0.71]
];

option = {
    // backgroundColor:'#fff',
    grid:[{left:40, right:56, top:32, bottom:32}],
    dataset: {
        source:set1
    },
    tooltip:{
        show:true
    },
    xAxis: {
        type:'value',
        name: '指标\n提及率',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale:true,
    },
    yAxis: {
        type:'value',
        name:'指标满意度',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        type: 'scatter',
        encode:{
            x:[1],
            y:[2]
        },
    }]
};


myChart.resize({
    width: 536,
    height: 320
})