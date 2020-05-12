import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'menuformatter'
})
export class MenuformatterPipe implements PipeTransform {
	transform(value: string): string {
		value = value.replace('-', ' ');
		return value;
	}
}
