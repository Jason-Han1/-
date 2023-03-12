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
drop table cqjd_graph
create table cqjd_graph as 
select a.join_key,a.id,a.hospitalname,a.chargedate,a.bmi_paid,
a.ID||'_'||to_char(a.chargedate,'yyyymmdd') as subkey,to_char(a.chargedate,'yyyymmddHH24') as cday from 
(select join_key,id,hospitalname,chargedate,bmi_paid
from guiyang_claim where bmi_paid>0) a
inner join 
(select distinct join_key from guiyang_claim_detail
where projecttype='1_m' and medtype='2_OS'
and to_date(servicedate)>=to_date('2019-01-01','yyyy/mm/dd')
and to_date(servicedate)<to_date('2019-04-01','yyyy/mm/dd')) b
on a.join_key=b.join_key;

drop table cqjd_graphgroup
create table cqjd_graphgroup as 
select a.*,substr(a.cday,0,8) as cdate from
(select subkey,id,hospitalname,avg(cday) as cday,sum(bmi_paid) as tot_bmi from cqjd_graph
group by subkey,id,hospitalname) a
inner join 
(select id from cqjd_graph
group by id
having count(distinct subkey)>2) b
on a.id=b.id

drop table graph_edge
create table graph_edge as 
select c.ID,c.ID2,c.hospitalname,c.cdate,c.cday1,c.cday2
from(
select a.ID,a.HOSPITALNAME,a.cday as cday1,b.cday as cday2, a.tot_bmi, b.ID as ID2,a.cdate from
cqjd_graphgroup a 
left join
cqjd_graphgroup b 
on a.hospitalname=b.hospitalname and a.cdate=b.cdate) c
where c.id<>c.id2
and (cday1-cday2)<=1
and (cday1-cday2)>=-1

select * from graph_edge 

drop table graph_triset
create table graph_triset as 
select /*+parallel(20)*/ N1,N2,N3,cdate from(
select greatest(a.ID,a.ID2,b.ID2) as N1,least(a.ID,a.ID2,b.ID2) as N2,
a.ID+a.ID2+b.ID2-greatest(a.ID,a.ID2,b.ID2)-least(a.ID,a.ID2,b.ID2) as N3,
a.cdate
from graph_edge a left join graph_edge b
on a.ID=b.ID and a.hospitalname=b.hospitalname and a.cdate=b.cdate
where a.id<>b.id2 and a.id2<>b.id2
and (b.cday2-a.cday1)<=1
and (b.cday2-a.cday2)<=1
and (b.cday2-a.cday1)>=-1
and (b.cday2-a.cday2)>=-1
) group by N1,N2,N3,cdate
