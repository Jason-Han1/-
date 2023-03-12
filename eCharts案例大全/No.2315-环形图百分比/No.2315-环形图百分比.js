

const baseDeg = 12.5

const innerSeriesName = '内环名称'
const outerSeriesName = '外环名称'

// 数据源
const val1 = 99.5
const val2 = 78.16

// 外环颜色
const outColors = [
    '#82f5fd','#7ef2fd',"#79eefd","#69dffe","#53cbfe","#3db7fe","#28a4ff","#1a97ff","#1a97ff"
]
// 外环颜色
const innerColors = [
    '#82b8fd','#7db1fd',"#77a9fd","#6d9afd","#5173fe","#405afe","#293bff","#1b27ff","#1722ff"
]

function getData(val,colors){
    const blockNum = val/baseDeg
    const len = Math.ceil(blockNum)
    const finalValue = val%baseDeg
    
    const persentData = Array.from(new Array(len),function(item,index){
        return {
            name: '人数',
            value:  finalValue && len-index === 1 ? finalValue : baseDeg,
            label: {
                normal: {
                    fontSize: 18,
                    color: '#fff',
                    fontWeight: 'bolder'
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    color: {
                        type: 'linear',
                        colorStops: [
                            // !! 在此添加想要的渐变过程色 !!
                            {offset: 0, color: colors[index+1] },
                            {offset: 1, color: colors[index] },
                        ]
                    },
                }
            }
        }
    })
    
    const residueBlock = 8 - blockNum
    const residueLen = Math.ceil(residueBlock)
    const residueValue = finalValue ? baseDeg - finalValue : 0
    
    const residueData = Array.from(new Array(residueLen),function(item,index){
        return {
            name: '总数',
            value: residueValue && index === 0 ? residueValue : baseDeg,
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
                color: '#f3f3f3'
            }
        }
    })
    
    return persentData.concat(residueData)
}




var option = {
    title:[
        {
            text:'全人群接种率',
            textAlign:'center',
            left:'50%',
            bottom:81,
            textStyle:{
                color:'#666',
                fontSize:16,
                fontWeight:'normal',
            }
        },
        {
            text:`${innerSeriesName}：{c|${val2}%}`,
            textAlign:'center',
            left:'50%',
            bottom:50,
            textStyle:{
                color:'#3c44bb',
                fontSize:16,
                fontWeight:'normal',
                rich:{
                    c:{
                        fontSize:16,
                        fontWeight:'bolder'
                    }
                }
            }
        },
        {
            text:`${outerSeriesName}：{c|${val1}%}`,
            textAlign:'center',
            left:'50%',
            bottom:32,
            textStyle:{
                color:'#08a9f0',
                fontSize:16,
                fontWeight:'normal',
                rich:{
                    c:{
                        fontSize:16,
                        fontWeight:'bolder'
                    }
                }
            }
        },
    ],
    legend: {
        show:false,
     },
    series: [
        {
            name: outerSeriesName,
            type: 'pie',
            hoverAnimation:false,
            radius: ['40%', '63%'],                 // 圆环内径外径
            center:['50%','40%'],
            avoidLabelOverlap: false,
            label: {
                show:false
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: getData(val1,outColors)
        },
        {
            name: innerSeriesName,
            hoverAnimation:false,
            type: 'pie',
            radius: ['25%', '40%'],                 // 圆环内径外径
            center:['50%','40%'],
            avoidLabelOverlap: false,
            label: {
                show:false
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: getData(val2,innerColors)
        },
    ]
};