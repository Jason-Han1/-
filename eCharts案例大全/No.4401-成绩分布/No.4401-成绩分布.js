var getname = [
    '省部级高级次人才',
    '国家级高层次人才'
];
var getvalue = [100,100];
var fontColor = ['rgba(38, 215, 160, 1)','rgba(0, 138, 255, 1)']
var data = [];

var colorList = [
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                offset:0,
                color:'#26D7A0'
            },{
                offset:1,
                color:'#21B088'
            }
        ]
    },
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                offset:0,
                color:'#008AFF'
            },{
                offset:1,
                color:'#21F7FF'
            }
        ]
    }
]

for (var i = 0; i < getname.length; i++) {
    data.push({
        name: getname[i],
        value: getvalue[i],
        label:{
            color:colorList[i]
        },
        itemStyle:{
            normal:{
                color:colorList[i]
            }
        }
    })
}


option = {
    backgroundColor:'#000831',
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>{c}次",
    },
    series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        center: ["center", "center"],
        itemStyle: {
            normal: {
                borderWidth:3,
                borderColor:'#000831'
            }
        },
        label: {
            show: true,
            // position: 'outside',
            formatter: (item,index)=>{
                let newName = item['data']['name'];
                let i = 0;
                let newStr = ''
                while(newName.length > 8){
                    newStr += `{name|${newName.substring(i*7,(i+1)*7)}}\n`;
                    newName = newName.substring((i+1)*7);
                    if(newName.length > 7){
                        i++;
                    }else{
                        break;
                    }
                }
                newStr+=`{name|${newName}}\n`
                console.log(item,item.dataIndex)
                return `${newStr}{percent${item['dataIndex']}|${item['percent']}%}`
            },
            fontFamily: 'MicrosoftYaHei',
            fontSize: 15,
            align: 'center',
            verticalAlign: 'left',
            rich:{
                name:{
                    color:'rgba(202, 231, 255, 1)',
                    fontSize:12,
                    padding:[0,0,5,0],
                    width:40
                },
                percent0:{
                    fontSize:12,
                    color:fontColor[0]
                },
                percent1:{
                    fontSize:12,
                    color:fontColor[1]
                }
            }
        },
        labelLine: {
            show: 'true',
            length: 20,
            length2: 20,
            lineStyle: {
                color: 'rgba(49, 194, 255, 1)'
            }
        }
        ,
        data: data,
        avoidLabelOverlap: true,
        stillShowZeroSum: false,
    }]
};
myChart.setOption(option);