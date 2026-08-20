# Days

A private tracker with two sides to it. Rate each day — or each night — on five
levels: extra green, green, yellow, red, extra red. Say what drove it and add a
comment if it's worth remembering. The two extremes are drawn brighter and
ringed in the calendar so standout entries are obvious at a glance.

The switch at the top left picks which tracker you are looking at. Sleep leads
because it is logged first thing; the day is logged last thing.

- **Sleep** — how the night went, driven by my health, a new place, the alarm,
  duration, or Ted shenanigans.
- **Days** — how the day went, driven by me, others, or my health.

Each reason is one topic and the colour supplies the direction, so a late night
that worked is green under Duration and one that cost you is red under the same
reason. That keeps five buckets filling up instead of ten half-empty ones.

The two share the five colours, the seven-day editing window, the calendar, the
charts and the backup file, and nothing else. A day and a night on the same date
are separate entries and never overwrite each other.

Three tabs, and they follow whichever tracker is selected: **Log** (the week
shown as a colour run, with the open days tappable), **History** (a read-only
month calendar painted by colour), **Charts** (the split, what sits behind each
colour, how each reason tends to turn out, weekday patterns, streaks).

## What can be changed, and when

Two separate permissions, and a date can hold at most one of them:

- **Filling in** — a date still blank, inside the tracker's `backfill` window.
- **Changing what is already down** — a date already logged, inside the
  tracker's `change` window.

Each tracker sets both, so the two can be as strict as they need to be:

| | `backfill` | `change` | in practice |
|---|---|---|---|
| Sleep | 3 | 1 | fill in three days back; change only on the day itself |
| Days | 7 | 7 | fill in or change anything in the last week |

Where `change` is 1, a backfilled date locks the moment it is saved — the day it
describes has already gone — so saving one asks first. Past that an entry
stands: no edit, no delete, no re-entry. On Sleep the history is a record rather
than a draft, which is the point of keeping it.

Both permissions are enforced in `putDay` and `clearDay`, not only in the
buttons, so a stale pane cannot write through them.

Backups are prompted once a week rather than daily: on Sunday a count appears on
the DATA button. One backup file holds both trackers. Exports go through the OS
share sheet where one exists, which is how the file reaches Google Drive or
iCloud from a phone. Backups taken before the sleep tracker existed restore
cleanly — every entry in them is read as a day.

A saved day locks itself and reads back as a summary; changing it takes a
deliberate tap. Editing only ever happens on the Log tab.

## Running it

It's five static files with no build step. Open `index.html` through any web
server — locally, `python3 -m http.server 8777` and visit
`http://localhost:8777`. A server is needed rather than opening the file
directly because of the service worker.

## Hosting

Point any static host at the repository root. No build command, no output
directory to configure.

## Where the data lives

In the browser, on the device — `localStorage` with an `IndexedDB` mirror.
Nothing is sent anywhere and there is no account. **The data is tied to the
site's origin**, so moving the app to a different domain gives you an empty
app: export a backup first (DATA → Export backup file) and restore it on the
new URL.

See [SETUP.md](SETUP.md) for phone install and backup habits.
