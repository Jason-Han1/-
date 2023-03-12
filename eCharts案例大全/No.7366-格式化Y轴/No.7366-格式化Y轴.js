var unit = ['','k','kk', 'kkk']
function getUnit(val){
    var unitSingle = ''
    var value = val
    unit.forEach(i => {
        if(i.length !== 0){
            unitSingle = val / Math.pow(1000,i.length) >= 1 ? i : unitSingle
            value = val / Math.pow(1000,i.length) >= 1 ? val / Math.pow(1000,i.length) : value
            console.log(value)
        }
    })
    value = Math.round(value)
    return {unitSingle,value}
}
option = {
  
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'category',
        data: [1312,311,4231,53123123,1000000,10000000000],
        axisLabel:{
            formatter:(a)=>{
                var b = getUnit(a,a)
                return `${b.value}${b.unitSingle}`;
            }
        }
    },
    series: [{
        data: [['Mon',1,5], ['Tue',2,5],['Wed',3,5],['Thu',4,5],['Fri',5,5]],
        type: 'line'
    }]
};
