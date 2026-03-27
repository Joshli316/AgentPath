"use strict";(()=>{var Dt=Object.defineProperty;var w=(t,e)=>()=>(t&&(e=t(t=0)),e);var L=(t,e)=>{for(var s in e)Dt(t,s,{get:e[s],enumerable:!0})};function p(){try{let t=localStorage.getItem(tt);if(t)return{...I,...JSON.parse(t)}}catch{}return{...I}}function q(t){localStorage.setItem(tt,JSON.stringify(t))}function F(t,e){t.xp+=e;for(let s=G.length-1;s>=0;s--)if(t.xp>=G[s].xp){t.level=G[s].level;break}return q(t),t}function B(t){let e=new Date().toISOString().split("T")[0];if(t.lastActiveDate===e)return t;let s=new Date(Date.now()-864e5).toISOString().split("T")[0];return t.lastActiveDate===s?t.streak+=1:t.lastActiveDate!==e&&(t.streak=1),t.lastActiveDate=e,q(t),t}function et(t,e){return t.lessons[e]||(t.lessons[e]=!0,F(t,50),B(t)),t}function st(t,e){return t.milestones[e]||(t.milestones[e]=!0,F(t,100),B(t)),t}function nt(t,e){if(!t.projects[e]){t.projects[e]=!0,F(t,300);let s={s1:"first-agent",s2:"orchestrator",s3:"rag-master",s4:"protocol-builder",s5:"commander",s6:"graduate"};s[e]&&!t.badges.includes(s[e])&&t.badges.push(s[e]),B(t)}return t}function N(t,e,s){let a=Math.min(50,Math.max(10,Math.round(s/2))),r=t.games[e]||{bestScore:0,plays:0};if(t.games[e]={bestScore:Math.max(r.bestScore,s),plays:r.plays+1},s===100){let o={"s1-concept-quiz":"api-master","s2-concept-quiz":"framework-king","s3-concept-quiz":"vector-hero","s4-concept-quiz":"mcp-pro","s5-concept-quiz":"monitor-king","s6-concept-quiz":"interview-pro"};o[e]&&!t.badges.includes(o[e])&&t.badges.push(o[e])}return F(t,a),B(t),t}function X(t,e,s){return t.bonusProjects[e]=s,s==="complete"?(F(t,200),B(t)):q(t),t}function O(t){let e=G.find(r=>r.level===t.level),s=G.find(r=>r.level===t.level+1),a=s?(t.xp-e.xp)/(s.xp-e.xp)*100:100;return{current:e,next:s,progress:a}}var tt,I,G,S=w(()=>{"use strict";tt="agentpath",I={currentSprint:1,currentDay:1,xp:0,level:1,streak:0,lastActiveDate:"",lessons:{},milestones:{},projects:{},games:{},badges:[],skills:{python:0,"llm-apis":0,"agent-frameworks":0,rag:0,mcp:0,"multi-agent":0},lang:"en",bonusProjects:{}},G=[{level:1,title:"\u65B0\u624B Novice",titleEn:"Novice",xp:0},{level:2,title:"\u5B66\u5F92 Apprentice",titleEn:"Apprentice",xp:1e3},{level:3,title:"\u6784\u5EFA\u8005 Builder",titleEn:"Builder",xp:3e3},{level:4,title:"\u5DE5\u5320 Craftsman",titleEn:"Craftsman",xp:6e3},{level:5,title:"\u67B6\u6784\u5E08 Architect",titleEn:"Architect",xp:1e4},{level:6,title:"\u667A\u8005 Agent Master",titleEn:"Agent Master",xp:15e3}]});function at(){Z=p().lang,document.documentElement.lang=Z}function n(t,e){let s=Zt[t];if(!s)return t;let a=s[Z]||s.en||t;if(e)for(let[r,o]of Object.entries(e))a=a.replace(`{${r}}`,String(o));return a}function $(){return Z}function Gt(t){Z=t,document.documentElement.lang=t;let e=p();e.lang=t,q(e)}function rt(){Gt(Z==="en"?"zh":"en")}var Zt,Z,k=w(()=>{"use strict";S();Zt={"nav.dashboard":{en:"Dashboard",zh:"\u4EEA\u8868\u76D8"},"nav.sprint":{en:"Sprint",zh:"\u51B2\u523A"},"nav.games":{en:"Games",zh:"\u6E38\u620F"},"nav.roadmap":{en:"Roadmap",zh:"\u8DEF\u7EBF\u56FE"},"nav.profile":{en:"Profile",zh:"\u4E2A\u4EBA"},"dash.today":{en:"Today",zh:"\u4ECA\u5929"},"dash.current-sprint":{en:"Current Sprint",zh:"\u5F53\u524D\u51B2\u523A"},"dash.day-of":{en:"Day {n} of 10",zh:"\u7B2C{n}\u5929 / \u517110\u5929"},"dash.xp":{en:"XP",zh:"\u7ECF\u9A8C\u503C"},"dash.streak":{en:"day streak",zh:"\u5929\u8FDE\u7EED"},"dash.level":{en:"Level",zh:"\u7B49\u7EA7"},"sprint.objectives":{en:"Sprint Objectives",zh:"\u51B2\u523A\u76EE\u6807"},"sprint.lesson":{en:"Lesson",zh:"\u8BFE\u7A0B"},"sprint.project":{en:"Project",zh:"\u9879\u76EE"},"sprint.review":{en:"Review & Games",zh:"\u590D\u4E60\u4E0E\u6E38\u620F"},"lesson.complete":{en:"Mark Complete",zh:"\u6807\u8BB0\u5B8C\u6210"},"lesson.completed":{en:"Completed",zh:"\u5DF2\u5B8C\u6210"},"lesson.try-it":{en:"Try it in iTerm",zh:"\u5728iTerm\u4E2D\u8BD5\u8BD5"},"lesson.key-terms":{en:"Key Terms",zh:"\u5173\u952E\u672F\u8BED"},"lesson.min":{en:"min",zh:"\u5206\u949F"},"project.milestones":{en:"Milestones",zh:"\u91CC\u7A0B\u7891"},"project.stuck":{en:"Stuck? Get a hint",zh:"\u5361\u4F4F\u4E86\uFF1F\u83B7\u53D6\u63D0\u793A"},"project.hint":{en:"Hint",zh:"\u63D0\u793A"},"project.stretch":{en:"Stretch Goals",zh:"\u989D\u5916\u76EE\u6807"},"project.complete":{en:"Project Complete!",zh:"\u9879\u76EE\u5B8C\u6210\uFF01"},"project.mark-complete":{en:"Mark Project Complete",zh:"\u6807\u8BB0\u9879\u76EE\u5B8C\u6210"},"games.select":{en:"Choose a Game",zh:"\u9009\u62E9\u6E38\u620F"},"games.flash-match":{en:"Flash Match",zh:"\u95EA\u914D"},"games.concept-quiz":{en:"Concept Quiz",zh:"\u6982\u5FF5\u6D4B\u9A8C"},"games.prompt-builder":{en:"Prompt Builder",zh:"\u63D0\u793A\u6784\u5EFA"},"games.score":{en:"Score",zh:"\u5F97\u5206"},"games.best":{en:"Best",zh:"\u6700\u4F73"},"games.play-again":{en:"Play Again",zh:"\u518D\u73A9\u4E00\u6B21"},"games.back":{en:"Back to Games",zh:"\u8FD4\u56DE\u6E38\u620F"},"roadmap.title":{en:"Your 12-Week Journey",zh:"\u4F60\u768412\u5468\u65C5\u7A0B"},"roadmap.locked":{en:"Locked",zh:"\u672A\u89E3\u9501"},"roadmap.active":{en:"Active",zh:"\u8FDB\u884C\u4E2D"},"roadmap.complete":{en:"Complete",zh:"\u5DF2\u5B8C\u6210"},"profile.skills":{en:"Skills Radar",zh:"\u6280\u80FD\u96F7\u8FBE"},"profile.badges":{en:"Badges",zh:"\u5FBD\u7AE0"},"profile.stats":{en:"Stats",zh:"\u7EDF\u8BA1"},"profile.export":{en:"Export for Resume",zh:"\u5BFC\u51FA\u7B80\u5386"},"profile.total-xp":{en:"Total XP",zh:"\u603B\u7ECF\u9A8C\u503C"},"profile.projects-done":{en:"Projects Done",zh:"\u5B8C\u6210\u9879\u76EE"},"profile.days-active":{en:"Days Active",zh:"\u6D3B\u8DC3\u5929\u6570"},"profile.longest-streak":{en:"Longest Streak",zh:"\u6700\u957F\u8FDE\u7EED"},"profile.next-steps":{en:"Next Steps \u2014 Keep Growing",zh:"\u4E0B\u4E00\u6B65\u2014\u2014\u7EE7\u7EED\u6210\u957F"},"games.match-instruction":{en:"Tap a term, then tap its matching definition.",zh:"\u70B9\u51FB\u672F\u8BED\uFF0C\u7136\u540E\u70B9\u51FB\u5339\u914D\u7684\u5B9A\u4E49\u3002"},"games.correct":{en:"Correct!",zh:"\u6B63\u786E\uFF01"},"games.wrong-answer":{en:"Wrong \u2014 the answer is",zh:"\u9519\u8BEF\u2014\u2014\u7B54\u6848\u662F"},"games.next":{en:"Next",zh:"\u4E0B\u4E00\u9898"},"games.complete":{en:"Complete!",zh:"\u5B8C\u6210\uFF01"},"games.time":{en:"Time",zh:"\u7528\u65F6"},"games.attempts":{en:"Attempts",zh:"\u5C1D\u8BD5\u6B21\u6570"},"games.correct-count":{en:"correct",zh:"\u6B63\u786E"},"games.match-desc":{en:"Match terms to definitions",zh:"\u5C06\u672F\u8BED\u4E0E\u5B9A\u4E49\u5339\u914D"},"games.quiz-desc":{en:"Test your knowledge",zh:"\u6D4B\u8BD5\u4F60\u7684\u77E5\u8BC6"},"games.builder-desc":{en:"Assemble API calls",zh:"\u7EC4\u88C5API\u8C03\u7528"},"games.check":{en:"Check",zh:"\u68C0\u67E5"},"games.not-quite":{en:"Not quite \u2014 try rearranging the parts.",zh:"\u4E0D\u592A\u5BF9\u2014\u2014\u8BD5\u8BD5\u91CD\u65B0\u6392\u5217\u3002"},"games.expected":{en:"Expected:",zh:"\u9884\u671F\uFF1A"},"games.available-parts":{en:"Available parts:",zh:"\u53EF\u7528\u90E8\u5206\uFF1A"},"games.tap-to-build":{en:"Tap code parts below to build the call...",zh:"\u70B9\u51FB\u4E0B\u65B9\u4EE3\u7801\u7247\u6BB5\u6765\u6784\u5EFA\u8C03\u7528..."},"roadmap.weeks":{en:"Weeks",zh:"\u5468"},"roadmap.bonus-title":{en:"Bonus Projects",zh:"\u989D\u5916\u9879\u76EE"},"roadmap.start":{en:"Start",zh:"\u5F00\u59CB"},"roadmap.mark-complete":{en:"Complete",zh:"\u5B8C\u6210"},"roadmap.done":{en:"Done",zh:"\u5DF2\u5B8C\u6210"},"roadmap.view-sprint":{en:"View Sprint",zh:"\u67E5\u770B\u51B2\u523A"},"dash.xp-to-next":{en:"XP to next",zh:"\u7ECF\u9A8C\u503C\u5230\u4E0B\u4E00\u7EA7"},"sprint.current":{en:"current",zh:"\u5F53\u524D"}},Z="en"});async function E(t){let s=`content/${$()}/${t}`;if(P.has(s))return P.get(s);let a=await fetch(s);if(!a.ok){let o=`content/en/${t}`;if(P.has(o))return P.get(o);let i=await fetch(o);if(!i.ok)throw new Error(`Content not found: ${t}`);let c=await i.json();return P.set(o,c),c}let r=await a.json();return P.set(s,r),r}async function M(t){let e=`content/shared/${t}`;if(P.has(e))return P.get(e);let s=await fetch(e);if(!s.ok)throw new Error(`Shared content not found: ${t}`);let a=await s.json();return P.set(e,a),a}function ot(){P.clear()}var P,j=w(()=>{"use strict";k();P=new Map});function Ot(t,e=20){let s=Math.round(t/100*e),a=e-s;return'<span class="text-ap-green">'+"\u2593".repeat(s)+'</span><span class="text-ap-text-muted">'+"\u2591".repeat(a)+"</span>"}function J(t,e){return`
    <div class="flex items-center gap-3" role="progressbar" aria-valuenow="${Math.round(t)}" aria-valuemin="0" aria-valuemax="100" aria-label="${e||`${Math.round(t)}% complete`}">
      <div class="progress-terminal text-sm whitespace-nowrap" aria-hidden="true">${Ot(t,15)}</div>
      <span class="text-ap-text-dim text-xs">${Math.round(t)}%</span>
      ${e?`<span class="text-ap-text-muted text-xs">${e}</span>`:""}
    </div>
  `}var ct=w(()=>{"use strict"});function l(t){return t.replace(/[&<>"']/g,e=>Qt[e])}function g(t,e){let s=$(),a=`${e}Zh`;return s==="zh"&&a in t?String(t[a]):String(t[e]??"")}function H(t){return`
    <div class="terminal-card-header">
      <div class="terminal-dot terminal-dot-red" aria-hidden="true"></div>
      <div class="terminal-dot terminal-dot-yellow" aria-hidden="true"></div>
      <div class="terminal-dot terminal-dot-green" aria-hidden="true"></div>
      <span class="text-ap-text-muted text-xs ml-2">${l(t)}</span>
    </div>`}var Qt,_=w(()=>{"use strict";k();Qt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}});var dt={};L(dt,{renderDashboard:()=>Xt});async function Xt(){let t=p(),s=(await M("sprints.json"))[t.currentSprint-1],a=$(),r=O(t),o=g(s,"title"),i=g(s,"project"),c=a==="zh"?r.current.title.split(" ")[0]:r.current.titleEn,d=s.days.filter(x=>x.type==="lesson").length,u=s.days.filter(x=>x.type==="lesson").filter(x=>t.lessons[`s${s.id}-${x.ref}`]).length,m=t.projects[`s${s.id}`]||!1,f=Math.round((u+(m?1:0))/(d+1)*100),h=s.days[t.currentDay-1],y="",v="",b="";if(h)if(h.type==="lesson"){let x=h.ref.replace("lesson-","");y=`${n("sprint.lesson")} ${x}`,v="~20 "+n("lesson.min"),b=`#/sprint/${s.id}/lesson/${x}`}else h.type==="project"?(y=i,v="~60 "+n("lesson.min"),b=`#/sprint/${s.id}/project`):(y=n("sprint.review"),v="~30 "+n("lesson.min"),b=`#/sprint/${s.id}/games`);return`
    <!-- Status bar -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <div class="text-ap-green font-bold text-xl glow-green">${t.xp.toLocaleString()} <span class="text-xs font-normal">${n("dash.xp")}</span></div>
        <div class="text-ap-amber font-bold glow-amber">\u{1F525} ${t.streak} <span class="text-xs font-normal">${n("dash.streak")}</span></div>
      </div>
      <div class="text-ap-text-dim text-sm">${n("dash.level")} ${t.level}: ${c}</div>
    </div>

    <!-- Current Sprint Card -->
    <div class="terminal-card mb-6">
      ${H(n("dash.current-sprint"))}
      <div class="p-4">
        <div class="flex items-center gap-2 mb-1">
          <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${s.id}</span>
          <span class="text-ap-text-muted text-xs">${n("dash.day-of",{n:t.currentDay})}</span>
        </div>
        <div class="text-ap-text text-lg font-bold mb-1">${o}</div>
        <div class="text-ap-text-dim text-sm mb-3">${i}</div>
        ${J(f)}
      </div>
    </div>

    <!-- Today's Task -->
    <div class="terminal-card mb-6">
      <div class="p-4">
        <div class="text-ap-green text-xs mb-2">$ agentpath --today</div>
        <a href="${b}" class="flex items-center justify-between group">
          <div>
            <div class="text-ap-text font-bold group-hover:text-ap-green transition-colors">${y}</div>
            <div class="text-ap-text-muted text-xs mt-1">${v}</div>
          </div>
          <span class="text-ap-green text-2xl group-hover:translate-x-1 transition-transform">\u2192</span>
        </a>
      </div>
    </div>

    <!-- Level Progress -->
    <div class="terminal-card">
      <div class="p-4">
        <div class="text-ap-text-dim text-xs mb-2">${n("dash.level")} ${t.level} \u2192 ${r.next?r.next.level:"MAX"}</div>
        ${J(r.progress,r.next?`${r.next.xp-t.xp} ${n("dash.xp-to-next")}`:"MAX LEVEL")}
      </div>
    </div>
  `}var pt=w(()=>{"use strict";S();k();j();ct();_()});var mt={};L(mt,{renderSprint:()=>Kt});async function Kt(t){let e=p(),a=(await M("sprints.json"))[t-1];if(!a)return'<div class="text-ap-red">Sprint not found</div>';let r=g(a,"title"),o=g(a,"project"),i=a.days.map(c=>{let d="\u{1F4D6}",u=n("sprint.lesson"),m=`#/sprint/${t}/lesson/${c.ref.replace("lesson-","")}`,f=!1;c.type==="lesson"?f=!!e.lessons[`s${t}-${c.ref}`]:c.type==="project"?(d="\u{1F528}",u=n("sprint.project"),m=`#/sprint/${t}/project`,f=!!e.projects[`s${t}`]):(d="\u25C6",u=n("sprint.review"),m=`#/sprint/${t}/games`);let h=c.day===e.currentDay&&t===e.currentSprint,y=t>e.currentSprint;return`
        <a href="${y?"#":m}"
           class="terminal-card p-3 flex items-center gap-3 ${h?"ring-1 ring-ap-green":""} ${y?"opacity-40 cursor-not-allowed":"hover:bg-ap-surface-hover cursor-pointer"} transition-colors">
          <div class="text-lg w-8 text-center">${f?'<span class="text-ap-green">\u2713</span>':d}</div>
          <div class="flex-1">
            <div class="text-ap-text text-sm font-bold">${n("dash.day-of",{n:c.day}).split("/")[0].trim()}</div>
            <div class="text-ap-text-muted text-xs">${u}</div>
          </div>
          ${h?`<span class="text-ap-green text-xs">\u2190 ${n("sprint.current")}</span>`:""}
        </a>
      `}).join("");return`
    <div class="text-ap-green text-sm mb-1">$ agentpath sprint ${t}</div>
    <div class="flex items-center gap-2 mb-1">
      <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${t}</span>
      <span class="text-ap-text-muted text-xs">Weeks ${a.weeks}</span>
    </div>
    <h1 class="text-ap-text text-2xl font-bold mb-1">${r}</h1>
    <p class="text-ap-text-dim text-sm mb-6">${n("sprint.project")}: ${o}</p>

    <div class="flex flex-col gap-2">
      ${i}
    </div>
  `}var gt=w(()=>{"use strict";S();k();j();_()});var xt={};L(xt,{renderLesson:()=>Wt});function Jt(t){let e=$();switch(t.type){case"text":return`<div class="text-ap-text text-sm leading-relaxed mb-4">${l(t.content||"")}</div>`;case"code":return`
        <div class="code-block mb-4">
          <div class="text-ap-text-muted text-xs mb-2">${l(t.language||"code")}</div>
          <pre><code>${l(t.content||"")}</code></pre>
        </div>
      `;case"callout":{let s={tip:"border-ap-green bg-ap-green-dim",warning:"border-ap-amber bg-ap-amber-dim",info:"border-ap-indigo bg-ap-indigo-dim"},a={tip:"\u{1F4A1}",warning:"\u26A0\uFE0F",info:"\u2139\uFE0F"},r=t.variant||"info";return`
        <div class="border-l-2 ${s[r]} p-3 rounded-r mb-4">
          <div class="text-sm">${a[r]} ${l(t.content||"")}</div>
        </div>
      `}case"try-it":return`
        <div class="terminal-card mb-4">
          ${H("iTerm")}
          <div class="p-3">
            <div class="text-ap-green text-xs mb-2">$ ${n("lesson.try-it")}</div>
            <div class="text-ap-text text-sm font-mono">${l(t.prompt||"")}</div>
          </div>
        </div>
      `;case"key-terms":return`
        <div class="mb-4">
          <div class="text-ap-green text-xs font-bold mb-2 uppercase">${n("lesson.key-terms")}</div>
          <div class="flex flex-col gap-2">
            ${(t.terms||[]).map(s=>`
              <div class="terminal-card p-2">
                <span class="text-ap-green font-bold text-sm">${l(e==="zh"?s.termZh:s.term)}</span>
                <span class="text-ap-text-muted text-xs ml-2">\u2014 ${l(e==="zh"?s.definitionZh:s.definition)}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;default:return""}}async function Wt(t,e){let s=p(),a=await E(`sprint-${t}/lesson-${e.padStart(2,"0")}.json`),r=g(a,"title"),o=`s${t}-lesson-${e.padStart(2,"0")}`,i=!!s.lessons[o],c=a.steps.map(Jt).join("");return`
    <a href="#/sprint/${t}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${t}</a>
    <div class="flex items-center gap-3 mt-3 mb-1">
      <span class="text-ap-green text-xs">${n("sprint.lesson")} ${e}</span>
      <span class="text-ap-text-muted text-xs">~${a.duration} ${n("lesson.min")}</span>
    </div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${r}</h1>

    ${c}

    <div class="mt-8 mb-4">
      ${i?`<div class="text-ap-green text-sm font-bold">\u2713 ${n("lesson.completed")} (+50 XP)</div>`:`<button onclick="window.__completeLesson('${o}', ${t})"
               class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
               ${n("lesson.complete")}
             </button>`}
    </div>
  `}var ut=w(()=>{"use strict";S();k();j();_();window.__completeLesson=(t,e)=>{let s=p();if(et(s,t),e===s.currentSprint){let a=Object.keys(s.lessons).filter(r=>r.startsWith(`s${e}-`)).length;s.currentDay=Math.min(a+1,10),q(s)}window.dispatchEvent(new HashChangeEvent("hashchange"))}});var ht={};L(ht,{renderProject:()=>Ut});async function Ut(t){let e=p(),s=await E(`sprint-${t}/project.json`),a=$(),r=g(s,"title"),o=g(s,"description"),i=`s${t}`,c=!!e.projects[i],d=s.milestones.every(h=>!!e.milestones[`${i}-${h.id}`]),u=s.milestones.map(h=>{let y=`${i}-${h.id}`,v=!!e.milestones[y],b=g(h,"label"),x=s.hints[h.id]||[];return`
        <div class="terminal-card p-3 mb-2">
          <div class="flex items-center gap-3">
            <button onclick="window.__toggleMilestone('${y}', ${t})"
                    class="w-5 h-5 border ${v?"bg-ap-green border-ap-green text-ap-bg":"border-ap-text-muted"} rounded text-xs flex items-center justify-center flex-shrink-0">
              ${v?"\u2713":""}
            </button>
            <span class="text-sm ${v?"text-ap-text-dim line-through":"text-ap-text"}">${l(b)}</span>
          </div>
          ${!v&&x.length>0?`<details class="mt-2 ml-8">
                  <summary class="text-ap-amber text-xs cursor-pointer hover:underline">${n("project.stuck")}</summary>
                  <div class="mt-2 flex flex-col gap-1">
                    ${x.map((z,T)=>`<div class="text-ap-text-dim text-xs">\u{1F4A1} ${n("project.hint")} ${T+1}: ${l(z)}</div>`).join("")}
                  </div>
                </details>`:""}
        </div>
      `}).join(""),f=(a==="zh"?s.stretchZh:s.stretch).map(h=>`<li class="text-ap-text-dim text-sm">${l(h)}</li>`).join("");return`
    <a href="#/sprint/${t}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${t}</a>
    <div class="text-ap-green text-xs mt-3 mb-1">$ agentpath project --sprint ${t}</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${l(r)}</h1>
    <p class="text-ap-text-dim text-sm mb-6">${l(o)}</p>

    <div class="text-ap-green text-xs font-bold uppercase mb-3">${n("project.milestones")}</div>
    ${u}

    ${d&&!c?`<button onclick="window.__completeProject('${i}', ${t})"
             class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm mt-4 hover:opacity-90 transition-opacity">
             ${n("project.mark-complete")}
           </button>`:""}
    ${c?`<div class="text-ap-green font-bold text-sm mt-4">\u2713 ${n("project.complete")} (+300 XP)</div>`:""}

    <div class="mt-8">
      <div class="text-ap-amber text-xs font-bold uppercase mb-2">${n("project.stretch")}</div>
      <ul class="list-disc list-inside flex flex-col gap-1">${f}</ul>
    </div>
  `}var vt=w(()=>{"use strict";S();k();j();_();window.__toggleMilestone=(t,e)=>{let s=p();s.milestones[t]||st(s,t),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__completeProject=(t,e)=>{let s=p();nt(s,t),window.dispatchEvent(new HashChangeEvent("hashchange"))}});var ft={};L(ft,{renderGames:()=>Vt});function Vt(t){let e=p(),a=[{id:"flash-match",icon:"\u26A1",name:n("games.flash-match"),desc:n("games.match-desc"),route:`#/sprint/${t}/games/flash-match`,best:e.games[`s${t}-flash-match`]?.bestScore},{id:"concept-quiz",icon:"\u{1F9E0}",name:n("games.concept-quiz"),desc:n("games.quiz-desc"),route:`#/sprint/${t}/games/concept-quiz`,best:e.games[`s${t}-concept-quiz`]?.bestScore},{id:"prompt-builder",icon:"\u{1F527}",name:n("games.prompt-builder"),desc:n("games.builder-desc"),route:`#/sprint/${t}/games/prompt-builder`,best:e.games[`s${t}-prompt-builder`]?.bestScore}].map(r=>`
    <a href="${r.route}" class="terminal-card p-4 hover:bg-ap-surface-hover transition-colors block">
      <div class="flex items-center gap-3">
        <div class="text-2xl">${r.icon}</div>
        <div class="flex-1">
          <div class="text-ap-text font-bold text-sm">${r.name}</div>
          <div class="text-ap-text-muted text-xs">${r.desc}</div>
        </div>
        ${r.best!==void 0?`<div class="text-ap-green text-xs">${n("games.best")}: ${r.best}%</div>`:""}
      </div>
    </a>
  `).join("");return`
    <a href="#/sprint/${t}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${t}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath games --sprint ${t}</div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${n("games.select")}</h1>
    <div class="flex flex-col gap-3">${a}</div>
  `}var bt=w(()=>{"use strict";S();k()});var $t={};L($t,{renderFlashMatch:()=>Yt});async function Yt(t){let e=await E(`sprint-${t}/games.json`),s=$(),o=[...e["flash-match"].pairs].sort(()=>Math.random()-.5).slice(0,6),i=o.map((m,f)=>({id:f,text:s==="zh"?m.termZh:m.term})),c=[...o].sort(()=>Math.random()-.5).map(m=>({id:o.indexOf(m),text:s==="zh"?m.definitionZh:m.definition}));window.__flashMatchState={sprintId:t,selectedTerm:null,matched:new Set,attempts:0,startTime:Date.now(),total:o.length};let d=i.map(m=>`
    <button id="term-${m.id}" onclick="window.__selectTerm(${m.id})"
            class="terminal-card p-2 text-left text-sm text-ap-green hover:bg-ap-green-dim transition-colors">
      ${l(m.text)}
    </button>
  `).join(""),u=c.map(m=>`
    <button id="def-${m.id}" onclick="window.__selectDef(${m.id})"
            class="terminal-card p-2 text-left text-sm text-ap-text hover:bg-ap-surface-hover transition-colors">
      ${l(m.text)}
    </button>
  `).join("");return`
    <a href="#/sprint/${t}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${n("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath flash-match</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${n("games.flash-match")}</h1>
    <p class="text-ap-text-muted text-xs mb-6">${n("games.match-instruction")}</p>

    <div id="flash-match-area" class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">${d}</div>
      <div class="flex flex-col gap-2">${u}</div>
    </div>
    <div id="flash-match-result" class="mt-6 hidden"></div>
  `}var yt=w(()=>{"use strict";S();k();j();_();window.__selectTerm=t=>{let e=window.__flashMatchState;e.matched.has(t)||(document.querySelectorAll("[id^='term-']").forEach(s=>s.classList.remove("ring-1","ring-ap-green")),document.getElementById(`term-${t}`)?.classList.add("ring-1","ring-ap-green"),e.selectedTerm=t)};window.__selectDef=t=>{let e=window.__flashMatchState;if(e.selectedTerm===null||e.matched.has(t))return;e.attempts++;let s=document.getElementById(`term-${e.selectedTerm}`),a=document.getElementById(`def-${t}`);if(e.selectedTerm===t){if(e.matched.add(t),s?.classList.add("opacity-30"),a?.classList.add("opacity-30"),s?.classList.remove("ring-1","ring-ap-green"),e.selectedTerm=null,e.matched.size===e.total){let r=Math.round((Date.now()-e.startTime)/1e3),o=Math.round(e.total/e.attempts*100),i=Math.min(100,o),c=p();N(c,`s${e.sprintId}-flash-match`,i);let d=document.getElementById("flash-match-result");d&&(d.classList.remove("hidden"),d.innerHTML=`
          <div class="terminal-card p-4 text-center">
            <div class="text-ap-green text-2xl font-bold glow-green mb-2">\u2713 ${n("games.complete")}</div>
            <div class="text-ap-text text-sm">${n("games.score")}: ${i}% | ${n("games.time")}: ${r}s | ${n("games.attempts")}: ${e.attempts}</div>
            <div class="flex gap-3 justify-center mt-4">
              <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                      class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
                ${n("games.play-again")}
              </button>
              <a href="#/sprint/${e.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
                ${n("games.back")}
              </a>
            </div>
          </div>
        `)}}else a?.classList.add("border-ap-red"),setTimeout(()=>a?.classList.remove("border-ap-red"),500),s?.classList.remove("ring-1","ring-ap-green"),e.selectedTerm=null}});var kt={};L(kt,{renderConceptQuiz:()=>It});async function It(t){let e=await E(`sprint-${t}/games.json`),s=$(),a=e["concept-quiz"].questions;return window.__quizState={sprintId:t,questions:a,current:0,correct:0,answered:!1},wt(0,a,s,t)}function wt(t,e,s,a){let r=e[t],o=s==="zh"?r.qZh:r.q,i=r.options.map((c,d)=>`
    <button id="opt-${d}" onclick="window.__answerQuiz(${d})"
            class="terminal-card p-3 text-left text-sm text-ap-text hover:bg-ap-surface-hover transition-colors w-full">
      <span class="text-ap-green mr-2">${String.fromCharCode(65+d)}.</span> ${l(c)}
    </button>
  `).join("");return`
    <a href="#/sprint/${a}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${n("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath quiz --question ${t+1}/${e.length}</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${n("games.concept-quiz")}</h1>
    <div class="text-ap-text-muted text-xs mb-6">${t+1} / ${e.length}</div>

    <div id="quiz-area">
      <div class="text-ap-text text-sm font-bold mb-4">${l(o)}</div>
      <div class="flex flex-col gap-2">${i}</div>
    </div>
    <div id="quiz-feedback" class="mt-4"></div>
    <div id="quiz-next" class="mt-4 hidden"></div>
  `}var St=w(()=>{"use strict";S();k();j();_();window.__answerQuiz=t=>{let e=window.__quizState;if(e.answered)return;e.answered=!0;let s=e.questions[e.current],a=t===s.answer;a&&e.correct++;let r=document.getElementById(`opt-${t}`),o=document.getElementById(`opt-${s.answer}`);a?r?.classList.add("border-ap-green","bg-ap-green-dim"):(r?.classList.add("border-ap-red","bg-ap-red-dim"),o?.classList.add("border-ap-green","bg-ap-green-dim"));for(let d=0;d<s.options.length;d++)document.getElementById(`opt-${d}`)?.classList.add("pointer-events-none");let i=document.getElementById("quiz-feedback");i&&(i.innerHTML=a?`<div class="text-ap-green text-sm">\u2713 ${n("games.correct")}</div>`:`<div class="text-ap-red text-sm">\u2717 ${n("games.wrong-answer")} ${String.fromCharCode(65+s.answer)}</div>`);let c=document.getElementById("quiz-next");if(c)if(c.classList.remove("hidden"),e.current<e.questions.length-1)c.innerHTML=`
        <button onclick="window.__nextQuestion()"
                class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
          ${n("games.next")} \u2192
        </button>
      `;else{let d=Math.round(e.correct/e.questions.length*100),u=p();N(u,`s${e.sprintId}-concept-quiz`,d),c.innerHTML=`
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">${d}%</div>
          <div class="text-ap-text text-sm">${e.correct}/${e.questions.length} ${n("games.correct-count")}</div>
          <div class="flex gap-3 justify-center mt-4">
            <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                    class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
              ${n("games.play-again")}
            </button>
            <a href="#/sprint/${e.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
              ${n("games.back")}
            </a>
          </div>
        </div>
      `}};window.__nextQuestion=()=>{let t=window.__quizState;t.current++,t.answered=!1;let e=$(),s=document.querySelector("main");s&&(s.innerHTML=wt(t.current,t.questions,e,t.sprintId))}});var Lt={};L(Lt,{renderPromptBuilder:()=>te});async function te(t){let s=(await E(`sprint-${t}/games.json`))["prompt-builder"].challenges,a=s[0];return window.__pbState={sprintId:t,challenges:s,currentChallenge:0,placed:[],available:[...a.parts].sort(()=>Math.random()-.5)},ee(a,t)}function ee(t,e){let s=window.__pbState,a=g(t,"instruction");return`
    <a href="#/sprint/${e}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${n("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath prompt-builder</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${n("games.prompt-builder")}</h1>
    <p class="text-ap-text text-sm mb-6">${l(a)}</p>

    <div class="terminal-card mb-4">
      ${H("your code")}
      <div id="pb-placed" class="p-3 min-h-[80px]">${zt(s)}</div>
    </div>

    <div class="text-ap-text-muted text-xs mb-2">${n("games.available-parts")}</div>
    <div id="pb-available" class="mb-4">${jt(s)}</div>

    <button onclick="window.__checkPromptBuilder()"
            class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
      ${n("games.check")}
    </button>
    <div id="pb-result" class="mt-4"></div>
  `}function zt(t){return t.placed.length===0?`<span class="text-ap-text-muted text-xs">${n("games.tap-to-build")}</span>`:t.placed.map((e,s)=>`
      <button onclick="window.__removePart(${s})"
              class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-red transition-all inline-block m-1 bg-ap-green-dim">
        ${l(e)}
      </button>
    `).join("")}function jt(t){return t.available.map((e,s)=>`
    <button onclick="window.__placePart(${s})"
            class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-green transition-all inline-block m-1">
      ${l(e)}
    </button>
  `).join("")}function _t(){let t=window.__pbState,e=document.getElementById("pb-placed"),s=document.getElementById("pb-available");e&&(e.innerHTML=zt(t)),s&&(s.innerHTML=jt(t))}var Pt=w(()=>{"use strict";S();k();j();_();window.__placePart=t=>{let e=window.__pbState,s=e.available.splice(t,1)[0];e.placed.push(s),_t()};window.__removePart=t=>{let e=window.__pbState,s=e.placed.splice(t,1)[0];e.available.push(s),_t()};window.__checkPromptBuilder=()=>{let t=window.__pbState,e=t.challenges[t.currentChallenge],s=JSON.stringify(t.placed)===JSON.stringify(e.correct),a=s?100:0,r=p();N(r,`s${t.sprintId}-prompt-builder`,a);let o=document.getElementById("pb-result");o&&(o.innerHTML=s?`
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">\u2713 ${n("games.complete")}</div>
          <div class="flex gap-3 justify-center mt-4">
            <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                    class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
              ${n("games.play-again")}
            </button>
            <a href="#/sprint/${t.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
              ${n("games.back")}
            </a>
          </div>
        </div>
      `:`
        <div class="text-ap-red text-sm mb-2">${n("games.not-quite")}</div>
        <div class="text-ap-text-muted text-xs">${n("games.expected")}</div>
        <div class="code-block text-xs mt-1">${e.correct.map(l).join(`
`)}</div>
      `)}});var Et={};L(Et,{renderRoadmap:()=>se});async function se(){let t=p(),s=(await M("sprints.json")).map(r=>{let o=g(r,"title"),i=g(r,"project"),c=!!t.projects[`s${r.id}`],d=r.id===t.currentSprint,u=r.id>t.currentSprint,m=n("roadmap.locked"),f="text-ap-text-muted",h="border-ap-border",y="border-ap-border";return c?(m=n("roadmap.complete"),f="text-ap-green",h="border-ap-green bg-ap-green-dim",y="border-ap-green"):d&&(m=n("roadmap.active"),f="text-ap-amber",h="border-ap-amber bg-ap-amber-dim"),`
        <div class="flex gap-4 ${u?"opacity-40":""}">
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full border-2 ${h} flex items-center justify-center text-xs font-bold ${c?"text-ap-green":d?"text-ap-amber":"text-ap-text-muted"}">
              ${c?"\u2713":r.id}
            </div>
            ${r.id<6?`<div class="w-0 h-12 border-l-2 border-dashed ${y}"></div>`:""}
          </div>
          <div class="pb-8 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-ap-text font-bold text-sm">Sprint ${r.id}: ${l(o)}</span>
              <span class="${f} text-xs">${m}</span>
            </div>
            <div class="text-ap-text-muted text-xs">${n("roadmap.weeks")} ${r.weeks} \u2014 ${l(i)}</div>
            ${d?`<a href="#/sprint/${r.id}" class="text-ap-green text-xs hover:underline mt-1 inline-block">${n("roadmap.view-sprint")} \u2192</a>`:""}
          </div>
        </div>
      `}).join(""),a="";try{let r=await M("bonus-projects.json"),o={easy:"text-ap-green bg-ap-green-dim",medium:"text-ap-amber bg-ap-amber-dim",hard:"text-ap-red bg-ap-red-dim"};a=r.map(i=>{let c=g(i,"title"),d=g(i,"description"),u=t.bonusProjects[i.id];return`
        <div class="terminal-card p-3">
          <div class="flex items-center justify-between mb-1">
            <span class="text-ap-text font-bold text-sm">${l(c)}</span>
            <span class="${o[i.difficulty]} text-xs px-2 py-0.5 rounded">${l(i.difficulty)}</span>
          </div>
          <div class="text-ap-text-muted text-xs mb-2">${l(d)}</div>
          <div class="flex items-center justify-between">
            <div class="flex gap-1 flex-wrap">${i.skills.map(m=>`<span class="text-ap-indigo text-xs bg-ap-indigo-dim px-1.5 py-0.5 rounded">${l(m)}</span>`).join("")}</div>
            ${u?u==="in-progress"?`<button onclick="window.__completeBonus('${l(i.id)}')" class="text-ap-amber text-xs border border-ap-amber rounded px-2 py-1 hover:bg-ap-amber-dim">${n("roadmap.mark-complete")}</button>`:`<span class="text-ap-green text-xs">\u2713 ${n("roadmap.done")} (+200 XP)</span>`:`<button onclick="window.__startBonus('${l(i.id)}')" class="text-ap-green text-xs border border-ap-green rounded px-2 py-1 hover:bg-ap-green-dim">${n("roadmap.start")}</button>`}
          </div>
        </div>
      `}).join("")}catch{}return`
    <div class="text-ap-green text-sm mb-1">$ agentpath roadmap</div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${n("roadmap.title")}</h1>
    <div class="ml-2">${s}</div>

    ${a?`
    <div class="mt-10">
      <div class="text-ap-green text-sm mb-1">$ agentpath bonus --list</div>
      <h2 class="text-ap-text text-lg font-bold mb-4">${n("roadmap.bonus-title")} (12)</h2>
      <div class="flex flex-col gap-3">${a}</div>
    </div>
    `:""}
  `}var Mt=w(()=>{"use strict";S();k();j();_();window.__startBonus=t=>{let e=p();X(e,t,"in-progress"),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__completeBonus=t=>{let e=p();X(e,t,"complete"),window.dispatchEvent(new HashChangeEvent("hashchange"))}});function Ct(t,e=5){let s=[{key:"python",label:"Python"},{key:"llm-apis",label:"LLM APIs"},{key:"agent-frameworks",label:"Agents"},{key:"rag",label:"RAG"},{key:"mcp",label:"MCP"},{key:"multi-agent",label:"Multi-Agent"}],a=150,r=150,o=100,i=s.length;function c(v,b){let x=(v-90)*(Math.PI/180);return[a+b*Math.cos(x),r+b*Math.sin(x)]}let u=[.2,.4,.6,.8,1].map(v=>`<polygon points="${s.map((x,z)=>{let T=360/i*z;return c(T,o*v).join(",")}).join(" ")}" fill="none" stroke="#334155" stroke-width="0.5"/>`).join(""),m=s.map((v,b)=>{let x=360/i*b,[z,T]=c(x,o);return`<line x1="${a}" y1="${r}" x2="${z}" y2="${T}" stroke="#334155" stroke-width="0.5"/>`}).join(""),f=s.map((v,b)=>{let x=(t[v.key]||0)/e,z=360/i*b;return c(z,o*x).join(",")}).join(" "),h=s.map((v,b)=>{let x=360/i*b,[z,T]=c(x,o+20),Q=z<a-10?"end":z>a+10?"start":"middle",Rt=t[v.key]||0;return`<text x="${z}" y="${T}" text-anchor="${Q}" fill="#94a3b8" font-size="10" font-family="monospace">${v.label} (${Rt})</text>`}).join(""),y=s.map((v,b)=>{let x=(t[v.key]||0)/e,z=360/i*b,[T,Q]=c(z,o*x);return`<circle cx="${T}" cy="${Q}" r="3" fill="#00ff88"/>`}).join("");return`
    <svg viewBox="0 0 300 300" width="300" height="300" class="mx-auto" role="img" aria-label="Skills radar chart">
      <title>Skills Radar</title>
      ${u}
      ${m}
      <polygon points="${f}" fill="rgba(0,255,136,0.15)" stroke="#00ff88" stroke-width="1.5"/>
      ${y}
      ${h}
    </svg>
  `}var Tt=w(()=>{"use strict"});function At(t,e){let s=g(t,"name"),a=g(t,"desc"),r=t.type==="project"?"\u{1F3C6}":"\u2B50";return`
    <div class="${e?"badge-earned":"badge-locked"} rounded-lg p-3 text-center">
      <div class="text-lg mb-1" aria-hidden="true">${e?r:"\u{1F512}"}</div>
      <div class="text-xs font-bold">${l(s)}</div>
      <div class="text-xs opacity-70 mt-1">${l(a)}</div>
    </div>
  `}var Ht=w(()=>{"use strict";_()});var qt={};L(qt,{renderProfile:()=>ne});async function ne(){let t=p(),e=await M("badges.json"),s=$(),a=O(t),r=s==="zh"?a.current.title.split(" ")[0]:a.current.titleEn,o=e.map(u=>At(u,t.badges.includes(u.id))).join(""),i=Object.values(t.projects).filter(Boolean).length,c=Object.keys(t.lessons).length+Object.keys(t.milestones).length,d="";try{let u=await M("next-steps.json"),m={Certification:"text-ap-green bg-ap-green-dim",Community:"text-ap-indigo bg-ap-indigo-dim",Portfolio:"text-ap-amber bg-ap-amber-dim","Personal Brand":"text-ap-amber bg-ap-amber-dim",Networking:"text-ap-indigo bg-ap-indigo-dim","Skill Depth":"text-ap-green bg-ap-green-dim","Emerging Tech":"text-ap-red bg-ap-red-dim",Research:"text-ap-indigo bg-ap-indigo-dim",Career:"text-ap-amber bg-ap-amber-dim",Mastery:"text-ap-green bg-ap-green-dim","Deep Understanding":"text-ap-red bg-ap-red-dim"};d=u.map((f,h)=>{let y=g(f,"title"),v=g(f,"description"),b=g(f,"category"),x=m[f.category]||"text-ap-text-muted bg-ap-surface";return`
        <div class="terminal-card p-3">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-ap-green text-xs font-bold">${String(h+1).padStart(2,"0")}.</span>
            <span class="text-ap-text font-bold text-sm">${l(y)}</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <span class="${x} text-xs px-1.5 py-0.5 rounded">${l(b)}</span>
            ${f.url?`<a href="${l(f.url)}" target="_blank" rel="noopener" class="text-ap-indigo text-xs hover:underline">Link \u2192</a>`:""}
          </div>
          <div class="text-ap-text-muted text-xs">${l(v)}</div>
        </div>
      `}).join("")}catch{}return`
    <div class="text-ap-green text-sm mb-1">$ agentpath profile</div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-12 h-12 rounded-full bg-ap-green-dim border border-ap-green flex items-center justify-center text-ap-green font-bold text-lg">${t.level}</div>
      <div>
        <div class="text-ap-text font-bold">${n("dash.level")} ${t.level}: ${r}</div>
        <div class="text-ap-text-dim text-xs">${t.xp.toLocaleString()} ${n("dash.xp")}</div>
      </div>
    </div>

    <!-- Skills Radar -->
    <div class="terminal-card mb-6">
      ${H(n("profile.skills"))}
      <div class="p-4">${Ct(t.skills)}</div>
    </div>

    <!-- Badges -->
    <div class="mb-6">
      <div class="text-ap-green text-xs font-bold uppercase mb-3">${n("profile.badges")}</div>
      <div class="grid grid-cols-3 gap-2">${o}</div>
    </div>

    <!-- Stats -->
    <div class="terminal-card mb-6">
      <div class="p-4">
        <div class="text-ap-green text-xs font-bold uppercase mb-3">${n("profile.stats")}</div>
        <div class="grid grid-cols-2 gap-3">
          <div class="text-center">
            <div class="text-ap-green text-xl font-bold">${t.xp.toLocaleString()}</div>
            <div class="text-ap-text-muted text-xs">${n("profile.total-xp")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-amber text-xl font-bold">${t.streak}</div>
            <div class="text-ap-text-muted text-xs">${n("profile.longest-streak")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${i}</div>
            <div class="text-ap-text-muted text-xs">${n("profile.projects-done")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${c}</div>
            <div class="text-ap-text-muted text-xs">${n("profile.days-active")}</div>
          </div>
        </div>
      </div>
    </div>

    ${d?`
    <!-- Next Steps -->
    <div class="mb-6">
      <div class="text-ap-green text-xs font-bold uppercase mb-3">${n("profile.next-steps")}</div>
      <div class="flex flex-col gap-2">${d}</div>
    </div>
    `:""}

    <!-- Export -->
    <button onclick="window.__exportResume()"
            class="w-full border border-ap-green text-ap-green py-3 rounded text-sm hover:bg-ap-green-dim transition-colors">
      ${n("profile.export")}
    </button>
  `}var Bt=w(()=>{"use strict";S();k();j();_();Tt();Ht();window.__exportResume=()=>{let t=p(),e=O(t),s=`AgentPath \u667A\u8DEF \u2014 Skills Summary
Level: ${t.level} (${e.current.titleEn})
XP: ${t.xp}
Skills: Python ${t.skills.python}/5, LLM APIs ${t.skills["llm-apis"]}/5, Agent Frameworks ${t.skills["agent-frameworks"]}/5, RAG ${t.skills.rag}/5, MCP ${t.skills.mcp}/5, Multi-Agent ${t.skills["multi-agent"]}/5`;navigator.clipboard.writeText(s).then(()=>{alert("Copied to clipboard!")})}});var V=[];function A(t,e){let s=[],a=new RegExp("^"+t.replace(/:(\w+)/g,(r,o)=>(s.push(o),"([^/]+)")).replace(/\//g,"\\/")+"$");V.push({pattern:a,keys:s,handler:e})}function Nt(t){window.location.hash=t}function Y(){let t=()=>{let e=window.location.hash.slice(1)||"/";for(let s of V){let a=e.match(s.pattern);if(a){let r={};s.keys.forEach((o,i)=>{r[o]=a[i+1]}),s.handler(r);return}}Nt("/")};window.addEventListener("hashchange",t),t()}S();k();j();k();S();var K=[{id:"dashboard",path:"/",icon:"\u2302",key:"nav.dashboard"},{id:"sprint",path:"/sprint/1",icon:"\u25B6",key:"nav.sprint"},{id:"games",path:"/sprint/1/games",icon:"\u25C6",key:"nav.games"},{id:"roadmap",path:"/roadmap",icon:"\u25C7",key:"nav.roadmap"},{id:"profile",path:"/profile",icon:"\u25CB",key:"nav.profile"}];function Ft(){let t=window.location.hash.slice(1)||"/";return t==="/"?"dashboard":t.includes("/games")?"games":t.includes("/sprint")?"sprint":t.includes("/roadmap")?"roadmap":t.includes("/profile")?"profile":"dashboard"}function it(){let t=p(),e=Ft(),s=t.currentSprint;return K[1].path=`/sprint/${s}`,K[2].path=`/sprint/${s}/games`,`
    <nav aria-label="Main navigation" class="fixed bottom-0 left-0 right-0 bg-ap-surface border-t border-ap-border nav-bottom z-50
                md:fixed md:top-0 md:left-0 md:bottom-0 md:w-48 md:border-t-0 md:border-r md:flex-col">
      <div class="flex justify-around md:flex-col md:justify-start md:pt-6 md:gap-1">
        ${K.map(r=>`
      <button
        onclick="window.location.hash='${r.path}'"
        aria-label="${n(r.key)}"
        ${e===r.id?'aria-current="page"':""}
        class="flex flex-col items-center gap-1 py-2 px-3 text-xs transition-colors
          ${e===r.id?"text-ap-green":"text-ap-text-muted hover:text-ap-text-dim"}"
      >
        <span class="text-lg" aria-hidden="true">${r.icon}</span>
        <span>${n(r.key)}</span>
      </button>
    `).join("")}
      </div>
    </nav>
  `}function lt(){return"pb-20 md:pb-0 md:pl-48"}var W=document.getElementById("app");function U(t){return`
    <div class="${lt()} min-h-screen">
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
          ${$()==="en"?"\u4E2D\u6587":"EN"}
        </button>
      </header>
      <main class="p-4 max-w-3xl mx-auto">
        ${t}
      </main>
    </div>
    ${it()}
  `}function C(t){W.innerHTML=U(t)}function R(){W.innerHTML=U(`
    <div class="flex items-center justify-center py-20">
      <div class="text-ap-green text-sm glow-green">Loading...</div>
    </div>
  `)}function D(t){W.innerHTML=U(`
    <div class="terminal-card p-6 text-center">
      <div class="text-ap-red text-lg font-bold mb-2">Error</div>
      <div class="text-ap-text-dim text-sm">${t}</div>
      <a href="#/" class="text-ap-green text-sm hover:underline mt-4 inline-block">\u2190 Back to Dashboard</a>
    </div>
  `)}window.__toggleLang=()=>{rt(),ot(),window.dispatchEvent(new HashChangeEvent("hashchange"))};at();var ae=p();B(ae);A("/",async()=>{R();try{let{renderDashboard:t}=await Promise.resolve().then(()=>(pt(),dt));C(await t())}catch{D("Failed to load dashboard")}});A("/sprint/:id",async t=>{R();try{let{renderSprint:e}=await Promise.resolve().then(()=>(gt(),mt));C(await e(Number(t.id)))}catch{D("Failed to load sprint")}});A("/sprint/:id/lesson/:num",async t=>{R();try{let{renderLesson:e}=await Promise.resolve().then(()=>(ut(),xt));C(await e(Number(t.id),t.num))}catch{D("Failed to load lesson")}});A("/sprint/:id/project",async t=>{R();try{let{renderProject:e}=await Promise.resolve().then(()=>(vt(),ht));C(await e(Number(t.id)))}catch{D("Failed to load project")}});A("/sprint/:id/games",t=>{Promise.resolve().then(()=>(bt(),ft)).then(({renderGames:e})=>{C(e(Number(t.id)))})});A("/sprint/:id/games/:game",async t=>{R();try{let e=Number(t.id),s=t.game;if(s==="flash-match"){let{renderFlashMatch:a}=await Promise.resolve().then(()=>(yt(),$t));C(await a(e))}else if(s==="concept-quiz"){let{renderConceptQuiz:a}=await Promise.resolve().then(()=>(St(),kt));C(await a(e))}else if(s==="prompt-builder"){let{renderPromptBuilder:a}=await Promise.resolve().then(()=>(Pt(),Lt));C(await a(e))}}catch{D("Failed to load game")}});A("/roadmap",async()=>{R();try{let{renderRoadmap:t}=await Promise.resolve().then(()=>(Mt(),Et));C(await t())}catch{D("Failed to load roadmap")}});A("/profile",async()=>{R();try{let{renderProfile:t}=await Promise.resolve().then(()=>(Bt(),qt));C(await t())}catch{D("Failed to load profile")}});Y();})();
