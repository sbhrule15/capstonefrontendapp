(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[104],{1175:function(e,t,n){"use strict";n.d(t,"e",(function(){return x})),n.d(t,"l",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return b})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return j})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return S})),n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return E})),n.d(t,"i",(function(){return A}));var r,s=n(23),a=n(22),c=n.n(a),i=n(42),o=n(19),u=n(37),d=n(181),l=n(41),p=n.n(l),x=Object(o.b)("exerciseApp/session/getSession",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/session/active/one",{params:t});case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",[r]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(o.b)("exerciseApp/session/createSession",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/exercise/session",{session:t});case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(o.b)("exerciseApp/session/updateSession",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.prev=1,e.next=4,p.a.post("/api/session/update",{session:t});case 4:return s=e.sent,e.next=7,s.data;case 7:e.sent,r(Object(u.c)({message:"Session Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r(Object(u.c)({message:"There was an error",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(o.b)("exerciseApp/session/completeSession",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,console.log("Session In Complete Session",t),e.next=4,p.a.post("/api/session/complete",{session:t}).then((function(e){r(Object(u.c)({message:"Session Completed",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),d.a.push({pathname:"/apps/dashboards/home"})})).catch((function(e){return r(Object(u.c)({message:e.response.data,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),null}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(o.b)("exerciseApp/session/removeSession",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/session/remove",t);case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,d.a.push({pathname:"/apps/dashboards/home"}),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(o.c)({selectId:function(e){return e._id}}),w=g.getSelectors((function(e){return e.exerciseApp.session})),v=w.selectAll,k=(w.selectById,w.selectEntities,Object(o.d)({name:"exerciseApp/session",initialState:g.getInitialState({selectedExerciseIndex:0,selectedSetIndex:0}),reducers:{resetSession:function(e,t){({})},setSelectedExerciseIndex:function(e,t){e.selectedExerciseIndex=t.payload},setSelectedSetIndex:function(e,t){e.selectedSetIndex=t.payload},setExerciseCompleted:function(e,t){e.entities[e.ids[0]].exercises[e.selectedExerciseIndex].sets[e.selectedSetIndex].complete=t.payload},changeWeight:function(e,t){e.entities[e.ids[0]].exercises[e.selectedExerciseIndex].sets[e.selectedSetIndex].weight=t.payload,e.entities[e.ids[0]].exercises[e.selectedExerciseIndex].sets[e.selectedSetIndex].volume=e.entities[e.ids[0]].exercises[e.selectedExerciseIndex].sets[e.selectedSetIndex].reps*e.entities[e.ids[0]].exercises[e.selectedExerciseIndex].sets[e.selectedSetIndex].weight},changeReps:function(e,t){e.entities[e.ids[0]].exercises[e.selectedExerciseIndex].sets[e.selectedSetIndex].reps=t.payload,e.entities[e.ids[0]].exercises[e.selectedExerciseIndex].sets[e.selectedSetIndex].volume=e.entities[e.ids[0]].exercises[e.selectedExerciseIndex].sets[e.selectedSetIndex].reps*e.entities[e.ids[0]].exercises[e.selectedExerciseIndex].sets[e.selectedSetIndex].weight}},extraReducers:(r={},Object(s.a)(r,x.fulfilled,g.setAll),Object(s.a)(r,f.fulfilled,(function(e,t){return g.setAll})),Object(s.a)(r,b.fulfilled,g.removeOne),r)})),O=k.actions,j=(O.setSession,O.resetSession),y=O.setSelectedExerciseIndex,S=O.setSelectedSetIndex,I=O.changeReps,E=O.changeWeight,A=(O.changeVolume,O.setExerciseCompleted);t.d=k.reducer},1185:function(e,t,n){"use strict";var r=n(95),s=n(1175),a=n(1186),c=n(1208),i=n(1187),o=Object(r.c)({exercises:i.a,workouts:c.a,workout:a.e,session:s.d});t.a=o},1186:function(e,t,n){"use strict";n.d(t,"f",(function(){return x})),n.d(t,"l",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"h",(function(){return v})),n.d(t,"k",(function(){return k})),n.d(t,"j",(function(){return O})),n.d(t,"a",(function(){return j})),n.d(t,"g",(function(){return y})),n.d(t,"c",(function(){return S})),n.d(t,"b",(function(){return I})),n.d(t,"d",(function(){return E}));var r=n(23),s=n(11),a=n(22),c=n.n(a),i=n(42),o=n(19),u=n(37),d=n(181),l=n(41),p=n.n(l),x=Object(o.b)("exerciseApp/workout/getWorkout",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.prev=1,console.log("getWorkout Reached"),e.next=5,p.a.get("/api/exercise/workout",{params:t});case 5:return s=e.sent,e.next=8,s.data;case 8:return a=e.sent,console.info("data",a),e.abrupt("return",a);case 13:return e.prev=13,e.t0=e.catch(1),r(Object(u.c)({message:e.t0.response.data,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),d.a.push({pathname:"/apps/exercise/workouts"}),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(o.b)("exerciseApp/workout/updateWorkout",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.dispatch,p.a.post("/api/exercise/workout",t).then((function(e){r(Object(u.c)({message:"Workout Saved Successfully",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}))})).catch((function(e){return r(Object(u.c)({message:e.response.data,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),null}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),m=Object(o.c)({selectId:function(e){return e._id}}),h=m.getSelectors((function(e){return e.exerciseApp.workout})),b=h.selectAll,g=(h.selectById,Object(o.d)({name:"exerciseApp/workout",initialState:m.getInitialState({}),reducers:{resetWorkout:function(e,t){},setSelectedIndex:function(e,t){e.selectedIndex=t.payload},setExercise:function(e,t){e.entities[e.ids[0]].exercises[e.selectedIndex].exerciseid=t.payload._id,e.entities[e.ids[0]].exercises[e.selectedIndex].exercise=t.payload.name},addExercise:function(e,t){e.entities[e.ids[0]].exercises=[].concat(Object(s.a)(e.entities[e.ids[0]].exercises),[{exercise:"Choose Exercise",exerciseid:null,sets:"",notes:""}])},removeExercise:function(e,t){var n=e.entities[e.ids[0]].exercises;n.splice(t.payload,1),e.entities[e.ids[0]].exercises=n},changeSets:function(e,t){e.entities[e.ids[0]].exercises[e.selectedIndex].sets=t.payload},changeNotes:function(e,t){e.entities[e.ids[0]].exercises[e.selectedIndex].notes=t.payload},changeWorkoutName:function(e,t){e.entities[e.ids[0]].name=t.payload}},extraReducers:Object(r.a)({},x.fulfilled,(function(e,t){console.info("getWorkoutPayload:",t.payload),m.removeAll(e),m.addOne(e,t.payload)}))})),w=g.actions,v=w.resetWorkout,k=w.setSelectedIndex,O=w.setExercise,j=w.addExercise,y=w.removeExercise,S=w.changeSets,I=w.changeNotes,E=w.changeWorkoutName;t.e=g.reducer},1187:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return h}));var r=n(23),s=n(22),a=n.n(s),c=n(42),i=n(19),o=n(41),u=n.n(o),d=Object(i.b)("exerciseApp/exercises/getExercises",Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/exercise/exercises");case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),l=Object(i.c)({selectId:function(e){return e._id}}),p=l.getSelectors((function(e){return e.exerciseApp.exercises})),x=p.selectAll,f=(p.selectById,Object(i.d)({name:"exerciseApp/exercises",initialState:l.getInitialState({searchText:""}),reducers:{resetExercises:function(e,t){},setExercisesSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:Object(r.a)({},d.fulfilled,(function(e,t){l.setAll(e,t.payload),e.searchText=""}))})),m=f.actions,h=(m.resetExercises,m.setExercisesSearchText);t.a=f.reducer},1208:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return b}));var r=n(23),s=n(22),a=n.n(s),c=n(42),i=n(19),o=n(181),u=n(41),d=n.n(u),l=Object(i.b)("exerciseApp/workouts/getWorkouts",function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/exercise/workouts",{params:{user:t}});case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(i.b)("exerciseApp/workouts/newWorkout",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch,e.next=3,d.a.post("/api/exercise/workout/new",{user:t});case 3:return r=e.sent,e.next=6,r.data;case 6:return s=e.sent,o.a.push({pathname:"/apps/exercise/workouts/".concat(s._id)}),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),x=Object(i.c)({selectId:function(e){return e._id}}),f=x.getSelectors((function(e){return e.exerciseApp.workouts})),m=f.selectAll,h=(f.selectById,Object(i.d)({name:"exerciseApp/workouts",initialState:x.getInitialState({}),reducers:{resetWorkouts:function(e,t){}},extraReducers:Object(r.a)({},l.fulfilled,x.setAll)})),b=h.actions.resetWorkouts;t.a=h.reducer},2472:function(e,t,n){"use strict";n.r(t);var r=n(1030),s=n(0),a=n.n(s),c=n(2),i=n(24),o=n(100),u=n(203),d=n(1031),l=n(73),p=n(176),x=n(202),f=n(5),m=n(1185),h=n(1208),b=n(1175),g=n(1187),w=Object(r.a)((function(e){return{layoutRoot:{},root:{background:e.palette.primary.main,color:e.palette.getContrastText(e.palette.primary.main)},extendedIcon:{marginRight:e.spacing(1)},addWorkoutButton:{margin:e.spacing(3)},workoutCard:{display:"flex",flexGrow:1,flexDirection:"column",justifyContent:"space-between",alignItems:"center",padding:e.spacing(2)},workoutCards:{display:"flex",padding:e.spacing(2)},workoutCardContainer:{width:"28rem",height:"30rem",margin:"1.6rem"},workoutCardBody:{paddingBottom:"2rem"},workoutname:{marginTop:0},workout:{cursor:"pointer",boxShadow:e.shadows[0],transitionProperty:"box-shadow border-color",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,background:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),"&:hover":{boxShadow:e.shadows[6]}},newWorkout:{borderWidth:2,borderStyle:"dashed",borderColor:Object(l.fade)(e.palette.getContrastText(e.palette.primary.main),.6),"&:hover":{borderColor:Object(l.fade)(e.palette.getContrastText(e.palette.primary.main),.8)}}}}));t.default=Object(x.a)("exerciseApp",m.a)((function(e){var t=Object(f.c)(h.e),n=Object(f.b)(),r=w(e),l=Object(f.c)((function(e){return e.auth.user}));return Object(s.useEffect)((function(){return n(Object(h.b)(l._id)),n(Object(g.b)(l._id)),function(){n(Object(h.d)()),n(Object(b.g)())}}),[n]),a.a.createElement("div",{className:Object(c.default)(r.root,"flex flex-grow flex-shrink-0 flex-col items-center")},a.a.createElement("div",{className:"flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24"},a.a.createElement(o.a,null,a.a.createElement(p.a,{className:"mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300",color:"inherit"},"Workouts")),a.a.createElement("div",null,a.a.createElement(u.a,{className:"flex flex-wrap w-full justify-center py-32 px-16",enter:{animation:"transition.slideUpBigIn",duration:300}},t.map((function(e){return a.a.createElement("div",{className:r.workoutCardContainer,key:e._id},a.a.createElement(i.a,{to:"/apps/exercise/workouts/".concat(e._id),className:Object(c.default)(r.workout,"flex flex-col items-center justify-center w-full h-full rounded py-24"),role:"button"},a.a.createElement("div",{className:r.workoutCard},a.a.createElement("div",{className:"flex items-center justify-center px-4 pt-4"},a.a.createElement(p.a,{variant:"h4",color:"inherit",align:"center"},e.name)),a.a.createElement("div",{className:r.workoutCardBody},e.exercises.map((function(e){return a.a.createElement(p.a,{key:e.sets+e.exercise,variant:"body2",color:"inherit"},e.sets,"x ",e.exercise)}))),a.a.createElement("div",{className:r.workoutCardFooter},a.a.createElement(p.a,{variant:"caption",color:"inherit"},"Last Session: ",e.lastSessionDate)))))})),a.a.createElement("div",{className:r.workoutCardContainer},a.a.createElement("div",{className:Object(c.default)(r.workout,r.newWorkout,"flex flex-col items-center justify-center w-full h-full rounded py-24"),onClick:function(){return n(Object(h.c)(l._id))},onKeyDown:function(){return n(Object(h.c)(l._id))},role:"button",tabIndex:0},a.a.createElement(d.a,{className:"text-56"},"add_circle"),a.a.createElement(p.a,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},"Add new workout")))))))}))}}]);