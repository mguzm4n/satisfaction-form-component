# satisfaction-form-component

Build generic forms with questions such that its answers belongs to a Likert Scale.
Import SatisfactionForm to your script file and provide:
- A root element where a SatisfactionForm class will execute its functionality. It must be labeled with an id selector in your HTML, so it's unique in the DOM,
- A list of strings with your questions,
- The maximum number in your scale, i.e: you're scoring answers from 1 to 7, so pass a seven,

as class arguments in its constructor.

# is it responsive?

I used percentages and CSS variables setted dinamically in JS, so it will be responsive, with a max-width of 1000px. The answers to a question represented as radio buttons selectors are preferred to span in a single row, so the text will wrap and it could result in few words per row, so be careful.
