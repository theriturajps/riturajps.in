---
title: How to Parse and Display XML Data with JavaScript on Web Pages
published: 2024-09-11
description: "Learn how to parse XML data using JavaScript and display it on web pages. Perfect for beginners working with data-driven reports."
tags: [XML Data]
category: Guide
draft: false
---

For today's web developers, **handling and displaying the XML data is one of the most important aspects of web development**. XML is basically deemed as the eXtensible Markup Language and is commonly used for storing and transportation of messages and structured information which are often applied in the business fields and reports.

This article will take you **step by step on how to parse XML using Javascript and populating the XML data on your web page** with emphasis on data handling and creation of reports.

## Why XML Parsing Matters for Data-Driven Web Pages

Before we dive into the technical details, let's understand why XML parsing is crucial for modern web development:

- **Data Interchange:** XML is a universal format for exchanging data between different systems and platforms.
- **Structured Data:** XML provides a hierarchical structure that's ideal for representing complex data relationships.
- **Legacy Systems:** Many older systems still use XML for data storage and transfer.
- **Configuration Files:** XML is often used for configuration files in various applications.
- **Report Generation:** XML can store formatted report data that needs to be displayed on web pages.

## Setting Up Your Environment

To get started with XML parsing in JavaScript, you don't need any special libraries or frameworks. Modern browsers have built-in XML parsing capabilities. Here's what you'll need:

- A text editor (e.g., Visual Studio Code, Sublime Text)
- A modern web browser (e.g., Chrome, Firefox, Safari)
- Basic knowledge of HTML, CSS, and JavaScript

### Step 1: Creating a Sample XML Document

Let's start with a sample XML document containing sales report data:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sales_report>
  <quarter>
    <name>Q1 2024</name>
    <total_revenue>500000</total_revenue>
    <top_product>
      <name>Widget A</name>
      <units_sold>1000</units_sold>
    </top_product>
  </quarter>
  <quarter>
    <name>Q2 2024</name>
    <total_revenue>750000</total_revenue>
    <top_product>
      <name>Gadget B</name>
      <units_sold>1500</units_sold>
    </top_product>
  </quarter>
</sales_report>
```

Save this as `sales_report.xml` in your project folder.

### Step 2: Creating the HTML Structure

Now, let's create a basic HTML file to display our parsed XML data:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales Report Dashboard</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Sales Report Dashboard</h1>
    <div id="reportContainer"></div>

    <script src="script.js"></script>
</body>
</html>
```

Save this as `index.html` in your project folder.

### Step 3: Parsing XML with JavaScript

Now, let's create our `script.js` file to handle the XML parsing and display:

```javascript
// Function to fetch and parse XML
async function fetchXMLData() {
    try {
        const response = await fetch('sales_report.xml');
        const xmlString = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        return xmlDoc;
    } catch (error) {
        console.error('Error fetching or parsing XML:', error);
    }
}

// Function to extract data from XML and create HTML
function createReportHTML(xmlDoc) {
    const quarters = xmlDoc.getElementsByTagName('quarter');
    let html = '<table><tr><th>Quarter</th><th>Total Revenue</th><th>Top Product</th><th>Units Sold</th></tr>';

    for (let quarter of quarters) {
        const name = quarter.getElementsByTagName('name')[0].textContent;
        const revenue = quarter.getElementsByTagName('total_revenue')[0].textContent;
        const topProduct = quarter.getElementsByTagName('top_product')[0].getElementsByTagName('name')[0].textContent;
        const unitsSold = quarter.getElementsByTagName('top_product')[0].getElementsByTagName('units_sold')[0].textContent;

        html += `<tr>
            <td>${name}</td>
            <td>$${Number(revenue).toLocaleString()}</td>
            <td>${topProduct}</td>
            <td>${Number(unitsSold).toLocaleString()}</td>
        </tr>`;
    }

    html += '</table>';
    return html;
}

// Main function to load and display the report
async function loadSalesReport() {
    const xmlDoc = await fetchXMLData();
    if (xmlDoc) {
        const reportHTML = createReportHTML(xmlDoc);
        document.getElementById('reportContainer').innerHTML = reportHTML;
    }
}

// Load the report when the page is ready
document.addEventListener('DOMContentLoaded', loadSalesReport);
```

Save this as `script.js` in your project folder.

## Best Practices for XML Parsing in JavaScript

When working with XML data in your web applications, keep these best practices in mind:

- **Use Async/Await:** XML Parsing should be all done in the background to avoid it from being a blocker to the main thread.
- **Validate XML:** To further enhance the integrity of the data it is recommended to utilize an XML schema validation.
- **Security Considerations:** XML injection attacks should always be prevented by ensuring that XML retrieved from public sources is not directly parsed.
- **Performance Optimization:** When dealing with large documents in XML format the recommended approach to parsing is SAX - (Simple API for XML).
- **Error Handling:** A good practice is to add necessary checks that would allow the smooth handling of parse errors or network drops.

## Conclusion

When XML and JavaScript are used together for parsing and showing the XML based data on the web page, it is a great technique for reports generations as well as data intensive web pages. Now that you have followed this guide you have successfully acquired XML data, employed various native JavaScript tools to parse the acquired data and present it in a neat orderly fashion on a webpage.
