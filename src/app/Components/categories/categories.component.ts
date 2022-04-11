import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() onChange = new EventEmitter<any>();
  categories = [];
  selectedCategories:string[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAvailableAbilities().subscribe((listAbilities:any) => {
      this.categories = listAbilities.map((ability: { habilidadePossivel: any; }) => {
        return ability.habilidadePossivel
      })
    })
  }

  toggleAbility(ability:string){
    let abilityPresent = this.selectedCategories.indexOf(ability)
    if(abilityPresent > -1){
      this.selectedCategories.splice(abilityPresent, 1)
    } else{
      this.selectedCategories.push(ability)
    }

    this.onChange.emit(this.selectedCategories);
  }

  isSelected(ability:string){
    let abilityPresent = this.selectedCategories.indexOf(ability)
    return abilityPresent > -1
  }

}
