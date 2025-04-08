---
title: "Coroutines in Javascript - Promises, Callbacks, and Async"
date: 2022-04-23
draft: true
---

Recently, I have been coding mostly in Javascript. I am starting to get comfortable with JS syntax, and it has begun to come to me naturally. Before Javascript, most of my coding was done with Python. As you may know, Python uses the 'asyncio' library for asynchronous functions (coroutines). This could be one example of how choosing an easier language as a beginner can actually set you back once you become a more experienced developer. From using Python, I was familiar with the async/await keywords, and I knew they were needed whenever I needed to execute a function that had to *wait* on a response. Granted, Python is great, and I could have probably researched more about Python coroutines to understand the core concept better. However, it wasn't until I began using coroutines in Javascript where I began to see what was really happening. Today, I will help you connect those dots and hopefully give you information to help your understanding of coroutines no matter which programming language you are learning.

## Javascript Coroutine Methods
If you are familiar with Javascript, then you must be familiar with the terms 'callback', 'promises', and 'async/await'. These are the three main methods of interacting with asynchronous functions. Understanding the differences (or should I say... similarities) between them will not only make you a better coder, but also seriously make reading other user's Javascript code much easier, as they are probably riddled with one or more of these coroutine methods (or maybe even a combination of all three). Before getting our hands dirty, the most crucial piece of information to remember here is that **all of these methods accomplish the same end result**.

### Callbacks
Callbacks are the simplest forms of asyncronous code in Javascript.
