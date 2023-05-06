(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const v=async(e,t,r,a)=>{const n={"Content-Type":"application/json"};a&&(n.Authorization=`Bearer ${a}`);const i=await fetch(e,{method:"POST",headers:n,body:JSON.stringify({query:t,variables:r})});if(!i.ok)throw new Error(i.statusText);return(await i.json()).data},Ue=`
mutation Mutation($credentials: Credentials!) {
  login(credentials: $credentials) {
    token
    message
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
    }
  }
} `,De=`mutation Register($user: UserInput!) {
  register(user: $user) {
    token
    message
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
    }
  } 
}`,Te=`query Query {
  users {
    id
    user_name
    email
    profilePicture
    bannerPicture
    bio
    role
  }
}`,J=`query Query($userByIdId: ID!) {
  userById(id: $userByIdId) {
    id
    user_name
    email
    profilePicture
    bannerPicture
    bio
    role
  }
}`,Re=`mutation Mutation($user: UserModify!) {
  updateUser(user: $user) {
    message
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
    }
  }
}`,Me=`mutation Mutation($deleteUserAsAdminId: ID!) {
  deleteUserAsAdmin(id: $deleteUserAsAdminId) {
    token
    message
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
    }
  }
}`,He=`
query Query {
  checkToken {
    token
    message
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
      role
    }
  }
}`,Ce=`
query Query {
  posts {
    id
    text
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
    }
    image
    dateAdded
    likes
  }
}`,Be=`query Query($postsByUserId: ID!) {
  postsByUser(id: $postsByUserId) {
    id
    text
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
      role
    }
    image
    dateAdded
    likes
  }
}`,je=`mutation Mutation($text: String!, $image: String) {
  createPost(text: $text, image: $image) {
    id
    text
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
    }
    image
    dateAdded
    likes
  }
}`,Y=`mutation Mutation($updatePostId: ID!, $post: PostModify!) {
  updatePost(id: $updatePostId, post: $post) {
    id
    text
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
    }
    image
    dateAdded
  }
}`,Fe=`mutation DeletePost($deletePostId: ID!) {
  deletePost(id: $deletePostId) {
    id
    text
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
    }
    image
    dateAdded
  }
}`,Ne=`mutation DeletePost($deletePostAsAdminId: ID!) {
  deletePostAsAdmin(id: $deletePostAsAdminId) {
    id
    text
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
    }
    image
    dateAdded
  }
}`,Z=`mutation Mutation($updatePostAsAdminId: ID!, $post: PostModify!) {
  updatePostAsAdmin(id: $updatePostAsAdminId, post: $post) {
    id
    text
    user {
      id
      user_name
      email
      profilePicture
      bannerPicture
      bio
      role
    }
    image
    dateAdded
    likes
  }
}`,ze="https://sssf-project-graphql-server.azurewebsites.net/graphql";let L={};const ee=localStorage.getItem("token");(async()=>{var e;if(ee!==null)try{const t=await v(ze,He,{},ee);((e=t.checkToken)==null?void 0:e.message)==="Token is valid"&&(console.log("token valid"),t.checkToken.user,L=t.checkToken.user,console.log(1))}catch(t){console.log(t)}})();var Ge=/([:*])(\w+)/g,Qe="([^/]+)",Ve=/\*/g,We="?(?:.*)",Xe=/\/\?/g,Ke="/?([^/]+|)",Je="(?:/^|^)",Ye="";function de(e){return e===void 0&&(e="/"),N()?location.pathname+location.search+location.hash:e}function m(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function q(e){return typeof e=="string"}function Ze(e){return typeof e=="function"}function U(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function et(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(r,a,n){return r===null&&(r={}),r[t[n]]=decodeURIComponent(a),r},null)}function D(e){var t=m(e).split(/\?(.*)?$/);return[m(t[0]),t.slice(1).join("")]}function F(e){for(var t={},r=e.split("&"),a=0;a<r.length;a++){var n=r[a].split("=");if(n[0]!==""){var i=decodeURIComponent(n[0]);t[i]?(Array.isArray(t[i])||(t[i]=[t[i]]),t[i].push(decodeURIComponent(n[1]||""))):t[i]=decodeURIComponent(n[1]||"")}}return t}function ue(e,t){var r=D(m(e.currentLocationPath)),a=r[0],n=r[1],i=n===""?null:F(n),l=[],u;if(q(t.path)){if(u=Je+m(t.path).replace(Ge,function(S,h,k){return l.push(k),Qe}).replace(Ve,We).replace(Xe,Ke)+"$",m(t.path)===""&&m(a)==="")return{url:a,queryString:n,hashString:U(e.to),route:t,data:null,params:i}}else u=t.path;var p=new RegExp(u,Ye),g=a.match(p);if(g){var P=q(t.path)?et(g,l):g.groups?g.groups:g.slice(1);return{url:m(a.replace(new RegExp("^"+e.instance.root),"")),queryString:n,hashString:U(e.to),route:t,data:P,params:i}}return!1}function fe(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function _(e,t){return typeof e[t]>"u"||e[t]===!0}function tt(e){if(!e)return{};var t=e.split(","),r={},a;return t.forEach(function(n){var i=n.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":r.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":a||(a={}),a.strategy=i[1];break;case"resolveOptionsHash":a||(a={}),a.hash=i[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":r[i[0]]=i[1]==="true";break}}),a&&(r.resolveOptions=a),r}function N(){return typeof window<"u"}function rt(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(r){return r}).forEach(function(r){["before","after","already","leave"].forEach(function(a){r[a]&&(t[a]||(t[a]=[]),t[a].push(r[a]))})}),t}function y(e,t,r){var a=t||{},n=0;(function i(){if(!e[n]){r&&r(a);return}Array.isArray(e[n])?(e.splice.apply(e,[n,1].concat(e[n][0](a)?e[n][1]:e[n][2])),i()):e[n](a,function(l){typeof l>"u"||l===!0?(n+=1,i()):r&&r(a)})})()}y.if=function(e,t,r){return Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]),[e,t,r]};function te(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=de(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function T(e,t){for(var r=0;r<e.instance.routes.length;r++){var a=e.instance.routes[r],n=ue(e,a);if(n&&(e.matches||(e.matches=[]),e.matches.push(n),e.resolveOptions.strategy==="ONE")){t();return}}t()}function at(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function ot(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var re=N(),nt=fe();function it(e,t){if(_(e.navigateOptions,"updateBrowserURL")){var r=("/"+e.to).replace(/\/\//g,"/"),a=re&&e.resolveOptions&&e.resolveOptions.hash===!0;nt?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",a?"#"+r:r),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!a){var n=location.hash;location.hash="",location.hash=n}e.instance.__freezeListening=!1},1))):re&&(window.location.href=e.to)}t()}function me(e,t){var r=e.instance;if(!r.lastResolved()){t();return}y(r.lastResolved().map(function(a){return function(n,i){if(!a.route.hooks||!a.route.hooks.leave){i();return}var l=!1,u=e.instance.matchLocation(a.route.path,e.currentLocationPath,!1);if(a.route.path!=="*")l=!u;else{var p=e.matches?e.matches.find(function(g){return a.route.path===g.route.path}):!1;l=!p}if(_(e.navigateOptions,"callHooks")&&l){y(a.route.hooks.leave.map(function(g){return function(P,S){return g(function(h){h===!1?e.instance.__markAsClean(e):S()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return i()}]));return}else i()}}),{},function(){return t()})}function st(e,t){e.match.route.hooks&&e.match.route.hooks.before&&_(e.navigateOptions,"callHooks")?y(e.match.route.hooks.before.map(function(r){return function(n,i){return r(function(l){l===!1?e.instance.__markAsClean(e):i()},e.match)}}).concat([function(){return t()}])):t()}function lt(e,t){_(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function ct(e,t){e.match.route.hooks&&e.match.route.hooks.after&&_(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(r){return r(e.match)}),t()}function dt(e,t){var r=e.instance.lastResolved();if(r&&r[0]&&r[0].route===e.match.route&&r[0].url===e.match.url&&r[0].queryString===e.match.queryString){r.forEach(function(a){a.route.hooks&&a.route.hooks.already&&_(e.navigateOptions,"callHooks")&&a.route.hooks.already.forEach(function(n){return n(e.match)})}),t(!1);return}t()}function ut(e,t){var r=e.instance._notFoundRoute;if(r){e.notFoundHandled=!0;var a=D(e.currentLocationPath),n=a[0],i=a[1],l=U(e.to);r.path=m(n);var u={url:r.path,queryString:i,hashString:l,data:null,route:r,params:i!==""?F(i):null};e.matches=[u],e.match=u}t()}function ft(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function mt(e,t){e.instance._setCurrent(null),t()}function pe(e,t){_(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var ge=[dt,st,lt,ct],ae=[me,ut,y.if(function(e){var t=e.notFoundHandled;return t},ge.concat([pe]),[ft,mt])];function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},B.apply(this,arguments)}function oe(e,t){var r=0;function a(){if(r===e.matches.length){pe(e,t);return}y(ge,B({},e,{match:e.matches[r]}),function(){r+=1,a()})}me(e,a)}function R(e){e.instance.__markAsClean(e)}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},j.apply(this,arguments)}var ne="[data-navigo]";function pt(e,t){var r=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:ne},a=this,n="/",i=null,l=[],u=!1,p,g=fe(),P=N();e?n=m(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function S(o){return o.indexOf("#")>=0&&(r.hash===!0?o=o.split("#")[1]||"/":o=o.split("#")[0]),o}function h(o){return m(n+"/"+m(o))}function k(o,s,c,f){return o=q(o)?h(o):o,{name:f||m(String(o)),path:o,handler:s,hooks:rt(c)}}function ve(o,s,c){var f=this;return typeof o=="object"&&!(o instanceof RegExp)?(Object.keys(o).forEach(function(d){if(typeof o[d]=="function")f.on(d,o[d]);else{var b=o[d],E=b.uses,Oe=b.as,qe=b.hooks;l.push(k(d,E,[p,qe],Oe))}}),this):(typeof o=="function"&&(c=s,s=o,o=n),l.push(k(o,s,[p,c])),this)}function G(o,s){if(a.__dirty){a.__waiting.push(function(){return a.resolve(o,s)});return}else a.__dirty=!0;o=o?m(n)+"/"+m(o):void 0;var c={instance:a,to:o,currentLocationPath:o,navigateOptions:{},resolveOptions:j({},r,s)};return y([te,T,y.if(function(f){var d=f.matches;return d&&d.length>0},oe,ae)],c,R),c.matches?c.matches:!1}function Q(o,s){if(a.__dirty){a.__waiting.push(function(){return a.navigate(o,s)});return}else a.__dirty=!0;o=m(n)+"/"+m(o);var c={instance:a,to:o,navigateOptions:s||{},resolveOptions:s&&s.resolveOptions?s.resolveOptions:r,currentLocationPath:S(o)};y([at,ot,T,y.if(function(f){var d=f.matches;return d&&d.length>0},oe,ae),it,R],c,R)}function he(o,s,c){var f=W(o,s);return f!==null?(Q(f.replace(new RegExp("^/?"+n),""),c),!0):!1}function be(o){return this.routes=l=l.filter(function(s){return q(o)?m(s.path)!==m(o):Ze(o)?o!==s.handler:String(s.path)!==String(o)}),this}function ye(){g&&(this.__popstateListener=function(){a.__freezeListening||G()},window.addEventListener("popstate",this.__popstateListener))}function we(){this.routes=l=[],g&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=u=!0}function Pe(o,s){return a._notFoundRoute=k("*",o,[p,s],"__NOT_FOUND__"),this}function V(){if(P)return Ae().forEach(function(o){if(o.getAttribute("data-navigo")==="false"||o.getAttribute("target")==="_blank"){o.hasListenerAttached&&o.removeEventListener("click",o.navigoHandler);return}o.hasListenerAttached||(o.hasListenerAttached=!0,o.navigoHandler=function(s){if((s.ctrlKey||s.metaKey)&&s.target.tagName.toLowerCase()==="a")return!1;var c=o.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var f=new URL(c);c=f.pathname+f.search}catch{}var d=tt(o.getAttribute("data-navigo-options"));u||(s.preventDefault(),s.stopPropagation(),a.navigate(m(c),d))},o.addEventListener("click",o.navigoHandler))}),a}function Ae(){return P?[].slice.call(document.querySelectorAll(r.linksSelector||ne)):[]}function Le(o){return"/"+n+"/"+m(o)}function Se(o){return p=o,this}function _e(){return i}function W(o,s,c){var f=l.find(function(E){return E.name===o}),d=null;if(f){if(d=f.path,s)for(var b in s)d=d.replace(":"+b,s[b]);d=d.match(/^\//)?d:"/"+d}return d&&c&&!c.includeRoot&&(d=d.replace(new RegExp("^/"+n),"")),d}function ke(o){return o.getAttribute("href")}function X(o){var s=D(m(o)),c=s[0],f=s[1],d=f===""?null:F(f),b=U(o),E=k(c,function(){},[p],c);return{url:c,queryString:f,hashString:b,route:E,data:null,params:d}}function Ee(){return X(m(de(n)).replace(new RegExp("^"+n),""))}function Ie(o){var s={instance:a,currentLocationPath:o,to:o,navigateOptions:{},resolveOptions:r};return T(s,function(){}),s.matches?s.matches:!1}function $e(o,s,c){typeof s<"u"&&(typeof c>"u"||c)&&(s=h(s));var f={instance:a,to:s,currentLocationPath:s};te(f,function(){}),typeof o=="string"&&(o=typeof c>"u"||c?h(o):o);var d=ue(f,{name:String(o),path:o,handler:function(){},hooks:{}});return d||!1}function O(o,s,c){return typeof s=="string"&&(s=K(s)),s?(s.hooks[o]||(s.hooks[o]=[]),s.hooks[o].push(c),function(){s.hooks[o]=s.hooks[o].filter(function(f){return f!==c})}):(console.warn("Route doesn't exists: "+s),function(){})}function K(o){return typeof o=="string"?l.find(function(s){return s.name===h(o)}):l.find(function(s){return s.handler===o})}function xe(o){o.instance.__dirty=!1,o.instance.__waiting.length>0&&o.instance.__waiting.shift()()}this.root=n,this.routes=l,this.destroyed=u,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=xe,this.on=ve,this.off=be,this.resolve=G,this.navigate=Q,this.navigateByName=he,this.destroy=we,this.notFound=Pe,this.updatePageLinks=V,this.link=Le,this.hooks=Se,this.extractGETParameters=function(o){return D(S(o))},this.lastResolved=_e,this.generate=W,this.getLinkPath=ke,this.match=Ie,this.matchLocation=$e,this.getCurrentLocation=Ee,this.addBeforeHook=O.bind(this,"before"),this.addAfterHook=O.bind(this,"after"),this.addAlreadyHook=O.bind(this,"already"),this.addLeaveHook=O.bind(this,"leave"),this.getRoute=K,this._pathToMatchObject=X,this._clean=m,this._checkForAHash=S,this._setCurrent=function(o){return i=a.current=o},ye.call(this),V.call(this)}const ie="https://sssf-project-upload-server.azurewebsites.net/uploads/";function I(e){console.log(ie+(e==null?void 0:e.profilePicture));const t=ie+(e==null?void 0:e.profilePicture),r=`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand mt-2 mt-lg-0" href="/" data-navigo>
        <img
          src="./src/image/O-removebg-preview.png"
          height="30"
          alt="Otaku Connect"
          loading="lazy"
        />
        Otaku Connect
      </a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
    </div>

    <div class="d-flex align-items-center">
      ${e?`<img
                  id="addPost"
                  src="./src/image/icons8-plus-+-48.png"
                  class="rounded-circle mr-2"
                  height="25"
                  alt="add post"
                  loading="lazy"
                  style="cursor: pointer"
                  data-toggle="modal"
                  data-target="#exampleModal"
                />
              <a>${e.user_name}</a>

              <div class="btn-group">
                <a
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  class="nav-link dropdown-toggle"
                  style="cursor: pointer"
                >
                  <img
                    src="${t}"
                    class="rounded-circle"
                    height="25"
                    alt="profile picture"
                    style="cursor: pointer"
                    loading="lazy"
                  />
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li>
                    <a 
                    style="cursor: pointer" 
                    class="dropdown-item" 
                    data-toggle="modal"
                    data-target="#settingModal" >Setting</a>
                  </li>
                  ${e.role==="admin"?'<li><a href="/admin" style="cursor: pointer" class="dropdown-item" data-navigo>Admin</a></li>':""}
                  <li>
                    <a id="logOut" style="cursor: pointer" class="dropdown-item">Log out</a>
                  </li>
                </ul>
              </div>`:'<a href="/register" class="btn btn-primary" data-navigo>Sign up</a>'}
    </div>
  </div>
</nav>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="add-post">
          <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input type="file" class="form-control" id="image">
          </div>
          <div class="mb-3">
            <label for="text" class="form-label">Text</label>
            <textarea class="form-control" id="text" rows="3" placeholder="Add text" required></textarea>
            <p id="textError" class="text-danger"></p>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button id="submitPost" type="submit" class="btn btn-primary">Post</button>
      </div>
    </div>
  </div>
</div>
 ${e?`<div class="modal fade" id="settingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Setting</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form id="add-post">
          <div class="mb-3">
            <label for="image" class="form-label">Profile Picture</label>
            <input type="file" class="form-control" id="userImage">
          </div>
          <div class="mb-3">
            <label for="text" class="form-label">Username</label>
            <input class="form-control" id="userName" value="${e.user_name}" required>
            <p id="settingTextErrorUsername" class="text-danger"></p>
          </div>
          <div class="mb-3">
            <label for="text" class="form-label">Email</label>
            <input class="form-control" id="email" value="${e.email}" required>
            <p id="settingTextErrorEmail" class="text-danger"></p>
          </div>
          <div class="mb-3">
            <label for="text" class="form-label">Bio</label>
            <input class="form-control" id="bio" value="${e.bio}" required>
            <p id="settingTextErrorBio" class="text-danger"></p>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button id="submitSetting" type="submit" class="btn btn-primary">Modify user</button>
      </div>
    </div>
  </div>
</div>
`:""}`;return console.log(e),r}function gt(){return`
<div class="container" style="margin-top: 75px;">
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <div class="form-container">
                  <form id=register>
                    <div class="form-outline mb-4">
                      <label for="youInputUserName">Username</label>
                      <input type="text" id="username" class="form-control" placeholder="Username" required/>
                    </div>
                    <div class="form-outline mb-4">
                     <label for="yourInputEmail">Email</label>
                      <input type="email" id="email" class="form-control" placeholder="Email" required/>
                    </div>
                    <div class="form-outline mb-4">       
                        <label  for="yourInputPassword">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="Password" required/>
                    </div>
                    <div class="form-outline mb-4">
                    <label " for="yourInputPasswordRepeat">Repeat your password</label>
                      <input type="password" id="passwordRepeat" class="form-control" placeholder="Re-enter password" required/>
                        <p id="passwordMatchError" class="text-danger"></p>
                    </div>
                    <div class="d-flex justify-content-center">
                      <button id="registerButton" type="submit" class="btn btn-success btn-block btn-lg text-body">Register</button>
                    </div>
                    <p class="text-center text-muted mt-3 mb-0">Already have an account? <a href="/login" data-navigo
                        class="fw-bold text-body"><u>Login</u></a></p>
                  </form>
                </div>
              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="./src/image/o-removebg-preview.png" class="img-fluid" alt="Otaku Connect">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>`}function vt(){return`
<div class="container" style="margin-top: 75px;">
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-5 mx-md-5 mt-5">Log in</p>
                  <div class="form-container">
                    <form id="login">
                      <div class="form-outline mb-4">
                        <label for="youInputUserName">Username</label>
                        <input type="text" id="username" class="form-control" placeholder="Username" required/>
                      </div>
                      <div class="form-outline mb-4">       
                          <label  for="yourInputPassword">Password</label>
                          <input type="password" id="password" class="form-control" placeholder="Password" required/>
                          <p id="Error" class="text-danger"></p>
                      </div>
                      <div class="d-flex justify-content-center">
                        <button  id="loginButton" type="submit" class="btn btn-success btn-block btn-lg text-body">Login</button>
                      </div>
                      <p class="text-center text-muted mt-3 mb-0">Excited to get started? <a href="/register" data-navigo
                          class="fw-bold text-body"><u>Create an account</u></a></p>
                    </form>
                  </div>
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="./src/image/o-removebg-preview.png" class="img-fluid" alt="Sample image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>`}const se="https://sssf-project-upload-server.azurewebsites.net/uploads/";function le(e){var l,u;const t=se+e.user.profilePicture,r=se+e.image,a=`modify${e.id}`,n=`delete${e.id}`;return`
<div class="d-flex justify-content-center align-items-center">
  <div class="col-md-6 mb-3">
    <div class="card">
      <div class="card-header">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <a href="/profile/${(l=e.user)==null?void 0:l.id}" class="nav-link disabled" data-navigo>
              <img src="${t}" class="rounded-circle" height="25" alt="profile picture" loading="lazy"/>
              ${(u=e.user)==null?void 0:u.user_name}
            </a>
          </div>
          ${L.id===e.user.id||L.role==="admin"?`<div class="dropdown">
                  <a 
                    class="dropdown-toggle" 
                    role="button" 
                    id="dropdownMenuLink" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                    style="cursor: pointer; width: 20px; height: 20px;">
                  </a>
                  <ul id="test" class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                    <li><a id="${a}" data-toggle="modal" data-target="#modifyModal" style="cursor: pointer" class="dropdown-item">Modify</a></li>
                    <li><a id="${n}" style="cursor: pointer" class="dropdown-item">Delete</a></li>
                  </ul>
                </div>`:""}
        </div>
      </div>
      ${e.image?`<img src="${r}"  alt="${e.image}" loading="lazy"/>`:""}
      <div class="card-body">
        <p class="card-text">${e.text}</p>
      </div>
      <div class="text-right">
        <div>
          <button class="btn btn-primary d-inline-flex">Likes ${e.likes}</button>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="modifyModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modify Post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="add-post">
          <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input type="file" class="form-control" id="modImage">
          </div>
          <div class="mb-3">
            <label for="text" class="form-label">Text</label>
            <textarea class="form-control" id="modText" rows="3" placeholder="Add text" required></textarea>
            <p id="modTextError" class="text-danger"></p>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button id="submitModify" type="submit" class="btn btn-primary">Modify</button>
      </div>
    </div>
  </div>
</div>
`}const ht="https://sssf-project-upload-server.azurewebsites.net/uploads/";function bt(e){console.log(e.profilePicture);const t=ht+e.profilePicture;return console.log(t),`
<div class="container" style="margin-top: 75px;">
    <div class="container">
        <div class="jumbotron" style="background-color:#CFD8DC;">
            <div class="row">
                    <div class="col-md-3">
                        <img src="${t}" alt="Profile Picture" class="img-fluid rounded-circle">
                    </div>
                    <div class="col-md-9">
                        <h1 class="display-4">${e.user_name}</h1>
                        <hr class="my-4">
                        <p class="lead">${e.bio}</p>
                    </div>
            </div>
        </div>
    </div>
</div>`}const yt="https://sssf-project-graphql-server.azurewebsites.net/graphql";async function wt(e){e.preventDefault();const t=document.querySelector("#username"),r=document.querySelector("#password"),a=document.querySelector("#loginButton"),n={username:t.value,password:r.value};try{const i=await v(yt,Ue,{credentials:n});if(console.log(i),i.login===null){const l=document.querySelector("#Error");l.innerText="Invalid credentials",a.disabled=!1,a.innerHTML="Login";return}localStorage.setItem("token",i.login.token),window.location.href="/"}catch(i){console.log(i)}}function Pt(){const e=document.querySelector("#login"),t=document.querySelector("#loginButton");e.addEventListener("submit",r=>{t.disabled=!0,t.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...',wt(r)})}const At="https://sssf-project-graphql-server.azurewebsites.net/graphql";async function Lt(e){e.preventDefault();const t=document.querySelector("#username"),r=document.querySelector("#email"),a=document.querySelector("#password"),n=document.querySelector("#registerButton"),i=document.getElementById("passwordMatchError"),l={user_name:t.value,email:r.value,password:a.value};try{const u=await v(At,De,{user:l});console.log(u),u.register===null&&(console.log("registerData is null"),i.innerText="username or email already exists",n.disabled=!1,n.innerHTML="Register"),localStorage.setItem("token",u.register.token),window.location.href="/"}catch(u){console.log(u)}}function St(){const e=document.querySelector("#password"),t=document.querySelector("#passwordRepeat"),r=document.getElementById("passwordMatchError");t.addEventListener("input",async()=>{if(e.value!==t.value)r.innerText="Passwords do not match";else{r.innerText="";const a=document.querySelector("#register"),n=document.querySelector("#registerButton");a.addEventListener("submit",i=>{n.disabled=!0,n.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...',Lt(i)})}})}function _t(e){e.preventDefault(),localStorage.removeItem("token"),console.log("logOut"),window.location.href="/"}function M(){const e=document.querySelector("#logOut");e&&e.addEventListener("click",t=>{_t(t)})}const w="https://sssf-project-graphql-server.azurewebsites.net/graphql",z="https://sssf-project-upload-server.azurewebsites.net/uploadimage";async function kt(){try{return(await v(w,Ce,{})).posts}catch(e){console.log(e)}}async function Et(e){try{return(await v(w,Be,{postsByUserId:e})).postsByUser}catch(t){console.log(t)}}async function It(e){try{console.log("delete",e);const t=localStorage.getItem("token");if(t!==null){const r=await v(w,Fe,{deletePostId:e},t);return window.location.href="/",r}}catch(t){console.log(t)}}async function $t(e){try{console.log("delete",e);const t=localStorage.getItem("token");if(t!==null){const r=await v(w,Ne,{deletePostAsAdminId:e},t);return window.location.href="/",r}}catch(t){console.log(t)}}async function xt(e){const t=document.querySelector("#text"),r=document.querySelector("#image");e.preventDefault();let a="";try{if(r.value!==""){const i=r.files[0],l=new FormData;l.append("picture",i),a=(await(await fetch(`${z}/`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:l})).json()).data.filename}const n=await v(w,je,{text:t.value,image:a},localStorage.getItem("token"));console.log(n),window.location.href="/"}catch(n){console.log(n)}}async function Ot(e,t){const r=document.querySelector("#modText"),a=document.querySelector("#modImage");e.preventDefault();try{if(console.log("modify",t),a.value!==""){const i=a.files[0],l=new FormData;l.append("picture",i);const p=await(await fetch(`${z}/`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:l})).json(),g=await v(w,Y,{updatePostId:t,post:{text:r.value,image:p.data.filename}},localStorage.getItem("token"));console.log(g)}const n=await v(w,Y,{updatePostId:t,post:{text:r.value}},localStorage.getItem("token"));window.location.href="/",console.log(n)}catch(n){console.log(n)}}async function qt(e,t){const r=document.querySelector("#modText"),a=document.querySelector("#modImage");e.preventDefault();try{if(console.log("modify",t),a.value!==""){const i=a.files[0],l=new FormData;l.append("picture",i);const p=await(await fetch(`${z}/`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:l})).json(),g=await v(w,Z,{updatePostAsAdminId:t,post:{text:r.value,image:p.data.filename}},localStorage.getItem("token"));console.log(g)}const n=await v(w,Z,{updatePostAsAdminId:t,post:{text:r.value}},localStorage.getItem("token"));console.log(n),window.location.href="/"}catch(n){console.log(n)}}function H(){const e=document.querySelector("#submitPost"),t=document.querySelector("#text"),r=document.querySelector("#textError");e.addEventListener("click",a=>{console.log(!t.value),t.value===""?r.innerText="Please enter a text":(e.disabled=!0,e.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...',xt(a))})}function Ut(e,t){const r=document.querySelector("#submitModify"),a=document.querySelector("#modText"),n=document.querySelector("#modTextError");r.addEventListener("click",i=>{console.log(!a.value),a.value===""?n.innerText="Please enter a text":(r.disabled=!0,r.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...',t==="admin"?qt(i,e):Ot(i,e))})}function ce(e){const t=document.querySelector(`#delete${e.id}`),r=document.querySelector("#modify"+e.id);r==null||r.addEventListener("click",a=>{a.preventDefault(),console.log("modify",e.id),L.role&&Ut(e.id,L.role)}),t==null||t.addEventListener("click",a=>{a.preventDefault(),L.role==="admin"?confirm("Are you sure you want to delete?")&&$t(e.id):confirm("Are you sure you want to delete?")&&It(e.id)})}const x="https://sssf-project-graphql-server.azurewebsites.net/graphql",Dt="https://sssf-project-upload-server.azurewebsites.net/uploadimage";async function Tt(){try{return(await v(x,Te,{})).users}catch(e){console.log(e)}}async function Rt(e){try{console.log("get",e),console.log(J),console.log(x);const t=await v(x,J,{userByIdId:e});return console.log(t),t}catch(t){console.log(t)}}async function Mt(e){try{return await v(x,Re,{user:e},localStorage.getItem("token"))}catch(t){console.log(t)}}async function Ht(e){try{const t=await v(x,Me,{deleteUserAsAdminId:e},localStorage.getItem("token"));return console.log(t),t}catch(t){console.log(t)}}function Ct(e){document.querySelector("#delete"+e.id).addEventListener("click",async r=>{if(r.preventDefault(),e.id===void 0)return;const a=await Ht(e.id);console.log(a),window.location.href="/admin"})}function C(){const e=document.querySelector("#submitSetting"),t=document.querySelector("#userName"),r=document.querySelector("#email"),a=document.querySelector("#bio"),n=document.querySelector("#userImage"),i=document.querySelector("#settingTextErrorUsername"),l=document.querySelector("#settingTextErrorEmail"),u=document.querySelector("#settingTextErrorBio");e.addEventListener("click",async()=>{let p={};if(p={user_name:t.value,email:r.value,bio:a.value},n.value!==""){const g=n.files[0],P=new FormData;P.append("picture",g);const h=await(await fetch(`${Dt}/`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:P})).json();console.log(h),p={user_name:t.value,email:r.value,bio:a.value,profilePicture:h.data.filename}}if(t.value===""){i.innerText="Please enter a user name";return}if(r.value===""){l.innerText="Please enter a email";return}if(a.value===""){u.innerText="Please enter a bio";return}e.disabled=!0,e.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...',await Mt(p),window.location.href="/"})}function Bt(e){const r="https://sssf-project-upload-server.azurewebsites.net/uploads/"+e.profilePicture;return console.log("image",e.id),`
<div class="d-flex justify-content-center align-items-center">
    <div class="col-md-6 mb-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${r}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${e.user_name}</h5>
                <p class="card-text">${e.bio}</p>
                <a href="" id="delete${e.id}" class="btn btn-primary btn-lg btn-block">Delete user</a>
            </div>
        </div>  
    </div>
</div>`}const jt=new pt("/"),$=document.querySelector("#app");let A;L.user_name?A=L:A=null;jt.on("/",async()=>{console.log("home");const e=await kt();console.log(e),$.innerHTML=`
      ${I(A)}
      <div class="container" style="margin-top: 75px;">
        ${e.reverse().map(t=>le(t)).join("")}
      </div>
    `,e.reverse().forEach(t=>ce(t)),A&&(M(),H(),C())}).on("/register",async()=>{console.log("register"),$.innerHTML=`
      ${I()}
      ${gt()}
    `,St()}).on("/login",async()=>{console.log("login"),$.innerHTML=`
      ${I()}
      ${vt()}
    `,Pt()}).on("/profile/:id",async e=>{var a,n;const t=await Rt((a=e==null?void 0:e.data)==null?void 0:a.id),r=await Et((n=e==null?void 0:e.data)==null?void 0:n.id);$.innerHTML=`
      ${I(A)}
      ${bt(t.userById)}
      <div class="container" style="margin-top: 75px;">
        ${r.reverse().map(i=>le(i)).join("")}
      </div>
    `,r.reverse().forEach(i=>ce(i)),A&&(M(),H(),C())}).on("/admin",async()=>{const e=await Tt();$.innerHTML=`
      ${I(A)}
      <div class="container" style="margin-top: 75px;">
      ${e.reverse().map(t=>Bt(t)).join("")}}
      </div>
      `,e.reverse().forEach(t=>Ct(t)),A&&(M(),H(),C())}).resolve();
