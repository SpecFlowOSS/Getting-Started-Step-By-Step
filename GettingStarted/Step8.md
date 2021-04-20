Fix implementation
==================

⏲️ 3 minutes

In this step you'll fix the implementation error of the calculator in the previous page.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5l74wwL6dEc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**1-** Open `Calculator.cs` in the `SpecFlowCalculator` class library and replace the implementation of the `Add` method with the below code:

``` c#
    public int Add()
    {
        return FirstNumber + SecondNumber;
    }
```

![Test Explorer Failed Test](../_static/step8/fix_implementation.png)

**2-** Build the solution. The build should succeed.

**3-** Run the test.The test should now execute and succeed with the green tick marks indicating no errors:

![Test Explorer Failed Test](../_static/step8/test_explorer_green_testv2.png)

**4-** Click on the "Open additional output for this result" to see a more detailed log of the scenario:  
![Test Explorer Additional Output](../_static/step8/test_explorer_additional_outputv2.png)

You can see that each step executed successfully and the test is passed.

📄 In the next step you'll learn how to generate living documentation.
