# Runeword-helper for Diablo II LoD & Diablo II: Resurrected

<p align="center">
  Live site: <strong><a href="https://victorhugo183.github.io/runeword-helper/" target="_blank">victorhugo183.github.io/runeword-helper</a></strong>
</p>

<p align="center" class="bg-red">
  <img width="600" src="https://user-images.githubusercontent.com/60555502/148111370-37cae89f-1247-41ff-87a2-a4fc288241d3.png" />
</p>

<p align="center"><em>An application to help you visualize what Runewords you can make with the current Runes you own in Diablo 2.</em></p>
<p align="center"><em>LoD mode: display data for Diablo II: LoD v1.14</em></p>
<p align="center"><em>D2R mode: display data for Diablo II: Resurrected Patch 2.3</em></p>

### Mobile support:
This website was designed to provide a good mobile experience, as there will be many players who won't be playing Diablo II: Resurrected on PC.

On iPhones you may add the App to your homescreen from Safari, via the share button -> Add to homescreen.<br>
To make sure the app is up to date, close and re-open the app.

## Development Notes

This project was built using modern Javascript and React.js

Runeword-helper uses localStorage to maintain selected runes and display mode preference. if the user clears "Cookie & other site related data" manually in their browser, the user state will be reset.

The App uses Service Workers so that it may be downloaded and retain its functionality if internet connection is disrupted. New version updates require closing and re-opening the app / browser tab.

The data is static and saved locally, I'll do my best to keep it updated with the latest D2R patch.
