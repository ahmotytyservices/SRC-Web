// ================= 1. CENTRALIZED CONFIGURATION & DATA =================

// Single place to manage your official Discord invite URL
const DISCORD_INVITE_URL = "https://discord.gg/XxMWvK7WcJ";

// Automatically apply DISCORD_INVITE_URL to all static HTML links marked with data-discord-link
document.querySelectorAll("[data-discord-link]").forEach((anchor) => {
  anchor.href = DISCORD_INVITE_URL;
});

// Shop Items[cite: 3]
const shopItems = [
  { name: "Dragon (West)", type: "physical", inr: "₹1,550", usd: "$15.00" },
  { name: "Dragon (East)", type: "physical", inr: "₹1,450", usd: "$14.00" },
  { name: "Kitsune", type: "physical", inr: "₹275", usd: "$2.75" },
  { name: "Green Lightning", type: "physical", inr: "₹140", usd: "$1.40" },
  { name: "Venom", type: "physical", inr: "₹100", usd: "$1.00" },
  { name: "Yellow Lightning", type: "physical", inr: "₹90", usd: "$0.90" },
  { name: "HellFire Gas", type: "physical", inr: "₹90", usd: "$0.90" },
  { name: "Control Fruit", type: "physical", inr: "₹70", usd: "$0.70" },
  { name: "Tiger", type: "physical", inr: "₹60", usd: "$0.60" },
  { name: "Yeti", type: "physical", inr: "₹55", usd: "$0.55" },
  { name: "Dough", type: "physical", inr: "₹25", usd: "$0.25" },
  { name: "Portal", type: "physical", inr: "₹15", usd: "$0.15" },
  { name: "Buddha", type: "physical", inr: "₹15", usd: "$0.15" },
  { name: "Any Other 10M+ Fruit", type: "physical", inr: "₹10", usd: "$0.10" },
  { name: "Perm Dragon", type: "perm", inr: "₹3,500", usd: "$35.00" },
  { name: "Perm Portal", type: "perm", inr: "₹1,200 – ₹1,300", usd: "$12.00 – $13.00" },
  { name: "Perm Buddha", type: "perm", inr: "₹900 – ₹1,000", usd: "$9.00 – $10.00" }
];

// Server Roles[cite: 3]
const serverRoles = [
  { name: "@Emperors [天]", cat: "bounty", req: "15M+ bounty in game" },
  { name: "@Warlords [将軍]", cat: "bounty", req: "10M+ bounty in game" },
  { name: "@Bounty Hunter", cat: "bounty", req: "5M+ bounty in game" },
  { name: "@Hellfire Elite", cat: "special", req: "Limited edition role" },
  { name: "@ア • YOUTUBER", cat: "special", req: "1k+ subscribers" },
  { name: "@ア • VIP", cat: "special", req: "Boost the server 1 time" },
  { name: "@ア • Mythical Donator", cat: "special", req: "Donate 600M+" },
  { name: "@ア • Legendary Donator", cat: "special", req: "Donate 350M+" },
  { name: "@ア • Donator", cat: "special", req: "Donate 60M+" },
  { name: "@PILOT ACCESS", cat: "special", req: "30 valid vouchers in server" },
  { name: "@ア • Staff", cat: "special", req: "Host 1 Leviathan hunt & invite 10 members" },
  { name: "@ア • Jailed", cat: "special", req: "Penalty role for breaking server rules" },
  { name: "@ア • Dragon League", cat: "league", req: "Reach Level 100 in server" },
  { name: "@ア • Kitsune League", cat: "league", req: "Reach Level 90 in server" },
  { name: "@ア • Magnet League", cat: "league", req: "Reach Level 80 in server" },
  { name: "@ア • Yeti League", cat: "league", req: "Reach Level 70 in server" },
  { name: "@ア • Gas League", cat: "league", req: "Reach Level 60 in server" },
  { name: "@ア • Gravity League", cat: "league", req: "Reach Level 50 in server" },
  { name: "@ア • Lightning League", cat: "league", req: "Reach Level 40 in server" },
  { name: "@ア • Portal League", cat: "league", req: "Reach Level 30 in server" },
  { name: "@ア • Buddha League", cat: "league", req: "Reach Level 20 in server" },
  { name: "@ア • Magma League", cat: "league", req: "Reach Level 10 in server" },
  { name: "@ア • Rocket League", cat: "league", req: "Reach Level 5 in server" }
];

// All 15 Server Rules[cite: 3]
const serverRules = [
  { num: 1, title: "No Discriminatory Content", punishment: "Mute, Warn, Ban", desc: "Respect all members equally regardless of race, religion, gender, or ethnicity." },
  { num: 2, title: "No NSFW Content", punishment: "Ban", desc: "Adult or gore material is strictly prohibited, including discussing it in general." },
  { num: 3, title: "No Spamming / Flooding", punishment: "Mute, Warn", desc: "Do not spam messages, GIFs, or images. XP is capped per minute so flooding gives no extra XP." },
  { num: 4, title: "No Minimodding", punishment: "Warn", desc: "If someone breaks a rule, ping a staff member and wait instead of taking action yourself." },
  { num: 5, title: "English Only", punishment: "Mute, Warn", desc: "Use English in public channels so everyone can understand." },
  { num: 6, title: "No Begging", punishment: "Mute, Warn", desc: "Do not beg for fruits, items, or anything else—not even as a joke." },
  { num: 7, title: "Use Channels Correctly", punishment: "Warn", desc: "Keep discussions in their matching channels (e.g., use trading channels for trades)." },
  { num: 8, title: "No Unapproved Promotions", punishment: "Warn", desc: "Do not advertise servers or platforms in public chat; use the promotions channel only." },
  { num: 9, title: "Zero Tolerance for Minor Exploitation", punishment: "Ban", desc: "Any inappropriate content or jokes involving minors is strictly prohibited." },
  { num: 10, title: "No Loopholes", punishment: "Depends on Rule", desc: "Do not exploit wording loopholes. Actions against the intent of a rule are still punishable." },
  { num: 11, title: "Swearing Allowed, Toxicity Isn't", punishment: "Mute, Warn", desc: "Do not harass or trash-talk members in server channels." },
  { num: 12, title: "Report Staff Misconduct", punishment: "Support Ticket", desc: "If a staff member abuses power, open a support ticket with clear proof and full context." },
  { num: 13, title: "No Unnecessary Pings", punishment: "Mute", desc: "Do not unnecessarily ping content creators, staff roles, or other members." },
  { num: 14, title: "No Evading Punishments", punishment: "Ban", desc: "Using alternate accounts or bypasses to evade a mute or ban results in a permanent ban." },
  { num: 15, title: "Respect Discord & Roblox TOS", punishment: "Warn, Ban", desc: "Follow all Discord Terms of Service and Roblox Community Standards (including rules against account selling/trading)." }
];

// ================= PAGE-AWARE MULTI-PAGE SITE LOGIC =================
const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];
$$('[data-discord-link]').forEach(a => a.href = DISCORD_INVITE_URL);

// Cart is shared between pages through localStorage.
const CART_KEY = 'srcCartItems';
let cart = new Map();
try { cart = new Map(JSON.parse(localStorage.getItem(CART_KEY) || '[]')); } catch (_) { cart = new Map(); }
function saveCart(){ try { localStorage.setItem(CART_KEY, JSON.stringify([...cart.entries()])); } catch (_) {} }
function escapeHtml(value){return String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function usdBounds(priceText){const v=String(priceText).match(/[0-9]+(?:\.[0-9]+)?/g);if(!v)return{low:0,high:0};const n=v.map(Number);return{low:n[0],high:n.length>1?n[1]:n[0]};}
function moneyRange(low,high){const a=`$${low.toFixed(2)}`;return Math.abs(high-low)<.001?a:`${a}–$${high.toFixed(2)}`;}
function cartSums(){let low=0,high=0,count=0;cart.forEach(i=>{low+=i.low*i.qty;high+=i.high*i.qty;count+=i.qty;});const addons=[];if($('#priorityAddon')?.checked){low+=5;high+=5;addons.push('Priority Express Delivery (+$5.00)');}if($('#middlemanAddon')?.checked)addons.push('Verified SRC Middleman (Free)');return{low,high,count,addons};}
function updateCartBadge(){const badge=$('#cartCount');if(badge)badge.textContent=[...cart.values()].reduce((n,i)=>n+i.qty,0);}
function addShopItem(name){const item=shopItems.find(x=>x.name===name);if(!item)return;const key=`shop:${item.name}`;const existing=cart.get(key);if(existing)existing.qty++;else cart.set(key,{key,name:item.name,priceText:item.usd,...usdBounds(item.usd),qty:1});saveCart();updateCartBadge();const btn=$(`[data-item-name="${CSS.escape(name)}"]`);if(btn){const old=btn.textContent;btn.textContent='Added ✓';setTimeout(()=>btn.textContent=old,900);}}

// Shop page
if($('#shopGrid')){
 let filter='all',currency='inr';
 const grid=$('#shopGrid');
 function renderShop(){const items=shopItems.filter(i=>filter==='all'||i.type===filter);grid.innerHTML=items.map(i=>`<div class="shop-card"><div><div class="shop-tag">${i.type==='perm'?'Permanent Fruit':'Physical Fruit'}</div><h3>${escapeHtml(i.name)}</h3></div><div><div class="shop-price">${i[currency]}</div><button type="button" class="btn btn-outline add-to-cart" data-item-name="${escapeHtml(i.name)}">Add to Cart</button></div></div>`).join('');$$('.add-to-cart',grid).forEach(b=>b.addEventListener('click',()=>addShopItem(b.dataset.itemName)));}
 $$('#shopFilters .filter-btn').forEach(b=>b.addEventListener('click',()=>{$$('#shopFilters .filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;renderShop();}));
 $$('.curr-btn').forEach(b=>b.addEventListener('click',()=>{$$('.curr-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');currency=b.dataset.currency;renderShop();}));renderShop();
}

// Roles page
if($('#rolesGrid')){const grid=$('#rolesGrid');function renderRoles(cat='all'){grid.innerHTML=serverRoles.filter(r=>cat==='all'||r.cat===cat).map(r=>`<div class="role-card"><div class="role-name">${escapeHtml(r.name)}</div><div class="role-req">${escapeHtml(r.req)}</div></div>`).join('');} $$('#roleFilters .filter-btn').forEach(b=>b.addEventListener('click',()=>{$$('#roleFilters .filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderRoles(b.dataset.roleCat);}));renderRoles();}

// Rules page
if($('#rulesList')){const list=$('#rulesList'),search=$('#ruleSearch');function renderRules(q=''){q=q.toLowerCase().trim();const found=serverRules.filter(r=>r.title.toLowerCase().includes(q)||r.desc.toLowerCase().includes(q));list.innerHTML=found.length?found.map(r=>`<div class="rule-item"><div class="rule-top"><span class="rule-title">[${r.num}] ${escapeHtml(r.title)}</span><span class="punishment-badge">${escapeHtml(r.punishment)}</span></div><p class="rule-desc">${escapeHtml(r.desc)}</p></div>`).join(''):'<p class="rule-desc" style="grid-column:1/-1;text-align:center;padding:24px;">No rules match your search.</p>'; }search.addEventListener('input',e=>renderRules(e.target.value));renderRules();}

// Proof gallery
if($('#imageModal')){const modal=$('#imageModal'),img=$('#modalImg'),caption=$('#modalCaption');function close(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');img.src='';}$$('.gallery-item').forEach(item=>item.addEventListener('click',()=>{img.src=$('img',item).src;caption.textContent=item.dataset.caption;modal.classList.add('open');modal.setAttribute('aria-hidden','false');}));$('#modalClose').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close();});}

// Order page
if($('#cartItems')){
 const cartItemsEl=$('#cartItems'),totalEl=$('#cartTotal');let generatedTicket='';
 function renderCart(){if(!cart.size)cartItemsEl.innerHTML='<p class="empty-cart">Your cart is empty. <a href="shop.html">Browse the shop</a> to add items.</p>';else cartItemsEl.innerHTML=[...cart.values()].map(i=>`<div class="cart-line"><div class="cart-line-info"><strong>${escapeHtml(i.name)}</strong><small>${i.qty} × ${escapeHtml(i.priceText)} = ${moneyRange(i.low*i.qty,i.high*i.qty)}</small></div><div class="quantity-controls"><button type="button" data-action="minus" data-key="${escapeHtml(i.key)}">−</button><span>${i.qty}</span><button type="button" data-action="plus" data-key="${escapeHtml(i.key)}">+</button><button type="button" class="remove-item" data-action="remove" data-key="${escapeHtml(i.key)}">×</button></div></div>`).join('');$$('[data-action]',cartItemsEl).forEach(b=>b.addEventListener('click',()=>{const i=cart.get(b.dataset.key);if(!i)return;if(b.dataset.action==='plus')i.qty++;if(b.dataset.action==='minus')i.qty--;if(b.dataset.action==='remove'||i.qty<=0)cart.delete(b.dataset.key);saveCart();renderCart();}));const sums=cartSums();totalEl.textContent=moneyRange(sums.low,sums.high);updateCartBadge();generatedTicket='';$('#copyTicket').disabled=true;$('.ticket-status').textContent='Cart updated — regenerate ticket';}
 function addCustom(){const nameEl=$('#customItemName'),priceEl=$('#customItemPrice'),name=nameEl.value.trim(),price=Number(priceEl.value);if(!name||priceEl.value===''||!Number.isFinite(price)||price<0){nameEl.focus();$('#ticketError').textContent='Enter a custom item name and a valid USD price.';return;}const key=`custom:${name.toLowerCase()}`,old=cart.get(key);if(old)old.qty++;else cart.set(key,{key,name,priceText:`$${price.toFixed(2)}`,low:price,high:price,qty:1});nameEl.value='';priceEl.value='';$('#ticketError').textContent='';saveCart();renderCart();}
 $('#addCustomItem').addEventListener('click',addCustom);[$('#priorityAddon'),$('#middlemanAddon')].forEach(c=>c.addEventListener('change',renderCart));
 function nextTicketId(){const k='srcOrderTicketNumber';let n=1439;try{n=Math.max(1439,Number(localStorage.getItem(k)||1438)+1);localStorage.setItem(k,String(n));}catch(_){n=1439+Math.floor(Date.now()%8000);}return `#SRC-${n}`;}
 function generate(){const discord=$('#buyerDiscord').value.trim(),error=$('#ticketError');if(!cart.size){error.textContent='Your cart is empty. Add at least one item before generating a ticket.';return;}if(!discord){error.textContent='Please enter your Discord username before generating the ticket.';$('#buyerDiscord').focus();return;}error.textContent='';const game=$('#buyerGame').value.trim()||'N/A',region=$('#buyerRegion').value,payment=$('#buyerPayment').value,notes=$('#buyerNotes').value.trim()||'None',sums=cartSums(),id=nextTicketId();const items=[...cart.values()].map(i=>`  • ${i.qty}x ${i.name} (${moneyRange(i.low,i.high)} each)`).join('\n');generatedTicket=['==============================','       SRC ORDER TICKET       ','==============================',`Ticket ID : ${id}`,`Discord   : ${discord}`,`In-Game   : ${game}`,`Region    : ${region}`,`Payment   : ${payment}`,'------------------------------','SELECTED ITEMS:',items,'------------------------------',`Add-ons   : ${sums.addons.join(', ')||'None'}`,`Est. Total: ${moneyRange(sums.low,sums.high)}`,`Notes     : ${notes}`,'==============================',`Submit at : ${DISCORD_INVITE_URL}`].join('\n');$('#ticketId').textContent=id;$('#ticketOutput').textContent=generatedTicket;$('#copyTicket').disabled=false;$('.ticket-status').textContent='Ticket generated';$('#openDiscordSubmit').classList.remove('disabled-link');}
 $('#generateTicket').addEventListener('click',generate);
 $('#copyTicket').addEventListener('click',async()=>{if(!generatedTicket)return;try{await navigator.clipboard.writeText(generatedTicket);}catch(_){const t=document.createElement('textarea');t.value=generatedTicket;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();}$('#copyTicket').textContent='Copied!';setTimeout(()=>$('#copyTicket').textContent='Copy Order Ticket',1800);});
 $('#openDiscordSubmit').addEventListener('click',async e=>{if(!generatedTicket){e.preventDefault();$('#ticketError').textContent='Generate an order ticket first, then open Discord to submit it.';return;}try{await navigator.clipboard.writeText(generatedTicket);}catch(_){}});
 renderCart();
}
updateCartBadge();
