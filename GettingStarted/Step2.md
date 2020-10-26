Create Calculator Project
=========================

⏲️ 10 minutes

In this step you'll create the application that will be tested, also called system under test (SUT).

Implement a simple calculator class library in C#.

Open up Visual Studio and create a new C# class library.

Select "Create a new project" from the Visual Studio startup dialog  
![Visual Studio Startup Dialog](../_static/step2/vs_startup_dialog.png)  

Search for "class library" and select "Class Library (.NET Core)" as the new project to create  
![Create Class Library](../_static/step2/create_class_lib.png)  

Specify the project name to "CalculatorLibrary" and choose a location. In our case it is `C:\work`.  
![Configure Class Library Project](../_static/step2/configure_project.png)  

After clicking "Create" Visual Studio creates a new project for you.  
![Class Library Created](../_static/step2/created_project.png)

Rename `Class1.cs` to `Calculator.cs` and overwrite the content with the following code.

``` csharp
using System;

namespace CalculatorLibrary
{
    public class Calculator
    {
        public int FirstNumber { get; set; }
        public int SecondNumber { get; set; }

        public int Add()
        {
            throw new NotImplementedException();
        }
    }
}

```
