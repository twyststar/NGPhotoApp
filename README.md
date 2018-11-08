# PhotoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Challenge

* `Using web technologies of your choosing, create an interactive photo gallery using images pulled from Lorem Picsum's public API`
* `Make an API call to Lorem Picsum's list endpoint to get an array of photo objects: https://picsum.photos/list`
* `Filter the response to include only photos by author 'Alejandro Escamilla'`
* `You may load and use any assets you like, except a pre-built slideshow component or library`
* `At a minimum, users should be able to click to enlarge images in a modal view and navigate forward / backward between images`
* `Feel free to add additional features, functionality, and modularity where you see fit`

## Notes

* If we were assuming application growth, for example showing more that one author's work, I would pull the modal out into it's own component. With only one author it made sense to keep it in the photo-gallery component.
* I elected to use a function instead of a pipe to filter images by author as we were focused on only one. If I were to expand this application, I would use a pipe to filter by various authors. I would also pull specifics (like the author's name) out of the component and make it a variable based on user selection instead.
* Styles and element use were designed with a11y in mind - everything is contrast compliant; html is semantic; content is simple; interactive elements are focusable. Alt text for the images was not provided by the API - instead it is used to describe the purpose (enlarge image) of the image button.
* The API occasionally throws 533 errors and will not load some photos. A couple of refreshes will usually fix it.

## Instructions

Run `ng serve --aot` for a bit faster load time on the photo gallery.  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

*By Starlynne Start - 11.08.18*
