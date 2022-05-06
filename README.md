# satisfaction-form-component

Build generic forms with questions such that its answers belongs to a Likert Scale.
Import SatisfactionForm to your script file and provide:
- A root element where a SatisfactionForm class will execute its functionality. It must be labeled with an id selector in your HTML, so it's unique in the DOM,
- A list of strings with your questions,
- The maximum number in your scale, i.e: you're scoring answers from 1 to 7, so pass a seven,
as class arguments in its constructor.
