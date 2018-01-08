# drawLineSvg-Angular2Directive
an Angular directive which allow you to animate path of svg image

You have just to import it into your project and define it into the app.module, after that let's put the directive into your SVG element.


You can also define the duration and delay of the paths's drawing as well as the duration and delay of the filling of the shape. Here Below you con find the properties.


fillTime (default 1s);
fillDelay =  (default 2s);
drawTime =  (default 1s);
drawDelay = (default 0s);



Exemple

<svg xmlns="http://www.w3.org/2000/svg" appDrawAnimation [drawDelay]="1" [drawTime]="2" [fillTime]="1" [fillDelay]="3" ...


Work in progress!! :)
