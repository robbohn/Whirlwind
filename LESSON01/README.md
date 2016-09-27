# LESSON 1: The Initial Version

> Where we create our first webpage

## HTML
> HyperText Markup language - defines content and structure of web pages  
> [more info](https://en.wikipedia.org/wiki/HTML)

1. create index.html
```HTML
<html>
  <head>
    <title>The Title</title>
  </head>
  <body>
    <h1>Heading 1</h1>
    <p>Paragraph</p>
    Plain Text<br/>
  </body>
</html>
```    
        - `CTL+SHIFT+V` switches between editing and previewing    
        - or use `Ctrl+K V` to show LIVE preview in a side window
2. Discuss HTML5 ([info](https://en.wikipedia.org/wiki/HTML5))
3. improve by adding doctype, lang, meta
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>The Title</title>
    <meta name="description" content="The Description">
    <meta name="author" content="Your Name">
</head>
<body>
    <h1>Heading 1</h1>
    <p>Paragraph</p>
    Plain Text<br/>
</body>
</html>
```   
4. Pretty-format the html via `Shift+Alt+F` 
5. Preview via `CTL+SHIFT+V`


## CSS
> Cascading Style Sheet - defines the appearance of HTML when displayed in a web page  
> [more info](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

1. modify INDEX.HTML to have embedded css
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>The Title</title>
    <meta name="description" content="The Description">
    <meta name="author" content="Your Name">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        h1 { 
            color:gray;
        }
        p {
            font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
            font-size: 20px; 
        }
        .AllDivsOfThisClass {
            font-style: italic;
        }
        #ReplaceThis {
            background-color: red;
        }
    </style>
</head>
<body>
    <h1>Heading 1</h1>
    <p>Paragraph</p>
    Plain Text<br/>
</body>
</html>
```   

2. Discuss scenarios
    - Tags _such as h2 and a_ 
    - IDs via #
    - Classes via .
    - pseudoclasses _such as a:hover or #id:visited_
3. Discuss CSS3 ([info](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3))
4. Let's create a separate file for CSS
    - copy the text between `<STYLE>` and `</STYLE>`  
    - create main.css file and copy that text into it
```CSS
body
{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 { 
    color:gray;
}

p {
    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
    font-size: 20px; 
}

.AllDivsOfThisClass {
    font-style: italic;
}

#ReplaceThis {
    background-color: red;
}
```     
    - change the HTML file's style code in `<head>` to be:   
```html
    <link rel="stylesheet" href="./main.css">
```

    - `Shift+Alt+F` does not seem to format CSS file?
4. Preview via `CTL+SHIFT+V`


