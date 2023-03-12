let yData = ['总数', 'EI', 'SCI', 'CSCD', '北大中文核心期刊', 'CSSCI', '其他期刊']
let xData = [3050,1200,300,200,900,300,150]
let color = ['#EA6D6C','#FE9379','#FFCC85','#02DEF9','#849EF2','#25CF9A','#499FF9']

let seriesData = xData.map((item,index)=>{
    let a = new Array(xData.length).fill('');
    a[index] = xData[index]
    return {
        type:'bar',
        barGap:'-100%',
        name:yData[index],
        barWidth:18,
        data:a,
        itemStyle:{
            color: color[index]
        }
    }
})
console.log(seriesData)
option = {
    legend:{
        icon:'circle'
    },
    xAxis: {
        position:'top',
        axisLine:{
            show:true,
            lineStyle:{
                color:'#31C2FF'
            }
        },
        axisLabel:{
            color:'#CAEEFF'
        },
        splitLine:{
            show:false
        }
    },
    yAxis: {
        type:'category',
        data: yData,
        axisTick:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:'#31C2FF'
            }
        },
        axisLabel:{
            color:'#CAEEFF',
            formatter: name=>{
                let len = name.length;
                let time = Math.ceil(len / 5);
                let newStr = ''
                for(let i = 0 ; i < time ; i++){
                    newStr+= name.substring(i*5,(i+1) * 5 )
                    newStr+= '\n'
                }
                console.log('1',name)
                console.log('2',time)
                console.log('3',newStr)
                return newStr
            }
        }
    },
    series: seriesData
};
