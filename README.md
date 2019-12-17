## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/tanpattaya/github.io/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/tanpattaya/aditmadzs.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1
with:
  who-to-greet: 'Mona the Octocat'
# LINE Things Starter - LIFF App

This is the sample code of the LIFF App for LINE Things Starter.
The code contains a LIFF application that will work with the Starter firmwares.

## Setup

Ensure you have already created a Developer Trial account and generated a service UUID.
To configure the app, change the `USER_SERVICE_UUID` in `liff.js` to your generated service UUID.

## Publish LIFF App using GitHub Pages

The LIFF application included in this repository can also be hosted by using GitHub Pages. To host your LIFF app, perform the following:

1. Fork this repository on GitHub
2. From GitHub Pages settings, select the "master branch" as the "Source"
3. Set the URL of the published GitHub Pages page following with `liff-app/` as the LIFF endpoint URL.
(For Example: https://line.github.io/line-things-starter/liff-app/)

## Reference

For details on Bluetooth LE plugin API for LINE Things on LIFF, please refer to the following document (English to follow shortly):

https://developers.line.biz/ja/reference/line-things/
