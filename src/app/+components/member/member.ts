import { Component, inject } from '@angular/core';
import { Grid } from "../grid/grid";
import { MembersService } from './members-service';
import { MemberModel } from './Member.model';

@Component({
  selector: 'app-member',
  imports: [Grid],
  templateUrl: './member.html',
  styleUrl: './member.scss',
})
export class Member {

  memberService = inject(MembersService)
  members: MemberModel[]=this.memberService.list();

}
