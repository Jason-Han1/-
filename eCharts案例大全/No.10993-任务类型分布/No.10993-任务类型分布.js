var data = {
   // title: '**省',
    dataSex: [{
        name: '男性',
        value: '100.00',
    }, {
        name: '女性',
        value: '200.00',
    }],
    dataAge: [{
        name: '0-10岁',
        value: '200.00'
    }, {
        name: '11-25岁',
        value: '200.00'
    }, {
        name: '26-40岁',
        value: '200.00'
    }, {
        name: '41-55岁',
        value: '200.00'
    }, {
        name: '56-70岁',
        value: '200.00'
    }, {
        name: '70岁以上',
        value: '200.00'
    }]
};
option = {
    backgroundColor: '#031939',
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
   title: {
	        text: '在线表数分口径',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 15,
	        },
	        top: '1%',
	        left: 'center',
	    },

    series: [
        //吉林省用药年龄分布 begin

        {
            name: '用药性别数量',
            color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
            type: 'pie',
            radius: ['30%', '40%'],
            center: ['30%', '40%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -80],
                    height: 70,
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }

                    }
                }
            },
            data: data.dataAge,
        },
        //end
        //吉林省用药性别分布 begin
        {
            //name: '用药性别数量',
            color: ['#76FBC0', '#2AC9FD'],
            type: 'pie',
            radius: ['30%', '40%'],
            center: ['76%', '40%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -90],
                    height: 70,
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }

                    }
                }
            },
            data: data.dataSex,
        },
        //end
        //吉林省用药量机构类别占比 begin
       
      

    ]
};