# NextJS 13-beta
This is a summary of some of the most relevant changes in the different sections of the framework

For more details please refer to the documentation: https://beta.nextjs.org/docs/getting-started

## Routing in app directory
The app directory only render as pages the files named as ```pages.js``` so you can use the app folder not only for pages, you can also add components, stylesheets, test, etc.

Each folder represent a segment of the path, last folder should contain the page file (leaf segment).

![image](https://assets.vercel.com/image/upload/f_auto,q_100,w_1600/v1666568300/nextjs-docs/darkmode/route-segments-to-path-segments.png)


##### https://beta.nextjs.org/docs/routing/fundamentals

---

## Special Files

![image](https://assets.vercel.com/image/upload/f_auto,q_100,w_1600/v1666568300/nextjs-docs/darkmode/special-files.png)

* page.js: The page view component, also used for set the path as public.

* layout.js: UI shared across multiple pages. A layout accepts another layout or a page as its child. You can nest layouts to create nested routes.

* loading.js (optional):  used to create loading UI for a specific part of an app.

* error.js (optional): used to isolate errors to specific parts of an app.

* template.js (optional): similar to layouts, but on navigation, a new instance of the component is mounted and the state is not shared.

* head.js (optional): used to define the contents of the <head> tag for a given route.

* not-found.js (optional): used to render UI when the notFound function in thrown within a route segment.

## Client and Server components

Normally if the component requires functionality found in the browser (such as ```useEffect```, or ```useState```) you should use a client component with the ```"use client"``` directive, otherwise a server component.

## Image
Back to classic, if you use local images must import it whit the ```import``` keyword (```await import``` or ```require``` not supported).
If you are using a remote image you should continue using width and height properties.
* Local: 
```
import imageSample from 'public/sample.jpeg';

<Image src={imageSample} alt="Sample" />
```

* Remote: 
```
<Image src="https://files.io/sample" alt="Sample" width="320" height="480" />
```

## Fonts
You can import local or remote fonts with or without variants (for example Inter font only exists in 400, it is a font without other variants, on the contrary Poppins has some variants in weight and even styles like italic.
In any case, if the font has more than one weight variant you must specify which one you want, the styles are optional by normal default

```
import { Poppins } from '@next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

<html lang="en" className={poppins.className}>
```

