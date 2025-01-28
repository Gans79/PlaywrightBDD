1) Install node - https://nodejs.org/en/download/package-manager/current
2) Install VSCode - https://code.visualstudio.com/download
3) Create a project directory
4) Install playwright - https://playwright.dev/docs/intro
    - npm init playwright@latest
5) Install TypeScript Support via:
    - npm install -D typescript

6) Install the following extensions from marketplace
    - Playwright Test for VSCode - allows debugging with IDE and Playwright
    - Cucumber (Gherkin) Full Support - Add Cucumber and Gherkin Support

7) Clone Repository in gitlab evolve/qa-evolve-training-sandbox-playwright accessing via Personal Access Token     

8) To link feature file to steps via VSCode - 
    Create a.vscode directory and settings.json file
    add the following json
    {
    "cucumberautocomplete.steps": ["steps/*.ts"  ],
    "cucumberautocomplete.strictGherkinCompletion": false,
    "cucumberautocomplete.strictGherkinValidation": false,
    "cucumberautocomplete.smartSnippets": true,
    "cucumberautocomplete.onTypeFormat": true,
    "editor.quickSuggestions": {
      "comments": false,
      "strings": true,
      "other": true
    }
  }    

9) Install playwright-bdd - https://vitalets.github.io/playwright-bdd/#/
    npm i -D playwright-bdd@latest
    
10) To configure defineBDDConfig 
    - playwright.config.ts - add the following
    import { defineBddConfig } from 'playwright-bdd';

    const testDir = defineBddConfig({
    features: 'features/*.feature',
    steps: 'steps/*.ts',
    tags: '@demo1'
    });

    export default defineConfig({
    testDir,
  )]

11) To run tests of specific tags
    i) Generate the tests via command below this will generate executable test code in .features-gen directory
        npx bddgen --tags '@demo'
    ii) Run the test via  
        npx playwright test
    example via command line - powershell: 
        npx bddgen --tags '@demo' ; npx playwright test
    example via command line - gitbash: 
        npx bddgen --tags '@demo' && npx playwright test
    iii) run with headed (visually see the browser) or debug (debug mode)
    example via command line - powershell: 
        npx bddgen --tags '@demo' ; npx playwright test --headed
        npx bddgen --tags '@demo' ; npx playwright test --debug

12) To run on different browsers - Edit the following section of playwright.config.ts
 projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
 ]

 13) Generate Test Report with Video (Per Run) and Screenshot (On Failure)
 video & screenshots configured in playwright.config.ts
     //Video Settings
    video: 'on',    
    //screenshot on failure
    screenshot: 'only-on-failure'

    Generate report via command: npx playwright show-report
