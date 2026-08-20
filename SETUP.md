# Days — setup

Log every day as green, yellow or red, say what drove it, and watch the pattern
show up. Everything stays on your phone. No account, no server, no one else.

## Put it online (once, on a computer)

1. Go to **app.netlify.com/drop**
2. Drag the whole `daysapp` folder onto the page. Keep all five files together.
3. You get a URL right away, like `random-name-1234.netlify.app`.
4. Sign up for the free account when prompted, or the site expires in an hour.
5. Site settings → Change site name → something like `gargi-days`.

GitHub Pages and Cloudflare Pages work the same way if you prefer them.

## Install on your iPhone

1. Open the URL in **Safari** — not Chrome, not a link preview inside another app.
2. Tap the Share button, scroll down, tap **Add to Home Screen**, tap Add.
3. Open the app **from the new icon** from then on.

Do this before you start logging. Anything logged in Safari stays in Safari and
will not appear in the Home Screen app — they are separate storage.

## How it works

**Log** — pick the day along the top strip (today, or any of the last 7 days),
tap a colour, tap what drove it, add a comment if you want, save. Saving again
overwrites that day; there is only ever one entry per date.

**History** — a month at a time, each day a circle painted its colour. A small
dot under the number means you left a comment. **Today** jumps back to the
current month. Tap any day to open it: inside the 7-day window you can change
the colour, reason and comment right there in the sheet. Older days are
read-only.

**Charts** — pick a range, then: your green/yellow/red split, which reason sits
behind each colour, how each reason tends to turn out, how the days of the week
compare, streaks, and a plain-English summary at the bottom.

## Rules that keep the data alive

- Open the app at least once a week. iOS deletes web app data after long gaps.
- Export a backup regularly: **DATA** in the top right → Export backup file →
  save it to iCloud Drive. The app nags you after 7 days without one.
- Do not "Clear History and Website Data" in Safari settings. It wipes this too.
- Restoring a backup merges by date — the newer version of a day wins, and
  nothing already logged gets dropped.

## Updating

New versions do not download automatically. When you get a new copy: drag the
folder onto Netlify again, then in the app tap DATA → Check for update. Your
entries survive updates; they are stored separately from the app itself.

## What's here

| File | |
|---|---|
| `index.html` | The entire app |
| `sw.js` | Makes it work with no signal |
| `manifest.webmanifest` | Icon and full-screen behaviour |
| `icon-180.png`, `icon-512.png` | Home Screen icon |
