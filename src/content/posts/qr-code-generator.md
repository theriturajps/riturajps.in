---
title: "Create a QR Code Generator using HTML, CSS and Javascript"
published: 2024-09-06
description: "Make QR codes with JavaScript - it's super easy! Cool trick for your website. Handy for work or just messing around. Check it out!"
tags: [HTML,CSS,Javascript]
category: Tutorial
draft: false
---

QR codes have become one of the components of the modern world technology that gives information on the first scan of a device. Perhaps, you are a developer who needs to integrate multiple forms of qr codes into its products or a learner, this guide will provide an example of how to generate qr codes using only javascript.

## What is QR Code?

QR codes or Quick Response codes are two dimensional which includes text, URLs and contact information among others. These come in useful when it comes to advertising and transactions and other things such as identification and anything else.

## Project Structure :-

Our first step involves formulating the structure of our project that should look like this.

```
QR/
├── index.html
└── assets/
    ├── css
    |    └── styles.css
    └── js
        ├── script.js
        └── qrcode.min.js
```

### Step 1: Create the HTML File

The HTML file will consist of two spaces; one space for the input field where you will input the text you desire to be turned to bar code and another space for the actual bar code in form of canvas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="container">
        <h1>QR Code Generator</h1>
        <form id="qr-form">
            <input type="text" id="qr-input" placeholder="Enter text to generate QR Code" required>
            <button type="submit">Generate QR Code</button>
        </form>
        <div id="qr-result">
            <div id="qr-canvas"></div>
        </div>
    </div>
    <script src="assets/js/qrcode.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>
</html>
```

### Step 2: Styling with CSS 

However, as a measure towards making our application look better, we will incorporate simple styles in it.

```css
body{font-family:Arial, sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background-color:#f0f0f0}
.container{text-align:center;background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}
#qr-form{margin-bottom:20px}#qr-input{padding:10px;width:calc(100% - 24px);margin-bottom:10px}
button{padding:10px 20px;border:none;background-color:#007bff;color:white;cursor:pointer;border-radius:4px}
button:hover{background-color:#0056b3}
#qr-result{margin-top:20px}
div#qr-canvas{display: inline-block;}
```

### Step 3: Add JavaScript for Functionality

Some of the general functions that shall be built-in at the script of the QR code generator are as follows. js file. For creating the QR code that will encode the input text we will employ the qrcodejs library.

First, download the `qrcode.min.js` It can be downloaded manually using the [qrcodejs](https://github.com/davidshimjs/qrcodejs) repository at GitHub.

Or, you can use below Code and paste it into `index.html` file above `Script` tag.

```html
<script src="https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs@master/qrcode.min.js"/>
```

Then, copy the following JavaScript code to `script.js`

```javascript
document.getElementById('qr-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const input = document.getElementById('qr-input').value;
    const qrCanvas = document.getElementById('qr-canvas');

    // Clear any previous QR Code
    qrCanvas.innerHTML = '';

    // Generate new QR Code
    if (input) {
        new QRCode(qrCanvas, {
            text: input,
            width: 256,
            height: 256
        });
    }
});
```

### Step 4: Testing of the Application

Open the `index.html` file in your browser or an HTML Editor is a program used for editing the files. Look at the figure below which shows that you should be able to type the text which will be converted into a QR code.

The QR code will appear right below the input area once all the fields in form are completed and submitted.

## Conclusion

Greetings mate I notice you put a lot of effort in that QR code thing. Smart thinking how you came up with that with Javascript. Yeah, it is quite funny how in the recent years it became very simple to just place QR codes on the web sites. Could be handy for like everything right, like for work and business and shopping, you name it. Whether you're just micking or actually producing something for the office or for your cubicle. Anyway, it is a good skill - who knows, maybe one day it will be useful to rapidly generate a QR code.
