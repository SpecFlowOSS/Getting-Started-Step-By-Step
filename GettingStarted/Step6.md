Bind the first step
===============

⏲️ 10 minutes

In this step you'll bind your first step (automate your first scenario step with SpecFlow).

***If you skipped the previous page make sure you execute the tests with your preferred runner. The test explorer would look like below (see the duration in milliseconds), but it does not do much yet and shows the "Skipped" status.**  
![Add new SpecFlow project](../_static/step4/test_explorer_test_skippedv2.png)

**1-** Open the `Calculator.feature` file by double-clicking it in the Solution Explorer (SpecFlowCalculator.Specs ➡ Features ➡ Calculator.feature)
![Feautre File](../_static/step5/feature_file.png)

The purpose of this feature file is to document the expected behavior of your calculator in a way that it is both human-readable and suitable for test automation. SpecFlow uses the Gherkin language where you can phrase the scenarios using _Given/When/Then_ steps. Currently there is a single scenario (automatically added by the SpecFlow project template) that describes how adding two numbers should work with the calculator.

Here is a closer look at the Gherkin scenario used in this template:

``` Gherkin
Scenario: Add two numbers
    Given the first number is 50
    And the second number is 70
    When the two numbers are added
    Then the result should be 120
```

Based on the scenario text, Specflow generates an automated test that executes the scenario. However, it is **not yet defined** what the steps of the scenario should actually **"do"**.

**2-** Right-click the first _Given_ step "Given the first number is 50" and select either the "Go To Definition" or the "Go To Step Definition" command.  
![Go To Definition](../_static/step5/scenario_step_go_to_definitionv2.png)

Visual Studio locates the step definition (binding) that belongs to this step. In this example, it opens the `CalculatorStepDefinitions` class and jumps to the `GivenTheFirstNumberIs` method.  

![Given Step Binding](../_static/step5/given_step_bindingv2.png)

**The step definition is located based on the  `[Binding]` attribute on the class and the `[Given]` attribute on the method. The regular expression of the _Given_ attribute matches the text of the scenario step.*

**3-** Add the below field to the class to instantiate the calculator that we want to test (SUT).

``` c#
        private readonly Calculator _calculator = new Calculator();
```

**4-** Replace the implementation of the first step definition method with the below code which sets the first number of the calculator.

``` c#
        [Given("the first number is (.*)")]
        public void GivenTheFirstNumberIs(int number)
        {
            _calculator.FirstNumber = number;
        }
```

![Test Explorer](../_static/step5/firststep_code.png)

**5-** Execute the test in the Test Explorer and click "Open additional output for this result" from the right pane.  
![Test Explorer](../_static/step5/test_explorerv2.png)

In the detailed output you can see that the first step "Given the first number is 50" has been matched to the step definition method "CalculatorStepDefinitions.GivenTheFirstNumberIs" as expected, and it has been called with the argument 50. The done status means that the step executed successfully with no errors:

![Done Step Result](../_static/step5/done_step_result.png)

The next step in the scenario is pending, as we have not yet implemented it:

![Pending Step Result](../_static/step5/pending_step_result.png)

![Specflow logo](../_static/step1/specflow_logo.png) In the next step you will bind the rest of the scenario steps.
