(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{20:function(e,a,t){e.exports=t(45)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(12),i=t.n(r),c=t(2),m=t.n(c),o=t(13),l=t(14),v=t(15),u=t(18),d=t(16),p=t(19),g=t(17),E=t.n(g);t(43);var f=function(e){var a=e.year,t=e.title,n=e.summary,r=e.poster,i=e.genres,c=e.ratings;return s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:r,alt:t,title:t}),s.a.createElement("div",{className:"movie_data"},s.a.createElement("div",{className:"movie_info"},s.a.createElement("div",{className:"movie_left"},s.a.createElement("h3",{className:"movie_title"},t),s.a.createElement("h5",{className:"movie_year"},a),s.a.createElement("ul",{className:"genres"},i.map((function(e,a){return s.a.createElement("li",{key:a,className:"genres_genre"},e)})))),s.a.createElement("h4",{className:"ratings"},c)),s.a.createElement("h5",{className:"moviev_summary"},n.slice(0,140),"...")))},y=(t(44),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},t.getMoives=Object(o.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=e.sent,n=a.data.data.movies,t.setState({movies:n,isLoading:!1}),console.log(n);case 6:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMoives()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return s.a.createElement("section",{className:"container"},a?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader_text"},"Loading...")):s.a.createElement("div",{className:"movies"},t.map((function(e){return s.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,ratings:e.rating})}))))}}]),a}(s.a.Component));i.a.render(s.a.createElement(y,null),document.getElementById("tomato"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a9f586ea.chunk.js.map