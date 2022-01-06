# Runeword-helper for Diablo II LoD & Diablo II: Resurrected

<p align="center" class="bg-red">
  <img width="600" src="https://user-images.githubusercontent.com/60555502/148111370-37cae89f-1247-41ff-87a2-a4fc288241d3.png" />
</p>

<p align="center">
  Live site: <strong><a href="https://victorhugo183.github.io/runeword-helper/" target="_blank">victorhugo183.github.io/runeword-helper</a></strong>
</p>

<p align="center"><em>An application to help you visualize what Runewords you can make with the current Runes you own in Diablo 2.</em></p>
<p align="center"><em>Up to date with Diablo 2: Resurrected patch 2.3</em></p>

### How to use:
Select the runes that you own in Diablo 2 and the app will tell you which runewords you can make.<br>
You may narrow down results through searching by runeword name or applying filters.<br>
Select D2R mode if you're playing Diablo 2: Resurrected.<br>
Select LoD mode if you're playing Diablo 2: Lord of Destruction.<br>

### Mobile support:
This website was designed to provide a good mobile experience, as there will be many players who won't be playing Diablo II: Resurrected on PC.

On iPhone you may download the App from Safari, via the share button -> Add to homescreen.<br>
To make sure the app is up to date, close and re-open the app.

### Offline use:
<ul>
  <li>If the website is open, it should continue to work even if internet connection is disrupted.</li>
  <li>It is possible to install the app for offline use:</li><br>
  <p>- Chrome (Windows): you can simply click the install button at the end of the URL bar, it will create a shortcut on your desktop and start menu, You can also view your installed apps at the following URL: chrome://apps/</p>
  <p>- iPhone: click the share button, then add to homescreen.</p>
  <p>- Other devices/browsers: search how to install a PWA (Progressive Web App) on your platform.</p>
</ul>

### Updating:
To make sure you're using the latest version of the app, close the app/browser tab completely and open it again (a refresh might not be enough). If an update occurred you should get a pop-up alert.

The Diablo 2: Resurrected team have announced plans to continually introduce new runewords to the game, as such I will do my best to update the app accordingly.

## Development Notes

This project was built using modern Javascript and React.js

Runeword-helper uses localStorage to maintain selected runes and display mode preference. if the user clears "Cookie & other site related data" manually in their browser, the user state will be reset.

The App uses Service Workers so that it may be downloaded and retain its functionality if internet connection is disrupted. New version updates require closing and re-opening the app / browser tab.

The data is static and saved locally, I'll do my best to keep it updated with the latest D2R patch.

## Thanks:
@fabd for providing data, found in src -> Data -> (rune.js, runewords.js, runeword-descriptions.js)

## Copyright Notices:
Runeword Helper is a fan-made, personal project and earns no revenue from your visit.<br>
It is not produced by, endorsed by, supported by, or affiliated with Blizzard Entertainment.

The images used for the rune icons are Copyright Blizzard Entertainment, Inc.<br>

