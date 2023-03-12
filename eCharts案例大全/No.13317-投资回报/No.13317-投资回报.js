


//app.title = '买房投资与理财投资回报分析';
//等比数列求和
function f_dbqh(_q,_n){
    if(!_q){return _n;}
    return (Math.pow(1+_q,_n)-1)/_q;
}
//等额本息
function f_debx(_a,_q,_n){//_a:本金  _q:年化 _n:年数
    _q=_q/12;_n=_n*12;
    return (_a*_q*Math.pow(1+_q,_n))/(Math.pow(1+_q,_n)-1);
}
var map = ["当年房价","首付及贷款花费","房租年收益","房租总收益","投资年收益","投资总收益"];
var choose = {"房租年收益":false,"房租总收益":false,"投资年收益":false,"投资总收益":false};
var datax=[],
    dataList={};
    map.map(function(e,i){
        dataList[i]=[];
    });

function runData(){
   //参数调整
    var params={
        fj_dz:0.04,     //房价递增率        参考值：中国房价均价10年内涨幅0.04，杭州近1年半年0.3-0.4,
        tz_ll:0.06,     //期望年化收益      参考值：余额宝0.04，金融产品0.05-0.15
        fj:200,         //房价(装修在内)    参考值：杭州150-300，宁波100-200
        sf:0.3,         //首付              参考值：杭州最低0.3
        dk_type:1,      //贷款类型          参考值：1等额本息,2等额本金（未实现）
        dk_ll:0.049*1.1,    //贷款利率等额本息  参考值：公积金0.0325，商贷0.049，杭州上浮1%，为0.0539
        dk_nx:30,       //贷款年限          参考值：最高30
        zj_bl:0.015,     //年租金比例        参考值：商品房0.04，酒店公寓0.08(毛培0.015)
        // zj_dz:0,        //租金递增          参考值：可用0.05，由于房价递增租金比例也自动增加，所以该项填0
        sjall:50,       //总计算年限        参考值：最好30年
    };

    params.nfd=f_debx(params.fj*(1-params.sf),params.dk_ll,params.dk_nx)*12;//每年房贷：每月房贷*12

    params.sy_fz_all=0;
    params.sy_tz_all=0;
    for(var i=0;i<params.sjall;i++){
        var fj_dn = params.fj * Math.pow(1 + params.fj_dz, i);          //当年房价
        params.zc_fd = params.nfd * (i>30?30:i);                        //共支出房贷,30年后不用还
        params.zc_fd_all = params.zc_fd+params.fj*params.sf;            //共支出房贷加首付

        params.sy_fz = fj_dn*params.zj_bl;                              //当年房租：房价*年租金比例
        params.sy_fz_all+=params.sy_fz;

        params.sy_tz=params.zc_fd_all*params.tz_ll;
        params.sy_tz_all+=params.sy_tz;
        // var shouyi = params.sy_fz-params.zc_fd-params.fj*params.sf;    //第n年的购房投资收益：共收益房租-共支出房贷-首付

        datax.push(i);

        dataList[0].push(~~(fj_dn));
        dataList[1].push(~~(params.zc_fd_all));
        dataList[2].push(params.sy_fz.toFixed(1));
        dataList[3].push(~~(params.sy_fz_all));
        dataList[4].push(params.sy_tz.toFixed(1));
        dataList[5].push(~~(params.sy_tz_all));
    }
}
runData();

option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:map,
        selected: choose
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : datax,
            axisLabel: {
                formatter: '第 {value} 年'
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                formatter: '{value} 万'
            }
        }
    ],
    series : map.map(function(e,i){
        return {
            name:map[i],
            type:'line',
            areaStyle: {normal: {}},
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:dataList[i]
        };
    })
};
