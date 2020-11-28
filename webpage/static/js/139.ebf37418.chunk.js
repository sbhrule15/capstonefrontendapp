(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[139],{1324:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(12),c=t(178),s=t(2),r=t(91),l=t.n(r),m=t(0),o=t.n(m);function u(e){var a=e.onComplete,t=Object(m.useState)(l.a.isMoment(e.endDate)?e.endDate:l()(e.endDate)),r=Object(n.a)(t,1)[0],u=Object(m.useState)({days:0,hours:0,minutes:0,seconds:0}),i=Object(n.a)(u,2),d=i[0],f=i[1],v=Object(m.useRef)(),E=Object(m.useCallback)((function(){window.clearInterval(v.current),a&&a()}),[a]),p=Object(m.useCallback)((function(){var e=l()(),a=r.diff(e,"seconds");if(a<0)E();else{var t=l.a.duration(a,"seconds");f({days:t.asDays().toFixed(0),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds()})}}),[E,r]);return Object(m.useEffect)((function(){return v.current=setInterval(p,1e3),function(){clearInterval(v.current)}}),[p]),o.a.createElement("div",{className:Object(s.default)("flex items-center",e.className)},o.a.createElement("div",{className:"flex flex-col items-center justify-center px-12"},o.a.createElement(c.a,{variant:"h4",className:"mb-4"},d.days),o.a.createElement(c.a,{variant:"caption",color:"textSecondary"},"days")),o.a.createElement("div",{className:"flex flex-col items-center justify-center px-12"},o.a.createElement(c.a,{variant:"h4",className:"mb-4"},d.hours),o.a.createElement(c.a,{variant:"caption",color:"textSecondary"},"hours")),o.a.createElement("div",{className:"flex flex-col items-center justify-center px-12"},o.a.createElement(c.a,{variant:"h4",className:"mb-4"},d.minutes),o.a.createElement(c.a,{variant:"caption",color:"textSecondary"},"minutes")),o.a.createElement("div",{className:"flex flex-col items-center justify-center px-12"},o.a.createElement(c.a,{variant:"h4",className:"mb-4"},d.seconds),o.a.createElement(c.a,{variant:"caption",color:"textSecondary"},"seconds")))}u.defaultProps={endDate:l()().add(15,"days")};var i=o.a.memo(u)},2472:function(e,a,t){"use strict";t.r(a);var n=t(1324),c=t(107),s=t(178),r=t(0),l=t.n(r),m=t(23);a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{variant:"h4",className:"mb-24"},"FuseCountdown"),l.a.createElement(s.a,{className:"mb-16",component:"p"},l.a.createElement("code",null,"FuseCountdown")," is a custom-built Fuse component that allows you to create countdowns."),l.a.createElement(s.a,{className:"mt-32 mb-8",variant:"h5"},"Usage"),l.a.createElement(c.a,{component:"pre",className:"language-jsx"},'\n                              <FuseCountdown endDate="2020-07-28" className="my-48"/>\n                            '),l.a.createElement(s.a,{className:"mt-32 mb-8",variant:"h5"},"Preview"),l.a.createElement(n.a,{endDate:"2020-07-28",className:"my-48"}),l.a.createElement(s.a,{className:"mt-32 mb-8",variant:"h5"},"Demos"),l.a.createElement("ul",null,l.a.createElement("li",{className:"mb-8"},l.a.createElement(m.a,{to:"/pages/coming-soon"},"Coming Soon"))))}}}]);