function group(array, subGroupLength) {
    let index = 0;
    let newArray = [];
    while(index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
}
let grouping = 2;
let data=[
    {name:'2010',value:1},
    {name:'2011',value:1},
    {name:'2012',value:1},
    {name:'2013',value:1},
    {name:'2014',value:1},
    {name:'2015',value:1},
    {name:'2016',value:1},
    {name:'2017',value:1},
    {name:'2018',value:1},
    {name:'2019',value:1},
    {name:'2020',value:1},
]
let xData = [];
let sData = [];
let new_data = group(data, grouping);
for (const item_group of new_data) {
    let count = 0;
    let name = '';
    item_group.forEach((item,index) => {
        if(!index){
            name = item.name;
        } else if(index===item_group.length-1) {
            name += ' ~ ' + item.name;
        }
        count += item.value;
    });
    xData.push(item_group[0].name,null);
    sData.push(null,{
        name:name,
        value:count
    });
}
let last_group = new_data[new_data.length-1];
let last_item = last_group[last_group.length-1];
xData.push(last_item.name);

option = {
    color:["#5C7BD9"],
    tooltip:{
       show:true
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisTick: {
            alignWithLabel: true,
            interval:1,
        },
        axisLabel:{
            interval:1,
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: sData,
        type: 'bar',
        barWidth: "200%"
    }]
};