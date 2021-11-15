import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IDetailPost } from "../../interfaces";

@Component({
  selector: "detail-user",
  templateUrl: "./detail-user.component.html",
  styleUrls: ["./detail-user.component.scss"],
})
export class DetailUserComponent implements OnInit {
  @Input() public model: IDetailPost | any;
  @Input() public hasOpen: boolean = false;

  @Output() public onClose: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  public closeSideBar() {
    this.onClose.emit();
  }
}
