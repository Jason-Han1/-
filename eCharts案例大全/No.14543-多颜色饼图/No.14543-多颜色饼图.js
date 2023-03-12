var dataName = ['学校管理', '旅馆管理', '危爆管理', '物流寄递业', '精神病人管理', '娱乐场所', '保安监管', '油气管理', '重点人员管理'];

var dataName2 = ['学校管e理', '旅馆管e理', '危爆e管理', '物流寄e递业', '精神病e人管理', '娱乐场e所', '保安监e管', '油e气管理', '重点人员e管理'];
var value = [12, 10, 5, 7, 8, 8, 12, 20, 18]
var dataarr = []
var max = value[0];
var dataarr2 = []
value.forEach(function(ele,index){
	if(ele>max) {
		max = ele;
	}
	dataarr.push({
		value:ele,
		name:dataName[index]
	})
	dataarr2.push({
		value:ele,
		name:dataName2[index]
	})
})


option = {
    backgroundColor: '#424956',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {

        orient: 'vertical',
        x: 'right',
        y:'middle',
        itemWidth: 24,
        itemGap:15,
        itemHeight: 14,
        align: 'left',

        data: dataName,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['30%', '55%'],
        color: [
            '#2CEDED',
            '#7049F0',
            '#B347FF',
            '#E70E65',
            '#FF714A',
            '#F6B768',
            '#B0DF5D',
            '#FC7DBC',
            '#0A9FFD'
        ],
        label: {
            normal: {
                formatter: '{b}\n{d}%',
                fontSize: 16
            },

        },
        labelLine: {
            normal: {
                show: true,
                length: 10,
                length2: 74
            }
        },
        data: dataarr
    },{
        name: '访问来源',
        type: 'pie',
        radius: ['30%', '65%'],
        color: [
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'rgba(252,125,188,0.5)',
            'transparent'
        ],
        label: {
            normal: {
                show: false
            },

        },
        labelLine: {
            normal: {
                show: false,
            }
        },
        data: dataarr2,
        zlevel:2
    }]
};