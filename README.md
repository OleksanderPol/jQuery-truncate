##jQuery-truncate-text

The plugin is used to __truncate__ text. It also adds hellip to the end of string. Click on hellip (...) allows you to see the whole text.

##Code Example

To truncate a text inside the element use next method:
```javascript
$('p').trunc(7);
```

The paragraph before using method:
```HTML
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad eveniet, harum non. Quaerat voluptatem 

totam explicabo repellat cumque rerum nesciunt, quia in, qui nostrum, recusandae eligendi sequi. Nihil, 

quas.</p>
``` 

The paragraph after using method:
```HTML
<p>Lorem ...</p>
```
*The length of hellip and white spases are also taken into account.*

It is possible to see the whole text after clicking on __hellip (...)__. Exampl:

[Example](https://jsfiddle.net/OleksandrPol/du6h8uxf/)

##Argument

The argument must be positive integer number and greater than zero.
*One element is mandatory (used to show the hellip)*

