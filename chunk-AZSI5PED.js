import{a as m}from"./chunk-ZQF2KFMQ.js";import{a as c}from"./chunk-VLPIBHPO.js";import{c as u}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as e,Na as a,bb as p,qb as o,rb as t,sb as i,tb as r}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var b=`<u-scaffold
  style="height: 480px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-top-app-bar
    slot="top-bar"
    size="large"
    headline="Scaffold"
  >
    <u-icon-button slot="leading-icon">
      <span class="material-symbols-outlined">menu</span>
    </u-icon-button>
    <u-icon-button slot="trailing-icon">
      <span class="material-symbols-outlined">more_vert</span>
    </u-icon-button>
  </u-top-app-bar>

  <div style="padding: 16px 24px; overflow: auto">
    <p>
      Body content lives directly inside the scaffold \u2014 no pane needed. Any non-pane child flexes to fill the body row.
    </p>
    <p>
      The scaffold no longer owns the scroll. If you want this column to scroll, give it <code>overflow: auto</code> (as
      this <code>&lt;div&gt;</code> does); to scroll the top app bar in sync, point it at this element via
      <code>scrollContainer</code>.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl
      consectetur et.
    </p>
    <p>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
      consectetur.
    </p>
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <p>Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
    <p>Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus.</p>
    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis.</p>
    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    <p>Curabitur blandit tempus porttitor. Donec sed odio dui. Nullam quis risus eget urna mollis ornare.</p>
    <p>
      Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in.
    </p>
  </div>

  <u-fab
    slot="fab"
    color="primary"
  >
    <span class="material-symbols-outlined">edit</span>
  </u-fab>
</u-scaffold>
`;var f=`<u-scaffold
  style="height: 480px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-top-app-bar
    slot="top-bar"
    size="medium"
    headline="With FAB menu"
  >
    <u-icon-button slot="leading-icon">
      <span class="material-symbols-outlined">menu</span>
    </u-icon-button>
  </u-top-app-bar>

  <div style="padding: 16px 24px; overflow: auto">
    <p>
      The FAB menu sits in the scaffold's <code>fab</code> slot and is automatically anchored above the navigation bar.
    </p>
    <p>Phasellus a ante vitae lectus volutpat tincidunt. Suspendisse potenti.</p>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.</p>
    <p>
      Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
    </p>
    <p>Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.</p>
  </div>

  <u-navigation-bar slot="bottom-bar">
    <u-navigation-bar-item active>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >home</span
      >
      Home
    </u-navigation-bar-item>
    <u-navigation-bar-item>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >search</span
      >
      Search
    </u-navigation-bar-item>
    <u-navigation-bar-item>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >favorite</span
      >
      Saved
    </u-navigation-bar-item>
    <u-navigation-bar-item>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >person</span
      >
      Profile
    </u-navigation-bar-item>
  </u-navigation-bar>

  <u-fab-menu
    slot="fab"
    color="primary"
  >
    <span
      class="material-symbols-outlined"
      slot="icon"
      >add</span
    >
    <u-fab-menu-item label="New doc">
      <span class="material-symbols-outlined">description</span>
    </u-fab-menu-item>
    <u-fab-menu-item label="New folder">
      <span class="material-symbols-outlined">folder</span>
    </u-fab-menu-item>
  </u-fab-menu>
</u-scaffold>
`;var g=`<u-scaffold
  style="height: 480px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-top-app-bar
    slot="top-bar"
    size="small"
    headline="Explicit scroll target"
    scrollContainer="explicit-scroll-body"
  >
    <u-icon-button slot="leading-icon">
      <span class="material-symbols-outlined">menu</span>
    </u-icon-button>
  </u-top-app-bar>

  <div
    id="explicit-scroll-body"
    style="padding: 16px 24px; overflow: auto"
  >
    <p>
      The scaffold no longer publishes a scroll-container via Lit context. By default the top app bar listens to the
      window \u2014 point it at a specific element with <code>scrollContainer</code> (here, this <code>&lt;div&gt;</code>)
      when you want it to react to in-scaffold scroll instead.
    </p>
    <p>Try <code>scrollContainer="none"</code> if you want to disable scroll reactivity entirely.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Aenean commodo ligula eget dolor. Aenean massa.</p>
    <p>Cum sociis natoque penatibus et magnis dis parturient montes.</p>
    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel.</p>
    <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
    <p>Phasellus viverra nulla ut metus varius laoreet.</p>
    <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>
    <p>Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
  </div>

  <u-fab
    slot="fab"
    color="secondary"
  >
    <span class="material-symbols-outlined">add</span>
  </u-fab>
</u-scaffold>
`;var h=`<u-scaffold
  id="list-detail-scaffold"
  style="height: 560px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-pane
    id="list-detail-nav"
    variant="filled"
    mode="sidebar"
    mode-lg="fixed"
    style="width: 200px"
  >
    <div
      slot="header"
      style="padding: 12px 16px; display: flex; align-items: center; justify-content: space-between"
    >
      <strong>Inbox</strong>
      <u-icon-button onclick="document.getElementById('list-detail-nav').close()">
        <span class="material-symbols-outlined">close</span>
      </u-icon-button>
    </div>
    <u-list>
      <u-list-item>Primary</u-list-item>
      <u-list-item>Starred</u-list-item>
      <u-list-item>Snoozed</u-list-item>
      <u-list-item>Sent</u-list-item>
      <u-list-item>Drafts</u-list-item>
    </u-list>
  </u-pane>

  <u-pane
    variant="filled"
    mode="fixed"
    style="flex: 1 1 0; min-width: 0"
  >
    <div
      slot="header"
      style="display: flex; align-items: center; gap: 8px; padding: 10px 12px"
    >
      <u-icon-button onclick="document.getElementById('list-detail-nav').show()">
        <span class="material-symbols-outlined">menu</span>
      </u-icon-button>
      <strong style="font-size: 14px">Primary \xB7 5 messages</strong>
    </div>
    <u-list>
      <u-list-item
        selectable
        onclick="openMessage('Welcome to Material 3', 'Design Team', 'A short note about the new release and what to look out for.')"
      >
        Welcome to Material 3
        <span slot="supporting-text">Design Team \xB7 A short note about the new release.</span>
      </u-list-item>
      <u-list-item
        selectable
        onclick="openMessage('Sprint planning Thursday', 'Project Lead', 'Agenda attached \u2014 please review priorities before the call.')"
      >
        Sprint planning Thursday
        <span slot="supporting-text">Project Lead \xB7 Agenda attached for the call.</span>
      </u-list-item>
      <u-list-item
        selectable
        onclick="openMessage('Your invoice is ready', 'Billing', 'Invoice #482 covers the month of May and is available to download.')"
      >
        Your invoice is ready
        <span slot="supporting-text">Billing \xB7 Invoice #482 for May.</span>
      </u-list-item>
      <u-list-item
        selectable
        onclick="openMessage('You have 3 new followers', 'Social', 'Tap to see who connected with you this week.')"
      >
        You have 3 new followers
        <span slot="supporting-text">Social \xB7 Three new connections this week.</span>
      </u-list-item>
      <u-list-item
        selectable
        onclick="openMessage('Build #4821 passed', 'CI', 'main \xB7 6m 12s \xB7 staging deploy queued.')"
      >
        Build #4821 passed
        <span slot="supporting-text">CI \xB7 main \xB7 6m 12s \xB7 staging deploy queued.</span>
      </u-list-item>
    </u-list>
  </u-pane>

  <u-pane
    id="list-detail-message"
    variant="filled"
    mode="fullscreen"
    mode-md="fixed"
    style="flex: 1 1 0; min-width: 0"
  >
    <div
      slot="header"
      style="display: flex; align-items: center; gap: 4px; padding: 8px 12px"
    >
      <u-icon-button onclick="document.getElementById('list-detail-message').close()">
        <span class="material-symbols-outlined">arrow_back</span>
      </u-icon-button>
      <span style="flex: 1"></span>
      <u-icon-button><span class="material-symbols-outlined">archive</span></u-icon-button>
      <u-icon-button><span class="material-symbols-outlined">delete</span></u-icon-button>
      <u-icon-button><span class="material-symbols-outlined">more_vert</span></u-icon-button>
    </div>
    <div style="padding: 0 24px 24px">
      <h3
        id="list-detail-subject"
        style="margin: 0 0 12px; font-size: 20px"
      >
        Select a message
      </h3>
      <p
        id="list-detail-sender"
        style="margin: 0 0 4px; font-size: 13px; color: var(--u-color-on-surface-variant)"
      >
        \u2014
      </p>
      <p
        id="list-detail-body"
        style="margin: 16px 0 0; line-height: 1.6"
      >
        Pick a message from the list to read it here. On narrow viewports (\u2264 840px) this pane will take over the
        scaffold \u2014 the back button slides it away.
      </p>
    </div>
  </u-pane>
</u-scaffold>

<script>
  function openMessage(subject, sender, body) {
    document.getElementById("list-detail-subject").textContent = subject;
    document.getElementById("list-detail-sender").textContent = sender;
    document.getElementById("list-detail-body").textContent = body;
    document.getElementById("list-detail-message").show();
  }
<\/script>
`;var v=`<u-scaffold
  style="height: 480px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-pane
    id="start-sidebar-pane"
    variant="filled"
    mode="sidebar"
    mode-lg="fixed"
    style="width: 220px"
  >
    <div
      slot="header"
      style="padding: 12px 16px; display: flex; align-items: center; justify-content: space-between"
    >
      <strong>Navigation</strong>
      <u-icon-button onclick="document.getElementById('start-sidebar-pane').close()">
        <span class="material-symbols-outlined">close</span>
      </u-icon-button>
    </div>
    <u-list>
      <u-list-item>Home</u-list-item>
      <u-list-item>Projects</u-list-item>
      <u-list-item>Settings</u-list-item>
    </u-list>
  </u-pane>

  <div style="padding: 16px 24px">
    <p>
      On a viewport \u2265 1200px (<code>lg</code>) the pane is permanent and joins the flex row. Shrink the window below
      <code>lg</code> to see it collapse to a sidebar overlay \u2014 open it with the button below.
    </p>
    <u-button onclick="document.getElementById('start-sidebar-pane').show()">Open start pane</u-button>
  </div>
</u-scaffold>
`;var x=`<u-scaffold
  style="height: 480px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-pane
    id="start-fullscreen-pane"
    variant="filled"
    mode="fullscreen"
    mode-lg="fixed"
    style="width: 240px"
  >
    <div
      slot="header"
      style="padding: 12px 16px; display: flex; align-items: center; justify-content: space-between"
    >
      <strong>Browse</strong>
      <u-icon-button onclick="document.getElementById('start-fullscreen-pane').close()">
        <span class="material-symbols-outlined">close</span>
      </u-icon-button>
    </div>
    <div style="padding: 16px">
      <p>
        Below <code>lg</code> this pane takes over the entire scaffold (above the top app bar) instead of sliding in as
        a sidebar. Useful for richer browse / picker experiences.
      </p>
    </div>
  </u-pane>

  <div style="padding: 16px 24px">
    <p>Below 1200px the pane covers the screen instead of sliding in as a sidebar.</p>
    <u-button onclick="document.getElementById('start-fullscreen-pane').show()">Open browse pane</u-button>
  </div>
</u-scaffold>
`;var y=`<u-scaffold
  style="height: 480px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <div style="padding: 16px 24px">
    <p>
      On a viewport \u2265 1200px (<code>lg</code>) the pane is permanent on the right. Below that, open it as a modal
      sidebar from the trailing edge \u2014 the scaffold detects the pane's DOM position (after the body content) and slides
      it from <code>end</code>.
    </p>
    <u-button onclick="document.getElementById('end-sidebar-pane').show()">Open details</u-button>
  </div>

  <u-pane
    id="end-sidebar-pane"
    variant="filled"
    mode="sidebar"
    mode-lg="fixed"
    style="width: 280px"
  >
    <div
      slot="header"
      style="padding: 12px 16px; display: flex; align-items: center; justify-content: space-between"
    >
      <strong>Inspector</strong>
      <u-icon-button onclick="document.getElementById('end-sidebar-pane').close()">
        <span class="material-symbols-outlined">close</span>
      </u-icon-button>
    </div>
    <div style="padding: 16px">
      <p>Inspector content goes here. Properties, metadata, related actions.</p>
    </div>
  </u-pane>
</u-scaffold>
`;var w=`<u-scaffold
  style="height: 480px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <div style="padding: 16px 24px">
    <p>
      The end pane covers the viewport on mobile (below <code>md</code>). DOM order puts it after the body, so the
      slide-in animates from the trailing edge.
    </p>
    <u-button onclick="document.getElementById('end-fullscreen-pane').show()">Open editor</u-button>
  </div>

  <u-pane
    id="end-fullscreen-pane"
    variant="filled"
    mode="fullscreen"
    mode-md="fixed"
    style="width: 320px"
  >
    <div
      slot="header"
      style="padding: 12px 16px; display: flex; align-items: center; justify-content: space-between"
    >
      <strong>Editor</strong>
      <u-icon-button onclick="document.getElementById('end-fullscreen-pane').close()">
        <span class="material-symbols-outlined">close</span>
      </u-icon-button>
    </div>
    <div style="padding: 16px">
      <p>A roomy editing surface that takes over the screen on smaller viewports.</p>
    </div>
  </u-pane>
</u-scaffold>
`;var S=`<u-scaffold
  style="height: 360px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-pane
    variant="filled"
    style="width: 220px"
  >
    <div
      slot="header"
      style="padding: 12px 16px"
    >
      <strong>filled</strong>
    </div>
    <div style="padding: 12px 16px; font-size: 13px">
      <p><code>surface-container-low</code> + medium (12dp) corner. The canonical card chrome for in-flow panes.</p>
    </div>
  </u-pane>

  <div style="padding: 16px 24px; display: flex; flex-direction: column; gap: 8px">
    <p style="margin: 0">
      Override the bg via <code>--u-pane-filled-bg-color</code> and the corner via
      <code>--u-pane-filled-shape-corner</code>. When a filled pane collapses into a sidebar drawer or fullscreen
      overlay it switches to <code>surface-container-lowest</code> automatically \u2014 override
      <code>--u-pane-overlay-bg-color</code> to change that.
    </p>
  </div>

  <u-pane
    variant="transparent"
    style="width: 220px"
  >
    <div
      slot="header"
      style="padding: 12px 16px"
    >
      <strong>transparent</strong>
    </div>
    <div style="padding: 12px 16px; font-size: 13px">
      <p>No background, no corner. Blends with the scaffold.</p>
    </div>
  </u-pane>
</u-scaffold>
`;var E=`<u-scaffold
  style="height: 560px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-top-app-bar
    slot="top-bar"
    headline="Project"
  >
    <u-icon-button slot="leading-icon">
      <span class="material-symbols-outlined">menu</span>
    </u-icon-button>
  </u-top-app-bar>

  <u-pane
    variant="filled"
    style="width: 200px"
  >
    <div
      slot="header"
      style="padding: 12px 16px"
    >
      <strong>Files</strong>
    </div>
    <u-list>
      <u-list-item>README.md</u-list-item>
      <u-list-item>package.json</u-list-item>
      <u-list-item>src/</u-list-item>
    </u-list>
  </u-pane>

  <div style="padding: 16px 24px; overflow: auto">
    <h3 style="margin: 0 0 8px">README.md</h3>
    <p>
      Top bar, bottom bar, FAB and panes all coexist. Body content (this <code>&lt;div&gt;</code>) flexes to fill the
      remaining space and scrolls inside itself.
    </p>
    <p>
      Panes around it (filled <code>Files</code> on the left, transparent <code>Outline</code> on the right) keep their
      own widths and scroll independently.
    </p>
    <p style="margin-top: 1200px">Bottom of main content.</p>
  </div>

  <u-pane
    variant="transparent"
    style="width: 220px"
  >
    <div
      slot="header"
      style="padding: 12px 16px"
    >
      <strong>Outline</strong>
    </div>
    <div style="padding: 16px">
      <p>Right-side outline / context panel.</p>
    </div>
  </u-pane>

  <u-fab
    slot="fab"
    color="primary"
  >
    <span class="material-symbols-outlined">edit</span>
  </u-fab>
</u-scaffold>
`;var k=`<u-scaffold
  id="bp-scaffold"
  style="height: 480px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-pane
    id="bp-nav"
    variant="filled"
    mode="sidebar"
    mode-md="collapsible"
    mode-lg="fixed"
    style="width: 200px; --u-pane-width: 200px"
  >
    <div
      slot="header"
      style="padding: 12px 16px; display: flex; align-items: center; justify-content: space-between"
    >
      <strong>Navigation</strong>
      <u-icon-button onclick="document.getElementById('bp-nav').close()">
        <span class="material-symbols-outlined">close</span>
      </u-icon-button>
    </div>
    <u-list>
      <u-list-item>Inbox</u-list-item>
      <u-list-item>Drafts</u-list-item>
      <u-list-item>Sent</u-list-item>
    </u-list>
  </u-pane>

  <div style="padding: 16px 24px; overflow: auto">
    <p>
      This pane has <code>mode="sidebar"</code> base, <code>mode-md="collapsible"</code> from 840px, and
      <code>mode-lg="fixed"</code> from 1200px:
    </p>
    <ul>
      <li>&lt; <strong>md</strong> (sub-840): modal sidebar \u2014 opens with the button below</li>
      <li><strong>md \u2013 lg</strong>: collapsible in-flow flex item \u2014 toggle to slide off without overlay</li>
      <li>\u2265 <strong>lg</strong>: always visible</li>
    </ul>
    <div style="display: flex; gap: 8px; flex-wrap: wrap">
      <u-button onclick="document.getElementById('bp-nav').show()">Open</u-button>
      <u-button
        color="secondary"
        onclick="document.getElementById('bp-nav').close()"
        >Close</u-button
      >
      <u-button
        color="tertiary"
        onclick="document.getElementById('bp-nav').toggle()"
        >Toggle</u-button
      >
    </div>
    <p style="margin-top: 16px; font-size: 13px; color: var(--u-color-on-surface-variant)">
      Resize the browser to cross the breakpoints \u2014 no JS reactivity needed; the CSS owns the resolution.
    </p>
  </div>
</u-scaffold>
`;var re=(()=>{let n=class n{constructor(){this.basicHtml=b,this.withFabMenuHtml=f,this.explicitScrollContainerHtml=g,this.listDetailHtml=h,this.startSidebarHtml=v,this.startFullscreenHtml=x,this.endSidebarHtml=y,this.endFullscreenHtml=w,this.filledVariantsHtml=S,this.withTopBarHtml=E,this.breakpointModesHtml=k}};n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=p({type:n,selectors:[["docs-scaffold"]],decls:65,vars:11,consts:[["title","Scaffold","tag","u-scaffold"],["sectionTitle","Basic scaffold","screenRoute","/screens/scaffold-basic","fluid","",3,"html"],["sectionTitle","With FAB menu","screenRoute","/screens/scaffold-with-fab-menu","fluid","",3,"html"],["sectionTitle","Pointing the top app bar at a scroll target","screenRoute","/screens/scaffold-explicit-scroll-container","fluid","",3,"html"],["title","Panes","tag","u-pane"],["sectionTitle","Mode per breakpoint","screenRoute","/screens/scaffold-breakpoint-modes","fluid","",3,"html"],["sectionTitle","List-detail (three panes)","screenRoute","/screens/scaffold-list-detail","fluid","",3,"html"],["sectionTitle","Start pane, sidebar at sub-lg","screenRoute","/screens/scaffold-start-sidebar","fluid","",3,"html"],["sectionTitle","Start pane, fullscreen at sub-lg","screenRoute","/screens/scaffold-start-fullscreen","fluid","",3,"html"],["sectionTitle","End pane, sidebar at sub-lg","screenRoute","/screens/scaffold-end-sidebar","fluid","",3,"html"],["sectionTitle","End pane, fullscreen at sub-md","screenRoute","/screens/scaffold-end-fullscreen","fluid","",3,"html"],["sectionTitle","Filled vs transparent variants","screenRoute","/screens/scaffold-filled-variants","fluid","",3,"html"],["sectionTitle","Panes + top app bar + FAB","screenRoute","/screens/scaffold-with-top-bar","fluid","",3,"html"],["key","scaffold"],["key","pane"]],template:function(s,l){s&1&&(t(0,"docs-title",0),e(1,"A layout container that hosts a top app bar, a flex-row body, an optional bottom app bar and a floating FAB. The body accepts plain content and any number of "),t(2,"code"),e(3,"<u-pane>"),i(),e(4," children as siblings \u2014 panes auto-arrange by DOM order, and non-pane children flex to fill the remaining space."),i(),r(5,"docs-example",1)(6,"docs-example",2)(7,"docs-example",3),t(8,"docs-title",4),e(9,"Declare any number of "),t(10,"code"),e(11,"<u-pane>"),i(),e(12," children. The pane's "),t(13,"code"),e(14,"mode"),i(),e(15," attribute drives its behaviour: "),t(16,"code"),e(17,"fixed"),i(),e(18," (default, always visible), "),t(19,"code"),e(20,"collapsible"),i(),e(21," (in flow when "),t(22,"code"),e(23,"open"),i(),e(24,", removed otherwise), "),t(25,"code"),e(26,"sidebar"),i(),e(27," (modal drawer overlay when "),t(28,"code"),e(29,"open"),i(),e(30,") and "),t(31,"code"),e(32,"fullscreen"),i(),e(33," (full-width modal overlay when "),t(34,"code"),e(35,"open"),i(),e(36,", sits above the top app bar). Override the mode at each Material 3 breakpoint with "),t(37,"code"),e(38,"mode-sm"),i(),e(39,", "),t(40,"code"),e(41,"mode-md"),i(),e(42,", "),t(43,"code"),e(44,"mode-lg"),i(),e(45,", "),t(46,"code"),e(47,"mode-xl"),i(),e(48," \u2014 applied purely via CSS, so no "),t(49,"code"),e(50,"matchMedia"),i(),e(51," wiring is needed. Use "),t(52,"code"),e(53,'query-context="container"'),i(),e(54," to react to the scaffold's own size rather than the viewport."),i(),r(55,"docs-example",5)(56,"docs-example",6)(57,"docs-example",7)(58,"docs-example",8)(59,"docs-example",9)(60,"docs-example",10)(61,"docs-example",11)(62,"docs-example",12)(63,"docs-apis-table",13)(64,"docs-apis-table",14)),s&2&&(a(5),o("html",l.basicHtml),a(),o("html",l.withFabMenuHtml),a(),o("html",l.explicitScrollContainerHtml),a(48),o("html",l.breakpointModesHtml),a(),o("html",l.listDetailHtml),a(),o("html",l.startSidebarHtml),a(),o("html",l.startFullscreenHtml),a(),o("html",l.endSidebarHtml),a(),o("html",l.endFullscreenHtml),a(),o("html",l.filledVariantsHtml),a(),o("html",l.withTopBarHtml))},dependencies:[m,c,u],styles:["[_nghost-%COMP%]{display:block}"]});let d=n;return d})();export{re as ScaffoldComponent};
