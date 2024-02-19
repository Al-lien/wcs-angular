import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss',
})
export class DeveloperComponent {
  skillReact: Skill = new Skill(
    'React',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png?20231112063719',
    'https://fr.legacy.reactjs.org/'
  );

  skillAngular: Skill = new Skill(
    'Angular',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png?20160527092314',
    'https://angular.io/'
  );

  developerModel: Developer = new Developer(
    'alexis',
    'lienard',
    27,
    'programmer',
    'Quae, eum quasi ad omnis harum obcaecati !',
    [this.skillReact, this.skillAngular]
  );
}
