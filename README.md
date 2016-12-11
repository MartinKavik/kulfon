# [Kulfon](https://kulfon.net)

[![npm](https://img.shields.io/npm/v/kulfon.svg)](https://www.npmjs.com/package/kulfon)
[![npm](https://img.shields.io/npm/dm/kulfon.svg)](https://www.npmjs.com/package/kulfon)

**Kulfon** is a *one command* static site generator written entirely in
JavaScript. It's bloody fast, modern and simple.

[![Kulfon: a 100% JavaScript static site generator](https://raw.githubusercontent.com/zaiste/kulfon/master/kulfon-static-site-logo.jpg)](https://kulfon.net)

[Website](https://kulfon.net) |
[Documentation](https://kulfon.net/overview/introduction/) |
[Installation Guide](https://kulfon.net/overview/installing/) |
[Contribution Guide](CONTRIBUTING.md) |
[Twitter](http://twitter.com/kufonapp)

> \- Kulfon, Kulfon, co z Ciebie wyrośnie ?! martwię się już od tygodnia!
>
> \- Przestań!

While you're hesitating, listen to this wonderful [Kulfon song][5]!

## Why Kulfon?

There is a ton of static site generators out there. Here are few points to
convince you to try **Kulfon**

* *one command* tool, similar to [Hugo][3], but written in [JavaScript][6], so it's
easier to integrate additional JavaScript libraries or stylesheets
* solid foundation with carefully selected tools to produce smaller websites faster (*[The Average Webpage Is Now the Size of the Original Doom][8]*)
* dependencies managed with [Yarn][4]
* [Rollup][7] for bundling javascripts
* [Sass][2] for stylesheets
* [Nunjucks][1] for views (a simple, designer friendly HTML-based syntax)
* written in ES6/ES2015

## Installation

    yarn global add kulfon

or

    npm install -g kulfon

## Getting started

Once **Kulfon** is installed, you will have access to the `kulfon` command.
First, let's create a new project:

    kulfon init <my-project-name>

It creates the following directory structure (`<my-project-name>` is optional,
if not provided, the current directory is used):

```
├── public
└── website
    ├── config.yml
    ├── images
    │   └── logo.svg
    ├── javascripts
    │   └── main.js
    ├── stylesheets
    │   └── styles.sass
    └── views
        ├── index.html
        ├── partials
        └── layouts
            └── base.html
```

## Roadmap

Kulfon keeps track of the upcoming fixes and features on GitHub Projects: [Kulfon Roadmap](https://github.com/zaiste/kulfon/projects/1)

- [ ] fingerprinting assets in production
- [ ] support for source maps
- [ ] out-of-the-box integration of modules from `npm` repository
- [ ] support for blogging
- [ ] a website with comprehensive documentation

## Bug reports

We use *Github Issues* for managing bug reports and feature requests. If you run
into problems, please search the *issues* or submit a new one here:
https://github.com/zaiste/kulfon/issues

Detailed bug reports are always great; it's event better if you are able to
include test cases.

## License

Copyright (c) 2016-present Zaiste. MIT Licensed, see LICENSE for details.

[1]: https://mozilla.github.io/nunjucks/
[2]: http://sass-lang.com/
[3]: https://gohugo.io/
[4]: https://yarnpkg.com/
[5]: https://www.youtube.com/watch?v=YnsfCcxMydU
[6]: https://en.wikipedia.org/wiki/JavaScript
[7]: http://rollupjs.org/
[8]: https://www.wired.com/2016/04/average-webpage-now-size-original-doom/
