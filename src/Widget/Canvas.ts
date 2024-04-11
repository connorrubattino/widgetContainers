import Component from './Component';

export default class Canvas{
    constructor(private parent:HTMLElement, private _components: Component[] = []){
        this.parent.innerHTML = '';
        this.parent.id = 'canvas';
        const newStyle: Partial<CSSStyleDeclaration> = {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'repeat(12, 1fr)',
            height: '100vh',
            columnGap: '5px',
            rowGap: '5px',
            aspectRatio: '1 / 1'
        }
        Object.assign(this.parent.style, newStyle);
    }

    public get components(): Component[] {
        return this._components
    }

    public addComponent(component:Component):void{
        // Add the component to the canvas's components array
        this.components.push(component);
        // Set the component's canvas property to this canvas
        component.canvas = this
        // Render the components
        this.render()
    }

    private render():void{
        // Clear the current canvas
        this.parent.innerHTML = '';
        // Loop through each component, build and place
        for (let component of this.components){
            let div = this.initializeComponentDiv(component);
            this.placeComponent(component, div);
        }
    }

    private initializeComponentDiv(component:Component):HTMLDivElement {
        let div = document.createElement('div');
        div.id = component.id
        const newStyle: Partial<CSSStyleDeclaration> = {
            margin: 'auto',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            padding: '3%',
            aspectRatio:'1 / 1'
        }
        // Set the div styling
        Object.assign(div.style, newStyle);
        // Set up the shape for the component
        Object.assign(div.style, component.shape.attributes);
        return div
    }

    private placeComponent(component:Component, div: HTMLDivElement):void {
        const newStyle: Partial<CSSStyleDeclaration> = {
            gridColumnStart: component.locationLeft.toString(),
            gridColumnEnd: "span " + component.width,
            gridRowStart: component.locationTop.toString(),
            gridRowEnd: "span " + component.height
        }
        Object.assign(div.style, newStyle);
        this.parent.append(div);
    }
}

