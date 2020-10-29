Fix implementation
==================

⏲️ 3 minutes

In this step you'll fix the implementation of the calculator to turn the scenario green.

Open `Calculator.cs` in the `SpecFlowCalculator` class library and replace the implementation of the `Add` method.

``` c#
    public int Add()
    {
        return FirstNumber + SecondNumber;
    }
```

Build the solution. The build should succeed.

Run the test.

The test should execute and succeed.  
![Test Explorer Failed Test](../_static/step7/test_explorer_green_test.png)

Click on the "Open additional output for this result" to see a more detailed log of the scenario.  
![Test Explorer Additional Output](../_static/step7/test_explorer_additional_output.png)

You can see that the each steps executed successfully and hence the test is green.

In the next step it is your turn to add a new feature to the calculator.
