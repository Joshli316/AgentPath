"use strict";(()=>{var At=Object.defineProperty;var $=(t,e)=>()=>(t&&(e=t(t=0)),e);var z=(t,e)=>{for(var s in e)At(t,s,{get:e[s],enumerable:!0})};function d(){try{let t=localStorage.getItem(U);if(t)return{...V,...JSON.parse(t)}}catch{}return{...V}}function T(t){localStorage.setItem(U,JSON.stringify(t))}function H(t,e){t.xp+=e;for(let s=Z.length-1;s>=0;s--)if(t.xp>=Z[s].xp){t.level=Z[s].level;break}return T(t),t}function A(t){let e=new Date().toISOString().split("T")[0];if(t.lastActiveDate===e)return t;let s=new Date(Date.now()-864e5).toISOString().split("T")[0];return t.lastActiveDate===s?t.streak+=1:t.lastActiveDate!==e&&(t.streak=1),t.lastActiveDate=e,T(t),t}function Y(t,e){return t.lessons[e]||(t.lessons[e]=!0,H(t,50),A(t)),t}function I(t,e){return t.milestones[e]||(t.milestones[e]=!0,H(t,100),A(t)),t}function tt(t,e){if(!t.projects[e]){t.projects[e]=!0,H(t,300);let s={s1:"first-agent",s2:"orchestrator",s3:"rag-master",s4:"protocol-builder",s5:"commander",s6:"graduate"};s[e]&&!t.badges.includes(s[e])&&t.badges.push(s[e]),A(t)}return t}function B(t,e,s){let n=Math.min(50,Math.max(10,Math.round(s/2))),a=t.games[e]||{bestScore:0,plays:0};if(t.games[e]={bestScore:Math.max(a.bestScore,s),plays:a.plays+1},s===100){let i={"s1-concept-quiz":"api-master","s2-concept-quiz":"framework-king","s3-concept-quiz":"vector-hero","s4-concept-quiz":"mcp-pro","s5-concept-quiz":"monitor-king","s6-concept-quiz":"interview-pro"};i[e]&&!t.badges.includes(i[e])&&t.badges.push(i[e])}return H(t,n),A(t),t}function F(t,e,s){return t.bonusProjects[e]=s,s==="complete"&&(H(t,200),A(t)),T(t),t}function N(t){let e=Z.find(a=>a.level===t.level),s=Z.find(a=>a.level===t.level+1),n=s?(t.xp-e.xp)/(s.xp-e.xp)*100:100;return{current:e,next:s,progress:n}}var U,V,Z,w=$(()=>{"use strict";U="agentpath",V={currentSprint:1,currentDay:1,xp:0,level:1,streak:0,lastActiveDate:"",lessons:{},milestones:{},projects:{},games:{},badges:[],skills:{python:0,"llm-apis":0,"agent-frameworks":0,rag:0,mcp:0,"multi-agent":0},lang:"en",bonusProjects:{}},Z=[{level:1,title:"\u65B0\u624B Novice",titleEn:"Novice",xp:0},{level:2,title:"\u5B66\u5F92 Apprentice",titleEn:"Apprentice",xp:1e3},{level:3,title:"\u6784\u5EFA\u8005 Builder",titleEn:"Builder",xp:3e3},{level:4,title:"\u5DE5\u5320 Craftsman",titleEn:"Craftsman",xp:6e3},{level:5,title:"\u67B6\u6784\u5E08 Architect",titleEn:"Architect",xp:1e4},{level:6,title:"\u667A\u8005 Agent Master",titleEn:"Agent Master",xp:15e3}]});function et(){D=d().lang,document.documentElement.lang=D}function r(t,e){let s=Rt[t];if(!s)return t;let n=s[D]||s.en||t;if(e)for(let[a,i]of Object.entries(e))n=n.replace(`{${a}}`,String(i));return n}function x(){return D}function Bt(t){D=t,document.documentElement.lang=t;let e=d();e.lang=t,T(e)}function st(){Bt(D==="en"?"zh":"en")}var Rt,D,y=$(()=>{"use strict";w();Rt={"nav.dashboard":{en:"Dashboard",zh:"\u4EEA\u8868\u76D8"},"nav.sprint":{en:"Sprint",zh:"\u51B2\u523A"},"nav.games":{en:"Games",zh:"\u6E38\u620F"},"nav.roadmap":{en:"Roadmap",zh:"\u8DEF\u7EBF\u56FE"},"nav.profile":{en:"Profile",zh:"\u4E2A\u4EBA"},"dash.today":{en:"Today",zh:"\u4ECA\u5929"},"dash.current-sprint":{en:"Current Sprint",zh:"\u5F53\u524D\u51B2\u523A"},"dash.day-of":{en:"Day {n} of 10",zh:"\u7B2C{n}\u5929 / \u517110\u5929"},"dash.xp":{en:"XP",zh:"\u7ECF\u9A8C\u503C"},"dash.streak":{en:"day streak",zh:"\u5929\u8FDE\u7EED"},"dash.level":{en:"Level",zh:"\u7B49\u7EA7"},"sprint.objectives":{en:"Sprint Objectives",zh:"\u51B2\u523A\u76EE\u6807"},"sprint.lesson":{en:"Lesson",zh:"\u8BFE\u7A0B"},"sprint.project":{en:"Project",zh:"\u9879\u76EE"},"sprint.review":{en:"Review & Games",zh:"\u590D\u4E60\u4E0E\u6E38\u620F"},"lesson.complete":{en:"Mark Complete",zh:"\u6807\u8BB0\u5B8C\u6210"},"lesson.completed":{en:"Completed",zh:"\u5DF2\u5B8C\u6210"},"lesson.try-it":{en:"Try it in iTerm",zh:"\u5728iTerm\u4E2D\u8BD5\u8BD5"},"lesson.key-terms":{en:"Key Terms",zh:"\u5173\u952E\u672F\u8BED"},"lesson.min":{en:"min",zh:"\u5206\u949F"},"project.milestones":{en:"Milestones",zh:"\u91CC\u7A0B\u7891"},"project.stuck":{en:"Stuck? Get a hint",zh:"\u5361\u4F4F\u4E86\uFF1F\u83B7\u53D6\u63D0\u793A"},"project.hint":{en:"Hint",zh:"\u63D0\u793A"},"project.stretch":{en:"Stretch Goals",zh:"\u989D\u5916\u76EE\u6807"},"project.complete":{en:"Project Complete!",zh:"\u9879\u76EE\u5B8C\u6210\uFF01"},"project.mark-complete":{en:"Mark Project Complete",zh:"\u6807\u8BB0\u9879\u76EE\u5B8C\u6210"},"games.select":{en:"Choose a Game",zh:"\u9009\u62E9\u6E38\u620F"},"games.flash-match":{en:"Flash Match",zh:"\u95EA\u914D"},"games.concept-quiz":{en:"Concept Quiz",zh:"\u6982\u5FF5\u6D4B\u9A8C"},"games.prompt-builder":{en:"Prompt Builder",zh:"\u63D0\u793A\u6784\u5EFA"},"games.score":{en:"Score",zh:"\u5F97\u5206"},"games.best":{en:"Best",zh:"\u6700\u4F73"},"games.play-again":{en:"Play Again",zh:"\u518D\u73A9\u4E00\u6B21"},"games.back":{en:"Back to Games",zh:"\u8FD4\u56DE\u6E38\u620F"},"roadmap.title":{en:"Your 12-Week Journey",zh:"\u4F60\u768412\u5468\u65C5\u7A0B"},"roadmap.locked":{en:"Locked",zh:"\u672A\u89E3\u9501"},"roadmap.active":{en:"Active",zh:"\u8FDB\u884C\u4E2D"},"roadmap.complete":{en:"Complete",zh:"\u5DF2\u5B8C\u6210"},"profile.skills":{en:"Skills Radar",zh:"\u6280\u80FD\u96F7\u8FBE"},"profile.badges":{en:"Badges",zh:"\u5FBD\u7AE0"},"profile.stats":{en:"Stats",zh:"\u7EDF\u8BA1"},"profile.export":{en:"Export for Resume",zh:"\u5BFC\u51FA\u7B80\u5386"},"profile.total-xp":{en:"Total XP",zh:"\u603B\u7ECF\u9A8C\u503C"},"profile.projects-done":{en:"Projects Done",zh:"\u5B8C\u6210\u9879\u76EE"},"profile.days-active":{en:"Days Active",zh:"\u6D3B\u8DC3\u5929\u6570"},"profile.longest-streak":{en:"Longest Streak",zh:"\u6700\u957F\u8FDE\u7EED"},"profile.next-steps":{en:"Next Steps \u2014 Keep Growing",zh:"\u4E0B\u4E00\u6B65\u2014\u2014\u7EE7\u7EED\u6210\u957F"},"games.match-instruction":{en:"Tap a term, then tap its matching definition.",zh:"\u70B9\u51FB\u672F\u8BED\uFF0C\u7136\u540E\u70B9\u51FB\u5339\u914D\u7684\u5B9A\u4E49\u3002"},"games.correct":{en:"Correct!",zh:"\u6B63\u786E\uFF01"},"games.wrong-answer":{en:"Wrong \u2014 the answer is",zh:"\u9519\u8BEF\u2014\u2014\u7B54\u6848\u662F"},"games.next":{en:"Next",zh:"\u4E0B\u4E00\u9898"},"games.complete":{en:"Complete!",zh:"\u5B8C\u6210\uFF01"},"games.time":{en:"Time",zh:"\u7528\u65F6"},"games.attempts":{en:"Attempts",zh:"\u5C1D\u8BD5\u6B21\u6570"},"games.correct-count":{en:"correct",zh:"\u6B63\u786E"},"games.match-desc":{en:"Match terms to definitions",zh:"\u5C06\u672F\u8BED\u4E0E\u5B9A\u4E49\u5339\u914D"},"games.quiz-desc":{en:"Test your knowledge",zh:"\u6D4B\u8BD5\u4F60\u7684\u77E5\u8BC6"},"games.builder-desc":{en:"Assemble API calls",zh:"\u7EC4\u88C5API\u8C03\u7528"},"games.check":{en:"Check",zh:"\u68C0\u67E5"},"games.not-quite":{en:"Not quite \u2014 try rearranging the parts.",zh:"\u4E0D\u592A\u5BF9\u2014\u2014\u8BD5\u8BD5\u91CD\u65B0\u6392\u5217\u3002"},"games.expected":{en:"Expected:",zh:"\u9884\u671F\uFF1A"},"games.available-parts":{en:"Available parts:",zh:"\u53EF\u7528\u90E8\u5206\uFF1A"},"games.tap-to-build":{en:"Tap code parts below to build the call...",zh:"\u70B9\u51FB\u4E0B\u65B9\u4EE3\u7801\u7247\u6BB5\u6765\u6784\u5EFA\u8C03\u7528..."},"roadmap.weeks":{en:"Weeks",zh:"\u5468"},"roadmap.bonus-title":{en:"Bonus Projects",zh:"\u989D\u5916\u9879\u76EE"},"roadmap.start":{en:"Start",zh:"\u5F00\u59CB"},"roadmap.mark-complete":{en:"Complete",zh:"\u5B8C\u6210"},"roadmap.done":{en:"Done",zh:"\u5DF2\u5B8C\u6210"},"roadmap.view-sprint":{en:"View Sprint",zh:"\u67E5\u770B\u51B2\u523A"},"dash.xp-to-next":{en:"XP to next",zh:"\u7ECF\u9A8C\u503C\u5230\u4E0B\u4E00\u7EA7"},"sprint.current":{en:"current",zh:"\u5F53\u524D"}},D="en"});async function _(t){let s=`content/${x()}/${t}`;if(j.has(s))return j.get(s);let n=await fetch(s);if(!n.ok){let i=`content/en/${t}`;if(j.has(i))return j.get(i);let c=await fetch(i);if(!c.ok)throw new Error(`Content not found: ${t}`);let o=await c.json();return j.set(i,o),o}let a=await n.json();return j.set(s,a),a}async function L(t){let e=`content/shared/${t}`;if(j.has(e))return j.get(e);let s=await fetch(e);if(!s.ok)throw new Error(`Shared content not found: ${t}`);let n=await s.json();return j.set(e,n),n}function nt(){j.clear()}var j,S=$(()=>{"use strict";y();j=new Map});function Zt(t,e=20){let s=Math.round(t/100*e),n=e-s;return'<span class="text-ap-green">'+"\u2593".repeat(s)+'</span><span class="text-ap-text-muted">'+"\u2591".repeat(n)+"</span>"}function Q(t,e){return`
    <div class="flex items-center gap-3" role="progressbar" aria-valuenow="${Math.round(t)}" aria-valuemin="0" aria-valuemax="100" aria-label="${e||`${Math.round(t)}% complete`}">
      <div class="progress-terminal text-sm whitespace-nowrap" aria-hidden="true">${Zt(t,15)}</div>
      <span class="text-ap-text-dim text-xs">${Math.round(t)}%</span>
      ${e?`<span class="text-ap-text-muted text-xs">${e}</span>`:""}
    </div>
  `}var it=$(()=>{"use strict"});var ot={};z(ot,{renderDashboard:()=>Ht});async function Ht(){let t=d(),s=(await L("sprints.json"))[t.currentSprint-1],n=x(),a=N(t),i=n==="zh"?s.titleZh:s.title,c=n==="zh"?s.projectZh:s.project,o=n==="zh"?a.current.title.split(" ")[0]:a.current.titleEn,l=s.days.filter(v=>v.type==="lesson").length,u=s.days.filter(v=>v.type==="lesson").filter(v=>t.lessons[`s${s.id}-${v.ref}`]).length,p=t.projects[`s${s.id}`]||!1,g=Math.round((u+(p?1:0))/(l+1)*100),h=s.days[t.currentDay-1],b="",m="",f="";if(h)if(h.type==="lesson"){let v=h.ref.replace("lesson-","");b=`${r("sprint.lesson")} ${v}`,m="~20 "+r("lesson.min"),f=`#/sprint/${s.id}/lesson/${v}`}else h.type==="project"?(b=c,m="~60 "+r("lesson.min"),f=`#/sprint/${s.id}/project`):(b=r("sprint.review"),m="~30 "+r("lesson.min"),f=`#/sprint/${s.id}/games`);return`
    <!-- Status bar -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <div class="text-ap-green font-bold text-xl glow-green">${t.xp.toLocaleString()} <span class="text-xs font-normal">${r("dash.xp")}</span></div>
        <div class="text-ap-amber font-bold glow-amber">\u{1F525} ${t.streak} <span class="text-xs font-normal">${r("dash.streak")}</span></div>
      </div>
      <div class="text-ap-text-dim text-sm">${r("dash.level")} ${t.level}: ${o}</div>
    </div>

    <!-- Current Sprint Card -->
    <div class="terminal-card mb-6">
      <div class="terminal-card-header">
        <div class="terminal-dot terminal-dot-red"></div>
        <div class="terminal-dot terminal-dot-yellow"></div>
        <div class="terminal-dot terminal-dot-green"></div>
        <span class="text-ap-text-muted text-xs ml-2">${r("dash.current-sprint")}</span>
      </div>
      <div class="p-4">
        <div class="flex items-center gap-2 mb-1">
          <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${s.id}</span>
          <span class="text-ap-text-muted text-xs">${r("dash.day-of",{n:t.currentDay})}</span>
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
        <div class="text-ap-text-dim text-xs mb-2">${r("dash.level")} ${t.level} \u2192 ${a.next?a.next.level:"MAX"}</div>
        ${Q(a.progress,a.next?`${a.next.xp-t.xp} ${r("dash.xp-to-next")}`:"MAX LEVEL")}
      </div>
    </div>
  `}var lt=$(()=>{"use strict";w();y();S();it()});var ct={};z(ct,{renderSprint:()=>Nt});async function Nt(t){let e=d(),n=(await L("sprints.json"))[t-1];if(!n)return'<div class="text-ap-red">Sprint not found</div>';let a=x(),i=a==="zh"?n.titleZh:n.title,c=a==="zh"?n.projectZh:n.project,o=n.days.map(l=>{let u="\u{1F4D6}",p=r("sprint.lesson"),g=`#/sprint/${t}/lesson/${l.ref.replace("lesson-","")}`,h=!1;l.type==="lesson"?h=!!e.lessons[`s${t}-${l.ref}`]:l.type==="project"?(u="\u{1F528}",p=r("sprint.project"),g=`#/sprint/${t}/project`,h=!!e.projects[`s${t}`]):(u="\u25C6",p=r("sprint.review"),g=`#/sprint/${t}/games`);let b=l.day===e.currentDay&&t===e.currentSprint,m=t>e.currentSprint;return`
        <a href="${m?"#":g}"
           class="terminal-card p-3 flex items-center gap-3 ${b?"ring-1 ring-ap-green":""} ${m?"opacity-40 cursor-not-allowed":"hover:bg-ap-surface-hover cursor-pointer"} transition-colors">
          <div class="text-lg w-8 text-center">${h?'<span class="text-ap-green">\u2713</span>':u}</div>
          <div class="flex-1">
            <div class="text-ap-text text-sm font-bold">${r("dash.day-of",{n:l.day}).split("/")[0].trim()}</div>
            <div class="text-ap-text-muted text-xs">${p}</div>
          </div>
          ${b?`<span class="text-ap-green text-xs">\u2190 ${r("sprint.current")}</span>`:""}
        </a>
      `}).join("");return`
    <div class="text-ap-green text-sm mb-1">$ agentpath sprint ${t}</div>
    <div class="flex items-center gap-2 mb-1">
      <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${t}</span>
      <span class="text-ap-text-muted text-xs">Weeks ${n.weeks}</span>
    </div>
    <h1 class="text-ap-text text-2xl font-bold mb-1">${i}</h1>
    <p class="text-ap-text-dim text-sm mb-6">${r("sprint.project")}: ${c}</p>

    <div class="flex flex-col gap-2">
      ${o}
    </div>
  `}var dt=$(()=>{"use strict";w();y();S()});function M(t){return t.replace(/[&<>"']/g,e=>Gt[e])}var Gt,pt=$(()=>{"use strict";Gt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}});var mt={};z(mt,{renderLesson:()=>Ot});function Ft(t){let e=x();switch(t.type){case"text":return`<div class="text-ap-text text-sm leading-relaxed mb-4">${M(t.content||"")}</div>`;case"code":return`
        <div class="code-block mb-4">
          <div class="text-ap-text-muted text-xs mb-2">${M(t.language||"code")}</div>
          <pre><code>${M(t.content||"")}</code></pre>
        </div>
      `;case"callout":{let s={tip:"border-ap-green bg-ap-green-dim",warning:"border-ap-amber bg-ap-amber-dim",info:"border-ap-indigo bg-ap-indigo-dim"},n={tip:"\u{1F4A1}",warning:"\u26A0\uFE0F",info:"\u2139\uFE0F"},a=t.variant||"info";return`
        <div class="border-l-2 ${s[a]} p-3 rounded-r mb-4">
          <div class="text-sm">${n[a]} ${M(t.content||"")}</div>
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
            <div class="text-ap-green text-xs mb-2">$ ${r("lesson.try-it")}</div>
            <div class="text-ap-text text-sm font-mono">${M(t.prompt||"")}</div>
          </div>
        </div>
      `;case"key-terms":return`
        <div class="mb-4">
          <div class="text-ap-green text-xs font-bold mb-2 uppercase">${r("lesson.key-terms")}</div>
          <div class="flex flex-col gap-2">
            ${(t.terms||[]).map(s=>`
              <div class="terminal-card p-2">
                <span class="text-ap-green font-bold text-sm">${M(e==="zh"?s.termZh:s.term)}</span>
                <span class="text-ap-text-muted text-xs ml-2">\u2014 ${M(e==="zh"?s.definitionZh:s.definition)}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;default:return""}}async function Ot(t,e){let s=d(),n=await _(`sprint-${t}/lesson-${e.padStart(2,"0")}.json`),i=x()==="zh"?n.titleZh:n.title,c=`s${t}-lesson-${e.padStart(2,"0")}`,o=!!s.lessons[c],l=n.steps.map(Ft).join("");return`
    <a href="#/sprint/${t}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${t}</a>
    <div class="flex items-center gap-3 mt-3 mb-1">
      <span class="text-ap-green text-xs">${r("sprint.lesson")} ${e}</span>
      <span class="text-ap-text-muted text-xs">~${n.duration} ${r("lesson.min")}</span>
    </div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${i}</h1>

    ${l}

    <div class="mt-8 mb-4">
      ${o?`<div class="text-ap-green text-sm font-bold">\u2713 ${r("lesson.completed")} (+50 XP)</div>`:`<button onclick="window.__completeLesson('${c}', ${t})"
               class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
               ${r("lesson.complete")}
             </button>`}
    </div>
  `}var gt=$(()=>{"use strict";w();y();S();pt();window.__completeLesson=(t,e)=>{let s=d();if(Y(s,t),e===s.currentSprint){let n=Object.keys(s.lessons).filter(a=>a.startsWith(`s${e}-`)).length;s.currentDay=Math.min(n+1,10),T(s)}window.dispatchEvent(new HashChangeEvent("hashchange"))}});var xt={};z(xt,{renderProject:()=>Qt});async function Qt(t){let e=d(),s=await _(`sprint-${t}/project.json`),n=x(),a=n==="zh"?s.titleZh:s.title,i=n==="zh"?s.descriptionZh:s.description,c=`s${t}`,o=!!e.projects[c],l=s.milestones.every(h=>!!e.milestones[`${c}-${h.id}`]),u=s.milestones.map(h=>{let b=`${c}-${h.id}`,m=!!e.milestones[b],f=n==="zh"?h.labelZh:h.label,v=s.hints[h.id]||[];return`
        <div class="terminal-card p-3 mb-2">
          <div class="flex items-center gap-3">
            <button onclick="window.__toggleMilestone('${b}', ${t})"
                    class="w-5 h-5 border ${m?"bg-ap-green border-ap-green text-ap-bg":"border-ap-text-muted"} rounded text-xs flex items-center justify-center flex-shrink-0">
              ${m?"\u2713":""}
            </button>
            <span class="text-sm ${m?"text-ap-text-dim line-through":"text-ap-text"}">${f}</span>
          </div>
          ${!m&&v.length>0?`<details class="mt-2 ml-8">
                  <summary class="text-ap-amber text-xs cursor-pointer hover:underline">${r("project.stuck")}</summary>
                  <div class="mt-2 flex flex-col gap-1">
                    ${v.map((k,E)=>`<div class="text-ap-text-dim text-xs">\u{1F4A1} ${r("project.hint")} ${E+1}: ${k}</div>`).join("")}
                  </div>
                </details>`:""}
        </div>
      `}).join(""),g=(n==="zh"?s.stretchZh:s.stretch).map(h=>`<li class="text-ap-text-dim text-sm">${h}</li>`).join("");return`
    <a href="#/sprint/${t}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${t}</a>
    <div class="text-ap-green text-xs mt-3 mb-1">$ agentpath project --sprint ${t}</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${a}</h1>
    <p class="text-ap-text-dim text-sm mb-6">${i}</p>

    <div class="text-ap-green text-xs font-bold uppercase mb-3">${r("project.milestones")}</div>
    ${u}

    ${l&&!o?`<button onclick="window.__completeProject('${c}', ${t})"
             class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm mt-4 hover:opacity-90 transition-opacity">
             ${r("project.mark-complete")}
           </button>`:""}
    ${o?`<div class="text-ap-green font-bold text-sm mt-4">\u2713 ${r("project.complete")} (+300 XP)</div>`:""}

    <div class="mt-8">
      <div class="text-ap-amber text-xs font-bold uppercase mb-2">${r("project.stretch")}</div>
      <ul class="list-disc list-inside flex flex-col gap-1">${g}</ul>
    </div>
  `}var ut=$(()=>{"use strict";w();y();S();window.__toggleMilestone=(t,e)=>{let s=d();s.milestones[t]||I(s,t),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__completeProject=(t,e)=>{let s=d();tt(s,t),window.dispatchEvent(new HashChangeEvent("hashchange"))}});var ht={};z(ht,{renderGames:()=>Xt});function Xt(t){let e=d(),n=[{id:"flash-match",icon:"\u26A1",name:r("games.flash-match"),desc:"Match terms to definitions",route:`#/sprint/${t}/games/flash-match`,best:e.games[`s${t}-flash-match`]?.bestScore},{id:"concept-quiz",icon:"\u{1F9E0}",name:r("games.concept-quiz"),desc:"Test your knowledge",route:`#/sprint/${t}/games/concept-quiz`,best:e.games[`s${t}-concept-quiz`]?.bestScore},{id:"prompt-builder",icon:"\u{1F527}",name:r("games.prompt-builder"),desc:"Assemble API calls",route:`#/sprint/${t}/games/prompt-builder`,best:e.games[`s${t}-prompt-builder`]?.bestScore}].map(a=>`
    <a href="${a.route}" class="terminal-card p-4 hover:bg-ap-surface-hover transition-colors block">
      <div class="flex items-center gap-3">
        <div class="text-2xl">${a.icon}</div>
        <div class="flex-1">
          <div class="text-ap-text font-bold text-sm">${a.name}</div>
          <div class="text-ap-text-muted text-xs">${a.desc}</div>
        </div>
        ${a.best!==void 0?`<div class="text-ap-green text-xs">${r("games.best")}: ${a.best}%</div>`:""}
      </div>
    </a>
  `).join("");return`
    <a href="#/sprint/${t}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${t}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath games --sprint ${t}</div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${r("games.select")}</h1>
    <div class="flex flex-col gap-3">${n}</div>
  `}var vt=$(()=>{"use strict";w();y()});var ft={};z(ft,{renderFlashMatch:()=>Wt});async function Wt(t){let e=await _(`sprint-${t}/games.json`),s=x(),i=[...e["flash-match"].pairs].sort(()=>Math.random()-.5).slice(0,6),c=i.map((p,g)=>({id:g,text:s==="zh"?p.termZh:p.term})),o=[...i].sort(()=>Math.random()-.5).map(p=>({id:i.indexOf(p),text:s==="zh"?p.definitionZh:p.definition}));window.__flashMatchState={sprintId:t,selectedTerm:null,matched:new Set,attempts:0,startTime:Date.now(),total:i.length};let l=c.map(p=>`
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
    <a href="#/sprint/${t}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${r("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath flash-match</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${r("games.flash-match")}</h1>
    <p class="text-ap-text-muted text-xs mb-6">Tap a term, then tap its matching definition.</p>

    <div id="flash-match-area" class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">${l}</div>
      <div class="flex flex-col gap-2">${u}</div>
    </div>
    <div id="flash-match-result" class="mt-6 hidden"></div>
  `}var bt=$(()=>{"use strict";w();y();S();window.__selectTerm=t=>{let e=window.__flashMatchState;e.matched.has(t)||(document.querySelectorAll("[id^='term-']").forEach(s=>s.classList.remove("ring-1","ring-ap-green")),document.getElementById(`term-${t}`)?.classList.add("ring-1","ring-ap-green"),e.selectedTerm=t)};window.__selectDef=t=>{let e=window.__flashMatchState;if(e.selectedTerm===null||e.matched.has(t))return;e.attempts++;let s=document.getElementById(`term-${e.selectedTerm}`),n=document.getElementById(`def-${t}`);if(e.selectedTerm===t){if(e.matched.add(t),s?.classList.add("opacity-30"),n?.classList.add("opacity-30"),s?.classList.remove("ring-1","ring-ap-green"),e.selectedTerm=null,e.matched.size===e.total){let a=Math.round((Date.now()-e.startTime)/1e3),i=Math.round(e.total/e.attempts*100),c=Math.min(100,i),o=d();B(o,`s${e.sprintId}-flash-match`,c);let l=document.getElementById("flash-match-result");l&&(l.classList.remove("hidden"),l.innerHTML=`
          <div class="terminal-card p-4 text-center">
            <div class="text-ap-green text-2xl font-bold glow-green mb-2">\u2713 Complete!</div>
            <div class="text-ap-text text-sm">${r("games.score")}: ${c}% | Time: ${a}s | Attempts: ${e.attempts}</div>
            <div class="flex gap-3 justify-center mt-4">
              <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                      class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
                ${r("games.play-again")}
              </button>
              <a href="#/sprint/${e.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
                ${r("games.back")}
              </a>
            </div>
          </div>
        `)}}else n?.classList.add("border-ap-red"),setTimeout(()=>n?.classList.remove("border-ap-red"),500),s?.classList.remove("ring-1","ring-ap-green"),e.selectedTerm=null}});var yt={};z(yt,{renderConceptQuiz:()=>Kt});async function Kt(t){let e=await _(`sprint-${t}/games.json`),s=x(),n=e["concept-quiz"].questions;return window.__quizState={sprintId:t,questions:n,current:0,correct:0,answered:!1},$t(0,n,s,t)}function $t(t,e,s,n){let a=e[t],i=s==="zh"?a.qZh:a.q,c=a.options.map((o,l)=>`
    <button id="opt-${l}" onclick="window.__answerQuiz(${l})"
            class="terminal-card p-3 text-left text-sm text-ap-text hover:bg-ap-surface-hover transition-colors w-full">
      <span class="text-ap-green mr-2">${String.fromCharCode(65+l)}.</span> ${o}
    </button>
  `).join("");return`
    <a href="#/sprint/${n}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${r("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath quiz --question ${t+1}/${e.length}</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${r("games.concept-quiz")}</h1>
    <div class="text-ap-text-muted text-xs mb-6">${t+1} / ${e.length}</div>

    <div id="quiz-area">
      <div class="text-ap-text text-sm font-bold mb-4">${i}</div>
      <div class="flex flex-col gap-2">${c}</div>
    </div>
    <div id="quiz-feedback" class="mt-4"></div>
    <div id="quiz-next" class="mt-4 hidden"></div>
  `}var wt=$(()=>{"use strict";w();y();S();window.__answerQuiz=t=>{let e=window.__quizState;if(e.answered)return;e.answered=!0;let s=e.questions[e.current],n=t===s.answer;n&&e.correct++;let a=document.getElementById(`opt-${t}`),i=document.getElementById(`opt-${s.answer}`);n?a?.classList.add("border-ap-green","bg-ap-green-dim"):(a?.classList.add("border-ap-red","bg-ap-red-dim"),i?.classList.add("border-ap-green","bg-ap-green-dim"));for(let l=0;l<s.options.length;l++)document.getElementById(`opt-${l}`)?.classList.add("pointer-events-none");let c=document.getElementById("quiz-feedback");c&&(c.innerHTML=n?'<div class="text-ap-green text-sm">\u2713 Correct!</div>':`<div class="text-ap-red text-sm">\u2717 Wrong \u2014 the answer is ${String.fromCharCode(65+s.answer)}</div>`);let o=document.getElementById("quiz-next");if(o)if(o.classList.remove("hidden"),e.current<e.questions.length-1)o.innerHTML=`
        <button onclick="window.__nextQuestion()"
                class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
          Next \u2192
        </button>
      `;else{let l=Math.round(e.correct/e.questions.length*100),u=d();B(u,`s${e.sprintId}-concept-quiz`,l),o.innerHTML=`
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">${l}%</div>
          <div class="text-ap-text text-sm">${e.correct}/${e.questions.length} correct</div>
          <div class="flex gap-3 justify-center mt-4">
            <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                    class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
              ${r("games.play-again")}
            </button>
            <a href="#/sprint/${e.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
              ${r("games.back")}
            </a>
          </div>
        </div>
      `}};window.__nextQuestion=()=>{let t=window.__quizState;t.current++,t.answered=!1;let e=x(),s=document.querySelector("main");s&&(s.innerHTML=$t(t.current,t.questions,e,t.sprintId))}});var kt={};z(kt,{renderPromptBuilder:()=>Jt});async function Jt(t){let e=await _(`sprint-${t}/games.json`),s=x(),n=e["prompt-builder"].challenges,a=n[0];return window.__pbState={sprintId:t,challenges:n,currentChallenge:0,placed:[],available:[...a.parts].sort(()=>Math.random()-.5)},Vt(a,s,t)}function Vt(t,e,s){let n=window.__pbState,a=e==="zh"?t.instructionZh:t.instruction,i=n.available.map((o,l)=>`
    <button onclick="window.__placePart(${l})"
            class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-green transition-all inline-block m-1">
      ${o}
    </button>
  `).join(""),c=n.placed.length>0?n.placed.map((o,l)=>`
      <button onclick="window.__removePart(${l})"
              class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-red transition-all inline-block m-1 bg-ap-green-dim">
        ${o}
      </button>
    `).join(""):'<span class="text-ap-text-muted text-xs">Tap code parts below to build the call...</span>';return`
    <a href="#/sprint/${s}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${r("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath prompt-builder</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${r("games.prompt-builder")}</h1>
    <p class="text-ap-text text-sm mb-6">${a}</p>

    <div class="terminal-card mb-4">
      <div class="terminal-card-header">
        <div class="terminal-dot terminal-dot-red"></div>
        <div class="terminal-dot terminal-dot-yellow"></div>
        <div class="terminal-dot terminal-dot-green"></div>
        <span class="text-ap-text-muted text-xs ml-2">your code</span>
      </div>
      <div id="pb-placed" class="p-3 min-h-[80px]">${c}</div>
    </div>

    <div class="text-ap-text-muted text-xs mb-2">Available parts:</div>
    <div id="pb-available" class="mb-4">${i}</div>

    <button onclick="window.__checkPromptBuilder()"
            class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
      Check
    </button>
    <div id="pb-result" class="mt-4"></div>
  `}var St=$(()=>{"use strict";w();y();S();window.__placePart=t=>{let e=window.__pbState,s=e.available.splice(t,1)[0];e.placed.push(s),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__removePart=t=>{let e=window.__pbState,s=e.placed.splice(t,1)[0];e.available.push(s),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__checkPromptBuilder=()=>{let t=window.__pbState,e=t.challenges[t.currentChallenge],s=JSON.stringify(t.placed)===JSON.stringify(e.correct),n=s?100:0,a=d();B(a,`s${t.sprintId}-prompt-builder`,n);let i=document.getElementById("pb-result");i&&(i.innerHTML=s?`
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">\u2713 Correct!</div>
          <div class="flex gap-3 justify-center mt-4">
            <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                    class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
              ${r("games.play-again")}
            </button>
            <a href="#/sprint/${t.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
              ${r("games.back")}
            </a>
          </div>
        </div>
      `:`
        <div class="text-ap-red text-sm mb-2">Not quite \u2014 try rearranging the parts.</div>
        <div class="text-ap-text-muted text-xs">Expected:</div>
        <div class="code-block text-xs mt-1">${e.correct.join(`
`)}</div>
      `)}});var zt={};z(zt,{renderRoadmap:()=>Ut});async function Ut(){let t=d(),e=await L("sprints.json"),s=x(),n=e.map(i=>{let c=s==="zh"?i.titleZh:i.title,o=s==="zh"?i.projectZh:i.project,l=!!t.projects[`s${i.id}`],u=i.id===t.currentSprint,p=i.id>t.currentSprint,g=r("roadmap.locked"),h="text-ap-text-muted",b="border-ap-border",m="border-ap-border";return l?(g=r("roadmap.complete"),h="text-ap-green",b="border-ap-green bg-ap-green-dim",m="border-ap-green"):u&&(g=r("roadmap.active"),h="text-ap-amber",b="border-ap-amber bg-ap-amber-dim"),`
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
      `}).join(""),a="";try{let i=await L("bonus-projects.json"),c={easy:"text-ap-green bg-ap-green-dim",medium:"text-ap-amber bg-ap-amber-dim",hard:"text-ap-red bg-ap-red-dim"};a=i.map(o=>{let l=s==="zh"?o.titleZh:o.title,u=s==="zh"?o.descriptionZh:o.description,p=t.bonusProjects[o.id];return`
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
    <h1 class="text-ap-text text-xl font-bold mb-6">${r("roadmap.title")}</h1>
    <div class="ml-2">${n}</div>

    ${a?`
    <div class="mt-10">
      <div class="text-ap-green text-sm mb-1">$ agentpath bonus --list</div>
      <h2 class="text-ap-text text-lg font-bold mb-4">Bonus Projects (12)</h2>
      <div class="flex flex-col gap-3">${a}</div>
    </div>
    `:""}
  `}var jt=$(()=>{"use strict";w();y();S();window.__startBonus=t=>{let e=d();F(e,t,"in-progress"),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__completeBonus=t=>{let e=d();F(e,t,"complete"),window.dispatchEvent(new HashChangeEvent("hashchange"))}});function _t(t,e=5){let s=[{key:"python",label:"Python"},{key:"llm-apis",label:"LLM APIs"},{key:"agent-frameworks",label:"Agents"},{key:"rag",label:"RAG"},{key:"mcp",label:"MCP"},{key:"multi-agent",label:"Multi-Agent"}],n=150,a=150,i=100,c=s.length;function o(m,f){let v=(m-90)*(Math.PI/180);return[n+f*Math.cos(v),a+f*Math.sin(v)]}let u=[.2,.4,.6,.8,1].map(m=>`<polygon points="${s.map((v,k)=>{let E=360/c*k;return o(E,i*m).join(",")}).join(" ")}" fill="none" stroke="#334155" stroke-width="0.5"/>`).join(""),p=s.map((m,f)=>{let v=360/c*f,[k,E]=o(v,i);return`<line x1="${n}" y1="${a}" x2="${k}" y2="${E}" stroke="#334155" stroke-width="0.5"/>`}).join(""),g=s.map((m,f)=>{let v=(t[m.key]||0)/e,k=360/c*f;return o(k,i*v).join(",")}).join(" "),h=s.map((m,f)=>{let v=360/c*f,[k,E]=o(v,i+20),G=k<n-10?"end":k>n+10?"start":"middle",Tt=t[m.key]||0;return`<text x="${k}" y="${E}" text-anchor="${G}" fill="#94a3b8" font-size="10" font-family="monospace">${m.label} (${Tt})</text>`}).join(""),b=s.map((m,f)=>{let v=(t[m.key]||0)/e,k=360/c*f,[E,G]=o(k,i*v);return`<circle cx="${E}" cy="${G}" r="3" fill="#00ff88"/>`}).join("");return`
    <svg viewBox="0 0 300 300" width="300" height="300" class="mx-auto" role="img" aria-label="Skills radar chart">
      <title>Skills Radar</title>
      ${u}
      ${p}
      <polygon points="${g}" fill="rgba(0,255,136,0.15)" stroke="#00ff88" stroke-width="1.5"/>
      ${b}
      ${h}
    </svg>
  `}var Lt=$(()=>{"use strict"});function Pt(t,e){let s=x(),n=s==="zh"?t.nameZh:t.name,a=s==="zh"?t.descZh:t.desc,i=t.type==="project"?"\u{1F3C6}":"\u2B50";return`
    <div class="${e?"badge-earned":"badge-locked"} rounded-lg p-3 text-center">
      <div class="text-lg mb-1">${e?i:"\u{1F512}"}</div>
      <div class="text-xs font-bold">${n}</div>
      <div class="text-xs opacity-70 mt-1">${a}</div>
    </div>
  `}var Et=$(()=>{"use strict";y()});var Ct={};z(Ct,{renderProfile:()=>Yt});async function Yt(){let t=d(),e=await L("badges.json"),s=x(),n=N(t),a=s==="zh"?n.current.title.split(" ")[0]:n.current.titleEn,i=e.map(u=>Pt(u,t.badges.includes(u.id))).join(""),c=Object.values(t.projects).filter(Boolean).length,o=Object.keys(t.lessons).length+Object.keys(t.milestones).length,l="";try{let u=await L("next-steps.json"),p={Certification:"text-ap-green bg-ap-green-dim",Community:"text-ap-indigo bg-ap-indigo-dim",Portfolio:"text-ap-amber bg-ap-amber-dim","Personal Brand":"text-ap-amber bg-ap-amber-dim",Networking:"text-ap-indigo bg-ap-indigo-dim","Skill Depth":"text-ap-green bg-ap-green-dim","Emerging Tech":"text-ap-red bg-ap-red-dim",Research:"text-ap-indigo bg-ap-indigo-dim",Career:"text-ap-amber bg-ap-amber-dim",Mastery:"text-ap-green bg-ap-green-dim","Deep Understanding":"text-ap-red bg-ap-red-dim"};l=u.map((g,h)=>{let b=s==="zh"?g.titleZh:g.title,m=s==="zh"?g.descriptionZh:g.description,f=s==="zh"?g.categoryZh:g.category,v=p[g.category]||"text-ap-text-muted bg-ap-surface";return`
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
        <div class="text-ap-text font-bold">${r("dash.level")} ${t.level}: ${a}</div>
        <div class="text-ap-text-dim text-xs">${t.xp.toLocaleString()} ${r("dash.xp")}</div>
      </div>
    </div>

    <!-- Skills Radar -->
    <div class="terminal-card mb-6">
      <div class="terminal-card-header">
        <div class="terminal-dot terminal-dot-red"></div>
        <div class="terminal-dot terminal-dot-yellow"></div>
        <div class="terminal-dot terminal-dot-green"></div>
        <span class="text-ap-text-muted text-xs ml-2">${r("profile.skills")}</span>
      </div>
      <div class="p-4">${_t(t.skills)}</div>
    </div>

    <!-- Badges -->
    <div class="mb-6">
      <div class="text-ap-green text-xs font-bold uppercase mb-3">${r("profile.badges")}</div>
      <div class="grid grid-cols-3 gap-2">${i}</div>
    </div>

    <!-- Stats -->
    <div class="terminal-card mb-6">
      <div class="p-4">
        <div class="text-ap-green text-xs font-bold uppercase mb-3">${r("profile.stats")}</div>
        <div class="grid grid-cols-2 gap-3">
          <div class="text-center">
            <div class="text-ap-green text-xl font-bold">${t.xp.toLocaleString()}</div>
            <div class="text-ap-text-muted text-xs">${r("profile.total-xp")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-amber text-xl font-bold">${t.streak}</div>
            <div class="text-ap-text-muted text-xs">${r("profile.longest-streak")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${c}</div>
            <div class="text-ap-text-muted text-xs">${r("profile.projects-done")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${o}</div>
            <div class="text-ap-text-muted text-xs">${r("profile.days-active")}</div>
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
      ${r("profile.export")}
    </button>
  `}var Mt=$(()=>{"use strict";w();y();S();Lt();Et();window.__exportResume=()=>{let t=d(),e=N(t),s=`AgentPath \u667A\u8DEF \u2014 Skills Summary
Level: ${t.level} (${e.current.titleEn})
XP: ${t.xp}
Skills: Python ${t.skills.python}/5, LLM APIs ${t.skills["llm-apis"]}/5, Agent Frameworks ${t.skills["agent-frameworks"]}/5, RAG ${t.skills.rag}/5, MCP ${t.skills.mcp}/5, Multi-Agent ${t.skills["multi-agent"]}/5`;navigator.clipboard.writeText(s).then(()=>{alert("Copied to clipboard!")})}});var K=[];function C(t,e){let s=[],n=new RegExp("^"+t.replace(/:(\w+)/g,(a,i)=>(s.push(i),"([^/]+)")).replace(/\//g,"\\/")+"$");K.push({pattern:n,keys:s,handler:e})}function qt(t){window.location.hash=t}function J(){let t=()=>{let e=window.location.hash.slice(1)||"/";for(let s of K){let n=e.match(s.pattern);if(n){let a={};s.keys.forEach((i,c)=>{a[i]=n[c+1]}),s.handler(a);return}}qt("/")};window.addEventListener("hashchange",t),t()}w();y();S();y();w();var O=[{id:"dashboard",path:"/",icon:"\u2302",key:"nav.dashboard"},{id:"sprint",path:"/sprint/1",icon:"\u25B6",key:"nav.sprint"},{id:"games",path:"/sprint/1/games",icon:"\u25C6",key:"nav.games"},{id:"roadmap",path:"/roadmap",icon:"\u25C7",key:"nav.roadmap"},{id:"profile",path:"/profile",icon:"\u25CB",key:"nav.profile"}];function Dt(){let t=window.location.hash.slice(1)||"/";return t==="/"?"dashboard":t.includes("/games")?"games":t.includes("/sprint")?"sprint":t.includes("/roadmap")?"roadmap":t.includes("/profile")?"profile":"dashboard"}function at(){let t=d(),e=Dt(),s=t.currentSprint;return O[1].path=`/sprint/${s}`,O[2].path=`/sprint/${s}/games`,`
    <nav aria-label="Main navigation" class="fixed bottom-0 left-0 right-0 bg-ap-surface border-t border-ap-border nav-bottom z-50
                md:fixed md:top-0 md:left-0 md:bottom-0 md:w-48 md:border-t-0 md:border-r md:flex-col">
      <div class="flex justify-around md:flex-col md:justify-start md:pt-6 md:gap-1">
        ${O.map(a=>`
      <button
        onclick="window.location.hash='${a.path}'"
        aria-label="${r(a.key)}"
        ${e===a.id?'aria-current="page"':""}
        class="flex flex-col items-center gap-1 py-2 px-3 text-xs transition-colors
          ${e===a.id?"text-ap-green":"text-ap-text-muted hover:text-ap-text-dim"}"
      >
        <span class="text-lg" aria-hidden="true">${a.icon}</span>
        <span>${r(a.key)}</span>
      </button>
    `).join("")}
      </div>
    </nav>
  `}function rt(){return"pb-20 md:pb-0 md:pl-48"}var X=document.getElementById("app");function W(t){return`
    <div class="${rt()} min-h-screen">
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
    ${at()}
  `}function P(t){X.innerHTML=W(t)}function q(){X.innerHTML=W(`
    <div class="flex items-center justify-center py-20">
      <div class="text-ap-green text-sm glow-green">Loading...</div>
    </div>
  `)}function R(t){X.innerHTML=W(`
    <div class="terminal-card p-6 text-center">
      <div class="text-ap-red text-lg font-bold mb-2">Error</div>
      <div class="text-ap-text-dim text-sm">${t}</div>
      <a href="#/" class="text-ap-green text-sm hover:underline mt-4 inline-block">\u2190 Back to Dashboard</a>
    </div>
  `)}window.__toggleLang=()=>{st(),nt(),window.dispatchEvent(new HashChangeEvent("hashchange"))};et();var It=d();A(It);C("/",async()=>{q();try{let{renderDashboard:t}=await Promise.resolve().then(()=>(lt(),ot));P(await t())}catch{R("Failed to load dashboard")}});C("/sprint/:id",async t=>{q();try{let{renderSprint:e}=await Promise.resolve().then(()=>(dt(),ct));P(await e(Number(t.id)))}catch{R("Failed to load sprint")}});C("/sprint/:id/lesson/:num",async t=>{q();try{let{renderLesson:e}=await Promise.resolve().then(()=>(gt(),mt));P(await e(Number(t.id),t.num))}catch{R("Failed to load lesson")}});C("/sprint/:id/project",async t=>{q();try{let{renderProject:e}=await Promise.resolve().then(()=>(ut(),xt));P(await e(Number(t.id)))}catch{R("Failed to load project")}});C("/sprint/:id/games",t=>{Promise.resolve().then(()=>(vt(),ht)).then(({renderGames:e})=>{P(e(Number(t.id)))})});C("/sprint/:id/games/:game",async t=>{q();try{let e=Number(t.id),s=t.game;if(s==="flash-match"){let{renderFlashMatch:n}=await Promise.resolve().then(()=>(bt(),ft));P(await n(e))}else if(s==="concept-quiz"){let{renderConceptQuiz:n}=await Promise.resolve().then(()=>(wt(),yt));P(await n(e))}else if(s==="prompt-builder"){let{renderPromptBuilder:n}=await Promise.resolve().then(()=>(St(),kt));P(await n(e))}}catch{R("Failed to load game")}});C("/roadmap",async()=>{q();try{let{renderRoadmap:t}=await Promise.resolve().then(()=>(jt(),zt));P(await t())}catch{R("Failed to load roadmap")}});C("/profile",async()=>{q();try{let{renderProfile:t}=await Promise.resolve().then(()=>(Mt(),Ct));P(await t())}catch{R("Failed to load profile")}});J();})();
