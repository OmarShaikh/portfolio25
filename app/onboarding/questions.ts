// The questionnaire as data. Edit copy here; the form renders whatever is in this file.
// `preselected` = what we already know about the client, shown ticked on first load (never hidden).

export type QType = "text" | "long" | "single" | "multi" | "rank" | "scale" | "palette";

export type Question = {
  id: string;
  label: string;
  type: QType;
  help?: string;
  placeholder?: string;
  options?: string[];
  preselected?: string[];
  ends?: [string, string]; // scale end labels
};

export type Section = {
  id: string;
  title: string;
  minutes: number;
  intro?: string;
  questions: Question[];
};

export type Palette = { name: string; desc: string; colors: string[] };

export const palettes: Palette[] = [
  { name: "Cosmic Indigo", desc: "Near-black, indigo lines, amber accents. Omar's own HQ.", colors: ["#0b0b1a", "#312e81", "#f59e0b", "#e2e8f0"] },
  { name: "Terminal Amber", desc: "Black, amber text, green status. Bloomberg energy.", colors: ["#000000", "#ffb000", "#22c55e", "#262626"] },
  { name: "Ivory Office", desc: "Warm white, graphite text, one indigo accent. Apple-like calm.", colors: ["#f7f7f5", "#1f2937", "#4f46e5", "#e5e7eb"] },
  { name: "Majlis", desc: "Sand, deep emerald, brass. Gulf warmth.", colors: ["#e8dcc4", "#0f4c3a", "#c9a227", "#2b2b2b"] },
  { name: "Editorial", desc: "White, black, a single red. Serif headings, newspaper feel.", colors: ["#ffffff", "#111111", "#d62828", "#f2f2f2"] },
  { name: "Slate Executive", desc: "Deep navy, slate greys, ice-blue highlights.", colors: ["#0f172a", "#334155", "#7dd3fc", "#cbd5e1"] },
];

const MENTORS = {
  money: ["Ray Dalio", "Warren Buffett", "Charlie Munger", "Naval Ravikant", "Mark Cuban", "Howard Marks", "Mohnish Pabrai"],
  strategy: ["Jeff Bezos", "Alex Hormozi", "Peter Thiel", "Sam Walton", "Tony Hsieh", "Sheikh Mohammed bin Rashid"],
  realEstate: ["Ryan Serhant", "Grant Cardone", "Sam Zell", "Barbara Corcoran", "Gary Keller"],
  writing: ["Paul Graham", "Seth Godin", "Morgan Housel", "Naval (tweets)", "Gary Vaynerchuk"],
  design: ["Steve Jobs", "Jony Ive", "Dieter Rams", "Virgil Abloh", "Emily Heyward"],
  thinking: ["Marcus Aurelius", "Nassim Taleb", "Jordan Peterson", "Ibn Khaldun", "Tim Ferriss"],
};

export const sections: Section[] = [
  {
    id: "you",
    title: "You and your day",
    minutes: 5,
    intro: "The basics the assistant needs before it can be useful. Skip anything, come back any time.",
    questions: [
      { id: "full_name", label: "Your full name as it should appear on documents", type: "text", placeholder: "Saud ..." },
      { id: "address_as", label: "How should the assistant address you?", type: "single", options: ["Saud", "Mr. Shaikh", "Boss", "A nickname (add below)"], preselected: ["Saud"] },
      { id: "roles", label: "Your roles right now", type: "multi", options: ["Family office", "Real-estate brokerage", "Founder", "Investor", "Advisor"], preselected: ["Family office", "Real-estate brokerage", "Founder"], help: "We've ticked what we know. Untick or add." },
      { id: "ventures", label: "Ventures on your plate (current or planned)", type: "multi", options: ["Café", "FarshanKor carpets", "Family-office AI sub-brand"], preselected: ["Café", "FarshanKor carpets", "Family-office AI sub-brand"], help: "Add any we've missed. Each venture later gets its own shelf (folder + project page)." },
      { id: "ventures_detail", label: "One line per venture: what it is and its stage (idea / launching / running / paused)", type: "long", placeholder: "Café — specialty coffee in ___ — idea\nFarshanKor — ..." },
      { id: "typical_day", label: "Walk me through a typical weekday in five lines", type: "long", placeholder: "7am ... 9am ... afternoons ... evenings ..." },
      { id: "time_leaks", label: "Where does your time leak?", type: "long", placeholder: "Chasing replies, scheduling, rewriting the same doc..." },
      { id: "languages", label: "Languages you work in", type: "multi", options: ["English", "Arabic", "Urdu", "Hindi", "Farsi"], preselected: ["English"] },
      { id: "draft_language", label: "Default language for drafts", type: "single", options: ["English", "Arabic", "Depends on the recipient"], preselected: ["English"] },
      { id: "devices", label: "Devices you use daily", type: "multi", options: ["iPhone", "Android", "Mac", "Windows", "iPad"], preselected: ["iPhone"] },
      { id: "hours", label: "Waking hours and a do-not-disturb window", type: "text", placeholder: "Up at 7, no pings after 11pm" },
      { id: "weekend", label: "Your weekend", type: "single", options: ["Saturday–Sunday", "Friday–Saturday", "Whatever the week decides"], preselected: ["Saturday–Sunday"] },
    ],
  },
  {
    id: "apps",
    title: "Apps you already live in",
    minutes: 7,
    intro: "The assistant plugs into what you use. No switching required.",
    questions: [
      { id: "email_provider", label: "Email", type: "multi", options: ["Gmail (personal)", "Google Workspace (business)", "Outlook / Microsoft 365", "iCloud", "Other"], preselected: ["Gmail (personal)"] },
      { id: "email_accounts", label: "How many inboxes, and which is the main one?", type: "text", placeholder: "3 — the family-office one matters most" },
      { id: "calendar", label: "Calendar", type: "single", options: ["Google Calendar", "Outlook", "Apple Calendar", "Paper / my head"], preselected: ["Google Calendar"] },
      { id: "calendar_shared", label: "Is your calendar shared with anyone (assistant, spouse, partner)?", type: "text" },
      { id: "messaging", label: "Messaging you actually read", type: "multi", options: ["WhatsApp", "Telegram", "iMessage", "Slack", "Email"], preselected: ["WhatsApp", "Telegram"] },
      { id: "telegram_ok", label: "Telegram as the assistant's channel is fine?", type: "single", options: ["Yes", "Prefer WhatsApp (riskier, we can discuss)", "Both"], preselected: ["Yes"] },
      { id: "notes_files", label: "Notes and files", type: "multi", options: ["Google Drive", "Notion", "Apple Notes", "Obsidian", "Dropbox", "iCloud Drive", "OneDrive"], preselected: ["Google Drive"] },
      { id: "tasks", label: "Task manager", type: "single", options: ["Apple Reminders", "Todoist", "Things", "Notion", "None, I remember"], },
      { id: "linkedin_usage", label: "How often do you open LinkedIn?", type: "single", options: ["Daily", "A few times a week", "Weekly", "Rarely"] },
      { id: "instagram_business", label: "Instagram for business?", type: "single", options: ["Yes, actively", "Accounts exist, dormant", "Not yet"], preselected: ["Accounts exist, dormant"] },
      { id: "crm_today", label: "Any CRM or spreadsheet you track clients in today?", type: "text", placeholder: "Link or describe" },
      { id: "admired_apps", label: "Apps whose design you admire", type: "multi", options: ["Apple (iOS / macOS)", "Linear", "Notion", "Superhuman", "Bloomberg Terminal", "Stripe", "Things", "Arc", "Raycast", "Property Finder", "Revolut", "Emirates NBD"], preselected: ["Apple (iOS / macOS)"], help: "You mentioned Apple's design philosophy on our call, so it's ticked." },
      { id: "admired_why", label: "What is it about them?", type: "long" },
      { id: "hated_app", label: "One app you hate, and why", type: "text" },
    ],
  },
  {
    id: "character",
    title: "The assistant's character",
    minutes: 8,
    intro: "This is the fun part. The assistant has a personality, and it can borrow from people you rate.",
    questions: [
      { id: "name", label: "Give it a name", type: "text", placeholder: "Or write 'you pick' and describe the vibe", help: "Omar's is called Hermes." },
      { id: "s_formal", label: "Formal ↔ Casual", type: "scale", ends: ["Formal", "Casual"] },
      { id: "s_brief", label: "Brief ↔ Thorough", type: "scale", ends: ["One line", "Full detail"] },
      { id: "s_proactive", label: "Waits to be asked ↔ Proactive", type: "scale", ends: ["Only when asked", "Volunteers ideas"] },
      { id: "s_playful", label: "Serious ↔ Playful", type: "scale", ends: ["All business", "Banter welcome"] },
      { id: "s_pushback", label: "Agrees ↔ Pushes back", type: "scale", ends: ["Just executes", "Argues with me"] },
      { id: "opinions", label: "Should it have opinions?", type: "single", options: ["Yes, argue with me", "Only when I ask", "Just execute"], preselected: ["Yes, argue with me"], help: "You liked opinionated agents with real-world exemplars, so we ticked the first." },
      { id: "humor", label: "Humor level", type: "single", options: ["None", "Dry", "Witty", "Roast me"] },
      { id: "m_money", label: "Money and investing: whose thinking should it channel?", type: "multi", options: MENTORS.money },
      { id: "m_strategy", label: "Business strategy and operating", type: "multi", options: MENTORS.strategy },
      { id: "m_realestate", label: "Real estate and sales", type: "multi", options: MENTORS.realEstate },
      { id: "m_writing", label: "Communication and writing", type: "multi", options: MENTORS.writing },
      { id: "m_design", label: "Design and brand", type: "multi", options: MENTORS.design, preselected: ["Steve Jobs", "Jony Ive"] },
      { id: "m_thinking", label: "Thinking and life", type: "multi", options: MENTORS.thinking },
      { id: "admired_people", label: "Three people you admire (any field) and the trait you'd borrow", type: "long", placeholder: "My grandfather — patience under pressure\n..." },
      { id: "books", label: "Books or podcasts the assistant should have 'read'", type: "long" },
      { id: "red_lines", label: "Red lines: topics it must never joke about or touch", type: "long" },
      { id: "observance", label: "Religious observance to respect", type: "multi", options: ["Prayer times in scheduling", "Friday prayer block", "Ramadan hours", "Halal-only recommendations", "None needed"], preselected: ["Prayer times in scheduling", "Friday prayer block", "Ramadan hours"] },
      { id: "voice", label: "For the future voice mode", type: "multi", options: ["Male voice", "Female voice", "No preference", "British accent", "American accent", "Gulf-neutral English", "Slow and calm", "Quick and sharp"] },
    ],
  },
  {
    id: "look",
    title: "Look and feel",
    minutes: 6,
    intro: "Your dashboard, your taste. Pick a palette (mixing is fine), then a few quick calls.",
    questions: [
      { id: "palette", label: "Choose a palette", type: "palette", preselected: ["Ivory Office"], help: "Ivory Office is closest to Apple, so it's ticked. Pick more than one if you want a mix." },
      { id: "theme", label: "Light or dark?", type: "single", options: ["Light", "Dark", "Follows my phone"] },
      { id: "typography", label: "Typography mood", type: "single", options: ["Geometric sans (clean, modern)", "Humanist sans (friendly)", "Serif headings (editorial)", "Monospace details (technical)"] },
      { id: "density", label: "Density", type: "single", options: ["Airy", "Balanced", "Dense, show me everything"] },
      { id: "metaphor", label: "The home screen should feel like", type: "single", options: ["A cockpit", "A newspaper front page", "A Notion page", "A Bloomberg screen", "An iPhone home screen"] },
      { id: "stage", label: "The animated voice 'stage' (the Jarvis screen) or a plain dashboard first?", type: "single", options: ["Jarvis stage from day one", "Plain dashboard first, stage later", "Never mind the theatrics"], preselected: ["Plain dashboard first, stage later"], help: "The push-to-talk mic was your idea, so the stage is on the roadmap either way." },
      { id: "references", label: "Up to three links or screenshots of interfaces you love", type: "long", placeholder: "Paste links" },
      { id: "motto", label: "A motto or line for the home screen (optional)", type: "text" },
    ],
  },
  {
    id: "p1",
    title: "Phase 1 · Briefing, calendar, contacts",
    minutes: 7,
    intro: "Weeks 1–2. The daily briefing and scheduling rules.",
    questions: [
      { id: "briefing_time", label: "Briefing time and days", type: "text", placeholder: "7:30am, every day / weekdays only" },
      { id: "briefing_format", label: "Delivered as", type: "single", options: ["Text", "Voice note", "Both"] },
      { id: "briefing_contents", label: "What's in it? Tap in order of importance", type: "rank", options: ["Today's calendar", "Follow-ups due", "Top emails", "News", "Markets", "Weather", "Birthdays and occasions", "Prayer times", "A quote or thought"], preselected: ["Today's calendar", "Follow-ups due", "Top emails"] },
      { id: "news", label: "News topics and sources you trust", type: "long", placeholder: "UAE real estate, Gulf business, tech — The National, Bloomberg ME..." },
      { id: "markets", label: "Markets to watch", type: "multi", options: ["DFM / ADX", "S&P 500", "Gold", "Bitcoin", "AED/USD & INR/PKR rates", "Dubai property indices", "Oil"] },
      { id: "calendars", label: "Calendars to connect, and which it may write to", type: "long", placeholder: "Personal (write), work (read only), family (read)" },
      { id: "scheduling_rules", label: "Scheduling rules", type: "long", placeholder: "30-min default, 15-min buffer, no meetings before 10 or on Friday afternoons, default location DIFC..." },
      { id: "bookers", label: "Who may book you directly? Who must always be accepted?", type: "long" },
      { id: "contacts_sources", label: "Where your contacts live", type: "multi", options: ["Phone", "Google Contacts", "LinkedIn export", "WhatsApp", "A spreadsheet", "Outlook"], preselected: ["Phone", "WhatsApp"] },
      { id: "contacts_count", label: "Roughly how many contacts matter?", type: "text", placeholder: "~300 that matter, 2,000 total" },
      { id: "nagging", label: "Reminders: how nagging is OK?", type: "single", options: ["Once", "Until I mark it done", "Escalate if I ignore it"] },
    ],
  },
  {
    id: "p2",
    title: "Phase 2 · Email and LinkedIn in your voice",
    minutes: 10,
    intro: "Weeks 3–4. Nothing gets sent or posted without your approval. This section teaches the assistant to sound like you.",
    questions: [
      { id: "inboxes", label: "Which inboxes, and volume per day", type: "text" },
      { id: "urgent", label: "What counts as urgent? Who must always be surfaced? Who to ignore?", type: "long" },
      { id: "email_samples", label: "Paste two or three emails you were proud of", type: "long", help: "Any length. This is the single most useful answer in the form." },
      { id: "email_never", label: "Paste one email you'd never want it to write (yours or someone else's)", type: "long" },
      { id: "signature", label: "Signature and sign-offs you use", type: "long", placeholder: "Best, Saud / Warm regards" },
      { id: "never_words", label: "Words or phrases you never use", type: "text", placeholder: "'Circle back', 'kindly', exclamation marks..." },
      { id: "emoji", label: "Emoji in messages?", type: "single", options: ["Never", "Sparingly", "Sure"] },
      { id: "reply_style", label: "Reply style", type: "single", options: ["Short and decisive", "Warm and detailed", "Depends on who's writing"] },
      { id: "approval_flow", label: "Approvals", type: "single", options: ["Batch every morning", "Real-time as they come", "Both: urgent now, rest in the morning"], preselected: ["Both: urgent now, rest in the morning"] },
      { id: "li_purpose", label: "What is LinkedIn for, for you?", type: "multi", options: ["Deal flow", "Personal brand", "Brokerage leads", "Family-office presence", "Hiring", "Not sure yet"], preselected: ["Personal brand", "Brokerage leads"] },
      { id: "li_topics", label: "Topics you'd post about", type: "long" },
      { id: "li_never", label: "Topics you'd never post about", type: "text" },
      { id: "li_cadence", label: "Cadence you can sustain", type: "single", options: ["One a week", "Two or three a week", "Daily"], preselected: ["Two or three a week"], help: "Proposal assumes 2–3 drafts a week for you to approve." },
      { id: "li_formats", label: "Formats", type: "multi", options: ["Text posts", "Carousels", "Photos", "Short video", "Comments only"] },
      { id: "li_creators", label: "Three LinkedIn creators whose style you like (links), and one you dislike", type: "long" },
      { id: "li_comments", label: "Comment under others' posts? Whose?", type: "long" },
      { id: "li_arabic", label: "Arabic or bilingual posts too?", type: "single", options: ["English only", "Bilingual", "Arabic sometimes"] },
    ],
  },
  {
    id: "p3",
    title: "Phase 3 · Work-product studio and branding bench",
    minutes: 8,
    intro: "Weeks 5–6. Business plans, decks, models, and a brand kit per venture.",
    questions: [
      { id: "docs_rank", label: "Documents you need most. Tap in order", type: "rank", options: ["Business plan", "Investor deck", "One-pager", "Org chart", "Budget", "Financial model", "Proposal", "Contract draft", "Memo", "SOP"], preselected: ["Business plan", "Investor deck", "Financial model", "Org chart", "Budget"] },
      { id: "output_format", label: "Output format", type: "multi", options: ["Google Docs / Slides", "Word / PowerPoint", "PDF", "Notion", "Keynote"], preselected: ["Google Docs / Slides", "PDF"] },
      { id: "templates", label: "Existing templates, examples, or letterhead to match (links)", type: "long" },
      { id: "fin_conventions", label: "Financial conventions", type: "text", placeholder: "AED, Jan–Dec fiscal year, AED k / M, 5-year horizon" },
      { id: "brand_assets", label: "Per venture: existing logo, colours, fonts, Instagram handle, or 'from scratch'", type: "long", placeholder: "Café — nothing yet, from scratch\nFarshanKor — logo exists (link), IG @..." },
      { id: "brand_refs", label: "Brands whose look you love", type: "long", placeholder: "Aesop, Emirates, %Arabica, ..." },
      { id: "brand_tacky", label: "Brands you find tacky", type: "text" },
      { id: "shelf", label: "Where each venture's shelf should live", type: "single", options: ["Google Drive folder", "Notion", "Both"], preselected: ["Google Drive folder"] },
      { id: "collaborators", label: "Who else needs access to outputs?", type: "text", placeholder: "Partner, designer, accountant..." },
    ],
  },
  {
    id: "p4",
    title: "Phase 4 · Brokerage copilot",
    minutes: 8,
    intro: "Weeks 7–8. Clients, units, pipeline, follow-ups. Also the seed of something bigger.",
    questions: [
      { id: "brokerage", label: "Brokerage name, your role, start date", type: "text" },
      { id: "brokerage_horizon", label: "How long do you plan to stay?", type: "single", options: ["Six months, then decide", "A year", "Open-ended"], preselected: ["Six months, then decide"] },
      { id: "areas", label: "Areas and communities you cover", type: "long", placeholder: "Dubai Marina, JVC, Business Bay..." },
      { id: "property_types", label: "Property types", type: "multi", options: ["Off-plan", "Ready resale", "Rentals", "Commercial", "Land", "Luxury / villas"] },
      { id: "lead_sources", label: "Lead sources today", type: "multi", options: ["Property Finder", "Bayut", "Dubizzle", "Referrals", "Instagram", "Walk-ins", "Developer events", "Cold outreach"], preselected: ["Property Finder", "Bayut", "Referrals"] },
      { id: "tracking_today", label: "How you track clients today", type: "text" },
      { id: "pipeline_stages", label: "Pipeline stages you'd use", type: "multi", options: ["New", "Contacted", "Qualified", "Viewing booked", "Offer made", "Under contract", "Closed", "Lost", "Nurture"], preselected: ["New", "Contacted", "Viewing booked", "Offer made", "Closed", "Lost"] },
      { id: "followup", label: "Follow-up cadence you want enforced", type: "text", placeholder: "Same day, +3 days, +2 weeks, monthly nurture" },
      { id: "client_languages", label: "Languages your clients speak", type: "multi", options: ["English", "Arabic", "Hindi / Urdu", "Russian", "Chinese", "French"], preselected: ["English", "Arabic", "Hindi / Urdu"] },
      { id: "dossier", label: "What a client dossier must contain", type: "long", placeholder: "Budget, timeline, family size, financing, past viewings, preferences, red flags" },
      { id: "unit_presentation", label: "What a per-unit presentation should look like (reference links welcome)", type: "long" },
      { id: "kpis", label: "KPIs you care about", type: "multi", options: ["Viewings per week", "Response time", "Close rate", "Commission pipeline", "Listings won", "Leads per source"] },
      { id: "brokerage_privacy", label: "Anything that must never be shared across clients or leave the machine", type: "long" },
    ],
  },
  {
    id: "boundaries",
    title: "Boundaries, privacy, approvals",
    minutes: 5,
    intro: "The rules the assistant will never break.",
    questions: [
      { id: "never_without_me", label: "Never without my explicit approval", type: "multi", options: ["Send an email", "Post on LinkedIn / Instagram", "Book or move a meeting", "Message a contact", "Make a payment", "Delete anything", "Share a document externally"], preselected: ["Send an email", "Post on LinkedIn / Instagram", "Book or move a meeting", "Message a contact", "Make a payment", "Delete anything", "Share a document externally"], help: "These are the defaults. Untick only what you'd let it do on its own." },
      { id: "never_enter", label: "Data that must never enter the system", type: "long", placeholder: "Family-office financials, certain people, ..." },
      { id: "other_users", label: "Who else may talk to the assistant, and at what level?", type: "long", placeholder: "Wife — read only; assistant — full" },
      { id: "approval_channel", label: "Where approvals should arrive, and how many asks a day is too many", type: "text" },
      { id: "backup", label: "Nightly encrypted backup to your own Google Drive?", type: "single", options: ["Yes", "Local only", "Let's discuss"], preselected: ["Yes"] },
      { id: "when_unsure", label: "When unsure, it should", type: "single", options: ["Ask me", "Guess and flag it", "Do nothing"] },
    ],
  },
  {
    id: "later",
    title: "Later, and the magic wand",
    minutes: 5,
    intro: "Outside the current scope. Helps us design so these can bolt on cleanly.",
    questions: [
      { id: "w_finance", label: "Personal finance and portfolio desk", type: "scale", ends: ["Not interested", "Want it soon"] },
      { id: "w_garage", label: "Garage and vehicles desk", type: "scale", ends: ["Not interested", "Want it soon"] },
      { id: "w_cafe", label: "A dedicated agent for the café", type: "scale", ends: ["Not interested", "Want it soon"] },
      { id: "w_opportunity", label: "Deal-opportunity scoring", type: "scale", ends: ["Not interested", "Want it soon"] },
      { id: "w_voice_fil", label: "The voice agent for your father-in-law", type: "scale", ends: ["Not interested", "Want it soon"] },
      { id: "w_plaud", label: "Meeting recorder (Plaud) pipeline", type: "scale", ends: ["Not interested", "Want it soon"] },
      { id: "w_finance_mentors", label: "If finance later: whose lens, and what would you want weekly?", type: "long", placeholder: "Dalio's all-weather view, a Sunday portfolio note..." },
      { id: "magic_wand", label: "Magic wand: one thing you wish someone handled for you completely", type: "long" },
      { id: "success_90", label: "What does success look like at day 90? One sentence.", type: "long" },
      { id: "anything_else", label: "Anything we didn't ask", type: "long" },
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    minutes: 3,
    questions: [
      { id: "kickoff", label: "Preferred kickoff date", type: "text" },
      { id: "checkin", label: "Weekly 30-minute check-in: day, time, channel", type: "text", placeholder: "Tuesdays 6pm, call" },
      { id: "bot_account", label: "Name idea for the assistant's Google account and any domain preference", type: "text", placeholder: "hermes@saud.ae ..." },
      { id: "telegram_phone", label: "Phone number for Telegram pairing", type: "text", help: "Stored only in the private database behind this form." },
      { id: "hardware", label: "The mini-PC", type: "single", options: ["Deliver to me, Omar sets it up at mine", "Omar sets it up first and brings it over", "Deliver to me, I'll plug it in"], preselected: ["Omar sets it up first and brings it over"] },
    ],
  },
];

export const totalMinutes = sections.reduce((n, s) => n + s.minutes, 0);
export const allQuestions = sections.flatMap((s) => s.questions);
