<p align="center">
  <img alt="logo" src="./assets/logo.png" width="100" max-width="100%">
</p>

<h1 align="center">React H5 Audio Player (+ Customizability)</h1>

<div align="center">
  <a href="https://www.npmjs.com/package/react-h5-audio-player" title="MIT License">
    <img src="https://img.shields.io/npm/l/react-h5-audio-player.svg?color=brightgreen" alt="MIT License">
  </a>
  <a href="https://www.npmjs.com/package/react-h5-audio-player" title="Monthly download">
    <img src="https://img.shields.io/npm/dm/react-h5-audio-player.svg?color=green" alt="Monthly download">
  </a>
  <a href="https://www.npmjs.com/package/react-h5-audio-player" title="Latest version">
    <img src="https://img.shields.io/npm/v/react-h5-audio-player.svg" alt="Latest version">
  </a>
</div>

* Audio player component that provides consistent UI/UX on different browsers.
* Super customizable layout
* Flexbox css with SVG icons. Mobile friendly.
* I18n and a11y supported, keyboards events supported.
* Support Media Source Extensions (MSE) and Encrypted Media Extensions (EME)
* Written in TypeScript.

![screenshot](./assets/screenshot.png)

Supported browsers: Chrome, Firefox, Safari, Edge

## What's different in this fork:

More options for customization have been added. Add custom components to the progress bar, or to the left or right of the whole player. This makes it significantly easier to add images and other text *inside* the audio player. For examples, look at the storyboards with `$ npm run storyboards`.

## [Migrate from v2.x to v3](https://github.com/lhz516/react-h5-audio-player/releases/tag/v3.0.0)

## Installation

`$ npm i react-h5-audio-player`

Or

`$ yarn add react-h5-audio-player`

## Usage

```jsx
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = () => (
  <AudioPlayer
    autoPlay
    src="http://example.com/audio.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);
```

#### Keyboard shortcuts (When audio player focused)

They can be turned off by setting `hasDefaultKeyBindings` prop to `false`

| Key binding | Action |
| ----------- | ------ |
| Space       | Play/Pause |
| ←           | Rewind |
| →           | Forward |
| ↑           | Volume up |
| ↓           | Volume down |
| L           | Toggle loop |
| M           | Toggle mute |

## Props

### HTML Audio Tag Native Attributes

| Props       |  Type                          |  Default  | Note |
| ----------- | ------------------------------ | --------- | ---- |
| src         | string                         | ''        | |
| preload     | 'auto' \| 'metadata' \| 'none' | 'auto'    | |
| autoPlay    | boolean                        | false     | Won't work on most mobile devices |
| loop        | boolean                        | false     | |
| muted       | boolean                        | false     | |
| volume      | number                         | 1.0       | Won't work on most mobile devices |
| crossOrigin | string                         | undefined | |
| mediaGroup  | string                         | undefined | |


More native attributes detail: [MDN Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

The `controls` attribute defaults to `false` and should never be changed to `true` because this library is already providing UI.

### UI/UX Props

| Props                    | Type              | Default | Note |
| ------------------------ | ----------------- | ------- | ---- |
| showSkipControls         | boolean           | false   | Show Previous/Next buttons |
| showJumpControls         | boolean           | true    | Show Rewind/Forward buttons |
| showDownloadProgress     | boolean           | true    | Show download progress over progress bar |
| showFilledProgress       | boolean           | true    | Show filled (already played) area on progress bar |
| showFilledVolume         | boolean           | false   | Show filled volume area on volume bar |
| hasDefaultKeyBindings    | boolean           | true    | Whether has default keyboard shortcuts |
| autoPlayAfterSrcChange   | boolean           | true    | Play audio after `src` is changed, no matter `autoPlay` is `true` or `false` |
| volumeJumpStep           | number            | 0.1     | Indicates the volume jump step when pressing up/down arrow key, volume range is `0` to `1` |
| progressJumpStep         | number            | 5000    | **Deprecated, use progressJumpSteps.** Indicates the progress jump step (ms) when clicking rewind/forward button or left/right arrow key |
| progressJumpSteps        | object            | `{ backward: 5000, forward: 5000 }`    | Indicates the progress jump step (ms) when clicking rewind/forward button or left/right arrow key|
| progressUpdateInterval   | number            | 20      | Indicates the interval (ms) that the progress bar UI updates,  |
| listenInterval           | number            | 1000    | Indicates the interval (ms) to call the `onListened` prop during playback |
| defaultCurrentTime       | ReactNode         | '--:--' | Default display for audio's current time before src's meta data is loaded |
| defaultDuration          | ReactNode         | '--:--' | Default display for audio's duration before src's meta data is loaded |
| timeFormat               | 'auto' \| 'mm:ss'<br>\| 'hh:mm:ss' | 'auto' | Time format for both current time and duration. `'auto'` means when duration is greater than one hour, time format is `hh:mm:ss`, otherwise it's `mm:ss` |
| header                   | ReactNode         | null    | Header of the audio player |
| footer                   | ReactNode         | null    | Footer of the audio player |
| layout                   | 'stacked' \| 'horizontal' \|<br>'stacked-reverse' \|<br>'horizontal-reverse' | 'stacked' | [Overall layout](https://lhz516.github.io/react-h5-audio-player/?path=/docs/layouts-advanced) of the audio player |
| customIcons              | [CustomIcons](https://github.com/lhz516/react-h5-audio-player/blob/fa1a61eb7f77146e1ce4547a14181279be68ecfd/src/index.tsx#L99) | {}      | [Custom icons](https://lhz516.github.io/react-h5-audio-player/?path=/docs/layouts--custom-icons) to replace the default ones |
| customMainContainerLeft  | Array<string \|<br>ReactElement> | [] | Custom layout of the left side of the audio player's container
| customMainContainerRight | Array<string \|<br>ReactElement> | [] | Custom layout of the left side of the audio player's container
| customProgressBarSectionContainer | Array<string \|<br>ReactElement> | [] | Custom layout of the progress bar's flex container
| customProgressBarSectionAbove | Array<string \|<br>ReactElement> | [CURRENT_TIME, <br>PROGRESS_DIV, <br>DURATION] | Custom layout for the space above the progress bar
| customProgressBarSection | Array<string \|<br>ReactElement> | [PROGRESS_BAR] | Custom layout for the progress bar |
| customControlsSection    | Array<string \|<br>ReactElement> | [ADDITIONAL_CONTROLS,<br>MAIN_CONTROLS,<br>VOLUME_CONTROLS] | Custom layout of controls section |
| customAdditionalControls | Array<string \|<br>ReactElement> | [LOOP] | Custom layout of additional controls |
| customVolumeControls     | Array<string \|<br>ReactElement> | [VOLUME] | Custom layout of volume controls |
| i18nAriaLabels           | [I18nAriaLabels](https://github.com/lhz516/react-h5-audio-player/blob/e67fe0cdd39d00490b7396ebdc46357815ecb227/src/index.tsx#L138)| [I18nAriaLabels](https://github.com/lhz516/react-h5-audio-player/blob/e67fe0cdd39d00490b7396ebdc46357815ecb227/src/index.tsx#L183) | A configuration object to overwrite the default `aria-label` on the action buttons |
| mse                      | Object           | null     | A configuration object so the player can play audio chunks, MSE streams and encrypted audio (See [section about Media Source Extensions](#media-source-extensions-and-encrypted-media-extensions) in this Readme) |
| mse.srcDuration          | number           | -        | The complete duration of the MSE audio chunks together (this is a key of the _mse_ prop) |
| mse.onSeek               | Function (Event) | -        | The callback to be used when seek happens (this is a key of the _mse_ prop) |
| mse.srcDuration          | number           | -        | The callback to be used when encrypted audio is detected and needs to be decrypted (this is a key of the _mse_ prop) |

See [original repo's demo](https://lhz516.github.io/react-h5-audio-player/) for more examples. All new custom containers follow the same logic.

### Event Props

Supported media events: `onPlay`, `onPause`, `onEnded`, `onSeeking`, `onSeeked`, `onAbort`, `onCanPlay`, `onCanPlayThrough`, `onEmptied`, `onError`, `onLoadStart`, `onLoadedMetaData`, `onLoadedData`, `onPlaying`, `onSuspend`, `onWaiting`, `onVolumeChange`

Docs: [Media Events | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events)

Note: `onTimeUpdate` is not supported. Please use `onListen` with `listenInterval` for better performance.

#### Other events

| Props                    | Type              | Default | Note |
| ------------------------ | ----------------- | ------- | ---- |
| onClickPrevious          | Function (Event)  | null    | Called when click Previous button |
| onClickNext              | Function (Event)  | null    | Called when click Next button |
| onListen                 | Function (Event)  | null    | Called every `listenInterval` milliseconds during playback |
| onPlayError              | Function (Error)  | null    | Called when there's error invoking `audio.play()`, it captures error that `onError` won't catch |
| onChangeCurrentTimeError | Function ()       | null    | Called when dragging progress bar or press rewind/forward while the audio hasn't loaded yet |

## UI Overwrites

Besides using props to change UI, React H5 Audio Player provides built-in class names and SASS/LESS variables for developers to overwrite.

### SASS variables

```scss
$rhap_theme-color: #868686 !default;   // Color of all buttons and volume/progress indicators
$rhap_background-color: #fff !default; // Color of the player background
$rhap_bar-color: #e4e4e4 !default;     // Color of volume and progress bar
$rhap_time-color: #333 !default;       // Font color of current time and duration
$rhap_font-family: inherit !default;   // Font family of current time and duration
```

For LESS variables, just replace `$` with `@`. This library supports both.

### Status class names

There are some status class names on the audio player's wrapper div. They can be used for overwriting styles.

| className                   | Description        | 
| --------------------------- | ------------------ | 
| rhap_loop--on               | Loop is on         | 
| rhap_loop--off              | Loop is off        |
| rhap_play-status--paused    | Paused status      |
| rhap_play-status--playing   | Playing status     |

For example:
```scss
.rhap_play-status--paused .rhap_progress-bar {
  // Overwrite the progress bar style while the audio is paused
}
```

## Advanced Usage

### Access to the audio element

You can get direct access to the underlying audio element. First get a ref to ReactAudioPlayer:

```jsx
this.player = createRef()

<ReactAudioPlayer ref={this.player} />
```

Then you can access the audio element like this:

`this.player.current.audio.current`

### Media Source Extensions and Encrypted Media Extensions

You can use [Media Source Extensions](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API) and [Encrypted Media Extensions](https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API) with this player. You need to provide the complete duration, and also a onSeek and onEncrypted callbacks. The logic for feeding the audio buffer and providing the decryption keys (if using encryption) must be set in the consumer side. The player does not provide that logic. Check the [StoryBook example](https://github.com/lhz516/react-h5-audio-player/blob/master/stories/mse-eme-player.tsx) to understand better how to use.

## Release Notes

https://github.com/lhz516/react-h5-audio-player/releases

## How to contribute

Issues and PR's are welcome.

## Credits

- Inspired by [React Audio Player](https://github.com/justinmc/react-audio-player).
- Icon wrapper [iconify](https://iconify.design/)
- Icons [Material Design Icons](https://github.com/Templarian/MaterialDesign)
