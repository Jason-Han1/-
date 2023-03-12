function getVirtulData(year) {
            year = year || '2017';
            var date = +echarts.number.parseDate(year + '-01-01');
            var end = +echarts.number.parseDate(year + '-12-31');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time <= end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),  //日期
                    Math.floor(Math.random() * 1000),   //访问量
                    Math.floor(Math.random()*2),        //0-个人,1-团体
                    Math.floor(Math.random()*3),        //0-无意义,1-VIP团体,2-普通团体
                    Math.floor(Math.random()*2),        //0-校内,1-校外
                    Math.floor(Math.random()*8),        //0-国内,1-校内院系,2-国外,3-中小学幼儿园
                                                        //4-机关事业单位,5-省部级,6-院士专家,7-企业机构
                    Math.floor(Math.random()*9)         //8:00-9:00	9:00-10:00	10:00-11:00	11:00-12:00	12:00-13:00	13:00-14:00	14:00-15:00	15:00-16:00	16:00-17:00

                ]);
                if (Math.random()<0.6){
                    data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),  //日期
                    Math.floor(Math.random() * 1000),   //访问量
                    Math.floor(Math.random()*2),        //0-个人,1-团体
                    Math.floor(Math.random()*3),        //0-无意义,1-VIP团体,2-普通团体
                    Math.floor(Math.random()*2),        //0-校内,1-校外
                    Math.floor(Math.random()*8),        //0-国内,1-校内院系,2-国外,3-中小学幼儿园
                                                        //4-机关事业单位,5-省部级,6-院士专家,7-企业机构
                    Math.floor(Math.random()*9)
                    ]);
                }
                if (Math.random()<0.3){
                    data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),  //日期
                    Math.floor(Math.random() * 1000),   //访问量
                    Math.floor(Math.random()*2),        //0-个人,1-团体
                    Math.floor(Math.random()*3),        //0-无意义,1-VIP团体,2-普通团体
                    Math.floor(Math.random()*2),        //0-校内,1-校外
                    Math.floor(Math.random()*8),        //0-国内,1-校内院系,2-国外,3-中小学幼儿园
                                                        //4-机关事业单位,5-省部级,6-院士专家,7-企业机构
                    Math.floor(Math.random()*9)                                                        
                    ]);
                }
            }
}

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};