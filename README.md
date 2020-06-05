startpage
====

<p align="center">
    <img alt="example screenshot" src="/scrots/scrot1.png?raw=true" width="400px">
    <img alt="example screenshot" src="/scrots/scrot2.png?raw=true" width="400px"><br>
</p>

**Live Demo: [Try Me](https://sckitt.github.io/startpage/)**

This repository contains a custom homepage made using html, css and javascript. Feel free to download and modify. Comments and suggestions appreciated.

Features:
* Randomly selected cute Japanese girls
* Randomly selected backgrounds
* Categorized columns of links
* Parameter-based searchbar

## Installation

1. Download the [zip](https://github.com/maegitech/startpage/archive/master.zip)
of the latest version on GitHub.
2. Choose a [content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) such as [GitHub Pages](https://pages.github.com), [CodeSandbox](https://codesandbox.io), or [unpkg](https://unpkg.com) to host the startpage.
3. (optional) Change the homepage.
4. (optional) Install an extension that lets you change the newtab page.

## Usage

DuckDuckGo is the default search engine. Use parameters to change engines (e.g. `-a gtx` will search 'gtx' on Amazon.)

## Customizing
To change foreground sets, replace the name in both lines of [index.html](index.html#L10-L11). To change background sets, do the same but for [index.html](index.html#L13-L14).

To create create new sets, place images in a folder and run `python3 ./createSet.py`.
