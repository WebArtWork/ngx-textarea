import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wtextarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent{
	@Input() label;
	@Input() name;
	@Input() placeholder;
	@Input() disabled;
	@Input() wngModel;
	@Output()wngModelChange = new EventEmitter()

	constructor() {}
}
