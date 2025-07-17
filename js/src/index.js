import {CloudBrowse} from 'sanjog-browseui-test';
import { createRoot } from 'react-dom/client';
import React from 'react';
import logo from './logo.svg';
import '../../css/App.css';

function renderBrowseUI(element) {
const root = createRoot(element);
   const config = {
    cloudWatchUrlBase: "https://api.cors.lol/?url=https://data.ghg.center",
    sourceIMGUrl: "https://api.cors.lol/?url=https://data.ghg.center",
    version: "v3.3.3",
    excluded_prefixes: ["browseui"]
  }

  root.render(
    <div className="App">
      <CloudBrowse config={config}/>
    </div>
  );
}

(function (Drupal, once) {
  if (!Drupal || !once) {
    console.error("Drupal or 'once' not available");
    return;
  }
  Drupal.behaviors.renderBrowseUI = {
    attach: function (context, settings) {
      const placeholders = once('browseui-interface', '.browseui-interface', context);
      placeholders.forEach((element) => {
        renderBrowseUI(element);
      });
    }
  };
})(Drupal, window.once);
