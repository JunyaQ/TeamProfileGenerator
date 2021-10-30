function writehtmlfile(teamdata) {
    console.log("writting!");
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./mystyle.css">
        <title>TEST DOCUMENT</title>
        <h1> My Team </h1>
        <br/>
        <!--the manager section-->
        <div id="manager" class="individual">
        </div>

        <!--the engineer section-->
        <div id="engineer" class="individual">
        </div>

        <!--the intern section-->
        <div id="intern" class="individual">
        </div>


    </head>
    <body>
        
    </body>

    <footer>
        <section class="footer-section">
            <p>
                &copy; Junya Q &#10084
            </p>
        </section>
        </footer>
    </html>
    
    
    `;}
    module.exports  = writehtmlfile;