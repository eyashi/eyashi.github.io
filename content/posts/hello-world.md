---
title: "Hello World: A Tour of This Blog"
date: 2026-03-13T12:00:00-07:00
description: "A sample post showcasing code highlighting, LaTeX math, images, and more."
tags: ["meta", "demo"]
categories: ["general"]
math: true
cover:
    image: ""
    alt: ""
    caption: ""
draft: false
---

Welcome to my new blog! This is a sample post that demonstrates the rich content features available for writing here. Every post is authored in **Markdown** — a lightweight format that makes writing feel natural while supporting powerful formatting.

## Code Blocks

Code blocks come with syntax highlighting and a copy button. Here's a Python snippet:

```python
import numpy as np

def fibonacci(n: int) -> list[int]:
    """Generate the first n Fibonacci numbers."""
    seq = [0, 1]
    for _ in range(2, n):
        seq.append(seq[-1] + seq[-2])
    return seq[:n]

print(fibonacci(10))
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

And some JavaScript, since that's what powers the interactive logo on this site:

```javascript
const canvas = document.getElementById('logo');
const ctx = canvas.getContext('2d');

function draw(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ... animation logic
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
```

## Math with LaTeX

You can write inline math like $E = mc^2$ or the quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

Display equations get their own block:

$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
$$

Here's the Euler identity, one of the most beautiful equations in mathematics:

$$
e^{i\pi} + 1 = 0
$$

And a summation:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## Embedded Media

You can embed images using standard Markdown:

![A placeholder image](https://picsum.photos/800/400)

YouTube videos can be embedded using Hugo's built-in shortcode:

{{< youtube dQw4w9WgXcQ >}}

## Rich Text Formatting

Markdown supports all the basics:

- **Bold text** for emphasis
- *Italic text* for nuance
- ~~Strikethrough~~ for corrections
- `inline code` for technical terms
- [Links](https://github.com/eyashi) to other pages

> Blockquotes are great for calling out important ideas or quoting sources.

### Tables

| Tool | Language | Use Case |
|------|----------|----------|
| Hugo | Go | Static site generation |
| KaTeX | JavaScript | Math rendering |
| Paper.js | JavaScript | Vector graphics |

## What's Next

This blog will be a place for me to write about the things I'm learning and building — from IoT projects and 3D printing to software engineering and whatever else catches my interest.

Stay tuned!
