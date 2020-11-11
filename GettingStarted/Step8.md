Fix implementation
==================

⏲️ 3 minutes

In this step you'll fix the implementation error of the calculator in the previous page.

**1-** Open `Calculator.cs` in the `SpecFlowCalculator` class library and replace the implementation of the `Add` method with the below code:

``` c#
    public int Add()
    {
        return FirstNumber + SecondNumber;
    }
```

![Test Explorer Failed Test](../_static/step7/fix_implementation.png)

**2-** Build the solution. The build should succeed.

**3-** Run the test.The test should now execute and succeed with the green tick marks indicating no errors:

![Test Explorer Failed Test](../_static/step7/test_explorer_green_testv2.png)

**4-** Click on the "Open additional output for this result" to see a more detailed log of the scenario:  
![Test Explorer Additional Output](../_static/step7/test_explorer_additional_outputv2.png)

You can see that the each step executed successfully and the test is passed.

![Specflow logo](../_static/step1/specflow_logo.png) In the next step you'll learn how to generate a living documentation.
