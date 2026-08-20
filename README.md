# Days

A private tracker with two sides to it. Rate each day — or each night — on five
levels: extra green, green, yellow, red, extra red. Say what drove it and add a
comment if it's worth remembering. The two extremes are drawn brighter and
ringed in the calendar so standout entries are obvious at a glance.

The switch at the top left picks which tracker you are looking at:

- **Days** — how the day went, driven by me, others, or my health.
- **Sleep** — how the night went, driven by my health, the alarm, an early
  night, a late night, Ted, or how long it lasted.

The two share the five colours, the seven-day editing window, the calendar, the
charts and the backup file, and nothing else. A day and a night on the same date
are separate entries and never overwrite each other.

Three tabs, and they follow whichever tracker is selected: **Log** (today or any
of the last 7 days, with the week shown as a colour run), **History** (a
read-only month calendar painted by colour), **Charts** (the split, what sits
behind each colour, how each reason tends to turn out, weekday patterns,
streaks).

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
