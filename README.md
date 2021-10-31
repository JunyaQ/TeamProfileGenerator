# Bootcamp_challenge-10_TeamProfileGenerator

## How to run the application
WHEN run the test code<br/>
THEN use command: npm run test<br/>
WHEN run the application<br/>
THEN use command: node index.js<br/>

## Information about the application:
This is a command line application that will generate a html page based on input<br/>
WHEN start the application<br/>
THEN questions will show on commandline<br/>
FIRSR will ask for manager information, including: name, ID, email and office number<br/>
THEN the application will check following:  <br/>
- make sure there is a name input(not blank)
- make sure the ID is a number
- make sure email address is an email format (have @)
- make sure office number is a number

AFTER finish manager input<br/>
THEN will ask to choose between engineer or Intern or exit if finish all the members input<br/>
WHEN choose engineer<br/>
THEN the application will ask for engineer information, including: name, id, email and github name<br/>
WHEN doing the command line input<br/>
THEN the apllication will check following: <>br/
- make sure there is a name input (not blank)
- make sure the ID is a number
- make sure the emaill address is an email format (have @)
- make sure there is a github name input (not blank)

WHEN choose intern<br/>
THEN the application will ask for intern information, including: name, ID, email, school name<br/>
WHEN doing the command line input<br/>
THEN the application will check the following: <br/>
- make sure there is a name input(not blank)
- make sure the ID is a number
- make srue the email address is an email format (have @)
- make sure there is a school name input (not blank)

WHEN choose exit<br/>
THEN the application will start to generate test_index.html<br/>

## Test
The gif showing the result of the test and how to run the test<br/>
![RUN TEST GIF](img/runTestgif.gif)<br/>

## How to use the command line application 
The gif showing how to run the application and a sample of what type of input you should put for each question<br/>
![RUN APPLICATION GIF](img/runProgramgif.gif)<br/>
AFTER answer all the command line question, the html form is generated
![IMG OF HTML RESULT](img/webpage.png)<br/>
