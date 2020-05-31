# [Password Generator](https://thadkingcole.github.io/Password-Generator)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/744b35c392334abe98a8f66e7d649f3c)](https://www.codacy.com/manual/thadkingcole/Password-Generator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=thadkingcole/Password-Generator&amp;utm_campaign=Badge_Grade)

A random password generator - made with javascript

[![screenshot](./Assets/Screenshots/01_mainPage.png)](https://thadkingcole.github.io/Password-Generator/)

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)

## Installation

No installation necessary! Try it out yourself by [clicking here](https://thadkingcole.github.io/Password-Generator/).

## Usage

1. Navigate to <https://thadkingcole.github.io/Password-Generator>
2. Click the red "Generate Password" button towards the bottom of the page.

![Generate Password Button](./Assets/Screenshots/02_generatePasswordBtn.png)

3. Follow the prompts
    1. Enter your desired password length (must be a number between 8 and 128)

    ![Password Length Prompt](./Assets/Screenshots/03_passwordLengthPrompt.png)

    2. Click **OK** for each character type desired, or **cancel** to exclude that character type. Available character types include lowercase and uppercase english letters, numbers 0-9, and all [UTF-8 basic latin](https://www.w3schools.com/charsets/ref_utf_basic_latin.asp) special characters except SPACE. A list of each character type you have chosen to include will be listed in each prompt.

    ![lowercase prompt](./Assets/Screenshots/04_lowercase.png)
    ![uppercase prompt](./Assets/Screenshots/05_uppercase.png)
    ![numeric prompt](./Assets/Screenshots/06_numeric.png)
    ![special prompt](./Assets/Screenshots/07_special.png)

    >Note: You must click **OK** for at least one (1) character type.

    ![pick at least one character type](./Assets/Screenshots/08_pick1.png)

4. Your generated password will be displayed in the middle of the dotted box.

![generated password](./Assets/Screenshots/09_passwordDisplay.png)

5. You can generate as many passwords as desired by clicking the red "Generate Password" and following the prompts. Each new generated password is displayed in the same location as the last generated password.

    >Note: This app does NOT save any generated passwords, so once it is no longer displayed, it is gone forever. I recommend you either copy/paste or write down any generated password you want to use and keep it in a location others cannot find and/or access.

## Licence

[GPL 3.0](LICENSE)

[back to top](#Password-Generator)