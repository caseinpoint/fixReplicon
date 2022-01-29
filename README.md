## Replicon Clock-In Bug Fix Firefox Extension

### About

![Buttons](/screens/buttons.png)

Replicon does not check if you are already clocked-in when you click the
"Clock In" button.  This can cause your clock-in time to be later than it
should be, and you will be paid for less time than you've worked.

This Firefox extension inserts a script into the page that disables the "Clock
In" button after you've clicked it the first time.  The button is re-enabled by
Replicon's existing scripts when you click the "Clock Out" button.

![Alert](/screens/alert.png)

![Button disabled](/screens/button_disabled.png)

### Installation

[Click here](https://addons.mozilla.org/firefox/downloads/file/3901628/replicon_fixer-1.1.3-fx.xpi)

(This is hosted on the official Mozilla addons site, and meets their security
requirements)

If you would prefer to build and test it yourself, follow these steps:
1. Clone this repository
2. In Firefox, navigate to `about:debugging#/runtime/this-firefox`
3. Click `Load Temporary Add-on...`
4. Select `manifest.json`