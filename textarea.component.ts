import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wtextarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent{
	@Input() model;
	@Input() label;
	@Input() placeholder;
	@Output() modelChange = new EventEmitter()
	
	constructor() {}
}
