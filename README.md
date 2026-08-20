# Days

A private daily tracker. Rate each day on five levels — extra green, green,
yellow, red, extra red — say what drove it (me, others, or my health) and add a
comment if it's worth remembering. The two extremes are drawn brighter and
ringed in the calendar so standout days are obvious at a glance.

Three tabs: **Log** (today or any day in the last month), **History** (a
read-only month calendar painted by colour), **Charts** (the split, what sits
behind each colour, how each reason tends to turn out, weekday patterns,
streaks).

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
