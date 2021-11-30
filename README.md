## Replicon Clock In Bug Fix Extension

### About

    Replicon does not check if you are already clocked-in when you click the
"Clock In" button.  This can cause your clock-in time to be later than it
should be, and you will be paid less than you've earned.

    This extension inserts a script into the page that disables the "Clock In"
button after you've clicked it the first time.

### Installation

    At this time, I don't intend to publish the extension.  If you would like
to install it, follow these steps:

    1. Fork this repo, then clone the fork
    2. [Zip the extension](https://extensionworkshop.com/documentation/publish/package-your-extension/)
    3. In Firefox, navigate to `about:addons` and install
        - Click on the gear next to `Manage Your Extensions`
        - Click on `Install Add-on From File...`
        - Find and select the extension zip