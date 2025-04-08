import { SAMPLE_MP3_URL } from "./utils";
import VolumePercentage from "./volume-percentage.tsx";
import AudioPlayer, { RHAP_UI } from "../src/index.tsx";
import ChangeLayout from "./change-layout.tsx";
import React from "react";

export default {
  title: "Layouts - Advanced",
  component: AudioPlayer,
};

export const Stacked = {
  render: () => <AudioPlayer src={SAMPLE_MP3_URL} />,
  name: "Stacked",
};

export const StackedReverse = {
  render: () => <AudioPlayer src={SAMPLE_MP3_URL} layout="stacked-reverse" />,
  name: "Stacked Reverse",
};

export const Horizontal = {
  render: () => <AudioPlayer src={SAMPLE_MP3_URL} layout="horizontal" />,
  name: "Horizontal",
};

export const HorizontalReverse = {
  render: () => (
    <AudioPlayer src={SAMPLE_MP3_URL} layout="horizontal-reverse" />
  ),
  name: "Horizontal Reverse",
};

export const CustomProgressBarSection = {
  render: () => (
    <AudioPlayer
      src={SAMPLE_MP3_URL}
      customProgressBarSection={[
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.CURRENT_TIME,
        <div>/</div>,
        RHAP_UI.DURATION,
      ]}
    />
  ),

  name: "Custom progress bar section",
};

export const CustomProgressBarSectionContainer = {
  render: () => (
    <AudioPlayer
      src={SAMPLE_MP3_URL}
      customProgressBarSectionContainer={[
        <img src="https://images.gamebanana.com/img/ss/mods/62fbda8a4e77e.jpg" alt="Image" style={{ marginRight: '10px', width: '50px', height: 'auto' }} />,
        <div style={{ width: "12%" }}>
          <div>Song Name</div>
          <div>Artist</div>
        </div>,
      ]}
    />
  ),

  name: "Custom progress bar container section",
};

export const CustomMainContainers = {
  render: () => (
    <AudioPlayer
      src={SAMPLE_MP3_URL}
      customMainContainerLeft={[
        <img src="https://images.gamebanana.com/img/ss/mods/62fbda8a4e77e.jpg" alt="Image" style={{ marginRight: '10px', width: '50px', height: 'auto' }} />,
        <div style={{ width: "12%" }}>
          <div>Left Side</div>
        </div>,
      ]}
      customMainContainerRight={[
        <img src="https://images.gamebanana.com/img/ss/mods/62fbda8a4e77e.jpg" alt="Image" style={{ marginRight: '10px', width: '50px', height: 'auto' }} />,
        <div style={{ width: "12%" }}>
          <div>Right Side</div>
        </div>,
      ]}
    />
  ),

  name: "Custom mains containers",
};

export const CustomControlsSection = {
  render: () => (
    <AudioPlayer
      src={SAMPLE_MP3_URL}
      customControlsSection={[
        <div>This is an additional module in controls section    </div>,
        RHAP_UI.ADDITIONAL_CONTROLS,
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.VOLUME_CONTROLS,
      ]}
    />
  ),

  name: "Custom controls section",
};

export const CustomAdditionalControls = {
  render: () => (
    <AudioPlayer
      src={SAMPLE_MP3_URL}
      customAdditionalControls={[
        RHAP_UI.LOOP,
        <button>button 2 </button>,
        <button>button 3 </button>,
        <button>button 4 </button>,
      ]}
    />
  ),

  name: "Custom additional controls",
};

export const CustomVolumeControls = {
  render: () => <VolumePercentage />,
  name: "Custom volume controls",
};

export const MoveVolumeControlToProgressBarSection = {
  render: () => (
    <AudioPlayer
      src={SAMPLE_MP3_URL}
      customProgressBarSection={[
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.VOLUME,
      ]}
      customVolumeControls={[]}
    />
  ),

  name: "Move Volume control to Progress bar section",
};

export const UseCurrentLeftTime = {
  render: () => (
    <AudioPlayer
      src={SAMPLE_MP3_URL}
      customProgressBarSectionAbove={[
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_DIV,
        RHAP_UI.CURRENT_LEFT_TIME,
      ]}
    />
  ),

  name: "Use current left time",
};

export const ChangeLayoutStory = {
  render: () => <ChangeLayout />,
  name: "Change Layout",
};
