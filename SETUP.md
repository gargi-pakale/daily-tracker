# Days — setup

Rate every day, and every night, on five levels — extra green, green, yellow,
red, extra red — say what drove it, log what you actually did, and watch the
pattern show up. The switch at the top left moves between the **Sleep**,
**Habits** and **Days** trackers. Everything stays on your phone. No account, no
server, no one else.

## Put it online (once, on a computer)

The app lives at **github.com/gargi-pakale/daily-tracker** and is served by
GitHub Pages straight from the `main` branch.

1. Push the code: `git push -u origin main`
2. In the repo, go to **Settings → Pages**.
3. Source: **Deploy from a branch** → branch `main` → folder `/ (root)` → Save.
4. A minute later it is live at **https://gargi-pakale.github.io/daily-tracker/**

## Install on your iPhone

1. Open **https://gargi-pakale.github.io/daily-tracker/** in **Safari** — not
   Chrome, not a link preview inside another app.
2. Tap the Share button, scroll down, tap **Add to Home Screen**, tap Add.
3. Open the app **from the new icon** from then on.

Do this before you start logging. Anything logged in Safari stays in Safari and
will not appear in the Home Screen app — they are separate storage.

## How it works

**Switching tracker** — the pill at the top left is Sleep / Habits / Days. Each
keeps its own entries, its own calendar and its own charts; only the backup file
and the storage underneath are shared. On the Sleep tracker a night belongs to
the day it ended on, so this morning's sleep goes under today.

**Log** — the strip along the top is the last week, each day painted its own
colour so you can see the run you are on. Tap a day to work on it: pick a level,
pick what drove it, add a comment if you want, save. **Extra green** and **extra
red** are for the days that really stood out either way — use them sparingly and
they stay meaningful.

Once a day is saved it stops being editable and just reads back to you: the
colour, what drove it, and the comment. Changing it takes a deliberate tap on
**Change this day**, so a stray touch can never rewrite it. There is only ever
one entry per date per tracker.

**Habits** works differently, because it logs things that happened rather than
rating the day. Five tiles — Caffeine, Exercise, Sugar, Meal, Nap — each showing
how many you have logged today. Tap one, pick from the chips, save. Tap it again
for the second tea; the count is just how many you logged, so there is no number
to type. **Save and add another** keeps the sheet open, which is what you want
when you are catching up on a whole day at once.

The app never guesses when something happened from the clock — you will often be
logging at night, especially travelling. So caffeine asks for the time of day,
meals ask breakfast / lunch / dinner / snack / late snack, and naps ask before or
after 3pm. Sugar asks whether you **bought** it, so you can see how often the
craving got you out of the house rather than into the kitchen. The chips come pre-selected from the current time, so logging as it
happens is no extra work and logging late is one tap.

**Naps go under Habits, not Sleep.** A nap happens long after you have logged the
night, and it belongs with the caffeine and the exercise that shape the *next*
night. Your sleep entry still shows the previous day's nap as a line underneath,
so you see it where you would expect to.

**How long a day stays open depends on the tracker.**

On **Days**, the last 7 can be filled in or changed, as they always could.

On **Sleep** it is deliberately tighter, so the record cannot be tidied up after
the fact. You can fill in a blank night up to two days back, but because that
date has already passed it locks the moment you save it — the app asks you to
confirm first. A saved night can only be changed on the day it belongs to; after
that it reads **LOGGED · LOCKED** and there is no way back in. A blank night
older than three days reads **CLOSED** and cannot be filled in at all.

On **Habits** you get the whole week: you can add to today and the six days
before it — the same seven days the strip shows, so anything you can see you can
still fill in. What you cannot do is revise. Once a day is past, what is already
written on it stands. So you can always catch up, and you can never tidy up.

**History** — a month at a time, each day a circle painted its colour. On Habits
there is no colour to paint with, so each day carries a small dot per habit you
logged, and the month underneath counts how often each one happened. A small
dot under the number means you left a comment. **Today** jumps back to the
current month. Extra green and extra red days are drawn brighter and ringed, so
the standout days catch your eye as you scan the month. Tapping a day shows you
what you put down for it and nothing more — History never edits. All changes
happen on the Log tab.

**Charts** — pick a range, then: your green/yellow/red split, which reason sits
behind each colour, how each reason tends to turn out, how the days of the week
compare, streaks, and a plain-English summary at the bottom.

On **Habits**, Charts shows how often each habit happens and how it breaks down —
when the caffeine lands, how the meals split, how hard the exercise was — and
then the part all of this is for: **how your habits line up with your sleep and
your days.** A night is matched to the day *before* it, since that is the day
that caused it; a day is matched to itself. Each comparison shows both sides with
their counts, so you can see how much it rests on.

Nothing shows up there until you have 14 days with both logged, and each
comparison needs 8 days either way before it appears. Give it a month before you
read much into it — with a dozen comparisons, one or two will look striking by
pure chance.

## Rules that keep the data alive

- Open the app at least once a week. iOS deletes web app data after long gaps.
- Back up weekly. Every Sunday a number appears on the **DATA** button; tap
  DATA → Back up. The reminder clears once you have backed up that week.

## Backing up to Google Drive

The app cannot put files in Drive by itself — that would need a Google login and
a server, and this app has neither. What it does is hand the file to iOS, and
you choose where it goes. Two taps:

1. **DATA → Export backup file.** The iOS share sheet opens holding
   `days-backup-YYYY-MM-DD.json`.
2. **Pick Google Drive**, then choose your folder. If Drive is not in the row of
   apps, scroll it or tap **Save to Files** → **Google Drive** instead. Either
   route lands in the same Drive.

If the share sheet is unhelpful — it sometimes offers apps that take text rather
than apps that take files — use **Copy backup as text** instead. That puts the
whole backup on the clipboard, and you can paste it into a Drive document, a
note, or an email to yourself. It always works.

The file is plain text and small; what matters is that a copy exists somewhere
that is not this phone.

To put a backup back, either **Restore from a file** and pick it, or paste the
copied text into the box and tap **Restore from pasted text**. Days merge by date
and the newer version of a day wins, so restoring never loses entries.
- Do not "Clear History and Website Data" in Safari settings. It wipes this too.
- Restoring a backup merges by date — the newer version of a day wins, and
  nothing already logged gets dropped.

## Updating

Push to `main` and GitHub Pages redeploys on its own within a minute. The
installed app does not pick that up by itself, though — open it and tap
**DATA → Check for update**. Your entries survive updates; they are stored
separately from the app itself.

## If you ever move it somewhere else

Your logged days are tied to the address `gargi-pakale.github.io`. Putting the
app on a different domain — a custom domain, Cloudflare, anywhere — gives you an
app with no history in it. Export a backup first and restore it on the new
address, or the days are gone.

## What's here

| File | |
|---|---|
| `index.html` | The entire app |
| `sw.js` | Makes it work with no signal |
| `manifest.webmanifest` | Icon and full-screen behaviour |
| `icon-180.png`, `icon-512.png` | Home Screen icon |
