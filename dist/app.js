"use strict";(()=>{var Rt=Object.defineProperty;var $=(t,e)=>()=>(t&&(e=t(t=0)),e);var j=(t,e)=>{for(var s in e)Rt(t,s,{get:e[s],enumerable:!0})};function d(){try{let t=localStorage.getItem(Y);if(t)return{...V,...JSON.parse(t)}}catch{}return{...V}}function T(t){localStorage.setItem(Y,JSON.stringify(t))}function H(t,e){t.xp+=e;for(let s=Z.length-1;s>=0;s--)if(t.xp>=Z[s].xp){t.level=Z[s].level;break}return T(t),t}function A(t){let e=new Date().toISOString().split("T")[0];if(t.lastActiveDate===e)return t;let s=new Date(Date.now()-864e5).toISOString().split("T")[0];return t.lastActiveDate===s?t.streak+=1:t.lastActiveDate!==e&&(t.streak=1),t.lastActiveDate=e,T(t),t}function I(t,e){return t.lessons[e]||(t.lessons[e]=!0,H(t,50),A(t)),t}function tt(t,e){return t.milestones[e]||(t.milestones[e]=!0,H(t,100),A(t)),t}function et(t,e){if(!t.projects[e]){t.projects[e]=!0,H(t,300);let s={s1:"first-agent",s2:"orchestrator",s3:"rag-master",s4:"protocol-builder",s5:"commander",s6:"graduate"};s[e]&&!t.badges.includes(s[e])&&t.badges.push(s[e]),A(t)}return t}function R(t,e,s){let n=Math.min(50,Math.max(10,Math.round(s/2))),r=t.games[e]||{bestScore:0,plays:0};if(t.games[e]={bestScore:Math.max(r.bestScore,s),plays:r.plays+1},s===100){let i={"s1-concept-quiz":"api-master","s2-concept-quiz":"framework-king","s3-concept-quiz":"vector-hero","s4-concept-quiz":"mcp-pro","s5-concept-quiz":"monitor-king","s6-concept-quiz":"interview-pro"};i[e]&&!t.badges.includes(i[e])&&t.badges.push(i[e])}return H(t,n),A(t),t}function F(t,e,s){return t.bonusProjects[e]=s,s==="complete"&&(H(t,200),A(t)),T(t),t}function N(t){let e=Z.find(r=>r.level===t.level),s=Z.find(r=>r.level===t.level+1),n=s?(t.xp-e.xp)/(s.xp-e.xp)*100:100;return{current:e,next:s,progress:n}}var Y,V,Z,w=$(()=>{"use strict";Y="agentpath",V={currentSprint:1,currentDay:1,xp:0,level:1,streak:0,lastActiveDate:"",lessons:{},milestones:{},projects:{},games:{},badges:[],skills:{python:0,"llm-apis":0,"agent-frameworks":0,rag:0,mcp:0,"multi-agent":0},lang:"en",bonusProjects:{}},Z=[{level:1,title:"\u65B0\u624B Novice",titleEn:"Novice",xp:0},{level:2,title:"\u5B66\u5F92 Apprentice",titleEn:"Apprentice",xp:1e3},{level:3,title:"\u6784\u5EFA\u8005 Builder",titleEn:"Builder",xp:3e3},{level:4,title:"\u5DE5\u5320 Craftsman",titleEn:"Craftsman",xp:6e3},{level:5,title:"\u67B6\u6784\u5E08 Architect",titleEn:"Architect",xp:1e4},{level:6,title:"\u667A\u8005 Agent Master",titleEn:"Agent Master",xp:15e3}]});function st(){D=d().lang,document.documentElement.lang=D}function a(t,e){let s=Zt[t];if(!s)return t;let n=s[D]||s.en||t;if(e)for(let[r,i]of Object.entries(e))n=n.replace(`{${r}}`,String(i));return n}function x(){return D}function Ht(t){D=t,document.documentElement.lang=t;let e=d();e.lang=t,T(e)}function nt(){Ht(D==="en"?"zh":"en")}var Zt,D,y=$(()=>{"use strict";w();Zt={"nav.dashboard":{en:"Dashboard",zh:"\u4EEA\u8868\u76D8"},"nav.sprint":{en:"Sprint",zh:"\u51B2\u523A"},"nav.games":{en:"Games",zh:"\u6E38\u620F"},"nav.roadmap":{en:"Roadmap",zh:"\u8DEF\u7EBF\u56FE"},"nav.profile":{en:"Profile",zh:"\u4E2A\u4EBA"},"dash.today":{en:"Today",zh:"\u4ECA\u5929"},"dash.current-sprint":{en:"Current Sprint",zh:"\u5F53\u524D\u51B2\u523A"},"dash.day-of":{en:"Day {n} of 10",zh:"\u7B2C{n}\u5929 / \u517110\u5929"},"dash.xp":{en:"XP",zh:"\u7ECF\u9A8C\u503C"},"dash.streak":{en:"day streak",zh:"\u5929\u8FDE\u7EED"},"dash.level":{en:"Level",zh:"\u7B49\u7EA7"},"sprint.objectives":{en:"Sprint Objectives",zh:"\u51B2\u523A\u76EE\u6807"},"sprint.lesson":{en:"Lesson",zh:"\u8BFE\u7A0B"},"sprint.project":{en:"Project",zh:"\u9879\u76EE"},"sprint.review":{en:"Review & Games",zh:"\u590D\u4E60\u4E0E\u6E38\u620F"},"lesson.complete":{en:"Mark Complete",zh:"\u6807\u8BB0\u5B8C\u6210"},"lesson.completed":{en:"Completed",zh:"\u5DF2\u5B8C\u6210"},"lesson.try-it":{en:"Try it in iTerm",zh:"\u5728iTerm\u4E2D\u8BD5\u8BD5"},"lesson.key-terms":{en:"Key Terms",zh:"\u5173\u952E\u672F\u8BED"},"lesson.min":{en:"min",zh:"\u5206\u949F"},"project.milestones":{en:"Milestones",zh:"\u91CC\u7A0B\u7891"},"project.stuck":{en:"Stuck? Get a hint",zh:"\u5361\u4F4F\u4E86\uFF1F\u83B7\u53D6\u63D0\u793A"},"project.hint":{en:"Hint",zh:"\u63D0\u793A"},"project.stretch":{en:"Stretch Goals",zh:"\u989D\u5916\u76EE\u6807"},"project.complete":{en:"Project Complete!",zh:"\u9879\u76EE\u5B8C\u6210\uFF01"},"project.mark-complete":{en:"Mark Project Complete",zh:"\u6807\u8BB0\u9879\u76EE\u5B8C\u6210"},"games.select":{en:"Choose a Game",zh:"\u9009\u62E9\u6E38\u620F"},"games.flash-match":{en:"Flash Match",zh:"\u95EA\u914D"},"games.concept-quiz":{en:"Concept Quiz",zh:"\u6982\u5FF5\u6D4B\u9A8C"},"games.prompt-builder":{en:"Prompt Builder",zh:"\u63D0\u793A\u6784\u5EFA"},"games.score":{en:"Score",zh:"\u5F97\u5206"},"games.best":{en:"Best",zh:"\u6700\u4F73"},"games.play-again":{en:"Play Again",zh:"\u518D\u73A9\u4E00\u6B21"},"games.back":{en:"Back to Games",zh:"\u8FD4\u56DE\u6E38\u620F"},"roadmap.title":{en:"Your 12-Week Journey",zh:"\u4F60\u768412\u5468\u65C5\u7A0B"},"roadmap.locked":{en:"Locked",zh:"\u672A\u89E3\u9501"},"roadmap.active":{en:"Active",zh:"\u8FDB\u884C\u4E2D"},"roadmap.complete":{en:"Complete",zh:"\u5DF2\u5B8C\u6210"},"profile.skills":{en:"Skills Radar",zh:"\u6280\u80FD\u96F7\u8FBE"},"profile.badges":{en:"Badges",zh:"\u5FBD\u7AE0"},"profile.stats":{en:"Stats",zh:"\u7EDF\u8BA1"},"profile.export":{en:"Export for Resume",zh:"\u5BFC\u51FA\u7B80\u5386"},"profile.total-xp":{en:"Total XP",zh:"\u603B\u7ECF\u9A8C\u503C"},"profile.projects-done":{en:"Projects Done",zh:"\u5B8C\u6210\u9879\u76EE"},"profile.days-active":{en:"Days Active",zh:"\u6D3B\u8DC3\u5929\u6570"},"profile.longest-streak":{en:"Longest Streak",zh:"\u6700\u957F\u8FDE\u7EED"},"profile.next-steps":{en:"Next Steps \u2014 Keep Growing",zh:"\u4E0B\u4E00\u6B65\u2014\u2014\u7EE7\u7EED\u6210\u957F"},"games.match-instruction":{en:"Tap a term, then tap its matching definition.",zh:"\u70B9\u51FB\u672F\u8BED\uFF0C\u7136\u540E\u70B9\u51FB\u5339\u914D\u7684\u5B9A\u4E49\u3002"},"games.correct":{en:"Correct!",zh:"\u6B63\u786E\uFF01"},"games.wrong-answer":{en:"Wrong \u2014 the answer is",zh:"\u9519\u8BEF\u2014\u2014\u7B54\u6848\u662F"},"games.next":{en:"Next",zh:"\u4E0B\u4E00\u9898"},"games.complete":{en:"Complete!",zh:"\u5B8C\u6210\uFF01"},"games.time":{en:"Time",zh:"\u7528\u65F6"},"games.attempts":{en:"Attempts",zh:"\u5C1D\u8BD5\u6B21\u6570"},"games.correct-count":{en:"correct",zh:"\u6B63\u786E"},"games.match-desc":{en:"Match terms to definitions",zh:"\u5C06\u672F\u8BED\u4E0E\u5B9A\u4E49\u5339\u914D"},"games.quiz-desc":{en:"Test your knowledge",zh:"\u6D4B\u8BD5\u4F60\u7684\u77E5\u8BC6"},"games.builder-desc":{en:"Assemble API calls",zh:"\u7EC4\u88C5API\u8C03\u7528"},"games.check":{en:"Check",zh:"\u68C0\u67E5"},"games.not-quite":{en:"Not quite \u2014 try rearranging the parts.",zh:"\u4E0D\u592A\u5BF9\u2014\u2014\u8BD5\u8BD5\u91CD\u65B0\u6392\u5217\u3002"},"games.expected":{en:"Expected:",zh:"\u9884\u671F\uFF1A"},"games.available-parts":{en:"Available parts:",zh:"\u53EF\u7528\u90E8\u5206\uFF1A"},"games.tap-to-build":{en:"Tap code parts below to build the call...",zh:"\u70B9\u51FB\u4E0B\u65B9\u4EE3\u7801\u7247\u6BB5\u6765\u6784\u5EFA\u8C03\u7528..."},"roadmap.weeks":{en:"Weeks",zh:"\u5468"},"roadmap.bonus-title":{en:"Bonus Projects",zh:"\u989D\u5916\u9879\u76EE"},"roadmap.start":{en:"Start",zh:"\u5F00\u59CB"},"roadmap.mark-complete":{en:"Complete",zh:"\u5B8C\u6210"},"roadmap.done":{en:"Done",zh:"\u5DF2\u5B8C\u6210"},"roadmap.view-sprint":{en:"View Sprint",zh:"\u67E5\u770B\u51B2\u523A"},"dash.xp-to-next":{en:"XP to next",zh:"\u7ECF\u9A8C\u503C\u5230\u4E0B\u4E00\u7EA7"},"sprint.current":{en:"current",zh:"\u5F53\u524D"}},D="en"});async function L(t){let s=`content/${x()}/${t}`;if(_.has(s))return _.get(s);let n=await fetch(s);if(!n.ok){let i=`content/en/${t}`;if(_.has(i))return _.get(i);let c=await fetch(i);if(!c.ok)throw new Error(`Content not found: ${t}`);let o=await c.json();return _.set(i,o),o}let r=await n.json();return _.set(s,r),r}async function P(t){let e=`content/shared/${t}`;if(_.has(e))return _.get(e);let s=await fetch(e);if(!s.ok)throw new Error(`Shared content not found: ${t}`);let n=await s.json();return _.set(e,n),n}function at(){_.clear()}var _,z=$(()=>{"use strict";y();_=new Map});function Gt(t,e=20){let s=Math.round(t/100*e),n=e-s;return'<span class="text-ap-green">'+"\u2593".repeat(s)+'</span><span class="text-ap-text-muted">'+"\u2591".repeat(n)+"</span>"}function Q(t,e){return`
    <div class="flex items-center gap-3" role="progressbar" aria-valuenow="${Math.round(t)}" aria-valuemin="0" aria-valuemax="100" aria-label="${e||`${Math.round(t)}% complete`}">
      <div class="progress-terminal text-sm whitespace-nowrap" aria-hidden="true">${Gt(t,15)}</div>
      <span class="text-ap-text-dim text-xs">${Math.round(t)}%</span>
      ${e?`<span class="text-ap-text-muted text-xs">${e}</span>`:""}
    </div>
  `}var ot=$(()=>{"use strict"});var lt={};j(lt,{renderDashboard:()=>Ft});async function Ft(){let t=d(),s=(await P("sprints.json"))[t.currentSprint-1],n=x(),r=N(t),i=n==="zh"?s.titleZh:s.title,c=n==="zh"?s.projectZh:s.project,o=n==="zh"?r.current.title.split(" ")[0]:r.current.titleEn,l=s.days.filter(v=>v.type==="lesson").length,u=s.days.filter(v=>v.type==="lesson").filter(v=>t.lessons[`s${s.id}-${v.ref}`]).length,p=t.projects[`s${s.id}`]||!1,g=Math.round((u+(p?1:0))/(l+1)*100),h=s.days[t.currentDay-1],b="",m="",f="";if(h)if(h.type==="lesson"){let v=h.ref.replace("lesson-","");b=`${a("sprint.lesson")} ${v}`,m="~20 "+a("lesson.min"),f=`#/sprint/${s.id}/lesson/${v}`}else h.type==="project"?(b=c,m="~60 "+a("lesson.min"),f=`#/sprint/${s.id}/project`):(b=a("sprint.review"),m="~30 "+a("lesson.min"),f=`#/sprint/${s.id}/games`);return`
    <!-- Status bar -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <div class="text-ap-green font-bold text-xl glow-green">${t.xp.toLocaleString()} <span class="text-xs font-normal">${a("dash.xp")}</span></div>
        <div class="text-ap-amber font-bold glow-amber">\u{1F525} ${t.streak} <span class="text-xs font-normal">${a("dash.streak")}</span></div>
      </div>
      <div class="text-ap-text-dim text-sm">${a("dash.level")} ${t.level}: ${o}</div>
    </div>

    <!-- Current Sprint Card -->
    <div class="terminal-card mb-6">
      <div class="terminal-card-header">
        <div class="terminal-dot terminal-dot-red"></div>
        <div class="terminal-dot terminal-dot-yellow"></div>
        <div class="terminal-dot terminal-dot-green"></div>
        <span class="text-ap-text-muted text-xs ml-2">${a("dash.current-sprint")}</span>
      </div>
      <div class="p-4">
        <div class="flex items-center gap-2 mb-1">
          <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${s.id}</span>
          <span class="text-ap-text-muted text-xs">${a("dash.day-of",{n:t.currentDay})}</span>
        </div>
        <div class="text-ap-text text-lg font-bold mb-1">${i}</div>
        <div class="text-ap-text-dim text-sm mb-3">${c}</div>
        ${Q(g)}
      </div>
    </div>

    <!-- Today's Task -->
    <div class="terminal-card mb-6">
      <div class="p-4">
        <div class="text-ap-green text-xs mb-2">$ agentpath --today</div>
        <a href="${f}" class="flex items-center justify-between group">
          <div>
            <div class="text-ap-text font-bold group-hover:text-ap-green transition-colors">${b}</div>
            <div class="text-ap-text-muted text-xs mt-1">${m}</div>
          </div>
          <span class="text-ap-green text-2xl group-hover:translate-x-1 transition-transform">\u2192</span>
        </a>
      </div>
    </div>

    <!-- Level Progress -->
    <div class="terminal-card">
      <div class="p-4">
        <div class="text-ap-text-dim text-xs mb-2">${a("dash.level")} ${t.level} \u2192 ${r.next?r.next.level:"MAX"}</div>
        ${Q(r.progress,r.next?`${r.next.xp-t.xp} ${a("dash.xp-to-next")}`:"MAX LEVEL")}
      </div>
    </div>
  `}var ct=$(()=>{"use strict";w();y();z();ot()});var dt={};j(dt,{renderSprint:()=>Ot});async function Ot(t){let e=d(),n=(await P("sprints.json"))[t-1];if(!n)return'<div class="text-ap-red">Sprint not found</div>';let r=x(),i=r==="zh"?n.titleZh:n.title,c=r==="zh"?n.projectZh:n.project,o=n.days.map(l=>{let u="\u{1F4D6}",p=a("sprint.lesson"),g=`#/sprint/${t}/lesson/${l.ref.replace("lesson-","")}`,h=!1;l.type==="lesson"?h=!!e.lessons[`s${t}-${l.ref}`]:l.type==="project"?(u="\u{1F528}",p=a("sprint.project"),g=`#/sprint/${t}/project`,h=!!e.projects[`s${t}`]):(u="\u25C6",p=a("sprint.review"),g=`#/sprint/${t}/games`);let b=l.day===e.currentDay&&t===e.currentSprint,m=t>e.currentSprint;return`
        <a href="${m?"#":g}"
           class="terminal-card p-3 flex items-center gap-3 ${b?"ring-1 ring-ap-green":""} ${m?"opacity-40 cursor-not-allowed":"hover:bg-ap-surface-hover cursor-pointer"} transition-colors">
          <div class="text-lg w-8 text-center">${h?'<span class="text-ap-green">\u2713</span>':u}</div>
          <div class="flex-1">
            <div class="text-ap-text text-sm font-bold">${a("dash.day-of",{n:l.day}).split("/")[0].trim()}</div>
            <div class="text-ap-text-muted text-xs">${p}</div>
          </div>
          ${b?`<span class="text-ap-green text-xs">\u2190 ${a("sprint.current")}</span>`:""}
        </a>
      `}).join("");return`
    <div class="text-ap-green text-sm mb-1">$ agentpath sprint ${t}</div>
    <div class="flex items-center gap-2 mb-1">
      <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${t}</span>
      <span class="text-ap-text-muted text-xs">Weeks ${n.weeks}</span>
    </div>
    <h1 class="text-ap-text text-2xl font-bold mb-1">${i}</h1>
    <p class="text-ap-text-dim text-sm mb-6">${a("sprint.project")}: ${c}</p>

    <div class="flex flex-col gap-2">
      ${o}
    </div>
  `}var pt=$(()=>{"use strict";w();y();z()});function S(t){return t.replace(/[&<>"']/g,e=>Qt[e])}var Qt,X=$(()=>{"use strict";Qt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}});var mt={};j(mt,{renderLesson:()=>Wt});function Xt(t){let e=x();switch(t.type){case"text":return`<div class="text-ap-text text-sm leading-relaxed mb-4">${S(t.content||"")}</div>`;case"code":return`
        <div class="code-block mb-4">
          <div class="text-ap-text-muted text-xs mb-2">${S(t.language||"code")}</div>
          <pre><code>${S(t.content||"")}</code></pre>
        </div>
      `;case"callout":{let s={tip:"border-ap-green bg-ap-green-dim",warning:"border-ap-amber bg-ap-amber-dim",info:"border-ap-indigo bg-ap-indigo-dim"},n={tip:"\u{1F4A1}",warning:"\u26A0\uFE0F",info:"\u2139\uFE0F"},r=t.variant||"info";return`
        <div class="border-l-2 ${s[r]} p-3 rounded-r mb-4">
          <div class="text-sm">${n[r]} ${S(t.content||"")}</div>
        </div>
      `}case"try-it":return`
        <div class="terminal-card mb-4">
          <div class="terminal-card-header">
            <div class="terminal-dot terminal-dot-red"></div>
            <div class="terminal-dot terminal-dot-yellow"></div>
            <div class="terminal-dot terminal-dot-green"></div>
            <span class="text-ap-text-muted text-xs ml-2">iTerm</span>
          </div>
          <div class="p-3">
            <div class="text-ap-green text-xs mb-2">$ ${a("lesson.try-it")}</div>
            <div class="text-ap-text text-sm font-mono">${S(t.prompt||"")}</div>
          </div>
        </div>
      `;case"key-terms":return`
        <div class="mb-4">
          <div class="text-ap-green text-xs font-bold mb-2 uppercase">${a("lesson.key-terms")}</div>
          <div class="flex flex-col gap-2">
            ${(t.terms||[]).map(s=>`
              <div class="terminal-card p-2">
                <span class="text-ap-green font-bold text-sm">${S(e==="zh"?s.termZh:s.term)}</span>
                <span class="text-ap-text-muted text-xs ml-2">\u2014 ${S(e==="zh"?s.definitionZh:s.definition)}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;default:return""}}async function Wt(t,e){let s=d(),n=await L(`sprint-${t}/lesson-${e.padStart(2,"0")}.json`),i=x()==="zh"?n.titleZh:n.title,c=`s${t}-lesson-${e.padStart(2,"0")}`,o=!!s.lessons[c],l=n.steps.map(Xt).join("");return`
    <a href="#/sprint/${t}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${t}</a>
    <div class="flex items-center gap-3 mt-3 mb-1">
      <span class="text-ap-green text-xs">${a("sprint.lesson")} ${e}</span>
      <span class="text-ap-text-muted text-xs">~${n.duration} ${a("lesson.min")}</span>
    </div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${i}</h1>

    ${l}

    <div class="mt-8 mb-4">
      ${o?`<div class="text-ap-green text-sm font-bold">\u2713 ${a("lesson.completed")} (+50 XP)</div>`:`<button onclick="window.__completeLesson('${c}', ${t})"
               class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
               ${a("lesson.complete")}
             </button>`}
    </div>
  `}var gt=$(()=>{"use strict";w();y();z();X();window.__completeLesson=(t,e)=>{let s=d();if(I(s,t),e===s.currentSprint){let n=Object.keys(s.lessons).filter(r=>r.startsWith(`s${e}-`)).length;s.currentDay=Math.min(n+1,10),T(s)}window.dispatchEvent(new HashChangeEvent("hashchange"))}});var xt={};j(xt,{renderProject:()=>Kt});async function Kt(t){let e=d(),s=await L(`sprint-${t}/project.json`),n=x(),r=n==="zh"?s.titleZh:s.title,i=n==="zh"?s.descriptionZh:s.description,c=`s${t}`,o=!!e.projects[c],l=s.milestones.every(h=>!!e.milestones[`${c}-${h.id}`]),u=s.milestones.map(h=>{let b=`${c}-${h.id}`,m=!!e.milestones[b],f=n==="zh"?h.labelZh:h.label,v=s.hints[h.id]||[];return`
        <div class="terminal-card p-3 mb-2">
          <div class="flex items-center gap-3">
            <button onclick="window.__toggleMilestone('${b}', ${t})"
                    class="w-5 h-5 border ${m?"bg-ap-green border-ap-green text-ap-bg":"border-ap-text-muted"} rounded text-xs flex items-center justify-center flex-shrink-0">
              ${m?"\u2713":""}
            </button>
            <span class="text-sm ${m?"text-ap-text-dim line-through":"text-ap-text"}">${f}</span>
          </div>
          ${!m&&v.length>0?`<details class="mt-2 ml-8">
                  <summary class="text-ap-amber text-xs cursor-pointer hover:underline">${a("project.stuck")}</summary>
                  <div class="mt-2 flex flex-col gap-1">
                    ${v.map((k,M)=>`<div class="text-ap-text-dim text-xs">\u{1F4A1} ${a("project.hint")} ${M+1}: ${k}</div>`).join("")}
                  </div>
                </details>`:""}
        </div>
      `}).join(""),g=(n==="zh"?s.stretchZh:s.stretch).map(h=>`<li class="text-ap-text-dim text-sm">${h}</li>`).join("");return`
    <a href="#/sprint/${t}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${t}</a>
    <div class="text-ap-green text-xs mt-3 mb-1">$ agentpath project --sprint ${t}</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${r}</h1>
    <p class="text-ap-text-dim text-sm mb-6">${i}</p>

    <div class="text-ap-green text-xs font-bold uppercase mb-3">${a("project.milestones")}</div>
    ${u}

    ${l&&!o?`<button onclick="window.__completeProject('${c}', ${t})"
             class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm mt-4 hover:opacity-90 transition-opacity">
             ${a("project.mark-complete")}
           </button>`:""}
    ${o?`<div class="text-ap-green font-bold text-sm mt-4">\u2713 ${a("project.complete")} (+300 XP)</div>`:""}

    <div class="mt-8">
      <div class="text-ap-amber text-xs font-bold uppercase mb-2">${a("project.stretch")}</div>
      <ul class="list-disc list-inside flex flex-col gap-1">${g}</ul>
    </div>
  `}var ut=$(()=>{"use strict";w();y();z();window.__toggleMilestone=(t,e)=>{let s=d();s.milestones[t]||tt(s,t),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__completeProject=(t,e)=>{let s=d();et(s,t),window.dispatchEvent(new HashChangeEvent("hashchange"))}});var ht={};j(ht,{renderGames:()=>Jt});function Jt(t){let e=d(),n=[{id:"flash-match",icon:"\u26A1",name:a("games.flash-match"),desc:"Match terms to definitions",route:`#/sprint/${t}/games/flash-match`,best:e.games[`s${t}-flash-match`]?.bestScore},{id:"concept-quiz",icon:"\u{1F9E0}",name:a("games.concept-quiz"),desc:"Test your knowledge",route:`#/sprint/${t}/games/concept-quiz`,best:e.games[`s${t}-concept-quiz`]?.bestScore},{id:"prompt-builder",icon:"\u{1F527}",name:a("games.prompt-builder"),desc:"Assemble API calls",route:`#/sprint/${t}/games/prompt-builder`,best:e.games[`s${t}-prompt-builder`]?.bestScore}].map(r=>`
    <a href="${r.route}" class="terminal-card p-4 hover:bg-ap-surface-hover transition-colors block">
      <div class="flex items-center gap-3">
        <div class="text-2xl">${r.icon}</div>
        <div class="flex-1">
          <div class="text-ap-text font-bold text-sm">${r.name}</div>
          <div class="text-ap-text-muted text-xs">${r.desc}</div>
        </div>
        ${r.best!==void 0?`<div class="text-ap-green text-xs">${a("games.best")}: ${r.best}%</div>`:""}
      </div>
    </a>
  `).join("");return`
    <a href="#/sprint/${t}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${t}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath games --sprint ${t}</div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${a("games.select")}</h1>
    <div class="flex flex-col gap-3">${n}</div>
  `}var vt=$(()=>{"use strict";w();y()});var ft={};j(ft,{renderFlashMatch:()=>Ut});async function Ut(t){let e=await L(`sprint-${t}/games.json`),s=x(),i=[...e["flash-match"].pairs].sort(()=>Math.random()-.5).slice(0,6),c=i.map((p,g)=>({id:g,text:s==="zh"?p.termZh:p.term})),o=[...i].sort(()=>Math.random()-.5).map(p=>({id:i.indexOf(p),text:s==="zh"?p.definitionZh:p.definition}));window.__flashMatchState={sprintId:t,selectedTerm:null,matched:new Set,attempts:0,startTime:Date.now(),total:i.length};let l=c.map(p=>`
    <button id="term-${p.id}" onclick="window.__selectTerm(${p.id})"
            class="terminal-card p-2 text-left text-sm text-ap-green hover:bg-ap-green-dim transition-colors">
      ${p.text}
    </button>
  `).join(""),u=o.map(p=>`
    <button id="def-${p.id}" onclick="window.__selectDef(${p.id})"
            class="terminal-card p-2 text-left text-sm text-ap-text hover:bg-ap-surface-hover transition-colors">
      ${p.text}
    </button>
  `).join("");return`
    <a href="#/sprint/${t}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${a("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath flash-match</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${a("games.flash-match")}</h1>
    <p class="text-ap-text-muted text-xs mb-6">Tap a term, then tap its matching definition.</p>

    <div id="flash-match-area" class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">${l}</div>
      <div class="flex flex-col gap-2">${u}</div>
    </div>
    <div id="flash-match-result" class="mt-6 hidden"></div>
  `}var bt=$(()=>{"use strict";w();y();z();window.__selectTerm=t=>{let e=window.__flashMatchState;e.matched.has(t)||(document.querySelectorAll("[id^='term-']").forEach(s=>s.classList.remove("ring-1","ring-ap-green")),document.getElementById(`term-${t}`)?.classList.add("ring-1","ring-ap-green"),e.selectedTerm=t)};window.__selectDef=t=>{let e=window.__flashMatchState;if(e.selectedTerm===null||e.matched.has(t))return;e.attempts++;let s=document.getElementById(`term-${e.selectedTerm}`),n=document.getElementById(`def-${t}`);if(e.selectedTerm===t){if(e.matched.add(t),s?.classList.add("opacity-30"),n?.classList.add("opacity-30"),s?.classList.remove("ring-1","ring-ap-green"),e.selectedTerm=null,e.matched.size===e.total){let r=Math.round((Date.now()-e.startTime)/1e3),i=Math.round(e.total/e.attempts*100),c=Math.min(100,i),o=d();R(o,`s${e.sprintId}-flash-match`,c);let l=document.getElementById("flash-match-result");l&&(l.classList.remove("hidden"),l.innerHTML=`
          <div class="terminal-card p-4 text-center">
            <div class="text-ap-green text-2xl font-bold glow-green mb-2">\u2713 Complete!</div>
            <div class="text-ap-text text-sm">${a("games.score")}: ${c}% | Time: ${r}s | Attempts: ${e.attempts}</div>
            <div class="flex gap-3 justify-center mt-4">
              <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                      class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
                ${a("games.play-again")}
              </button>
              <a href="#/sprint/${e.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
                ${a("games.back")}
              </a>
            </div>
          </div>
        `)}}else n?.classList.add("border-ap-red"),setTimeout(()=>n?.classList.remove("border-ap-red"),500),s?.classList.remove("ring-1","ring-ap-green"),e.selectedTerm=null}});var yt={};j(yt,{renderConceptQuiz:()=>Vt});async function Vt(t){let e=await L(`sprint-${t}/games.json`),s=x(),n=e["concept-quiz"].questions;return window.__quizState={sprintId:t,questions:n,current:0,correct:0,answered:!1},$t(0,n,s,t)}function $t(t,e,s,n){let r=e[t],i=s==="zh"?r.qZh:r.q,c=r.options.map((o,l)=>`
    <button id="opt-${l}" onclick="window.__answerQuiz(${l})"
            class="terminal-card p-3 text-left text-sm text-ap-text hover:bg-ap-surface-hover transition-colors w-full">
      <span class="text-ap-green mr-2">${String.fromCharCode(65+l)}.</span> ${o}
    </button>
  `).join("");return`
    <a href="#/sprint/${n}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${a("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath quiz --question ${t+1}/${e.length}</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${a("games.concept-quiz")}</h1>
    <div class="text-ap-text-muted text-xs mb-6">${t+1} / ${e.length}</div>

    <div id="quiz-area">
      <div class="text-ap-text text-sm font-bold mb-4">${i}</div>
      <div class="flex flex-col gap-2">${c}</div>
    </div>
    <div id="quiz-feedback" class="mt-4"></div>
    <div id="quiz-next" class="mt-4 hidden"></div>
  `}var wt=$(()=>{"use strict";w();y();z();window.__answerQuiz=t=>{let e=window.__quizState;if(e.answered)return;e.answered=!0;let s=e.questions[e.current],n=t===s.answer;n&&e.correct++;let r=document.getElementById(`opt-${t}`),i=document.getElementById(`opt-${s.answer}`);n?r?.classList.add("border-ap-green","bg-ap-green-dim"):(r?.classList.add("border-ap-red","bg-ap-red-dim"),i?.classList.add("border-ap-green","bg-ap-green-dim"));for(let l=0;l<s.options.length;l++)document.getElementById(`opt-${l}`)?.classList.add("pointer-events-none");let c=document.getElementById("quiz-feedback");c&&(c.innerHTML=n?'<div class="text-ap-green text-sm">\u2713 Correct!</div>':`<div class="text-ap-red text-sm">\u2717 Wrong \u2014 the answer is ${String.fromCharCode(65+s.answer)}</div>`);let o=document.getElementById("quiz-next");if(o)if(o.classList.remove("hidden"),e.current<e.questions.length-1)o.innerHTML=`
        <button onclick="window.__nextQuestion()"
                class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
          Next \u2192
        </button>
      `;else{let l=Math.round(e.correct/e.questions.length*100),u=d();R(u,`s${e.sprintId}-concept-quiz`,l),o.innerHTML=`
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">${l}%</div>
          <div class="text-ap-text text-sm">${e.correct}/${e.questions.length} correct</div>
          <div class="flex gap-3 justify-center mt-4">
            <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                    class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
              ${a("games.play-again")}
            </button>
            <a href="#/sprint/${e.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
              ${a("games.back")}
            </a>
          </div>
        </div>
      `}};window.__nextQuestion=()=>{let t=window.__quizState;t.current++,t.answered=!1;let e=x(),s=document.querySelector("main");s&&(s.innerHTML=$t(t.current,t.questions,e,t.sprintId))}});var jt={};j(jt,{renderPromptBuilder:()=>Yt});async function Yt(t){let e=await L(`sprint-${t}/games.json`),s=x(),n=e["prompt-builder"].challenges,r=n[0];return window.__pbState={sprintId:t,challenges:n,currentChallenge:0,placed:[],available:[...r.parts].sort(()=>Math.random()-.5)},It(r,s,t)}function It(t,e,s){let n=window.__pbState,r=e==="zh"?t.instructionZh:t.instruction;return`
    <a href="#/sprint/${s}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${a("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath prompt-builder</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${a("games.prompt-builder")}</h1>
    <p class="text-ap-text text-sm mb-6">${S(r)}</p>

    <div class="terminal-card mb-4">
      <div class="terminal-card-header">
        <div class="terminal-dot terminal-dot-red" aria-hidden="true"></div>
        <div class="terminal-dot terminal-dot-yellow" aria-hidden="true"></div>
        <div class="terminal-dot terminal-dot-green" aria-hidden="true"></div>
        <span class="text-ap-text-muted text-xs ml-2">your code</span>
      </div>
      <div id="pb-placed" class="p-3 min-h-[80px]">${kt(n)}</div>
    </div>

    <div class="text-ap-text-muted text-xs mb-2">${a("games.available-parts")}</div>
    <div id="pb-available" class="mb-4">${St(n)}</div>

    <button onclick="window.__checkPromptBuilder()"
            class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
      ${a("games.check")}
    </button>
    <div id="pb-result" class="mt-4"></div>
  `}function kt(t){return t.placed.length===0?`<span class="text-ap-text-muted text-xs">${a("games.tap-to-build")}</span>`:t.placed.map((e,s)=>`
      <button onclick="window.__removePart(${s})"
              class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-red transition-all inline-block m-1 bg-ap-green-dim">
        ${S(e)}
      </button>
    `).join("")}function St(t){return t.available.map((e,s)=>`
    <button onclick="window.__placePart(${s})"
            class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-green transition-all inline-block m-1">
      ${S(e)}
    </button>
  `).join("")}function zt(){let t=window.__pbState,e=document.getElementById("pb-placed"),s=document.getElementById("pb-available");e&&(e.innerHTML=kt(t)),s&&(s.innerHTML=St(t))}var _t=$(()=>{"use strict";w();y();z();X();window.__placePart=t=>{let e=window.__pbState,s=e.available.splice(t,1)[0];e.placed.push(s),zt()};window.__removePart=t=>{let e=window.__pbState,s=e.placed.splice(t,1)[0];e.available.push(s),zt()};window.__checkPromptBuilder=()=>{let t=window.__pbState,e=t.challenges[t.currentChallenge],s=JSON.stringify(t.placed)===JSON.stringify(e.correct),n=s?100:0,r=d();R(r,`s${t.sprintId}-prompt-builder`,n);let i=document.getElementById("pb-result");i&&(i.innerHTML=s?`
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">\u2713 ${a("games.complete")}</div>
          <div class="flex gap-3 justify-center mt-4">
            <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                    class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
              ${a("games.play-again")}
            </button>
            <a href="#/sprint/${t.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
              ${a("games.back")}
            </a>
          </div>
        </div>
      `:`
        <div class="text-ap-red text-sm mb-2">${a("games.not-quite")}</div>
        <div class="text-ap-text-muted text-xs">${a("games.expected")}</div>
        <div class="code-block text-xs mt-1">${e.correct.map(S).join(`
`)}</div>
      `)}});var Lt={};j(Lt,{renderRoadmap:()=>te});async function te(){let t=d(),e=await P("sprints.json"),s=x(),n=e.map(i=>{let c=s==="zh"?i.titleZh:i.title,o=s==="zh"?i.projectZh:i.project,l=!!t.projects[`s${i.id}`],u=i.id===t.currentSprint,p=i.id>t.currentSprint,g=a("roadmap.locked"),h="text-ap-text-muted",b="border-ap-border",m="border-ap-border";return l?(g=a("roadmap.complete"),h="text-ap-green",b="border-ap-green bg-ap-green-dim",m="border-ap-green"):u&&(g=a("roadmap.active"),h="text-ap-amber",b="border-ap-amber bg-ap-amber-dim"),`
        <div class="flex gap-4 ${p?"opacity-40":""}">
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full border-2 ${b} flex items-center justify-center text-xs font-bold ${l?"text-ap-green":u?"text-ap-amber":"text-ap-text-muted"}">
              ${l?"\u2713":i.id}
            </div>
            ${i.id<6?`<div class="w-0 h-12 border-l-2 border-dashed ${m}"></div>`:""}
          </div>
          <div class="pb-8 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-ap-text font-bold text-sm">Sprint ${i.id}: ${c}</span>
              <span class="${h} text-xs">${g}</span>
            </div>
            <div class="text-ap-text-muted text-xs">Weeks ${i.weeks} \u2014 ${o}</div>
            ${u?`<a href="#/sprint/${i.id}" class="text-ap-green text-xs hover:underline mt-1 inline-block">View Sprint \u2192</a>`:""}
          </div>
        </div>
      `}).join(""),r="";try{let i=await P("bonus-projects.json"),c={easy:"text-ap-green bg-ap-green-dim",medium:"text-ap-amber bg-ap-amber-dim",hard:"text-ap-red bg-ap-red-dim"};r=i.map(o=>{let l=s==="zh"?o.titleZh:o.title,u=s==="zh"?o.descriptionZh:o.description,p=t.bonusProjects[o.id];return`
        <div class="terminal-card p-3">
          <div class="flex items-center justify-between mb-1">
            <span class="text-ap-text font-bold text-sm">${l}</span>
            <span class="${c[o.difficulty]} text-xs px-2 py-0.5 rounded">${o.difficulty}</span>
          </div>
          <div class="text-ap-text-muted text-xs mb-2">${u}</div>
          <div class="flex items-center justify-between">
            <div class="flex gap-1 flex-wrap">${o.skills.map(g=>`<span class="text-ap-indigo text-xs bg-ap-indigo-dim px-1.5 py-0.5 rounded">${g}</span>`).join("")}</div>
            ${p?p==="in-progress"?`<button onclick="window.__completeBonus('${o.id}')" class="text-ap-amber text-xs border border-ap-amber rounded px-2 py-1 hover:bg-ap-amber-dim">Complete</button>`:'<span class="text-ap-green text-xs">\u2713 Done (+200 XP)</span>':`<button onclick="window.__startBonus('${o.id}')" class="text-ap-green text-xs border border-ap-green rounded px-2 py-1 hover:bg-ap-green-dim">Start</button>`}
          </div>
        </div>
      `}).join("")}catch{}return`
    <div class="text-ap-green text-sm mb-1">$ agentpath roadmap</div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${a("roadmap.title")}</h1>
    <div class="ml-2">${n}</div>

    ${r?`
    <div class="mt-10">
      <div class="text-ap-green text-sm mb-1">$ agentpath bonus --list</div>
      <h2 class="text-ap-text text-lg font-bold mb-4">Bonus Projects (12)</h2>
      <div class="flex flex-col gap-3">${r}</div>
    </div>
    `:""}
  `}var Pt=$(()=>{"use strict";w();y();z();window.__startBonus=t=>{let e=d();F(e,t,"in-progress"),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__completeBonus=t=>{let e=d();F(e,t,"complete"),window.dispatchEvent(new HashChangeEvent("hashchange"))}});function Et(t,e=5){let s=[{key:"python",label:"Python"},{key:"llm-apis",label:"LLM APIs"},{key:"agent-frameworks",label:"Agents"},{key:"rag",label:"RAG"},{key:"mcp",label:"MCP"},{key:"multi-agent",label:"Multi-Agent"}],n=150,r=150,i=100,c=s.length;function o(m,f){let v=(m-90)*(Math.PI/180);return[n+f*Math.cos(v),r+f*Math.sin(v)]}let u=[.2,.4,.6,.8,1].map(m=>`<polygon points="${s.map((v,k)=>{let M=360/c*k;return o(M,i*m).join(",")}).join(" ")}" fill="none" stroke="#334155" stroke-width="0.5"/>`).join(""),p=s.map((m,f)=>{let v=360/c*f,[k,M]=o(v,i);return`<line x1="${n}" y1="${r}" x2="${k}" y2="${M}" stroke="#334155" stroke-width="0.5"/>`}).join(""),g=s.map((m,f)=>{let v=(t[m.key]||0)/e,k=360/c*f;return o(k,i*v).join(",")}).join(" "),h=s.map((m,f)=>{let v=360/c*f,[k,M]=o(v,i+20),G=k<n-10?"end":k>n+10?"start":"middle",Bt=t[m.key]||0;return`<text x="${k}" y="${M}" text-anchor="${G}" fill="#94a3b8" font-size="10" font-family="monospace">${m.label} (${Bt})</text>`}).join(""),b=s.map((m,f)=>{let v=(t[m.key]||0)/e,k=360/c*f,[M,G]=o(k,i*v);return`<circle cx="${M}" cy="${G}" r="3" fill="#00ff88"/>`}).join("");return`
    <svg viewBox="0 0 300 300" width="300" height="300" class="mx-auto" role="img" aria-label="Skills radar chart">
      <title>Skills Radar</title>
      ${u}
      ${p}
      <polygon points="${g}" fill="rgba(0,255,136,0.15)" stroke="#00ff88" stroke-width="1.5"/>
      ${b}
      ${h}
    </svg>
  `}var Mt=$(()=>{"use strict"});function Ct(t,e){let s=x(),n=s==="zh"?t.nameZh:t.name,r=s==="zh"?t.descZh:t.desc,i=t.type==="project"?"\u{1F3C6}":"\u2B50";return`
    <div class="${e?"badge-earned":"badge-locked"} rounded-lg p-3 text-center">
      <div class="text-lg mb-1">${e?i:"\u{1F512}"}</div>
      <div class="text-xs font-bold">${n}</div>
      <div class="text-xs opacity-70 mt-1">${r}</div>
    </div>
  `}var Tt=$(()=>{"use strict";y()});var At={};j(At,{renderProfile:()=>ee});async function ee(){let t=d(),e=await P("badges.json"),s=x(),n=N(t),r=s==="zh"?n.current.title.split(" ")[0]:n.current.titleEn,i=e.map(u=>Ct(u,t.badges.includes(u.id))).join(""),c=Object.values(t.projects).filter(Boolean).length,o=Object.keys(t.lessons).length+Object.keys(t.milestones).length,l="";try{let u=await P("next-steps.json"),p={Certification:"text-ap-green bg-ap-green-dim",Community:"text-ap-indigo bg-ap-indigo-dim",Portfolio:"text-ap-amber bg-ap-amber-dim","Personal Brand":"text-ap-amber bg-ap-amber-dim",Networking:"text-ap-indigo bg-ap-indigo-dim","Skill Depth":"text-ap-green bg-ap-green-dim","Emerging Tech":"text-ap-red bg-ap-red-dim",Research:"text-ap-indigo bg-ap-indigo-dim",Career:"text-ap-amber bg-ap-amber-dim",Mastery:"text-ap-green bg-ap-green-dim","Deep Understanding":"text-ap-red bg-ap-red-dim"};l=u.map((g,h)=>{let b=s==="zh"?g.titleZh:g.title,m=s==="zh"?g.descriptionZh:g.description,f=s==="zh"?g.categoryZh:g.category,v=p[g.category]||"text-ap-text-muted bg-ap-surface";return`
        <div class="terminal-card p-3">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-ap-green text-xs font-bold">${String(h+1).padStart(2,"0")}.</span>
            <span class="text-ap-text font-bold text-sm">${b}</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <span class="${v} text-xs px-1.5 py-0.5 rounded">${f}</span>
            ${g.url?`<a href="${g.url}" target="_blank" rel="noopener" class="text-ap-indigo text-xs hover:underline">Link \u2192</a>`:""}
          </div>
          <div class="text-ap-text-muted text-xs">${m}</div>
        </div>
      `}).join("")}catch{}return`
    <div class="text-ap-green text-sm mb-1">$ agentpath profile</div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-12 h-12 rounded-full bg-ap-green-dim border border-ap-green flex items-center justify-center text-ap-green font-bold text-lg">${t.level}</div>
      <div>
        <div class="text-ap-text font-bold">${a("dash.level")} ${t.level}: ${r}</div>
        <div class="text-ap-text-dim text-xs">${t.xp.toLocaleString()} ${a("dash.xp")}</div>
      </div>
    </div>

    <!-- Skills Radar -->
    <div class="terminal-card mb-6">
      <div class="terminal-card-header">
        <div class="terminal-dot terminal-dot-red"></div>
        <div class="terminal-dot terminal-dot-yellow"></div>
        <div class="terminal-dot terminal-dot-green"></div>
        <span class="text-ap-text-muted text-xs ml-2">${a("profile.skills")}</span>
      </div>
      <div class="p-4">${Et(t.skills)}</div>
    </div>

    <!-- Badges -->
    <div class="mb-6">
      <div class="text-ap-green text-xs font-bold uppercase mb-3">${a("profile.badges")}</div>
      <div class="grid grid-cols-3 gap-2">${i}</div>
    </div>

    <!-- Stats -->
    <div class="terminal-card mb-6">
      <div class="p-4">
        <div class="text-ap-green text-xs font-bold uppercase mb-3">${a("profile.stats")}</div>
        <div class="grid grid-cols-2 gap-3">
          <div class="text-center">
            <div class="text-ap-green text-xl font-bold">${t.xp.toLocaleString()}</div>
            <div class="text-ap-text-muted text-xs">${a("profile.total-xp")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-amber text-xl font-bold">${t.streak}</div>
            <div class="text-ap-text-muted text-xs">${a("profile.longest-streak")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${c}</div>
            <div class="text-ap-text-muted text-xs">${a("profile.projects-done")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${o}</div>
            <div class="text-ap-text-muted text-xs">${a("profile.days-active")}</div>
          </div>
        </div>
      </div>
    </div>

    ${l?`
    <!-- Next Steps -->
    <div class="mb-6">
      <div class="text-ap-green text-xs font-bold uppercase mb-3">Next Steps \u2014 Keep Growing</div>
      <div class="flex flex-col gap-2">${l}</div>
    </div>
    `:""}

    <!-- Export -->
    <button onclick="window.__exportResume()"
            class="w-full border border-ap-green text-ap-green py-3 rounded text-sm hover:bg-ap-green-dim transition-colors">
      ${a("profile.export")}
    </button>
  `}var qt=$(()=>{"use strict";w();y();z();Mt();Tt();window.__exportResume=()=>{let t=d(),e=N(t),s=`AgentPath \u667A\u8DEF \u2014 Skills Summary
Level: ${t.level} (${e.current.titleEn})
XP: ${t.xp}
Skills: Python ${t.skills.python}/5, LLM APIs ${t.skills["llm-apis"]}/5, Agent Frameworks ${t.skills["agent-frameworks"]}/5, RAG ${t.skills.rag}/5, MCP ${t.skills.mcp}/5, Multi-Agent ${t.skills["multi-agent"]}/5`;navigator.clipboard.writeText(s).then(()=>{alert("Copied to clipboard!")})}});var J=[];function C(t,e){let s=[],n=new RegExp("^"+t.replace(/:(\w+)/g,(r,i)=>(s.push(i),"([^/]+)")).replace(/\//g,"\\/")+"$");J.push({pattern:n,keys:s,handler:e})}function Dt(t){window.location.hash=t}function U(){let t=()=>{let e=window.location.hash.slice(1)||"/";for(let s of J){let n=e.match(s.pattern);if(n){let r={};s.keys.forEach((i,c)=>{r[i]=n[c+1]}),s.handler(r);return}}Dt("/")};window.addEventListener("hashchange",t),t()}w();y();z();y();w();var O=[{id:"dashboard",path:"/",icon:"\u2302",key:"nav.dashboard"},{id:"sprint",path:"/sprint/1",icon:"\u25B6",key:"nav.sprint"},{id:"games",path:"/sprint/1/games",icon:"\u25C6",key:"nav.games"},{id:"roadmap",path:"/roadmap",icon:"\u25C7",key:"nav.roadmap"},{id:"profile",path:"/profile",icon:"\u25CB",key:"nav.profile"}];function Nt(){let t=window.location.hash.slice(1)||"/";return t==="/"?"dashboard":t.includes("/games")?"games":t.includes("/sprint")?"sprint":t.includes("/roadmap")?"roadmap":t.includes("/profile")?"profile":"dashboard"}function rt(){let t=d(),e=Nt(),s=t.currentSprint;return O[1].path=`/sprint/${s}`,O[2].path=`/sprint/${s}/games`,`
    <nav aria-label="Main navigation" class="fixed bottom-0 left-0 right-0 bg-ap-surface border-t border-ap-border nav-bottom z-50
                md:fixed md:top-0 md:left-0 md:bottom-0 md:w-48 md:border-t-0 md:border-r md:flex-col">
      <div class="flex justify-around md:flex-col md:justify-start md:pt-6 md:gap-1">
        ${O.map(r=>`
      <button
        onclick="window.location.hash='${r.path}'"
        aria-label="${a(r.key)}"
        ${e===r.id?'aria-current="page"':""}
        class="flex flex-col items-center gap-1 py-2 px-3 text-xs transition-colors
          ${e===r.id?"text-ap-green":"text-ap-text-muted hover:text-ap-text-dim"}"
      >
        <span class="text-lg" aria-hidden="true">${r.icon}</span>
        <span>${a(r.key)}</span>
      </button>
    `).join("")}
      </div>
    </nav>
  `}function it(){return"pb-20 md:pb-0 md:pl-48"}var W=document.getElementById("app");function K(t){return`
    <div class="${it()} min-h-screen">
      <header class="flex items-center justify-between px-4 py-3 border-b border-ap-border md:ml-0">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 70 20" width="56" height="16" class="inline-block" role="img" aria-label="AgentPath logo">
            <title>AgentPath</title>
            <circle cx="8" cy="10" r="6" fill="#00ff88" opacity="0.3" stroke="#00ff88" stroke-width="1"/>
            <circle cx="8" cy="10" r="2" fill="#00ff88"/>
            <line x1="14" y1="10" x2="26" y2="10" stroke="#00ff88" stroke-width="1" stroke-dasharray="2,2"/>
            <circle cx="32" cy="10" r="4" fill="none" stroke="#00ff88" stroke-width="1"/>
            <line x1="36" y1="10" x2="48" y2="10" stroke="#00ff88" stroke-width="1" stroke-dasharray="2,2"/>
            <circle cx="54" cy="10" r="4" fill="none" stroke="#00ff88" stroke-width="1"/>
          </svg>
          <span class="text-ap-text font-bold text-sm">AgentPath</span>
          <span class="text-ap-green text-xs opacity-70">\u667A\u8DEF</span>
        </div>
        <button onclick="window.__toggleLang()" aria-label="Toggle language" class="text-ap-text-muted text-xs border border-ap-border rounded px-2 py-1 hover:text-ap-green hover:border-ap-green transition-colors">
          ${x()==="en"?"\u4E2D\u6587":"EN"}
        </button>
      </header>
      <main class="p-4 max-w-3xl mx-auto">
        ${t}
      </main>
    </div>
    ${rt()}
  `}function E(t){W.innerHTML=K(t)}function q(){W.innerHTML=K(`
    <div class="flex items-center justify-center py-20">
      <div class="text-ap-green text-sm glow-green">Loading...</div>
    </div>
  `)}function B(t){W.innerHTML=K(`
    <div class="terminal-card p-6 text-center">
      <div class="text-ap-red text-lg font-bold mb-2">Error</div>
      <div class="text-ap-text-dim text-sm">${t}</div>
      <a href="#/" class="text-ap-green text-sm hover:underline mt-4 inline-block">\u2190 Back to Dashboard</a>
    </div>
  `)}window.__toggleLang=()=>{nt(),at(),window.dispatchEvent(new HashChangeEvent("hashchange"))};st();var se=d();A(se);C("/",async()=>{q();try{let{renderDashboard:t}=await Promise.resolve().then(()=>(ct(),lt));E(await t())}catch{B("Failed to load dashboard")}});C("/sprint/:id",async t=>{q();try{let{renderSprint:e}=await Promise.resolve().then(()=>(pt(),dt));E(await e(Number(t.id)))}catch{B("Failed to load sprint")}});C("/sprint/:id/lesson/:num",async t=>{q();try{let{renderLesson:e}=await Promise.resolve().then(()=>(gt(),mt));E(await e(Number(t.id),t.num))}catch{B("Failed to load lesson")}});C("/sprint/:id/project",async t=>{q();try{let{renderProject:e}=await Promise.resolve().then(()=>(ut(),xt));E(await e(Number(t.id)))}catch{B("Failed to load project")}});C("/sprint/:id/games",t=>{Promise.resolve().then(()=>(vt(),ht)).then(({renderGames:e})=>{E(e(Number(t.id)))})});C("/sprint/:id/games/:game",async t=>{q();try{let e=Number(t.id),s=t.game;if(s==="flash-match"){let{renderFlashMatch:n}=await Promise.resolve().then(()=>(bt(),ft));E(await n(e))}else if(s==="concept-quiz"){let{renderConceptQuiz:n}=await Promise.resolve().then(()=>(wt(),yt));E(await n(e))}else if(s==="prompt-builder"){let{renderPromptBuilder:n}=await Promise.resolve().then(()=>(_t(),jt));E(await n(e))}}catch{B("Failed to load game")}});C("/roadmap",async()=>{q();try{let{renderRoadmap:t}=await Promise.resolve().then(()=>(Pt(),Lt));E(await t())}catch{B("Failed to load roadmap")}});C("/profile",async()=>{q();try{let{renderProfile:t}=await Promise.resolve().then(()=>(qt(),At));E(await t())}catch{B("Failed to load profile")}});U();})();
