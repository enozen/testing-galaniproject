# Galani Projects UI Testing Suite

This repository houses automated UI testing scripts for the Galani Projects website, leveraging Playwright for end-to-end testing. Designed to run within a Visual Studio Code environment, these tests provide thorough coverage of various website functionalities to ensure a seamless user experience.

## Overview

The suite focuses on validating the critical functionalities of the Galani Projects website, including user interactions with the contact form, navigation menus, customer testimonials, and more. Our goal is to maintain high quality and reliability of the web interface.

## Prerequisites

Before running these tests, make sure you have the following installed:
- Node.js
- Playwright
- Visual Studio Code

For Playwright installation, run:
```bash
npm install playwright
```
### Test Scripts
- **Contact Us Form:**  `testingContactUsForm.spec.ts`- Validates the functionality of the contact form, including input validation and submission.

- **Header Menu:** `testingHeaderMenu.spec.ts` - Tests the responsiveness and navigability of the main header menu.

- **Our Customer:** `testingOurCustomer.spec.ts` - Checks the display and functionality of the customer section.

- **Our Journey:** `testingOurJourney.spec.ts` - Verifies the content and interactive elements within the Our Journey section.

- **Our Expertise:** `testingOurExpertise.spec.ts` - Ensures accurate display of the services and expertise areas.

- **Our Team Section:** `testingOurTeamSection.spec.ts` - Assesses the team member listings and their details.

- **Privacy Link:** `testingPrivacyLink.spec.ts` - Confirms the Privacy Policy link works correctly.

- **Scroll Down Button:** `testingScrollDownButton.spec.ts` - Tests the functionality of the scroll down button in navigating the page.

- **The Data in The Contact Us Section:** `testingTheDataInTheContactUsSection.spec.ts` - Validates the data presented in the Contact Us section for accuracy and completeness.


### Running the Tests
To run the tests, navigate to your project directory in the terminal and execute:

```bash
npx playwright test
```
Ensure Visual Studio Code is configured with the appropriate environment for Node.js and Playwright development.

###  Contributing
Contributions to the testing suite are welcome. Please ensure to follow the existing test structure and naming conventions for any new tests.

### License
Specify your project's license here, if applicable.