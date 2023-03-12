var dom = document.getElementById("chart-panel");
curChart = (echarts.getInstanceByDom(dom))
data = [["职级","6级","5级","4级","3级","2级"],["事业一部",null,2,6,14,3],["事业二部",1,1,7,9,6],["产品控制中心",1,1,7,3,null],["招标采购部",null,null,1,2,null],["财务资本中心",1,2,3,5,6],["计划运营部",null,null,2,2,null],["人力行政部",null,3,2,3,2],["商运运营部",null,null,null,1,null],["客户服务部",null,null,1,null,3],["营销策划部",1,null,3,3,21],["公司",4,9,32,42,41]]
apartName = []
function makeData(){
    var newData ={}
    for (var i =1;i<data.length;i++){
        var curData = data[i]
        var curApart = curData[0]
        newData[curApart] = []
        apartName.push(curApart)
        for (var j =1;j<curData.length;j++){
            var curLevel = curData[j]
            newData[curApart].push({value: curLevel == null ? 0 : curLevel, name: data[0][j]})
            
        }
    }
    return newData
}
newData = makeData()
var curIdx = 0
option = {
    title:{text:"公司",left:"center",textStyle:{
        fontSize:35}},
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}({d}%)"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {},
            myTool1: {
                show: true,
                title: '切换部门',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: function (){
                    option.title.text = apartName[curIdx]
                    option.series[0].data = newData[apartName[curIdx]]
                    console.log(option,apartName[curIdx],newData[apartName[curIdx]],apartName)
                    curChart.setOption(option)
                    curIdx = curIdx < 10 ? curIdx +1 : 0
                    
                }
            }
        }
    },
    series: [
        {
            name:'员工结构',
            type:'funnel',
            left:"center",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '100%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: "none",
            gap: 0,
            label: {
                show: true,
                position: 'inside',
                fontSize:20
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 4, name: '6级'},
                {value: 9, name: '5级'},
                {value: 32, name: '4级'},
                {value: 42, name: '3级'},
                {value: 41, name: '2级'}
            ]
        }
    ]
};
