let datas = [
    { value: 5, name: '大中型病险水库', percent: '5%' },
    { value: 21, name: '中小河流治理工程', percent: '21%' },
    { value: 14, name: '大型水利工程', percent: '14%' },
    { value: 17, name: '其他工程', percent: '17%' },
    { value: 12, name: '新建小型水利工程', percent: '12%' },
    { value: 20, name: '主要支流治理工程', percent: '20%' },
    { value: 11, name: '中型水利工程', percent: '11%' },
];

let colors = ['#DF3AB9', '#18C79C', '#8555F9', '#F09228 ', '#135AEF', '#11A8AB', '#4FC4F6'];
let legendData = [];
for (var j = 0; j < datas.length; j++) {
    // var data = {
    //   name: datas[j].name,
    //   icon: 'circle',
    //   textStyle: {
    //     fontSize: 18,
    //     color: colors[j]
    //   }
    var data = {
        name: datas[j].name,
        icon: 'circle',
        textStyle: {
            fontSize: 18,
            color: colors[j],
        },
    };
    legendData.push(data);
}
let objData = array2obj(datas, 'name');
console.log(objData);
option = {
    legend: {
        orient: 'vertical',
        bottom: '15',
        left: 'center',
        itemGap: 10,
        // data: legendData,
        itemWidth: 20,
        itemHeight: 12,
        textStyle: {
            rich: {
                title: {
                    color: '#888',
                    fontSize: 16,
                    fontWeight: 600,
                    padding: [0, 10, 0, 10],
                    width: 150,
                },
                value: {
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 600,
                    padding: [0, 10, 0, 10],
                },
            },
        },
        formatter(val) {
            let precet = null;
            datas.forEach((item) => {
                if (item.name == val) {
                    precet = item.percent;
                }
            });
            return `{title|${val}}{value|${precet}}`;
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    color: colors,
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '35%'],
            label: {
                fontSize: 18,
                show: false,
            },
            data: datas,
        },
    ],
};
/**
 * @introduction 把数组中key值相同的那一项提取出来，组成一个对象
 * @description 详细描述
 * @param {参数类型} array 传入的数组 [{a:"1",b:"2"},{a:"2",b:"3"}]
 * @param {参数类型} key  属性名 a
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
