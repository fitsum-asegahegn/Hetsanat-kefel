# የህፃናት እና ታዳጊዎች ክፍል — Children & Youth Department (PWA)

Offline-first tool for the ህፃናት እና ታዳጊዎች ክፍል, built on the same pattern as
the HR and ንብረት ክፍል apps — but shaped around what *this* department
actually does: running weekly Sunday school for kids, catching who
stops showing up, running their programs (ቁርባን, spiritual films, site
visits...), and tracking their own ዕቅድ. Its own visual identity (warm
cream/terracotta) rather than reusing HR's dark-amber or ንብረት's ledger
green.

**ዋና ግብ:** "በክርስቲያናዊ እምነት፣ በመልካም ስነምግባር፣ በፍቅርና በአገልግሎት የበለፀጉ ልጆችን ማፍራት"

Works fully on-device via IndexedDB, no backend required. Supabase is
**optional** — connect it if several phones need to share one set of
records; skip it and it runs entirely offline/local.

## Deploy
1. Push this folder to a GitHub Pages repo (e.g. `tools/hetsanat-kefel/`),
   same pattern as the other tools.
2. Open the URL on a phone → "Add to Home Screen" / "Install app".
3. First load must happen **online once** so the service worker can cache
   the app shell and CDN libraries (Excel, PowerPoint, Supabase client).
   After that it works fully offline.

## Optional: connect Supabase (for multiple phones)
1. Create a free project at supabase.com.
2. **SQL Editor** → paste and run `supabase-schema.sql` — creates
   `members`, `attendance`, `programs`, `contributions`, `plan_items`,
   `user_roles`, and `profiles` + RLS (any signed-in teacher/leader can
   read/write; delete and the report generator are admin-only).
3. **Authentication → Providers**: confirm Email is on; for a small
   trusted team you can turn off "Confirm email".
4. **Project Settings → API**: copy the Project URL and anon public key
   into `config.js` before deploying — then every leader lands straight
   on sign-in, nobody pastes anything by hand. Never put the
   `service_role` key in `config.js`.
5. Everyone who signs up starts as `member`. In the Supabase dashboard,
   edit their `user_roles` row to `admin` if they should be able to
   delete records or run the report generator.
6. Don't want the cloud at all? Leave `config.js` blank — Settings tab
   shows "Skip — offline only" and the app just runs local.
7. **When Supabase is connected**, the app now shows a full-screen
   sign-in/sign-up gate before anything else — the person must sign in
   or explicitly tap "Skip — offline only" before the dashboard and
   tabs appear. With `config.js` left blank, there's nothing to gate
   and the app boots straight to the dashboard as before.

## Modules
- **አባላት (Members)** — each child's name, birth date, grade, parent
  name/phone, family-group mentor pairing ("father"/"mother" per item 7
  of the plan), join date, status, and a parent-communication note
  (item 9's "communication book").
- **አቴንዳስ (Attendance)** — pick a date, tick who's present, save. The
  dashboard and this tab both automatically flag any active child with
  **3+ consecutive absences** (looking back across the last recorded
  session dates) — that's item 4's "የጠፉ አባላትን መፈለግ." Each flagged child
  gets a tap-to-dial button to the parent's phone plus a "ደወልኩ ✓" button
  to log who called and why, so two leaders looking at the same list
  don't call twice. That status clears automatically the next time the
  child is marked present, but the reason is kept forever in the
  child's own call history.
- **ፕሮግራሞች (Programs)** — one log for ቁርባን schedule, spiritual
  films/games, site visits, experience-exchange trips, and other
  discussion/birthday programs (items 2, 3, 8, 10, 13): type, date,
  description, budget, how many attended, notes.
- **መዋጮ (Contributions)** — monthly collection from children and
  members, with a "handed to Accounts?" flag (item 11).
- **ዕቅድ (Plan)** — the department's exact 14-item 2019 ዓ/ም plan is
  seeded automatically on first load, using the same Ethiopian-calendar
  due-date engine as the other apps (multi-date items like the ቁርባን
  schedule's four dates, or the 12-times-a-year contribution collection,
  are parsed correctly). Import/Export Excel, mark-done history, and
  reset-to-original all work the same way as in the other department
  apps.
  - **🖨 Generate report** (print/PDF) and **📊 Generate PowerPoint** —
    both admin-only when Supabase is connected (open to whoever's on the
    device in offline-only mode). Both only count records **dated
    inside the selected 3/6/12-month window**. The PowerPoint version
    builds a bar chart (members/attendance rate/programs/flagged kids)
    and two doughnut charts (plan on-track vs. needs-attention,
    attendance rate), then a per-plan-item completion table. Uses the
    **Nyala** font for Ethiopic text (built into Windows; other viewers
    get an automatic fallback font). To make someone an admin: edit
    their row in Supabase's `user_roles` table.

## What's different from the other two apps
- No asset/finance ledger — that's ንብረት ክፍል's job.
- Attendance here is a simple per-date checklist (tick who showed up),
  not QR-code scanning like the HR app. That keeps the build lean; if
  printed QR cards and a camera scanner would genuinely help here too,
  that's a reasonable next addition — just ask.

## Files
Same structure as the other two department apps: `index.html` (app
shell + styling), `config.js` (Supabase keys), `i18n.js` (AM/EN
dictionary), `ethiopian-calendar.js` (date engine, shared verbatim),
`db.js` (IndexedDB wrapper, shared verbatim), `plan-seed.js` (this
department's 14-item plan), `auth.js` (optional Supabase layer),
`app.js` (all module logic), `manifest.json` + `sw.js` (PWA/offline —
bump the `CACHE` version string in `sw.js` on every redeploy),
`supabase-schema.sql`, `icon-192.png` / `icon-512.png`.


## Local reminders
Settings → 🔔 Local reminders lets a device opt in to a once-a-day
on-device notification summarizing anything that needs attention
(follow-ups needed, items/inventory needing attention, upcoming
programs/events, plan items coming due) — plus a "Check now" button to
check immediately rather than waiting. This uses the browser's
Notification API directly; it is **not** server push. There's no
backend to wake the app when it's closed, so this only fires while the
app is open on that device (same limitation as the HR app's version of
this feature, and for the same reason: no server, zero-cost static
site).


## Offline-only is a deploy-time choice, not a sign-in bypass
"Skip — offline only" no longer appears on the sign-in screen. Someone
without an account can no longer tap past sign-in to get in — offline
mode has no role restriction (admin-equivalent access, by design, since
there's no shared team to check against when nobody's signed in), so
letting anyone skip would have meant anyone without an account could get
full access. A person who **has** signed up still gets offline access
automatically the next time they open the app without a connection —
their session is remembered on that device, no button needed. True
"nobody needs an account" offline mode is still available, but only as
a deploy-time choice: leave `config.js` blank and the app never shows a
sign-in screen at all.


## Admin-approval sign-up workflow
New sign-ups no longer get in automatically. The flow now:
1. Someone signs up → they land on a **"waiting for admin approval"**
   screen (with a "Check again" button and a sign-out button) instead of
   the app. Behind the scenes their `user_roles` row is created with
   `status = 'pending'`.
2. An admin opens **Settings → 👤 Users**, sees them listed as Pending,
   and taps **✅ Approve as member** or **👑 Approve as admin** (or
   **🚫 Reject**). This sets their role and status in one action.
3. The waiting person taps **🔄 Check again** (or just reopens the app)
   and they're in, with whatever role the admin assigned.

Admins can also revisit anyone later from the same Users list — promote
a member to admin, demote an admin back to member, or revoke an
already-approved person's access entirely.

**This is enforced at the database level, not just in the app's UI** —
the Supabase RLS policies now require `status = 'approved'` to read or
write any of the shared data tables, so a pending or rejected account
can't get in by skipping the screen either (e.g. via direct API calls).

**Run the updated `supabase-schema.sql` again** to pick this up — every
statement is safe to re-run, and existing already-approved accounts
stay approved (the new `status` column defaults to `'approved'` for
rows that already exist; only brand-new sign-ups start `'pending'`).
The very first admin still has to be set from the SQL editor, same as
before — nobody has admin rights yet for the in-app Users screen to
work with until that one bootstrap step:
```sql
update user_roles set role = 'admin', status = 'approved' where user_id = '...';
```
After that, that admin can approve everyone else from inside the app.
