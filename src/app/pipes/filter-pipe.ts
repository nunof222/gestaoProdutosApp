import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Domain/product';

@Pipe({
name: 'search',
pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: Product[], category: string) {
    if(!category){
      return value;
}
    console.log(category)
    return value.filter((product)=> product.category.toLowerCase() === category.toLowerCase())
    

    
    
}


}