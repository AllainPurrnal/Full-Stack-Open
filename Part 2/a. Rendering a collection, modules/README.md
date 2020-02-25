# a. Rendering a collection, modules

## console.log
"What's the difference between an experienced JavaCsript programmer and a rookie? The experienced one uses console.log 10-100 times more."

- When something does not, don't just guess what's wrong. Instead, log or use some other way of debugging.

- When you use the command `console.log` for debugging, don't concatenate things 'the Java way' with a plus, instead use:
  - `console.log('props value is', props)`

- On the contrary, when you pass objects as ditinct arguments separated by commas to `console.log`, the content of the object is printed to the developer console as strings that are insightful.

## Protip: Visual Studio Code snippets
- With Visual Studio Code, it's easy to create 'snippets', i.e. shortcuts for quickly genereating commonly re-used portions of code, much like how 'sout' works in Netbeans. Instructions for creating snippets can be found [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets)

- Useful ready-made snippets can also be found as VS Code plugins

## JavaScript Arrays
- From here on out, we will be using the functional programming methods of the JavaScript array, such as `find`, `filter`, and `map` - all of the time. They operate on the same general principles as streams do in Java 8.

- [Suggested series on Functional Programming](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

## Rendering collections