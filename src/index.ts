import { Canvas, Component } from "./Widget";


const canvas = new Canvas(document.body);
console.log(canvas);

const firstComponent = new Component();
console.log(firstComponent);
console.log(firstComponent.shape);
console.log(firstComponent.shape.attributes);

firstComponent.height = 4;
firstComponent.width = 4;
firstComponent.locationLeft = 3;
firstComponent.shape.backgroundColor = 'green';
firstComponent.shape.borderStyle = 'dashed';
firstComponent.shape.borderWidth = '5px';

canvas.addComponent(firstComponent);

const secondComponent = new Component();
secondComponent.locationLeft = 4;
secondComponent.locationTop = 2;
secondComponent.shape.zIndex = 5;

canvas.addComponent(secondComponent);