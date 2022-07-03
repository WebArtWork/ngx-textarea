# ngx-textarea

## Installation

```sh
waw add ngx-textarea
```

## Usage
```
import { TextareaModule } from 'src/app/modules';
@NgModule({
	imports: [
		TextareaModule
	]
})

```
```html
<wtextarea disabled="true" ngDefaultControl [(ngModel)]="value.textarea" (ngModelChange)="test()" label="This is a label text for textarea" placeholder="This is a placeholder text for textarea"></wtextarea>
```
## Arguments
```
label: string | Displayed text
name: string | name textarea
model: string | Returns the input text
modelChange | Called when model changes
placeholder | Displayed input placeholder
name | Displayed input  name
disabled | Make input disabled
```


