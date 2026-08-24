# Days

A private tracker with three sides to it. Two of them rate a day — or a night —
on five levels: extra green, green, yellow, red, extra red. Say what drove it and
add a comment if it's worth remembering. The two extremes are drawn brighter and
ringed in the calendar so standout entries are obvious at a glance. The third
records what you actually did, so the other two have something to be explained by.

The switch at the top left picks which tracker you are looking at. Sleep leads
because it is logged first thing; the day is logged last thing.

- **Sleep** — how the night went, driven by my health, a new place, the alarm,
  duration, or Ted shenanigans.
- **Habits** — what you did: caffeine, exercise, sugar, meals, naps.
- **Days** — how the day went, driven by me, others, or my health.

On Sleep and Days, each reason is one topic and the colour supplies the
direction, so a late night that worked is green under Duration and one that cost
you is red under the same reason. That keeps five buckets filling up instead of
ten half-empty ones.

The three share the calendar, the charts, the backup file and the storage
underneath, and nothing else. Entries on the same date in different trackers are
separate and never overwrite each other.

Three tabs, and they follow whichever tracker is selected: **Log**, **History**,
**Charts**. What each shows depends on the tracker — a rating tracker paints the
week as a colour run and the month by colour; Habits shows a tile per habit with
the day's count, and paints the calendar with a dot per habit logged.

## Habits

Habits does not rate anything. It logs events: one row per tea, per session, per
meal, per sugar, per nap, each with its own detail. Tapping the same tile twice
records two things, so "how many times" is the count rather than a field you have
to fill in.

| Habit | What it records |
|---|---|
| Caffeine | Green or black tea, 8/12/16/24 oz, and the time of day |
| Exercise | Running, hiking, strength, PT, other (any combination), duration, effort |
| Sugar | Home or outside, low/normal/high |
| Meal | Breakfast, lunch, dinner, snack or late snack, and whether it had protein |
| Nap | Duration, and before or after 3pm |

Time is asked for, never taken from the clock — the timestamp on a row says when
you wrote it, which is often the evening. The time chips arrive pre-selected from
the current time, so logging as it happens costs nothing extra and logging late
costs one tap.

Naps live here rather than on Sleep. A nap happens after the night has already
been logged, and it belongs to the same day as the caffeine and the exercise that
share the blame for the next night. The sleep entry for a date shows the previous
day's naps as a line of context, but does not store them.

## Correlation

Because Habits records the day and Sleep records the night, the charts join them
with an offset: **habits on a day are compared against the night that follows it,
and against that same day's Days entry.** Each comparison splits the days in two
— caffeine after 12pm or not, napped or not — and reports how each half turned
out, with the counts beside it.

Nothing appears until there are 14 matched days, and no single comparison appears
unless both sides have 8. With a dozen splits on a few weeks of logging one or
two will look meaningful by chance, so they are worded as patterns worth watching
rather than causes.

## What can be changed, and when

Two separate permissions, and a date can hold at most one of them:

- **Filling in** — a date still blank, inside the tracker's `backfill` window.
- **Changing what is already down** — a date already logged, inside the
  tracker's `change` window.

Each tracker sets both, so the two can be as strict as they need to be:

| | `backfill` | `change` | in practice |
|---|---|---|---|
| Sleep | 3 | 1 | fill in three days back; change only on the day itself |
| Habits | 3 | 1 | add to the last three days; change only on the day itself |
| Days | 7 | 7 | fill in or change anything in the last week |

Where `change` is 1, a backfilled date locks the moment it is saved — the day it
describes has already gone — so saving one asks first. Past that an entry
stands: no edit, no delete, no re-entry. On Sleep the history is a record rather
than a draft, which is the point of keeping it.

Habits reads these slightly differently, because an event log has no "blank"
date — another instance can always be added. So `backfill` governs **adding** an
instance and `change` governs **editing or deleting** one: the last three days
stay open to catch up on, but nothing already written can be revised after its
own day.

All four permissions are enforced in `putDay`, `clearDay`, `putItem` and
`removeItem`, not only in the buttons, so a stale pane cannot write through them.

Backups are prompted once a week rather than daily: on Sunday a count appears on
the DATA button. One backup file holds both trackers. Exports go through the OS
share sheet where one exists, which is how the file reaches Google Drive or
iCloud from a phone. Backups taken before the sleep tracker existed restore
cleanly — every entry in them is read as a day — and a backup holding habits
restores into an older build without losing them, because rows from an unknown
tracker are carried through untouched rather than dropped.

A saved day locks itself and reads back as a summary; changing it takes a
deliberate tap. Editing only ever happens on the Log tab, on every tracker.

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
