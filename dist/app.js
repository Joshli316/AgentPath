"use strict";(()=>{var Fe=Object.defineProperty;var k=(e,t)=>()=>(e&&(t=e(e=0)),t);var _=(e,t)=>{for(var s in t)Fe(e,s,{get:t[s],enumerable:!0})};var re={};_(re,{LEVELS:()=>F,addXP:()=>G,completeLesson:()=>W,completeMilestone:()=>V,completeProject:()=>J,getLevelInfo:()=>O,loadState:()=>p,recordGame:()=>Z,saveState:()=>H,updateBonusProject:()=>K,updateStreak:()=>D});function p(){try{let e=localStorage.getItem(U);if(e){let t=JSON.parse(e);if(typeof t!="object"||t===null)throw new Error("Invalid state shape");let s={...X,...t};return s.xp=Math.max(0,Number(s.xp)||0),s.level=Math.max(1,Math.min(6,Number(s.level)||1)),s.streak=Math.max(0,Number(s.streak)||0),s.currentSprint=Math.max(1,Math.min(6,Number(s.currentSprint)||1)),s.currentDay=Math.max(1,Math.min(10,Number(s.currentDay)||1)),(typeof s.lessons!="object"||s.lessons===null)&&(s.lessons={}),(typeof s.milestones!="object"||s.milestones===null)&&(s.milestones={}),(typeof s.projects!="object"||s.projects===null)&&(s.projects={}),(typeof s.games!="object"||s.games===null)&&(s.games={}),typeof s.skills!="object"||s.skills===null?s.skills={...X.skills}:s.skills={...X.skills,...s.skills},Array.isArray(s.badges)||(s.badges=[]),(typeof s.bonusProjects!="object"||s.bonusProjects===null)&&(s.bonusProjects={}),s.lang!=="en"&&s.lang!=="zh"&&(s.lang="en"),s}}catch{localStorage.removeItem(U)}return{...X}}function H(e){try{localStorage.setItem(U,JSON.stringify(e))}catch{console.warn("AgentPath: unable to save state to localStorage")}}function G(e,t){e.xp=Math.max(0,e.xp+Math.max(0,t));for(let s=F.length-1;s>=0;s--)if(e.xp>=F[s].xp){e.level=F[s].level;break}return H(e),e}function D(e){let t=new Date,s=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;if(e.lastActiveDate===s)return e;let n=new Date(t.getFullYear(),t.getMonth(),t.getDate()-1),r=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`;return e.lastActiveDate===r?e.streak+=1:e.streak=1,e.lastActiveDate=s,H(e),e}function W(e,t){return e.lessons[t]||(e.lessons[t]=!0,G(e,50),D(e)),e}function V(e,t){return e.milestones[t]||(e.milestones[t]=!0,G(e,100),D(e)),e}function J(e,t,s){if(!e.projects[t]){e.projects[t]=!0,G(e,300);let n={s1:"first-agent",s2:"orchestrator",s3:"rag-master",s4:"protocol-builder",s5:"commander",s6:"graduate"};if(n[t]&&!e.badges.includes(n[t])&&e.badges.push(n[t]),s)for(let[r,o]of Object.entries(s))e.skills[r]=Math.min(5,(e.skills[r]||0)+o);D(e)}return e}function Z(e,t,s){let n=Math.min(50,Math.max(10,Math.round(s/2))),r=e.games[t]||{bestScore:0,plays:0};if(e.games[t]={bestScore:Math.max(r.bestScore,s),plays:r.plays+1},s===100){let o={"s1-concept-quiz":"api-master","s2-concept-quiz":"framework-king","s3-concept-quiz":"vector-hero","s4-concept-quiz":"mcp-pro","s5-concept-quiz":"monitor-king","s6-concept-quiz":"interview-pro"};o[t]&&!e.badges.includes(o[t])&&e.badges.push(o[t])}return G(e,n),D(e),e}function K(e,t,s){return e.bonusProjects[t]=s,s==="complete"?(G(e,200),D(e)):H(e),e}function O(e){let t=F.find(r=>r.level===e.level)||F[0],s=F.find(r=>r.level===e.level+1),n=s?(e.xp-t.xp)/(s.xp-t.xp)*100:100;return{current:t,next:s,progress:n}}var U,X,F,j=k(()=>{"use strict";U="agentpath",X={currentSprint:1,currentDay:1,xp:0,level:1,streak:0,lastActiveDate:"",lessons:{},milestones:{},projects:{},games:{},badges:[],skills:{python:0,"llm-apis":0,"agent-frameworks":0,rag:0,mcp:0,"multi-agent":0},lang:"en",bonusProjects:{}},F=[{level:1,title:"\u65B0\u624B Novice",titleEn:"Novice",xp:0},{level:2,title:"\u5B66\u5F92 Apprentice",titleEn:"Apprentice",xp:1e3},{level:3,title:"\u6784\u5EFA\u8005 Builder",titleEn:"Builder",xp:3e3},{level:4,title:"\u5DE5\u5320 Craftsman",titleEn:"Craftsman",xp:6e3},{level:5,title:"\u67B6\u6784\u5E08 Architect",titleEn:"Architect",xp:1e4},{level:6,title:"\u667A\u8005 Agent Master",titleEn:"Agent Master",xp:15e3}]});function oe(){Q=p().lang,document.documentElement.lang=Q}function a(e,t){let s=Ge[e];if(!s)return e;let n=s[Q]||s.en||e;if(t)for(let[r,o]of Object.entries(t))n=n.replaceAll(`{${r}}`,String(o));return n}function $(){return Q}function Oe(e){Q=e,document.documentElement.lang=e;let t=p();t.lang=e,H(t)}function ie(){Oe(Q==="en"?"zh":"en")}var Ge,Q,z=k(()=>{"use strict";j();Ge={"nav.dashboard":{en:"Dashboard",zh:"\u4EEA\u8868\u76D8"},"nav.sprint":{en:"Sprint",zh:"\u51B2\u523A"},"nav.games":{en:"Games",zh:"\u6E38\u620F"},"nav.roadmap":{en:"Roadmap",zh:"\u8DEF\u7EBF\u56FE"},"nav.profile":{en:"Profile",zh:"\u4E2A\u4EBA"},"dash.today":{en:"Today",zh:"\u4ECA\u5929"},"dash.current-sprint":{en:"Current Sprint",zh:"\u5F53\u524D\u51B2\u523A"},"dash.day-of":{en:"Day {n} of 10",zh:"\u7B2C{n}\u5929 / \u517110\u5929"},"dash.xp":{en:"XP",zh:"\u7ECF\u9A8C\u503C"},"dash.streak":{en:"day streak",zh:"\u5929\u8FDE\u7EED\u5B66\u4E60"},"dash.level":{en:"Level",zh:"\u7B49\u7EA7"},"sprint.objectives":{en:"Sprint Objectives",zh:"\u51B2\u523A\u76EE\u6807"},"sprint.lesson":{en:"Lesson",zh:"\u8BFE\u7A0B"},"sprint.project":{en:"Project",zh:"\u9879\u76EE"},"sprint.review":{en:"Review & Games",zh:"\u590D\u4E60\u4E0E\u6E38\u620F"},"lesson.complete":{en:"Mark Complete",zh:"\u6807\u8BB0\u5B8C\u6210"},"lesson.completed":{en:"Completed",zh:"\u5DF2\u5B8C\u6210"},"lesson.try-it":{en:"Try it in iTerm",zh:"\u5728iTerm\u4E2D\u8BD5\u8BD5"},"lesson.key-terms":{en:"Key Terms",zh:"\u5173\u952E\u672F\u8BED"},"lesson.min":{en:"min",zh:"\u5206\u949F"},"project.milestones":{en:"Milestones",zh:"\u91CC\u7A0B\u7891"},"project.stuck":{en:"Stuck? Get a hint",zh:"\u5361\u4F4F\u4E86\uFF1F\u83B7\u53D6\u63D0\u793A"},"project.hint":{en:"Hint",zh:"\u63D0\u793A"},"project.stretch":{en:"Stretch Goals",zh:"\u989D\u5916\u76EE\u6807"},"project.complete":{en:"Project Complete!",zh:"\u9879\u76EE\u5B8C\u6210\uFF01"},"project.mark-complete":{en:"Mark Project Complete",zh:"\u6807\u8BB0\u9879\u76EE\u5B8C\u6210"},"games.select":{en:"Choose a Game",zh:"\u9009\u62E9\u6E38\u620F"},"games.flash-match":{en:"Flash Match",zh:"\u95EA\u914D"},"games.concept-quiz":{en:"Concept Quiz",zh:"\u6982\u5FF5\u6D4B\u9A8C"},"games.prompt-builder":{en:"Prompt Builder",zh:"\u63D0\u793A\u6784\u5EFA"},"games.score":{en:"Score",zh:"\u5F97\u5206"},"games.best":{en:"Best",zh:"\u6700\u4F73"},"games.play-again":{en:"Play Again",zh:"\u518D\u73A9\u4E00\u6B21"},"games.back":{en:"Back to Games",zh:"\u8FD4\u56DE\u6E38\u620F"},"roadmap.title":{en:"Your 12-Week Journey",zh:"\u4F60\u768412\u5468\u65C5\u7A0B"},"roadmap.locked":{en:"Locked",zh:"\u672A\u89E3\u9501"},"roadmap.active":{en:"Active",zh:"\u8FDB\u884C\u4E2D"},"roadmap.complete":{en:"Complete",zh:"\u5DF2\u5B8C\u6210"},"profile.skills":{en:"Skills Radar",zh:"\u6280\u80FD\u96F7\u8FBE"},"profile.badges":{en:"Badges",zh:"\u5FBD\u7AE0"},"profile.stats":{en:"Stats",zh:"\u7EDF\u8BA1"},"profile.export":{en:"Export for Resume",zh:"\u5BFC\u51FA\u7B80\u5386"},"profile.total-xp":{en:"Total XP",zh:"\u603B\u7ECF\u9A8C\u503C"},"profile.projects-done":{en:"Projects Done",zh:"\u5B8C\u6210\u9879\u76EE"},"profile.days-active":{en:"Items Done",zh:"\u5B8C\u6210\u9879\u6570"},"profile.longest-streak":{en:"Longest Streak",zh:"\u6700\u957F\u8FDE\u7EED"},"profile.current-streak":{en:"Current Streak",zh:"\u5F53\u524D\u8FDE\u7EED"},"profile.next-steps":{en:"Next Steps \u2014 Keep Growing",zh:"\u4E0B\u4E00\u6B65\u2014\u2014\u7EE7\u7EED\u6210\u957F"},"games.match-instruction":{en:"Tap a term, then tap its matching definition.",zh:"\u70B9\u51FB\u672F\u8BED\uFF0C\u7136\u540E\u70B9\u51FB\u5339\u914D\u7684\u5B9A\u4E49\u3002"},"games.correct":{en:"Correct!",zh:"\u6B63\u786E\uFF01"},"games.wrong-answer":{en:"Wrong \u2014 the answer is",zh:"\u9519\u8BEF\u2014\u2014\u7B54\u6848\u662F"},"games.next":{en:"Next",zh:"\u4E0B\u4E00\u9898"},"games.complete":{en:"Complete!",zh:"\u5B8C\u6210\uFF01"},"games.time":{en:"Time",zh:"\u7528\u65F6"},"games.attempts":{en:"Attempts",zh:"\u5C1D\u8BD5\u6B21\u6570"},"games.correct-count":{en:"correct",zh:"\u6B63\u786E"},"games.match-desc":{en:"Match terms to definitions",zh:"\u5C06\u672F\u8BED\u4E0E\u5B9A\u4E49\u5339\u914D"},"games.quiz-desc":{en:"Test your knowledge",zh:"\u6D4B\u8BD5\u4F60\u7684\u77E5\u8BC6"},"games.builder-desc":{en:"Assemble API calls",zh:"\u7EC4\u88C5API\u8C03\u7528"},"games.check":{en:"Check",zh:"\u68C0\u67E5"},"games.not-quite":{en:"Not quite \u2014 try rearranging the parts.",zh:"\u4E0D\u592A\u5BF9\u2014\u2014\u8BD5\u8BD5\u91CD\u65B0\u6392\u5217\u3002"},"games.expected":{en:"Expected:",zh:"\u9884\u671F\uFF1A"},"games.available-parts":{en:"Available parts:",zh:"\u53EF\u7528\u90E8\u5206\uFF1A"},"games.tap-to-build":{en:"Tap code parts below to build the call...",zh:"\u70B9\u51FB\u4E0B\u65B9\u4EE3\u7801\u7247\u6BB5\u6765\u6784\u5EFA\u8C03\u7528..."},"roadmap.weeks":{en:"Weeks",zh:"\u5468"},"roadmap.bonus-title":{en:"Bonus Projects",zh:"\u989D\u5916\u9879\u76EE"},"roadmap.start":{en:"Start",zh:"\u5F00\u59CB"},"roadmap.mark-complete":{en:"Complete",zh:"\u5B8C\u6210"},"roadmap.done":{en:"Done",zh:"\u5DF2\u5B8C\u6210"},"roadmap.view-sprint":{en:"View Sprint",zh:"\u67E5\u770B\u51B2\u523A"},"dash.xp-to-next":{en:"XP to next",zh:"\u7ECF\u9A8C\u503C\u5230\u4E0B\u4E00\u7EA7"},"sprint.current":{en:"current",zh:"\u5F53\u524D"},"sprint.day-n":{en:"Day {n}",zh:"\u7B2C{n}\u5929"},"alert.copied":{en:"Copied to clipboard!",zh:"\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01"}},Q="en"});async function C(e){let s=`content/${$()}/${e}`;if(E.has(s))return E.get(s);let n=await fetch(s);if(!n.ok){let o=`content/en/${e}`;if(E.has(o))return E.get(o);let c=await fetch(o);if(!c.ok)throw new Error(`Content not found: ${e}`);let i=await c.json();return E.set(o,i),i}let r=await n.json();return E.set(s,r),r}async function M(e){let t=`content/shared/${e}`;if(E.has(t))return E.get(t);let s=await fetch(t);if(!s.ok)throw new Error(`Shared content not found: ${e}`);let n=await s.json();return E.set(t,n),n}function le(){E.clear()}var E,L=k(()=>{"use strict";z();E=new Map});function Xe(e,t=20){let s=Math.max(0,Math.min(100,e)),n=Math.round(s/100*t),r=t-n;return'<span class="text-ap-green">'+"\u2593".repeat(n)+'</span><span class="text-ap-text-muted">'+"\u2591".repeat(r)+"</span>"}function ee(e,t){let s=Math.max(0,Math.min(100,e));return`
    <div class="flex items-center gap-3" role="progressbar" aria-valuenow="${Math.round(s)}" aria-valuemin="0" aria-valuemax="100" aria-label="${t||`${Math.round(s)}% complete`}">
      <div class="progress-terminal text-sm whitespace-nowrap" aria-hidden="true">${Xe(s,15)}</div>
      <span class="text-ap-text-dim text-xs">${Math.round(s)}%</span>
      ${t?`<span class="text-ap-text-muted text-xs">${t}</span>`:""}
    </div>
  `}var pe=k(()=>{"use strict"});function l(e){return e.replace(/[&<>"']/g,t=>Je[t])}function u(e,t){let s=$(),n=`${t}Zh`;return s==="zh"&&n in e?String(e[n]):String(e[t]??"")}function B(e){return`
    <div class="terminal-card-header">
      <div class="terminal-dot terminal-dot-red" aria-hidden="true"></div>
      <div class="terminal-dot terminal-dot-yellow" aria-hidden="true"></div>
      <div class="terminal-dot terminal-dot-green" aria-hidden="true"></div>
      <span class="text-ap-text-muted text-xs ml-2">${l(e)}</span>
    </div>`}var Je,P=k(()=>{"use strict";z();Je={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}});var me={};_(me,{renderDashboard:()=>Ke});async function Ke(){let e=p(),t=await M("sprints.json"),s=Math.max(0,Math.min(t.length-1,e.currentSprint-1)),n=t[s],r=$(),o=O(e),c=u(n,"title"),i=u(n,"project"),d=r==="zh"?o.current.title.split(" ")[0]:o.current.titleEn,x=n.days.filter(f=>f.type==="lesson").length,m=n.days.filter(f=>f.type==="lesson").filter(f=>e.lessons[`s${n.id}-${f.ref}`]).length,h=e.projects[`s${n.id}`]||!1,v=Math.round((m+(h?1:0))/(x+1)*100),S=Math.max(0,Math.min(n.days.length-1,e.currentDay-1)),w=n.days[S],g="",b="",y="";if(w)if(w.type==="lesson"){let f=w.ref.replace("lesson-","");g=`${a("sprint.lesson")} ${f}`,b="~20 "+a("lesson.min"),y=`#/sprint/${n.id}/lesson/${f}`}else w.type==="project"?(g=i,b="~60 "+a("lesson.min"),y=`#/sprint/${n.id}/project`):(g=a("sprint.review"),b="~30 "+a("lesson.min"),y=`#/sprint/${n.id}/games`);return`
    <!-- Status bar -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <div class="text-ap-green font-bold text-xl glow-green">${e.xp.toLocaleString()} <span class="text-xs font-normal">${a("dash.xp")}</span></div>
        <div class="text-ap-amber font-bold glow-amber">\u{1F525} ${e.streak} <span class="text-xs font-normal">${a("dash.streak")}</span></div>
      </div>
      <div class="text-ap-text-dim text-sm">${a("dash.level")} ${e.level}: ${d}</div>
    </div>

    <!-- Current Sprint Card -->
    <div class="terminal-card mb-6">
      ${B(a("dash.current-sprint"))}
      <div class="p-4">
        <div class="flex items-center gap-2 mb-1">
          <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${n.id}</span>
          <span class="text-ap-text-muted text-xs">${a("dash.day-of",{n:e.currentDay})}</span>
        </div>
        <div class="text-ap-text text-lg font-bold mb-1">${c}</div>
        <div class="text-ap-text-dim text-sm mb-3">${i}</div>
        ${ee(v)}
      </div>
    </div>

    <!-- Today's Task -->
    <div class="terminal-card mb-6">
      <div class="p-4">
        <div class="text-ap-green text-xs mb-2">$ agentpath --today</div>
        <a href="${y}" class="flex items-center justify-between group">
          <div>
            <div class="text-ap-text font-bold group-hover:text-ap-green transition-colors">${g}</div>
            <div class="text-ap-text-muted text-xs mt-1">${b}</div>
          </div>
          <span class="text-ap-green text-2xl group-hover:translate-x-1 transition-transform">\u2192</span>
        </a>
      </div>
    </div>

    <!-- Level Progress -->
    <div class="terminal-card">
      <div class="p-4">
        <div class="text-ap-text-dim text-xs mb-2">${a("dash.level")} ${e.level} \u2192 ${o.next?o.next.level:"MAX"}</div>
        ${ee(o.progress,o.next?`${o.next.xp-e.xp} ${a("dash.xp-to-next")}`:"MAX LEVEL")}
      </div>
    </div>
  `}var ge=k(()=>{"use strict";j();z();L();pe();P()});var xe={};_(xe,{renderSprint:()=>Ye});async function Ye(e){let t=p(),n=(await M("sprints.json"))[e-1];if(!n)return`<div class="text-ap-red text-sm">$ error: sprint ${e} not found</div>`;let r=u(n,"title"),o=u(n,"project"),c=n.days.map(i=>{let d="\u{1F4D6}",x=a("sprint.lesson"),m=`#/sprint/${e}/lesson/${i.ref.replace("lesson-","")}`,h=!1;i.type==="lesson"?h=!!t.lessons[`s${e}-${i.ref}`]:i.type==="project"?(d="\u{1F528}",x=a("sprint.project"),m=`#/sprint/${e}/project`,h=!!t.projects[`s${e}`]):(d="\u25C6",x=a("sprint.review"),m=`#/sprint/${e}/games`);let v=i.day===t.currentDay&&e===t.currentSprint,S=e>t.currentSprint;return`
        <a href="${S?"#":m}"
           ${S?'aria-disabled="true" tabindex="-1"':""}
           aria-label="Day ${i.day}: ${x}${h?" (completed)":""}${v?" (current)":""}"
           class="terminal-card p-3 flex items-center gap-3 ${v?"ring-1 ring-ap-green":""} ${S?"opacity-40 cursor-not-allowed pointer-events-none":"hover:bg-ap-surface-hover cursor-pointer"} transition-colors">
          <div class="text-lg w-8 text-center">${h?'<span class="text-ap-green">\u2713</span>':d}</div>
          <div class="flex-1">
            <div class="text-ap-text text-sm font-bold">${a("sprint.day-n",{n:i.day})}</div>
            <div class="text-ap-text-muted text-xs">${x}</div>
          </div>
          ${v?`<span class="text-ap-green text-xs">\u2190 ${a("sprint.current")}</span>`:""}
        </a>
      `}).join("");return`
    <div class="text-ap-green text-sm mb-1">$ agentpath sprint ${e}</div>
    <div class="flex items-center gap-2 mb-1">
      <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${e}</span>
      <span class="text-ap-text-muted text-xs">${a("roadmap.weeks")} ${n.weeks}</span>
    </div>
    <h1 class="text-ap-text text-2xl font-bold mb-1">${r}</h1>
    <p class="text-ap-text-dim text-sm mb-6">${a("sprint.project")}: ${o}</p>

    <div class="flex flex-col gap-2">
      ${c}
    </div>
  `}var ue=k(()=>{"use strict";j();z();L();P()});var he={};_(he,{renderLesson:()=>We});function Ue(e){let t=$();switch(e.type){case"text":return`<div class="text-ap-text text-base leading-relaxed mb-4">${l(e.content||"")}</div>`;case"code":return`
        <div class="code-block mb-4">
          <div class="text-ap-text-muted text-xs mb-2">${l(e.language||"code")}</div>
          <pre><code>${l(e.content||"")}</code></pre>
        </div>
      `;case"callout":{let s={tip:"border-ap-green bg-ap-green-dim",warning:"border-ap-amber bg-ap-amber-dim",info:"border-ap-indigo bg-ap-indigo-dim"},n={tip:"\u{1F4A1}",warning:"\u26A0\uFE0F",info:"\u2139\uFE0F"},r=e.variant||"info";return`
        <div class="border-l-2 ${s[r]} p-3 rounded-r mb-4">
          <div class="text-base">${n[r]} ${l(e.content||"")}</div>
        </div>
      `}case"try-it":return`
        <div class="terminal-card mb-4">
          ${B("iTerm")}
          <div class="p-3">
            <div class="text-ap-green text-xs mb-2">$ ${a("lesson.try-it")}</div>
            <div class="text-ap-text text-sm font-mono">${l(e.prompt||"")}</div>
          </div>
        </div>
      `;case"key-terms":return`
        <div class="mb-4">
          <div class="text-ap-green text-xs font-bold mb-2 uppercase">${a("lesson.key-terms")}</div>
          <div class="flex flex-col gap-2">
            ${(e.terms||[]).map(s=>`
              <div class="terminal-card p-2">
                <span class="text-ap-green font-bold text-sm">${l(t==="zh"?s.termZh:s.term)}</span>
                <span class="text-ap-text-muted text-xs ml-2">\u2014 ${l(t==="zh"?s.definitionZh:s.definition)}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;default:return""}}async function We(e,t){let s=p(),n=await C(`sprint-${e}/lesson-${t.padStart(2,"0")}.json`),r=u(n,"title"),o=`s${e}-lesson-${t.padStart(2,"0")}`,c=!!s.lessons[o],i=n.steps.map(Ue).join("");return`
    <a href="#/sprint/${e}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${e}</a>
    <div class="flex items-center gap-3 mt-3 mb-1">
      <span class="text-ap-green text-xs">${a("sprint.lesson")} ${t}</span>
      <span class="text-ap-text-muted text-xs">~${n.duration} ${a("lesson.min")}</span>
    </div>
    <h1 class="text-ap-text text-2xl font-bold mb-6">${r}</h1>

    ${i}

    <div class="mt-8 mb-4">
      ${c?`<div class="text-ap-green text-sm font-bold">\u2713 ${a("lesson.completed")} (+50 XP)</div>`:`<button onclick="window.__completeLesson('${o}', ${e})"
               class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
               ${a("lesson.complete")}
             </button>`}
    </div>
  `}var fe=k(()=>{"use strict";j();z();L();P();window.__completeLesson=(e,t)=>{let s=p();if(W(s,e),t===s.currentSprint){let n=Object.keys(s.lessons).filter(r=>r.startsWith(`s${t}-`)).length;s.currentDay=Math.min(n+1,10),H(s)}window.dispatchEvent(new HashChangeEvent("hashchange"))}});var ve={};_(ve,{renderProject:()=>Ve});async function Ve(e){let t=p(),s=await C(`sprint-${e}/project.json`),n=$(),r=u(s,"title"),o=u(s,"description"),c=`s${e}`,i=!!t.projects[c],d=s.milestones.every(v=>!!t.milestones[`${c}-${v.id}`]),x=s.milestones.map(v=>{let S=`${c}-${v.id}`,w=!!t.milestones[S],g=u(v,"label"),b=s.hints[v.id]||[];return`
        <div class="terminal-card p-3 mb-2">
          <div class="flex items-center gap-3">
            <button onclick="window.__toggleMilestone('${S}', ${e})"
                    role="checkbox" aria-checked="${w?"true":"false"}" aria-label="${l(g)}"
                    class="w-6 h-6 border ${w?"bg-ap-green border-ap-green text-ap-bg":"border-ap-text-muted"} rounded text-xs flex items-center justify-center flex-shrink-0">
              ${w?"\u2713":""}
            </button>
            <span class="text-sm ${w?"text-ap-text-dim line-through":"text-ap-text"}">${l(g)}</span>
          </div>
          ${!w&&b.length>0?`<details class="mt-2 ml-8">
                  <summary class="text-ap-amber text-xs cursor-pointer hover:underline">${a("project.stuck")}</summary>
                  <div class="mt-2 flex flex-col gap-1">
                    ${b.map((y,f)=>`<div class="text-ap-text-dim text-xs">\u{1F4A1} ${a("project.hint")} ${f+1}: ${l(y)}</div>`).join("")}
                  </div>
                </details>`:""}
        </div>
      `}).join(""),h=(n==="zh"?s.stretchZh:s.stretch).map(v=>`<li class="text-ap-text-dim text-sm">${l(v)}</li>`).join("");return`
    <a href="#/sprint/${e}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${e}</a>
    <div class="text-ap-green text-xs mt-3 mb-1">$ agentpath project --sprint ${e}</div>
    <h1 class="text-ap-text text-2xl font-bold mb-2">${l(r)}</h1>
    <p class="text-ap-text-dim text-base mb-6">${l(o)}</p>

    <div class="text-ap-green text-xs font-bold uppercase mb-3">${a("project.milestones")}</div>
    ${x}

    ${d&&!i?`<button onclick="window.__completeProject('${c}', ${e})"
             class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm mt-4 hover:opacity-90 transition-opacity">
             ${a("project.mark-complete")}
           </button>`:""}
    ${i?`<div class="text-ap-green font-bold text-sm mt-4">\u2713 ${a("project.complete")} (+300 XP)</div>`:""}

    <div class="mt-8">
      <div class="text-ap-amber text-xs font-bold uppercase mb-2">${a("project.stretch")}</div>
      <ul class="list-disc list-inside flex flex-col gap-1">${h}</ul>
    </div>
  `}var be=k(()=>{"use strict";j();z();L();P();window.__toggleMilestone=(e,t)=>{let s=p();s.milestones[e]||V(s,e),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__completeProject=async(e,t)=>{let s=p();try{let r=(await M("sprints.json"))[t-1];J(s,e,r?.skills)}catch{J(s,e)}if(s.currentSprint===t&&t<6){s.currentSprint=t+1,s.currentDay=1;let{saveState:n}=await Promise.resolve().then(()=>(j(),re));n(s)}window.dispatchEvent(new HashChangeEvent("hashchange"))}});var $e={};_($e,{renderGames:()=>Ie});function Ie(e){let t=p(),n=[{id:"flash-match",icon:"\u26A1",name:a("games.flash-match"),desc:a("games.match-desc"),route:`#/sprint/${e}/games/flash-match`,best:t.games[`s${e}-flash-match`]?.bestScore},{id:"concept-quiz",icon:"\u{1F9E0}",name:a("games.concept-quiz"),desc:a("games.quiz-desc"),route:`#/sprint/${e}/games/concept-quiz`,best:t.games[`s${e}-concept-quiz`]?.bestScore},{id:"prompt-builder",icon:"\u{1F527}",name:a("games.prompt-builder"),desc:a("games.builder-desc"),route:`#/sprint/${e}/games/prompt-builder`,best:t.games[`s${e}-prompt-builder`]?.bestScore}].map(r=>`
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
    <a href="#/sprint/${e}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 Sprint ${e}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath games --sprint ${e}</div>
    <h1 class="text-ap-text text-2xl font-bold mb-6">${a("games.select")}</h1>
    <div class="flex flex-col gap-3">${n}</div>
  `}var ye=k(()=>{"use strict";j();z()});var we={};_(we,{renderFlashMatch:()=>et});async function et(e){let t=await C(`sprint-${e}/games.json`),s=$(),n=t["flash-match"]?.pairs||[];if(n.length===0)return`<div class="text-ap-text-muted text-sm">$ error: no flash-match pairs found for sprint ${e}</div>`;let r=[...n].sort(()=>Math.random()-.5),o=r.slice(0,Math.min(6,r.length)),c=o.map((m,h)=>({id:h,text:s==="zh"?m.termZh:m.term})),i=[...o].sort(()=>Math.random()-.5).map(m=>({id:o.indexOf(m),text:s==="zh"?m.definitionZh:m.definition}));window.__flashMatchState={sprintId:e,selectedTerm:null,matched:new Set,attempts:0,startTime:Date.now(),total:o.length};let d=c.map(m=>`
    <button id="term-${m.id}" onclick="window.__selectTerm(${m.id})"
            class="terminal-card p-3 text-left text-sm text-ap-green hover:bg-ap-green-dim transition-colors min-h-[44px]">
      ${l(m.text)}
    </button>
  `).join(""),x=i.map(m=>`
    <button id="def-${m.id}" onclick="window.__selectDef(${m.id})"
            class="terminal-card p-3 text-left text-sm text-ap-text hover:bg-ap-surface-hover transition-colors min-h-[44px]">
      ${l(m.text)}
    </button>
  `).join("");return`
    <a href="#/sprint/${e}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${a("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath flash-match</div>
    <h1 class="text-ap-text text-2xl font-bold mb-2">${a("games.flash-match")}</h1>
    <p class="text-ap-text-muted text-xs mb-6">${a("games.match-instruction")}</p>

    <div id="flash-match-area" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">${d}</div>
      <div class="flex flex-col gap-2">${x}</div>
    </div>
    <div id="flash-match-result" class="mt-6 hidden" role="status" aria-live="polite"></div>
  `}var ke=k(()=>{"use strict";j();z();L();P();window.__selectTerm=e=>{let t=window.__flashMatchState;t.matched.has(e)||(document.querySelectorAll("[id^='term-']").forEach(s=>s.classList.remove("ring-1","ring-ap-green")),document.getElementById(`term-${e}`)?.classList.add("ring-1","ring-ap-green"),t.selectedTerm=e)};window.__selectDef=e=>{let t=window.__flashMatchState;if(t.selectedTerm===null||t.matched.has(e))return;t.attempts++;let s=document.getElementById(`term-${t.selectedTerm}`),n=document.getElementById(`def-${e}`);if(t.selectedTerm===e){if(t.matched.add(e),s?.classList.add("opacity-30","pointer-events-none"),n?.classList.add("opacity-30","pointer-events-none"),s?.classList.remove("ring-1","ring-ap-green"),t.selectedTerm=null,t.matched.size===t.total){let r=Math.round((Date.now()-t.startTime)/1e3),o=Math.round(t.total/t.attempts*100),c=Math.min(100,o),i=p();Z(i,`s${t.sprintId}-flash-match`,c);let d=document.getElementById("flash-match-result");d&&(d.classList.remove("hidden"),d.innerHTML=`
          <div class="terminal-card p-4 text-center">
            <div class="text-ap-green text-2xl font-bold glow-green mb-2">\u2713 ${a("games.complete")}</div>
            <div class="text-ap-text text-sm">${a("games.score")}: ${c}% | ${a("games.time")}: ${r}s | ${a("games.attempts")}: ${t.attempts}</div>
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
        `)}}else n?.classList.add("border-ap-red"),setTimeout(()=>n?.classList.remove("border-ap-red"),500),s?.classList.remove("ring-1","ring-ap-green"),t.selectedTerm=null}});var je={};_(je,{renderConceptQuiz:()=>tt});async function tt(e){let t=await C(`sprint-${e}/games.json`),s=$(),n=t["concept-quiz"]?.questions||[];return n.length===0?`<div class="text-ap-text-muted text-sm">$ error: no quiz questions found for sprint ${e}</div>`:(window.__quizState={sprintId:e,questions:n,current:0,correct:0,answered:!1},Se(0,n,s,e))}function Se(e,t,s,n){let r=t[e],o=s==="zh"?r.qZh:r.q,c=r.options.map((i,d)=>`
    <button id="opt-${d}" onclick="window.__answerQuiz(${d})"
            class="terminal-card p-3 text-left text-sm text-ap-text hover:bg-ap-surface-hover transition-colors w-full">
      <span class="text-ap-green mr-2">${String.fromCharCode(65+d)}.</span> ${l(i)}
    </button>
  `).join("");return`
    <a href="#/sprint/${n}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${a("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath quiz --question ${e+1}/${t.length}</div>
    <h1 class="text-ap-text text-2xl font-bold mb-2">${a("games.concept-quiz")}</h1>
    <div class="text-ap-text-muted text-xs mb-6">${e+1} / ${t.length}</div>

    <div id="quiz-area">
      <div class="text-ap-text text-sm font-bold mb-4">${l(o)}</div>
      <div class="flex flex-col gap-2">${c}</div>
    </div>
    <div id="quiz-feedback" class="mt-4" role="status" aria-live="polite"></div>
    <div id="quiz-next" class="mt-4 hidden" role="status" aria-live="polite"></div>
  `}var ze=k(()=>{"use strict";j();z();L();P();window.__answerQuiz=e=>{let t=window.__quizState;if(t.answered)return;t.answered=!0;let s=t.questions[t.current],n=e===s.answer;n&&t.correct++;let r=document.getElementById(`opt-${e}`),o=document.getElementById(`opt-${s.answer}`);n?r?.classList.add("border-ap-green","bg-ap-green-dim"):(r?.classList.add("border-ap-red","bg-ap-red-dim"),o?.classList.add("border-ap-green","bg-ap-green-dim"));for(let d=0;d<s.options.length;d++)document.getElementById(`opt-${d}`)?.classList.add("pointer-events-none");let c=document.getElementById("quiz-feedback");c&&(c.innerHTML=n?`<div class="text-ap-green text-sm">\u2713 ${a("games.correct")}</div>`:`<div class="text-ap-red text-sm">\u2717 ${a("games.wrong-answer")} ${String.fromCharCode(65+s.answer)}</div>`);let i=document.getElementById("quiz-next");if(i)if(i.classList.remove("hidden"),t.current<t.questions.length-1)i.innerHTML=`
        <button onclick="window.__nextQuestion()"
                class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
          ${a("games.next")} \u2192
        </button>
      `;else{let d=Math.round(t.correct/t.questions.length*100),x=p();Z(x,`s${t.sprintId}-concept-quiz`,d),i.innerHTML=`
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">${d}%</div>
          <div class="text-ap-text text-sm">${t.correct}/${t.questions.length} ${a("games.correct-count")}</div>
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
      `}};window.__nextQuestion=()=>{let e=window.__quizState;if(e.current>=e.questions.length-1)return;e.current++,e.answered=!1;let t=$(),s=document.querySelector("main");s&&(s.innerHTML=Se(e.current,e.questions,t,e.sprintId))}});var Pe={};_(Pe,{renderPromptBuilder:()=>st});async function st(e){let s=(await C(`sprint-${e}/games.json`))["prompt-builder"]?.challenges||[];if(s.length===0)return`<div class="text-ap-text-muted text-sm">$ error: no prompt-builder challenges found for sprint ${e}</div>`;let n=s[0];return window.__pbState={sprintId:e,challenges:s,currentChallenge:0,placed:[],available:[...n.parts].sort(()=>Math.random()-.5),recorded:!1},nt(n,e)}function nt(e,t){let s=window.__pbState,n=u(e,"instruction");return`
    <a href="#/sprint/${t}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">\u2190 ${a("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath prompt-builder</div>
    <h1 class="text-ap-text text-2xl font-bold mb-2">${a("games.prompt-builder")}</h1>
    <p class="text-ap-text text-sm mb-6">${l(n)}</p>

    <div class="terminal-card mb-4">
      ${B("your code")}
      <div id="pb-placed" class="p-3 min-h-[80px]">${Me(s)}</div>
    </div>

    <div class="text-ap-text-muted text-xs mb-2">${a("games.available-parts")}</div>
    <div id="pb-available" class="mb-4">${_e(s)}</div>

    <button onclick="window.__checkPromptBuilder()"
            class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
      ${a("games.check")}
    </button>
    <div id="pb-result" class="mt-4" role="status" aria-live="polite"></div>
  `}function Me(e){return e.placed.length===0?`<span class="text-ap-text-muted text-xs">${a("games.tap-to-build")}</span>`:e.placed.map((t,s)=>`
      <button onclick="window.__removePart(${s})"
              class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-red transition-all inline-block m-1 bg-ap-green-dim">
        ${l(t)}
      </button>
    `).join("")}function _e(e){return e.available.map((t,s)=>`
    <button onclick="window.__placePart(${s})"
            class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-green transition-all inline-block m-1">
      ${l(t)}
    </button>
  `).join("")}function Le(){let e=window.__pbState,t=document.getElementById("pb-placed"),s=document.getElementById("pb-available");t&&(t.innerHTML=Me(e)),s&&(s.innerHTML=_e(e))}var Ee=k(()=>{"use strict";j();z();L();P();window.__placePart=e=>{let t=window.__pbState,s=t.available.splice(e,1)[0];t.placed.push(s),Le()};window.__removePart=e=>{let t=window.__pbState,s=t.placed.splice(e,1)[0];t.available.push(s),Le()};window.__checkPromptBuilder=()=>{let e=window.__pbState,t=e.challenges[e.currentChallenge],s=JSON.stringify(e.placed)===JSON.stringify(t.correct),n=document.getElementById("pb-result");if(s&&!e.recorded){e.recorded=!0;let r=p();Z(r,`s${e.sprintId}-prompt-builder`,100)}n&&(n.innerHTML=s?`
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">\u2713 ${a("games.complete")}</div>
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
      `:`
        <div class="text-ap-red text-sm mb-2">${a("games.not-quite")}</div>
        <div class="text-ap-text-muted text-xs">${a("games.expected")}</div>
        <div class="code-block text-xs mt-1">${t.correct.map(l).join(`
`)}</div>
      `)}});var Ce={};_(Ce,{renderRoadmap:()=>at});async function at(){let e=p(),s=(await M("sprints.json")).map(o=>{let c=u(o,"title"),i=u(o,"project"),d=!!e.projects[`s${o.id}`],x=o.id===e.currentSprint,m=o.id>e.currentSprint,h=a("roadmap.locked"),v="text-ap-text-muted",S="border-ap-border",w="border-ap-border";return d?(h=a("roadmap.complete"),v="text-ap-green",S="border-ap-green bg-ap-green-dim",w="border-ap-green"):x&&(h=a("roadmap.active"),v="text-ap-amber",S="border-ap-amber bg-ap-amber-dim"),`
        <div class="flex gap-4 ${m?"opacity-40":""}">
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full border-2 ${S} flex items-center justify-center text-xs font-bold ${d?"text-ap-green":x?"text-ap-amber":"text-ap-text-muted"}">
              ${d?"\u2713":o.id}
            </div>
            ${o.id<6?`<div class="w-0 h-12 border-l-2 border-dashed ${w}"></div>`:""}
          </div>
          <div class="pb-8 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-ap-text font-bold text-sm">Sprint ${o.id}: ${l(c)}</span>
              <span class="${v} text-xs">${h}</span>
            </div>
            <div class="text-ap-text-muted text-xs">${a("roadmap.weeks")} ${o.weeks} \u2014 ${l(i)}</div>
            ${x?`<a href="#/sprint/${o.id}" class="text-ap-green text-xs hover:underline mt-1 inline-block">${a("roadmap.view-sprint")} \u2192</a>`:""}
          </div>
        </div>
      `}).join(""),n="",r=0;try{let o=await M("bonus-projects.json"),c={easy:"text-ap-green bg-ap-green-dim",medium:"text-ap-amber bg-ap-amber-dim",hard:"text-ap-red bg-ap-red-dim"};n=o.map(i=>{let d=u(i,"title"),x=u(i,"description"),m=e.bonusProjects[i.id];return`
        <div class="terminal-card p-3">
          <div class="flex items-center justify-between mb-1">
            <span class="text-ap-text font-bold text-sm">${l(d)}</span>
            <span class="${c[i.difficulty]} text-xs px-2 py-0.5 rounded">${l(i.difficulty)}</span>
          </div>
          <div class="text-ap-text-muted text-xs mb-2">${l(x)}</div>
          <div class="flex items-center justify-between">
            <div class="flex gap-1 flex-wrap">${i.skills.map(h=>`<span class="text-ap-indigo text-xs bg-ap-indigo-dim px-1.5 py-0.5 rounded">${l(h)}</span>`).join("")}</div>
            ${m?m==="in-progress"?`<button onclick="window.__completeBonus('${l(i.id)}')" class="text-ap-amber text-xs border border-ap-amber rounded px-2 py-1 hover:bg-ap-amber-dim">${a("roadmap.mark-complete")}</button>`:`<span class="text-ap-green text-xs">\u2713 ${a("roadmap.done")} (+200 XP)</span>`:`<button onclick="window.__startBonus('${l(i.id)}')" class="text-ap-green text-xs border border-ap-green rounded px-2 py-1 hover:bg-ap-green-dim">${a("roadmap.start")}</button>`}
          </div>
        </div>
      `}).join(""),r=o.length}catch(o){console.warn("Failed to load bonus-projects.json",o)}return`
    <div class="text-ap-green text-sm mb-1">$ agentpath roadmap</div>
    <h1 class="text-ap-text text-2xl font-bold mb-6">${a("roadmap.title")}</h1>
    <div class="ml-2">${s}</div>

    ${n?`
    <div class="mt-10">
      <div class="text-ap-green text-sm mb-1">$ agentpath bonus --list</div>
      <h2 class="text-ap-text text-lg font-bold mb-4">${a("roadmap.bonus-title")} (${r})</h2>
      <div class="flex flex-col gap-3">${n}</div>
    </div>
    `:""}
  `}var Ae=k(()=>{"use strict";j();z();L();P();window.__startBonus=e=>{let t=p();K(t,e,"in-progress"),window.dispatchEvent(new HashChangeEvent("hashchange"))};window.__completeBonus=e=>{let t=p();K(t,e,"complete"),window.dispatchEvent(new HashChangeEvent("hashchange"))}});function Te(e,t=5){let s=[{key:"python",label:"Python"},{key:"llm-apis",label:"LLM APIs"},{key:"agent-frameworks",label:"Agents"},{key:"rag",label:"RAG"},{key:"mcp",label:"MCP"},{key:"multi-agent",label:"Multi-Agent"}],n=150,r=150,o=100,c=s.length;function i(g,b){let y=(g-90)*(Math.PI/180);return[n+b*Math.cos(y),r+b*Math.sin(y)]}let x=[.2,.4,.6,.8,1].map(g=>`<polygon points="${s.map((y,f)=>{let N=360/c*f;return i(N,o*g).join(",")}).join(" ")}" fill="none" stroke="#334155" stroke-width="0.5"/>`).join(""),m=s.map((g,b)=>{let y=360/c*b,[f,N]=i(y,o);return`<line x1="${n}" y1="${r}" x2="${f}" y2="${N}" stroke="#334155" stroke-width="0.5"/>`}).join(""),h=s.map((g,b)=>{let y=(e[g.key]||0)/t,f=360/c*b;return i(f,o*y).join(",")}).join(" "),v=s.map((g,b)=>{let y=360/c*b,[f,N]=i(y,o+20),Y=f<n-10?"end":f>n+10?"start":"middle",Ne=e[g.key]||0;return`<text x="${f}" y="${N}" text-anchor="${Y}" fill="#94a3b8" font-size="10" font-family="monospace">${g.label} (${Ne})</text>`}).join(""),S=s.map((g,b)=>{let y=(e[g.key]||0)/t,f=360/c*b,[N,Y]=i(f,o*y);return`<circle cx="${N}" cy="${Y}" r="3" fill="#00ff88"/>`}).join(""),w=s.map(g=>`<tr><td>${g.label}</td><td>${e[g.key]||0} / ${t}</td></tr>`).join("");return`
    <svg viewBox="0 0 300 300" class="mx-auto w-full max-w-[300px]" role="img" aria-label="Skills radar chart showing levels for ${s.map(g=>g.label).join(", ")}">
      <title>Skills Radar</title>
      <desc>${s.map(g=>`${g.label}: ${e[g.key]||0}/${t}`).join(", ")}</desc>
      ${x}
      ${m}
      <polygon points="${h}" fill="rgba(0,255,136,0.15)" stroke="#00ff88" stroke-width="1.5"/>
      ${S}
      ${v}
    </svg>
    <table class="sr-only" aria-label="Skills data">
      <thead><tr><th>Skill</th><th>Level</th></tr></thead>
      <tbody>${w}</tbody>
    </table>
  `}var qe=k(()=>{"use strict"});function He(e,t){let s=u(e,"name"),n=u(e,"desc"),r=e.type==="project"?"\u{1F3C6}":"\u2B50",o=t?"Earned":"Locked";return`
    <div class="${t?"badge-earned":"badge-locked"} rounded-lg p-3 text-center" role="listitem" aria-label="${l(s)} \u2014 ${o}">
      <div class="text-lg mb-1" aria-hidden="true">${t?r:"\u{1F512}"}</div>
      <div class="text-xs font-bold">${l(s)}</div>
      <div class="text-xs opacity-70 mt-1">${l(n)}</div>
      <span class="sr-only">${o}</span>
    </div>
  `}var De=k(()=>{"use strict";P()});var Be={};_(Be,{renderProfile:()=>rt});async function rt(){let e=p(),t=await M("badges.json"),s=$(),n=O(e),r=s==="zh"?n.current.title.split(" ")[0]:n.current.titleEn,o=t.map(x=>He(x,e.badges.includes(x.id))).join(""),c=Object.values(e.projects).filter(Boolean).length,i=Object.keys(e.lessons).length+Object.keys(e.milestones).length,d="";try{let x=await M("next-steps.json"),m={Certification:"text-ap-green bg-ap-green-dim",Community:"text-ap-indigo bg-ap-indigo-dim",Portfolio:"text-ap-amber bg-ap-amber-dim","Personal Brand":"text-ap-amber bg-ap-amber-dim",Networking:"text-ap-indigo bg-ap-indigo-dim","Skill Depth":"text-ap-green bg-ap-green-dim","Emerging Tech":"text-ap-red bg-ap-red-dim",Research:"text-ap-indigo bg-ap-indigo-dim",Career:"text-ap-amber bg-ap-amber-dim",Mastery:"text-ap-green bg-ap-green-dim","Deep Understanding":"text-ap-red bg-ap-red-dim"};d=x.map((h,v)=>{let S=u(h,"title"),w=u(h,"description"),g=u(h,"category"),b=m[h.category]||"text-ap-text-muted bg-ap-surface";return`
        <div class="terminal-card p-3">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-ap-green text-xs font-bold">${String(v+1).padStart(2,"0")}.</span>
            <span class="text-ap-text font-bold text-sm">${l(S)}</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <span class="${b} text-xs px-1.5 py-0.5 rounded">${l(g)}</span>
            ${h.url?`<a href="${l(h.url)}" target="_blank" rel="noopener" class="text-ap-indigo text-xs hover:underline">Link \u2192</a>`:""}
          </div>
          <div class="text-ap-text-muted text-xs">${l(w)}</div>
        </div>
      `}).join("")}catch(x){console.warn("Failed to load next-steps.json",x)}return`
    <div class="text-ap-green text-sm mb-1">$ agentpath profile</div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-12 h-12 rounded-full bg-ap-green-dim border border-ap-green flex items-center justify-center text-ap-green font-bold text-lg">${e.level}</div>
      <div>
        <div class="text-ap-text font-bold">${a("dash.level")} ${e.level}: ${r}</div>
        <div class="text-ap-text-dim text-xs">${e.xp.toLocaleString()} ${a("dash.xp")}</div>
      </div>
    </div>

    <!-- Skills Radar -->
    <div class="terminal-card mb-6">
      ${B(a("profile.skills"))}
      <div class="p-4">${Te(e.skills)}</div>
    </div>

    <!-- Badges -->
    <div class="mb-6">
      <div class="text-ap-green text-xs font-bold uppercase mb-3">${a("profile.badges")}</div>
      <div class="grid grid-cols-3 gap-2" role="list" aria-label="${a("profile.badges")}">${o}</div>
    </div>

    <!-- Stats -->
    <div class="terminal-card mb-6">
      <div class="p-4">
        <div class="text-ap-green text-xs font-bold uppercase mb-3">${a("profile.stats")}</div>
        <div class="grid grid-cols-2 gap-3">
          <div class="text-center">
            <div class="text-ap-green text-xl font-bold">${e.xp.toLocaleString()}</div>
            <div class="text-ap-text-muted text-xs">${a("profile.total-xp")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-amber text-xl font-bold">${e.streak}</div>
            <div class="text-ap-text-muted text-xs">${a("profile.current-streak")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${c}</div>
            <div class="text-ap-text-muted text-xs">${a("profile.projects-done")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${i}</div>
            <div class="text-ap-text-muted text-xs">${a("profile.days-active")}</div>
          </div>
        </div>
      </div>
    </div>

    ${d?`
    <!-- Next Steps -->
    <div class="mb-6">
      <div class="text-ap-green text-xs font-bold uppercase mb-3">${a("profile.next-steps")}</div>
      <div class="flex flex-col gap-2">${d}</div>
    </div>
    `:""}

    <!-- Export -->
    <button onclick="window.__exportResume()"
            class="w-full border border-ap-green text-ap-green py-3 rounded text-sm hover:bg-ap-green-dim transition-colors">
      ${a("profile.export")}
    </button>
  `}var Re=k(()=>{"use strict";j();z();L();P();qe();De();window.__exportResume=()=>{let e=p(),t=O(e),s=`AgentPath \u667A\u8DEF \u2014 Skills Summary
Level: ${e.level} (${t.current.titleEn})
XP: ${e.xp}
Skills: Python ${e.skills.python}/5, LLM APIs ${e.skills["llm-apis"]}/5, Agent Frameworks ${e.skills["agent-frameworks"]}/5, RAG ${e.skills.rag}/5, MCP ${e.skills.mcp}/5, Multi-Agent ${e.skills["multi-agent"]}/5`;navigator.clipboard.writeText(s).then(()=>{alert(a("alert.copied"))}).catch(()=>{alert("Clipboard access denied / \u526A\u8D34\u677F\u8BBF\u95EE\u88AB\u62D2\u7EDD")})}});var ne=[];function T(e,t){let s=[],n=new RegExp("^"+e.replace(/:(\w+)/g,(r,o)=>(s.push(o),"([^/]+)")).replace(/\//g,"\\/")+"$");ne.push({pattern:n,keys:s,handler:t})}function Ze(e){window.location.hash=e}function ae(){let e=()=>{let t=window.location.hash.slice(1)||"/";for(let s of ne){let n=t.match(s.pattern);if(n){let r={};s.keys.forEach((o,c)=>{r[o]=n[c+1]}),s.handler(r);return}}Ze("/")};window.addEventListener("hashchange",e),e()}j();z();L();z();j();var I=[{id:"dashboard",path:"/",icon:"\u2302",key:"nav.dashboard"},{id:"sprint",path:"/sprint/1",icon:"\u25B6",key:"nav.sprint"},{id:"games",path:"/sprint/1/games",icon:"\u25C6",key:"nav.games"},{id:"roadmap",path:"/roadmap",icon:"\u25C7",key:"nav.roadmap"},{id:"profile",path:"/profile",icon:"\u25CB",key:"nav.profile"}];function Qe(){let e=window.location.hash.slice(1)||"/";return e==="/"?"dashboard":e.includes("/games")?"games":e.includes("/sprint")?"sprint":e.includes("/roadmap")?"roadmap":e.includes("/profile")?"profile":"dashboard"}function ce(){let e=p(),t=Qe(),s=e.currentSprint;return I[1].path=`/sprint/${s}`,I[2].path=`/sprint/${s}/games`,`
    <nav aria-label="Main navigation" class="fixed bottom-0 left-0 right-0 bg-ap-surface border-t border-ap-border nav-bottom z-50
                md:fixed md:top-0 md:left-0 md:bottom-0 md:w-48 md:border-t-0 md:border-r md:flex-col">
      <div class="flex justify-around md:flex-col md:justify-start md:pt-6 md:gap-1" role="tablist" aria-label="App sections">
        ${I.map(r=>`
      <button
        onclick="window.location.hash='${r.path}'"
        aria-label="${a(r.key)}"
        role="tab"
        ${t===r.id?'aria-selected="true" aria-current="page"':'aria-selected="false"'}
        class="flex flex-col items-center gap-1 py-2 px-3 min-h-[44px] min-w-[44px] text-xs transition-colors
          ${t===r.id?"text-ap-green":"text-ap-text-muted hover:text-ap-text-dim"}"
      >
        <span class="text-lg" aria-hidden="true">${r.icon}</span>
        <span>${a(r.key)}</span>
      </button>
    `).join("")}
      </div>
    </nav>
  `}function de(){return"pb-20 md:pb-0 md:pl-48"}var te=document.getElementById("app");function se(e){return`
    <a href="#main-content" class="skip-link">Skip to content</a>
    <div class="${de()} min-h-screen">
      <header class="flex items-center justify-between px-4 py-3 border-b border-ap-border md:ml-0" role="banner">
        <a href="#/" class="flex items-center gap-2 no-underline">
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
        </a>
        <button onclick="window.__toggleLang()" aria-label="Switch to ${$()==="en"?"Chinese":"English"}" title="${$()==="en"?"Switch to Chinese":"\u5207\u6362\u5230\u82F1\u6587"}" class="text-ap-text-muted text-xs border border-ap-border rounded px-2 py-1 hover:text-ap-green hover:border-ap-green transition-colors min-h-[44px] min-w-[44px]">
          ${$()==="en"?"\u4E2D\u6587":"EN"}
        </button>
      </header>
      <main id="main-content" class="p-4 max-w-3xl mx-auto" role="main">
        ${e}
      </main>
    </div>
    ${ce()}
  `}function A(e){te.innerHTML=se(e)}function R(){te.innerHTML=se(`
    <div class="flex items-center justify-center py-20" role="status" aria-live="polite">
      <div class="text-ap-green text-sm glow-green">$ loading...</div>
    </div>
  `)}function q(e){te.innerHTML=se(`
    <div class="terminal-card p-6 text-center" role="alert">
      <div class="text-ap-red text-lg font-bold mb-2">$ error</div>
      <div class="text-ap-text-dim text-sm">${e}</div>
      <a href="#/" class="text-ap-green text-sm hover:underline mt-4 inline-block">$ cd ~/dashboard</a>
    </div>
  `)}window.__toggleLang=()=>{ie(),le(),window.dispatchEvent(new HashChangeEvent("hashchange"))};oe();var ot=p();D(ot);T("/",async()=>{R();try{let{renderDashboard:e}=await Promise.resolve().then(()=>(ge(),me));A(await e())}catch{q("Failed to load dashboard")}});T("/sprint/:id",async e=>{R();try{let{renderSprint:t}=await Promise.resolve().then(()=>(ue(),xe));A(await t(Number(e.id)))}catch{q("Failed to load sprint")}});T("/sprint/:id/lesson/:num",async e=>{R();try{let{renderLesson:t}=await Promise.resolve().then(()=>(fe(),he));A(await t(Number(e.id),e.num))}catch{q("Failed to load lesson")}});T("/sprint/:id/project",async e=>{R();try{let{renderProject:t}=await Promise.resolve().then(()=>(be(),ve));A(await t(Number(e.id)))}catch{q("Failed to load project")}});T("/sprint/:id/games",async e=>{R();try{let{renderGames:t}=await Promise.resolve().then(()=>(ye(),$e));A(t(Number(e.id)))}catch{q("Failed to load games")}});T("/sprint/:id/games/:game",async e=>{R();try{let t=Number(e.id),s=e.game;if(s==="flash-match"){let{renderFlashMatch:n}=await Promise.resolve().then(()=>(ke(),we));A(await n(t))}else if(s==="concept-quiz"){let{renderConceptQuiz:n}=await Promise.resolve().then(()=>(ze(),je));A(await n(t))}else if(s==="prompt-builder"){let{renderPromptBuilder:n}=await Promise.resolve().then(()=>(Ee(),Pe));A(await n(t))}else{q(`Unknown game: ${s}`);return}}catch{q("Failed to load game")}});T("/roadmap",async()=>{R();try{let{renderRoadmap:e}=await Promise.resolve().then(()=>(Ae(),Ce));A(await e())}catch{q("Failed to load roadmap")}});T("/profile",async()=>{R();try{let{renderProfile:e}=await Promise.resolve().then(()=>(Re(),Be));A(await e())}catch{q("Failed to load profile")}});ae();})();
