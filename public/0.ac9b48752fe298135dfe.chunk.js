(this.webpackJsonp=this.webpackJsonp||[]).push([[0,22],{13:function(e,t,r){"use strict";r.r(t),r.d(t,"RootScope",(function(){return o}));var s=r(60),n=r(26);class o extends s.a{constructor(){super(),this._overlayIsActive=!1,this.myId=0,this.idle={isIDLE:!0,deactivated:!1,focusPromise:Promise.resolve(),focusResolve:()=>{}},this.connectionStatus={},this.peerId=0,this.addEventListener("peer_changed",e=>{this.peerId=e}),this.addEventListener("user_auth",e=>{this.myId=e.id}),this.addEventListener("connection_status_change",e=>{const t=e;this.connectionStatus[e.name]=t}),this.addEventListener("idle",e=>{e?this.idle.focusPromise=new Promise(e=>{this.idle.focusResolve=e}):this.idle.focusResolve()})}setThemeListener(){try{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{this.systemTheme=e.matches?"night":"day",this.myId?this.dispatchEvent("theme_change"):this.setTheme()};"addEventListener"in e?e.addEventListener("change",t):"addListener"in e&&e.addListener(t),t()}catch(e){}}setTheme(){const e="night"===this.getTheme().name,t=document.head.querySelector('[name="color-scheme"]');t&&t.setAttribute("content",e?"dark":"light"),document.documentElement.classList.toggle("night",e)}get overlayIsActive(){return this._overlayIsActive}set overlayIsActive(e){this._overlayIsActive=e,this.dispatchEvent("overlay_toggle",e)}getTheme(e=("system"===this.settings.theme?this.systemTheme:this.settings.theme)){return this.settings.themes.find(t=>t.name===e)}}const i=new o;n.a.rootScope=i,t.default=i},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const s=r(49).a.debug,n="undefined"!=typeof window?window:self;t.b=s},30:function(e,t,r){"use strict";function s(e){if(null===e||"object"!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());if(Array.isArray(e)){return e.map(e=>s(e))}let t=new e.constructor;for(var r in e)e.hasOwnProperty(r)&&(t[r]=s(e[r]));return t}function n(e,t){const r=Object.keys,s=typeof e;return e&&t&&"object"===s&&s===typeof t?r(e).length===r(t).length&&r(e).every(r=>n(e[r],t[r])):e===t}function o(e,t){const r={writable:!0,configurable:!0},s={};t.forEach(t=>{void 0===e[t]&&(s[t]=r)}),Object.defineProperties(e,s)}function i(e,t="asc"){if(!e)return[];const r=Object.keys(e).map(e=>+e);return"asc"===t?r.sort((e,t)=>e-t):r.sort((e,t)=>t-e)}function c(e,t){if(!e)return t;for(var r in e)t.hasOwnProperty(r)||delete e[r];for(var r in t)e[r]=t[r];return e}function a(e,t,r){"byteLength"in r[e]&&(r[e]=[...r[e]]),t&&t[e]!==r[e]&&(t[e].length=r[e].length,r[e].forEach((r,s)=>{t[e][s]=r}),r[e]=t[e])}function l(e){return"object"==typeof e&&null!==e}function u(e,t){const r=t.split(".");let s=e;return r.forEach(e=>{e&&(s=s[e])}),s}function h(e,t,r){const s=t.split(".");u(e,s.slice(0,-1).join("."))[s.pop()]=r}function d(e,t,r,n){for(const o in e)typeof t[o]!=typeof e[o]?(t[o]=s(e[o]),r&&r(n||o)):l(e[o])&&d(e[o],t[o],r,n||o)}function f(e,t){if(t)for(let r in t)void 0!==t[r]&&(e[r]=t[r])}r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"i",(function(){return c})),r.d(t,"h",(function(){return a})),r.d(t,"f",(function(){return l})),r.d(t,"d",(function(){return u})),r.d(t,"j",(function(){return h})),r.d(t,"k",(function(){return d})),r.d(t,"g",(function(){return f}))},32:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"f",(function(){return n})),r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return u}));const s=function(e,t,r=!0,s=!0){let n=null;return(...o)=>{n?(clearTimeout(n),n=null):r&&e(...o),n=setTimeout(()=>{s&&e(...o),n=null},t)}};function n(e,t,r=!0){let s,n,o=null;return(...i)=>{s=!0,n=i,o||(r&&(s=!1,e(...n)),o=setInterval(()=>{if(!s)return clearInterval(o),void(o=null);s=!1,e(...n)},t))}}const o=e=>new Promise(t=>{setTimeout(t,e)});let i,c;function a(e){i?i.push(e):(i=[e],requestAnimationFrame(()=>{const e=i;i=void 0,e.forEach(e=>e())}))}function l(){return c||(c=new Promise(requestAnimationFrame),c.then(()=>{c=void 0}),c)}function u(){return new Promise(e=>{a(()=>{a(e)})})}},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a}));var s,n=r(26);!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(s||(s={}));const o=[s.None,s.Error,s.Warn,s.Log,s.Debug],i=Date.now();function c(){return"["+((Date.now()-i)/1e3).toFixed(3)+"]"}function a(e,t=s.Log|s.Warn|s.Error){function r(...r){return t&s.Log&&console.log(c(),e,...r)}return n.b||(t=s.Error),r.warn=function(...r){return t&s.Warn&&console.warn(c(),e,...r)},r.info=function(...r){return t&s.Log&&console.info(c(),e,...r)},r.error=function(...r){return t&s.Error&&console.error(c(),e,...r)},r.trace=function(...r){return t&s.Log&&console.trace(c(),e,...r)},r.debug=function(...r){return t&s.Debug&&console.debug(c(),e,...r)},r.setPrefix=function(t){e="["+t+"]:"},r.setPrefix(e),r.setLevel=function(e){t=o.slice(0,e+1).reduce((e,t)=>e|t,0)},r}},42:function(e,t,r){"use strict";function s(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},lastNotify:void 0,listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((r,s)=>{e.resolve=e=>{t.isFulfilled||(t.isFulfilled=!0,r(e))},e.reject=(...e)=>{t.isRejected||(t.isRejected=!0,s(...e))}});return t.finally(()=>{t.notify=null,t.listeners.length=0,t.lastNotify=null,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}r.d(t,"a",(function(){return s}))},49:function(e,t,r){"use strict";const s={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};t.a=s},56:function(e,t,r){"use strict";function s(e,t){return new Promise(r=>{const s=new FileReader;s.addEventListener("loadend",e=>r(e.target.result)),s[t](e)})}function n(e){return s(e,"readAsText")}function o(e){return s(e,"readAsDataURL")}function i(e){return function(e){return s(e,"readAsArrayBuffer")}(e).then(e=>new Uint8Array(e))}function c(e,t=""){let r;const s=function(e){if(-1===["image/jpeg","image/png","image/gif","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json","application/pdf"].indexOf(e))return"application/octet-stream";return e}(t);try{r=new Blob(e,{type:s})}catch(t){let n=new BlobBuilder;e.forEach(e=>{n.append(e)}),r=n.getBlob(s)}return r}r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return c}))},58:function(e,t,r){"use strict";var s=r(26),n=r(49);const o="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,i="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,c=o||i,a=(e,...t)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then(r=>{r.length&&r.slice(e?0:-1).forEach(e=>{e.postMessage(...t)})})},l=(...e)=>{self.postMessage(...e)},u=()=>{},h=i?a.bind(null,!1):o?l:u;i&&a.bind(null,!0);class d{constructor(){this.prefix="",this.cache={},this.useStorage=!0,n.a.test&&(this.prefix="t_")}get(e,t=!0){if(this.cache.hasOwnProperty(e)&&t)return this.cache[e];if(this.useStorage){let t;try{t=localStorage.getItem(this.prefix+e)}catch(e){this.useStorage=!1}if(null!==t)try{t=JSON.parse(t)}catch(e){}else t=void 0;return t}}set(e,t=!1){for(const r in e)if(e.hasOwnProperty(r)){const s=e[r];if(this.cache[r]=s,this.useStorage&&!t)try{const e=JSON.stringify(s);localStorage.setItem(this.prefix+r,e)}catch(e){this.useStorage=!1}}}delete(e,t=!1){e=""+e,t||delete this.cache[e];try{localStorage.removeItem(this.prefix+e)}catch(e){}}clear(){const e=["dc","server_time_offset","xt_instance","user_auth"];for(let t=1;t<=5;++t)e.push(`dc${t}_server_salt`),e.push(`dc${t}_auth_key`);for(let t of e)this.delete(t,!0)}toggleStorage(e){if(this.useStorage=e,e)return this.set(this.cache);this.clear()}}class f{constructor(){this.taskId=0,this.tasks={},f.STORAGES.push(this),c||(this.storage=new d)}finishTask(e,t){this.tasks.hasOwnProperty(e)&&(this.tasks[e](t),delete this.tasks[e])}proxy(e,...t){return new Promise((r,s)=>{if(c){const s=this.taskId++;this.tasks[s]=r;h({type:"localStorageProxy",id:s,payload:{type:e,args:t}})}else{t=Array.prototype.slice.call(t);r(this.storage[e].apply(this.storage,t))}})}get(e,t){return this.proxy("get",e,t)}set(e,t){return this.proxy("set",e,t)}delete(e,t){return this.proxy("delete",e,t)}clear(){return this.proxy("clear")}toggleStorage(e){return this.proxy("toggleStorage",e)}}f.STORAGES=[];const g=new f;s.a.appStorage=g;t.a=g},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));class s{constructor(e){this._constructor(e)}_constructor(e=!1){this.reuseResults=e,this.listeners={},this.listenerResults={}}addEventListener(e,t,r){var s;this.listenerResults.hasOwnProperty(e)&&(t(...this.listenerResults[e]),r)||(null!==(s=this.listeners[e])&&void 0!==s?s:this.listeners[e]=[]).push({callback:t,once:r})}addMultipleEventsListeners(e){for(const t in e)this.addEventListener(t,e[t])}removeEventListener(e,t){this.listeners[e]&&this.listeners[e].findAndSplice(e=>e.callback===t)}dispatchEvent(e,...t){this.reuseResults&&(this.listenerResults[e]=t);const r=[],s=this.listeners[e];if(s){s.slice().forEach(n=>{-1!==s.findIndex(e=>e.callback===n.callback)&&(r.push(n.callback(...t)),n.once&&this.removeEventListener(e,n.callback))})}return r}cleanup(){this.listeners={},this.listenerResults={}}}},85:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var s=r(42),n=r(32),o=r(49),i=r(56),c=r(30),a=r(37);class l{constructor(e,t){this.storageIsAvailable=!0,Object(c.g)(this,e),o.a.test&&(this.name+="_test"),this.storeName=t,this.log=Object(a.b)("IDB-"+this.storeName),this.openDatabase(!0),l.STORAGES.push(this)}static closeDatabases(e){this.STORAGES.forEach(t=>{if(e&&e===t)return;const r=t.db;r&&(r.onclose=()=>{},r.close())})}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;try{var t=indexedDB.open(this.name,this.version);if(!t)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let r=!1;return setTimeout(()=>{r||t.onerror({type:"IDB_CREATE_TIMEOUT"})},3e3),this.openDbPromise=new Promise((e,s)=>{t.onsuccess=n=>{r=!0;const o=t.result;let i=!1;this.log("Opened"),o.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),s(e)},o.onclose=e=>{this.log.error("closed:",e),!i&&this.openDatabase()},o.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(i=!0),t.onerror&&t.onerror(e),o.close()},o.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=o)},t.onerror=e=>{r=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),s(e)},t.onupgradeneeded=e=>{r=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);var t=e.target.result;this.stores.forEach(e=>{t.objectStoreNames.contains(e.name)||((e,t)=>{var r;const s=e.createObjectStore(t.name);if(null===(r=t.indexes)||void 0===r?void 0:r.length)for(const e of t.indexes)s.createIndex(e.indexName,e.keyPath,e.objectParameters)})(t,e)})}})}delete(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readwrite",t=>e.map(e=>t.delete(e)),"")}clear(e){return this.getObjectStore("readwrite",e=>e.clear(),"",e)}save(e,t){return Array.isArray(e)||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",r=>e.map((e,s)=>r.put(t[s],e)),"")}saveFile(e,t){return t instanceof Blob||(t=Object(i.a)([t])),this.save(e,t)}get(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readonly",t=>e.map(e=>t.get(e)),"")}getObjectStore(e,t,r,s=this.storeName){let n;return r&&(n=performance.now(),this.log(r+": start")),this.openDatabase().then(o=>new Promise((i,c)=>{const a=o.transaction([s],e);a.onerror=e=>{clearTimeout(l),c(a.error)},a.oncomplete=e=>{clearTimeout(l),r&&this.log(r+": end",performance.now()-n);const t=d.map(e=>e.result);i(h?t:t[0])};const l=setTimeout(()=>{this.log.error("transaction not finished",a)},1e4),u=t(a.objectStore(s)),h=Array.isArray(u),d=h?u:[].concat(u)}))}getAll(){return this.getObjectStore("readonly",e=>e.getAll(),"")}}l.STORAGES=[];var u=function(e,t,r,s){return new(r||(r=Promise))((function(n,o){function i(e){try{a(s.next(e))}catch(e){o(e)}}function c(e){try{a(s.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}a((s=s.apply(e,t||[])).next())}))};function h(){}class d{constructor(e,t){this.db=e,this.storeName=t,this.cache={},this.useStorage=!0,this.getPromises=new Map,this.keysToSet=new Set,this.saveDeferred=Object(s.a)(),this.keysToDelete=new Set,this.deleteDeferred=Object(s.a)(),this.storage=new l(e,t),d.STORAGES.length&&(this.useStorage=d.STORAGES[0].useStorage),d.STORAGES.push(this),this.saveThrottled=Object(n.f)(()=>u(this,void 0,void 0,(function*(){const e=this.saveDeferred;this.saveDeferred=Object(s.a)();const t=this.keysToSet;if(t.size){const e=Array.from(t.values());t.clear();try{const t=e.map(e=>this.cache[e]);yield this.storage.save(e,t)}catch(t){console.error("[AS]: set error:",t,e)}}e.resolve(),t.size&&this.saveThrottled()})),16,!1),this.deleteThrottled=Object(n.f)(()=>u(this,void 0,void 0,(function*(){const e=this.deleteDeferred;this.deleteDeferred=Object(s.a)();const t=this.keysToDelete;if(t.size){const e=Array.from(t.values());t.clear();try{yield this.storage.delete(e)}catch(t){console.error("[AS]: delete error:",t,e)}}e.resolve(),t.size&&this.deleteThrottled()})),16,!1),this.getThrottled=Object(n.f)(()=>u(this,void 0,void 0,(function*(){const e=Array.from(this.getPromises.keys());this.storage.get(e).then(t=>{for(let r=0,s=e.length;r<s;++r){const s=e[r],n=this.getPromises.get(s);n&&(n.resolve(this.cache[s]=t[r]),this.getPromises.delete(s))}},r=>{["NO_ENTRY_FOUND","STORAGE_OFFLINE"].includes(r)||(this.useStorage=!1,console.error("[AS]: get error:",r,e,t));for(let t=0,r=e.length;t<r;++t){const r=e[t],s=this.getPromises.get(r);s&&(s.resolve(void 0),this.getPromises.delete(r))}}).finally(()=>{this.getPromises.size&&this.getThrottled()})})),16,!1)}isAvailable(){return this.useStorage}getCache(){return this.cache}getFromCache(e){return this.cache[e]}setToCache(e,t){return this.cache[e]=t}get(e,t=!0){return u(this,void 0,void 0,(function*(){if(this.cache.hasOwnProperty(e)&&t)return this.getFromCache(e);if(this.useStorage){const t=this.getPromises.get(e);if(t)return t;const r=Object(s.a)();return this.getPromises.set(e,r),this.getThrottled(),r}}))}getAll(){return this.storage.getAll().catch(()=>[])}set(e,t=!1){for(const r in e)if(e.hasOwnProperty(r)){const s=e[r];this.setToCache(r,s),this.useStorage&&!t&&(this.keysToSet.add(r),this.keysToDelete.delete(r),this.saveThrottled())}return this.useStorage?this.saveDeferred:Promise.resolve()}delete(e,t=!1){return e=""+e,t||delete this.cache[e],this.useStorage&&(this.keysToSet.delete(e),this.keysToDelete.add(e),this.deleteThrottled()),this.useStorage?this.deleteDeferred:Promise.resolve()}clear(e=!1){if(!e)for(const e in this.cache)delete this.cache[e];return this.storage.clear().catch(h)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>(t.useStorage=e,e?t.set(t.cache):(t.keysToSet.clear(),t.keysToDelete.clear(),t.getPromises.forEach(e=>e.resolve(void 0)),t.getPromises.clear(),t.clear(!0))))).catch(h)}}d.STORAGES=[]},86:function(e,t,r){"use strict";var s=r(26),n=r(85),o=r(97);const i=new n.a(o.a,"session");s.a.stateStorage=i,t.a=i},97:function(e,t,r){"use strict";t.a={name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]}}}]);
//# sourceMappingURL=0.ac9b48752fe298135dfe.chunk.js.map