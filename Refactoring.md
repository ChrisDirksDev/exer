# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

My  objective with this refactor was to reduce overall nesting of statements and make the function flow in a much more readable way. I accomplished with with two simple steps. I recognized that there were two very distinct paths that could be simplified, one where nothing is entered and one where something is entered. If nothing is entered our path could simply end very early and reduce overall nesting by adding an additional exit which I believe was a definite improvement. Therefore I first set the default partition key to our candidate in its initializer statement. This removed the need for the entire candidate initialization check. I also then inverted the event object check and set it to return there. The function now reads more cleanly and you can easily follow the statements/mutations affecting the candidate object. :triumph: