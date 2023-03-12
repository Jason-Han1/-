let data = [
    { name: '刑侦大队1',
    type1: 10, type2: 10,type3: 10,type4: 10,type5: 10,type6: 10,type7: 10 },
    { name: '刑侦大队2',
    type1: 10, type2: 10,type3: 10,type4: 10,type5: 10,type6: 10,type7: 10 },
    { name: '刑侦大队3',
    type1: 10, type2: 10,type3: 10,type4: 10,type5: 10,type6: 10,type7: 10 },
    { name: '刑侦大队4',
    type1: 10, type2: 10,type3: 10,type4: 10,type5: 10,type6: 10,type7: 10 },
    { name: '刑侦大队5',
    type1: 10, type2: 10,type3: 10,type4: 10,type5: 10,type6: 10,type7: 10 }
    ]
let typeList = ['涉毒', '涉恐', '涉稳', '前科', '在逃', '上访', '精神病']
let Ydata = [], seriesData = []
let type = [[],[],[],[],[],[],[]]
let type1=[],type2=[],type3=[],type4=[],type5=[],type6=[],type7=[]
data.forEach(item => {
   Ydata.push(item.name) 
   type[0].push(item.type1)
    type[1].push(item.type2)
    type[2].push(item.type3)
    type[3].push(item.type4)
    type[4].push(item.type5)
    type[5].push(item.type6)
    type[6].push(item.type7)
})
console.log(type)
for(let i =0; i < 7; i++) {
    seriesData.push(
        {
            name: typeList[i],
            type: 'bar',
            stack: 'Tik Tok',
            barWidth: 25,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    shadowColor: '#fff',
                    shadowBlur: 1,
                    shadowOffsetY: 1,
                    shadowOffsetX: 0,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 14,
                        fontWeight: '400',
                        color:'#fff'
                    }
                },
            },
            data: type[i]
        }
    )
}


option = {
    backgroundColor: '#082951',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'rgba(0, 255, 233,0)',
            },
        },
    },
    grid: {
        left: 20,
        right: 40,
        bottom: 10,
        top: 10,
        containLabel: true
    },
    color: ['#FC9B4A', '#DDBC51', '#54BEEF', '#1EBD61', '#4D83FF', '#FB82FF', '#E9491D'],
    xAxis: {
        show: false,
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#0C3358'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 16,
            color: '#fff'
        },
        data: Ydata
    },
    series: seriesData
    
};