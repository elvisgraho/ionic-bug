# ionic-bug iOS

https://github.com/ionic-team/ionic-framework/issues/23324

app.component.ts - isNavDisabled = true (no bug)
app.component.ts - isNavDisabled = flase (bug)


Bug occurs when you spam the button in the middle (which triggers router navigation) like crazy. Basically navigation stops, angular seems to be ok with it, because router returns null, but the page is still not navigated on animation level (page is stuck)
