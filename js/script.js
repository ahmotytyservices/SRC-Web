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

// ================= 2. SHOP RENDER & FILTER LOGIC =================
let currentFilter = "all";
let currentCurrency = "inr";

const shopGrid = document.getElementById("shopGrid");

function renderShop() {
  const filtered = shopItems.filter(
    (item) => currentFilter === "all" || item.type === currentFilter
  );

  shopGrid.innerHTML = filtered
    .map(
      (item) => `
      <div class="shop-card">
        <div>
          <div class="shop-tag">${item.type === "perm" ? "Permanent Fruit" : "Physical Fruit"}</div>
          <h3>${item.name}</h3>
        </div>
        <div>
          <div class="shop-price">${item[currentCurrency]}</div>
          <a
            href="${DISCORD_INVITE_URL}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline"
            style="width:100%; text-align:center;"
          >
            Buy via Ticket
          </a>
        </div>
      </div>
    `
    )
    .join("");
}

document.querySelectorAll("#shopFilters .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#shopFilters .active").classList.remove("active");
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderShop();
  });
});

document.querySelectorAll(".curr-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".curr-btn.active").classList.remove("active");
    btn.classList.add("active");
    currentCurrency = btn.dataset.currency;
    renderShop();
  });
});

// ================= 3. ROLES RENDER & FILTER LOGIC =================
const rolesGrid = document.getElementById("rolesGrid");

function renderRoles(category = "all") {
  const filtered = serverRoles.filter(
    (role) => category === "all" || role.cat === category
  );

  rolesGrid.innerHTML = filtered
    .map(
      (role) => `
      <div class="role-card">
        <div class="role-name">${role.name}</div>
        <div class="role-req">${role.req}</div>
      </div>
    `
    )
    .join("");
}

document.querySelectorAll("#roleFilters .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#roleFilters .active").classList.remove("active");
    btn.classList.add("active");
    renderRoles(btn.dataset.roleCat);
  });
});

// ================= 4. RULES RENDER & LIVE SEARCH =================
const rulesList = document.getElementById("rulesList");
const ruleSearch = document.getElementById("ruleSearch");

function renderRules(query = "") {
  const cleanQuery = query.toLowerCase().trim();
  const filtered = serverRules.filter(
    (r) =>
      r.title.toLowerCase().includes(cleanQuery) ||
      r.desc.toLowerCase().includes(cleanQuery)
  );

  rulesList.innerHTML = filtered
    .map(
      (r) => `
      <div class="rule-item">
        <div class="rule-top">
          <span class="rule-title">[${r.num}] ${r.title}</span>
          <span class="punishment-badge">${r.punishment}</span>
        </div>
        <p class="rule-desc">${r.desc}</p>
      </div>
    `
    )
    .join("");
}

ruleSearch.addEventListener("input", (e) => {
  renderRules(e.target.value);
});

// ================= 5. GALLERY LIGHTBOX MODAL =================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    modalImg.src = img.src;
    modalCaption.textContent = item.dataset.caption;
    modal.classList.add("open");
  });
});

modalClose.addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});

// ================= INITIALIZE PAGE =================
renderShop();
renderRoles();
renderRules();